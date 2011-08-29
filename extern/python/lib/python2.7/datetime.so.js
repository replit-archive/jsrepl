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



var $0___SIZE = 80; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 48; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 156; // %4
  
var $5___SIZE = 196; // %5
  
var $6___SIZE = 80; // %6
  
var $7___SIZE = 20; // %7
  
var $8___SIZE = 240; // %8
  
var $9___SIZE = 156; // %9
  
var $10___SIZE = 96; // %10
  
var $11___SIZE = 120; // %11
  
var $12___SIZE = 144; // %12
  
var $13___SIZE = 320; // %13
  
var $14___SIZE = 80; // %14
  
var $15___SIZE = 8; // %15
  
var $16___SIZE = 192; // %16
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyDateTime_CAPI___SIZE = 44; // %struct.PyDateTime_CAPI
  
var $struct_PyDateTime_Date___SIZE = 20; // %struct.PyDateTime_Date
  var $struct_PyDateTime_Date___FLATTENER = [0,4,8,12,13];
var $struct_PyDateTime_DateTime___SIZE = 28; // %struct.PyDateTime_DateTime
  var $struct_PyDateTime_DateTime___FLATTENER = [0,4,8,12,13,24];
var $struct_PyDateTime_Delta___SIZE = 24; // %struct.PyDateTime_Delta
  
var $struct_PyDateTime_TZInfo___SIZE = 8; // %struct.PyDateTime_TZInfo
  
var $struct_PyDateTime_Time___SIZE = 24; // %struct.PyDateTime_Time
  var $struct_PyDateTime_Time___FLATTENER = [0,4,8,12,13,20];
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyStructSequence___SIZE = 16; // %struct.PyStructSequence
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__PyDateTime_BaseTZInfo___SIZE = 16; // %struct._PyDateTime_BaseTZInfo
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_fd_set___SIZE = 128; // %struct.fd_set
  
var $struct_timeb___SIZE = 12; // %struct.timeb
  var $struct_timeb___FLATTENER = [0,4,6,8];
var $struct_timeval___SIZE = 8; // %struct.timeval
  
var $struct_tm___SIZE = 44; // %struct.tm
  
var __str;
var __str1;
var ___PRETTY_FUNCTION___8440;
var __str2;
var __days_in_month;
var __days_before_month;
var __str3;
var ___PRETTY_FUNCTION___8488;
var __str4;
var ___PRETTY_FUNCTION___8505;
var __str5;
var ___PRETTY_FUNCTION___8522;
var __str6;
var __str7;
var ___PRETTY_FUNCTION___8550;
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
var ___PRETTY_FUNCTION___8694;
var __str21;
var __str22;
var __str23;
var __str24;
var ___PRETTY_FUNCTION___8725;
var __str25;
var __str26;
var ___PRETTY_FUNCTION___8752;
var __str27;
var __str28;
var __str29;

var __str30;
var ___PRETTY_FUNCTION___8976;
var __str31;

var __str32;
var __str33;
var ___PRETTY_FUNCTION___9023;
var __str34;
var __str35;
var __str36;
var ___PRETTY_FUNCTION___9075;
var __str37;
var __str38;
var __str39;
var __str40;
var __str41;
var __str42;
var __str43;
var ___PRETTY_FUNCTION___9150;
var __str44;
var ___PRETTY_FUNCTION___9191;
var __str45;
var __str46;
var ___PRETTY_FUNCTION___9239;
var __str47;
var ___PRETTY_FUNCTION___9306;
var __str48;
var __str49;
var __str50;
var __str51;
var _MonthNames_9355;
var __str52;
var __str53;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
var __str61;
var __str62;
var __str63;
var _DayNames_9354;
var __str64;
var __str65;
var __str66;
var __str67;
var __str68;
var __str69;
var __str70;
var __str71;
var __str72;
var ___PRETTY_FUNCTION___9398;
var __str73;
var __str74;
var __str75;
var ___PRETTY_FUNCTION___9485;
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
var __str89;
var __str90;
var __str91;
var __str92;
var __str93;
var __str94;
var __str95;
var __str96;
var ___PRETTY_FUNCTION___9722;
var __str97;
var ___PRETTY_FUNCTION___9746;
var __str98;
var __str99;
var __str100;
var __str101;
var __str102;
var ___PRETTY_FUNCTION___9835;


var __str103;
var _us_per_us;
var _us_per_ms;
var _us_per_second;
var _us_per_minute;
var _us_per_hour;
var _us_per_day;
var _us_per_week;
var _seconds_per_day;
var __str104;
var ___PRETTY_FUNCTION___9958;
var __str105;
var __str106;
var __str107;

var __str108;
var ___PRETTY_FUNCTION___10169;
var __str109;
var __str110;
var ___PRETTY_FUNCTION___10356;

var __str111;
var __str112;
var __str113;
var _keywords_10491;
var __str114;
var __str115;
var __str116;
var __str117;
var __str118;
var __str119;
var __str120;
var __str121;
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
var __str132;
var _delta_members;
var __str133;
var __str134;
var __str135;
var __str136;
var _delta_methods;
var _delta_doc;
var _delta_as_number;
var __str137;
var _PyDateTime_DeltaType;
var __str138;
var __str139;
var __str140;
var _date_getset;
var _date_kws;
var __str141;
var __str142;
var __str143;
var __str144;
var __str145;
var __str146;
var __str147;
var _keywords_11164;
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
var _date_methods;
var _date_doc;
var _date_as_number;
var __str176;
var _PyDateTime_DateType;

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
var _tzinfo_methods;
var _tzinfo_doc;
var __str192;
var _PyDateTime_TZInfoType;
var __str193;
var __str194;
var __str195;
var __str196;
var _time_getset;
var _time_kws;
var __str197;
var __str198;
var __str199;
var __str200;
var _keywords_12042;
var __str201;
var __str202;
var ___PRETTY_FUNCTION___12043;
var __str203;
var ___PRETTY_FUNCTION___12084;
var __str204;
var __str205;
var __str206;
var __str207;
var ___PRETTY_FUNCTION___12202;
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
var _time_methods;
var _time_doc;
var _time_as_number;
var __str218;
var _PyDateTime_TimeType;
var _datetime_getset;
var _datetime_kws;
var __str219;
var __str220;
var __str221;
var __str222;
var _keywords_12654;
var __str223;
var __str224;
var _keywords_12701;
var __str225;
var __str226;
var __str227;
var _module_12751;
var __str228;
var __str229;
var __str230;
var __str231;
var _keywords_12871;
var __str232;
var __str233;
var ___PRETTY_FUNCTION___13012;
var ___PRETTY_FUNCTION___13120;
var __str234;
var __str235;
var __str236;
var __str237;
var __str238;
var __str239;
var __str240;
var _keywords_13363;
var __str241;
var __str242;
var ___PRETTY_FUNCTION___13367;
var ___PRETTY_FUNCTION___13435;
var __str243;
var ___PRETTY_FUNCTION___13531;
var __str244;
var __str245;
var _keywords_13698;
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
var _datetime_methods;
var _datetime_doc;
var _datetime_as_number;
var __str268;
var _PyDateTime_DateTimeType;
var _module_methods;
var _CAPI;
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
var ___PRETTY_FUNCTION___14028;
var __str280;
var __str281;
var __str282;

var _time_doc283;
var _clock_doc;
var __str1284;
var _sleep_doc;
var __str2285;
var __str3286;
var __str4287;
var __str5288;
var __str6289;
var __str7290;
var __str8291;
var __str9292;
var __str10293;
var __str11294;
var __str12295;
var __str13296;
var __str14297;
var __str15298;
var __str16299;
var __str17300;
var __str18301;
var __str19302;
var _struct_time_type_fields;
var _struct_time_type_desc;
var __str20303;
var __str21304;
var _StructTimeType;
var __str22305;
var _gmtime_doc;
var __str23306;
var _localtime_doc;
var __str24307;
var _moddict;
var __str25308;
var __str26309;
var __str27310;
var __str28311;
var __str29312;
var __str30313;
var __str31314;
var __str32315;
var __str33316;
var __str34317;
var __str35318;
var _strftime_doc;
var __str37320;
var _strptime_doc;
var __str39322;
var __str40323;
var _asctime_doc;
var __str42325;
var _ctime_doc;
var __str43326;
var _mktime_doc;
var _tzset_doc;
var __str45328;
var __str46329;
var __str47330;
var __str48331;
var __str49332;
var __str51334;
var __str52335;
var __str53336;
var __str54337;
var __str55338;
var __str58341;
var _time_methods342;
var _module_doc;

var __str59343;
var _initialized_b;




































































































  function _divmod($x, $y, $r) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $y_addr;
        var $r_addr;
        var $retval;
        var $0;
        var $quo;
        $x_addr=$x;
        $y_addr=$y;
        $r_addr=$r;
        var $1=$y_addr; //@line 133 "datetimemodule.c"
        var $2=($1) <= 0; //@line 133 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 133 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str, __str1, 133, ___PRETTY_FUNCTION___8440); //@line 133 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 133 "datetimemodule.c"
      case 2: // $bb1
        var $3=$x_addr; //@line 134 "datetimemodule.c"
        var $4=$y_addr; //@line 134 "datetimemodule.c"
        var $5=((($3)/($4))|0); //@line 134 "datetimemodule.c"
        $quo=$5; //@line 134 "datetimemodule.c"
        var $6=$quo; //@line 135 "datetimemodule.c"
        var $7=$y_addr; //@line 135 "datetimemodule.c"
        var $8=($7) * ($6); //@line 135 "datetimemodule.c"
        var $9=$x_addr; //@line 135 "datetimemodule.c"
        var $10=($9) - ($8); //@line 135 "datetimemodule.c"
        var $11=$r_addr; //@line 135 "datetimemodule.c"
        HEAP[$11]=$10; //@line 135 "datetimemodule.c"
        var $12=$r_addr; //@line 136 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 136 "datetimemodule.c"
        var $14=($13) < 0; //@line 136 "datetimemodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 136 "datetimemodule.c"
      case 3: // $bb2
        var $15=$quo; //@line 137 "datetimemodule.c"
        var $16=($15) - 1; //@line 137 "datetimemodule.c"
        $quo=$16; //@line 137 "datetimemodule.c"
        var $17=$r_addr; //@line 138 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 138 "datetimemodule.c"
        var $19=$y_addr; //@line 138 "datetimemodule.c"
        var $20=($19) + ($18); //@line 138 "datetimemodule.c"
        var $21=$r_addr; //@line 138 "datetimemodule.c"
        HEAP[$21]=$20; //@line 138 "datetimemodule.c"
        __label__ = 4; break; //@line 138 "datetimemodule.c"
      case 4: // $bb3
        var $22=$r_addr; //@line 140 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 140 "datetimemodule.c"
        var $24=($23) < 0; //@line 140 "datetimemodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 140 "datetimemodule.c"
      case 5: // $bb4
        var $25=$r_addr; //@line 140 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 140 "datetimemodule.c"
        var $27=$y_addr; //@line 140 "datetimemodule.c"
        var $28=($26) >= ($27); //@line 140 "datetimemodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 140 "datetimemodule.c"
      case 6: // $bb5
        ___assert_fail(__str2, __str1, 140, ___PRETTY_FUNCTION___8440); //@line 140 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 140 "datetimemodule.c"
      case 7: // $bb6
        var $29=$quo; //@line 141 "datetimemodule.c"
        $0=$29; //@line 141 "datetimemodule.c"
        var $30=$0; //@line 141 "datetimemodule.c"
        $retval=$30; //@line 141 "datetimemodule.c"
        var $retval7=$retval; //@line 141 "datetimemodule.c"
        ;
        return $retval7; //@line 141 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _round_to_long($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        $x_addr=$x;
        var $1=$x_addr; //@line 150 "datetimemodule.c"
        var $2=($1) >= 0; //@line 150 "datetimemodule.c"
        var $3=$x_addr; //@line 151 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "datetimemodule.c"
      case 1: // $bb
        var $4=($3) + 0.5; //@line 151 "datetimemodule.c"
        var $5=_floor($4); //@line 151 "datetimemodule.c"
        $x_addr=$5; //@line 151 "datetimemodule.c"
        __label__ = 3; break; //@line 151 "datetimemodule.c"
      case 2: // $bb1
        var $6=($3) - 0.5; //@line 153 "datetimemodule.c"
        var $7=_ceil($6); //@line 153 "datetimemodule.c"
        $x_addr=$7; //@line 153 "datetimemodule.c"
        __label__ = 3; break; //@line 153 "datetimemodule.c"
      case 3: // $bb2
        var $8=$x_addr; //@line 154 "datetimemodule.c"
        var $9=((($8))|0); //@line 154 "datetimemodule.c"
        $0=$9; //@line 154 "datetimemodule.c"
        var $10=$0; //@line 154 "datetimemodule.c"
        $retval=$10; //@line 154 "datetimemodule.c"
        var $retval3=$retval; //@line 154 "datetimemodule.c"
        ;
        return $retval3; //@line 154 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_leap($year) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $retval;
        var $iftmp_0;
        var $0;
        var $ayear;
        $year_addr=$year;
        var $1=$year_addr; //@line 184 "datetimemodule.c"
        $ayear=$1; //@line 184 "datetimemodule.c"
        var $2=$ayear; //@line 185 "datetimemodule.c"
        var $3=($2) & 3; //@line 185 "datetimemodule.c"
        var $4=($3)!=0; //@line 185 "datetimemodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 185 "datetimemodule.c"
      case 1: // $bb
        var $5=$ayear; //@line 185 "datetimemodule.c"
        var $6=($5) % 100; //@line 185 "datetimemodule.c"
        var $7=($6)!=0; //@line 185 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 185 "datetimemodule.c"
      case 2: // $bb1
        var $8=$ayear; //@line 185 "datetimemodule.c"
        var $9=($8) % 400; //@line 185 "datetimemodule.c"
        var $10=($9)==0; //@line 185 "datetimemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 185 "datetimemodule.c"
      case 3: // $bb2
        $iftmp_0=1; //@line 185 "datetimemodule.c"
        __label__ = 5; break; //@line 185 "datetimemodule.c"
      case 4: // $bb3
        $iftmp_0=0; //@line 185 "datetimemodule.c"
        __label__ = 5; break; //@line 185 "datetimemodule.c"
      case 5: // $bb4
        var $11=$iftmp_0; //@line 185 "datetimemodule.c"
        $0=$11; //@line 185 "datetimemodule.c"
        var $12=$0; //@line 185 "datetimemodule.c"
        $retval=$12; //@line 185 "datetimemodule.c"
        var $retval5=$retval; //@line 185 "datetimemodule.c"
        ;
        return $retval5; //@line 185 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _days_in_month($year, $month) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $month_addr;
        var $retval;
        var $0;
        $year_addr=$year;
        $month_addr=$month;
        var $1=$month_addr; //@line 192 "datetimemodule.c"
        var $2=($1) <= 0; //@line 192 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 192 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str3, __str1, 192, ___PRETTY_FUNCTION___8488); //@line 192 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 192 "datetimemodule.c"
      case 2: // $bb1
        var $3=$month_addr; //@line 193 "datetimemodule.c"
        var $4=($3) > 12; //@line 193 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 193 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str4, __str1, 193, ___PRETTY_FUNCTION___8488); //@line 193 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 193 "datetimemodule.c"
      case 4: // $bb3
        var $5=$month_addr; //@line 194 "datetimemodule.c"
        var $6=($5)!=2; //@line 194 "datetimemodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 194 "datetimemodule.c"
      case 5: // $bb4
        var $7=$year_addr; //@line 194 "datetimemodule.c"
        var $8=_is_leap($7); //@line 194 "datetimemodule.c"
        var $9=($8)==0; //@line 194 "datetimemodule.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 194 "datetimemodule.c"
      case 6: // $bb5
        $0=29; //@line 195 "datetimemodule.c"
        __label__ = 8; break; //@line 195 "datetimemodule.c"
      case 7: // $bb6
        var $10=$month_addr; //@line 197 "datetimemodule.c"
        var $11=__days_in_month+$10*4; //@line 197 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 197 "datetimemodule.c"
        $0=$12; //@line 197 "datetimemodule.c"
        __label__ = 8; break; //@line 197 "datetimemodule.c"
      case 8: // $bb7
        var $13=$0; //@line 195 "datetimemodule.c"
        $retval=$13; //@line 195 "datetimemodule.c"
        var $retval8=$retval; //@line 195 "datetimemodule.c"
        ;
        return $retval8; //@line 195 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _days_before_month($year, $month) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $month_addr;
        var $retval;
        var $0;
        var $days;
        $year_addr=$year;
        $month_addr=$month;
        var $1=$month_addr; //@line 206 "datetimemodule.c"
        var $2=($1) <= 0; //@line 206 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 206 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str3, __str1, 206, ___PRETTY_FUNCTION___8505); //@line 206 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 206 "datetimemodule.c"
      case 2: // $bb1
        var $3=$month_addr; //@line 207 "datetimemodule.c"
        var $4=($3) > 12; //@line 207 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 207 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str4, __str1, 207, ___PRETTY_FUNCTION___8505); //@line 207 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 207 "datetimemodule.c"
      case 4: // $bb3
        var $5=$month_addr; //@line 208 "datetimemodule.c"
        var $6=__days_before_month+$5*4; //@line 208 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 208 "datetimemodule.c"
        $days=$7; //@line 208 "datetimemodule.c"
        var $8=$month_addr; //@line 209 "datetimemodule.c"
        var $9=($8) > 2; //@line 209 "datetimemodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 209 "datetimemodule.c"
      case 5: // $bb4
        var $10=$year_addr; //@line 209 "datetimemodule.c"
        var $11=_is_leap($10); //@line 209 "datetimemodule.c"
        var $12=($11)!=0; //@line 209 "datetimemodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 209 "datetimemodule.c"
      case 6: // $bb5
        var $13=$days; //@line 210 "datetimemodule.c"
        var $14=($13) + 1; //@line 210 "datetimemodule.c"
        $days=$14; //@line 210 "datetimemodule.c"
        __label__ = 7; break; //@line 210 "datetimemodule.c"
      case 7: // $bb6
        var $15=$days; //@line 211 "datetimemodule.c"
        $0=$15; //@line 211 "datetimemodule.c"
        var $16=$0; //@line 211 "datetimemodule.c"
        $retval=$16; //@line 211 "datetimemodule.c"
        var $retval7=$retval; //@line 211 "datetimemodule.c"
        ;
        return $retval7; //@line 211 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _days_before_year($year) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $retval;
        var $0;
        var $y;
        $year_addr=$year;
        var $1=$year_addr; //@line 220 "datetimemodule.c"
        var $2=($1) - 1; //@line 220 "datetimemodule.c"
        $y=$2; //@line 220 "datetimemodule.c"
        var $3=$year_addr; //@line 226 "datetimemodule.c"
        var $4=($3) < 0; //@line 226 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 226 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str5, __str1, 226, ___PRETTY_FUNCTION___8522); //@line 226 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 226 "datetimemodule.c"
      case 2: // $bb1
        var $5=$y; //@line 227 "datetimemodule.c"
        var $6=($5) >= 0; //@line 227 "datetimemodule.c"
        var $7=$y; //@line 228 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 227 "datetimemodule.c"
      case 3: // $bb2
        var $8=($7) * 365; //@line 228 "datetimemodule.c"
        var $9=$y; //@line 228 "datetimemodule.c"
        var $10=((($9)/4)|0); //@line 228 "datetimemodule.c"
        var $11=$y; //@line 228 "datetimemodule.c"
        var $12=((($11)/100)|0); //@line 228 "datetimemodule.c"
        var $_neg=0 - ($12);
        var $13=$y; //@line 228 "datetimemodule.c"
        var $14=((($13)/400)|0); //@line 228 "datetimemodule.c"
        var $15=($10) + ($8); //@line 228 "datetimemodule.c"
        var $16=($15) + ($_neg);
        var $17=($16) + ($14); //@line 228 "datetimemodule.c"
        $0=$17; //@line 228 "datetimemodule.c"
        __label__ = 7; break; //@line 228 "datetimemodule.c"
      case 4: // $bb3
        var $18=($7)!=-1; //@line 230 "datetimemodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 230 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str6, __str1, 230, ___PRETTY_FUNCTION___8522); //@line 230 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 230 "datetimemodule.c"
      case 6: // $bb5
        $0=-366; //@line 231 "datetimemodule.c"
        __label__ = 7; break; //@line 231 "datetimemodule.c"
      case 7: // $bb6
        var $19=$0; //@line 228 "datetimemodule.c"
        $retval=$19; //@line 228 "datetimemodule.c"
        var $retval7=$retval; //@line 228 "datetimemodule.c"
        ;
        return $retval7; //@line 228 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ord_to_ymd($ordinal, $year, $month, $day) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ordinal_addr;
        var $year_addr;
        var $month_addr;
        var $day_addr;
        var $iftmp_4;
        var $iftmp_3;
        var $n;
        var $n1;
        var $n4;
        var $n100;
        var $n400;
        var $leapyear;
        var $preceding;
        $ordinal_addr=$ordinal;
        $year_addr=$year;
        $month_addr=$month;
        $day_addr=$day;
        var $0=$ordinal_addr; //@line 270 "datetimemodule.c"
        var $1=($0) <= 0; //@line 270 "datetimemodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 270 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str7, __str1, 270, ___PRETTY_FUNCTION___8550); //@line 270 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 270 "datetimemodule.c"
      case 2: // $bb1
        var $2=$ordinal_addr; //@line 271 "datetimemodule.c"
        var $3=($2) - 1; //@line 271 "datetimemodule.c"
        $ordinal_addr=$3; //@line 271 "datetimemodule.c"
        var $4=$ordinal_addr; //@line 272 "datetimemodule.c"
        var $5=((($4)/146097)|0); //@line 272 "datetimemodule.c"
        $n400=$5; //@line 272 "datetimemodule.c"
        var $6=$ordinal_addr; //@line 273 "datetimemodule.c"
        var $7=($6) % 146097; //@line 273 "datetimemodule.c"
        $n=$7; //@line 273 "datetimemodule.c"
        var $8=$n400; //@line 274 "datetimemodule.c"
        var $9=($8) * 400; //@line 274 "datetimemodule.c"
        var $10=($9) + 1; //@line 274 "datetimemodule.c"
        var $11=$year_addr; //@line 274 "datetimemodule.c"
        HEAP[$11]=$10; //@line 274 "datetimemodule.c"
        var $12=$n; //@line 283 "datetimemodule.c"
        var $13=((($12)/36524)|0); //@line 283 "datetimemodule.c"
        $n100=$13; //@line 283 "datetimemodule.c"
        var $14=$n; //@line 284 "datetimemodule.c"
        var $15=($14) % 36524; //@line 284 "datetimemodule.c"
        $n=$15; //@line 284 "datetimemodule.c"
        var $16=$n; //@line 287 "datetimemodule.c"
        var $17=((($16)/1461)|0); //@line 287 "datetimemodule.c"
        $n4=$17; //@line 287 "datetimemodule.c"
        var $18=$n; //@line 288 "datetimemodule.c"
        var $19=($18) % 1461; //@line 288 "datetimemodule.c"
        $n=$19; //@line 288 "datetimemodule.c"
        var $20=$n; //@line 294 "datetimemodule.c"
        var $21=((($20)/365)|0); //@line 294 "datetimemodule.c"
        $n1=$21; //@line 294 "datetimemodule.c"
        var $22=$n; //@line 295 "datetimemodule.c"
        var $23=($22) % 365; //@line 295 "datetimemodule.c"
        $n=$23; //@line 295 "datetimemodule.c"
        var $24=$year_addr; //@line 297 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 297 "datetimemodule.c"
        var $26=$n100; //@line 297 "datetimemodule.c"
        var $27=($26) * 25; //@line 297 "datetimemodule.c"
        var $28=$n4; //@line 297 "datetimemodule.c"
        var $29=($27) + ($28); //@line 297 "datetimemodule.c"
        var $30=($29) * 4; //@line 297 "datetimemodule.c"
        var $31=$n1; //@line 297 "datetimemodule.c"
        var $32=($31) + ($25); //@line 297 "datetimemodule.c"
        var $33=($32) + ($30); //@line 297 "datetimemodule.c"
        var $34=$year_addr; //@line 297 "datetimemodule.c"
        HEAP[$34]=$33; //@line 297 "datetimemodule.c"
        var $35=$n1; //@line 298 "datetimemodule.c"
        var $36=($35)==4; //@line 298 "datetimemodule.c"
        if ($36) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 298 "datetimemodule.c"
      case 3: // $bb2
        var $37=$n100; //@line 298 "datetimemodule.c"
        var $38=($37)==4; //@line 298 "datetimemodule.c"
        if ($38) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 298 "datetimemodule.c"
      case 4: // $bb3
        var $39=$n; //@line 299 "datetimemodule.c"
        var $40=($39)!=0; //@line 299 "datetimemodule.c"
        if ($40) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 299 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str8, __str1, 299, ___PRETTY_FUNCTION___8550); //@line 299 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 299 "datetimemodule.c"
      case 6: // $bb5
        var $41=$year_addr; //@line 300 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 300 "datetimemodule.c"
        var $43=($42) - 1; //@line 300 "datetimemodule.c"
        var $44=$year_addr; //@line 300 "datetimemodule.c"
        HEAP[$44]=$43; //@line 300 "datetimemodule.c"
        var $45=$month_addr; //@line 301 "datetimemodule.c"
        HEAP[$45]=12; //@line 301 "datetimemodule.c"
        var $46=$day_addr; //@line 302 "datetimemodule.c"
        HEAP[$46]=31; //@line 302 "datetimemodule.c"
        __label__ = 25; break; //@line 302 "datetimemodule.c"
      case 7: // $bb6
        var $47=$n1; //@line 310 "datetimemodule.c"
        var $48=($47)!=3; //@line 310 "datetimemodule.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 310 "datetimemodule.c"
      case 8: // $bb7
        var $49=$n4; //@line 310 "datetimemodule.c"
        var $50=($49)!=24; //@line 310 "datetimemodule.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 310 "datetimemodule.c"
      case 9: // $bb8
        var $51=$n100; //@line 310 "datetimemodule.c"
        var $52=($51)==3; //@line 310 "datetimemodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 310 "datetimemodule.c"
      case 10: // $bb9
        $iftmp_3=1; //@line 310 "datetimemodule.c"
        __label__ = 12; break; //@line 310 "datetimemodule.c"
      case 11: // $bb10
        $iftmp_3=0; //@line 310 "datetimemodule.c"
        __label__ = 12; break; //@line 310 "datetimemodule.c"
      case 12: // $bb11
        var $53=$iftmp_3; //@line 310 "datetimemodule.c"
        $leapyear=$53; //@line 310 "datetimemodule.c"
        var $54=$year_addr; //@line 311 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 311 "datetimemodule.c"
        var $56=_is_leap($55); //@line 311 "datetimemodule.c"
        var $57=$leapyear; //@line 311 "datetimemodule.c"
        var $58=($56)!=($57); //@line 311 "datetimemodule.c"
        if ($58) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 311 "datetimemodule.c"
      case 13: // $bb12
        ___assert_fail(__str9, __str1, 311, ___PRETTY_FUNCTION___8550); //@line 311 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 311 "datetimemodule.c"
      case 14: // $bb13
        var $59=$n; //@line 312 "datetimemodule.c"
        var $60=($59) + 50; //@line 312 "datetimemodule.c"
        var $61=($60) >> 5; //@line 312 "datetimemodule.c"
        var $62=$month_addr; //@line 312 "datetimemodule.c"
        HEAP[$62]=$61; //@line 312 "datetimemodule.c"
        var $63=$month_addr; //@line 313 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 313 "datetimemodule.c"
        var $65=__days_before_month+$64*4; //@line 313 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 313 "datetimemodule.c"
        var $67=$month_addr; //@line 313 "datetimemodule.c"
        var $68=HEAP[$67]; //@line 313 "datetimemodule.c"
        var $69=($68) <= 2; //@line 313 "datetimemodule.c"
        if ($69) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 313 "datetimemodule.c"
      case 15: // $bb14
        var $70=$leapyear; //@line 313 "datetimemodule.c"
        var $71=($70)==0; //@line 313 "datetimemodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 313 "datetimemodule.c"
      case 16: // $bb15
        $iftmp_4=1; //@line 313 "datetimemodule.c"
        __label__ = 18; break; //@line 313 "datetimemodule.c"
      case 17: // $bb16
        $iftmp_4=0; //@line 313 "datetimemodule.c"
        __label__ = 18; break; //@line 313 "datetimemodule.c"
      case 18: // $bb17
        var $72=$iftmp_4; //@line 313 "datetimemodule.c"
        var $73=($72) + ($66); //@line 313 "datetimemodule.c"
        $preceding=$73; //@line 313 "datetimemodule.c"
        var $74=$preceding; //@line 314 "datetimemodule.c"
        var $75=$n; //@line 314 "datetimemodule.c"
        var $76=($74) > ($75); //@line 314 "datetimemodule.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 314 "datetimemodule.c"
      case 19: // $bb18
        var $77=$month_addr; //@line 316 "datetimemodule.c"
        var $78=HEAP[$77]; //@line 316 "datetimemodule.c"
        var $79=($78) - 1; //@line 316 "datetimemodule.c"
        var $80=$month_addr; //@line 316 "datetimemodule.c"
        HEAP[$80]=$79; //@line 316 "datetimemodule.c"
        var $81=$month_addr; //@line 317 "datetimemodule.c"
        var $82=HEAP[$81]; //@line 317 "datetimemodule.c"
        var $83=$year_addr; //@line 317 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 317 "datetimemodule.c"
        var $85=_days_in_month($84, $82); //@line 317 "datetimemodule.c"
        var $86=$preceding; //@line 317 "datetimemodule.c"
        var $87=($86) - ($85); //@line 317 "datetimemodule.c"
        $preceding=$87; //@line 317 "datetimemodule.c"
        __label__ = 20; break; //@line 317 "datetimemodule.c"
      case 20: // $bb19
        var $88=$n; //@line 319 "datetimemodule.c"
        var $89=$preceding; //@line 319 "datetimemodule.c"
        var $90=($88) - ($89); //@line 319 "datetimemodule.c"
        $n=$90; //@line 319 "datetimemodule.c"
        var $91=($90) < 0; //@line 320 "datetimemodule.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 320 "datetimemodule.c"
      case 21: // $bb20
        ___assert_fail(__str10, __str1, 320, ___PRETTY_FUNCTION___8550); //@line 320 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 320 "datetimemodule.c"
      case 22: // $bb21
        var $92=$month_addr; //@line 321 "datetimemodule.c"
        var $93=HEAP[$92]; //@line 321 "datetimemodule.c"
        var $94=$year_addr; //@line 321 "datetimemodule.c"
        var $95=HEAP[$94]; //@line 321 "datetimemodule.c"
        var $96=_days_in_month($95, $93); //@line 321 "datetimemodule.c"
        var $97=$n; //@line 321 "datetimemodule.c"
        var $98=($96) <= ($97); //@line 321 "datetimemodule.c"
        if ($98) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 321 "datetimemodule.c"
      case 23: // $bb22
        ___assert_fail(__str11, __str1, 321, ___PRETTY_FUNCTION___8550); //@line 321 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 321 "datetimemodule.c"
      case 24: // $bb23
        var $99=$n; //@line 323 "datetimemodule.c"
        var $100=($99) + 1; //@line 323 "datetimemodule.c"
        var $101=$day_addr; //@line 323 "datetimemodule.c"
        HEAP[$101]=$100; //@line 323 "datetimemodule.c"
        __label__ = 25; break; //@line 323 "datetimemodule.c"
      case 25: // $return
        ;
        return; //@line 303 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ymd_to_ord($year, $month, $day) {
    ;
    var __label__;
  
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr=$year;
    $month_addr=$month;
    $day_addr=$day;
    var $1=$year_addr; //@line 330 "datetimemodule.c"
    var $2=_days_before_year($1); //@line 330 "datetimemodule.c"
    var $3=$year_addr; //@line 330 "datetimemodule.c"
    var $4=$month_addr; //@line 330 "datetimemodule.c"
    var $5=_days_before_month($3, $4); //@line 330 "datetimemodule.c"
    var $6=$day_addr; //@line 330 "datetimemodule.c"
    var $7=($5) + ($2); //@line 330 "datetimemodule.c"
    var $8=($7) + ($6); //@line 330 "datetimemodule.c"
    $0=$8; //@line 330 "datetimemodule.c"
    var $9=$0; //@line 330 "datetimemodule.c"
    $retval=$9; //@line 330 "datetimemodule.c"
    var $retval1=$retval; //@line 330 "datetimemodule.c"
    ;
    return $retval1; //@line 330 "datetimemodule.c"
  }
  

  function _weekday($year, $month, $day) {
    ;
    var __label__;
  
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr=$year;
    $month_addr=$month;
    $day_addr=$day;
    var $1=$year_addr; //@line 337 "datetimemodule.c"
    var $2=$month_addr; //@line 337 "datetimemodule.c"
    var $3=$day_addr; //@line 337 "datetimemodule.c"
    var $4=_ymd_to_ord($1, $2, $3); //@line 337 "datetimemodule.c"
    var $5=($4) + 6; //@line 337 "datetimemodule.c"
    var $6=($5) % 7; //@line 337 "datetimemodule.c"
    $0=$6; //@line 337 "datetimemodule.c"
    var $7=$0; //@line 337 "datetimemodule.c"
    $retval=$7; //@line 337 "datetimemodule.c"
    var $retval1=$retval; //@line 337 "datetimemodule.c"
    ;
    return $retval1; //@line 337 "datetimemodule.c"
  }
  

  function _iso_week1_monday($year) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $retval;
        var $0;
        var $first_day;
        var $first_weekday;
        var $week1_monday;
        $year_addr=$year;
        var $1=$year_addr; //@line 346 "datetimemodule.c"
        var $2=_ymd_to_ord($1, 1, 1); //@line 346 "datetimemodule.c"
        $first_day=$2; //@line 346 "datetimemodule.c"
        var $3=$first_day; //@line 348 "datetimemodule.c"
        var $4=($3) + 6; //@line 348 "datetimemodule.c"
        var $5=($4) % 7; //@line 348 "datetimemodule.c"
        $first_weekday=$5; //@line 348 "datetimemodule.c"
        var $6=$first_day; //@line 350 "datetimemodule.c"
        var $7=$first_weekday; //@line 350 "datetimemodule.c"
        var $8=($6) - ($7); //@line 350 "datetimemodule.c"
        $week1_monday=$8; //@line 350 "datetimemodule.c"
        var $9=$first_weekday; //@line 352 "datetimemodule.c"
        var $10=($9) > 3; //@line 352 "datetimemodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 352 "datetimemodule.c"
      case 1: // $bb
        var $11=$week1_monday; //@line 353 "datetimemodule.c"
        var $12=($11) + 7; //@line 353 "datetimemodule.c"
        $week1_monday=$12; //@line 353 "datetimemodule.c"
        __label__ = 2; break; //@line 353 "datetimemodule.c"
      case 2: // $bb1
        var $13=$week1_monday; //@line 354 "datetimemodule.c"
        $0=$13; //@line 354 "datetimemodule.c"
        var $14=$0; //@line 354 "datetimemodule.c"
        $retval=$14; //@line 354 "datetimemodule.c"
        var $retval2=$retval; //@line 354 "datetimemodule.c"
        ;
        return $retval2; //@line 354 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_delta_day_range($days) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $days_addr;
        var $retval;
        var $0;
        $days_addr=$days;
        var $1=$days_addr; //@line 367 "datetimemodule.c"
        var $2=($1) >= -999999999; //@line 367 "datetimemodule.c"
        var $3=$days_addr; //@line 367 "datetimemodule.c"
        var $4=($3) <= 999999999; //@line 367 "datetimemodule.c"
        var $or_cond=($2) & ($4);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 367 "datetimemodule.c"
      case 1: // $bb1
        $0=0; //@line 368 "datetimemodule.c"
        __label__ = 3; break; //@line 368 "datetimemodule.c"
      case 2: // $bb2
        var $5=HEAP[_PyExc_OverflowError]; //@line 369 "datetimemodule.c"
        var $6=$days_addr; //@line 369 "datetimemodule.c"
        var $7=_PyErr_Format($5, __str12, allocate([$6,0,0,0,999999999,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 369 "datetimemodule.c"
        $0=-1; //@line 372 "datetimemodule.c"
        __label__ = 3; break; //@line 372 "datetimemodule.c"
      case 3: // $bb3
        var $8=$0; //@line 368 "datetimemodule.c"
        $retval=$8; //@line 368 "datetimemodule.c"
        var $retval4=$retval; //@line 368 "datetimemodule.c"
        ;
        return $retval4; //@line 368 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_date_args($year, $month, $day) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $month_addr;
        var $day_addr;
        var $retval;
        var $0;
        $year_addr=$year;
        $month_addr=$month;
        $day_addr=$day;
        var $1=$year_addr; //@line 382 "datetimemodule.c"
        var $2=($1) <= 0; //@line 382 "datetimemodule.c"
        var $3=$year_addr; //@line 382 "datetimemodule.c"
        var $4=($3) > 9999; //@line 382 "datetimemodule.c"
        var $or_cond=($2) | ($4);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 382 "datetimemodule.c"
      case 1: // $bb1
        var $5=HEAP[_PyExc_ValueError]; //@line 383 "datetimemodule.c"
        _PyErr_SetString($5, __str13); //@line 383 "datetimemodule.c"
        $0=-1; //@line 385 "datetimemodule.c"
        __label__ = 8; break; //@line 385 "datetimemodule.c"
      case 2: // $bb2
        var $6=$month_addr; //@line 387 "datetimemodule.c"
        var $7=($6) <= 0; //@line 387 "datetimemodule.c"
        var $8=$month_addr; //@line 387 "datetimemodule.c"
        var $9=($8) > 12; //@line 387 "datetimemodule.c"
        var $or_cond3=($7) | ($9);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 387 "datetimemodule.c"
      case 3: // $bb4
        var $10=HEAP[_PyExc_ValueError]; //@line 388 "datetimemodule.c"
        _PyErr_SetString($10, __str14); //@line 388 "datetimemodule.c"
        $0=-1; //@line 390 "datetimemodule.c"
        __label__ = 8; break; //@line 390 "datetimemodule.c"
      case 4: // $bb5
        var $11=$day_addr; //@line 392 "datetimemodule.c"
        var $12=($11) <= 0; //@line 392 "datetimemodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 392 "datetimemodule.c"
      case 5: // $bb6
        var $13=$year_addr; //@line 392 "datetimemodule.c"
        var $14=$month_addr; //@line 392 "datetimemodule.c"
        var $15=_days_in_month($13, $14); //@line 392 "datetimemodule.c"
        var $16=$day_addr; //@line 392 "datetimemodule.c"
        var $17=($15) < ($16); //@line 392 "datetimemodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 392 "datetimemodule.c"
      case 6: // $bb7
        var $18=HEAP[_PyExc_ValueError]; //@line 393 "datetimemodule.c"
        _PyErr_SetString($18, __str15); //@line 393 "datetimemodule.c"
        $0=-1; //@line 395 "datetimemodule.c"
        __label__ = 8; break; //@line 395 "datetimemodule.c"
      case 7: // $bb8
        $0=0; //@line 397 "datetimemodule.c"
        __label__ = 8; break; //@line 397 "datetimemodule.c"
      case 8: // $bb9
        var $19=$0; //@line 385 "datetimemodule.c"
        $retval=$19; //@line 385 "datetimemodule.c"
        var $retval10=$retval; //@line 385 "datetimemodule.c"
        ;
        return $retval10; //@line 385 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_time_args($h, $m, $s, $us) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $h_addr;
        var $m_addr;
        var $s_addr;
        var $us_addr;
        var $retval;
        var $0;
        $h_addr=$h;
        $m_addr=$m;
        $s_addr=$s;
        $us_addr=$us;
        var $1=$h_addr; //@line 406 "datetimemodule.c"
        var $2=($1) < 0; //@line 406 "datetimemodule.c"
        var $3=$h_addr; //@line 406 "datetimemodule.c"
        var $4=($3) > 23; //@line 406 "datetimemodule.c"
        var $or_cond=($2) | ($4);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 406 "datetimemodule.c"
      case 1: // $bb1
        var $5=HEAP[_PyExc_ValueError]; //@line 407 "datetimemodule.c"
        _PyErr_SetString($5, __str16); //@line 407 "datetimemodule.c"
        $0=-1; //@line 409 "datetimemodule.c"
        __label__ = 9; break; //@line 409 "datetimemodule.c"
      case 2: // $bb2
        var $6=$m_addr; //@line 411 "datetimemodule.c"
        var $7=($6) < 0; //@line 411 "datetimemodule.c"
        var $8=$m_addr; //@line 411 "datetimemodule.c"
        var $9=($8) > 59; //@line 411 "datetimemodule.c"
        var $or_cond3=($7) | ($9);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 411 "datetimemodule.c"
      case 3: // $bb4
        var $10=HEAP[_PyExc_ValueError]; //@line 412 "datetimemodule.c"
        _PyErr_SetString($10, __str17); //@line 412 "datetimemodule.c"
        $0=-1; //@line 414 "datetimemodule.c"
        __label__ = 9; break; //@line 414 "datetimemodule.c"
      case 4: // $bb5
        var $11=$s_addr; //@line 416 "datetimemodule.c"
        var $12=($11) < 0; //@line 416 "datetimemodule.c"
        var $13=$s_addr; //@line 416 "datetimemodule.c"
        var $14=($13) > 59; //@line 416 "datetimemodule.c"
        var $or_cond5=($12) | ($14);
        if ($or_cond5) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 416 "datetimemodule.c"
      case 5: // $bb7
        var $15=HEAP[_PyExc_ValueError]; //@line 417 "datetimemodule.c"
        _PyErr_SetString($15, __str18); //@line 417 "datetimemodule.c"
        $0=-1; //@line 419 "datetimemodule.c"
        __label__ = 9; break; //@line 419 "datetimemodule.c"
      case 6: // $bb8
        var $16=$us_addr; //@line 421 "datetimemodule.c"
        var $17=($16) < 0; //@line 421 "datetimemodule.c"
        var $18=$us_addr; //@line 421 "datetimemodule.c"
        var $19=($18) > 999999; //@line 421 "datetimemodule.c"
        var $or_cond7=($17) | ($19);
        if ($or_cond7) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 421 "datetimemodule.c"
      case 7: // $bb10
        var $20=HEAP[_PyExc_ValueError]; //@line 422 "datetimemodule.c"
        _PyErr_SetString($20, __str19); //@line 422 "datetimemodule.c"
        $0=-1; //@line 424 "datetimemodule.c"
        __label__ = 9; break; //@line 424 "datetimemodule.c"
      case 8: // $bb11
        $0=0; //@line 426 "datetimemodule.c"
        __label__ = 9; break; //@line 426 "datetimemodule.c"
      case 9: // $bb12
        var $21=$0; //@line 409 "datetimemodule.c"
        $retval=$21; //@line 409 "datetimemodule.c"
        var $retval13=$retval; //@line 409 "datetimemodule.c"
        ;
        return $retval13; //@line 409 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _normalize_pair($hi, $lo, $factor) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $hi_addr;
        var $lo_addr;
        var $factor_addr;
        var $num_hi;
        var $new_hi;
        $hi_addr=$hi;
        $lo_addr=$lo;
        $factor_addr=$factor;
        var $0=$factor_addr; //@line 442 "datetimemodule.c"
        var $1=($0) <= 0; //@line 442 "datetimemodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 442 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str20, __str1, 442, ___PRETTY_FUNCTION___8694); //@line 442 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 442 "datetimemodule.c"
      case 2: // $bb1
        var $2=$lo_addr; //@line 443 "datetimemodule.c"
        var $3=$hi_addr; //@line 443 "datetimemodule.c"
        var $4=($2)==($3); //@line 443 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 443 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str21, __str1, 443, ___PRETTY_FUNCTION___8694); //@line 443 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 443 "datetimemodule.c"
      case 4: // $bb3
        var $5=$lo_addr; //@line 444 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 444 "datetimemodule.c"
        var $7=($6) < 0; //@line 444 "datetimemodule.c"
        if ($7) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 444 "datetimemodule.c"
      case 5: // $bb4
        var $8=$lo_addr; //@line 444 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 444 "datetimemodule.c"
        var $10=$factor_addr; //@line 444 "datetimemodule.c"
        var $11=($9) >= ($10); //@line 444 "datetimemodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 444 "datetimemodule.c"
      case 6: // $bb5
        var $12=$lo_addr; //@line 445 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 445 "datetimemodule.c"
        var $14=$factor_addr; //@line 445 "datetimemodule.c"
        var $15=$lo_addr; //@line 445 "datetimemodule.c"
        var $16=_divmod($13, $14, $15); //@line 445 "datetimemodule.c"
        $num_hi=$16; //@line 445 "datetimemodule.c"
        var $17=$hi_addr; //@line 446 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 446 "datetimemodule.c"
        var $19=$num_hi; //@line 446 "datetimemodule.c"
        var $20=($19) + ($18); //@line 446 "datetimemodule.c"
        $new_hi=$20; //@line 446 "datetimemodule.c"
        var $21=$hi_addr; //@line 447 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 447 "datetimemodule.c"
        var $23=$new_hi; //@line 447 "datetimemodule.c"
        var $24=($23) ^ ($22); //@line 447 "datetimemodule.c"
        var $25=$new_hi; //@line 447 "datetimemodule.c"
        var $26=$num_hi; //@line 447 "datetimemodule.c"
        var $27=($26) ^ ($25); //@line 447 "datetimemodule.c"
        var $28=($27) & ($24); //@line 447 "datetimemodule.c"
        var $29=($28) < 0; //@line 447 "datetimemodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 447 "datetimemodule.c"
      case 7: // $bb6
        ___assert_fail(__str22, __str1, 447, ___PRETTY_FUNCTION___8694); //@line 447 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 447 "datetimemodule.c"
      case 8: // $bb7
        var $30=$hi_addr; //@line 448 "datetimemodule.c"
        var $31=$new_hi; //@line 448 "datetimemodule.c"
        HEAP[$30]=$31; //@line 448 "datetimemodule.c"
        __label__ = 9; break; //@line 448 "datetimemodule.c"
      case 9: // $bb8
        var $32=$lo_addr; //@line 450 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 450 "datetimemodule.c"
        var $34=($33) < 0; //@line 450 "datetimemodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 450 "datetimemodule.c"
      case 10: // $bb9
        var $35=$lo_addr; //@line 450 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 450 "datetimemodule.c"
        var $37=$factor_addr; //@line 450 "datetimemodule.c"
        var $38=($36) >= ($37); //@line 450 "datetimemodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 450 "datetimemodule.c"
      case 11: // $bb10
        ___assert_fail(__str23, __str1, 450, ___PRETTY_FUNCTION___8694); //@line 450 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 450 "datetimemodule.c"
      case 12: // $return
        ;
        return; //@line 451 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _normalize_d_s_us($d, $s, $us) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $d_addr;
        var $s_addr;
        var $us_addr;
        $d_addr=$d;
        $s_addr=$s;
        $us_addr=$us;
        var $0=$us_addr; //@line 462 "datetimemodule.c"
        var $1=HEAP[$0]; //@line 462 "datetimemodule.c"
        var $2=($1) < 0; //@line 462 "datetimemodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 462 "datetimemodule.c"
      case 1: // $bb
        var $3=$us_addr; //@line 462 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 462 "datetimemodule.c"
        var $5=($4) > 999999; //@line 462 "datetimemodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 462 "datetimemodule.c"
      case 2: // $bb1
        var $6=$s_addr; //@line 463 "datetimemodule.c"
        var $7=$us_addr; //@line 463 "datetimemodule.c"
        _normalize_pair($6, $7, 1000000); //@line 463 "datetimemodule.c"
        __label__ = 3; break; //@line 463 "datetimemodule.c"
      case 3: // $bb2
        var $8=$s_addr; //@line 469 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 469 "datetimemodule.c"
        var $10=($9) < 0; //@line 469 "datetimemodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 469 "datetimemodule.c"
      case 4: // $bb3
        var $11=$s_addr; //@line 469 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 469 "datetimemodule.c"
        var $13=($12) > 86399; //@line 469 "datetimemodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 469 "datetimemodule.c"
      case 5: // $bb4
        var $14=$d_addr; //@line 470 "datetimemodule.c"
        var $15=$s_addr; //@line 470 "datetimemodule.c"
        _normalize_pair($14, $15, 86400); //@line 470 "datetimemodule.c"
        __label__ = 6; break; //@line 470 "datetimemodule.c"
      case 6: // $bb5
        var $16=$s_addr; //@line 476 "datetimemodule.c"
        var $17=HEAP[$16]; //@line 476 "datetimemodule.c"
        var $18=($17) < 0; //@line 476 "datetimemodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 476 "datetimemodule.c"
      case 7: // $bb6
        var $19=$s_addr; //@line 476 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 476 "datetimemodule.c"
        var $21=($20) > 86399; //@line 476 "datetimemodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 476 "datetimemodule.c"
      case 8: // $bb7
        ___assert_fail(__str24, __str1, 476, ___PRETTY_FUNCTION___8725); //@line 476 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 476 "datetimemodule.c"
      case 9: // $bb8
        var $22=$us_addr; //@line 477 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 477 "datetimemodule.c"
        var $24=($23) < 0; //@line 477 "datetimemodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 477 "datetimemodule.c"
      case 10: // $bb9
        var $25=$us_addr; //@line 477 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 477 "datetimemodule.c"
        var $27=($26) > 999999; //@line 477 "datetimemodule.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 477 "datetimemodule.c"
      case 11: // $bb10
        ___assert_fail(__str25, __str1, 477, ___PRETTY_FUNCTION___8725); //@line 477 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 477 "datetimemodule.c"
      case 12: // $return
        ;
        return; //@line 478 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _normalize_y_m_d($y, $m, $d) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $y_addr;
        var $m_addr;
        var $d_addr;
        var $retval;
        var $0;
        var $dim;
        var $ordinal;
        $y_addr=$y;
        $m_addr=$m;
        $d_addr=$d;
        var $1=$m_addr; //@line 497 "datetimemodule.c"
        var $2=HEAP[$1]; //@line 497 "datetimemodule.c"
        var $3=($2) <= 0; //@line 497 "datetimemodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 497 "datetimemodule.c"
      case 1: // $bb
        var $4=$m_addr; //@line 497 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 497 "datetimemodule.c"
        var $6=($5) > 12; //@line 497 "datetimemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 497 "datetimemodule.c"
      case 2: // $bb1
        var $7=$m_addr; //@line 498 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 498 "datetimemodule.c"
        var $9=($8) - 1; //@line 498 "datetimemodule.c"
        var $10=$m_addr; //@line 498 "datetimemodule.c"
        HEAP[$10]=$9; //@line 498 "datetimemodule.c"
        var $11=$y_addr; //@line 499 "datetimemodule.c"
        var $12=$m_addr; //@line 499 "datetimemodule.c"
        _normalize_pair($11, $12, 12); //@line 499 "datetimemodule.c"
        var $13=$m_addr; //@line 500 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 500 "datetimemodule.c"
        var $15=($14) + 1; //@line 500 "datetimemodule.c"
        var $16=$m_addr; //@line 500 "datetimemodule.c"
        HEAP[$16]=$15; //@line 500 "datetimemodule.c"
        __label__ = 3; break; //@line 500 "datetimemodule.c"
      case 3: // $bb2
        var $17=$m_addr; //@line 505 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 505 "datetimemodule.c"
        var $19=($18) <= 0; //@line 505 "datetimemodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 505 "datetimemodule.c"
      case 4: // $bb3
        var $20=$m_addr; //@line 505 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 505 "datetimemodule.c"
        var $22=($21) > 12; //@line 505 "datetimemodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 505 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str26, __str1, 505, ___PRETTY_FUNCTION___8752); //@line 505 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 505 "datetimemodule.c"
      case 6: // $bb5
        var $23=$m_addr; //@line 512 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 512 "datetimemodule.c"
        var $25=$y_addr; //@line 512 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 512 "datetimemodule.c"
        var $27=_days_in_month($26, $24); //@line 512 "datetimemodule.c"
        $dim=$27; //@line 512 "datetimemodule.c"
        var $28=$d_addr; //@line 513 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 513 "datetimemodule.c"
        var $30=($29) <= 0; //@line 513 "datetimemodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 513 "datetimemodule.c"
      case 7: // $bb6
        var $31=$d_addr; //@line 513 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 513 "datetimemodule.c"
        var $33=$dim; //@line 513 "datetimemodule.c"
        var $34=($32) > ($33); //@line 513 "datetimemodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 513 "datetimemodule.c"
      case 8: // $bb7
        var $35=$d_addr; //@line 518 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 518 "datetimemodule.c"
        var $37=($36)==0; //@line 518 "datetimemodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 518 "datetimemodule.c"
      case 9: // $bb8
        var $38=$m_addr; //@line 519 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 519 "datetimemodule.c"
        var $40=($39) - 1; //@line 519 "datetimemodule.c"
        var $41=$m_addr; //@line 519 "datetimemodule.c"
        HEAP[$41]=$40; //@line 519 "datetimemodule.c"
        var $42=$m_addr; //@line 520 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 520 "datetimemodule.c"
        var $44=($43) > 0; //@line 520 "datetimemodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 520 "datetimemodule.c"
      case 10: // $bb9
        var $45=$m_addr; //@line 521 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 521 "datetimemodule.c"
        var $47=$y_addr; //@line 521 "datetimemodule.c"
        var $48=HEAP[$47]; //@line 521 "datetimemodule.c"
        var $49=_days_in_month($48, $46); //@line 521 "datetimemodule.c"
        var $50=$d_addr; //@line 521 "datetimemodule.c"
        HEAP[$50]=$49; //@line 521 "datetimemodule.c"
        __label__ = 17; break; //@line 521 "datetimemodule.c"
      case 11: // $bb10
        var $51=$y_addr; //@line 523 "datetimemodule.c"
        var $52=HEAP[$51]; //@line 523 "datetimemodule.c"
        var $53=($52) - 1; //@line 523 "datetimemodule.c"
        var $54=$y_addr; //@line 523 "datetimemodule.c"
        HEAP[$54]=$53; //@line 523 "datetimemodule.c"
        var $55=$m_addr; //@line 524 "datetimemodule.c"
        HEAP[$55]=12; //@line 524 "datetimemodule.c"
        var $56=$d_addr; //@line 525 "datetimemodule.c"
        HEAP[$56]=31; //@line 525 "datetimemodule.c"
        __label__ = 17; break; //@line 525 "datetimemodule.c"
      case 12: // $bb12
        var $57=$d_addr; //@line 528 "datetimemodule.c"
        var $58=HEAP[$57]; //@line 528 "datetimemodule.c"
        var $59=$dim; //@line 528 "datetimemodule.c"
        var $60=($59) + 1; //@line 528 "datetimemodule.c"
        var $61=($58)==($60); //@line 528 "datetimemodule.c"
        var $62=$m_addr; //@line 530 "datetimemodule.c"
        var $63=HEAP[$62]; //@line 530 "datetimemodule.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 528 "datetimemodule.c"
      case 13: // $bb13
        var $64=($63) + 1; //@line 530 "datetimemodule.c"
        var $65=$m_addr; //@line 530 "datetimemodule.c"
        HEAP[$65]=$64; //@line 530 "datetimemodule.c"
        var $66=$d_addr; //@line 531 "datetimemodule.c"
        HEAP[$66]=1; //@line 531 "datetimemodule.c"
        var $67=$m_addr; //@line 532 "datetimemodule.c"
        var $68=HEAP[$67]; //@line 532 "datetimemodule.c"
        var $69=($68) > 12; //@line 532 "datetimemodule.c"
        if ($69) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 532 "datetimemodule.c"
      case 14: // $bb14
        var $70=$m_addr; //@line 533 "datetimemodule.c"
        HEAP[$70]=1; //@line 533 "datetimemodule.c"
        var $71=$y_addr; //@line 534 "datetimemodule.c"
        var $72=HEAP[$71]; //@line 534 "datetimemodule.c"
        var $73=($72) + 1; //@line 534 "datetimemodule.c"
        var $74=$y_addr; //@line 534 "datetimemodule.c"
        HEAP[$74]=$73; //@line 534 "datetimemodule.c"
        __label__ = 17; break; //@line 534 "datetimemodule.c"
      case 15: // $bb16
        var $75=$y_addr; //@line 539 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 539 "datetimemodule.c"
        var $77=_ymd_to_ord($76, $63, 1); //@line 539 "datetimemodule.c"
        var $78=$d_addr; //@line 539 "datetimemodule.c"
        var $79=HEAP[$78]; //@line 539 "datetimemodule.c"
        var $80=($77) + -1; //@line 539 "datetimemodule.c"
        var $81=($80) + ($79);
        $ordinal=$81; //@line 539 "datetimemodule.c"
        var $82=$ordinal; //@line 540 "datetimemodule.c"
        var $83=($82) <= 0; //@line 540 "datetimemodule.c"
        var $84=$ordinal; //@line 540 "datetimemodule.c"
        var $85=($84) > 3652059; //@line 540 "datetimemodule.c"
        var $or_cond=($83) | ($85);
        if ($or_cond) { __label__ = 24; break; } else { __label__ = 16; break; } //@line 540 "datetimemodule.c"
      case 16: // $bb18
        var $86=$ordinal; //@line 543 "datetimemodule.c"
        var $87=$y_addr; //@line 543 "datetimemodule.c"
        var $88=$m_addr; //@line 543 "datetimemodule.c"
        var $89=$d_addr; //@line 543 "datetimemodule.c"
        _ord_to_ymd($86, $87, $88, $89); //@line 543 "datetimemodule.c"
        $0=0; //@line 544 "datetimemodule.c"
        __label__ = 25; break; //@line 544 "datetimemodule.c"
      case 17: // $bb19
        var $90=$m_addr; //@line 548 "datetimemodule.c"
        var $91=HEAP[$90]; //@line 548 "datetimemodule.c"
        var $92=($91) <= 0; //@line 548 "datetimemodule.c"
        if ($92) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 548 "datetimemodule.c"
      case 18: // $bb20
        ___assert_fail(__str27, __str1, 548, ___PRETTY_FUNCTION___8752); //@line 548 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 548 "datetimemodule.c"
      case 19: // $bb21
        var $93=$d_addr; //@line 549 "datetimemodule.c"
        var $94=HEAP[$93]; //@line 549 "datetimemodule.c"
        var $95=($94) <= 0; //@line 549 "datetimemodule.c"
        if ($95) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 549 "datetimemodule.c"
      case 20: // $bb22
        ___assert_fail(__str28, __str1, 549, ___PRETTY_FUNCTION___8752); //@line 549 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 549 "datetimemodule.c"
      case 21: // $bb23
        var $96=$y_addr; //@line 550 "datetimemodule.c"
        var $97=HEAP[$96]; //@line 550 "datetimemodule.c"
        var $98=($97) > 0; //@line 550 "datetimemodule.c"
        if ($98) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 550 "datetimemodule.c"
      case 22: // $bb24
        var $99=$y_addr; //@line 550 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 550 "datetimemodule.c"
        var $101=($100) <= 9999; //@line 550 "datetimemodule.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 550 "datetimemodule.c"
      case 23: // $bb25
        $0=0; //@line 551 "datetimemodule.c"
        __label__ = 25; break; //@line 551 "datetimemodule.c"
      case 24: // $error
        var $102=HEAP[_PyExc_OverflowError]; //@line 553 "datetimemodule.c"
        _PyErr_SetString($102, __str29); //@line 553 "datetimemodule.c"
        $0=-1; //@line 555 "datetimemodule.c"
        __label__ = 25; break; //@line 555 "datetimemodule.c"
      case 25: // $bb26
        var $103=$0; //@line 544 "datetimemodule.c"
        $retval=$103; //@line 544 "datetimemodule.c"
        var $retval27=$retval; //@line 544 "datetimemodule.c"
        ;
        return $retval27; //@line 544 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _normalize_date($year, $month, $day) {
    ;
    var __label__;
  
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr=$year;
    $month_addr=$month;
    $day_addr=$day;
    var $1=$year_addr; //@line 566 "datetimemodule.c"
    var $2=$month_addr; //@line 566 "datetimemodule.c"
    var $3=$day_addr; //@line 566 "datetimemodule.c"
    var $4=_normalize_y_m_d($1, $2, $3); //@line 566 "datetimemodule.c"
    $0=$4; //@line 566 "datetimemodule.c"
    var $5=$0; //@line 566 "datetimemodule.c"
    $retval=$5; //@line 566 "datetimemodule.c"
    var $retval1=$retval; //@line 566 "datetimemodule.c"
    ;
    return $retval1; //@line 566 "datetimemodule.c"
  }
  

  function _normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond) {
    ;
    var __label__;
  
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $hour_addr;
    var $minute_addr;
    var $second_addr;
    var $microsecond_addr;
    var $retval;
    var $0;
    $year_addr=$year;
    $month_addr=$month;
    $day_addr=$day;
    $hour_addr=$hour;
    $minute_addr=$minute;
    $second_addr=$second;
    $microsecond_addr=$microsecond;
    var $1=$second_addr; //@line 577 "datetimemodule.c"
    var $2=$microsecond_addr; //@line 577 "datetimemodule.c"
    _normalize_pair($1, $2, 1000000); //@line 577 "datetimemodule.c"
    var $3=$minute_addr; //@line 578 "datetimemodule.c"
    var $4=$second_addr; //@line 578 "datetimemodule.c"
    _normalize_pair($3, $4, 60); //@line 578 "datetimemodule.c"
    var $5=$hour_addr; //@line 579 "datetimemodule.c"
    var $6=$minute_addr; //@line 579 "datetimemodule.c"
    _normalize_pair($5, $6, 60); //@line 579 "datetimemodule.c"
    var $7=$day_addr; //@line 580 "datetimemodule.c"
    var $8=$hour_addr; //@line 580 "datetimemodule.c"
    _normalize_pair($7, $8, 24); //@line 580 "datetimemodule.c"
    var $9=$year_addr; //@line 581 "datetimemodule.c"
    var $10=$month_addr; //@line 581 "datetimemodule.c"
    var $11=$day_addr; //@line 581 "datetimemodule.c"
    var $12=_normalize_date($9, $10, $11); //@line 581 "datetimemodule.c"
    $0=$12; //@line 581 "datetimemodule.c"
    var $13=$0; //@line 581 "datetimemodule.c"
    $retval=$13; //@line 581 "datetimemodule.c"
    var $retval1=$retval; //@line 581 "datetimemodule.c"
    ;
    return $retval1; //@line 581 "datetimemodule.c"
  }
  

  function _time_alloc($type, $aware) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $aware_addr;
        var $retval;
        var $0;
        var $iftmp_14;
        var $self;
        $type_addr=$type;
        $aware_addr=$aware;
        var $1=$aware_addr; //@line 610 "datetimemodule.c"
        var $2=($1)!=0; //@line 610 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 610 "datetimemodule.c"
      case 1: // $bb
        $iftmp_14=24; //@line 610 "datetimemodule.c"
        __label__ = 3; break; //@line 610 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_14=20; //@line 610 "datetimemodule.c"
        __label__ = 3; break; //@line 610 "datetimemodule.c"
      case 3: // $bb2
        var $3=$iftmp_14; //@line 610 "datetimemodule.c"
        var $4=_malloc($3); //@line 610 "datetimemodule.c"
        var $5=$4; //@line 610 "datetimemodule.c"
        $self=$5; //@line 610 "datetimemodule.c"
        var $6=($5)==0; //@line 614 "datetimemodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 614 "datetimemodule.c"
      case 4: // $bb3
        var $7=_PyErr_NoMemory(); //@line 615 "datetimemodule.c"
        $0=$7; //@line 615 "datetimemodule.c"
        __label__ = 6; break; //@line 615 "datetimemodule.c"
      case 5: // $bb4
        var $8=$self; //@line 616 "datetimemodule.c"
        var $9=$8+4; //@line 616 "datetimemodule.c"
        var $10=$type_addr; //@line 616 "datetimemodule.c"
        HEAP[$9]=$10; //@line 616 "datetimemodule.c"
        var $11=$self; //@line 616 "datetimemodule.c"
        var $12=$11; //@line 616 "datetimemodule.c"
        HEAP[$12]=1; //@line 616 "datetimemodule.c"
        var $13=$self; //@line 617 "datetimemodule.c"
        $0=$13; //@line 617 "datetimemodule.c"
        __label__ = 6; break; //@line 617 "datetimemodule.c"
      case 6: // $bb5
        var $14=$0; //@line 615 "datetimemodule.c"
        $retval=$14; //@line 615 "datetimemodule.c"
        var $retval6=$retval; //@line 615 "datetimemodule.c"
        ;
        return $retval6; //@line 615 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_alloc($type, $aware) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $aware_addr;
        var $retval;
        var $0;
        var $iftmp_15;
        var $self;
        $type_addr=$type;
        $aware_addr=$aware;
        var $1=$aware_addr; //@line 625 "datetimemodule.c"
        var $2=($1)!=0; //@line 625 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 625 "datetimemodule.c"
      case 1: // $bb
        $iftmp_15=28; //@line 625 "datetimemodule.c"
        __label__ = 3; break; //@line 625 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_15=24; //@line 625 "datetimemodule.c"
        __label__ = 3; break; //@line 625 "datetimemodule.c"
      case 3: // $bb2
        var $3=$iftmp_15; //@line 625 "datetimemodule.c"
        var $4=_malloc($3); //@line 625 "datetimemodule.c"
        var $5=$4; //@line 625 "datetimemodule.c"
        $self=$5; //@line 625 "datetimemodule.c"
        var $6=($5)==0; //@line 629 "datetimemodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 629 "datetimemodule.c"
      case 4: // $bb3
        var $7=_PyErr_NoMemory(); //@line 630 "datetimemodule.c"
        $0=$7; //@line 630 "datetimemodule.c"
        __label__ = 6; break; //@line 630 "datetimemodule.c"
      case 5: // $bb4
        var $8=$self; //@line 631 "datetimemodule.c"
        var $9=$8+4; //@line 631 "datetimemodule.c"
        var $10=$type_addr; //@line 631 "datetimemodule.c"
        HEAP[$9]=$10; //@line 631 "datetimemodule.c"
        var $11=$self; //@line 631 "datetimemodule.c"
        var $12=$11; //@line 631 "datetimemodule.c"
        HEAP[$12]=1; //@line 631 "datetimemodule.c"
        var $13=$self; //@line 632 "datetimemodule.c"
        $0=$13; //@line 632 "datetimemodule.c"
        __label__ = 6; break; //@line 632 "datetimemodule.c"
      case 6: // $bb5
        var $14=$0; //@line 630 "datetimemodule.c"
        $retval=$14; //@line 630 "datetimemodule.c"
        var $retval6=$retval; //@line 630 "datetimemodule.c"
        ;
        return $retval6; //@line 630 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _set_date_fields($self, $y, $m, $d) {
    ;
    var __label__;
  
    var $self_addr;
    var $y_addr;
    var $m_addr;
    var $d_addr;
    $self_addr=$self;
    $y_addr=$y;
    $m_addr=$m;
    $d_addr=$d;
    var $0=$self_addr; //@line 644 "datetimemodule.c"
    var $1=$0+8; //@line 644 "datetimemodule.c"
    HEAP[$1]=-1; //@line 644 "datetimemodule.c"
    var $2=$y_addr; //@line 645 "datetimemodule.c"
    var $3=($2) & 65280; //@line 645 "datetimemodule.c"
    var $4=($3) >> 8; //@line 645 "datetimemodule.c"
    var $5=((($4)) & 255); //@line 645 "datetimemodule.c"
    var $6=$self_addr; //@line 645 "datetimemodule.c"
    var $7=$6+13; //@line 645 "datetimemodule.c"
    var $8=$7; //@line 645 "datetimemodule.c"
    HEAP[$8]=$5; //@line 645 "datetimemodule.c"
    var $9=$y_addr; //@line 645 "datetimemodule.c"
    var $10=((($9)) & 255); //@line 645 "datetimemodule.c"
    var $11=$self_addr; //@line 645 "datetimemodule.c"
    var $12=$11+13; //@line 645 "datetimemodule.c"
    var $13=$12+1; //@line 645 "datetimemodule.c"
    HEAP[$13]=$10; //@line 645 "datetimemodule.c"
    var $14=$m_addr; //@line 646 "datetimemodule.c"
    var $15=((($14)) & 255); //@line 646 "datetimemodule.c"
    var $16=$self_addr; //@line 646 "datetimemodule.c"
    var $17=$16+13; //@line 646 "datetimemodule.c"
    var $18=$17+2; //@line 646 "datetimemodule.c"
    HEAP[$18]=$15; //@line 646 "datetimemodule.c"
    var $19=$d_addr; //@line 647 "datetimemodule.c"
    var $20=((($19)) & 255); //@line 647 "datetimemodule.c"
    var $21=$self_addr; //@line 647 "datetimemodule.c"
    var $22=$21+13; //@line 647 "datetimemodule.c"
    var $23=$22+3; //@line 647 "datetimemodule.c"
    HEAP[$23]=$20; //@line 647 "datetimemodule.c"
    ;
    return; //@line 648 "datetimemodule.c"
  }
  

  function _new_date_ex($year, $month, $day, $type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $month_addr;
        var $day_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $self;
        $year_addr=$year;
        $month_addr=$month;
        $day_addr=$day;
        $type_addr=$type;
        var $1=$type_addr; //@line 660 "datetimemodule.c"
        var $2=$1+152; //@line 660 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 660 "datetimemodule.c"
        var $4=$type_addr; //@line 660 "datetimemodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 660 "datetimemodule.c"
        var $6=$5; //@line 660 "datetimemodule.c"
        $self=$6; //@line 660 "datetimemodule.c"
        var $7=$self; //@line 661 "datetimemodule.c"
        var $8=($7)!=0; //@line 661 "datetimemodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 661 "datetimemodule.c"
      case 1: // $bb
        var $9=$self; //@line 662 "datetimemodule.c"
        var $10=$year_addr; //@line 662 "datetimemodule.c"
        var $11=$month_addr; //@line 662 "datetimemodule.c"
        var $12=$day_addr; //@line 662 "datetimemodule.c"
        _set_date_fields($9, $10, $11, $12); //@line 662 "datetimemodule.c"
        __label__ = 2; break; //@line 662 "datetimemodule.c"
      case 2: // $bb1
        var $13=$self; //@line 663 "datetimemodule.c"
        var $14=$13; //@line 663 "datetimemodule.c"
        $0=$14; //@line 663 "datetimemodule.c"
        var $15=$0; //@line 663 "datetimemodule.c"
        $retval=$15; //@line 663 "datetimemodule.c"
        var $retval2=$retval; //@line 663 "datetimemodule.c"
        ;
        return $retval2; //@line 663 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_datetime_ex($year, $month, $day, $hour, $minute, $second, $usecond, $tzinfo, $type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $year_addr;
        var $month_addr;
        var $day_addr;
        var $hour_addr;
        var $minute_addr;
        var $second_addr;
        var $usecond_addr;
        var $tzinfo_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $self;
        var $aware;
        $year_addr=$year;
        $month_addr=$month;
        $day_addr=$day;
        $hour_addr=$hour;
        $minute_addr=$minute;
        $second_addr=$second;
        $usecond_addr=$usecond;
        $tzinfo_addr=$tzinfo;
        $type_addr=$type;
        var $1=$tzinfo_addr; //@line 675 "datetimemodule.c"
        var $2=($1)!=(__Py_NoneStruct); //@line 675 "datetimemodule.c"
        var $3=($2); //@line 675 "datetimemodule.c"
        $aware=$3; //@line 675 "datetimemodule.c"
        var $4=$type_addr; //@line 677 "datetimemodule.c"
        var $5=$4+152; //@line 677 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 677 "datetimemodule.c"
        var $7=$aware; //@line 677 "datetimemodule.c"
        var $8=($7); //@line 677 "datetimemodule.c"
        var $9=$type_addr; //@line 677 "datetimemodule.c"
        var $10=FUNCTION_TABLE[$6]($9, $8); //@line 677 "datetimemodule.c"
        var $11=$10; //@line 677 "datetimemodule.c"
        $self=$11; //@line 677 "datetimemodule.c"
        var $12=$self; //@line 678 "datetimemodule.c"
        var $13=($12)!=0; //@line 678 "datetimemodule.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 678 "datetimemodule.c"
      case 1: // $bb
        var $14=$self; //@line 679 "datetimemodule.c"
        var $15=$14+12; //@line 679 "datetimemodule.c"
        var $16=$aware; //@line 679 "datetimemodule.c"
        HEAP[$15]=$16; //@line 679 "datetimemodule.c"
        var $17=$self; //@line 680 "datetimemodule.c"
        var $18=$17; //@line 680 "datetimemodule.c"
        var $19=$year_addr; //@line 680 "datetimemodule.c"
        var $20=$month_addr; //@line 680 "datetimemodule.c"
        var $21=$day_addr; //@line 680 "datetimemodule.c"
        _set_date_fields($18, $19, $20, $21); //@line 680 "datetimemodule.c"
        var $22=$hour_addr; //@line 681 "datetimemodule.c"
        var $23=((($22)) & 255); //@line 681 "datetimemodule.c"
        var $24=$self; //@line 681 "datetimemodule.c"
        var $25=$24+13; //@line 681 "datetimemodule.c"
        var $26=$25+4; //@line 681 "datetimemodule.c"
        HEAP[$26]=$23; //@line 681 "datetimemodule.c"
        var $27=$minute_addr; //@line 682 "datetimemodule.c"
        var $28=((($27)) & 255); //@line 682 "datetimemodule.c"
        var $29=$self; //@line 682 "datetimemodule.c"
        var $30=$29+13; //@line 682 "datetimemodule.c"
        var $31=$30+5; //@line 682 "datetimemodule.c"
        HEAP[$31]=$28; //@line 682 "datetimemodule.c"
        var $32=$second_addr; //@line 683 "datetimemodule.c"
        var $33=((($32)) & 255); //@line 683 "datetimemodule.c"
        var $34=$self; //@line 683 "datetimemodule.c"
        var $35=$34+13; //@line 683 "datetimemodule.c"
        var $36=$35+6; //@line 683 "datetimemodule.c"
        HEAP[$36]=$33; //@line 683 "datetimemodule.c"
        var $37=$usecond_addr; //@line 684 "datetimemodule.c"
        var $38=($37) & 16711680; //@line 684 "datetimemodule.c"
        var $39=($38) >> 16; //@line 684 "datetimemodule.c"
        var $40=((($39)) & 255); //@line 684 "datetimemodule.c"
        var $41=$self; //@line 684 "datetimemodule.c"
        var $42=$41+13; //@line 684 "datetimemodule.c"
        var $43=$42+7; //@line 684 "datetimemodule.c"
        HEAP[$43]=$40; //@line 684 "datetimemodule.c"
        var $44=$usecond_addr; //@line 684 "datetimemodule.c"
        var $45=($44) & 65280; //@line 684 "datetimemodule.c"
        var $46=($45) >> 8; //@line 684 "datetimemodule.c"
        var $47=((($46)) & 255); //@line 684 "datetimemodule.c"
        var $48=$self; //@line 684 "datetimemodule.c"
        var $49=$48+13; //@line 684 "datetimemodule.c"
        var $50=$49+8; //@line 684 "datetimemodule.c"
        HEAP[$50]=$47; //@line 684 "datetimemodule.c"
        var $51=$usecond_addr; //@line 684 "datetimemodule.c"
        var $52=((($51)) & 255); //@line 684 "datetimemodule.c"
        var $53=$self; //@line 684 "datetimemodule.c"
        var $54=$53+13; //@line 684 "datetimemodule.c"
        var $55=$54+9; //@line 684 "datetimemodule.c"
        HEAP[$55]=$52; //@line 684 "datetimemodule.c"
        var $56=$aware; //@line 685 "datetimemodule.c"
        var $57=($56)!=0; //@line 685 "datetimemodule.c"
        if ($57) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 685 "datetimemodule.c"
      case 2: // $bb1
        var $58=$tzinfo_addr; //@line 686 "datetimemodule.c"
        var $59=$58; //@line 686 "datetimemodule.c"
        var $60=HEAP[$59]; //@line 686 "datetimemodule.c"
        var $61=($60) + 1; //@line 686 "datetimemodule.c"
        var $62=$tzinfo_addr; //@line 686 "datetimemodule.c"
        var $63=$62; //@line 686 "datetimemodule.c"
        HEAP[$63]=$61; //@line 686 "datetimemodule.c"
        var $64=$self; //@line 687 "datetimemodule.c"
        var $65=$64+24; //@line 687 "datetimemodule.c"
        var $66=$tzinfo_addr; //@line 687 "datetimemodule.c"
        HEAP[$65]=$66; //@line 687 "datetimemodule.c"
        __label__ = 3; break; //@line 687 "datetimemodule.c"
      case 3: // $bb2
        var $67=$self; //@line 690 "datetimemodule.c"
        var $68=$67; //@line 690 "datetimemodule.c"
        $0=$68; //@line 690 "datetimemodule.c"
        var $69=$0; //@line 690 "datetimemodule.c"
        $retval=$69; //@line 690 "datetimemodule.c"
        var $retval3=$retval; //@line 690 "datetimemodule.c"
        ;
        return $retval3; //@line 690 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_time_ex($hour, $minute, $second, $usecond, $tzinfo, $type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $hour_addr;
        var $minute_addr;
        var $second_addr;
        var $usecond_addr;
        var $tzinfo_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $self;
        var $aware;
        $hour_addr=$hour;
        $minute_addr=$minute;
        $second_addr=$second;
        $usecond_addr=$usecond;
        $tzinfo_addr=$tzinfo;
        $type_addr=$type;
        var $1=$tzinfo_addr; //@line 703 "datetimemodule.c"
        var $2=($1)!=(__Py_NoneStruct); //@line 703 "datetimemodule.c"
        var $3=($2); //@line 703 "datetimemodule.c"
        $aware=$3; //@line 703 "datetimemodule.c"
        var $4=$type_addr; //@line 705 "datetimemodule.c"
        var $5=$4+152; //@line 705 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 705 "datetimemodule.c"
        var $7=$aware; //@line 705 "datetimemodule.c"
        var $8=($7); //@line 705 "datetimemodule.c"
        var $9=$type_addr; //@line 705 "datetimemodule.c"
        var $10=FUNCTION_TABLE[$6]($9, $8); //@line 705 "datetimemodule.c"
        var $11=$10; //@line 705 "datetimemodule.c"
        $self=$11; //@line 705 "datetimemodule.c"
        var $12=$self; //@line 706 "datetimemodule.c"
        var $13=($12)!=0; //@line 706 "datetimemodule.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 706 "datetimemodule.c"
      case 1: // $bb
        var $14=$self; //@line 707 "datetimemodule.c"
        var $15=$14+12; //@line 707 "datetimemodule.c"
        var $16=$aware; //@line 707 "datetimemodule.c"
        HEAP[$15]=$16; //@line 707 "datetimemodule.c"
        var $17=$self; //@line 708 "datetimemodule.c"
        var $18=$17+8; //@line 708 "datetimemodule.c"
        HEAP[$18]=-1; //@line 708 "datetimemodule.c"
        var $19=$hour_addr; //@line 709 "datetimemodule.c"
        var $20=((($19)) & 255); //@line 709 "datetimemodule.c"
        var $21=$self; //@line 709 "datetimemodule.c"
        var $22=$21+13; //@line 709 "datetimemodule.c"
        var $23=$22; //@line 709 "datetimemodule.c"
        HEAP[$23]=$20; //@line 709 "datetimemodule.c"
        var $24=$minute_addr; //@line 710 "datetimemodule.c"
        var $25=((($24)) & 255); //@line 710 "datetimemodule.c"
        var $26=$self; //@line 710 "datetimemodule.c"
        var $27=$26+13; //@line 710 "datetimemodule.c"
        var $28=$27+1; //@line 710 "datetimemodule.c"
        HEAP[$28]=$25; //@line 710 "datetimemodule.c"
        var $29=$second_addr; //@line 711 "datetimemodule.c"
        var $30=((($29)) & 255); //@line 711 "datetimemodule.c"
        var $31=$self; //@line 711 "datetimemodule.c"
        var $32=$31+13; //@line 711 "datetimemodule.c"
        var $33=$32+2; //@line 711 "datetimemodule.c"
        HEAP[$33]=$30; //@line 711 "datetimemodule.c"
        var $34=$usecond_addr; //@line 712 "datetimemodule.c"
        var $35=($34) & 16711680; //@line 712 "datetimemodule.c"
        var $36=($35) >> 16; //@line 712 "datetimemodule.c"
        var $37=((($36)) & 255); //@line 712 "datetimemodule.c"
        var $38=$self; //@line 712 "datetimemodule.c"
        var $39=$38+13; //@line 712 "datetimemodule.c"
        var $40=$39+3; //@line 712 "datetimemodule.c"
        HEAP[$40]=$37; //@line 712 "datetimemodule.c"
        var $41=$usecond_addr; //@line 712 "datetimemodule.c"
        var $42=($41) & 65280; //@line 712 "datetimemodule.c"
        var $43=($42) >> 8; //@line 712 "datetimemodule.c"
        var $44=((($43)) & 255); //@line 712 "datetimemodule.c"
        var $45=$self; //@line 712 "datetimemodule.c"
        var $46=$45+13; //@line 712 "datetimemodule.c"
        var $47=$46+4; //@line 712 "datetimemodule.c"
        HEAP[$47]=$44; //@line 712 "datetimemodule.c"
        var $48=$usecond_addr; //@line 712 "datetimemodule.c"
        var $49=((($48)) & 255); //@line 712 "datetimemodule.c"
        var $50=$self; //@line 712 "datetimemodule.c"
        var $51=$50+13; //@line 712 "datetimemodule.c"
        var $52=$51+5; //@line 712 "datetimemodule.c"
        HEAP[$52]=$49; //@line 712 "datetimemodule.c"
        var $53=$aware; //@line 713 "datetimemodule.c"
        var $54=($53)!=0; //@line 713 "datetimemodule.c"
        if ($54) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 713 "datetimemodule.c"
      case 2: // $bb1
        var $55=$tzinfo_addr; //@line 714 "datetimemodule.c"
        var $56=$55; //@line 714 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 714 "datetimemodule.c"
        var $58=($57) + 1; //@line 714 "datetimemodule.c"
        var $59=$tzinfo_addr; //@line 714 "datetimemodule.c"
        var $60=$59; //@line 714 "datetimemodule.c"
        HEAP[$60]=$58; //@line 714 "datetimemodule.c"
        var $61=$self; //@line 715 "datetimemodule.c"
        var $62=$61+20; //@line 715 "datetimemodule.c"
        var $63=$tzinfo_addr; //@line 715 "datetimemodule.c"
        HEAP[$62]=$63; //@line 715 "datetimemodule.c"
        __label__ = 3; break; //@line 715 "datetimemodule.c"
      case 3: // $bb2
        var $64=$self; //@line 718 "datetimemodule.c"
        var $65=$64; //@line 718 "datetimemodule.c"
        $0=$65; //@line 718 "datetimemodule.c"
        var $66=$0; //@line 718 "datetimemodule.c"
        $retval=$66; //@line 718 "datetimemodule.c"
        var $retval3=$retval; //@line 718 "datetimemodule.c"
        ;
        return $retval3; //@line 718 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_delta_ex($days, $seconds, $microseconds, $normalize, $type) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $days_addr=__stackBase__;
        var $seconds_addr=__stackBase__+4;
        var $microseconds_addr=__stackBase__+8;
        var $normalize_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $self;
        HEAP[$days_addr]=$days;
        HEAP[$seconds_addr]=$seconds;
        HEAP[$microseconds_addr]=$microseconds;
        $normalize_addr=$normalize;
        $type_addr=$type;
        var $1=$normalize_addr; //@line 736 "datetimemodule.c"
        var $2=($1)!=0; //@line 736 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 736 "datetimemodule.c"
      case 1: // $bb
        _normalize_d_s_us($days_addr, $seconds_addr, $microseconds_addr); //@line 737 "datetimemodule.c"
        __label__ = 2; break; //@line 737 "datetimemodule.c"
      case 2: // $bb1
        var $3=HEAP[$seconds_addr]; //@line 738 "datetimemodule.c"
        var $4=($3) < 0; //@line 738 "datetimemodule.c"
        var $5=HEAP[$seconds_addr]; //@line 738 "datetimemodule.c"
        var $6=($5) > 86399; //@line 738 "datetimemodule.c"
        var $or_cond=($4) | ($6);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 738 "datetimemodule.c"
      case 3: // $bb3
        ___assert_fail(__str30, __str1, 738, ___PRETTY_FUNCTION___8976); //@line 738 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 738 "datetimemodule.c"
      case 4: // $bb4
        var $7=HEAP[$microseconds_addr]; //@line 739 "datetimemodule.c"
        var $8=($7) < 0; //@line 739 "datetimemodule.c"
        var $9=HEAP[$microseconds_addr]; //@line 739 "datetimemodule.c"
        var $10=($9) > 999999; //@line 739 "datetimemodule.c"
        var $or_cond3=($8) | ($10);
        if ($or_cond3) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 739 "datetimemodule.c"
      case 5: // $bb6
        ___assert_fail(__str31, __str1, 739, ___PRETTY_FUNCTION___8976); //@line 739 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 739 "datetimemodule.c"
      case 6: // $bb7
        var $11=HEAP[$days_addr]; //@line 741 "datetimemodule.c"
        var $12=_check_delta_day_range($11); //@line 741 "datetimemodule.c"
        var $13=($12) < 0; //@line 741 "datetimemodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 741 "datetimemodule.c"
      case 7: // $bb8
        $0=0; //@line 742 "datetimemodule.c"
        __label__ = 11; break; //@line 742 "datetimemodule.c"
      case 8: // $bb9
        var $14=$type_addr; //@line 744 "datetimemodule.c"
        var $15=$14+152; //@line 744 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 744 "datetimemodule.c"
        var $17=$type_addr; //@line 744 "datetimemodule.c"
        var $18=FUNCTION_TABLE[$16]($17, 0); //@line 744 "datetimemodule.c"
        var $19=$18; //@line 744 "datetimemodule.c"
        $self=$19; //@line 744 "datetimemodule.c"
        var $20=$self; //@line 745 "datetimemodule.c"
        var $21=($20)!=0; //@line 745 "datetimemodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 745 "datetimemodule.c"
      case 9: // $bb10
        var $22=$self; //@line 746 "datetimemodule.c"
        var $23=$22+8; //@line 746 "datetimemodule.c"
        HEAP[$23]=-1; //@line 746 "datetimemodule.c"
        var $24=HEAP[$days_addr]; //@line 747 "datetimemodule.c"
        var $25=$self; //@line 747 "datetimemodule.c"
        var $26=$25+12; //@line 747 "datetimemodule.c"
        HEAP[$26]=$24; //@line 747 "datetimemodule.c"
        var $27=HEAP[$seconds_addr]; //@line 748 "datetimemodule.c"
        var $28=$self; //@line 748 "datetimemodule.c"
        var $29=$28+16; //@line 748 "datetimemodule.c"
        HEAP[$29]=$27; //@line 748 "datetimemodule.c"
        var $30=HEAP[$microseconds_addr]; //@line 749 "datetimemodule.c"
        var $31=$self; //@line 749 "datetimemodule.c"
        var $32=$31+20; //@line 749 "datetimemodule.c"
        HEAP[$32]=$30; //@line 749 "datetimemodule.c"
        __label__ = 10; break; //@line 749 "datetimemodule.c"
      case 10: // $bb11
        var $33=$self; //@line 751 "datetimemodule.c"
        var $34=$33; //@line 751 "datetimemodule.c"
        $0=$34; //@line 751 "datetimemodule.c"
        __label__ = 11; break; //@line 751 "datetimemodule.c"
      case 11: // $bb12
        var $35=$0; //@line 742 "datetimemodule.c"
        $retval=$35; //@line 742 "datetimemodule.c"
        var $retval13=$retval; //@line 742 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 742 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_tzinfo_subclass($p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $retval;
        var $0;
        $p_addr=$p;
        var $1=$p_addr; //@line 767 "datetimemodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 767 "datetimemodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 767 "datetimemodule.c"
      case 1: // $bb
        var $3=$p_addr; //@line 767 "datetimemodule.c"
        var $4=$3+4; //@line 767 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 767 "datetimemodule.c"
        var $6=($5)==(_PyDateTime_TZInfoType); //@line 767 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 767 "datetimemodule.c"
      case 2: // $bb1
        var $7=$p_addr; //@line 767 "datetimemodule.c"
        var $8=$7+4; //@line 767 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 767 "datetimemodule.c"
        var $10=_PyType_IsSubtype($9, _PyDateTime_TZInfoType); //@line 767 "datetimemodule.c"
        var $11=($10)!=0; //@line 767 "datetimemodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 767 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 768 "datetimemodule.c"
        __label__ = 5; break; //@line 768 "datetimemodule.c"
      case 4: // $bb3
        var $12=$p_addr; //@line 769 "datetimemodule.c"
        var $13=$12+4; //@line 769 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 769 "datetimemodule.c"
        var $15=$14+12; //@line 769 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 769 "datetimemodule.c"
        var $17=HEAP[_PyExc_TypeError]; //@line 769 "datetimemodule.c"
        var $18=_PyErr_Format($17, __str32, allocate([$16,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 769 "datetimemodule.c"
        $0=-1; //@line 773 "datetimemodule.c"
        __label__ = 5; break; //@line 773 "datetimemodule.c"
      case 5: // $bb4
        var $19=$0; //@line 768 "datetimemodule.c"
        $retval=$19; //@line 768 "datetimemodule.c"
        var $retval5=$retval; //@line 768 "datetimemodule.c"
        ;
        return $retval5; //@line 768 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_tzinfo_method($tzinfo, $methname, $tzinfoarg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tzinfo_addr;
        var $methname_addr;
        var $tzinfoarg_addr;
        var $retval;
        var $0;
        var $result;
        $tzinfo_addr=$tzinfo;
        $methname_addr=$methname;
        $tzinfoarg_addr=$tzinfoarg;
        var $1=$tzinfo_addr; //@line 784 "datetimemodule.c"
        var $2=($1)==0; //@line 784 "datetimemodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 784 "datetimemodule.c"
      case 1: // $bb
        var $3=$methname_addr; //@line 784 "datetimemodule.c"
        var $4=($3)==0; //@line 784 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 784 "datetimemodule.c"
      case 2: // $bb1
        var $5=$tzinfoarg_addr; //@line 784 "datetimemodule.c"
        var $6=($5)==0; //@line 784 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 784 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str33, __str1, 784, ___PRETTY_FUNCTION___9023); //@line 784 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 784 "datetimemodule.c"
      case 4: // $bb3
        var $7=$tzinfo_addr; //@line 785 "datetimemodule.c"
        var $8=_check_tzinfo_subclass($7); //@line 785 "datetimemodule.c"
        var $9=($8) < 0; //@line 785 "datetimemodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 785 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str34, __str1, 785, ___PRETTY_FUNCTION___9023); //@line 785 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 785 "datetimemodule.c"
      case 6: // $bb5
        var $10=$tzinfo_addr; //@line 786 "datetimemodule.c"
        var $11=($10)==(__Py_NoneStruct); //@line 786 "datetimemodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 786 "datetimemodule.c"
      case 7: // $bb6
        $result=__Py_NoneStruct; //@line 787 "datetimemodule.c"
        var $12=$result; //@line 788 "datetimemodule.c"
        var $13=$12; //@line 788 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 788 "datetimemodule.c"
        var $15=($14) + 1; //@line 788 "datetimemodule.c"
        var $16=$result; //@line 788 "datetimemodule.c"
        var $17=$16; //@line 788 "datetimemodule.c"
        HEAP[$17]=$15; //@line 788 "datetimemodule.c"
        __label__ = 9; break; //@line 788 "datetimemodule.c"
      case 8: // $bb7
        var $18=$tzinfo_addr; //@line 791 "datetimemodule.c"
        var $19=$methname_addr; //@line 791 "datetimemodule.c"
        var $20=$tzinfoarg_addr; //@line 791 "datetimemodule.c"
        var $21=__PyObject_CallMethod_SizeT($18, $19, __str35, allocate([$20,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 791 "datetimemodule.c"
        $result=$21; //@line 791 "datetimemodule.c"
        __label__ = 9; break; //@line 791 "datetimemodule.c"
      case 9: // $bb8
        var $22=$result; //@line 792 "datetimemodule.c"
        $0=$22; //@line 792 "datetimemodule.c"
        var $23=$0; //@line 792 "datetimemodule.c"
        $retval=$23; //@line 792 "datetimemodule.c"
        var $retval9=$retval; //@line 792 "datetimemodule.c"
        ;
        return $retval9; //@line 792 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_tzinfo_member($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $tzinfo;
        $self_addr=$self;
        $tzinfo=0; //@line 802 "datetimemodule.c"
        var $1=$self_addr; //@line 804 "datetimemodule.c"
        var $2=$1+4; //@line 804 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 804 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateTimeType); //@line 804 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 804 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 804 "datetimemodule.c"
        var $6=$5+4; //@line 804 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 804 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 804 "datetimemodule.c"
        var $9=($8)!=0; //@line 804 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 804 "datetimemodule.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 804 "datetimemodule.c"
        var $11=$10; //@line 804 "datetimemodule.c"
        var $12=$11+12; //@line 804 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 804 "datetimemodule.c"
        var $14=($13)==0; //@line 804 "datetimemodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 804 "datetimemodule.c"
      case 3: // $bb2
        var $15=$self_addr; //@line 805 "datetimemodule.c"
        var $16=$15; //@line 805 "datetimemodule.c"
        var $17=$16+24; //@line 805 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 805 "datetimemodule.c"
        $tzinfo=$18; //@line 805 "datetimemodule.c"
        __label__ = 8; break; //@line 805 "datetimemodule.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 806 "datetimemodule.c"
        var $20=$19+4; //@line 806 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 806 "datetimemodule.c"
        var $22=($21)==(_PyDateTime_TimeType); //@line 806 "datetimemodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 806 "datetimemodule.c"
      case 5: // $bb4
        var $23=$self_addr; //@line 806 "datetimemodule.c"
        var $24=$23+4; //@line 806 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 806 "datetimemodule.c"
        var $26=_PyType_IsSubtype($25, _PyDateTime_TimeType); //@line 806 "datetimemodule.c"
        var $27=($26)!=0; //@line 806 "datetimemodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 806 "datetimemodule.c"
      case 6: // $bb5
        var $28=$self_addr; //@line 806 "datetimemodule.c"
        var $29=$28; //@line 806 "datetimemodule.c"
        var $30=$29+12; //@line 806 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 806 "datetimemodule.c"
        var $32=($31)!=0; //@line 806 "datetimemodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 806 "datetimemodule.c"
      case 7: // $bb6
        var $33=$self_addr; //@line 807 "datetimemodule.c"
        var $34=$33; //@line 807 "datetimemodule.c"
        var $35=$34+20; //@line 807 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 807 "datetimemodule.c"
        $tzinfo=$36; //@line 807 "datetimemodule.c"
        __label__ = 8; break; //@line 807 "datetimemodule.c"
      case 8: // $bb7
        var $37=$tzinfo; //@line 809 "datetimemodule.c"
        $0=$37; //@line 809 "datetimemodule.c"
        var $38=$0; //@line 809 "datetimemodule.c"
        $retval=$38; //@line 809 "datetimemodule.c"
        var $retval8=$retval; //@line 809 "datetimemodule.c"
        ;
        return $retval8; //@line 809 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_utc_tzinfo_method($tzinfo, $name, $tzinfoarg, $none) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tzinfo_addr;
        var $name_addr;
        var $tzinfoarg_addr;
        var $none_addr;
        var $retval;
        var $0;
        var $u;
        var $result;
        var $days;
        var $ss=__stackBase__;
        $tzinfo_addr=$tzinfo;
        $name_addr=$name;
        $tzinfoarg_addr=$tzinfoarg;
        $none_addr=$none;
        $result=-1; //@line 825 "datetimemodule.c"
        var $1=$tzinfo_addr; //@line 827 "datetimemodule.c"
        var $2=($1)==0; //@line 827 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 827 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str36, __str1, 827, ___PRETTY_FUNCTION___9075); //@line 827 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 827 "datetimemodule.c"
      case 2: // $bb1
        var $3=$tzinfo_addr; //@line 828 "datetimemodule.c"
        var $4=$3+4; //@line 828 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 828 "datetimemodule.c"
        var $6=($5)!=(_PyDateTime_TZInfoType); //@line 828 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 828 "datetimemodule.c"
      case 3: // $bb2
        var $7=$tzinfo_addr; //@line 828 "datetimemodule.c"
        var $8=$7+4; //@line 828 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 828 "datetimemodule.c"
        var $10=_PyType_IsSubtype($9, _PyDateTime_TZInfoType); //@line 828 "datetimemodule.c"
        var $11=($10)==0; //@line 828 "datetimemodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 828 "datetimemodule.c"
      case 4: // $bb3
        ___assert_fail(__str37, __str1, 828, ___PRETTY_FUNCTION___9075); //@line 828 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 828 "datetimemodule.c"
      case 5: // $bb4
        var $12=$tzinfoarg_addr; //@line 829 "datetimemodule.c"
        var $13=($12)==0; //@line 829 "datetimemodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 829 "datetimemodule.c"
      case 6: // $bb5
        ___assert_fail(__str38, __str1, 829, ___PRETTY_FUNCTION___9075); //@line 829 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 829 "datetimemodule.c"
      case 7: // $bb6
        var $14=$none_addr; //@line 831 "datetimemodule.c"
        HEAP[$14]=0; //@line 831 "datetimemodule.c"
        var $15=$tzinfo_addr; //@line 832 "datetimemodule.c"
        var $16=$name_addr; //@line 832 "datetimemodule.c"
        var $17=$tzinfoarg_addr; //@line 832 "datetimemodule.c"
        var $18=_call_tzinfo_method($15, $16, $17); //@line 832 "datetimemodule.c"
        $u=$18; //@line 832 "datetimemodule.c"
        var $19=$u; //@line 833 "datetimemodule.c"
        var $20=($19)==0; //@line 833 "datetimemodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 833 "datetimemodule.c"
      case 8: // $bb7
        $0=-1; //@line 834 "datetimemodule.c"
        __label__ = 24; break; //@line 834 "datetimemodule.c"
      case 9: // $bb8
        var $21=$u; //@line 836 "datetimemodule.c"
        var $22=($21)==(__Py_NoneStruct); //@line 836 "datetimemodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 836 "datetimemodule.c"
      case 10: // $bb9
        $result=0; //@line 837 "datetimemodule.c"
        var $23=$none_addr; //@line 838 "datetimemodule.c"
        HEAP[$23]=1; //@line 838 "datetimemodule.c"
        __label__ = 19; break; //@line 838 "datetimemodule.c"
      case 11: // $bb10
        var $24=$u; //@line 840 "datetimemodule.c"
        var $25=$24+4; //@line 840 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 840 "datetimemodule.c"
        var $27=($26)==(_PyDateTime_DeltaType); //@line 840 "datetimemodule.c"
        if ($27) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 840 "datetimemodule.c"
      case 12: // $bb11
        var $28=$u; //@line 840 "datetimemodule.c"
        var $29=$28+4; //@line 840 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 840 "datetimemodule.c"
        var $31=_PyType_IsSubtype($30, _PyDateTime_DeltaType); //@line 840 "datetimemodule.c"
        var $32=($31)!=0; //@line 840 "datetimemodule.c"
        if ($32) { __label__ = 13; break; } else { __label__ = 18; break; } //@line 840 "datetimemodule.c"
      case 13: // $bb12
        var $33=$u; //@line 841 "datetimemodule.c"
        var $34=$33; //@line 841 "datetimemodule.c"
        var $35=$34+12; //@line 841 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 841 "datetimemodule.c"
        $days=$36; //@line 841 "datetimemodule.c"
        var $37=$days; //@line 842 "datetimemodule.c"
        var $38=($37) < -1; //@line 842 "datetimemodule.c"
        var $39=$days; //@line 842 "datetimemodule.c"
        var $40=($39) > 0; //@line 842 "datetimemodule.c"
        var $or_cond=($38) | ($40);
        if ($or_cond) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 842 "datetimemodule.c"
      case 14: // $bb14
        $result=1440; //@line 843 "datetimemodule.c"
        __label__ = 19; break; //@line 843 "datetimemodule.c"
      case 15: // $bb15
        var $41=$days; //@line 848 "datetimemodule.c"
        var $42=($41) * 86400; //@line 848 "datetimemodule.c"
        var $43=$u; //@line 848 "datetimemodule.c"
        var $44=$43; //@line 848 "datetimemodule.c"
        var $45=$44+16; //@line 848 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 848 "datetimemodule.c"
        var $47=($46) + ($42); //@line 848 "datetimemodule.c"
        HEAP[$ss]=$47; //@line 848 "datetimemodule.c"
        var $48=HEAP[$ss]; //@line 849 "datetimemodule.c"
        var $49=_divmod($48, 60, $ss); //@line 849 "datetimemodule.c"
        $result=$49; //@line 849 "datetimemodule.c"
        var $50=HEAP[$ss]; //@line 850 "datetimemodule.c"
        var $51=($50)!=0; //@line 850 "datetimemodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 850 "datetimemodule.c"
      case 16: // $bb16
        var $52=$u; //@line 850 "datetimemodule.c"
        var $53=$52; //@line 850 "datetimemodule.c"
        var $54=$53+20; //@line 850 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 850 "datetimemodule.c"
        var $56=($55)!=0; //@line 850 "datetimemodule.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 850 "datetimemodule.c"
      case 17: // $bb17
        var $57=HEAP[_PyExc_ValueError]; //@line 851 "datetimemodule.c"
        var $58=$name_addr; //@line 851 "datetimemodule.c"
        var $59=_PyErr_Format($57, __str39, allocate([$58,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 851 "datetimemodule.c"
        $result=-1; //@line 855 "datetimemodule.c"
        __label__ = 19; break; //@line 855 "datetimemodule.c"
      case 18: // $bb19
        var $60=$u; //@line 860 "datetimemodule.c"
        var $61=$60+4; //@line 860 "datetimemodule.c"
        var $62=HEAP[$61]; //@line 860 "datetimemodule.c"
        var $63=$62+12; //@line 860 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 860 "datetimemodule.c"
        var $65=HEAP[_PyExc_TypeError]; //@line 860 "datetimemodule.c"
        var $66=$name_addr; //@line 860 "datetimemodule.c"
        var $67=_PyErr_Format($65, __str40, allocate([$66,0,0,0,$64,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 860 "datetimemodule.c"
        __label__ = 19; break; //@line 860 "datetimemodule.c"
      case 19: // $bb20
        var $68=$u; //@line 866 "datetimemodule.c"
        var $69=$68; //@line 866 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 866 "datetimemodule.c"
        var $71=($70) - 1; //@line 866 "datetimemodule.c"
        var $72=$u; //@line 866 "datetimemodule.c"
        var $73=$72; //@line 866 "datetimemodule.c"
        HEAP[$73]=$71; //@line 866 "datetimemodule.c"
        var $74=$u; //@line 866 "datetimemodule.c"
        var $75=$74; //@line 866 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 866 "datetimemodule.c"
        var $77=($76)==0; //@line 866 "datetimemodule.c"
        if ($77) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 866 "datetimemodule.c"
      case 20: // $bb21
        var $78=$u; //@line 866 "datetimemodule.c"
        var $79=$78+4; //@line 866 "datetimemodule.c"
        var $80=HEAP[$79]; //@line 866 "datetimemodule.c"
        var $81=$80+24; //@line 866 "datetimemodule.c"
        var $82=HEAP[$81]; //@line 866 "datetimemodule.c"
        var $83=$u; //@line 866 "datetimemodule.c"
        FUNCTION_TABLE[$82]($83); //@line 866 "datetimemodule.c"
        __label__ = 21; break; //@line 866 "datetimemodule.c"
      case 21: // $bb22
        var $84=$result; //@line 867 "datetimemodule.c"
        var $85=($84) < -1439; //@line 867 "datetimemodule.c"
        var $86=$result; //@line 867 "datetimemodule.c"
        var $87=($86) > 1439; //@line 867 "datetimemodule.c"
        var $or_cond3=($85) | ($87);
        if ($or_cond3) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 867 "datetimemodule.c"
      case 22: // $bb24
        var $88=HEAP[_PyExc_ValueError]; //@line 868 "datetimemodule.c"
        var $89=$name_addr; //@line 868 "datetimemodule.c"
        var $90=$result; //@line 868 "datetimemodule.c"
        var $91=_PyErr_Format($88, __str41, allocate([$89,0,0,0,$90,0,0,0], ["i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 868 "datetimemodule.c"
        $result=-1; //@line 872 "datetimemodule.c"
        __label__ = 23; break; //@line 872 "datetimemodule.c"
      case 23: // $bb25
        var $92=$result; //@line 874 "datetimemodule.c"
        $0=$92; //@line 874 "datetimemodule.c"
        __label__ = 24; break; //@line 874 "datetimemodule.c"
      case 24: // $bb26
        var $93=$0; //@line 834 "datetimemodule.c"
        $retval=$93; //@line 834 "datetimemodule.c"
        var $retval27=$retval; //@line 834 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 834 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_utcoffset($tzinfo, $tzinfoarg, $none) {
    ;
    var __label__;
  
    var $tzinfo_addr;
    var $tzinfoarg_addr;
    var $none_addr;
    var $retval;
    var $0;
    $tzinfo_addr=$tzinfo;
    $tzinfoarg_addr=$tzinfoarg;
    $none_addr=$none;
    var $1=$tzinfo_addr; //@line 888 "datetimemodule.c"
    var $2=$tzinfoarg_addr; //@line 888 "datetimemodule.c"
    var $3=$none_addr; //@line 888 "datetimemodule.c"
    var $4=_call_utc_tzinfo_method($1, __str42, $2, $3); //@line 888 "datetimemodule.c"
    $0=$4; //@line 888 "datetimemodule.c"
    var $5=$0; //@line 888 "datetimemodule.c"
    $retval=$5; //@line 888 "datetimemodule.c"
    var $retval1=$retval; //@line 888 "datetimemodule.c"
    ;
    return $retval1; //@line 888 "datetimemodule.c"
  }
  

  function _offset_as_timedelta($tzinfo, $name, $tzinfoarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tzinfo_addr;
        var $name_addr;
        var $tzinfoarg_addr;
        var $retval;
        var $0;
        var $result;
        var $none=__stackBase__;
        var $offset;
        $tzinfo_addr=$tzinfo;
        $name_addr=$name;
        $tzinfoarg_addr=$tzinfoarg;
        var $1=$tzinfo_addr; //@line 897 "datetimemodule.c"
        var $2=($1)==0; //@line 897 "datetimemodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 897 "datetimemodule.c"
      case 1: // $bb
        var $3=$name_addr; //@line 897 "datetimemodule.c"
        var $4=($3)==0; //@line 897 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 897 "datetimemodule.c"
      case 2: // $bb1
        var $5=$tzinfoarg_addr; //@line 897 "datetimemodule.c"
        var $6=($5)==0; //@line 897 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 897 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str43, __str1, 897, ___PRETTY_FUNCTION___9150); //@line 897 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 897 "datetimemodule.c"
      case 4: // $bb3
        var $7=$tzinfo_addr; //@line 898 "datetimemodule.c"
        var $8=($7)==(__Py_NoneStruct); //@line 898 "datetimemodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 898 "datetimemodule.c"
      case 5: // $bb4
        $result=__Py_NoneStruct; //@line 899 "datetimemodule.c"
        var $9=$result; //@line 900 "datetimemodule.c"
        var $10=$9; //@line 900 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 900 "datetimemodule.c"
        var $12=($11) + 1; //@line 900 "datetimemodule.c"
        var $13=$result; //@line 900 "datetimemodule.c"
        var $14=$13; //@line 900 "datetimemodule.c"
        HEAP[$14]=$12; //@line 900 "datetimemodule.c"
        __label__ = 12; break; //@line 900 "datetimemodule.c"
      case 6: // $bb5
        var $15=$tzinfo_addr; //@line 905 "datetimemodule.c"
        var $16=$name_addr; //@line 905 "datetimemodule.c"
        var $17=$tzinfoarg_addr; //@line 905 "datetimemodule.c"
        var $18=_call_utc_tzinfo_method($15, $16, $17, $none); //@line 905 "datetimemodule.c"
        $offset=$18; //@line 905 "datetimemodule.c"
        var $19=$offset; //@line 906 "datetimemodule.c"
        var $20=($19) < 0; //@line 906 "datetimemodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 906 "datetimemodule.c"
      case 7: // $bb6
        var $21=_PyErr_Occurred(); //@line 906 "datetimemodule.c"
        var $22=($21)!=0; //@line 906 "datetimemodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 906 "datetimemodule.c"
      case 8: // $bb7
        $0=0; //@line 907 "datetimemodule.c"
        __label__ = 13; break; //@line 907 "datetimemodule.c"
      case 9: // $bb8
        var $23=HEAP[$none]; //@line 908 "datetimemodule.c"
        var $24=($23)!=0; //@line 908 "datetimemodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 908 "datetimemodule.c"
      case 10: // $bb9
        $result=__Py_NoneStruct; //@line 909 "datetimemodule.c"
        var $25=$result; //@line 910 "datetimemodule.c"
        var $26=$25; //@line 910 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 910 "datetimemodule.c"
        var $28=($27) + 1; //@line 910 "datetimemodule.c"
        var $29=$result; //@line 910 "datetimemodule.c"
        var $30=$29; //@line 910 "datetimemodule.c"
        HEAP[$30]=$28; //@line 910 "datetimemodule.c"
        __label__ = 12; break; //@line 910 "datetimemodule.c"
      case 11: // $bb10
        var $31=$offset; //@line 913 "datetimemodule.c"
        var $32=($31) * 60; //@line 913 "datetimemodule.c"
        var $33=_new_delta_ex(0, $32, 0, 1, _PyDateTime_DeltaType); //@line 913 "datetimemodule.c"
        $result=$33; //@line 913 "datetimemodule.c"
        __label__ = 12; break; //@line 913 "datetimemodule.c"
      case 12: // $bb11
        var $34=$result; //@line 915 "datetimemodule.c"
        $0=$34; //@line 915 "datetimemodule.c"
        __label__ = 13; break; //@line 915 "datetimemodule.c"
      case 13: // $bb12
        var $35=$0; //@line 907 "datetimemodule.c"
        $retval=$35; //@line 907 "datetimemodule.c"
        var $retval13=$retval; //@line 907 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 907 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _call_dst($tzinfo, $tzinfoarg, $none) {
    ;
    var __label__;
  
    var $tzinfo_addr;
    var $tzinfoarg_addr;
    var $none_addr;
    var $retval;
    var $0;
    $tzinfo_addr=$tzinfo;
    $tzinfoarg_addr=$tzinfoarg;
    $none_addr=$none;
    var $1=$tzinfo_addr; //@line 929 "datetimemodule.c"
    var $2=$tzinfoarg_addr; //@line 929 "datetimemodule.c"
    var $3=$none_addr; //@line 929 "datetimemodule.c"
    var $4=_call_utc_tzinfo_method($1, __str44, $2, $3); //@line 929 "datetimemodule.c"
    $0=$4; //@line 929 "datetimemodule.c"
    var $5=$0; //@line 929 "datetimemodule.c"
    $retval=$5; //@line 929 "datetimemodule.c"
    var $retval1=$retval; //@line 929 "datetimemodule.c"
    ;
    return $retval1; //@line 929 "datetimemodule.c"
  }
  

  function _call_tzname($tzinfo, $tzinfoarg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tzinfo_addr;
        var $tzinfoarg_addr;
        var $retval;
        var $0;
        var $result;
        $tzinfo_addr=$tzinfo;
        $tzinfoarg_addr=$tzinfoarg;
        var $1=$tzinfo_addr; //@line 942 "datetimemodule.c"
        var $2=($1)==0; //@line 942 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 942 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str36, __str1, 942, ___PRETTY_FUNCTION___9191); //@line 942 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 942 "datetimemodule.c"
      case 2: // $bb1
        var $3=$tzinfo_addr; //@line 943 "datetimemodule.c"
        var $4=_check_tzinfo_subclass($3); //@line 943 "datetimemodule.c"
        var $5=($4) < 0; //@line 943 "datetimemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 943 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str34, __str1, 943, ___PRETTY_FUNCTION___9191); //@line 943 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 943 "datetimemodule.c"
      case 4: // $bb3
        var $6=$tzinfoarg_addr; //@line 944 "datetimemodule.c"
        var $7=($6)==0; //@line 944 "datetimemodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 944 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str38, __str1, 944, ___PRETTY_FUNCTION___9191); //@line 944 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 944 "datetimemodule.c"
      case 6: // $bb5
        var $8=$tzinfo_addr; //@line 946 "datetimemodule.c"
        var $9=($8)==(__Py_NoneStruct); //@line 946 "datetimemodule.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 946 "datetimemodule.c"
      case 7: // $bb6
        $result=__Py_NoneStruct; //@line 947 "datetimemodule.c"
        var $10=$result; //@line 948 "datetimemodule.c"
        var $11=$10; //@line 948 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 948 "datetimemodule.c"
        var $13=($12) + 1; //@line 948 "datetimemodule.c"
        var $14=$result; //@line 948 "datetimemodule.c"
        var $15=$14; //@line 948 "datetimemodule.c"
        HEAP[$15]=$13; //@line 948 "datetimemodule.c"
        __label__ = 9; break; //@line 948 "datetimemodule.c"
      case 8: // $bb7
        var $16=$tzinfo_addr; //@line 951 "datetimemodule.c"
        var $17=$tzinfoarg_addr; //@line 951 "datetimemodule.c"
        var $18=__PyObject_CallMethod_SizeT($16, __str45, __str35, allocate([$17,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 951 "datetimemodule.c"
        $result=$18; //@line 951 "datetimemodule.c"
        __label__ = 9; break; //@line 951 "datetimemodule.c"
      case 9: // $bb8
        var $19=$result; //@line 953 "datetimemodule.c"
        var $20=($19)!=0; //@line 953 "datetimemodule.c"
        var $21=$result; //@line 953 "datetimemodule.c"
        var $22=($21)!=(__Py_NoneStruct); //@line 953 "datetimemodule.c"
        var $or_cond=($20) & ($22);
        if ($or_cond) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 953 "datetimemodule.c"
      case 10: // $bb10
        var $23=$result; //@line 953 "datetimemodule.c"
        var $24=$23+4; //@line 953 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 953 "datetimemodule.c"
        var $26=$25+84; //@line 953 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 953 "datetimemodule.c"
        var $28=($27) & 134217728; //@line 953 "datetimemodule.c"
        var $29=($28)==0; //@line 953 "datetimemodule.c"
        if ($29) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 953 "datetimemodule.c"
      case 11: // $bb11
        var $30=$result; //@line 954 "datetimemodule.c"
        var $31=$30+4; //@line 954 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 954 "datetimemodule.c"
        var $33=$32+12; //@line 954 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 954 "datetimemodule.c"
        var $35=HEAP[_PyExc_TypeError]; //@line 954 "datetimemodule.c"
        var $36=_PyErr_Format($35, __str46, allocate([$34,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 954 "datetimemodule.c"
        var $37=$result; //@line 957 "datetimemodule.c"
        var $38=$37; //@line 957 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 957 "datetimemodule.c"
        var $40=($39) - 1; //@line 957 "datetimemodule.c"
        var $41=$result; //@line 957 "datetimemodule.c"
        var $42=$41; //@line 957 "datetimemodule.c"
        HEAP[$42]=$40; //@line 957 "datetimemodule.c"
        var $43=$result; //@line 957 "datetimemodule.c"
        var $44=$43; //@line 957 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 957 "datetimemodule.c"
        var $46=($45)==0; //@line 957 "datetimemodule.c"
        if ($46) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 957 "datetimemodule.c"
      case 12: // $bb12
        var $47=$result; //@line 957 "datetimemodule.c"
        var $48=$47+4; //@line 957 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 957 "datetimemodule.c"
        var $50=$49+24; //@line 957 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 957 "datetimemodule.c"
        var $52=$result; //@line 957 "datetimemodule.c"
        FUNCTION_TABLE[$51]($52); //@line 957 "datetimemodule.c"
        __label__ = 13; break; //@line 957 "datetimemodule.c"
      case 13: // $bb13
        $result=0; //@line 958 "datetimemodule.c"
        __label__ = 14; break; //@line 958 "datetimemodule.c"
      case 14: // $bb14
        var $53=$result; //@line 960 "datetimemodule.c"
        $0=$53; //@line 960 "datetimemodule.c"
        var $54=$0; //@line 960 "datetimemodule.c"
        $retval=$54; //@line 960 "datetimemodule.c"
        var $retval15=$retval; //@line 960 "datetimemodule.c"
        ;
        return $retval15; //@line 960 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _classify_utcoffset($op, $tzinfoarg, $offset) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr;
        var $tzinfoarg_addr;
        var $offset_addr;
        var $retval;
        var $iftmp_41;
        var $iftmp_40;
        var $0;
        var $none=__stackBase__;
        var $tzinfo;
        $op_addr=$op;
        $tzinfoarg_addr=$tzinfoarg;
        $offset_addr=$offset;
        var $1=$tzinfoarg_addr; //@line 996 "datetimemodule.c"
        var $2=($1)==0; //@line 996 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 996 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str38, __str1, 996, ___PRETTY_FUNCTION___9239); //@line 996 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 996 "datetimemodule.c"
      case 2: // $bb1
        var $3=$offset_addr; //@line 997 "datetimemodule.c"
        HEAP[$3]=0; //@line 997 "datetimemodule.c"
        var $4=$op_addr; //@line 998 "datetimemodule.c"
        var $5=_get_tzinfo_member($4); //@line 998 "datetimemodule.c"
        $tzinfo=$5; //@line 998 "datetimemodule.c"
        var $6=$tzinfo; //@line 999 "datetimemodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 999 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 999 "datetimemodule.c"
      case 3: // $bb2
        $0=2; //@line 1000 "datetimemodule.c"
        __label__ = 19; break; //@line 1000 "datetimemodule.c"
      case 4: // $bb3
        var $8=$tzinfo; //@line 1001 "datetimemodule.c"
        var $9=($8)==0; //@line 1001 "datetimemodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 1001 "datetimemodule.c"
      case 5: // $bb4
        var $10=$op_addr; //@line 1003 "datetimemodule.c"
        var $11=$10+4; //@line 1003 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1003 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_TimeType); //@line 1003 "datetimemodule.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1003 "datetimemodule.c"
      case 6: // $bb5
        var $14=$op_addr; //@line 1003 "datetimemodule.c"
        var $15=$14+4; //@line 1003 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1003 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_TimeType); //@line 1003 "datetimemodule.c"
        var $18=($17)!=0; //@line 1003 "datetimemodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1003 "datetimemodule.c"
      case 7: // $bb6
        var $19=$op_addr; //@line 1003 "datetimemodule.c"
        var $20=$19+4; //@line 1003 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1003 "datetimemodule.c"
        var $22=($21)==(_PyDateTime_DateType); //@line 1003 "datetimemodule.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1003 "datetimemodule.c"
      case 8: // $bb7
        var $23=$op_addr; //@line 1003 "datetimemodule.c"
        var $24=$23+4; //@line 1003 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 1003 "datetimemodule.c"
        var $26=_PyType_IsSubtype($25, _PyDateTime_DateType); //@line 1003 "datetimemodule.c"
        var $27=($26)!=0; //@line 1003 "datetimemodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1003 "datetimemodule.c"
      case 9: // $bb8
        $iftmp_40=2; //@line 1003 "datetimemodule.c"
        __label__ = 11; break; //@line 1003 "datetimemodule.c"
      case 10: // $bb9
        $iftmp_40=1; //@line 1003 "datetimemodule.c"
        __label__ = 11; break; //@line 1003 "datetimemodule.c"
      case 11: // $bb10
        var $28=$iftmp_40; //@line 1003 "datetimemodule.c"
        $0=$28; //@line 1003 "datetimemodule.c"
        __label__ = 19; break; //@line 1003 "datetimemodule.c"
      case 12: // $bb11
        var $29=$tzinfo; //@line 1006 "datetimemodule.c"
        var $30=$tzinfoarg_addr; //@line 1006 "datetimemodule.c"
        var $31=_call_utcoffset($29, $30, $none); //@line 1006 "datetimemodule.c"
        var $32=$offset_addr; //@line 1006 "datetimemodule.c"
        HEAP[$32]=$31; //@line 1006 "datetimemodule.c"
        var $33=$offset_addr; //@line 1007 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 1007 "datetimemodule.c"
        var $35=($34)==-1; //@line 1007 "datetimemodule.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1007 "datetimemodule.c"
      case 13: // $bb12
        var $36=_PyErr_Occurred(); //@line 1007 "datetimemodule.c"
        var $37=($36)!=0; //@line 1007 "datetimemodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1007 "datetimemodule.c"
      case 14: // $bb13
        $0=0; //@line 1008 "datetimemodule.c"
        __label__ = 19; break; //@line 1008 "datetimemodule.c"
      case 15: // $bb14
        var $38=HEAP[$none]; //@line 1009 "datetimemodule.c"
        var $39=($38)!=0; //@line 1009 "datetimemodule.c"
        if ($39) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1009 "datetimemodule.c"
      case 16: // $bb15
        $iftmp_41=2; //@line 1009 "datetimemodule.c"
        __label__ = 18; break; //@line 1009 "datetimemodule.c"
      case 17: // $bb16
        $iftmp_41=3; //@line 1009 "datetimemodule.c"
        __label__ = 18; break; //@line 1009 "datetimemodule.c"
      case 18: // $bb17
        var $40=$iftmp_41; //@line 1009 "datetimemodule.c"
        $0=$40; //@line 1009 "datetimemodule.c"
        __label__ = 19; break; //@line 1009 "datetimemodule.c"
      case 19: // $bb18
        var $41=$0; //@line 1000 "datetimemodule.c"
        $retval=$41; //@line 1000 "datetimemodule.c"
        var $retval19=$retval; //@line 1000 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1000 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _classify_two_utcoffsets($o1, $offset1, $n1, $tzinfoarg1, $o2, $offset2, $n2, $tzinfoarg2) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o1_addr;
        var $offset1_addr;
        var $n1_addr;
        var $tzinfoarg1_addr;
        var $o2_addr;
        var $offset2_addr;
        var $n2_addr;
        var $tzinfoarg2_addr;
        var $retval;
        var $0;
        $o1_addr=$o1;
        $offset1_addr=$offset1;
        $n1_addr=$n1;
        $tzinfoarg1_addr=$tzinfoarg1;
        $o2_addr=$o2;
        $offset2_addr=$offset2;
        $n2_addr=$n2;
        $tzinfoarg2_addr=$tzinfoarg2;
        var $1=$o1_addr; //@line 1027 "datetimemodule.c"
        var $2=_get_tzinfo_member($1); //@line 1027 "datetimemodule.c"
        var $3=$o2_addr; //@line 1027 "datetimemodule.c"
        var $4=_get_tzinfo_member($3); //@line 1027 "datetimemodule.c"
        var $5=($2)==($4); //@line 1027 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1027 "datetimemodule.c"
      case 1: // $bb
        var $6=$offset2_addr; //@line 1028 "datetimemodule.c"
        HEAP[$6]=0; //@line 1028 "datetimemodule.c"
        var $7=$offset2_addr; //@line 1028 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 1028 "datetimemodule.c"
        var $9=$offset1_addr; //@line 1028 "datetimemodule.c"
        HEAP[$9]=$8; //@line 1028 "datetimemodule.c"
        var $10=$n2_addr; //@line 1029 "datetimemodule.c"
        HEAP[$10]=2; //@line 1029 "datetimemodule.c"
        var $11=$n2_addr; //@line 1029 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1029 "datetimemodule.c"
        var $13=$n1_addr; //@line 1029 "datetimemodule.c"
        HEAP[$13]=$12; //@line 1029 "datetimemodule.c"
        __label__ = 6; break; //@line 1029 "datetimemodule.c"
      case 2: // $bb1
        var $14=$o1_addr; //@line 1032 "datetimemodule.c"
        var $15=$tzinfoarg1_addr; //@line 1032 "datetimemodule.c"
        var $16=$offset1_addr; //@line 1032 "datetimemodule.c"
        var $17=_classify_utcoffset($14, $15, $16); //@line 1032 "datetimemodule.c"
        var $18=$n1_addr; //@line 1032 "datetimemodule.c"
        HEAP[$18]=$17; //@line 1032 "datetimemodule.c"
        var $19=$n1_addr; //@line 1033 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1033 "datetimemodule.c"
        var $21=($20)==0; //@line 1033 "datetimemodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1033 "datetimemodule.c"
      case 3: // $bb2
        $0=-1; //@line 1034 "datetimemodule.c"
        __label__ = 7; break; //@line 1034 "datetimemodule.c"
      case 4: // $bb3
        var $22=$o2_addr; //@line 1035 "datetimemodule.c"
        var $23=$tzinfoarg2_addr; //@line 1035 "datetimemodule.c"
        var $24=$offset2_addr; //@line 1035 "datetimemodule.c"
        var $25=_classify_utcoffset($22, $23, $24); //@line 1035 "datetimemodule.c"
        var $26=$n2_addr; //@line 1035 "datetimemodule.c"
        HEAP[$26]=$25; //@line 1035 "datetimemodule.c"
        var $27=$n2_addr; //@line 1036 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1036 "datetimemodule.c"
        var $29=($28)==0; //@line 1036 "datetimemodule.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1036 "datetimemodule.c"
      case 5: // $bb4
        $0=-1; //@line 1037 "datetimemodule.c"
        __label__ = 7; break; //@line 1037 "datetimemodule.c"
      case 6: // $bb5
        $0=0; //@line 1039 "datetimemodule.c"
        __label__ = 7; break; //@line 1039 "datetimemodule.c"
      case 7: // $bb6
        var $30=$0; //@line 1034 "datetimemodule.c"
        $retval=$30; //@line 1034 "datetimemodule.c"
        var $retval7=$retval; //@line 1034 "datetimemodule.c"
        ;
        return $retval7; //@line 1034 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _append_keyword_tzinfo($repr, $tzinfo) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $repr_addr=__stackBase__;
        var $tzinfo_addr;
        var $retval;
        var $0;
        var $temp;
        HEAP[$repr_addr]=$repr;
        $tzinfo_addr=$tzinfo;
        var $1=HEAP[$repr_addr]; //@line 1052 "datetimemodule.c"
        var $2=$1+4; //@line 1052 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1052 "datetimemodule.c"
        var $4=$3+84; //@line 1052 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 1052 "datetimemodule.c"
        var $6=($5) & 134217728; //@line 1052 "datetimemodule.c"
        var $7=($6)==0; //@line 1052 "datetimemodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1052 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str47, __str1, 1052, ___PRETTY_FUNCTION___9306); //@line 1052 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1052 "datetimemodule.c"
      case 2: // $bb1
        var $8=$tzinfo_addr; //@line 1053 "datetimemodule.c"
        var $9=($8)==0; //@line 1053 "datetimemodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1053 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str48, __str1, 1053, ___PRETTY_FUNCTION___9306); //@line 1053 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1053 "datetimemodule.c"
      case 4: // $bb3
        var $10=$tzinfo_addr; //@line 1054 "datetimemodule.c"
        var $11=($10)==(__Py_NoneStruct); //@line 1054 "datetimemodule.c"
        var $12=HEAP[$repr_addr]; //@line 1055 "datetimemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1054 "datetimemodule.c"
      case 5: // $bb4
        $0=$12; //@line 1055 "datetimemodule.c"
        __label__ = 13; break; //@line 1055 "datetimemodule.c"
      case 6: // $bb5
        var $13=_PyString_AsString($12); //@line 1057 "datetimemodule.c"
        var $14=HEAP[$repr_addr]; //@line 1057 "datetimemodule.c"
        var $15=_PyString_Size($14); //@line 1057 "datetimemodule.c"
        var $16=($15) - 1; //@line 1057 "datetimemodule.c"
        var $17=$13+$16; //@line 1057 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 1057 "datetimemodule.c"
        var $19=($18)!=41; //@line 1057 "datetimemodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1057 "datetimemodule.c"
      case 7: // $bb6
        ___assert_fail(__str49, __str1, 1057, ___PRETTY_FUNCTION___9306); //@line 1057 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1057 "datetimemodule.c"
      case 8: // $bb7
        var $20=HEAP[$repr_addr]; //@line 1058 "datetimemodule.c"
        var $21=_PyString_Size($20); //@line 1058 "datetimemodule.c"
        var $22=($21) - 1; //@line 1058 "datetimemodule.c"
        var $23=HEAP[$repr_addr]; //@line 1058 "datetimemodule.c"
        var $24=_PyString_AsString($23); //@line 1058 "datetimemodule.c"
        var $25=_PyString_FromStringAndSize($24, $22); //@line 1058 "datetimemodule.c"
        $temp=$25; //@line 1058 "datetimemodule.c"
        var $26=HEAP[$repr_addr]; //@line 1060 "datetimemodule.c"
        var $27=$26; //@line 1060 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1060 "datetimemodule.c"
        var $29=($28) - 1; //@line 1060 "datetimemodule.c"
        var $30=$26; //@line 1060 "datetimemodule.c"
        HEAP[$30]=$29; //@line 1060 "datetimemodule.c"
        var $31=$26; //@line 1060 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 1060 "datetimemodule.c"
        var $33=($32)==0; //@line 1060 "datetimemodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1060 "datetimemodule.c"
      case 9: // $bb8
        var $34=HEAP[$repr_addr]; //@line 1060 "datetimemodule.c"
        var $35=$34+4; //@line 1060 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 1060 "datetimemodule.c"
        var $37=$36+24; //@line 1060 "datetimemodule.c"
        var $38=HEAP[$37]; //@line 1060 "datetimemodule.c"
        var $39=HEAP[$repr_addr]; //@line 1060 "datetimemodule.c"
        FUNCTION_TABLE[$38]($39); //@line 1060 "datetimemodule.c"
        __label__ = 10; break; //@line 1060 "datetimemodule.c"
      case 10: // $bb9
        var $40=$temp; //@line 1061 "datetimemodule.c"
        var $41=($40)==0; //@line 1061 "datetimemodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1061 "datetimemodule.c"
      case 11: // $bb10
        $0=0; //@line 1062 "datetimemodule.c"
        __label__ = 13; break; //@line 1062 "datetimemodule.c"
      case 12: // $bb11
        var $42=$temp; //@line 1063 "datetimemodule.c"
        HEAP[$repr_addr]=$42; //@line 1063 "datetimemodule.c"
        var $43=_PyString_FromString(__str50); //@line 1066 "datetimemodule.c"
        _PyString_ConcatAndDel($repr_addr, $43); //@line 1066 "datetimemodule.c"
        var $44=$tzinfo_addr; //@line 1069 "datetimemodule.c"
        var $45=_PyObject_Repr($44); //@line 1069 "datetimemodule.c"
        _PyString_ConcatAndDel($repr_addr, $45); //@line 1069 "datetimemodule.c"
        var $46=_PyString_FromString(__str51); //@line 1072 "datetimemodule.c"
        _PyString_ConcatAndDel($repr_addr, $46); //@line 1072 "datetimemodule.c"
        var $47=HEAP[$repr_addr]; //@line 1073 "datetimemodule.c"
        $0=$47; //@line 1073 "datetimemodule.c"
        __label__ = 13; break; //@line 1073 "datetimemodule.c"
      case 13: // $bb12
        var $48=$0; //@line 1055 "datetimemodule.c"
        $retval=$48; //@line 1055 "datetimemodule.c"
        var $retval13=$retval; //@line 1055 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 1055 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _format_ctime($date, $hours, $minutes, $seconds) {
    var __stackBase__  = STACKTOP; STACKTOP += 128; _memset(__stackBase__, 0, 128);
    var __label__;
  
    var $date_addr;
    var $hours_addr;
    var $minutes_addr;
    var $seconds_addr;
    var $retval;
    var $0;
    var $buffer=__stackBase__;
    var $wday;
    $date_addr=$date;
    $hours_addr=$hours;
    $minutes_addr=$minutes;
    $seconds_addr=$seconds;
    var $1=$date_addr; //@line 1092 "datetimemodule.c"
    var $2=$1+13; //@line 1092 "datetimemodule.c"
    var $3=$2+3; //@line 1092 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 1092 "datetimemodule.c"
    var $5=($4); //@line 1092 "datetimemodule.c"
    var $6=$date_addr; //@line 1092 "datetimemodule.c"
    var $7=$6+13; //@line 1092 "datetimemodule.c"
    var $8=$7+2; //@line 1092 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 1092 "datetimemodule.c"
    var $10=($9); //@line 1092 "datetimemodule.c"
    var $11=$date_addr; //@line 1092 "datetimemodule.c"
    var $12=$11+13; //@line 1092 "datetimemodule.c"
    var $13=$12; //@line 1092 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 1092 "datetimemodule.c"
    var $15=($14); //@line 1092 "datetimemodule.c"
    var $16=($15) << 8; //@line 1092 "datetimemodule.c"
    var $17=$date_addr; //@line 1092 "datetimemodule.c"
    var $18=$17+13; //@line 1092 "datetimemodule.c"
    var $19=$18+1; //@line 1092 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 1092 "datetimemodule.c"
    var $21=($20); //@line 1092 "datetimemodule.c"
    var $22=($21) | ($16); //@line 1092 "datetimemodule.c"
    var $23=_weekday($22, $10, $5); //@line 1092 "datetimemodule.c"
    $wday=$23; //@line 1092 "datetimemodule.c"
    var $24=$date_addr; //@line 1094 "datetimemodule.c"
    var $25=$24+13; //@line 1094 "datetimemodule.c"
    var $26=$25; //@line 1094 "datetimemodule.c"
    var $27=HEAP[$26]; //@line 1094 "datetimemodule.c"
    var $28=($27); //@line 1094 "datetimemodule.c"
    var $29=($28) << 8; //@line 1094 "datetimemodule.c"
    var $30=$date_addr; //@line 1094 "datetimemodule.c"
    var $31=$30+13; //@line 1094 "datetimemodule.c"
    var $32=$31+1; //@line 1094 "datetimemodule.c"
    var $33=HEAP[$32]; //@line 1094 "datetimemodule.c"
    var $34=($33); //@line 1094 "datetimemodule.c"
    var $35=($34) | ($29); //@line 1094 "datetimemodule.c"
    var $36=$date_addr; //@line 1094 "datetimemodule.c"
    var $37=$36+13; //@line 1094 "datetimemodule.c"
    var $38=$37+3; //@line 1094 "datetimemodule.c"
    var $39=HEAP[$38]; //@line 1094 "datetimemodule.c"
    var $40=($39); //@line 1094 "datetimemodule.c"
    var $41=$date_addr; //@line 1094 "datetimemodule.c"
    var $42=$41+13; //@line 1094 "datetimemodule.c"
    var $43=$42+2; //@line 1094 "datetimemodule.c"
    var $44=HEAP[$43]; //@line 1094 "datetimemodule.c"
    var $45=($44); //@line 1094 "datetimemodule.c"
    var $46=($45) - 1; //@line 1094 "datetimemodule.c"
    var $47=_MonthNames_9355+$46*4; //@line 1094 "datetimemodule.c"
    var $48=HEAP[$47]; //@line 1094 "datetimemodule.c"
    var $49=$wday; //@line 1094 "datetimemodule.c"
    var $50=_DayNames_9354+$49*4; //@line 1094 "datetimemodule.c"
    var $51=HEAP[$50]; //@line 1094 "datetimemodule.c"
    var $buffer1=$buffer; //@line 1094 "datetimemodule.c"
    var $52=$hours_addr; //@line 1094 "datetimemodule.c"
    var $53=$minutes_addr; //@line 1094 "datetimemodule.c"
    var $54=$seconds_addr; //@line 1094 "datetimemodule.c"
    var $55=_PyOS_snprintf($buffer1, 128, __str71, allocate([$51,0,0,0,$48,0,0,0,$40,0,0,0,$52,0,0,0,$53,0,0,0,$54,0,0,0,$35,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1094 "datetimemodule.c"
    var $buffer2=$buffer; //@line 1098 "datetimemodule.c"
    var $56=_PyString_FromString($buffer2); //@line 1098 "datetimemodule.c"
    $0=$56; //@line 1098 "datetimemodule.c"
    var $57=$0; //@line 1098 "datetimemodule.c"
    $retval=$57; //@line 1098 "datetimemodule.c"
    var $retval3=$retval; //@line 1098 "datetimemodule.c"
    STACKTOP = __stackBase__;
    return $retval3; //@line 1098 "datetimemodule.c"
  }
  

  function _format_utcoffset($buf, $sep, $tzinfo, $tzinfoarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $buf_addr;
        var $buflen_addr;
        var $sep_addr;
        var $tzinfo_addr;
        var $tzinfoarg_addr;
        var $retval;
        var $0;
        var $offset;
        var $hours;
        var $minutes=__stackBase__;
        var $sign;
        var $none=__stackBase__+4;
        $buf_addr=$buf;
        $buflen_addr=100;
        $sep_addr=$sep;
        $tzinfo_addr=$tzinfo;
        $tzinfoarg_addr=$tzinfoarg;
        var $1=$buflen_addr; //@line 1121 "datetimemodule.c"
        var $2=($1)==0; //@line 1121 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1121 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str72, __str1, 1121, ___PRETTY_FUNCTION___9398); //@line 1121 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1121 "datetimemodule.c"
      case 2: // $bb1
        var $3=$tzinfo_addr; //@line 1123 "datetimemodule.c"
        var $4=$tzinfoarg_addr; //@line 1123 "datetimemodule.c"
        var $5=_call_utcoffset($3, $4, $none); //@line 1123 "datetimemodule.c"
        $offset=$5; //@line 1123 "datetimemodule.c"
        var $6=$offset; //@line 1124 "datetimemodule.c"
        var $7=($6)==-1; //@line 1124 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1124 "datetimemodule.c"
      case 3: // $bb2
        var $8=_PyErr_Occurred(); //@line 1124 "datetimemodule.c"
        var $9=($8)!=0; //@line 1124 "datetimemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1124 "datetimemodule.c"
      case 4: // $bb3
        $0=-1; //@line 1125 "datetimemodule.c"
        __label__ = 10; break; //@line 1125 "datetimemodule.c"
      case 5: // $bb4
        var $10=HEAP[$none]; //@line 1126 "datetimemodule.c"
        var $11=($10)!=0; //@line 1126 "datetimemodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1126 "datetimemodule.c"
      case 6: // $bb5
        var $12=$buf_addr; //@line 1127 "datetimemodule.c"
        HEAP[$12]=0; //@line 1127 "datetimemodule.c"
        $0=0; //@line 1128 "datetimemodule.c"
        __label__ = 10; break; //@line 1128 "datetimemodule.c"
      case 7: // $bb6
        $sign=43; //@line 1130 "datetimemodule.c"
        var $13=$offset; //@line 1131 "datetimemodule.c"
        var $14=($13) < 0; //@line 1131 "datetimemodule.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1131 "datetimemodule.c"
      case 8: // $bb7
        $sign=45; //@line 1132 "datetimemodule.c"
        var $15=$offset; //@line 1133 "datetimemodule.c"
        var $16=0 - ($15); //@line 1133 "datetimemodule.c"
        $offset=$16; //@line 1133 "datetimemodule.c"
        __label__ = 9; break; //@line 1133 "datetimemodule.c"
      case 9: // $bb8
        var $17=$offset; //@line 1135 "datetimemodule.c"
        var $18=_divmod($17, 60, $minutes); //@line 1135 "datetimemodule.c"
        $hours=$18; //@line 1135 "datetimemodule.c"
        var $19=HEAP[$minutes]; //@line 1136 "datetimemodule.c"
        var $20=$sign; //@line 1136 "datetimemodule.c"
        var $21=($20); //@line 1136 "datetimemodule.c"
        var $22=$buf_addr; //@line 1136 "datetimemodule.c"
        var $23=$buflen_addr; //@line 1136 "datetimemodule.c"
        var $24=$hours; //@line 1136 "datetimemodule.c"
        var $25=$sep_addr; //@line 1136 "datetimemodule.c"
        var $26=_PyOS_snprintf($22, $23, __str73, allocate([$21,0,0,0,$24,0,0,0,$25,0,0,0,$19,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1136 "datetimemodule.c"
        $0=0; //@line 1137 "datetimemodule.c"
        __label__ = 10; break; //@line 1137 "datetimemodule.c"
      case 10: // $bb9
        var $27=$0; //@line 1125 "datetimemodule.c"
        $retval=$27; //@line 1125 "datetimemodule.c"
        var $retval10=$retval; //@line 1125 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1125 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _make_freplacement($object) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr;
        var $retval;
        var $0;
        var $freplacement=__stackBase__;
        $object_addr=$object;
        var $1=$object_addr; //@line 1144 "datetimemodule.c"
        var $2=$1+4; //@line 1144 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1144 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_TimeType); //@line 1144 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1144 "datetimemodule.c"
      case 1: // $bb
        var $5=$object_addr; //@line 1144 "datetimemodule.c"
        var $6=$5+4; //@line 1144 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1144 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_TimeType); //@line 1144 "datetimemodule.c"
        var $9=($8)!=0; //@line 1144 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1144 "datetimemodule.c"
      case 2: // $bb1
        var $10=$object_addr; //@line 1145 "datetimemodule.c"
        var $11=$10; //@line 1145 "datetimemodule.c"
        var $12=$11+13; //@line 1145 "datetimemodule.c"
        var $13=$12+3; //@line 1145 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1145 "datetimemodule.c"
        var $15=($14); //@line 1145 "datetimemodule.c"
        var $16=($15) << 16; //@line 1145 "datetimemodule.c"
        var $17=$object_addr; //@line 1145 "datetimemodule.c"
        var $18=$17; //@line 1145 "datetimemodule.c"
        var $19=$18+13; //@line 1145 "datetimemodule.c"
        var $20=$19+4; //@line 1145 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1145 "datetimemodule.c"
        var $22=($21); //@line 1145 "datetimemodule.c"
        var $23=($22) << 8; //@line 1145 "datetimemodule.c"
        var $24=$object_addr; //@line 1145 "datetimemodule.c"
        var $25=$24; //@line 1145 "datetimemodule.c"
        var $26=$25+13; //@line 1145 "datetimemodule.c"
        var $27=$26+5; //@line 1145 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1145 "datetimemodule.c"
        var $29=($28); //@line 1145 "datetimemodule.c"
        var $30=($23) | ($16); //@line 1145 "datetimemodule.c"
        var $31=($30) | ($29); //@line 1145 "datetimemodule.c"
        var $freplacement2=$freplacement; //@line 1145 "datetimemodule.c"
        var $32=_sprintf($freplacement2, __str74, allocate([$31,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1145 "datetimemodule.c"
        __label__ = 7; break; //@line 1145 "datetimemodule.c"
      case 3: // $bb3
        var $33=$object_addr; //@line 1146 "datetimemodule.c"
        var $34=$33+4; //@line 1146 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 1146 "datetimemodule.c"
        var $36=($35)==(_PyDateTime_DateTimeType); //@line 1146 "datetimemodule.c"
        if ($36) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1146 "datetimemodule.c"
      case 4: // $bb4
        var $37=$object_addr; //@line 1146 "datetimemodule.c"
        var $38=$37+4; //@line 1146 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 1146 "datetimemodule.c"
        var $40=_PyType_IsSubtype($39, _PyDateTime_DateTimeType); //@line 1146 "datetimemodule.c"
        var $41=($40)!=0; //@line 1146 "datetimemodule.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1146 "datetimemodule.c"
      case 5: // $bb5
        var $42=$object_addr; //@line 1147 "datetimemodule.c"
        var $43=$42; //@line 1147 "datetimemodule.c"
        var $44=$43+13; //@line 1147 "datetimemodule.c"
        var $45=$44+7; //@line 1147 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 1147 "datetimemodule.c"
        var $47=($46); //@line 1147 "datetimemodule.c"
        var $48=($47) << 16; //@line 1147 "datetimemodule.c"
        var $49=$object_addr; //@line 1147 "datetimemodule.c"
        var $50=$49; //@line 1147 "datetimemodule.c"
        var $51=$50+13; //@line 1147 "datetimemodule.c"
        var $52=$51+8; //@line 1147 "datetimemodule.c"
        var $53=HEAP[$52]; //@line 1147 "datetimemodule.c"
        var $54=($53); //@line 1147 "datetimemodule.c"
        var $55=($54) << 8; //@line 1147 "datetimemodule.c"
        var $56=$object_addr; //@line 1147 "datetimemodule.c"
        var $57=$56; //@line 1147 "datetimemodule.c"
        var $58=$57+13; //@line 1147 "datetimemodule.c"
        var $59=$58+9; //@line 1147 "datetimemodule.c"
        var $60=HEAP[$59]; //@line 1147 "datetimemodule.c"
        var $61=($60); //@line 1147 "datetimemodule.c"
        var $62=($55) | ($48); //@line 1147 "datetimemodule.c"
        var $63=($62) | ($61); //@line 1147 "datetimemodule.c"
        var $freplacement6=$freplacement; //@line 1147 "datetimemodule.c"
        var $64=_sprintf($freplacement6, __str74, allocate([$63,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1147 "datetimemodule.c"
        __label__ = 7; break; //@line 1147 "datetimemodule.c"
      case 6: // $bb7
        var $freplacement8=$freplacement; //@line 1149 "datetimemodule.c"
        var $65=_sprintf($freplacement8, __str74, allocate(4, "i32", ALLOC_STACK)); //@line 1149 "datetimemodule.c"
        __label__ = 7; break; //@line 1149 "datetimemodule.c"
      case 7: // $bb9
        var $freplacement10=$freplacement; //@line 1151 "datetimemodule.c"
        var $66=_strlen($freplacement10); //@line 1151 "datetimemodule.c"
        var $freplacement11=$freplacement; //@line 1151 "datetimemodule.c"
        var $67=_PyString_FromStringAndSize($freplacement11, $66); //@line 1151 "datetimemodule.c"
        $0=$67; //@line 1151 "datetimemodule.c"
        var $68=$0; //@line 1151 "datetimemodule.c"
        $retval=$68; //@line 1151 "datetimemodule.c"
        var $retval12=$retval; //@line 1151 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1151 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _wrap_strftime($object, $format, $format_len, $timetuple, $tzinfoarg) {
    var __stackBase__  = STACKTOP; STACKTOP += 104; _memset(__stackBase__, 0, 104);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr;
        var $format_addr;
        var $format_len_addr;
        var $timetuple_addr;
        var $tzinfoarg_addr;
        var $retval;
        var $0;
        var $result;
        var $zreplacement;
        var $Zreplacement;
        var $freplacement;
        var $pin;
        var $ch;
        var $newfmt=__stackBase__;
        var $pnew;
        var $totalnew;
        var $usednew;
        var $ptoappend;
        var $ntoappend;
        var $year;
        var $pyyear;
        var $buf=__stackBase__+4;
        var $tzinfo;
        var $tzinfo38;
        var $temp;
        var $bigger;
        var $time;
        $object_addr=$object;
        $format_addr=$format;
        $format_len_addr=$format_len;
        $timetuple_addr=$timetuple;
        $tzinfoarg_addr=$tzinfoarg;
        $result=0; //@line 1165 "datetimemodule.c"
        $zreplacement=0; //@line 1167 "datetimemodule.c"
        $Zreplacement=0; //@line 1168 "datetimemodule.c"
        $freplacement=0; //@line 1169 "datetimemodule.c"
        HEAP[$newfmt]=0; //@line 1174 "datetimemodule.c"
        var $1=$object_addr; //@line 1183 "datetimemodule.c"
        var $2=($1)==0; //@line 1183 "datetimemodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1183 "datetimemodule.c"
      case 1: // $bb
        var $3=$format_addr; //@line 1183 "datetimemodule.c"
        var $4=($3)==0; //@line 1183 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1183 "datetimemodule.c"
      case 2: // $bb1
        var $5=$timetuple_addr; //@line 1183 "datetimemodule.c"
        var $6=($5)==0; //@line 1183 "datetimemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1183 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str75, __str1, 1183, ___PRETTY_FUNCTION___9485); //@line 1183 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1183 "datetimemodule.c"
      case 4: // $bb3
        var $7=$timetuple_addr; //@line 1196 "datetimemodule.c"
        var $8=_PySequence_GetItem($7, 0); //@line 1196 "datetimemodule.c"
        $pyyear=$8; //@line 1196 "datetimemodule.c"
        var $9=$pyyear; //@line 1197 "datetimemodule.c"
        var $10=($9)==0; //@line 1197 "datetimemodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1197 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 1197 "datetimemodule.c"
        __label__ = 91; break; //@line 1197 "datetimemodule.c"
      case 6: // $bb5
        var $11=$pyyear; //@line 1198 "datetimemodule.c"
        var $12=$11+4; //@line 1198 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 1198 "datetimemodule.c"
        var $14=$13+84; //@line 1198 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 1198 "datetimemodule.c"
        var $16=($15) & 8388608; //@line 1198 "datetimemodule.c"
        var $17=($16)==0; //@line 1198 "datetimemodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1198 "datetimemodule.c"
      case 7: // $bb6
        ___assert_fail(__str76, __str1, 1198, ___PRETTY_FUNCTION___9485); //@line 1198 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1198 "datetimemodule.c"
      case 8: // $bb7
        var $18=$pyyear; //@line 1199 "datetimemodule.c"
        var $19=_PyInt_AsLong($18); //@line 1199 "datetimemodule.c"
        $year=$19; //@line 1199 "datetimemodule.c"
        var $20=$pyyear; //@line 1200 "datetimemodule.c"
        var $21=$20; //@line 1200 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1200 "datetimemodule.c"
        var $23=($22) - 1; //@line 1200 "datetimemodule.c"
        var $24=$pyyear; //@line 1200 "datetimemodule.c"
        var $25=$24; //@line 1200 "datetimemodule.c"
        HEAP[$25]=$23; //@line 1200 "datetimemodule.c"
        var $26=$pyyear; //@line 1200 "datetimemodule.c"
        var $27=$26; //@line 1200 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1200 "datetimemodule.c"
        var $29=($28)==0; //@line 1200 "datetimemodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1200 "datetimemodule.c"
      case 9: // $bb8
        var $30=$pyyear; //@line 1200 "datetimemodule.c"
        var $31=$30+4; //@line 1200 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 1200 "datetimemodule.c"
        var $33=$32+24; //@line 1200 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 1200 "datetimemodule.c"
        var $35=$pyyear; //@line 1200 "datetimemodule.c"
        FUNCTION_TABLE[$34]($35); //@line 1200 "datetimemodule.c"
        __label__ = 10; break; //@line 1200 "datetimemodule.c"
      case 10: // $bb9
        var $36=$year; //@line 1201 "datetimemodule.c"
        var $37=($36) <= 1899; //@line 1201 "datetimemodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1201 "datetimemodule.c"
      case 11: // $bb10
        var $38=HEAP[_PyExc_ValueError]; //@line 1202 "datetimemodule.c"
        var $39=$year; //@line 1202 "datetimemodule.c"
        var $40=_PyErr_Format($38, __str77, allocate([$39,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1202 "datetimemodule.c"
        $0=0; //@line 1206 "datetimemodule.c"
        __label__ = 91; break; //@line 1206 "datetimemodule.c"
      case 12: // $bb11
        var $41=$format_len_addr; //@line 1214 "datetimemodule.c"
        var $42=($41) > 2147483646; //@line 1214 "datetimemodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1214 "datetimemodule.c"
      case 13: // $bb12
        var $43=_PyErr_NoMemory(); //@line 1215 "datetimemodule.c"
        __label__ = 78; break; //@line 1215 "datetimemodule.c"
      case 14: // $bb13
        var $44=$format_len_addr; //@line 1219 "datetimemodule.c"
        var $45=($44) + 1; //@line 1219 "datetimemodule.c"
        $totalnew=$45; //@line 1219 "datetimemodule.c"
        var $46=$totalnew; //@line 1220 "datetimemodule.c"
        var $47=_PyString_FromStringAndSize(0, $46); //@line 1220 "datetimemodule.c"
        HEAP[$newfmt]=$47; //@line 1220 "datetimemodule.c"
        var $48=HEAP[$newfmt]; //@line 1221 "datetimemodule.c"
        var $49=($48)==0; //@line 1221 "datetimemodule.c"
        if ($49) { __label__ = 78; break; } else { __label__ = 15; break; } //@line 1221 "datetimemodule.c"
      case 15: // $bb14
        var $50=HEAP[$newfmt]; //@line 1222 "datetimemodule.c"
        var $51=_PyString_AsString($50); //@line 1222 "datetimemodule.c"
        $pnew=$51; //@line 1222 "datetimemodule.c"
        $usednew=0; //@line 1223 "datetimemodule.c"
        var $52=$format_addr; //@line 1225 "datetimemodule.c"
        $pin=$52; //@line 1225 "datetimemodule.c"
        var $buf27=$buf; //@line 1247 "datetimemodule.c"
        var $buf31=$buf; //@line 1254 "datetimemodule.c"
        __label__ = 73; break; //@line 1225 "datetimemodule.c"
      case 16: // $bb15
        var $53=$ch; //@line 1227 "datetimemodule.c"
        var $54=($53)!=37; //@line 1227 "datetimemodule.c"
        var $55=$pin; //@line 1228 "datetimemodule.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1227 "datetimemodule.c"
      case 17: // $bb16
        var $56=$55+-1; //@line 1228 "datetimemodule.c"
        $ptoappend=$56; //@line 1228 "datetimemodule.c"
        $ntoappend=1; //@line 1229 "datetimemodule.c"
        __lastLabel__ = 17; __label__ = 63; break; //@line 1229 "datetimemodule.c"
      case 18: // $bb17
        var $57=HEAP[$55]; //@line 1231 "datetimemodule.c"
        $ch=$57; //@line 1231 "datetimemodule.c"
        var $58=$ch; //@line 1231 "datetimemodule.c"
        var $59=($58)==0; //@line 1231 "datetimemodule.c"
        var $60=($59); //@line 1231 "datetimemodule.c"
        var $61=$pin; //@line 1231 "datetimemodule.c"
        var $62=$61+1; //@line 1231 "datetimemodule.c"
        $pin=$62; //@line 1231 "datetimemodule.c"
        var $toBool=($60)!=0; //@line 1231 "datetimemodule.c"
        if ($toBool) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1231 "datetimemodule.c"
      case 19: // $bb18
        var $63=HEAP[_PyExc_ValueError]; //@line 1233 "datetimemodule.c"
        _PyErr_SetString($63, __str78); //@line 1233 "datetimemodule.c"
        __label__ = 78; break; //@line 1233 "datetimemodule.c"
      case 20: // $bb19
        var $64=$ch; //@line 1238 "datetimemodule.c"
        var $65=($64)==122; //@line 1238 "datetimemodule.c"
        if ($65) { __label__ = 21; break; } else { __label__ = 33; break; } //@line 1238 "datetimemodule.c"
      case 21: // $bb20
        var $66=$zreplacement; //@line 1239 "datetimemodule.c"
        var $67=($66)==0; //@line 1239 "datetimemodule.c"
        if ($67) { __label__ = 22; break; } else { __label__ = 32; break; } //@line 1239 "datetimemodule.c"
      case 22: // $bb21
        var $68=$object_addr; //@line 1242 "datetimemodule.c"
        var $69=_get_tzinfo_member($68); //@line 1242 "datetimemodule.c"
        $tzinfo=$69; //@line 1242 "datetimemodule.c"
        var $70=_PyString_FromString(__str79); //@line 1243 "datetimemodule.c"
        $zreplacement=$70; //@line 1243 "datetimemodule.c"
        var $71=$zreplacement; //@line 1244 "datetimemodule.c"
        var $72=($71)==0; //@line 1244 "datetimemodule.c"
        if ($72) { __label__ = 78; break; } else { __label__ = 23; break; } //@line 1244 "datetimemodule.c"
      case 23: // $bb22
        var $73=$tzinfo; //@line 1245 "datetimemodule.c"
        var $74=($73)!=(__Py_NoneStruct); //@line 1245 "datetimemodule.c"
        var $75=$tzinfo; //@line 1245 "datetimemodule.c"
        var $76=($75)!=0; //@line 1245 "datetimemodule.c"
        var $or_cond=($74) & ($76);
        if ($or_cond) { __label__ = 24; break; } else { __label__ = 30; break; } //@line 1245 "datetimemodule.c"
      case 24: // $bb24
        var $77=$tzinfoarg_addr; //@line 1246 "datetimemodule.c"
        var $78=($77)==0; //@line 1246 "datetimemodule.c"
        if ($78) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1246 "datetimemodule.c"
      case 25: // $bb25
        ___assert_fail(__str38, __str1, 1246, ___PRETTY_FUNCTION___9485); //@line 1246 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1246 "datetimemodule.c"
      case 26: // $bb26
        var $79=$tzinfo; //@line 1247 "datetimemodule.c"
        var $80=$tzinfoarg_addr; //@line 1247 "datetimemodule.c"
        var $81=_format_utcoffset($buf27, __str79, $79, $80); //@line 1247 "datetimemodule.c"
        var $82=($81) < 0; //@line 1247 "datetimemodule.c"
        if ($82) { __label__ = 78; break; } else { __label__ = 27; break; } //@line 1247 "datetimemodule.c"
      case 27: // $bb28
        var $83=$zreplacement; //@line 1253 "datetimemodule.c"
        var $84=$83; //@line 1253 "datetimemodule.c"
        var $85=HEAP[$84]; //@line 1253 "datetimemodule.c"
        var $86=($85) - 1; //@line 1253 "datetimemodule.c"
        var $87=$zreplacement; //@line 1253 "datetimemodule.c"
        var $88=$87; //@line 1253 "datetimemodule.c"
        HEAP[$88]=$86; //@line 1253 "datetimemodule.c"
        var $89=$zreplacement; //@line 1253 "datetimemodule.c"
        var $90=$89; //@line 1253 "datetimemodule.c"
        var $91=HEAP[$90]; //@line 1253 "datetimemodule.c"
        var $92=($91)==0; //@line 1253 "datetimemodule.c"
        if ($92) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1253 "datetimemodule.c"
      case 28: // $bb29
        var $93=$zreplacement; //@line 1253 "datetimemodule.c"
        var $94=$93+4; //@line 1253 "datetimemodule.c"
        var $95=HEAP[$94]; //@line 1253 "datetimemodule.c"
        var $96=$95+24; //@line 1253 "datetimemodule.c"
        var $97=HEAP[$96]; //@line 1253 "datetimemodule.c"
        var $98=$zreplacement; //@line 1253 "datetimemodule.c"
        FUNCTION_TABLE[$97]($98); //@line 1253 "datetimemodule.c"
        __label__ = 29; break; //@line 1253 "datetimemodule.c"
      case 29: // $bb30
        var $99=_PyString_FromString($buf31); //@line 1254 "datetimemodule.c"
        $zreplacement=$99; //@line 1254 "datetimemodule.c"
        var $100=($99)==0; //@line 1255 "datetimemodule.c"
        if ($100) { __label__ = 78; break; } else { __label__ = 32; break; } //@line 1255 "datetimemodule.c"
      case 30: // $bb32
        var $_pr=$zreplacement;
        var $101=($_pr)==0; //@line 1258 "datetimemodule.c"
        if ($101) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1258 "datetimemodule.c"
      case 31: // $bb33
        ___assert_fail(__str80, __str1, 1258, ___PRETTY_FUNCTION___9485); //@line 1258 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1258 "datetimemodule.c"
      case 32: // $bb34
        var $102=$zreplacement; //@line 1259 "datetimemodule.c"
        var $103=$102; //@line 1259 "datetimemodule.c"
        var $104=$103+20; //@line 1259 "datetimemodule.c"
        var $105=$104; //@line 1259 "datetimemodule.c"
        $ptoappend=$105; //@line 1259 "datetimemodule.c"
        var $106=$zreplacement; //@line 1260 "datetimemodule.c"
        var $107=$106; //@line 1260 "datetimemodule.c"
        var $108=$107+8; //@line 1260 "datetimemodule.c"
        var $109=HEAP[$108]; //@line 1260 "datetimemodule.c"
        $ntoappend=$109; //@line 1260 "datetimemodule.c"
        __label__ = 62; break; //@line 1260 "datetimemodule.c"
      case 33: // $bb35
        var $110=$ch; //@line 1262 "datetimemodule.c"
        var $111=($110)==90; //@line 1262 "datetimemodule.c"
        if ($111) { __label__ = 34; break; } else { __label__ = 55; break; } //@line 1262 "datetimemodule.c"
      case 34: // $bb36
        var $112=$Zreplacement; //@line 1264 "datetimemodule.c"
        var $113=($112)==0; //@line 1264 "datetimemodule.c"
        if ($113) { __label__ = 35; break; } else { __label__ = 54; break; } //@line 1264 "datetimemodule.c"
      case 35: // $bb37
        var $114=$object_addr; //@line 1265 "datetimemodule.c"
        var $115=_get_tzinfo_member($114); //@line 1265 "datetimemodule.c"
        $tzinfo38=$115; //@line 1265 "datetimemodule.c"
        var $116=_PyString_FromString(__str79); //@line 1266 "datetimemodule.c"
        $Zreplacement=$116; //@line 1266 "datetimemodule.c"
        var $117=$Zreplacement; //@line 1267 "datetimemodule.c"
        var $118=($117)==0; //@line 1267 "datetimemodule.c"
        if ($118) { __label__ = 78; break; } else { __label__ = 36; break; } //@line 1267 "datetimemodule.c"
      case 36: // $bb39
        var $119=$tzinfo38; //@line 1268 "datetimemodule.c"
        var $120=($119)!=(__Py_NoneStruct); //@line 1268 "datetimemodule.c"
        var $121=$tzinfo38; //@line 1268 "datetimemodule.c"
        var $122=($121)!=0; //@line 1268 "datetimemodule.c"
        var $or_cond3=($120) & ($122);
        if ($or_cond3) { __label__ = 37; break; } else { __label__ = 52; break; } //@line 1268 "datetimemodule.c"
      case 37: // $bb41
        var $123=$tzinfoarg_addr; //@line 1270 "datetimemodule.c"
        var $124=($123)==0; //@line 1270 "datetimemodule.c"
        if ($124) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1270 "datetimemodule.c"
      case 38: // $bb42
        ___assert_fail(__str38, __str1, 1270, ___PRETTY_FUNCTION___9485); //@line 1270 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1270 "datetimemodule.c"
      case 39: // $bb43
        var $125=$tzinfo38; //@line 1271 "datetimemodule.c"
        var $126=$tzinfoarg_addr; //@line 1271 "datetimemodule.c"
        var $127=_call_tzname($125, $126); //@line 1271 "datetimemodule.c"
        $temp=$127; //@line 1271 "datetimemodule.c"
        var $128=$temp; //@line 1272 "datetimemodule.c"
        var $129=($128)==0; //@line 1272 "datetimemodule.c"
        if ($129) { __label__ = 78; break; } else { __label__ = 40; break; } //@line 1272 "datetimemodule.c"
      case 40: // $bb44
        var $130=$temp; //@line 1273 "datetimemodule.c"
        var $131=($130)!=(__Py_NoneStruct); //@line 1273 "datetimemodule.c"
        var $132=$temp; //@line 1274 "datetimemodule.c"
        if ($131) { __label__ = 41; break; } else { __label__ = 50; break; } //@line 1273 "datetimemodule.c"
      case 41: // $bb45
        var $133=$132+4; //@line 1274 "datetimemodule.c"
        var $134=HEAP[$133]; //@line 1274 "datetimemodule.c"
        var $135=$134+84; //@line 1274 "datetimemodule.c"
        var $136=HEAP[$135]; //@line 1274 "datetimemodule.c"
        var $137=($136) & 134217728; //@line 1274 "datetimemodule.c"
        var $138=($137)==0; //@line 1274 "datetimemodule.c"
        if ($138) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1274 "datetimemodule.c"
      case 42: // $bb46
        ___assert_fail(__str81, __str1, 1274, ___PRETTY_FUNCTION___9485); //@line 1274 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1274 "datetimemodule.c"
      case 43: // $bb47
        var $139=$Zreplacement; //@line 1281 "datetimemodule.c"
        var $140=$139; //@line 1281 "datetimemodule.c"
        var $141=HEAP[$140]; //@line 1281 "datetimemodule.c"
        var $142=($141) - 1; //@line 1281 "datetimemodule.c"
        var $143=$Zreplacement; //@line 1281 "datetimemodule.c"
        var $144=$143; //@line 1281 "datetimemodule.c"
        HEAP[$144]=$142; //@line 1281 "datetimemodule.c"
        var $145=$Zreplacement; //@line 1281 "datetimemodule.c"
        var $146=$145; //@line 1281 "datetimemodule.c"
        var $147=HEAP[$146]; //@line 1281 "datetimemodule.c"
        var $148=($147)==0; //@line 1281 "datetimemodule.c"
        if ($148) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1281 "datetimemodule.c"
      case 44: // $bb48
        var $149=$Zreplacement; //@line 1281 "datetimemodule.c"
        var $150=$149+4; //@line 1281 "datetimemodule.c"
        var $151=HEAP[$150]; //@line 1281 "datetimemodule.c"
        var $152=$151+24; //@line 1281 "datetimemodule.c"
        var $153=HEAP[$152]; //@line 1281 "datetimemodule.c"
        var $154=$Zreplacement; //@line 1281 "datetimemodule.c"
        FUNCTION_TABLE[$153]($154); //@line 1281 "datetimemodule.c"
        __label__ = 45; break; //@line 1281 "datetimemodule.c"
      case 45: // $bb49
        var $155=$temp; //@line 1282 "datetimemodule.c"
        var $156=__PyObject_CallMethod_SizeT($155, __str82, __str83, allocate([__str84,0,0,0,__str85,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1282 "datetimemodule.c"
        $Zreplacement=$156; //@line 1282 "datetimemodule.c"
        var $157=$temp; //@line 1285 "datetimemodule.c"
        var $158=$157; //@line 1285 "datetimemodule.c"
        var $159=HEAP[$158]; //@line 1285 "datetimemodule.c"
        var $160=($159) - 1; //@line 1285 "datetimemodule.c"
        var $161=$temp; //@line 1285 "datetimemodule.c"
        var $162=$161; //@line 1285 "datetimemodule.c"
        HEAP[$162]=$160; //@line 1285 "datetimemodule.c"
        var $163=$temp; //@line 1285 "datetimemodule.c"
        var $164=$163; //@line 1285 "datetimemodule.c"
        var $165=HEAP[$164]; //@line 1285 "datetimemodule.c"
        var $166=($165)==0; //@line 1285 "datetimemodule.c"
        if ($166) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1285 "datetimemodule.c"
      case 46: // $bb50
        var $167=$temp; //@line 1285 "datetimemodule.c"
        var $168=$167+4; //@line 1285 "datetimemodule.c"
        var $169=HEAP[$168]; //@line 1285 "datetimemodule.c"
        var $170=$169+24; //@line 1285 "datetimemodule.c"
        var $171=HEAP[$170]; //@line 1285 "datetimemodule.c"
        var $172=$temp; //@line 1285 "datetimemodule.c"
        FUNCTION_TABLE[$171]($172); //@line 1285 "datetimemodule.c"
        __label__ = 47; break; //@line 1285 "datetimemodule.c"
      case 47: // $bb51
        var $173=$Zreplacement; //@line 1286 "datetimemodule.c"
        var $174=($173)==0; //@line 1286 "datetimemodule.c"
        if ($174) { __label__ = 78; break; } else { __label__ = 48; break; } //@line 1286 "datetimemodule.c"
      case 48: // $bb52
        var $175=$Zreplacement; //@line 1288 "datetimemodule.c"
        var $176=$175+4; //@line 1288 "datetimemodule.c"
        var $177=HEAP[$176]; //@line 1288 "datetimemodule.c"
        var $178=$177+84; //@line 1288 "datetimemodule.c"
        var $179=HEAP[$178]; //@line 1288 "datetimemodule.c"
        var $180=($179) & 134217728; //@line 1288 "datetimemodule.c"
        var $181=($180)==0; //@line 1288 "datetimemodule.c"
        if ($181) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 1288 "datetimemodule.c"
      case 49: // $bb53
        var $182=HEAP[_PyExc_TypeError]; //@line 1289 "datetimemodule.c"
        _PyErr_SetString($182, __str86); //@line 1289 "datetimemodule.c"
        __label__ = 78; break; //@line 1289 "datetimemodule.c"
      case 50: // $bb55
        var $183=$132; //@line 1294 "datetimemodule.c"
        var $184=HEAP[$183]; //@line 1294 "datetimemodule.c"
        var $185=($184) - 1; //@line 1294 "datetimemodule.c"
        var $186=$temp; //@line 1294 "datetimemodule.c"
        var $187=$186; //@line 1294 "datetimemodule.c"
        HEAP[$187]=$185; //@line 1294 "datetimemodule.c"
        var $188=$temp; //@line 1294 "datetimemodule.c"
        var $189=$188; //@line 1294 "datetimemodule.c"
        var $190=HEAP[$189]; //@line 1294 "datetimemodule.c"
        var $191=($190)==0; //@line 1294 "datetimemodule.c"
        if ($191) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1294 "datetimemodule.c"
      case 51: // $bb56
        var $192=$temp; //@line 1294 "datetimemodule.c"
        var $193=$192+4; //@line 1294 "datetimemodule.c"
        var $194=HEAP[$193]; //@line 1294 "datetimemodule.c"
        var $195=$194+24; //@line 1294 "datetimemodule.c"
        var $196=HEAP[$195]; //@line 1294 "datetimemodule.c"
        var $197=$temp; //@line 1294 "datetimemodule.c"
        FUNCTION_TABLE[$196]($197); //@line 1294 "datetimemodule.c"
        __label__ = 52; break; //@line 1294 "datetimemodule.c"
      case 52: // $bb57
        var $_pr4=$Zreplacement;
        var $198=($_pr4)==0; //@line 1297 "datetimemodule.c"
        if ($198) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1297 "datetimemodule.c"
      case 53: // $bb58
        ___assert_fail(__str87, __str1, 1297, ___PRETTY_FUNCTION___9485); //@line 1297 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1297 "datetimemodule.c"
      case 54: // $bb59
        var $199=$Zreplacement; //@line 1298 "datetimemodule.c"
        var $200=$199; //@line 1298 "datetimemodule.c"
        var $201=$200+20; //@line 1298 "datetimemodule.c"
        var $202=$201; //@line 1298 "datetimemodule.c"
        $ptoappend=$202; //@line 1298 "datetimemodule.c"
        var $203=$Zreplacement; //@line 1299 "datetimemodule.c"
        var $204=$203; //@line 1299 "datetimemodule.c"
        var $205=$204+8; //@line 1299 "datetimemodule.c"
        var $206=HEAP[$205]; //@line 1299 "datetimemodule.c"
        $ntoappend=$206; //@line 1299 "datetimemodule.c"
        __label__ = 62; break; //@line 1299 "datetimemodule.c"
      case 55: // $bb60
        var $207=$ch; //@line 1301 "datetimemodule.c"
        var $208=($207)==102; //@line 1301 "datetimemodule.c"
        if ($208) { __label__ = 56; break; } else { __label__ = 61; break; } //@line 1301 "datetimemodule.c"
      case 56: // $bb61
        var $209=$freplacement; //@line 1303 "datetimemodule.c"
        var $210=($209)==0; //@line 1303 "datetimemodule.c"
        if ($210) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1303 "datetimemodule.c"
      case 57: // $bb62
        var $211=$object_addr; //@line 1304 "datetimemodule.c"
        var $212=_make_freplacement($211); //@line 1304 "datetimemodule.c"
        $freplacement=$212; //@line 1304 "datetimemodule.c"
        var $213=$freplacement; //@line 1305 "datetimemodule.c"
        var $214=($213)==0; //@line 1305 "datetimemodule.c"
        if ($214) { __label__ = 81; break; } else { __label__ = 58; break; } //@line 1305 "datetimemodule.c"
      case 58: // $bb65
        var $215=$freplacement; //@line 1309 "datetimemodule.c"
        var $216=$215+4; //@line 1309 "datetimemodule.c"
        var $217=HEAP[$216]; //@line 1309 "datetimemodule.c"
        var $218=$217+84; //@line 1309 "datetimemodule.c"
        var $219=HEAP[$218]; //@line 1309 "datetimemodule.c"
        var $220=($219) & 134217728; //@line 1309 "datetimemodule.c"
        var $221=($220)==0; //@line 1309 "datetimemodule.c"
        if ($221) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1309 "datetimemodule.c"
      case 59: // $bb66
        ___assert_fail(__str89, __str1, 1309, ___PRETTY_FUNCTION___9485); //@line 1309 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1309 "datetimemodule.c"
      case 60: // $bb67
        var $222=$freplacement; //@line 1310 "datetimemodule.c"
        var $223=$222; //@line 1310 "datetimemodule.c"
        var $224=$223+20; //@line 1310 "datetimemodule.c"
        var $225=$224; //@line 1310 "datetimemodule.c"
        $ptoappend=$225; //@line 1310 "datetimemodule.c"
        var $226=$freplacement; //@line 1311 "datetimemodule.c"
        var $227=$226; //@line 1311 "datetimemodule.c"
        var $228=$227+8; //@line 1311 "datetimemodule.c"
        var $229=HEAP[$228]; //@line 1311 "datetimemodule.c"
        $ntoappend=$229; //@line 1311 "datetimemodule.c"
        __label__ = 62; break; //@line 1311 "datetimemodule.c"
      case 61: // $bb68
        var $230=$pin; //@line 1315 "datetimemodule.c"
        var $231=$230+-2; //@line 1315 "datetimemodule.c"
        $ptoappend=$231; //@line 1315 "datetimemodule.c"
        $ntoappend=2; //@line 1316 "datetimemodule.c"
        __lastLabel__ = 61; __label__ = 63; break; //@line 1316 "datetimemodule.c"
      case 62: // $bb69thread_pre_split
        var $_pr5=$ptoappend;
        __lastLabel__ = 62; __label__ = 63; break;
      case 63: // $bb69
        var $232=__lastLabel__ == 62 ? $_pr5 : (__lastLabel__ == 61 ? $231 : ($56));
        var $233=($232)==0; //@line 1322 "datetimemodule.c"
        if ($233) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 1322 "datetimemodule.c"
      case 64: // $bb70
        ___assert_fail(__str90, __str1, 1322, ___PRETTY_FUNCTION___9485); //@line 1322 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1322 "datetimemodule.c"
      case 65: // $bb71
        var $234=$ntoappend; //@line 1324 "datetimemodule.c"
        var $235=($234)==0; //@line 1324 "datetimemodule.c"
        if ($235) { __label__ = 73; break; } else { __label__ = 70; break; } //@line 1324 "datetimemodule.c"
      case 66: // $bb73
        var $236=$totalnew; //@line 1327 "datetimemodule.c"
        var $237=($236) << 1; //@line 1327 "datetimemodule.c"
        $bigger=$237; //@line 1327 "datetimemodule.c"
        var $238=$bigger; //@line 1328 "datetimemodule.c"
        var $239=($238) >>> 1; //@line 1328 "datetimemodule.c"
        var $240=$totalnew; //@line 1328 "datetimemodule.c"
        var $241=($239)!=($240); //@line 1328 "datetimemodule.c"
        if ($241) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 1328 "datetimemodule.c"
      case 67: // $bb74
        var $242=_PyErr_NoMemory(); //@line 1329 "datetimemodule.c"
        __label__ = 78; break; //@line 1329 "datetimemodule.c"
      case 68: // $bb75
        var $243=$bigger; //@line 1332 "datetimemodule.c"
        var $244=__PyString_Resize($newfmt, $243); //@line 1332 "datetimemodule.c"
        var $245=($244) < 0; //@line 1332 "datetimemodule.c"
        if ($245) { __label__ = 78; break; } else { __label__ = 69; break; } //@line 1332 "datetimemodule.c"
      case 69: // $bb76
        var $246=$bigger; //@line 1334 "datetimemodule.c"
        $totalnew=$246; //@line 1334 "datetimemodule.c"
        var $247=HEAP[$newfmt]; //@line 1335 "datetimemodule.c"
        var $248=_PyString_AsString($247); //@line 1335 "datetimemodule.c"
        var $249=$usednew; //@line 1335 "datetimemodule.c"
        var $250=$248+$249; //@line 1335 "datetimemodule.c"
        $pnew=$250; //@line 1335 "datetimemodule.c"
        __label__ = 70; break; //@line 1335 "datetimemodule.c"
      case 70: // $bb77
        var $251=$usednew; //@line 1326 "datetimemodule.c"
        var $252=$ntoappend; //@line 1326 "datetimemodule.c"
        var $253=($252) + ($251); //@line 1326 "datetimemodule.c"
        var $254=$totalnew; //@line 1326 "datetimemodule.c"
        var $255=($253) > ($254); //@line 1326 "datetimemodule.c"
        if ($255) { __label__ = 66; break; } else { __label__ = 71; break; } //@line 1326 "datetimemodule.c"
      case 71: // $bb78
        var $256=$pnew; //@line 1337 "datetimemodule.c"
        var $257=$ptoappend; //@line 1337 "datetimemodule.c"
        var $258=$ntoappend; //@line 1337 "datetimemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($256, $257, $258, 1, 0); //@line 1337 "datetimemodule.c"
        var $259=$pnew; //@line 1338 "datetimemodule.c"
        var $260=$ntoappend; //@line 1338 "datetimemodule.c"
        var $261=$259+$260; //@line 1338 "datetimemodule.c"
        $pnew=$261; //@line 1338 "datetimemodule.c"
        var $262=$usednew; //@line 1339 "datetimemodule.c"
        var $263=$ntoappend; //@line 1339 "datetimemodule.c"
        var $264=($263) + ($262); //@line 1339 "datetimemodule.c"
        $usednew=$264; //@line 1339 "datetimemodule.c"
        var $265=$usednew; //@line 1340 "datetimemodule.c"
        var $266=$totalnew; //@line 1340 "datetimemodule.c"
        var $267=($265) > ($266); //@line 1340 "datetimemodule.c"
        if ($267) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 1340 "datetimemodule.c"
      case 72: // $bb79
        ___assert_fail(__str91, __str1, 1340, ___PRETTY_FUNCTION___9485); //@line 1340 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1340 "datetimemodule.c"
      case 73: // $bb80
        var $268=$pin; //@line 1226 "datetimemodule.c"
        var $269=HEAP[$268]; //@line 1226 "datetimemodule.c"
        $ch=$269; //@line 1226 "datetimemodule.c"
        var $270=$ch; //@line 1226 "datetimemodule.c"
        var $271=($270)!=0; //@line 1226 "datetimemodule.c"
        var $272=($271); //@line 1226 "datetimemodule.c"
        var $273=$pin; //@line 1226 "datetimemodule.c"
        var $274=$273+1; //@line 1226 "datetimemodule.c"
        $pin=$274; //@line 1226 "datetimemodule.c"
        var $toBool81=($272)!=0; //@line 1226 "datetimemodule.c"
        if ($toBool81) { __label__ = 16; break; } else { __label__ = 74; break; } //@line 1226 "datetimemodule.c"
      case 74: // $bb82
        var $275=$usednew; //@line 1343 "datetimemodule.c"
        var $276=__PyString_Resize($newfmt, $275); //@line 1343 "datetimemodule.c"
        var $277=($276) < 0; //@line 1343 "datetimemodule.c"
        if ($277) { __label__ = 78; break; } else { __label__ = 75; break; } //@line 1343 "datetimemodule.c"
      case 75: // $bb83
        var $278=_PyImport_ImportModuleNoBlock(__str92); //@line 1346 "datetimemodule.c"
        $time=$278; //@line 1346 "datetimemodule.c"
        var $279=$time; //@line 1347 "datetimemodule.c"
        var $280=($279)==0; //@line 1347 "datetimemodule.c"
        if ($280) { __label__ = 78; break; } else { __label__ = 76; break; } //@line 1347 "datetimemodule.c"
      case 76: // $bb84
        var $281=HEAP[$newfmt]; //@line 1349 "datetimemodule.c"
        var $282=$time; //@line 1349 "datetimemodule.c"
        var $283=$timetuple_addr; //@line 1349 "datetimemodule.c"
        var $284=__PyObject_CallMethod_SizeT($282, __str93, __str94, allocate([$281,0,0,0,$283,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 1349 "datetimemodule.c"
        $result=$284; //@line 1349 "datetimemodule.c"
        var $285=$time; //@line 1351 "datetimemodule.c"
        var $286=$285; //@line 1351 "datetimemodule.c"
        var $287=HEAP[$286]; //@line 1351 "datetimemodule.c"
        var $288=($287) - 1; //@line 1351 "datetimemodule.c"
        var $289=$time; //@line 1351 "datetimemodule.c"
        var $290=$289; //@line 1351 "datetimemodule.c"
        HEAP[$290]=$288; //@line 1351 "datetimemodule.c"
        var $291=$time; //@line 1351 "datetimemodule.c"
        var $292=$291; //@line 1351 "datetimemodule.c"
        var $293=HEAP[$292]; //@line 1351 "datetimemodule.c"
        var $294=($293)==0; //@line 1351 "datetimemodule.c"
        if ($294) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 1351 "datetimemodule.c"
      case 77: // $bb85
        var $295=$time; //@line 1351 "datetimemodule.c"
        var $296=$295+4; //@line 1351 "datetimemodule.c"
        var $297=HEAP[$296]; //@line 1351 "datetimemodule.c"
        var $298=$297+24; //@line 1351 "datetimemodule.c"
        var $299=HEAP[$298]; //@line 1351 "datetimemodule.c"
        var $300=$time; //@line 1351 "datetimemodule.c"
        FUNCTION_TABLE[$299]($300); //@line 1351 "datetimemodule.c"
        __label__ = 78; break; //@line 1353 "datetimemodule.c"
      case 78: // $Done
        var $_pr6=$freplacement;
        var $301=($_pr6)!=0; //@line 1354 "datetimemodule.c"
        if ($301) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 1354 "datetimemodule.c"
      case 79: // $bb86
        var $302=$freplacement; //@line 1354 "datetimemodule.c"
        var $303=$302; //@line 1354 "datetimemodule.c"
        var $304=HEAP[$303]; //@line 1354 "datetimemodule.c"
        var $305=($304) - 1; //@line 1354 "datetimemodule.c"
        var $306=$freplacement; //@line 1354 "datetimemodule.c"
        var $307=$306; //@line 1354 "datetimemodule.c"
        HEAP[$307]=$305; //@line 1354 "datetimemodule.c"
        var $308=$freplacement; //@line 1354 "datetimemodule.c"
        var $309=$308; //@line 1354 "datetimemodule.c"
        var $310=HEAP[$309]; //@line 1354 "datetimemodule.c"
        var $311=($310)==0; //@line 1354 "datetimemodule.c"
        if ($311) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 1354 "datetimemodule.c"
      case 80: // $bb87
        var $312=$freplacement; //@line 1354 "datetimemodule.c"
        var $313=$312+4; //@line 1354 "datetimemodule.c"
        var $314=HEAP[$313]; //@line 1354 "datetimemodule.c"
        var $315=$314+24; //@line 1354 "datetimemodule.c"
        var $316=HEAP[$315]; //@line 1354 "datetimemodule.c"
        var $317=$freplacement; //@line 1354 "datetimemodule.c"
        FUNCTION_TABLE[$316]($317); //@line 1354 "datetimemodule.c"
        __label__ = 81; break; //@line 1354 "datetimemodule.c"
      case 81: // $bb88
        var $318=$zreplacement; //@line 1355 "datetimemodule.c"
        var $319=($318)!=0; //@line 1355 "datetimemodule.c"
        if ($319) { __label__ = 82; break; } else { __label__ = 84; break; } //@line 1355 "datetimemodule.c"
      case 82: // $bb89
        var $320=$zreplacement; //@line 1355 "datetimemodule.c"
        var $321=$320; //@line 1355 "datetimemodule.c"
        var $322=HEAP[$321]; //@line 1355 "datetimemodule.c"
        var $323=($322) - 1; //@line 1355 "datetimemodule.c"
        var $324=$zreplacement; //@line 1355 "datetimemodule.c"
        var $325=$324; //@line 1355 "datetimemodule.c"
        HEAP[$325]=$323; //@line 1355 "datetimemodule.c"
        var $326=$zreplacement; //@line 1355 "datetimemodule.c"
        var $327=$326; //@line 1355 "datetimemodule.c"
        var $328=HEAP[$327]; //@line 1355 "datetimemodule.c"
        var $329=($328)==0; //@line 1355 "datetimemodule.c"
        if ($329) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 1355 "datetimemodule.c"
      case 83: // $bb90
        var $330=$zreplacement; //@line 1355 "datetimemodule.c"
        var $331=$330+4; //@line 1355 "datetimemodule.c"
        var $332=HEAP[$331]; //@line 1355 "datetimemodule.c"
        var $333=$332+24; //@line 1355 "datetimemodule.c"
        var $334=HEAP[$333]; //@line 1355 "datetimemodule.c"
        var $335=$zreplacement; //@line 1355 "datetimemodule.c"
        FUNCTION_TABLE[$334]($335); //@line 1355 "datetimemodule.c"
        __label__ = 84; break; //@line 1355 "datetimemodule.c"
      case 84: // $bb91
        var $336=$Zreplacement; //@line 1356 "datetimemodule.c"
        var $337=($336)!=0; //@line 1356 "datetimemodule.c"
        if ($337) { __label__ = 85; break; } else { __label__ = 87; break; } //@line 1356 "datetimemodule.c"
      case 85: // $bb92
        var $338=$Zreplacement; //@line 1356 "datetimemodule.c"
        var $339=$338; //@line 1356 "datetimemodule.c"
        var $340=HEAP[$339]; //@line 1356 "datetimemodule.c"
        var $341=($340) - 1; //@line 1356 "datetimemodule.c"
        var $342=$Zreplacement; //@line 1356 "datetimemodule.c"
        var $343=$342; //@line 1356 "datetimemodule.c"
        HEAP[$343]=$341; //@line 1356 "datetimemodule.c"
        var $344=$Zreplacement; //@line 1356 "datetimemodule.c"
        var $345=$344; //@line 1356 "datetimemodule.c"
        var $346=HEAP[$345]; //@line 1356 "datetimemodule.c"
        var $347=($346)==0; //@line 1356 "datetimemodule.c"
        if ($347) { __label__ = 86; break; } else { __label__ = 87; break; } //@line 1356 "datetimemodule.c"
      case 86: // $bb93
        var $348=$Zreplacement; //@line 1356 "datetimemodule.c"
        var $349=$348+4; //@line 1356 "datetimemodule.c"
        var $350=HEAP[$349]; //@line 1356 "datetimemodule.c"
        var $351=$350+24; //@line 1356 "datetimemodule.c"
        var $352=HEAP[$351]; //@line 1356 "datetimemodule.c"
        var $353=$Zreplacement; //@line 1356 "datetimemodule.c"
        FUNCTION_TABLE[$352]($353); //@line 1356 "datetimemodule.c"
        __label__ = 87; break; //@line 1356 "datetimemodule.c"
      case 87: // $bb94
        var $354=HEAP[$newfmt]; //@line 1357 "datetimemodule.c"
        var $355=($354)!=0; //@line 1357 "datetimemodule.c"
        if ($355) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 1357 "datetimemodule.c"
      case 88: // $bb95
        var $356=HEAP[$newfmt]; //@line 1357 "datetimemodule.c"
        var $357=$356; //@line 1357 "datetimemodule.c"
        var $358=HEAP[$357]; //@line 1357 "datetimemodule.c"
        var $359=($358) - 1; //@line 1357 "datetimemodule.c"
        var $360=$356; //@line 1357 "datetimemodule.c"
        HEAP[$360]=$359; //@line 1357 "datetimemodule.c"
        var $361=$356; //@line 1357 "datetimemodule.c"
        var $362=HEAP[$361]; //@line 1357 "datetimemodule.c"
        var $363=($362)==0; //@line 1357 "datetimemodule.c"
        if ($363) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 1357 "datetimemodule.c"
      case 89: // $bb96
        var $364=HEAP[$newfmt]; //@line 1357 "datetimemodule.c"
        var $365=$364+4; //@line 1357 "datetimemodule.c"
        var $366=HEAP[$365]; //@line 1357 "datetimemodule.c"
        var $367=$366+24; //@line 1357 "datetimemodule.c"
        var $368=HEAP[$367]; //@line 1357 "datetimemodule.c"
        var $369=HEAP[$newfmt]; //@line 1357 "datetimemodule.c"
        FUNCTION_TABLE[$368]($369); //@line 1357 "datetimemodule.c"
        __label__ = 90; break; //@line 1357 "datetimemodule.c"
      case 90: // $bb97
        var $370=$result; //@line 1358 "datetimemodule.c"
        $0=$370; //@line 1358 "datetimemodule.c"
        __label__ = 91; break; //@line 1358 "datetimemodule.c"
      case 91: // $bb98
        var $371=$0; //@line 1197 "datetimemodule.c"
        $retval=$371; //@line 1197 "datetimemodule.c"
        var $retval99=$retval; //@line 1197 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval99; //@line 1197 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isoformat_date($dt, $buffer, $bufflen) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dt_addr;
        var $buffer_addr;
        var $bufflen_addr;
        var $retval;
        var $0;
        var $x;
        $dt_addr=$dt;
        $buffer_addr=$buffer;
        $bufflen_addr=$bufflen;
        var $1=$dt_addr; //@line 1365 "datetimemodule.c"
        var $2=$1+13; //@line 1365 "datetimemodule.c"
        var $3=$2+3; //@line 1365 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 1365 "datetimemodule.c"
        var $5=($4); //@line 1365 "datetimemodule.c"
        var $6=$dt_addr; //@line 1365 "datetimemodule.c"
        var $7=$6+13; //@line 1365 "datetimemodule.c"
        var $8=$7+2; //@line 1365 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 1365 "datetimemodule.c"
        var $10=($9); //@line 1365 "datetimemodule.c"
        var $11=$dt_addr; //@line 1365 "datetimemodule.c"
        var $12=$11+13; //@line 1365 "datetimemodule.c"
        var $13=$12; //@line 1365 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1365 "datetimemodule.c"
        var $15=($14); //@line 1365 "datetimemodule.c"
        var $16=($15) << 8; //@line 1365 "datetimemodule.c"
        var $17=$dt_addr; //@line 1365 "datetimemodule.c"
        var $18=$17+13; //@line 1365 "datetimemodule.c"
        var $19=$18+1; //@line 1365 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1365 "datetimemodule.c"
        var $21=($20); //@line 1365 "datetimemodule.c"
        var $22=($21) | ($16); //@line 1365 "datetimemodule.c"
        var $23=$bufflen_addr; //@line 1365 "datetimemodule.c"
        var $24=$buffer_addr; //@line 1365 "datetimemodule.c"
        var $25=_PyOS_snprintf($24, $23, __str95, allocate([$22,0,0,0,$10,0,0,0,$5,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1365 "datetimemodule.c"
        $x=$25; //@line 1365 "datetimemodule.c"
        var $26=$bufflen_addr; //@line 1368 "datetimemodule.c"
        var $27=$x; //@line 1368 "datetimemodule.c"
        var $28=($26) < ($27); //@line 1368 "datetimemodule.c"
        if ($28) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1368 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str96, __str1, 1368, ___PRETTY_FUNCTION___9722); //@line 1368 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1368 "datetimemodule.c"
      case 2: // $bb1
        var $29=$buffer_addr; //@line 1369 "datetimemodule.c"
        var $30=$x; //@line 1369 "datetimemodule.c"
        var $31=$29+$30; //@line 1369 "datetimemodule.c"
        $0=$31; //@line 1369 "datetimemodule.c"
        var $32=$0; //@line 1369 "datetimemodule.c"
        $retval=$32; //@line 1369 "datetimemodule.c"
        var $retval2=$retval; //@line 1369 "datetimemodule.c"
        ;
        return $retval2; //@line 1369 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _isoformat_time($dt, $buffer, $bufflen) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dt_addr;
        var $buffer_addr;
        var $bufflen_addr;
        var $retval;
        var $0;
        var $x;
        var $us;
        $dt_addr=$dt;
        $buffer_addr=$buffer;
        $bufflen_addr=$bufflen;
        var $1=$dt_addr; //@line 1376 "datetimemodule.c"
        var $2=$1+13; //@line 1376 "datetimemodule.c"
        var $3=$2+7; //@line 1376 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 1376 "datetimemodule.c"
        var $5=($4); //@line 1376 "datetimemodule.c"
        var $6=($5) << 16; //@line 1376 "datetimemodule.c"
        var $7=$dt_addr; //@line 1376 "datetimemodule.c"
        var $8=$7+13; //@line 1376 "datetimemodule.c"
        var $9=$8+8; //@line 1376 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 1376 "datetimemodule.c"
        var $11=($10); //@line 1376 "datetimemodule.c"
        var $12=($11) << 8; //@line 1376 "datetimemodule.c"
        var $13=$dt_addr; //@line 1376 "datetimemodule.c"
        var $14=$13+13; //@line 1376 "datetimemodule.c"
        var $15=$14+9; //@line 1376 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1376 "datetimemodule.c"
        var $17=($16); //@line 1376 "datetimemodule.c"
        var $18=($12) | ($6); //@line 1376 "datetimemodule.c"
        var $19=($18) | ($17); //@line 1376 "datetimemodule.c"
        $us=$19; //@line 1376 "datetimemodule.c"
        var $20=$dt_addr; //@line 1378 "datetimemodule.c"
        var $21=$20+13; //@line 1378 "datetimemodule.c"
        var $22=$21+6; //@line 1378 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 1378 "datetimemodule.c"
        var $24=($23); //@line 1378 "datetimemodule.c"
        var $25=$dt_addr; //@line 1378 "datetimemodule.c"
        var $26=$25+13; //@line 1378 "datetimemodule.c"
        var $27=$26+5; //@line 1378 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1378 "datetimemodule.c"
        var $29=($28); //@line 1378 "datetimemodule.c"
        var $30=$dt_addr; //@line 1378 "datetimemodule.c"
        var $31=$30+13; //@line 1378 "datetimemodule.c"
        var $32=$31+4; //@line 1378 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 1378 "datetimemodule.c"
        var $34=($33); //@line 1378 "datetimemodule.c"
        var $35=$bufflen_addr; //@line 1378 "datetimemodule.c"
        var $36=$buffer_addr; //@line 1378 "datetimemodule.c"
        var $37=_PyOS_snprintf($36, $35, __str97, allocate([$34,0,0,0,$29,0,0,0,$24,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1378 "datetimemodule.c"
        $x=$37; //@line 1378 "datetimemodule.c"
        var $38=$bufflen_addr; //@line 1383 "datetimemodule.c"
        var $39=$x; //@line 1383 "datetimemodule.c"
        var $40=($38) < ($39); //@line 1383 "datetimemodule.c"
        if ($40) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1383 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str96, __str1, 1383, ___PRETTY_FUNCTION___9746); //@line 1383 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1383 "datetimemodule.c"
      case 2: // $bb1
        var $41=$us; //@line 1384 "datetimemodule.c"
        var $42=($41)!=0; //@line 1384 "datetimemodule.c"
        if ($42) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1384 "datetimemodule.c"
      case 3: // $bb2
        var $43=$bufflen_addr; //@line 1385 "datetimemodule.c"
        var $44=$x; //@line 1385 "datetimemodule.c"
        var $45=($43) - ($44); //@line 1385 "datetimemodule.c"
        var $46=$buffer_addr; //@line 1385 "datetimemodule.c"
        var $47=$x; //@line 1385 "datetimemodule.c"
        var $48=$46+$47; //@line 1385 "datetimemodule.c"
        var $49=$us; //@line 1385 "datetimemodule.c"
        var $50=_PyOS_snprintf($48, $45, __str98, allocate([$49,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1385 "datetimemodule.c"
        var $51=$x; //@line 1385 "datetimemodule.c"
        var $52=($51) + ($50); //@line 1385 "datetimemodule.c"
        $x=$52; //@line 1385 "datetimemodule.c"
        __label__ = 4; break; //@line 1385 "datetimemodule.c"
      case 4: // $bb3
        var $53=$bufflen_addr; //@line 1386 "datetimemodule.c"
        var $54=$x; //@line 1386 "datetimemodule.c"
        var $55=($53) < ($54); //@line 1386 "datetimemodule.c"
        if ($55) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1386 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str96, __str1, 1386, ___PRETTY_FUNCTION___9746); //@line 1386 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1386 "datetimemodule.c"
      case 6: // $bb5
        var $56=$buffer_addr; //@line 1387 "datetimemodule.c"
        var $57=$x; //@line 1387 "datetimemodule.c"
        var $58=$56+$57; //@line 1387 "datetimemodule.c"
        $0=$58; //@line 1387 "datetimemodule.c"
        var $59=$0; //@line 1387 "datetimemodule.c"
        $retval=$59; //@line 1387 "datetimemodule.c"
        var $retval6=$retval; //@line 1387 "datetimemodule.c"
        ;
        return $retval6; //@line 1387 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_time() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $result;
        var $time;
        $result=0; //@line 1399 "datetimemodule.c"
        var $1=_PyImport_ImportModuleNoBlock(__str92); //@line 1400 "datetimemodule.c"
        $time=$1; //@line 1400 "datetimemodule.c"
        var $2=$time; //@line 1402 "datetimemodule.c"
        var $3=($2)!=0; //@line 1402 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1402 "datetimemodule.c"
      case 1: // $bb
        var $4=$time; //@line 1403 "datetimemodule.c"
        var $5=__PyObject_CallMethod_SizeT($4, __str92, __str99, allocate(1, "i32", ALLOC_STACK)); //@line 1403 "datetimemodule.c"
        $result=$5; //@line 1403 "datetimemodule.c"
        var $6=$time; //@line 1404 "datetimemodule.c"
        var $7=$6; //@line 1404 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 1404 "datetimemodule.c"
        var $9=($8) - 1; //@line 1404 "datetimemodule.c"
        var $10=$time; //@line 1404 "datetimemodule.c"
        var $11=$10; //@line 1404 "datetimemodule.c"
        HEAP[$11]=$9; //@line 1404 "datetimemodule.c"
        var $12=$time; //@line 1404 "datetimemodule.c"
        var $13=$12; //@line 1404 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1404 "datetimemodule.c"
        var $15=($14)==0; //@line 1404 "datetimemodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1404 "datetimemodule.c"
      case 2: // $bb1
        var $16=$time; //@line 1404 "datetimemodule.c"
        var $17=$16+4; //@line 1404 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 1404 "datetimemodule.c"
        var $19=$18+24; //@line 1404 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1404 "datetimemodule.c"
        var $21=$time; //@line 1404 "datetimemodule.c"
        FUNCTION_TABLE[$20]($21); //@line 1404 "datetimemodule.c"
        __label__ = 3; break; //@line 1404 "datetimemodule.c"
      case 3: // $bb2
        var $22=$result; //@line 1406 "datetimemodule.c"
        $0=$22; //@line 1406 "datetimemodule.c"
        var $23=$0; //@line 1406 "datetimemodule.c"
        $retval=$23; //@line 1406 "datetimemodule.c"
        var $retval3=$retval; //@line 1406 "datetimemodule.c"
        ;
        return $retval3; //@line 1406 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_struct_time($y, $m, $d, $hh, $mm, $ss, $dstflag) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $y_addr;
        var $m_addr;
        var $d_addr;
        var $hh_addr;
        var $mm_addr;
        var $ss_addr;
        var $dstflag_addr;
        var $retval;
        var $0;
        var $time;
        var $result;
        $y_addr=$y;
        $m_addr=$m;
        $d_addr=$d;
        $hh_addr=$hh;
        $mm_addr=$mm;
        $ss_addr=$ss;
        $dstflag_addr=$dstflag;
        $result=0; //@line 1416 "datetimemodule.c"
        var $1=_PyImport_ImportModuleNoBlock(__str92); //@line 1418 "datetimemodule.c"
        $time=$1; //@line 1418 "datetimemodule.c"
        var $2=$time; //@line 1419 "datetimemodule.c"
        var $3=($2)!=0; //@line 1419 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1419 "datetimemodule.c"
      case 1: // $bb
        var $4=$y_addr; //@line 1420 "datetimemodule.c"
        var $5=$m_addr; //@line 1420 "datetimemodule.c"
        var $6=_days_before_month($4, $5); //@line 1420 "datetimemodule.c"
        var $7=$d_addr; //@line 1420 "datetimemodule.c"
        var $8=($7) + ($6); //@line 1420 "datetimemodule.c"
        var $9=$y_addr; //@line 1420 "datetimemodule.c"
        var $10=$m_addr; //@line 1420 "datetimemodule.c"
        var $11=$d_addr; //@line 1420 "datetimemodule.c"
        var $12=_weekday($9, $10, $11); //@line 1420 "datetimemodule.c"
        var $13=$time; //@line 1420 "datetimemodule.c"
        var $14=$y_addr; //@line 1420 "datetimemodule.c"
        var $15=$m_addr; //@line 1420 "datetimemodule.c"
        var $16=$d_addr; //@line 1420 "datetimemodule.c"
        var $17=$hh_addr; //@line 1420 "datetimemodule.c"
        var $18=$mm_addr; //@line 1420 "datetimemodule.c"
        var $19=$ss_addr; //@line 1420 "datetimemodule.c"
        var $20=$dstflag_addr; //@line 1420 "datetimemodule.c"
        var $21=__PyObject_CallMethod_SizeT($13, __str100, __str101, allocate([$14,0,0,0,$15,0,0,0,$16,0,0,0,$17,0,0,0,$18,0,0,0,$19,0,0,0,$12,0,0,0,$8,0,0,0,$20,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1420 "datetimemodule.c"
        $result=$21; //@line 1420 "datetimemodule.c"
        var $22=$time; //@line 1427 "datetimemodule.c"
        var $23=$22; //@line 1427 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 1427 "datetimemodule.c"
        var $25=($24) - 1; //@line 1427 "datetimemodule.c"
        var $26=$time; //@line 1427 "datetimemodule.c"
        var $27=$26; //@line 1427 "datetimemodule.c"
        HEAP[$27]=$25; //@line 1427 "datetimemodule.c"
        var $28=$time; //@line 1427 "datetimemodule.c"
        var $29=$28; //@line 1427 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 1427 "datetimemodule.c"
        var $31=($30)==0; //@line 1427 "datetimemodule.c"
        if ($31) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1427 "datetimemodule.c"
      case 2: // $bb1
        var $32=$time; //@line 1427 "datetimemodule.c"
        var $33=$32+4; //@line 1427 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 1427 "datetimemodule.c"
        var $35=$34+24; //@line 1427 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 1427 "datetimemodule.c"
        var $37=$time; //@line 1427 "datetimemodule.c"
        FUNCTION_TABLE[$36]($37); //@line 1427 "datetimemodule.c"
        __label__ = 3; break; //@line 1427 "datetimemodule.c"
      case 3: // $bb2
        var $38=$result; //@line 1429 "datetimemodule.c"
        $0=$38; //@line 1429 "datetimemodule.c"
        var $39=$0; //@line 1429 "datetimemodule.c"
        $retval=$39; //@line 1429 "datetimemodule.c"
        var $retval3=$retval; //@line 1429 "datetimemodule.c"
        ;
        return $retval3; //@line 1429 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _diff_to_bool($diff, $op) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $diff_addr;
        var $op_addr;
        var $retval;
        var $0;
        var $iftmp_83;
        var $result;
        var $istrue;
        $diff_addr=$diff;
        $op_addr=$op;
        var $1=$op_addr; //@line 1446 "datetimemodule.c"
        if ($1 == 0) {
          __label__ = 5; break;
        }
        else if ($1 == 1) {
          __label__ = 3; break;
        }
        else if ($1 == 2) {
          __label__ = 1; break;
        }
        else if ($1 == 3) {
          __label__ = 2; break;
        }
        else if ($1 == 4) {
          __label__ = 6; break;
        }
        else if ($1 == 5) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $2=$diff_addr; //@line 1447 "datetimemodule.c"
        var $3=($2)==0; //@line 1447 "datetimemodule.c"
        var $4=($3); //@line 1447 "datetimemodule.c"
        $istrue=$4; //@line 1447 "datetimemodule.c"
        __lastLabel__ = 1; __label__ = 8; break; //@line 1447 "datetimemodule.c"
      case 2: // $bb1
        var $5=$diff_addr; //@line 1448 "datetimemodule.c"
        var $6=($5)!=0; //@line 1448 "datetimemodule.c"
        var $7=($6); //@line 1448 "datetimemodule.c"
        $istrue=$7; //@line 1448 "datetimemodule.c"
        __lastLabel__ = 2; __label__ = 8; break; //@line 1448 "datetimemodule.c"
      case 3: // $bb2
        var $8=$diff_addr; //@line 1449 "datetimemodule.c"
        var $9=($8) <= 0; //@line 1449 "datetimemodule.c"
        var $10=($9); //@line 1449 "datetimemodule.c"
        $istrue=$10; //@line 1449 "datetimemodule.c"
        __lastLabel__ = 3; __label__ = 8; break; //@line 1449 "datetimemodule.c"
      case 4: // $bb3
        var $11=$diff_addr; //@line 1450 "datetimemodule.c"
        var $12=($11) >= 0; //@line 1450 "datetimemodule.c"
        var $13=($12); //@line 1450 "datetimemodule.c"
        $istrue=$13; //@line 1450 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 8; break; //@line 1450 "datetimemodule.c"
      case 5: // $bb4
        var $14=$diff_addr; //@line 1451 "datetimemodule.c"
        var $15=($14) < 0; //@line 1451 "datetimemodule.c"
        var $16=($15); //@line 1451 "datetimemodule.c"
        $istrue=$16; //@line 1451 "datetimemodule.c"
        __lastLabel__ = 5; __label__ = 8; break; //@line 1451 "datetimemodule.c"
      case 6: // $bb5
        var $17=$diff_addr; //@line 1452 "datetimemodule.c"
        var $18=($17) > 0; //@line 1452 "datetimemodule.c"
        var $19=($18); //@line 1452 "datetimemodule.c"
        $istrue=$19; //@line 1452 "datetimemodule.c"
        __lastLabel__ = 6; __label__ = 8; break; //@line 1452 "datetimemodule.c"
      case 7: // $bb6
        ___assert_fail(__str102, __str1, 1454, ___PRETTY_FUNCTION___9835); //@line 1454 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1454 "datetimemodule.c"
      case 8: // $bb7
        var $20=__lastLabel__ == 6 ? $19 : (__lastLabel__ == 5 ? $16 : (__lastLabel__ == 4 ? $13 : (__lastLabel__ == 3 ? $10 : (__lastLabel__ == 2 ? $7 : ($4)))));
        var $21=($20)!=0; //@line 1457 "datetimemodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1457 "datetimemodule.c"
      case 9: // $bb8
        $iftmp_83=__Py_TrueStruct; //@line 1457 "datetimemodule.c"
        __label__ = 11; break; //@line 1457 "datetimemodule.c"
      case 10: // $bb9
        $iftmp_83=__Py_ZeroStruct; //@line 1457 "datetimemodule.c"
        __label__ = 11; break; //@line 1457 "datetimemodule.c"
      case 11: // $bb10
        var $22=$iftmp_83; //@line 1457 "datetimemodule.c"
        $result=$22; //@line 1457 "datetimemodule.c"
        var $23=$result; //@line 1458 "datetimemodule.c"
        var $24=$23; //@line 1458 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 1458 "datetimemodule.c"
        var $26=($25) + 1; //@line 1458 "datetimemodule.c"
        var $27=$result; //@line 1458 "datetimemodule.c"
        var $28=$27; //@line 1458 "datetimemodule.c"
        HEAP[$28]=$26; //@line 1458 "datetimemodule.c"
        var $29=$result; //@line 1459 "datetimemodule.c"
        $0=$29; //@line 1459 "datetimemodule.c"
        var $30=$0; //@line 1459 "datetimemodule.c"
        $retval=$30; //@line 1459 "datetimemodule.c"
        var $retval11=$retval; //@line 1459 "datetimemodule.c"
        ;
        return $retval11; //@line 1459 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cmperror($a, $b) {
    ;
    var __label__;
  
    var $a_addr;
    var $b_addr;
    var $retval;
    var $0;
    $a_addr=$a;
    $b_addr=$b;
    var $1=$b_addr; //@line 1466 "datetimemodule.c"
    var $2=$1+4; //@line 1466 "datetimemodule.c"
    var $3=HEAP[$2]; //@line 1466 "datetimemodule.c"
    var $4=$3+12; //@line 1466 "datetimemodule.c"
    var $5=HEAP[$4]; //@line 1466 "datetimemodule.c"
    var $6=$a_addr; //@line 1466 "datetimemodule.c"
    var $7=$6+4; //@line 1466 "datetimemodule.c"
    var $8=HEAP[$7]; //@line 1466 "datetimemodule.c"
    var $9=$8+12; //@line 1466 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 1466 "datetimemodule.c"
    var $11=HEAP[_PyExc_TypeError]; //@line 1466 "datetimemodule.c"
    var $12=_PyErr_Format($11, __str103, allocate([$10,0,0,0,$5,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1466 "datetimemodule.c"
    $0=0; //@line 1469 "datetimemodule.c"
    var $13=$0; //@line 1469 "datetimemodule.c"
    $retval=$13; //@line 1469 "datetimemodule.c"
    var $retval1=$retval; //@line 1469 "datetimemodule.c"
    ;
    return $retval1; //@line 1469 "datetimemodule.c"
  }
  

  function _delta_to_microseconds($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $x1;
        var $x2;
        var $x3;
        var $result;
        $self_addr=$self;
        $x1=0; //@line 1503 "datetimemodule.c"
        $x2=0; //@line 1504 "datetimemodule.c"
        $x3=0; //@line 1505 "datetimemodule.c"
        $result=0; //@line 1506 "datetimemodule.c"
        var $1=$self_addr; //@line 1508 "datetimemodule.c"
        var $2=$1+12; //@line 1508 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1508 "datetimemodule.c"
        var $4=_PyInt_FromLong($3); //@line 1508 "datetimemodule.c"
        $x1=$4; //@line 1508 "datetimemodule.c"
        var $5=$x1; //@line 1509 "datetimemodule.c"
        var $6=($5)==0; //@line 1509 "datetimemodule.c"
        if ($6) { __label__ = 18; break; } else { __label__ = 1; break; } //@line 1509 "datetimemodule.c"
      case 1: // $bb
        var $7=HEAP[_seconds_per_day]; //@line 1511 "datetimemodule.c"
        var $8=$x1; //@line 1511 "datetimemodule.c"
        var $9=_PyNumber_Multiply($8, $7); //@line 1511 "datetimemodule.c"
        $x2=$9; //@line 1511 "datetimemodule.c"
        var $10=$x2; //@line 1512 "datetimemodule.c"
        var $11=($10)==0; //@line 1512 "datetimemodule.c"
        if ($11) { __label__ = 15; break; } else { __label__ = 2; break; } //@line 1512 "datetimemodule.c"
      case 2: // $bb1
        var $12=$x1; //@line 1514 "datetimemodule.c"
        var $13=$12; //@line 1514 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1514 "datetimemodule.c"
        var $15=($14) - 1; //@line 1514 "datetimemodule.c"
        var $16=$x1; //@line 1514 "datetimemodule.c"
        var $17=$16; //@line 1514 "datetimemodule.c"
        HEAP[$17]=$15; //@line 1514 "datetimemodule.c"
        var $18=$x1; //@line 1514 "datetimemodule.c"
        var $19=$18; //@line 1514 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1514 "datetimemodule.c"
        var $21=($20)==0; //@line 1514 "datetimemodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1514 "datetimemodule.c"
      case 3: // $bb2
        var $22=$x1; //@line 1514 "datetimemodule.c"
        var $23=$22+4; //@line 1514 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 1514 "datetimemodule.c"
        var $25=$24+24; //@line 1514 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 1514 "datetimemodule.c"
        var $27=$x1; //@line 1514 "datetimemodule.c"
        FUNCTION_TABLE[$26]($27); //@line 1514 "datetimemodule.c"
        __label__ = 4; break; //@line 1514 "datetimemodule.c"
      case 4: // $bb3
        $x1=0; //@line 1515 "datetimemodule.c"
        var $28=$self_addr; //@line 1518 "datetimemodule.c"
        var $29=$28+16; //@line 1518 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 1518 "datetimemodule.c"
        var $31=_PyInt_FromLong($30); //@line 1518 "datetimemodule.c"
        $x1=$31; //@line 1518 "datetimemodule.c"
        var $32=($31)==0; //@line 1519 "datetimemodule.c"
        if ($32) { __label__ = 18; break; } else { __label__ = 5; break; } //@line 1519 "datetimemodule.c"
      case 5: // $bb4
        var $33=$x1; //@line 1521 "datetimemodule.c"
        var $34=$x2; //@line 1521 "datetimemodule.c"
        var $35=_PyNumber_Add($33, $34); //@line 1521 "datetimemodule.c"
        $x3=$35; //@line 1521 "datetimemodule.c"
        var $36=$x3; //@line 1522 "datetimemodule.c"
        var $37=($36)==0; //@line 1522 "datetimemodule.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 6; break; } //@line 1522 "datetimemodule.c"
      case 6: // $bb5
        var $38=$x1; //@line 1524 "datetimemodule.c"
        var $39=$38; //@line 1524 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1524 "datetimemodule.c"
        var $41=($40) - 1; //@line 1524 "datetimemodule.c"
        var $42=$x1; //@line 1524 "datetimemodule.c"
        var $43=$42; //@line 1524 "datetimemodule.c"
        HEAP[$43]=$41; //@line 1524 "datetimemodule.c"
        var $44=$x1; //@line 1524 "datetimemodule.c"
        var $45=$44; //@line 1524 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 1524 "datetimemodule.c"
        var $47=($46)==0; //@line 1524 "datetimemodule.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1524 "datetimemodule.c"
      case 7: // $bb6
        var $48=$x1; //@line 1524 "datetimemodule.c"
        var $49=$48+4; //@line 1524 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 1524 "datetimemodule.c"
        var $51=$50+24; //@line 1524 "datetimemodule.c"
        var $52=HEAP[$51]; //@line 1524 "datetimemodule.c"
        var $53=$x1; //@line 1524 "datetimemodule.c"
        FUNCTION_TABLE[$52]($53); //@line 1524 "datetimemodule.c"
        __label__ = 8; break; //@line 1524 "datetimemodule.c"
      case 8: // $bb7
        var $54=$x2; //@line 1525 "datetimemodule.c"
        var $55=$54; //@line 1525 "datetimemodule.c"
        var $56=HEAP[$55]; //@line 1525 "datetimemodule.c"
        var $57=($56) - 1; //@line 1525 "datetimemodule.c"
        var $58=$x2; //@line 1525 "datetimemodule.c"
        var $59=$58; //@line 1525 "datetimemodule.c"
        HEAP[$59]=$57; //@line 1525 "datetimemodule.c"
        var $60=$x2; //@line 1525 "datetimemodule.c"
        var $61=$60; //@line 1525 "datetimemodule.c"
        var $62=HEAP[$61]; //@line 1525 "datetimemodule.c"
        var $63=($62)==0; //@line 1525 "datetimemodule.c"
        if ($63) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1525 "datetimemodule.c"
      case 9: // $bb8
        var $64=$x2; //@line 1525 "datetimemodule.c"
        var $65=$64+4; //@line 1525 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 1525 "datetimemodule.c"
        var $67=$66+24; //@line 1525 "datetimemodule.c"
        var $68=HEAP[$67]; //@line 1525 "datetimemodule.c"
        var $69=$x2; //@line 1525 "datetimemodule.c"
        FUNCTION_TABLE[$68]($69); //@line 1525 "datetimemodule.c"
        __label__ = 10; break; //@line 1525 "datetimemodule.c"
      case 10: // $bb9
        $x2=0; //@line 1526 "datetimemodule.c"
        var $70=HEAP[_us_per_second]; //@line 1529 "datetimemodule.c"
        var $71=$x3; //@line 1529 "datetimemodule.c"
        var $72=_PyNumber_Multiply($71, $70); //@line 1529 "datetimemodule.c"
        $x1=$72; //@line 1529 "datetimemodule.c"
        var $73=($72)==0; //@line 1530 "datetimemodule.c"
        if ($73) { __label__ = 18; break; } else { __label__ = 11; break; } //@line 1530 "datetimemodule.c"
      case 11: // $bb10
        var $74=$x3; //@line 1532 "datetimemodule.c"
        var $75=$74; //@line 1532 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 1532 "datetimemodule.c"
        var $77=($76) - 1; //@line 1532 "datetimemodule.c"
        var $78=$x3; //@line 1532 "datetimemodule.c"
        var $79=$78; //@line 1532 "datetimemodule.c"
        HEAP[$79]=$77; //@line 1532 "datetimemodule.c"
        var $80=$x3; //@line 1532 "datetimemodule.c"
        var $81=$80; //@line 1532 "datetimemodule.c"
        var $82=HEAP[$81]; //@line 1532 "datetimemodule.c"
        var $83=($82)==0; //@line 1532 "datetimemodule.c"
        if ($83) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1532 "datetimemodule.c"
      case 12: // $bb11
        var $84=$x3; //@line 1532 "datetimemodule.c"
        var $85=$84+4; //@line 1532 "datetimemodule.c"
        var $86=HEAP[$85]; //@line 1532 "datetimemodule.c"
        var $87=$86+24; //@line 1532 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 1532 "datetimemodule.c"
        var $89=$x3; //@line 1532 "datetimemodule.c"
        FUNCTION_TABLE[$88]($89); //@line 1532 "datetimemodule.c"
        __label__ = 13; break; //@line 1532 "datetimemodule.c"
      case 13: // $bb12
        $x3=0; //@line 1533 "datetimemodule.c"
        var $90=$self_addr; //@line 1536 "datetimemodule.c"
        var $91=$90+20; //@line 1536 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 1536 "datetimemodule.c"
        var $93=_PyInt_FromLong($92); //@line 1536 "datetimemodule.c"
        $x2=$93; //@line 1536 "datetimemodule.c"
        var $94=($93)==0; //@line 1537 "datetimemodule.c"
        if ($94) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1537 "datetimemodule.c"
      case 14: // $bb13
        var $95=$x1; //@line 1539 "datetimemodule.c"
        var $96=$x2; //@line 1539 "datetimemodule.c"
        var $97=_PyNumber_Add($95, $96); //@line 1539 "datetimemodule.c"
        $result=$97; //@line 1539 "datetimemodule.c"
        __label__ = 15; break; //@line 1541 "datetimemodule.c"
      case 15: // $Done
        var $_pr=$x1;
        var $98=($_pr)!=0; //@line 1542 "datetimemodule.c"
        if ($98) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1542 "datetimemodule.c"
      case 16: // $bb14
        var $99=$x1; //@line 1542 "datetimemodule.c"
        var $100=$99; //@line 1542 "datetimemodule.c"
        var $101=HEAP[$100]; //@line 1542 "datetimemodule.c"
        var $102=($101) - 1; //@line 1542 "datetimemodule.c"
        var $103=$x1; //@line 1542 "datetimemodule.c"
        var $104=$103; //@line 1542 "datetimemodule.c"
        HEAP[$104]=$102; //@line 1542 "datetimemodule.c"
        var $105=$x1; //@line 1542 "datetimemodule.c"
        var $106=$105; //@line 1542 "datetimemodule.c"
        var $107=HEAP[$106]; //@line 1542 "datetimemodule.c"
        var $108=($107)==0; //@line 1542 "datetimemodule.c"
        if ($108) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1542 "datetimemodule.c"
      case 17: // $bb15
        var $109=$x1; //@line 1542 "datetimemodule.c"
        var $110=$109+4; //@line 1542 "datetimemodule.c"
        var $111=HEAP[$110]; //@line 1542 "datetimemodule.c"
        var $112=$111+24; //@line 1542 "datetimemodule.c"
        var $113=HEAP[$112]; //@line 1542 "datetimemodule.c"
        var $114=$x1; //@line 1542 "datetimemodule.c"
        FUNCTION_TABLE[$113]($114); //@line 1542 "datetimemodule.c"
        __label__ = 18; break; //@line 1542 "datetimemodule.c"
      case 18: // $bb16
        var $115=$x2; //@line 1543 "datetimemodule.c"
        var $116=($115)!=0; //@line 1543 "datetimemodule.c"
        if ($116) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 1543 "datetimemodule.c"
      case 19: // $bb17
        var $117=$x2; //@line 1543 "datetimemodule.c"
        var $118=$117; //@line 1543 "datetimemodule.c"
        var $119=HEAP[$118]; //@line 1543 "datetimemodule.c"
        var $120=($119) - 1; //@line 1543 "datetimemodule.c"
        var $121=$x2; //@line 1543 "datetimemodule.c"
        var $122=$121; //@line 1543 "datetimemodule.c"
        HEAP[$122]=$120; //@line 1543 "datetimemodule.c"
        var $123=$x2; //@line 1543 "datetimemodule.c"
        var $124=$123; //@line 1543 "datetimemodule.c"
        var $125=HEAP[$124]; //@line 1543 "datetimemodule.c"
        var $126=($125)==0; //@line 1543 "datetimemodule.c"
        if ($126) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1543 "datetimemodule.c"
      case 20: // $bb18
        var $127=$x2; //@line 1543 "datetimemodule.c"
        var $128=$127+4; //@line 1543 "datetimemodule.c"
        var $129=HEAP[$128]; //@line 1543 "datetimemodule.c"
        var $130=$129+24; //@line 1543 "datetimemodule.c"
        var $131=HEAP[$130]; //@line 1543 "datetimemodule.c"
        var $132=$x2; //@line 1543 "datetimemodule.c"
        FUNCTION_TABLE[$131]($132); //@line 1543 "datetimemodule.c"
        __label__ = 21; break; //@line 1543 "datetimemodule.c"
      case 21: // $bb19
        var $133=$x3; //@line 1544 "datetimemodule.c"
        var $134=($133)!=0; //@line 1544 "datetimemodule.c"
        if ($134) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 1544 "datetimemodule.c"
      case 22: // $bb20
        var $135=$x3; //@line 1544 "datetimemodule.c"
        var $136=$135; //@line 1544 "datetimemodule.c"
        var $137=HEAP[$136]; //@line 1544 "datetimemodule.c"
        var $138=($137) - 1; //@line 1544 "datetimemodule.c"
        var $139=$x3; //@line 1544 "datetimemodule.c"
        var $140=$139; //@line 1544 "datetimemodule.c"
        HEAP[$140]=$138; //@line 1544 "datetimemodule.c"
        var $141=$x3; //@line 1544 "datetimemodule.c"
        var $142=$141; //@line 1544 "datetimemodule.c"
        var $143=HEAP[$142]; //@line 1544 "datetimemodule.c"
        var $144=($143)==0; //@line 1544 "datetimemodule.c"
        if ($144) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1544 "datetimemodule.c"
      case 23: // $bb21
        var $145=$x3; //@line 1544 "datetimemodule.c"
        var $146=$145+4; //@line 1544 "datetimemodule.c"
        var $147=HEAP[$146]; //@line 1544 "datetimemodule.c"
        var $148=$147+24; //@line 1544 "datetimemodule.c"
        var $149=HEAP[$148]; //@line 1544 "datetimemodule.c"
        var $150=$x3; //@line 1544 "datetimemodule.c"
        FUNCTION_TABLE[$149]($150); //@line 1544 "datetimemodule.c"
        __label__ = 24; break; //@line 1544 "datetimemodule.c"
      case 24: // $bb22
        var $151=$result; //@line 1545 "datetimemodule.c"
        $0=$151; //@line 1545 "datetimemodule.c"
        var $152=$0; //@line 1545 "datetimemodule.c"
        $retval=$152; //@line 1545 "datetimemodule.c"
        var $retval23=$retval; //@line 1545 "datetimemodule.c"
        ;
        return $retval23; //@line 1545 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _microseconds_to_delta_ex($pyus, $type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pyus_addr;
        var $type_addr;
        var $retval;
        var $0;
        var $us;
        var $s;
        var $d;
        var $temp;
        var $tuple;
        var $num;
        var $result;
        $pyus_addr=$pyus;
        $type_addr=$type;
        $tuple=0; //@line 1558 "datetimemodule.c"
        $num=0; //@line 1559 "datetimemodule.c"
        $result=0; //@line 1560 "datetimemodule.c"
        var $1=HEAP[_us_per_second]; //@line 1562 "datetimemodule.c"
        var $2=$pyus_addr; //@line 1562 "datetimemodule.c"
        var $3=_PyNumber_Divmod($2, $1); //@line 1562 "datetimemodule.c"
        $tuple=$3; //@line 1562 "datetimemodule.c"
        var $4=$tuple; //@line 1563 "datetimemodule.c"
        var $5=($4)==0; //@line 1563 "datetimemodule.c"
        if ($5) { __label__ = 32; break; } else { __label__ = 1; break; } //@line 1563 "datetimemodule.c"
      case 1: // $bb
        var $6=$tuple; //@line 1566 "datetimemodule.c"
        var $7=_PyTuple_GetItem($6, 1); //@line 1566 "datetimemodule.c"
        $num=$7; //@line 1566 "datetimemodule.c"
        var $8=$num; //@line 1567 "datetimemodule.c"
        var $9=($8)==0; //@line 1567 "datetimemodule.c"
        if ($9) { __label__ = 29; break; } else { __label__ = 2; break; } //@line 1567 "datetimemodule.c"
      case 2: // $bb1
        var $10=$num; //@line 1569 "datetimemodule.c"
        var $11=_PyLong_AsLong($10); //@line 1569 "datetimemodule.c"
        $temp=$11; //@line 1569 "datetimemodule.c"
        $num=0; //@line 1570 "datetimemodule.c"
        var $12=$temp; //@line 1571 "datetimemodule.c"
        var $13=($12)==-1; //@line 1571 "datetimemodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1571 "datetimemodule.c"
      case 3: // $bb2
        var $14=_PyErr_Occurred(); //@line 1571 "datetimemodule.c"
        var $15=($14)!=0; //@line 1571 "datetimemodule.c"
        if ($15) { __label__ = 29; break; } else { __label__ = 4; break; } //@line 1571 "datetimemodule.c"
      case 4: // $bb3
        var $16=$temp; //@line 1573 "datetimemodule.c"
        var $17=($16) < 0; //@line 1573 "datetimemodule.c"
        var $18=$temp; //@line 1573 "datetimemodule.c"
        var $19=($18) > 999999; //@line 1573 "datetimemodule.c"
        var $or_cond=($17) | ($19);
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1573 "datetimemodule.c"
      case 5: // $bb5
        ___assert_fail(__str104, __str1, 1573, ___PRETTY_FUNCTION___9958); //@line 1573 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1573 "datetimemodule.c"
      case 6: // $bb6
        var $20=$temp; //@line 1574 "datetimemodule.c"
        $us=$20; //@line 1574 "datetimemodule.c"
        var $21=$us; //@line 1575 "datetimemodule.c"
        var $22=($21) < 0; //@line 1575 "datetimemodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1575 "datetimemodule.c"
      case 7: // $bb7
        var $23=_PyErr_Occurred(); //@line 1577 "datetimemodule.c"
        var $24=($23)==0; //@line 1577 "datetimemodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 29; break; } //@line 1577 "datetimemodule.c"
      case 8: // $bb8
        ___assert_fail(__str105, __str1, 1577, ___PRETTY_FUNCTION___9958); //@line 1577 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1577 "datetimemodule.c"
      case 9: // $bb10
        var $25=$tuple; //@line 1581 "datetimemodule.c"
        var $26=_PyTuple_GetItem($25, 0); //@line 1581 "datetimemodule.c"
        $num=$26; //@line 1581 "datetimemodule.c"
        var $27=$num; //@line 1582 "datetimemodule.c"
        var $28=($27)==0; //@line 1582 "datetimemodule.c"
        if ($28) { __label__ = 29; break; } else { __label__ = 10; break; } //@line 1582 "datetimemodule.c"
      case 10: // $bb11
        var $29=$num; //@line 1584 "datetimemodule.c"
        var $30=$29; //@line 1584 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 1584 "datetimemodule.c"
        var $32=($31) + 1; //@line 1584 "datetimemodule.c"
        var $33=$num; //@line 1584 "datetimemodule.c"
        var $34=$33; //@line 1584 "datetimemodule.c"
        HEAP[$34]=$32; //@line 1584 "datetimemodule.c"
        var $35=$tuple; //@line 1585 "datetimemodule.c"
        var $36=$35; //@line 1585 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 1585 "datetimemodule.c"
        var $38=($37) - 1; //@line 1585 "datetimemodule.c"
        var $39=$tuple; //@line 1585 "datetimemodule.c"
        var $40=$39; //@line 1585 "datetimemodule.c"
        HEAP[$40]=$38; //@line 1585 "datetimemodule.c"
        var $41=$tuple; //@line 1585 "datetimemodule.c"
        var $42=$41; //@line 1585 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 1585 "datetimemodule.c"
        var $44=($43)==0; //@line 1585 "datetimemodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1585 "datetimemodule.c"
      case 11: // $bb12
        var $45=$tuple; //@line 1585 "datetimemodule.c"
        var $46=$45+4; //@line 1585 "datetimemodule.c"
        var $47=HEAP[$46]; //@line 1585 "datetimemodule.c"
        var $48=$47+24; //@line 1585 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 1585 "datetimemodule.c"
        var $50=$tuple; //@line 1585 "datetimemodule.c"
        FUNCTION_TABLE[$49]($50); //@line 1585 "datetimemodule.c"
        __label__ = 12; break; //@line 1585 "datetimemodule.c"
      case 12: // $bb13
        var $51=HEAP[_seconds_per_day]; //@line 1587 "datetimemodule.c"
        var $52=$num; //@line 1587 "datetimemodule.c"
        var $53=_PyNumber_Divmod($52, $51); //@line 1587 "datetimemodule.c"
        $tuple=$53; //@line 1587 "datetimemodule.c"
        var $54=($53)==0; //@line 1588 "datetimemodule.c"
        if ($54) { __label__ = 32; break; } else { __label__ = 13; break; } //@line 1588 "datetimemodule.c"
      case 13: // $bb14
        var $55=$num; //@line 1590 "datetimemodule.c"
        var $56=$55; //@line 1590 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 1590 "datetimemodule.c"
        var $58=($57) - 1; //@line 1590 "datetimemodule.c"
        var $59=$num; //@line 1590 "datetimemodule.c"
        var $60=$59; //@line 1590 "datetimemodule.c"
        HEAP[$60]=$58; //@line 1590 "datetimemodule.c"
        var $61=$num; //@line 1590 "datetimemodule.c"
        var $62=$61; //@line 1590 "datetimemodule.c"
        var $63=HEAP[$62]; //@line 1590 "datetimemodule.c"
        var $64=($63)==0; //@line 1590 "datetimemodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1590 "datetimemodule.c"
      case 14: // $bb15
        var $65=$num; //@line 1590 "datetimemodule.c"
        var $66=$65+4; //@line 1590 "datetimemodule.c"
        var $67=HEAP[$66]; //@line 1590 "datetimemodule.c"
        var $68=$67+24; //@line 1590 "datetimemodule.c"
        var $69=HEAP[$68]; //@line 1590 "datetimemodule.c"
        var $70=$num; //@line 1590 "datetimemodule.c"
        FUNCTION_TABLE[$69]($70); //@line 1590 "datetimemodule.c"
        __label__ = 15; break; //@line 1590 "datetimemodule.c"
      case 15: // $bb16
        var $71=$tuple; //@line 1592 "datetimemodule.c"
        var $72=_PyTuple_GetItem($71, 1); //@line 1592 "datetimemodule.c"
        $num=$72; //@line 1592 "datetimemodule.c"
        var $73=($72)==0; //@line 1593 "datetimemodule.c"
        if ($73) { __label__ = 29; break; } else { __label__ = 16; break; } //@line 1593 "datetimemodule.c"
      case 16: // $bb17
        var $74=$num; //@line 1595 "datetimemodule.c"
        var $75=_PyLong_AsLong($74); //@line 1595 "datetimemodule.c"
        $temp=$75; //@line 1595 "datetimemodule.c"
        $num=0; //@line 1596 "datetimemodule.c"
        var $76=$temp; //@line 1597 "datetimemodule.c"
        var $77=($76)==-1; //@line 1597 "datetimemodule.c"
        if ($77) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1597 "datetimemodule.c"
      case 17: // $bb18
        var $78=_PyErr_Occurred(); //@line 1597 "datetimemodule.c"
        var $79=($78)!=0; //@line 1597 "datetimemodule.c"
        if ($79) { __label__ = 29; break; } else { __label__ = 18; break; } //@line 1597 "datetimemodule.c"
      case 18: // $bb19
        var $80=$temp; //@line 1599 "datetimemodule.c"
        var $81=($80) < 0; //@line 1599 "datetimemodule.c"
        var $82=$temp; //@line 1599 "datetimemodule.c"
        var $83=($82) > 86399; //@line 1599 "datetimemodule.c"
        var $or_cond3=($81) | ($83);
        if ($or_cond3) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1599 "datetimemodule.c"
      case 19: // $bb21
        ___assert_fail(__str106, __str1, 1599, ___PRETTY_FUNCTION___9958); //@line 1599 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1599 "datetimemodule.c"
      case 20: // $bb22
        var $84=$temp; //@line 1600 "datetimemodule.c"
        $s=$84; //@line 1600 "datetimemodule.c"
        var $85=$s; //@line 1602 "datetimemodule.c"
        var $86=($85) < 0; //@line 1602 "datetimemodule.c"
        if ($86) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1602 "datetimemodule.c"
      case 21: // $bb23
        var $87=_PyErr_Occurred(); //@line 1604 "datetimemodule.c"
        var $88=($87)==0; //@line 1604 "datetimemodule.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 29; break; } //@line 1604 "datetimemodule.c"
      case 22: // $bb24
        ___assert_fail(__str105, __str1, 1604, ___PRETTY_FUNCTION___9958); //@line 1604 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1604 "datetimemodule.c"
      case 23: // $bb26
        var $89=$tuple; //@line 1608 "datetimemodule.c"
        var $90=_PyTuple_GetItem($89, 0); //@line 1608 "datetimemodule.c"
        $num=$90; //@line 1608 "datetimemodule.c"
        var $91=$num; //@line 1609 "datetimemodule.c"
        var $92=($91)==0; //@line 1609 "datetimemodule.c"
        if ($92) { __label__ = 29; break; } else { __label__ = 24; break; } //@line 1609 "datetimemodule.c"
      case 24: // $bb27
        var $93=$num; //@line 1611 "datetimemodule.c"
        var $94=$93; //@line 1611 "datetimemodule.c"
        var $95=HEAP[$94]; //@line 1611 "datetimemodule.c"
        var $96=($95) + 1; //@line 1611 "datetimemodule.c"
        var $97=$num; //@line 1611 "datetimemodule.c"
        var $98=$97; //@line 1611 "datetimemodule.c"
        HEAP[$98]=$96; //@line 1611 "datetimemodule.c"
        var $99=$num; //@line 1612 "datetimemodule.c"
        var $100=_PyLong_AsLong($99); //@line 1612 "datetimemodule.c"
        $temp=$100; //@line 1612 "datetimemodule.c"
        var $101=$temp; //@line 1613 "datetimemodule.c"
        var $102=($101)==-1; //@line 1613 "datetimemodule.c"
        if ($102) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1613 "datetimemodule.c"
      case 25: // $bb28
        var $103=_PyErr_Occurred(); //@line 1613 "datetimemodule.c"
        var $104=($103)!=0; //@line 1613 "datetimemodule.c"
        if ($104) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 1613 "datetimemodule.c"
      case 26: // $bb29
        var $105=$temp; //@line 1615 "datetimemodule.c"
        $d=$105; //@line 1615 "datetimemodule.c"
        var $106=$d; //@line 1616 "datetimemodule.c"
        var $107=$temp; //@line 1616 "datetimemodule.c"
        var $108=($106)!=($107); //@line 1616 "datetimemodule.c"
        if ($108) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1616 "datetimemodule.c"
      case 27: // $bb30
        var $109=HEAP[_PyExc_OverflowError]; //@line 1617 "datetimemodule.c"
        _PyErr_SetString($109, __str107); //@line 1617 "datetimemodule.c"
        __label__ = 29; break; //@line 1617 "datetimemodule.c"
      case 28: // $bb31
        var $110=$d; //@line 1621 "datetimemodule.c"
        var $111=$s; //@line 1621 "datetimemodule.c"
        var $112=$us; //@line 1621 "datetimemodule.c"
        var $113=$type_addr; //@line 1621 "datetimemodule.c"
        var $114=_new_delta_ex($110, $111, $112, 0, $113); //@line 1621 "datetimemodule.c"
        $result=$114; //@line 1621 "datetimemodule.c"
        __label__ = 29; break; //@line 1623 "datetimemodule.c"
      case 29: // $Done
        var $_pr=$tuple;
        var $115=($_pr)!=0; //@line 1624 "datetimemodule.c"
        if ($115) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1624 "datetimemodule.c"
      case 30: // $bb32
        var $116=$tuple; //@line 1624 "datetimemodule.c"
        var $117=$116; //@line 1624 "datetimemodule.c"
        var $118=HEAP[$117]; //@line 1624 "datetimemodule.c"
        var $119=($118) - 1; //@line 1624 "datetimemodule.c"
        var $120=$tuple; //@line 1624 "datetimemodule.c"
        var $121=$120; //@line 1624 "datetimemodule.c"
        HEAP[$121]=$119; //@line 1624 "datetimemodule.c"
        var $122=$tuple; //@line 1624 "datetimemodule.c"
        var $123=$122; //@line 1624 "datetimemodule.c"
        var $124=HEAP[$123]; //@line 1624 "datetimemodule.c"
        var $125=($124)==0; //@line 1624 "datetimemodule.c"
        if ($125) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1624 "datetimemodule.c"
      case 31: // $bb33
        var $126=$tuple; //@line 1624 "datetimemodule.c"
        var $127=$126+4; //@line 1624 "datetimemodule.c"
        var $128=HEAP[$127]; //@line 1624 "datetimemodule.c"
        var $129=$128+24; //@line 1624 "datetimemodule.c"
        var $130=HEAP[$129]; //@line 1624 "datetimemodule.c"
        var $131=$tuple; //@line 1624 "datetimemodule.c"
        FUNCTION_TABLE[$130]($131); //@line 1624 "datetimemodule.c"
        __label__ = 32; break; //@line 1624 "datetimemodule.c"
      case 32: // $bb34
        var $132=$num; //@line 1625 "datetimemodule.c"
        var $133=($132)!=0; //@line 1625 "datetimemodule.c"
        if ($133) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1625 "datetimemodule.c"
      case 33: // $bb35
        var $134=$num; //@line 1625 "datetimemodule.c"
        var $135=$134; //@line 1625 "datetimemodule.c"
        var $136=HEAP[$135]; //@line 1625 "datetimemodule.c"
        var $137=($136) - 1; //@line 1625 "datetimemodule.c"
        var $138=$num; //@line 1625 "datetimemodule.c"
        var $139=$138; //@line 1625 "datetimemodule.c"
        HEAP[$139]=$137; //@line 1625 "datetimemodule.c"
        var $140=$num; //@line 1625 "datetimemodule.c"
        var $141=$140; //@line 1625 "datetimemodule.c"
        var $142=HEAP[$141]; //@line 1625 "datetimemodule.c"
        var $143=($142)==0; //@line 1625 "datetimemodule.c"
        if ($143) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1625 "datetimemodule.c"
      case 34: // $bb36
        var $144=$num; //@line 1625 "datetimemodule.c"
        var $145=$144+4; //@line 1625 "datetimemodule.c"
        var $146=HEAP[$145]; //@line 1625 "datetimemodule.c"
        var $147=$146+24; //@line 1625 "datetimemodule.c"
        var $148=HEAP[$147]; //@line 1625 "datetimemodule.c"
        var $149=$num; //@line 1625 "datetimemodule.c"
        FUNCTION_TABLE[$148]($149); //@line 1625 "datetimemodule.c"
        __label__ = 35; break; //@line 1625 "datetimemodule.c"
      case 35: // $bb37
        var $150=$result; //@line 1626 "datetimemodule.c"
        $0=$150; //@line 1626 "datetimemodule.c"
        var $151=$0; //@line 1626 "datetimemodule.c"
        $retval=$151; //@line 1626 "datetimemodule.c"
        var $retval38=$retval; //@line 1626 "datetimemodule.c"
        ;
        return $retval38; //@line 1626 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _multiply_int_timedelta($intobj, $delta) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $intobj_addr;
        var $delta_addr;
        var $retval;
        var $0;
        var $pyus_in;
        var $pyus_out;
        var $result;
        $intobj_addr=$intobj;
        $delta_addr=$delta;
        var $1=$delta_addr; //@line 1639 "datetimemodule.c"
        var $2=_delta_to_microseconds($1); //@line 1639 "datetimemodule.c"
        $pyus_in=$2; //@line 1639 "datetimemodule.c"
        var $3=$pyus_in; //@line 1640 "datetimemodule.c"
        var $4=($3)==0; //@line 1640 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1640 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 1641 "datetimemodule.c"
        __label__ = 9; break; //@line 1641 "datetimemodule.c"
      case 2: // $bb1
        var $5=$pyus_in; //@line 1643 "datetimemodule.c"
        var $6=$intobj_addr; //@line 1643 "datetimemodule.c"
        var $7=_PyNumber_Multiply($5, $6); //@line 1643 "datetimemodule.c"
        $pyus_out=$7; //@line 1643 "datetimemodule.c"
        var $8=$pyus_in; //@line 1644 "datetimemodule.c"
        var $9=$8; //@line 1644 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 1644 "datetimemodule.c"
        var $11=($10) - 1; //@line 1644 "datetimemodule.c"
        var $12=$pyus_in; //@line 1644 "datetimemodule.c"
        var $13=$12; //@line 1644 "datetimemodule.c"
        HEAP[$13]=$11; //@line 1644 "datetimemodule.c"
        var $14=$pyus_in; //@line 1644 "datetimemodule.c"
        var $15=$14; //@line 1644 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1644 "datetimemodule.c"
        var $17=($16)==0; //@line 1644 "datetimemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1644 "datetimemodule.c"
      case 3: // $bb2
        var $18=$pyus_in; //@line 1644 "datetimemodule.c"
        var $19=$18+4; //@line 1644 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1644 "datetimemodule.c"
        var $21=$20+24; //@line 1644 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1644 "datetimemodule.c"
        var $23=$pyus_in; //@line 1644 "datetimemodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1644 "datetimemodule.c"
        __label__ = 4; break; //@line 1644 "datetimemodule.c"
      case 4: // $bb3
        var $24=$pyus_out; //@line 1645 "datetimemodule.c"
        var $25=($24)==0; //@line 1645 "datetimemodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1645 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 1646 "datetimemodule.c"
        __label__ = 9; break; //@line 1646 "datetimemodule.c"
      case 6: // $bb5
        var $26=$pyus_out; //@line 1648 "datetimemodule.c"
        var $27=_microseconds_to_delta_ex($26, _PyDateTime_DeltaType); //@line 1648 "datetimemodule.c"
        $result=$27; //@line 1648 "datetimemodule.c"
        var $28=$pyus_out; //@line 1649 "datetimemodule.c"
        var $29=$28; //@line 1649 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 1649 "datetimemodule.c"
        var $31=($30) - 1; //@line 1649 "datetimemodule.c"
        var $32=$pyus_out; //@line 1649 "datetimemodule.c"
        var $33=$32; //@line 1649 "datetimemodule.c"
        HEAP[$33]=$31; //@line 1649 "datetimemodule.c"
        var $34=$pyus_out; //@line 1649 "datetimemodule.c"
        var $35=$34; //@line 1649 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 1649 "datetimemodule.c"
        var $37=($36)==0; //@line 1649 "datetimemodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1649 "datetimemodule.c"
      case 7: // $bb6
        var $38=$pyus_out; //@line 1649 "datetimemodule.c"
        var $39=$38+4; //@line 1649 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1649 "datetimemodule.c"
        var $41=$40+24; //@line 1649 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 1649 "datetimemodule.c"
        var $43=$pyus_out; //@line 1649 "datetimemodule.c"
        FUNCTION_TABLE[$42]($43); //@line 1649 "datetimemodule.c"
        __label__ = 8; break; //@line 1649 "datetimemodule.c"
      case 8: // $bb7
        var $44=$result; //@line 1650 "datetimemodule.c"
        $0=$44; //@line 1650 "datetimemodule.c"
        __label__ = 9; break; //@line 1650 "datetimemodule.c"
      case 9: // $bb8
        var $45=$0; //@line 1641 "datetimemodule.c"
        $retval=$45; //@line 1641 "datetimemodule.c"
        var $retval9=$retval; //@line 1641 "datetimemodule.c"
        ;
        return $retval9; //@line 1641 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _divide_timedelta_int($delta, $intobj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $delta_addr;
        var $intobj_addr;
        var $retval;
        var $0;
        var $pyus_in;
        var $pyus_out;
        var $result;
        $delta_addr=$delta;
        $intobj_addr=$intobj;
        var $1=$delta_addr; //@line 1660 "datetimemodule.c"
        var $2=_delta_to_microseconds($1); //@line 1660 "datetimemodule.c"
        $pyus_in=$2; //@line 1660 "datetimemodule.c"
        var $3=$pyus_in; //@line 1661 "datetimemodule.c"
        var $4=($3)==0; //@line 1661 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1661 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 1662 "datetimemodule.c"
        __label__ = 9; break; //@line 1662 "datetimemodule.c"
      case 2: // $bb1
        var $5=$pyus_in; //@line 1664 "datetimemodule.c"
        var $6=$intobj_addr; //@line 1664 "datetimemodule.c"
        var $7=_PyNumber_FloorDivide($5, $6); //@line 1664 "datetimemodule.c"
        $pyus_out=$7; //@line 1664 "datetimemodule.c"
        var $8=$pyus_in; //@line 1665 "datetimemodule.c"
        var $9=$8; //@line 1665 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 1665 "datetimemodule.c"
        var $11=($10) - 1; //@line 1665 "datetimemodule.c"
        var $12=$pyus_in; //@line 1665 "datetimemodule.c"
        var $13=$12; //@line 1665 "datetimemodule.c"
        HEAP[$13]=$11; //@line 1665 "datetimemodule.c"
        var $14=$pyus_in; //@line 1665 "datetimemodule.c"
        var $15=$14; //@line 1665 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1665 "datetimemodule.c"
        var $17=($16)==0; //@line 1665 "datetimemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1665 "datetimemodule.c"
      case 3: // $bb2
        var $18=$pyus_in; //@line 1665 "datetimemodule.c"
        var $19=$18+4; //@line 1665 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 1665 "datetimemodule.c"
        var $21=$20+24; //@line 1665 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1665 "datetimemodule.c"
        var $23=$pyus_in; //@line 1665 "datetimemodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1665 "datetimemodule.c"
        __label__ = 4; break; //@line 1665 "datetimemodule.c"
      case 4: // $bb3
        var $24=$pyus_out; //@line 1666 "datetimemodule.c"
        var $25=($24)==0; //@line 1666 "datetimemodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1666 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 1667 "datetimemodule.c"
        __label__ = 9; break; //@line 1667 "datetimemodule.c"
      case 6: // $bb5
        var $26=$pyus_out; //@line 1669 "datetimemodule.c"
        var $27=_microseconds_to_delta_ex($26, _PyDateTime_DeltaType); //@line 1669 "datetimemodule.c"
        $result=$27; //@line 1669 "datetimemodule.c"
        var $28=$pyus_out; //@line 1670 "datetimemodule.c"
        var $29=$28; //@line 1670 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 1670 "datetimemodule.c"
        var $31=($30) - 1; //@line 1670 "datetimemodule.c"
        var $32=$pyus_out; //@line 1670 "datetimemodule.c"
        var $33=$32; //@line 1670 "datetimemodule.c"
        HEAP[$33]=$31; //@line 1670 "datetimemodule.c"
        var $34=$pyus_out; //@line 1670 "datetimemodule.c"
        var $35=$34; //@line 1670 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 1670 "datetimemodule.c"
        var $37=($36)==0; //@line 1670 "datetimemodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1670 "datetimemodule.c"
      case 7: // $bb6
        var $38=$pyus_out; //@line 1670 "datetimemodule.c"
        var $39=$38+4; //@line 1670 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1670 "datetimemodule.c"
        var $41=$40+24; //@line 1670 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 1670 "datetimemodule.c"
        var $43=$pyus_out; //@line 1670 "datetimemodule.c"
        FUNCTION_TABLE[$42]($43); //@line 1670 "datetimemodule.c"
        __label__ = 8; break; //@line 1670 "datetimemodule.c"
      case 8: // $bb7
        var $44=$result; //@line 1671 "datetimemodule.c"
        $0=$44; //@line 1671 "datetimemodule.c"
        __label__ = 9; break; //@line 1671 "datetimemodule.c"
      case 9: // $bb8
        var $45=$0; //@line 1662 "datetimemodule.c"
        $retval=$45; //@line 1662 "datetimemodule.c"
        var $retval9=$retval; //@line 1662 "datetimemodule.c"
        ;
        return $retval9; //@line 1662 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_add($left, $right) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $result;
        var $days;
        var $seconds;
        var $microseconds;
        $left_addr=$left;
        $right_addr=$right;
        $result=__Py_NotImplementedStruct; //@line 1677 "datetimemodule.c"
        var $1=$left_addr; //@line 1679 "datetimemodule.c"
        var $2=$1+4; //@line 1679 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1679 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DeltaType); //@line 1679 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1679 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 1679 "datetimemodule.c"
        var $6=$5+4; //@line 1679 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1679 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DeltaType); //@line 1679 "datetimemodule.c"
        var $9=($8)!=0; //@line 1679 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1679 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 1679 "datetimemodule.c"
        var $11=$10+4; //@line 1679 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1679 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DeltaType); //@line 1679 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1679 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 1679 "datetimemodule.c"
        var $15=$14+4; //@line 1679 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1679 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DeltaType); //@line 1679 "datetimemodule.c"
        var $18=($17)!=0; //@line 1679 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1679 "datetimemodule.c"
      case 4: // $bb3
        var $19=$left_addr; //@line 1684 "datetimemodule.c"
        var $20=$19; //@line 1684 "datetimemodule.c"
        var $21=$20+12; //@line 1684 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1684 "datetimemodule.c"
        var $23=$right_addr; //@line 1684 "datetimemodule.c"
        var $24=$23; //@line 1684 "datetimemodule.c"
        var $25=$24+12; //@line 1684 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 1684 "datetimemodule.c"
        var $27=($26) + ($22); //@line 1684 "datetimemodule.c"
        $days=$27; //@line 1684 "datetimemodule.c"
        var $28=$left_addr; //@line 1685 "datetimemodule.c"
        var $29=$28; //@line 1685 "datetimemodule.c"
        var $30=$29+16; //@line 1685 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 1685 "datetimemodule.c"
        var $32=$right_addr; //@line 1685 "datetimemodule.c"
        var $33=$32; //@line 1685 "datetimemodule.c"
        var $34=$33+16; //@line 1685 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 1685 "datetimemodule.c"
        var $36=($35) + ($31); //@line 1685 "datetimemodule.c"
        $seconds=$36; //@line 1685 "datetimemodule.c"
        var $37=$left_addr; //@line 1687 "datetimemodule.c"
        var $38=$37; //@line 1687 "datetimemodule.c"
        var $39=$38+20; //@line 1687 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1687 "datetimemodule.c"
        var $41=$right_addr; //@line 1687 "datetimemodule.c"
        var $42=$41; //@line 1687 "datetimemodule.c"
        var $43=$42+20; //@line 1687 "datetimemodule.c"
        var $44=HEAP[$43]; //@line 1687 "datetimemodule.c"
        var $45=($44) + ($40); //@line 1687 "datetimemodule.c"
        $microseconds=$45; //@line 1687 "datetimemodule.c"
        var $46=$days; //@line 1688 "datetimemodule.c"
        var $47=$seconds; //@line 1688 "datetimemodule.c"
        var $48=$microseconds; //@line 1688 "datetimemodule.c"
        var $49=_new_delta_ex($46, $47, $48, 1, _PyDateTime_DeltaType); //@line 1688 "datetimemodule.c"
        $result=$49; //@line 1688 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 1688 "datetimemodule.c"
      case 5: // $bb4thread_pre_split
        var $_pr=$result;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb4
        var $50=__lastLabel__ == 5 ? $_pr : ($49);
        var $51=($50)==(__Py_NotImplementedStruct); //@line 1691 "datetimemodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1691 "datetimemodule.c"
      case 7: // $bb5
        var $52=$result; //@line 1692 "datetimemodule.c"
        var $53=$52; //@line 1692 "datetimemodule.c"
        var $54=HEAP[$53]; //@line 1692 "datetimemodule.c"
        var $55=($54) + 1; //@line 1692 "datetimemodule.c"
        var $56=$result; //@line 1692 "datetimemodule.c"
        var $57=$56; //@line 1692 "datetimemodule.c"
        HEAP[$57]=$55; //@line 1692 "datetimemodule.c"
        __label__ = 8; break; //@line 1692 "datetimemodule.c"
      case 8: // $bb6
        var $58=$result; //@line 1693 "datetimemodule.c"
        $0=$58; //@line 1693 "datetimemodule.c"
        var $59=$0; //@line 1693 "datetimemodule.c"
        $retval=$59; //@line 1693 "datetimemodule.c"
        var $retval7=$retval; //@line 1693 "datetimemodule.c"
        ;
        return $retval7; //@line 1693 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_negative($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 1699 "datetimemodule.c"
    var $2=$1+20; //@line 1699 "datetimemodule.c"
    var $3=HEAP[$2]; //@line 1699 "datetimemodule.c"
    var $4=0 - ($3); //@line 1699 "datetimemodule.c"
    var $5=$self_addr; //@line 1699 "datetimemodule.c"
    var $6=$5+16; //@line 1699 "datetimemodule.c"
    var $7=HEAP[$6]; //@line 1699 "datetimemodule.c"
    var $8=0 - ($7); //@line 1699 "datetimemodule.c"
    var $9=$self_addr; //@line 1699 "datetimemodule.c"
    var $10=$9+12; //@line 1699 "datetimemodule.c"
    var $11=HEAP[$10]; //@line 1699 "datetimemodule.c"
    var $12=0 - ($11); //@line 1699 "datetimemodule.c"
    var $13=_new_delta_ex($12, $8, $4, 1, _PyDateTime_DeltaType); //@line 1699 "datetimemodule.c"
    $0=$13; //@line 1699 "datetimemodule.c"
    var $14=$0; //@line 1699 "datetimemodule.c"
    $retval=$14; //@line 1699 "datetimemodule.c"
    var $retval1=$retval; //@line 1699 "datetimemodule.c"
    ;
    return $retval1; //@line 1699 "datetimemodule.c"
  }
  

  function _delta_positive($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 1711 "datetimemodule.c"
    var $2=$1+20; //@line 1711 "datetimemodule.c"
    var $3=HEAP[$2]; //@line 1711 "datetimemodule.c"
    var $4=$self_addr; //@line 1711 "datetimemodule.c"
    var $5=$4+16; //@line 1711 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 1711 "datetimemodule.c"
    var $7=$self_addr; //@line 1711 "datetimemodule.c"
    var $8=$7+12; //@line 1711 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 1711 "datetimemodule.c"
    var $10=_new_delta_ex($9, $6, $3, 0, _PyDateTime_DeltaType); //@line 1711 "datetimemodule.c"
    $0=$10; //@line 1711 "datetimemodule.c"
    var $11=$0; //@line 1711 "datetimemodule.c"
    $retval=$11; //@line 1711 "datetimemodule.c"
    var $retval1=$retval; //@line 1711 "datetimemodule.c"
    ;
    return $retval1; //@line 1711 "datetimemodule.c"
  }
  

  function _delta_abs($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $result;
        $self_addr=$self;
        var $1=$self_addr; //@line 1722 "datetimemodule.c"
        var $2=$1+20; //@line 1722 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1722 "datetimemodule.c"
        var $4=($3) < 0; //@line 1722 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1722 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str108, __str1, 1722, ___PRETTY_FUNCTION___10169); //@line 1722 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1722 "datetimemodule.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 1723 "datetimemodule.c"
        var $6=$5+16; //@line 1723 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1723 "datetimemodule.c"
        var $8=($7) < 0; //@line 1723 "datetimemodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1723 "datetimemodule.c"
      case 3: // $bb2
        ___assert_fail(__str109, __str1, 1723, ___PRETTY_FUNCTION___10169); //@line 1723 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1723 "datetimemodule.c"
      case 4: // $bb3
        var $9=$self_addr; //@line 1725 "datetimemodule.c"
        var $10=$9+12; //@line 1725 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 1725 "datetimemodule.c"
        var $12=($11) < 0; //@line 1725 "datetimemodule.c"
        var $13=$self_addr; //@line 1726 "datetimemodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1725 "datetimemodule.c"
      case 5: // $bb4
        var $14=_delta_negative($13); //@line 1726 "datetimemodule.c"
        $result=$14; //@line 1726 "datetimemodule.c"
        __label__ = 7; break; //@line 1726 "datetimemodule.c"
      case 6: // $bb5
        var $15=_delta_positive($13); //@line 1728 "datetimemodule.c"
        $result=$15; //@line 1728 "datetimemodule.c"
        __label__ = 7; break; //@line 1728 "datetimemodule.c"
      case 7: // $bb6
        var $16=$result; //@line 1730 "datetimemodule.c"
        $0=$16; //@line 1730 "datetimemodule.c"
        var $17=$0; //@line 1730 "datetimemodule.c"
        $retval=$17; //@line 1730 "datetimemodule.c"
        var $retval7=$retval; //@line 1730 "datetimemodule.c"
        ;
        return $retval7; //@line 1730 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_subtract($left, $right) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $result;
        var $days;
        var $seconds;
        var $microseconds;
        $left_addr=$left;
        $right_addr=$right;
        $result=__Py_NotImplementedStruct; //@line 1736 "datetimemodule.c"
        var $1=$left_addr; //@line 1738 "datetimemodule.c"
        var $2=$1+4; //@line 1738 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1738 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DeltaType); //@line 1738 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1738 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 1738 "datetimemodule.c"
        var $6=$5+4; //@line 1738 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1738 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DeltaType); //@line 1738 "datetimemodule.c"
        var $9=($8)!=0; //@line 1738 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1738 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 1738 "datetimemodule.c"
        var $11=$10+4; //@line 1738 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1738 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DeltaType); //@line 1738 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1738 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 1738 "datetimemodule.c"
        var $15=$14+4; //@line 1738 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1738 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DeltaType); //@line 1738 "datetimemodule.c"
        var $18=($17)!=0; //@line 1738 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1738 "datetimemodule.c"
      case 4: // $bb3
        var $19=$left_addr; //@line 1743 "datetimemodule.c"
        var $20=$19; //@line 1743 "datetimemodule.c"
        var $21=$20+12; //@line 1743 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1743 "datetimemodule.c"
        var $23=$right_addr; //@line 1743 "datetimemodule.c"
        var $24=$23; //@line 1743 "datetimemodule.c"
        var $25=$24+12; //@line 1743 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 1743 "datetimemodule.c"
        var $27=($22) - ($26); //@line 1743 "datetimemodule.c"
        $days=$27; //@line 1743 "datetimemodule.c"
        var $28=$left_addr; //@line 1744 "datetimemodule.c"
        var $29=$28; //@line 1744 "datetimemodule.c"
        var $30=$29+16; //@line 1744 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 1744 "datetimemodule.c"
        var $32=$right_addr; //@line 1744 "datetimemodule.c"
        var $33=$32; //@line 1744 "datetimemodule.c"
        var $34=$33+16; //@line 1744 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 1744 "datetimemodule.c"
        var $36=($31) - ($35); //@line 1744 "datetimemodule.c"
        $seconds=$36; //@line 1744 "datetimemodule.c"
        var $37=$left_addr; //@line 1746 "datetimemodule.c"
        var $38=$37; //@line 1746 "datetimemodule.c"
        var $39=$38+20; //@line 1746 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1746 "datetimemodule.c"
        var $41=$right_addr; //@line 1746 "datetimemodule.c"
        var $42=$41; //@line 1746 "datetimemodule.c"
        var $43=$42+20; //@line 1746 "datetimemodule.c"
        var $44=HEAP[$43]; //@line 1746 "datetimemodule.c"
        var $45=($40) - ($44); //@line 1746 "datetimemodule.c"
        $microseconds=$45; //@line 1746 "datetimemodule.c"
        var $46=$days; //@line 1747 "datetimemodule.c"
        var $47=$seconds; //@line 1747 "datetimemodule.c"
        var $48=$microseconds; //@line 1747 "datetimemodule.c"
        var $49=_new_delta_ex($46, $47, $48, 1, _PyDateTime_DeltaType); //@line 1747 "datetimemodule.c"
        $result=$49; //@line 1747 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 1747 "datetimemodule.c"
      case 5: // $bb4thread_pre_split
        var $_pr=$result;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb4
        var $50=__lastLabel__ == 5 ? $_pr : ($49);
        var $51=($50)==(__Py_NotImplementedStruct); //@line 1750 "datetimemodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1750 "datetimemodule.c"
      case 7: // $bb5
        var $52=$result; //@line 1751 "datetimemodule.c"
        var $53=$52; //@line 1751 "datetimemodule.c"
        var $54=HEAP[$53]; //@line 1751 "datetimemodule.c"
        var $55=($54) + 1; //@line 1751 "datetimemodule.c"
        var $56=$result; //@line 1751 "datetimemodule.c"
        var $57=$56; //@line 1751 "datetimemodule.c"
        HEAP[$57]=$55; //@line 1751 "datetimemodule.c"
        __label__ = 8; break; //@line 1751 "datetimemodule.c"
      case 8: // $bb6
        var $58=$result; //@line 1752 "datetimemodule.c"
        $0=$58; //@line 1752 "datetimemodule.c"
        var $59=$0; //@line 1752 "datetimemodule.c"
        $retval=$59; //@line 1752 "datetimemodule.c"
        var $retval7=$retval; //@line 1752 "datetimemodule.c"
        ;
        return $retval7; //@line 1752 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_richcompare($self, $other, $op) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $other_addr;
        var $op_addr;
        var $retval;
        var $0;
        var $diff;
        $self_addr=$self;
        $other_addr=$other;
        $op_addr=$op;
        $diff=42; //@line 1762 "datetimemodule.c"
        var $1=$other_addr; //@line 1764 "datetimemodule.c"
        var $2=$1+4; //@line 1764 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1764 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DeltaType); //@line 1764 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1764 "datetimemodule.c"
      case 1: // $bb
        var $5=$other_addr; //@line 1764 "datetimemodule.c"
        var $6=$5+4; //@line 1764 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1764 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DeltaType); //@line 1764 "datetimemodule.c"
        var $9=($8)!=0; //@line 1764 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1764 "datetimemodule.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 1765 "datetimemodule.c"
        var $11=$10+12; //@line 1765 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1765 "datetimemodule.c"
        var $13=$other_addr; //@line 1765 "datetimemodule.c"
        var $14=$13; //@line 1765 "datetimemodule.c"
        var $15=$14+12; //@line 1765 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1765 "datetimemodule.c"
        var $17=($12) - ($16); //@line 1765 "datetimemodule.c"
        $diff=$17; //@line 1765 "datetimemodule.c"
        var $18=($17)==0; //@line 1766 "datetimemodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1766 "datetimemodule.c"
      case 3: // $bb2
        var $19=$self_addr; //@line 1767 "datetimemodule.c"
        var $20=$19+16; //@line 1767 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1767 "datetimemodule.c"
        var $22=$other_addr; //@line 1767 "datetimemodule.c"
        var $23=$22; //@line 1767 "datetimemodule.c"
        var $24=$23+16; //@line 1767 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 1767 "datetimemodule.c"
        var $26=($21) - ($25); //@line 1767 "datetimemodule.c"
        $diff=$26; //@line 1767 "datetimemodule.c"
        var $27=$diff; //@line 1768 "datetimemodule.c"
        var $28=($27)==0; //@line 1768 "datetimemodule.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1768 "datetimemodule.c"
      case 4: // $bb3
        var $29=$self_addr; //@line 1769 "datetimemodule.c"
        var $30=$29+20; //@line 1769 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 1769 "datetimemodule.c"
        var $32=$other_addr; //@line 1769 "datetimemodule.c"
        var $33=$32; //@line 1769 "datetimemodule.c"
        var $34=$33+20; //@line 1769 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 1769 "datetimemodule.c"
        var $36=($31) - ($35); //@line 1769 "datetimemodule.c"
        $diff=$36; //@line 1769 "datetimemodule.c"
        __label__ = 8; break; //@line 1769 "datetimemodule.c"
      case 5: // $bb5
        var $37=$op_addr; //@line 1773 "datetimemodule.c"
        var $38=($37)==2; //@line 1773 "datetimemodule.c"
        var $39=$op_addr; //@line 1773 "datetimemodule.c"
        var $40=($39)==3; //@line 1773 "datetimemodule.c"
        var $or_cond=($38) | ($40);
        if ($or_cond) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1773 "datetimemodule.c"
      case 6: // $bb7
        $diff=1; //@line 1774 "datetimemodule.c"
        __label__ = 8; break; //@line 1774 "datetimemodule.c"
      case 7: // $bb8
        var $41=$self_addr; //@line 1777 "datetimemodule.c"
        var $42=$41; //@line 1777 "datetimemodule.c"
        var $43=$other_addr; //@line 1777 "datetimemodule.c"
        var $44=_cmperror($42, $43); //@line 1777 "datetimemodule.c"
        $0=$44; //@line 1777 "datetimemodule.c"
        __label__ = 9; break; //@line 1777 "datetimemodule.c"
      case 8: // $bb9
        var $45=$diff; //@line 1779 "datetimemodule.c"
        var $46=$op_addr; //@line 1779 "datetimemodule.c"
        var $47=_diff_to_bool($45, $46); //@line 1779 "datetimemodule.c"
        $0=$47; //@line 1779 "datetimemodule.c"
        __label__ = 9; break; //@line 1779 "datetimemodule.c"
      case 9: // $bb10
        var $48=$0; //@line 1777 "datetimemodule.c"
        $retval=$48; //@line 1777 "datetimemodule.c"
        var $retval11=$retval; //@line 1777 "datetimemodule.c"
        ;
        return $retval11; //@line 1777 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_hash($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $temp;
        $self_addr=$self;
        var $1=$self_addr; //@line 1787 "datetimemodule.c"
        var $2=$1+8; //@line 1787 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1787 "datetimemodule.c"
        var $4=($3)==-1; //@line 1787 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1787 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1788 "datetimemodule.c"
        var $6=_delta_getstate($5); //@line 1788 "datetimemodule.c"
        $temp=$6; //@line 1788 "datetimemodule.c"
        var $7=$temp; //@line 1789 "datetimemodule.c"
        var $8=($7)!=0; //@line 1789 "datetimemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1789 "datetimemodule.c"
      case 2: // $bb1
        var $9=$temp; //@line 1790 "datetimemodule.c"
        var $10=_PyObject_Hash($9); //@line 1790 "datetimemodule.c"
        var $11=$self_addr; //@line 1790 "datetimemodule.c"
        var $12=$11+8; //@line 1790 "datetimemodule.c"
        HEAP[$12]=$10; //@line 1790 "datetimemodule.c"
        var $13=$temp; //@line 1791 "datetimemodule.c"
        var $14=$13; //@line 1791 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 1791 "datetimemodule.c"
        var $16=($15) - 1; //@line 1791 "datetimemodule.c"
        var $17=$temp; //@line 1791 "datetimemodule.c"
        var $18=$17; //@line 1791 "datetimemodule.c"
        HEAP[$18]=$16; //@line 1791 "datetimemodule.c"
        var $19=$temp; //@line 1791 "datetimemodule.c"
        var $20=$19; //@line 1791 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1791 "datetimemodule.c"
        var $22=($21)==0; //@line 1791 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1791 "datetimemodule.c"
      case 3: // $bb2
        var $23=$temp; //@line 1791 "datetimemodule.c"
        var $24=$23+4; //@line 1791 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 1791 "datetimemodule.c"
        var $26=$25+24; //@line 1791 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 1791 "datetimemodule.c"
        var $28=$temp; //@line 1791 "datetimemodule.c"
        FUNCTION_TABLE[$27]($28); //@line 1791 "datetimemodule.c"
        __label__ = 4; break; //@line 1791 "datetimemodule.c"
      case 4: // $bb3
        var $29=$self_addr; //@line 1794 "datetimemodule.c"
        var $30=$29+8; //@line 1794 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 1794 "datetimemodule.c"
        $0=$31; //@line 1794 "datetimemodule.c"
        var $32=$0; //@line 1794 "datetimemodule.c"
        $retval=$32; //@line 1794 "datetimemodule.c"
        var $retval4=$retval; //@line 1794 "datetimemodule.c"
        ;
        return $retval4; //@line 1794 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_multiply($left, $right) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $result;
        $left_addr=$left;
        $right_addr=$right;
        $result=__Py_NotImplementedStruct; //@line 1800 "datetimemodule.c"
        var $1=$left_addr; //@line 1802 "datetimemodule.c"
        var $2=$1+4; //@line 1802 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1802 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DeltaType); //@line 1802 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1802 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 1802 "datetimemodule.c"
        var $6=$5+4; //@line 1802 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1802 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DeltaType); //@line 1802 "datetimemodule.c"
        var $9=($8)!=0; //@line 1802 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1802 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 1804 "datetimemodule.c"
        var $11=$10+4; //@line 1804 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1804 "datetimemodule.c"
        var $13=$12+84; //@line 1804 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1804 "datetimemodule.c"
        var $15=($14) & 8388608; //@line 1804 "datetimemodule.c"
        var $16=($15)!=0; //@line 1804 "datetimemodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1804 "datetimemodule.c"
      case 3: // $bb2
        var $17=$right_addr; //@line 1804 "datetimemodule.c"
        var $18=$17+4; //@line 1804 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 1804 "datetimemodule.c"
        var $20=$19+84; //@line 1804 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1804 "datetimemodule.c"
        var $22=($21) & 16777216; //@line 1804 "datetimemodule.c"
        var $23=($22)!=0; //@line 1804 "datetimemodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1804 "datetimemodule.c"
      case 4: // $bb3
        var $24=$left_addr; //@line 1805 "datetimemodule.c"
        var $25=$24; //@line 1805 "datetimemodule.c"
        var $26=$right_addr; //@line 1805 "datetimemodule.c"
        var $27=_multiply_int_timedelta($26, $25); //@line 1805 "datetimemodule.c"
        $result=$27; //@line 1805 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 9; break; //@line 1805 "datetimemodule.c"
      case 5: // $bb5
        var $28=$left_addr; //@line 1808 "datetimemodule.c"
        var $29=$28+4; //@line 1808 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 1808 "datetimemodule.c"
        var $31=$30+84; //@line 1808 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 1808 "datetimemodule.c"
        var $33=($32) & 8388608; //@line 1808 "datetimemodule.c"
        var $34=($33)!=0; //@line 1808 "datetimemodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1808 "datetimemodule.c"
      case 6: // $bb6
        var $35=$left_addr; //@line 1808 "datetimemodule.c"
        var $36=$35+4; //@line 1808 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 1808 "datetimemodule.c"
        var $38=$37+84; //@line 1808 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 1808 "datetimemodule.c"
        var $40=($39) & 16777216; //@line 1808 "datetimemodule.c"
        var $41=($40)!=0; //@line 1808 "datetimemodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1808 "datetimemodule.c"
      case 7: // $bb7
        var $42=$right_addr; //@line 1809 "datetimemodule.c"
        var $43=$42; //@line 1809 "datetimemodule.c"
        var $44=$left_addr; //@line 1809 "datetimemodule.c"
        var $45=_multiply_int_timedelta($44, $43); //@line 1809 "datetimemodule.c"
        $result=$45; //@line 1809 "datetimemodule.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 1809 "datetimemodule.c"
      case 8: // $bb8thread_pre_split
        var $_pr=$result;
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb8
        var $46=__lastLabel__ == 8 ? $_pr : (__lastLabel__ == 4 ? $27 : ($45));
        var $47=($46)==(__Py_NotImplementedStruct); //@line 1812 "datetimemodule.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1812 "datetimemodule.c"
      case 10: // $bb9
        var $48=$result; //@line 1813 "datetimemodule.c"
        var $49=$48; //@line 1813 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 1813 "datetimemodule.c"
        var $51=($50) + 1; //@line 1813 "datetimemodule.c"
        var $52=$result; //@line 1813 "datetimemodule.c"
        var $53=$52; //@line 1813 "datetimemodule.c"
        HEAP[$53]=$51; //@line 1813 "datetimemodule.c"
        __label__ = 11; break; //@line 1813 "datetimemodule.c"
      case 11: // $bb10
        var $54=$result; //@line 1814 "datetimemodule.c"
        $0=$54; //@line 1814 "datetimemodule.c"
        var $55=$0; //@line 1814 "datetimemodule.c"
        $retval=$55; //@line 1814 "datetimemodule.c"
        var $retval11=$retval; //@line 1814 "datetimemodule.c"
        ;
        return $retval11; //@line 1814 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_divide($left, $right) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $result;
        $left_addr=$left;
        $right_addr=$right;
        $result=__Py_NotImplementedStruct; //@line 1820 "datetimemodule.c"
        var $1=$left_addr; //@line 1822 "datetimemodule.c"
        var $2=$1+4; //@line 1822 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 1822 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DeltaType); //@line 1822 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1822 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 1822 "datetimemodule.c"
        var $6=$5+4; //@line 1822 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1822 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DeltaType); //@line 1822 "datetimemodule.c"
        var $9=($8)!=0; //@line 1822 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1822 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 1824 "datetimemodule.c"
        var $11=$10+4; //@line 1824 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1824 "datetimemodule.c"
        var $13=$12+84; //@line 1824 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1824 "datetimemodule.c"
        var $15=($14) & 8388608; //@line 1824 "datetimemodule.c"
        var $16=($15)!=0; //@line 1824 "datetimemodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1824 "datetimemodule.c"
      case 3: // $bb2
        var $17=$right_addr; //@line 1824 "datetimemodule.c"
        var $18=$17+4; //@line 1824 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 1824 "datetimemodule.c"
        var $20=$19+84; //@line 1824 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 1824 "datetimemodule.c"
        var $22=($21) & 16777216; //@line 1824 "datetimemodule.c"
        var $23=($22)!=0; //@line 1824 "datetimemodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1824 "datetimemodule.c"
      case 4: // $bb3
        var $24=$left_addr; //@line 1825 "datetimemodule.c"
        var $25=$24; //@line 1825 "datetimemodule.c"
        var $26=$right_addr; //@line 1825 "datetimemodule.c"
        var $27=_divide_timedelta_int($25, $26); //@line 1825 "datetimemodule.c"
        $result=$27; //@line 1825 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 1825 "datetimemodule.c"
      case 5: // $bb4thread_pre_split
        var $_pr=$result;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb4
        var $28=__lastLabel__ == 5 ? $_pr : ($27);
        var $29=($28)==(__Py_NotImplementedStruct); //@line 1830 "datetimemodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1830 "datetimemodule.c"
      case 7: // $bb5
        var $30=$result; //@line 1831 "datetimemodule.c"
        var $31=$30; //@line 1831 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 1831 "datetimemodule.c"
        var $33=($32) + 1; //@line 1831 "datetimemodule.c"
        var $34=$result; //@line 1831 "datetimemodule.c"
        var $35=$34; //@line 1831 "datetimemodule.c"
        HEAP[$35]=$33; //@line 1831 "datetimemodule.c"
        __label__ = 8; break; //@line 1831 "datetimemodule.c"
      case 8: // $bb6
        var $36=$result; //@line 1832 "datetimemodule.c"
        $0=$36; //@line 1832 "datetimemodule.c"
        var $37=$0; //@line 1832 "datetimemodule.c"
        $retval=$37; //@line 1832 "datetimemodule.c"
        var $retval7=$retval; //@line 1832 "datetimemodule.c"
        ;
        return $retval7; //@line 1832 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _accum($tag, $sofar, $num, $factor, $leftover) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tag_addr;
        var $sofar_addr;
        var $num_addr;
        var $factor_addr;
        var $leftover_addr;
        var $retval;
        var $0;
        var $prod;
        var $sum;
        var $dnum;
        var $fracpart;
        var $intpart=__stackBase__;
        var $x;
        var $y;
        $tag_addr=$tag;
        $sofar_addr=$sofar;
        $num_addr=$num;
        $factor_addr=$factor;
        $leftover_addr=$leftover;
        var $1=$num_addr; //@line 1851 "datetimemodule.c"
        var $2=($1)==0; //@line 1851 "datetimemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1851 "datetimemodule.c"
      case 1: // $bb
        ___assert_fail(__str110, __str1, 1851, ___PRETTY_FUNCTION___10356); //@line 1851 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1851 "datetimemodule.c"
      case 2: // $bb1
        var $3=$num_addr; //@line 1853 "datetimemodule.c"
        var $4=$3+4; //@line 1853 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 1853 "datetimemodule.c"
        var $6=$5+84; //@line 1853 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 1853 "datetimemodule.c"
        var $8=($7) & 8388608; //@line 1853 "datetimemodule.c"
        var $9=($8)!=0; //@line 1853 "datetimemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1853 "datetimemodule.c"
      case 3: // $bb2
        var $10=$num_addr; //@line 1853 "datetimemodule.c"
        var $11=$10+4; //@line 1853 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 1853 "datetimemodule.c"
        var $13=$12+84; //@line 1853 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 1853 "datetimemodule.c"
        var $15=($14) & 16777216; //@line 1853 "datetimemodule.c"
        var $16=($15)!=0; //@line 1853 "datetimemodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1853 "datetimemodule.c"
      case 4: // $bb3
        var $17=$num_addr; //@line 1854 "datetimemodule.c"
        var $18=$factor_addr; //@line 1854 "datetimemodule.c"
        var $19=_PyNumber_Multiply($17, $18); //@line 1854 "datetimemodule.c"
        $prod=$19; //@line 1854 "datetimemodule.c"
        var $20=($19)==0; //@line 1855 "datetimemodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1855 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 1856 "datetimemodule.c"
        __label__ = 42; break; //@line 1856 "datetimemodule.c"
      case 6: // $bb5
        var $21=$sofar_addr; //@line 1857 "datetimemodule.c"
        var $22=$prod; //@line 1857 "datetimemodule.c"
        var $23=_PyNumber_Add($21, $22); //@line 1857 "datetimemodule.c"
        $sum=$23; //@line 1857 "datetimemodule.c"
        var $24=$prod; //@line 1858 "datetimemodule.c"
        var $25=$24; //@line 1858 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 1858 "datetimemodule.c"
        var $27=($26) - 1; //@line 1858 "datetimemodule.c"
        var $28=$prod; //@line 1858 "datetimemodule.c"
        var $29=$28; //@line 1858 "datetimemodule.c"
        HEAP[$29]=$27; //@line 1858 "datetimemodule.c"
        var $30=$prod; //@line 1858 "datetimemodule.c"
        var $31=$30; //@line 1858 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 1858 "datetimemodule.c"
        var $33=($32)==0; //@line 1858 "datetimemodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1858 "datetimemodule.c"
      case 7: // $bb6
        var $34=$prod; //@line 1858 "datetimemodule.c"
        var $35=$34+4; //@line 1858 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 1858 "datetimemodule.c"
        var $37=$36+24; //@line 1858 "datetimemodule.c"
        var $38=HEAP[$37]; //@line 1858 "datetimemodule.c"
        var $39=$prod; //@line 1858 "datetimemodule.c"
        FUNCTION_TABLE[$38]($39); //@line 1858 "datetimemodule.c"
        __label__ = 8; break; //@line 1858 "datetimemodule.c"
      case 8: // $bb7
        var $40=$sum; //@line 1859 "datetimemodule.c"
        $0=$40; //@line 1859 "datetimemodule.c"
        __label__ = 42; break; //@line 1859 "datetimemodule.c"
      case 9: // $bb8
        var $41=$num_addr; //@line 1862 "datetimemodule.c"
        var $42=$41+4; //@line 1862 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 1862 "datetimemodule.c"
        var $44=($43)==(_PyFloat_Type); //@line 1862 "datetimemodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1862 "datetimemodule.c"
      case 10: // $bb9
        var $45=$num_addr; //@line 1862 "datetimemodule.c"
        var $46=$45+4; //@line 1862 "datetimemodule.c"
        var $47=HEAP[$46]; //@line 1862 "datetimemodule.c"
        var $48=_PyType_IsSubtype($47, _PyFloat_Type); //@line 1862 "datetimemodule.c"
        var $49=($48)!=0; //@line 1862 "datetimemodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 41; break; } //@line 1862 "datetimemodule.c"
      case 11: // $bb10
        var $50=$num_addr; //@line 1877 "datetimemodule.c"
        var $51=_PyFloat_AsDouble($50); //@line 1877 "datetimemodule.c"
        $dnum=$51; //@line 1877 "datetimemodule.c"
        var $52=($51) == -1; //@line 1878 "datetimemodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1878 "datetimemodule.c"
      case 12: // $bb11
        var $53=_PyErr_Occurred(); //@line 1878 "datetimemodule.c"
        var $54=($53)!=0; //@line 1878 "datetimemodule.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1878 "datetimemodule.c"
      case 13: // $bb12
        $0=0; //@line 1879 "datetimemodule.c"
        __label__ = 42; break; //@line 1879 "datetimemodule.c"
      case 14: // $bb13
        var $55=$dnum; //@line 1880 "datetimemodule.c"
        var $56=_modf($55, $intpart); //@line 1880 "datetimemodule.c"
        $fracpart=$56; //@line 1880 "datetimemodule.c"
        var $57=HEAP[$intpart]; //@line 1881 "datetimemodule.c"
        var $58=_PyLong_FromDouble($57); //@line 1881 "datetimemodule.c"
        $x=$58; //@line 1881 "datetimemodule.c"
        var $59=($58)==0; //@line 1882 "datetimemodule.c"
        if ($59) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1882 "datetimemodule.c"
      case 15: // $bb14
        $0=0; //@line 1883 "datetimemodule.c"
        __label__ = 42; break; //@line 1883 "datetimemodule.c"
      case 16: // $bb15
        var $60=$x; //@line 1885 "datetimemodule.c"
        var $61=$factor_addr; //@line 1885 "datetimemodule.c"
        var $62=_PyNumber_Multiply($60, $61); //@line 1885 "datetimemodule.c"
        $prod=$62; //@line 1885 "datetimemodule.c"
        var $63=$x; //@line 1886 "datetimemodule.c"
        var $64=$63; //@line 1886 "datetimemodule.c"
        var $65=HEAP[$64]; //@line 1886 "datetimemodule.c"
        var $66=($65) - 1; //@line 1886 "datetimemodule.c"
        var $67=$x; //@line 1886 "datetimemodule.c"
        var $68=$67; //@line 1886 "datetimemodule.c"
        HEAP[$68]=$66; //@line 1886 "datetimemodule.c"
        var $69=$x; //@line 1886 "datetimemodule.c"
        var $70=$69; //@line 1886 "datetimemodule.c"
        var $71=HEAP[$70]; //@line 1886 "datetimemodule.c"
        var $72=($71)==0; //@line 1886 "datetimemodule.c"
        if ($72) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1886 "datetimemodule.c"
      case 17: // $bb16
        var $73=$x; //@line 1886 "datetimemodule.c"
        var $74=$73+4; //@line 1886 "datetimemodule.c"
        var $75=HEAP[$74]; //@line 1886 "datetimemodule.c"
        var $76=$75+24; //@line 1886 "datetimemodule.c"
        var $77=HEAP[$76]; //@line 1886 "datetimemodule.c"
        var $78=$x; //@line 1886 "datetimemodule.c"
        FUNCTION_TABLE[$77]($78); //@line 1886 "datetimemodule.c"
        __label__ = 18; break; //@line 1886 "datetimemodule.c"
      case 18: // $bb17
        var $79=$prod; //@line 1887 "datetimemodule.c"
        var $80=($79)==0; //@line 1887 "datetimemodule.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1887 "datetimemodule.c"
      case 19: // $bb18
        $0=0; //@line 1888 "datetimemodule.c"
        __label__ = 42; break; //@line 1888 "datetimemodule.c"
      case 20: // $bb19
        var $81=$sofar_addr; //@line 1890 "datetimemodule.c"
        var $82=$prod; //@line 1890 "datetimemodule.c"
        var $83=_PyNumber_Add($81, $82); //@line 1890 "datetimemodule.c"
        $sum=$83; //@line 1890 "datetimemodule.c"
        var $84=$prod; //@line 1891 "datetimemodule.c"
        var $85=$84; //@line 1891 "datetimemodule.c"
        var $86=HEAP[$85]; //@line 1891 "datetimemodule.c"
        var $87=($86) - 1; //@line 1891 "datetimemodule.c"
        var $88=$prod; //@line 1891 "datetimemodule.c"
        var $89=$88; //@line 1891 "datetimemodule.c"
        HEAP[$89]=$87; //@line 1891 "datetimemodule.c"
        var $90=$prod; //@line 1891 "datetimemodule.c"
        var $91=$90; //@line 1891 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 1891 "datetimemodule.c"
        var $93=($92)==0; //@line 1891 "datetimemodule.c"
        if ($93) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1891 "datetimemodule.c"
      case 21: // $bb20
        var $94=$prod; //@line 1891 "datetimemodule.c"
        var $95=$94+4; //@line 1891 "datetimemodule.c"
        var $96=HEAP[$95]; //@line 1891 "datetimemodule.c"
        var $97=$96+24; //@line 1891 "datetimemodule.c"
        var $98=HEAP[$97]; //@line 1891 "datetimemodule.c"
        var $99=$prod; //@line 1891 "datetimemodule.c"
        FUNCTION_TABLE[$98]($99); //@line 1891 "datetimemodule.c"
        __label__ = 22; break; //@line 1891 "datetimemodule.c"
      case 22: // $bb21
        var $100=$sum; //@line 1892 "datetimemodule.c"
        var $101=($100)==0; //@line 1892 "datetimemodule.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1892 "datetimemodule.c"
      case 23: // $bb22
        $0=0; //@line 1893 "datetimemodule.c"
        __label__ = 42; break; //@line 1893 "datetimemodule.c"
      case 24: // $bb23
        var $102=$fracpart; //@line 1895 "datetimemodule.c"
        var $103=($102) == 0; //@line 1895 "datetimemodule.c"
        if ($103) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1895 "datetimemodule.c"
      case 25: // $bb24
        var $104=$sum; //@line 1896 "datetimemodule.c"
        $0=$104; //@line 1896 "datetimemodule.c"
        __label__ = 42; break; //@line 1896 "datetimemodule.c"
      case 26: // $bb25
        var $105=$factor_addr; //@line 1901 "datetimemodule.c"
        var $106=$105+4; //@line 1901 "datetimemodule.c"
        var $107=HEAP[$106]; //@line 1901 "datetimemodule.c"
        var $108=$107+84; //@line 1901 "datetimemodule.c"
        var $109=HEAP[$108]; //@line 1901 "datetimemodule.c"
        var $110=($109) & 8388608; //@line 1901 "datetimemodule.c"
        var $111=($110)==0; //@line 1901 "datetimemodule.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1901 "datetimemodule.c"
      case 27: // $bb26
        var $112=$factor_addr; //@line 1901 "datetimemodule.c"
        var $113=$112+4; //@line 1901 "datetimemodule.c"
        var $114=HEAP[$113]; //@line 1901 "datetimemodule.c"
        var $115=$114+84; //@line 1901 "datetimemodule.c"
        var $116=HEAP[$115]; //@line 1901 "datetimemodule.c"
        var $117=($116) & 16777216; //@line 1901 "datetimemodule.c"
        var $118=($117)==0; //@line 1901 "datetimemodule.c"
        if ($118) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1901 "datetimemodule.c"
      case 28: // $bb27
        ___assert_fail(__str111, __str1, 1901, ___PRETTY_FUNCTION___10356); //@line 1901 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 1901 "datetimemodule.c"
      case 29: // $bb28
        var $119=$factor_addr; //@line 1902 "datetimemodule.c"
        var $120=$119+4; //@line 1902 "datetimemodule.c"
        var $121=HEAP[$120]; //@line 1902 "datetimemodule.c"
        var $122=$121+84; //@line 1902 "datetimemodule.c"
        var $123=HEAP[$122]; //@line 1902 "datetimemodule.c"
        var $124=($123) & 8388608; //@line 1902 "datetimemodule.c"
        var $125=($124)!=0; //@line 1902 "datetimemodule.c"
        var $126=$factor_addr; //@line 1903 "datetimemodule.c"
        if ($125) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1902 "datetimemodule.c"
      case 30: // $bb29
        var $127=_PyInt_AsLong($126); //@line 1903 "datetimemodule.c"
        var $128=($127); //@line 1903 "datetimemodule.c"
        $dnum=$128; //@line 1903 "datetimemodule.c"
        __label__ = 32; break; //@line 1903 "datetimemodule.c"
      case 31: // $bb30
        var $129=_PyLong_AsDouble($126); //@line 1905 "datetimemodule.c"
        $dnum=$129; //@line 1905 "datetimemodule.c"
        __label__ = 32; break; //@line 1905 "datetimemodule.c"
      case 32: // $bb31
        var $130=$dnum; //@line 1907 "datetimemodule.c"
        var $131=$fracpart; //@line 1907 "datetimemodule.c"
        var $132=($130) * ($131); //@line 1907 "datetimemodule.c"
        $dnum=$132; //@line 1907 "datetimemodule.c"
        var $133=$dnum; //@line 1908 "datetimemodule.c"
        var $134=_modf($133, $intpart); //@line 1908 "datetimemodule.c"
        $fracpart=$134; //@line 1908 "datetimemodule.c"
        var $135=HEAP[$intpart]; //@line 1909 "datetimemodule.c"
        var $136=_PyLong_FromDouble($135); //@line 1909 "datetimemodule.c"
        $x=$136; //@line 1909 "datetimemodule.c"
        var $137=($136)==0; //@line 1910 "datetimemodule.c"
        var $138=$sum; //@line 1911 "datetimemodule.c"
        if ($137) { __label__ = 33; break; } else { __label__ = 36; break; } //@line 1910 "datetimemodule.c"
      case 33: // $bb32
        var $139=$138; //@line 1911 "datetimemodule.c"
        var $140=HEAP[$139]; //@line 1911 "datetimemodule.c"
        var $141=($140) - 1; //@line 1911 "datetimemodule.c"
        var $142=$sum; //@line 1911 "datetimemodule.c"
        var $143=$142; //@line 1911 "datetimemodule.c"
        HEAP[$143]=$141; //@line 1911 "datetimemodule.c"
        var $144=$sum; //@line 1911 "datetimemodule.c"
        var $145=$144; //@line 1911 "datetimemodule.c"
        var $146=HEAP[$145]; //@line 1911 "datetimemodule.c"
        var $147=($146)==0; //@line 1911 "datetimemodule.c"
        if ($147) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1911 "datetimemodule.c"
      case 34: // $bb33
        var $148=$sum; //@line 1911 "datetimemodule.c"
        var $149=$148+4; //@line 1911 "datetimemodule.c"
        var $150=HEAP[$149]; //@line 1911 "datetimemodule.c"
        var $151=$150+24; //@line 1911 "datetimemodule.c"
        var $152=HEAP[$151]; //@line 1911 "datetimemodule.c"
        var $153=$sum; //@line 1911 "datetimemodule.c"
        FUNCTION_TABLE[$152]($153); //@line 1911 "datetimemodule.c"
        __label__ = 35; break; //@line 1911 "datetimemodule.c"
      case 35: // $bb34
        $0=0; //@line 1912 "datetimemodule.c"
        __label__ = 42; break; //@line 1912 "datetimemodule.c"
      case 36: // $bb35
        var $154=$x; //@line 1915 "datetimemodule.c"
        var $155=_PyNumber_Add($138, $154); //@line 1915 "datetimemodule.c"
        $y=$155; //@line 1915 "datetimemodule.c"
        var $156=$sum; //@line 1916 "datetimemodule.c"
        var $157=$156; //@line 1916 "datetimemodule.c"
        var $158=HEAP[$157]; //@line 1916 "datetimemodule.c"
        var $159=($158) - 1; //@line 1916 "datetimemodule.c"
        var $160=$sum; //@line 1916 "datetimemodule.c"
        var $161=$160; //@line 1916 "datetimemodule.c"
        HEAP[$161]=$159; //@line 1916 "datetimemodule.c"
        var $162=$sum; //@line 1916 "datetimemodule.c"
        var $163=$162; //@line 1916 "datetimemodule.c"
        var $164=HEAP[$163]; //@line 1916 "datetimemodule.c"
        var $165=($164)==0; //@line 1916 "datetimemodule.c"
        if ($165) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1916 "datetimemodule.c"
      case 37: // $bb36
        var $166=$sum; //@line 1916 "datetimemodule.c"
        var $167=$166+4; //@line 1916 "datetimemodule.c"
        var $168=HEAP[$167]; //@line 1916 "datetimemodule.c"
        var $169=$168+24; //@line 1916 "datetimemodule.c"
        var $170=HEAP[$169]; //@line 1916 "datetimemodule.c"
        var $171=$sum; //@line 1916 "datetimemodule.c"
        FUNCTION_TABLE[$170]($171); //@line 1916 "datetimemodule.c"
        __label__ = 38; break; //@line 1916 "datetimemodule.c"
      case 38: // $bb37
        var $172=$x; //@line 1917 "datetimemodule.c"
        var $173=$172; //@line 1917 "datetimemodule.c"
        var $174=HEAP[$173]; //@line 1917 "datetimemodule.c"
        var $175=($174) - 1; //@line 1917 "datetimemodule.c"
        var $176=$x; //@line 1917 "datetimemodule.c"
        var $177=$176; //@line 1917 "datetimemodule.c"
        HEAP[$177]=$175; //@line 1917 "datetimemodule.c"
        var $178=$x; //@line 1917 "datetimemodule.c"
        var $179=$178; //@line 1917 "datetimemodule.c"
        var $180=HEAP[$179]; //@line 1917 "datetimemodule.c"
        var $181=($180)==0; //@line 1917 "datetimemodule.c"
        if ($181) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1917 "datetimemodule.c"
      case 39: // $bb38
        var $182=$x; //@line 1917 "datetimemodule.c"
        var $183=$182+4; //@line 1917 "datetimemodule.c"
        var $184=HEAP[$183]; //@line 1917 "datetimemodule.c"
        var $185=$184+24; //@line 1917 "datetimemodule.c"
        var $186=HEAP[$185]; //@line 1917 "datetimemodule.c"
        var $187=$x; //@line 1917 "datetimemodule.c"
        FUNCTION_TABLE[$186]($187); //@line 1917 "datetimemodule.c"
        __label__ = 40; break; //@line 1917 "datetimemodule.c"
      case 40: // $bb39
        var $188=$leftover_addr; //@line 1918 "datetimemodule.c"
        var $189=HEAP[$188]; //@line 1918 "datetimemodule.c"
        var $190=$fracpart; //@line 1918 "datetimemodule.c"
        var $191=($189) + ($190); //@line 1918 "datetimemodule.c"
        var $192=$leftover_addr; //@line 1918 "datetimemodule.c"
        HEAP[$192]=$191; //@line 1918 "datetimemodule.c"
        var $193=$y; //@line 1919 "datetimemodule.c"
        $0=$193; //@line 1919 "datetimemodule.c"
        __label__ = 42; break; //@line 1919 "datetimemodule.c"
      case 41: // $bb40
        var $194=$num_addr; //@line 1922 "datetimemodule.c"
        var $195=$194+4; //@line 1922 "datetimemodule.c"
        var $196=HEAP[$195]; //@line 1922 "datetimemodule.c"
        var $197=$196+12; //@line 1922 "datetimemodule.c"
        var $198=HEAP[$197]; //@line 1922 "datetimemodule.c"
        var $199=HEAP[_PyExc_TypeError]; //@line 1922 "datetimemodule.c"
        var $200=$tag_addr; //@line 1922 "datetimemodule.c"
        var $201=_PyErr_Format($199, __str112, allocate([$200,0,0,0,$198,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1922 "datetimemodule.c"
        $0=0; //@line 1925 "datetimemodule.c"
        __label__ = 42; break; //@line 1925 "datetimemodule.c"
      case 42: // $bb41
        var $202=$0; //@line 1856 "datetimemodule.c"
        $retval=$202; //@line 1856 "datetimemodule.c"
        var $retval42=$retval; //@line 1856 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval42; //@line 1856 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_new($type, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $self;
        var $day=__stackBase__;
        var $second=__stackBase__+4;
        var $us=__stackBase__+8;
        var $ms=__stackBase__+12;
        var $minute=__stackBase__+16;
        var $hour=__stackBase__+20;
        var $week=__stackBase__+24;
        var $x;
        var $y;
        var $leftover_us=__stackBase__+28;
        var $temp;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        $self=0; //@line 1931 "datetimemodule.c"
        HEAP[$day]=0; //@line 1934 "datetimemodule.c"
        HEAP[$second]=0; //@line 1935 "datetimemodule.c"
        HEAP[$us]=0; //@line 1936 "datetimemodule.c"
        HEAP[$ms]=0; //@line 1937 "datetimemodule.c"
        HEAP[$minute]=0; //@line 1938 "datetimemodule.c"
        HEAP[$hour]=0; //@line 1939 "datetimemodule.c"
        HEAP[$week]=0; //@line 1940 "datetimemodule.c"
        $x=0; //@line 1942 "datetimemodule.c"
        $y=0; //@line 1943 "datetimemodule.c"
        HEAP[$leftover_us]=0; //@line 1944 "datetimemodule.c"
        var $1=$args_addr; //@line 1951 "datetimemodule.c"
        var $2=$kw_addr; //@line 1951 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str113, _keywords_10491, allocate([$day,0,0,0,$second,0,0,0,$us,0,0,0,$ms,0,0,0,$minute,0,0,0,$hour,0,0,0,$week,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 1951 "datetimemodule.c"
        var $4=($3)==0; //@line 1951 "datetimemodule.c"
        if ($4) { __label__ = 41; break; } else { __label__ = 1; break; } //@line 1951 "datetimemodule.c"
      case 1: // $bb
        var $5=_PyInt_FromLong(0); //@line 1957 "datetimemodule.c"
        $x=$5; //@line 1957 "datetimemodule.c"
        var $6=$x; //@line 1958 "datetimemodule.c"
        var $7=($6)==0; //@line 1958 "datetimemodule.c"
        if ($7) { __label__ = 41; break; } else { __label__ = 2; break; } //@line 1958 "datetimemodule.c"
      case 2: // $bb1
        var $8=HEAP[$us]; //@line 1967 "datetimemodule.c"
        var $9=($8)!=0; //@line 1967 "datetimemodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1967 "datetimemodule.c"
      case 3: // $bb2
        var $10=HEAP[_us_per_us]; //@line 1968 "datetimemodule.c"
        var $11=HEAP[$us]; //@line 1968 "datetimemodule.c"
        var $12=$x; //@line 1968 "datetimemodule.c"
        var $13=_accum(__str116, $12, $11, $10, $leftover_us); //@line 1968 "datetimemodule.c"
        $y=$13; //@line 1968 "datetimemodule.c"
        var $14=$x; //@line 1969 "datetimemodule.c"
        var $15=$14; //@line 1969 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 1969 "datetimemodule.c"
        var $17=($16) - 1; //@line 1969 "datetimemodule.c"
        var $18=$x; //@line 1969 "datetimemodule.c"
        var $19=$18; //@line 1969 "datetimemodule.c"
        HEAP[$19]=$17; //@line 1969 "datetimemodule.c"
        var $20=$x; //@line 1969 "datetimemodule.c"
        var $21=$20; //@line 1969 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 1969 "datetimemodule.c"
        var $23=($22)==0; //@line 1969 "datetimemodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1969 "datetimemodule.c"
      case 4: // $bb3
        var $24=$x; //@line 1969 "datetimemodule.c"
        var $25=$24+4; //@line 1969 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 1969 "datetimemodule.c"
        var $27=$26+24; //@line 1969 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 1969 "datetimemodule.c"
        var $29=$x; //@line 1969 "datetimemodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1969 "datetimemodule.c"
        __label__ = 5; break; //@line 1969 "datetimemodule.c"
      case 5: // $bb4
        var $30=$y; //@line 1969 "datetimemodule.c"
        $x=$30; //@line 1969 "datetimemodule.c"
        var $31=($30)==0; //@line 1969 "datetimemodule.c"
        if ($31) { __label__ = 41; break; } else { __label__ = 6; break; } //@line 1969 "datetimemodule.c"
      case 6: // $bb5
        var $32=HEAP[$ms]; //@line 1971 "datetimemodule.c"
        var $33=($32)!=0; //@line 1971 "datetimemodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1971 "datetimemodule.c"
      case 7: // $bb6
        var $34=HEAP[_us_per_ms]; //@line 1972 "datetimemodule.c"
        var $35=HEAP[$ms]; //@line 1972 "datetimemodule.c"
        var $36=$x; //@line 1972 "datetimemodule.c"
        var $37=_accum(__str117, $36, $35, $34, $leftover_us); //@line 1972 "datetimemodule.c"
        $y=$37; //@line 1972 "datetimemodule.c"
        var $38=$x; //@line 1973 "datetimemodule.c"
        var $39=$38; //@line 1973 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 1973 "datetimemodule.c"
        var $41=($40) - 1; //@line 1973 "datetimemodule.c"
        var $42=$x; //@line 1973 "datetimemodule.c"
        var $43=$42; //@line 1973 "datetimemodule.c"
        HEAP[$43]=$41; //@line 1973 "datetimemodule.c"
        var $44=$x; //@line 1973 "datetimemodule.c"
        var $45=$44; //@line 1973 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 1973 "datetimemodule.c"
        var $47=($46)==0; //@line 1973 "datetimemodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1973 "datetimemodule.c"
      case 8: // $bb7
        var $48=$x; //@line 1973 "datetimemodule.c"
        var $49=$48+4; //@line 1973 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 1973 "datetimemodule.c"
        var $51=$50+24; //@line 1973 "datetimemodule.c"
        var $52=HEAP[$51]; //@line 1973 "datetimemodule.c"
        var $53=$x; //@line 1973 "datetimemodule.c"
        FUNCTION_TABLE[$52]($53); //@line 1973 "datetimemodule.c"
        __label__ = 9; break; //@line 1973 "datetimemodule.c"
      case 9: // $bb8
        var $54=$y; //@line 1973 "datetimemodule.c"
        $x=$54; //@line 1973 "datetimemodule.c"
        var $55=($54)==0; //@line 1973 "datetimemodule.c"
        if ($55) { __label__ = 41; break; } else { __label__ = 10; break; } //@line 1973 "datetimemodule.c"
      case 10: // $bb9
        var $56=HEAP[$second]; //@line 1975 "datetimemodule.c"
        var $57=($56)!=0; //@line 1975 "datetimemodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1975 "datetimemodule.c"
      case 11: // $bb10
        var $58=HEAP[_us_per_second]; //@line 1976 "datetimemodule.c"
        var $59=HEAP[$second]; //@line 1976 "datetimemodule.c"
        var $60=$x; //@line 1976 "datetimemodule.c"
        var $61=_accum(__str115, $60, $59, $58, $leftover_us); //@line 1976 "datetimemodule.c"
        $y=$61; //@line 1976 "datetimemodule.c"
        var $62=$x; //@line 1977 "datetimemodule.c"
        var $63=$62; //@line 1977 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 1977 "datetimemodule.c"
        var $65=($64) - 1; //@line 1977 "datetimemodule.c"
        var $66=$x; //@line 1977 "datetimemodule.c"
        var $67=$66; //@line 1977 "datetimemodule.c"
        HEAP[$67]=$65; //@line 1977 "datetimemodule.c"
        var $68=$x; //@line 1977 "datetimemodule.c"
        var $69=$68; //@line 1977 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 1977 "datetimemodule.c"
        var $71=($70)==0; //@line 1977 "datetimemodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1977 "datetimemodule.c"
      case 12: // $bb11
        var $72=$x; //@line 1977 "datetimemodule.c"
        var $73=$72+4; //@line 1977 "datetimemodule.c"
        var $74=HEAP[$73]; //@line 1977 "datetimemodule.c"
        var $75=$74+24; //@line 1977 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 1977 "datetimemodule.c"
        var $77=$x; //@line 1977 "datetimemodule.c"
        FUNCTION_TABLE[$76]($77); //@line 1977 "datetimemodule.c"
        __label__ = 13; break; //@line 1977 "datetimemodule.c"
      case 13: // $bb12
        var $78=$y; //@line 1977 "datetimemodule.c"
        $x=$78; //@line 1977 "datetimemodule.c"
        var $79=($78)==0; //@line 1977 "datetimemodule.c"
        if ($79) { __label__ = 41; break; } else { __label__ = 14; break; } //@line 1977 "datetimemodule.c"
      case 14: // $bb13
        var $80=HEAP[$minute]; //@line 1979 "datetimemodule.c"
        var $81=($80)!=0; //@line 1979 "datetimemodule.c"
        if ($81) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1979 "datetimemodule.c"
      case 15: // $bb14
        var $82=HEAP[_us_per_minute]; //@line 1980 "datetimemodule.c"
        var $83=HEAP[$minute]; //@line 1980 "datetimemodule.c"
        var $84=$x; //@line 1980 "datetimemodule.c"
        var $85=_accum(__str118, $84, $83, $82, $leftover_us); //@line 1980 "datetimemodule.c"
        $y=$85; //@line 1980 "datetimemodule.c"
        var $86=$x; //@line 1981 "datetimemodule.c"
        var $87=$86; //@line 1981 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 1981 "datetimemodule.c"
        var $89=($88) - 1; //@line 1981 "datetimemodule.c"
        var $90=$x; //@line 1981 "datetimemodule.c"
        var $91=$90; //@line 1981 "datetimemodule.c"
        HEAP[$91]=$89; //@line 1981 "datetimemodule.c"
        var $92=$x; //@line 1981 "datetimemodule.c"
        var $93=$92; //@line 1981 "datetimemodule.c"
        var $94=HEAP[$93]; //@line 1981 "datetimemodule.c"
        var $95=($94)==0; //@line 1981 "datetimemodule.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1981 "datetimemodule.c"
      case 16: // $bb15
        var $96=$x; //@line 1981 "datetimemodule.c"
        var $97=$96+4; //@line 1981 "datetimemodule.c"
        var $98=HEAP[$97]; //@line 1981 "datetimemodule.c"
        var $99=$98+24; //@line 1981 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 1981 "datetimemodule.c"
        var $101=$x; //@line 1981 "datetimemodule.c"
        FUNCTION_TABLE[$100]($101); //@line 1981 "datetimemodule.c"
        __label__ = 17; break; //@line 1981 "datetimemodule.c"
      case 17: // $bb16
        var $102=$y; //@line 1981 "datetimemodule.c"
        $x=$102; //@line 1981 "datetimemodule.c"
        var $103=($102)==0; //@line 1981 "datetimemodule.c"
        if ($103) { __label__ = 41; break; } else { __label__ = 18; break; } //@line 1981 "datetimemodule.c"
      case 18: // $bb17
        var $104=HEAP[$hour]; //@line 1983 "datetimemodule.c"
        var $105=($104)!=0; //@line 1983 "datetimemodule.c"
        if ($105) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 1983 "datetimemodule.c"
      case 19: // $bb18
        var $106=HEAP[_us_per_hour]; //@line 1984 "datetimemodule.c"
        var $107=HEAP[$hour]; //@line 1984 "datetimemodule.c"
        var $108=$x; //@line 1984 "datetimemodule.c"
        var $109=_accum(__str119, $108, $107, $106, $leftover_us); //@line 1984 "datetimemodule.c"
        $y=$109; //@line 1984 "datetimemodule.c"
        var $110=$x; //@line 1985 "datetimemodule.c"
        var $111=$110; //@line 1985 "datetimemodule.c"
        var $112=HEAP[$111]; //@line 1985 "datetimemodule.c"
        var $113=($112) - 1; //@line 1985 "datetimemodule.c"
        var $114=$x; //@line 1985 "datetimemodule.c"
        var $115=$114; //@line 1985 "datetimemodule.c"
        HEAP[$115]=$113; //@line 1985 "datetimemodule.c"
        var $116=$x; //@line 1985 "datetimemodule.c"
        var $117=$116; //@line 1985 "datetimemodule.c"
        var $118=HEAP[$117]; //@line 1985 "datetimemodule.c"
        var $119=($118)==0; //@line 1985 "datetimemodule.c"
        if ($119) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1985 "datetimemodule.c"
      case 20: // $bb19
        var $120=$x; //@line 1985 "datetimemodule.c"
        var $121=$120+4; //@line 1985 "datetimemodule.c"
        var $122=HEAP[$121]; //@line 1985 "datetimemodule.c"
        var $123=$122+24; //@line 1985 "datetimemodule.c"
        var $124=HEAP[$123]; //@line 1985 "datetimemodule.c"
        var $125=$x; //@line 1985 "datetimemodule.c"
        FUNCTION_TABLE[$124]($125); //@line 1985 "datetimemodule.c"
        __label__ = 21; break; //@line 1985 "datetimemodule.c"
      case 21: // $bb20
        var $126=$y; //@line 1985 "datetimemodule.c"
        $x=$126; //@line 1985 "datetimemodule.c"
        var $127=($126)==0; //@line 1985 "datetimemodule.c"
        if ($127) { __label__ = 41; break; } else { __label__ = 22; break; } //@line 1985 "datetimemodule.c"
      case 22: // $bb21
        var $128=HEAP[$day]; //@line 1987 "datetimemodule.c"
        var $129=($128)!=0; //@line 1987 "datetimemodule.c"
        if ($129) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 1987 "datetimemodule.c"
      case 23: // $bb22
        var $130=HEAP[_us_per_day]; //@line 1988 "datetimemodule.c"
        var $131=HEAP[$day]; //@line 1988 "datetimemodule.c"
        var $132=$x; //@line 1988 "datetimemodule.c"
        var $133=_accum(__str114, $132, $131, $130, $leftover_us); //@line 1988 "datetimemodule.c"
        $y=$133; //@line 1988 "datetimemodule.c"
        var $134=$x; //@line 1989 "datetimemodule.c"
        var $135=$134; //@line 1989 "datetimemodule.c"
        var $136=HEAP[$135]; //@line 1989 "datetimemodule.c"
        var $137=($136) - 1; //@line 1989 "datetimemodule.c"
        var $138=$x; //@line 1989 "datetimemodule.c"
        var $139=$138; //@line 1989 "datetimemodule.c"
        HEAP[$139]=$137; //@line 1989 "datetimemodule.c"
        var $140=$x; //@line 1989 "datetimemodule.c"
        var $141=$140; //@line 1989 "datetimemodule.c"
        var $142=HEAP[$141]; //@line 1989 "datetimemodule.c"
        var $143=($142)==0; //@line 1989 "datetimemodule.c"
        if ($143) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1989 "datetimemodule.c"
      case 24: // $bb23
        var $144=$x; //@line 1989 "datetimemodule.c"
        var $145=$144+4; //@line 1989 "datetimemodule.c"
        var $146=HEAP[$145]; //@line 1989 "datetimemodule.c"
        var $147=$146+24; //@line 1989 "datetimemodule.c"
        var $148=HEAP[$147]; //@line 1989 "datetimemodule.c"
        var $149=$x; //@line 1989 "datetimemodule.c"
        FUNCTION_TABLE[$148]($149); //@line 1989 "datetimemodule.c"
        __label__ = 25; break; //@line 1989 "datetimemodule.c"
      case 25: // $bb24
        var $150=$y; //@line 1989 "datetimemodule.c"
        $x=$150; //@line 1989 "datetimemodule.c"
        var $151=($150)==0; //@line 1989 "datetimemodule.c"
        if ($151) { __label__ = 41; break; } else { __label__ = 26; break; } //@line 1989 "datetimemodule.c"
      case 26: // $bb25
        var $152=HEAP[$week]; //@line 1991 "datetimemodule.c"
        var $153=($152)!=0; //@line 1991 "datetimemodule.c"
        if ($153) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1991 "datetimemodule.c"
      case 27: // $bb26
        var $154=HEAP[_us_per_week]; //@line 1992 "datetimemodule.c"
        var $155=HEAP[$week]; //@line 1992 "datetimemodule.c"
        var $156=$x; //@line 1992 "datetimemodule.c"
        var $157=_accum(__str120, $156, $155, $154, $leftover_us); //@line 1992 "datetimemodule.c"
        $y=$157; //@line 1992 "datetimemodule.c"
        var $158=$x; //@line 1993 "datetimemodule.c"
        var $159=$158; //@line 1993 "datetimemodule.c"
        var $160=HEAP[$159]; //@line 1993 "datetimemodule.c"
        var $161=($160) - 1; //@line 1993 "datetimemodule.c"
        var $162=$x; //@line 1993 "datetimemodule.c"
        var $163=$162; //@line 1993 "datetimemodule.c"
        HEAP[$163]=$161; //@line 1993 "datetimemodule.c"
        var $164=$x; //@line 1993 "datetimemodule.c"
        var $165=$164; //@line 1993 "datetimemodule.c"
        var $166=HEAP[$165]; //@line 1993 "datetimemodule.c"
        var $167=($166)==0; //@line 1993 "datetimemodule.c"
        if ($167) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1993 "datetimemodule.c"
      case 28: // $bb27
        var $168=$x; //@line 1993 "datetimemodule.c"
        var $169=$168+4; //@line 1993 "datetimemodule.c"
        var $170=HEAP[$169]; //@line 1993 "datetimemodule.c"
        var $171=$170+24; //@line 1993 "datetimemodule.c"
        var $172=HEAP[$171]; //@line 1993 "datetimemodule.c"
        var $173=$x; //@line 1993 "datetimemodule.c"
        FUNCTION_TABLE[$172]($173); //@line 1993 "datetimemodule.c"
        __label__ = 29; break; //@line 1993 "datetimemodule.c"
      case 29: // $bb28
        var $174=$y; //@line 1993 "datetimemodule.c"
        $x=$174; //@line 1993 "datetimemodule.c"
        var $175=($174)==0; //@line 1993 "datetimemodule.c"
        if ($175) { __label__ = 41; break; } else { __label__ = 30; break; } //@line 1993 "datetimemodule.c"
      case 30: // $bb29
        var $176=HEAP[$leftover_us]; //@line 1995 "datetimemodule.c"
        var $177=($176) != 0; //@line 1995 "datetimemodule.c"
        if ($177) { __label__ = 31; break; } else { __label__ = 39; break; } //@line 1995 "datetimemodule.c"
      case 31: // $bb30
        var $178=HEAP[$leftover_us]; //@line 1997 "datetimemodule.c"
        var $179=_round_to_long($178); //@line 1997 "datetimemodule.c"
        var $180=_PyLong_FromLong($179); //@line 1997 "datetimemodule.c"
        $temp=$180; //@line 1997 "datetimemodule.c"
        var $181=$temp; //@line 1998 "datetimemodule.c"
        var $182=($181)==0; //@line 1998 "datetimemodule.c"
        var $183=$x; //@line 1999 "datetimemodule.c"
        if ($182) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 1998 "datetimemodule.c"
      case 32: // $bb31
        var $184=$183; //@line 1999 "datetimemodule.c"
        var $185=HEAP[$184]; //@line 1999 "datetimemodule.c"
        var $186=($185) - 1; //@line 1999 "datetimemodule.c"
        var $187=$x; //@line 1999 "datetimemodule.c"
        var $188=$187; //@line 1999 "datetimemodule.c"
        HEAP[$188]=$186; //@line 1999 "datetimemodule.c"
        var $189=$x; //@line 1999 "datetimemodule.c"
        var $190=$189; //@line 1999 "datetimemodule.c"
        var $191=HEAP[$190]; //@line 1999 "datetimemodule.c"
        var $192=($191)==0; //@line 1999 "datetimemodule.c"
        if ($192) { __label__ = 33; break; } else { __label__ = 41; break; } //@line 1999 "datetimemodule.c"
      case 33: // $bb32
        var $193=$x; //@line 1999 "datetimemodule.c"
        var $194=$193+4; //@line 1999 "datetimemodule.c"
        var $195=HEAP[$194]; //@line 1999 "datetimemodule.c"
        var $196=$195+24; //@line 1999 "datetimemodule.c"
        var $197=HEAP[$196]; //@line 1999 "datetimemodule.c"
        var $198=$x; //@line 1999 "datetimemodule.c"
        FUNCTION_TABLE[$197]($198); //@line 1999 "datetimemodule.c"
        __label__ = 41; break; //@line 1999 "datetimemodule.c"
      case 34: // $bb34
        var $199=$temp; //@line 2002 "datetimemodule.c"
        var $200=_PyNumber_Add($183, $199); //@line 2002 "datetimemodule.c"
        $y=$200; //@line 2002 "datetimemodule.c"
        var $201=$temp; //@line 2003 "datetimemodule.c"
        var $202=$201; //@line 2003 "datetimemodule.c"
        var $203=HEAP[$202]; //@line 2003 "datetimemodule.c"
        var $204=($203) - 1; //@line 2003 "datetimemodule.c"
        var $205=$temp; //@line 2003 "datetimemodule.c"
        var $206=$205; //@line 2003 "datetimemodule.c"
        HEAP[$206]=$204; //@line 2003 "datetimemodule.c"
        var $207=$temp; //@line 2003 "datetimemodule.c"
        var $208=$207; //@line 2003 "datetimemodule.c"
        var $209=HEAP[$208]; //@line 2003 "datetimemodule.c"
        var $210=($209)==0; //@line 2003 "datetimemodule.c"
        if ($210) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 2003 "datetimemodule.c"
      case 35: // $bb35
        var $211=$temp; //@line 2003 "datetimemodule.c"
        var $212=$211+4; //@line 2003 "datetimemodule.c"
        var $213=HEAP[$212]; //@line 2003 "datetimemodule.c"
        var $214=$213+24; //@line 2003 "datetimemodule.c"
        var $215=HEAP[$214]; //@line 2003 "datetimemodule.c"
        var $216=$temp; //@line 2003 "datetimemodule.c"
        FUNCTION_TABLE[$215]($216); //@line 2003 "datetimemodule.c"
        __label__ = 36; break; //@line 2003 "datetimemodule.c"
      case 36: // $bb36
        var $217=$x; //@line 2004 "datetimemodule.c"
        var $218=$217; //@line 2004 "datetimemodule.c"
        var $219=HEAP[$218]; //@line 2004 "datetimemodule.c"
        var $220=($219) - 1; //@line 2004 "datetimemodule.c"
        var $221=$x; //@line 2004 "datetimemodule.c"
        var $222=$221; //@line 2004 "datetimemodule.c"
        HEAP[$222]=$220; //@line 2004 "datetimemodule.c"
        var $223=$x; //@line 2004 "datetimemodule.c"
        var $224=$223; //@line 2004 "datetimemodule.c"
        var $225=HEAP[$224]; //@line 2004 "datetimemodule.c"
        var $226=($225)==0; //@line 2004 "datetimemodule.c"
        if ($226) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2004 "datetimemodule.c"
      case 37: // $bb37
        var $227=$x; //@line 2004 "datetimemodule.c"
        var $228=$227+4; //@line 2004 "datetimemodule.c"
        var $229=HEAP[$228]; //@line 2004 "datetimemodule.c"
        var $230=$229+24; //@line 2004 "datetimemodule.c"
        var $231=HEAP[$230]; //@line 2004 "datetimemodule.c"
        var $232=$x; //@line 2004 "datetimemodule.c"
        FUNCTION_TABLE[$231]($232); //@line 2004 "datetimemodule.c"
        __label__ = 38; break; //@line 2004 "datetimemodule.c"
      case 38: // $bb38
        var $233=$y; //@line 2004 "datetimemodule.c"
        $x=$233; //@line 2004 "datetimemodule.c"
        var $234=($233)==0; //@line 2004 "datetimemodule.c"
        if ($234) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 2004 "datetimemodule.c"
      case 39: // $bb39
        var $235=$x; //@line 2007 "datetimemodule.c"
        var $236=$type_addr; //@line 2007 "datetimemodule.c"
        var $237=_microseconds_to_delta_ex($235, $236); //@line 2007 "datetimemodule.c"
        $self=$237; //@line 2007 "datetimemodule.c"
        var $238=$x; //@line 2008 "datetimemodule.c"
        var $239=$238; //@line 2008 "datetimemodule.c"
        var $240=HEAP[$239]; //@line 2008 "datetimemodule.c"
        var $241=($240) - 1; //@line 2008 "datetimemodule.c"
        var $242=$x; //@line 2008 "datetimemodule.c"
        var $243=$242; //@line 2008 "datetimemodule.c"
        HEAP[$243]=$241; //@line 2008 "datetimemodule.c"
        var $244=$x; //@line 2008 "datetimemodule.c"
        var $245=$244; //@line 2008 "datetimemodule.c"
        var $246=HEAP[$245]; //@line 2008 "datetimemodule.c"
        var $247=($246)==0; //@line 2008 "datetimemodule.c"
        if ($247) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 2008 "datetimemodule.c"
      case 40: // $bb40
        var $248=$x; //@line 2008 "datetimemodule.c"
        var $249=$248+4; //@line 2008 "datetimemodule.c"
        var $250=HEAP[$249]; //@line 2008 "datetimemodule.c"
        var $251=$250+24; //@line 2008 "datetimemodule.c"
        var $252=HEAP[$251]; //@line 2008 "datetimemodule.c"
        var $253=$x; //@line 2008 "datetimemodule.c"
        FUNCTION_TABLE[$252]($253); //@line 2008 "datetimemodule.c"
        __label__ = 41; break; //@line 2009 "datetimemodule.c"
      case 41: // $Done
        var $254=$self; //@line 2010 "datetimemodule.c"
        $0=$254; //@line 2010 "datetimemodule.c"
        var $255=$0; //@line 2010 "datetimemodule.c"
        $retval=$255; //@line 2010 "datetimemodule.c"
        var $retval41=$retval; //@line 2010 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 2010 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_nonzero($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $iftmp_135;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 2018 "datetimemodule.c"
        var $2=$1+12; //@line 2018 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2018 "datetimemodule.c"
        var $4=($3)!=0; //@line 2018 "datetimemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2018 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2018 "datetimemodule.c"
        var $6=$5+16; //@line 2018 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 2018 "datetimemodule.c"
        var $8=($7)!=0; //@line 2018 "datetimemodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2018 "datetimemodule.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 2018 "datetimemodule.c"
        var $10=$9+20; //@line 2018 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 2018 "datetimemodule.c"
        var $12=($11)!=0; //@line 2018 "datetimemodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2018 "datetimemodule.c"
      case 3: // $bb2
        $iftmp_135=1; //@line 2018 "datetimemodule.c"
        __label__ = 5; break; //@line 2018 "datetimemodule.c"
      case 4: // $bb3
        $iftmp_135=0; //@line 2018 "datetimemodule.c"
        __label__ = 5; break; //@line 2018 "datetimemodule.c"
      case 5: // $bb4
        var $13=$iftmp_135; //@line 2018 "datetimemodule.c"
        $0=$13; //@line 2018 "datetimemodule.c"
        var $14=$0; //@line 2018 "datetimemodule.c"
        $retval=$14; //@line 2018 "datetimemodule.c"
        var $retval5=$retval; //@line 2018 "datetimemodule.c"
        ;
        return $retval5; //@line 2018 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_repr($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 2026 "datetimemodule.c"
        var $2=$1+20; //@line 2026 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2026 "datetimemodule.c"
        var $4=($3)!=0; //@line 2026 "datetimemodule.c"
        var $5=$self_addr; //@line 2027 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2026 "datetimemodule.c"
      case 1: // $bb
        var $6=$5+20; //@line 2027 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 2027 "datetimemodule.c"
        var $8=$self_addr; //@line 2027 "datetimemodule.c"
        var $9=$8+16; //@line 2027 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 2027 "datetimemodule.c"
        var $11=$self_addr; //@line 2027 "datetimemodule.c"
        var $12=$11+12; //@line 2027 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 2027 "datetimemodule.c"
        var $14=$self_addr; //@line 2027 "datetimemodule.c"
        var $15=$14; //@line 2027 "datetimemodule.c"
        var $16=$15+4; //@line 2027 "datetimemodule.c"
        var $17=HEAP[$16]; //@line 2027 "datetimemodule.c"
        var $18=$17+12; //@line 2027 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 2027 "datetimemodule.c"
        var $20=_PyString_FromFormat(__str121, allocate([$19,0,0,0,$13,0,0,0,$10,0,0,0,$7,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2027 "datetimemodule.c"
        $0=$20; //@line 2027 "datetimemodule.c"
        __label__ = 5; break; //@line 2027 "datetimemodule.c"
      case 2: // $bb1
        var $21=$5+16; //@line 2032 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 2032 "datetimemodule.c"
        var $23=($22)!=0; //@line 2032 "datetimemodule.c"
        var $24=$self_addr; //@line 2033 "datetimemodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2032 "datetimemodule.c"
      case 3: // $bb2
        var $25=$24+16; //@line 2033 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 2033 "datetimemodule.c"
        var $27=$self_addr; //@line 2033 "datetimemodule.c"
        var $28=$27+12; //@line 2033 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 2033 "datetimemodule.c"
        var $30=$self_addr; //@line 2033 "datetimemodule.c"
        var $31=$30; //@line 2033 "datetimemodule.c"
        var $32=$31+4; //@line 2033 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 2033 "datetimemodule.c"
        var $34=$33+12; //@line 2033 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 2033 "datetimemodule.c"
        var $36=_PyString_FromFormat(__str122, allocate([$35,0,0,0,$29,0,0,0,$26,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2033 "datetimemodule.c"
        $0=$36; //@line 2033 "datetimemodule.c"
        __label__ = 5; break; //@line 2033 "datetimemodule.c"
      case 4: // $bb3
        var $37=$24+12; //@line 2038 "datetimemodule.c"
        var $38=HEAP[$37]; //@line 2038 "datetimemodule.c"
        var $39=$self_addr; //@line 2038 "datetimemodule.c"
        var $40=$39; //@line 2038 "datetimemodule.c"
        var $41=$40+4; //@line 2038 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 2038 "datetimemodule.c"
        var $43=$42+12; //@line 2038 "datetimemodule.c"
        var $44=HEAP[$43]; //@line 2038 "datetimemodule.c"
        var $45=_PyString_FromFormat(__str123, allocate([$44,0,0,0,$38,0,0,0], ["i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2038 "datetimemodule.c"
        $0=$45; //@line 2038 "datetimemodule.c"
        __label__ = 5; break; //@line 2038 "datetimemodule.c"
      case 5: // $bb4
        var $46=$0; //@line 2027 "datetimemodule.c"
        $retval=$46; //@line 2027 "datetimemodule.c"
        var $retval5=$retval; //@line 2027 "datetimemodule.c"
        ;
        return $retval5; //@line 2027 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_str($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 108; _memset(__stackBase__, 0, 108);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $iftmp_141;
        var $days;
        var $seconds=__stackBase__;
        var $us;
        var $hours;
        var $minutes=__stackBase__+4;
        var $buf=__stackBase__+8;
        var $pbuf;
        var $buflen;
        var $n;
        $self_addr=$self;
        var $1=$self_addr; //@line 2046 "datetimemodule.c"
        var $2=$1+12; //@line 2046 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2046 "datetimemodule.c"
        $days=$3; //@line 2046 "datetimemodule.c"
        var $4=$self_addr; //@line 2047 "datetimemodule.c"
        var $5=$4+16; //@line 2047 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 2047 "datetimemodule.c"
        HEAP[$seconds]=$6; //@line 2047 "datetimemodule.c"
        var $7=$self_addr; //@line 2048 "datetimemodule.c"
        var $8=$7+20; //@line 2048 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 2048 "datetimemodule.c"
        $us=$9; //@line 2048 "datetimemodule.c"
        var $buf1=$buf; //@line 2052 "datetimemodule.c"
        $pbuf=$buf1; //@line 2052 "datetimemodule.c"
        $buflen=100; //@line 2053 "datetimemodule.c"
        var $10=HEAP[$seconds]; //@line 2056 "datetimemodule.c"
        var $11=_divmod($10, 60, $seconds); //@line 2056 "datetimemodule.c"
        HEAP[$minutes]=$11; //@line 2056 "datetimemodule.c"
        var $12=HEAP[$minutes]; //@line 2057 "datetimemodule.c"
        var $13=_divmod($12, 60, $minutes); //@line 2057 "datetimemodule.c"
        $hours=$13; //@line 2057 "datetimemodule.c"
        var $14=$days; //@line 2059 "datetimemodule.c"
        var $15=($14)!=0; //@line 2059 "datetimemodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 2059 "datetimemodule.c"
      case 1: // $bb
        var $16=$days; //@line 2060 "datetimemodule.c"
        var $17=($16)==1; //@line 2060 "datetimemodule.c"
        var $18=$days; //@line 2060 "datetimemodule.c"
        var $19=($18)==-1; //@line 2060 "datetimemodule.c"
        var $or_cond=($17) | ($19);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2060 "datetimemodule.c"
      case 2: // $bb3
        $iftmp_141=__str79; //@line 2060 "datetimemodule.c"
        __label__ = 4; break; //@line 2060 "datetimemodule.c"
      case 3: // $bb4
        $iftmp_141=__str124; //@line 2060 "datetimemodule.c"
        __label__ = 4; break; //@line 2060 "datetimemodule.c"
      case 4: // $bb5
        var $20=$pbuf; //@line 2060 "datetimemodule.c"
        var $21=$buflen; //@line 2060 "datetimemodule.c"
        var $22=$days; //@line 2060 "datetimemodule.c"
        var $23=$iftmp_141; //@line 2060 "datetimemodule.c"
        var $24=_PyOS_snprintf($20, $21, __str125, allocate([$22,0,0,0,$23,0,0,0], ["i32",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 2060 "datetimemodule.c"
        $n=$24; //@line 2060 "datetimemodule.c"
        var $25=($24) < 0; //@line 2062 "datetimemodule.c"
        if ($25) { __label__ = 14; break; } else { __label__ = 5; break; } //@line 2062 "datetimemodule.c"
      case 5: // $bb6
        var $26=$n; //@line 2062 "datetimemodule.c"
        var $27=$buflen; //@line 2062 "datetimemodule.c"
        var $28=($26) >= ($27); //@line 2062 "datetimemodule.c"
        if ($28) { __label__ = 14; break; } else { __label__ = 6; break; } //@line 2062 "datetimemodule.c"
      case 6: // $bb7
        var $29=$pbuf; //@line 2064 "datetimemodule.c"
        var $30=$n; //@line 2064 "datetimemodule.c"
        var $31=$29+$30; //@line 2064 "datetimemodule.c"
        $pbuf=$31; //@line 2064 "datetimemodule.c"
        var $32=$n; //@line 2065 "datetimemodule.c"
        var $33=$buflen; //@line 2065 "datetimemodule.c"
        var $34=($33) - ($32); //@line 2065 "datetimemodule.c"
        $buflen=$34; //@line 2065 "datetimemodule.c"
        __label__ = 7; break; //@line 2065 "datetimemodule.c"
      case 7: // $bb8
        var $35=HEAP[$seconds]; //@line 2068 "datetimemodule.c"
        var $36=HEAP[$minutes]; //@line 2068 "datetimemodule.c"
        var $37=$pbuf; //@line 2068 "datetimemodule.c"
        var $38=$buflen; //@line 2068 "datetimemodule.c"
        var $39=$hours; //@line 2068 "datetimemodule.c"
        var $40=_PyOS_snprintf($37, $38, __str126, allocate([$39,0,0,0,$36,0,0,0,$35,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2068 "datetimemodule.c"
        $n=$40; //@line 2068 "datetimemodule.c"
        var $41=($40) < 0; //@line 2070 "datetimemodule.c"
        if ($41) { __label__ = 14; break; } else { __label__ = 8; break; } //@line 2070 "datetimemodule.c"
      case 8: // $bb9
        var $42=$n; //@line 2070 "datetimemodule.c"
        var $43=$buflen; //@line 2070 "datetimemodule.c"
        var $44=($42) >= ($43); //@line 2070 "datetimemodule.c"
        if ($44) { __label__ = 14; break; } else { __label__ = 9; break; } //@line 2070 "datetimemodule.c"
      case 9: // $bb10
        var $45=$pbuf; //@line 2072 "datetimemodule.c"
        var $46=$n; //@line 2072 "datetimemodule.c"
        var $47=$45+$46; //@line 2072 "datetimemodule.c"
        $pbuf=$47; //@line 2072 "datetimemodule.c"
        var $48=$n; //@line 2073 "datetimemodule.c"
        var $49=$buflen; //@line 2073 "datetimemodule.c"
        var $50=($49) - ($48); //@line 2073 "datetimemodule.c"
        $buflen=$50; //@line 2073 "datetimemodule.c"
        var $51=$us; //@line 2075 "datetimemodule.c"
        var $52=($51)!=0; //@line 2075 "datetimemodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 2075 "datetimemodule.c"
      case 10: // $bb11
        var $53=$pbuf; //@line 2076 "datetimemodule.c"
        var $54=$buflen; //@line 2076 "datetimemodule.c"
        var $55=$us; //@line 2076 "datetimemodule.c"
        var $56=_PyOS_snprintf($53, $54, __str98, allocate([$55,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 2076 "datetimemodule.c"
        $n=$56; //@line 2076 "datetimemodule.c"
        var $57=$n; //@line 2077 "datetimemodule.c"
        var $58=($57) < 0; //@line 2077 "datetimemodule.c"
        if ($58) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 2077 "datetimemodule.c"
      case 11: // $bb12
        var $59=$n; //@line 2077 "datetimemodule.c"
        var $60=$buflen; //@line 2077 "datetimemodule.c"
        var $61=($59) >= ($60); //@line 2077 "datetimemodule.c"
        if ($61) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2077 "datetimemodule.c"
      case 12: // $bb13
        var $62=$pbuf; //@line 2079 "datetimemodule.c"
        var $63=$n; //@line 2079 "datetimemodule.c"
        var $64=$62+$63; //@line 2079 "datetimemodule.c"
        $pbuf=$64; //@line 2079 "datetimemodule.c"
        __label__ = 13; break; //@line 2079 "datetimemodule.c"
      case 13: // $bb14
        var $65=$pbuf; //@line 2082 "datetimemodule.c"
        var $66=($65); //@line 2082 "datetimemodule.c"
        var $buf15=$buf; //@line 2082 "datetimemodule.c"
        var $buf1516=($buf15); //@line 2082 "datetimemodule.c"
        var $67=($66) - ($buf1516); //@line 2082 "datetimemodule.c"
        var $buf18=$buf; //@line 2082 "datetimemodule.c"
        var $68=_PyString_FromStringAndSize($buf18, $67); //@line 2082 "datetimemodule.c"
        $0=$68; //@line 2082 "datetimemodule.c"
        __label__ = 15; break; //@line 2082 "datetimemodule.c"
      case 14: // $Fail
        var $69=HEAP[_PyExc_SystemError]; //@line 2085 "datetimemodule.c"
        _PyErr_SetString($69, __str127); //@line 2085 "datetimemodule.c"
        $0=0; //@line 2086 "datetimemodule.c"
        __label__ = 15; break; //@line 2086 "datetimemodule.c"
      case 15: // $bb19
        var $70=$0; //@line 2082 "datetimemodule.c"
        $retval=$70; //@line 2082 "datetimemodule.c"
        var $retval20=$retval; //@line 2082 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 2082 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_getstate($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2095 "datetimemodule.c"
    var $2=$1+20; //@line 2095 "datetimemodule.c"
    var $3=HEAP[$2]; //@line 2095 "datetimemodule.c"
    var $4=$self_addr; //@line 2095 "datetimemodule.c"
    var $5=$4+16; //@line 2095 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 2095 "datetimemodule.c"
    var $7=$self_addr; //@line 2095 "datetimemodule.c"
    var $8=$7+12; //@line 2095 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 2095 "datetimemodule.c"
    var $10=__Py_BuildValue_SizeT(__str128, allocate([$9,0,0,0,$6,0,0,0,$3,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2095 "datetimemodule.c"
    $0=$10; //@line 2095 "datetimemodule.c"
    var $11=$0; //@line 2095 "datetimemodule.c"
    $retval=$11; //@line 2095 "datetimemodule.c"
    var $retval1=$retval; //@line 2095 "datetimemodule.c"
    ;
    return $retval1; //@line 2095 "datetimemodule.c"
  }
  

  function _delta_total_seconds($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $total_seconds;
        var $total_microseconds;
        var $one_million;
        $self_addr=$self;
        var $1=$self_addr; //@line 2107 "datetimemodule.c"
        var $2=$1; //@line 2107 "datetimemodule.c"
        var $3=_delta_to_microseconds($2); //@line 2107 "datetimemodule.c"
        $total_microseconds=$3; //@line 2107 "datetimemodule.c"
        var $4=$total_microseconds; //@line 2108 "datetimemodule.c"
        var $5=($4)==0; //@line 2108 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2108 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2109 "datetimemodule.c"
        __label__ = 11; break; //@line 2109 "datetimemodule.c"
      case 2: // $bb1
        var $6=_PyLong_FromLong(1000000); //@line 2111 "datetimemodule.c"
        $one_million=$6; //@line 2111 "datetimemodule.c"
        var $7=$one_million; //@line 2112 "datetimemodule.c"
        var $8=($7)==0; //@line 2112 "datetimemodule.c"
        var $9=$total_microseconds; //@line 2113 "datetimemodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2112 "datetimemodule.c"
      case 3: // $bb2
        var $10=$9; //@line 2113 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 2113 "datetimemodule.c"
        var $12=($11) - 1; //@line 2113 "datetimemodule.c"
        var $13=$total_microseconds; //@line 2113 "datetimemodule.c"
        var $14=$13; //@line 2113 "datetimemodule.c"
        HEAP[$14]=$12; //@line 2113 "datetimemodule.c"
        var $15=$total_microseconds; //@line 2113 "datetimemodule.c"
        var $16=$15; //@line 2113 "datetimemodule.c"
        var $17=HEAP[$16]; //@line 2113 "datetimemodule.c"
        var $18=($17)==0; //@line 2113 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2113 "datetimemodule.c"
      case 4: // $bb3
        var $19=$total_microseconds; //@line 2113 "datetimemodule.c"
        var $20=$19+4; //@line 2113 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 2113 "datetimemodule.c"
        var $22=$21+24; //@line 2113 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 2113 "datetimemodule.c"
        var $24=$total_microseconds; //@line 2113 "datetimemodule.c"
        FUNCTION_TABLE[$23]($24); //@line 2113 "datetimemodule.c"
        __label__ = 5; break; //@line 2113 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 2114 "datetimemodule.c"
        __label__ = 11; break; //@line 2114 "datetimemodule.c"
      case 6: // $bb5
        var $25=$one_million; //@line 2117 "datetimemodule.c"
        var $26=_PyNumber_TrueDivide($9, $25); //@line 2117 "datetimemodule.c"
        $total_seconds=$26; //@line 2117 "datetimemodule.c"
        var $27=$total_microseconds; //@line 2119 "datetimemodule.c"
        var $28=$27; //@line 2119 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 2119 "datetimemodule.c"
        var $30=($29) - 1; //@line 2119 "datetimemodule.c"
        var $31=$total_microseconds; //@line 2119 "datetimemodule.c"
        var $32=$31; //@line 2119 "datetimemodule.c"
        HEAP[$32]=$30; //@line 2119 "datetimemodule.c"
        var $33=$total_microseconds; //@line 2119 "datetimemodule.c"
        var $34=$33; //@line 2119 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 2119 "datetimemodule.c"
        var $36=($35)==0; //@line 2119 "datetimemodule.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2119 "datetimemodule.c"
      case 7: // $bb6
        var $37=$total_microseconds; //@line 2119 "datetimemodule.c"
        var $38=$37+4; //@line 2119 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 2119 "datetimemodule.c"
        var $40=$39+24; //@line 2119 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 2119 "datetimemodule.c"
        var $42=$total_microseconds; //@line 2119 "datetimemodule.c"
        FUNCTION_TABLE[$41]($42); //@line 2119 "datetimemodule.c"
        __label__ = 8; break; //@line 2119 "datetimemodule.c"
      case 8: // $bb7
        var $43=$one_million; //@line 2120 "datetimemodule.c"
        var $44=$43; //@line 2120 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 2120 "datetimemodule.c"
        var $46=($45) - 1; //@line 2120 "datetimemodule.c"
        var $47=$one_million; //@line 2120 "datetimemodule.c"
        var $48=$47; //@line 2120 "datetimemodule.c"
        HEAP[$48]=$46; //@line 2120 "datetimemodule.c"
        var $49=$one_million; //@line 2120 "datetimemodule.c"
        var $50=$49; //@line 2120 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 2120 "datetimemodule.c"
        var $52=($51)==0; //@line 2120 "datetimemodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2120 "datetimemodule.c"
      case 9: // $bb8
        var $53=$one_million; //@line 2120 "datetimemodule.c"
        var $54=$53+4; //@line 2120 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 2120 "datetimemodule.c"
        var $56=$55+24; //@line 2120 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 2120 "datetimemodule.c"
        var $58=$one_million; //@line 2120 "datetimemodule.c"
        FUNCTION_TABLE[$57]($58); //@line 2120 "datetimemodule.c"
        __label__ = 10; break; //@line 2120 "datetimemodule.c"
      case 10: // $bb9
        var $59=$total_seconds; //@line 2121 "datetimemodule.c"
        $0=$59; //@line 2121 "datetimemodule.c"
        __label__ = 11; break; //@line 2121 "datetimemodule.c"
      case 11: // $bb10
        var $60=$0; //@line 2109 "datetimemodule.c"
        $retval=$60; //@line 2109 "datetimemodule.c"
        var $retval11=$retval; //@line 2109 "datetimemodule.c"
        ;
        return $retval11; //@line 2109 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _delta_reduce($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2127 "datetimemodule.c"
    var $2=_delta_getstate($1); //@line 2127 "datetimemodule.c"
    var $3=$self_addr; //@line 2127 "datetimemodule.c"
    var $4=$3; //@line 2127 "datetimemodule.c"
    var $5=$4+4; //@line 2127 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 2127 "datetimemodule.c"
    var $7=__Py_BuildValue_SizeT(__str129, allocate([$6,0,0,0,$2,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 2127 "datetimemodule.c"
    $0=$7; //@line 2127 "datetimemodule.c"
    var $8=$0; //@line 2127 "datetimemodule.c"
    $retval=$8; //@line 2127 "datetimemodule.c"
    var $retval1=$retval; //@line 2127 "datetimemodule.c"
    ;
    return $retval1; //@line 2127 "datetimemodule.c"
  }
  

  function _date_year($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 2251 "datetimemodule.c"
    var $2=$1+13; //@line 2251 "datetimemodule.c"
    var $3=$2; //@line 2251 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2251 "datetimemodule.c"
    var $5=($4); //@line 2251 "datetimemodule.c"
    var $6=($5) << 8; //@line 2251 "datetimemodule.c"
    var $7=$self_addr; //@line 2251 "datetimemodule.c"
    var $8=$7+13; //@line 2251 "datetimemodule.c"
    var $9=$8+1; //@line 2251 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 2251 "datetimemodule.c"
    var $11=($10); //@line 2251 "datetimemodule.c"
    var $12=($11) | ($6); //@line 2251 "datetimemodule.c"
    var $13=_PyInt_FromLong($12); //@line 2251 "datetimemodule.c"
    $0=$13; //@line 2251 "datetimemodule.c"
    var $14=$0; //@line 2251 "datetimemodule.c"
    $retval=$14; //@line 2251 "datetimemodule.c"
    var $retval1=$retval; //@line 2251 "datetimemodule.c"
    ;
    return $retval1; //@line 2251 "datetimemodule.c"
  }
  

  function _date_month($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 2257 "datetimemodule.c"
    var $2=$1+13; //@line 2257 "datetimemodule.c"
    var $3=$2+2; //@line 2257 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2257 "datetimemodule.c"
    var $5=($4); //@line 2257 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 2257 "datetimemodule.c"
    $0=$6; //@line 2257 "datetimemodule.c"
    var $7=$0; //@line 2257 "datetimemodule.c"
    $retval=$7; //@line 2257 "datetimemodule.c"
    var $retval1=$retval; //@line 2257 "datetimemodule.c"
    ;
    return $retval1; //@line 2257 "datetimemodule.c"
  }
  

  function _date_day($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 2263 "datetimemodule.c"
    var $2=$1+13; //@line 2263 "datetimemodule.c"
    var $3=$2+3; //@line 2263 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2263 "datetimemodule.c"
    var $5=($4); //@line 2263 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 2263 "datetimemodule.c"
    $0=$6; //@line 2263 "datetimemodule.c"
    var $7=$0; //@line 2263 "datetimemodule.c"
    $retval=$7; //@line 2263 "datetimemodule.c"
    var $retval1=$retval; //@line 2263 "datetimemodule.c"
    ;
    return $retval1; //@line 2263 "datetimemodule.c"
  }
  

  function _date_new($type, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $self;
        var $state;
        var $year=__stackBase__;
        var $month=__stackBase__+4;
        var $day=__stackBase__+8;
        var $me;
        var $pdata;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        $self=0; //@line 2280 "datetimemodule.c"
        var $1=$args_addr; //@line 2287 "datetimemodule.c"
        var $2=$1; //@line 2287 "datetimemodule.c"
        var $3=$2+8; //@line 2287 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 2287 "datetimemodule.c"
        var $5=($4)==1; //@line 2287 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 2287 "datetimemodule.c"
      case 1: // $bb
        var $6=$args_addr; //@line 2287 "datetimemodule.c"
        var $7=$6; //@line 2287 "datetimemodule.c"
        var $8=$7+12; //@line 2287 "datetimemodule.c"
        var $9=$8; //@line 2287 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 2287 "datetimemodule.c"
        $state=$10; //@line 2287 "datetimemodule.c"
        var $11=$state; //@line 2287 "datetimemodule.c"
        var $12=$11+4; //@line 2287 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 2287 "datetimemodule.c"
        var $14=$13+84; //@line 2287 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 2287 "datetimemodule.c"
        var $16=($15) & 134217728; //@line 2287 "datetimemodule.c"
        var $17=($16)!=0; //@line 2287 "datetimemodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 2287 "datetimemodule.c"
      case 2: // $bb1
        var $18=$state; //@line 2287 "datetimemodule.c"
        var $19=$18; //@line 2287 "datetimemodule.c"
        var $20=$19+8; //@line 2287 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 2287 "datetimemodule.c"
        var $22=($21)==4; //@line 2287 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2287 "datetimemodule.c"
      case 3: // $bb2
        var $23=$state; //@line 2287 "datetimemodule.c"
        var $24=$23; //@line 2287 "datetimemodule.c"
        var $25=$24+20; //@line 2287 "datetimemodule.c"
        var $26=$25+2; //@line 2287 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 2287 "datetimemodule.c"
        var $28=($27); //@line 2287 "datetimemodule.c"
        var $29=($28) - 1; //@line 2287 "datetimemodule.c"
        var $30=($29) <= 11; //@line 2287 "datetimemodule.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2287 "datetimemodule.c"
      case 4: // $bb3
        var $31=$type_addr; //@line 2294 "datetimemodule.c"
        var $32=$31+152; //@line 2294 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 2294 "datetimemodule.c"
        var $34=$type_addr; //@line 2294 "datetimemodule.c"
        var $35=FUNCTION_TABLE[$33]($34, 0); //@line 2294 "datetimemodule.c"
        var $36=$35; //@line 2294 "datetimemodule.c"
        $me=$36; //@line 2294 "datetimemodule.c"
        var $37=$me; //@line 2295 "datetimemodule.c"
        var $38=($37)!=0; //@line 2295 "datetimemodule.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2295 "datetimemodule.c"
      case 5: // $bb4
        var $39=$state; //@line 2296 "datetimemodule.c"
        var $40=$39; //@line 2296 "datetimemodule.c"
        var $41=$40+20; //@line 2296 "datetimemodule.c"
        var $42=$41; //@line 2296 "datetimemodule.c"
        $pdata=$42; //@line 2296 "datetimemodule.c"
        var $43=$me; //@line 2297 "datetimemodule.c"
        var $44=$43+13; //@line 2297 "datetimemodule.c"
        var $45=$44; //@line 2297 "datetimemodule.c"
        var $46=$pdata; //@line 2297 "datetimemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($45, $46, 4, 1, 0); //@line 2297 "datetimemodule.c"
        var $47=$me; //@line 2298 "datetimemodule.c"
        var $48=$47+8; //@line 2298 "datetimemodule.c"
        HEAP[$48]=-1; //@line 2298 "datetimemodule.c"
        __label__ = 6; break; //@line 2298 "datetimemodule.c"
      case 6: // $bb5
        var $49=$me; //@line 2300 "datetimemodule.c"
        var $50=$49; //@line 2300 "datetimemodule.c"
        $0=$50; //@line 2300 "datetimemodule.c"
        __label__ = 12; break; //@line 2300 "datetimemodule.c"
      case 7: // $bb6
        var $51=$args_addr; //@line 2303 "datetimemodule.c"
        var $52=$kw_addr; //@line 2303 "datetimemodule.c"
        var $53=__PyArg_ParseTupleAndKeywords_SizeT($51, $52, __str128, _date_kws, allocate([$year,0,0,0,$month,0,0,0,$day,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2303 "datetimemodule.c"
        var $54=($53)!=0; //@line 2303 "datetimemodule.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2303 "datetimemodule.c"
      case 8: // $bb7
        var $55=HEAP[$day]; //@line 2305 "datetimemodule.c"
        var $56=HEAP[$month]; //@line 2305 "datetimemodule.c"
        var $57=HEAP[$year]; //@line 2305 "datetimemodule.c"
        var $58=_check_date_args($57, $56, $55); //@line 2305 "datetimemodule.c"
        var $59=($58) < 0; //@line 2305 "datetimemodule.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2305 "datetimemodule.c"
      case 9: // $bb8
        $0=0; //@line 2306 "datetimemodule.c"
        __label__ = 12; break; //@line 2306 "datetimemodule.c"
      case 10: // $bb9
        var $60=HEAP[$day]; //@line 2307 "datetimemodule.c"
        var $61=HEAP[$month]; //@line 2307 "datetimemodule.c"
        var $62=HEAP[$year]; //@line 2307 "datetimemodule.c"
        var $63=$type_addr; //@line 2307 "datetimemodule.c"
        var $64=_new_date_ex($62, $61, $60, $63); //@line 2307 "datetimemodule.c"
        $self=$64; //@line 2307 "datetimemodule.c"
        __label__ = 11; break; //@line 2307 "datetimemodule.c"
      case 11: // $bb10
        var $65=$self; //@line 2309 "datetimemodule.c"
        $0=$65; //@line 2309 "datetimemodule.c"
        __label__ = 12; break; //@line 2309 "datetimemodule.c"
      case 12: // $bb11
        var $66=$0; //@line 2300 "datetimemodule.c"
        $retval=$66; //@line 2300 "datetimemodule.c"
        var $retval12=$retval; //@line 2300 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2300 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_local_from_time_t($cls, $ts) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $ts_addr;
        var $retval;
        var $0;
        var $tm;
        var $t=__stackBase__;
        var $result;
        $cls_addr=$cls;
        $ts_addr=$ts;
        $result=0; //@line 2318 "datetimemodule.c"
        var $1=$ts_addr; //@line 2320 "datetimemodule.c"
        var $2=__PyTime_DoubleToTimet($1); //@line 2320 "datetimemodule.c"
        HEAP[$t]=$2; //@line 2320 "datetimemodule.c"
        var $3=HEAP[$t]; //@line 2321 "datetimemodule.c"
        var $4=($3)==-1; //@line 2321 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2321 "datetimemodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2321 "datetimemodule.c"
        var $6=($5)!=0; //@line 2321 "datetimemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2321 "datetimemodule.c"
      case 2: // $bb1
        $0=0; //@line 2322 "datetimemodule.c"
        __label__ = 7; break; //@line 2322 "datetimemodule.c"
      case 3: // $bb2
        var $7=_localtime($t); //@line 2323 "datetimemodule.c"
        $tm=$7; //@line 2323 "datetimemodule.c"
        var $8=($7)!=0; //@line 2324 "datetimemodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2324 "datetimemodule.c"
      case 4: // $bb3
        var $9=$tm; //@line 2325 "datetimemodule.c"
        var $10=$9+12; //@line 2325 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 2325 "datetimemodule.c"
        var $12=$tm; //@line 2325 "datetimemodule.c"
        var $13=$12+16; //@line 2325 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 2325 "datetimemodule.c"
        var $15=($14) + 1; //@line 2325 "datetimemodule.c"
        var $16=$tm; //@line 2325 "datetimemodule.c"
        var $17=$16+20; //@line 2325 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 2325 "datetimemodule.c"
        var $19=($18) + 1900; //@line 2325 "datetimemodule.c"
        var $20=$cls_addr; //@line 2325 "datetimemodule.c"
        var $21=__PyObject_CallFunction_SizeT($20, __str128, allocate([$19,0,0,0,$15,0,0,0,$11,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2325 "datetimemodule.c"
        $result=$21; //@line 2325 "datetimemodule.c"
        __label__ = 6; break; //@line 2325 "datetimemodule.c"
      case 5: // $bb4
        var $22=HEAP[_PyExc_ValueError]; //@line 2330 "datetimemodule.c"
        _PyErr_SetString($22, __str141); //@line 2330 "datetimemodule.c"
        __label__ = 6; break; //@line 2330 "datetimemodule.c"
      case 6: // $bb5
        var $23=$result; //@line 2333 "datetimemodule.c"
        $0=$23; //@line 2333 "datetimemodule.c"
        __label__ = 7; break; //@line 2333 "datetimemodule.c"
      case 7: // $bb6
        var $24=$0; //@line 2322 "datetimemodule.c"
        $retval=$24; //@line 2322 "datetimemodule.c"
        var $retval7=$retval; //@line 2322 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2322 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_today($cls, $dummy) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $dummy_addr;
        var $retval;
        var $0;
        var $time;
        var $result;
        $cls_addr=$cls;
        $dummy_addr=$dummy;
        var $1=_time_time(); //@line 2347 "datetimemodule.c"
        $time=$1; //@line 2347 "datetimemodule.c"
        var $2=$time; //@line 2348 "datetimemodule.c"
        var $3=($2)==0; //@line 2348 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2348 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2349 "datetimemodule.c"
        __label__ = 5; break; //@line 2349 "datetimemodule.c"
      case 2: // $bb1
        var $4=$cls_addr; //@line 2357 "datetimemodule.c"
        var $5=$time; //@line 2357 "datetimemodule.c"
        var $6=__PyObject_CallMethod_SizeT($4, __str142, __str35, allocate([$5,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 2357 "datetimemodule.c"
        $result=$6; //@line 2357 "datetimemodule.c"
        var $7=$time; //@line 2358 "datetimemodule.c"
        var $8=$7; //@line 2358 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 2358 "datetimemodule.c"
        var $10=($9) - 1; //@line 2358 "datetimemodule.c"
        var $11=$time; //@line 2358 "datetimemodule.c"
        var $12=$11; //@line 2358 "datetimemodule.c"
        HEAP[$12]=$10; //@line 2358 "datetimemodule.c"
        var $13=$time; //@line 2358 "datetimemodule.c"
        var $14=$13; //@line 2358 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 2358 "datetimemodule.c"
        var $16=($15)==0; //@line 2358 "datetimemodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2358 "datetimemodule.c"
      case 3: // $bb2
        var $17=$time; //@line 2358 "datetimemodule.c"
        var $18=$17+4; //@line 2358 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 2358 "datetimemodule.c"
        var $20=$19+24; //@line 2358 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 2358 "datetimemodule.c"
        var $22=$time; //@line 2358 "datetimemodule.c"
        FUNCTION_TABLE[$21]($22); //@line 2358 "datetimemodule.c"
        __label__ = 4; break; //@line 2358 "datetimemodule.c"
      case 4: // $bb3
        var $23=$result; //@line 2359 "datetimemodule.c"
        $0=$23; //@line 2359 "datetimemodule.c"
        __label__ = 5; break; //@line 2359 "datetimemodule.c"
      case 5: // $bb4
        var $24=$0; //@line 2349 "datetimemodule.c"
        $retval=$24; //@line 2349 "datetimemodule.c"
        var $retval5=$retval; //@line 2349 "datetimemodule.c"
        ;
        return $retval5; //@line 2349 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_fromtimestamp($cls, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $timestamp=__stackBase__;
        var $result;
        $cls_addr=$cls;
        $args_addr=$args;
        $result=0; //@line 2367 "datetimemodule.c"
        var $1=$args_addr; //@line 2369 "datetimemodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str143, allocate([$timestamp,0,0,0], ["double*",0,0,0], ALLOC_STACK)); //@line 2369 "datetimemodule.c"
        var $3=($2)!=0; //@line 2369 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2369 "datetimemodule.c"
      case 1: // $bb
        var $4=HEAP[$timestamp]; //@line 2370 "datetimemodule.c"
        var $5=$cls_addr; //@line 2370 "datetimemodule.c"
        var $6=_date_local_from_time_t($5, $4); //@line 2370 "datetimemodule.c"
        $result=$6; //@line 2370 "datetimemodule.c"
        __label__ = 2; break; //@line 2370 "datetimemodule.c"
      case 2: // $bb1
        var $7=$result; //@line 2371 "datetimemodule.c"
        $0=$7; //@line 2371 "datetimemodule.c"
        var $8=$0; //@line 2371 "datetimemodule.c"
        $retval=$8; //@line 2371 "datetimemodule.c"
        var $retval2=$retval; //@line 2371 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 2371 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_fromordinal($cls, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $ordinal=__stackBase__;
        var $year=__stackBase__+4;
        var $month=__stackBase__+8;
        var $day=__stackBase__+12;
        $cls_addr=$cls;
        $args_addr=$args;
        $result=0; //@line 2380 "datetimemodule.c"
        var $1=$args_addr; //@line 2383 "datetimemodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str144, allocate([$ordinal,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 2383 "datetimemodule.c"
        var $3=($2)!=0; //@line 2383 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 2383 "datetimemodule.c"
      case 1: // $bb
        var $4=HEAP[$ordinal]; //@line 2388 "datetimemodule.c"
        var $5=($4) <= 0; //@line 2388 "datetimemodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2388 "datetimemodule.c"
      case 2: // $bb1
        var $6=HEAP[_PyExc_ValueError]; //@line 2389 "datetimemodule.c"
        _PyErr_SetString($6, __str145); //@line 2389 "datetimemodule.c"
        __label__ = 4; break; //@line 2389 "datetimemodule.c"
      case 3: // $bb2
        var $7=HEAP[$ordinal]; //@line 2392 "datetimemodule.c"
        _ord_to_ymd($7, $year, $month, $day); //@line 2392 "datetimemodule.c"
        var $8=HEAP[$day]; //@line 2393 "datetimemodule.c"
        var $9=HEAP[$month]; //@line 2393 "datetimemodule.c"
        var $10=HEAP[$year]; //@line 2393 "datetimemodule.c"
        var $11=$cls_addr; //@line 2393 "datetimemodule.c"
        var $12=__PyObject_CallFunction_SizeT($11, __str128, allocate([$10,0,0,0,$9,0,0,0,$8,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2393 "datetimemodule.c"
        $result=$12; //@line 2393 "datetimemodule.c"
        __label__ = 4; break; //@line 2393 "datetimemodule.c"
      case 4: // $bb3
        var $13=$result; //@line 2397 "datetimemodule.c"
        $0=$13; //@line 2397 "datetimemodule.c"
        var $14=$0; //@line 2397 "datetimemodule.c"
        $retval=$14; //@line 2397 "datetimemodule.c"
        var $retval4=$retval; //@line 2397 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 2397 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _add_date_timedelta($date, $delta, $negate) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $date_addr;
        var $delta_addr;
        var $negate_addr;
        var $retval;
        var $0;
        var $iftmp_174;
        var $result;
        var $year=__stackBase__;
        var $month=__stackBase__+4;
        var $deltadays;
        var $day=__stackBase__+8;
        $date_addr=$date;
        $delta_addr=$delta;
        $negate_addr=$negate;
        $result=0; //@line 2410 "datetimemodule.c"
        var $1=$date_addr; //@line 2411 "datetimemodule.c"
        var $2=$1+13; //@line 2411 "datetimemodule.c"
        var $3=$2; //@line 2411 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 2411 "datetimemodule.c"
        var $5=($4); //@line 2411 "datetimemodule.c"
        var $6=($5) << 8; //@line 2411 "datetimemodule.c"
        var $7=$date_addr; //@line 2411 "datetimemodule.c"
        var $8=$7+13; //@line 2411 "datetimemodule.c"
        var $9=$8+1; //@line 2411 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 2411 "datetimemodule.c"
        var $11=($10); //@line 2411 "datetimemodule.c"
        var $12=($11) | ($6); //@line 2411 "datetimemodule.c"
        HEAP[$year]=$12; //@line 2411 "datetimemodule.c"
        var $13=$date_addr; //@line 2412 "datetimemodule.c"
        var $14=$13+13; //@line 2412 "datetimemodule.c"
        var $15=$14+2; //@line 2412 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 2412 "datetimemodule.c"
        var $17=($16); //@line 2412 "datetimemodule.c"
        HEAP[$month]=$17; //@line 2412 "datetimemodule.c"
        var $18=$delta_addr; //@line 2413 "datetimemodule.c"
        var $19=$18+12; //@line 2413 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 2413 "datetimemodule.c"
        $deltadays=$20; //@line 2413 "datetimemodule.c"
        var $21=$date_addr; //@line 2415 "datetimemodule.c"
        var $22=$21+13; //@line 2415 "datetimemodule.c"
        var $23=$22+3; //@line 2415 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 2415 "datetimemodule.c"
        var $25=($24); //@line 2415 "datetimemodule.c"
        var $26=$negate_addr; //@line 2415 "datetimemodule.c"
        var $27=($26)!=0; //@line 2415 "datetimemodule.c"
        var $28=$deltadays; //@line 2415 "datetimemodule.c"
        if ($27) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2415 "datetimemodule.c"
      case 1: // $bb
        var $29=0 - ($28); //@line 2415 "datetimemodule.c"
        $iftmp_174=$29; //@line 2415 "datetimemodule.c"
        __label__ = 3; break; //@line 2415 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_174=$28; //@line 2415 "datetimemodule.c"
        __label__ = 3; break; //@line 2415 "datetimemodule.c"
      case 3: // $bb2
        var $30=$iftmp_174; //@line 2415 "datetimemodule.c"
        var $31=($30) + ($25); //@line 2415 "datetimemodule.c"
        HEAP[$day]=$31; //@line 2415 "datetimemodule.c"
        var $32=_normalize_date($year, $month, $day); //@line 2417 "datetimemodule.c"
        var $33=($32) >= 0; //@line 2417 "datetimemodule.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2417 "datetimemodule.c"
      case 4: // $bb3
        var $34=HEAP[$day]; //@line 2418 "datetimemodule.c"
        var $35=HEAP[$month]; //@line 2418 "datetimemodule.c"
        var $36=HEAP[$year]; //@line 2418 "datetimemodule.c"
        var $37=_new_date_ex($36, $35, $34, _PyDateTime_DateType); //@line 2418 "datetimemodule.c"
        $result=$37; //@line 2418 "datetimemodule.c"
        __label__ = 5; break; //@line 2418 "datetimemodule.c"
      case 5: // $bb4
        var $38=$result; //@line 2419 "datetimemodule.c"
        $0=$38; //@line 2419 "datetimemodule.c"
        var $39=$0; //@line 2419 "datetimemodule.c"
        $retval=$39; //@line 2419 "datetimemodule.c"
        var $retval5=$retval; //@line 2419 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2419 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_add($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 2425 "datetimemodule.c"
        var $2=$1+4; //@line 2425 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2425 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateTimeType); //@line 2425 "datetimemodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2425 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 2425 "datetimemodule.c"
        var $6=$5+4; //@line 2425 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 2425 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 2425 "datetimemodule.c"
        var $9=($8)!=0; //@line 2425 "datetimemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2425 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 2425 "datetimemodule.c"
        var $11=$10+4; //@line 2425 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 2425 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DateTimeType); //@line 2425 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2425 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 2425 "datetimemodule.c"
        var $15=$14+4; //@line 2425 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 2425 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DateTimeType); //@line 2425 "datetimemodule.c"
        var $18=($17)!=0; //@line 2425 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2425 "datetimemodule.c"
      case 4: // $bb3
        var $19=HEAP[__Py_NotImplementedStruct]; //@line 2426 "datetimemodule.c"
        var $20=($19) + 1; //@line 2426 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$20; //@line 2426 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 2427 "datetimemodule.c"
        __label__ = 14; break; //@line 2427 "datetimemodule.c"
      case 5: // $bb4
        var $21=$left_addr; //@line 2429 "datetimemodule.c"
        var $22=$21+4; //@line 2429 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 2429 "datetimemodule.c"
        var $24=($23)==(_PyDateTime_DateType); //@line 2429 "datetimemodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2429 "datetimemodule.c"
      case 6: // $bb5
        var $25=$left_addr; //@line 2429 "datetimemodule.c"
        var $26=$25+4; //@line 2429 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 2429 "datetimemodule.c"
        var $28=_PyType_IsSubtype($27, _PyDateTime_DateType); //@line 2429 "datetimemodule.c"
        var $29=($28)!=0; //@line 2429 "datetimemodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2429 "datetimemodule.c"
      case 7: // $bb6
        var $30=$right_addr; //@line 2431 "datetimemodule.c"
        var $31=$30+4; //@line 2431 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 2431 "datetimemodule.c"
        var $33=($32)==(_PyDateTime_DeltaType); //@line 2431 "datetimemodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2431 "datetimemodule.c"
      case 8: // $bb7
        var $34=$right_addr; //@line 2431 "datetimemodule.c"
        var $35=$34+4; //@line 2431 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 2431 "datetimemodule.c"
        var $37=_PyType_IsSubtype($36, _PyDateTime_DeltaType); //@line 2431 "datetimemodule.c"
        var $38=($37)!=0; //@line 2431 "datetimemodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 2431 "datetimemodule.c"
      case 9: // $bb8
        var $39=$right_addr; //@line 2433 "datetimemodule.c"
        var $40=$39; //@line 2433 "datetimemodule.c"
        var $41=$left_addr; //@line 2433 "datetimemodule.c"
        var $42=$41; //@line 2433 "datetimemodule.c"
        var $43=_add_date_timedelta($42, $40, 0); //@line 2433 "datetimemodule.c"
        $0=$43; //@line 2433 "datetimemodule.c"
        __label__ = 14; break; //@line 2433 "datetimemodule.c"
      case 10: // $bb10
        var $44=$left_addr; //@line 2441 "datetimemodule.c"
        var $45=$44+4; //@line 2441 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 2441 "datetimemodule.c"
        var $47=($46)==(_PyDateTime_DeltaType); //@line 2441 "datetimemodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2441 "datetimemodule.c"
      case 11: // $bb11
        var $48=$left_addr; //@line 2441 "datetimemodule.c"
        var $49=$48+4; //@line 2441 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 2441 "datetimemodule.c"
        var $51=_PyType_IsSubtype($50, _PyDateTime_DeltaType); //@line 2441 "datetimemodule.c"
        var $52=($51)!=0; //@line 2441 "datetimemodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2441 "datetimemodule.c"
      case 12: // $bb12
        var $53=$left_addr; //@line 2443 "datetimemodule.c"
        var $54=$53; //@line 2443 "datetimemodule.c"
        var $55=$right_addr; //@line 2443 "datetimemodule.c"
        var $56=$55; //@line 2443 "datetimemodule.c"
        var $57=_add_date_timedelta($56, $54, 0); //@line 2443 "datetimemodule.c"
        $0=$57; //@line 2443 "datetimemodule.c"
        __label__ = 14; break; //@line 2443 "datetimemodule.c"
      case 13: // $bb13
        var $58=HEAP[__Py_NotImplementedStruct]; //@line 2447 "datetimemodule.c"
        var $59=($58) + 1; //@line 2447 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$59; //@line 2447 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 2448 "datetimemodule.c"
        __label__ = 14; break; //@line 2448 "datetimemodule.c"
      case 14: // $bb14
        var $60=$0; //@line 2427 "datetimemodule.c"
        $retval=$60; //@line 2427 "datetimemodule.c"
        var $retval15=$retval; //@line 2427 "datetimemodule.c"
        ;
        return $retval15; //@line 2427 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_subtract($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $left_ord;
        var $right_ord;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 2454 "datetimemodule.c"
        var $2=$1+4; //@line 2454 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2454 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateTimeType); //@line 2454 "datetimemodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2454 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 2454 "datetimemodule.c"
        var $6=$5+4; //@line 2454 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 2454 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 2454 "datetimemodule.c"
        var $9=($8)!=0; //@line 2454 "datetimemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2454 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 2454 "datetimemodule.c"
        var $11=$10+4; //@line 2454 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 2454 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DateTimeType); //@line 2454 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2454 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 2454 "datetimemodule.c"
        var $15=$14+4; //@line 2454 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 2454 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DateTimeType); //@line 2454 "datetimemodule.c"
        var $18=($17)!=0; //@line 2454 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2454 "datetimemodule.c"
      case 4: // $bb3
        var $19=HEAP[__Py_NotImplementedStruct]; //@line 2455 "datetimemodule.c"
        var $20=($19) + 1; //@line 2455 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$20; //@line 2455 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 2456 "datetimemodule.c"
        __label__ = 14; break; //@line 2456 "datetimemodule.c"
      case 5: // $bb4
        var $21=$left_addr; //@line 2458 "datetimemodule.c"
        var $22=$21+4; //@line 2458 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 2458 "datetimemodule.c"
        var $24=($23)==(_PyDateTime_DateType); //@line 2458 "datetimemodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2458 "datetimemodule.c"
      case 6: // $bb5
        var $25=$left_addr; //@line 2458 "datetimemodule.c"
        var $26=$25+4; //@line 2458 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 2458 "datetimemodule.c"
        var $28=_PyType_IsSubtype($27, _PyDateTime_DateType); //@line 2458 "datetimemodule.c"
        var $29=($28)!=0; //@line 2458 "datetimemodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 2458 "datetimemodule.c"
      case 7: // $bb6
        var $30=$right_addr; //@line 2459 "datetimemodule.c"
        var $31=$30+4; //@line 2459 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 2459 "datetimemodule.c"
        var $33=($32)==(_PyDateTime_DateType); //@line 2459 "datetimemodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2459 "datetimemodule.c"
      case 8: // $bb7
        var $34=$right_addr; //@line 2459 "datetimemodule.c"
        var $35=$34+4; //@line 2459 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 2459 "datetimemodule.c"
        var $37=_PyType_IsSubtype($36, _PyDateTime_DateType); //@line 2459 "datetimemodule.c"
        var $38=($37)!=0; //@line 2459 "datetimemodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2459 "datetimemodule.c"
      case 9: // $bb8
        var $39=$left_addr; //@line 2463 "datetimemodule.c"
        var $40=$39; //@line 2463 "datetimemodule.c"
        var $41=$40+13; //@line 2463 "datetimemodule.c"
        var $42=$41+3; //@line 2463 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 2463 "datetimemodule.c"
        var $44=($43); //@line 2463 "datetimemodule.c"
        var $45=$left_addr; //@line 2463 "datetimemodule.c"
        var $46=$45; //@line 2463 "datetimemodule.c"
        var $47=$46+13; //@line 2463 "datetimemodule.c"
        var $48=$47+2; //@line 2463 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 2463 "datetimemodule.c"
        var $50=($49); //@line 2463 "datetimemodule.c"
        var $51=$left_addr; //@line 2463 "datetimemodule.c"
        var $52=$51; //@line 2463 "datetimemodule.c"
        var $53=$52+13; //@line 2463 "datetimemodule.c"
        var $54=$53; //@line 2463 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 2463 "datetimemodule.c"
        var $56=($55); //@line 2463 "datetimemodule.c"
        var $57=($56) << 8; //@line 2463 "datetimemodule.c"
        var $58=$left_addr; //@line 2463 "datetimemodule.c"
        var $59=$58; //@line 2463 "datetimemodule.c"
        var $60=$59+13; //@line 2463 "datetimemodule.c"
        var $61=$60+1; //@line 2463 "datetimemodule.c"
        var $62=HEAP[$61]; //@line 2463 "datetimemodule.c"
        var $63=($62); //@line 2463 "datetimemodule.c"
        var $64=($63) | ($57); //@line 2463 "datetimemodule.c"
        var $65=_ymd_to_ord($64, $50, $44); //@line 2463 "datetimemodule.c"
        $left_ord=$65; //@line 2463 "datetimemodule.c"
        var $66=$right_addr; //@line 2466 "datetimemodule.c"
        var $67=$66; //@line 2466 "datetimemodule.c"
        var $68=$67+13; //@line 2466 "datetimemodule.c"
        var $69=$68+3; //@line 2466 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 2466 "datetimemodule.c"
        var $71=($70); //@line 2466 "datetimemodule.c"
        var $72=$right_addr; //@line 2466 "datetimemodule.c"
        var $73=$72; //@line 2466 "datetimemodule.c"
        var $74=$73+13; //@line 2466 "datetimemodule.c"
        var $75=$74+2; //@line 2466 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 2466 "datetimemodule.c"
        var $77=($76); //@line 2466 "datetimemodule.c"
        var $78=$right_addr; //@line 2466 "datetimemodule.c"
        var $79=$78; //@line 2466 "datetimemodule.c"
        var $80=$79+13; //@line 2466 "datetimemodule.c"
        var $81=$80; //@line 2466 "datetimemodule.c"
        var $82=HEAP[$81]; //@line 2466 "datetimemodule.c"
        var $83=($82); //@line 2466 "datetimemodule.c"
        var $84=($83) << 8; //@line 2466 "datetimemodule.c"
        var $85=$right_addr; //@line 2466 "datetimemodule.c"
        var $86=$85; //@line 2466 "datetimemodule.c"
        var $87=$86+13; //@line 2466 "datetimemodule.c"
        var $88=$87+1; //@line 2466 "datetimemodule.c"
        var $89=HEAP[$88]; //@line 2466 "datetimemodule.c"
        var $90=($89); //@line 2466 "datetimemodule.c"
        var $91=($90) | ($84); //@line 2466 "datetimemodule.c"
        var $92=_ymd_to_ord($91, $77, $71); //@line 2466 "datetimemodule.c"
        $right_ord=$92; //@line 2466 "datetimemodule.c"
        var $93=$left_ord; //@line 2467 "datetimemodule.c"
        var $94=$right_ord; //@line 2467 "datetimemodule.c"
        var $95=($93) - ($94); //@line 2467 "datetimemodule.c"
        var $96=_new_delta_ex($95, 0, 0, 0, _PyDateTime_DeltaType); //@line 2467 "datetimemodule.c"
        $0=$96; //@line 2467 "datetimemodule.c"
        __label__ = 14; break; //@line 2467 "datetimemodule.c"
      case 10: // $bb9
        var $97=$right_addr; //@line 2469 "datetimemodule.c"
        var $98=$97+4; //@line 2469 "datetimemodule.c"
        var $99=HEAP[$98]; //@line 2469 "datetimemodule.c"
        var $100=($99)==(_PyDateTime_DeltaType); //@line 2469 "datetimemodule.c"
        if ($100) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2469 "datetimemodule.c"
      case 11: // $bb10
        var $101=$right_addr; //@line 2469 "datetimemodule.c"
        var $102=$101+4; //@line 2469 "datetimemodule.c"
        var $103=HEAP[$102]; //@line 2469 "datetimemodule.c"
        var $104=_PyType_IsSubtype($103, _PyDateTime_DeltaType); //@line 2469 "datetimemodule.c"
        var $105=($104)!=0; //@line 2469 "datetimemodule.c"
        if ($105) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2469 "datetimemodule.c"
      case 12: // $bb11
        var $106=$right_addr; //@line 2471 "datetimemodule.c"
        var $107=$106; //@line 2471 "datetimemodule.c"
        var $108=$left_addr; //@line 2471 "datetimemodule.c"
        var $109=$108; //@line 2471 "datetimemodule.c"
        var $110=_add_date_timedelta($109, $107, 1); //@line 2471 "datetimemodule.c"
        $0=$110; //@line 2471 "datetimemodule.c"
        __label__ = 14; break; //@line 2471 "datetimemodule.c"
      case 13: // $bb12
        var $111=HEAP[__Py_NotImplementedStruct]; //@line 2476 "datetimemodule.c"
        var $112=($111) + 1; //@line 2476 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$112; //@line 2476 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 2477 "datetimemodule.c"
        __label__ = 14; break; //@line 2477 "datetimemodule.c"
      case 14: // $bb13
        var $113=$0; //@line 2456 "datetimemodule.c"
        $retval=$113; //@line 2456 "datetimemodule.c"
        var $retval14=$retval; //@line 2456 "datetimemodule.c"
        ;
        return $retval14; //@line 2456 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_repr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 1028; _memset(__stackBase__, 0, 1028);
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    var $buffer=__stackBase__;
    var $type_name;
    $self_addr=$self;
    var $1=$self_addr; //@line 2489 "datetimemodule.c"
    var $2=$1; //@line 2489 "datetimemodule.c"
    var $3=$2+4; //@line 2489 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2489 "datetimemodule.c"
    var $5=$4+12; //@line 2489 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 2489 "datetimemodule.c"
    $type_name=$6; //@line 2489 "datetimemodule.c"
    var $7=$self_addr; //@line 2490 "datetimemodule.c"
    var $8=$7+13; //@line 2490 "datetimemodule.c"
    var $9=$8+3; //@line 2490 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 2490 "datetimemodule.c"
    var $11=($10); //@line 2490 "datetimemodule.c"
    var $12=$self_addr; //@line 2490 "datetimemodule.c"
    var $13=$12+13; //@line 2490 "datetimemodule.c"
    var $14=$13+2; //@line 2490 "datetimemodule.c"
    var $15=HEAP[$14]; //@line 2490 "datetimemodule.c"
    var $16=($15); //@line 2490 "datetimemodule.c"
    var $17=$self_addr; //@line 2490 "datetimemodule.c"
    var $18=$17+13; //@line 2490 "datetimemodule.c"
    var $19=$18; //@line 2490 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 2490 "datetimemodule.c"
    var $21=($20); //@line 2490 "datetimemodule.c"
    var $22=($21) << 8; //@line 2490 "datetimemodule.c"
    var $23=$self_addr; //@line 2490 "datetimemodule.c"
    var $24=$23+13; //@line 2490 "datetimemodule.c"
    var $25=$24+1; //@line 2490 "datetimemodule.c"
    var $26=HEAP[$25]; //@line 2490 "datetimemodule.c"
    var $27=($26); //@line 2490 "datetimemodule.c"
    var $28=($27) | ($22); //@line 2490 "datetimemodule.c"
    var $buffer1=$buffer; //@line 2490 "datetimemodule.c"
    var $29=$type_name; //@line 2490 "datetimemodule.c"
    var $30=_PyOS_snprintf($buffer1, 1028, __str121, allocate([$29,0,0,0,$28,0,0,0,$16,0,0,0,$11,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2490 "datetimemodule.c"
    var $buffer2=$buffer; //@line 2494 "datetimemodule.c"
    var $31=_PyString_FromString($buffer2); //@line 2494 "datetimemodule.c"
    $0=$31; //@line 2494 "datetimemodule.c"
    var $32=$0; //@line 2494 "datetimemodule.c"
    $retval=$32; //@line 2494 "datetimemodule.c"
    var $retval3=$retval; //@line 2494 "datetimemodule.c"
    STACKTOP = __stackBase__;
    return $retval3; //@line 2494 "datetimemodule.c"
  }
  

  function _date_isoformat($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 128; _memset(__stackBase__, 0, 128);
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    var $buffer=__stackBase__;
    $self_addr=$self;
    var $1=$self_addr; //@line 2502 "datetimemodule.c"
    var $buffer1=$buffer; //@line 2502 "datetimemodule.c"
    var $2=_isoformat_date($1, $buffer1, 128); //@line 2502 "datetimemodule.c"
    var $buffer2=$buffer; //@line 2503 "datetimemodule.c"
    var $3=_PyString_FromString($buffer2); //@line 2503 "datetimemodule.c"
    $0=$3; //@line 2503 "datetimemodule.c"
    var $4=$0; //@line 2503 "datetimemodule.c"
    $retval=$4; //@line 2503 "datetimemodule.c"
    var $retval3=$retval; //@line 2503 "datetimemodule.c"
    STACKTOP = __stackBase__;
    return $retval3; //@line 2503 "datetimemodule.c"
  }
  

  function _date_str($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2510 "datetimemodule.c"
    var $2=$1; //@line 2510 "datetimemodule.c"
    var $3=__PyObject_CallMethod_SizeT($2, __str146, __str99, allocate(1, "i32", ALLOC_STACK)); //@line 2510 "datetimemodule.c"
    $0=$3; //@line 2510 "datetimemodule.c"
    var $4=$0; //@line 2510 "datetimemodule.c"
    $retval=$4; //@line 2510 "datetimemodule.c"
    var $retval1=$retval; //@line 2510 "datetimemodule.c"
    ;
    return $retval1; //@line 2510 "datetimemodule.c"
  }
  

  function _date_ctime($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2517 "datetimemodule.c"
    var $2=_format_ctime($1, 0, 0, 0); //@line 2517 "datetimemodule.c"
    $0=$2; //@line 2517 "datetimemodule.c"
    var $3=$0; //@line 2517 "datetimemodule.c"
    $retval=$3; //@line 2517 "datetimemodule.c"
    var $retval1=$retval; //@line 2517 "datetimemodule.c"
    ;
    return $retval1; //@line 2517 "datetimemodule.c"
  }
  

  function _date_strftime($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $result;
        var $tuple;
        var $format=__stackBase__;
        var $format_len=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 2532 "datetimemodule.c"
        var $2=$kw_addr; //@line 2532 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str147, _keywords_11164, allocate([$format,0,0,0,$format_len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2532 "datetimemodule.c"
        var $4=($3)==0; //@line 2532 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2532 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2534 "datetimemodule.c"
        __label__ = 7; break; //@line 2534 "datetimemodule.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 2536 "datetimemodule.c"
        var $6=$5; //@line 2536 "datetimemodule.c"
        var $7=__PyObject_CallMethod_SizeT($6, __str149, __str99, allocate(1, "i32", ALLOC_STACK)); //@line 2536 "datetimemodule.c"
        $tuple=$7; //@line 2536 "datetimemodule.c"
        var $8=$tuple; //@line 2537 "datetimemodule.c"
        var $9=($8)==0; //@line 2537 "datetimemodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2537 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 2538 "datetimemodule.c"
        __label__ = 7; break; //@line 2538 "datetimemodule.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 2539 "datetimemodule.c"
        var $11=$10; //@line 2539 "datetimemodule.c"
        var $12=HEAP[$format_len]; //@line 2539 "datetimemodule.c"
        var $13=HEAP[$format]; //@line 2539 "datetimemodule.c"
        var $14=$self_addr; //@line 2539 "datetimemodule.c"
        var $15=$14; //@line 2539 "datetimemodule.c"
        var $16=$tuple; //@line 2539 "datetimemodule.c"
        var $17=_wrap_strftime($15, $13, $12, $16, $11); //@line 2539 "datetimemodule.c"
        $result=$17; //@line 2539 "datetimemodule.c"
        var $18=$tuple; //@line 2541 "datetimemodule.c"
        var $19=$18; //@line 2541 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 2541 "datetimemodule.c"
        var $21=($20) - 1; //@line 2541 "datetimemodule.c"
        var $22=$tuple; //@line 2541 "datetimemodule.c"
        var $23=$22; //@line 2541 "datetimemodule.c"
        HEAP[$23]=$21; //@line 2541 "datetimemodule.c"
        var $24=$tuple; //@line 2541 "datetimemodule.c"
        var $25=$24; //@line 2541 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 2541 "datetimemodule.c"
        var $27=($26)==0; //@line 2541 "datetimemodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2541 "datetimemodule.c"
      case 5: // $bb4
        var $28=$tuple; //@line 2541 "datetimemodule.c"
        var $29=$28+4; //@line 2541 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 2541 "datetimemodule.c"
        var $31=$30+24; //@line 2541 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 2541 "datetimemodule.c"
        var $33=$tuple; //@line 2541 "datetimemodule.c"
        FUNCTION_TABLE[$32]($33); //@line 2541 "datetimemodule.c"
        __label__ = 6; break; //@line 2541 "datetimemodule.c"
      case 6: // $bb5
        var $34=$result; //@line 2542 "datetimemodule.c"
        $0=$34; //@line 2542 "datetimemodule.c"
        __label__ = 7; break; //@line 2542 "datetimemodule.c"
      case 7: // $bb6
        var $35=$0; //@line 2534 "datetimemodule.c"
        $retval=$35; //@line 2534 "datetimemodule.c"
        var $retval7=$retval; //@line 2534 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2534 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_format($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $format=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 2550 "datetimemodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str150, allocate([$format,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 2550 "datetimemodule.c"
        var $3=($2)==0; //@line 2550 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2550 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2551 "datetimemodule.c"
        __label__ = 10; break; //@line 2551 "datetimemodule.c"
      case 2: // $bb1
        var $4=HEAP[$format]; //@line 2554 "datetimemodule.c"
        var $5=$4+4; //@line 2554 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 2554 "datetimemodule.c"
        var $7=$6+84; //@line 2554 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 2554 "datetimemodule.c"
        var $9=($8) & 134217728; //@line 2554 "datetimemodule.c"
        var $10=($9)!=0; //@line 2554 "datetimemodule.c"
        var $11=HEAP[$format]; //@line 2556 "datetimemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2554 "datetimemodule.c"
      case 3: // $bb2
        var $12=$11; //@line 2556 "datetimemodule.c"
        var $13=$12+8; //@line 2556 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 2556 "datetimemodule.c"
        var $15=($14)==0; //@line 2556 "datetimemodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 2556 "datetimemodule.c"
      case 4: // $bb3
        var $16=$self_addr; //@line 2557 "datetimemodule.c"
        var $17=$16; //@line 2557 "datetimemodule.c"
        var $18=_PyObject_Str($17); //@line 2557 "datetimemodule.c"
        $0=$18; //@line 2557 "datetimemodule.c"
        __label__ = 10; break; //@line 2557 "datetimemodule.c"
      case 5: // $bb5
        var $19=$11+4; //@line 2558 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 2558 "datetimemodule.c"
        var $21=$20+84; //@line 2558 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 2558 "datetimemodule.c"
        var $23=($22) & 268435456; //@line 2558 "datetimemodule.c"
        var $24=($23)!=0; //@line 2558 "datetimemodule.c"
        var $25=HEAP[$format]; //@line 2560 "datetimemodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 2558 "datetimemodule.c"
      case 6: // $bb6
        var $26=$25; //@line 2560 "datetimemodule.c"
        var $27=$26+8; //@line 2560 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 2560 "datetimemodule.c"
        var $29=($28)==0; //@line 2560 "datetimemodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2560 "datetimemodule.c"
      case 7: // $bb7
        var $30=$self_addr; //@line 2561 "datetimemodule.c"
        var $31=$30; //@line 2561 "datetimemodule.c"
        var $32=_PyObject_Unicode($31); //@line 2561 "datetimemodule.c"
        $0=$32; //@line 2561 "datetimemodule.c"
        __label__ = 10; break; //@line 2561 "datetimemodule.c"
      case 8: // $bb9
        var $33=$25+4; //@line 2563 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 2563 "datetimemodule.c"
        var $35=$34+12; //@line 2563 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 2563 "datetimemodule.c"
        var $37=HEAP[_PyExc_ValueError]; //@line 2563 "datetimemodule.c"
        var $38=_PyErr_Format($37, __str151, allocate([$36,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2563 "datetimemodule.c"
        $0=0; //@line 2566 "datetimemodule.c"
        __label__ = 10; break; //@line 2566 "datetimemodule.c"
      case 9: // $bb10
        var $39=HEAP[$format]; //@line 2568 "datetimemodule.c"
        var $40=$self_addr; //@line 2568 "datetimemodule.c"
        var $41=$40; //@line 2568 "datetimemodule.c"
        var $42=__PyObject_CallMethod_SizeT($41, __str93, __str35, allocate([$39,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 2568 "datetimemodule.c"
        $0=$42; //@line 2568 "datetimemodule.c"
        __label__ = 10; break; //@line 2568 "datetimemodule.c"
      case 10: // $bb11
        var $43=$0; //@line 2551 "datetimemodule.c"
        $retval=$43; //@line 2551 "datetimemodule.c"
        var $retval12=$retval; //@line 2551 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2551 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_isoweekday($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    var $dow;
    $self_addr=$self;
    var $1=$self_addr; //@line 2576 "datetimemodule.c"
    var $2=$1+13; //@line 2576 "datetimemodule.c"
    var $3=$2+3; //@line 2576 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2576 "datetimemodule.c"
    var $5=($4); //@line 2576 "datetimemodule.c"
    var $6=$self_addr; //@line 2576 "datetimemodule.c"
    var $7=$6+13; //@line 2576 "datetimemodule.c"
    var $8=$7+2; //@line 2576 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 2576 "datetimemodule.c"
    var $10=($9); //@line 2576 "datetimemodule.c"
    var $11=$self_addr; //@line 2576 "datetimemodule.c"
    var $12=$11+13; //@line 2576 "datetimemodule.c"
    var $13=$12; //@line 2576 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 2576 "datetimemodule.c"
    var $15=($14); //@line 2576 "datetimemodule.c"
    var $16=($15) << 8; //@line 2576 "datetimemodule.c"
    var $17=$self_addr; //@line 2576 "datetimemodule.c"
    var $18=$17+13; //@line 2576 "datetimemodule.c"
    var $19=$18+1; //@line 2576 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 2576 "datetimemodule.c"
    var $21=($20); //@line 2576 "datetimemodule.c"
    var $22=($21) | ($16); //@line 2576 "datetimemodule.c"
    var $23=_weekday($22, $10, $5); //@line 2576 "datetimemodule.c"
    $dow=$23; //@line 2576 "datetimemodule.c"
    var $24=$dow; //@line 2578 "datetimemodule.c"
    var $25=($24) + 1; //@line 2578 "datetimemodule.c"
    var $26=_PyInt_FromLong($25); //@line 2578 "datetimemodule.c"
    $0=$26; //@line 2578 "datetimemodule.c"
    var $27=$0; //@line 2578 "datetimemodule.c"
    $retval=$27; //@line 2578 "datetimemodule.c"
    var $retval1=$retval; //@line 2578 "datetimemodule.c"
    ;
    return $retval1; //@line 2578 "datetimemodule.c"
  }
  

  function _date_isocalendar($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $year;
        var $week1_monday;
        var $today;
        var $week;
        var $day=__stackBase__;
        $self_addr=$self;
        var $1=$self_addr; //@line 2584 "datetimemodule.c"
        var $2=$1+13; //@line 2584 "datetimemodule.c"
        var $3=$2; //@line 2584 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 2584 "datetimemodule.c"
        var $5=($4); //@line 2584 "datetimemodule.c"
        var $6=($5) << 8; //@line 2584 "datetimemodule.c"
        var $7=$self_addr; //@line 2584 "datetimemodule.c"
        var $8=$7+13; //@line 2584 "datetimemodule.c"
        var $9=$8+1; //@line 2584 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 2584 "datetimemodule.c"
        var $11=($10); //@line 2584 "datetimemodule.c"
        var $12=($11) | ($6); //@line 2584 "datetimemodule.c"
        $year=$12; //@line 2584 "datetimemodule.c"
        var $13=$year; //@line 2585 "datetimemodule.c"
        var $14=_iso_week1_monday($13); //@line 2585 "datetimemodule.c"
        $week1_monday=$14; //@line 2585 "datetimemodule.c"
        var $15=$self_addr; //@line 2586 "datetimemodule.c"
        var $16=$15+13; //@line 2586 "datetimemodule.c"
        var $17=$16+3; //@line 2586 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 2586 "datetimemodule.c"
        var $19=($18); //@line 2586 "datetimemodule.c"
        var $20=$self_addr; //@line 2586 "datetimemodule.c"
        var $21=$20+13; //@line 2586 "datetimemodule.c"
        var $22=$21+2; //@line 2586 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 2586 "datetimemodule.c"
        var $24=($23); //@line 2586 "datetimemodule.c"
        var $25=$year; //@line 2586 "datetimemodule.c"
        var $26=_ymd_to_ord($25, $24, $19); //@line 2586 "datetimemodule.c"
        $today=$26; //@line 2586 "datetimemodule.c"
        var $27=$today; //@line 2590 "datetimemodule.c"
        var $28=$week1_monday; //@line 2590 "datetimemodule.c"
        var $29=($27) - ($28); //@line 2590 "datetimemodule.c"
        var $30=_divmod($29, 7, $day); //@line 2590 "datetimemodule.c"
        $week=$30; //@line 2590 "datetimemodule.c"
        var $31=$week; //@line 2591 "datetimemodule.c"
        var $32=($31) < 0; //@line 2591 "datetimemodule.c"
        if ($32) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2591 "datetimemodule.c"
      case 1: // $bb
        var $33=$year; //@line 2592 "datetimemodule.c"
        var $34=($33) - 1; //@line 2592 "datetimemodule.c"
        $year=$34; //@line 2592 "datetimemodule.c"
        var $35=$year; //@line 2593 "datetimemodule.c"
        var $36=_iso_week1_monday($35); //@line 2593 "datetimemodule.c"
        $week1_monday=$36; //@line 2593 "datetimemodule.c"
        var $37=$today; //@line 2594 "datetimemodule.c"
        var $38=$week1_monday; //@line 2594 "datetimemodule.c"
        var $39=($37) - ($38); //@line 2594 "datetimemodule.c"
        var $40=_divmod($39, 7, $day); //@line 2594 "datetimemodule.c"
        $week=$40; //@line 2594 "datetimemodule.c"
        __label__ = 5; break; //@line 2594 "datetimemodule.c"
      case 2: // $bb1
        var $41=$week; //@line 2596 "datetimemodule.c"
        var $42=($41) > 51; //@line 2596 "datetimemodule.c"
        if ($42) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2596 "datetimemodule.c"
      case 3: // $bb2
        var $43=$year; //@line 2596 "datetimemodule.c"
        var $44=($43) + 1; //@line 2596 "datetimemodule.c"
        var $45=_iso_week1_monday($44); //@line 2596 "datetimemodule.c"
        var $46=$today; //@line 2596 "datetimemodule.c"
        var $47=($45) <= ($46); //@line 2596 "datetimemodule.c"
        if ($47) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2596 "datetimemodule.c"
      case 4: // $bb3
        var $48=$year; //@line 2597 "datetimemodule.c"
        var $49=($48) + 1; //@line 2597 "datetimemodule.c"
        $year=$49; //@line 2597 "datetimemodule.c"
        $week=0; //@line 2598 "datetimemodule.c"
        __label__ = 5; break; //@line 2598 "datetimemodule.c"
      case 5: // $bb4
        var $50=HEAP[$day]; //@line 2600 "datetimemodule.c"
        var $51=($50) + 1; //@line 2600 "datetimemodule.c"
        var $52=$week; //@line 2600 "datetimemodule.c"
        var $53=($52) + 1; //@line 2600 "datetimemodule.c"
        var $54=$year; //@line 2600 "datetimemodule.c"
        var $55=__Py_BuildValue_SizeT(__str128, allocate([$54,0,0,0,$53,0,0,0,$51,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2600 "datetimemodule.c"
        $0=$55; //@line 2600 "datetimemodule.c"
        var $56=$0; //@line 2600 "datetimemodule.c"
        $retval=$56; //@line 2600 "datetimemodule.c"
        var $retval5=$retval; //@line 2600 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2600 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_richcompare($self, $other, $op) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $other_addr;
        var $op_addr;
        var $retval;
        var $0;
        var $diff;
        $self_addr=$self;
        $other_addr=$other;
        $op_addr=$op;
        $diff=42; //@line 2612 "datetimemodule.c"
        var $1=$other_addr; //@line 2614 "datetimemodule.c"
        var $2=$1+4; //@line 2614 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2614 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateType); //@line 2614 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2614 "datetimemodule.c"
      case 1: // $bb
        var $5=$other_addr; //@line 2614 "datetimemodule.c"
        var $6=$5+4; //@line 2614 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 2614 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateType); //@line 2614 "datetimemodule.c"
        var $9=($8)!=0; //@line 2614 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2614 "datetimemodule.c"
      case 2: // $bb1
        var $10=$other_addr; //@line 2615 "datetimemodule.c"
        var $11=$10; //@line 2615 "datetimemodule.c"
        var $12=$11+13; //@line 2615 "datetimemodule.c"
        var $13=$12; //@line 2615 "datetimemodule.c"
        var $14=$self_addr; //@line 2615 "datetimemodule.c"
        var $15=$14+13; //@line 2615 "datetimemodule.c"
        var $16=$15; //@line 2615 "datetimemodule.c"
        var $17=_memcmp($16, $13, 4); //@line 2615 "datetimemodule.c"
        $diff=$17; //@line 2615 "datetimemodule.c"
        __label__ = 8; break; //@line 2615 "datetimemodule.c"
      case 3: // $bb2
        var $18=$other_addr; //@line 2618 "datetimemodule.c"
        var $19=_PyObject_HasAttrString($18, __str149); //@line 2618 "datetimemodule.c"
        var $20=($19)!=0; //@line 2618 "datetimemodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2618 "datetimemodule.c"
      case 4: // $bb3
        var $21=HEAP[__Py_NotImplementedStruct]; //@line 2620 "datetimemodule.c"
        var $22=($21) + 1; //@line 2620 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$22; //@line 2620 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 2621 "datetimemodule.c"
        __label__ = 9; break; //@line 2621 "datetimemodule.c"
      case 5: // $bb4
        var $23=$op_addr; //@line 2623 "datetimemodule.c"
        var $24=($23)==2; //@line 2623 "datetimemodule.c"
        var $25=$op_addr; //@line 2623 "datetimemodule.c"
        var $26=($25)==3; //@line 2623 "datetimemodule.c"
        var $or_cond=($24) | ($26);
        if ($or_cond) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2623 "datetimemodule.c"
      case 6: // $bb6
        $diff=1; //@line 2624 "datetimemodule.c"
        __label__ = 8; break; //@line 2624 "datetimemodule.c"
      case 7: // $bb7
        var $27=$self_addr; //@line 2627 "datetimemodule.c"
        var $28=$27; //@line 2627 "datetimemodule.c"
        var $29=$other_addr; //@line 2627 "datetimemodule.c"
        var $30=_cmperror($28, $29); //@line 2627 "datetimemodule.c"
        $0=$30; //@line 2627 "datetimemodule.c"
        __label__ = 9; break; //@line 2627 "datetimemodule.c"
      case 8: // $bb8
        var $31=$diff; //@line 2629 "datetimemodule.c"
        var $32=$op_addr; //@line 2629 "datetimemodule.c"
        var $33=_diff_to_bool($31, $32); //@line 2629 "datetimemodule.c"
        $0=$33; //@line 2629 "datetimemodule.c"
        __label__ = 9; break; //@line 2629 "datetimemodule.c"
      case 9: // $bb9
        var $34=$0; //@line 2621 "datetimemodule.c"
        $retval=$34; //@line 2621 "datetimemodule.c"
        var $retval10=$retval; //@line 2621 "datetimemodule.c"
        ;
        return $retval10; //@line 2621 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_timetuple($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2635 "datetimemodule.c"
    var $2=$1+13; //@line 2635 "datetimemodule.c"
    var $3=$2+3; //@line 2635 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2635 "datetimemodule.c"
    var $5=($4); //@line 2635 "datetimemodule.c"
    var $6=$self_addr; //@line 2635 "datetimemodule.c"
    var $7=$6+13; //@line 2635 "datetimemodule.c"
    var $8=$7+2; //@line 2635 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 2635 "datetimemodule.c"
    var $10=($9); //@line 2635 "datetimemodule.c"
    var $11=$self_addr; //@line 2635 "datetimemodule.c"
    var $12=$11+13; //@line 2635 "datetimemodule.c"
    var $13=$12; //@line 2635 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 2635 "datetimemodule.c"
    var $15=($14); //@line 2635 "datetimemodule.c"
    var $16=($15) << 8; //@line 2635 "datetimemodule.c"
    var $17=$self_addr; //@line 2635 "datetimemodule.c"
    var $18=$17+13; //@line 2635 "datetimemodule.c"
    var $19=$18+1; //@line 2635 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 2635 "datetimemodule.c"
    var $21=($20); //@line 2635 "datetimemodule.c"
    var $22=($21) | ($16); //@line 2635 "datetimemodule.c"
    var $23=_build_struct_time($22, $10, $5, 0, 0, 0, -1); //@line 2635 "datetimemodule.c"
    $0=$23; //@line 2635 "datetimemodule.c"
    var $24=$0; //@line 2635 "datetimemodule.c"
    $retval=$24; //@line 2635 "datetimemodule.c"
    var $retval1=$retval; //@line 2635 "datetimemodule.c"
    ;
    return $retval1; //@line 2635 "datetimemodule.c"
  }
  

  function _date_replace($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $clone;
        var $tuple;
        var $year=__stackBase__;
        var $month=__stackBase__+4;
        var $day=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$self_addr; //@line 2646 "datetimemodule.c"
        var $2=$1+13; //@line 2646 "datetimemodule.c"
        var $3=$2; //@line 2646 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 2646 "datetimemodule.c"
        var $5=($4); //@line 2646 "datetimemodule.c"
        var $6=($5) << 8; //@line 2646 "datetimemodule.c"
        var $7=$self_addr; //@line 2646 "datetimemodule.c"
        var $8=$7+13; //@line 2646 "datetimemodule.c"
        var $9=$8+1; //@line 2646 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 2646 "datetimemodule.c"
        var $11=($10); //@line 2646 "datetimemodule.c"
        var $12=($11) | ($6); //@line 2646 "datetimemodule.c"
        HEAP[$year]=$12; //@line 2646 "datetimemodule.c"
        var $13=$self_addr; //@line 2647 "datetimemodule.c"
        var $14=$13+13; //@line 2647 "datetimemodule.c"
        var $15=$14+2; //@line 2647 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 2647 "datetimemodule.c"
        var $17=($16); //@line 2647 "datetimemodule.c"
        HEAP[$month]=$17; //@line 2647 "datetimemodule.c"
        var $18=$self_addr; //@line 2648 "datetimemodule.c"
        var $19=$18+13; //@line 2648 "datetimemodule.c"
        var $20=$19+3; //@line 2648 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 2648 "datetimemodule.c"
        var $22=($21); //@line 2648 "datetimemodule.c"
        HEAP[$day]=$22; //@line 2648 "datetimemodule.c"
        var $23=$args_addr; //@line 2650 "datetimemodule.c"
        var $24=$kw_addr; //@line 2650 "datetimemodule.c"
        var $25=__PyArg_ParseTupleAndKeywords_SizeT($23, $24, __str152, _date_kws, allocate([$year,0,0,0,$month,0,0,0,$day,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2650 "datetimemodule.c"
        var $26=($25)==0; //@line 2650 "datetimemodule.c"
        if ($26) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2650 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2652 "datetimemodule.c"
        __label__ = 7; break; //@line 2652 "datetimemodule.c"
      case 2: // $bb1
        var $27=HEAP[$day]; //@line 2653 "datetimemodule.c"
        var $28=HEAP[$month]; //@line 2653 "datetimemodule.c"
        var $29=HEAP[$year]; //@line 2653 "datetimemodule.c"
        var $30=__Py_BuildValue_SizeT(__str128, allocate([$29,0,0,0,$28,0,0,0,$27,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2653 "datetimemodule.c"
        $tuple=$30; //@line 2653 "datetimemodule.c"
        var $31=$tuple; //@line 2654 "datetimemodule.c"
        var $32=($31)==0; //@line 2654 "datetimemodule.c"
        if ($32) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2654 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 2655 "datetimemodule.c"
        __label__ = 7; break; //@line 2655 "datetimemodule.c"
      case 4: // $bb3
        var $33=$self_addr; //@line 2656 "datetimemodule.c"
        var $34=$33; //@line 2656 "datetimemodule.c"
        var $35=$34+4; //@line 2656 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 2656 "datetimemodule.c"
        var $37=$tuple; //@line 2656 "datetimemodule.c"
        var $38=_date_new($36, $37, 0); //@line 2656 "datetimemodule.c"
        $clone=$38; //@line 2656 "datetimemodule.c"
        var $39=$tuple; //@line 2657 "datetimemodule.c"
        var $40=$39; //@line 2657 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 2657 "datetimemodule.c"
        var $42=($41) - 1; //@line 2657 "datetimemodule.c"
        var $43=$tuple; //@line 2657 "datetimemodule.c"
        var $44=$43; //@line 2657 "datetimemodule.c"
        HEAP[$44]=$42; //@line 2657 "datetimemodule.c"
        var $45=$tuple; //@line 2657 "datetimemodule.c"
        var $46=$45; //@line 2657 "datetimemodule.c"
        var $47=HEAP[$46]; //@line 2657 "datetimemodule.c"
        var $48=($47)==0; //@line 2657 "datetimemodule.c"
        if ($48) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2657 "datetimemodule.c"
      case 5: // $bb4
        var $49=$tuple; //@line 2657 "datetimemodule.c"
        var $50=$49+4; //@line 2657 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 2657 "datetimemodule.c"
        var $52=$51+24; //@line 2657 "datetimemodule.c"
        var $53=HEAP[$52]; //@line 2657 "datetimemodule.c"
        var $54=$tuple; //@line 2657 "datetimemodule.c"
        FUNCTION_TABLE[$53]($54); //@line 2657 "datetimemodule.c"
        __label__ = 6; break; //@line 2657 "datetimemodule.c"
      case 6: // $bb5
        var $55=$clone; //@line 2658 "datetimemodule.c"
        $0=$55; //@line 2658 "datetimemodule.c"
        __label__ = 7; break; //@line 2658 "datetimemodule.c"
      case 7: // $bb6
        var $56=$0; //@line 2652 "datetimemodule.c"
        $retval=$56; //@line 2652 "datetimemodule.c"
        var $retval7=$retval; //@line 2652 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2652 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_hash($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $temp;
        $self_addr=$self;
        var $1=$self_addr; //@line 2666 "datetimemodule.c"
        var $2=$1+8; //@line 2666 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 2666 "datetimemodule.c"
        var $4=($3)==-1; //@line 2666 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 2666 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2667 "datetimemodule.c"
        var $6=_date_getstate($5); //@line 2667 "datetimemodule.c"
        $temp=$6; //@line 2667 "datetimemodule.c"
        var $7=$temp; //@line 2668 "datetimemodule.c"
        var $8=($7)!=0; //@line 2668 "datetimemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 2668 "datetimemodule.c"
      case 2: // $bb1
        var $9=$temp; //@line 2669 "datetimemodule.c"
        var $10=_PyObject_Hash($9); //@line 2669 "datetimemodule.c"
        var $11=$self_addr; //@line 2669 "datetimemodule.c"
        var $12=$11+8; //@line 2669 "datetimemodule.c"
        HEAP[$12]=$10; //@line 2669 "datetimemodule.c"
        var $13=$temp; //@line 2670 "datetimemodule.c"
        var $14=$13; //@line 2670 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 2670 "datetimemodule.c"
        var $16=($15) - 1; //@line 2670 "datetimemodule.c"
        var $17=$temp; //@line 2670 "datetimemodule.c"
        var $18=$17; //@line 2670 "datetimemodule.c"
        HEAP[$18]=$16; //@line 2670 "datetimemodule.c"
        var $19=$temp; //@line 2670 "datetimemodule.c"
        var $20=$19; //@line 2670 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 2670 "datetimemodule.c"
        var $22=($21)==0; //@line 2670 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2670 "datetimemodule.c"
      case 3: // $bb2
        var $23=$temp; //@line 2670 "datetimemodule.c"
        var $24=$23+4; //@line 2670 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 2670 "datetimemodule.c"
        var $26=$25+24; //@line 2670 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 2670 "datetimemodule.c"
        var $28=$temp; //@line 2670 "datetimemodule.c"
        FUNCTION_TABLE[$27]($28); //@line 2670 "datetimemodule.c"
        __label__ = 4; break; //@line 2670 "datetimemodule.c"
      case 4: // $bb3
        var $29=$self_addr; //@line 2673 "datetimemodule.c"
        var $30=$29+8; //@line 2673 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 2673 "datetimemodule.c"
        $0=$31; //@line 2673 "datetimemodule.c"
        var $32=$0; //@line 2673 "datetimemodule.c"
        $retval=$32; //@line 2673 "datetimemodule.c"
        var $retval4=$retval; //@line 2673 "datetimemodule.c"
        ;
        return $retval4; //@line 2673 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _date_toordinal($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2679 "datetimemodule.c"
    var $2=$1+13; //@line 2679 "datetimemodule.c"
    var $3=$2+3; //@line 2679 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2679 "datetimemodule.c"
    var $5=($4); //@line 2679 "datetimemodule.c"
    var $6=$self_addr; //@line 2679 "datetimemodule.c"
    var $7=$6+13; //@line 2679 "datetimemodule.c"
    var $8=$7+2; //@line 2679 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 2679 "datetimemodule.c"
    var $10=($9); //@line 2679 "datetimemodule.c"
    var $11=$self_addr; //@line 2679 "datetimemodule.c"
    var $12=$11+13; //@line 2679 "datetimemodule.c"
    var $13=$12; //@line 2679 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 2679 "datetimemodule.c"
    var $15=($14); //@line 2679 "datetimemodule.c"
    var $16=($15) << 8; //@line 2679 "datetimemodule.c"
    var $17=$self_addr; //@line 2679 "datetimemodule.c"
    var $18=$17+13; //@line 2679 "datetimemodule.c"
    var $19=$18+1; //@line 2679 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 2679 "datetimemodule.c"
    var $21=($20); //@line 2679 "datetimemodule.c"
    var $22=($21) | ($16); //@line 2679 "datetimemodule.c"
    var $23=_ymd_to_ord($22, $10, $5); //@line 2679 "datetimemodule.c"
    var $24=_PyInt_FromLong($23); //@line 2679 "datetimemodule.c"
    $0=$24; //@line 2679 "datetimemodule.c"
    var $25=$0; //@line 2679 "datetimemodule.c"
    $retval=$25; //@line 2679 "datetimemodule.c"
    var $retval1=$retval; //@line 2679 "datetimemodule.c"
    ;
    return $retval1; //@line 2679 "datetimemodule.c"
  }
  

  function _date_weekday($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    var $dow;
    $self_addr=$self;
    var $1=$self_addr; //@line 2686 "datetimemodule.c"
    var $2=$1+13; //@line 2686 "datetimemodule.c"
    var $3=$2+3; //@line 2686 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 2686 "datetimemodule.c"
    var $5=($4); //@line 2686 "datetimemodule.c"
    var $6=$self_addr; //@line 2686 "datetimemodule.c"
    var $7=$6+13; //@line 2686 "datetimemodule.c"
    var $8=$7+2; //@line 2686 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 2686 "datetimemodule.c"
    var $10=($9); //@line 2686 "datetimemodule.c"
    var $11=$self_addr; //@line 2686 "datetimemodule.c"
    var $12=$11+13; //@line 2686 "datetimemodule.c"
    var $13=$12; //@line 2686 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 2686 "datetimemodule.c"
    var $15=($14); //@line 2686 "datetimemodule.c"
    var $16=($15) << 8; //@line 2686 "datetimemodule.c"
    var $17=$self_addr; //@line 2686 "datetimemodule.c"
    var $18=$17+13; //@line 2686 "datetimemodule.c"
    var $19=$18+1; //@line 2686 "datetimemodule.c"
    var $20=HEAP[$19]; //@line 2686 "datetimemodule.c"
    var $21=($20); //@line 2686 "datetimemodule.c"
    var $22=($21) | ($16); //@line 2686 "datetimemodule.c"
    var $23=_weekday($22, $10, $5); //@line 2686 "datetimemodule.c"
    $dow=$23; //@line 2686 "datetimemodule.c"
    var $24=$dow; //@line 2688 "datetimemodule.c"
    var $25=_PyInt_FromLong($24); //@line 2688 "datetimemodule.c"
    $0=$25; //@line 2688 "datetimemodule.c"
    var $26=$0; //@line 2688 "datetimemodule.c"
    $retval=$26; //@line 2688 "datetimemodule.c"
    var $retval1=$retval; //@line 2688 "datetimemodule.c"
    ;
    return $retval1; //@line 2688 "datetimemodule.c"
  }
  

  function _date_getstate($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 2697 "datetimemodule.c"
    var $2=$1+13; //@line 2697 "datetimemodule.c"
    var $3=$2; //@line 2697 "datetimemodule.c"
    var $4=_PyString_FromStringAndSize($3, 4); //@line 2697 "datetimemodule.c"
    var $5=__Py_BuildValue_SizeT(__str153, allocate([$4,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 2697 "datetimemodule.c"
    $0=$5; //@line 2697 "datetimemodule.c"
    var $6=$0; //@line 2697 "datetimemodule.c"
    $retval=$6; //@line 2697 "datetimemodule.c"
    var $retval1=$retval; //@line 2697 "datetimemodule.c"
    ;
    return $retval1; //@line 2697 "datetimemodule.c"
  }
  

  function _date_reduce($self, $arg) {
    ;
    var __label__;
  
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $arg_addr=$arg;
    var $1=$self_addr; //@line 2706 "datetimemodule.c"
    var $2=_date_getstate($1); //@line 2706 "datetimemodule.c"
    var $3=$self_addr; //@line 2706 "datetimemodule.c"
    var $4=$3; //@line 2706 "datetimemodule.c"
    var $5=$4+4; //@line 2706 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 2706 "datetimemodule.c"
    var $7=__Py_BuildValue_SizeT(__str154, allocate([$6,0,0,0,$2,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 2706 "datetimemodule.c"
    $0=$7; //@line 2706 "datetimemodule.c"
    var $8=$0; //@line 2706 "datetimemodule.c"
    $retval=$8; //@line 2706 "datetimemodule.c"
    var $retval1=$retval; //@line 2706 "datetimemodule.c"
    ;
    return $retval1; //@line 2706 "datetimemodule.c"
  }
  

  function _tzinfo_nogo($methodname) {
    ;
    var __label__;
  
    var $methodname_addr;
    var $retval;
    var $0;
    $methodname_addr=$methodname;
    var $1=HEAP[_PyExc_NotImplementedError]; //@line 2849 "datetimemodule.c"
    var $2=$methodname_addr; //@line 2849 "datetimemodule.c"
    var $3=_PyErr_Format($1, __str177, allocate([$2,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2849 "datetimemodule.c"
    $0=0; //@line 2852 "datetimemodule.c"
    var $4=$0; //@line 2852 "datetimemodule.c"
    $retval=$4; //@line 2852 "datetimemodule.c"
    var $retval1=$retval; //@line 2852 "datetimemodule.c"
    ;
    return $retval1; //@line 2852 "datetimemodule.c"
  }
  

  function _tzinfo_tzname($self, $dt) {
    ;
    var __label__;
  
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $dt_addr=$dt;
    var $1=_tzinfo_nogo(__str45); //@line 2860 "datetimemodule.c"
    $0=$1; //@line 2860 "datetimemodule.c"
    var $2=$0; //@line 2860 "datetimemodule.c"
    $retval=$2; //@line 2860 "datetimemodule.c"
    var $retval1=$retval; //@line 2860 "datetimemodule.c"
    ;
    return $retval1; //@line 2860 "datetimemodule.c"
  }
  

  function _tzinfo_utcoffset($self, $dt) {
    ;
    var __label__;
  
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $dt_addr=$dt;
    var $1=_tzinfo_nogo(__str42); //@line 2866 "datetimemodule.c"
    $0=$1; //@line 2866 "datetimemodule.c"
    var $2=$0; //@line 2866 "datetimemodule.c"
    $retval=$2; //@line 2866 "datetimemodule.c"
    var $retval1=$retval; //@line 2866 "datetimemodule.c"
    ;
    return $retval1; //@line 2866 "datetimemodule.c"
  }
  

  function _tzinfo_dst($self, $dt) {
    ;
    var __label__;
  
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $dt_addr=$dt;
    var $1=_tzinfo_nogo(__str44); //@line 2872 "datetimemodule.c"
    $0=$1; //@line 2872 "datetimemodule.c"
    var $2=$0; //@line 2872 "datetimemodule.c"
    $retval=$2; //@line 2872 "datetimemodule.c"
    var $retval1=$retval; //@line 2872 "datetimemodule.c"
    ;
    return $retval1; //@line 2872 "datetimemodule.c"
  }
  

  function _tzinfo_fromutc($self, $dt) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $dt_addr;
        var $retval;
        var $0;
        var $y=__stackBase__;
        var $m=__stackBase__+4;
        var $d=__stackBase__+8;
        var $hh=__stackBase__+12;
        var $mm=__stackBase__+16;
        var $ss=__stackBase__+20;
        var $us=__stackBase__+24;
        var $result;
        var $off;
        var $dst;
        var $none=__stackBase__+28;
        var $delta;
        $self_addr=$self;
        $dt_addr=$dt;
        var $1=$dt_addr; //@line 2885 "datetimemodule.c"
        var $2=$1; //@line 2885 "datetimemodule.c"
        var $3=$2+4; //@line 2885 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 2885 "datetimemodule.c"
        var $5=($4)!=(_PyDateTime_DateTimeType); //@line 2885 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2885 "datetimemodule.c"
      case 1: // $bb
        var $6=$dt_addr; //@line 2885 "datetimemodule.c"
        var $7=$6; //@line 2885 "datetimemodule.c"
        var $8=$7+4; //@line 2885 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 2885 "datetimemodule.c"
        var $10=_PyType_IsSubtype($9, _PyDateTime_DateTimeType); //@line 2885 "datetimemodule.c"
        var $11=($10)==0; //@line 2885 "datetimemodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2885 "datetimemodule.c"
      case 2: // $bb1
        var $12=HEAP[_PyExc_TypeError]; //@line 2886 "datetimemodule.c"
        _PyErr_SetString($12, __str178); //@line 2886 "datetimemodule.c"
        $0=0; //@line 2888 "datetimemodule.c"
        __label__ = 35; break; //@line 2888 "datetimemodule.c"
      case 3: // $bb2
        var $13=$dt_addr; //@line 2890 "datetimemodule.c"
        var $14=$13; //@line 2890 "datetimemodule.c"
        var $15=$14+12; //@line 2890 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 2890 "datetimemodule.c"
        var $17=($16)==0; //@line 2890 "datetimemodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2890 "datetimemodule.c"
      case 4: // $bb3
        var $18=$dt_addr; //@line 2890 "datetimemodule.c"
        var $19=$18+24; //@line 2890 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 2890 "datetimemodule.c"
        var $21=$self_addr; //@line 2890 "datetimemodule.c"
        var $22=($20)!=($21); //@line 2890 "datetimemodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2890 "datetimemodule.c"
      case 5: // $bb4
        var $23=HEAP[_PyExc_ValueError]; //@line 2891 "datetimemodule.c"
        _PyErr_SetString($23, __str179); //@line 2891 "datetimemodule.c"
        $0=0; //@line 2893 "datetimemodule.c"
        __label__ = 35; break; //@line 2893 "datetimemodule.c"
      case 6: // $bb5
        var $24=$dt_addr; //@line 2896 "datetimemodule.c"
        var $25=$24; //@line 2896 "datetimemodule.c"
        var $26=$dt_addr; //@line 2896 "datetimemodule.c"
        var $27=$26+24; //@line 2896 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 2896 "datetimemodule.c"
        var $29=_call_utcoffset($28, $25, $none); //@line 2896 "datetimemodule.c"
        $off=$29; //@line 2896 "datetimemodule.c"
        var $30=$off; //@line 2897 "datetimemodule.c"
        var $31=($30)==-1; //@line 2897 "datetimemodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2897 "datetimemodule.c"
      case 7: // $bb6
        var $32=_PyErr_Occurred(); //@line 2897 "datetimemodule.c"
        var $33=($32)!=0; //@line 2897 "datetimemodule.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2897 "datetimemodule.c"
      case 8: // $bb7
        $0=0; //@line 2898 "datetimemodule.c"
        __label__ = 35; break; //@line 2898 "datetimemodule.c"
      case 9: // $bb8
        var $34=HEAP[$none]; //@line 2899 "datetimemodule.c"
        var $35=($34)!=0; //@line 2899 "datetimemodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2899 "datetimemodule.c"
      case 10: // $bb9
        var $36=HEAP[_PyExc_ValueError]; //@line 2900 "datetimemodule.c"
        _PyErr_SetString($36, __str180); //@line 2900 "datetimemodule.c"
        $0=0; //@line 2902 "datetimemodule.c"
        __label__ = 35; break; //@line 2902 "datetimemodule.c"
      case 11: // $bb10
        var $37=$dt_addr; //@line 2905 "datetimemodule.c"
        var $38=$37; //@line 2905 "datetimemodule.c"
        var $39=$dt_addr; //@line 2905 "datetimemodule.c"
        var $40=$39+24; //@line 2905 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 2905 "datetimemodule.c"
        var $42=_call_dst($41, $38, $none); //@line 2905 "datetimemodule.c"
        $dst=$42; //@line 2905 "datetimemodule.c"
        var $43=$dst; //@line 2906 "datetimemodule.c"
        var $44=($43)==-1; //@line 2906 "datetimemodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2906 "datetimemodule.c"
      case 12: // $bb11
        var $45=_PyErr_Occurred(); //@line 2906 "datetimemodule.c"
        var $46=($45)!=0; //@line 2906 "datetimemodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2906 "datetimemodule.c"
      case 13: // $bb12
        $0=0; //@line 2907 "datetimemodule.c"
        __label__ = 35; break; //@line 2907 "datetimemodule.c"
      case 14: // $bb13
        var $47=HEAP[$none]; //@line 2908 "datetimemodule.c"
        var $48=($47)!=0; //@line 2908 "datetimemodule.c"
        if ($48) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2908 "datetimemodule.c"
      case 15: // $bb14
        var $49=HEAP[_PyExc_ValueError]; //@line 2909 "datetimemodule.c"
        _PyErr_SetString($49, __str181); //@line 2909 "datetimemodule.c"
        $0=0; //@line 2911 "datetimemodule.c"
        __label__ = 35; break; //@line 2911 "datetimemodule.c"
      case 16: // $bb15
        var $50=$dt_addr; //@line 2914 "datetimemodule.c"
        var $51=$50; //@line 2914 "datetimemodule.c"
        var $52=$51+13; //@line 2914 "datetimemodule.c"
        var $53=$52; //@line 2914 "datetimemodule.c"
        var $54=HEAP[$53]; //@line 2914 "datetimemodule.c"
        var $55=($54); //@line 2914 "datetimemodule.c"
        var $56=($55) << 8; //@line 2914 "datetimemodule.c"
        var $57=$dt_addr; //@line 2914 "datetimemodule.c"
        var $58=$57; //@line 2914 "datetimemodule.c"
        var $59=$58+13; //@line 2914 "datetimemodule.c"
        var $60=$59+1; //@line 2914 "datetimemodule.c"
        var $61=HEAP[$60]; //@line 2914 "datetimemodule.c"
        var $62=($61); //@line 2914 "datetimemodule.c"
        var $63=($62) | ($56); //@line 2914 "datetimemodule.c"
        HEAP[$y]=$63; //@line 2914 "datetimemodule.c"
        var $64=$dt_addr; //@line 2915 "datetimemodule.c"
        var $65=$64; //@line 2915 "datetimemodule.c"
        var $66=$65+13; //@line 2915 "datetimemodule.c"
        var $67=$66+2; //@line 2915 "datetimemodule.c"
        var $68=HEAP[$67]; //@line 2915 "datetimemodule.c"
        var $69=($68); //@line 2915 "datetimemodule.c"
        HEAP[$m]=$69; //@line 2915 "datetimemodule.c"
        var $70=$dt_addr; //@line 2916 "datetimemodule.c"
        var $71=$70; //@line 2916 "datetimemodule.c"
        var $72=$71+13; //@line 2916 "datetimemodule.c"
        var $73=$72+3; //@line 2916 "datetimemodule.c"
        var $74=HEAP[$73]; //@line 2916 "datetimemodule.c"
        var $75=($74); //@line 2916 "datetimemodule.c"
        HEAP[$d]=$75; //@line 2916 "datetimemodule.c"
        var $76=$dt_addr; //@line 2917 "datetimemodule.c"
        var $77=$76+13; //@line 2917 "datetimemodule.c"
        var $78=$77+4; //@line 2917 "datetimemodule.c"
        var $79=HEAP[$78]; //@line 2917 "datetimemodule.c"
        var $80=($79); //@line 2917 "datetimemodule.c"
        HEAP[$hh]=$80; //@line 2917 "datetimemodule.c"
        var $81=$dt_addr; //@line 2918 "datetimemodule.c"
        var $82=$81+13; //@line 2918 "datetimemodule.c"
        var $83=$82+5; //@line 2918 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 2918 "datetimemodule.c"
        var $85=($84); //@line 2918 "datetimemodule.c"
        HEAP[$mm]=$85; //@line 2918 "datetimemodule.c"
        var $86=$dt_addr; //@line 2919 "datetimemodule.c"
        var $87=$86+13; //@line 2919 "datetimemodule.c"
        var $88=$87+6; //@line 2919 "datetimemodule.c"
        var $89=HEAP[$88]; //@line 2919 "datetimemodule.c"
        var $90=($89); //@line 2919 "datetimemodule.c"
        HEAP[$ss]=$90; //@line 2919 "datetimemodule.c"
        var $91=$dt_addr; //@line 2920 "datetimemodule.c"
        var $92=$91+13; //@line 2920 "datetimemodule.c"
        var $93=$92+7; //@line 2920 "datetimemodule.c"
        var $94=HEAP[$93]; //@line 2920 "datetimemodule.c"
        var $95=($94); //@line 2920 "datetimemodule.c"
        var $96=($95) << 16; //@line 2920 "datetimemodule.c"
        var $97=$dt_addr; //@line 2920 "datetimemodule.c"
        var $98=$97+13; //@line 2920 "datetimemodule.c"
        var $99=$98+8; //@line 2920 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 2920 "datetimemodule.c"
        var $101=($100); //@line 2920 "datetimemodule.c"
        var $102=($101) << 8; //@line 2920 "datetimemodule.c"
        var $103=$dt_addr; //@line 2920 "datetimemodule.c"
        var $104=$103+13; //@line 2920 "datetimemodule.c"
        var $105=$104+9; //@line 2920 "datetimemodule.c"
        var $106=HEAP[$105]; //@line 2920 "datetimemodule.c"
        var $107=($106); //@line 2920 "datetimemodule.c"
        var $108=($102) | ($96); //@line 2920 "datetimemodule.c"
        var $109=($108) | ($107); //@line 2920 "datetimemodule.c"
        HEAP[$us]=$109; //@line 2920 "datetimemodule.c"
        var $110=$off; //@line 2922 "datetimemodule.c"
        var $111=$dst; //@line 2922 "datetimemodule.c"
        var $112=($110) - ($111); //@line 2922 "datetimemodule.c"
        $delta=$112; //@line 2922 "datetimemodule.c"
        var $113=HEAP[$mm]; //@line 2923 "datetimemodule.c"
        var $114=$delta; //@line 2923 "datetimemodule.c"
        var $115=($114) + ($113); //@line 2923 "datetimemodule.c"
        HEAP[$mm]=$115; //@line 2923 "datetimemodule.c"
        var $116=HEAP[$mm]; //@line 2924 "datetimemodule.c"
        var $117=($116) < 0; //@line 2924 "datetimemodule.c"
        var $118=HEAP[$mm]; //@line 2924 "datetimemodule.c"
        var $119=($118) > 59; //@line 2924 "datetimemodule.c"
        var $or_cond=($117) | ($119);
        if ($or_cond) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 2924 "datetimemodule.c"
      case 17: // $bb17
        var $120=_normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us); //@line 2924 "datetimemodule.c"
        var $121=($120) < 0; //@line 2924 "datetimemodule.c"
        if ($121) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2924 "datetimemodule.c"
      case 18: // $bb18
        $0=0; //@line 2926 "datetimemodule.c"
        __label__ = 35; break; //@line 2926 "datetimemodule.c"
      case 19: // $bb19
        var $122=$dt_addr; //@line 2927 "datetimemodule.c"
        var $123=$122+24; //@line 2927 "datetimemodule.c"
        var $124=HEAP[$123]; //@line 2927 "datetimemodule.c"
        var $125=HEAP[$us]; //@line 2927 "datetimemodule.c"
        var $126=HEAP[$ss]; //@line 2927 "datetimemodule.c"
        var $127=HEAP[$mm]; //@line 2927 "datetimemodule.c"
        var $128=HEAP[$hh]; //@line 2927 "datetimemodule.c"
        var $129=HEAP[$d]; //@line 2927 "datetimemodule.c"
        var $130=HEAP[$m]; //@line 2927 "datetimemodule.c"
        var $131=HEAP[$y]; //@line 2927 "datetimemodule.c"
        var $132=_new_datetime_ex($131, $130, $129, $128, $127, $126, $125, $124, _PyDateTime_DateTimeType); //@line 2927 "datetimemodule.c"
        $result=$132; //@line 2927 "datetimemodule.c"
        var $133=($132)==0; //@line 2928 "datetimemodule.c"
        if ($133) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2928 "datetimemodule.c"
      case 20: // $bb20
        var $134=$result; //@line 2929 "datetimemodule.c"
        $0=$134; //@line 2929 "datetimemodule.c"
        __label__ = 35; break; //@line 2929 "datetimemodule.c"
      case 21: // $bb21
        var $135=$dt_addr; //@line 2931 "datetimemodule.c"
        var $136=$135+24; //@line 2931 "datetimemodule.c"
        var $137=HEAP[$136]; //@line 2931 "datetimemodule.c"
        var $138=$result; //@line 2931 "datetimemodule.c"
        var $139=_call_dst($137, $138, $none); //@line 2931 "datetimemodule.c"
        $dst=$139; //@line 2931 "datetimemodule.c"
        var $140=$dst; //@line 2932 "datetimemodule.c"
        var $141=($140)==-1; //@line 2932 "datetimemodule.c"
        if ($141) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2932 "datetimemodule.c"
      case 22: // $bb22
        var $142=_PyErr_Occurred(); //@line 2932 "datetimemodule.c"
        var $143=($142)!=0; //@line 2932 "datetimemodule.c"
        if ($143) { __label__ = 32; break; } else { __label__ = 23; break; } //@line 2932 "datetimemodule.c"
      case 23: // $bb23
        var $144=HEAP[$none]; //@line 2934 "datetimemodule.c"
        var $145=($144)!=0; //@line 2934 "datetimemodule.c"
        if ($145) { __label__ = 31; break; } else { __label__ = 24; break; } //@line 2934 "datetimemodule.c"
      case 24: // $bb24
        var $146=$dst; //@line 2936 "datetimemodule.c"
        var $147=($146)==0; //@line 2936 "datetimemodule.c"
        if ($147) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2936 "datetimemodule.c"
      case 25: // $bb25
        var $148=$result; //@line 2937 "datetimemodule.c"
        $0=$148; //@line 2937 "datetimemodule.c"
        __label__ = 35; break; //@line 2937 "datetimemodule.c"
      case 26: // $bb26
        var $149=HEAP[$mm]; //@line 2939 "datetimemodule.c"
        var $150=$dst; //@line 2939 "datetimemodule.c"
        var $151=($150) + ($149); //@line 2939 "datetimemodule.c"
        HEAP[$mm]=$151; //@line 2939 "datetimemodule.c"
        var $152=HEAP[$mm]; //@line 2940 "datetimemodule.c"
        var $153=($152) < 0; //@line 2940 "datetimemodule.c"
        var $154=HEAP[$mm]; //@line 2940 "datetimemodule.c"
        var $155=($154) > 59; //@line 2940 "datetimemodule.c"
        var $or_cond3=($153) | ($155);
        if ($or_cond3) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 2940 "datetimemodule.c"
      case 27: // $bb28
        var $156=_normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us); //@line 2940 "datetimemodule.c"
        var $157=($156) < 0; //@line 2940 "datetimemodule.c"
        if ($157) { __label__ = 32; break; } else { __label__ = 28; break; } //@line 2940 "datetimemodule.c"
      case 28: // $bb29
        var $158=$result; //@line 2943 "datetimemodule.c"
        var $159=$158; //@line 2943 "datetimemodule.c"
        var $160=HEAP[$159]; //@line 2943 "datetimemodule.c"
        var $161=($160) - 1; //@line 2943 "datetimemodule.c"
        var $162=$result; //@line 2943 "datetimemodule.c"
        var $163=$162; //@line 2943 "datetimemodule.c"
        HEAP[$163]=$161; //@line 2943 "datetimemodule.c"
        var $164=$result; //@line 2943 "datetimemodule.c"
        var $165=$164; //@line 2943 "datetimemodule.c"
        var $166=HEAP[$165]; //@line 2943 "datetimemodule.c"
        var $167=($166)==0; //@line 2943 "datetimemodule.c"
        if ($167) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2943 "datetimemodule.c"
      case 29: // $bb30
        var $168=$result; //@line 2943 "datetimemodule.c"
        var $169=$168+4; //@line 2943 "datetimemodule.c"
        var $170=HEAP[$169]; //@line 2943 "datetimemodule.c"
        var $171=$170+24; //@line 2943 "datetimemodule.c"
        var $172=HEAP[$171]; //@line 2943 "datetimemodule.c"
        var $173=$result; //@line 2943 "datetimemodule.c"
        FUNCTION_TABLE[$172]($173); //@line 2943 "datetimemodule.c"
        __label__ = 30; break; //@line 2943 "datetimemodule.c"
      case 30: // $bb31
        var $174=$dt_addr; //@line 2944 "datetimemodule.c"
        var $175=$174+24; //@line 2944 "datetimemodule.c"
        var $176=HEAP[$175]; //@line 2944 "datetimemodule.c"
        var $177=HEAP[$us]; //@line 2944 "datetimemodule.c"
        var $178=HEAP[$ss]; //@line 2944 "datetimemodule.c"
        var $179=HEAP[$mm]; //@line 2944 "datetimemodule.c"
        var $180=HEAP[$hh]; //@line 2944 "datetimemodule.c"
        var $181=HEAP[$d]; //@line 2944 "datetimemodule.c"
        var $182=HEAP[$m]; //@line 2944 "datetimemodule.c"
        var $183=HEAP[$y]; //@line 2944 "datetimemodule.c"
        var $184=_new_datetime_ex($183, $182, $181, $180, $179, $178, $177, $176, _PyDateTime_DateTimeType); //@line 2944 "datetimemodule.c"
        $result=$184; //@line 2944 "datetimemodule.c"
        var $185=$result; //@line 2945 "datetimemodule.c"
        $0=$185; //@line 2945 "datetimemodule.c"
        __label__ = 35; break; //@line 2945 "datetimemodule.c"
      case 31: // $Inconsistent
        var $186=HEAP[_PyExc_ValueError]; //@line 2948 "datetimemodule.c"
        _PyErr_SetString($186, __str182); //@line 2948 "datetimemodule.c"
        __label__ = 32; break; //@line 2952 "datetimemodule.c"
      case 32: // $Fail
        var $187=$result; //@line 2953 "datetimemodule.c"
        var $188=$187; //@line 2953 "datetimemodule.c"
        var $189=HEAP[$188]; //@line 2953 "datetimemodule.c"
        var $190=($189) - 1; //@line 2953 "datetimemodule.c"
        var $191=$result; //@line 2953 "datetimemodule.c"
        var $192=$191; //@line 2953 "datetimemodule.c"
        HEAP[$192]=$190; //@line 2953 "datetimemodule.c"
        var $193=$result; //@line 2953 "datetimemodule.c"
        var $194=$193; //@line 2953 "datetimemodule.c"
        var $195=HEAP[$194]; //@line 2953 "datetimemodule.c"
        var $196=($195)==0; //@line 2953 "datetimemodule.c"
        if ($196) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 2953 "datetimemodule.c"
      case 33: // $bb32
        var $197=$result; //@line 2953 "datetimemodule.c"
        var $198=$197+4; //@line 2953 "datetimemodule.c"
        var $199=HEAP[$198]; //@line 2953 "datetimemodule.c"
        var $200=$199+24; //@line 2953 "datetimemodule.c"
        var $201=HEAP[$200]; //@line 2953 "datetimemodule.c"
        var $202=$result; //@line 2953 "datetimemodule.c"
        FUNCTION_TABLE[$201]($202); //@line 2953 "datetimemodule.c"
        __label__ = 34; break; //@line 2953 "datetimemodule.c"
      case 34: // $bb33
        $0=0; //@line 2954 "datetimemodule.c"
        __label__ = 35; break; //@line 2954 "datetimemodule.c"
      case 35: // $bb34
        var $203=$0; //@line 2888 "datetimemodule.c"
        $retval=$203; //@line 2888 "datetimemodule.c"
        var $retval35=$retval; //@line 2888 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 2888 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tzinfo_reduce($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $args;
        var $state;
        var $tmp;
        var $getinitargs;
        var $getstate;
        var $dictptr;
        $self_addr=$self;
        var $1=_PyTuple_New(0); //@line 2968 "datetimemodule.c"
        $tmp=$1; //@line 2968 "datetimemodule.c"
        var $2=$tmp; //@line 2969 "datetimemodule.c"
        var $3=($2)==0; //@line 2969 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2969 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 2970 "datetimemodule.c"
        __label__ = 31; break; //@line 2970 "datetimemodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 2972 "datetimemodule.c"
        var $5=_PyObject_GetAttrString($4, __str183); //@line 2972 "datetimemodule.c"
        $getinitargs=$5; //@line 2972 "datetimemodule.c"
        var $6=$getinitargs; //@line 2973 "datetimemodule.c"
        var $7=($6)!=0; //@line 2973 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 2973 "datetimemodule.c"
      case 3: // $bb2
        var $8=$getinitargs; //@line 2974 "datetimemodule.c"
        var $9=$tmp; //@line 2974 "datetimemodule.c"
        var $10=_PyObject_CallObject($8, $9); //@line 2974 "datetimemodule.c"
        $args=$10; //@line 2974 "datetimemodule.c"
        var $11=$getinitargs; //@line 2975 "datetimemodule.c"
        var $12=$11; //@line 2975 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 2975 "datetimemodule.c"
        var $14=($13) - 1; //@line 2975 "datetimemodule.c"
        var $15=$getinitargs; //@line 2975 "datetimemodule.c"
        var $16=$15; //@line 2975 "datetimemodule.c"
        HEAP[$16]=$14; //@line 2975 "datetimemodule.c"
        var $17=$getinitargs; //@line 2975 "datetimemodule.c"
        var $18=$17; //@line 2975 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 2975 "datetimemodule.c"
        var $20=($19)==0; //@line 2975 "datetimemodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2975 "datetimemodule.c"
      case 4: // $bb3
        var $21=$getinitargs; //@line 2975 "datetimemodule.c"
        var $22=$21+4; //@line 2975 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 2975 "datetimemodule.c"
        var $24=$23+24; //@line 2975 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 2975 "datetimemodule.c"
        var $26=$getinitargs; //@line 2975 "datetimemodule.c"
        FUNCTION_TABLE[$25]($26); //@line 2975 "datetimemodule.c"
        __label__ = 5; break; //@line 2975 "datetimemodule.c"
      case 5: // $bb4
        var $27=$args; //@line 2976 "datetimemodule.c"
        var $28=($27)==0; //@line 2976 "datetimemodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 2976 "datetimemodule.c"
      case 6: // $bb5
        var $29=$tmp; //@line 2977 "datetimemodule.c"
        var $30=$29; //@line 2977 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 2977 "datetimemodule.c"
        var $32=($31) - 1; //@line 2977 "datetimemodule.c"
        var $33=$tmp; //@line 2977 "datetimemodule.c"
        var $34=$33; //@line 2977 "datetimemodule.c"
        HEAP[$34]=$32; //@line 2977 "datetimemodule.c"
        var $35=$tmp; //@line 2977 "datetimemodule.c"
        var $36=$35; //@line 2977 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 2977 "datetimemodule.c"
        var $38=($37)==0; //@line 2977 "datetimemodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2977 "datetimemodule.c"
      case 7: // $bb6
        var $39=$tmp; //@line 2977 "datetimemodule.c"
        var $40=$39+4; //@line 2977 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 2977 "datetimemodule.c"
        var $42=$41+24; //@line 2977 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 2977 "datetimemodule.c"
        var $44=$tmp; //@line 2977 "datetimemodule.c"
        FUNCTION_TABLE[$43]($44); //@line 2977 "datetimemodule.c"
        __label__ = 8; break; //@line 2977 "datetimemodule.c"
      case 8: // $bb7
        $0=0; //@line 2978 "datetimemodule.c"
        __label__ = 31; break; //@line 2978 "datetimemodule.c"
      case 9: // $bb9
        _PyErr_Clear(); //@line 2982 "datetimemodule.c"
        var $45=$tmp; //@line 2983 "datetimemodule.c"
        $args=$45; //@line 2983 "datetimemodule.c"
        var $46=$args; //@line 2984 "datetimemodule.c"
        var $47=$46; //@line 2984 "datetimemodule.c"
        var $48=HEAP[$47]; //@line 2984 "datetimemodule.c"
        var $49=($48) + 1; //@line 2984 "datetimemodule.c"
        var $50=$args; //@line 2984 "datetimemodule.c"
        var $51=$50; //@line 2984 "datetimemodule.c"
        HEAP[$51]=$49; //@line 2984 "datetimemodule.c"
        __label__ = 10; break; //@line 2984 "datetimemodule.c"
      case 10: // $bb10
        var $52=$self_addr; //@line 2987 "datetimemodule.c"
        var $53=_PyObject_GetAttrString($52, __str184); //@line 2987 "datetimemodule.c"
        $getstate=$53; //@line 2987 "datetimemodule.c"
        var $54=($53)!=0; //@line 2988 "datetimemodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 2988 "datetimemodule.c"
      case 11: // $bb11
        var $55=$getstate; //@line 2989 "datetimemodule.c"
        var $56=$tmp; //@line 2989 "datetimemodule.c"
        var $57=_PyObject_CallObject($55, $56); //@line 2989 "datetimemodule.c"
        $state=$57; //@line 2989 "datetimemodule.c"
        var $58=$getstate; //@line 2990 "datetimemodule.c"
        var $59=$58; //@line 2990 "datetimemodule.c"
        var $60=HEAP[$59]; //@line 2990 "datetimemodule.c"
        var $61=($60) - 1; //@line 2990 "datetimemodule.c"
        var $62=$getstate; //@line 2990 "datetimemodule.c"
        var $63=$62; //@line 2990 "datetimemodule.c"
        HEAP[$63]=$61; //@line 2990 "datetimemodule.c"
        var $64=$getstate; //@line 2990 "datetimemodule.c"
        var $65=$64; //@line 2990 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 2990 "datetimemodule.c"
        var $67=($66)==0; //@line 2990 "datetimemodule.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2990 "datetimemodule.c"
      case 12: // $bb12
        var $68=$getstate; //@line 2990 "datetimemodule.c"
        var $69=$68+4; //@line 2990 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 2990 "datetimemodule.c"
        var $71=$70+24; //@line 2990 "datetimemodule.c"
        var $72=HEAP[$71]; //@line 2990 "datetimemodule.c"
        var $73=$getstate; //@line 2990 "datetimemodule.c"
        FUNCTION_TABLE[$72]($73); //@line 2990 "datetimemodule.c"
        __label__ = 13; break; //@line 2990 "datetimemodule.c"
      case 13: // $bb13
        var $74=$state; //@line 2991 "datetimemodule.c"
        var $75=($74)==0; //@line 2991 "datetimemodule.c"
        if ($75) { __label__ = 14; break; } else { __label__ = 24; break; } //@line 2991 "datetimemodule.c"
      case 14: // $bb14
        var $76=$args; //@line 2992 "datetimemodule.c"
        var $77=$76; //@line 2992 "datetimemodule.c"
        var $78=HEAP[$77]; //@line 2992 "datetimemodule.c"
        var $79=($78) - 1; //@line 2992 "datetimemodule.c"
        var $80=$args; //@line 2992 "datetimemodule.c"
        var $81=$80; //@line 2992 "datetimemodule.c"
        HEAP[$81]=$79; //@line 2992 "datetimemodule.c"
        var $82=$args; //@line 2992 "datetimemodule.c"
        var $83=$82; //@line 2992 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 2992 "datetimemodule.c"
        var $85=($84)==0; //@line 2992 "datetimemodule.c"
        if ($85) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2992 "datetimemodule.c"
      case 15: // $bb15
        var $86=$args; //@line 2992 "datetimemodule.c"
        var $87=$86+4; //@line 2992 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 2992 "datetimemodule.c"
        var $89=$88+24; //@line 2992 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 2992 "datetimemodule.c"
        var $91=$args; //@line 2992 "datetimemodule.c"
        FUNCTION_TABLE[$90]($91); //@line 2992 "datetimemodule.c"
        __label__ = 16; break; //@line 2992 "datetimemodule.c"
      case 16: // $bb16
        var $92=$tmp; //@line 2993 "datetimemodule.c"
        var $93=$92; //@line 2993 "datetimemodule.c"
        var $94=HEAP[$93]; //@line 2993 "datetimemodule.c"
        var $95=($94) - 1; //@line 2993 "datetimemodule.c"
        var $96=$tmp; //@line 2993 "datetimemodule.c"
        var $97=$96; //@line 2993 "datetimemodule.c"
        HEAP[$97]=$95; //@line 2993 "datetimemodule.c"
        var $98=$tmp; //@line 2993 "datetimemodule.c"
        var $99=$98; //@line 2993 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 2993 "datetimemodule.c"
        var $101=($100)==0; //@line 2993 "datetimemodule.c"
        if ($101) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2993 "datetimemodule.c"
      case 17: // $bb17
        var $102=$tmp; //@line 2993 "datetimemodule.c"
        var $103=$102+4; //@line 2993 "datetimemodule.c"
        var $104=HEAP[$103]; //@line 2993 "datetimemodule.c"
        var $105=$104+24; //@line 2993 "datetimemodule.c"
        var $106=HEAP[$105]; //@line 2993 "datetimemodule.c"
        var $107=$tmp; //@line 2993 "datetimemodule.c"
        FUNCTION_TABLE[$106]($107); //@line 2993 "datetimemodule.c"
        __label__ = 18; break; //@line 2993 "datetimemodule.c"
      case 18: // $bb18
        $0=0; //@line 2994 "datetimemodule.c"
        __label__ = 31; break; //@line 2994 "datetimemodule.c"
      case 19: // $bb20
        _PyErr_Clear(); //@line 2999 "datetimemodule.c"
        $state=__Py_NoneStruct; //@line 3000 "datetimemodule.c"
        var $108=$self_addr; //@line 3001 "datetimemodule.c"
        var $109=__PyObject_GetDictPtr($108); //@line 3001 "datetimemodule.c"
        $dictptr=$109; //@line 3001 "datetimemodule.c"
        var $110=$dictptr; //@line 3002 "datetimemodule.c"
        var $111=($110)!=0; //@line 3002 "datetimemodule.c"
        if ($111) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 3002 "datetimemodule.c"
      case 20: // $bb21
        var $112=$dictptr; //@line 3002 "datetimemodule.c"
        var $113=HEAP[$112]; //@line 3002 "datetimemodule.c"
        var $114=($113)!=0; //@line 3002 "datetimemodule.c"
        if ($114) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 3002 "datetimemodule.c"
      case 21: // $bb22
        var $115=$dictptr; //@line 3002 "datetimemodule.c"
        var $116=HEAP[$115]; //@line 3002 "datetimemodule.c"
        var $117=_PyDict_Size($116); //@line 3002 "datetimemodule.c"
        var $118=($117)!=0; //@line 3002 "datetimemodule.c"
        if ($118) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 3002 "datetimemodule.c"
      case 22: // $bb23
        var $119=$dictptr; //@line 3003 "datetimemodule.c"
        var $120=HEAP[$119]; //@line 3003 "datetimemodule.c"
        $state=$120; //@line 3003 "datetimemodule.c"
        __label__ = 23; break; //@line 3003 "datetimemodule.c"
      case 23: // $bb24
        var $121=$state; //@line 3004 "datetimemodule.c"
        var $122=$121; //@line 3004 "datetimemodule.c"
        var $123=HEAP[$122]; //@line 3004 "datetimemodule.c"
        var $124=($123) + 1; //@line 3004 "datetimemodule.c"
        var $125=$state; //@line 3004 "datetimemodule.c"
        var $126=$125; //@line 3004 "datetimemodule.c"
        HEAP[$126]=$124; //@line 3004 "datetimemodule.c"
        __label__ = 24; break; //@line 3004 "datetimemodule.c"
      case 24: // $bb25
        var $127=$tmp; //@line 3007 "datetimemodule.c"
        var $128=$127; //@line 3007 "datetimemodule.c"
        var $129=HEAP[$128]; //@line 3007 "datetimemodule.c"
        var $130=($129) - 1; //@line 3007 "datetimemodule.c"
        var $131=$tmp; //@line 3007 "datetimemodule.c"
        var $132=$131; //@line 3007 "datetimemodule.c"
        HEAP[$132]=$130; //@line 3007 "datetimemodule.c"
        var $133=$tmp; //@line 3007 "datetimemodule.c"
        var $134=$133; //@line 3007 "datetimemodule.c"
        var $135=HEAP[$134]; //@line 3007 "datetimemodule.c"
        var $136=($135)==0; //@line 3007 "datetimemodule.c"
        if ($136) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 3007 "datetimemodule.c"
      case 25: // $bb26
        var $137=$tmp; //@line 3007 "datetimemodule.c"
        var $138=$137+4; //@line 3007 "datetimemodule.c"
        var $139=HEAP[$138]; //@line 3007 "datetimemodule.c"
        var $140=$139+24; //@line 3007 "datetimemodule.c"
        var $141=HEAP[$140]; //@line 3007 "datetimemodule.c"
        var $142=$tmp; //@line 3007 "datetimemodule.c"
        FUNCTION_TABLE[$141]($142); //@line 3007 "datetimemodule.c"
        __label__ = 26; break; //@line 3007 "datetimemodule.c"
      case 26: // $bb27
        var $143=$state; //@line 3009 "datetimemodule.c"
        var $144=($143)==(__Py_NoneStruct); //@line 3009 "datetimemodule.c"
        if ($144) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 3009 "datetimemodule.c"
      case 27: // $bb28
        var $145=$state; //@line 3010 "datetimemodule.c"
        var $146=$145; //@line 3010 "datetimemodule.c"
        var $147=HEAP[$146]; //@line 3010 "datetimemodule.c"
        var $148=($147) - 1; //@line 3010 "datetimemodule.c"
        var $149=$state; //@line 3010 "datetimemodule.c"
        var $150=$149; //@line 3010 "datetimemodule.c"
        HEAP[$150]=$148; //@line 3010 "datetimemodule.c"
        var $151=$state; //@line 3010 "datetimemodule.c"
        var $152=$151; //@line 3010 "datetimemodule.c"
        var $153=HEAP[$152]; //@line 3010 "datetimemodule.c"
        var $154=($153)==0; //@line 3010 "datetimemodule.c"
        if ($154) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 3010 "datetimemodule.c"
      case 28: // $bb29
        var $155=$state; //@line 3010 "datetimemodule.c"
        var $156=$155+4; //@line 3010 "datetimemodule.c"
        var $157=HEAP[$156]; //@line 3010 "datetimemodule.c"
        var $158=$157+24; //@line 3010 "datetimemodule.c"
        var $159=HEAP[$158]; //@line 3010 "datetimemodule.c"
        var $160=$state; //@line 3010 "datetimemodule.c"
        FUNCTION_TABLE[$159]($160); //@line 3010 "datetimemodule.c"
        __label__ = 29; break; //@line 3010 "datetimemodule.c"
      case 29: // $bb30
        var $161=$self_addr; //@line 3011 "datetimemodule.c"
        var $162=$161+4; //@line 3011 "datetimemodule.c"
        var $163=HEAP[$162]; //@line 3011 "datetimemodule.c"
        var $164=$args; //@line 3011 "datetimemodule.c"
        var $165=__Py_BuildValue_SizeT(__str154, allocate([$163,0,0,0,$164,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3011 "datetimemodule.c"
        $0=$165; //@line 3011 "datetimemodule.c"
        __label__ = 31; break; //@line 3011 "datetimemodule.c"
      case 30: // $bb31
        var $166=$self_addr; //@line 3014 "datetimemodule.c"
        var $167=$166+4; //@line 3014 "datetimemodule.c"
        var $168=HEAP[$167]; //@line 3014 "datetimemodule.c"
        var $169=$args; //@line 3014 "datetimemodule.c"
        var $170=$state; //@line 3014 "datetimemodule.c"
        var $171=__Py_BuildValue_SizeT(__str185, allocate([$168,0,0,0,$169,0,0,0,$170,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3014 "datetimemodule.c"
        $0=$171; //@line 3014 "datetimemodule.c"
        __label__ = 31; break; //@line 3014 "datetimemodule.c"
      case 31: // $bb32
        var $172=$0; //@line 2970 "datetimemodule.c"
        $retval=$172; //@line 2970 "datetimemodule.c"
        var $retval33=$retval; //@line 2970 "datetimemodule.c"
        ;
        return $retval33; //@line 2970 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_hour($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3095 "datetimemodule.c"
    var $2=$1+13; //@line 3095 "datetimemodule.c"
    var $3=$2; //@line 3095 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3095 "datetimemodule.c"
    var $5=($4); //@line 3095 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3095 "datetimemodule.c"
    $0=$6; //@line 3095 "datetimemodule.c"
    var $7=$0; //@line 3095 "datetimemodule.c"
    $retval=$7; //@line 3095 "datetimemodule.c"
    var $retval1=$retval; //@line 3095 "datetimemodule.c"
    ;
    return $retval1; //@line 3095 "datetimemodule.c"
  }
  

  function _time_minute($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3101 "datetimemodule.c"
    var $2=$1+13; //@line 3101 "datetimemodule.c"
    var $3=$2+1; //@line 3101 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3101 "datetimemodule.c"
    var $5=($4); //@line 3101 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3101 "datetimemodule.c"
    $0=$6; //@line 3101 "datetimemodule.c"
    var $7=$0; //@line 3101 "datetimemodule.c"
    $retval=$7; //@line 3101 "datetimemodule.c"
    var $retval1=$retval; //@line 3101 "datetimemodule.c"
    ;
    return $retval1; //@line 3101 "datetimemodule.c"
  }
  

  function _py_time_second($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3108 "datetimemodule.c"
    var $2=$1+13; //@line 3108 "datetimemodule.c"
    var $3=$2+2; //@line 3108 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3108 "datetimemodule.c"
    var $5=($4); //@line 3108 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3108 "datetimemodule.c"
    $0=$6; //@line 3108 "datetimemodule.c"
    var $7=$0; //@line 3108 "datetimemodule.c"
    $retval=$7; //@line 3108 "datetimemodule.c"
    var $retval1=$retval; //@line 3108 "datetimemodule.c"
    ;
    return $retval1; //@line 3108 "datetimemodule.c"
  }
  

  function _time_microsecond($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3114 "datetimemodule.c"
    var $2=$1+13; //@line 3114 "datetimemodule.c"
    var $3=$2+3; //@line 3114 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3114 "datetimemodule.c"
    var $5=($4); //@line 3114 "datetimemodule.c"
    var $6=($5) << 16; //@line 3114 "datetimemodule.c"
    var $7=$self_addr; //@line 3114 "datetimemodule.c"
    var $8=$7+13; //@line 3114 "datetimemodule.c"
    var $9=$8+4; //@line 3114 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 3114 "datetimemodule.c"
    var $11=($10); //@line 3114 "datetimemodule.c"
    var $12=($11) << 8; //@line 3114 "datetimemodule.c"
    var $13=$self_addr; //@line 3114 "datetimemodule.c"
    var $14=$13+13; //@line 3114 "datetimemodule.c"
    var $15=$14+5; //@line 3114 "datetimemodule.c"
    var $16=HEAP[$15]; //@line 3114 "datetimemodule.c"
    var $17=($16); //@line 3114 "datetimemodule.c"
    var $18=($12) | ($6); //@line 3114 "datetimemodule.c"
    var $19=($18) | ($17); //@line 3114 "datetimemodule.c"
    var $20=_PyInt_FromLong($19); //@line 3114 "datetimemodule.c"
    $0=$20; //@line 3114 "datetimemodule.c"
    var $21=$0; //@line 3114 "datetimemodule.c"
    $retval=$21; //@line 3114 "datetimemodule.c"
    var $retval1=$retval; //@line 3114 "datetimemodule.c"
    ;
    return $retval1; //@line 3114 "datetimemodule.c"
  }
  

  function _time_tzinfo($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $iftmp_259;
        var $result;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 3120 "datetimemodule.c"
        var $2=$1; //@line 3120 "datetimemodule.c"
        var $3=$2+12; //@line 3120 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3120 "datetimemodule.c"
        var $5=($4)!=0; //@line 3120 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3120 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3120 "datetimemodule.c"
        var $7=$6+20; //@line 3120 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3120 "datetimemodule.c"
        $iftmp_259=$8; //@line 3120 "datetimemodule.c"
        __label__ = 3; break; //@line 3120 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_259=__Py_NoneStruct; //@line 3120 "datetimemodule.c"
        __label__ = 3; break; //@line 3120 "datetimemodule.c"
      case 3: // $bb2
        var $9=$iftmp_259; //@line 3120 "datetimemodule.c"
        $result=$9; //@line 3120 "datetimemodule.c"
        var $10=$result; //@line 3121 "datetimemodule.c"
        var $11=$10; //@line 3121 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 3121 "datetimemodule.c"
        var $13=($12) + 1; //@line 3121 "datetimemodule.c"
        var $14=$result; //@line 3121 "datetimemodule.c"
        var $15=$14; //@line 3121 "datetimemodule.c"
        HEAP[$15]=$13; //@line 3121 "datetimemodule.c"
        var $16=$result; //@line 3122 "datetimemodule.c"
        $0=$16; //@line 3122 "datetimemodule.c"
        var $17=$0; //@line 3122 "datetimemodule.c"
        $retval=$17; //@line 3122 "datetimemodule.c"
        var $retval3=$retval; //@line 3122 "datetimemodule.c"
        ;
        return $retval3; //@line 3122 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_new($type, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $self;
        var $state;
        var $hour=__stackBase__;
        var $minute=__stackBase__+4;
        var $second=__stackBase__+8;
        var $usecond=__stackBase__+12;
        var $tzinfo=__stackBase__+16;
        var $me;
        var $aware;
        var $pdata;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        $self=0; //@line 3144 "datetimemodule.c"
        HEAP[$hour]=0; //@line 3146 "datetimemodule.c"
        HEAP[$minute]=0; //@line 3147 "datetimemodule.c"
        HEAP[$second]=0; //@line 3148 "datetimemodule.c"
        HEAP[$usecond]=0; //@line 3149 "datetimemodule.c"
        HEAP[$tzinfo]=__Py_NoneStruct; //@line 3150 "datetimemodule.c"
        var $1=$args_addr; //@line 3153 "datetimemodule.c"
        var $2=$1; //@line 3153 "datetimemodule.c"
        var $3=$2+8; //@line 3153 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3153 "datetimemodule.c"
        var $5=($4) > 0; //@line 3153 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 3153 "datetimemodule.c"
      case 1: // $bb
        var $6=$args_addr; //@line 3153 "datetimemodule.c"
        var $7=$6; //@line 3153 "datetimemodule.c"
        var $8=$7+8; //@line 3153 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 3153 "datetimemodule.c"
        var $10=($9) <= 2; //@line 3153 "datetimemodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 12; break; } //@line 3153 "datetimemodule.c"
      case 2: // $bb1
        var $11=$args_addr; //@line 3153 "datetimemodule.c"
        var $12=$11; //@line 3153 "datetimemodule.c"
        var $13=$12+12; //@line 3153 "datetimemodule.c"
        var $14=$13; //@line 3153 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 3153 "datetimemodule.c"
        $state=$15; //@line 3153 "datetimemodule.c"
        var $16=$state; //@line 3153 "datetimemodule.c"
        var $17=$16+4; //@line 3153 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 3153 "datetimemodule.c"
        var $19=$18+84; //@line 3153 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 3153 "datetimemodule.c"
        var $21=($20) & 134217728; //@line 3153 "datetimemodule.c"
        var $22=($21)!=0; //@line 3153 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 3153 "datetimemodule.c"
      case 3: // $bb2
        var $23=$state; //@line 3153 "datetimemodule.c"
        var $24=$23; //@line 3153 "datetimemodule.c"
        var $25=$24+8; //@line 3153 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 3153 "datetimemodule.c"
        var $27=($26)==6; //@line 3153 "datetimemodule.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 3153 "datetimemodule.c"
      case 4: // $bb3
        var $28=$state; //@line 3153 "datetimemodule.c"
        var $29=$28; //@line 3153 "datetimemodule.c"
        var $30=$29+20; //@line 3153 "datetimemodule.c"
        var $31=$30; //@line 3153 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 3153 "datetimemodule.c"
        var $33=($32) <= 23; //@line 3153 "datetimemodule.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 3153 "datetimemodule.c"
      case 5: // $bb4
        var $34=$args_addr; //@line 3162 "datetimemodule.c"
        var $35=$34; //@line 3162 "datetimemodule.c"
        var $36=$35+8; //@line 3162 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 3162 "datetimemodule.c"
        var $38=($37)==2; //@line 3162 "datetimemodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 3162 "datetimemodule.c"
      case 6: // $bb5
        var $39=$args_addr; //@line 3163 "datetimemodule.c"
        var $40=$39; //@line 3163 "datetimemodule.c"
        var $41=$40+12; //@line 3163 "datetimemodule.c"
        var $42=$41+4; //@line 3163 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 3163 "datetimemodule.c"
        HEAP[$tzinfo]=$43; //@line 3163 "datetimemodule.c"
        var $44=HEAP[$tzinfo]; //@line 3164 "datetimemodule.c"
        var $45=_check_tzinfo_subclass($44); //@line 3164 "datetimemodule.c"
        var $46=($45) < 0; //@line 3164 "datetimemodule.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3164 "datetimemodule.c"
      case 7: // $bb6
        var $47=HEAP[_PyExc_TypeError]; //@line 3165 "datetimemodule.c"
        _PyErr_SetString($47, __str197); //@line 3165 "datetimemodule.c"
        $0=0; //@line 3167 "datetimemodule.c"
        __label__ = 19; break; //@line 3167 "datetimemodule.c"
      case 8: // $bb7
        var $48=HEAP[$tzinfo]; //@line 3170 "datetimemodule.c"
        var $49=($48)!=(__Py_NoneStruct); //@line 3170 "datetimemodule.c"
        var $50=($49); //@line 3170 "datetimemodule.c"
        $aware=$50; //@line 3170 "datetimemodule.c"
        var $51=$type_addr; //@line 3171 "datetimemodule.c"
        var $52=$51+152; //@line 3171 "datetimemodule.c"
        var $53=HEAP[$52]; //@line 3171 "datetimemodule.c"
        var $54=$aware; //@line 3171 "datetimemodule.c"
        var $55=($54); //@line 3171 "datetimemodule.c"
        var $56=$type_addr; //@line 3171 "datetimemodule.c"
        var $57=FUNCTION_TABLE[$53]($56, $55); //@line 3171 "datetimemodule.c"
        var $58=$57; //@line 3171 "datetimemodule.c"
        $me=$58; //@line 3171 "datetimemodule.c"
        var $59=($58)!=0; //@line 3172 "datetimemodule.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 3172 "datetimemodule.c"
      case 9: // $bb8
        var $60=$state; //@line 3173 "datetimemodule.c"
        var $61=$60; //@line 3173 "datetimemodule.c"
        var $62=$61+20; //@line 3173 "datetimemodule.c"
        var $63=$62; //@line 3173 "datetimemodule.c"
        $pdata=$63; //@line 3173 "datetimemodule.c"
        var $64=$me; //@line 3175 "datetimemodule.c"
        var $65=$64+13; //@line 3175 "datetimemodule.c"
        var $66=$65; //@line 3175 "datetimemodule.c"
        var $67=$pdata; //@line 3175 "datetimemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($66, $67, 6, 1, 0); //@line 3175 "datetimemodule.c"
        var $68=$me; //@line 3176 "datetimemodule.c"
        var $69=$68+8; //@line 3176 "datetimemodule.c"
        HEAP[$69]=-1; //@line 3176 "datetimemodule.c"
        var $70=$me; //@line 3177 "datetimemodule.c"
        var $71=$70+12; //@line 3177 "datetimemodule.c"
        var $72=$aware; //@line 3177 "datetimemodule.c"
        HEAP[$71]=$72; //@line 3177 "datetimemodule.c"
        var $73=$aware; //@line 3178 "datetimemodule.c"
        var $74=($73)!=0; //@line 3178 "datetimemodule.c"
        if ($74) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3178 "datetimemodule.c"
      case 10: // $bb9
        var $75=HEAP[$tzinfo]; //@line 3179 "datetimemodule.c"
        var $76=$75; //@line 3179 "datetimemodule.c"
        var $77=HEAP[$76]; //@line 3179 "datetimemodule.c"
        var $78=($77) + 1; //@line 3179 "datetimemodule.c"
        var $79=$75; //@line 3179 "datetimemodule.c"
        HEAP[$79]=$78; //@line 3179 "datetimemodule.c"
        var $80=HEAP[$tzinfo]; //@line 3180 "datetimemodule.c"
        var $81=$me; //@line 3180 "datetimemodule.c"
        var $82=$81+20; //@line 3180 "datetimemodule.c"
        HEAP[$82]=$80; //@line 3180 "datetimemodule.c"
        __label__ = 11; break; //@line 3180 "datetimemodule.c"
      case 11: // $bb10
        var $83=$me; //@line 3183 "datetimemodule.c"
        var $84=$83; //@line 3183 "datetimemodule.c"
        $0=$84; //@line 3183 "datetimemodule.c"
        __label__ = 19; break; //@line 3183 "datetimemodule.c"
      case 12: // $bb11
        var $85=$args_addr; //@line 3186 "datetimemodule.c"
        var $86=$kw_addr; //@line 3186 "datetimemodule.c"
        var $87=__PyArg_ParseTupleAndKeywords_SizeT($85, $86, __str198, _time_kws, allocate([$hour,0,0,0,$minute,0,0,0,$second,0,0,0,$usecond,0,0,0,$tzinfo,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 3186 "datetimemodule.c"
        var $88=($87)!=0; //@line 3186 "datetimemodule.c"
        if ($88) { __label__ = 13; break; } else { __label__ = 18; break; } //@line 3186 "datetimemodule.c"
      case 13: // $bb12
        var $89=HEAP[$usecond]; //@line 3189 "datetimemodule.c"
        var $90=HEAP[$second]; //@line 3189 "datetimemodule.c"
        var $91=HEAP[$minute]; //@line 3189 "datetimemodule.c"
        var $92=HEAP[$hour]; //@line 3189 "datetimemodule.c"
        var $93=_check_time_args($92, $91, $90, $89); //@line 3189 "datetimemodule.c"
        var $94=($93) < 0; //@line 3189 "datetimemodule.c"
        if ($94) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3189 "datetimemodule.c"
      case 14: // $bb13
        $0=0; //@line 3190 "datetimemodule.c"
        __label__ = 19; break; //@line 3190 "datetimemodule.c"
      case 15: // $bb14
        var $95=HEAP[$tzinfo]; //@line 3191 "datetimemodule.c"
        var $96=_check_tzinfo_subclass($95); //@line 3191 "datetimemodule.c"
        var $97=($96) < 0; //@line 3191 "datetimemodule.c"
        if ($97) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3191 "datetimemodule.c"
      case 16: // $bb15
        $0=0; //@line 3192 "datetimemodule.c"
        __label__ = 19; break; //@line 3192 "datetimemodule.c"
      case 17: // $bb16
        var $98=HEAP[$tzinfo]; //@line 3193 "datetimemodule.c"
        var $99=HEAP[$usecond]; //@line 3193 "datetimemodule.c"
        var $100=HEAP[$second]; //@line 3193 "datetimemodule.c"
        var $101=HEAP[$minute]; //@line 3193 "datetimemodule.c"
        var $102=HEAP[$hour]; //@line 3193 "datetimemodule.c"
        var $103=$type_addr; //@line 3193 "datetimemodule.c"
        var $104=_new_time_ex($102, $101, $100, $99, $98, $103); //@line 3193 "datetimemodule.c"
        $self=$104; //@line 3193 "datetimemodule.c"
        __label__ = 18; break; //@line 3193 "datetimemodule.c"
      case 18: // $bb17
        var $105=$self; //@line 3196 "datetimemodule.c"
        $0=$105; //@line 3196 "datetimemodule.c"
        __label__ = 19; break; //@line 3196 "datetimemodule.c"
      case 19: // $bb18
        var $106=$0; //@line 3167 "datetimemodule.c"
        $retval=$106; //@line 3167 "datetimemodule.c"
        var $retval19=$retval; //@line 3167 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 3167 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 3206 "datetimemodule.c"
        var $1=$0; //@line 3206 "datetimemodule.c"
        var $2=$1+12; //@line 3206 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 3206 "datetimemodule.c"
        var $4=($3)!=0; //@line 3206 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 3206 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 3207 "datetimemodule.c"
        var $6=$5+20; //@line 3207 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 3207 "datetimemodule.c"
        var $8=($7)!=0; //@line 3207 "datetimemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 3207 "datetimemodule.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 3207 "datetimemodule.c"
        var $10=$9+20; //@line 3207 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 3207 "datetimemodule.c"
        var $12=$11; //@line 3207 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 3207 "datetimemodule.c"
        var $14=($13) - 1; //@line 3207 "datetimemodule.c"
        var $15=$11; //@line 3207 "datetimemodule.c"
        HEAP[$15]=$14; //@line 3207 "datetimemodule.c"
        var $16=$11; //@line 3207 "datetimemodule.c"
        var $17=HEAP[$16]; //@line 3207 "datetimemodule.c"
        var $18=($17)==0; //@line 3207 "datetimemodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3207 "datetimemodule.c"
      case 3: // $bb2
        var $19=$self_addr; //@line 3207 "datetimemodule.c"
        var $20=$19+20; //@line 3207 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 3207 "datetimemodule.c"
        var $22=$21+4; //@line 3207 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 3207 "datetimemodule.c"
        var $24=$23+24; //@line 3207 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3207 "datetimemodule.c"
        var $26=$self_addr; //@line 3207 "datetimemodule.c"
        var $27=$26+20; //@line 3207 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 3207 "datetimemodule.c"
        FUNCTION_TABLE[$25]($28); //@line 3207 "datetimemodule.c"
        __label__ = 4; break; //@line 3207 "datetimemodule.c"
      case 4: // $bb3
        var $29=$self_addr; //@line 3209 "datetimemodule.c"
        var $30=$29; //@line 3209 "datetimemodule.c"
        var $31=$30+4; //@line 3209 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 3209 "datetimemodule.c"
        var $33=$32+160; //@line 3209 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 3209 "datetimemodule.c"
        var $35=$self_addr; //@line 3209 "datetimemodule.c"
        var $36=$35; //@line 3209 "datetimemodule.c"
        FUNCTION_TABLE[$34]($36); //@line 3209 "datetimemodule.c"
        ;
        return; //@line 3210 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_utcoffset($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_286;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 3219 "datetimemodule.c"
        var $2=$1; //@line 3219 "datetimemodule.c"
        var $3=$2+12; //@line 3219 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3219 "datetimemodule.c"
        var $5=($4)!=0; //@line 3219 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3219 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3219 "datetimemodule.c"
        var $7=$6+20; //@line 3219 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3219 "datetimemodule.c"
        $iftmp_286=$8; //@line 3219 "datetimemodule.c"
        __label__ = 3; break; //@line 3219 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_286=__Py_NoneStruct; //@line 3219 "datetimemodule.c"
        __label__ = 3; break; //@line 3219 "datetimemodule.c"
      case 3: // $bb2
        var $9=$iftmp_286; //@line 3219 "datetimemodule.c"
        var $10=_offset_as_timedelta($9, __str42, __Py_NoneStruct); //@line 3219 "datetimemodule.c"
        $0=$10; //@line 3219 "datetimemodule.c"
        var $11=$0; //@line 3219 "datetimemodule.c"
        $retval=$11; //@line 3219 "datetimemodule.c"
        var $retval3=$retval; //@line 3219 "datetimemodule.c"
        ;
        return $retval3; //@line 3219 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_dst($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_288;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 3225 "datetimemodule.c"
        var $2=$1; //@line 3225 "datetimemodule.c"
        var $3=$2+12; //@line 3225 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3225 "datetimemodule.c"
        var $5=($4)!=0; //@line 3225 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3225 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3225 "datetimemodule.c"
        var $7=$6+20; //@line 3225 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3225 "datetimemodule.c"
        $iftmp_288=$8; //@line 3225 "datetimemodule.c"
        __label__ = 3; break; //@line 3225 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_288=__Py_NoneStruct; //@line 3225 "datetimemodule.c"
        __label__ = 3; break; //@line 3225 "datetimemodule.c"
      case 3: // $bb2
        var $9=$iftmp_288; //@line 3225 "datetimemodule.c"
        var $10=_offset_as_timedelta($9, __str44, __Py_NoneStruct); //@line 3225 "datetimemodule.c"
        $0=$10; //@line 3225 "datetimemodule.c"
        var $11=$0; //@line 3225 "datetimemodule.c"
        $retval=$11; //@line 3225 "datetimemodule.c"
        var $retval3=$retval; //@line 3225 "datetimemodule.c"
        ;
        return $retval3; //@line 3225 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_tzname($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_290;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 3231 "datetimemodule.c"
        var $2=$1; //@line 3231 "datetimemodule.c"
        var $3=$2+12; //@line 3231 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3231 "datetimemodule.c"
        var $5=($4)!=0; //@line 3231 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3231 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3231 "datetimemodule.c"
        var $7=$6+20; //@line 3231 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3231 "datetimemodule.c"
        $iftmp_290=$8; //@line 3231 "datetimemodule.c"
        __label__ = 3; break; //@line 3231 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_290=__Py_NoneStruct; //@line 3231 "datetimemodule.c"
        __label__ = 3; break; //@line 3231 "datetimemodule.c"
      case 3: // $bb2
        var $9=$iftmp_290; //@line 3231 "datetimemodule.c"
        var $10=_call_tzname($9, __Py_NoneStruct); //@line 3231 "datetimemodule.c"
        $0=$10; //@line 3231 "datetimemodule.c"
        var $11=$0; //@line 3231 "datetimemodule.c"
        $retval=$11; //@line 3231 "datetimemodule.c"
        var $retval3=$retval; //@line 3231 "datetimemodule.c"
        ;
        return $retval3; //@line 3231 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_repr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $buffer=__stackBase__;
        var $type_name;
        var $h;
        var $m;
        var $s;
        var $us;
        var $result;
        $self_addr=$self;
        var $1=$self_addr; //@line 3243 "datetimemodule.c"
        var $2=$1; //@line 3243 "datetimemodule.c"
        var $3=$2+4; //@line 3243 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3243 "datetimemodule.c"
        var $5=$4+12; //@line 3243 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 3243 "datetimemodule.c"
        $type_name=$6; //@line 3243 "datetimemodule.c"
        var $7=$self_addr; //@line 3244 "datetimemodule.c"
        var $8=$7+13; //@line 3244 "datetimemodule.c"
        var $9=$8; //@line 3244 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 3244 "datetimemodule.c"
        var $11=($10); //@line 3244 "datetimemodule.c"
        $h=$11; //@line 3244 "datetimemodule.c"
        var $12=$self_addr; //@line 3245 "datetimemodule.c"
        var $13=$12+13; //@line 3245 "datetimemodule.c"
        var $14=$13+1; //@line 3245 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 3245 "datetimemodule.c"
        var $16=($15); //@line 3245 "datetimemodule.c"
        $m=$16; //@line 3245 "datetimemodule.c"
        var $17=$self_addr; //@line 3246 "datetimemodule.c"
        var $18=$17+13; //@line 3246 "datetimemodule.c"
        var $19=$18+2; //@line 3246 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 3246 "datetimemodule.c"
        var $21=($20); //@line 3246 "datetimemodule.c"
        $s=$21; //@line 3246 "datetimemodule.c"
        var $22=$self_addr; //@line 3247 "datetimemodule.c"
        var $23=$22+13; //@line 3247 "datetimemodule.c"
        var $24=$23+3; //@line 3247 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3247 "datetimemodule.c"
        var $26=($25); //@line 3247 "datetimemodule.c"
        var $27=($26) << 16; //@line 3247 "datetimemodule.c"
        var $28=$self_addr; //@line 3247 "datetimemodule.c"
        var $29=$28+13; //@line 3247 "datetimemodule.c"
        var $30=$29+4; //@line 3247 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 3247 "datetimemodule.c"
        var $32=($31); //@line 3247 "datetimemodule.c"
        var $33=($32) << 8; //@line 3247 "datetimemodule.c"
        var $34=$self_addr; //@line 3247 "datetimemodule.c"
        var $35=$34+13; //@line 3247 "datetimemodule.c"
        var $36=$35+5; //@line 3247 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 3247 "datetimemodule.c"
        var $38=($37); //@line 3247 "datetimemodule.c"
        var $39=($33) | ($27); //@line 3247 "datetimemodule.c"
        var $40=($39) | ($38); //@line 3247 "datetimemodule.c"
        $us=$40; //@line 3247 "datetimemodule.c"
        $result=0; //@line 3248 "datetimemodule.c"
        var $41=$us; //@line 3250 "datetimemodule.c"
        var $42=($41)!=0; //@line 3250 "datetimemodule.c"
        if ($42) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3250 "datetimemodule.c"
      case 1: // $bb
        var $buffer1=$buffer; //@line 3251 "datetimemodule.c"
        var $43=$type_name; //@line 3251 "datetimemodule.c"
        var $44=$h; //@line 3251 "datetimemodule.c"
        var $45=$m; //@line 3251 "datetimemodule.c"
        var $46=$s; //@line 3251 "datetimemodule.c"
        var $47=$us; //@line 3251 "datetimemodule.c"
        var $48=_PyOS_snprintf($buffer1, 100, __str199, allocate([$43,0,0,0,$44,0,0,0,$45,0,0,0,$46,0,0,0,$47,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3251 "datetimemodule.c"
        __label__ = 5; break; //@line 3251 "datetimemodule.c"
      case 2: // $bb2
        var $49=$s; //@line 3253 "datetimemodule.c"
        var $50=($49)!=0; //@line 3253 "datetimemodule.c"
        var $buffer4=$buffer; //@line 3254 "datetimemodule.c"
        var $51=$type_name; //@line 3254 "datetimemodule.c"
        var $52=$h; //@line 3254 "datetimemodule.c"
        var $53=$m; //@line 3254 "datetimemodule.c"
        if ($50) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3253 "datetimemodule.c"
      case 3: // $bb3
        var $54=$s; //@line 3254 "datetimemodule.c"
        var $55=_PyOS_snprintf($buffer4, 100, __str121, allocate([$51,0,0,0,$52,0,0,0,$53,0,0,0,$54,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3254 "datetimemodule.c"
        __label__ = 5; break; //@line 3254 "datetimemodule.c"
      case 4: // $bb5
        var $56=_PyOS_snprintf($buffer4, 100, __str122, allocate([$51,0,0,0,$52,0,0,0,$53,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3257 "datetimemodule.c"
        __label__ = 5; break; //@line 3257 "datetimemodule.c"
      case 5: // $bb7
        var $buffer8=$buffer; //@line 3259 "datetimemodule.c"
        var $57=_PyString_FromString($buffer8); //@line 3259 "datetimemodule.c"
        $result=$57; //@line 3259 "datetimemodule.c"
        var $58=($57)!=0; //@line 3260 "datetimemodule.c"
        if ($58) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 3260 "datetimemodule.c"
      case 6: // $bb9
        var $59=$self_addr; //@line 3260 "datetimemodule.c"
        var $60=$59; //@line 3260 "datetimemodule.c"
        var $61=$60+12; //@line 3260 "datetimemodule.c"
        var $62=HEAP[$61]; //@line 3260 "datetimemodule.c"
        var $63=($62)!=0; //@line 3260 "datetimemodule.c"
        if ($63) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3260 "datetimemodule.c"
      case 7: // $bb10
        var $64=$self_addr; //@line 3261 "datetimemodule.c"
        var $65=$64+20; //@line 3261 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 3261 "datetimemodule.c"
        var $67=$result; //@line 3261 "datetimemodule.c"
        var $68=_append_keyword_tzinfo($67, $66); //@line 3261 "datetimemodule.c"
        $result=$68; //@line 3261 "datetimemodule.c"
        __label__ = 8; break; //@line 3261 "datetimemodule.c"
      case 8: // $bb11
        var $69=$result; //@line 3262 "datetimemodule.c"
        $0=$69; //@line 3262 "datetimemodule.c"
        var $70=$0; //@line 3262 "datetimemodule.c"
        $retval=$70; //@line 3262 "datetimemodule.c"
        var $retval12=$retval; //@line 3262 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3262 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_str($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 3268 "datetimemodule.c"
    var $2=$1; //@line 3268 "datetimemodule.c"
    var $3=__PyObject_CallMethod_SizeT($2, __str146, __str99, allocate(1, "i32", ALLOC_STACK)); //@line 3268 "datetimemodule.c"
    $0=$3; //@line 3268 "datetimemodule.c"
    var $4=$0; //@line 3268 "datetimemodule.c"
    $retval=$4; //@line 3268 "datetimemodule.c"
    var $retval1=$retval; //@line 3268 "datetimemodule.c"
    ;
    return $retval1; //@line 3268 "datetimemodule.c"
  }
  

  function _time_isoformat($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $result=__stackBase__+100;
        var $datetime=__stackBase__+104;
        var $pdatetime;
        $self_addr=$self;
        $unused_addr=$unused;
        $pdatetime=$datetime; //@line 3278 "datetimemodule.c"
        var $1=$self_addr; //@line 3281 "datetimemodule.c"
        var $2=$1+13; //@line 3281 "datetimemodule.c"
        var $3=$2; //@line 3281 "datetimemodule.c"
        var $4=$pdatetime; //@line 3281 "datetimemodule.c"
        var $5=$4+13; //@line 3281 "datetimemodule.c"
        var $6=$5; //@line 3281 "datetimemodule.c"
        var $7=$6+4; //@line 3281 "datetimemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($7, $3, 6, 1, 0); //@line 3281 "datetimemodule.c"
        var $8=$pdatetime; //@line 3285 "datetimemodule.c"
        var $buf1=$buf; //@line 3285 "datetimemodule.c"
        var $9=_isoformat_time($8, $buf1, 100); //@line 3285 "datetimemodule.c"
        var $buf2=$buf; //@line 3286 "datetimemodule.c"
        var $10=_PyString_FromString($buf2); //@line 3286 "datetimemodule.c"
        HEAP[$result]=$10; //@line 3286 "datetimemodule.c"
        var $11=HEAP[$result]; //@line 3287 "datetimemodule.c"
        var $12=($11)==0; //@line 3287 "datetimemodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 3287 "datetimemodule.c"
      case 1: // $bb
        var $13=$self_addr; //@line 3287 "datetimemodule.c"
        var $14=$13; //@line 3287 "datetimemodule.c"
        var $15=$14+12; //@line 3287 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 3287 "datetimemodule.c"
        var $17=($16)==0; //@line 3287 "datetimemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3287 "datetimemodule.c"
      case 2: // $bb3
        var $18=$self_addr; //@line 3287 "datetimemodule.c"
        var $19=$18+20; //@line 3287 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 3287 "datetimemodule.c"
        var $21=($20)==(__Py_NoneStruct); //@line 3287 "datetimemodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3287 "datetimemodule.c"
      case 3: // $bb4
        var $22=HEAP[$result]; //@line 3288 "datetimemodule.c"
        $0=$22; //@line 3288 "datetimemodule.c"
        __label__ = 9; break; //@line 3288 "datetimemodule.c"
      case 4: // $bb5
        var $23=$self_addr; //@line 3291 "datetimemodule.c"
        var $24=$23+20; //@line 3291 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3291 "datetimemodule.c"
        var $buf6=$buf; //@line 3291 "datetimemodule.c"
        var $26=_format_utcoffset($buf6, __str200, $25, __Py_NoneStruct); //@line 3291 "datetimemodule.c"
        var $27=($26) < 0; //@line 3291 "datetimemodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 3291 "datetimemodule.c"
      case 5: // $bb7
        var $28=HEAP[$result]; //@line 3293 "datetimemodule.c"
        var $29=$28; //@line 3293 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 3293 "datetimemodule.c"
        var $31=($30) - 1; //@line 3293 "datetimemodule.c"
        var $32=$28; //@line 3293 "datetimemodule.c"
        HEAP[$32]=$31; //@line 3293 "datetimemodule.c"
        var $33=$28; //@line 3293 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 3293 "datetimemodule.c"
        var $35=($34)==0; //@line 3293 "datetimemodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3293 "datetimemodule.c"
      case 6: // $bb8
        var $36=HEAP[$result]; //@line 3293 "datetimemodule.c"
        var $37=$36+4; //@line 3293 "datetimemodule.c"
        var $38=HEAP[$37]; //@line 3293 "datetimemodule.c"
        var $39=$38+24; //@line 3293 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 3293 "datetimemodule.c"
        var $41=HEAP[$result]; //@line 3293 "datetimemodule.c"
        FUNCTION_TABLE[$40]($41); //@line 3293 "datetimemodule.c"
        __label__ = 7; break; //@line 3293 "datetimemodule.c"
      case 7: // $bb9
        $0=0; //@line 3294 "datetimemodule.c"
        __label__ = 9; break; //@line 3294 "datetimemodule.c"
      case 8: // $bb10
        var $buf11=$buf; //@line 3296 "datetimemodule.c"
        var $42=_PyString_FromString($buf11); //@line 3296 "datetimemodule.c"
        _PyString_ConcatAndDel($result, $42); //@line 3296 "datetimemodule.c"
        var $43=HEAP[$result]; //@line 3297 "datetimemodule.c"
        $0=$43; //@line 3297 "datetimemodule.c"
        __label__ = 9; break; //@line 3297 "datetimemodule.c"
      case 9: // $bb12
        var $44=$0; //@line 3288 "datetimemodule.c"
        $retval=$44; //@line 3288 "datetimemodule.c"
        var $retval13=$retval; //@line 3288 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 3288 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_strftime($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $result;
        var $tuple;
        var $format=__stackBase__;
        var $format_len=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 3309 "datetimemodule.c"
        var $2=$kw_addr; //@line 3309 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str147, _keywords_12042, allocate([$format,0,0,0,$format_len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3309 "datetimemodule.c"
        var $4=($3)==0; //@line 3309 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3309 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 3311 "datetimemodule.c"
        __label__ = 9; break; //@line 3311 "datetimemodule.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 3317 "datetimemodule.c"
        var $6=$5+13; //@line 3317 "datetimemodule.c"
        var $7=$6+2; //@line 3317 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3317 "datetimemodule.c"
        var $9=($8); //@line 3317 "datetimemodule.c"
        var $10=$self_addr; //@line 3317 "datetimemodule.c"
        var $11=$10+13; //@line 3317 "datetimemodule.c"
        var $12=$11+1; //@line 3317 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 3317 "datetimemodule.c"
        var $14=($13); //@line 3317 "datetimemodule.c"
        var $15=$self_addr; //@line 3317 "datetimemodule.c"
        var $16=$15+13; //@line 3317 "datetimemodule.c"
        var $17=$16; //@line 3317 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 3317 "datetimemodule.c"
        var $19=($18); //@line 3317 "datetimemodule.c"
        var $20=__Py_BuildValue_SizeT(__str201, allocate([1900,0,0,0,1,0,0,0,1,0,0,0,$19,0,0,0,$14,0,0,0,$9,0,0,0,0,0,0,0,1,0,0,0,-1,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3317 "datetimemodule.c"
        $tuple=$20; //@line 3317 "datetimemodule.c"
        var $21=$tuple; //@line 3323 "datetimemodule.c"
        var $22=($21)==0; //@line 3323 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3323 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 3324 "datetimemodule.c"
        __label__ = 9; break; //@line 3324 "datetimemodule.c"
      case 4: // $bb3
        var $23=$tuple; //@line 3325 "datetimemodule.c"
        var $24=_PyTuple_Size($23); //@line 3325 "datetimemodule.c"
        var $25=($24)!=9; //@line 3325 "datetimemodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3325 "datetimemodule.c"
      case 5: // $bb4
        ___assert_fail(__str202, __str1, 3325, ___PRETTY_FUNCTION___12043); //@line 3325 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3325 "datetimemodule.c"
      case 6: // $bb5
        var $26=HEAP[$format_len]; //@line 3326 "datetimemodule.c"
        var $27=HEAP[$format]; //@line 3326 "datetimemodule.c"
        var $28=$self_addr; //@line 3326 "datetimemodule.c"
        var $29=$28; //@line 3326 "datetimemodule.c"
        var $30=$tuple; //@line 3326 "datetimemodule.c"
        var $31=_wrap_strftime($29, $27, $26, $30, __Py_NoneStruct); //@line 3326 "datetimemodule.c"
        $result=$31; //@line 3326 "datetimemodule.c"
        var $32=$tuple; //@line 3328 "datetimemodule.c"
        var $33=$32; //@line 3328 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 3328 "datetimemodule.c"
        var $35=($34) - 1; //@line 3328 "datetimemodule.c"
        var $36=$tuple; //@line 3328 "datetimemodule.c"
        var $37=$36; //@line 3328 "datetimemodule.c"
        HEAP[$37]=$35; //@line 3328 "datetimemodule.c"
        var $38=$tuple; //@line 3328 "datetimemodule.c"
        var $39=$38; //@line 3328 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 3328 "datetimemodule.c"
        var $41=($40)==0; //@line 3328 "datetimemodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3328 "datetimemodule.c"
      case 7: // $bb6
        var $42=$tuple; //@line 3328 "datetimemodule.c"
        var $43=$42+4; //@line 3328 "datetimemodule.c"
        var $44=HEAP[$43]; //@line 3328 "datetimemodule.c"
        var $45=$44+24; //@line 3328 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 3328 "datetimemodule.c"
        var $47=$tuple; //@line 3328 "datetimemodule.c"
        FUNCTION_TABLE[$46]($47); //@line 3328 "datetimemodule.c"
        __label__ = 8; break; //@line 3328 "datetimemodule.c"
      case 8: // $bb7
        var $48=$result; //@line 3329 "datetimemodule.c"
        $0=$48; //@line 3329 "datetimemodule.c"
        __label__ = 9; break; //@line 3329 "datetimemodule.c"
      case 9: // $bb8
        var $49=$0; //@line 3311 "datetimemodule.c"
        $retval=$49; //@line 3311 "datetimemodule.c"
        var $retval9=$retval; //@line 3311 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 3311 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_richcompare($self, $other, $op) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $other_addr;
        var $op_addr;
        var $retval;
        var $0;
        var $iftmp_304;
        var $diff;
        var $n1=__stackBase__;
        var $n2=__stackBase__+4;
        var $offset1=__stackBase__+8;
        var $offset2=__stackBase__+12;
        var $result;
        $self_addr=$self;
        $other_addr=$other;
        $op_addr=$op;
        var $1=$other_addr; //@line 3347 "datetimemodule.c"
        var $2=$1+4; //@line 3347 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 3347 "datetimemodule.c"
        var $4=($3)!=(_PyDateTime_TimeType); //@line 3347 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 3347 "datetimemodule.c"
      case 1: // $bb
        var $5=$other_addr; //@line 3347 "datetimemodule.c"
        var $6=$5+4; //@line 3347 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 3347 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_TimeType); //@line 3347 "datetimemodule.c"
        var $9=($8)==0; //@line 3347 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 3347 "datetimemodule.c"
      case 2: // $bb1
        var $10=$op_addr; //@line 3348 "datetimemodule.c"
        var $11=($10)==2; //@line 3348 "datetimemodule.c"
        var $12=$op_addr; //@line 3348 "datetimemodule.c"
        var $13=($12)==3; //@line 3348 "datetimemodule.c"
        var $or_cond=($11) | ($13);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 3348 "datetimemodule.c"
      case 3: // $bb3
        var $14=$op_addr; //@line 3349 "datetimemodule.c"
        var $15=($14)==2; //@line 3349 "datetimemodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3349 "datetimemodule.c"
      case 4: // $bb4
        $iftmp_304=__Py_ZeroStruct; //@line 3349 "datetimemodule.c"
        __label__ = 6; break; //@line 3349 "datetimemodule.c"
      case 5: // $bb5
        $iftmp_304=__Py_TrueStruct; //@line 3349 "datetimemodule.c"
        __label__ = 6; break; //@line 3349 "datetimemodule.c"
      case 6: // $bb6
        var $16=$iftmp_304; //@line 3349 "datetimemodule.c"
        $result=$16; //@line 3349 "datetimemodule.c"
        var $17=$result; //@line 3350 "datetimemodule.c"
        var $18=$17; //@line 3350 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 3350 "datetimemodule.c"
        var $20=($19) + 1; //@line 3350 "datetimemodule.c"
        var $21=$result; //@line 3350 "datetimemodule.c"
        var $22=$21; //@line 3350 "datetimemodule.c"
        HEAP[$22]=$20; //@line 3350 "datetimemodule.c"
        var $23=$result; //@line 3351 "datetimemodule.c"
        $0=$23; //@line 3351 "datetimemodule.c"
        __label__ = 27; break; //@line 3351 "datetimemodule.c"
      case 7: // $bb7
        var $24=$self_addr; //@line 3354 "datetimemodule.c"
        var $25=$24; //@line 3354 "datetimemodule.c"
        var $26=$other_addr; //@line 3354 "datetimemodule.c"
        var $27=_cmperror($25, $26); //@line 3354 "datetimemodule.c"
        $0=$27; //@line 3354 "datetimemodule.c"
        __label__ = 27; break; //@line 3354 "datetimemodule.c"
      case 8: // $bb8
        var $28=$self_addr; //@line 3356 "datetimemodule.c"
        var $29=$28; //@line 3356 "datetimemodule.c"
        var $30=$other_addr; //@line 3356 "datetimemodule.c"
        var $31=_classify_two_utcoffsets($29, $offset1, $n1, __Py_NoneStruct, $30, $offset2, $n2, __Py_NoneStruct); //@line 3356 "datetimemodule.c"
        var $32=($31) < 0; //@line 3356 "datetimemodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3356 "datetimemodule.c"
      case 9: // $bb9
        $0=0; //@line 3358 "datetimemodule.c"
        __label__ = 27; break; //@line 3358 "datetimemodule.c"
      case 10: // $bb10
        var $33=HEAP[$n1]; //@line 3359 "datetimemodule.c"
        var $34=($33)==1; //@line 3359 "datetimemodule.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 3359 "datetimemodule.c"
      case 11: // $bb11
        var $35=HEAP[$n2]; //@line 3359 "datetimemodule.c"
        var $36=($35)==1; //@line 3359 "datetimemodule.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3359 "datetimemodule.c"
      case 12: // $bb12
        ___assert_fail(__str203, __str1, 3359, ___PRETTY_FUNCTION___12084); //@line 3359 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3359 "datetimemodule.c"
      case 13: // $bb13
        var $37=HEAP[$n1]; //@line 3364 "datetimemodule.c"
        var $38=HEAP[$n2]; //@line 3364 "datetimemodule.c"
        var $39=($37)==($38); //@line 3364 "datetimemodule.c"
        if ($39) { __lastLabel__ = 13; __label__ = 14; break; } else { __lastLabel__ = 13; __label__ = 17; break; } //@line 3364 "datetimemodule.c"
      case 14: // $bb14
        var $40=HEAP[$offset1]; //@line 3364 "datetimemodule.c"
        var $41=HEAP[$offset2]; //@line 3364 "datetimemodule.c"
        var $42=($40)==($41); //@line 3364 "datetimemodule.c"
        if ($42) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3364 "datetimemodule.c"
      case 15: // $bb15
        var $43=$other_addr; //@line 3365 "datetimemodule.c"
        var $44=$43; //@line 3365 "datetimemodule.c"
        var $45=$44+13; //@line 3365 "datetimemodule.c"
        var $46=$45; //@line 3365 "datetimemodule.c"
        var $47=$self_addr; //@line 3365 "datetimemodule.c"
        var $48=$47+13; //@line 3365 "datetimemodule.c"
        var $49=$48; //@line 3365 "datetimemodule.c"
        var $50=_memcmp($49, $46, 6); //@line 3365 "datetimemodule.c"
        $diff=$50; //@line 3365 "datetimemodule.c"
        var $51=$diff; //@line 3367 "datetimemodule.c"
        var $52=$op_addr; //@line 3367 "datetimemodule.c"
        var $53=_diff_to_bool($51, $52); //@line 3367 "datetimemodule.c"
        $0=$53; //@line 3367 "datetimemodule.c"
        __label__ = 27; break; //@line 3367 "datetimemodule.c"
      case 16: // $bb16thread_pre_split
        var $_pr=HEAP[$n1];
        __lastLabel__ = 16; __label__ = 17; break;
      case 17: // $bb16
        var $54=__lastLabel__ == 16 ? $_pr : ($37);
        var $55=($54)==3; //@line 3370 "datetimemodule.c"
        if ($55) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 3370 "datetimemodule.c"
      case 18: // $bb17
        var $56=HEAP[$n2]; //@line 3370 "datetimemodule.c"
        var $57=($56)==3; //@line 3370 "datetimemodule.c"
        if ($57) { __label__ = 19; break; } else { __label__ = 24; break; } //@line 3370 "datetimemodule.c"
      case 19: // $bb18
        var $58=HEAP[$offset1]; //@line 3371 "datetimemodule.c"
        var $59=HEAP[$offset2]; //@line 3371 "datetimemodule.c"
        var $60=($58)==($59); //@line 3371 "datetimemodule.c"
        if ($60) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 3371 "datetimemodule.c"
      case 20: // $bb19
        ___assert_fail(__str204, __str1, 3371, ___PRETTY_FUNCTION___12084); //@line 3371 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3371 "datetimemodule.c"
      case 21: // $bb20
        var $61=$self_addr; //@line 3375 "datetimemodule.c"
        var $62=$61+13; //@line 3375 "datetimemodule.c"
        var $63=$62; //@line 3375 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 3375 "datetimemodule.c"
        var $65=($64); //@line 3375 "datetimemodule.c"
        var $66=($65) * 3600; //@line 3375 "datetimemodule.c"
        var $67=$self_addr; //@line 3375 "datetimemodule.c"
        var $68=$67+13; //@line 3375 "datetimemodule.c"
        var $69=$68+1; //@line 3375 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 3375 "datetimemodule.c"
        var $71=($70); //@line 3375 "datetimemodule.c"
        var $72=HEAP[$offset1]; //@line 3375 "datetimemodule.c"
        var $73=($71) - ($72); //@line 3375 "datetimemodule.c"
        var $74=($73) * 60; //@line 3375 "datetimemodule.c"
        var $75=$self_addr; //@line 3375 "datetimemodule.c"
        var $76=$75+13; //@line 3375 "datetimemodule.c"
        var $77=$76+2; //@line 3375 "datetimemodule.c"
        var $78=HEAP[$77]; //@line 3375 "datetimemodule.c"
        var $79=($78); //@line 3375 "datetimemodule.c"
        var $80=($74) + ($66); //@line 3375 "datetimemodule.c"
        var $81=($80) + ($79); //@line 3375 "datetimemodule.c"
        HEAP[$offset1]=$81; //@line 3375 "datetimemodule.c"
        var $82=$other_addr; //@line 3378 "datetimemodule.c"
        var $83=$82; //@line 3378 "datetimemodule.c"
        var $84=$83+13; //@line 3378 "datetimemodule.c"
        var $85=$84; //@line 3378 "datetimemodule.c"
        var $86=HEAP[$85]; //@line 3378 "datetimemodule.c"
        var $87=($86); //@line 3378 "datetimemodule.c"
        var $88=($87) * 3600; //@line 3378 "datetimemodule.c"
        var $89=$other_addr; //@line 3378 "datetimemodule.c"
        var $90=$89; //@line 3378 "datetimemodule.c"
        var $91=$90+13; //@line 3378 "datetimemodule.c"
        var $92=$91+1; //@line 3378 "datetimemodule.c"
        var $93=HEAP[$92]; //@line 3378 "datetimemodule.c"
        var $94=($93); //@line 3378 "datetimemodule.c"
        var $95=HEAP[$offset2]; //@line 3378 "datetimemodule.c"
        var $96=($94) - ($95); //@line 3378 "datetimemodule.c"
        var $97=($96) * 60; //@line 3378 "datetimemodule.c"
        var $98=$other_addr; //@line 3378 "datetimemodule.c"
        var $99=$98; //@line 3378 "datetimemodule.c"
        var $100=$99+13; //@line 3378 "datetimemodule.c"
        var $101=$100+2; //@line 3378 "datetimemodule.c"
        var $102=HEAP[$101]; //@line 3378 "datetimemodule.c"
        var $103=($102); //@line 3378 "datetimemodule.c"
        var $104=($97) + ($88); //@line 3378 "datetimemodule.c"
        var $105=($104) + ($103); //@line 3378 "datetimemodule.c"
        HEAP[$offset2]=$105; //@line 3378 "datetimemodule.c"
        var $106=HEAP[$offset1]; //@line 3381 "datetimemodule.c"
        var $107=HEAP[$offset2]; //@line 3381 "datetimemodule.c"
        var $108=($106) - ($107); //@line 3381 "datetimemodule.c"
        $diff=$108; //@line 3381 "datetimemodule.c"
        var $109=$diff; //@line 3382 "datetimemodule.c"
        var $110=($109)==0; //@line 3382 "datetimemodule.c"
        if ($110) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 3382 "datetimemodule.c"
      case 22: // $bb21
        var $111=$self_addr; //@line 3383 "datetimemodule.c"
        var $112=$111+13; //@line 3383 "datetimemodule.c"
        var $113=$112+3; //@line 3383 "datetimemodule.c"
        var $114=HEAP[$113]; //@line 3383 "datetimemodule.c"
        var $115=($114); //@line 3383 "datetimemodule.c"
        var $116=($115) << 16; //@line 3383 "datetimemodule.c"
        var $117=$self_addr; //@line 3383 "datetimemodule.c"
        var $118=$117+13; //@line 3383 "datetimemodule.c"
        var $119=$118+4; //@line 3383 "datetimemodule.c"
        var $120=HEAP[$119]; //@line 3383 "datetimemodule.c"
        var $121=($120); //@line 3383 "datetimemodule.c"
        var $122=($121) << 8; //@line 3383 "datetimemodule.c"
        var $123=$self_addr; //@line 3383 "datetimemodule.c"
        var $124=$123+13; //@line 3383 "datetimemodule.c"
        var $125=$124+5; //@line 3383 "datetimemodule.c"
        var $126=HEAP[$125]; //@line 3383 "datetimemodule.c"
        var $127=($126); //@line 3383 "datetimemodule.c"
        var $128=($122) | ($116); //@line 3383 "datetimemodule.c"
        var $129=($128) | ($127); //@line 3383 "datetimemodule.c"
        var $130=$other_addr; //@line 3383 "datetimemodule.c"
        var $131=$130; //@line 3383 "datetimemodule.c"
        var $132=$131+13; //@line 3383 "datetimemodule.c"
        var $133=$132+3; //@line 3383 "datetimemodule.c"
        var $134=HEAP[$133]; //@line 3383 "datetimemodule.c"
        var $135=($134); //@line 3383 "datetimemodule.c"
        var $136=($135) << 16; //@line 3383 "datetimemodule.c"
        var $137=$other_addr; //@line 3383 "datetimemodule.c"
        var $138=$137; //@line 3383 "datetimemodule.c"
        var $139=$138+13; //@line 3383 "datetimemodule.c"
        var $140=$139+4; //@line 3383 "datetimemodule.c"
        var $141=HEAP[$140]; //@line 3383 "datetimemodule.c"
        var $142=($141); //@line 3383 "datetimemodule.c"
        var $143=($142) << 8; //@line 3383 "datetimemodule.c"
        var $144=$other_addr; //@line 3383 "datetimemodule.c"
        var $145=$144; //@line 3383 "datetimemodule.c"
        var $146=$145+13; //@line 3383 "datetimemodule.c"
        var $147=$146+5; //@line 3383 "datetimemodule.c"
        var $148=HEAP[$147]; //@line 3383 "datetimemodule.c"
        var $149=($148); //@line 3383 "datetimemodule.c"
        var $150=($143) | ($136); //@line 3383 "datetimemodule.c"
        var $151=($150) | ($149); //@line 3383 "datetimemodule.c"
        var $152=($129) - ($151); //@line 3383 "datetimemodule.c"
        $diff=$152; //@line 3383 "datetimemodule.c"
        __label__ = 23; break; //@line 3383 "datetimemodule.c"
      case 23: // $bb22
        var $153=$diff; //@line 3385 "datetimemodule.c"
        var $154=$op_addr; //@line 3385 "datetimemodule.c"
        var $155=_diff_to_bool($153, $154); //@line 3385 "datetimemodule.c"
        $0=$155; //@line 3385 "datetimemodule.c"
        __label__ = 27; break; //@line 3385 "datetimemodule.c"
      case 24: // $bb23
        var $156=HEAP[$n1]; //@line 3388 "datetimemodule.c"
        var $157=HEAP[$n2]; //@line 3388 "datetimemodule.c"
        var $158=($156)==($157); //@line 3388 "datetimemodule.c"
        if ($158) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 3388 "datetimemodule.c"
      case 25: // $bb24
        ___assert_fail(__str205, __str1, 3388, ___PRETTY_FUNCTION___12084); //@line 3388 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3388 "datetimemodule.c"
      case 26: // $bb25
        var $159=HEAP[_PyExc_TypeError]; //@line 3389 "datetimemodule.c"
        _PyErr_SetString($159, __str206); //@line 3389 "datetimemodule.c"
        $0=0; //@line 3392 "datetimemodule.c"
        __label__ = 27; break; //@line 3392 "datetimemodule.c"
      case 27: // $bb26
        var $160=$0; //@line 3351 "datetimemodule.c"
        $retval=$160; //@line 3351 "datetimemodule.c"
        var $retval27=$retval; //@line 3351 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 3351 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_hash($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $n;
        var $offset=__stackBase__;
        var $temp;
        var $hour;
        var $minute=__stackBase__+4;
        $self_addr=$self;
        var $1=$self_addr; //@line 3398 "datetimemodule.c"
        var $2=$1+8; //@line 3398 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 3398 "datetimemodule.c"
        var $4=($3)==-1; //@line 3398 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 17; break; } //@line 3398 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 3403 "datetimemodule.c"
        var $6=$5; //@line 3403 "datetimemodule.c"
        var $7=_classify_utcoffset($6, __Py_NoneStruct, $offset); //@line 3403 "datetimemodule.c"
        $n=$7; //@line 3403 "datetimemodule.c"
        var $8=$n; //@line 3404 "datetimemodule.c"
        var $9=($8)==1; //@line 3404 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3404 "datetimemodule.c"
      case 2: // $bb1
        ___assert_fail(__str207, __str1, 3404, ___PRETTY_FUNCTION___12202); //@line 3404 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3404 "datetimemodule.c"
      case 3: // $bb2
        var $10=$n; //@line 3405 "datetimemodule.c"
        var $11=($10)==0; //@line 3405 "datetimemodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3405 "datetimemodule.c"
      case 4: // $bb3
        $0=-1; //@line 3406 "datetimemodule.c"
        __label__ = 18; break; //@line 3406 "datetimemodule.c"
      case 5: // $bb4
        var $12=HEAP[$offset]; //@line 3409 "datetimemodule.c"
        var $13=($12)==0; //@line 3409 "datetimemodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3409 "datetimemodule.c"
      case 6: // $bb5
        var $14=$self_addr; //@line 3410 "datetimemodule.c"
        var $15=$14+13; //@line 3410 "datetimemodule.c"
        var $16=$15; //@line 3410 "datetimemodule.c"
        var $17=_PyString_FromStringAndSize($16, 6); //@line 3410 "datetimemodule.c"
        $temp=$17; //@line 3410 "datetimemodule.c"
        __lastLabel__ = 6; __label__ = 14; break; //@line 3410 "datetimemodule.c"
      case 7: // $bb6
        var $18=$n; //@line 3416 "datetimemodule.c"
        var $19=($18)!=3; //@line 3416 "datetimemodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3416 "datetimemodule.c"
      case 8: // $bb7
        ___assert_fail(__str208, __str1, 3416, ___PRETTY_FUNCTION___12202); //@line 3416 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3416 "datetimemodule.c"
      case 9: // $bb8
        var $20=$self_addr; //@line 3417 "datetimemodule.c"
        var $21=$20; //@line 3417 "datetimemodule.c"
        var $22=$21+12; //@line 3417 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 3417 "datetimemodule.c"
        var $24=($23)==0; //@line 3417 "datetimemodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3417 "datetimemodule.c"
      case 10: // $bb9
        ___assert_fail(__str209, __str1, 3417, ___PRETTY_FUNCTION___12202); //@line 3417 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 3417 "datetimemodule.c"
      case 11: // $bb10
        var $25=$self_addr; //@line 3418 "datetimemodule.c"
        var $26=$25+13; //@line 3418 "datetimemodule.c"
        var $27=$26; //@line 3418 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 3418 "datetimemodule.c"
        var $29=($28); //@line 3418 "datetimemodule.c"
        var $30=($29) * 60; //@line 3418 "datetimemodule.c"
        var $31=$self_addr; //@line 3418 "datetimemodule.c"
        var $32=$31+13; //@line 3418 "datetimemodule.c"
        var $33=$32+1; //@line 3418 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 3418 "datetimemodule.c"
        var $35=($34); //@line 3418 "datetimemodule.c"
        var $36=HEAP[$offset]; //@line 3418 "datetimemodule.c"
        var $_neg=0 - ($36);
        var $37=($_neg) + ($30); //@line 3418 "datetimemodule.c"
        var $38=($37) + ($35);
        var $39=_divmod($38, 60, $minute); //@line 3418 "datetimemodule.c"
        $hour=$39; //@line 3418 "datetimemodule.c"
        var $40=$hour; //@line 3422 "datetimemodule.c"
        var $41=($40) < 0; //@line 3422 "datetimemodule.c"
        var $42=$hour; //@line 3422 "datetimemodule.c"
        var $43=($42) > 23; //@line 3422 "datetimemodule.c"
        var $or_cond=($41) | ($43);
        var $44=$self_addr; //@line 3428 "datetimemodule.c"
        var $45=$44+13; //@line 3428 "datetimemodule.c"
        var $46=$45+3; //@line 3428 "datetimemodule.c"
        var $47=HEAP[$46]; //@line 3428 "datetimemodule.c"
        var $48=($47); //@line 3428 "datetimemodule.c"
        var $49=($48) << 16; //@line 3428 "datetimemodule.c"
        var $50=$self_addr; //@line 3428 "datetimemodule.c"
        var $51=$50+13; //@line 3428 "datetimemodule.c"
        var $52=$51+4; //@line 3428 "datetimemodule.c"
        var $53=HEAP[$52]; //@line 3428 "datetimemodule.c"
        var $54=($53); //@line 3428 "datetimemodule.c"
        var $55=($54) << 8; //@line 3428 "datetimemodule.c"
        var $56=$self_addr; //@line 3428 "datetimemodule.c"
        var $57=$56+13; //@line 3428 "datetimemodule.c"
        var $58=$57+5; //@line 3428 "datetimemodule.c"
        var $59=HEAP[$58]; //@line 3428 "datetimemodule.c"
        var $60=($59); //@line 3428 "datetimemodule.c"
        var $61=($55) | ($49); //@line 3428 "datetimemodule.c"
        var $62=($61) | ($60); //@line 3428 "datetimemodule.c"
        var $63=$self_addr; //@line 3428 "datetimemodule.c"
        var $64=$63+13; //@line 3428 "datetimemodule.c"
        var $65=$64+2; //@line 3428 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 3428 "datetimemodule.c"
        var $67=($66); //@line 3428 "datetimemodule.c"
        var $68=HEAP[$minute]; //@line 3428 "datetimemodule.c"
        var $69=$hour; //@line 3428 "datetimemodule.c"
        if ($or_cond) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 3422 "datetimemodule.c"
      case 12: // $bb12
        var $70=_new_time_ex($69, $68, $67, $62, __Py_NoneStruct, _PyDateTime_TimeType); //@line 3423 "datetimemodule.c"
        $temp=$70; //@line 3423 "datetimemodule.c"
        __lastLabel__ = 12; __label__ = 14; break; //@line 3423 "datetimemodule.c"
      case 13: // $bb13
        var $71=__Py_BuildValue_SizeT(__str210, allocate([$69,0,0,0,$68,0,0,0,$67,0,0,0,$62,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3428 "datetimemodule.c"
        $temp=$71; //@line 3428 "datetimemodule.c"
        __lastLabel__ = 13; __label__ = 14; break; //@line 3428 "datetimemodule.c"
      case 14: // $bb14
        var $72=__lastLabel__ == 13 ? $71 : (__lastLabel__ == 12 ? $70 : ($17));
        var $73=($72)!=0; //@line 3433 "datetimemodule.c"
        if ($73) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 3433 "datetimemodule.c"
      case 15: // $bb15
        var $74=$temp; //@line 3434 "datetimemodule.c"
        var $75=_PyObject_Hash($74); //@line 3434 "datetimemodule.c"
        var $76=$self_addr; //@line 3434 "datetimemodule.c"
        var $77=$76+8; //@line 3434 "datetimemodule.c"
        HEAP[$77]=$75; //@line 3434 "datetimemodule.c"
        var $78=$temp; //@line 3435 "datetimemodule.c"
        var $79=$78; //@line 3435 "datetimemodule.c"
        var $80=HEAP[$79]; //@line 3435 "datetimemodule.c"
        var $81=($80) - 1; //@line 3435 "datetimemodule.c"
        var $82=$temp; //@line 3435 "datetimemodule.c"
        var $83=$82; //@line 3435 "datetimemodule.c"
        HEAP[$83]=$81; //@line 3435 "datetimemodule.c"
        var $84=$temp; //@line 3435 "datetimemodule.c"
        var $85=$84; //@line 3435 "datetimemodule.c"
        var $86=HEAP[$85]; //@line 3435 "datetimemodule.c"
        var $87=($86)==0; //@line 3435 "datetimemodule.c"
        if ($87) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3435 "datetimemodule.c"
      case 16: // $bb16
        var $88=$temp; //@line 3435 "datetimemodule.c"
        var $89=$88+4; //@line 3435 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 3435 "datetimemodule.c"
        var $91=$90+24; //@line 3435 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 3435 "datetimemodule.c"
        var $93=$temp; //@line 3435 "datetimemodule.c"
        FUNCTION_TABLE[$92]($93); //@line 3435 "datetimemodule.c"
        __label__ = 17; break; //@line 3435 "datetimemodule.c"
      case 17: // $bb17
        var $94=$self_addr; //@line 3438 "datetimemodule.c"
        var $95=$94+8; //@line 3438 "datetimemodule.c"
        var $96=HEAP[$95]; //@line 3438 "datetimemodule.c"
        $0=$96; //@line 3438 "datetimemodule.c"
        __label__ = 18; break; //@line 3438 "datetimemodule.c"
      case 18: // $bb18
        var $97=$0; //@line 3406 "datetimemodule.c"
        $retval=$97; //@line 3406 "datetimemodule.c"
        var $retval19=$retval; //@line 3406 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 3406 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_replace($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_337;
        var $clone;
        var $tuple;
        var $hh=__stackBase__;
        var $mm=__stackBase__+4;
        var $ss=__stackBase__+8;
        var $us=__stackBase__+12;
        var $tzinfo=__stackBase__+16;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$self_addr; //@line 3446 "datetimemodule.c"
        var $2=$1+13; //@line 3446 "datetimemodule.c"
        var $3=$2; //@line 3446 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3446 "datetimemodule.c"
        var $5=($4); //@line 3446 "datetimemodule.c"
        HEAP[$hh]=$5; //@line 3446 "datetimemodule.c"
        var $6=$self_addr; //@line 3447 "datetimemodule.c"
        var $7=$6+13; //@line 3447 "datetimemodule.c"
        var $8=$7+1; //@line 3447 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 3447 "datetimemodule.c"
        var $10=($9); //@line 3447 "datetimemodule.c"
        HEAP[$mm]=$10; //@line 3447 "datetimemodule.c"
        var $11=$self_addr; //@line 3448 "datetimemodule.c"
        var $12=$11+13; //@line 3448 "datetimemodule.c"
        var $13=$12+2; //@line 3448 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 3448 "datetimemodule.c"
        var $15=($14); //@line 3448 "datetimemodule.c"
        HEAP[$ss]=$15; //@line 3448 "datetimemodule.c"
        var $16=$self_addr; //@line 3449 "datetimemodule.c"
        var $17=$16+13; //@line 3449 "datetimemodule.c"
        var $18=$17+3; //@line 3449 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 3449 "datetimemodule.c"
        var $20=($19); //@line 3449 "datetimemodule.c"
        var $21=($20) << 16; //@line 3449 "datetimemodule.c"
        var $22=$self_addr; //@line 3449 "datetimemodule.c"
        var $23=$22+13; //@line 3449 "datetimemodule.c"
        var $24=$23+4; //@line 3449 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3449 "datetimemodule.c"
        var $26=($25); //@line 3449 "datetimemodule.c"
        var $27=($26) << 8; //@line 3449 "datetimemodule.c"
        var $28=$self_addr; //@line 3449 "datetimemodule.c"
        var $29=$28+13; //@line 3449 "datetimemodule.c"
        var $30=$29+5; //@line 3449 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 3449 "datetimemodule.c"
        var $32=($31); //@line 3449 "datetimemodule.c"
        var $33=($27) | ($21); //@line 3449 "datetimemodule.c"
        var $34=($33) | ($32); //@line 3449 "datetimemodule.c"
        HEAP[$us]=$34; //@line 3449 "datetimemodule.c"
        var $35=$self_addr; //@line 3450 "datetimemodule.c"
        var $36=$35; //@line 3450 "datetimemodule.c"
        var $37=$36+12; //@line 3450 "datetimemodule.c"
        var $38=HEAP[$37]; //@line 3450 "datetimemodule.c"
        var $39=($38)!=0; //@line 3450 "datetimemodule.c"
        if ($39) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3450 "datetimemodule.c"
      case 1: // $bb
        var $40=$self_addr; //@line 3450 "datetimemodule.c"
        var $41=$40+20; //@line 3450 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 3450 "datetimemodule.c"
        $iftmp_337=$42; //@line 3450 "datetimemodule.c"
        __label__ = 3; break; //@line 3450 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_337=__Py_NoneStruct; //@line 3450 "datetimemodule.c"
        __label__ = 3; break; //@line 3450 "datetimemodule.c"
      case 3: // $bb2
        var $43=$iftmp_337; //@line 3450 "datetimemodule.c"
        HEAP[$tzinfo]=$43; //@line 3450 "datetimemodule.c"
        var $44=$args_addr; //@line 3452 "datetimemodule.c"
        var $45=$kw_addr; //@line 3452 "datetimemodule.c"
        var $46=__PyArg_ParseTupleAndKeywords_SizeT($44, $45, __str211, _time_kws, allocate([$hh,0,0,0,$mm,0,0,0,$ss,0,0,0,$us,0,0,0,$tzinfo,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 3452 "datetimemodule.c"
        var $47=($46)==0; //@line 3452 "datetimemodule.c"
        if ($47) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3452 "datetimemodule.c"
      case 4: // $bb3
        $0=0; //@line 3455 "datetimemodule.c"
        __label__ = 10; break; //@line 3455 "datetimemodule.c"
      case 5: // $bb4
        var $48=HEAP[$tzinfo]; //@line 3456 "datetimemodule.c"
        var $49=HEAP[$us]; //@line 3456 "datetimemodule.c"
        var $50=HEAP[$ss]; //@line 3456 "datetimemodule.c"
        var $51=HEAP[$mm]; //@line 3456 "datetimemodule.c"
        var $52=HEAP[$hh]; //@line 3456 "datetimemodule.c"
        var $53=__Py_BuildValue_SizeT(__str212, allocate([$52,0,0,0,$51,0,0,0,$50,0,0,0,$49,0,0,0,$48,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3456 "datetimemodule.c"
        $tuple=$53; //@line 3456 "datetimemodule.c"
        var $54=$tuple; //@line 3457 "datetimemodule.c"
        var $55=($54)==0; //@line 3457 "datetimemodule.c"
        if ($55) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3457 "datetimemodule.c"
      case 6: // $bb5
        $0=0; //@line 3458 "datetimemodule.c"
        __label__ = 10; break; //@line 3458 "datetimemodule.c"
      case 7: // $bb6
        var $56=$self_addr; //@line 3459 "datetimemodule.c"
        var $57=$56; //@line 3459 "datetimemodule.c"
        var $58=$57+4; //@line 3459 "datetimemodule.c"
        var $59=HEAP[$58]; //@line 3459 "datetimemodule.c"
        var $60=$tuple; //@line 3459 "datetimemodule.c"
        var $61=_time_new($59, $60, 0); //@line 3459 "datetimemodule.c"
        $clone=$61; //@line 3459 "datetimemodule.c"
        var $62=$tuple; //@line 3460 "datetimemodule.c"
        var $63=$62; //@line 3460 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 3460 "datetimemodule.c"
        var $65=($64) - 1; //@line 3460 "datetimemodule.c"
        var $66=$tuple; //@line 3460 "datetimemodule.c"
        var $67=$66; //@line 3460 "datetimemodule.c"
        HEAP[$67]=$65; //@line 3460 "datetimemodule.c"
        var $68=$tuple; //@line 3460 "datetimemodule.c"
        var $69=$68; //@line 3460 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 3460 "datetimemodule.c"
        var $71=($70)==0; //@line 3460 "datetimemodule.c"
        if ($71) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3460 "datetimemodule.c"
      case 8: // $bb7
        var $72=$tuple; //@line 3460 "datetimemodule.c"
        var $73=$72+4; //@line 3460 "datetimemodule.c"
        var $74=HEAP[$73]; //@line 3460 "datetimemodule.c"
        var $75=$74+24; //@line 3460 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 3460 "datetimemodule.c"
        var $77=$tuple; //@line 3460 "datetimemodule.c"
        FUNCTION_TABLE[$76]($77); //@line 3460 "datetimemodule.c"
        __label__ = 9; break; //@line 3460 "datetimemodule.c"
      case 9: // $bb8
        var $78=$clone; //@line 3461 "datetimemodule.c"
        $0=$78; //@line 3461 "datetimemodule.c"
        __label__ = 10; break; //@line 3461 "datetimemodule.c"
      case 10: // $bb9
        var $79=$0; //@line 3455 "datetimemodule.c"
        $retval=$79; //@line 3455 "datetimemodule.c"
        var $retval10=$retval; //@line 3455 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 3455 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_nonzero($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $offset;
        var $none=__stackBase__;
        $self_addr=$self;
        var $1=$self_addr; //@line 3470 "datetimemodule.c"
        var $2=$1+13; //@line 3470 "datetimemodule.c"
        var $3=$2+2; //@line 3470 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3470 "datetimemodule.c"
        var $5=($4)!=0; //@line 3470 "datetimemodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 3470 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3470 "datetimemodule.c"
        var $7=$6+13; //@line 3470 "datetimemodule.c"
        var $8=$7+3; //@line 3470 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 3470 "datetimemodule.c"
        var $10=($9); //@line 3470 "datetimemodule.c"
        var $11=($10) << 16; //@line 3470 "datetimemodule.c"
        var $12=$self_addr; //@line 3470 "datetimemodule.c"
        var $13=$12+13; //@line 3470 "datetimemodule.c"
        var $14=$13+4; //@line 3470 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 3470 "datetimemodule.c"
        var $16=($15); //@line 3470 "datetimemodule.c"
        var $17=($16) << 8; //@line 3470 "datetimemodule.c"
        var $18=$self_addr; //@line 3470 "datetimemodule.c"
        var $19=$18+13; //@line 3470 "datetimemodule.c"
        var $20=$19+5; //@line 3470 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 3470 "datetimemodule.c"
        var $22=($21); //@line 3470 "datetimemodule.c"
        var $23=($17) | ($11); //@line 3470 "datetimemodule.c"
        var $24=($23) | ($22); //@line 3470 "datetimemodule.c"
        var $25=($24)!=0; //@line 3470 "datetimemodule.c"
        if ($25) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3470 "datetimemodule.c"
      case 2: // $bb1
        $0=1; //@line 3474 "datetimemodule.c"
        __label__ = 9; break; //@line 3474 "datetimemodule.c"
      case 3: // $bb2
        $offset=0; //@line 3476 "datetimemodule.c"
        var $26=$self_addr; //@line 3477 "datetimemodule.c"
        var $27=$26; //@line 3477 "datetimemodule.c"
        var $28=$27+12; //@line 3477 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 3477 "datetimemodule.c"
        var $30=($29)!=0; //@line 3477 "datetimemodule.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 3477 "datetimemodule.c"
      case 4: // $bb3
        var $31=$self_addr; //@line 3477 "datetimemodule.c"
        var $32=$31+20; //@line 3477 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 3477 "datetimemodule.c"
        var $34=($33)!=(__Py_NoneStruct); //@line 3477 "datetimemodule.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 3477 "datetimemodule.c"
      case 5: // $bb4
        var $35=$self_addr; //@line 3478 "datetimemodule.c"
        var $36=$35+20; //@line 3478 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 3478 "datetimemodule.c"
        var $38=_call_utcoffset($37, __Py_NoneStruct, $none); //@line 3478 "datetimemodule.c"
        $offset=$38; //@line 3478 "datetimemodule.c"
        var $39=$offset; //@line 3479 "datetimemodule.c"
        var $40=($39)==-1; //@line 3479 "datetimemodule.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 3479 "datetimemodule.c"
      case 6: // $bb5
        var $41=_PyErr_Occurred(); //@line 3479 "datetimemodule.c"
        var $42=($41)!=0; //@line 3479 "datetimemodule.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3479 "datetimemodule.c"
      case 7: // $bb6
        $0=-1; //@line 3480 "datetimemodule.c"
        __label__ = 9; break; //@line 3480 "datetimemodule.c"
      case 8: // $bb7
        var $43=$self_addr; //@line 3482 "datetimemodule.c"
        var $44=$43+13; //@line 3482 "datetimemodule.c"
        var $45=$44+1; //@line 3482 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 3482 "datetimemodule.c"
        var $47=($46); //@line 3482 "datetimemodule.c"
        var $48=$offset; //@line 3482 "datetimemodule.c"
        var $_neg=0 - ($48);
        var $49=$self_addr; //@line 3482 "datetimemodule.c"
        var $50=$49+13; //@line 3482 "datetimemodule.c"
        var $51=$50; //@line 3482 "datetimemodule.c"
        var $52=HEAP[$51]; //@line 3482 "datetimemodule.c"
        var $53=($52); //@line 3482 "datetimemodule.c"
        var $54=($53) * 60; //@line 3482 "datetimemodule.c"
        var $55=($47) + ($_neg);
        var $56=($55) + ($54); //@line 3482 "datetimemodule.c"
        var $57=($56)!=0; //@line 3482 "datetimemodule.c"
        var $58=($57); //@line 3482 "datetimemodule.c"
        $0=$58; //@line 3482 "datetimemodule.c"
        __label__ = 9; break; //@line 3482 "datetimemodule.c"
      case 9: // $bb8
        var $59=$0; //@line 3474 "datetimemodule.c"
        $retval=$59; //@line 3474 "datetimemodule.c"
        var $retval9=$retval; //@line 3474 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 3474 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_getstate($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $basestate;
        var $result;
        $self_addr=$self;
        $result=0; //@line 3496 "datetimemodule.c"
        var $1=$self_addr; //@line 3498 "datetimemodule.c"
        var $2=$1+13; //@line 3498 "datetimemodule.c"
        var $3=$2; //@line 3498 "datetimemodule.c"
        var $4=_PyString_FromStringAndSize($3, 6); //@line 3498 "datetimemodule.c"
        $basestate=$4; //@line 3498 "datetimemodule.c"
        var $5=$basestate; //@line 3500 "datetimemodule.c"
        var $6=($5)!=0; //@line 3500 "datetimemodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3500 "datetimemodule.c"
      case 1: // $bb
        var $7=$self_addr; //@line 3501 "datetimemodule.c"
        var $8=$7; //@line 3501 "datetimemodule.c"
        var $9=$8+12; //@line 3501 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 3501 "datetimemodule.c"
        var $11=($10)==0; //@line 3501 "datetimemodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3501 "datetimemodule.c"
      case 2: // $bb1
        var $12=$self_addr; //@line 3501 "datetimemodule.c"
        var $13=$12+20; //@line 3501 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 3501 "datetimemodule.c"
        var $15=($14)==(__Py_NoneStruct); //@line 3501 "datetimemodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3501 "datetimemodule.c"
      case 3: // $bb2
        var $16=$basestate; //@line 3502 "datetimemodule.c"
        var $17=_PyTuple_Pack(1, allocate([$16,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3502 "datetimemodule.c"
        $result=$17; //@line 3502 "datetimemodule.c"
        __label__ = 5; break; //@line 3502 "datetimemodule.c"
      case 4: // $bb3
        var $18=$self_addr; //@line 3504 "datetimemodule.c"
        var $19=$18+20; //@line 3504 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 3504 "datetimemodule.c"
        var $21=$basestate; //@line 3504 "datetimemodule.c"
        var $22=_PyTuple_Pack(2, allocate([$21,0,0,0,$20,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3504 "datetimemodule.c"
        $result=$22; //@line 3504 "datetimemodule.c"
        __label__ = 5; break; //@line 3504 "datetimemodule.c"
      case 5: // $bb4
        var $23=$basestate; //@line 3505 "datetimemodule.c"
        var $24=$23; //@line 3505 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3505 "datetimemodule.c"
        var $26=($25) - 1; //@line 3505 "datetimemodule.c"
        var $27=$basestate; //@line 3505 "datetimemodule.c"
        var $28=$27; //@line 3505 "datetimemodule.c"
        HEAP[$28]=$26; //@line 3505 "datetimemodule.c"
        var $29=$basestate; //@line 3505 "datetimemodule.c"
        var $30=$29; //@line 3505 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 3505 "datetimemodule.c"
        var $32=($31)==0; //@line 3505 "datetimemodule.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3505 "datetimemodule.c"
      case 6: // $bb5
        var $33=$basestate; //@line 3505 "datetimemodule.c"
        var $34=$33+4; //@line 3505 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 3505 "datetimemodule.c"
        var $36=$35+24; //@line 3505 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 3505 "datetimemodule.c"
        var $38=$basestate; //@line 3505 "datetimemodule.c"
        FUNCTION_TABLE[$37]($38); //@line 3505 "datetimemodule.c"
        __label__ = 7; break; //@line 3505 "datetimemodule.c"
      case 7: // $bb6
        var $39=$result; //@line 3507 "datetimemodule.c"
        $0=$39; //@line 3507 "datetimemodule.c"
        var $40=$0; //@line 3507 "datetimemodule.c"
        $retval=$40; //@line 3507 "datetimemodule.c"
        var $retval7=$retval; //@line 3507 "datetimemodule.c"
        ;
        return $retval7; //@line 3507 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_reduce($self, $arg) {
    ;
    var __label__;
  
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $arg_addr=$arg;
    var $1=$self_addr; //@line 3513 "datetimemodule.c"
    var $2=_time_getstate($1); //@line 3513 "datetimemodule.c"
    var $3=$self_addr; //@line 3513 "datetimemodule.c"
    var $4=$3; //@line 3513 "datetimemodule.c"
    var $5=$4+4; //@line 3513 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 3513 "datetimemodule.c"
    var $7=__Py_BuildValue_SizeT(__str154, allocate([$6,0,0,0,$2,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3513 "datetimemodule.c"
    $0=$7; //@line 3513 "datetimemodule.c"
    var $8=$0; //@line 3513 "datetimemodule.c"
    $retval=$8; //@line 3513 "datetimemodule.c"
    var $retval1=$retval; //@line 3513 "datetimemodule.c"
    ;
    return $retval1; //@line 3513 "datetimemodule.c"
  }
  

  function _datetime_hour($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3621 "datetimemodule.c"
    var $2=$1+13; //@line 3621 "datetimemodule.c"
    var $3=$2+4; //@line 3621 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3621 "datetimemodule.c"
    var $5=($4); //@line 3621 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3621 "datetimemodule.c"
    $0=$6; //@line 3621 "datetimemodule.c"
    var $7=$0; //@line 3621 "datetimemodule.c"
    $retval=$7; //@line 3621 "datetimemodule.c"
    var $retval1=$retval; //@line 3621 "datetimemodule.c"
    ;
    return $retval1; //@line 3621 "datetimemodule.c"
  }
  

  function _datetime_minute($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3627 "datetimemodule.c"
    var $2=$1+13; //@line 3627 "datetimemodule.c"
    var $3=$2+5; //@line 3627 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3627 "datetimemodule.c"
    var $5=($4); //@line 3627 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3627 "datetimemodule.c"
    $0=$6; //@line 3627 "datetimemodule.c"
    var $7=$0; //@line 3627 "datetimemodule.c"
    $retval=$7; //@line 3627 "datetimemodule.c"
    var $retval1=$retval; //@line 3627 "datetimemodule.c"
    ;
    return $retval1; //@line 3627 "datetimemodule.c"
  }
  

  function _datetime_second($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3633 "datetimemodule.c"
    var $2=$1+13; //@line 3633 "datetimemodule.c"
    var $3=$2+6; //@line 3633 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3633 "datetimemodule.c"
    var $5=($4); //@line 3633 "datetimemodule.c"
    var $6=_PyInt_FromLong($5); //@line 3633 "datetimemodule.c"
    $0=$6; //@line 3633 "datetimemodule.c"
    var $7=$0; //@line 3633 "datetimemodule.c"
    $retval=$7; //@line 3633 "datetimemodule.c"
    var $retval1=$retval; //@line 3633 "datetimemodule.c"
    ;
    return $retval1; //@line 3633 "datetimemodule.c"
  }
  

  function _datetime_microsecond($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=$self_addr; //@line 3639 "datetimemodule.c"
    var $2=$1+13; //@line 3639 "datetimemodule.c"
    var $3=$2+7; //@line 3639 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 3639 "datetimemodule.c"
    var $5=($4); //@line 3639 "datetimemodule.c"
    var $6=($5) << 16; //@line 3639 "datetimemodule.c"
    var $7=$self_addr; //@line 3639 "datetimemodule.c"
    var $8=$7+13; //@line 3639 "datetimemodule.c"
    var $9=$8+8; //@line 3639 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 3639 "datetimemodule.c"
    var $11=($10); //@line 3639 "datetimemodule.c"
    var $12=($11) << 8; //@line 3639 "datetimemodule.c"
    var $13=$self_addr; //@line 3639 "datetimemodule.c"
    var $14=$13+13; //@line 3639 "datetimemodule.c"
    var $15=$14+9; //@line 3639 "datetimemodule.c"
    var $16=HEAP[$15]; //@line 3639 "datetimemodule.c"
    var $17=($16); //@line 3639 "datetimemodule.c"
    var $18=($12) | ($6); //@line 3639 "datetimemodule.c"
    var $19=($18) | ($17); //@line 3639 "datetimemodule.c"
    var $20=_PyInt_FromLong($19); //@line 3639 "datetimemodule.c"
    $0=$20; //@line 3639 "datetimemodule.c"
    var $21=$0; //@line 3639 "datetimemodule.c"
    $retval=$21; //@line 3639 "datetimemodule.c"
    var $retval1=$retval; //@line 3639 "datetimemodule.c"
    ;
    return $retval1; //@line 3639 "datetimemodule.c"
  }
  

  function _datetime_tzinfo($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $iftmp_348;
        var $result;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 3645 "datetimemodule.c"
        var $2=$1; //@line 3645 "datetimemodule.c"
        var $3=$2+12; //@line 3645 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3645 "datetimemodule.c"
        var $5=($4)!=0; //@line 3645 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3645 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 3645 "datetimemodule.c"
        var $7=$6+24; //@line 3645 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 3645 "datetimemodule.c"
        $iftmp_348=$8; //@line 3645 "datetimemodule.c"
        __label__ = 3; break; //@line 3645 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_348=__Py_NoneStruct; //@line 3645 "datetimemodule.c"
        __label__ = 3; break; //@line 3645 "datetimemodule.c"
      case 3: // $bb2
        var $9=$iftmp_348; //@line 3645 "datetimemodule.c"
        $result=$9; //@line 3645 "datetimemodule.c"
        var $10=$result; //@line 3646 "datetimemodule.c"
        var $11=$10; //@line 3646 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 3646 "datetimemodule.c"
        var $13=($12) + 1; //@line 3646 "datetimemodule.c"
        var $14=$result; //@line 3646 "datetimemodule.c"
        var $15=$14; //@line 3646 "datetimemodule.c"
        HEAP[$15]=$13; //@line 3646 "datetimemodule.c"
        var $16=$result; //@line 3647 "datetimemodule.c"
        $0=$16; //@line 3647 "datetimemodule.c"
        var $17=$0; //@line 3647 "datetimemodule.c"
        $retval=$17; //@line 3647 "datetimemodule.c"
        var $retval3=$retval; //@line 3647 "datetimemodule.c"
        ;
        return $retval3; //@line 3647 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_new($type, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $self;
        var $state;
        var $year=__stackBase__;
        var $month=__stackBase__+4;
        var $day=__stackBase__+8;
        var $hour=__stackBase__+12;
        var $minute=__stackBase__+16;
        var $second=__stackBase__+20;
        var $usecond=__stackBase__+24;
        var $tzinfo=__stackBase__+28;
        var $me;
        var $aware;
        var $pdata;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        $self=0; //@line 3671 "datetimemodule.c"
        HEAP[$hour]=0; //@line 3676 "datetimemodule.c"
        HEAP[$minute]=0; //@line 3677 "datetimemodule.c"
        HEAP[$second]=0; //@line 3678 "datetimemodule.c"
        HEAP[$usecond]=0; //@line 3679 "datetimemodule.c"
        HEAP[$tzinfo]=__Py_NoneStruct; //@line 3680 "datetimemodule.c"
        var $1=$args_addr; //@line 3683 "datetimemodule.c"
        var $2=$1; //@line 3683 "datetimemodule.c"
        var $3=$2+8; //@line 3683 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 3683 "datetimemodule.c"
        var $5=($4) > 0; //@line 3683 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 3683 "datetimemodule.c"
      case 1: // $bb
        var $6=$args_addr; //@line 3683 "datetimemodule.c"
        var $7=$6; //@line 3683 "datetimemodule.c"
        var $8=$7+8; //@line 3683 "datetimemodule.c"
        var $9=HEAP[$8]; //@line 3683 "datetimemodule.c"
        var $10=($9) <= 2; //@line 3683 "datetimemodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 12; break; } //@line 3683 "datetimemodule.c"
      case 2: // $bb1
        var $11=$args_addr; //@line 3683 "datetimemodule.c"
        var $12=$11; //@line 3683 "datetimemodule.c"
        var $13=$12+12; //@line 3683 "datetimemodule.c"
        var $14=$13; //@line 3683 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 3683 "datetimemodule.c"
        $state=$15; //@line 3683 "datetimemodule.c"
        var $16=$state; //@line 3683 "datetimemodule.c"
        var $17=$16+4; //@line 3683 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 3683 "datetimemodule.c"
        var $19=$18+84; //@line 3683 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 3683 "datetimemodule.c"
        var $21=($20) & 134217728; //@line 3683 "datetimemodule.c"
        var $22=($21)!=0; //@line 3683 "datetimemodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 3683 "datetimemodule.c"
      case 3: // $bb2
        var $23=$state; //@line 3683 "datetimemodule.c"
        var $24=$23; //@line 3683 "datetimemodule.c"
        var $25=$24+8; //@line 3683 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 3683 "datetimemodule.c"
        var $27=($26)==10; //@line 3683 "datetimemodule.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 3683 "datetimemodule.c"
      case 4: // $bb3
        var $28=$state; //@line 3683 "datetimemodule.c"
        var $29=$28; //@line 3683 "datetimemodule.c"
        var $30=$29+20; //@line 3683 "datetimemodule.c"
        var $31=$30+2; //@line 3683 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 3683 "datetimemodule.c"
        var $33=($32); //@line 3683 "datetimemodule.c"
        var $34=($33) - 1; //@line 3683 "datetimemodule.c"
        var $35=($34) <= 11; //@line 3683 "datetimemodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 3683 "datetimemodule.c"
      case 5: // $bb4
        var $36=$args_addr; //@line 3692 "datetimemodule.c"
        var $37=$36; //@line 3692 "datetimemodule.c"
        var $38=$37+8; //@line 3692 "datetimemodule.c"
        var $39=HEAP[$38]; //@line 3692 "datetimemodule.c"
        var $40=($39)==2; //@line 3692 "datetimemodule.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 3692 "datetimemodule.c"
      case 6: // $bb5
        var $41=$args_addr; //@line 3693 "datetimemodule.c"
        var $42=$41; //@line 3693 "datetimemodule.c"
        var $43=$42+12; //@line 3693 "datetimemodule.c"
        var $44=$43+4; //@line 3693 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 3693 "datetimemodule.c"
        HEAP[$tzinfo]=$45; //@line 3693 "datetimemodule.c"
        var $46=HEAP[$tzinfo]; //@line 3694 "datetimemodule.c"
        var $47=_check_tzinfo_subclass($46); //@line 3694 "datetimemodule.c"
        var $48=($47) < 0; //@line 3694 "datetimemodule.c"
        if ($48) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3694 "datetimemodule.c"
      case 7: // $bb6
        var $49=HEAP[_PyExc_TypeError]; //@line 3695 "datetimemodule.c"
        _PyErr_SetString($49, __str197); //@line 3695 "datetimemodule.c"
        $0=0; //@line 3697 "datetimemodule.c"
        __label__ = 21; break; //@line 3697 "datetimemodule.c"
      case 8: // $bb7
        var $50=HEAP[$tzinfo]; //@line 3700 "datetimemodule.c"
        var $51=($50)!=(__Py_NoneStruct); //@line 3700 "datetimemodule.c"
        var $52=($51); //@line 3700 "datetimemodule.c"
        $aware=$52; //@line 3700 "datetimemodule.c"
        var $53=$type_addr; //@line 3701 "datetimemodule.c"
        var $54=$53+152; //@line 3701 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 3701 "datetimemodule.c"
        var $56=$aware; //@line 3701 "datetimemodule.c"
        var $57=($56); //@line 3701 "datetimemodule.c"
        var $58=$type_addr; //@line 3701 "datetimemodule.c"
        var $59=FUNCTION_TABLE[$55]($58, $57); //@line 3701 "datetimemodule.c"
        var $60=$59; //@line 3701 "datetimemodule.c"
        $me=$60; //@line 3701 "datetimemodule.c"
        var $61=($60)!=0; //@line 3702 "datetimemodule.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 3702 "datetimemodule.c"
      case 9: // $bb8
        var $62=$state; //@line 3703 "datetimemodule.c"
        var $63=$62; //@line 3703 "datetimemodule.c"
        var $64=$63+20; //@line 3703 "datetimemodule.c"
        var $65=$64; //@line 3703 "datetimemodule.c"
        $pdata=$65; //@line 3703 "datetimemodule.c"
        var $66=$me; //@line 3705 "datetimemodule.c"
        var $67=$66+13; //@line 3705 "datetimemodule.c"
        var $68=$67; //@line 3705 "datetimemodule.c"
        var $69=$pdata; //@line 3705 "datetimemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($68, $69, 10, 1, 0); //@line 3705 "datetimemodule.c"
        var $70=$me; //@line 3706 "datetimemodule.c"
        var $71=$70+8; //@line 3706 "datetimemodule.c"
        HEAP[$71]=-1; //@line 3706 "datetimemodule.c"
        var $72=$me; //@line 3707 "datetimemodule.c"
        var $73=$72+12; //@line 3707 "datetimemodule.c"
        var $74=$aware; //@line 3707 "datetimemodule.c"
        HEAP[$73]=$74; //@line 3707 "datetimemodule.c"
        var $75=$aware; //@line 3708 "datetimemodule.c"
        var $76=($75)!=0; //@line 3708 "datetimemodule.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3708 "datetimemodule.c"
      case 10: // $bb9
        var $77=HEAP[$tzinfo]; //@line 3709 "datetimemodule.c"
        var $78=$77; //@line 3709 "datetimemodule.c"
        var $79=HEAP[$78]; //@line 3709 "datetimemodule.c"
        var $80=($79) + 1; //@line 3709 "datetimemodule.c"
        var $81=$77; //@line 3709 "datetimemodule.c"
        HEAP[$81]=$80; //@line 3709 "datetimemodule.c"
        var $82=HEAP[$tzinfo]; //@line 3710 "datetimemodule.c"
        var $83=$me; //@line 3710 "datetimemodule.c"
        var $84=$83+24; //@line 3710 "datetimemodule.c"
        HEAP[$84]=$82; //@line 3710 "datetimemodule.c"
        __label__ = 11; break; //@line 3710 "datetimemodule.c"
      case 11: // $bb10
        var $85=$me; //@line 3713 "datetimemodule.c"
        var $86=$85; //@line 3713 "datetimemodule.c"
        $0=$86; //@line 3713 "datetimemodule.c"
        __label__ = 21; break; //@line 3713 "datetimemodule.c"
      case 12: // $bb11
        var $87=$args_addr; //@line 3716 "datetimemodule.c"
        var $88=$kw_addr; //@line 3716 "datetimemodule.c"
        var $89=__PyArg_ParseTupleAndKeywords_SizeT($87, $88, __str219, _datetime_kws, allocate([$year,0,0,0,$month,0,0,0,$day,0,0,0,$hour,0,0,0,$minute,0,0,0,$second,0,0,0,$usecond,0,0,0,$tzinfo,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 3716 "datetimemodule.c"
        var $90=($89)!=0; //@line 3716 "datetimemodule.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 3716 "datetimemodule.c"
      case 13: // $bb12
        var $91=HEAP[$day]; //@line 3719 "datetimemodule.c"
        var $92=HEAP[$month]; //@line 3719 "datetimemodule.c"
        var $93=HEAP[$year]; //@line 3719 "datetimemodule.c"
        var $94=_check_date_args($93, $92, $91); //@line 3719 "datetimemodule.c"
        var $95=($94) < 0; //@line 3719 "datetimemodule.c"
        if ($95) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3719 "datetimemodule.c"
      case 14: // $bb13
        $0=0; //@line 3720 "datetimemodule.c"
        __label__ = 21; break; //@line 3720 "datetimemodule.c"
      case 15: // $bb14
        var $96=HEAP[$usecond]; //@line 3721 "datetimemodule.c"
        var $97=HEAP[$second]; //@line 3721 "datetimemodule.c"
        var $98=HEAP[$minute]; //@line 3721 "datetimemodule.c"
        var $99=HEAP[$hour]; //@line 3721 "datetimemodule.c"
        var $100=_check_time_args($99, $98, $97, $96); //@line 3721 "datetimemodule.c"
        var $101=($100) < 0; //@line 3721 "datetimemodule.c"
        if ($101) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3721 "datetimemodule.c"
      case 16: // $bb15
        $0=0; //@line 3722 "datetimemodule.c"
        __label__ = 21; break; //@line 3722 "datetimemodule.c"
      case 17: // $bb16
        var $102=HEAP[$tzinfo]; //@line 3723 "datetimemodule.c"
        var $103=_check_tzinfo_subclass($102); //@line 3723 "datetimemodule.c"
        var $104=($103) < 0; //@line 3723 "datetimemodule.c"
        if ($104) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3723 "datetimemodule.c"
      case 18: // $bb17
        $0=0; //@line 3724 "datetimemodule.c"
        __label__ = 21; break; //@line 3724 "datetimemodule.c"
      case 19: // $bb18
        var $105=HEAP[$tzinfo]; //@line 3725 "datetimemodule.c"
        var $106=HEAP[$usecond]; //@line 3725 "datetimemodule.c"
        var $107=HEAP[$second]; //@line 3725 "datetimemodule.c"
        var $108=HEAP[$minute]; //@line 3725 "datetimemodule.c"
        var $109=HEAP[$hour]; //@line 3725 "datetimemodule.c"
        var $110=HEAP[$day]; //@line 3725 "datetimemodule.c"
        var $111=HEAP[$month]; //@line 3725 "datetimemodule.c"
        var $112=HEAP[$year]; //@line 3725 "datetimemodule.c"
        var $113=$type_addr; //@line 3725 "datetimemodule.c"
        var $114=_new_datetime_ex($112, $111, $110, $109, $108, $107, $106, $105, $113); //@line 3725 "datetimemodule.c"
        $self=$114; //@line 3725 "datetimemodule.c"
        __label__ = 20; break; //@line 3725 "datetimemodule.c"
      case 20: // $bb19
        var $115=$self; //@line 3729 "datetimemodule.c"
        $0=$115; //@line 3729 "datetimemodule.c"
        __label__ = 21; break; //@line 3729 "datetimemodule.c"
      case 21: // $bb20
        var $116=$0; //@line 3697 "datetimemodule.c"
        $retval=$116; //@line 3697 "datetimemodule.c"
        var $retval21=$retval; //@line 3697 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 3697 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_from_timet_and_us($cls, $f, $timet, $us, $tzinfo) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $f_addr;
        var $timet_addr=__stackBase__;
        var $us_addr;
        var $tzinfo_addr;
        var $retval;
        var $0;
        var $tm;
        var $result;
        $cls_addr=$cls;
        $f_addr=$f;
        HEAP[$timet_addr]=$timet;
        $us_addr=$us;
        $tzinfo_addr=$tzinfo;
        $result=0; //@line 3744 "datetimemodule.c"
        var $1=$f_addr; //@line 3746 "datetimemodule.c"
        var $2=FUNCTION_TABLE[$1]($timet_addr); //@line 3746 "datetimemodule.c"
        $tm=$2; //@line 3746 "datetimemodule.c"
        var $3=$tm; //@line 3747 "datetimemodule.c"
        var $4=($3)!=0; //@line 3747 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 3747 "datetimemodule.c"
      case 1: // $bb
        var $5=$tm; //@line 3754 "datetimemodule.c"
        var $6=$5; //@line 3754 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 3754 "datetimemodule.c"
        var $8=($7) > 59; //@line 3754 "datetimemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3754 "datetimemodule.c"
      case 2: // $bb1
        var $9=$tm; //@line 3755 "datetimemodule.c"
        var $10=$9; //@line 3755 "datetimemodule.c"
        HEAP[$10]=59; //@line 3755 "datetimemodule.c"
        __label__ = 3; break; //@line 3755 "datetimemodule.c"
      case 3: // $bb2
        var $11=$tm; //@line 3756 "datetimemodule.c"
        var $12=$11; //@line 3756 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 3756 "datetimemodule.c"
        var $14=$tm; //@line 3756 "datetimemodule.c"
        var $15=$14+4; //@line 3756 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 3756 "datetimemodule.c"
        var $17=$tm; //@line 3756 "datetimemodule.c"
        var $18=$17+8; //@line 3756 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 3756 "datetimemodule.c"
        var $20=$tm; //@line 3756 "datetimemodule.c"
        var $21=$20+12; //@line 3756 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 3756 "datetimemodule.c"
        var $23=$tm; //@line 3756 "datetimemodule.c"
        var $24=$23+16; //@line 3756 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 3756 "datetimemodule.c"
        var $26=($25) + 1; //@line 3756 "datetimemodule.c"
        var $27=$tm; //@line 3756 "datetimemodule.c"
        var $28=$27+20; //@line 3756 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 3756 "datetimemodule.c"
        var $30=($29) + 1900; //@line 3756 "datetimemodule.c"
        var $31=$cls_addr; //@line 3756 "datetimemodule.c"
        var $32=$us_addr; //@line 3756 "datetimemodule.c"
        var $33=$tzinfo_addr; //@line 3756 "datetimemodule.c"
        var $34=__PyObject_CallFunction_SizeT($31, __str220, allocate([$30,0,0,0,$26,0,0,0,$22,0,0,0,$19,0,0,0,$16,0,0,0,$13,0,0,0,$32,0,0,0,$33,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3756 "datetimemodule.c"
        $result=$34; //@line 3756 "datetimemodule.c"
        __label__ = 5; break; //@line 3756 "datetimemodule.c"
      case 4: // $bb3
        var $35=HEAP[_PyExc_ValueError]; //@line 3767 "datetimemodule.c"
        _PyErr_SetString($35, __str221); //@line 3767 "datetimemodule.c"
        __label__ = 5; break; //@line 3767 "datetimemodule.c"
      case 5: // $bb4
        var $36=$result; //@line 3770 "datetimemodule.c"
        $0=$36; //@line 3770 "datetimemodule.c"
        var $37=$0; //@line 3770 "datetimemodule.c"
        $retval=$37; //@line 3770 "datetimemodule.c"
        var $retval5=$retval; //@line 3770 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3770 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_from_timestamp($cls, $f, $timestamp, $tzinfo) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $f_addr;
        var $timestamp_addr;
        var $tzinfo_addr;
        var $retval;
        var $0;
        var $timet;
        var $fraction;
        var $us;
        $cls_addr=$cls;
        $f_addr=$f;
        $timestamp_addr=$timestamp;
        $tzinfo_addr=$tzinfo;
        var $1=$timestamp_addr; //@line 3788 "datetimemodule.c"
        var $2=__PyTime_DoubleToTimet($1); //@line 3788 "datetimemodule.c"
        $timet=$2; //@line 3788 "datetimemodule.c"
        var $3=$timet; //@line 3789 "datetimemodule.c"
        var $4=($3)==-1; //@line 3789 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3789 "datetimemodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 3789 "datetimemodule.c"
        var $6=($5)!=0; //@line 3789 "datetimemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3789 "datetimemodule.c"
      case 2: // $bb1
        $0=0; //@line 3790 "datetimemodule.c"
        __label__ = 8; break; //@line 3790 "datetimemodule.c"
      case 3: // $bb2
        var $7=$timet; //@line 3791 "datetimemodule.c"
        var $8=($7); //@line 3791 "datetimemodule.c"
        var $9=$timestamp_addr; //@line 3791 "datetimemodule.c"
        var $10=($9) - ($8); //@line 3791 "datetimemodule.c"
        $fraction=$10; //@line 3791 "datetimemodule.c"
        var $11=$fraction; //@line 3792 "datetimemodule.c"
        var $12=($11) * 1000000; //@line 3792 "datetimemodule.c"
        var $13=_round_to_long($12); //@line 3792 "datetimemodule.c"
        $us=$13; //@line 3792 "datetimemodule.c"
        var $14=($13) < 0; //@line 3793 "datetimemodule.c"
        if ($14) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 5; break; } //@line 3793 "datetimemodule.c"
      case 4: // $bb3
        var $15=$timet; //@line 3796 "datetimemodule.c"
        var $16=($15) - 1; //@line 3796 "datetimemodule.c"
        $timet=$16; //@line 3796 "datetimemodule.c"
        var $17=$us; //@line 3797 "datetimemodule.c"
        var $18=($17) + 1000000; //@line 3797 "datetimemodule.c"
        $us=$18; //@line 3797 "datetimemodule.c"
        __lastLabel__ = 4; __label__ = 5; break; //@line 3797 "datetimemodule.c"
      case 5: // $bb4
        var $19=__lastLabel__ == 4 ? $18 : ($13);
        var $20=($19)==1000000; //@line 3802 "datetimemodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3802 "datetimemodule.c"
      case 6: // $bb5
        var $21=$timet; //@line 3803 "datetimemodule.c"
        var $22=($21) + 1; //@line 3803 "datetimemodule.c"
        $timet=$22; //@line 3803 "datetimemodule.c"
        $us=0; //@line 3804 "datetimemodule.c"
        __label__ = 7; break; //@line 3804 "datetimemodule.c"
      case 7: // $bb6
        var $23=$cls_addr; //@line 3806 "datetimemodule.c"
        var $24=$f_addr; //@line 3806 "datetimemodule.c"
        var $25=$timet; //@line 3806 "datetimemodule.c"
        var $26=$us; //@line 3806 "datetimemodule.c"
        var $27=$tzinfo_addr; //@line 3806 "datetimemodule.c"
        var $28=_datetime_from_timet_and_us($23, $24, $25, $26, $27); //@line 3806 "datetimemodule.c"
        $0=$28; //@line 3806 "datetimemodule.c"
        __label__ = 8; break; //@line 3806 "datetimemodule.c"
      case 8: // $bb7
        var $29=$0; //@line 3790 "datetimemodule.c"
        $retval=$29; //@line 3790 "datetimemodule.c"
        var $retval8=$retval; //@line 3790 "datetimemodule.c"
        ;
        return $retval8; //@line 3790 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_best_possible($cls, $f, $tzinfo) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
  
    var $cls_addr;
    var $f_addr;
    var $tzinfo_addr;
    var $retval;
    var $0;
    var $t=__stackBase__;
    $cls_addr=$cls;
    $f_addr=$f;
    $tzinfo_addr=$tzinfo;
    var $1=_gettimeofday($t, 0); //@line 3822 "datetimemodule.c"
    var $2=$t+4; //@line 3824 "datetimemodule.c"
    var $3=HEAP[$2]; //@line 3824 "datetimemodule.c"
    var $4=$t; //@line 3824 "datetimemodule.c"
    var $5=HEAP[$4]; //@line 3824 "datetimemodule.c"
    var $6=$cls_addr; //@line 3824 "datetimemodule.c"
    var $7=$f_addr; //@line 3824 "datetimemodule.c"
    var $8=$tzinfo_addr; //@line 3824 "datetimemodule.c"
    var $9=_datetime_from_timet_and_us($6, $7, $5, $3, $8); //@line 3824 "datetimemodule.c"
    $0=$9; //@line 3824 "datetimemodule.c"
    var $10=$0; //@line 3824 "datetimemodule.c"
    $retval=$10; //@line 3824 "datetimemodule.c"
    var $retval1=$retval; //@line 3824 "datetimemodule.c"
    STACKTOP = __stackBase__;
    return $retval1; //@line 3824 "datetimemodule.c"
  }
  

  function _datetime_now($cls, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $iftmp_382;
        var $0;
        var $self;
        var $tzinfo=__stackBase__;
        var $temp;
        $cls_addr=$cls;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$tzinfo]=__Py_NoneStruct; //@line 3856 "datetimemodule.c"
        var $1=$args_addr; //@line 3859 "datetimemodule.c"
        var $2=$kw_addr; //@line 3859 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str222, _keywords_12654, allocate([$tzinfo,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 3859 "datetimemodule.c"
        var $4=($3)==0; //@line 3859 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3859 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 3861 "datetimemodule.c"
        __label__ = 11; break; //@line 3861 "datetimemodule.c"
      case 2: // $bb1
        var $5=HEAP[$tzinfo]; //@line 3862 "datetimemodule.c"
        var $6=_check_tzinfo_subclass($5); //@line 3862 "datetimemodule.c"
        var $7=($6) < 0; //@line 3862 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3862 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 3863 "datetimemodule.c"
        __label__ = 11; break; //@line 3863 "datetimemodule.c"
      case 4: // $bb3
        var $8=HEAP[$tzinfo]; //@line 3865 "datetimemodule.c"
        var $9=HEAP[$tzinfo]; //@line 3865 "datetimemodule.c"
        var $10=($9)==(__Py_NoneStruct); //@line 3865 "datetimemodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3865 "datetimemodule.c"
      case 5: // $bb4
        $iftmp_382=(FUNCTION_TABLE_OFFSET + 2); //@line 3865 "datetimemodule.c"
        __label__ = 7; break; //@line 3865 "datetimemodule.c"
      case 6: // $bb5
        $iftmp_382=(FUNCTION_TABLE_OFFSET + 4); //@line 3865 "datetimemodule.c"
        __label__ = 7; break; //@line 3865 "datetimemodule.c"
      case 7: // $bb6
        var $11=$cls_addr; //@line 3865 "datetimemodule.c"
        var $12=$iftmp_382; //@line 3865 "datetimemodule.c"
        var $13=_datetime_best_possible($11, $12, $8); //@line 3865 "datetimemodule.c"
        $self=$13; //@line 3865 "datetimemodule.c"
        var $14=($13)!=0; //@line 3868 "datetimemodule.c"
        var $15=HEAP[$tzinfo]; //@line 3868 "datetimemodule.c"
        var $16=($15)!=(__Py_NoneStruct); //@line 3868 "datetimemodule.c"
        var $or_cond=($14) & ($16);
        if ($or_cond) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 3868 "datetimemodule.c"
      case 8: // $bb8
        var $17=$self; //@line 3870 "datetimemodule.c"
        $temp=$17; //@line 3870 "datetimemodule.c"
        var $18=HEAP[$tzinfo]; //@line 3871 "datetimemodule.c"
        var $19=$self; //@line 3871 "datetimemodule.c"
        var $20=__PyObject_CallMethod_SizeT($18, __str189, __str35, allocate([$19,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3871 "datetimemodule.c"
        $self=$20; //@line 3871 "datetimemodule.c"
        var $21=$temp; //@line 3872 "datetimemodule.c"
        var $22=$21; //@line 3872 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 3872 "datetimemodule.c"
        var $24=($23) - 1; //@line 3872 "datetimemodule.c"
        var $25=$temp; //@line 3872 "datetimemodule.c"
        var $26=$25; //@line 3872 "datetimemodule.c"
        HEAP[$26]=$24; //@line 3872 "datetimemodule.c"
        var $27=$temp; //@line 3872 "datetimemodule.c"
        var $28=$27; //@line 3872 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 3872 "datetimemodule.c"
        var $30=($29)==0; //@line 3872 "datetimemodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3872 "datetimemodule.c"
      case 9: // $bb9
        var $31=$temp; //@line 3872 "datetimemodule.c"
        var $32=$31+4; //@line 3872 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 3872 "datetimemodule.c"
        var $34=$33+24; //@line 3872 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 3872 "datetimemodule.c"
        var $36=$temp; //@line 3872 "datetimemodule.c"
        FUNCTION_TABLE[$35]($36); //@line 3872 "datetimemodule.c"
        __label__ = 10; break; //@line 3872 "datetimemodule.c"
      case 10: // $bb10
        var $37=$self; //@line 3874 "datetimemodule.c"
        $0=$37; //@line 3874 "datetimemodule.c"
        __label__ = 11; break; //@line 3874 "datetimemodule.c"
      case 11: // $bb11
        var $38=$0; //@line 3861 "datetimemodule.c"
        $retval=$38; //@line 3861 "datetimemodule.c"
        var $retval12=$retval; //@line 3861 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3861 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_utcnow($cls, $dummy) {
    ;
    var __label__;
  
    var $cls_addr;
    var $dummy_addr;
    var $retval;
    var $0;
    $cls_addr=$cls;
    $dummy_addr=$dummy;
    var $1=$cls_addr; //@line 3883 "datetimemodule.c"
    var $2=_datetime_best_possible($1, (FUNCTION_TABLE_OFFSET + 4), __Py_NoneStruct); //@line 3883 "datetimemodule.c"
    $0=$2; //@line 3883 "datetimemodule.c"
    var $3=$0; //@line 3883 "datetimemodule.c"
    $retval=$3; //@line 3883 "datetimemodule.c"
    var $retval1=$retval; //@line 3883 "datetimemodule.c"
    ;
    return $retval1; //@line 3883 "datetimemodule.c"
  }
  

  function _datetime_fromtimestamp($cls, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $iftmp_389;
        var $0;
        var $self;
        var $timestamp=__stackBase__;
        var $tzinfo=__stackBase__+8;
        var $temp;
        $cls_addr=$cls;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$tzinfo]=__Py_NoneStruct; //@line 3892 "datetimemodule.c"
        var $1=$args_addr; //@line 3895 "datetimemodule.c"
        var $2=$kw_addr; //@line 3895 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str224, _keywords_12701, allocate([$timestamp,0,0,0,$tzinfo,0,0,0], ["double*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 3895 "datetimemodule.c"
        var $4=($3)==0; //@line 3895 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3895 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 3897 "datetimemodule.c"
        __label__ = 11; break; //@line 3897 "datetimemodule.c"
      case 2: // $bb1
        var $5=HEAP[$tzinfo]; //@line 3898 "datetimemodule.c"
        var $6=_check_tzinfo_subclass($5); //@line 3898 "datetimemodule.c"
        var $7=($6) < 0; //@line 3898 "datetimemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3898 "datetimemodule.c"
      case 3: // $bb2
        $0=0; //@line 3899 "datetimemodule.c"
        __label__ = 11; break; //@line 3899 "datetimemodule.c"
      case 4: // $bb3
        var $8=HEAP[$tzinfo]; //@line 3901 "datetimemodule.c"
        var $9=HEAP[$timestamp]; //@line 3901 "datetimemodule.c"
        var $10=HEAP[$tzinfo]; //@line 3901 "datetimemodule.c"
        var $11=($10)==(__Py_NoneStruct); //@line 3901 "datetimemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3901 "datetimemodule.c"
      case 5: // $bb4
        $iftmp_389=(FUNCTION_TABLE_OFFSET + 2); //@line 3901 "datetimemodule.c"
        __label__ = 7; break; //@line 3901 "datetimemodule.c"
      case 6: // $bb5
        $iftmp_389=(FUNCTION_TABLE_OFFSET + 4); //@line 3901 "datetimemodule.c"
        __label__ = 7; break; //@line 3901 "datetimemodule.c"
      case 7: // $bb6
        var $12=$cls_addr; //@line 3901 "datetimemodule.c"
        var $13=$iftmp_389; //@line 3901 "datetimemodule.c"
        var $14=_datetime_from_timestamp($12, $13, $9, $8); //@line 3901 "datetimemodule.c"
        $self=$14; //@line 3901 "datetimemodule.c"
        var $15=($14)!=0; //@line 3905 "datetimemodule.c"
        var $16=HEAP[$tzinfo]; //@line 3905 "datetimemodule.c"
        var $17=($16)!=(__Py_NoneStruct); //@line 3905 "datetimemodule.c"
        var $or_cond=($15) & ($17);
        if ($or_cond) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 3905 "datetimemodule.c"
      case 8: // $bb8
        var $18=$self; //@line 3907 "datetimemodule.c"
        $temp=$18; //@line 3907 "datetimemodule.c"
        var $19=HEAP[$tzinfo]; //@line 3908 "datetimemodule.c"
        var $20=$self; //@line 3908 "datetimemodule.c"
        var $21=__PyObject_CallMethod_SizeT($19, __str189, __str35, allocate([$20,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 3908 "datetimemodule.c"
        $self=$21; //@line 3908 "datetimemodule.c"
        var $22=$temp; //@line 3909 "datetimemodule.c"
        var $23=$22; //@line 3909 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 3909 "datetimemodule.c"
        var $25=($24) - 1; //@line 3909 "datetimemodule.c"
        var $26=$temp; //@line 3909 "datetimemodule.c"
        var $27=$26; //@line 3909 "datetimemodule.c"
        HEAP[$27]=$25; //@line 3909 "datetimemodule.c"
        var $28=$temp; //@line 3909 "datetimemodule.c"
        var $29=$28; //@line 3909 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 3909 "datetimemodule.c"
        var $31=($30)==0; //@line 3909 "datetimemodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3909 "datetimemodule.c"
      case 9: // $bb9
        var $32=$temp; //@line 3909 "datetimemodule.c"
        var $33=$32+4; //@line 3909 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 3909 "datetimemodule.c"
        var $35=$34+24; //@line 3909 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 3909 "datetimemodule.c"
        var $37=$temp; //@line 3909 "datetimemodule.c"
        FUNCTION_TABLE[$36]($37); //@line 3909 "datetimemodule.c"
        __label__ = 10; break; //@line 3909 "datetimemodule.c"
      case 10: // $bb10
        var $38=$self; //@line 3911 "datetimemodule.c"
        $0=$38; //@line 3911 "datetimemodule.c"
        __label__ = 11; break; //@line 3911 "datetimemodule.c"
      case 11: // $bb11
        var $39=$0; //@line 3897 "datetimemodule.c"
        $retval=$39; //@line 3897 "datetimemodule.c"
        var $retval12=$retval; //@line 3897 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3897 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_utcfromtimestamp($cls, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $timestamp=__stackBase__;
        var $result;
        $cls_addr=$cls;
        $args_addr=$args;
        $result=0; //@line 3919 "datetimemodule.c"
        var $1=$args_addr; //@line 3921 "datetimemodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str226, allocate([$timestamp,0,0,0], ["double*",0,0,0], ALLOC_STACK)); //@line 3921 "datetimemodule.c"
        var $3=($2)!=0; //@line 3921 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3921 "datetimemodule.c"
      case 1: // $bb
        var $4=HEAP[$timestamp]; //@line 3922 "datetimemodule.c"
        var $5=$cls_addr; //@line 3922 "datetimemodule.c"
        var $6=_datetime_from_timestamp($5, (FUNCTION_TABLE_OFFSET + 4), $4, __Py_NoneStruct); //@line 3922 "datetimemodule.c"
        $result=$6; //@line 3922 "datetimemodule.c"
        __label__ = 2; break; //@line 3922 "datetimemodule.c"
      case 2: // $bb1
        var $7=$result; //@line 3924 "datetimemodule.c"
        $0=$7; //@line 3924 "datetimemodule.c"
        var $8=$0; //@line 3924 "datetimemodule.c"
        $retval=$8; //@line 3924 "datetimemodule.c"
        var $retval2=$retval; //@line 3924 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 3924 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_strptime($cls, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $obj;
        var $st;
        var $frac;
        var $string=__stackBase__;
        var $format=__stackBase__+4;
        var $i;
        var $good_timetuple;
        var $ia=__stackBase__+8;
        var $p;
        $cls_addr=$cls;
        $args_addr=$args;
        $result=0; //@line 3932 "datetimemodule.c"
        $st=0; //@line 3932 "datetimemodule.c"
        $frac=0; //@line 3932 "datetimemodule.c"
        var $1=$args_addr; //@line 3935 "datetimemodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str227, allocate([$string,0,0,0,$format,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 3935 "datetimemodule.c"
        var $3=($2)==0; //@line 3935 "datetimemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3935 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 3936 "datetimemodule.c"
        __label__ = 42; break; //@line 3936 "datetimemodule.c"
      case 2: // $bb1
        var $4=HEAP[_module_12751]; //@line 3938 "datetimemodule.c"
        var $5=($4)==0; //@line 3938 "datetimemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 3938 "datetimemodule.c"
      case 3: // $bb2
        var $6=_PyImport_ImportModuleNoBlock(__str228); //@line 3938 "datetimemodule.c"
        HEAP[_module_12751]=$6; //@line 3938 "datetimemodule.c"
        var $7=HEAP[_module_12751]; //@line 3938 "datetimemodule.c"
        var $8=($7)==0; //@line 3938 "datetimemodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3938 "datetimemodule.c"
      case 4: // $bb3
        $0=0; //@line 3940 "datetimemodule.c"
        __label__ = 42; break; //@line 3940 "datetimemodule.c"
      case 5: // $bb4
        var $9=HEAP[$format]; //@line 3945 "datetimemodule.c"
        var $10=HEAP[$string]; //@line 3945 "datetimemodule.c"
        var $11=HEAP[_module_12751]; //@line 3945 "datetimemodule.c"
        var $12=__PyObject_CallMethod_SizeT($11, __str228, __str83, allocate([$10,0,0,0,$9,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 3945 "datetimemodule.c"
        $obj=$12; //@line 3945 "datetimemodule.c"
        var $13=($12)!=0; //@line 3946 "datetimemodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 35; break; } //@line 3946 "datetimemodule.c"
      case 6: // $bb5
        $good_timetuple=1; //@line 3947 "datetimemodule.c"
        var $14=$obj; //@line 3949 "datetimemodule.c"
        var $15=_PySequence_Check($14); //@line 3949 "datetimemodule.c"
        var $16=($15)==0; //@line 3949 "datetimemodule.c"
        if ($16) { __label__ = 28; break; } else { __label__ = 7; break; } //@line 3949 "datetimemodule.c"
      case 7: // $bb6
        var $17=$obj; //@line 3949 "datetimemodule.c"
        var $18=_PySequence_Size($17); //@line 3949 "datetimemodule.c"
        var $19=($18)!=2; //@line 3949 "datetimemodule.c"
        if ($19) { __label__ = 28; break; } else { __label__ = 8; break; } //@line 3949 "datetimemodule.c"
      case 8: // $bb7
        var $20=$obj; //@line 3950 "datetimemodule.c"
        var $21=_PySequence_GetItem($20, 0); //@line 3950 "datetimemodule.c"
        $st=$21; //@line 3950 "datetimemodule.c"
        var $22=$obj; //@line 3951 "datetimemodule.c"
        var $23=_PySequence_GetItem($22, 1); //@line 3951 "datetimemodule.c"
        $frac=$23; //@line 3951 "datetimemodule.c"
        var $24=$st; //@line 3952 "datetimemodule.c"
        var $25=($24)==0; //@line 3952 "datetimemodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 3952 "datetimemodule.c"
      case 9: // $bb8
        var $26=$frac; //@line 3952 "datetimemodule.c"
        var $27=($26)==0; //@line 3952 "datetimemodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3952 "datetimemodule.c"
      case 10: // $bb10_thread
        $good_timetuple=0; //@line 3953 "datetimemodule.c"
        __label__ = 24; break;
      case 11: // $bb10
        var $_pr=$good_timetuple;
        var $28=($_pr)==0; //@line 3956 "datetimemodule.c"
        if ($28) { __label__ = 24; break; } else { __label__ = 12; break; } //@line 3956 "datetimemodule.c"
      case 12: // $bb11
        var $29=$st; //@line 3956 "datetimemodule.c"
        var $30=_PySequence_Check($29); //@line 3956 "datetimemodule.c"
        var $31=($30)==0; //@line 3956 "datetimemodule.c"
        if ($31) { __label__ = 24; break; } else { __label__ = 13; break; } //@line 3956 "datetimemodule.c"
      case 13: // $bb12
        var $32=$st; //@line 3956 "datetimemodule.c"
        var $33=_PySequence_Size($32); //@line 3956 "datetimemodule.c"
        var $34=($33) <= 5; //@line 3956 "datetimemodule.c"
        if ($34) { __label__ = 24; break; } else { __label__ = 14; break; } //@line 3956 "datetimemodule.c"
      case 14: // $bb13
        $i=0; //@line 3959 "datetimemodule.c"
        __lastLabel__ = 14; __label__ = 23; break; //@line 3959 "datetimemodule.c"
      case 15: // $bb14
        var $35=$st; //@line 3960 "datetimemodule.c"
        var $36=$i; //@line 3960 "datetimemodule.c"
        var $37=_PySequence_GetItem($35, $36); //@line 3960 "datetimemodule.c"
        $p=$37; //@line 3960 "datetimemodule.c"
        var $38=$p; //@line 3961 "datetimemodule.c"
        var $39=($38)==0; //@line 3961 "datetimemodule.c"
        if ($39) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3961 "datetimemodule.c"
      case 16: // $bb15
        $good_timetuple=0; //@line 3962 "datetimemodule.c"
        __label__ = 27; break; //@line 3962 "datetimemodule.c"
      case 17: // $bb16
        var $40=$p; //@line 3965 "datetimemodule.c"
        var $41=$40+4; //@line 3965 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 3965 "datetimemodule.c"
        var $43=$42+84; //@line 3965 "datetimemodule.c"
        var $44=HEAP[$43]; //@line 3965 "datetimemodule.c"
        var $45=($44) & 8388608; //@line 3965 "datetimemodule.c"
        var $46=($45)!=0; //@line 3965 "datetimemodule.c"
        if ($46) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3965 "datetimemodule.c"
      case 18: // $bb17
        var $47=$i; //@line 3966 "datetimemodule.c"
        var $48=$p; //@line 3966 "datetimemodule.c"
        var $49=_PyInt_AsLong($48); //@line 3966 "datetimemodule.c"
        var $50=$ia+$47*4; //@line 3966 "datetimemodule.c"
        HEAP[$50]=$49; //@line 3966 "datetimemodule.c"
        __label__ = 20; break; //@line 3966 "datetimemodule.c"
      case 19: // $bb18
        $good_timetuple=0; //@line 3968 "datetimemodule.c"
        __label__ = 20; break; //@line 3968 "datetimemodule.c"
      case 20: // $bb19
        var $51=$p; //@line 3969 "datetimemodule.c"
        var $52=$51; //@line 3969 "datetimemodule.c"
        var $53=HEAP[$52]; //@line 3969 "datetimemodule.c"
        var $54=($53) - 1; //@line 3969 "datetimemodule.c"
        var $55=$p; //@line 3969 "datetimemodule.c"
        var $56=$55; //@line 3969 "datetimemodule.c"
        HEAP[$56]=$54; //@line 3969 "datetimemodule.c"
        var $57=$p; //@line 3969 "datetimemodule.c"
        var $58=$57; //@line 3969 "datetimemodule.c"
        var $59=HEAP[$58]; //@line 3969 "datetimemodule.c"
        var $60=($59)==0; //@line 3969 "datetimemodule.c"
        if ($60) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3969 "datetimemodule.c"
      case 21: // $bb20
        var $61=$p; //@line 3969 "datetimemodule.c"
        var $62=$61+4; //@line 3969 "datetimemodule.c"
        var $63=HEAP[$62]; //@line 3969 "datetimemodule.c"
        var $64=$63+24; //@line 3969 "datetimemodule.c"
        var $65=HEAP[$64]; //@line 3969 "datetimemodule.c"
        var $66=$p; //@line 3969 "datetimemodule.c"
        FUNCTION_TABLE[$65]($66); //@line 3969 "datetimemodule.c"
        __label__ = 22; break; //@line 3969 "datetimemodule.c"
      case 22: // $bb21
        var $67=$i; //@line 3959 "datetimemodule.c"
        var $68=($67) + 1; //@line 3959 "datetimemodule.c"
        $i=$68; //@line 3959 "datetimemodule.c"
        __lastLabel__ = 22; __label__ = 23; break; //@line 3959 "datetimemodule.c"
      case 23: // $bb22
        var $69=__lastLabel__ == 22 ? $68 : (0);
        var $70=($69) <= 5; //@line 3959 "datetimemodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 25; break; } //@line 3959 "datetimemodule.c"
      case 24: // $bb24
        $good_timetuple=0; //@line 3973 "datetimemodule.c"
        __label__ = 27; break; //@line 3973 "datetimemodule.c"
      case 25: // $bb25
        var $_pr1=$good_timetuple;
        var $71=($_pr1)==0; //@line 3975 "datetimemodule.c"
        if ($71) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 3975 "datetimemodule.c"
      case 26: // $bb26
        var $72=$frac; //@line 3975 "datetimemodule.c"
        var $73=$72+4; //@line 3975 "datetimemodule.c"
        var $74=HEAP[$73]; //@line 3975 "datetimemodule.c"
        var $75=$74+84; //@line 3975 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 3975 "datetimemodule.c"
        var $77=($76) & 8388608; //@line 3975 "datetimemodule.c"
        var $78=($77)==0; //@line 3975 "datetimemodule.c"
        if ($78) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 3975 "datetimemodule.c"
      case 27: // $bb28
        $good_timetuple=0; //@line 3978 "datetimemodule.c"
        __label__ = 31; break; //@line 3978 "datetimemodule.c"
      case 28: // $bb30
        $good_timetuple=0; //@line 3981 "datetimemodule.c"
        __label__ = 31; break; //@line 3981 "datetimemodule.c"
      case 29: // $bb31
        var $79=$frac; //@line 3976 "datetimemodule.c"
        var $80=_PyInt_AsLong($79); //@line 3976 "datetimemodule.c"
        var $81=$ia+24; //@line 3976 "datetimemodule.c"
        HEAP[$81]=$80; //@line 3976 "datetimemodule.c"
        var $_pr2=$good_timetuple;
        var $82=($_pr2)!=0; //@line 3982 "datetimemodule.c"
        if ($82) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 3982 "datetimemodule.c"
      case 30: // $bb32
        var $83=$ia+24; //@line 3983 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 3983 "datetimemodule.c"
        var $85=$ia+20; //@line 3983 "datetimemodule.c"
        var $86=HEAP[$85]; //@line 3983 "datetimemodule.c"
        var $87=$ia+16; //@line 3983 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 3983 "datetimemodule.c"
        var $89=$ia+12; //@line 3983 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 3983 "datetimemodule.c"
        var $91=$ia+8; //@line 3983 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 3983 "datetimemodule.c"
        var $93=$ia+4; //@line 3983 "datetimemodule.c"
        var $94=HEAP[$93]; //@line 3983 "datetimemodule.c"
        var $95=$ia; //@line 3983 "datetimemodule.c"
        var $96=HEAP[$95]; //@line 3983 "datetimemodule.c"
        var $97=$cls_addr; //@line 3983 "datetimemodule.c"
        var $98=__PyObject_CallFunction_SizeT($97, __str229, allocate([$96,0,0,0,$94,0,0,0,$92,0,0,0,$90,0,0,0,$88,0,0,0,$86,0,0,0,$84,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3983 "datetimemodule.c"
        $result=$98; //@line 3983 "datetimemodule.c"
        __label__ = 32; break; //@line 3983 "datetimemodule.c"
      case 31: // $bb33
        var $99=HEAP[_PyExc_ValueError]; //@line 3988 "datetimemodule.c"
        _PyErr_SetString($99, __str230); //@line 3988 "datetimemodule.c"
        __label__ = 32; break; //@line 3988 "datetimemodule.c"
      case 32: // $bb34
        var $_pr3=$obj;
        var $100=($_pr3)!=0; //@line 3991 "datetimemodule.c"
        if ($100) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 3991 "datetimemodule.c"
      case 33: // $bb35
        var $101=$obj; //@line 3991 "datetimemodule.c"
        var $102=$101; //@line 3991 "datetimemodule.c"
        var $103=HEAP[$102]; //@line 3991 "datetimemodule.c"
        var $104=($103) - 1; //@line 3991 "datetimemodule.c"
        var $105=$obj; //@line 3991 "datetimemodule.c"
        var $106=$105; //@line 3991 "datetimemodule.c"
        HEAP[$106]=$104; //@line 3991 "datetimemodule.c"
        var $107=$obj; //@line 3991 "datetimemodule.c"
        var $108=$107; //@line 3991 "datetimemodule.c"
        var $109=HEAP[$108]; //@line 3991 "datetimemodule.c"
        var $110=($109)==0; //@line 3991 "datetimemodule.c"
        if ($110) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 3991 "datetimemodule.c"
      case 34: // $bb36
        var $111=$obj; //@line 3991 "datetimemodule.c"
        var $112=$111+4; //@line 3991 "datetimemodule.c"
        var $113=HEAP[$112]; //@line 3991 "datetimemodule.c"
        var $114=$113+24; //@line 3991 "datetimemodule.c"
        var $115=HEAP[$114]; //@line 3991 "datetimemodule.c"
        var $116=$obj; //@line 3991 "datetimemodule.c"
        FUNCTION_TABLE[$115]($116); //@line 3991 "datetimemodule.c"
        __label__ = 35; break; //@line 3991 "datetimemodule.c"
      case 35: // $bb37
        var $117=$st; //@line 3992 "datetimemodule.c"
        var $118=($117)!=0; //@line 3992 "datetimemodule.c"
        if ($118) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 3992 "datetimemodule.c"
      case 36: // $bb38
        var $119=$st; //@line 3992 "datetimemodule.c"
        var $120=$119; //@line 3992 "datetimemodule.c"
        var $121=HEAP[$120]; //@line 3992 "datetimemodule.c"
        var $122=($121) - 1; //@line 3992 "datetimemodule.c"
        var $123=$st; //@line 3992 "datetimemodule.c"
        var $124=$123; //@line 3992 "datetimemodule.c"
        HEAP[$124]=$122; //@line 3992 "datetimemodule.c"
        var $125=$st; //@line 3992 "datetimemodule.c"
        var $126=$125; //@line 3992 "datetimemodule.c"
        var $127=HEAP[$126]; //@line 3992 "datetimemodule.c"
        var $128=($127)==0; //@line 3992 "datetimemodule.c"
        if ($128) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 3992 "datetimemodule.c"
      case 37: // $bb39
        var $129=$st; //@line 3992 "datetimemodule.c"
        var $130=$129+4; //@line 3992 "datetimemodule.c"
        var $131=HEAP[$130]; //@line 3992 "datetimemodule.c"
        var $132=$131+24; //@line 3992 "datetimemodule.c"
        var $133=HEAP[$132]; //@line 3992 "datetimemodule.c"
        var $134=$st; //@line 3992 "datetimemodule.c"
        FUNCTION_TABLE[$133]($134); //@line 3992 "datetimemodule.c"
        __label__ = 38; break; //@line 3992 "datetimemodule.c"
      case 38: // $bb40
        var $135=$frac; //@line 3993 "datetimemodule.c"
        var $136=($135)!=0; //@line 3993 "datetimemodule.c"
        if ($136) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 3993 "datetimemodule.c"
      case 39: // $bb41
        var $137=$frac; //@line 3993 "datetimemodule.c"
        var $138=$137; //@line 3993 "datetimemodule.c"
        var $139=HEAP[$138]; //@line 3993 "datetimemodule.c"
        var $140=($139) - 1; //@line 3993 "datetimemodule.c"
        var $141=$frac; //@line 3993 "datetimemodule.c"
        var $142=$141; //@line 3993 "datetimemodule.c"
        HEAP[$142]=$140; //@line 3993 "datetimemodule.c"
        var $143=$frac; //@line 3993 "datetimemodule.c"
        var $144=$143; //@line 3993 "datetimemodule.c"
        var $145=HEAP[$144]; //@line 3993 "datetimemodule.c"
        var $146=($145)==0; //@line 3993 "datetimemodule.c"
        if ($146) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 3993 "datetimemodule.c"
      case 40: // $bb42
        var $147=$frac; //@line 3993 "datetimemodule.c"
        var $148=$147+4; //@line 3993 "datetimemodule.c"
        var $149=HEAP[$148]; //@line 3993 "datetimemodule.c"
        var $150=$149+24; //@line 3993 "datetimemodule.c"
        var $151=HEAP[$150]; //@line 3993 "datetimemodule.c"
        var $152=$frac; //@line 3993 "datetimemodule.c"
        FUNCTION_TABLE[$151]($152); //@line 3993 "datetimemodule.c"
        __label__ = 41; break; //@line 3993 "datetimemodule.c"
      case 41: // $bb43
        var $153=$result; //@line 3994 "datetimemodule.c"
        $0=$153; //@line 3994 "datetimemodule.c"
        __label__ = 42; break; //@line 3994 "datetimemodule.c"
      case 42: // $bb44
        var $154=$0; //@line 3936 "datetimemodule.c"
        $retval=$154; //@line 3936 "datetimemodule.c"
        var $retval45=$retval; //@line 3936 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 3936 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_combine($cls, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $cls_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $date=__stackBase__;
        var $time=__stackBase__+4;
        var $result;
        var $tzinfo;
        $cls_addr=$cls;
        $args_addr=$args;
        $kw_addr=$kw;
        $result=0; //@line 4004 "datetimemodule.c"
        var $1=$args_addr; //@line 4006 "datetimemodule.c"
        var $2=$kw_addr; //@line 4006 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str231, _keywords_12871, allocate([_PyDateTime_DateType,0,0,0,$date,0,0,0,_PyDateTime_TimeType,0,0,0,$time,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 4006 "datetimemodule.c"
        var $4=($3)!=0; //@line 4006 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 4006 "datetimemodule.c"
      case 1: // $bb
        $tzinfo=__Py_NoneStruct; //@line 4009 "datetimemodule.c"
        var $5=HEAP[$time]; //@line 4011 "datetimemodule.c"
        var $6=$5; //@line 4011 "datetimemodule.c"
        var $7=$6+12; //@line 4011 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 4011 "datetimemodule.c"
        var $9=($8)!=0; //@line 4011 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 4011 "datetimemodule.c"
      case 2: // $bb1
        var $10=HEAP[$time]; //@line 4012 "datetimemodule.c"
        var $11=$10; //@line 4012 "datetimemodule.c"
        var $12=$11+20; //@line 4012 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 4012 "datetimemodule.c"
        $tzinfo=$13; //@line 4012 "datetimemodule.c"
        __label__ = 3; break; //@line 4012 "datetimemodule.c"
      case 3: // $bb2
        var $14=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $15=$14; //@line 4013 "datetimemodule.c"
        var $16=$15+13; //@line 4013 "datetimemodule.c"
        var $17=$16+3; //@line 4013 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 4013 "datetimemodule.c"
        var $19=($18); //@line 4013 "datetimemodule.c"
        var $20=($19) << 16; //@line 4013 "datetimemodule.c"
        var $21=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $22=$21; //@line 4013 "datetimemodule.c"
        var $23=$22+13; //@line 4013 "datetimemodule.c"
        var $24=$23+4; //@line 4013 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4013 "datetimemodule.c"
        var $26=($25); //@line 4013 "datetimemodule.c"
        var $27=($26) << 8; //@line 4013 "datetimemodule.c"
        var $28=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $29=$28; //@line 4013 "datetimemodule.c"
        var $30=$29+13; //@line 4013 "datetimemodule.c"
        var $31=$30+5; //@line 4013 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 4013 "datetimemodule.c"
        var $33=($32); //@line 4013 "datetimemodule.c"
        var $34=($27) | ($20); //@line 4013 "datetimemodule.c"
        var $35=($34) | ($33); //@line 4013 "datetimemodule.c"
        var $36=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $37=$36; //@line 4013 "datetimemodule.c"
        var $38=$37+13; //@line 4013 "datetimemodule.c"
        var $39=$38+2; //@line 4013 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 4013 "datetimemodule.c"
        var $41=($40); //@line 4013 "datetimemodule.c"
        var $42=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $43=$42; //@line 4013 "datetimemodule.c"
        var $44=$43+13; //@line 4013 "datetimemodule.c"
        var $45=$44+1; //@line 4013 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 4013 "datetimemodule.c"
        var $47=($46); //@line 4013 "datetimemodule.c"
        var $48=HEAP[$time]; //@line 4013 "datetimemodule.c"
        var $49=$48; //@line 4013 "datetimemodule.c"
        var $50=$49+13; //@line 4013 "datetimemodule.c"
        var $51=$50; //@line 4013 "datetimemodule.c"
        var $52=HEAP[$51]; //@line 4013 "datetimemodule.c"
        var $53=($52); //@line 4013 "datetimemodule.c"
        var $54=HEAP[$date]; //@line 4013 "datetimemodule.c"
        var $55=$54; //@line 4013 "datetimemodule.c"
        var $56=$55+13; //@line 4013 "datetimemodule.c"
        var $57=$56+3; //@line 4013 "datetimemodule.c"
        var $58=HEAP[$57]; //@line 4013 "datetimemodule.c"
        var $59=($58); //@line 4013 "datetimemodule.c"
        var $60=HEAP[$date]; //@line 4013 "datetimemodule.c"
        var $61=$60; //@line 4013 "datetimemodule.c"
        var $62=$61+13; //@line 4013 "datetimemodule.c"
        var $63=$62+2; //@line 4013 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 4013 "datetimemodule.c"
        var $65=($64); //@line 4013 "datetimemodule.c"
        var $66=HEAP[$date]; //@line 4013 "datetimemodule.c"
        var $67=$66; //@line 4013 "datetimemodule.c"
        var $68=$67+13; //@line 4013 "datetimemodule.c"
        var $69=$68; //@line 4013 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 4013 "datetimemodule.c"
        var $71=($70); //@line 4013 "datetimemodule.c"
        var $72=($71) << 8; //@line 4013 "datetimemodule.c"
        var $73=HEAP[$date]; //@line 4013 "datetimemodule.c"
        var $74=$73; //@line 4013 "datetimemodule.c"
        var $75=$74+13; //@line 4013 "datetimemodule.c"
        var $76=$75+1; //@line 4013 "datetimemodule.c"
        var $77=HEAP[$76]; //@line 4013 "datetimemodule.c"
        var $78=($77); //@line 4013 "datetimemodule.c"
        var $79=($78) | ($72); //@line 4013 "datetimemodule.c"
        var $80=$cls_addr; //@line 4013 "datetimemodule.c"
        var $81=$tzinfo; //@line 4013 "datetimemodule.c"
        var $82=__PyObject_CallFunction_SizeT($80, __str220, allocate([$79,0,0,0,$65,0,0,0,$59,0,0,0,$53,0,0,0,$47,0,0,0,$41,0,0,0,$35,0,0,0,$81,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4013 "datetimemodule.c"
        $result=$82; //@line 4013 "datetimemodule.c"
        __label__ = 4; break; //@line 4013 "datetimemodule.c"
      case 4: // $bb3
        var $83=$result; //@line 4023 "datetimemodule.c"
        $0=$83; //@line 4023 "datetimemodule.c"
        var $84=$0; //@line 4023 "datetimemodule.c"
        $retval=$84; //@line 4023 "datetimemodule.c"
        var $retval4=$retval; //@line 4023 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 4023 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 4033 "datetimemodule.c"
        var $1=$0; //@line 4033 "datetimemodule.c"
        var $2=$1+12; //@line 4033 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 4033 "datetimemodule.c"
        var $4=($3)!=0; //@line 4033 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 4033 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 4034 "datetimemodule.c"
        var $6=$5+24; //@line 4034 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 4034 "datetimemodule.c"
        var $8=($7)!=0; //@line 4034 "datetimemodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 4034 "datetimemodule.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 4034 "datetimemodule.c"
        var $10=$9+24; //@line 4034 "datetimemodule.c"
        var $11=HEAP[$10]; //@line 4034 "datetimemodule.c"
        var $12=$11; //@line 4034 "datetimemodule.c"
        var $13=HEAP[$12]; //@line 4034 "datetimemodule.c"
        var $14=($13) - 1; //@line 4034 "datetimemodule.c"
        var $15=$11; //@line 4034 "datetimemodule.c"
        HEAP[$15]=$14; //@line 4034 "datetimemodule.c"
        var $16=$11; //@line 4034 "datetimemodule.c"
        var $17=HEAP[$16]; //@line 4034 "datetimemodule.c"
        var $18=($17)==0; //@line 4034 "datetimemodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4034 "datetimemodule.c"
      case 3: // $bb2
        var $19=$self_addr; //@line 4034 "datetimemodule.c"
        var $20=$19+24; //@line 4034 "datetimemodule.c"
        var $21=HEAP[$20]; //@line 4034 "datetimemodule.c"
        var $22=$21+4; //@line 4034 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 4034 "datetimemodule.c"
        var $24=$23+24; //@line 4034 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4034 "datetimemodule.c"
        var $26=$self_addr; //@line 4034 "datetimemodule.c"
        var $27=$26+24; //@line 4034 "datetimemodule.c"
        var $28=HEAP[$27]; //@line 4034 "datetimemodule.c"
        FUNCTION_TABLE[$25]($28); //@line 4034 "datetimemodule.c"
        __label__ = 4; break; //@line 4034 "datetimemodule.c"
      case 4: // $bb3
        var $29=$self_addr; //@line 4036 "datetimemodule.c"
        var $30=$29; //@line 4036 "datetimemodule.c"
        var $31=$30+4; //@line 4036 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 4036 "datetimemodule.c"
        var $33=$32+160; //@line 4036 "datetimemodule.c"
        var $34=HEAP[$33]; //@line 4036 "datetimemodule.c"
        var $35=$self_addr; //@line 4036 "datetimemodule.c"
        var $36=$35; //@line 4036 "datetimemodule.c"
        FUNCTION_TABLE[$34]($36); //@line 4036 "datetimemodule.c"
        ;
        return; //@line 4037 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_utcoffset($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_428;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 4046 "datetimemodule.c"
        var $2=$1; //@line 4046 "datetimemodule.c"
        var $3=$self_addr; //@line 4046 "datetimemodule.c"
        var $4=$3; //@line 4046 "datetimemodule.c"
        var $5=$4+12; //@line 4046 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 4046 "datetimemodule.c"
        var $7=($6)!=0; //@line 4046 "datetimemodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4046 "datetimemodule.c"
      case 1: // $bb
        var $8=$self_addr; //@line 4046 "datetimemodule.c"
        var $9=$8+24; //@line 4046 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 4046 "datetimemodule.c"
        $iftmp_428=$10; //@line 4046 "datetimemodule.c"
        __label__ = 3; break; //@line 4046 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_428=__Py_NoneStruct; //@line 4046 "datetimemodule.c"
        __label__ = 3; break; //@line 4046 "datetimemodule.c"
      case 3: // $bb2
        var $11=$iftmp_428; //@line 4046 "datetimemodule.c"
        var $12=_offset_as_timedelta($11, __str42, $2); //@line 4046 "datetimemodule.c"
        $0=$12; //@line 4046 "datetimemodule.c"
        var $13=$0; //@line 4046 "datetimemodule.c"
        $retval=$13; //@line 4046 "datetimemodule.c"
        var $retval3=$retval; //@line 4046 "datetimemodule.c"
        ;
        return $retval3; //@line 4046 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_dst($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_431;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 4052 "datetimemodule.c"
        var $2=$1; //@line 4052 "datetimemodule.c"
        var $3=$self_addr; //@line 4052 "datetimemodule.c"
        var $4=$3; //@line 4052 "datetimemodule.c"
        var $5=$4+12; //@line 4052 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 4052 "datetimemodule.c"
        var $7=($6)!=0; //@line 4052 "datetimemodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4052 "datetimemodule.c"
      case 1: // $bb
        var $8=$self_addr; //@line 4052 "datetimemodule.c"
        var $9=$8+24; //@line 4052 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 4052 "datetimemodule.c"
        $iftmp_431=$10; //@line 4052 "datetimemodule.c"
        __label__ = 3; break; //@line 4052 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_431=__Py_NoneStruct; //@line 4052 "datetimemodule.c"
        __label__ = 3; break; //@line 4052 "datetimemodule.c"
      case 3: // $bb2
        var $11=$iftmp_431; //@line 4052 "datetimemodule.c"
        var $12=_offset_as_timedelta($11, __str44, $2); //@line 4052 "datetimemodule.c"
        $0=$12; //@line 4052 "datetimemodule.c"
        var $13=$0; //@line 4052 "datetimemodule.c"
        $retval=$13; //@line 4052 "datetimemodule.c"
        var $retval3=$retval; //@line 4052 "datetimemodule.c"
        ;
        return $retval3; //@line 4052 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_tzname($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $iftmp_434;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 4058 "datetimemodule.c"
        var $2=$1; //@line 4058 "datetimemodule.c"
        var $3=$self_addr; //@line 4058 "datetimemodule.c"
        var $4=$3; //@line 4058 "datetimemodule.c"
        var $5=$4+12; //@line 4058 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 4058 "datetimemodule.c"
        var $7=($6)!=0; //@line 4058 "datetimemodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4058 "datetimemodule.c"
      case 1: // $bb
        var $8=$self_addr; //@line 4058 "datetimemodule.c"
        var $9=$8+24; //@line 4058 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 4058 "datetimemodule.c"
        $iftmp_434=$10; //@line 4058 "datetimemodule.c"
        __label__ = 3; break; //@line 4058 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_434=__Py_NoneStruct; //@line 4058 "datetimemodule.c"
        __label__ = 3; break; //@line 4058 "datetimemodule.c"
      case 3: // $bb2
        var $11=$iftmp_434; //@line 4058 "datetimemodule.c"
        var $12=_call_tzname($11, $2); //@line 4058 "datetimemodule.c"
        $0=$12; //@line 4058 "datetimemodule.c"
        var $13=$0; //@line 4058 "datetimemodule.c"
        $retval=$13; //@line 4058 "datetimemodule.c"
        var $retval3=$retval; //@line 4058 "datetimemodule.c"
        ;
        return $retval3; //@line 4058 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _add_datetime_timedelta($date, $delta, $factor) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $date_addr;
        var $delta_addr;
        var $factor_addr;
        var $retval;
        var $iftmp_440;
        var $0;
        var $year=__stackBase__;
        var $month=__stackBase__+4;
        var $day=__stackBase__+8;
        var $hour=__stackBase__+12;
        var $minute=__stackBase__+16;
        var $second=__stackBase__+20;
        var $microsecond=__stackBase__+24;
        $date_addr=$date;
        $delta_addr=$delta;
        $factor_addr=$factor;
        var $1=$date_addr; //@line 4076 "datetimemodule.c"
        var $2=$1; //@line 4076 "datetimemodule.c"
        var $3=$2+13; //@line 4076 "datetimemodule.c"
        var $4=$3; //@line 4076 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 4076 "datetimemodule.c"
        var $6=($5); //@line 4076 "datetimemodule.c"
        var $7=($6) << 8; //@line 4076 "datetimemodule.c"
        var $8=$date_addr; //@line 4076 "datetimemodule.c"
        var $9=$8; //@line 4076 "datetimemodule.c"
        var $10=$9+13; //@line 4076 "datetimemodule.c"
        var $11=$10+1; //@line 4076 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4076 "datetimemodule.c"
        var $13=($12); //@line 4076 "datetimemodule.c"
        var $14=($13) | ($7); //@line 4076 "datetimemodule.c"
        HEAP[$year]=$14; //@line 4076 "datetimemodule.c"
        var $15=$date_addr; //@line 4077 "datetimemodule.c"
        var $16=$15; //@line 4077 "datetimemodule.c"
        var $17=$16+13; //@line 4077 "datetimemodule.c"
        var $18=$17+2; //@line 4077 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 4077 "datetimemodule.c"
        var $20=($19); //@line 4077 "datetimemodule.c"
        HEAP[$month]=$20; //@line 4077 "datetimemodule.c"
        var $21=$date_addr; //@line 4078 "datetimemodule.c"
        var $22=$21; //@line 4078 "datetimemodule.c"
        var $23=$22+13; //@line 4078 "datetimemodule.c"
        var $24=$23+3; //@line 4078 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4078 "datetimemodule.c"
        var $26=($25); //@line 4078 "datetimemodule.c"
        var $27=$delta_addr; //@line 4078 "datetimemodule.c"
        var $28=$27+12; //@line 4078 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 4078 "datetimemodule.c"
        var $30=$factor_addr; //@line 4078 "datetimemodule.c"
        var $31=($30) * ($29); //@line 4078 "datetimemodule.c"
        var $32=($31) + ($26); //@line 4078 "datetimemodule.c"
        HEAP[$day]=$32; //@line 4078 "datetimemodule.c"
        var $33=$date_addr; //@line 4079 "datetimemodule.c"
        var $34=$33+13; //@line 4079 "datetimemodule.c"
        var $35=$34+4; //@line 4079 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 4079 "datetimemodule.c"
        var $37=($36); //@line 4079 "datetimemodule.c"
        HEAP[$hour]=$37; //@line 4079 "datetimemodule.c"
        var $38=$date_addr; //@line 4080 "datetimemodule.c"
        var $39=$38+13; //@line 4080 "datetimemodule.c"
        var $40=$39+5; //@line 4080 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 4080 "datetimemodule.c"
        var $42=($41); //@line 4080 "datetimemodule.c"
        HEAP[$minute]=$42; //@line 4080 "datetimemodule.c"
        var $43=$date_addr; //@line 4081 "datetimemodule.c"
        var $44=$43+13; //@line 4081 "datetimemodule.c"
        var $45=$44+6; //@line 4081 "datetimemodule.c"
        var $46=HEAP[$45]; //@line 4081 "datetimemodule.c"
        var $47=($46); //@line 4081 "datetimemodule.c"
        var $48=$delta_addr; //@line 4081 "datetimemodule.c"
        var $49=$48+16; //@line 4081 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 4081 "datetimemodule.c"
        var $51=$factor_addr; //@line 4081 "datetimemodule.c"
        var $52=($51) * ($50); //@line 4081 "datetimemodule.c"
        var $53=($52) + ($47); //@line 4081 "datetimemodule.c"
        HEAP[$second]=$53; //@line 4081 "datetimemodule.c"
        var $54=$date_addr; //@line 4083 "datetimemodule.c"
        var $55=$54+13; //@line 4083 "datetimemodule.c"
        var $56=$55+7; //@line 4083 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 4083 "datetimemodule.c"
        var $58=($57); //@line 4083 "datetimemodule.c"
        var $59=($58) << 16; //@line 4083 "datetimemodule.c"
        var $60=$date_addr; //@line 4083 "datetimemodule.c"
        var $61=$60+13; //@line 4083 "datetimemodule.c"
        var $62=$61+8; //@line 4083 "datetimemodule.c"
        var $63=HEAP[$62]; //@line 4083 "datetimemodule.c"
        var $64=($63); //@line 4083 "datetimemodule.c"
        var $65=($64) << 8; //@line 4083 "datetimemodule.c"
        var $66=$date_addr; //@line 4083 "datetimemodule.c"
        var $67=$66+13; //@line 4083 "datetimemodule.c"
        var $68=$67+9; //@line 4083 "datetimemodule.c"
        var $69=HEAP[$68]; //@line 4083 "datetimemodule.c"
        var $70=($69); //@line 4083 "datetimemodule.c"
        var $71=($65) | ($59); //@line 4083 "datetimemodule.c"
        var $72=($71) | ($70); //@line 4083 "datetimemodule.c"
        var $73=$delta_addr; //@line 4083 "datetimemodule.c"
        var $74=$73+20; //@line 4083 "datetimemodule.c"
        var $75=HEAP[$74]; //@line 4083 "datetimemodule.c"
        var $76=$factor_addr; //@line 4083 "datetimemodule.c"
        var $77=($76) * ($75); //@line 4083 "datetimemodule.c"
        var $78=($77) + ($72); //@line 4083 "datetimemodule.c"
        HEAP[$microsecond]=$78; //@line 4083 "datetimemodule.c"
        var $79=$factor_addr; //@line 4085 "datetimemodule.c"
        var $80=($79)!=1; //@line 4085 "datetimemodule.c"
        var $81=$factor_addr; //@line 4085 "datetimemodule.c"
        var $82=($81)!=-1; //@line 4085 "datetimemodule.c"
        var $or_cond=($80) & ($82);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4085 "datetimemodule.c"
      case 1: // $bb1
        ___assert_fail(__str233, __str1, 4085, ___PRETTY_FUNCTION___13012); //@line 4085 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4085 "datetimemodule.c"
      case 2: // $bb2
        var $83=_normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond); //@line 4086 "datetimemodule.c"
        var $84=($83) < 0; //@line 4086 "datetimemodule.c"
        if ($84) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4086 "datetimemodule.c"
      case 3: // $bb3
        $0=0; //@line 4088 "datetimemodule.c"
        __label__ = 8; break; //@line 4088 "datetimemodule.c"
      case 4: // $bb4
        var $85=$date_addr; //@line 4090 "datetimemodule.c"
        var $86=$85; //@line 4090 "datetimemodule.c"
        var $87=$86+12; //@line 4090 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 4090 "datetimemodule.c"
        var $89=($88)!=0; //@line 4090 "datetimemodule.c"
        if ($89) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4090 "datetimemodule.c"
      case 5: // $bb5
        var $90=$date_addr; //@line 4090 "datetimemodule.c"
        var $91=$90+24; //@line 4090 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 4090 "datetimemodule.c"
        $iftmp_440=$92; //@line 4090 "datetimemodule.c"
        __label__ = 7; break; //@line 4090 "datetimemodule.c"
      case 6: // $bb6
        $iftmp_440=__Py_NoneStruct; //@line 4090 "datetimemodule.c"
        __label__ = 7; break; //@line 4090 "datetimemodule.c"
      case 7: // $bb7
        var $93=HEAP[$microsecond]; //@line 4090 "datetimemodule.c"
        var $94=HEAP[$second]; //@line 4090 "datetimemodule.c"
        var $95=HEAP[$minute]; //@line 4090 "datetimemodule.c"
        var $96=HEAP[$hour]; //@line 4090 "datetimemodule.c"
        var $97=HEAP[$day]; //@line 4090 "datetimemodule.c"
        var $98=HEAP[$month]; //@line 4090 "datetimemodule.c"
        var $99=HEAP[$year]; //@line 4090 "datetimemodule.c"
        var $100=$iftmp_440; //@line 4090 "datetimemodule.c"
        var $101=_new_datetime_ex($99, $98, $97, $96, $95, $94, $93, $100, _PyDateTime_DateTimeType); //@line 4090 "datetimemodule.c"
        $0=$101; //@line 4090 "datetimemodule.c"
        __label__ = 8; break; //@line 4090 "datetimemodule.c"
      case 8: // $bb8
        var $102=$0; //@line 4088 "datetimemodule.c"
        $retval=$102; //@line 4088 "datetimemodule.c"
        var $retval9=$retval; //@line 4088 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 4088 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_add($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 4098 "datetimemodule.c"
        var $2=$1+4; //@line 4098 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 4098 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateTimeType); //@line 4098 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 4098 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 4098 "datetimemodule.c"
        var $6=$5+4; //@line 4098 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 4098 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 4098 "datetimemodule.c"
        var $9=($8)!=0; //@line 4098 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 4098 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 4100 "datetimemodule.c"
        var $11=$10+4; //@line 4100 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4100 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DeltaType); //@line 4100 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 4100 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 4100 "datetimemodule.c"
        var $15=$14+4; //@line 4100 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 4100 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DeltaType); //@line 4100 "datetimemodule.c"
        var $18=($17)!=0; //@line 4100 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 4100 "datetimemodule.c"
      case 4: // $bb3
        var $19=$right_addr; //@line 4102 "datetimemodule.c"
        var $20=$19; //@line 4102 "datetimemodule.c"
        var $21=$left_addr; //@line 4102 "datetimemodule.c"
        var $22=$21; //@line 4102 "datetimemodule.c"
        var $23=_add_datetime_timedelta($22, $20, 1); //@line 4102 "datetimemodule.c"
        $0=$23; //@line 4102 "datetimemodule.c"
        __label__ = 9; break; //@line 4102 "datetimemodule.c"
      case 5: // $bb5
        var $24=$left_addr; //@line 4107 "datetimemodule.c"
        var $25=$24+4; //@line 4107 "datetimemodule.c"
        var $26=HEAP[$25]; //@line 4107 "datetimemodule.c"
        var $27=($26)==(_PyDateTime_DeltaType); //@line 4107 "datetimemodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 4107 "datetimemodule.c"
      case 6: // $bb6
        var $28=$left_addr; //@line 4107 "datetimemodule.c"
        var $29=$28+4; //@line 4107 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 4107 "datetimemodule.c"
        var $31=_PyType_IsSubtype($30, _PyDateTime_DeltaType); //@line 4107 "datetimemodule.c"
        var $32=($31)!=0; //@line 4107 "datetimemodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 4107 "datetimemodule.c"
      case 7: // $bb7
        var $33=$left_addr; //@line 4109 "datetimemodule.c"
        var $34=$33; //@line 4109 "datetimemodule.c"
        var $35=$right_addr; //@line 4109 "datetimemodule.c"
        var $36=$35; //@line 4109 "datetimemodule.c"
        var $37=_add_datetime_timedelta($36, $34, 1); //@line 4109 "datetimemodule.c"
        $0=$37; //@line 4109 "datetimemodule.c"
        __label__ = 9; break; //@line 4109 "datetimemodule.c"
      case 8: // $bb8
        var $38=HEAP[__Py_NotImplementedStruct]; //@line 4113 "datetimemodule.c"
        var $39=($38) + 1; //@line 4113 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$39; //@line 4113 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 4114 "datetimemodule.c"
        __label__ = 9; break; //@line 4114 "datetimemodule.c"
      case 9: // $bb9
        var $40=$0; //@line 4102 "datetimemodule.c"
        $retval=$40; //@line 4102 "datetimemodule.c"
        var $retval10=$retval; //@line 4102 "datetimemodule.c"
        ;
        return $retval10; //@line 4102 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_subtract($left, $right) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $result;
        var $n1=__stackBase__;
        var $n2=__stackBase__+4;
        var $offset1=__stackBase__+8;
        var $offset2=__stackBase__+12;
        var $delta_d;
        var $delta_s;
        var $delta_us;
        $left_addr=$left;
        $right_addr=$right;
        $result=__Py_NotImplementedStruct; //@line 4120 "datetimemodule.c"
        var $1=$left_addr; //@line 4122 "datetimemodule.c"
        var $2=$1+4; //@line 4122 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 4122 "datetimemodule.c"
        var $4=($3)==(_PyDateTime_DateTimeType); //@line 4122 "datetimemodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 4122 "datetimemodule.c"
      case 1: // $bb
        var $5=$left_addr; //@line 4122 "datetimemodule.c"
        var $6=$5+4; //@line 4122 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 4122 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 4122 "datetimemodule.c"
        var $9=($8)!=0; //@line 4122 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 15; break; } //@line 4122 "datetimemodule.c"
      case 2: // $bb1
        var $10=$right_addr; //@line 4124 "datetimemodule.c"
        var $11=$10+4; //@line 4124 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4124 "datetimemodule.c"
        var $13=($12)==(_PyDateTime_DateTimeType); //@line 4124 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 4124 "datetimemodule.c"
      case 3: // $bb2
        var $14=$right_addr; //@line 4124 "datetimemodule.c"
        var $15=$14+4; //@line 4124 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 4124 "datetimemodule.c"
        var $17=_PyType_IsSubtype($16, _PyDateTime_DateTimeType); //@line 4124 "datetimemodule.c"
        var $18=($17)!=0; //@line 4124 "datetimemodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 4124 "datetimemodule.c"
      case 4: // $bb3
        var $19=$left_addr; //@line 4130 "datetimemodule.c"
        var $20=$left_addr; //@line 4130 "datetimemodule.c"
        var $21=$right_addr; //@line 4130 "datetimemodule.c"
        var $22=$right_addr; //@line 4130 "datetimemodule.c"
        var $23=_classify_two_utcoffsets($19, $offset1, $n1, $20, $21, $offset2, $n2, $22); //@line 4130 "datetimemodule.c"
        var $24=($23) < 0; //@line 4130 "datetimemodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4130 "datetimemodule.c"
      case 5: // $bb4
        $0=0; //@line 4133 "datetimemodule.c"
        __label__ = 19; break; //@line 4133 "datetimemodule.c"
      case 6: // $bb5
        var $25=HEAP[$n1]; //@line 4134 "datetimemodule.c"
        var $26=($25)==1; //@line 4134 "datetimemodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 4134 "datetimemodule.c"
      case 7: // $bb6
        var $27=HEAP[$n2]; //@line 4134 "datetimemodule.c"
        var $28=($27)==1; //@line 4134 "datetimemodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4134 "datetimemodule.c"
      case 8: // $bb7
        ___assert_fail(__str203, __str1, 4134, ___PRETTY_FUNCTION___13120); //@line 4134 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4134 "datetimemodule.c"
      case 9: // $bb8
        var $29=HEAP[$n1]; //@line 4135 "datetimemodule.c"
        var $30=HEAP[$n2]; //@line 4135 "datetimemodule.c"
        var $31=($29)!=($30); //@line 4135 "datetimemodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 4135 "datetimemodule.c"
      case 10: // $bb9
        var $32=HEAP[_PyExc_TypeError]; //@line 4136 "datetimemodule.c"
        _PyErr_SetString($32, __str234); //@line 4136 "datetimemodule.c"
        $0=0; //@line 4139 "datetimemodule.c"
        __label__ = 19; break; //@line 4139 "datetimemodule.c"
      case 11: // $bb10
        var $33=$left_addr; //@line 4141 "datetimemodule.c"
        var $34=$33; //@line 4141 "datetimemodule.c"
        var $35=$34+13; //@line 4141 "datetimemodule.c"
        var $36=$35+3; //@line 4141 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 4141 "datetimemodule.c"
        var $38=($37); //@line 4141 "datetimemodule.c"
        var $39=$left_addr; //@line 4141 "datetimemodule.c"
        var $40=$39; //@line 4141 "datetimemodule.c"
        var $41=$40+13; //@line 4141 "datetimemodule.c"
        var $42=$41+2; //@line 4141 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 4141 "datetimemodule.c"
        var $44=($43); //@line 4141 "datetimemodule.c"
        var $45=$left_addr; //@line 4141 "datetimemodule.c"
        var $46=$45; //@line 4141 "datetimemodule.c"
        var $47=$46+13; //@line 4141 "datetimemodule.c"
        var $48=$47; //@line 4141 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 4141 "datetimemodule.c"
        var $50=($49); //@line 4141 "datetimemodule.c"
        var $51=($50) << 8; //@line 4141 "datetimemodule.c"
        var $52=$left_addr; //@line 4141 "datetimemodule.c"
        var $53=$52; //@line 4141 "datetimemodule.c"
        var $54=$53+13; //@line 4141 "datetimemodule.c"
        var $55=$54+1; //@line 4141 "datetimemodule.c"
        var $56=HEAP[$55]; //@line 4141 "datetimemodule.c"
        var $57=($56); //@line 4141 "datetimemodule.c"
        var $58=($57) | ($51); //@line 4141 "datetimemodule.c"
        var $59=_ymd_to_ord($58, $44, $38); //@line 4141 "datetimemodule.c"
        var $60=$right_addr; //@line 4141 "datetimemodule.c"
        var $61=$60; //@line 4141 "datetimemodule.c"
        var $62=$61+13; //@line 4141 "datetimemodule.c"
        var $63=$62+3; //@line 4141 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 4141 "datetimemodule.c"
        var $65=($64); //@line 4141 "datetimemodule.c"
        var $66=$right_addr; //@line 4141 "datetimemodule.c"
        var $67=$66; //@line 4141 "datetimemodule.c"
        var $68=$67+13; //@line 4141 "datetimemodule.c"
        var $69=$68+2; //@line 4141 "datetimemodule.c"
        var $70=HEAP[$69]; //@line 4141 "datetimemodule.c"
        var $71=($70); //@line 4141 "datetimemodule.c"
        var $72=$right_addr; //@line 4141 "datetimemodule.c"
        var $73=$72; //@line 4141 "datetimemodule.c"
        var $74=$73+13; //@line 4141 "datetimemodule.c"
        var $75=$74; //@line 4141 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 4141 "datetimemodule.c"
        var $77=($76); //@line 4141 "datetimemodule.c"
        var $78=($77) << 8; //@line 4141 "datetimemodule.c"
        var $79=$right_addr; //@line 4141 "datetimemodule.c"
        var $80=$79; //@line 4141 "datetimemodule.c"
        var $81=$80+13; //@line 4141 "datetimemodule.c"
        var $82=$81+1; //@line 4141 "datetimemodule.c"
        var $83=HEAP[$82]; //@line 4141 "datetimemodule.c"
        var $84=($83); //@line 4141 "datetimemodule.c"
        var $85=($84) | ($78); //@line 4141 "datetimemodule.c"
        var $86=_ymd_to_ord($85, $71, $65); //@line 4141 "datetimemodule.c"
        var $87=($59) - ($86); //@line 4141 "datetimemodule.c"
        $delta_d=$87; //@line 4141 "datetimemodule.c"
        var $88=$left_addr; //@line 4151 "datetimemodule.c"
        var $89=$88; //@line 4151 "datetimemodule.c"
        var $90=$89+13; //@line 4151 "datetimemodule.c"
        var $91=$90+4; //@line 4151 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 4151 "datetimemodule.c"
        var $93=($92); //@line 4151 "datetimemodule.c"
        var $94=$right_addr; //@line 4151 "datetimemodule.c"
        var $95=$94; //@line 4151 "datetimemodule.c"
        var $96=$95+13; //@line 4151 "datetimemodule.c"
        var $97=$96+4; //@line 4151 "datetimemodule.c"
        var $98=HEAP[$97]; //@line 4151 "datetimemodule.c"
        var $99=($98); //@line 4151 "datetimemodule.c"
        var $100=($93) - ($99); //@line 4151 "datetimemodule.c"
        var $101=($100) * 3600; //@line 4151 "datetimemodule.c"
        var $102=$left_addr; //@line 4151 "datetimemodule.c"
        var $103=$102; //@line 4151 "datetimemodule.c"
        var $104=$103+13; //@line 4151 "datetimemodule.c"
        var $105=$104+5; //@line 4151 "datetimemodule.c"
        var $106=HEAP[$105]; //@line 4151 "datetimemodule.c"
        var $107=($106); //@line 4151 "datetimemodule.c"
        var $108=$right_addr; //@line 4151 "datetimemodule.c"
        var $109=$108; //@line 4151 "datetimemodule.c"
        var $110=$109+13; //@line 4151 "datetimemodule.c"
        var $111=$110+5; //@line 4151 "datetimemodule.c"
        var $112=HEAP[$111]; //@line 4151 "datetimemodule.c"
        var $113=($112); //@line 4151 "datetimemodule.c"
        var $114=($107) - ($113); //@line 4151 "datetimemodule.c"
        var $115=($114) * 60; //@line 4151 "datetimemodule.c"
        var $116=$left_addr; //@line 4151 "datetimemodule.c"
        var $117=$116; //@line 4151 "datetimemodule.c"
        var $118=$117+13; //@line 4151 "datetimemodule.c"
        var $119=$118+6; //@line 4151 "datetimemodule.c"
        var $120=HEAP[$119]; //@line 4151 "datetimemodule.c"
        var $121=($120); //@line 4151 "datetimemodule.c"
        var $122=$right_addr; //@line 4151 "datetimemodule.c"
        var $123=$122; //@line 4151 "datetimemodule.c"
        var $124=$123+13; //@line 4151 "datetimemodule.c"
        var $125=$124+6; //@line 4151 "datetimemodule.c"
        var $126=HEAP[$125]; //@line 4151 "datetimemodule.c"
        var $127=($126); //@line 4151 "datetimemodule.c"
        var $_neg=0 - ($127);
        var $128=($121) + ($101); //@line 4151 "datetimemodule.c"
        var $129=($128) + ($115);
        var $130=($129) + ($_neg); //@line 4151 "datetimemodule.c"
        $delta_s=$130; //@line 4151 "datetimemodule.c"
        var $131=$left_addr; //@line 4157 "datetimemodule.c"
        var $132=$131; //@line 4157 "datetimemodule.c"
        var $133=$132+13; //@line 4157 "datetimemodule.c"
        var $134=$133+7; //@line 4157 "datetimemodule.c"
        var $135=HEAP[$134]; //@line 4157 "datetimemodule.c"
        var $136=($135); //@line 4157 "datetimemodule.c"
        var $137=($136) << 16; //@line 4157 "datetimemodule.c"
        var $138=$left_addr; //@line 4157 "datetimemodule.c"
        var $139=$138; //@line 4157 "datetimemodule.c"
        var $140=$139+13; //@line 4157 "datetimemodule.c"
        var $141=$140+8; //@line 4157 "datetimemodule.c"
        var $142=HEAP[$141]; //@line 4157 "datetimemodule.c"
        var $143=($142); //@line 4157 "datetimemodule.c"
        var $144=($143) << 8; //@line 4157 "datetimemodule.c"
        var $145=$left_addr; //@line 4157 "datetimemodule.c"
        var $146=$145; //@line 4157 "datetimemodule.c"
        var $147=$146+13; //@line 4157 "datetimemodule.c"
        var $148=$147+9; //@line 4157 "datetimemodule.c"
        var $149=HEAP[$148]; //@line 4157 "datetimemodule.c"
        var $150=($149); //@line 4157 "datetimemodule.c"
        var $151=($144) | ($137); //@line 4157 "datetimemodule.c"
        var $152=($151) | ($150); //@line 4157 "datetimemodule.c"
        var $153=$right_addr; //@line 4157 "datetimemodule.c"
        var $154=$153; //@line 4157 "datetimemodule.c"
        var $155=$154+13; //@line 4157 "datetimemodule.c"
        var $156=$155+7; //@line 4157 "datetimemodule.c"
        var $157=HEAP[$156]; //@line 4157 "datetimemodule.c"
        var $158=($157); //@line 4157 "datetimemodule.c"
        var $159=($158) << 16; //@line 4157 "datetimemodule.c"
        var $160=$right_addr; //@line 4157 "datetimemodule.c"
        var $161=$160; //@line 4157 "datetimemodule.c"
        var $162=$161+13; //@line 4157 "datetimemodule.c"
        var $163=$162+8; //@line 4157 "datetimemodule.c"
        var $164=HEAP[$163]; //@line 4157 "datetimemodule.c"
        var $165=($164); //@line 4157 "datetimemodule.c"
        var $166=($165) << 8; //@line 4157 "datetimemodule.c"
        var $167=$right_addr; //@line 4157 "datetimemodule.c"
        var $168=$167; //@line 4157 "datetimemodule.c"
        var $169=$168+13; //@line 4157 "datetimemodule.c"
        var $170=$169+9; //@line 4157 "datetimemodule.c"
        var $171=HEAP[$170]; //@line 4157 "datetimemodule.c"
        var $172=($171); //@line 4157 "datetimemodule.c"
        var $173=($166) | ($159); //@line 4157 "datetimemodule.c"
        var $174=($173) | ($172); //@line 4157 "datetimemodule.c"
        var $175=($152) - ($174); //@line 4157 "datetimemodule.c"
        $delta_us=$175; //@line 4157 "datetimemodule.c"
        var $176=HEAP[$offset2]; //@line 4162 "datetimemodule.c"
        var $177=HEAP[$offset1]; //@line 4162 "datetimemodule.c"
        var $178=($176) - ($177); //@line 4162 "datetimemodule.c"
        var $179=($178) * 60; //@line 4162 "datetimemodule.c"
        var $180=$delta_s; //@line 4162 "datetimemodule.c"
        var $181=($179) + ($180); //@line 4162 "datetimemodule.c"
        $delta_s=$181; //@line 4162 "datetimemodule.c"
        var $182=$delta_d; //@line 4163 "datetimemodule.c"
        var $183=$delta_s; //@line 4163 "datetimemodule.c"
        var $184=$delta_us; //@line 4163 "datetimemodule.c"
        var $185=_new_delta_ex($182, $183, $184, 1, _PyDateTime_DeltaType); //@line 4163 "datetimemodule.c"
        $result=$185; //@line 4163 "datetimemodule.c"
        __lastLabel__ = 11; __label__ = 16; break; //@line 4163 "datetimemodule.c"
      case 12: // $bb11
        var $186=$right_addr; //@line 4165 "datetimemodule.c"
        var $187=$186+4; //@line 4165 "datetimemodule.c"
        var $188=HEAP[$187]; //@line 4165 "datetimemodule.c"
        var $189=($188)==(_PyDateTime_DeltaType); //@line 4165 "datetimemodule.c"
        if ($189) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 4165 "datetimemodule.c"
      case 13: // $bb12
        var $190=$right_addr; //@line 4165 "datetimemodule.c"
        var $191=$190+4; //@line 4165 "datetimemodule.c"
        var $192=HEAP[$191]; //@line 4165 "datetimemodule.c"
        var $193=_PyType_IsSubtype($192, _PyDateTime_DeltaType); //@line 4165 "datetimemodule.c"
        var $194=($193)!=0; //@line 4165 "datetimemodule.c"
        if ($194) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 4165 "datetimemodule.c"
      case 14: // $bb13
        var $195=$right_addr; //@line 4167 "datetimemodule.c"
        var $196=$195; //@line 4167 "datetimemodule.c"
        var $197=$left_addr; //@line 4167 "datetimemodule.c"
        var $198=$197; //@line 4167 "datetimemodule.c"
        var $199=_add_datetime_timedelta($198, $196, -1); //@line 4167 "datetimemodule.c"
        $result=$199; //@line 4167 "datetimemodule.c"
        __lastLabel__ = 14; __label__ = 16; break; //@line 4167 "datetimemodule.c"
      case 15: // $bb14thread_pre_split
        var $_pr=$result;
        __lastLabel__ = 15; __label__ = 16; break;
      case 16: // $bb14
        var $200=__lastLabel__ == 15 ? $_pr : (__lastLabel__ == 14 ? $199 : ($185));
        var $201=($200)==(__Py_NotImplementedStruct); //@line 4174 "datetimemodule.c"
        if ($201) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 4174 "datetimemodule.c"
      case 17: // $bb15
        var $202=$result; //@line 4175 "datetimemodule.c"
        var $203=$202; //@line 4175 "datetimemodule.c"
        var $204=HEAP[$203]; //@line 4175 "datetimemodule.c"
        var $205=($204) + 1; //@line 4175 "datetimemodule.c"
        var $206=$result; //@line 4175 "datetimemodule.c"
        var $207=$206; //@line 4175 "datetimemodule.c"
        HEAP[$207]=$205; //@line 4175 "datetimemodule.c"
        __label__ = 18; break; //@line 4175 "datetimemodule.c"
      case 18: // $bb16
        var $208=$result; //@line 4176 "datetimemodule.c"
        $0=$208; //@line 4176 "datetimemodule.c"
        __label__ = 19; break; //@line 4176 "datetimemodule.c"
      case 19: // $bb17
        var $209=$0; //@line 4133 "datetimemodule.c"
        $retval=$209; //@line 4133 "datetimemodule.c"
        var $retval18=$retval; //@line 4133 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 4133 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_repr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 1000; _memset(__stackBase__, 0, 1000);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $buffer=__stackBase__;
        var $type_name;
        var $baserepr;
        $self_addr=$self;
        var $1=$self_addr; //@line 4185 "datetimemodule.c"
        var $2=$1; //@line 4185 "datetimemodule.c"
        var $3=$2+4; //@line 4185 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 4185 "datetimemodule.c"
        var $5=$4+12; //@line 4185 "datetimemodule.c"
        var $6=HEAP[$5]; //@line 4185 "datetimemodule.c"
        $type_name=$6; //@line 4185 "datetimemodule.c"
        var $7=$self_addr; //@line 4188 "datetimemodule.c"
        var $8=$7+13; //@line 4188 "datetimemodule.c"
        var $9=$8+7; //@line 4188 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 4188 "datetimemodule.c"
        var $11=($10); //@line 4188 "datetimemodule.c"
        var $12=($11) << 16; //@line 4188 "datetimemodule.c"
        var $13=$self_addr; //@line 4188 "datetimemodule.c"
        var $14=$13+13; //@line 4188 "datetimemodule.c"
        var $15=$14+8; //@line 4188 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 4188 "datetimemodule.c"
        var $17=($16); //@line 4188 "datetimemodule.c"
        var $18=($17) << 8; //@line 4188 "datetimemodule.c"
        var $19=$self_addr; //@line 4188 "datetimemodule.c"
        var $20=$19+13; //@line 4188 "datetimemodule.c"
        var $21=$20+9; //@line 4188 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 4188 "datetimemodule.c"
        var $23=($22); //@line 4188 "datetimemodule.c"
        var $24=($18) | ($12); //@line 4188 "datetimemodule.c"
        var $25=($24) | ($23); //@line 4188 "datetimemodule.c"
        var $26=($25)!=0; //@line 4188 "datetimemodule.c"
        var $27=$self_addr; //@line 4189 "datetimemodule.c"
        var $28=$27+13; //@line 4189 "datetimemodule.c"
        if ($26) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4188 "datetimemodule.c"
      case 1: // $bb
        var $29=$28+7; //@line 4189 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 4189 "datetimemodule.c"
        var $31=($30); //@line 4189 "datetimemodule.c"
        var $32=($31) << 16; //@line 4189 "datetimemodule.c"
        var $33=$self_addr; //@line 4189 "datetimemodule.c"
        var $34=$33+13; //@line 4189 "datetimemodule.c"
        var $35=$34+8; //@line 4189 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 4189 "datetimemodule.c"
        var $37=($36); //@line 4189 "datetimemodule.c"
        var $38=($37) << 8; //@line 4189 "datetimemodule.c"
        var $39=$self_addr; //@line 4189 "datetimemodule.c"
        var $40=$39+13; //@line 4189 "datetimemodule.c"
        var $41=$40+9; //@line 4189 "datetimemodule.c"
        var $42=HEAP[$41]; //@line 4189 "datetimemodule.c"
        var $43=($42); //@line 4189 "datetimemodule.c"
        var $44=($38) | ($32); //@line 4189 "datetimemodule.c"
        var $45=($44) | ($43); //@line 4189 "datetimemodule.c"
        var $46=$self_addr; //@line 4189 "datetimemodule.c"
        var $47=$46+13; //@line 4189 "datetimemodule.c"
        var $48=$47+6; //@line 4189 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 4189 "datetimemodule.c"
        var $50=($49); //@line 4189 "datetimemodule.c"
        var $51=$self_addr; //@line 4189 "datetimemodule.c"
        var $52=$51+13; //@line 4189 "datetimemodule.c"
        var $53=$52+5; //@line 4189 "datetimemodule.c"
        var $54=HEAP[$53]; //@line 4189 "datetimemodule.c"
        var $55=($54); //@line 4189 "datetimemodule.c"
        var $56=$self_addr; //@line 4189 "datetimemodule.c"
        var $57=$56+13; //@line 4189 "datetimemodule.c"
        var $58=$57+4; //@line 4189 "datetimemodule.c"
        var $59=HEAP[$58]; //@line 4189 "datetimemodule.c"
        var $60=($59); //@line 4189 "datetimemodule.c"
        var $61=$self_addr; //@line 4189 "datetimemodule.c"
        var $62=$61; //@line 4189 "datetimemodule.c"
        var $63=$62+13; //@line 4189 "datetimemodule.c"
        var $64=$63+3; //@line 4189 "datetimemodule.c"
        var $65=HEAP[$64]; //@line 4189 "datetimemodule.c"
        var $66=($65); //@line 4189 "datetimemodule.c"
        var $67=$self_addr; //@line 4189 "datetimemodule.c"
        var $68=$67; //@line 4189 "datetimemodule.c"
        var $69=$68+13; //@line 4189 "datetimemodule.c"
        var $70=$69+2; //@line 4189 "datetimemodule.c"
        var $71=HEAP[$70]; //@line 4189 "datetimemodule.c"
        var $72=($71); //@line 4189 "datetimemodule.c"
        var $73=$self_addr; //@line 4189 "datetimemodule.c"
        var $74=$73; //@line 4189 "datetimemodule.c"
        var $75=$74+13; //@line 4189 "datetimemodule.c"
        var $76=$75; //@line 4189 "datetimemodule.c"
        var $77=HEAP[$76]; //@line 4189 "datetimemodule.c"
        var $78=($77); //@line 4189 "datetimemodule.c"
        var $79=($78) << 8; //@line 4189 "datetimemodule.c"
        var $80=$self_addr; //@line 4189 "datetimemodule.c"
        var $81=$80; //@line 4189 "datetimemodule.c"
        var $82=$81+13; //@line 4189 "datetimemodule.c"
        var $83=$82+1; //@line 4189 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 4189 "datetimemodule.c"
        var $85=($84); //@line 4189 "datetimemodule.c"
        var $86=($85) | ($79); //@line 4189 "datetimemodule.c"
        var $buffer1=$buffer; //@line 4189 "datetimemodule.c"
        var $87=$type_name; //@line 4189 "datetimemodule.c"
        var $88=_PyOS_snprintf($buffer1, 1000, __str235, allocate([$87,0,0,0,$86,0,0,0,$72,0,0,0,$66,0,0,0,$60,0,0,0,$55,0,0,0,$50,0,0,0,$45,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 4189 "datetimemodule.c"
        __label__ = 5; break; //@line 4189 "datetimemodule.c"
      case 2: // $bb2
        var $89=$28+6; //@line 4197 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 4197 "datetimemodule.c"
        var $91=($90)!=0; //@line 4197 "datetimemodule.c"
        var $92=$self_addr; //@line 4198 "datetimemodule.c"
        var $93=$92+13; //@line 4198 "datetimemodule.c"
        if ($91) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4197 "datetimemodule.c"
      case 3: // $bb3
        var $94=$93+6; //@line 4198 "datetimemodule.c"
        var $95=HEAP[$94]; //@line 4198 "datetimemodule.c"
        var $96=($95); //@line 4198 "datetimemodule.c"
        var $97=$self_addr; //@line 4198 "datetimemodule.c"
        var $98=$97+13; //@line 4198 "datetimemodule.c"
        var $99=$98+5; //@line 4198 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 4198 "datetimemodule.c"
        var $101=($100); //@line 4198 "datetimemodule.c"
        var $102=$self_addr; //@line 4198 "datetimemodule.c"
        var $103=$102+13; //@line 4198 "datetimemodule.c"
        var $104=$103+4; //@line 4198 "datetimemodule.c"
        var $105=HEAP[$104]; //@line 4198 "datetimemodule.c"
        var $106=($105); //@line 4198 "datetimemodule.c"
        var $107=$self_addr; //@line 4198 "datetimemodule.c"
        var $108=$107; //@line 4198 "datetimemodule.c"
        var $109=$108+13; //@line 4198 "datetimemodule.c"
        var $110=$109+3; //@line 4198 "datetimemodule.c"
        var $111=HEAP[$110]; //@line 4198 "datetimemodule.c"
        var $112=($111); //@line 4198 "datetimemodule.c"
        var $113=$self_addr; //@line 4198 "datetimemodule.c"
        var $114=$113; //@line 4198 "datetimemodule.c"
        var $115=$114+13; //@line 4198 "datetimemodule.c"
        var $116=$115+2; //@line 4198 "datetimemodule.c"
        var $117=HEAP[$116]; //@line 4198 "datetimemodule.c"
        var $118=($117); //@line 4198 "datetimemodule.c"
        var $119=$self_addr; //@line 4198 "datetimemodule.c"
        var $120=$119; //@line 4198 "datetimemodule.c"
        var $121=$120+13; //@line 4198 "datetimemodule.c"
        var $122=$121; //@line 4198 "datetimemodule.c"
        var $123=HEAP[$122]; //@line 4198 "datetimemodule.c"
        var $124=($123); //@line 4198 "datetimemodule.c"
        var $125=($124) << 8; //@line 4198 "datetimemodule.c"
        var $126=$self_addr; //@line 4198 "datetimemodule.c"
        var $127=$126; //@line 4198 "datetimemodule.c"
        var $128=$127+13; //@line 4198 "datetimemodule.c"
        var $129=$128+1; //@line 4198 "datetimemodule.c"
        var $130=HEAP[$129]; //@line 4198 "datetimemodule.c"
        var $131=($130); //@line 4198 "datetimemodule.c"
        var $132=($131) | ($125); //@line 4198 "datetimemodule.c"
        var $buffer4=$buffer; //@line 4198 "datetimemodule.c"
        var $133=$type_name; //@line 4198 "datetimemodule.c"
        var $134=_PyOS_snprintf($buffer4, 1000, __str236, allocate([$133,0,0,0,$132,0,0,0,$118,0,0,0,$112,0,0,0,$106,0,0,0,$101,0,0,0,$96,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 4198 "datetimemodule.c"
        __label__ = 5; break; //@line 4198 "datetimemodule.c"
      case 4: // $bb5
        var $135=$93+5; //@line 4206 "datetimemodule.c"
        var $136=HEAP[$135]; //@line 4206 "datetimemodule.c"
        var $137=($136); //@line 4206 "datetimemodule.c"
        var $138=$self_addr; //@line 4206 "datetimemodule.c"
        var $139=$138+13; //@line 4206 "datetimemodule.c"
        var $140=$139+4; //@line 4206 "datetimemodule.c"
        var $141=HEAP[$140]; //@line 4206 "datetimemodule.c"
        var $142=($141); //@line 4206 "datetimemodule.c"
        var $143=$self_addr; //@line 4206 "datetimemodule.c"
        var $144=$143; //@line 4206 "datetimemodule.c"
        var $145=$144+13; //@line 4206 "datetimemodule.c"
        var $146=$145+3; //@line 4206 "datetimemodule.c"
        var $147=HEAP[$146]; //@line 4206 "datetimemodule.c"
        var $148=($147); //@line 4206 "datetimemodule.c"
        var $149=$self_addr; //@line 4206 "datetimemodule.c"
        var $150=$149; //@line 4206 "datetimemodule.c"
        var $151=$150+13; //@line 4206 "datetimemodule.c"
        var $152=$151+2; //@line 4206 "datetimemodule.c"
        var $153=HEAP[$152]; //@line 4206 "datetimemodule.c"
        var $154=($153); //@line 4206 "datetimemodule.c"
        var $155=$self_addr; //@line 4206 "datetimemodule.c"
        var $156=$155; //@line 4206 "datetimemodule.c"
        var $157=$156+13; //@line 4206 "datetimemodule.c"
        var $158=$157; //@line 4206 "datetimemodule.c"
        var $159=HEAP[$158]; //@line 4206 "datetimemodule.c"
        var $160=($159); //@line 4206 "datetimemodule.c"
        var $161=($160) << 8; //@line 4206 "datetimemodule.c"
        var $162=$self_addr; //@line 4206 "datetimemodule.c"
        var $163=$162; //@line 4206 "datetimemodule.c"
        var $164=$163+13; //@line 4206 "datetimemodule.c"
        var $165=$164+1; //@line 4206 "datetimemodule.c"
        var $166=HEAP[$165]; //@line 4206 "datetimemodule.c"
        var $167=($166); //@line 4206 "datetimemodule.c"
        var $168=($167) | ($161); //@line 4206 "datetimemodule.c"
        var $buffer6=$buffer; //@line 4206 "datetimemodule.c"
        var $169=$type_name; //@line 4206 "datetimemodule.c"
        var $170=_PyOS_snprintf($buffer6, 1000, __str237, allocate([$169,0,0,0,$168,0,0,0,$154,0,0,0,$148,0,0,0,$142,0,0,0,$137,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 4206 "datetimemodule.c"
        __label__ = 5; break; //@line 4206 "datetimemodule.c"
      case 5: // $bb7
        var $buffer8=$buffer; //@line 4212 "datetimemodule.c"
        var $171=_PyString_FromString($buffer8); //@line 4212 "datetimemodule.c"
        $baserepr=$171; //@line 4212 "datetimemodule.c"
        var $172=($171)==0; //@line 4213 "datetimemodule.c"
        if ($172) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 4213 "datetimemodule.c"
      case 6: // $bb9
        var $173=$self_addr; //@line 4213 "datetimemodule.c"
        var $174=$173; //@line 4213 "datetimemodule.c"
        var $175=$174+12; //@line 4213 "datetimemodule.c"
        var $176=HEAP[$175]; //@line 4213 "datetimemodule.c"
        var $177=($176)==0; //@line 4213 "datetimemodule.c"
        if ($177) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 4213 "datetimemodule.c"
      case 7: // $bb10
        var $178=$baserepr; //@line 4214 "datetimemodule.c"
        $0=$178; //@line 4214 "datetimemodule.c"
        __label__ = 9; break; //@line 4214 "datetimemodule.c"
      case 8: // $bb11
        var $179=$self_addr; //@line 4215 "datetimemodule.c"
        var $180=$179+24; //@line 4215 "datetimemodule.c"
        var $181=HEAP[$180]; //@line 4215 "datetimemodule.c"
        var $182=$baserepr; //@line 4215 "datetimemodule.c"
        var $183=_append_keyword_tzinfo($182, $181); //@line 4215 "datetimemodule.c"
        $0=$183; //@line 4215 "datetimemodule.c"
        __label__ = 9; break; //@line 4215 "datetimemodule.c"
      case 9: // $bb12
        var $184=$0; //@line 4214 "datetimemodule.c"
        $retval=$184; //@line 4214 "datetimemodule.c"
        var $retval13=$retval; //@line 4214 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 4214 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_str($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 4221 "datetimemodule.c"
    var $2=$1; //@line 4221 "datetimemodule.c"
    var $3=__PyObject_CallMethod_SizeT($2, __str146, __str238, allocate([__str239,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 4221 "datetimemodule.c"
    $0=$3; //@line 4221 "datetimemodule.c"
    var $4=$0; //@line 4221 "datetimemodule.c"
    $retval=$4; //@line 4221 "datetimemodule.c"
    var $retval1=$retval; //@line 4221 "datetimemodule.c"
    ;
    return $retval1; //@line 4221 "datetimemodule.c"
  }
  

  function _datetime_isoformat($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 105; _memset(__stackBase__, 0, 105);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $sep=__stackBase__;
        var $buffer=__stackBase__+1;
        var $cp;
        var $result=__stackBase__+101;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$sep]=84; //@line 4227 "datetimemodule.c"
        var $1=$args_addr; //@line 4233 "datetimemodule.c"
        var $2=$kw_addr; //@line 4233 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str240, _keywords_13363, allocate([$sep,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 4233 "datetimemodule.c"
        var $4=($3)==0; //@line 4233 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4233 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 4235 "datetimemodule.c"
        __label__ = 12; break; //@line 4235 "datetimemodule.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 4236 "datetimemodule.c"
        var $6=$5; //@line 4236 "datetimemodule.c"
        var $buffer2=$buffer; //@line 4236 "datetimemodule.c"
        var $7=_isoformat_date($6, $buffer2, 100); //@line 4236 "datetimemodule.c"
        $cp=$7; //@line 4236 "datetimemodule.c"
        var $8=$cp; //@line 4237 "datetimemodule.c"
        var $9=($8)==0; //@line 4237 "datetimemodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4237 "datetimemodule.c"
      case 3: // $bb3
        ___assert_fail(__str242, __str1, 4237, ___PRETTY_FUNCTION___13367); //@line 4237 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4237 "datetimemodule.c"
      case 4: // $bb4
        var $10=HEAP[$sep]; //@line 4238 "datetimemodule.c"
        var $11=$cp; //@line 4238 "datetimemodule.c"
        HEAP[$11]=$10; //@line 4238 "datetimemodule.c"
        var $12=$cp; //@line 4238 "datetimemodule.c"
        var $13=$12+1; //@line 4238 "datetimemodule.c"
        $cp=$13; //@line 4238 "datetimemodule.c"
        var $14=$cp; //@line 4239 "datetimemodule.c"
        var $15=($14); //@line 4239 "datetimemodule.c"
        var $buffer5=$buffer; //@line 4239 "datetimemodule.c"
        var $buffer56=($buffer5); //@line 4239 "datetimemodule.c"
        var $buffer56_neg=0 - ($buffer56);
        var $_neg=0 - ($15);
        var $buffer56_neg_neg=0 - ($buffer56_neg);
        var $_neg1=($buffer56_neg_neg) + 100;
        var $16=($_neg1) + ($_neg);
        var $17=$self_addr; //@line 4239 "datetimemodule.c"
        var $18=$cp; //@line 4239 "datetimemodule.c"
        var $19=_isoformat_time($17, $18, $16); //@line 4239 "datetimemodule.c"
        $cp=$19; //@line 4239 "datetimemodule.c"
        var $20=$cp; //@line 4240 "datetimemodule.c"
        var $21=($20); //@line 4240 "datetimemodule.c"
        var $buffer8=$buffer; //@line 4240 "datetimemodule.c"
        var $buffer89=($buffer8); //@line 4240 "datetimemodule.c"
        var $22=($21) - ($buffer89); //@line 4240 "datetimemodule.c"
        var $buffer11=$buffer; //@line 4240 "datetimemodule.c"
        var $23=_PyString_FromStringAndSize($buffer11, $22); //@line 4240 "datetimemodule.c"
        HEAP[$result]=$23; //@line 4240 "datetimemodule.c"
        var $24=HEAP[$result]; //@line 4241 "datetimemodule.c"
        var $25=($24)==0; //@line 4241 "datetimemodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 4241 "datetimemodule.c"
      case 5: // $bb12
        var $26=$self_addr; //@line 4241 "datetimemodule.c"
        var $27=$26; //@line 4241 "datetimemodule.c"
        var $28=$27+12; //@line 4241 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 4241 "datetimemodule.c"
        var $30=($29)==0; //@line 4241 "datetimemodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4241 "datetimemodule.c"
      case 6: // $bb13
        var $31=HEAP[$result]; //@line 4242 "datetimemodule.c"
        $0=$31; //@line 4242 "datetimemodule.c"
        __label__ = 12; break; //@line 4242 "datetimemodule.c"
      case 7: // $bb14
        var $32=$self_addr; //@line 4245 "datetimemodule.c"
        var $33=$32; //@line 4245 "datetimemodule.c"
        var $34=$self_addr; //@line 4245 "datetimemodule.c"
        var $35=$34+24; //@line 4245 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 4245 "datetimemodule.c"
        var $buffer15=$buffer; //@line 4245 "datetimemodule.c"
        var $37=_format_utcoffset($buffer15, __str200, $36, $33); //@line 4245 "datetimemodule.c"
        var $38=($37) < 0; //@line 4245 "datetimemodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 4245 "datetimemodule.c"
      case 8: // $bb16
        var $39=HEAP[$result]; //@line 4247 "datetimemodule.c"
        var $40=$39; //@line 4247 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 4247 "datetimemodule.c"
        var $42=($41) - 1; //@line 4247 "datetimemodule.c"
        var $43=$39; //@line 4247 "datetimemodule.c"
        HEAP[$43]=$42; //@line 4247 "datetimemodule.c"
        var $44=$39; //@line 4247 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 4247 "datetimemodule.c"
        var $46=($45)==0; //@line 4247 "datetimemodule.c"
        if ($46) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4247 "datetimemodule.c"
      case 9: // $bb17
        var $47=HEAP[$result]; //@line 4247 "datetimemodule.c"
        var $48=$47+4; //@line 4247 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 4247 "datetimemodule.c"
        var $50=$49+24; //@line 4247 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 4247 "datetimemodule.c"
        var $52=HEAP[$result]; //@line 4247 "datetimemodule.c"
        FUNCTION_TABLE[$51]($52); //@line 4247 "datetimemodule.c"
        __label__ = 10; break; //@line 4247 "datetimemodule.c"
      case 10: // $bb18
        $0=0; //@line 4248 "datetimemodule.c"
        __label__ = 12; break; //@line 4248 "datetimemodule.c"
      case 11: // $bb19
        var $buffer20=$buffer; //@line 4250 "datetimemodule.c"
        var $53=_PyString_FromString($buffer20); //@line 4250 "datetimemodule.c"
        _PyString_ConcatAndDel($result, $53); //@line 4250 "datetimemodule.c"
        var $54=HEAP[$result]; //@line 4251 "datetimemodule.c"
        $0=$54; //@line 4251 "datetimemodule.c"
        __label__ = 12; break; //@line 4251 "datetimemodule.c"
      case 12: // $bb21
        var $55=$0; //@line 4235 "datetimemodule.c"
        $retval=$55; //@line 4235 "datetimemodule.c"
        var $retval22=$retval; //@line 4235 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 4235 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_ctime($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 4257 "datetimemodule.c"
    var $2=$1+13; //@line 4257 "datetimemodule.c"
    var $3=$2+6; //@line 4257 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 4257 "datetimemodule.c"
    var $5=($4); //@line 4257 "datetimemodule.c"
    var $6=$self_addr; //@line 4257 "datetimemodule.c"
    var $7=$6+13; //@line 4257 "datetimemodule.c"
    var $8=$7+5; //@line 4257 "datetimemodule.c"
    var $9=HEAP[$8]; //@line 4257 "datetimemodule.c"
    var $10=($9); //@line 4257 "datetimemodule.c"
    var $11=$self_addr; //@line 4257 "datetimemodule.c"
    var $12=$11+13; //@line 4257 "datetimemodule.c"
    var $13=$12+4; //@line 4257 "datetimemodule.c"
    var $14=HEAP[$13]; //@line 4257 "datetimemodule.c"
    var $15=($14); //@line 4257 "datetimemodule.c"
    var $16=$self_addr; //@line 4257 "datetimemodule.c"
    var $17=$16; //@line 4257 "datetimemodule.c"
    var $18=_format_ctime($17, $15, $10, $5); //@line 4257 "datetimemodule.c"
    $0=$18; //@line 4257 "datetimemodule.c"
    var $19=$0; //@line 4257 "datetimemodule.c"
    $retval=$19; //@line 4257 "datetimemodule.c"
    var $retval1=$retval; //@line 4257 "datetimemodule.c"
    ;
    return $retval1; //@line 4257 "datetimemodule.c"
  }
  

  function _datetime_richcompare($self, $other, $op) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $other_addr;
        var $op_addr;
        var $retval;
        var $iftmp_510;
        var $0;
        var $diff;
        var $n1=__stackBase__;
        var $n2=__stackBase__+4;
        var $offset1=__stackBase__+8;
        var $offset2=__stackBase__+12;
        var $result;
        var $delta;
        $self_addr=$self;
        $other_addr=$other;
        $op_addr=$op;
        var $1=$other_addr; //@line 4276 "datetimemodule.c"
        var $2=$1+4; //@line 4276 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 4276 "datetimemodule.c"
        var $4=($3)!=(_PyDateTime_DateTimeType); //@line 4276 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 4276 "datetimemodule.c"
      case 1: // $bb
        var $5=$other_addr; //@line 4276 "datetimemodule.c"
        var $6=$5+4; //@line 4276 "datetimemodule.c"
        var $7=HEAP[$6]; //@line 4276 "datetimemodule.c"
        var $8=_PyType_IsSubtype($7, _PyDateTime_DateTimeType); //@line 4276 "datetimemodule.c"
        var $9=($8)==0; //@line 4276 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 12; break; } //@line 4276 "datetimemodule.c"
      case 2: // $bb1
        var $10=$other_addr; //@line 4286 "datetimemodule.c"
        var $11=_PyObject_HasAttrString($10, __str149); //@line 4286 "datetimemodule.c"
        var $12=($11)!=0; //@line 4286 "datetimemodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 4286 "datetimemodule.c"
      case 3: // $bb2
        var $13=$other_addr; //@line 4286 "datetimemodule.c"
        var $14=$13+4; //@line 4286 "datetimemodule.c"
        var $15=HEAP[$14]; //@line 4286 "datetimemodule.c"
        var $16=($15)!=(_PyDateTime_DateType); //@line 4286 "datetimemodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 4286 "datetimemodule.c"
      case 4: // $bb3
        var $17=$other_addr; //@line 4286 "datetimemodule.c"
        var $18=$17+4; //@line 4286 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 4286 "datetimemodule.c"
        var $20=_PyType_IsSubtype($19, _PyDateTime_DateType); //@line 4286 "datetimemodule.c"
        var $21=($20)==0; //@line 4286 "datetimemodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4286 "datetimemodule.c"
      case 5: // $bb4
        var $22=HEAP[__Py_NotImplementedStruct]; //@line 4289 "datetimemodule.c"
        var $23=($22) + 1; //@line 4289 "datetimemodule.c"
        HEAP[__Py_NotImplementedStruct]=$23; //@line 4289 "datetimemodule.c"
        $0=__Py_NotImplementedStruct; //@line 4290 "datetimemodule.c"
        __label__ = 35; break; //@line 4290 "datetimemodule.c"
      case 6: // $bb5
        var $24=$op_addr; //@line 4292 "datetimemodule.c"
        var $25=($24)==2; //@line 4292 "datetimemodule.c"
        var $26=$op_addr; //@line 4292 "datetimemodule.c"
        var $27=($26)==3; //@line 4292 "datetimemodule.c"
        var $or_cond=($25) | ($27);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 4292 "datetimemodule.c"
      case 7: // $bb7
        var $28=$op_addr; //@line 4293 "datetimemodule.c"
        var $29=($28)==2; //@line 4293 "datetimemodule.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4293 "datetimemodule.c"
      case 8: // $bb8
        $iftmp_510=__Py_ZeroStruct; //@line 4293 "datetimemodule.c"
        __label__ = 10; break; //@line 4293 "datetimemodule.c"
      case 9: // $bb9
        $iftmp_510=__Py_TrueStruct; //@line 4293 "datetimemodule.c"
        __label__ = 10; break; //@line 4293 "datetimemodule.c"
      case 10: // $bb10
        var $30=$iftmp_510; //@line 4293 "datetimemodule.c"
        $result=$30; //@line 4293 "datetimemodule.c"
        var $31=$result; //@line 4294 "datetimemodule.c"
        var $32=$31; //@line 4294 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 4294 "datetimemodule.c"
        var $34=($33) + 1; //@line 4294 "datetimemodule.c"
        var $35=$result; //@line 4294 "datetimemodule.c"
        var $36=$35; //@line 4294 "datetimemodule.c"
        HEAP[$36]=$34; //@line 4294 "datetimemodule.c"
        var $37=$result; //@line 4295 "datetimemodule.c"
        $0=$37; //@line 4295 "datetimemodule.c"
        __label__ = 35; break; //@line 4295 "datetimemodule.c"
      case 11: // $bb11
        var $38=$self_addr; //@line 4298 "datetimemodule.c"
        var $39=$38; //@line 4298 "datetimemodule.c"
        var $40=$other_addr; //@line 4298 "datetimemodule.c"
        var $41=_cmperror($39, $40); //@line 4298 "datetimemodule.c"
        $0=$41; //@line 4298 "datetimemodule.c"
        __label__ = 35; break; //@line 4298 "datetimemodule.c"
      case 12: // $bb12
        var $42=$self_addr; //@line 4301 "datetimemodule.c"
        var $43=$42; //@line 4301 "datetimemodule.c"
        var $44=$self_addr; //@line 4301 "datetimemodule.c"
        var $45=$44; //@line 4301 "datetimemodule.c"
        var $46=$other_addr; //@line 4301 "datetimemodule.c"
        var $47=$other_addr; //@line 4301 "datetimemodule.c"
        var $48=_classify_two_utcoffsets($45, $offset1, $n1, $43, $46, $offset2, $n2, $47); //@line 4301 "datetimemodule.c"
        var $49=($48) < 0; //@line 4301 "datetimemodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 4301 "datetimemodule.c"
      case 13: // $bb13
        $0=0; //@line 4305 "datetimemodule.c"
        __label__ = 35; break; //@line 4305 "datetimemodule.c"
      case 14: // $bb14
        var $50=HEAP[$n1]; //@line 4306 "datetimemodule.c"
        var $51=($50)==1; //@line 4306 "datetimemodule.c"
        if ($51) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 4306 "datetimemodule.c"
      case 15: // $bb15
        var $52=HEAP[$n2]; //@line 4306 "datetimemodule.c"
        var $53=($52)==1; //@line 4306 "datetimemodule.c"
        if ($53) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 4306 "datetimemodule.c"
      case 16: // $bb16
        ___assert_fail(__str203, __str1, 4306, ___PRETTY_FUNCTION___13435); //@line 4306 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4306 "datetimemodule.c"
      case 17: // $bb17
        var $54=HEAP[$n1]; //@line 4311 "datetimemodule.c"
        var $55=HEAP[$n2]; //@line 4311 "datetimemodule.c"
        var $56=($54)==($55); //@line 4311 "datetimemodule.c"
        if ($56) { __lastLabel__ = 17; __label__ = 18; break; } else { __lastLabel__ = 17; __label__ = 21; break; } //@line 4311 "datetimemodule.c"
      case 18: // $bb18
        var $57=HEAP[$offset1]; //@line 4311 "datetimemodule.c"
        var $58=HEAP[$offset2]; //@line 4311 "datetimemodule.c"
        var $59=($57)==($58); //@line 4311 "datetimemodule.c"
        if ($59) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 4311 "datetimemodule.c"
      case 19: // $bb19
        var $60=$other_addr; //@line 4312 "datetimemodule.c"
        var $61=$60; //@line 4312 "datetimemodule.c"
        var $62=$61+13; //@line 4312 "datetimemodule.c"
        var $63=$62; //@line 4312 "datetimemodule.c"
        var $64=$self_addr; //@line 4312 "datetimemodule.c"
        var $65=$64+13; //@line 4312 "datetimemodule.c"
        var $66=$65; //@line 4312 "datetimemodule.c"
        var $67=_memcmp($66, $63, 10); //@line 4312 "datetimemodule.c"
        $diff=$67; //@line 4312 "datetimemodule.c"
        var $68=$diff; //@line 4314 "datetimemodule.c"
        var $69=$op_addr; //@line 4314 "datetimemodule.c"
        var $70=_diff_to_bool($68, $69); //@line 4314 "datetimemodule.c"
        $0=$70; //@line 4314 "datetimemodule.c"
        __label__ = 35; break; //@line 4314 "datetimemodule.c"
      case 20: // $bb20thread_pre_split
        var $_pr=HEAP[$n1];
        __lastLabel__ = 20; __label__ = 21; break;
      case 21: // $bb20
        var $71=__lastLabel__ == 20 ? $_pr : ($54);
        var $72=($71)==3; //@line 4317 "datetimemodule.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 32; break; } //@line 4317 "datetimemodule.c"
      case 22: // $bb21
        var $73=HEAP[$n2]; //@line 4317 "datetimemodule.c"
        var $74=($73)==3; //@line 4317 "datetimemodule.c"
        if ($74) { __label__ = 23; break; } else { __label__ = 32; break; } //@line 4317 "datetimemodule.c"
      case 23: // $bb22
        var $75=HEAP[$offset1]; //@line 4320 "datetimemodule.c"
        var $76=HEAP[$offset2]; //@line 4320 "datetimemodule.c"
        var $77=($75)==($76); //@line 4320 "datetimemodule.c"
        if ($77) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 4320 "datetimemodule.c"
      case 24: // $bb23
        ___assert_fail(__str204, __str1, 4320, ___PRETTY_FUNCTION___13435); //@line 4320 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4320 "datetimemodule.c"
      case 25: // $bb24
        var $78=$self_addr; //@line 4321 "datetimemodule.c"
        var $79=$78; //@line 4321 "datetimemodule.c"
        var $80=$other_addr; //@line 4321 "datetimemodule.c"
        var $81=_datetime_subtract($79, $80); //@line 4321 "datetimemodule.c"
        var $82=$81; //@line 4321 "datetimemodule.c"
        $delta=$82; //@line 4321 "datetimemodule.c"
        var $83=$delta; //@line 4323 "datetimemodule.c"
        var $84=($83)==0; //@line 4323 "datetimemodule.c"
        if ($84) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 4323 "datetimemodule.c"
      case 26: // $bb25
        $0=0; //@line 4324 "datetimemodule.c"
        __label__ = 35; break; //@line 4324 "datetimemodule.c"
      case 27: // $bb26
        var $85=$delta; //@line 4325 "datetimemodule.c"
        var $86=$85+12; //@line 4325 "datetimemodule.c"
        var $87=HEAP[$86]; //@line 4325 "datetimemodule.c"
        $diff=$87; //@line 4325 "datetimemodule.c"
        var $88=$diff; //@line 4326 "datetimemodule.c"
        var $89=($88)==0; //@line 4326 "datetimemodule.c"
        if ($89) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 4326 "datetimemodule.c"
      case 28: // $bb27
        var $90=$delta; //@line 4327 "datetimemodule.c"
        var $91=$90+16; //@line 4327 "datetimemodule.c"
        var $92=HEAP[$91]; //@line 4327 "datetimemodule.c"
        var $93=$delta; //@line 4327 "datetimemodule.c"
        var $94=$93+20; //@line 4327 "datetimemodule.c"
        var $95=HEAP[$94]; //@line 4327 "datetimemodule.c"
        var $96=($95) | ($92); //@line 4327 "datetimemodule.c"
        $diff=$96; //@line 4327 "datetimemodule.c"
        __label__ = 29; break; //@line 4327 "datetimemodule.c"
      case 29: // $bb28
        var $97=$delta; //@line 4329 "datetimemodule.c"
        var $98=$97; //@line 4329 "datetimemodule.c"
        var $99=$98; //@line 4329 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 4329 "datetimemodule.c"
        var $101=($100) - 1; //@line 4329 "datetimemodule.c"
        var $102=$98; //@line 4329 "datetimemodule.c"
        HEAP[$102]=$101; //@line 4329 "datetimemodule.c"
        var $103=$98; //@line 4329 "datetimemodule.c"
        var $104=HEAP[$103]; //@line 4329 "datetimemodule.c"
        var $105=($104)==0; //@line 4329 "datetimemodule.c"
        if ($105) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 4329 "datetimemodule.c"
      case 30: // $bb29
        var $106=$delta; //@line 4329 "datetimemodule.c"
        var $107=$106; //@line 4329 "datetimemodule.c"
        var $108=$107+4; //@line 4329 "datetimemodule.c"
        var $109=HEAP[$108]; //@line 4329 "datetimemodule.c"
        var $110=$109+24; //@line 4329 "datetimemodule.c"
        var $111=HEAP[$110]; //@line 4329 "datetimemodule.c"
        var $112=$delta; //@line 4329 "datetimemodule.c"
        var $113=$112; //@line 4329 "datetimemodule.c"
        FUNCTION_TABLE[$111]($113); //@line 4329 "datetimemodule.c"
        __label__ = 31; break; //@line 4329 "datetimemodule.c"
      case 31: // $bb30
        var $114=$diff; //@line 4330 "datetimemodule.c"
        var $115=$op_addr; //@line 4330 "datetimemodule.c"
        var $116=_diff_to_bool($114, $115); //@line 4330 "datetimemodule.c"
        $0=$116; //@line 4330 "datetimemodule.c"
        __label__ = 35; break; //@line 4330 "datetimemodule.c"
      case 32: // $bb31
        var $117=HEAP[$n1]; //@line 4333 "datetimemodule.c"
        var $118=HEAP[$n2]; //@line 4333 "datetimemodule.c"
        var $119=($117)==($118); //@line 4333 "datetimemodule.c"
        if ($119) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 4333 "datetimemodule.c"
      case 33: // $bb32
        ___assert_fail(__str205, __str1, 4333, ___PRETTY_FUNCTION___13435); //@line 4333 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4333 "datetimemodule.c"
      case 34: // $bb33
        var $120=HEAP[_PyExc_TypeError]; //@line 4334 "datetimemodule.c"
        _PyErr_SetString($120, __str243); //@line 4334 "datetimemodule.c"
        $0=0; //@line 4337 "datetimemodule.c"
        __label__ = 35; break; //@line 4337 "datetimemodule.c"
      case 35: // $bb34
        var $121=$0; //@line 4290 "datetimemodule.c"
        $retval=$121; //@line 4290 "datetimemodule.c"
        var $retval35=$retval; //@line 4290 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 4290 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_hash($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $n;
        var $offset=__stackBase__;
        var $temp;
        var $days;
        var $seconds;
        $self_addr=$self;
        var $1=$self_addr; //@line 4343 "datetimemodule.c"
        var $2=$1+8; //@line 4343 "datetimemodule.c"
        var $3=HEAP[$2]; //@line 4343 "datetimemodule.c"
        var $4=($3)==-1; //@line 4343 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 15; break; } //@line 4343 "datetimemodule.c"
      case 1: // $bb
        var $5=$self_addr; //@line 4348 "datetimemodule.c"
        var $6=$5; //@line 4348 "datetimemodule.c"
        var $7=$self_addr; //@line 4348 "datetimemodule.c"
        var $8=$7; //@line 4348 "datetimemodule.c"
        var $9=_classify_utcoffset($8, $6, $offset); //@line 4348 "datetimemodule.c"
        $n=$9; //@line 4348 "datetimemodule.c"
        var $10=$n; //@line 4350 "datetimemodule.c"
        var $11=($10)==1; //@line 4350 "datetimemodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 4350 "datetimemodule.c"
      case 2: // $bb1
        ___assert_fail(__str207, __str1, 4350, ___PRETTY_FUNCTION___13531); //@line 4350 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4350 "datetimemodule.c"
      case 3: // $bb2
        var $12=$n; //@line 4351 "datetimemodule.c"
        var $13=($12)==0; //@line 4351 "datetimemodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4351 "datetimemodule.c"
      case 4: // $bb3
        $0=-1; //@line 4352 "datetimemodule.c"
        __label__ = 16; break; //@line 4352 "datetimemodule.c"
      case 5: // $bb4
        var $14=$n; //@line 4355 "datetimemodule.c"
        var $15=($14)==2; //@line 4355 "datetimemodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4355 "datetimemodule.c"
      case 6: // $bb5
        var $16=$self_addr; //@line 4356 "datetimemodule.c"
        var $17=$16+13; //@line 4356 "datetimemodule.c"
        var $18=$17; //@line 4356 "datetimemodule.c"
        var $19=_PyString_FromStringAndSize($18, 10); //@line 4356 "datetimemodule.c"
        $temp=$19; //@line 4356 "datetimemodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 4356 "datetimemodule.c"
      case 7: // $bb6
        var $20=$n; //@line 4363 "datetimemodule.c"
        var $21=($20)!=3; //@line 4363 "datetimemodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4363 "datetimemodule.c"
      case 8: // $bb7
        ___assert_fail(__str208, __str1, 4363, ___PRETTY_FUNCTION___13531); //@line 4363 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4363 "datetimemodule.c"
      case 9: // $bb8
        var $22=$self_addr; //@line 4364 "datetimemodule.c"
        var $23=$22; //@line 4364 "datetimemodule.c"
        var $24=$23+12; //@line 4364 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4364 "datetimemodule.c"
        var $26=($25)==0; //@line 4364 "datetimemodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 4364 "datetimemodule.c"
      case 10: // $bb9
        ___assert_fail(__str209, __str1, 4364, ___PRETTY_FUNCTION___13531); //@line 4364 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4364 "datetimemodule.c"
      case 11: // $bb10
        var $27=$self_addr; //@line 4365 "datetimemodule.c"
        var $28=$27; //@line 4365 "datetimemodule.c"
        var $29=$28+13; //@line 4365 "datetimemodule.c"
        var $30=$29+3; //@line 4365 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 4365 "datetimemodule.c"
        var $32=($31); //@line 4365 "datetimemodule.c"
        var $33=$self_addr; //@line 4365 "datetimemodule.c"
        var $34=$33; //@line 4365 "datetimemodule.c"
        var $35=$34+13; //@line 4365 "datetimemodule.c"
        var $36=$35+2; //@line 4365 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 4365 "datetimemodule.c"
        var $38=($37); //@line 4365 "datetimemodule.c"
        var $39=$self_addr; //@line 4365 "datetimemodule.c"
        var $40=$39; //@line 4365 "datetimemodule.c"
        var $41=$40+13; //@line 4365 "datetimemodule.c"
        var $42=$41; //@line 4365 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 4365 "datetimemodule.c"
        var $44=($43); //@line 4365 "datetimemodule.c"
        var $45=($44) << 8; //@line 4365 "datetimemodule.c"
        var $46=$self_addr; //@line 4365 "datetimemodule.c"
        var $47=$46; //@line 4365 "datetimemodule.c"
        var $48=$47+13; //@line 4365 "datetimemodule.c"
        var $49=$48+1; //@line 4365 "datetimemodule.c"
        var $50=HEAP[$49]; //@line 4365 "datetimemodule.c"
        var $51=($50); //@line 4365 "datetimemodule.c"
        var $52=($51) | ($45); //@line 4365 "datetimemodule.c"
        var $53=_ymd_to_ord($52, $38, $32); //@line 4365 "datetimemodule.c"
        $days=$53; //@line 4365 "datetimemodule.c"
        var $54=$self_addr; //@line 4368 "datetimemodule.c"
        var $55=$54+13; //@line 4368 "datetimemodule.c"
        var $56=$55+4; //@line 4368 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 4368 "datetimemodule.c"
        var $58=($57); //@line 4368 "datetimemodule.c"
        var $59=($58) * 3600; //@line 4368 "datetimemodule.c"
        var $60=$self_addr; //@line 4368 "datetimemodule.c"
        var $61=$60+13; //@line 4368 "datetimemodule.c"
        var $62=$61+5; //@line 4368 "datetimemodule.c"
        var $63=HEAP[$62]; //@line 4368 "datetimemodule.c"
        var $64=($63); //@line 4368 "datetimemodule.c"
        var $65=HEAP[$offset]; //@line 4368 "datetimemodule.c"
        var $66=($64) - ($65); //@line 4368 "datetimemodule.c"
        var $67=($66) * 60; //@line 4368 "datetimemodule.c"
        var $68=$self_addr; //@line 4368 "datetimemodule.c"
        var $69=$68+13; //@line 4368 "datetimemodule.c"
        var $70=$69+6; //@line 4368 "datetimemodule.c"
        var $71=HEAP[$70]; //@line 4368 "datetimemodule.c"
        var $72=($71); //@line 4368 "datetimemodule.c"
        var $73=($67) + ($59); //@line 4368 "datetimemodule.c"
        var $74=($73) + ($72); //@line 4368 "datetimemodule.c"
        $seconds=$74; //@line 4368 "datetimemodule.c"
        var $75=$self_addr; //@line 4371 "datetimemodule.c"
        var $76=$75+13; //@line 4371 "datetimemodule.c"
        var $77=$76+7; //@line 4371 "datetimemodule.c"
        var $78=HEAP[$77]; //@line 4371 "datetimemodule.c"
        var $79=($78); //@line 4371 "datetimemodule.c"
        var $80=($79) << 16; //@line 4371 "datetimemodule.c"
        var $81=$self_addr; //@line 4371 "datetimemodule.c"
        var $82=$81+13; //@line 4371 "datetimemodule.c"
        var $83=$82+8; //@line 4371 "datetimemodule.c"
        var $84=HEAP[$83]; //@line 4371 "datetimemodule.c"
        var $85=($84); //@line 4371 "datetimemodule.c"
        var $86=($85) << 8; //@line 4371 "datetimemodule.c"
        var $87=$self_addr; //@line 4371 "datetimemodule.c"
        var $88=$87+13; //@line 4371 "datetimemodule.c"
        var $89=$88+9; //@line 4371 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 4371 "datetimemodule.c"
        var $91=($90); //@line 4371 "datetimemodule.c"
        var $92=($86) | ($80); //@line 4371 "datetimemodule.c"
        var $93=($92) | ($91); //@line 4371 "datetimemodule.c"
        var $94=$days; //@line 4371 "datetimemodule.c"
        var $95=$seconds; //@line 4371 "datetimemodule.c"
        var $96=_new_delta_ex($94, $95, $93, 1, _PyDateTime_DeltaType); //@line 4371 "datetimemodule.c"
        $temp=$96; //@line 4371 "datetimemodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 4371 "datetimemodule.c"
      case 12: // $bb11
        var $97=__lastLabel__ == 11 ? $96 : ($19);
        var $98=($97)!=0; //@line 4376 "datetimemodule.c"
        if ($98) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 4376 "datetimemodule.c"
      case 13: // $bb12
        var $99=$temp; //@line 4377 "datetimemodule.c"
        var $100=_PyObject_Hash($99); //@line 4377 "datetimemodule.c"
        var $101=$self_addr; //@line 4377 "datetimemodule.c"
        var $102=$101+8; //@line 4377 "datetimemodule.c"
        HEAP[$102]=$100; //@line 4377 "datetimemodule.c"
        var $103=$temp; //@line 4378 "datetimemodule.c"
        var $104=$103; //@line 4378 "datetimemodule.c"
        var $105=HEAP[$104]; //@line 4378 "datetimemodule.c"
        var $106=($105) - 1; //@line 4378 "datetimemodule.c"
        var $107=$temp; //@line 4378 "datetimemodule.c"
        var $108=$107; //@line 4378 "datetimemodule.c"
        HEAP[$108]=$106; //@line 4378 "datetimemodule.c"
        var $109=$temp; //@line 4378 "datetimemodule.c"
        var $110=$109; //@line 4378 "datetimemodule.c"
        var $111=HEAP[$110]; //@line 4378 "datetimemodule.c"
        var $112=($111)==0; //@line 4378 "datetimemodule.c"
        if ($112) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 4378 "datetimemodule.c"
      case 14: // $bb13
        var $113=$temp; //@line 4378 "datetimemodule.c"
        var $114=$113+4; //@line 4378 "datetimemodule.c"
        var $115=HEAP[$114]; //@line 4378 "datetimemodule.c"
        var $116=$115+24; //@line 4378 "datetimemodule.c"
        var $117=HEAP[$116]; //@line 4378 "datetimemodule.c"
        var $118=$temp; //@line 4378 "datetimemodule.c"
        FUNCTION_TABLE[$117]($118); //@line 4378 "datetimemodule.c"
        __label__ = 15; break; //@line 4378 "datetimemodule.c"
      case 15: // $bb14
        var $119=$self_addr; //@line 4381 "datetimemodule.c"
        var $120=$119+8; //@line 4381 "datetimemodule.c"
        var $121=HEAP[$120]; //@line 4381 "datetimemodule.c"
        $0=$121; //@line 4381 "datetimemodule.c"
        __label__ = 16; break; //@line 4381 "datetimemodule.c"
      case 16: // $bb15
        var $122=$0; //@line 4352 "datetimemodule.c"
        $retval=$122; //@line 4352 "datetimemodule.c"
        var $retval16=$retval; //@line 4352 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 4352 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_replace($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_544;
        var $clone;
        var $tuple;
        var $y=__stackBase__;
        var $m=__stackBase__+4;
        var $d=__stackBase__+8;
        var $hh=__stackBase__+12;
        var $mm=__stackBase__+16;
        var $ss=__stackBase__+20;
        var $us=__stackBase__+24;
        var $tzinfo=__stackBase__+28;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$self_addr; //@line 4389 "datetimemodule.c"
        var $2=$1; //@line 4389 "datetimemodule.c"
        var $3=$2+13; //@line 4389 "datetimemodule.c"
        var $4=$3; //@line 4389 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 4389 "datetimemodule.c"
        var $6=($5); //@line 4389 "datetimemodule.c"
        var $7=($6) << 8; //@line 4389 "datetimemodule.c"
        var $8=$self_addr; //@line 4389 "datetimemodule.c"
        var $9=$8; //@line 4389 "datetimemodule.c"
        var $10=$9+13; //@line 4389 "datetimemodule.c"
        var $11=$10+1; //@line 4389 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4389 "datetimemodule.c"
        var $13=($12); //@line 4389 "datetimemodule.c"
        var $14=($13) | ($7); //@line 4389 "datetimemodule.c"
        HEAP[$y]=$14; //@line 4389 "datetimemodule.c"
        var $15=$self_addr; //@line 4390 "datetimemodule.c"
        var $16=$15; //@line 4390 "datetimemodule.c"
        var $17=$16+13; //@line 4390 "datetimemodule.c"
        var $18=$17+2; //@line 4390 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 4390 "datetimemodule.c"
        var $20=($19); //@line 4390 "datetimemodule.c"
        HEAP[$m]=$20; //@line 4390 "datetimemodule.c"
        var $21=$self_addr; //@line 4391 "datetimemodule.c"
        var $22=$21; //@line 4391 "datetimemodule.c"
        var $23=$22+13; //@line 4391 "datetimemodule.c"
        var $24=$23+3; //@line 4391 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4391 "datetimemodule.c"
        var $26=($25); //@line 4391 "datetimemodule.c"
        HEAP[$d]=$26; //@line 4391 "datetimemodule.c"
        var $27=$self_addr; //@line 4392 "datetimemodule.c"
        var $28=$27+13; //@line 4392 "datetimemodule.c"
        var $29=$28+4; //@line 4392 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 4392 "datetimemodule.c"
        var $31=($30); //@line 4392 "datetimemodule.c"
        HEAP[$hh]=$31; //@line 4392 "datetimemodule.c"
        var $32=$self_addr; //@line 4393 "datetimemodule.c"
        var $33=$32+13; //@line 4393 "datetimemodule.c"
        var $34=$33+5; //@line 4393 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 4393 "datetimemodule.c"
        var $36=($35); //@line 4393 "datetimemodule.c"
        HEAP[$mm]=$36; //@line 4393 "datetimemodule.c"
        var $37=$self_addr; //@line 4394 "datetimemodule.c"
        var $38=$37+13; //@line 4394 "datetimemodule.c"
        var $39=$38+6; //@line 4394 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 4394 "datetimemodule.c"
        var $41=($40); //@line 4394 "datetimemodule.c"
        HEAP[$ss]=$41; //@line 4394 "datetimemodule.c"
        var $42=$self_addr; //@line 4395 "datetimemodule.c"
        var $43=$42+13; //@line 4395 "datetimemodule.c"
        var $44=$43+7; //@line 4395 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 4395 "datetimemodule.c"
        var $46=($45); //@line 4395 "datetimemodule.c"
        var $47=($46) << 16; //@line 4395 "datetimemodule.c"
        var $48=$self_addr; //@line 4395 "datetimemodule.c"
        var $49=$48+13; //@line 4395 "datetimemodule.c"
        var $50=$49+8; //@line 4395 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 4395 "datetimemodule.c"
        var $52=($51); //@line 4395 "datetimemodule.c"
        var $53=($52) << 8; //@line 4395 "datetimemodule.c"
        var $54=$self_addr; //@line 4395 "datetimemodule.c"
        var $55=$54+13; //@line 4395 "datetimemodule.c"
        var $56=$55+9; //@line 4395 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 4395 "datetimemodule.c"
        var $58=($57); //@line 4395 "datetimemodule.c"
        var $59=($53) | ($47); //@line 4395 "datetimemodule.c"
        var $60=($59) | ($58); //@line 4395 "datetimemodule.c"
        HEAP[$us]=$60; //@line 4395 "datetimemodule.c"
        var $61=$self_addr; //@line 4396 "datetimemodule.c"
        var $62=$61; //@line 4396 "datetimemodule.c"
        var $63=$62+12; //@line 4396 "datetimemodule.c"
        var $64=HEAP[$63]; //@line 4396 "datetimemodule.c"
        var $65=($64)!=0; //@line 4396 "datetimemodule.c"
        if ($65) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4396 "datetimemodule.c"
      case 1: // $bb
        var $66=$self_addr; //@line 4396 "datetimemodule.c"
        var $67=$66+24; //@line 4396 "datetimemodule.c"
        var $68=HEAP[$67]; //@line 4396 "datetimemodule.c"
        $iftmp_544=$68; //@line 4396 "datetimemodule.c"
        __label__ = 3; break; //@line 4396 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_544=__Py_NoneStruct; //@line 4396 "datetimemodule.c"
        __label__ = 3; break; //@line 4396 "datetimemodule.c"
      case 3: // $bb2
        var $69=$iftmp_544; //@line 4396 "datetimemodule.c"
        HEAP[$tzinfo]=$69; //@line 4396 "datetimemodule.c"
        var $70=$args_addr; //@line 4398 "datetimemodule.c"
        var $71=$kw_addr; //@line 4398 "datetimemodule.c"
        var $72=__PyArg_ParseTupleAndKeywords_SizeT($70, $71, __str244, _datetime_kws, allocate([$y,0,0,0,$m,0,0,0,$d,0,0,0,$hh,0,0,0,$mm,0,0,0,$ss,0,0,0,$us,0,0,0,$tzinfo,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 4398 "datetimemodule.c"
        var $73=($72)==0; //@line 4398 "datetimemodule.c"
        if ($73) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4398 "datetimemodule.c"
      case 4: // $bb3
        $0=0; //@line 4402 "datetimemodule.c"
        __label__ = 10; break; //@line 4402 "datetimemodule.c"
      case 5: // $bb4
        var $74=HEAP[$tzinfo]; //@line 4403 "datetimemodule.c"
        var $75=HEAP[$us]; //@line 4403 "datetimemodule.c"
        var $76=HEAP[$ss]; //@line 4403 "datetimemodule.c"
        var $77=HEAP[$mm]; //@line 4403 "datetimemodule.c"
        var $78=HEAP[$hh]; //@line 4403 "datetimemodule.c"
        var $79=HEAP[$d]; //@line 4403 "datetimemodule.c"
        var $80=HEAP[$m]; //@line 4403 "datetimemodule.c"
        var $81=HEAP[$y]; //@line 4403 "datetimemodule.c"
        var $82=__Py_BuildValue_SizeT(__str220, allocate([$81,0,0,0,$80,0,0,0,$79,0,0,0,$78,0,0,0,$77,0,0,0,$76,0,0,0,$75,0,0,0,$74,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4403 "datetimemodule.c"
        $tuple=$82; //@line 4403 "datetimemodule.c"
        var $83=$tuple; //@line 4404 "datetimemodule.c"
        var $84=($83)==0; //@line 4404 "datetimemodule.c"
        if ($84) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4404 "datetimemodule.c"
      case 6: // $bb5
        $0=0; //@line 4405 "datetimemodule.c"
        __label__ = 10; break; //@line 4405 "datetimemodule.c"
      case 7: // $bb6
        var $85=$self_addr; //@line 4406 "datetimemodule.c"
        var $86=$85; //@line 4406 "datetimemodule.c"
        var $87=$86+4; //@line 4406 "datetimemodule.c"
        var $88=HEAP[$87]; //@line 4406 "datetimemodule.c"
        var $89=$tuple; //@line 4406 "datetimemodule.c"
        var $90=_datetime_new($88, $89, 0); //@line 4406 "datetimemodule.c"
        $clone=$90; //@line 4406 "datetimemodule.c"
        var $91=$tuple; //@line 4407 "datetimemodule.c"
        var $92=$91; //@line 4407 "datetimemodule.c"
        var $93=HEAP[$92]; //@line 4407 "datetimemodule.c"
        var $94=($93) - 1; //@line 4407 "datetimemodule.c"
        var $95=$tuple; //@line 4407 "datetimemodule.c"
        var $96=$95; //@line 4407 "datetimemodule.c"
        HEAP[$96]=$94; //@line 4407 "datetimemodule.c"
        var $97=$tuple; //@line 4407 "datetimemodule.c"
        var $98=$97; //@line 4407 "datetimemodule.c"
        var $99=HEAP[$98]; //@line 4407 "datetimemodule.c"
        var $100=($99)==0; //@line 4407 "datetimemodule.c"
        if ($100) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4407 "datetimemodule.c"
      case 8: // $bb7
        var $101=$tuple; //@line 4407 "datetimemodule.c"
        var $102=$101+4; //@line 4407 "datetimemodule.c"
        var $103=HEAP[$102]; //@line 4407 "datetimemodule.c"
        var $104=$103+24; //@line 4407 "datetimemodule.c"
        var $105=HEAP[$104]; //@line 4407 "datetimemodule.c"
        var $106=$tuple; //@line 4407 "datetimemodule.c"
        FUNCTION_TABLE[$105]($106); //@line 4407 "datetimemodule.c"
        __label__ = 9; break; //@line 4407 "datetimemodule.c"
      case 9: // $bb8
        var $107=$clone; //@line 4408 "datetimemodule.c"
        $0=$107; //@line 4408 "datetimemodule.c"
        __label__ = 10; break; //@line 4408 "datetimemodule.c"
      case 10: // $bb9
        var $108=$0; //@line 4402 "datetimemodule.c"
        $retval=$108; //@line 4402 "datetimemodule.c"
        var $retval10=$retval; //@line 4402 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 4402 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_astimezone($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $y=__stackBase__;
        var $m=__stackBase__+4;
        var $d=__stackBase__+8;
        var $hh=__stackBase__+12;
        var $mm=__stackBase__+16;
        var $ss=__stackBase__+20;
        var $us=__stackBase__+24;
        var $result;
        var $offset;
        var $none=__stackBase__+28;
        var $tzinfo=__stackBase__+32;
        var $temp;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 4421 "datetimemodule.c"
        var $2=$kw_addr; //@line 4421 "datetimemodule.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str245, _keywords_13698, allocate([_PyDateTime_TZInfoType,0,0,0,$tzinfo,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 4421 "datetimemodule.c"
        var $4=($3)==0; //@line 4421 "datetimemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4421 "datetimemodule.c"
      case 1: // $bb
        $0=0; //@line 4423 "datetimemodule.c"
        __label__ = 18; break; //@line 4423 "datetimemodule.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 4425 "datetimemodule.c"
        var $6=$5; //@line 4425 "datetimemodule.c"
        var $7=$6+12; //@line 4425 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 4425 "datetimemodule.c"
        var $9=($8)==0; //@line 4425 "datetimemodule.c"
        if ($9) { __label__ = 17; break; } else { __label__ = 3; break; } //@line 4425 "datetimemodule.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 4425 "datetimemodule.c"
        var $11=$10+24; //@line 4425 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4425 "datetimemodule.c"
        var $13=($12)==(__Py_NoneStruct); //@line 4425 "datetimemodule.c"
        if ($13) { __label__ = 17; break; } else { __label__ = 4; break; } //@line 4425 "datetimemodule.c"
      case 4: // $bb3
        var $14=$self_addr; //@line 4429 "datetimemodule.c"
        var $15=$14+24; //@line 4429 "datetimemodule.c"
        var $16=HEAP[$15]; //@line 4429 "datetimemodule.c"
        var $17=HEAP[$tzinfo]; //@line 4429 "datetimemodule.c"
        var $18=($16)==($17); //@line 4429 "datetimemodule.c"
        var $19=$self_addr; //@line 4430 "datetimemodule.c"
        var $20=$19; //@line 4430 "datetimemodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4429 "datetimemodule.c"
      case 5: // $bb4
        var $21=$20; //@line 4430 "datetimemodule.c"
        var $22=HEAP[$21]; //@line 4430 "datetimemodule.c"
        var $23=($22) + 1; //@line 4430 "datetimemodule.c"
        var $24=$20; //@line 4430 "datetimemodule.c"
        HEAP[$24]=$23; //@line 4430 "datetimemodule.c"
        var $25=$self_addr; //@line 4431 "datetimemodule.c"
        var $26=$25; //@line 4431 "datetimemodule.c"
        $0=$26; //@line 4431 "datetimemodule.c"
        __label__ = 18; break; //@line 4431 "datetimemodule.c"
      case 6: // $bb5
        var $27=$self_addr; //@line 4435 "datetimemodule.c"
        var $28=$27+24; //@line 4435 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 4435 "datetimemodule.c"
        var $30=_call_utcoffset($29, $20, $none); //@line 4435 "datetimemodule.c"
        $offset=$30; //@line 4435 "datetimemodule.c"
        var $31=$offset; //@line 4436 "datetimemodule.c"
        var $32=($31)==-1; //@line 4436 "datetimemodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 4436 "datetimemodule.c"
      case 7: // $bb6
        var $33=_PyErr_Occurred(); //@line 4436 "datetimemodule.c"
        var $34=($33)!=0; //@line 4436 "datetimemodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4436 "datetimemodule.c"
      case 8: // $bb7
        $0=0; //@line 4437 "datetimemodule.c"
        __label__ = 18; break; //@line 4437 "datetimemodule.c"
      case 9: // $bb8
        var $35=HEAP[$none]; //@line 4438 "datetimemodule.c"
        var $36=($35)!=0; //@line 4438 "datetimemodule.c"
        if ($36) { __label__ = 17; break; } else { __label__ = 10; break; } //@line 4438 "datetimemodule.c"
      case 10: // $bb9
        var $37=$self_addr; //@line 4441 "datetimemodule.c"
        var $38=$37; //@line 4441 "datetimemodule.c"
        var $39=$38+13; //@line 4441 "datetimemodule.c"
        var $40=$39; //@line 4441 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 4441 "datetimemodule.c"
        var $42=($41); //@line 4441 "datetimemodule.c"
        var $43=($42) << 8; //@line 4441 "datetimemodule.c"
        var $44=$self_addr; //@line 4441 "datetimemodule.c"
        var $45=$44; //@line 4441 "datetimemodule.c"
        var $46=$45+13; //@line 4441 "datetimemodule.c"
        var $47=$46+1; //@line 4441 "datetimemodule.c"
        var $48=HEAP[$47]; //@line 4441 "datetimemodule.c"
        var $49=($48); //@line 4441 "datetimemodule.c"
        var $50=($49) | ($43); //@line 4441 "datetimemodule.c"
        HEAP[$y]=$50; //@line 4441 "datetimemodule.c"
        var $51=$self_addr; //@line 4442 "datetimemodule.c"
        var $52=$51; //@line 4442 "datetimemodule.c"
        var $53=$52+13; //@line 4442 "datetimemodule.c"
        var $54=$53+2; //@line 4442 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 4442 "datetimemodule.c"
        var $56=($55); //@line 4442 "datetimemodule.c"
        HEAP[$m]=$56; //@line 4442 "datetimemodule.c"
        var $57=$self_addr; //@line 4443 "datetimemodule.c"
        var $58=$57; //@line 4443 "datetimemodule.c"
        var $59=$58+13; //@line 4443 "datetimemodule.c"
        var $60=$59+3; //@line 4443 "datetimemodule.c"
        var $61=HEAP[$60]; //@line 4443 "datetimemodule.c"
        var $62=($61); //@line 4443 "datetimemodule.c"
        HEAP[$d]=$62; //@line 4443 "datetimemodule.c"
        var $63=$self_addr; //@line 4444 "datetimemodule.c"
        var $64=$63+13; //@line 4444 "datetimemodule.c"
        var $65=$64+4; //@line 4444 "datetimemodule.c"
        var $66=HEAP[$65]; //@line 4444 "datetimemodule.c"
        var $67=($66); //@line 4444 "datetimemodule.c"
        HEAP[$hh]=$67; //@line 4444 "datetimemodule.c"
        var $68=$self_addr; //@line 4445 "datetimemodule.c"
        var $69=$68+13; //@line 4445 "datetimemodule.c"
        var $70=$69+5; //@line 4445 "datetimemodule.c"
        var $71=HEAP[$70]; //@line 4445 "datetimemodule.c"
        var $72=($71); //@line 4445 "datetimemodule.c"
        HEAP[$mm]=$72; //@line 4445 "datetimemodule.c"
        var $73=$self_addr; //@line 4446 "datetimemodule.c"
        var $74=$73+13; //@line 4446 "datetimemodule.c"
        var $75=$74+6; //@line 4446 "datetimemodule.c"
        var $76=HEAP[$75]; //@line 4446 "datetimemodule.c"
        var $77=($76); //@line 4446 "datetimemodule.c"
        HEAP[$ss]=$77; //@line 4446 "datetimemodule.c"
        var $78=$self_addr; //@line 4447 "datetimemodule.c"
        var $79=$78+13; //@line 4447 "datetimemodule.c"
        var $80=$79+7; //@line 4447 "datetimemodule.c"
        var $81=HEAP[$80]; //@line 4447 "datetimemodule.c"
        var $82=($81); //@line 4447 "datetimemodule.c"
        var $83=($82) << 16; //@line 4447 "datetimemodule.c"
        var $84=$self_addr; //@line 4447 "datetimemodule.c"
        var $85=$84+13; //@line 4447 "datetimemodule.c"
        var $86=$85+8; //@line 4447 "datetimemodule.c"
        var $87=HEAP[$86]; //@line 4447 "datetimemodule.c"
        var $88=($87); //@line 4447 "datetimemodule.c"
        var $89=($88) << 8; //@line 4447 "datetimemodule.c"
        var $90=$self_addr; //@line 4447 "datetimemodule.c"
        var $91=$90+13; //@line 4447 "datetimemodule.c"
        var $92=$91+9; //@line 4447 "datetimemodule.c"
        var $93=HEAP[$92]; //@line 4447 "datetimemodule.c"
        var $94=($93); //@line 4447 "datetimemodule.c"
        var $95=($89) | ($83); //@line 4447 "datetimemodule.c"
        var $96=($95) | ($94); //@line 4447 "datetimemodule.c"
        HEAP[$us]=$96; //@line 4447 "datetimemodule.c"
        var $97=HEAP[$mm]; //@line 4449 "datetimemodule.c"
        var $98=$offset; //@line 4449 "datetimemodule.c"
        var $99=($97) - ($98); //@line 4449 "datetimemodule.c"
        HEAP[$mm]=$99; //@line 4449 "datetimemodule.c"
        var $100=HEAP[$mm]; //@line 4450 "datetimemodule.c"
        var $101=($100) < 0; //@line 4450 "datetimemodule.c"
        var $102=HEAP[$mm]; //@line 4450 "datetimemodule.c"
        var $103=($102) > 59; //@line 4450 "datetimemodule.c"
        var $or_cond=($101) | ($103);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 4450 "datetimemodule.c"
      case 11: // $bb11
        var $104=_normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us); //@line 4450 "datetimemodule.c"
        var $105=($104) < 0; //@line 4450 "datetimemodule.c"
        if ($105) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4450 "datetimemodule.c"
      case 12: // $bb12
        $0=0; //@line 4452 "datetimemodule.c"
        __label__ = 18; break; //@line 4452 "datetimemodule.c"
      case 13: // $bb13
        var $106=HEAP[$tzinfo]; //@line 4455 "datetimemodule.c"
        var $107=HEAP[$us]; //@line 4455 "datetimemodule.c"
        var $108=HEAP[$ss]; //@line 4455 "datetimemodule.c"
        var $109=HEAP[$mm]; //@line 4455 "datetimemodule.c"
        var $110=HEAP[$hh]; //@line 4455 "datetimemodule.c"
        var $111=HEAP[$d]; //@line 4455 "datetimemodule.c"
        var $112=HEAP[$m]; //@line 4455 "datetimemodule.c"
        var $113=HEAP[$y]; //@line 4455 "datetimemodule.c"
        var $114=_new_datetime_ex($113, $112, $111, $110, $109, $108, $107, $106, _PyDateTime_DateTimeType); //@line 4455 "datetimemodule.c"
        $result=$114; //@line 4455 "datetimemodule.c"
        var $115=($114)!=0; //@line 4456 "datetimemodule.c"
        if ($115) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 4456 "datetimemodule.c"
      case 14: // $bb14
        var $116=$result; //@line 4457 "datetimemodule.c"
        $temp=$116; //@line 4457 "datetimemodule.c"
        var $117=HEAP[$tzinfo]; //@line 4459 "datetimemodule.c"
        var $118=$temp; //@line 4459 "datetimemodule.c"
        var $119=__PyObject_CallMethod_SizeT($117, __str189, __str35, allocate([$118,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4459 "datetimemodule.c"
        $result=$119; //@line 4459 "datetimemodule.c"
        var $120=$temp; //@line 4460 "datetimemodule.c"
        var $121=$120; //@line 4460 "datetimemodule.c"
        var $122=HEAP[$121]; //@line 4460 "datetimemodule.c"
        var $123=($122) - 1; //@line 4460 "datetimemodule.c"
        var $124=$temp; //@line 4460 "datetimemodule.c"
        var $125=$124; //@line 4460 "datetimemodule.c"
        HEAP[$125]=$123; //@line 4460 "datetimemodule.c"
        var $126=$temp; //@line 4460 "datetimemodule.c"
        var $127=$126; //@line 4460 "datetimemodule.c"
        var $128=HEAP[$127]; //@line 4460 "datetimemodule.c"
        var $129=($128)==0; //@line 4460 "datetimemodule.c"
        if ($129) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 4460 "datetimemodule.c"
      case 15: // $bb15
        var $130=$temp; //@line 4460 "datetimemodule.c"
        var $131=$130+4; //@line 4460 "datetimemodule.c"
        var $132=HEAP[$131]; //@line 4460 "datetimemodule.c"
        var $133=$132+24; //@line 4460 "datetimemodule.c"
        var $134=HEAP[$133]; //@line 4460 "datetimemodule.c"
        var $135=$temp; //@line 4460 "datetimemodule.c"
        FUNCTION_TABLE[$134]($135); //@line 4460 "datetimemodule.c"
        __label__ = 16; break; //@line 4460 "datetimemodule.c"
      case 16: // $bb16
        var $136=$result; //@line 4462 "datetimemodule.c"
        $0=$136; //@line 4462 "datetimemodule.c"
        __label__ = 18; break; //@line 4462 "datetimemodule.c"
      case 17: // $NeedAware
        var $137=HEAP[_PyExc_ValueError]; //@line 4465 "datetimemodule.c"
        _PyErr_SetString($137, __str246); //@line 4465 "datetimemodule.c"
        $0=0; //@line 4467 "datetimemodule.c"
        __label__ = 18; break; //@line 4467 "datetimemodule.c"
      case 18: // $bb17
        var $138=$0; //@line 4423 "datetimemodule.c"
        $retval=$138; //@line 4423 "datetimemodule.c"
        var $retval18=$retval; //@line 4423 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 4423 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_timetuple($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $dstflag;
        var $none=__stackBase__;
        $self_addr=$self;
        $dstflag=-1; //@line 4473 "datetimemodule.c"
        var $1=$self_addr; //@line 4475 "datetimemodule.c"
        var $2=$1; //@line 4475 "datetimemodule.c"
        var $3=$2+12; //@line 4475 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 4475 "datetimemodule.c"
        var $5=($4)!=0; //@line 4475 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 4475 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 4475 "datetimemodule.c"
        var $7=$6+24; //@line 4475 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 4475 "datetimemodule.c"
        var $9=($8)!=(__Py_NoneStruct); //@line 4475 "datetimemodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 4475 "datetimemodule.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 4478 "datetimemodule.c"
        var $11=$10; //@line 4478 "datetimemodule.c"
        var $12=$self_addr; //@line 4478 "datetimemodule.c"
        var $13=$12+24; //@line 4478 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 4478 "datetimemodule.c"
        var $15=_call_dst($14, $11, $none); //@line 4478 "datetimemodule.c"
        $dstflag=$15; //@line 4478 "datetimemodule.c"
        var $16=$dstflag; //@line 4479 "datetimemodule.c"
        var $17=($16)==-1; //@line 4479 "datetimemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 4479 "datetimemodule.c"
      case 3: // $bb2
        var $18=_PyErr_Occurred(); //@line 4479 "datetimemodule.c"
        var $19=($18)!=0; //@line 4479 "datetimemodule.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4479 "datetimemodule.c"
      case 4: // $bb3
        $0=0; //@line 4480 "datetimemodule.c"
        __label__ = 10; break; //@line 4480 "datetimemodule.c"
      case 5: // $bb4
        var $20=HEAP[$none]; //@line 4482 "datetimemodule.c"
        var $21=($20)!=0; //@line 4482 "datetimemodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4482 "datetimemodule.c"
      case 6: // $bb5
        $dstflag=-1; //@line 4483 "datetimemodule.c"
        __label__ = 9; break; //@line 4483 "datetimemodule.c"
      case 7: // $bb6
        var $22=$dstflag; //@line 4484 "datetimemodule.c"
        var $23=($22)!=0; //@line 4484 "datetimemodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4484 "datetimemodule.c"
      case 8: // $bb7
        $dstflag=1; //@line 4485 "datetimemodule.c"
        __label__ = 9; break; //@line 4485 "datetimemodule.c"
      case 9: // $bb8
        var $24=$self_addr; //@line 4488 "datetimemodule.c"
        var $25=$24+13; //@line 4488 "datetimemodule.c"
        var $26=$25+6; //@line 4488 "datetimemodule.c"
        var $27=HEAP[$26]; //@line 4488 "datetimemodule.c"
        var $28=($27); //@line 4488 "datetimemodule.c"
        var $29=$self_addr; //@line 4488 "datetimemodule.c"
        var $30=$29+13; //@line 4488 "datetimemodule.c"
        var $31=$30+5; //@line 4488 "datetimemodule.c"
        var $32=HEAP[$31]; //@line 4488 "datetimemodule.c"
        var $33=($32); //@line 4488 "datetimemodule.c"
        var $34=$self_addr; //@line 4488 "datetimemodule.c"
        var $35=$34+13; //@line 4488 "datetimemodule.c"
        var $36=$35+4; //@line 4488 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 4488 "datetimemodule.c"
        var $38=($37); //@line 4488 "datetimemodule.c"
        var $39=$self_addr; //@line 4488 "datetimemodule.c"
        var $40=$39; //@line 4488 "datetimemodule.c"
        var $41=$40+13; //@line 4488 "datetimemodule.c"
        var $42=$41+3; //@line 4488 "datetimemodule.c"
        var $43=HEAP[$42]; //@line 4488 "datetimemodule.c"
        var $44=($43); //@line 4488 "datetimemodule.c"
        var $45=$self_addr; //@line 4488 "datetimemodule.c"
        var $46=$45; //@line 4488 "datetimemodule.c"
        var $47=$46+13; //@line 4488 "datetimemodule.c"
        var $48=$47+2; //@line 4488 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 4488 "datetimemodule.c"
        var $50=($49); //@line 4488 "datetimemodule.c"
        var $51=$self_addr; //@line 4488 "datetimemodule.c"
        var $52=$51; //@line 4488 "datetimemodule.c"
        var $53=$52+13; //@line 4488 "datetimemodule.c"
        var $54=$53; //@line 4488 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 4488 "datetimemodule.c"
        var $56=($55); //@line 4488 "datetimemodule.c"
        var $57=($56) << 8; //@line 4488 "datetimemodule.c"
        var $58=$self_addr; //@line 4488 "datetimemodule.c"
        var $59=$58; //@line 4488 "datetimemodule.c"
        var $60=$59+13; //@line 4488 "datetimemodule.c"
        var $61=$60+1; //@line 4488 "datetimemodule.c"
        var $62=HEAP[$61]; //@line 4488 "datetimemodule.c"
        var $63=($62); //@line 4488 "datetimemodule.c"
        var $64=($63) | ($57); //@line 4488 "datetimemodule.c"
        var $65=$dstflag; //@line 4488 "datetimemodule.c"
        var $66=_build_struct_time($64, $50, $44, $38, $33, $28, $65); //@line 4488 "datetimemodule.c"
        $0=$66; //@line 4488 "datetimemodule.c"
        __label__ = 10; break; //@line 4488 "datetimemodule.c"
      case 10: // $bb9
        var $67=$0; //@line 4480 "datetimemodule.c"
        $retval=$67; //@line 4480 "datetimemodule.c"
        var $retval10=$retval; //@line 4480 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 4480 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_getdate($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 4500 "datetimemodule.c"
    var $2=$1; //@line 4500 "datetimemodule.c"
    var $3=$2+13; //@line 4500 "datetimemodule.c"
    var $4=$3+3; //@line 4500 "datetimemodule.c"
    var $5=HEAP[$4]; //@line 4500 "datetimemodule.c"
    var $6=($5); //@line 4500 "datetimemodule.c"
    var $7=$self_addr; //@line 4500 "datetimemodule.c"
    var $8=$7; //@line 4500 "datetimemodule.c"
    var $9=$8+13; //@line 4500 "datetimemodule.c"
    var $10=$9+2; //@line 4500 "datetimemodule.c"
    var $11=HEAP[$10]; //@line 4500 "datetimemodule.c"
    var $12=($11); //@line 4500 "datetimemodule.c"
    var $13=$self_addr; //@line 4500 "datetimemodule.c"
    var $14=$13; //@line 4500 "datetimemodule.c"
    var $15=$14+13; //@line 4500 "datetimemodule.c"
    var $16=$15; //@line 4500 "datetimemodule.c"
    var $17=HEAP[$16]; //@line 4500 "datetimemodule.c"
    var $18=($17); //@line 4500 "datetimemodule.c"
    var $19=($18) << 8; //@line 4500 "datetimemodule.c"
    var $20=$self_addr; //@line 4500 "datetimemodule.c"
    var $21=$20; //@line 4500 "datetimemodule.c"
    var $22=$21+13; //@line 4500 "datetimemodule.c"
    var $23=$22+1; //@line 4500 "datetimemodule.c"
    var $24=HEAP[$23]; //@line 4500 "datetimemodule.c"
    var $25=($24); //@line 4500 "datetimemodule.c"
    var $26=($25) | ($19); //@line 4500 "datetimemodule.c"
    var $27=_new_date_ex($26, $12, $6, _PyDateTime_DateType); //@line 4500 "datetimemodule.c"
    $0=$27; //@line 4500 "datetimemodule.c"
    var $28=$0; //@line 4500 "datetimemodule.c"
    $retval=$28; //@line 4500 "datetimemodule.c"
    var $retval1=$retval; //@line 4500 "datetimemodule.c"
    ;
    return $retval1; //@line 4500 "datetimemodule.c"
  }
  

  function _datetime_gettime($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 4508 "datetimemodule.c"
    var $2=$1+13; //@line 4508 "datetimemodule.c"
    var $3=$2+7; //@line 4508 "datetimemodule.c"
    var $4=HEAP[$3]; //@line 4508 "datetimemodule.c"
    var $5=($4); //@line 4508 "datetimemodule.c"
    var $6=($5) << 16; //@line 4508 "datetimemodule.c"
    var $7=$self_addr; //@line 4508 "datetimemodule.c"
    var $8=$7+13; //@line 4508 "datetimemodule.c"
    var $9=$8+8; //@line 4508 "datetimemodule.c"
    var $10=HEAP[$9]; //@line 4508 "datetimemodule.c"
    var $11=($10); //@line 4508 "datetimemodule.c"
    var $12=($11) << 8; //@line 4508 "datetimemodule.c"
    var $13=$self_addr; //@line 4508 "datetimemodule.c"
    var $14=$13+13; //@line 4508 "datetimemodule.c"
    var $15=$14+9; //@line 4508 "datetimemodule.c"
    var $16=HEAP[$15]; //@line 4508 "datetimemodule.c"
    var $17=($16); //@line 4508 "datetimemodule.c"
    var $18=($12) | ($6); //@line 4508 "datetimemodule.c"
    var $19=($18) | ($17); //@line 4508 "datetimemodule.c"
    var $20=$self_addr; //@line 4508 "datetimemodule.c"
    var $21=$20+13; //@line 4508 "datetimemodule.c"
    var $22=$21+6; //@line 4508 "datetimemodule.c"
    var $23=HEAP[$22]; //@line 4508 "datetimemodule.c"
    var $24=($23); //@line 4508 "datetimemodule.c"
    var $25=$self_addr; //@line 4508 "datetimemodule.c"
    var $26=$25+13; //@line 4508 "datetimemodule.c"
    var $27=$26+5; //@line 4508 "datetimemodule.c"
    var $28=HEAP[$27]; //@line 4508 "datetimemodule.c"
    var $29=($28); //@line 4508 "datetimemodule.c"
    var $30=$self_addr; //@line 4508 "datetimemodule.c"
    var $31=$30+13; //@line 4508 "datetimemodule.c"
    var $32=$31+4; //@line 4508 "datetimemodule.c"
    var $33=HEAP[$32]; //@line 4508 "datetimemodule.c"
    var $34=($33); //@line 4508 "datetimemodule.c"
    var $35=_new_time_ex($34, $29, $24, $19, __Py_NoneStruct, _PyDateTime_TimeType); //@line 4508 "datetimemodule.c"
    $0=$35; //@line 4508 "datetimemodule.c"
    var $36=$0; //@line 4508 "datetimemodule.c"
    $retval=$36; //@line 4508 "datetimemodule.c"
    var $retval1=$retval; //@line 4508 "datetimemodule.c"
    ;
    return $retval1; //@line 4508 "datetimemodule.c"
  }
  

  function _datetime_gettimetz($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $iftmp_588;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 4518 "datetimemodule.c"
        var $2=$1; //@line 4518 "datetimemodule.c"
        var $3=$2+12; //@line 4518 "datetimemodule.c"
        var $4=HEAP[$3]; //@line 4518 "datetimemodule.c"
        var $5=($4)!=0; //@line 4518 "datetimemodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4518 "datetimemodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 4518 "datetimemodule.c"
        var $7=$6+24; //@line 4518 "datetimemodule.c"
        var $8=HEAP[$7]; //@line 4518 "datetimemodule.c"
        $iftmp_588=$8; //@line 4518 "datetimemodule.c"
        __label__ = 3; break; //@line 4518 "datetimemodule.c"
      case 2: // $bb1
        $iftmp_588=__Py_NoneStruct; //@line 4518 "datetimemodule.c"
        __label__ = 3; break; //@line 4518 "datetimemodule.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 4518 "datetimemodule.c"
        var $10=$9+13; //@line 4518 "datetimemodule.c"
        var $11=$10+7; //@line 4518 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4518 "datetimemodule.c"
        var $13=($12); //@line 4518 "datetimemodule.c"
        var $14=($13) << 16; //@line 4518 "datetimemodule.c"
        var $15=$self_addr; //@line 4518 "datetimemodule.c"
        var $16=$15+13; //@line 4518 "datetimemodule.c"
        var $17=$16+8; //@line 4518 "datetimemodule.c"
        var $18=HEAP[$17]; //@line 4518 "datetimemodule.c"
        var $19=($18); //@line 4518 "datetimemodule.c"
        var $20=($19) << 8; //@line 4518 "datetimemodule.c"
        var $21=$self_addr; //@line 4518 "datetimemodule.c"
        var $22=$21+13; //@line 4518 "datetimemodule.c"
        var $23=$22+9; //@line 4518 "datetimemodule.c"
        var $24=HEAP[$23]; //@line 4518 "datetimemodule.c"
        var $25=($24); //@line 4518 "datetimemodule.c"
        var $26=($20) | ($14); //@line 4518 "datetimemodule.c"
        var $27=($26) | ($25); //@line 4518 "datetimemodule.c"
        var $28=$self_addr; //@line 4518 "datetimemodule.c"
        var $29=$28+13; //@line 4518 "datetimemodule.c"
        var $30=$29+6; //@line 4518 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 4518 "datetimemodule.c"
        var $32=($31); //@line 4518 "datetimemodule.c"
        var $33=$self_addr; //@line 4518 "datetimemodule.c"
        var $34=$33+13; //@line 4518 "datetimemodule.c"
        var $35=$34+5; //@line 4518 "datetimemodule.c"
        var $36=HEAP[$35]; //@line 4518 "datetimemodule.c"
        var $37=($36); //@line 4518 "datetimemodule.c"
        var $38=$self_addr; //@line 4518 "datetimemodule.c"
        var $39=$38+13; //@line 4518 "datetimemodule.c"
        var $40=$39+4; //@line 4518 "datetimemodule.c"
        var $41=HEAP[$40]; //@line 4518 "datetimemodule.c"
        var $42=($41); //@line 4518 "datetimemodule.c"
        var $43=$iftmp_588; //@line 4518 "datetimemodule.c"
        var $44=_new_time_ex($42, $37, $32, $27, $43, _PyDateTime_TimeType); //@line 4518 "datetimemodule.c"
        $0=$44; //@line 4518 "datetimemodule.c"
        var $45=$0; //@line 4518 "datetimemodule.c"
        $retval=$45; //@line 4518 "datetimemodule.c"
        var $retval3=$retval; //@line 4518 "datetimemodule.c"
        ;
        return $retval3; //@line 4518 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_utctimetuple($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $y=__stackBase__;
        var $m=__stackBase__+4;
        var $d=__stackBase__+8;
        var $hh=__stackBase__+12;
        var $mm=__stackBase__+16;
        var $ss=__stackBase__+20;
        var $us=__stackBase__+24;
        var $offset;
        var $none=__stackBase__+28;
        var $stat;
        $self_addr=$self;
        var $1=$self_addr; //@line 4528 "datetimemodule.c"
        var $2=$1; //@line 4528 "datetimemodule.c"
        var $3=$2+13; //@line 4528 "datetimemodule.c"
        var $4=$3; //@line 4528 "datetimemodule.c"
        var $5=HEAP[$4]; //@line 4528 "datetimemodule.c"
        var $6=($5); //@line 4528 "datetimemodule.c"
        var $7=($6) << 8; //@line 4528 "datetimemodule.c"
        var $8=$self_addr; //@line 4528 "datetimemodule.c"
        var $9=$8; //@line 4528 "datetimemodule.c"
        var $10=$9+13; //@line 4528 "datetimemodule.c"
        var $11=$10+1; //@line 4528 "datetimemodule.c"
        var $12=HEAP[$11]; //@line 4528 "datetimemodule.c"
        var $13=($12); //@line 4528 "datetimemodule.c"
        var $14=($13) | ($7); //@line 4528 "datetimemodule.c"
        HEAP[$y]=$14; //@line 4528 "datetimemodule.c"
        var $15=$self_addr; //@line 4529 "datetimemodule.c"
        var $16=$15; //@line 4529 "datetimemodule.c"
        var $17=$16+13; //@line 4529 "datetimemodule.c"
        var $18=$17+2; //@line 4529 "datetimemodule.c"
        var $19=HEAP[$18]; //@line 4529 "datetimemodule.c"
        var $20=($19); //@line 4529 "datetimemodule.c"
        HEAP[$m]=$20; //@line 4529 "datetimemodule.c"
        var $21=$self_addr; //@line 4530 "datetimemodule.c"
        var $22=$21; //@line 4530 "datetimemodule.c"
        var $23=$22+13; //@line 4530 "datetimemodule.c"
        var $24=$23+3; //@line 4530 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4530 "datetimemodule.c"
        var $26=($25); //@line 4530 "datetimemodule.c"
        HEAP[$d]=$26; //@line 4530 "datetimemodule.c"
        var $27=$self_addr; //@line 4531 "datetimemodule.c"
        var $28=$27+13; //@line 4531 "datetimemodule.c"
        var $29=$28+4; //@line 4531 "datetimemodule.c"
        var $30=HEAP[$29]; //@line 4531 "datetimemodule.c"
        var $31=($30); //@line 4531 "datetimemodule.c"
        HEAP[$hh]=$31; //@line 4531 "datetimemodule.c"
        var $32=$self_addr; //@line 4532 "datetimemodule.c"
        var $33=$32+13; //@line 4532 "datetimemodule.c"
        var $34=$33+5; //@line 4532 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 4532 "datetimemodule.c"
        var $36=($35); //@line 4532 "datetimemodule.c"
        HEAP[$mm]=$36; //@line 4532 "datetimemodule.c"
        var $37=$self_addr; //@line 4533 "datetimemodule.c"
        var $38=$37+13; //@line 4533 "datetimemodule.c"
        var $39=$38+6; //@line 4533 "datetimemodule.c"
        var $40=HEAP[$39]; //@line 4533 "datetimemodule.c"
        var $41=($40); //@line 4533 "datetimemodule.c"
        HEAP[$ss]=$41; //@line 4533 "datetimemodule.c"
        HEAP[$us]=0; //@line 4534 "datetimemodule.c"
        $offset=0; //@line 4535 "datetimemodule.c"
        var $42=$self_addr; //@line 4537 "datetimemodule.c"
        var $43=$42; //@line 4537 "datetimemodule.c"
        var $44=$43+12; //@line 4537 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 4537 "datetimemodule.c"
        var $46=($45)!=0; //@line 4537 "datetimemodule.c"
        if ($46) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 4537 "datetimemodule.c"
      case 1: // $bb
        var $47=$self_addr; //@line 4537 "datetimemodule.c"
        var $48=$47+24; //@line 4537 "datetimemodule.c"
        var $49=HEAP[$48]; //@line 4537 "datetimemodule.c"
        var $50=($49)!=(__Py_NoneStruct); //@line 4537 "datetimemodule.c"
        if ($50) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 4537 "datetimemodule.c"
      case 2: // $bb1
        var $51=$self_addr; //@line 4540 "datetimemodule.c"
        var $52=$51; //@line 4540 "datetimemodule.c"
        var $53=$self_addr; //@line 4540 "datetimemodule.c"
        var $54=$53+24; //@line 4540 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 4540 "datetimemodule.c"
        var $56=_call_utcoffset($55, $52, $none); //@line 4540 "datetimemodule.c"
        $offset=$56; //@line 4540 "datetimemodule.c"
        var $57=$offset; //@line 4541 "datetimemodule.c"
        var $58=($57)==-1; //@line 4541 "datetimemodule.c"
        if ($58) { __lastLabel__ = 2; __label__ = 3; break; } else { __lastLabel__ = 2; __label__ = 6; break; } //@line 4541 "datetimemodule.c"
      case 3: // $bb2
        var $59=_PyErr_Occurred(); //@line 4541 "datetimemodule.c"
        var $60=($59)!=0; //@line 4541 "datetimemodule.c"
        if ($60) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4541 "datetimemodule.c"
      case 4: // $bb3
        $0=0; //@line 4542 "datetimemodule.c"
        __label__ = 12; break; //@line 4542 "datetimemodule.c"
      case 5: // $bb4thread_pre_split
        var $_pr=$offset;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb4
        var $61=__lastLabel__ == 5 ? $_pr : ($57);
        var $62=($61)!=0; //@line 4547 "datetimemodule.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 4547 "datetimemodule.c"
      case 7: // $bb5
        var $63=HEAP[$mm]; //@line 4551 "datetimemodule.c"
        var $64=$offset; //@line 4551 "datetimemodule.c"
        var $65=($63) - ($64); //@line 4551 "datetimemodule.c"
        HEAP[$mm]=$65; //@line 4551 "datetimemodule.c"
        var $66=_normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us); //@line 4552 "datetimemodule.c"
        $stat=$66; //@line 4552 "datetimemodule.c"
        var $67=$stat; //@line 4553 "datetimemodule.c"
        var $68=($67) < 0; //@line 4553 "datetimemodule.c"
        if ($68) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 4553 "datetimemodule.c"
      case 8: // $bb6
        var $69=HEAP[_PyExc_OverflowError]; //@line 4557 "datetimemodule.c"
        var $70=_PyErr_ExceptionMatches($69); //@line 4557 "datetimemodule.c"
        var $71=($70)!=0; //@line 4557 "datetimemodule.c"
        if ($71) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4557 "datetimemodule.c"
      case 9: // $bb7
        _PyErr_Clear(); //@line 4558 "datetimemodule.c"
        __label__ = 11; break; //@line 4558 "datetimemodule.c"
      case 10: // $bb8
        $0=0; //@line 4560 "datetimemodule.c"
        __label__ = 12; break; //@line 4560 "datetimemodule.c"
      case 11: // $bb9
        var $72=HEAP[$ss]; //@line 4563 "datetimemodule.c"
        var $73=HEAP[$mm]; //@line 4563 "datetimemodule.c"
        var $74=HEAP[$hh]; //@line 4563 "datetimemodule.c"
        var $75=HEAP[$d]; //@line 4563 "datetimemodule.c"
        var $76=HEAP[$m]; //@line 4563 "datetimemodule.c"
        var $77=HEAP[$y]; //@line 4563 "datetimemodule.c"
        var $78=_build_struct_time($77, $76, $75, $74, $73, $72, 0); //@line 4563 "datetimemodule.c"
        $0=$78; //@line 4563 "datetimemodule.c"
        __label__ = 12; break; //@line 4563 "datetimemodule.c"
      case 12: // $bb10
        var $79=$0; //@line 4542 "datetimemodule.c"
        $retval=$79; //@line 4542 "datetimemodule.c"
        var $retval11=$retval; //@line 4542 "datetimemodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 4542 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_getstate($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $basestate;
        var $result;
        $self_addr=$self;
        $result=0; //@line 4577 "datetimemodule.c"
        var $1=$self_addr; //@line 4579 "datetimemodule.c"
        var $2=$1+13; //@line 4579 "datetimemodule.c"
        var $3=$2; //@line 4579 "datetimemodule.c"
        var $4=_PyString_FromStringAndSize($3, 10); //@line 4579 "datetimemodule.c"
        $basestate=$4; //@line 4579 "datetimemodule.c"
        var $5=$basestate; //@line 4581 "datetimemodule.c"
        var $6=($5)!=0; //@line 4581 "datetimemodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 4581 "datetimemodule.c"
      case 1: // $bb
        var $7=$self_addr; //@line 4582 "datetimemodule.c"
        var $8=$7; //@line 4582 "datetimemodule.c"
        var $9=$8+12; //@line 4582 "datetimemodule.c"
        var $10=HEAP[$9]; //@line 4582 "datetimemodule.c"
        var $11=($10)==0; //@line 4582 "datetimemodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 4582 "datetimemodule.c"
      case 2: // $bb1
        var $12=$self_addr; //@line 4582 "datetimemodule.c"
        var $13=$12+24; //@line 4582 "datetimemodule.c"
        var $14=HEAP[$13]; //@line 4582 "datetimemodule.c"
        var $15=($14)==(__Py_NoneStruct); //@line 4582 "datetimemodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4582 "datetimemodule.c"
      case 3: // $bb2
        var $16=$basestate; //@line 4583 "datetimemodule.c"
        var $17=_PyTuple_Pack(1, allocate([$16,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4583 "datetimemodule.c"
        $result=$17; //@line 4583 "datetimemodule.c"
        __label__ = 5; break; //@line 4583 "datetimemodule.c"
      case 4: // $bb3
        var $18=$self_addr; //@line 4585 "datetimemodule.c"
        var $19=$18+24; //@line 4585 "datetimemodule.c"
        var $20=HEAP[$19]; //@line 4585 "datetimemodule.c"
        var $21=$basestate; //@line 4585 "datetimemodule.c"
        var $22=_PyTuple_Pack(2, allocate([$21,0,0,0,$20,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4585 "datetimemodule.c"
        $result=$22; //@line 4585 "datetimemodule.c"
        __label__ = 5; break; //@line 4585 "datetimemodule.c"
      case 5: // $bb4
        var $23=$basestate; //@line 4586 "datetimemodule.c"
        var $24=$23; //@line 4586 "datetimemodule.c"
        var $25=HEAP[$24]; //@line 4586 "datetimemodule.c"
        var $26=($25) - 1; //@line 4586 "datetimemodule.c"
        var $27=$basestate; //@line 4586 "datetimemodule.c"
        var $28=$27; //@line 4586 "datetimemodule.c"
        HEAP[$28]=$26; //@line 4586 "datetimemodule.c"
        var $29=$basestate; //@line 4586 "datetimemodule.c"
        var $30=$29; //@line 4586 "datetimemodule.c"
        var $31=HEAP[$30]; //@line 4586 "datetimemodule.c"
        var $32=($31)==0; //@line 4586 "datetimemodule.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4586 "datetimemodule.c"
      case 6: // $bb5
        var $33=$basestate; //@line 4586 "datetimemodule.c"
        var $34=$33+4; //@line 4586 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 4586 "datetimemodule.c"
        var $36=$35+24; //@line 4586 "datetimemodule.c"
        var $37=HEAP[$36]; //@line 4586 "datetimemodule.c"
        var $38=$basestate; //@line 4586 "datetimemodule.c"
        FUNCTION_TABLE[$37]($38); //@line 4586 "datetimemodule.c"
        __label__ = 7; break; //@line 4586 "datetimemodule.c"
      case 7: // $bb6
        var $39=$result; //@line 4588 "datetimemodule.c"
        $0=$39; //@line 4588 "datetimemodule.c"
        var $40=$0; //@line 4588 "datetimemodule.c"
        $retval=$40; //@line 4588 "datetimemodule.c"
        var $retval7=$retval; //@line 4588 "datetimemodule.c"
        ;
        return $retval7; //@line 4588 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _datetime_reduce($self, $arg) {
    ;
    var __label__;
  
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $arg_addr=$arg;
    var $1=$self_addr; //@line 4594 "datetimemodule.c"
    var $2=_datetime_getstate($1); //@line 4594 "datetimemodule.c"
    var $3=$self_addr; //@line 4594 "datetimemodule.c"
    var $4=$3; //@line 4594 "datetimemodule.c"
    var $5=$4+4; //@line 4594 "datetimemodule.c"
    var $6=HEAP[$5]; //@line 4594 "datetimemodule.c"
    var $7=__Py_BuildValue_SizeT(__str154, allocate([$6,0,0,0,$2,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 4594 "datetimemodule.c"
    $0=$7; //@line 4594 "datetimemodule.c"
    var $8=$0; //@line 4594 "datetimemodule.c"
    $retval=$8; //@line 4594 "datetimemodule.c"
    var $retval1=$retval; //@line 4594 "datetimemodule.c"
    ;
    return $retval1; //@line 4594 "datetimemodule.c"
  }
  

  function _initdatetime() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $x;
        var $0=_Py_InitModule4(__str269, _module_methods, __str270, 0, 1013); //@line 4771 "datetimemodule.c"
        $m=$0; //@line 4771 "datetimemodule.c"
        var $1=$m; //@line 4773 "datetimemodule.c"
        var $2=($1)==0; //@line 4773 "datetimemodule.c"
        if ($2) { __label__ = 63; break; } else { __label__ = 1; break; } //@line 4773 "datetimemodule.c"
      case 1: // $bb
        var $3=_PyType_Ready(_PyDateTime_DateType); //@line 4776 "datetimemodule.c"
        var $4=($3) < 0; //@line 4776 "datetimemodule.c"
        if ($4) { __label__ = 63; break; } else { __label__ = 2; break; } //@line 4776 "datetimemodule.c"
      case 2: // $bb1
        var $5=_PyType_Ready(_PyDateTime_DateTimeType); //@line 4778 "datetimemodule.c"
        var $6=($5) < 0; //@line 4778 "datetimemodule.c"
        if ($6) { __label__ = 63; break; } else { __label__ = 3; break; } //@line 4778 "datetimemodule.c"
      case 3: // $bb2
        var $7=_PyType_Ready(_PyDateTime_DeltaType); //@line 4780 "datetimemodule.c"
        var $8=($7) < 0; //@line 4780 "datetimemodule.c"
        if ($8) { __label__ = 63; break; } else { __label__ = 4; break; } //@line 4780 "datetimemodule.c"
      case 4: // $bb3
        var $9=_PyType_Ready(_PyDateTime_TimeType); //@line 4782 "datetimemodule.c"
        var $10=($9) < 0; //@line 4782 "datetimemodule.c"
        if ($10) { __label__ = 63; break; } else { __label__ = 5; break; } //@line 4782 "datetimemodule.c"
      case 5: // $bb4
        var $11=_PyType_Ready(_PyDateTime_TZInfoType); //@line 4784 "datetimemodule.c"
        var $12=($11) < 0; //@line 4784 "datetimemodule.c"
        if ($12) { __label__ = 63; break; } else { __label__ = 6; break; } //@line 4784 "datetimemodule.c"
      case 6: // $bb5
        var $13=HEAP[_PyDateTime_DeltaType+132]; //@line 4788 "datetimemodule.c"
        $d=$13; //@line 4788 "datetimemodule.c"
        var $14=_new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType); //@line 4790 "datetimemodule.c"
        $x=$14; //@line 4790 "datetimemodule.c"
        var $15=$x; //@line 4791 "datetimemodule.c"
        var $16=($15)==0; //@line 4791 "datetimemodule.c"
        if ($16) { __label__ = 63; break; } else { __label__ = 7; break; } //@line 4791 "datetimemodule.c"
      case 7: // $bb6
        var $17=$d; //@line 4791 "datetimemodule.c"
        var $18=$x; //@line 4791 "datetimemodule.c"
        var $19=_PyDict_SetItemString($17, __str271, $18); //@line 4791 "datetimemodule.c"
        var $20=($19) < 0; //@line 4791 "datetimemodule.c"
        if ($20) { __label__ = 63; break; } else { __label__ = 8; break; } //@line 4791 "datetimemodule.c"
      case 8: // $bb8
        var $21=$x; //@line 4793 "datetimemodule.c"
        var $22=$21; //@line 4793 "datetimemodule.c"
        var $23=HEAP[$22]; //@line 4793 "datetimemodule.c"
        var $24=($23) - 1; //@line 4793 "datetimemodule.c"
        var $25=$x; //@line 4793 "datetimemodule.c"
        var $26=$25; //@line 4793 "datetimemodule.c"
        HEAP[$26]=$24; //@line 4793 "datetimemodule.c"
        var $27=$x; //@line 4793 "datetimemodule.c"
        var $28=$27; //@line 4793 "datetimemodule.c"
        var $29=HEAP[$28]; //@line 4793 "datetimemodule.c"
        var $30=($29)==0; //@line 4793 "datetimemodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4793 "datetimemodule.c"
      case 9: // $bb9
        var $31=$x; //@line 4793 "datetimemodule.c"
        var $32=$31+4; //@line 4793 "datetimemodule.c"
        var $33=HEAP[$32]; //@line 4793 "datetimemodule.c"
        var $34=$33+24; //@line 4793 "datetimemodule.c"
        var $35=HEAP[$34]; //@line 4793 "datetimemodule.c"
        var $36=$x; //@line 4793 "datetimemodule.c"
        FUNCTION_TABLE[$35]($36); //@line 4793 "datetimemodule.c"
        __label__ = 10; break; //@line 4793 "datetimemodule.c"
      case 10: // $bb10
        var $37=_new_delta_ex(-999999999, 0, 0, 0, _PyDateTime_DeltaType); //@line 4795 "datetimemodule.c"
        $x=$37; //@line 4795 "datetimemodule.c"
        var $38=($37)==0; //@line 4796 "datetimemodule.c"
        if ($38) { __label__ = 63; break; } else { __label__ = 11; break; } //@line 4796 "datetimemodule.c"
      case 11: // $bb11
        var $39=$d; //@line 4796 "datetimemodule.c"
        var $40=$x; //@line 4796 "datetimemodule.c"
        var $41=_PyDict_SetItemString($39, __str272, $40); //@line 4796 "datetimemodule.c"
        var $42=($41) < 0; //@line 4796 "datetimemodule.c"
        if ($42) { __label__ = 63; break; } else { __label__ = 12; break; } //@line 4796 "datetimemodule.c"
      case 12: // $bb13
        var $43=$x; //@line 4798 "datetimemodule.c"
        var $44=$43; //@line 4798 "datetimemodule.c"
        var $45=HEAP[$44]; //@line 4798 "datetimemodule.c"
        var $46=($45) - 1; //@line 4798 "datetimemodule.c"
        var $47=$x; //@line 4798 "datetimemodule.c"
        var $48=$47; //@line 4798 "datetimemodule.c"
        HEAP[$48]=$46; //@line 4798 "datetimemodule.c"
        var $49=$x; //@line 4798 "datetimemodule.c"
        var $50=$49; //@line 4798 "datetimemodule.c"
        var $51=HEAP[$50]; //@line 4798 "datetimemodule.c"
        var $52=($51)==0; //@line 4798 "datetimemodule.c"
        if ($52) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 4798 "datetimemodule.c"
      case 13: // $bb14
        var $53=$x; //@line 4798 "datetimemodule.c"
        var $54=$53+4; //@line 4798 "datetimemodule.c"
        var $55=HEAP[$54]; //@line 4798 "datetimemodule.c"
        var $56=$55+24; //@line 4798 "datetimemodule.c"
        var $57=HEAP[$56]; //@line 4798 "datetimemodule.c"
        var $58=$x; //@line 4798 "datetimemodule.c"
        FUNCTION_TABLE[$57]($58); //@line 4798 "datetimemodule.c"
        __label__ = 14; break; //@line 4798 "datetimemodule.c"
      case 14: // $bb15
        var $59=_new_delta_ex(999999999, 86399, 999999, 0, _PyDateTime_DeltaType); //@line 4800 "datetimemodule.c"
        $x=$59; //@line 4800 "datetimemodule.c"
        var $60=($59)==0; //@line 4801 "datetimemodule.c"
        if ($60) { __label__ = 63; break; } else { __label__ = 15; break; } //@line 4801 "datetimemodule.c"
      case 15: // $bb16
        var $61=$d; //@line 4801 "datetimemodule.c"
        var $62=$x; //@line 4801 "datetimemodule.c"
        var $63=_PyDict_SetItemString($61, __str273, $62); //@line 4801 "datetimemodule.c"
        var $64=($63) < 0; //@line 4801 "datetimemodule.c"
        if ($64) { __label__ = 63; break; } else { __label__ = 16; break; } //@line 4801 "datetimemodule.c"
      case 16: // $bb18
        var $65=$x; //@line 4803 "datetimemodule.c"
        var $66=$65; //@line 4803 "datetimemodule.c"
        var $67=HEAP[$66]; //@line 4803 "datetimemodule.c"
        var $68=($67) - 1; //@line 4803 "datetimemodule.c"
        var $69=$x; //@line 4803 "datetimemodule.c"
        var $70=$69; //@line 4803 "datetimemodule.c"
        HEAP[$70]=$68; //@line 4803 "datetimemodule.c"
        var $71=$x; //@line 4803 "datetimemodule.c"
        var $72=$71; //@line 4803 "datetimemodule.c"
        var $73=HEAP[$72]; //@line 4803 "datetimemodule.c"
        var $74=($73)==0; //@line 4803 "datetimemodule.c"
        if ($74) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 4803 "datetimemodule.c"
      case 17: // $bb19
        var $75=$x; //@line 4803 "datetimemodule.c"
        var $76=$75+4; //@line 4803 "datetimemodule.c"
        var $77=HEAP[$76]; //@line 4803 "datetimemodule.c"
        var $78=$77+24; //@line 4803 "datetimemodule.c"
        var $79=HEAP[$78]; //@line 4803 "datetimemodule.c"
        var $80=$x; //@line 4803 "datetimemodule.c"
        FUNCTION_TABLE[$79]($80); //@line 4803 "datetimemodule.c"
        __label__ = 18; break; //@line 4803 "datetimemodule.c"
      case 18: // $bb20
        var $81=HEAP[_PyDateTime_DateType+132]; //@line 4806 "datetimemodule.c"
        $d=$81; //@line 4806 "datetimemodule.c"
        var $82=_new_date_ex(1, 1, 1, _PyDateTime_DateType); //@line 4808 "datetimemodule.c"
        $x=$82; //@line 4808 "datetimemodule.c"
        var $83=($82)==0; //@line 4809 "datetimemodule.c"
        if ($83) { __label__ = 63; break; } else { __label__ = 19; break; } //@line 4809 "datetimemodule.c"
      case 19: // $bb21
        var $84=$d; //@line 4809 "datetimemodule.c"
        var $85=$x; //@line 4809 "datetimemodule.c"
        var $86=_PyDict_SetItemString($84, __str272, $85); //@line 4809 "datetimemodule.c"
        var $87=($86) < 0; //@line 4809 "datetimemodule.c"
        if ($87) { __label__ = 63; break; } else { __label__ = 20; break; } //@line 4809 "datetimemodule.c"
      case 20: // $bb23
        var $88=$x; //@line 4811 "datetimemodule.c"
        var $89=$88; //@line 4811 "datetimemodule.c"
        var $90=HEAP[$89]; //@line 4811 "datetimemodule.c"
        var $91=($90) - 1; //@line 4811 "datetimemodule.c"
        var $92=$x; //@line 4811 "datetimemodule.c"
        var $93=$92; //@line 4811 "datetimemodule.c"
        HEAP[$93]=$91; //@line 4811 "datetimemodule.c"
        var $94=$x; //@line 4811 "datetimemodule.c"
        var $95=$94; //@line 4811 "datetimemodule.c"
        var $96=HEAP[$95]; //@line 4811 "datetimemodule.c"
        var $97=($96)==0; //@line 4811 "datetimemodule.c"
        if ($97) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 4811 "datetimemodule.c"
      case 21: // $bb24
        var $98=$x; //@line 4811 "datetimemodule.c"
        var $99=$98+4; //@line 4811 "datetimemodule.c"
        var $100=HEAP[$99]; //@line 4811 "datetimemodule.c"
        var $101=$100+24; //@line 4811 "datetimemodule.c"
        var $102=HEAP[$101]; //@line 4811 "datetimemodule.c"
        var $103=$x; //@line 4811 "datetimemodule.c"
        FUNCTION_TABLE[$102]($103); //@line 4811 "datetimemodule.c"
        __label__ = 22; break; //@line 4811 "datetimemodule.c"
      case 22: // $bb25
        var $104=_new_date_ex(9999, 12, 31, _PyDateTime_DateType); //@line 4813 "datetimemodule.c"
        $x=$104; //@line 4813 "datetimemodule.c"
        var $105=($104)==0; //@line 4814 "datetimemodule.c"
        if ($105) { __label__ = 63; break; } else { __label__ = 23; break; } //@line 4814 "datetimemodule.c"
      case 23: // $bb26
        var $106=$d; //@line 4814 "datetimemodule.c"
        var $107=$x; //@line 4814 "datetimemodule.c"
        var $108=_PyDict_SetItemString($106, __str273, $107); //@line 4814 "datetimemodule.c"
        var $109=($108) < 0; //@line 4814 "datetimemodule.c"
        if ($109) { __label__ = 63; break; } else { __label__ = 24; break; } //@line 4814 "datetimemodule.c"
      case 24: // $bb28
        var $110=$x; //@line 4816 "datetimemodule.c"
        var $111=$110; //@line 4816 "datetimemodule.c"
        var $112=HEAP[$111]; //@line 4816 "datetimemodule.c"
        var $113=($112) - 1; //@line 4816 "datetimemodule.c"
        var $114=$x; //@line 4816 "datetimemodule.c"
        var $115=$114; //@line 4816 "datetimemodule.c"
        HEAP[$115]=$113; //@line 4816 "datetimemodule.c"
        var $116=$x; //@line 4816 "datetimemodule.c"
        var $117=$116; //@line 4816 "datetimemodule.c"
        var $118=HEAP[$117]; //@line 4816 "datetimemodule.c"
        var $119=($118)==0; //@line 4816 "datetimemodule.c"
        if ($119) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 4816 "datetimemodule.c"
      case 25: // $bb29
        var $120=$x; //@line 4816 "datetimemodule.c"
        var $121=$120+4; //@line 4816 "datetimemodule.c"
        var $122=HEAP[$121]; //@line 4816 "datetimemodule.c"
        var $123=$122+24; //@line 4816 "datetimemodule.c"
        var $124=HEAP[$123]; //@line 4816 "datetimemodule.c"
        var $125=$x; //@line 4816 "datetimemodule.c"
        FUNCTION_TABLE[$124]($125); //@line 4816 "datetimemodule.c"
        __label__ = 26; break; //@line 4816 "datetimemodule.c"
      case 26: // $bb30
        var $126=_new_delta_ex(1, 0, 0, 0, _PyDateTime_DeltaType); //@line 4818 "datetimemodule.c"
        $x=$126; //@line 4818 "datetimemodule.c"
        var $127=($126)==0; //@line 4819 "datetimemodule.c"
        if ($127) { __label__ = 63; break; } else { __label__ = 27; break; } //@line 4819 "datetimemodule.c"
      case 27: // $bb31
        var $128=$d; //@line 4819 "datetimemodule.c"
        var $129=$x; //@line 4819 "datetimemodule.c"
        var $130=_PyDict_SetItemString($128, __str271, $129); //@line 4819 "datetimemodule.c"
        var $131=($130) < 0; //@line 4819 "datetimemodule.c"
        if ($131) { __label__ = 63; break; } else { __label__ = 28; break; } //@line 4819 "datetimemodule.c"
      case 28: // $bb33
        var $132=$x; //@line 4821 "datetimemodule.c"
        var $133=$132; //@line 4821 "datetimemodule.c"
        var $134=HEAP[$133]; //@line 4821 "datetimemodule.c"
        var $135=($134) - 1; //@line 4821 "datetimemodule.c"
        var $136=$x; //@line 4821 "datetimemodule.c"
        var $137=$136; //@line 4821 "datetimemodule.c"
        HEAP[$137]=$135; //@line 4821 "datetimemodule.c"
        var $138=$x; //@line 4821 "datetimemodule.c"
        var $139=$138; //@line 4821 "datetimemodule.c"
        var $140=HEAP[$139]; //@line 4821 "datetimemodule.c"
        var $141=($140)==0; //@line 4821 "datetimemodule.c"
        if ($141) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 4821 "datetimemodule.c"
      case 29: // $bb34
        var $142=$x; //@line 4821 "datetimemodule.c"
        var $143=$142+4; //@line 4821 "datetimemodule.c"
        var $144=HEAP[$143]; //@line 4821 "datetimemodule.c"
        var $145=$144+24; //@line 4821 "datetimemodule.c"
        var $146=HEAP[$145]; //@line 4821 "datetimemodule.c"
        var $147=$x; //@line 4821 "datetimemodule.c"
        FUNCTION_TABLE[$146]($147); //@line 4821 "datetimemodule.c"
        __label__ = 30; break; //@line 4821 "datetimemodule.c"
      case 30: // $bb35
        var $148=HEAP[_PyDateTime_TimeType+132]; //@line 4824 "datetimemodule.c"
        $d=$148; //@line 4824 "datetimemodule.c"
        var $149=_new_time_ex(0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_TimeType); //@line 4826 "datetimemodule.c"
        $x=$149; //@line 4826 "datetimemodule.c"
        var $150=($149)==0; //@line 4827 "datetimemodule.c"
        if ($150) { __label__ = 63; break; } else { __label__ = 31; break; } //@line 4827 "datetimemodule.c"
      case 31: // $bb36
        var $151=$d; //@line 4827 "datetimemodule.c"
        var $152=$x; //@line 4827 "datetimemodule.c"
        var $153=_PyDict_SetItemString($151, __str272, $152); //@line 4827 "datetimemodule.c"
        var $154=($153) < 0; //@line 4827 "datetimemodule.c"
        if ($154) { __label__ = 63; break; } else { __label__ = 32; break; } //@line 4827 "datetimemodule.c"
      case 32: // $bb38
        var $155=$x; //@line 4829 "datetimemodule.c"
        var $156=$155; //@line 4829 "datetimemodule.c"
        var $157=HEAP[$156]; //@line 4829 "datetimemodule.c"
        var $158=($157) - 1; //@line 4829 "datetimemodule.c"
        var $159=$x; //@line 4829 "datetimemodule.c"
        var $160=$159; //@line 4829 "datetimemodule.c"
        HEAP[$160]=$158; //@line 4829 "datetimemodule.c"
        var $161=$x; //@line 4829 "datetimemodule.c"
        var $162=$161; //@line 4829 "datetimemodule.c"
        var $163=HEAP[$162]; //@line 4829 "datetimemodule.c"
        var $164=($163)==0; //@line 4829 "datetimemodule.c"
        if ($164) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 4829 "datetimemodule.c"
      case 33: // $bb39
        var $165=$x; //@line 4829 "datetimemodule.c"
        var $166=$165+4; //@line 4829 "datetimemodule.c"
        var $167=HEAP[$166]; //@line 4829 "datetimemodule.c"
        var $168=$167+24; //@line 4829 "datetimemodule.c"
        var $169=HEAP[$168]; //@line 4829 "datetimemodule.c"
        var $170=$x; //@line 4829 "datetimemodule.c"
        FUNCTION_TABLE[$169]($170); //@line 4829 "datetimemodule.c"
        __label__ = 34; break; //@line 4829 "datetimemodule.c"
      case 34: // $bb40
        var $171=_new_time_ex(23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_TimeType); //@line 4831 "datetimemodule.c"
        $x=$171; //@line 4831 "datetimemodule.c"
        var $172=($171)==0; //@line 4832 "datetimemodule.c"
        if ($172) { __label__ = 63; break; } else { __label__ = 35; break; } //@line 4832 "datetimemodule.c"
      case 35: // $bb41
        var $173=$d; //@line 4832 "datetimemodule.c"
        var $174=$x; //@line 4832 "datetimemodule.c"
        var $175=_PyDict_SetItemString($173, __str273, $174); //@line 4832 "datetimemodule.c"
        var $176=($175) < 0; //@line 4832 "datetimemodule.c"
        if ($176) { __label__ = 63; break; } else { __label__ = 36; break; } //@line 4832 "datetimemodule.c"
      case 36: // $bb43
        var $177=$x; //@line 4834 "datetimemodule.c"
        var $178=$177; //@line 4834 "datetimemodule.c"
        var $179=HEAP[$178]; //@line 4834 "datetimemodule.c"
        var $180=($179) - 1; //@line 4834 "datetimemodule.c"
        var $181=$x; //@line 4834 "datetimemodule.c"
        var $182=$181; //@line 4834 "datetimemodule.c"
        HEAP[$182]=$180; //@line 4834 "datetimemodule.c"
        var $183=$x; //@line 4834 "datetimemodule.c"
        var $184=$183; //@line 4834 "datetimemodule.c"
        var $185=HEAP[$184]; //@line 4834 "datetimemodule.c"
        var $186=($185)==0; //@line 4834 "datetimemodule.c"
        if ($186) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 4834 "datetimemodule.c"
      case 37: // $bb44
        var $187=$x; //@line 4834 "datetimemodule.c"
        var $188=$187+4; //@line 4834 "datetimemodule.c"
        var $189=HEAP[$188]; //@line 4834 "datetimemodule.c"
        var $190=$189+24; //@line 4834 "datetimemodule.c"
        var $191=HEAP[$190]; //@line 4834 "datetimemodule.c"
        var $192=$x; //@line 4834 "datetimemodule.c"
        FUNCTION_TABLE[$191]($192); //@line 4834 "datetimemodule.c"
        __label__ = 38; break; //@line 4834 "datetimemodule.c"
      case 38: // $bb45
        var $193=_new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType); //@line 4836 "datetimemodule.c"
        $x=$193; //@line 4836 "datetimemodule.c"
        var $194=($193)==0; //@line 4837 "datetimemodule.c"
        if ($194) { __label__ = 63; break; } else { __label__ = 39; break; } //@line 4837 "datetimemodule.c"
      case 39: // $bb46
        var $195=$d; //@line 4837 "datetimemodule.c"
        var $196=$x; //@line 4837 "datetimemodule.c"
        var $197=_PyDict_SetItemString($195, __str271, $196); //@line 4837 "datetimemodule.c"
        var $198=($197) < 0; //@line 4837 "datetimemodule.c"
        if ($198) { __label__ = 63; break; } else { __label__ = 40; break; } //@line 4837 "datetimemodule.c"
      case 40: // $bb48
        var $199=$x; //@line 4839 "datetimemodule.c"
        var $200=$199; //@line 4839 "datetimemodule.c"
        var $201=HEAP[$200]; //@line 4839 "datetimemodule.c"
        var $202=($201) - 1; //@line 4839 "datetimemodule.c"
        var $203=$x; //@line 4839 "datetimemodule.c"
        var $204=$203; //@line 4839 "datetimemodule.c"
        HEAP[$204]=$202; //@line 4839 "datetimemodule.c"
        var $205=$x; //@line 4839 "datetimemodule.c"
        var $206=$205; //@line 4839 "datetimemodule.c"
        var $207=HEAP[$206]; //@line 4839 "datetimemodule.c"
        var $208=($207)==0; //@line 4839 "datetimemodule.c"
        if ($208) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 4839 "datetimemodule.c"
      case 41: // $bb49
        var $209=$x; //@line 4839 "datetimemodule.c"
        var $210=$209+4; //@line 4839 "datetimemodule.c"
        var $211=HEAP[$210]; //@line 4839 "datetimemodule.c"
        var $212=$211+24; //@line 4839 "datetimemodule.c"
        var $213=HEAP[$212]; //@line 4839 "datetimemodule.c"
        var $214=$x; //@line 4839 "datetimemodule.c"
        FUNCTION_TABLE[$213]($214); //@line 4839 "datetimemodule.c"
        __label__ = 42; break; //@line 4839 "datetimemodule.c"
      case 42: // $bb50
        var $215=HEAP[_PyDateTime_DateTimeType+132]; //@line 4842 "datetimemodule.c"
        $d=$215; //@line 4842 "datetimemodule.c"
        var $216=_new_datetime_ex(1, 1, 1, 0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_DateTimeType); //@line 4844 "datetimemodule.c"
        $x=$216; //@line 4844 "datetimemodule.c"
        var $217=($216)==0; //@line 4845 "datetimemodule.c"
        if ($217) { __label__ = 63; break; } else { __label__ = 43; break; } //@line 4845 "datetimemodule.c"
      case 43: // $bb51
        var $218=$d; //@line 4845 "datetimemodule.c"
        var $219=$x; //@line 4845 "datetimemodule.c"
        var $220=_PyDict_SetItemString($218, __str272, $219); //@line 4845 "datetimemodule.c"
        var $221=($220) < 0; //@line 4845 "datetimemodule.c"
        if ($221) { __label__ = 63; break; } else { __label__ = 44; break; } //@line 4845 "datetimemodule.c"
      case 44: // $bb53
        var $222=$x; //@line 4847 "datetimemodule.c"
        var $223=$222; //@line 4847 "datetimemodule.c"
        var $224=HEAP[$223]; //@line 4847 "datetimemodule.c"
        var $225=($224) - 1; //@line 4847 "datetimemodule.c"
        var $226=$x; //@line 4847 "datetimemodule.c"
        var $227=$226; //@line 4847 "datetimemodule.c"
        HEAP[$227]=$225; //@line 4847 "datetimemodule.c"
        var $228=$x; //@line 4847 "datetimemodule.c"
        var $229=$228; //@line 4847 "datetimemodule.c"
        var $230=HEAP[$229]; //@line 4847 "datetimemodule.c"
        var $231=($230)==0; //@line 4847 "datetimemodule.c"
        if ($231) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 4847 "datetimemodule.c"
      case 45: // $bb54
        var $232=$x; //@line 4847 "datetimemodule.c"
        var $233=$232+4; //@line 4847 "datetimemodule.c"
        var $234=HEAP[$233]; //@line 4847 "datetimemodule.c"
        var $235=$234+24; //@line 4847 "datetimemodule.c"
        var $236=HEAP[$235]; //@line 4847 "datetimemodule.c"
        var $237=$x; //@line 4847 "datetimemodule.c"
        FUNCTION_TABLE[$236]($237); //@line 4847 "datetimemodule.c"
        __label__ = 46; break; //@line 4847 "datetimemodule.c"
      case 46: // $bb55
        var $238=_new_datetime_ex(9999, 12, 31, 23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_DateTimeType); //@line 4849 "datetimemodule.c"
        $x=$238; //@line 4849 "datetimemodule.c"
        var $239=($238)==0; //@line 4850 "datetimemodule.c"
        if ($239) { __label__ = 63; break; } else { __label__ = 47; break; } //@line 4850 "datetimemodule.c"
      case 47: // $bb56
        var $240=$d; //@line 4850 "datetimemodule.c"
        var $241=$x; //@line 4850 "datetimemodule.c"
        var $242=_PyDict_SetItemString($240, __str273, $241); //@line 4850 "datetimemodule.c"
        var $243=($242) < 0; //@line 4850 "datetimemodule.c"
        if ($243) { __label__ = 63; break; } else { __label__ = 48; break; } //@line 4850 "datetimemodule.c"
      case 48: // $bb58
        var $244=$x; //@line 4852 "datetimemodule.c"
        var $245=$244; //@line 4852 "datetimemodule.c"
        var $246=HEAP[$245]; //@line 4852 "datetimemodule.c"
        var $247=($246) - 1; //@line 4852 "datetimemodule.c"
        var $248=$x; //@line 4852 "datetimemodule.c"
        var $249=$248; //@line 4852 "datetimemodule.c"
        HEAP[$249]=$247; //@line 4852 "datetimemodule.c"
        var $250=$x; //@line 4852 "datetimemodule.c"
        var $251=$250; //@line 4852 "datetimemodule.c"
        var $252=HEAP[$251]; //@line 4852 "datetimemodule.c"
        var $253=($252)==0; //@line 4852 "datetimemodule.c"
        if ($253) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 4852 "datetimemodule.c"
      case 49: // $bb59
        var $254=$x; //@line 4852 "datetimemodule.c"
        var $255=$254+4; //@line 4852 "datetimemodule.c"
        var $256=HEAP[$255]; //@line 4852 "datetimemodule.c"
        var $257=$256+24; //@line 4852 "datetimemodule.c"
        var $258=HEAP[$257]; //@line 4852 "datetimemodule.c"
        var $259=$x; //@line 4852 "datetimemodule.c"
        FUNCTION_TABLE[$258]($259); //@line 4852 "datetimemodule.c"
        __label__ = 50; break; //@line 4852 "datetimemodule.c"
      case 50: // $bb60
        var $260=_new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType); //@line 4854 "datetimemodule.c"
        $x=$260; //@line 4854 "datetimemodule.c"
        var $261=($260)==0; //@line 4855 "datetimemodule.c"
        if ($261) { __label__ = 63; break; } else { __label__ = 51; break; } //@line 4855 "datetimemodule.c"
      case 51: // $bb61
        var $262=$d; //@line 4855 "datetimemodule.c"
        var $263=$x; //@line 4855 "datetimemodule.c"
        var $264=_PyDict_SetItemString($262, __str271, $263); //@line 4855 "datetimemodule.c"
        var $265=($264) < 0; //@line 4855 "datetimemodule.c"
        if ($265) { __label__ = 63; break; } else { __label__ = 52; break; } //@line 4855 "datetimemodule.c"
      case 52: // $bb63
        var $266=$x; //@line 4857 "datetimemodule.c"
        var $267=$266; //@line 4857 "datetimemodule.c"
        var $268=HEAP[$267]; //@line 4857 "datetimemodule.c"
        var $269=($268) - 1; //@line 4857 "datetimemodule.c"
        var $270=$x; //@line 4857 "datetimemodule.c"
        var $271=$270; //@line 4857 "datetimemodule.c"
        HEAP[$271]=$269; //@line 4857 "datetimemodule.c"
        var $272=$x; //@line 4857 "datetimemodule.c"
        var $273=$272; //@line 4857 "datetimemodule.c"
        var $274=HEAP[$273]; //@line 4857 "datetimemodule.c"
        var $275=($274)==0; //@line 4857 "datetimemodule.c"
        if ($275) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 4857 "datetimemodule.c"
      case 53: // $bb64
        var $276=$x; //@line 4857 "datetimemodule.c"
        var $277=$276+4; //@line 4857 "datetimemodule.c"
        var $278=HEAP[$277]; //@line 4857 "datetimemodule.c"
        var $279=$278+24; //@line 4857 "datetimemodule.c"
        var $280=HEAP[$279]; //@line 4857 "datetimemodule.c"
        var $281=$x; //@line 4857 "datetimemodule.c"
        FUNCTION_TABLE[$280]($281); //@line 4857 "datetimemodule.c"
        __label__ = 54; break; //@line 4857 "datetimemodule.c"
      case 54: // $bb65
        var $282=$m; //@line 4860 "datetimemodule.c"
        var $283=_PyModule_AddIntConstant($282, __str274, 1); //@line 4860 "datetimemodule.c"
        var $284=$m; //@line 4861 "datetimemodule.c"
        var $285=_PyModule_AddIntConstant($284, __str275, 9999); //@line 4861 "datetimemodule.c"
        var $286=HEAP[_PyDateTime_DateType]; //@line 4863 "datetimemodule.c"
        var $287=($286) + 1; //@line 4863 "datetimemodule.c"
        HEAP[_PyDateTime_DateType]=$287; //@line 4863 "datetimemodule.c"
        var $288=$m; //@line 4864 "datetimemodule.c"
        var $289=_PyModule_AddObject($288, __str232, _PyDateTime_DateType); //@line 4864 "datetimemodule.c"
        var $290=HEAP[_PyDateTime_DateTimeType]; //@line 4866 "datetimemodule.c"
        var $291=($290) + 1; //@line 4866 "datetimemodule.c"
        HEAP[_PyDateTime_DateTimeType]=$291; //@line 4866 "datetimemodule.c"
        var $292=$m; //@line 4867 "datetimemodule.c"
        var $293=_PyModule_AddObject($292, __str269, _PyDateTime_DateTimeType); //@line 4867 "datetimemodule.c"
        var $294=HEAP[_PyDateTime_TimeType]; //@line 4870 "datetimemodule.c"
        var $295=($294) + 1; //@line 4870 "datetimemodule.c"
        HEAP[_PyDateTime_TimeType]=$295; //@line 4870 "datetimemodule.c"
        var $296=$m; //@line 4871 "datetimemodule.c"
        var $297=_PyModule_AddObject($296, __str92, _PyDateTime_TimeType); //@line 4871 "datetimemodule.c"
        var $298=HEAP[_PyDateTime_DeltaType]; //@line 4873 "datetimemodule.c"
        var $299=($298) + 1; //@line 4873 "datetimemodule.c"
        HEAP[_PyDateTime_DeltaType]=$299; //@line 4873 "datetimemodule.c"
        var $300=$m; //@line 4874 "datetimemodule.c"
        var $301=_PyModule_AddObject($300, __str276, _PyDateTime_DeltaType); //@line 4874 "datetimemodule.c"
        var $302=HEAP[_PyDateTime_TZInfoType]; //@line 4876 "datetimemodule.c"
        var $303=($302) + 1; //@line 4876 "datetimemodule.c"
        HEAP[_PyDateTime_TZInfoType]=$303; //@line 4876 "datetimemodule.c"
        var $304=$m; //@line 4877 "datetimemodule.c"
        var $305=_PyModule_AddObject($304, __str48, _PyDateTime_TZInfoType); //@line 4877 "datetimemodule.c"
        var $306=_PyCapsule_New(_CAPI, __str277, 0); //@line 4879 "datetimemodule.c"
        $x=$306; //@line 4879 "datetimemodule.c"
        var $307=($306)==0; //@line 4880 "datetimemodule.c"
        if ($307) { __label__ = 63; break; } else { __label__ = 55; break; } //@line 4880 "datetimemodule.c"
      case 55: // $bb66
        var $308=$m; //@line 4882 "datetimemodule.c"
        var $309=$x; //@line 4882 "datetimemodule.c"
        var $310=_PyModule_AddObject($308, __str278, $309); //@line 4882 "datetimemodule.c"
        var $311=_days_before_year(5); //@line 4888 "datetimemodule.c"
        var $312=($311)!=1461; //@line 4888 "datetimemodule.c"
        if ($312) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 4888 "datetimemodule.c"
      case 56: // $bb67
        ___assert_fail(__str279, __str1, 4888, ___PRETTY_FUNCTION___14028); //@line 4888 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4888 "datetimemodule.c"
      case 57: // $bb68
        var $313=_days_before_year(401); //@line 4894 "datetimemodule.c"
        var $314=($313)!=146097; //@line 4894 "datetimemodule.c"
        if ($314) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 4894 "datetimemodule.c"
      case 58: // $bb69
        ___assert_fail(__str280, __str1, 4894, ___PRETTY_FUNCTION___14028); //@line 4894 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4894 "datetimemodule.c"
      case 59: // $bb70
        var $315=_days_before_year(101); //@line 4900 "datetimemodule.c"
        var $316=($315)!=36524; //@line 4900 "datetimemodule.c"
        if ($316) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 4900 "datetimemodule.c"
      case 60: // $bb71
        ___assert_fail(__str281, __str1, 4900, ___PRETTY_FUNCTION___14028); //@line 4900 "datetimemodule.c"
        throw "Reached an unreachable!" //@line 4900 "datetimemodule.c"
      case 61: // $bb72
        var $317=_PyInt_FromLong(1); //@line 4902 "datetimemodule.c"
        HEAP[_us_per_us]=$317; //@line 4902 "datetimemodule.c"
        var $318=_PyInt_FromLong(1000); //@line 4903 "datetimemodule.c"
        HEAP[_us_per_ms]=$318; //@line 4903 "datetimemodule.c"
        var $319=_PyInt_FromLong(1000000); //@line 4904 "datetimemodule.c"
        HEAP[_us_per_second]=$319; //@line 4904 "datetimemodule.c"
        var $320=_PyInt_FromLong(60000000); //@line 4905 "datetimemodule.c"
        HEAP[_us_per_minute]=$320; //@line 4905 "datetimemodule.c"
        var $321=_PyInt_FromLong(86400); //@line 4906 "datetimemodule.c"
        HEAP[_seconds_per_day]=$321; //@line 4906 "datetimemodule.c"
        var $322=HEAP[_us_per_us]; //@line 4907 "datetimemodule.c"
        var $323=($322)==0; //@line 4907 "datetimemodule.c"
        var $324=HEAP[_us_per_ms]; //@line 4907 "datetimemodule.c"
        var $325=($324)==0; //@line 4907 "datetimemodule.c"
        var $or_cond=($323) | ($325);
        var $326=HEAP[_us_per_second]; //@line 4907 "datetimemodule.c"
        var $327=($326)==0; //@line 4907 "datetimemodule.c"
        var $or_cond3=($or_cond) | ($327);
        var $328=HEAP[_us_per_minute]; //@line 4907 "datetimemodule.c"
        var $329=($328)==0; //@line 4907 "datetimemodule.c"
        var $or_cond5=($or_cond3) | ($329);
        var $330=HEAP[_seconds_per_day]; //@line 4907 "datetimemodule.c"
        var $331=($330)==0; //@line 4907 "datetimemodule.c"
        var $or_cond7=($or_cond5) | ($331);
        if ($or_cond7) { __label__ = 63; break; } else { __label__ = 62; break; } //@line 4907 "datetimemodule.c"
      case 62: // $bb78
        var $332=_PyLong_FromDouble(3600000000); //@line 4914 "datetimemodule.c"
        HEAP[_us_per_hour]=$332; //@line 4914 "datetimemodule.c"
        var $333=_PyLong_FromDouble(86400000000); //@line 4915 "datetimemodule.c"
        HEAP[_us_per_day]=$333; //@line 4915 "datetimemodule.c"
        var $334=_PyLong_FromDouble(604800000000); //@line 4916 "datetimemodule.c"
        HEAP[_us_per_week]=$334; //@line 4916 "datetimemodule.c"
        ;
        return;
      case 63: // $return
        ;
        return; //@line 4774 "datetimemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdatetime"] = _initdatetime;

  function __PyTime_DoubleToTimet($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $result;
        var $diff;
        $x_addr=$x;
        var $1=$x_addr; //@line 108 "timemodule.c"
        var $2=((($1))|0); //@line 108 "timemodule.c"
        $result=$2; //@line 108 "timemodule.c"
        var $3=$result; //@line 118 "timemodule.c"
        var $4=($3); //@line 118 "timemodule.c"
        var $5=$x_addr; //@line 118 "timemodule.c"
        var $6=($5) - ($4); //@line 118 "timemodule.c"
        $diff=$6; //@line 118 "timemodule.c"
        var $7=$diff; //@line 119 "timemodule.c"
        var $8=($7) <= -1; //@line 119 "timemodule.c"
        var $9=$diff; //@line 119 "timemodule.c"
        var $10=($9) >= 1; //@line 119 "timemodule.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 119 "timemodule.c"
      case 1: // $bb1
        var $11=HEAP[_PyExc_ValueError]; //@line 120 "timemodule.c"
        _PyErr_SetString($11, __str282); //@line 120 "timemodule.c"
        $result=-1; //@line 122 "timemodule.c"
        __label__ = 2; break; //@line 122 "timemodule.c"
      case 2: // $bb2
        var $12=$result; //@line 124 "timemodule.c"
        $0=$12; //@line 124 "timemodule.c"
        var $13=$0; //@line 124 "timemodule.c"
        $retval=$13; //@line 124 "timemodule.c"
        var $retval3=$retval; //@line 124 "timemodule.c"
        ;
        return $retval3; //@line 124 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_time346($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $secs;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=_floattime(); //@line 131 "timemodule.c"
        $secs=$1; //@line 131 "timemodule.c"
        var $2=$secs; //@line 132 "timemodule.c"
        var $3=($2) == 0; //@line 132 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 132 "timemodule.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_IOError]; //@line 133 "timemodule.c"
        var $5=_PyErr_SetFromErrno($4); //@line 133 "timemodule.c"
        $0=0; //@line 134 "timemodule.c"
        __label__ = 3; break; //@line 134 "timemodule.c"
      case 2: // $bb1
        var $6=$secs; //@line 136 "timemodule.c"
        var $7=_PyFloat_FromDouble($6); //@line 136 "timemodule.c"
        $0=$7; //@line 136 "timemodule.c"
        __label__ = 3; break; //@line 136 "timemodule.c"
      case 3: // $bb2
        var $8=$0; //@line 134 "timemodule.c"
        $retval=$8; //@line 134 "timemodule.c"
        var $retval3=$retval; //@line 134 "timemodule.c"
        ;
        return $retval3; //@line 134 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_clock($self, $unused) {
    ;
    var __label__;
  
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $unused_addr=$unused;
    var $1=_clock(); //@line 158 "timemodule.c"
    var $2=($1); //@line 158 "timemodule.c"
    var $3=($2) / 1000000; //@line 158 "timemodule.c"
    var $4=_PyFloat_FromDouble($3); //@line 158 "timemodule.c"
    $0=$4; //@line 158 "timemodule.c"
    var $5=$0; //@line 158 "timemodule.c"
    $retval=$5; //@line 158 "timemodule.c"
    var $retval1=$retval; //@line 158 "timemodule.c"
    ;
    return $retval1; //@line 158 "timemodule.c"
  }
  

  function _time_sleep($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $secs=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 204 "timemodule.c"
        var $2=_PyArg_ParseTuple($1, __str1284, allocate([$secs,0,0,0], ["double*",0,0,0], ALLOC_STACK)); //@line 204 "timemodule.c"
        var $3=($2)==0; //@line 204 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 204 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 205 "timemodule.c"
        __label__ = 5; break; //@line 205 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$secs]; //@line 206 "timemodule.c"
        var $5=_floatsleep($4); //@line 206 "timemodule.c"
        var $6=($5)!=0; //@line 206 "timemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 206 "timemodule.c"
      case 3: // $bb2
        $0=0; //@line 207 "timemodule.c"
        __label__ = 5; break; //@line 207 "timemodule.c"
      case 4: // $bb3
        var $7=HEAP[__Py_NoneStruct]; //@line 208 "timemodule.c"
        var $8=($7) + 1; //@line 208 "timemodule.c"
        HEAP[__Py_NoneStruct]=$8; //@line 208 "timemodule.c"
        $0=__Py_NoneStruct; //@line 209 "timemodule.c"
        __label__ = 5; break; //@line 209 "timemodule.c"
      case 5: // $bb4
        var $9=$0; //@line 205 "timemodule.c"
        $retval=$9; //@line 205 "timemodule.c"
        var $retval5=$retval; //@line 205 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 205 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tmtotuple($p) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr;
        var $retval;
        var $0;
        var $v;
        $p_addr=$p;
        var $1=_PyStructSequence_New(_StructTimeType); //@line 250 "timemodule.c"
        $v=$1; //@line 250 "timemodule.c"
        var $2=$v; //@line 251 "timemodule.c"
        var $3=($2)==0; //@line 251 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 251 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 252 "timemodule.c"
        __label__ = 8; break; //@line 252 "timemodule.c"
      case 2: // $bb1
        var $4=$v; //@line 256 "timemodule.c"
        var $5=$4; //@line 256 "timemodule.c"
        var $6=$p_addr; //@line 256 "timemodule.c"
        var $7=$6+20; //@line 256 "timemodule.c"
        var $8=HEAP[$7]; //@line 256 "timemodule.c"
        var $9=($8) + 1900; //@line 256 "timemodule.c"
        var $10=_PyInt_FromLong($9); //@line 256 "timemodule.c"
        var $11=$5+12; //@line 256 "timemodule.c"
        var $12=$11; //@line 256 "timemodule.c"
        HEAP[$12]=$10; //@line 256 "timemodule.c"
        var $13=$v; //@line 257 "timemodule.c"
        var $14=$13; //@line 257 "timemodule.c"
        var $15=$p_addr; //@line 257 "timemodule.c"
        var $16=$15+16; //@line 257 "timemodule.c"
        var $17=HEAP[$16]; //@line 257 "timemodule.c"
        var $18=($17) + 1; //@line 257 "timemodule.c"
        var $19=_PyInt_FromLong($18); //@line 257 "timemodule.c"
        var $20=$14+12; //@line 257 "timemodule.c"
        var $21=$20+4; //@line 257 "timemodule.c"
        HEAP[$21]=$19; //@line 257 "timemodule.c"
        var $22=$v; //@line 258 "timemodule.c"
        var $23=$22; //@line 258 "timemodule.c"
        var $24=$p_addr; //@line 258 "timemodule.c"
        var $25=$24+12; //@line 258 "timemodule.c"
        var $26=HEAP[$25]; //@line 258 "timemodule.c"
        var $27=_PyInt_FromLong($26); //@line 258 "timemodule.c"
        var $28=$23+12; //@line 258 "timemodule.c"
        var $29=$28+8; //@line 258 "timemodule.c"
        HEAP[$29]=$27; //@line 258 "timemodule.c"
        var $30=$v; //@line 259 "timemodule.c"
        var $31=$30; //@line 259 "timemodule.c"
        var $32=$p_addr; //@line 259 "timemodule.c"
        var $33=$32+8; //@line 259 "timemodule.c"
        var $34=HEAP[$33]; //@line 259 "timemodule.c"
        var $35=_PyInt_FromLong($34); //@line 259 "timemodule.c"
        var $36=$31+12; //@line 259 "timemodule.c"
        var $37=$36+12; //@line 259 "timemodule.c"
        HEAP[$37]=$35; //@line 259 "timemodule.c"
        var $38=$v; //@line 260 "timemodule.c"
        var $39=$38; //@line 260 "timemodule.c"
        var $40=$p_addr; //@line 260 "timemodule.c"
        var $41=$40+4; //@line 260 "timemodule.c"
        var $42=HEAP[$41]; //@line 260 "timemodule.c"
        var $43=_PyInt_FromLong($42); //@line 260 "timemodule.c"
        var $44=$39+12; //@line 260 "timemodule.c"
        var $45=$44+16; //@line 260 "timemodule.c"
        HEAP[$45]=$43; //@line 260 "timemodule.c"
        var $46=$v; //@line 261 "timemodule.c"
        var $47=$46; //@line 261 "timemodule.c"
        var $48=$p_addr; //@line 261 "timemodule.c"
        var $49=$48; //@line 261 "timemodule.c"
        var $50=HEAP[$49]; //@line 261 "timemodule.c"
        var $51=_PyInt_FromLong($50); //@line 261 "timemodule.c"
        var $52=$47+12; //@line 261 "timemodule.c"
        var $53=$52+20; //@line 261 "timemodule.c"
        HEAP[$53]=$51; //@line 261 "timemodule.c"
        var $54=$v; //@line 262 "timemodule.c"
        var $55=$54; //@line 262 "timemodule.c"
        var $56=$p_addr; //@line 262 "timemodule.c"
        var $57=$56+24; //@line 262 "timemodule.c"
        var $58=HEAP[$57]; //@line 262 "timemodule.c"
        var $59=($58) + 6; //@line 262 "timemodule.c"
        var $60=($59) % 7; //@line 262 "timemodule.c"
        var $61=_PyInt_FromLong($60); //@line 262 "timemodule.c"
        var $62=$55+12; //@line 262 "timemodule.c"
        var $63=$62+24; //@line 262 "timemodule.c"
        HEAP[$63]=$61; //@line 262 "timemodule.c"
        var $64=$v; //@line 263 "timemodule.c"
        var $65=$64; //@line 263 "timemodule.c"
        var $66=$p_addr; //@line 263 "timemodule.c"
        var $67=$66+28; //@line 263 "timemodule.c"
        var $68=HEAP[$67]; //@line 263 "timemodule.c"
        var $69=($68) + 1; //@line 263 "timemodule.c"
        var $70=_PyInt_FromLong($69); //@line 263 "timemodule.c"
        var $71=$65+12; //@line 263 "timemodule.c"
        var $72=$71+28; //@line 263 "timemodule.c"
        HEAP[$72]=$70; //@line 263 "timemodule.c"
        var $73=$v; //@line 264 "timemodule.c"
        var $74=$73; //@line 264 "timemodule.c"
        var $75=$p_addr; //@line 264 "timemodule.c"
        var $76=$75+32; //@line 264 "timemodule.c"
        var $77=HEAP[$76]; //@line 264 "timemodule.c"
        var $78=_PyInt_FromLong($77); //@line 264 "timemodule.c"
        var $79=$74+12; //@line 264 "timemodule.c"
        var $80=$79+32; //@line 264 "timemodule.c"
        HEAP[$80]=$78; //@line 264 "timemodule.c"
        var $81=_PyErr_Occurred(); //@line 266 "timemodule.c"
        var $82=($81)!=0; //@line 266 "timemodule.c"
        var $83=$v; //@line 267 "timemodule.c"
        if ($82) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 266 "timemodule.c"
      case 3: // $bb2
        var $84=($83)!=0; //@line 267 "timemodule.c"
        if ($84) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 267 "timemodule.c"
      case 4: // $bb3
        var $85=$v; //@line 267 "timemodule.c"
        var $86=$85; //@line 267 "timemodule.c"
        var $87=HEAP[$86]; //@line 267 "timemodule.c"
        var $88=($87) - 1; //@line 267 "timemodule.c"
        var $89=$v; //@line 267 "timemodule.c"
        var $90=$89; //@line 267 "timemodule.c"
        HEAP[$90]=$88; //@line 267 "timemodule.c"
        var $91=$v; //@line 267 "timemodule.c"
        var $92=$91; //@line 267 "timemodule.c"
        var $93=HEAP[$92]; //@line 267 "timemodule.c"
        var $94=($93)==0; //@line 267 "timemodule.c"
        if ($94) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 267 "timemodule.c"
      case 5: // $bb4
        var $95=$v; //@line 267 "timemodule.c"
        var $96=$95+4; //@line 267 "timemodule.c"
        var $97=HEAP[$96]; //@line 267 "timemodule.c"
        var $98=$97+24; //@line 267 "timemodule.c"
        var $99=HEAP[$98]; //@line 267 "timemodule.c"
        var $100=$v; //@line 267 "timemodule.c"
        FUNCTION_TABLE[$99]($100); //@line 267 "timemodule.c"
        __label__ = 6; break; //@line 267 "timemodule.c"
      case 6: // $bb5
        $0=0; //@line 268 "timemodule.c"
        __label__ = 8; break; //@line 268 "timemodule.c"
      case 7: // $bb6
        $0=$83; //@line 271 "timemodule.c"
        __label__ = 8; break; //@line 271 "timemodule.c"
      case 8: // $bb7
        var $101=$0; //@line 252 "timemodule.c"
        $retval=$101; //@line 252 "timemodule.c"
        var $retval8=$retval; //@line 252 "timemodule.c"
        ;
        return $retval8; //@line 252 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_convert($when, $function) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $when_addr;
        var $function_addr;
        var $retval;
        var $0;
        var $p;
        var $whent=__stackBase__;
        $when_addr=$when;
        $function_addr=$function;
        var $1=$when_addr; //@line 278 "timemodule.c"
        var $2=__PyTime_DoubleToTimet($1); //@line 278 "timemodule.c"
        HEAP[$whent]=$2; //@line 278 "timemodule.c"
        var $3=HEAP[$whent]; //@line 280 "timemodule.c"
        var $4=($3)==-1; //@line 280 "timemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 280 "timemodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 280 "timemodule.c"
        var $6=($5)!=0; //@line 280 "timemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 280 "timemodule.c"
      case 2: // $bb1
        $0=0; //@line 281 "timemodule.c"
        __label__ = 8; break; //@line 281 "timemodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 282 "timemodule.c"
        HEAP[$7]=0; //@line 282 "timemodule.c"
        var $8=$function_addr; //@line 283 "timemodule.c"
        var $9=FUNCTION_TABLE[$8]($whent); //@line 283 "timemodule.c"
        $p=$9; //@line 283 "timemodule.c"
        var $10=($9)==0; //@line 284 "timemodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 284 "timemodule.c"
      case 4: // $bb3
        var $11=___errno_location(); //@line 286 "timemodule.c"
        var $12=HEAP[$11]; //@line 286 "timemodule.c"
        var $13=($12)==0; //@line 286 "timemodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 286 "timemodule.c"
      case 5: // $bb4
        var $14=___errno_location(); //@line 287 "timemodule.c"
        HEAP[$14]=22; //@line 287 "timemodule.c"
        __label__ = 6; break; //@line 287 "timemodule.c"
      case 6: // $bb5
        var $15=HEAP[_PyExc_ValueError]; //@line 289 "timemodule.c"
        var $16=_PyErr_SetFromErrno($15); //@line 289 "timemodule.c"
        $0=$16; //@line 289 "timemodule.c"
        __label__ = 8; break; //@line 289 "timemodule.c"
      case 7: // $bb6
        var $17=$p; //@line 291 "timemodule.c"
        var $18=_tmtotuple($17); //@line 291 "timemodule.c"
        $0=$18; //@line 291 "timemodule.c"
        __label__ = 8; break; //@line 291 "timemodule.c"
      case 8: // $bb7
        var $19=$0; //@line 281 "timemodule.c"
        $retval=$19; //@line 281 "timemodule.c"
        var $retval8=$retval; //@line 281 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 281 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_time_double_args($args, $format, $pwhen) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr;
        var $format_addr;
        var $pwhen_addr;
        var $retval;
        var $0;
        var $ot=__stackBase__;
        var $when;
        $args_addr=$args;
        $format_addr=$format;
        $pwhen_addr=$pwhen;
        HEAP[$ot]=0; //@line 301 "timemodule.c"
        var $1=$args_addr; //@line 303 "timemodule.c"
        var $2=$format_addr; //@line 303 "timemodule.c"
        var $3=_PyArg_ParseTuple($1, $2, allocate([$ot,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 303 "timemodule.c"
        var $4=($3)==0; //@line 303 "timemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 303 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 304 "timemodule.c"
        __label__ = 8; break; //@line 304 "timemodule.c"
      case 2: // $bb1
        var $5=HEAP[$ot]; //@line 305 "timemodule.c"
        var $6=($5)==0; //@line 305 "timemodule.c"
        var $7=HEAP[$ot]; //@line 305 "timemodule.c"
        var $8=($7)==(__Py_NoneStruct); //@line 305 "timemodule.c"
        var $or_cond=($6) | ($8);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 305 "timemodule.c"
      case 3: // $bb3
        var $9=_floattime(); //@line 306 "timemodule.c"
        var $10=$pwhen_addr; //@line 306 "timemodule.c"
        HEAP[$10]=$9; //@line 306 "timemodule.c"
        __label__ = 7; break; //@line 306 "timemodule.c"
      case 4: // $bb4
        var $11=HEAP[$ot]; //@line 308 "timemodule.c"
        var $12=_PyFloat_AsDouble($11); //@line 308 "timemodule.c"
        $when=$12; //@line 308 "timemodule.c"
        var $13=_PyErr_Occurred(); //@line 309 "timemodule.c"
        var $14=($13)!=0; //@line 309 "timemodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 309 "timemodule.c"
      case 5: // $bb5
        $0=0; //@line 310 "timemodule.c"
        __label__ = 8; break; //@line 310 "timemodule.c"
      case 6: // $bb6
        var $15=$pwhen_addr; //@line 311 "timemodule.c"
        var $16=$when; //@line 311 "timemodule.c"
        HEAP[$15]=$16; //@line 311 "timemodule.c"
        __label__ = 7; break; //@line 311 "timemodule.c"
      case 7: // $bb7
        $0=1; //@line 313 "timemodule.c"
        __label__ = 8; break; //@line 313 "timemodule.c"
      case 8: // $bb8
        var $17=$0; //@line 304 "timemodule.c"
        $retval=$17; //@line 304 "timemodule.c"
        var $retval9=$retval; //@line 304 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 304 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_gmtime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $when=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 320 "timemodule.c"
        var $2=_parse_time_double_args($1, __str22305, $when); //@line 320 "timemodule.c"
        var $3=($2)==0; //@line 320 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 320 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 321 "timemodule.c"
        __label__ = 3; break; //@line 321 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$when]; //@line 322 "timemodule.c"
        var $5=_time_convert($4, (FUNCTION_TABLE_OFFSET + 4)); //@line 322 "timemodule.c"
        $0=$5; //@line 322 "timemodule.c"
        __label__ = 3; break; //@line 322 "timemodule.c"
      case 3: // $bb2
        var $6=$0; //@line 321 "timemodule.c"
        $retval=$6; //@line 321 "timemodule.c"
        var $retval3=$retval; //@line 321 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 321 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_localtime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $when=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 336 "timemodule.c"
        var $2=_parse_time_double_args($1, __str23306, $when); //@line 336 "timemodule.c"
        var $3=($2)==0; //@line 336 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 336 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 337 "timemodule.c"
        __label__ = 3; break; //@line 337 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$when]; //@line 338 "timemodule.c"
        var $5=_time_convert($4, (FUNCTION_TABLE_OFFSET + 2)); //@line 338 "timemodule.c"
        $0=$5; //@line 338 "timemodule.c"
        __label__ = 3; break; //@line 338 "timemodule.c"
      case 3: // $bb2
        var $6=$0; //@line 337 "timemodule.c"
        $retval=$6; //@line 337 "timemodule.c"
        var $retval3=$retval; //@line 337 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 337 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gettmarg($args, $p) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr;
        var $p_addr;
        var $retval;
        var $0;
        var $y=__stackBase__;
        var $accept;
        $args_addr=$args;
        $p_addr=$p;
        var $1=$p_addr; //@line 352 "timemodule.c"
        var $2=$1; //@line 352 "timemodule.c"
        _llvm_memset_p0i8_i32($2, 0, 44, 1, 0); //@line 352 "timemodule.c"
        var $3=$p_addr; //@line 354 "timemodule.c"
        var $4=$3+32; //@line 354 "timemodule.c"
        var $5=$p_addr; //@line 354 "timemodule.c"
        var $6=$5+28; //@line 354 "timemodule.c"
        var $7=$p_addr; //@line 354 "timemodule.c"
        var $8=$7+24; //@line 354 "timemodule.c"
        var $9=$p_addr; //@line 354 "timemodule.c"
        var $10=$9; //@line 354 "timemodule.c"
        var $11=$p_addr; //@line 354 "timemodule.c"
        var $12=$11+4; //@line 354 "timemodule.c"
        var $13=$p_addr; //@line 354 "timemodule.c"
        var $14=$13+8; //@line 354 "timemodule.c"
        var $15=$p_addr; //@line 354 "timemodule.c"
        var $16=$15+12; //@line 354 "timemodule.c"
        var $17=$p_addr; //@line 354 "timemodule.c"
        var $18=$17+16; //@line 354 "timemodule.c"
        var $19=$args_addr; //@line 354 "timemodule.c"
        var $20=_PyArg_Parse($19, __str24307, allocate([$y,0,0,0,$18,0,0,0,$16,0,0,0,$14,0,0,0,$12,0,0,0,$10,0,0,0,$8,0,0,0,$6,0,0,0,$4,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 354 "timemodule.c"
        var $21=($20)==0; //@line 354 "timemodule.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 354 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 364 "timemodule.c"
        __label__ = 13; break; //@line 364 "timemodule.c"
      case 2: // $bb1
        var $22=HEAP[$y]; //@line 365 "timemodule.c"
        var $23=($22) <= 1899; //@line 365 "timemodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 365 "timemodule.c"
      case 3: // $bb2
        var $24=HEAP[_moddict]; //@line 367 "timemodule.c"
        var $25=_PyDict_GetItemString($24, __str25308); //@line 367 "timemodule.c"
        $accept=$25; //@line 367 "timemodule.c"
        var $26=$accept; //@line 368 "timemodule.c"
        var $27=($26)==0; //@line 368 "timemodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 368 "timemodule.c"
      case 4: // $bb3
        var $28=$accept; //@line 368 "timemodule.c"
        var $29=$28+4; //@line 368 "timemodule.c"
        var $30=HEAP[$29]; //@line 368 "timemodule.c"
        var $31=$30+84; //@line 368 "timemodule.c"
        var $32=HEAP[$31]; //@line 368 "timemodule.c"
        var $33=($32) & 8388608; //@line 368 "timemodule.c"
        var $34=($33)==0; //@line 368 "timemodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 368 "timemodule.c"
      case 5: // $bb4
        var $35=$accept; //@line 368 "timemodule.c"
        var $36=_PyInt_AsLong($35); //@line 368 "timemodule.c"
        var $37=($36)==0; //@line 368 "timemodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 368 "timemodule.c"
      case 6: // $bb5
        var $38=HEAP[_PyExc_ValueError]; //@line 370 "timemodule.c"
        _PyErr_SetString($38, __str26309); //@line 370 "timemodule.c"
        $0=0; //@line 372 "timemodule.c"
        __label__ = 13; break; //@line 372 "timemodule.c"
      case 7: // $bb6
        var $39=HEAP[$y]; //@line 374 "timemodule.c"
        var $40=($39) <= 68; //@line 374 "timemodule.c"
        var $41=HEAP[$y]; //@line 374 "timemodule.c"
        var $42=($41) > 99; //@line 374 "timemodule.c"
        var $or_cond=($40) | ($42);
        var $43=HEAP[$y]; //@line 376 "timemodule.c"
        if ($or_cond) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 374 "timemodule.c"
      case 8: // $bb8
        var $44=($43) + 1900; //@line 375 "timemodule.c"
        HEAP[$y]=$44; //@line 375 "timemodule.c"
        __label__ = 12; break; //@line 375 "timemodule.c"
      case 9: // $bb9
        var $45=($43) < 0; //@line 376 "timemodule.c"
        var $46=HEAP[$y]; //@line 376 "timemodule.c"
        var $47=($46) > 68; //@line 376 "timemodule.c"
        var $or_cond3=($45) | ($47);
        if ($or_cond3) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 376 "timemodule.c"
      case 10: // $bb11
        var $48=HEAP[$y]; //@line 377 "timemodule.c"
        var $49=($48) + 2000; //@line 377 "timemodule.c"
        HEAP[$y]=$49; //@line 377 "timemodule.c"
        __label__ = 12; break; //@line 377 "timemodule.c"
      case 11: // $bb12
        var $50=HEAP[_PyExc_ValueError]; //@line 379 "timemodule.c"
        _PyErr_SetString($50, __str27310); //@line 379 "timemodule.c"
        $0=0; //@line 381 "timemodule.c"
        __label__ = 13; break; //@line 381 "timemodule.c"
      case 12: // $bb13
        var $51=HEAP[$y]; //@line 384 "timemodule.c"
        var $52=($51) - 1900; //@line 384 "timemodule.c"
        var $53=$p_addr; //@line 384 "timemodule.c"
        var $54=$53+20; //@line 384 "timemodule.c"
        HEAP[$54]=$52; //@line 384 "timemodule.c"
        var $55=$p_addr; //@line 385 "timemodule.c"
        var $56=$55+16; //@line 385 "timemodule.c"
        var $57=HEAP[$56]; //@line 385 "timemodule.c"
        var $58=($57) - 1; //@line 385 "timemodule.c"
        var $59=$p_addr; //@line 385 "timemodule.c"
        var $60=$59+16; //@line 385 "timemodule.c"
        HEAP[$60]=$58; //@line 385 "timemodule.c"
        var $61=$p_addr; //@line 386 "timemodule.c"
        var $62=$61+24; //@line 386 "timemodule.c"
        var $63=HEAP[$62]; //@line 386 "timemodule.c"
        var $64=($63) + 1; //@line 386 "timemodule.c"
        var $65=($64) % 7; //@line 386 "timemodule.c"
        var $66=$p_addr; //@line 386 "timemodule.c"
        var $67=$66+24; //@line 386 "timemodule.c"
        HEAP[$67]=$65; //@line 386 "timemodule.c"
        var $68=$p_addr; //@line 387 "timemodule.c"
        var $69=$68+28; //@line 387 "timemodule.c"
        var $70=HEAP[$69]; //@line 387 "timemodule.c"
        var $71=($70) - 1; //@line 387 "timemodule.c"
        var $72=$p_addr; //@line 387 "timemodule.c"
        var $73=$72+28; //@line 387 "timemodule.c"
        HEAP[$73]=$71; //@line 387 "timemodule.c"
        $0=1; //@line 388 "timemodule.c"
        __label__ = 13; break; //@line 388 "timemodule.c"
      case 13: // $bb14
        var $74=$0; //@line 364 "timemodule.c"
        $retval=$74; //@line 364 "timemodule.c"
        var $retval15=$retval; //@line 364 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 364 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_strftime347($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tup=__stackBase__;
        var $buf=__stackBase__+4;
        var $fmt=__stackBase__+48;
        var $fmtlen;
        var $buflen;
        var $outbuf;
        var $i;
        var $tt=__stackBase__+52;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$tup]=0; //@line 395 "timemodule.c"
        $outbuf=0; //@line 399 "timemodule.c"
        var $buf1=$buf; //@line 402 "timemodule.c"
        _llvm_memset_p0i8_i32($buf1, 0, 44, 1, 0); //@line 402 "timemodule.c"
        var $1=$args_addr; //@line 404 "timemodule.c"
        var $2=_PyArg_ParseTuple($1, __str28311, allocate([$fmt,0,0,0,$tup,0,0,0], ["i8**",0,0,0,"%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 404 "timemodule.c"
        var $3=($2)==0; //@line 404 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 404 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 405 "timemodule.c"
        __label__ = 43; break; //@line 405 "timemodule.c"
      case 2: // $bb2
        var $4=HEAP[$tup]; //@line 407 "timemodule.c"
        var $5=($4)==0; //@line 407 "timemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 407 "timemodule.c"
      case 3: // $bb3
        var $6=_time(0); //@line 408 "timemodule.c"
        HEAP[$tt]=$6; //@line 408 "timemodule.c"
        var $7=_localtime($tt); //@line 409 "timemodule.c"
        var $buf4=$buf; //@line 409 "timemodule.c"
        var $8=$7; //@line 409 "timemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf4, $8, 44, 4, 0); //@line 409 "timemodule.c"
        __label__ = 6; break; //@line 409 "timemodule.c"
      case 4: // $bb5
        var $9=HEAP[$tup]; //@line 410 "timemodule.c"
        var $10=_gettmarg($9, $buf); //@line 410 "timemodule.c"
        var $11=($10)==0; //@line 410 "timemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 410 "timemodule.c"
      case 5: // $bb6
        $0=0; //@line 411 "timemodule.c"
        __label__ = 43; break; //@line 411 "timemodule.c"
      case 6: // $bb7
        var $12=$buf+16; //@line 437 "timemodule.c"
        var $13=HEAP[$12]; //@line 437 "timemodule.c"
        var $14=($13)==-1; //@line 437 "timemodule.c"
        var $15=$buf+16; //@line 438 "timemodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 437 "timemodule.c"
      case 7: // $bb8
        HEAP[$15]=0; //@line 438 "timemodule.c"
        __label__ = 11; break; //@line 438 "timemodule.c"
      case 8: // $bb9
        var $16=HEAP[$15]; //@line 439 "timemodule.c"
        var $17=($16) < 0; //@line 439 "timemodule.c"
        if ($17) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 439 "timemodule.c"
      case 9: // $bb10
        var $18=$buf+16; //@line 439 "timemodule.c"
        var $19=HEAP[$18]; //@line 439 "timemodule.c"
        var $20=($19) > 11; //@line 439 "timemodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 439 "timemodule.c"
      case 10: // $bb11
        var $21=HEAP[_PyExc_ValueError]; //@line 440 "timemodule.c"
        _PyErr_SetString($21, __str29312); //@line 440 "timemodule.c"
        $0=0; //@line 441 "timemodule.c"
        __label__ = 43; break; //@line 441 "timemodule.c"
      case 11: // $bb12
        var $22=$buf+12; //@line 443 "timemodule.c"
        var $23=HEAP[$22]; //@line 443 "timemodule.c"
        var $24=($23)==0; //@line 443 "timemodule.c"
        var $25=$buf+12; //@line 444 "timemodule.c"
        if ($24) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 443 "timemodule.c"
      case 12: // $bb13
        HEAP[$25]=1; //@line 444 "timemodule.c"
        __label__ = 16; break; //@line 444 "timemodule.c"
      case 13: // $bb14
        var $26=HEAP[$25]; //@line 445 "timemodule.c"
        var $27=($26) < 0; //@line 445 "timemodule.c"
        if ($27) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 445 "timemodule.c"
      case 14: // $bb15
        var $28=$buf+12; //@line 445 "timemodule.c"
        var $29=HEAP[$28]; //@line 445 "timemodule.c"
        var $30=($29) > 31; //@line 445 "timemodule.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 445 "timemodule.c"
      case 15: // $bb16
        var $31=HEAP[_PyExc_ValueError]; //@line 446 "timemodule.c"
        _PyErr_SetString($31, __str30313); //@line 446 "timemodule.c"
        $0=0; //@line 447 "timemodule.c"
        __label__ = 43; break; //@line 447 "timemodule.c"
      case 16: // $bb17
        var $32=$buf+8; //@line 449 "timemodule.c"
        var $33=HEAP[$32]; //@line 449 "timemodule.c"
        var $34=($33) < 0; //@line 449 "timemodule.c"
        if ($34) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 449 "timemodule.c"
      case 17: // $bb18
        var $35=$buf+8; //@line 449 "timemodule.c"
        var $36=HEAP[$35]; //@line 449 "timemodule.c"
        var $37=($36) > 23; //@line 449 "timemodule.c"
        if ($37) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 449 "timemodule.c"
      case 18: // $bb19
        var $38=HEAP[_PyExc_ValueError]; //@line 450 "timemodule.c"
        _PyErr_SetString($38, __str31314); //@line 450 "timemodule.c"
        $0=0; //@line 451 "timemodule.c"
        __label__ = 43; break; //@line 451 "timemodule.c"
      case 19: // $bb20
        var $39=$buf+4; //@line 453 "timemodule.c"
        var $40=HEAP[$39]; //@line 453 "timemodule.c"
        var $41=($40) < 0; //@line 453 "timemodule.c"
        if ($41) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 453 "timemodule.c"
      case 20: // $bb21
        var $42=$buf+4; //@line 453 "timemodule.c"
        var $43=HEAP[$42]; //@line 453 "timemodule.c"
        var $44=($43) > 59; //@line 453 "timemodule.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 453 "timemodule.c"
      case 21: // $bb22
        var $45=HEAP[_PyExc_ValueError]; //@line 454 "timemodule.c"
        _PyErr_SetString($45, __str32315); //@line 454 "timemodule.c"
        $0=0; //@line 455 "timemodule.c"
        __label__ = 43; break; //@line 455 "timemodule.c"
      case 22: // $bb23
        var $46=$buf; //@line 457 "timemodule.c"
        var $47=HEAP[$46]; //@line 457 "timemodule.c"
        var $48=($47) < 0; //@line 457 "timemodule.c"
        if ($48) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 457 "timemodule.c"
      case 23: // $bb24
        var $49=$buf; //@line 457 "timemodule.c"
        var $50=HEAP[$49]; //@line 457 "timemodule.c"
        var $51=($50) > 61; //@line 457 "timemodule.c"
        if ($51) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 457 "timemodule.c"
      case 24: // $bb25
        var $52=HEAP[_PyExc_ValueError]; //@line 458 "timemodule.c"
        _PyErr_SetString($52, __str33316); //@line 458 "timemodule.c"
        $0=0; //@line 459 "timemodule.c"
        __label__ = 43; break; //@line 459 "timemodule.c"
      case 25: // $bb26
        var $53=$buf+24; //@line 463 "timemodule.c"
        var $54=HEAP[$53]; //@line 463 "timemodule.c"
        var $55=($54) < 0; //@line 463 "timemodule.c"
        if ($55) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 463 "timemodule.c"
      case 26: // $bb27
        var $56=HEAP[_PyExc_ValueError]; //@line 464 "timemodule.c"
        _PyErr_SetString($56, __str34317); //@line 464 "timemodule.c"
        $0=0; //@line 465 "timemodule.c"
        __label__ = 43; break; //@line 465 "timemodule.c"
      case 27: // $bb28
        var $57=$buf+28; //@line 467 "timemodule.c"
        var $58=HEAP[$57]; //@line 467 "timemodule.c"
        var $59=($58)==-1; //@line 467 "timemodule.c"
        var $60=$buf+28; //@line 468 "timemodule.c"
        if ($59) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 467 "timemodule.c"
      case 28: // $bb29
        HEAP[$60]=0; //@line 468 "timemodule.c"
        __label__ = 32; break; //@line 468 "timemodule.c"
      case 29: // $bb30
        var $61=HEAP[$60]; //@line 469 "timemodule.c"
        var $62=($61) < 0; //@line 469 "timemodule.c"
        if ($62) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 469 "timemodule.c"
      case 30: // $bb31
        var $63=$buf+28; //@line 469 "timemodule.c"
        var $64=HEAP[$63]; //@line 469 "timemodule.c"
        var $65=($64) > 365; //@line 469 "timemodule.c"
        if ($65) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 469 "timemodule.c"
      case 31: // $bb32
        var $66=HEAP[_PyExc_ValueError]; //@line 470 "timemodule.c"
        _PyErr_SetString($66, __str35318); //@line 470 "timemodule.c"
        $0=0; //@line 471 "timemodule.c"
        __label__ = 43; break; //@line 471 "timemodule.c"
      case 32: // $bb33
        var $67=$buf+32; //@line 476 "timemodule.c"
        var $68=HEAP[$67]; //@line 476 "timemodule.c"
        var $69=($68) < -1; //@line 476 "timemodule.c"
        var $70=$buf+32; //@line 477 "timemodule.c"
        if ($69) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 476 "timemodule.c"
      case 33: // $bb34
        HEAP[$70]=-1; //@line 477 "timemodule.c"
        __label__ = 36; break; //@line 477 "timemodule.c"
      case 34: // $bb35
        var $71=HEAP[$70]; //@line 478 "timemodule.c"
        var $72=($71) > 1; //@line 478 "timemodule.c"
        if ($72) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 478 "timemodule.c"
      case 35: // $bb36
        var $73=$buf+32; //@line 479 "timemodule.c"
        HEAP[$73]=1; //@line 479 "timemodule.c"
        __label__ = 36; break; //@line 479 "timemodule.c"
      case 36: // $bb37
        var $74=HEAP[$fmt]; //@line 498 "timemodule.c"
        var $75=_strlen($74); //@line 498 "timemodule.c"
        $fmtlen=$75; //@line 498 "timemodule.c"
        $i=1024; //@line 503 "timemodule.c"
        __label__ = 37; break; //@line 503 "timemodule.c"
      case 37: // $bb38
        var $76=$i; //@line 504 "timemodule.c"
        var $77=_malloc($76); //@line 504 "timemodule.c"
        $outbuf=$77; //@line 504 "timemodule.c"
        var $78=($77)==0; //@line 505 "timemodule.c"
        if ($78) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 505 "timemodule.c"
      case 38: // $bb39
        var $79=_PyErr_NoMemory(); //@line 506 "timemodule.c"
        $0=$79; //@line 506 "timemodule.c"
        __label__ = 43; break; //@line 506 "timemodule.c"
      case 39: // $bb40
        var $80=HEAP[$fmt]; //@line 508 "timemodule.c"
        var $81=$outbuf; //@line 508 "timemodule.c"
        var $82=$i; //@line 508 "timemodule.c"
        var $83=_strftime($81, $82, $80, $buf); //@line 508 "timemodule.c"
        $buflen=$83; //@line 508 "timemodule.c"
        var $84=$buflen; //@line 509 "timemodule.c"
        var $85=($84)!=0; //@line 509 "timemodule.c"
        if ($85) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 509 "timemodule.c"
      case 40: // $bb41
        var $86=$fmtlen; //@line 509 "timemodule.c"
        var $87=($86) * 256; //@line 509 "timemodule.c"
        var $88=$i; //@line 509 "timemodule.c"
        var $89=($87) <= ($88); //@line 509 "timemodule.c"
        if ($89) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 509 "timemodule.c"
      case 41: // $bb42
        var $90=$buflen; //@line 516 "timemodule.c"
        var $91=$outbuf; //@line 516 "timemodule.c"
        var $92=_PyString_FromStringAndSize($91, $90); //@line 516 "timemodule.c"
        $ret=$92; //@line 516 "timemodule.c"
        var $93=$outbuf; //@line 517 "timemodule.c"
        _free($93); //@line 517 "timemodule.c"
        var $94=$ret; //@line 518 "timemodule.c"
        $0=$94; //@line 518 "timemodule.c"
        __label__ = 43; break; //@line 518 "timemodule.c"
      case 42: // $bb43
        var $95=$outbuf; //@line 520 "timemodule.c"
        _free($95); //@line 520 "timemodule.c"
        var $96=$i; //@line 503 "timemodule.c"
        var $97=$i; //@line 503 "timemodule.c"
        var $98=($97) + ($96); //@line 503 "timemodule.c"
        $i=$98; //@line 503 "timemodule.c"
        __label__ = 37; break; //@line 503 "timemodule.c"
      case 43: // $bb44
        var $99=$0; //@line 405 "timemodule.c"
        $retval=$99; //@line 405 "timemodule.c"
        var $retval45=$retval; //@line 405 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 405 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_strptime($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $strptime_module;
        var $strptime_result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_PyImport_ImportModuleNoBlock(__str228); //@line 543 "timemodule.c"
        $strptime_module=$1; //@line 543 "timemodule.c"
        var $2=$strptime_module; //@line 546 "timemodule.c"
        var $3=($2)==0; //@line 546 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 546 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 547 "timemodule.c"
        __label__ = 5; break; //@line 547 "timemodule.c"
      case 2: // $bb1
        var $4=$strptime_module; //@line 548 "timemodule.c"
        var $5=$args_addr; //@line 548 "timemodule.c"
        var $6=_PyObject_CallMethod($4, __str37320, __str35, allocate([$5,0,0,0], ["%struct.PyDateTime_TZInfo*",0,0,0], ALLOC_STACK)); //@line 548 "timemodule.c"
        $strptime_result=$6; //@line 548 "timemodule.c"
        var $7=$strptime_module; //@line 550 "timemodule.c"
        var $8=$7; //@line 550 "timemodule.c"
        var $9=HEAP[$8]; //@line 550 "timemodule.c"
        var $10=($9) - 1; //@line 550 "timemodule.c"
        var $11=$strptime_module; //@line 550 "timemodule.c"
        var $12=$11; //@line 550 "timemodule.c"
        HEAP[$12]=$10; //@line 550 "timemodule.c"
        var $13=$strptime_module; //@line 550 "timemodule.c"
        var $14=$13; //@line 550 "timemodule.c"
        var $15=HEAP[$14]; //@line 550 "timemodule.c"
        var $16=($15)==0; //@line 550 "timemodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 550 "timemodule.c"
      case 3: // $bb2
        var $17=$strptime_module; //@line 550 "timemodule.c"
        var $18=$17+4; //@line 550 "timemodule.c"
        var $19=HEAP[$18]; //@line 550 "timemodule.c"
        var $20=$19+24; //@line 550 "timemodule.c"
        var $21=HEAP[$20]; //@line 550 "timemodule.c"
        var $22=$strptime_module; //@line 550 "timemodule.c"
        FUNCTION_TABLE[$21]($22); //@line 550 "timemodule.c"
        __label__ = 4; break; //@line 550 "timemodule.c"
      case 4: // $bb3
        var $23=$strptime_result; //@line 551 "timemodule.c"
        $0=$23; //@line 551 "timemodule.c"
        __label__ = 5; break; //@line 551 "timemodule.c"
      case 5: // $bb4
        var $24=$0; //@line 547 "timemodule.c"
        $retval=$24; //@line 547 "timemodule.c"
        var $retval5=$retval; //@line 547 "timemodule.c"
        ;
        return $retval5; //@line 547 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_asctime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tup=__stackBase__;
        var $buf=__stackBase__+4;
        var $p;
        var $tt=__stackBase__+48;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$tup]=0; //@line 564 "timemodule.c"
        var $1=$args_addr; //@line 567 "timemodule.c"
        var $2=_PyArg_UnpackTuple($1, __str39322, 0, 1, allocate([$tup,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 567 "timemodule.c"
        var $3=($2)==0; //@line 567 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 567 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 568 "timemodule.c"
        __label__ = 11; break; //@line 568 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$tup]; //@line 569 "timemodule.c"
        var $5=($4)==0; //@line 569 "timemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 569 "timemodule.c"
      case 3: // $bb2
        var $6=_time(0); //@line 570 "timemodule.c"
        HEAP[$tt]=$6; //@line 570 "timemodule.c"
        var $7=_localtime($tt); //@line 571 "timemodule.c"
        var $buf3=$buf; //@line 571 "timemodule.c"
        var $8=$7; //@line 571 "timemodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, 44, 4, 0); //@line 571 "timemodule.c"
        __label__ = 6; break; //@line 571 "timemodule.c"
      case 4: // $bb4
        var $9=HEAP[$tup]; //@line 572 "timemodule.c"
        var $10=_gettmarg($9, $buf); //@line 572 "timemodule.c"
        var $11=($10)==0; //@line 572 "timemodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 572 "timemodule.c"
      case 5: // $bb5
        $0=0; //@line 573 "timemodule.c"
        __label__ = 11; break; //@line 573 "timemodule.c"
      case 6: // $bb6
        var $12=_asctime($buf); //@line 574 "timemodule.c"
        $p=$12; //@line 574 "timemodule.c"
        var $13=($12)==0; //@line 575 "timemodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 575 "timemodule.c"
      case 7: // $bb7
        var $14=HEAP[_PyExc_ValueError]; //@line 576 "timemodule.c"
        _PyErr_SetString($14, __str40323); //@line 576 "timemodule.c"
        $0=0; //@line 577 "timemodule.c"
        __label__ = 11; break; //@line 577 "timemodule.c"
      case 8: // $bb8
        var $15=$p; //@line 579 "timemodule.c"
        var $16=$15+24; //@line 579 "timemodule.c"
        var $17=HEAP[$16]; //@line 579 "timemodule.c"
        var $18=($17)==10; //@line 579 "timemodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 579 "timemodule.c"
      case 9: // $bb9
        var $19=$p; //@line 580 "timemodule.c"
        var $20=$19+24; //@line 580 "timemodule.c"
        HEAP[$20]=0; //@line 580 "timemodule.c"
        __label__ = 10; break; //@line 580 "timemodule.c"
      case 10: // $bb10
        var $21=$p; //@line 581 "timemodule.c"
        var $22=_PyString_FromString($21); //@line 581 "timemodule.c"
        $0=$22; //@line 581 "timemodule.c"
        __label__ = 11; break; //@line 581 "timemodule.c"
      case 11: // $bb11
        var $23=$0; //@line 568 "timemodule.c"
        $retval=$23; //@line 568 "timemodule.c"
        var $retval12=$retval; //@line 568 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 568 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_ctime($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ot=__stackBase__;
        var $tt=__stackBase__+4;
        var $p;
        var $dt;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$ot]=0; //@line 594 "timemodule.c"
        var $1=$args_addr; //@line 598 "timemodule.c"
        var $2=_PyArg_UnpackTuple($1, __str160, 0, 1, allocate([$ot,0,0,0], ["%struct.PyDateTime_TZInfo**",0,0,0], ALLOC_STACK)); //@line 598 "timemodule.c"
        var $3=($2)==0; //@line 598 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 598 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 599 "timemodule.c"
        __label__ = 14; break; //@line 599 "timemodule.c"
      case 2: // $bb1
        var $4=HEAP[$ot]; //@line 600 "timemodule.c"
        var $5=($4)==0; //@line 600 "timemodule.c"
        var $6=HEAP[$ot]; //@line 600 "timemodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 600 "timemodule.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 600 "timemodule.c"
      case 3: // $bb3
        var $8=_time(0); //@line 601 "timemodule.c"
        HEAP[$tt]=$8; //@line 601 "timemodule.c"
        __label__ = 9; break; //@line 601 "timemodule.c"
      case 4: // $bb4
        var $9=HEAP[$ot]; //@line 603 "timemodule.c"
        var $10=_PyFloat_AsDouble($9); //@line 603 "timemodule.c"
        $dt=$10; //@line 603 "timemodule.c"
        var $11=_PyErr_Occurred(); //@line 604 "timemodule.c"
        var $12=($11)!=0; //@line 604 "timemodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 604 "timemodule.c"
      case 5: // $bb5
        $0=0; //@line 605 "timemodule.c"
        __label__ = 14; break; //@line 605 "timemodule.c"
      case 6: // $bb6
        var $13=$dt; //@line 606 "timemodule.c"
        var $14=__PyTime_DoubleToTimet($13); //@line 606 "timemodule.c"
        HEAP[$tt]=$14; //@line 606 "timemodule.c"
        var $15=HEAP[$tt]; //@line 607 "timemodule.c"
        var $16=($15)==-1; //@line 607 "timemodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 607 "timemodule.c"
      case 7: // $bb7
        var $17=_PyErr_Occurred(); //@line 607 "timemodule.c"
        var $18=($17)!=0; //@line 607 "timemodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 607 "timemodule.c"
      case 8: // $bb8
        $0=0; //@line 608 "timemodule.c"
        __label__ = 14; break; //@line 608 "timemodule.c"
      case 9: // $bb9
        var $19=_ctime($tt); //@line 610 "timemodule.c"
        $p=$19; //@line 610 "timemodule.c"
        var $20=($19)==0; //@line 611 "timemodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 611 "timemodule.c"
      case 10: // $bb10
        var $21=HEAP[_PyExc_ValueError]; //@line 612 "timemodule.c"
        _PyErr_SetString($21, __str42325); //@line 612 "timemodule.c"
        $0=0; //@line 613 "timemodule.c"
        __label__ = 14; break; //@line 613 "timemodule.c"
      case 11: // $bb11
        var $22=$p; //@line 615 "timemodule.c"
        var $23=$22+24; //@line 615 "timemodule.c"
        var $24=HEAP[$23]; //@line 615 "timemodule.c"
        var $25=($24)==10; //@line 615 "timemodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 615 "timemodule.c"
      case 12: // $bb12
        var $26=$p; //@line 616 "timemodule.c"
        var $27=$26+24; //@line 616 "timemodule.c"
        HEAP[$27]=0; //@line 616 "timemodule.c"
        __label__ = 13; break; //@line 616 "timemodule.c"
      case 13: // $bb13
        var $28=$p; //@line 617 "timemodule.c"
        var $29=_PyString_FromString($28); //@line 617 "timemodule.c"
        $0=$29; //@line 617 "timemodule.c"
        __label__ = 14; break; //@line 617 "timemodule.c"
      case 14: // $bb14
        var $30=$0; //@line 599 "timemodule.c"
        $retval=$30; //@line 599 "timemodule.c"
        var $retval15=$retval; //@line 599 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 599 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_mktime($self, $tup) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tup_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $tt;
        $self_addr=$self;
        $tup_addr=$tup;
        var $1=$tup_addr; //@line 633 "timemodule.c"
        var $2=_gettmarg($1, $buf); //@line 633 "timemodule.c"
        var $3=($2)==0; //@line 633 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 633 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 634 "timemodule.c"
        __label__ = 6; break; //@line 634 "timemodule.c"
      case 2: // $bb1
        var $4=$buf+24; //@line 635 "timemodule.c"
        HEAP[$4]=-1; //@line 635 "timemodule.c"
        var $5=_mktime($buf); //@line 636 "timemodule.c"
        $tt=$5; //@line 636 "timemodule.c"
        var $6=$tt; //@line 639 "timemodule.c"
        var $7=($6)==-1; //@line 639 "timemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 639 "timemodule.c"
      case 3: // $bb2
        var $8=$buf+24; //@line 639 "timemodule.c"
        var $9=HEAP[$8]; //@line 639 "timemodule.c"
        var $10=($9)==-1; //@line 639 "timemodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 639 "timemodule.c"
      case 4: // $bb3
        var $11=HEAP[_PyExc_OverflowError]; //@line 640 "timemodule.c"
        _PyErr_SetString($11, __str43326); //@line 640 "timemodule.c"
        $0=0; //@line 642 "timemodule.c"
        __label__ = 6; break; //@line 642 "timemodule.c"
      case 5: // $bb4
        var $12=$tt; //@line 644 "timemodule.c"
        var $13=($12); //@line 644 "timemodule.c"
        var $14=_PyFloat_FromDouble($13); //@line 644 "timemodule.c"
        $0=$14; //@line 644 "timemodule.c"
        __label__ = 6; break; //@line 644 "timemodule.c"
      case 6: // $bb5
        var $15=$0; //@line 634 "timemodule.c"
        $retval=$15; //@line 634 "timemodule.c"
        var $retval6=$retval; //@line 634 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 634 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _time_tzset($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $m;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=_PyImport_ImportModuleNoBlock(__str92); //@line 661 "timemodule.c"
        $m=$1; //@line 661 "timemodule.c"
        var $2=$m; //@line 662 "timemodule.c"
        var $3=($2)==0; //@line 662 "timemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 662 "timemodule.c"
      case 1: // $bb
        $0=0; //@line 663 "timemodule.c"
        __label__ = 5; break; //@line 663 "timemodule.c"
      case 2: // $bb1
        _tzset(); //@line 666 "timemodule.c"
        var $4=$m; //@line 669 "timemodule.c"
        _inittimezone($4); //@line 669 "timemodule.c"
        var $5=$m; //@line 670 "timemodule.c"
        var $6=$5; //@line 670 "timemodule.c"
        var $7=HEAP[$6]; //@line 670 "timemodule.c"
        var $8=($7) - 1; //@line 670 "timemodule.c"
        var $9=$m; //@line 670 "timemodule.c"
        var $10=$9; //@line 670 "timemodule.c"
        HEAP[$10]=$8; //@line 670 "timemodule.c"
        var $11=$m; //@line 670 "timemodule.c"
        var $12=$11; //@line 670 "timemodule.c"
        var $13=HEAP[$12]; //@line 670 "timemodule.c"
        var $14=($13)==0; //@line 670 "timemodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 670 "timemodule.c"
      case 3: // $bb2
        var $15=$m; //@line 670 "timemodule.c"
        var $16=$15+4; //@line 670 "timemodule.c"
        var $17=HEAP[$16]; //@line 670 "timemodule.c"
        var $18=$17+24; //@line 670 "timemodule.c"
        var $19=HEAP[$18]; //@line 670 "timemodule.c"
        var $20=$m; //@line 670 "timemodule.c"
        FUNCTION_TABLE[$19]($20); //@line 670 "timemodule.c"
        __label__ = 4; break; //@line 670 "timemodule.c"
      case 4: // $bb3
        var $21=HEAP[__Py_NoneStruct]; //@line 672 "timemodule.c"
        var $22=($21) + 1; //@line 672 "timemodule.c"
        HEAP[__Py_NoneStruct]=$22; //@line 672 "timemodule.c"
        $0=__Py_NoneStruct; //@line 673 "timemodule.c"
        __label__ = 5; break; //@line 673 "timemodule.c"
      case 5: // $bb4
        var $23=$0; //@line 663 "timemodule.c"
        $retval=$23; //@line 663 "timemodule.c"
        var $retval5=$retval; //@line 663 "timemodule.c"
        ;
        return $retval5; //@line 663 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inittimezone($m) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m_addr;
        var $iftmp_53;
        var $iftmp_51;
        var $t=__stackBase__;
        var $p;
        var $janzone;
        var $julyzone;
        var $janname=__stackBase__+4;
        var $julyname=__stackBase__+14;
        $m_addr=$m;
        var $0=_time(0); //@line 735 "timemodule.c"
        var $1=((($0)/31557600)|0); //@line 735 "timemodule.c"
        var $2=($1) * 31557600; //@line 735 "timemodule.c"
        HEAP[$t]=$2; //@line 735 "timemodule.c"
        var $3=_localtime($t); //@line 736 "timemodule.c"
        $p=$3; //@line 736 "timemodule.c"
        var $4=$p; //@line 737 "timemodule.c"
        var $5=$4+36; //@line 737 "timemodule.c"
        var $6=HEAP[$5]; //@line 737 "timemodule.c"
        var $7=0 - ($6); //@line 737 "timemodule.c"
        $janzone=$7; //@line 737 "timemodule.c"
        var $8=$p; //@line 738 "timemodule.c"
        var $9=$8+40; //@line 738 "timemodule.c"
        var $10=HEAP[$9]; //@line 738 "timemodule.c"
        var $11=($10)!=0; //@line 738 "timemodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "timemodule.c"
      case 1: // $bb
        var $12=$p; //@line 738 "timemodule.c"
        var $13=$12+40; //@line 738 "timemodule.c"
        var $14=HEAP[$13]; //@line 738 "timemodule.c"
        $iftmp_51=$14; //@line 738 "timemodule.c"
        __label__ = 3; break; //@line 738 "timemodule.c"
      case 2: // $bb1
        $iftmp_51=__str45328; //@line 738 "timemodule.c"
        __label__ = 3; break; //@line 738 "timemodule.c"
      case 3: // $bb2
        var $janname3=$janname; //@line 738 "timemodule.c"
        var $15=$iftmp_51; //@line 738 "timemodule.c"
        var $16=_strncpy($janname3, $15, 9); //@line 738 "timemodule.c"
        var $17=$janname+9; //@line 739 "timemodule.c"
        HEAP[$17]=0; //@line 739 "timemodule.c"
        var $18=HEAP[$t]; //@line 740 "timemodule.c"
        var $19=($18) + 15778800; //@line 740 "timemodule.c"
        HEAP[$t]=$19; //@line 740 "timemodule.c"
        var $20=_localtime($t); //@line 741 "timemodule.c"
        $p=$20; //@line 741 "timemodule.c"
        var $21=$p; //@line 742 "timemodule.c"
        var $22=$21+36; //@line 742 "timemodule.c"
        var $23=HEAP[$22]; //@line 742 "timemodule.c"
        var $24=0 - ($23); //@line 742 "timemodule.c"
        $julyzone=$24; //@line 742 "timemodule.c"
        var $25=$p; //@line 743 "timemodule.c"
        var $26=$25+40; //@line 743 "timemodule.c"
        var $27=HEAP[$26]; //@line 743 "timemodule.c"
        var $28=($27)!=0; //@line 743 "timemodule.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 743 "timemodule.c"
      case 4: // $bb4
        var $29=$p; //@line 743 "timemodule.c"
        var $30=$29+40; //@line 743 "timemodule.c"
        var $31=HEAP[$30]; //@line 743 "timemodule.c"
        $iftmp_53=$31; //@line 743 "timemodule.c"
        __label__ = 6; break; //@line 743 "timemodule.c"
      case 5: // $bb5
        $iftmp_53=__str45328; //@line 743 "timemodule.c"
        __label__ = 6; break; //@line 743 "timemodule.c"
      case 6: // $bb6
        var $julyname7=$julyname; //@line 743 "timemodule.c"
        var $32=$iftmp_53; //@line 743 "timemodule.c"
        var $33=_strncpy($julyname7, $32, 9); //@line 743 "timemodule.c"
        var $34=$julyname+9; //@line 744 "timemodule.c"
        HEAP[$34]=0; //@line 744 "timemodule.c"
        var $35=$janzone; //@line 746 "timemodule.c"
        var $36=$julyzone; //@line 746 "timemodule.c"
        var $37=($35) < ($36); //@line 746 "timemodule.c"
        var $38=$m_addr; //@line 748 "timemodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 746 "timemodule.c"
      case 7: // $bb8
        var $39=$julyzone; //@line 748 "timemodule.c"
        var $40=_PyModule_AddIntConstant($38, __str46329, $39); //@line 748 "timemodule.c"
        var $41=$m_addr; //@line 749 "timemodule.c"
        var $42=$janzone; //@line 749 "timemodule.c"
        var $43=_PyModule_AddIntConstant($41, __str47330, $42); //@line 749 "timemodule.c"
        var $44=$janzone; //@line 750 "timemodule.c"
        var $45=$julyzone; //@line 750 "timemodule.c"
        var $46=($44)!=($45); //@line 750 "timemodule.c"
        var $47=($46); //@line 750 "timemodule.c"
        var $48=$m_addr; //@line 750 "timemodule.c"
        var $49=_PyModule_AddIntConstant($48, __str48331, $47); //@line 750 "timemodule.c"
        var $julyname9=$julyname; //@line 752 "timemodule.c"
        var $janname10=$janname; //@line 752 "timemodule.c"
        var $50=_Py_BuildValue(__str49332, allocate([$julyname9,0,0,0,$janname10,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 752 "timemodule.c"
        var $51=$m_addr; //@line 752 "timemodule.c"
        var $52=_PyModule_AddObject($51, __str45, $50); //@line 752 "timemodule.c"
        __label__ = 9; break; //@line 752 "timemodule.c"
      case 8: // $bb11
        var $53=$janzone; //@line 756 "timemodule.c"
        var $54=_PyModule_AddIntConstant($38, __str46329, $53); //@line 756 "timemodule.c"
        var $55=$m_addr; //@line 757 "timemodule.c"
        var $56=$julyzone; //@line 757 "timemodule.c"
        var $57=_PyModule_AddIntConstant($55, __str47330, $56); //@line 757 "timemodule.c"
        var $58=$janzone; //@line 758 "timemodule.c"
        var $59=$julyzone; //@line 758 "timemodule.c"
        var $60=($58)!=($59); //@line 758 "timemodule.c"
        var $61=($60); //@line 758 "timemodule.c"
        var $62=$m_addr; //@line 758 "timemodule.c"
        var $63=_PyModule_AddIntConstant($62, __str48331, $61); //@line 758 "timemodule.c"
        var $janname12=$janname; //@line 760 "timemodule.c"
        var $julyname13=$julyname; //@line 760 "timemodule.c"
        var $64=_Py_BuildValue(__str49332, allocate([$janname12,0,0,0,$julyname13,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 760 "timemodule.c"
        var $65=$m_addr; //@line 760 "timemodule.c"
        var $66=_PyModule_AddObject($65, __str45, $64); //@line 760 "timemodule.c"
        __label__ = 9; break; //@line 760 "timemodule.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 776 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inittime() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $iftmp_56;
        var $iftmp_54;
        var $m;
        var $p;
        var $0=_Py_InitModule4(__str92, _time_methods342, _module_doc, 0, 1013); //@line 854 "timemodule.c"
        $m=$0; //@line 854 "timemodule.c"
        var $1=$m; //@line 855 "timemodule.c"
        var $2=($1)==0; //@line 855 "timemodule.c"
        if ($2) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 855 "timemodule.c"
      case 1: // $bb
        var $3=HEAP[_Py_IgnoreEnvironmentFlag]; //@line 859 "timemodule.c"
        var $4=($3)==0; //@line 859 "timemodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 859 "timemodule.c"
      case 2: // $bb3_thread
        $iftmp_54=0; //@line 859 "timemodule.c"
        $p=0; //@line 859 "timemodule.c"
        __label__ = 5; break;
      case 3: // $bb3
        var $5=_getenv(__str59343); //@line 859 "timemodule.c"
        $iftmp_54=$5; //@line 859 "timemodule.c"
        $p=$5; //@line 859 "timemodule.c"
        var $6=($5)==0; //@line 860 "timemodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 860 "timemodule.c"
      case 4: // $bb4
        var $7=$p; //@line 860 "timemodule.c"
        var $8=HEAP[$7]; //@line 860 "timemodule.c"
        var $9=($8)==0; //@line 860 "timemodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 860 "timemodule.c"
      case 5: // $bb5
        $iftmp_56=1; //@line 860 "timemodule.c"
        __label__ = 7; break; //@line 860 "timemodule.c"
      case 6: // $bb6
        $iftmp_56=0; //@line 860 "timemodule.c"
        __label__ = 7; break; //@line 860 "timemodule.c"
      case 7: // $bb7
        var $10=$m; //@line 860 "timemodule.c"
        var $11=$iftmp_56; //@line 860 "timemodule.c"
        var $12=_PyModule_AddIntConstant($10, __str25308, $11); //@line 860 "timemodule.c"
        var $13=$m; //@line 862 "timemodule.c"
        var $14=_PyModule_GetDict($13); //@line 862 "timemodule.c"
        HEAP[_moddict]=$14; //@line 862 "timemodule.c"
        var $15=HEAP[_moddict]; //@line 863 "timemodule.c"
        var $16=$15; //@line 863 "timemodule.c"
        var $17=HEAP[$16]; //@line 863 "timemodule.c"
        var $18=($17) + 1; //@line 863 "timemodule.c"
        var $19=$15; //@line 863 "timemodule.c"
        HEAP[$19]=$18; //@line 863 "timemodule.c"
        var $20=$m; //@line 866 "timemodule.c"
        _inittimezone($20); //@line 866 "timemodule.c"
        var $_b=HEAP[_initialized_b];
        var $21=($_b);
        var $22=($21)==0; //@line 877 "timemodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 877 "timemodule.c"
      case 8: // $bb8
        _PyStructSequence_InitType(_StructTimeType, _struct_time_type_desc); //@line 878 "timemodule.c"
        __label__ = 9; break; //@line 878 "timemodule.c"
      case 9: // $bb9
        var $23=HEAP[_StructTimeType]; //@line 881 "timemodule.c"
        var $24=($23) + 1; //@line 881 "timemodule.c"
        HEAP[_StructTimeType]=$24; //@line 881 "timemodule.c"
        var $25=$m; //@line 882 "timemodule.c"
        var $26=_PyModule_AddObject($25, __str100, _StructTimeType); //@line 882 "timemodule.c"
        HEAP[_initialized_b]=1;
        __label__ = 10; break; //@line 883 "timemodule.c"
      case 10: // $return
        ;
        return; //@line 856 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _floattime() {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $t=__stackBase__;
        var $t2=__stackBase__+8;
        var $1=_gettimeofday($t, 0); //@line 907 "timemodule.c"
        var $2=($1)==0; //@line 907 "timemodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 907 "timemodule.c"
      case 1: // $bb
        var $3=$t; //@line 908 "timemodule.c"
        var $4=HEAP[$3]; //@line 908 "timemodule.c"
        var $5=($4); //@line 908 "timemodule.c"
        var $6=$t+4; //@line 908 "timemodule.c"
        var $7=HEAP[$6]; //@line 908 "timemodule.c"
        var $8=($7); //@line 908 "timemodule.c"
        var $9=($8) * 0.000001; //@line 908 "timemodule.c"
        var $10=($5) + ($9); //@line 908 "timemodule.c"
        $0=$10; //@line 908 "timemodule.c"
        __label__ = 3; break; //@line 908 "timemodule.c"
      case 2: // $bb1
        var $11=_ftime($t2); //@line 916 "timemodule.c"
        var $12=$t2; //@line 917 "timemodule.c"
        var $13=HEAP[$12]; //@line 917 "timemodule.c"
        var $14=($13); //@line 917 "timemodule.c"
        var $15=$t2+4; //@line 917 "timemodule.c"
        var $16=HEAP[$15]; //@line 917 "timemodule.c"
        var $17=($16); //@line 917 "timemodule.c"
        var $18=($17) * 0.001; //@line 917 "timemodule.c"
        var $19=($14) + ($18); //@line 917 "timemodule.c"
        $0=$19; //@line 917 "timemodule.c"
        __label__ = 3; break; //@line 917 "timemodule.c"
      case 3: // $bb3
        var $20=$0; //@line 908 "timemodule.c"
        $retval=$20; //@line 908 "timemodule.c"
        var $retval4=$retval; //@line 908 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 908 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _floatsleep($secs) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $secs_addr;
        var $retval;
        var $0;
        var $t=__stackBase__;
        var $frac;
        $secs_addr=$secs;
        var $1=$secs_addr; //@line 938 "timemodule.c"
        var $2=_fmod($1, 1); //@line 938 "timemodule.c"
        $frac=$2; //@line 938 "timemodule.c"
        var $3=$secs_addr; //@line 939 "timemodule.c"
        var $4=_floor($3); //@line 939 "timemodule.c"
        $secs_addr=$4; //@line 939 "timemodule.c"
        var $5=$secs_addr; //@line 940 "timemodule.c"
        var $6=((($5))|0); //@line 940 "timemodule.c"
        var $7=$t; //@line 940 "timemodule.c"
        HEAP[$7]=$6; //@line 940 "timemodule.c"
        var $8=$frac; //@line 941 "timemodule.c"
        var $9=($8) * 1000000; //@line 941 "timemodule.c"
        var $10=((($9))|0); //@line 941 "timemodule.c"
        var $11=$t+4; //@line 941 "timemodule.c"
        HEAP[$11]=$10; //@line 941 "timemodule.c"
        var $12=_select(0, 0, 0, 0, $t); //@line 943 "timemodule.c"
        var $13=($12)!=0; //@line 943 "timemodule.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 943 "timemodule.c"
      case 1: // $bb
        var $14=___errno_location(); //@line 945 "timemodule.c"
        var $15=HEAP[$14]; //@line 945 "timemodule.c"
        var $16=($15)!=4; //@line 945 "timemodule.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 945 "timemodule.c"
      case 2: // $bb1
        var $17=HEAP[_PyExc_IOError]; //@line 950 "timemodule.c"
        var $18=_PyErr_SetFromErrno($17); //@line 950 "timemodule.c"
        $0=-1; //@line 951 "timemodule.c"
        __label__ = 4; break; //@line 951 "timemodule.c"
      case 3: // $bb2
        $0=0; //@line 1051 "timemodule.c"
        __label__ = 4; break; //@line 1051 "timemodule.c"
      case 4: // $bb3
        var $19=$0; //@line 951 "timemodule.c"
        $retval=$19; //@line 951 "timemodule.c"
        var $retval4=$retval; //@line 951 "timemodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 951 "timemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_localtime,0,_gmtime,0,_delta_total_seconds,0,_delta_reduce,0,_delta_add,0,_delta_subtract,0,_delta_multiply,0,_delta_divide,0,_delta_negative,0,_delta_positive,0,_delta_abs,0,_delta_nonzero,0,_delta_repr,0,_delta_hash,0,_delta_str,0,_PyObject_GenericGetAttr,0,_delta_richcompare,0,_delta_new,0,_date_year,0,_date_month,0,_date_day,0,_date_fromtimestamp,0,_date_fromordinal,0,_date_today,0,_date_ctime,0,_date_strftime,0,_date_format,0,_date_timetuple,0,_date_isocalendar,0,_date_isoformat,0,_date_isoweekday,0,_date_toordinal,0,_date_weekday,0,_date_replace,0,_date_reduce,0,_date_add,0,_date_subtract,0,_date_repr,0,_date_hash,0,_date_str,0,_date_richcompare,0,_date_new,0,_tzinfo_tzname,0,_tzinfo_utcoffset,0,_tzinfo_dst,0,_tzinfo_fromutc,0,_tzinfo_reduce,0,_PyType_GenericNew,0,_time_hour,0,_time_minute,0,_py_time_second,0,_time_microsecond,0,_time_tzinfo,0,_time_isoformat,0,_time_strftime,0,_time_utcoffset,0,_time_tzname,0,_time_dst,0,_time_replace,0,_time_reduce,0,_time_nonzero,0,_time_dealloc,0,_time_repr,0,_time_hash,0,_time_str,0,_time_richcompare,0,_time_alloc,0,_time_new,0,_datetime_hour,0,_datetime_minute,0,_datetime_second,0,_datetime_microsecond,0,_datetime_tzinfo,0,_datetime_now,0,_datetime_utcnow,0,_datetime_fromtimestamp,0,_datetime_utcfromtimestamp,0,_datetime_strptime,0,_datetime_combine,0,_datetime_getdate,0,_datetime_gettime,0,_datetime_gettimetz,0,_datetime_ctime,0,_datetime_timetuple,0,_datetime_utctimetuple,0,_datetime_isoformat,0,_datetime_utcoffset,0,_datetime_tzname,0,_datetime_dst,0,_datetime_replace,0,_datetime_astimezone,0,_datetime_reduce,0,_datetime_add,0,_datetime_subtract,0,_datetime_dealloc,0,_datetime_repr,0,_datetime_hash,0,_datetime_str,0,_datetime_richcompare,0,_datetime_alloc,0,_datetime_new,0,_new_date_ex,0,_new_datetime_ex,0,_new_time_ex,0,_new_delta_ex,0,_time_time346,0,_time_clock,0,_time_sleep,0,_time_gmtime,0,_time_localtime,0,_time_asctime,0,_time_ctime,0,_time_mktime,0,_time_strftime347,0,_time_strptime,0,_time_tzset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([121,32,62,32,48,0] /* y > 0\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,100,97,116,101,116,105,109,101,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/d */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8440=allocate([100,105,118,109,111,100,0] /* divmod\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([48,32,60,61,32,42,114,32,38,38,32,42,114,32,60,32,121,0] /* 0 <= _r && _r < y\00 */, "i8", ALLOC_NORMAL);
__days_in_month=allocate([0, 0, 0, 0, 31, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__days_before_month=allocate([0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 59, 0, 0, 0, 90, 0, 0, 0, 120, 0, 0, 0, 151, 0, 0, 0, 181, 0, 0, 0, 212, 0, 0, 0, 243, 0, 0, 0, 273, 0, 0, 0, 304, 0, 0, 0, 334, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str3=allocate([109,111,110,116,104,32,62,61,32,49,0] /* month >= 1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8488=allocate([100,97,121,115,95,105,110,95,109,111,110,116,104,0] /* days_in_month\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([109,111,110,116,104,32,60,61,32,49,50,0] /* month <= 12\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8505=allocate([100,97,121,115,95,98,101,102,111,114,101,95,109,111,110,116,104,0] /* days_before_month\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([121,101,97,114,32,62,61,32,48,0] /* year >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8522=allocate([100,97,121,115,95,98,101,102,111,114,101,95,121,101,97,114,0] /* days_before_year\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([121,32,61,61,32,45,49,0] /* y == -1\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([111,114,100,105,110,97,108,32,62,61,32,49,0] /* ordinal >= 1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8550=allocate([111,114,100,95,116,111,95,121,109,100,0] /* ord_to_ymd\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([110,32,61,61,32,48,0] /* n == 0\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([108,101,97,112,121,101,97,114,32,61,61,32,105,115,95,108,101,97,112,40,42,121,101,97,114,41,0] /* leapyear == is_leap( */, "i8", ALLOC_NORMAL);
__str10=allocate([48,32,60,61,32,110,0] /* 0 <= n\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([110,32,60,32,100,97,121,115,95,105,110,95,109,111,110,116,104,40,42,121,101,97,114,44,32,42,109,111,110,116,104,41,0] /* n < days_in_month(_y */, "i8", ALLOC_NORMAL);
__str12=allocate([100,97,121,115,61,37,100,59,32,109,117,115,116,32,104,97,118,101,32,109,97,103,110,105,116,117,100,101,32,60,61,32,37,100,0] /* days=%d; must have m */, "i8", ALLOC_NORMAL);
__str13=allocate([121,101,97,114,32,105,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* year is out of range */, "i8", ALLOC_NORMAL);
__str14=allocate([109,111,110,116,104,32,109,117,115,116,32,98,101,32,105,110,32,49,46,46,49,50,0] /* month must be in 1.. */, "i8", ALLOC_NORMAL);
__str15=allocate([100,97,121,32,105,115,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,109,111,110,116,104,0] /* day is out of range  */, "i8", ALLOC_NORMAL);
__str16=allocate([104,111,117,114,32,109,117,115,116,32,98,101,32,105,110,32,48,46,46,50,51,0] /* hour must be in 0..2 */, "i8", ALLOC_NORMAL);
__str17=allocate([109,105,110,117,116,101,32,109,117,115,116,32,98,101,32,105,110,32,48,46,46,53,57,0] /* minute must be in 0. */, "i8", ALLOC_NORMAL);
__str18=allocate([115,101,99,111,110,100,32,109,117,115,116,32,98,101,32,105,110,32,48,46,46,53,57,0] /* second must be in 0. */, "i8", ALLOC_NORMAL);
__str19=allocate([109,105,99,114,111,115,101,99,111,110,100,32,109,117,115,116,32,98,101,32,105,110,32,48,46,46,57,57,57,57,57,57,0] /* microsecond must be  */, "i8", ALLOC_NORMAL);
__str20=allocate([102,97,99,116,111,114,32,62,32,48,0] /* factor > 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8694=allocate([110,111,114,109,97,108,105,122,101,95,112,97,105,114,0] /* normalize_pair\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([108,111,32,33,61,32,104,105,0] /* lo != hi\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([33,32,40,40,40,40,110,101,119,95,104,105,41,32,94,32,40,42,104,105,41,41,32,38,32,40,40,110,101,119,95,104,105,41,32,94,32,40,110,117,109,95,104,105,41,41,41,32,60,32,48,41,0] /* ! ((((new_hi) ^ (_hi */, "i8", ALLOC_NORMAL);
__str23=allocate([48,32,60,61,32,42,108,111,32,38,38,32,42,108,111,32,60,32,102,97,99,116,111,114,0] /* 0 <= _lo && _lo < fa */, "i8", ALLOC_NORMAL);
__str24=allocate([48,32,60,61,32,42,115,32,38,38,32,42,115,32,60,32,50,52,42,51,54,48,48,0] /* 0 <= _s && _s < 24_3 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8725=allocate([110,111,114,109,97,108,105,122,101,95,100,95,115,95,117,115,0] /* normalize_d_s_us\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([48,32,60,61,32,42,117,115,32,38,38,32,42,117,115,32,60,32,49,48,48,48,48,48,48,0] /* 0 <= _us && _us < 10 */, "i8", ALLOC_NORMAL);
__str26=allocate([49,32,60,61,32,42,109,32,38,38,32,42,109,32,60,61,32,49,50,0] /* 1 <= _m && _m <= 12\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8752=allocate([110,111,114,109,97,108,105,122,101,95,121,95,109,95,100,0] /* normalize_y_m_d\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([42,109,32,62,32,48,0] /* _m > 0\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([42,100,32,62,32,48,0] /* _d > 0\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([100,97,116,101,32,118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* date value out of ra */, "i8", ALLOC_NORMAL);
__str30=allocate([48,32,60,61,32,115,101,99,111,110,100,115,32,38,38,32,115,101,99,111,110,100,115,32,60,32,50,52,42,51,54,48,48,0] /* 0 <= seconds && seco */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8976=allocate([110,101,119,95,100,101,108,116,97,95,101,120,0] /* new_delta_ex\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([48,32,60,61,32,109,105,99,114,111,115,101,99,111,110,100,115,32,38,38,32,109,105,99,114,111,115,101,99,111,110,100,115,32,60,32,49,48,48,48,48,48,48,0] /* 0 <= microseconds && */, "i8", ALLOC_NORMAL);
__str32=allocate([116,122,105,110,102,111,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,78,111,110,101,32,111,114,32,111,102,32,97,32,116,122,105,110,102,111,32,115,117,98,99,108,97,115,115,44,32,110,111,116,32,116,121,112,101,32,39,37,115,39,0] /* tzinfo argument must */, "i8", ALLOC_NORMAL);
__str33=allocate([116,122,105,110,102,111,32,38,38,32,109,101,116,104,110,97,109,101,32,38,38,32,116,122,105,110,102,111,97,114,103,0] /* tzinfo && methname & */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9023=allocate([99,97,108,108,95,116,122,105,110,102,111,95,109,101,116,104,111,100,0] /* call_tzinfo_method\0 */, "i8", ALLOC_NORMAL);
__str34=allocate([99,104,101,99,107,95,116,122,105,110,102,111,95,115,117,98,99,108,97,115,115,40,116,122,105,110,102,111,41,32,62,61,32,48,0] /* check_tzinfo_subclas */, "i8", ALLOC_NORMAL);
__str35=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([116,122,105,110,102,111,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* tzinfo != ((void _)0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9075=allocate([99,97,108,108,95,117,116,99,95,116,122,105,110,102,111,95,109,101,116,104,111,100,0] /* call_utc_tzinfo_meth */, "i8", ALLOC_NORMAL);
__str37=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,116,122,105,110,102,111,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,68,97,116,101,84,105,109,101,95,84,90,73,110,102,111,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,116,122,105,110,102,111,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,68,97,116,101,84,105,109,101,95,84,90,73,110,102,111,84,121,112,101,41,41,41,0] /* ((((PyObject_)(tzinf */, "i8", ALLOC_NORMAL);
__str38=allocate([116,122,105,110,102,111,97,114,103,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* tzinfoarg != ((void  */, "i8", ALLOC_NORMAL);
__str39=allocate([116,122,105,110,102,111,46,37,115,40,41,32,109,117,115,116,32,114,101,116,117,114,110,32,97,32,119,104,111,108,101,32,110,117,109,98,101,114,32,111,102,32,109,105,110,117,116,101,115,0] /* tzinfo.%s() must ret */, "i8", ALLOC_NORMAL);
__str40=allocate([116,122,105,110,102,111,46,37,115,40,41,32,109,117,115,116,32,114,101,116,117,114,110,32,78,111,110,101,32,111,114,32,116,105,109,101,100,101,108,116,97,44,32,110,111,116,32,39,37,115,39,0] /* tzinfo.%s() must ret */, "i8", ALLOC_NORMAL);
__str41=allocate([116,122,105,110,102,111,46,37,115,40,41,32,114,101,116,117,114,110,101,100,32,37,100,59,32,109,117,115,116,32,98,101,32,105,110,32,45,49,52,51,57,32,46,46,32,49,52,51,57,0] /* tzinfo.%s() returned */, "i8", ALLOC_NORMAL);
__str42=allocate([117,116,99,111,102,102,115,101,116,0] /* utcoffset\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([116,122,105,110,102,111,32,38,38,32,110,97,109,101,32,38,38,32,116,122,105,110,102,111,97,114,103,0] /* tzinfo && name && tz */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9150=allocate([111,102,102,115,101,116,95,97,115,95,116,105,109,101,100,101,108,116,97,0] /* offset_as_timedelta\ */, "i8", ALLOC_NORMAL);
__str44=allocate([100,115,116,0] /* dst\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9191=allocate([99,97,108,108,95,116,122,110,97,109,101,0] /* call_tzname\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([116,122,110,97,109,101,0] /* tzname\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([116,122,105,110,102,111,46,116,122,110,97,109,101,40,41,32,109,117,115,116,32,114,101,116,117,114,110,32,78,111,110,101,32,111,114,32,97,32,115,116,114,105,110,103,44,32,110,111,116,32,39,37,115,39,0] /* tzinfo.tzname() must */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9239=allocate([99,108,97,115,115,105,102,121,95,117,116,99,111,102,102,115,101,116,0] /* classify_utcoffset\0 */, "i8", ALLOC_NORMAL);
__str47=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,114,101,112,114,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(rep */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9306=allocate([97,112,112,101,110,100,95,107,101,121,119,111,114,100,95,116,122,105,110,102,111,0] /* append_keyword_tzinf */, "i8", ALLOC_NORMAL);
__str48=allocate([116,122,105,110,102,111,0] /* tzinfo\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([80,121,83,116,114,105,110,103,95,65,115,83,116,114,105,110,103,40,114,101,112,114,41,91,80,121,83,116,114,105,110,103,95,83,105,122,101,40,114,101,112,114,41,45,49,93,32,61,61,32,39,41,39,0] /* PyString_AsString(re */, "i8", ALLOC_NORMAL);
__str50=allocate([44,32,116,122,105,110,102,111,61,0] /* , tzinfo=\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([41,0] /* )\00 */, "i8", ALLOC_NORMAL);
_MonthNames_9355=allocate(48, "i8*", ALLOC_NORMAL);
__str52=allocate([74,97,110,0] /* Jan\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([70,101,98,0] /* Feb\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([77,97,114,0] /* Mar\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([65,112,114,0] /* Apr\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([77,97,121,0] /* May\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([74,117,110,0] /* Jun\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([74,117,108,0] /* Jul\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([65,117,103,0] /* Aug\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([83,101,112,0] /* Sep\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([79,99,116,0] /* Oct\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([78,111,118,0] /* Nov\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([68,101,99,0] /* Dec\00 */, "i8", ALLOC_NORMAL);
_DayNames_9354=allocate(28, "i8*", ALLOC_NORMAL);
__str64=allocate([77,111,110,0] /* Mon\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([84,117,101,0] /* Tue\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([87,101,100,0] /* Wed\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([84,104,117,0] /* Thu\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([70,114,105,0] /* Fri\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([83,97,116,0] /* Sat\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([83,117,110,0] /* Sun\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([37,115,32,37,115,32,37,50,100,32,37,48,50,100,58,37,48,50,100,58,37,48,50,100,32,37,48,52,100,0] /* %s %s %2d %02d:%02d: */, "i8", ALLOC_NORMAL);
__str72=allocate([98,117,102,108,101,110,32,62,61,32,49,0] /* buflen >= 1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9398=allocate([102,111,114,109,97,116,95,117,116,99,111,102,102,115,101,116,0] /* format_utcoffset\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([37,99,37,48,50,100,37,115,37,48,50,100,0] /* %c%02d%s%02d\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([37,48,54,100,0] /* %06d\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([111,98,106,101,99,116,32,38,38,32,102,111,114,109,97,116,32,38,38,32,116,105,109,101,116,117,112,108,101,0] /* object && format &&  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9485=allocate([119,114,97,112,95,115,116,114,102,116,105,109,101,0] /* wrap_strftime\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([40,40,40,40,112,121,121,101,97,114,41,45,62,111,98,95,116,121,112,101,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,51,41,41,41,32,33,61,32,48,41,0] /* ((((pyyear)->ob_type */, "i8", ALLOC_NORMAL);
__str77=allocate([121,101,97,114,61,37,108,100,32,105,115,32,98,101,102,111,114,101,32,49,57,48,48,59,32,116,104,101,32,100,97,116,101,116,105,109,101,32,115,116,114,102,116,105,109,101,40,41,32,109,101,116,104,111,100,115,32,114,101,113,117,105,114,101,32,121,101,97,114,32,62,61,32,49,57,48,48,0] /* year=%ld is before 1 */, "i8", ALLOC_NORMAL);
__str78=allocate([115,116,114,102,116,105,109,101,32,102,111,114,109,97,116,32,101,110,100,115,32,119,105,116,104,32,114,97,119,32,37,0] /* strftime format ends */, "i8", ALLOC_NORMAL);
__str79=allocate(1, "i8", ALLOC_NORMAL);
__str80=allocate([122,114,101,112,108,97,99,101,109,101,110,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* zreplacement != ((vo */, "i8", ALLOC_NORMAL);
__str81=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,116,101,109,112,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(tem */, "i8", ALLOC_NORMAL);
__str82=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([115,115,0] /* ss\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([37,0] /* %\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([37,37,0] /* %%\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([116,122,110,97,109,101,46,114,101,112,108,97,99,101,40,41,32,100,105,100,32,110,111,116,32,114,101,116,117,114,110,32,97,32,115,116,114,105,110,103,0] /* tzname.replace() did */, "i8", ALLOC_NORMAL);
__str87=allocate([90,114,101,112,108,97,99,101,109,101,110,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* Zreplacement != ((vo */, "i8", ALLOC_NORMAL);
__str89=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,102,114,101,112,108,97,99,101,109,101,110,116,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,55,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(fre */, "i8", ALLOC_NORMAL);
__str90=allocate([112,116,111,97,112,112,101,110,100,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* ptoappend != ((void  */, "i8", ALLOC_NORMAL);
__str91=allocate([117,115,101,100,110,101,119,32,60,61,32,116,111,116,97,108,110,101,119,0] /* usednew <= totalnew\ */, "i8", ALLOC_NORMAL);
__str92=allocate([116,105,109,101,0] /* time\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([115,116,114,102,116,105,109,101,0] /* strftime\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([79,79,0] /* OO\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([37,48,52,100,45,37,48,50,100,45,37,48,50,100,0] /* %04d-%02d-%02d\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([98,117,102,102,108,101,110,32,62,61,32,120,0] /* bufflen >= x\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9722=allocate([105,115,111,102,111,114,109,97,116,95,100,97,116,101,0] /* isoformat_date\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([37,48,50,100,58,37,48,50,100,58,37,48,50,100,0] /* %02d:%02d:%02d\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9746=allocate([105,115,111,102,111,114,109,97,116,95,116,105,109,101,0] /* isoformat_time\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([46,37,48,54,100,0] /* .%06d\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([40,41,0] /* ()\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([115,116,114,117,99,116,95,116,105,109,101,0] /* struct_time\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([40,40,105,105,105,105,105,105,105,105,105,41,41,0] /* ((iiiiiiiii))\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([33,32,34,111,112,32,117,110,107,110,111,119,110,34,0] /* ! \22op unknown\22\0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9835=allocate([100,105,102,102,95,116,111,95,98,111,111,108,0] /* diff_to_bool\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([99,97,110,39,116,32,99,111,109,112,97,114,101,32,37,115,32,116,111,32,37,115,0] /* can't compare %s to  */, "i8", ALLOC_NORMAL);
_us_per_us=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_ms=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_second=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_minute=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_hour=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_day=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_us_per_week=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
_seconds_per_day=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
__str104=allocate([48,32,60,61,32,116,101,109,112,32,38,38,32,116,101,109,112,32,60,32,49,48,48,48,48,48,48,0] /* 0 <= temp && temp <  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9958=allocate([109,105,99,114,111,115,101,99,111,110,100,115,95,116,111,95,100,101,108,116,97,95,101,120,0] /* microseconds_to_delt */, "i8", ALLOC_NORMAL);
__str105=allocate([80,121,69,114,114,95,79,99,99,117,114,114,101,100,40,41,0] /* PyErr_Occurred()\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([48,32,60,61,32,116,101,109,112,32,38,38,32,116,101,109,112,32,60,32,50,52,42,51,54,48,48,0] /* 0 <= temp && temp <  */, "i8", ALLOC_NORMAL);
__str107=allocate([110,111,114,109,97,108,105,122,101,100,32,100,97,121,115,32,116,111,111,32,108,97,114,103,101,32,116,111,32,102,105,116,32,105,110,32,97,32,67,32,105,110,116,0] /* normalized days too  */, "i8", ALLOC_NORMAL);
__str108=allocate([40,40,40,80,121,68,97,116,101,84,105,109,101,95,68,101,108,116,97,32,42,41,40,115,101,108,102,41,41,45,62,109,105,99,114,111,115,101,99,111,110,100,115,41,32,62,61,32,48,0] /* (((PyDateTime_Delta  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10169=allocate([100,101,108,116,97,95,97,98,115,0] /* delta_abs\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([40,40,40,80,121,68,97,116,101,84,105,109,101,95,68,101,108,116,97,32,42,41,40,115,101,108,102,41,41,45,62,115,101,99,111,110,100,115,41,32,62,61,32,48,0] /* (((PyDateTime_Delta  */, "i8", ALLOC_NORMAL);
__str110=allocate([110,117,109,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* num != ((void _)0)\0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10356=allocate([97,99,99,117,109,0] /* accum\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([40,40,40,40,102,97,99,116,111,114,41,45,62,111,98,95,116,121,112,101,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,51,41,41,41,32,33,61,32,48,41,32,124,124,32,40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,102,97,99,116,111,114,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,52,41,41,41,32,33,61,32,48,41,0] /* ((((factor)->ob_type */, "i8", ALLOC_NORMAL);
__str112=allocate([117,110,115,117,112,112,111,114,116,101,100,32,116,121,112,101,32,102,111,114,32,116,105,109,101,100,101,108,116,97,32,37,115,32,99,111,109,112,111,110,101,110,116,58,32,37,115,0] /* unsupported type for */, "i8", ALLOC_NORMAL);
__str113=allocate([124,79,79,79,79,79,79,79,58,95,95,110,101,119,95,95,0] /* |OOOOOOO:__new__\00 */, "i8", ALLOC_NORMAL);
_keywords_10491=allocate(32, "i8*", ALLOC_NORMAL);
__str114=allocate([100,97,121,115,0] /* days\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([115,101,99,111,110,100,115,0] /* seconds\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([109,105,99,114,111,115,101,99,111,110,100,115,0] /* microseconds\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([109,105,108,108,105,115,101,99,111,110,100,115,0] /* milliseconds\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([109,105,110,117,116,101,115,0] /* minutes\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([104,111,117,114,115,0] /* hours\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([119,101,101,107,115,0] /* weeks\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([37,115,40,37,100,44,32,37,100,44,32,37,100,41,0] /* %s(%d, %d, %d)\00 */, "i8", ALLOC_NORMAL);
__str122=allocate([37,115,40,37,100,44,32,37,100,41,0] /* %s(%d, %d)\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([37,115,40,37,100,41,0] /* %s(%d)\00 */, "i8", ALLOC_NORMAL);
__str124=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([37,100,32,100,97,121,37,115,44,32,0] /* %d day%s, \00 */, "i8", ALLOC_NORMAL);
__str126=allocate([37,100,58,37,48,50,100,58,37,48,50,100,0] /* %d:%02d:%02d\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([103,111,111,102,121,32,114,101,115,117,108,116,32,102,114,111,109,32,80,121,79,83,95,115,110,112,114,105,110,116,102,0] /* goofy result from Py */, "i8", ALLOC_NORMAL);
__str128=allocate([105,105,105,0] /* iii\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([79,78,0] /* ON\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([78,117,109,98,101,114,32,111,102,32,100,97,121,115,46,0] /* Number of days.\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([78,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,32,40,62,61,32,48,32,97,110,100,32,108,101,115,115,32,116,104,97,110,32,49,32,100,97,121,41,46,0] /* Number of seconds (> */, "i8", ALLOC_NORMAL);
__str132=allocate([78,117,109,98,101,114,32,111,102,32,109,105,99,114,111,115,101,99,111,110,100,115,32,40,62,61,32,48,32,97,110,100,32,108,101,115,115,32,116,104,97,110,32,49,32,115,101,99,111,110,100,41,46,0] /* Number of microsecon */, "i8", ALLOC_NORMAL);
_delta_members=allocate([0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str133=allocate([116,111,116,97,108,95,115,101,99,111,110,100,115,0] /* total_seconds\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([84,111,116,97,108,32,115,101,99,111,110,100,115,32,105,110,32,116,104,101,32,100,117,114,97,116,105,111,110,46,0] /* Total seconds in the */, "i8", ALLOC_NORMAL);
__str135=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([95,95,114,101,100,117,99,101,95,95,40,41,32,45,62,32,40,99,108,115,44,32,115,116,97,116,101,41,0] /* __reduce__() -> (cls */, "i8", ALLOC_NORMAL);
_delta_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_delta_doc=allocate([68,105,102,102,101,114,101,110,99,101,32,98,101,116,119,101,101,110,32,116,119,111,32,100,97,116,101,116,105,109,101,32,118,97,108,117,101,115,46,0] /* Difference between t */, "i8", ALLOC_NORMAL);
_delta_as_number=allocate(156, ["%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo**, %struct.PyDateTime_TZInfo**)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
__str137=allocate([100,97,116,101,116,105,109,101,46,116,105,109,101,100,101,108,116,97,0] /* datetime.timedelta\0 */, "i8", ALLOC_NORMAL);
_PyDateTime_DeltaType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str138=allocate([121,101,97,114,0] /* year\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([109,111,110,116,104,0] /* month\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([100,97,121,0] /* day\00 */, "i8", ALLOC_NORMAL);
_date_getset=allocate(80, ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_date_kws=allocate(16, "i8*", ALLOC_NORMAL);
__str141=allocate([116,105,109,101,115,116,97,109,112,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,108,111,99,97,108,116,105,109,101,40,41,32,102,117,110,99,116,105,111,110,0] /* timestamp out of ran */, "i8", ALLOC_NORMAL);
__str142=allocate([102,114,111,109,116,105,109,101,115,116,97,109,112,0] /* fromtimestamp\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([100,58,102,114,111,109,116,105,109,101,115,116,97,109,112,0] /* d:fromtimestamp\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([105,58,102,114,111,109,111,114,100,105,110,97,108,0] /* i:fromordinal\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([111,114,100,105,110,97,108,32,109,117,115,116,32,98,101,32,62,61,32,49,0] /* ordinal must be >= 1 */, "i8", ALLOC_NORMAL);
__str146=allocate([105,115,111,102,111,114,109,97,116,0] /* isoformat\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([115,35,58,115,116,114,102,116,105,109,101,0] /* s#:strftime\00 */, "i8", ALLOC_NORMAL);
_keywords_11164=allocate(8, "i8*", ALLOC_NORMAL);
__str148=allocate([102,111,114,109,97,116,0] /* format\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([116,105,109,101,116,117,112,108,101,0] /* timetuple\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([79,58,95,95,102,111,114,109,97,116,95,95,0] /* O:__format__\00 */, "i8", ALLOC_NORMAL);
__str151=allocate([95,95,102,111,114,109,97,116,95,95,32,101,120,112,101,99,116,115,32,115,116,114,32,111,114,32,117,110,105,99,111,100,101,44,32,110,111,116,32,37,46,50,48,48,115,0] /* __format__ expects s */, "i8", ALLOC_NORMAL);
__str152=allocate([124,105,105,105,58,114,101,112,108,97,99,101,0] /* |iii:replace\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([40,78,41,0] /* (N)\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([40,79,78,41,0] /* (ON)\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([116,105,109,101,115,116,97,109,112,32,45,62,32,108,111,99,97,108,32,100,97,116,101,32,102,114,111,109,32,97,32,80,79,83,73,88,32,116,105,109,101,115,116,97,109,112,32,40,108,105,107,101,32,116,105,109,101,46,116,105,109,101,40,41,41,46,0] /* timestamp -> local d */, "i8", ALLOC_NORMAL);
__str156=allocate([102,114,111,109,111,114,100,105,110,97,108,0] /* fromordinal\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([105,110,116,32,45,62,32,100,97,116,101,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,97,32,112,114,111,108,101,112,116,105,99,32,71,114,101,103,111,114,105,97,110,32,111,114,100,105,110,97,108,46,0] /* int -> date correspo */, "i8", ALLOC_NORMAL);
__str158=allocate([116,111,100,97,121,0] /* today\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([67,117,114,114,101,110,116,32,100,97,116,101,32,111,114,32,100,97,116,101,116,105,109,101,58,32,32,115,97,109,101,32,97,115,32,115,101,108,102,46,95,95,99,108,97,115,115,95,95,46,102,114,111,109,116,105,109,101,115,116,97,109,112,40,116,105,109,101,46,116,105,109,101,40,41,41,46,0] /* Current date or date */, "i8", ALLOC_NORMAL);
__str160=allocate([99,116,105,109,101,0] /* ctime\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([82,101,116,117,114,110,32,99,116,105,109,101,40,41,32,115,116,121,108,101,32,115,116,114,105,110,103,46,0] /* Return ctime() style */, "i8", ALLOC_NORMAL);
__str162=allocate([102,111,114,109,97,116,32,45,62,32,115,116,114,102,116,105,109,101,40,41,32,115,116,121,108,101,32,115,116,114,105,110,103,46,0] /* format -> strftime() */, "i8", ALLOC_NORMAL);
__str163=allocate([95,95,102,111,114,109,97,116,95,95,0] /* __format__\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([70,111,114,109,97,116,115,32,115,101,108,102,32,119,105,116,104,32,115,116,114,102,116,105,109,101,46,0] /* Formats self with st */, "i8", ALLOC_NORMAL);
__str165=allocate([82,101,116,117,114,110,32,116,105,109,101,32,116,117,112,108,101,44,32,99,111,109,112,97,116,105,98,108,101,32,119,105,116,104,32,116,105,109,101,46,108,111,99,97,108,116,105,109,101,40,41,46,0] /* Return time tuple, c */, "i8", ALLOC_NORMAL);
__str166=allocate([105,115,111,99,97,108,101,110,100,97,114,0] /* isocalendar\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([82,101,116,117,114,110,32,97,32,51,45,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,73,83,79,32,121,101,97,114,44,32,119,101,101,107,32,110,117,109,98,101,114,44,32,97,110,100,32,119,101,101,107,100,97,121,46,0] /* Return a 3-tuple con */, "i8", ALLOC_NORMAL);
__str168=allocate([82,101,116,117,114,110,32,115,116,114,105,110,103,32,105,110,32,73,83,79,32,56,54,48,49,32,102,111,114,109,97,116,44,32,89,89,89,89,45,77,77,45,68,68,46,0] /* Return string in ISO */, "i8", ALLOC_NORMAL);
__str169=allocate([105,115,111,119,101,101,107,100,97,121,0] /* isoweekday\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([82,101,116,117,114,110,32,116,104,101,32,100,97,121,32,111,102,32,116,104,101,32,119,101,101,107,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,100,97,116,101,46,10,77,111,110,100,97,121,32,61,61,32,49,32,46,46,46,32,83,117,110,100,97,121,32,61,61,32,55,0] /* Return the day of th */, "i8", ALLOC_NORMAL);
__str171=allocate([116,111,111,114,100,105,110,97,108,0] /* toordinal\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([82,101,116,117,114,110,32,112,114,111,108,101,112,116,105,99,32,71,114,101,103,111,114,105,97,110,32,111,114,100,105,110,97,108,46,32,32,74,97,110,117,97,114,121,32,49,32,111,102,32,121,101,97,114,32,49,32,105,115,32,100,97,121,32,49,46,0] /* Return proleptic Gre */, "i8", ALLOC_NORMAL);
__str173=allocate([119,101,101,107,100,97,121,0] /* weekday\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([82,101,116,117,114,110,32,116,104,101,32,100,97,121,32,111,102,32,116,104,101,32,119,101,101,107,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,100,97,116,101,46,10,77,111,110,100,97,121,32,61,61,32,48,32,46,46,46,32,83,117,110,100,97,121,32,61,61,32,54,0] /* Return the day of th */, "i8", ALLOC_NORMAL);
__str175=allocate([82,101,116,117,114,110,32,100,97,116,101,32,119,105,116,104,32,110,101,119,32,115,112,101,99,105,102,105,101,100,32,102,105,101,108,100,115,46,0] /* Return date with new */, "i8", ALLOC_NORMAL);
_date_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_date_doc=allocate([100,97,116,101,40,121,101,97,114,44,32,109,111,110,116,104,44,32,100,97,121,41,32,45,45,62,32,100,97,116,101,32,111,98,106,101,99,116,0] /* date(year, month, da */, "i8", ALLOC_NORMAL);
_date_as_number=allocate(156, ["%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str176=allocate([100,97,116,101,116,105,109,101,46,100,97,116,101,0] /* datetime.date\00 */, "i8", ALLOC_NORMAL);
_PyDateTime_DateType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str177=allocate([97,32,116,122,105,110,102,111,32,115,117,98,99,108,97,115,115,32,109,117,115,116,32,105,109,112,108,101,109,101,110,116,32,37,115,40,41,0] /* a tzinfo subclass mu */, "i8", ALLOC_NORMAL);
__str178=allocate([102,114,111,109,117,116,99,58,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,100,97,116,101,116,105,109,101,0] /* fromutc: argument mu */, "i8", ALLOC_NORMAL);
__str179=allocate([102,114,111,109,117,116,99,58,32,100,116,46,116,122,105,110,102,111,32,105,115,32,110,111,116,32,115,101,108,102,0] /* fromutc: dt.tzinfo i */, "i8", ALLOC_NORMAL);
__str180=allocate([102,114,111,109,117,116,99,58,32,110,111,110,45,78,111,110,101,32,117,116,99,111,102,102,115,101,116,40,41,32,114,101,115,117,108,116,32,114,101,113,117,105,114,101,100,0] /* fromutc: non-None ut */, "i8", ALLOC_NORMAL);
__str181=allocate([102,114,111,109,117,116,99,58,32,110,111,110,45,78,111,110,101,32,100,115,116,40,41,32,114,101,115,117,108,116,32,114,101,113,117,105,114,101,100,0] /* fromutc: non-None ds */, "i8", ALLOC_NORMAL);
__str182=allocate([102,114,111,109,117,116,99,58,32,116,122,46,100,115,116,40,41,32,103,97,118,101,105,110,99,111,110,115,105,115,116,101,110,116,32,114,101,115,117,108,116,115,59,32,99,97,110,110,111,116,32,99,111,110,118,101,114,116,0] /* fromutc: tz.dst() ga */, "i8", ALLOC_NORMAL);
__str183=allocate([95,95,103,101,116,105,110,105,116,97,114,103,115,95,95,0] /* __getinitargs__\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([95,95,103,101,116,115,116,97,116,101,95,95,0] /* __getstate__\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([40,79,78,78,41,0] /* (ONN)\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([100,97,116,101,116,105,109,101,32,45,62,32,115,116,114,105,110,103,32,110,97,109,101,32,111,102,32,116,105,109,101,32,122,111,110,101,46,0] /* datetime -> string n */, "i8", ALLOC_NORMAL);
__str187=allocate([100,97,116,101,116,105,109,101,32,45,62,32,109,105,110,117,116,101,115,32,101,97,115,116,32,111,102,32,85,84,67,32,40,110,101,103,97,116,105,118,101,32,102,111,114,32,119,101,115,116,32,111,102,32,85,84,67,41,46,0] /* datetime -> minutes  */, "i8", ALLOC_NORMAL);
__str188=allocate([100,97,116,101,116,105,109,101,32,45,62,32,68,83,84,32,111,102,102,115,101,116,32,105,110,32,109,105,110,117,116,101,115,32,101,97,115,116,32,111,102,32,85,84,67,46,0] /* datetime -> DST offs */, "i8", ALLOC_NORMAL);
__str189=allocate([102,114,111,109,117,116,99,0] /* fromutc\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([100,97,116,101,116,105,109,101,32,105,110,32,85,84,67,32,45,62,32,100,97,116,101,116,105,109,101,32,105,110,32,108,111,99,97,108,32,116,105,109,101,46,0] /* datetime in UTC -> d */, "i8", ALLOC_NORMAL);
__str191=allocate([45,62,32,40,99,108,115,44,32,115,116,97,116,101,41,0] /* -> (cls, state)\00 */, "i8", ALLOC_NORMAL);
_tzinfo_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_tzinfo_doc=allocate([65,98,115,116,114,97,99,116,32,98,97,115,101,32,99,108,97,115,115,32,102,111,114,32,116,105,109,101,32,122,111,110,101,32,105,110,102,111,32,111,98,106,101,99,116,115,46,0] /* Abstract base class  */, "i8", ALLOC_NORMAL);
__str192=allocate([100,97,116,101,116,105,109,101,46,116,122,105,110,102,111,0] /* datetime.tzinfo\00 */, "i8", ALLOC_NORMAL);
_PyDateTime_TZInfoType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str193=allocate([104,111,117,114,0] /* hour\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([109,105,110,117,116,101,0] /* minute\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([115,101,99,111,110,100,0] /* second\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([109,105,99,114,111,115,101,99,111,110,100,0] /* microsecond\00 */, "i8", ALLOC_NORMAL);
_time_getset=allocate(120, ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_time_kws=allocate(24, "i8*", ALLOC_NORMAL);
__str197=allocate([98,97,100,32,116,122,105,110,102,111,32,115,116,97,116,101,32,97,114,103,0] /* bad tzinfo state arg */, "i8", ALLOC_NORMAL);
__str198=allocate([124,105,105,105,105,79,0] /* |iiiiO\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([37,115,40,37,100,44,32,37,100,44,32,37,100,44,32,37,100,41,0] /* %s(%d, %d, %d, %d)\0 */, "i8", ALLOC_NORMAL);
__str200=allocate([58,0] /* :\00 */, "i8", ALLOC_NORMAL);
_keywords_12042=allocate(8, "i8*", ALLOC_NORMAL);
__str201=allocate([105,105,105,105,105,105,105,105,105,0] /* iiiiiiiii\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([80,121,84,117,112,108,101,95,83,105,122,101,40,116,117,112,108,101,41,32,61,61,32,57,0] /* PyTuple_Size(tuple)  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12043=allocate([116,105,109,101,95,115,116,114,102,116,105,109,101,0] /* time_strftime\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([110,49,32,33,61,32,79,70,70,83,69,84,95,85,78,75,78,79,87,78,32,38,38,32,110,50,32,33,61,32,79,70,70,83,69,84,95,85,78,75,78,79,87,78,0] /* n1 != OFFSET_UNKNOWN */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12084=allocate([116,105,109,101,95,114,105,99,104,99,111,109,112,97,114,101,0] /* time_richcompare\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([111,102,102,115,101,116,49,32,33,61,32,111,102,102,115,101,116,50,0] /* offset1 != offset2\0 */, "i8", ALLOC_NORMAL);
__str205=allocate([110,49,32,33,61,32,110,50,0] /* n1 != n2\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([99,97,110,39,116,32,99,111,109,112,97,114,101,32,111,102,102,115,101,116,45,110,97,105,118,101,32,97,110,100,32,111,102,102,115,101,116,45,97,119,97,114,101,32,116,105,109,101,115,0] /* can't compare offset */, "i8", ALLOC_NORMAL);
__str207=allocate([110,32,33,61,32,79,70,70,83,69,84,95,85,78,75,78,79,87,78,0] /* n != OFFSET_UNKNOWN\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12202=allocate([116,105,109,101,95,104,97,115,104,0] /* time_hash\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([110,32,61,61,32,79,70,70,83,69,84,95,65,87,65,82,69,0] /* n == OFFSET_AWARE\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([40,40,40,95,80,121,68,97,116,101,84,105,109,101,95,66,97,115,101,84,90,73,110,102,111,32,42,41,40,115,101,108,102,41,41,45,62,104,97,115,116,122,105,110,102,111,41,0] /* (((_PyDateTime_BaseT */, "i8", ALLOC_NORMAL);
__str210=allocate([105,105,105,105,0] /* iiii\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([124,105,105,105,105,79,58,114,101,112,108,97,99,101,0] /* |iiiiO:replace\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([105,105,105,105,79,0] /* iiiiO\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([82,101,116,117,114,110,32,115,116,114,105,110,103,32,105,110,32,73,83,79,32,56,54,48,49,32,102,111,114,109,97,116,44,32,72,72,58,77,77,58,83,83,91,46,109,109,109,109,109,109,93,91,43,72,72,58,77,77,93,46,0] /* Return string in ISO */, "i8", ALLOC_NORMAL);
__str214=allocate([82,101,116,117,114,110,32,115,101,108,102,46,116,122,105,110,102,111,46,117,116,99,111,102,102,115,101,116,40,115,101,108,102,41,46,0] /* Return self.tzinfo.u */, "i8", ALLOC_NORMAL);
__str215=allocate([82,101,116,117,114,110,32,115,101,108,102,46,116,122,105,110,102,111,46,116,122,110,97,109,101,40,115,101,108,102,41,46,0] /* Return self.tzinfo.t */, "i8", ALLOC_NORMAL);
__str216=allocate([82,101,116,117,114,110,32,115,101,108,102,46,116,122,105,110,102,111,46,100,115,116,40,115,101,108,102,41,46,0] /* Return self.tzinfo.d */, "i8", ALLOC_NORMAL);
__str217=allocate([82,101,116,117,114,110,32,116,105,109,101,32,119,105,116,104,32,110,101,119,32,115,112,101,99,105,102,105,101,100,32,102,105,101,108,100,115,46,0] /* Return time with new */, "i8", ALLOC_NORMAL);
_time_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_time_doc=allocate([116,105,109,101,40,91,104,111,117,114,91,44,32,109,105,110,117,116,101,91,44,32,115,101,99,111,110,100,91,44,32,109,105,99,114,111,115,101,99,111,110,100,91,44,32,116,122,105,110,102,111,93,93,93,93,93,41,32,45,45,62,32,97,32,116,105,109,101,32,111,98,106,101,99,116,10,10,65,108,108,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,111,112,116,105,111,110,97,108,46,32,116,122,105,110,102,111,32,109,97,121,32,98,101,32,78,111,110,101,44,32,111,114,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,10,97,32,116,122,105,110,102,111,32,115,117,98,99,108,97,115,115,46,32,84,104,101,32,114,101,109,97,105,110,105,110,103,32,97,114,103,117,109,101,110,116,115,32,109,97,121,32,98,101,32,105,110,116,115,32,111,114,32,108,111,110,103,115,46,10,0] /* time([hour[, minute[ */, "i8", ALLOC_NORMAL);
_time_as_number=allocate(156, ["%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str218=allocate([100,97,116,101,116,105,109,101,46,116,105,109,101,0] /* datetime.time\00 */, "i8", ALLOC_NORMAL);
_PyDateTime_TimeType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_datetime_getset=allocate(120, ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_datetime_kws=allocate(36, "i8*", ALLOC_NORMAL);
__str219=allocate([105,105,105,124,105,105,105,105,79,0] /* iii|iiiiO\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([105,105,105,105,105,105,105,79,0] /* iiiiiiiO\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([116,105,109,101,115,116,97,109,112,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,108,111,99,97,108,116,105,109,101,40,41,47,103,109,116,105,109,101,40,41,32,102,117,110,99,116,105,111,110,0] /* timestamp out of ran */, "i8", ALLOC_NORMAL);
__str222=allocate([124,79,58,110,111,119,0] /* |O:now\00 */, "i8", ALLOC_NORMAL);
_keywords_12654=allocate(8, "i8*", ALLOC_NORMAL);
__str223=allocate([116,122,0] /* tz\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([100,124,79,58,102,114,111,109,116,105,109,101,115,116,97,109,112,0] /* d|O:fromtimestamp\00 */, "i8", ALLOC_NORMAL);
_keywords_12701=allocate(12, "i8*", ALLOC_NORMAL);
__str225=allocate([116,105,109,101,115,116,97,109,112,0] /* timestamp\00 */, "i8", ALLOC_NORMAL);
__str226=allocate([100,58,117,116,99,102,114,111,109,116,105,109,101,115,116,97,109,112,0] /* d:utcfromtimestamp\0 */, "i8", ALLOC_NORMAL);
__str227=allocate([115,115,58,115,116,114,112,116,105,109,101,0] /* ss:strptime\00 */, "i8", ALLOC_NORMAL);
_module_12751=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
__str228=allocate([95,115,116,114,112,116,105,109,101,0] /* _strptime\00 */, "i8", ALLOC_NORMAL);
__str229=allocate([105,105,105,105,105,105,105,0] /* iiiiiii\00 */, "i8", ALLOC_NORMAL);
__str230=allocate([117,110,101,120,112,101,99,116,101,100,32,118,97,108,117,101,32,102,114,111,109,32,95,115,116,114,112,116,105,109,101,46,95,115,116,114,112,116,105,109,101,0] /* unexpected value fro */, "i8", ALLOC_NORMAL);
__str231=allocate([79,33,79,33,58,99,111,109,98,105,110,101,0] /* O!O!:combine\00 */, "i8", ALLOC_NORMAL);
_keywords_12871=allocate(12, "i8*", ALLOC_NORMAL);
__str232=allocate([100,97,116,101,0] /* date\00 */, "i8", ALLOC_NORMAL);
__str233=allocate([102,97,99,116,111,114,32,61,61,32,49,32,124,124,32,102,97,99,116,111,114,32,61,61,32,45,49,0] /* factor == 1 || facto */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13012=allocate([97,100,100,95,100,97,116,101,116,105,109,101,95,116,105,109,101,100,101,108,116,97,0] /* add_datetime_timedel */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13120=allocate([100,97,116,101,116,105,109,101,95,115,117,98,116,114,97,99,116,0] /* datetime_subtract\00 */, "i8", ALLOC_NORMAL);
__str234=allocate([99,97,110,39,116,32,115,117,98,116,114,97,99,116,32,111,102,102,115,101,116,45,110,97,105,118,101,32,97,110,100,32,111,102,102,115,101,116,45,97,119,97,114,101,32,100,97,116,101,116,105,109,101,115,0] /* can't subtract offse */, "i8", ALLOC_NORMAL);
__str235=allocate([37,115,40,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,41,0] /* %s(%d, %d, %d, %d, % */, "i8", ALLOC_NORMAL);
__str236=allocate([37,115,40,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,41,0] /* %s(%d, %d, %d, %d, % */, "i8", ALLOC_NORMAL);
__str237=allocate([37,115,40,37,100,44,32,37,100,44,32,37,100,44,32,37,100,44,32,37,100,41,0] /* %s(%d, %d, %d, %d, % */, "i8", ALLOC_NORMAL);
__str238=allocate([40,115,41,0] /* (s)\00 */, "i8", ALLOC_NORMAL);
__str239=allocate([32,0] /*  \00 */, "i8", ALLOC_NORMAL);
__str240=allocate([124,99,58,105,115,111,102,111,114,109,97,116,0] /* |c:isoformat\00 */, "i8", ALLOC_NORMAL);
_keywords_13363=allocate(8, "i8*", ALLOC_NORMAL);
__str241=allocate([115,101,112,0] /* sep\00 */, "i8", ALLOC_NORMAL);
__str242=allocate([99,112,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* cp != ((void _)0)\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13367=allocate([100,97,116,101,116,105,109,101,95,105,115,111,102,111,114,109,97,116,0] /* datetime_isoformat\0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13435=allocate([100,97,116,101,116,105,109,101,95,114,105,99,104,99,111,109,112,97,114,101,0] /* datetime_richcompare */, "i8", ALLOC_NORMAL);
__str243=allocate([99,97,110,39,116,32,99,111,109,112,97,114,101,32,111,102,102,115,101,116,45,110,97,105,118,101,32,97,110,100,32,111,102,102,115,101,116,45,97,119,97,114,101,32,100,97,116,101,116,105,109,101,115,0] /* can't compare offset */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13531=allocate([100,97,116,101,116,105,109,101,95,104,97,115,104,0] /* datetime_hash\00 */, "i8", ALLOC_NORMAL);
__str244=allocate([124,105,105,105,105,105,105,105,79,58,114,101,112,108,97,99,101,0] /* |iiiiiiiO:replace\00 */, "i8", ALLOC_NORMAL);
__str245=allocate([79,33,58,97,115,116,105,109,101,122,111,110,101,0] /* O!:astimezone\00 */, "i8", ALLOC_NORMAL);
_keywords_13698=allocate(8, "i8*", ALLOC_NORMAL);
__str246=allocate([97,115,116,105,109,101,122,111,110,101,40,41,32,99,97,110,110,111,116,32,98,101,32,97,112,112,108,105,101,100,32,116,111,32,97,32,110,97,105,118,101,32,100,97,116,101,116,105,109,101,0] /* astimezone() cannot  */, "i8", ALLOC_NORMAL);
__str247=allocate([110,111,119,0] /* now\00 */, "i8", ALLOC_NORMAL);
__str248=allocate([91,116,122,93,32,45,62,32,110,101,119,32,100,97,116,101,116,105,109,101,32,119,105,116,104,32,116,122,39,115,32,108,111,99,97,108,32,100,97,121,32,97,110,100,32,116,105,109,101,46,0] /* [tz] -> new datetime */, "i8", ALLOC_NORMAL);
__str249=allocate([117,116,99,110,111,119,0] /* utcnow\00 */, "i8", ALLOC_NORMAL);
__str250=allocate([82,101,116,117,114,110,32,97,32,110,101,119,32,100,97,116,101,116,105,109,101,32,114,101,112,114,101,115,101,110,116,105,110,103,32,85,84,67,32,100,97,121,32,97,110,100,32,116,105,109,101,46,0] /* Return a new datetim */, "i8", ALLOC_NORMAL);
__str251=allocate([116,105,109,101,115,116,97,109,112,91,44,32,116,122,93,32,45,62,32,116,122,39,115,32,108,111,99,97,108,32,116,105,109,101,32,102,114,111,109,32,80,79,83,73,88,32,116,105,109,101,115,116,97,109,112,46,0] /* timestamp[, tz] -> t */, "i8", ALLOC_NORMAL);
__str252=allocate([117,116,99,102,114,111,109,116,105,109,101,115,116,97,109,112,0] /* utcfromtimestamp\00 */, "i8", ALLOC_NORMAL);
__str253=allocate([116,105,109,101,115,116,97,109,112,32,45,62,32,85,84,67,32,100,97,116,101,116,105,109,101,32,102,114,111,109,32,97,32,80,79,83,73,88,32,116,105,109,101,115,116,97,109,112,32,40,108,105,107,101,32,116,105,109,101,46,116,105,109,101,40,41,41,46,0] /* timestamp -> UTC dat */, "i8", ALLOC_NORMAL);
__str254=allocate([115,116,114,112,116,105,109,101,0] /* strptime\00 */, "i8", ALLOC_NORMAL);
__str255=allocate([115,116,114,105,110,103,44,32,102,111,114,109,97,116,32,45,62,32,110,101,119,32,100,97,116,101,116,105,109,101,32,112,97,114,115,101,100,32,102,114,111,109,32,97,32,115,116,114,105,110,103,32,40,108,105,107,101,32,116,105,109,101,46,115,116,114,112,116,105,109,101,40,41,41,46,0] /* string, format -> ne */, "i8", ALLOC_NORMAL);
__str256=allocate([99,111,109,98,105,110,101,0] /* combine\00 */, "i8", ALLOC_NORMAL);
__str257=allocate([100,97,116,101,44,32,116,105,109,101,32,45,62,32,100,97,116,101,116,105,109,101,32,119,105,116,104,32,115,97,109,101,32,100,97,116,101,32,97,110,100,32,116,105,109,101,32,102,105,101,108,100,115,0] /* date, time -> dateti */, "i8", ALLOC_NORMAL);
__str258=allocate([82,101,116,117,114,110,32,100,97,116,101,32,111,98,106,101,99,116,32,119,105,116,104,32,115,97,109,101,32,121,101,97,114,44,32,109,111,110,116,104,32,97,110,100,32,100,97,121,46,0] /* Return date object w */, "i8", ALLOC_NORMAL);
__str259=allocate([82,101,116,117,114,110,32,116,105,109,101,32,111,98,106,101,99,116,32,119,105,116,104,32,115,97,109,101,32,116,105,109,101,32,98,117,116,32,119,105,116,104,32,116,122,105,110,102,111,61,78,111,110,101,46,0] /* Return time object w */, "i8", ALLOC_NORMAL);
__str260=allocate([116,105,109,101,116,122,0] /* timetz\00 */, "i8", ALLOC_NORMAL);
__str261=allocate([82,101,116,117,114,110,32,116,105,109,101,32,111,98,106,101,99,116,32,119,105,116,104,32,115,97,109,101,32,116,105,109,101,32,97,110,100,32,116,122,105,110,102,111,46,0] /* Return time object w */, "i8", ALLOC_NORMAL);
__str262=allocate([117,116,99,116,105,109,101,116,117,112,108,101,0] /* utctimetuple\00 */, "i8", ALLOC_NORMAL);
__str263=allocate([82,101,116,117,114,110,32,85,84,67,32,116,105,109,101,32,116,117,112,108,101,44,32,99,111,109,112,97,116,105,98,108,101,32,119,105,116,104,32,116,105,109,101,46,108,111,99,97,108,116,105,109,101,40,41,46,0] /* Return UTC time tupl */, "i8", ALLOC_NORMAL);
__str264=allocate([91,115,101,112,93,32,45,62,32,115,116,114,105,110,103,32,105,110,32,73,83,79,32,56,54,48,49,32,102,111,114,109,97,116,44,32,89,89,89,89,45,77,77,45,68,68,84,72,72,58,77,77,58,83,83,91,46,109,109,109,109,109,109,93,91,43,72,72,58,77,77,93,46,10,10,115,101,112,32,105,115,32,117,115,101,100,32,116,111,32,115,101,112,97,114,97,116,101,32,116,104,101,32,121,101,97,114,32,102,114,111,109,32,116,104,101,32,116,105,109,101,44,32,97,110,100,32,100,101,102,97,117,108,116,115,32,116,111,32,39,84,39,46,0] /* [sep] -> string in I */, "i8", ALLOC_NORMAL);
__str265=allocate([82,101,116,117,114,110,32,100,97,116,101,116,105,109,101,32,119,105,116,104,32,110,101,119,32,115,112,101,99,105,102,105,101,100,32,102,105,101,108,100,115,46,0] /* Return datetime with */, "i8", ALLOC_NORMAL);
__str266=allocate([97,115,116,105,109,101,122,111,110,101,0] /* astimezone\00 */, "i8", ALLOC_NORMAL);
__str267=allocate([116,122,32,45,62,32,99,111,110,118,101,114,116,32,116,111,32,108,111,99,97,108,32,116,105,109,101,32,105,110,32,110,101,119,32,116,105,109,101,122,111,110,101,32,116,122,10,0] /* tz -> convert to loc */, "i8", ALLOC_NORMAL);
_datetime_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_datetime_doc=allocate([100,97,116,101,116,105,109,101,40,121,101,97,114,44,32,109,111,110,116,104,44,32,100,97,121,91,44,32,104,111,117,114,91,44,32,109,105,110,117,116,101,91,44,32,115,101,99,111,110,100,91,44,32,109,105,99,114,111,115,101,99,111,110,100,91,44,116,122,105,110,102,111,93,93,93,93,93,41,10,10,84,104,101,32,121,101,97,114,44,32,109,111,110,116,104,32,97,110,100,32,100,97,121,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,114,101,113,117,105,114,101,100,46,32,116,122,105,110,102,111,32,109,97,121,32,98,101,32,78,111,110,101,44,32,111,114,32,97,110,10,105,110,115,116,97,110,99,101,32,111,102,32,97,32,116,122,105,110,102,111,32,115,117,98,99,108,97,115,115,46,32,84,104,101,32,114,101,109,97,105,110,105,110,103,32,97,114,103,117,109,101,110,116,115,32,109,97,121,32,98,101,32,105,110,116,115,32,111,114,32,108,111,110,103,115,46,10,0] /* datetime(year, month */, "i8", ALLOC_NORMAL);
_datetime_as_number=allocate(156, ["%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str268=allocate([100,97,116,101,116,105,109,101,46,100,97,116,101,116,105,109,101,0] /* datetime.datetime\00 */, "i8", ALLOC_NORMAL);
_PyDateTime_DateTimeType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_methods=allocate(16, ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_CAPI=allocate(44, ["%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo* (i32, i32, i32, %struct._typeobject*)*",0,0,0,"%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*",0,0,0,"%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*",0,0,0,"%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct._typeobject*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0], ALLOC_NORMAL);
__str269=allocate([100,97,116,101,116,105,109,101,0] /* datetime\00 */, "i8", ALLOC_NORMAL);
__str270=allocate([70,97,115,116,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,32,111,102,32,116,104,101,32,100,97,116,101,116,105,109,101,32,116,121,112,101,46,0] /* Fast implementation  */, "i8", ALLOC_NORMAL);
__str271=allocate([114,101,115,111,108,117,116,105,111,110,0] /* resolution\00 */, "i8", ALLOC_NORMAL);
__str272=allocate([109,105,110,0] /* min\00 */, "i8", ALLOC_NORMAL);
__str273=allocate([109,97,120,0] /* max\00 */, "i8", ALLOC_NORMAL);
__str274=allocate([77,73,78,89,69,65,82,0] /* MINYEAR\00 */, "i8", ALLOC_NORMAL);
__str275=allocate([77,65,88,89,69,65,82,0] /* MAXYEAR\00 */, "i8", ALLOC_NORMAL);
__str276=allocate([116,105,109,101,100,101,108,116,97,0] /* timedelta\00 */, "i8", ALLOC_NORMAL);
__str277=allocate([100,97,116,101,116,105,109,101,46,100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime.datetime_CA */, "i8", ALLOC_NORMAL);
__str278=allocate([100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime_CAPI\00 */, "i8", ALLOC_NORMAL);
__str279=allocate([49,52,54,49,32,61,61,32,100,97,121,115,95,98,101,102,111,114,101,95,121,101,97,114,40,52,43,49,41,0] /* 1461 == days_before_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___14028=allocate([105,110,105,116,100,97,116,101,116,105,109,101,0] /* initdatetime\00 */, "i8", ALLOC_NORMAL);
__str280=allocate([49,52,54,48,57,55,32,61,61,32,100,97,121,115,95,98,101,102,111,114,101,95,121,101,97,114,40,52,48,48,43,49,41,0] /* 146097 == days_befor */, "i8", ALLOC_NORMAL);
__str281=allocate([51,54,53,50,52,32,61,61,32,100,97,121,115,95,98,101,102,111,114,101,95,121,101,97,114,40,49,48,48,43,49,41,0] /* 36524 == days_before */, "i8", ALLOC_NORMAL);
__str282=allocate([116,105,109,101,115,116,97,109,112,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,116,105,109,101,95,116,0] /* timestamp out of ran */, "i8", ALLOC_NORMAL);
_time_doc283=allocate([116,105,109,101,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,10,70,114,97,99,116,105,111,110,115,32,111,102,32,97,32,115,101,99,111,110,100,32,109,97,121,32,98,101,32,112,114,101,115,101,110,116,32,105,102,32,116,104,101,32,115,121,115,116,101,109,32,99,108,111,99,107,32,112,114,111,118,105,100,101,115,32,116,104,101,109,46,0] /* time() -> floating p */, "i8", ALLOC_NORMAL);
_clock_doc=allocate([99,108,111,99,107,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,67,80,85,32,116,105,109,101,32,111,114,32,114,101,97,108,32,116,105,109,101,32,115,105,110,99,101,32,116,104,101,32,115,116,97,114,116,32,111,102,32,116,104,101,32,112,114,111,99,101,115,115,32,111,114,32,115,105,110,99,101,10,116,104,101,32,102,105,114,115,116,32,99,97,108,108,32,116,111,32,99,108,111,99,107,40,41,46,32,32,84,104,105,115,32,104,97,115,32,97,115,32,109,117,99,104,32,112,114,101,99,105,115,105,111,110,32,97,115,32,116,104,101,32,115,121,115,116,101,109,10,114,101,99,111,114,100,115,46,0] /* clock() -> floating  */, "i8", ALLOC_NORMAL);
__str1284=allocate([100,58,115,108,101,101,112,0] /* d:sleep\00 */, "i8", ALLOC_NORMAL);
_sleep_doc=allocate([115,108,101,101,112,40,115,101,99,111,110,100,115,41,10,10,68,101,108,97,121,32,101,120,101,99,117,116,105,111,110,32,102,111,114,32,97,32,103,105,118,101,110,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,46,32,32,84,104,101,32,97,114,103,117,109,101,110,116,32,109,97,121,32,98,101,10,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,102,111,114,32,115,117,98,115,101,99,111,110,100,32,112,114,101,99,105,115,105,111,110,46,0] /* sleep(seconds)\0A\0A */, "i8", ALLOC_NORMAL);
__str2285=allocate([116,109,95,121,101,97,114,0] /* tm_year\00 */, "i8", ALLOC_NORMAL);
__str3286=allocate([121,101,97,114,44,32,102,111,114,32,101,120,97,109,112,108,101,44,32,49,57,57,51,0] /* year, for example, 1 */, "i8", ALLOC_NORMAL);
__str4287=allocate([116,109,95,109,111,110,0] /* tm_mon\00 */, "i8", ALLOC_NORMAL);
__str5288=allocate([109,111,110,116,104,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,49,50,93,0] /* month of year, range */, "i8", ALLOC_NORMAL);
__str6289=allocate([116,109,95,109,100,97,121,0] /* tm_mday\00 */, "i8", ALLOC_NORMAL);
__str7290=allocate([100,97,121,32,111,102,32,109,111,110,116,104,44,32,114,97,110,103,101,32,91,49,44,32,51,49,93,0] /* day of month, range  */, "i8", ALLOC_NORMAL);
__str8291=allocate([116,109,95,104,111,117,114,0] /* tm_hour\00 */, "i8", ALLOC_NORMAL);
__str9292=allocate([104,111,117,114,115,44,32,114,97,110,103,101,32,91,48,44,32,50,51,93,0] /* hours, range [0, 23] */, "i8", ALLOC_NORMAL);
__str10293=allocate([116,109,95,109,105,110,0] /* tm_min\00 */, "i8", ALLOC_NORMAL);
__str11294=allocate([109,105,110,117,116,101,115,44,32,114,97,110,103,101,32,91,48,44,32,53,57,93,0] /* minutes, range [0, 5 */, "i8", ALLOC_NORMAL);
__str12295=allocate([116,109,95,115,101,99,0] /* tm_sec\00 */, "i8", ALLOC_NORMAL);
__str13296=allocate([115,101,99,111,110,100,115,44,32,114,97,110,103,101,32,91,48,44,32,54,49,93,41,0] /* seconds, range [0, 6 */, "i8", ALLOC_NORMAL);
__str14297=allocate([116,109,95,119,100,97,121,0] /* tm_wday\00 */, "i8", ALLOC_NORMAL);
__str15298=allocate([100,97,121,32,111,102,32,119,101,101,107,44,32,114,97,110,103,101,32,91,48,44,32,54,93,44,32,77,111,110,100,97,121,32,105,115,32,48,0] /* day of week, range [ */, "i8", ALLOC_NORMAL);
__str16299=allocate([116,109,95,121,100,97,121,0] /* tm_yday\00 */, "i8", ALLOC_NORMAL);
__str17300=allocate([100,97,121,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,51,54,54,93,0] /* day of year, range [ */, "i8", ALLOC_NORMAL);
__str18301=allocate([116,109,95,105,115,100,115,116,0] /* tm_isdst\00 */, "i8", ALLOC_NORMAL);
__str19302=allocate([49,32,105,102,32,115,117,109,109,101,114,32,116,105,109,101,32,105,115,32,105,110,32,101,102,102,101,99,116,44,32,48,32,105,102,32,110,111,116,44,32,97,110,100,32,45,49,32,105,102,32,117,110,107,110,111,119,110,0] /* 1 if summer time is  */, "i8", ALLOC_NORMAL);
_struct_time_type_fields=allocate(80, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_time_type_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str20303=allocate([116,105,109,101,46,115,116,114,117,99,116,95,116,105,109,101,0] /* time.struct_time\00 */, "i8", ALLOC_NORMAL);
__str21304=allocate([84,104,101,32,116,105,109,101,32,118,97,108,117,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,103,109,116,105,109,101,40,41,44,32,108,111,99,97,108,116,105,109,101,40,41,44,32,97,110,100,32,115,116,114,112,116,105,109,101,40,41,44,32,97,110,100,10,32,97,99,99,101,112,116,101,100,32,98,121,32,97,115,99,116,105,109,101,40,41,44,32,109,107,116,105,109,101,40,41,32,97,110,100,32,115,116,114,102,116,105,109,101,40,41,46,32,32,77,97,121,32,98,101,32,99,111,110,115,105,100,101,114,101,100,32,97,115,32,97,10,32,115,101,113,117,101,110,99,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,46,10,10,32,78,111,116,101,32,116,104,97,116,32,115,101,118,101,114,97,108,32,102,105,101,108,100,115,39,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,116,104,101,32,115,97,109,101,32,97,115,32,116,104,111,115,101,32,100,101,102,105,110,101,100,32,98,121,10,32,116,104,101,32,67,32,108,97,110,103,117,97,103,101,32,115,116,97,110,100,97,114,100,32,102,111,114,32,115,116,114,117,99,116,32,116,109,46,32,32,70,111,114,32,101,120,97,109,112,108,101,44,32,116,104,101,32,118,97,108,117,101,32,111,102,32,116,104,101,10,32,102,105,101,108,100,32,116,109,95,121,101,97,114,32,105,115,32,116,104,101,32,97,99,116,117,97,108,32,121,101,97,114,44,32,110,111,116,32,121,101,97,114,32,45,32,49,57,48,48,46,32,32,83,101,101,32,105,110,100,105,118,105,100,117,97,108,10,32,102,105,101,108,100,115,39,32,100,101,115,99,114,105,112,116,105,111,110,115,32,102,111,114,32,100,101,116,97,105,108,115,46,0] /* The time value as re */, "i8", ALLOC_NORMAL);
_StructTimeType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyDateTime_TZInfo*)*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"%struct.PyDateTime_TZInfo*",0,0,0,"void (%struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str22305=allocate([124,79,58,103,109,116,105,109,101,0] /* |O:gmtime\00 */, "i8", ALLOC_NORMAL);
_gmtime_doc=allocate([103,109,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,32,116,109,95,109,111,110,44,32,116,109,95,109,100,97,121,44,32,116,109,95,104,111,117,114,44,32,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,32,116,109,95,119,100,97,121,44,32,116,109,95,121,100,97,121,44,32,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,85,84,67,32,40,97,46,107,46,97,46,10,71,77,84,41,46,32,32,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0] /* gmtime([seconds]) -> */, "i8", ALLOC_NORMAL);
__str23306=allocate([124,79,58,108,111,99,97,108,116,105,109,101,0] /* |O:localtime\00 */, "i8", ALLOC_NORMAL);
_localtime_doc=allocate([108,111,99,97,108,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,116,109,95,109,111,110,44,116,109,95,109,100,97,121,44,116,109,95,104,111,117,114,44,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,116,109,95,119,100,97,121,44,116,109,95,121,100,97,121,44,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0] /* localtime([seconds]) */, "i8", ALLOC_NORMAL);
__str24307=allocate([40,105,105,105,105,105,105,105,105,105,41,0] /* (iiiiiiiii)\00 */, "i8", ALLOC_NORMAL);
_moddict=allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
__str25308=allocate([97,99,99,101,112,116,50,100,121,101,97,114,0] /* accept2dyear\00 */, "i8", ALLOC_NORMAL);
__str26309=allocate([121,101,97,114,32,62,61,32,49,57,48,48,32,114,101,113,117,105,114,101,100,0] /* year >= 1900 require */, "i8", ALLOC_NORMAL);
__str27310=allocate([121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* year out of range\00 */, "i8", ALLOC_NORMAL);
__str28311=allocate([115,124,79,58,115,116,114,102,116,105,109,101,0] /* s|O:strftime\00 */, "i8", ALLOC_NORMAL);
__str29312=allocate([109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* month out of range\0 */, "i8", ALLOC_NORMAL);
__str30313=allocate([100,97,121,32,111,102,32,109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of month out of  */, "i8", ALLOC_NORMAL);
__str31314=allocate([104,111,117,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* hour out of range\00 */, "i8", ALLOC_NORMAL);
__str32315=allocate([109,105,110,117,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* minute out of range\ */, "i8", ALLOC_NORMAL);
__str33316=allocate([115,101,99,111,110,100,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* seconds out of range */, "i8", ALLOC_NORMAL);
__str34317=allocate([100,97,121,32,111,102,32,119,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of week out of r */, "i8", ALLOC_NORMAL);
__str35318=allocate([100,97,121,32,111,102,32,121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* day of year out of r */, "i8", ALLOC_NORMAL);
_strftime_doc=allocate([115,116,114,102,116,105,109,101,40,102,111,114,109,97,116,91,44,32,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,10,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0] /* strftime(format[, tu */, "i8", ALLOC_NORMAL);
__str37320=allocate([95,115,116,114,112,116,105,109,101,95,116,105,109,101,0] /* _strptime_time\00 */, "i8", ALLOC_NORMAL);
_strptime_doc=allocate([115,116,114,112,116,105,109,101,40,115,116,114,105,110,103,44,32,102,111,114,109,97,116,41,32,45,62,32,115,116,114,117,99,116,95,116,105,109,101,10,10,80,97,114,115,101,32,97,32,115,116,114,105,110,103,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,32,40,115,97,109,101,32,97,115,32,115,116,114,102,116,105,109,101,40,41,41,46,0] /* strptime(string, for */, "i8", ALLOC_NORMAL);
__str39322=allocate([97,115,99,116,105,109,101,0] /* asctime\00 */, "i8", ALLOC_NORMAL);
__str40323=allocate([105,110,118,97,108,105,100,32,116,105,109,101,0] /* invalid time\00 */, "i8", ALLOC_NORMAL);
_asctime_doc=allocate([97,115,99,116,105,109,101,40,91,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,44,32,101,46,103,46,32,39,83,97,116,32,74,117,110,32,48,54,32,49,54,58,50,54,58,49,49,32,49,57,57,56,39,46,10,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,10,105,115,32,117,115,101,100,46,0] /* asctime([tuple]) ->  */, "i8", ALLOC_NORMAL);
__str42325=allocate([117,110,99,111,110,118,101,114,116,105,98,108,101,32,116,105,109,101,0] /* unconvertible time\0 */, "i8", ALLOC_NORMAL);
_ctime_doc=allocate([99,116,105,109,101,40,115,101,99,111,110,100,115,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,115,116,114,105,110,103,32,105,110,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,97,115,99,116,105,109,101,40,108,111,99,97,108,116,105,109,101,40,115,101,99,111,110,100,115,41,41,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,10,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0] /* ctime(seconds) -> st */, "i8", ALLOC_NORMAL);
__str43326=allocate([109,107,116,105,109,101,32,97,114,103,117,109,101,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* mktime argument out  */, "i8", ALLOC_NORMAL);
_mktime_doc=allocate([109,107,116,105,109,101,40,116,117,112,108,101,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,105,110,32,108,111,99,97,108,32,116,105,109,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,0] /* mktime(tuple) -> flo */, "i8", ALLOC_NORMAL);
_tzset_doc=allocate([116,122,115,101,116,40,41,10,10,73,110,105,116,105,97,108,105,122,101,44,32,111,114,32,114,101,105,110,105,116,105,97,108,105,122,101,44,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,116,111,32,116,104,101,32,118,97,108,117,101,32,115,116,111,114,101,100,32,105,110,10,111,115,46,101,110,118,105,114,111,110,91,39,84,90,39,93,46,32,84,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,115,104,111,117,108,100,32,98,101,32,115,112,101,99,105,102,105,101,100,32,105,110,10,115,116,97,110,100,97,114,100,32,85,110,105,120,32,116,105,109,101,122,111,110,101,32,102,111,114,109,97,116,32,97,115,32,100,111,99,117,109,101,110,116,101,100,32,105,110,32,116,104,101,32,116,122,115,101,116,32,109,97,110,32,112,97,103,101,10,40,101,103,46,32,39,85,83,47,69,97,115,116,101,114,110,39,44,32,39,69,117,114,111,112,101,47,65,109,115,116,101,114,100,97,109,39,41,46,32,85,110,107,110,111,119,110,32,116,105,109,101,122,111,110,101,115,32,119,105,108,108,32,115,105,108,101,110,116,108,121,10,102,97,108,108,32,98,97,99,107,32,116,111,32,85,84,67,46,32,73,102,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,105,115,32,110,111,116,32,115,101,116,44,32,116,104,101,32,108,111,99,97,108,10,116,105,109,101,122,111,110,101,32,105,115,32,115,101,116,32,116,111,32,116,104,101,32,115,121,115,116,101,109,115,32,98,101,115,116,32,103,117,101,115,115,32,111,102,32,119,97,108,108,99,108,111,99,107,32,116,105,109,101,46,10,67,104,97,110,103,105,110,103,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,119,105,116,104,111,117,116,32,99,97,108,108,105,110,103,32,116,122,115,101,116,32,42,109,97,121,42,32,99,104,97,110,103,101,10,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,117,115,101,100,32,98,121,32,109,101,116,104,111,100,115,32,115,117,99,104,32,97,115,32,108,111,99,97,108,116,105,109,101,44,32,98,117,116,32,116,104,105,115,32,98,101,104,97,118,105,111,117,114,10,115,104,111,117,108,100,32,110,111,116,32,98,101,32,114,101,108,105,101,100,32,111,110,46,0] /* tzset()\0A\0AInitial */, "i8", ALLOC_NORMAL);
__str45328=allocate([32,32,32,0] /*    \00 */, "i8", ALLOC_NORMAL);
__str46329=allocate([116,105,109,101,122,111,110,101,0] /* timezone\00 */, "i8", ALLOC_NORMAL);
__str47330=allocate([97,108,116,122,111,110,101,0] /* altzone\00 */, "i8", ALLOC_NORMAL);
__str48331=allocate([100,97,121,108,105,103,104,116,0] /* daylight\00 */, "i8", ALLOC_NORMAL);
__str49332=allocate([40,122,122,41,0] /* (zz)\00 */, "i8", ALLOC_NORMAL);
__str51334=allocate([99,108,111,99,107,0] /* clock\00 */, "i8", ALLOC_NORMAL);
__str52335=allocate([115,108,101,101,112,0] /* sleep\00 */, "i8", ALLOC_NORMAL);
__str53336=allocate([103,109,116,105,109,101,0] /* gmtime\00 */, "i8", ALLOC_NORMAL);
__str54337=allocate([108,111,99,97,108,116,105,109,101,0] /* localtime\00 */, "i8", ALLOC_NORMAL);
__str55338=allocate([109,107,116,105,109,101,0] /* mktime\00 */, "i8", ALLOC_NORMAL);
__str58341=allocate([116,122,115,101,116,0] /* tzset\00 */, "i8", ALLOC_NORMAL);
_time_methods342=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,118,97,114,105,111,117,115,32,102,117,110,99,116,105,111,110,115,32,116,111,32,109,97,110,105,112,117,108,97,116,101,32,116,105,109,101,32,118,97,108,117,101,115,46,10,10,84,104,101,114,101,32,97,114,101,32,116,119,111,32,115,116,97,110,100,97,114,100,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,32,111,102,32,116,105,109,101,46,32,32,79,110,101,32,105,115,32,116,104,101,32,110,117,109,98,101,114,10,111,102,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,44,32,105,110,32,85,84,67,32,40,97,46,107,46,97,46,32,71,77,84,41,46,32,32,73,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,101,103,101,114,10,111,114,32,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,40,116,111,32,114,101,112,114,101,115,101,110,116,32,102,114,97,99,116,105,111,110,115,32,111,102,32,115,101,99,111,110,100,115,41,46,10,84,104,101,32,69,112,111,99,104,32,105,115,32,115,121,115,116,101,109,45,100,101,102,105,110,101,100,59,32,111,110,32,85,110,105,120,44,32,105,116,32,105,115,32,103,101,110,101,114,97,108,108,121,32,74,97,110,117,97,114,121,32,49,115,116,44,32,49,57,55,48,46,10,84,104,101,32,97,99,116,117,97,108,32,118,97,108,117,101,32,99,97,110,32,98,101,32,114,101,116,114,105,101,118,101,100,32,98,121,32,99,97,108,108,105,110,103,32,103,109,116,105,109,101,40,48,41,46,10,10,84,104,101,32,111,116,104,101,114,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,105,115,32,97,32,116,117,112,108,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,32,103,105,118,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,101,32,116,117,112,108,101,32,105,116,101,109,115,32,97,114,101,58,10,32,32,121,101,97,114,32,40,102,111,117,114,32,100,105,103,105,116,115,44,32,101,46,103,46,32,49,57,57,56,41,10,32,32,109,111,110,116,104,32,40,49,45,49,50,41,10,32,32,100,97,121,32,40,49,45,51,49,41,10,32,32,104,111,117,114,115,32,40,48,45,50,51,41,10,32,32,109,105,110,117,116,101,115,32,40,48,45,53,57,41,10,32,32,115,101,99,111,110,100,115,32,40,48,45,53,57,41,10,32,32,119,101,101,107,100,97,121,32,40,48,45,54,44,32,77,111,110,100,97,121,32,105,115,32,48,41,10,32,32,74,117,108,105,97,110,32,100,97,121,32,40,100,97,121,32,105,110,32,116,104,101,32,121,101,97,114,44,32,49,45,51,54,54,41,10,32,32,68,83,84,32,40,68,97,121,108,105,103,104,116,32,83,97,118,105,110,103,115,32,84,105,109,101,41,32,102,108,97,103,32,40,45,49,44,32,48,32,111,114,32,49,41,10,73,102,32,116,104,101,32,68,83,84,32,102,108,97,103,32,105,115,32,48,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,114,101,103,117,108,97,114,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,49,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,68,83,84,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,45,49,44,32,109,107,116,105,109,101,40,41,32,115,104,111,117,108,100,32,103,117,101,115,115,32,98,97,115,101,100,32,111,110,32,116,104,101,32,100,97,116,101,32,97,110,100,32,116,105,109,101,46,10,10,86,97,114,105,97,98,108,101,115,58,10,10,116,105,109,101,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,115,116,97,110,100,97,114,100,32,116,105,109,101,10,97,108,116,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,68,83,84,32,116,105,109,101,10,100,97,121,108,105,103,104,116,32,45,45,32,119,104,101,116,104,101,114,32,108,111,99,97,108,32,116,105,109,101,32,115,104,111,117,108,100,32,114,101,102,108,101,99,116,32,68,83,84,10,116,122,110,97,109,101,32,45,45,32,116,117,112,108,101,32,111,102,32,40,115,116,97,110,100,97,114,100,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,44,32,68,83,84,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,41,10,10,70,117,110,99,116,105,111,110,115,58,10,10,116,105,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,97,115,32,97,32,102,108,111,97,116,10,99,108,111,99,107,40,41,32,45,45,32,114,101,116,117,114,110,32,67,80,85,32,116,105,109,101,32,115,105,110,99,101,32,112,114,111,99,101,115,115,32,115,116,97,114,116,32,97,115,32,97,32,102,108,111,97,116,10,115,108,101,101,112,40,41,32,45,45,32,100,101,108,97,121,32,102,111,114,32,97,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,32,103,105,118,101,110,32,97,115,32,97,32,102,108,111,97,116,10,103,109,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,85,84,67,32,116,117,112,108,101,10,108,111,99,97,108,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,10,97,115,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,10,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,116,111,32,115,116,114,105,110,103,10,109,107,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,10,115,116,114,102,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,115,116,114,112,116,105,109,101,40,41,32,45,45,32,112,97,114,115,101,32,115,116,114,105,110,103,32,116,111,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,116,122,115,101,116,40,41,32,45,45,32,99,104,97,110,103,101,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,0] /* This module provides */, "i8", ALLOC_NORMAL);
__str59343=allocate([80,89,84,72,79,78,89,50,75,0] /* PYTHONY2K\00 */, "i8", ALLOC_NORMAL);
_initialized_b=allocate(1, "i1", ALLOC_NORMAL);
HEAP[_MonthNames_9355]=__str52;
HEAP[_MonthNames_9355+4]=__str53;
HEAP[_MonthNames_9355+8]=__str54;
HEAP[_MonthNames_9355+12]=__str55;
HEAP[_MonthNames_9355+16]=__str56;
HEAP[_MonthNames_9355+20]=__str57;
HEAP[_MonthNames_9355+24]=__str58;
HEAP[_MonthNames_9355+28]=__str59;
HEAP[_MonthNames_9355+32]=__str60;
HEAP[_MonthNames_9355+36]=__str61;
HEAP[_MonthNames_9355+40]=__str62;
HEAP[_MonthNames_9355+44]=__str63;
HEAP[_DayNames_9354]=__str64;
HEAP[_DayNames_9354+4]=__str65;
HEAP[_DayNames_9354+8]=__str66;
HEAP[_DayNames_9354+12]=__str67;
HEAP[_DayNames_9354+16]=__str68;
HEAP[_DayNames_9354+20]=__str69;
HEAP[_DayNames_9354+24]=__str70;
HEAP[_keywords_10491]=__str114;
HEAP[_keywords_10491+4]=__str115;
HEAP[_keywords_10491+8]=__str116;
HEAP[_keywords_10491+12]=__str117;
HEAP[_keywords_10491+16]=__str118;
HEAP[_keywords_10491+20]=__str119;
HEAP[_keywords_10491+24]=__str120;
HEAP[_delta_members]=__str114;
HEAP[_delta_members+16]=__str130;
HEAP[_delta_members+20]=__str115;
HEAP[_delta_members+36]=__str131;
HEAP[_delta_members+40]=__str116;
HEAP[_delta_members+56]=__str132;
HEAP[_delta_methods]=__str133;
HEAP[_delta_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_delta_methods+12]=__str134;
HEAP[_delta_methods+16]=__str135;
HEAP[_delta_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_delta_methods+28]=__str136;
HEAP[_delta_as_number]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_delta_as_number+4]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_delta_as_number+8]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_delta_as_number+12]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_delta_as_number+28]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_delta_as_number+32]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_delta_as_number+36]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_delta_as_number+40]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_delta_as_number+136]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyDateTime_DeltaType+12]=__str137;
HEAP[_PyDateTime_DeltaType+44]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyDateTime_DeltaType+48]=_delta_as_number;
HEAP[_PyDateTime_DeltaType+60]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyDateTime_DeltaType+68]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyDateTime_DeltaType+72]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyDateTime_DeltaType+88]=_delta_doc;
HEAP[_PyDateTime_DeltaType+100]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_PyDateTime_DeltaType+116]=_delta_methods;
HEAP[_PyDateTime_DeltaType+120]=_delta_members;
HEAP[_PyDateTime_DeltaType+156]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_date_getset]=__str138;
HEAP[_date_getset+4]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_date_getset+20]=__str139;
HEAP[_date_getset+24]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_date_getset+40]=__str140;
HEAP[_date_getset+44]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_date_kws]=__str138;
HEAP[_date_kws+4]=__str139;
HEAP[_date_kws+8]=__str140;
HEAP[_keywords_11164]=__str148;
HEAP[_date_methods]=__str142;
HEAP[_date_methods+4]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_date_methods+12]=__str155;
HEAP[_date_methods+16]=__str156;
HEAP[_date_methods+20]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_date_methods+28]=__str157;
HEAP[_date_methods+32]=__str158;
HEAP[_date_methods+36]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_date_methods+44]=__str159;
HEAP[_date_methods+48]=__str160;
HEAP[_date_methods+52]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_date_methods+60]=__str161;
HEAP[_date_methods+64]=__str93;
HEAP[_date_methods+68]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_date_methods+76]=__str162;
HEAP[_date_methods+80]=__str163;
HEAP[_date_methods+84]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_date_methods+92]=__str164;
HEAP[_date_methods+96]=__str149;
HEAP[_date_methods+100]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_date_methods+108]=__str165;
HEAP[_date_methods+112]=__str166;
HEAP[_date_methods+116]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_date_methods+124]=__str167;
HEAP[_date_methods+128]=__str146;
HEAP[_date_methods+132]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_date_methods+140]=__str168;
HEAP[_date_methods+144]=__str169;
HEAP[_date_methods+148]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_date_methods+156]=__str170;
HEAP[_date_methods+160]=__str171;
HEAP[_date_methods+164]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_date_methods+172]=__str172;
HEAP[_date_methods+176]=__str173;
HEAP[_date_methods+180]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_date_methods+188]=__str174;
HEAP[_date_methods+192]=__str82;
HEAP[_date_methods+196]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_date_methods+204]=__str175;
HEAP[_date_methods+208]=__str135;
HEAP[_date_methods+212]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_date_methods+220]=__str136;
HEAP[_date_as_number]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_date_as_number+4]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_PyDateTime_DateType+12]=__str176;
HEAP[_PyDateTime_DateType+44]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_PyDateTime_DateType+48]=_date_as_number;
HEAP[_PyDateTime_DateType+60]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_PyDateTime_DateType+68]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_PyDateTime_DateType+72]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyDateTime_DateType+88]=_date_doc;
HEAP[_PyDateTime_DateType+100]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_PyDateTime_DateType+116]=_date_methods;
HEAP[_PyDateTime_DateType+124]=_date_getset;
HEAP[_PyDateTime_DateType+156]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_tzinfo_methods]=__str45;
HEAP[_tzinfo_methods+4]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_tzinfo_methods+12]=__str186;
HEAP[_tzinfo_methods+16]=__str42;
HEAP[_tzinfo_methods+20]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_tzinfo_methods+28]=__str187;
HEAP[_tzinfo_methods+32]=__str44;
HEAP[_tzinfo_methods+36]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_tzinfo_methods+44]=__str188;
HEAP[_tzinfo_methods+48]=__str189;
HEAP[_tzinfo_methods+52]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_tzinfo_methods+60]=__str190;
HEAP[_tzinfo_methods+64]=__str135;
HEAP[_tzinfo_methods+68]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_tzinfo_methods+76]=__str191;
HEAP[_PyDateTime_TZInfoType+12]=__str192;
HEAP[_PyDateTime_TZInfoType+72]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyDateTime_TZInfoType+88]=_tzinfo_doc;
HEAP[_PyDateTime_TZInfoType+116]=_tzinfo_methods;
HEAP[_PyDateTime_TZInfoType+156]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_time_getset]=__str193;
HEAP[_time_getset+4]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_time_getset+20]=__str194;
HEAP[_time_getset+24]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_time_getset+40]=__str195;
HEAP[_time_getset+44]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_time_getset+60]=__str196;
HEAP[_time_getset+64]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_time_getset+80]=__str48;
HEAP[_time_getset+84]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_time_kws]=__str193;
HEAP[_time_kws+4]=__str194;
HEAP[_time_kws+8]=__str195;
HEAP[_time_kws+12]=__str196;
HEAP[_time_kws+16]=__str48;
HEAP[_keywords_12042]=__str148;
HEAP[_time_methods]=__str146;
HEAP[_time_methods+4]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_time_methods+12]=__str213;
HEAP[_time_methods+16]=__str93;
HEAP[_time_methods+20]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_time_methods+28]=__str162;
HEAP[_time_methods+32]=__str163;
HEAP[_time_methods+36]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_time_methods+44]=__str164;
HEAP[_time_methods+48]=__str42;
HEAP[_time_methods+52]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_time_methods+60]=__str214;
HEAP[_time_methods+64]=__str45;
HEAP[_time_methods+68]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_time_methods+76]=__str215;
HEAP[_time_methods+80]=__str44;
HEAP[_time_methods+84]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_time_methods+92]=__str216;
HEAP[_time_methods+96]=__str82;
HEAP[_time_methods+100]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_time_methods+108]=__str217;
HEAP[_time_methods+112]=__str135;
HEAP[_time_methods+116]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_time_methods+124]=__str136;
HEAP[_time_as_number+40]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_PyDateTime_TimeType+12]=__str218;
HEAP[_PyDateTime_TimeType+24]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_PyDateTime_TimeType+44]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_PyDateTime_TimeType+48]=_time_as_number;
HEAP[_PyDateTime_TimeType+60]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_PyDateTime_TimeType+68]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_PyDateTime_TimeType+72]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyDateTime_TimeType+88]=_time_doc;
HEAP[_PyDateTime_TimeType+100]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_PyDateTime_TimeType+116]=_time_methods;
HEAP[_PyDateTime_TimeType+124]=_time_getset;
HEAP[_PyDateTime_TimeType+152]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_PyDateTime_TimeType+156]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_datetime_getset]=__str193;
HEAP[_datetime_getset+4]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_datetime_getset+20]=__str194;
HEAP[_datetime_getset+24]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_datetime_getset+40]=__str195;
HEAP[_datetime_getset+44]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_datetime_getset+60]=__str196;
HEAP[_datetime_getset+64]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_datetime_getset+80]=__str48;
HEAP[_datetime_getset+84]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_datetime_kws]=__str138;
HEAP[_datetime_kws+4]=__str139;
HEAP[_datetime_kws+8]=__str140;
HEAP[_datetime_kws+12]=__str193;
HEAP[_datetime_kws+16]=__str194;
HEAP[_datetime_kws+20]=__str195;
HEAP[_datetime_kws+24]=__str196;
HEAP[_datetime_kws+28]=__str48;
HEAP[_keywords_12654]=__str223;
HEAP[_keywords_12701]=__str225;
HEAP[_keywords_12701+4]=__str223;
HEAP[_keywords_12871]=__str232;
HEAP[_keywords_12871+4]=__str92;
HEAP[_keywords_13363]=__str241;
HEAP[_keywords_13698]=__str223;
HEAP[_datetime_methods]=__str247;
HEAP[_datetime_methods+4]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_datetime_methods+12]=__str248;
HEAP[_datetime_methods+16]=__str249;
HEAP[_datetime_methods+20]=(FUNCTION_TABLE_OFFSET + 150);
HEAP[_datetime_methods+28]=__str250;
HEAP[_datetime_methods+32]=__str142;
HEAP[_datetime_methods+36]=(FUNCTION_TABLE_OFFSET + 152);
HEAP[_datetime_methods+44]=__str251;
HEAP[_datetime_methods+48]=__str252;
HEAP[_datetime_methods+52]=(FUNCTION_TABLE_OFFSET + 154);
HEAP[_datetime_methods+60]=__str253;
HEAP[_datetime_methods+64]=__str254;
HEAP[_datetime_methods+68]=(FUNCTION_TABLE_OFFSET + 156);
HEAP[_datetime_methods+76]=__str255;
HEAP[_datetime_methods+80]=__str256;
HEAP[_datetime_methods+84]=(FUNCTION_TABLE_OFFSET + 158);
HEAP[_datetime_methods+92]=__str257;
HEAP[_datetime_methods+96]=__str232;
HEAP[_datetime_methods+100]=(FUNCTION_TABLE_OFFSET + 160);
HEAP[_datetime_methods+108]=__str258;
HEAP[_datetime_methods+112]=__str92;
HEAP[_datetime_methods+116]=(FUNCTION_TABLE_OFFSET + 162);
HEAP[_datetime_methods+124]=__str259;
HEAP[_datetime_methods+128]=__str260;
HEAP[_datetime_methods+132]=(FUNCTION_TABLE_OFFSET + 164);
HEAP[_datetime_methods+140]=__str261;
HEAP[_datetime_methods+144]=__str160;
HEAP[_datetime_methods+148]=(FUNCTION_TABLE_OFFSET + 166);
HEAP[_datetime_methods+156]=__str161;
HEAP[_datetime_methods+160]=__str149;
HEAP[_datetime_methods+164]=(FUNCTION_TABLE_OFFSET + 168);
HEAP[_datetime_methods+172]=__str165;
HEAP[_datetime_methods+176]=__str262;
HEAP[_datetime_methods+180]=(FUNCTION_TABLE_OFFSET + 170);
HEAP[_datetime_methods+188]=__str263;
HEAP[_datetime_methods+192]=__str146;
HEAP[_datetime_methods+196]=(FUNCTION_TABLE_OFFSET + 172);
HEAP[_datetime_methods+204]=__str264;
HEAP[_datetime_methods+208]=__str42;
HEAP[_datetime_methods+212]=(FUNCTION_TABLE_OFFSET + 174);
HEAP[_datetime_methods+220]=__str214;
HEAP[_datetime_methods+224]=__str45;
HEAP[_datetime_methods+228]=(FUNCTION_TABLE_OFFSET + 176);
HEAP[_datetime_methods+236]=__str215;
HEAP[_datetime_methods+240]=__str44;
HEAP[_datetime_methods+244]=(FUNCTION_TABLE_OFFSET + 178);
HEAP[_datetime_methods+252]=__str216;
HEAP[_datetime_methods+256]=__str82;
HEAP[_datetime_methods+260]=(FUNCTION_TABLE_OFFSET + 180);
HEAP[_datetime_methods+268]=__str265;
HEAP[_datetime_methods+272]=__str266;
HEAP[_datetime_methods+276]=(FUNCTION_TABLE_OFFSET + 182);
HEAP[_datetime_methods+284]=__str267;
HEAP[_datetime_methods+288]=__str135;
HEAP[_datetime_methods+292]=(FUNCTION_TABLE_OFFSET + 184);
HEAP[_datetime_methods+300]=__str136;
HEAP[_datetime_as_number]=(FUNCTION_TABLE_OFFSET + 186);
HEAP[_datetime_as_number+4]=(FUNCTION_TABLE_OFFSET + 188);
HEAP[_PyDateTime_DateTimeType+12]=__str268;
HEAP[_PyDateTime_DateTimeType+24]=(FUNCTION_TABLE_OFFSET + 190);
HEAP[_PyDateTime_DateTimeType+44]=(FUNCTION_TABLE_OFFSET + 192);
HEAP[_PyDateTime_DateTimeType+48]=_datetime_as_number;
HEAP[_PyDateTime_DateTimeType+60]=(FUNCTION_TABLE_OFFSET + 194);
HEAP[_PyDateTime_DateTimeType+68]=(FUNCTION_TABLE_OFFSET + 196);
HEAP[_PyDateTime_DateTimeType+72]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyDateTime_DateTimeType+88]=_datetime_doc;
HEAP[_PyDateTime_DateTimeType+100]=(FUNCTION_TABLE_OFFSET + 198);
HEAP[_PyDateTime_DateTimeType+116]=_datetime_methods;
HEAP[_PyDateTime_DateTimeType+124]=_datetime_getset;
HEAP[_PyDateTime_DateTimeType+128]=_PyDateTime_DateType;
HEAP[_PyDateTime_DateTimeType+152]=(FUNCTION_TABLE_OFFSET + 200);
HEAP[_PyDateTime_DateTimeType+156]=(FUNCTION_TABLE_OFFSET + 202);
HEAP[_CAPI]=_PyDateTime_DateType;
HEAP[_CAPI+4]=_PyDateTime_DateTimeType;
HEAP[_CAPI+8]=_PyDateTime_TimeType;
HEAP[_CAPI+12]=_PyDateTime_DeltaType;
HEAP[_CAPI+16]=_PyDateTime_TZInfoType;
HEAP[_CAPI+20]=(FUNCTION_TABLE_OFFSET + 204);
HEAP[_CAPI+24]=(FUNCTION_TABLE_OFFSET + 206);
HEAP[_CAPI+28]=(FUNCTION_TABLE_OFFSET + 208);
HEAP[_CAPI+32]=(FUNCTION_TABLE_OFFSET + 210);
HEAP[_CAPI+36]=(FUNCTION_TABLE_OFFSET + 152);
HEAP[_CAPI+40]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_struct_time_type_fields]=__str2285;
HEAP[_struct_time_type_fields+4]=__str3286;
HEAP[_struct_time_type_fields+8]=__str4287;
HEAP[_struct_time_type_fields+12]=__str5288;
HEAP[_struct_time_type_fields+16]=__str6289;
HEAP[_struct_time_type_fields+20]=__str7290;
HEAP[_struct_time_type_fields+24]=__str8291;
HEAP[_struct_time_type_fields+28]=__str9292;
HEAP[_struct_time_type_fields+32]=__str10293;
HEAP[_struct_time_type_fields+36]=__str11294;
HEAP[_struct_time_type_fields+40]=__str12295;
HEAP[_struct_time_type_fields+44]=__str13296;
HEAP[_struct_time_type_fields+48]=__str14297;
HEAP[_struct_time_type_fields+52]=__str15298;
HEAP[_struct_time_type_fields+56]=__str16299;
HEAP[_struct_time_type_fields+60]=__str17300;
HEAP[_struct_time_type_fields+64]=__str18301;
HEAP[_struct_time_type_fields+68]=__str19302;
HEAP[_struct_time_type_desc]=__str20303;
HEAP[_struct_time_type_desc+4]=__str21304;
HEAP[_struct_time_type_desc+8]=_struct_time_type_fields;
HEAP[_time_methods342]=__str92;
HEAP[_time_methods342+4]=(FUNCTION_TABLE_OFFSET + 212);
HEAP[_time_methods342+12]=_time_doc283;
HEAP[_time_methods342+16]=__str51334;
HEAP[_time_methods342+20]=(FUNCTION_TABLE_OFFSET + 214);
HEAP[_time_methods342+28]=_clock_doc;
HEAP[_time_methods342+32]=__str52335;
HEAP[_time_methods342+36]=(FUNCTION_TABLE_OFFSET + 216);
HEAP[_time_methods342+44]=_sleep_doc;
HEAP[_time_methods342+48]=__str53336;
HEAP[_time_methods342+52]=(FUNCTION_TABLE_OFFSET + 218);
HEAP[_time_methods342+60]=_gmtime_doc;
HEAP[_time_methods342+64]=__str54337;
HEAP[_time_methods342+68]=(FUNCTION_TABLE_OFFSET + 220);
HEAP[_time_methods342+76]=_localtime_doc;
HEAP[_time_methods342+80]=__str39322;
HEAP[_time_methods342+84]=(FUNCTION_TABLE_OFFSET + 222);
HEAP[_time_methods342+92]=_asctime_doc;
HEAP[_time_methods342+96]=__str160;
HEAP[_time_methods342+100]=(FUNCTION_TABLE_OFFSET + 224);
HEAP[_time_methods342+108]=_ctime_doc;
HEAP[_time_methods342+112]=__str55338;
HEAP[_time_methods342+116]=(FUNCTION_TABLE_OFFSET + 226);
HEAP[_time_methods342+124]=_mktime_doc;
HEAP[_time_methods342+128]=__str93;
HEAP[_time_methods342+132]=(FUNCTION_TABLE_OFFSET + 228);
HEAP[_time_methods342+140]=_strftime_doc;
HEAP[_time_methods342+144]=__str254;
HEAP[_time_methods342+148]=(FUNCTION_TABLE_OFFSET + 230);
HEAP[_time_methods342+156]=_strptime_doc;
HEAP[_time_methods342+160]=__str58341;
HEAP[_time_methods342+164]=(FUNCTION_TABLE_OFFSET + 232);
HEAP[_time_methods342+172]=_tzset_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

