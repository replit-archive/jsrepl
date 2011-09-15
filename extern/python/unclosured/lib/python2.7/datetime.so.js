"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 20;
  var $2___SIZE = 48;
  var $3___SIZE = 16;
  var $4___SIZE = 156;
  var $5___SIZE = 196;
  var $6___SIZE = 80;
  var $7___SIZE = 20;
  var $8___SIZE = 240;
  var $9___SIZE = 156;
  var $10___SIZE = 96;
  var $11___SIZE = 120;
  var $12___SIZE = 144;
  var $13___SIZE = 320;
  var $14___SIZE = 80;
  var $15___SIZE = 8;
  var $16___SIZE = 192;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyDateTime_CAPI___SIZE = 44;
  var $struct_PyDateTime_Date___SIZE = 20;
  var $struct_PyDateTime_Date___FLATTENER = [ 0, 4, 8, 12, 13 ];
  var $struct_PyDateTime_DateTime___SIZE = 28;
  var $struct_PyDateTime_DateTime___FLATTENER = [ 0, 4, 8, 12, 13, 24 ];
  var $struct_PyDateTime_Delta___SIZE = 24;
  var $struct_PyDateTime_TZInfo___SIZE = 8;
  var $struct_PyDateTime_Time___SIZE = 24;
  var $struct_PyDateTime_Time___FLATTENER = [ 0, 4, 8, 12, 13, 20 ];
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_PyStructSequence___SIZE = 16;
  var $struct_PyStructSequence_Desc___SIZE = 16;
  var $struct_PyStructSequence_Field___SIZE = 8;
  var $struct_PyUnicodeObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__PyDateTime_BaseTZInfo___SIZE = 16;
  var $struct__typeobject___SIZE = 196;
  var $struct_fd_set___SIZE = 128;
  var $struct_timeb___SIZE = 12;
  var $struct_timeb___FLATTENER = [ 0, 4, 6, 8 ];
  var $struct_timeval___SIZE = 8;
  var $struct_tm___SIZE = 44;
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
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $y_addr;
      var $r_addr;
      var $retval;
      var $0;
      var $quo;
      $x_addr = $x;
      $y_addr = $y;
      $r_addr = $r;
      
      
      if ($y_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str, __str1, 133, ___PRETTY_FUNCTION___8440);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      $quo = $x_addr / $y_addr | 0;
      
      
      
      
      
      
      HEAP[$r_addr] = $x_addr - $y_addr * $quo;
      
      
      
      if (HEAP[$r_addr] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $16 = $quo - 1;
      $quo = $16;
      
      
      
      var $20 = $y_addr + HEAP[$r_addr];
      
      HEAP[$r_addr] = $20;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if (HEAP[$r_addr] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$r_addr] >= $y_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str2, __str1, 140, ___PRETTY_FUNCTION___8440);
      throw "Reached an unreachable!";
     case 7:
      
      $0 = $quo;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _round_to_long($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      $x_addr = $x;
      
      
      var $3 = $x_addr;
      if ($x_addr >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = _floor($3 + .5);
      $x_addr = $5;
      __label__ = 3;
      break;
     case 2:
      
      var $7 = _ceil($3 - .5);
      $x_addr = $7;
      __label__ = 3;
      break;
     case 3:
      
      
      $0 = $x_addr | 0;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _is_leap($year) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $retval;
      var $iftmp_0;
      var $0;
      var $ayear;
      $year_addr = $year;
      
      $ayear = $year_addr;
      
      
      
      if (($ayear & 3) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if ($ayear % 100 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      if ($ayear % 400 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_0 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $iftmp_0;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _days_in_month($year, $month) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $month_addr;
      var $retval;
      var $0;
      $year_addr = $year;
      $month_addr = $month;
      
      
      if ($month_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str3, __str1, 192, ___PRETTY_FUNCTION___8488);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($month_addr > 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str4, __str1, 193, ___PRETTY_FUNCTION___8488);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($month_addr != 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $8 = _is_leap($year_addr);
      
      if ($8 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      $0 = 29;
      __label__ = 8;
      break;
     case 7:
      
      
      
      $0 = HEAP[__days_in_month + $month_addr * 4];
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
  function _days_before_month($year, $month) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $month_addr;
      var $retval;
      var $0;
      var $days;
      $year_addr = $year;
      $month_addr = $month;
      
      
      if ($month_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str3, __str1, 206, ___PRETTY_FUNCTION___8505);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($month_addr > 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str4, __str1, 207, ___PRETTY_FUNCTION___8505);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      $days = HEAP[__days_before_month + $month_addr * 4];
      
      
      if ($month_addr > 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      var $11 = _is_leap($year_addr);
      
      if ($11 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $14 = $days + 1;
      $days = $14;
      __label__ = 7;
      break;
     case 7:
      
      $0 = $days;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _days_before_year($year) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $retval;
      var $0;
      var $y;
      $year_addr = $year;
      
      
      $y = $year_addr - 1;
      
      
      if ($year_addr < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str1, 226, ___PRETTY_FUNCTION___8522);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $7 = $y;
      if ($y >= 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      $0 = ($y / 4 | 0) + $7 * 365 + (0 - ($y / 100 | 0)) + ($y / 400 | 0);
      __label__ = 7;
      break;
     case 4:
      var $18 = $7 != -1;
      if ($18) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str6, __str1, 230, ___PRETTY_FUNCTION___8522);
      throw "Reached an unreachable!";
     case 6:
      $0 = -366;
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
  function _ord_to_ymd($ordinal, $year, $month, $day) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $ordinal_addr = $ordinal;
      $year_addr = $year;
      $month_addr = $month;
      $day_addr = $day;
      
      
      if ($ordinal_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str7, __str1, 270, ___PRETTY_FUNCTION___8550);
      throw "Reached an unreachable!";
     case 2:
      
      var $3 = $ordinal_addr - 1;
      $ordinal_addr = $3;
      
      
      $n400 = $ordinal_addr / 146097 | 0;
      
      
      $n = $ordinal_addr % 146097;
      
      
      
      
      HEAP[$year_addr] = $n400 * 400 + 1;
      
      
      $n100 = $n / 36524 | 0;
      
      var $15 = $n % 36524;
      $n = $15;
      
      
      $n4 = $n / 1461 | 0;
      
      var $19 = $n % 1461;
      $n = $19;
      
      
      $n1 = $n / 365 | 0;
      
      var $23 = $n % 365;
      $n = $23;
      
      
      
      
      
      
      
      
      
      var $33 = $n1 + HEAP[$year_addr] + ($n100 * 25 + $n4) * 4;
      
      HEAP[$year_addr] = $33;
      
      
      if ($n1 == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($n100 == 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      if ($n != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str8, __str1, 299, ___PRETTY_FUNCTION___8550);
      throw "Reached an unreachable!";
     case 6:
      
      
      var $43 = HEAP[$year_addr] - 1;
      
      HEAP[$year_addr] = $43;
      
      HEAP[$month_addr] = 12;
      
      HEAP[$day_addr] = 31;
      __label__ = 25;
      break;
     case 7:
      
      
      if ($n1 != 3) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if ($n4 != 24) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($n100 == 3) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $iftmp_3 = 1;
      __label__ = 12;
      break;
     case 11:
      $iftmp_3 = 0;
      __label__ = 12;
      break;
     case 12:
      
      $leapyear = $iftmp_3;
      
      var $55 = HEAP[$year_addr];
      var $56 = _is_leap($55);
      
      
      if ($56 != $leapyear) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      ___assert_fail(__str9, __str1, 311, ___PRETTY_FUNCTION___8550);
      throw "Reached an unreachable!";
     case 14:
      
      
      
      
      HEAP[$month_addr] = $n + 50 >> 5;
      
      
      
      var $66 = HEAP[__days_before_month + HEAP[$month_addr] * 4];
      
      
      
      if (HEAP[$month_addr] <= 2) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if ($leapyear == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $iftmp_4 = 1;
      __label__ = 18;
      break;
     case 17:
      $iftmp_4 = 0;
      __label__ = 18;
      break;
     case 18:
      
      
      $preceding = $iftmp_4 + $66;
      
      
      
      if ($preceding > $n) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      var $79 = HEAP[$month_addr] - 1;
      
      HEAP[$month_addr] = $79;
      
      var $82 = HEAP[$month_addr];
      
      var $84 = HEAP[$year_addr];
      var $85 = _days_in_month($84, $82);
      
      var $87 = $preceding - $85;
      $preceding = $87;
      __label__ = 20;
      break;
     case 20:
      
      
      var $90 = $n - $preceding;
      $n = $90;
      
      if ($90 < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      ___assert_fail(__str10, __str1, 320, ___PRETTY_FUNCTION___8550);
      throw "Reached an unreachable!";
     case 22:
      
      var $93 = HEAP[$month_addr];
      
      var $95 = HEAP[$year_addr];
      var $96 = _days_in_month($95, $93);
      
      
      if ($96 <= $n) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      ___assert_fail(__str11, __str1, 321, ___PRETTY_FUNCTION___8550);
      throw "Reached an unreachable!";
     case 24:
      
      
      
      HEAP[$day_addr] = $n + 1;
      __label__ = 25;
      break;
     case 25:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _ymd_to_ord($year, $month, $day) {
    
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr = $year;
    $month_addr = $month;
    $day_addr = $day;
    
    var $2 = _days_before_year($year_addr);
    
    
    var $5 = _days_before_month($year_addr, $month_addr);
    
    
    
    $0 = $5 + $2 + $day_addr;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _weekday($year, $month, $day) {
    
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr = $year;
    $month_addr = $month;
    $day_addr = $day;
    
    
    
    var $4 = _ymd_to_ord($year_addr, $month_addr, $day_addr);
    
    
    $0 = ($4 + 6) % 7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _iso_week1_monday($year) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $retval;
      var $0;
      var $first_day;
      var $first_weekday;
      var $week1_monday;
      $year_addr = $year;
      
      var $2 = _ymd_to_ord($year_addr, 1, 1);
      $first_day = $2;
      
      
      
      $first_weekday = ($first_day + 6) % 7;
      
      
      
      $week1_monday = $first_day - $first_weekday;
      
      
      if ($first_weekday > 3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $12 = $week1_monday + 7;
      $week1_monday = $12;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $week1_monday;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _check_delta_day_range($days) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $days_addr;
      var $retval;
      var $0;
      $days_addr = $days;
      
      var $2 = $days_addr >= -999999999;
      
      
      
      if ($2 & $days_addr <= 999999999) {
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
      var $5 = HEAP[_PyExc_OverflowError];
      
      var $7 = _PyErr_Format($5, __str12, allocate([ $days_addr, 0, 0, 0, 999999999, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
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
  function _check_date_args($year, $month, $day) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $month_addr;
      var $day_addr;
      var $retval;
      var $0;
      $year_addr = $year;
      $month_addr = $month;
      $day_addr = $day;
      
      
      
      
      
      if ($year_addr <= 0 | $year_addr > 9999) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str13);
      $0 = -1;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      if ($month_addr <= 0 | $month_addr > 12) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str14);
      $0 = -1;
      __label__ = 8;
      break;
     case 4:
      
      
      if ($day_addr <= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $15 = _days_in_month($year_addr, $month_addr);
      
      
      if ($15 < $day_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $18 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($18, __str15);
      $0 = -1;
      __label__ = 8;
      break;
     case 7:
      $0 = 0;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _check_time_args($h, $m, $s, $us) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_addr;
      var $m_addr;
      var $s_addr;
      var $us_addr;
      var $retval;
      var $0;
      $h_addr = $h;
      $m_addr = $m;
      $s_addr = $s;
      $us_addr = $us;
      
      
      
      
      
      if ($h_addr < 0 | $h_addr > 23) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $5 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($5, __str16);
      $0 = -1;
      __label__ = 9;
      break;
     case 2:
      
      
      
      
      
      if ($m_addr < 0 | $m_addr > 59) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($10, __str17);
      $0 = -1;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      
      if ($s_addr < 0 | $s_addr > 59) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $15 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($15, __str18);
      $0 = -1;
      __label__ = 9;
      break;
     case 6:
      
      
      
      
      
      if ($us_addr < 0 | $us_addr > 999999) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $20 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($20, __str19);
      $0 = -1;
      __label__ = 9;
      break;
     case 8:
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalize_pair($hi, $lo, $factor) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $hi_addr;
      var $lo_addr;
      var $factor_addr;
      var $num_hi;
      var $new_hi;
      $hi_addr = $hi;
      $lo_addr = $lo;
      $factor_addr = $factor;
      
      
      if ($factor_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str20, __str1, 442, ___PRETTY_FUNCTION___8694);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      if ($lo_addr == $hi_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str21, __str1, 443, ___PRETTY_FUNCTION___8694);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      if (HEAP[$lo_addr] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$lo_addr] >= $factor_addr) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      var $13 = HEAP[$lo_addr];
      
      
      var $16 = _divmod($13, $factor_addr, $lo_addr);
      $num_hi = $16;
      
      
      
      
      $new_hi = $num_hi + HEAP[$hi_addr];
      
      
      
      
      
      
      
      
      
      if ((($num_hi ^ $new_hi) & ($new_hi ^ HEAP[$hi_addr])) < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str22, __str1, 447, ___PRETTY_FUNCTION___8694);
      throw "Reached an unreachable!";
     case 8:
      
      
      HEAP[$hi_addr] = $new_hi;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if (HEAP[$lo_addr] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      if (HEAP[$lo_addr] >= $factor_addr) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str23, __str1, 450, ___PRETTY_FUNCTION___8694);
      throw "Reached an unreachable!";
     case 12:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalize_d_s_us($d, $s, $us) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr;
      var $s_addr;
      var $us_addr;
      $d_addr = $d;
      $s_addr = $s;
      $us_addr = $us;
      
      
      
      if (HEAP[$us_addr] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$us_addr] > 999999) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      _normalize_pair($s_addr, $us_addr, 1e6);
      __label__ = 3;
      break;
     case 3:
      
      
      
      if (HEAP[$s_addr] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$s_addr] > 86399) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      _normalize_pair($d_addr, $s_addr, 86400);
      __label__ = 6;
      break;
     case 6:
      
      
      
      if (HEAP[$s_addr] < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if (HEAP[$s_addr] > 86399) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str24, __str1, 476, ___PRETTY_FUNCTION___8725);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      if (HEAP[$us_addr] < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if (HEAP[$us_addr] > 999999) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str25, __str1, 477, ___PRETTY_FUNCTION___8725);
      throw "Reached an unreachable!";
     case 12:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalize_y_m_d($y, $m, $d) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $y_addr;
      var $m_addr;
      var $d_addr;
      var $retval;
      var $0;
      var $dim;
      var $ordinal;
      $y_addr = $y;
      $m_addr = $m;
      $d_addr = $d;
      
      
      
      if (HEAP[$m_addr] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      if (HEAP[$m_addr] > 12) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[$m_addr] - 1;
      
      HEAP[$m_addr] = $9;
      
      
      _normalize_pair($y_addr, $m_addr, 12);
      
      
      var $15 = HEAP[$m_addr] + 1;
      
      HEAP[$m_addr] = $15;
      __label__ = 3;
      break;
     case 3:
      
      
      
      if (HEAP[$m_addr] <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$m_addr] > 12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str26, __str1, 505, ___PRETTY_FUNCTION___8752);
      throw "Reached an unreachable!";
     case 6:
      
      var $24 = HEAP[$m_addr];
      
      var $26 = HEAP[$y_addr];
      var $27 = _days_in_month($26, $24);
      $dim = $27;
      
      
      
      if (HEAP[$d_addr] <= 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$d_addr] > $dim) {
        __label__ = 8;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 8:
      
      
      
      if (HEAP[$d_addr] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      
      
      var $40 = HEAP[$m_addr] - 1;
      
      HEAP[$m_addr] = $40;
      
      
      
      if (HEAP[$m_addr] > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $46 = HEAP[$m_addr];
      
      var $48 = HEAP[$y_addr];
      var $49 = _days_in_month($48, $46);
      
      HEAP[$d_addr] = $49;
      __label__ = 17;
      break;
     case 11:
      
      
      var $53 = HEAP[$y_addr] - 1;
      
      HEAP[$y_addr] = $53;
      
      HEAP[$m_addr] = 12;
      
      HEAP[$d_addr] = 31;
      __label__ = 17;
      break;
     case 12:
      
      
      
      
      
      
      var $63 = HEAP[$m_addr];
      if (HEAP[$d_addr] == $dim + 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $64 = $63 + 1;
      
      HEAP[$m_addr] = $64;
      
      HEAP[$d_addr] = 1;
      
      
      
      if (HEAP[$m_addr] > 12) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      HEAP[$m_addr] = 1;
      
      
      var $73 = HEAP[$y_addr] + 1;
      
      HEAP[$y_addr] = $73;
      __label__ = 17;
      break;
     case 15:
      
      var $76 = HEAP[$y_addr];
      var $77 = _ymd_to_ord($76, $63, 1);
      
      
      var $80 = $77 + -1;
      
      $ordinal = $80 + HEAP[$d_addr];
      
      
      
      
      
      if ($ordinal <= 0 | $ordinal > 3652059) {
        __label__ = 24;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      _ord_to_ymd($ordinal, $y_addr, $m_addr, $d_addr);
      $0 = 0;
      __label__ = 25;
      break;
     case 17:
      
      
      
      if (HEAP[$m_addr] <= 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      ___assert_fail(__str27, __str1, 548, ___PRETTY_FUNCTION___8752);
      throw "Reached an unreachable!";
     case 19:
      
      
      
      if (HEAP[$d_addr] <= 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      ___assert_fail(__str28, __str1, 549, ___PRETTY_FUNCTION___8752);
      throw "Reached an unreachable!";
     case 21:
      
      
      
      if (HEAP[$y_addr] > 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      if (HEAP[$y_addr] <= 9999) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = 0;
      __label__ = 25;
      break;
     case 24:
      var $102 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($102, __str29);
      $0 = -1;
      __label__ = 25;
      break;
     case 25:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _normalize_date($year, $month, $day) {
    
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $retval;
    var $0;
    $year_addr = $year;
    $month_addr = $month;
    $day_addr = $day;
    
    
    
    var $4 = _normalize_y_m_d($year_addr, $month_addr, $day_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond) {
    
    var $year_addr;
    var $month_addr;
    var $day_addr;
    var $hour_addr;
    var $minute_addr;
    var $second_addr;
    var $microsecond_addr;
    var $retval;
    var $0;
    $year_addr = $year;
    $month_addr = $month;
    $day_addr = $day;
    $hour_addr = $hour;
    $minute_addr = $minute;
    $second_addr = $second;
    $microsecond_addr = $microsecond;
    
    
    _normalize_pair($second_addr, $microsecond_addr, 1e6);
    
    
    _normalize_pair($minute_addr, $second_addr, 60);
    
    
    _normalize_pair($hour_addr, $minute_addr, 60);
    
    
    _normalize_pair($day_addr, $hour_addr, 24);
    
    
    
    var $12 = _normalize_date($year_addr, $month_addr, $day_addr);
    $0 = $12;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_alloc($type, $aware) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $aware_addr;
      var $retval;
      var $0;
      var $iftmp_14;
      var $self;
      $type_addr = $type;
      $aware_addr = $aware;
      
      
      if ($aware_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_14 = 24;
      __label__ = 3;
      break;
     case 2:
      $iftmp_14 = 20;
      __label__ = 3;
      break;
     case 3:
      
      var $4 = _malloc($iftmp_14);
      
      $self = $4;
      
      if ($4 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $7 = _PyErr_NoMemory();
      $0 = $7;
      __label__ = 6;
      break;
     case 5:
      
      
      
      HEAP[$self + 4] = $type_addr;
      
      
      HEAP[$self] = 1;
      
      $0 = $self;
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
  function _datetime_alloc($type, $aware) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $aware_addr;
      var $retval;
      var $0;
      var $iftmp_15;
      var $self;
      $type_addr = $type;
      $aware_addr = $aware;
      
      
      if ($aware_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $iftmp_15 = 28;
      __label__ = 3;
      break;
     case 2:
      $iftmp_15 = 24;
      __label__ = 3;
      break;
     case 3:
      
      var $4 = _malloc($iftmp_15);
      
      $self = $4;
      
      if ($4 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $7 = _PyErr_NoMemory();
      $0 = $7;
      __label__ = 6;
      break;
     case 5:
      
      
      
      HEAP[$self + 4] = $type_addr;
      
      
      HEAP[$self] = 1;
      
      $0 = $self;
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
  function _set_date_fields($self, $y, $m, $d) {
    
    var $self_addr;
    var $y_addr;
    var $m_addr;
    var $d_addr;
    $self_addr = $self;
    $y_addr = $y;
    $m_addr = $m;
    $d_addr = $d;
    
    
    HEAP[$self_addr + 8] = -1;
    
    
    
    
    
    
    
    HEAP[$self_addr + 13] = ($y_addr & 65280) >> 8 & 255;
    
    
    
    
    
    HEAP[$self_addr + 13 + 1] = $y_addr & 255;
    
    
    
    
    
    HEAP[$self_addr + 13 + 2] = $m_addr & 255;
    
    
    
    
    
    HEAP[$self_addr + 13 + 3] = $d_addr & 255;
    return;
  }
  function _new_date_ex($year, $month, $day, $type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $year_addr;
      var $month_addr;
      var $day_addr;
      var $type_addr;
      var $retval;
      var $0;
      var $self;
      $year_addr = $year;
      $month_addr = $month;
      $day_addr = $day;
      $type_addr = $type;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      
      $self = $5;
      
      
      if ($self != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      _set_date_fields($self, $year_addr, $month_addr, $day_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      $0 = $self;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _new_datetime_ex($year, $month, $day, $hour, $minute, $second, $usecond, $tzinfo, $type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $year_addr = $year;
      $month_addr = $month;
      $day_addr = $day;
      $hour_addr = $hour;
      $minute_addr = $minute;
      $second_addr = $second;
      $usecond_addr = $usecond;
      $tzinfo_addr = $tzinfo;
      $type_addr = $type;
      
      
      
      $aware = $tzinfo_addr != __Py_NoneStruct;
      
      
      var $6 = HEAP[$type_addr + 152];
      
      
      
      var $10 = FUNCTION_TABLE[$6]($type_addr, $aware);
      
      $self = $10;
      
      
      if ($self != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      HEAP[$self + 12] = $aware;
      
      
      
      
      
      _set_date_fields($self, $year_addr, $month_addr, $day_addr);
      
      
      
      
      
      HEAP[$self + 13 + 4] = $hour_addr & 255;
      
      
      
      
      
      HEAP[$self + 13 + 5] = $minute_addr & 255;
      
      
      
      
      
      HEAP[$self + 13 + 6] = $second_addr & 255;
      
      
      
      
      
      
      
      HEAP[$self + 13 + 7] = ($usecond_addr & 16711680) >> 16 & 255;
      
      
      
      
      
      
      
      HEAP[$self + 13 + 8] = ($usecond_addr & 65280) >> 8 & 255;
      
      
      
      
      
      HEAP[$self + 13 + 9] = $usecond_addr & 255;
      
      
      if ($aware != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $61 = HEAP[$tzinfo_addr] + 1;
      
      
      HEAP[$tzinfo_addr] = $61;
      
      
      
      HEAP[$self + 24] = $tzinfo_addr;
      __label__ = 3;
      break;
     case 3:
      
      
      $0 = $self;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _new_time_ex($hour, $minute, $second, $usecond, $tzinfo, $type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $hour_addr = $hour;
      $minute_addr = $minute;
      $second_addr = $second;
      $usecond_addr = $usecond;
      $tzinfo_addr = $tzinfo;
      $type_addr = $type;
      
      
      
      $aware = $tzinfo_addr != __Py_NoneStruct;
      
      
      var $6 = HEAP[$type_addr + 152];
      
      
      
      var $10 = FUNCTION_TABLE[$6]($type_addr, $aware);
      
      $self = $10;
      
      
      if ($self != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      HEAP[$self + 12] = $aware;
      
      
      HEAP[$self + 8] = -1;
      
      
      
      
      
      HEAP[$self + 13] = $hour_addr & 255;
      
      
      
      
      
      HEAP[$self + 13 + 1] = $minute_addr & 255;
      
      
      
      
      
      HEAP[$self + 13 + 2] = $second_addr & 255;
      
      
      
      
      
      
      
      HEAP[$self + 13 + 3] = ($usecond_addr & 16711680) >> 16 & 255;
      
      
      
      
      
      
      
      HEAP[$self + 13 + 4] = ($usecond_addr & 65280) >> 8 & 255;
      
      
      
      
      
      HEAP[$self + 13 + 5] = $usecond_addr & 255;
      
      
      if ($aware != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      var $58 = HEAP[$tzinfo_addr] + 1;
      
      
      HEAP[$tzinfo_addr] = $58;
      
      
      
      HEAP[$self + 20] = $tzinfo_addr;
      __label__ = 3;
      break;
     case 3:
      
      
      $0 = $self;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _new_delta_ex($days, $seconds, $microseconds, $normalize, $type) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $days_addr = __stackBase__;
      var $seconds_addr = __stackBase__ + 4;
      var $microseconds_addr = __stackBase__ + 8;
      var $normalize_addr;
      var $type_addr;
      var $retval;
      var $0;
      var $self;
      HEAP[$days_addr] = $days;
      HEAP[$seconds_addr] = $seconds;
      HEAP[$microseconds_addr] = $microseconds;
      $normalize_addr = $normalize;
      $type_addr = $type;
      
      
      if ($normalize_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      _normalize_d_s_us($days_addr, $seconds_addr, $microseconds_addr);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$seconds_addr] < 0 | HEAP[$seconds_addr] > 86399) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str30, __str1, 738, ___PRETTY_FUNCTION___8976);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      
      if (HEAP[$microseconds_addr] < 0 | HEAP[$microseconds_addr] > 999999) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str31, __str1, 739, ___PRETTY_FUNCTION___8976);
      throw "Reached an unreachable!";
     case 6:
      var $11 = HEAP[$days_addr];
      var $12 = _check_delta_day_range($11);
      
      if ($12 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      var $16 = HEAP[$type_addr + 152];
      
      var $18 = FUNCTION_TABLE[$16]($type_addr, 0);
      
      $self = $18;
      
      
      if ($self != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      HEAP[$self + 8] = -1;
      var $24 = HEAP[$days_addr];
      
      
      HEAP[$self + 12] = $24;
      var $27 = HEAP[$seconds_addr];
      
      
      HEAP[$self + 16] = $27;
      var $30 = HEAP[$microseconds_addr];
      
      
      HEAP[$self + 20] = $30;
      __label__ = 10;
      break;
     case 10:
      
      
      $0 = $self;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _check_tzinfo_subclass($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      $p_addr = $p;
      
      
      if ($p_addr == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$p_addr + 4] == _PyDateTime_TZInfoType) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      var $9 = HEAP[$p_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_TZInfoType);
      
      if ($10 != 0) {
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
      
      
      
      
      var $16 = HEAP[HEAP[$p_addr + 4] + 12];
      var $17 = HEAP[_PyExc_TypeError];
      var $18 = _PyErr_Format($17, __str32, allocate([ $16, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = -1;
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
  function _call_tzinfo_method($tzinfo, $methname, $tzinfoarg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr;
      var $methname_addr;
      var $tzinfoarg_addr;
      var $retval;
      var $0;
      var $result;
      $tzinfo_addr = $tzinfo;
      $methname_addr = $methname;
      $tzinfoarg_addr = $tzinfoarg;
      
      
      if ($tzinfo_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($methname_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str33, __str1, 784, ___PRETTY_FUNCTION___9023);
      throw "Reached an unreachable!";
     case 4:
      
      var $8 = _check_tzinfo_subclass($tzinfo_addr);
      
      if ($8 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str34, __str1, 785, ___PRETTY_FUNCTION___9023);
      throw "Reached an unreachable!";
     case 6:
      
      
      if ($tzinfo_addr == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $result = __Py_NoneStruct;
      
      
      
      var $15 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $15;
      __label__ = 9;
      break;
     case 8:
      
      
      
      var $21 = __PyObject_CallMethod_SizeT($tzinfo_addr, $methname_addr, __str35, allocate([ $tzinfoarg_addr, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $21;
      __label__ = 9;
      break;
     case 9:
      
      $0 = $result;
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _get_tzinfo_member($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $tzinfo;
      $self_addr = $self;
      $tzinfo = 0;
      
      
      
      
      if (HEAP[$self_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$self_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      $tzinfo = HEAP[$self_addr + 24];
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 4] == _PyDateTime_TimeType) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $25 = HEAP[$self_addr + 4];
      var $26 = _PyType_IsSubtype($25, _PyDateTime_TimeType);
      
      if ($26 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      $tzinfo = HEAP[$self_addr + 20];
      __label__ = 8;
      break;
     case 8:
      
      $0 = $tzinfo;
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _call_utc_tzinfo_method($tzinfo, $name, $tzinfoarg, $none) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr;
      var $name_addr;
      var $tzinfoarg_addr;
      var $none_addr;
      var $retval;
      var $0;
      var $u;
      var $result;
      var $days;
      var $ss = __stackBase__;
      $tzinfo_addr = $tzinfo;
      $name_addr = $name;
      $tzinfoarg_addr = $tzinfoarg;
      $none_addr = $none;
      $result = -1;
      
      
      if ($tzinfo_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str36, __str1, 827, ___PRETTY_FUNCTION___9075);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[$tzinfo_addr + 4] != _PyDateTime_TZInfoType) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $9 = HEAP[$tzinfo_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_TZInfoType);
      
      if ($10 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str37, __str1, 828, ___PRETTY_FUNCTION___9075);
      throw "Reached an unreachable!";
     case 5:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      ___assert_fail(__str38, __str1, 829, ___PRETTY_FUNCTION___9075);
      throw "Reached an unreachable!";
     case 7:
      
      HEAP[$none_addr] = 0;
      
      
      
      var $18 = _call_tzinfo_method($tzinfo_addr, $name_addr, $tzinfoarg_addr);
      $u = $18;
      
      
      if ($u == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 24;
      break;
     case 9:
      
      
      if ($u == __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $result = 0;
      
      HEAP[$none_addr] = 1;
      __label__ = 19;
      break;
     case 11:
      
      
      
      
      if (HEAP[$u + 4] == _PyDateTime_DeltaType) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $30 = HEAP[$u + 4];
      var $31 = _PyType_IsSubtype($30, _PyDateTime_DeltaType);
      
      if ($31 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      
      
      
      
      $days = HEAP[$u + 12];
      
      var $38 = $days < -1;
      
      
      
      if ($38 | $days > 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $result = 1440;
      __label__ = 19;
      break;
     case 15:
      
      
      
      
      
      
      var $47 = HEAP[$u + 16] + $days * 86400;
      HEAP[$ss] = $47;
      var $48 = HEAP[$ss];
      var $49 = _divmod($48, 60, $ss);
      $result = $49;
      
      
      if (HEAP[$ss] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      
      
      if (HEAP[$u + 20] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $57 = HEAP[_PyExc_ValueError];
      
      var $59 = _PyErr_Format($57, __str39, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $result = -1;
      __label__ = 19;
      break;
     case 18:
      
      
      
      
      var $64 = HEAP[HEAP[$u + 4] + 12];
      var $65 = HEAP[_PyExc_TypeError];
      
      var $67 = _PyErr_Format($65, __str40, allocate([ $name_addr, 0, 0, 0, $64, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $71 = HEAP[$u] - 1;
      
      
      HEAP[$u] = $71;
      
      
      
      
      if (HEAP[$u] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $82 = HEAP[HEAP[$u + 4] + 24];
      
      FUNCTION_TABLE[$82]($u);
      __label__ = 21;
      break;
     case 21:
      
      var $85 = $result < -1439;
      
      
      
      if ($85 | $result > 1439) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $88 = HEAP[_PyExc_ValueError];
      
      
      var $91 = _PyErr_Format($88, __str41, allocate([ $name_addr, 0, 0, 0, $result, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = -1;
      __label__ = 23;
      break;
     case 23:
      
      $0 = $result;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _call_utcoffset($tzinfo, $tzinfoarg, $none) {
    
    var $tzinfo_addr;
    var $tzinfoarg_addr;
    var $none_addr;
    var $retval;
    var $0;
    $tzinfo_addr = $tzinfo;
    $tzinfoarg_addr = $tzinfoarg;
    $none_addr = $none;
    
    
    
    var $4 = _call_utc_tzinfo_method($tzinfo_addr, __str42, $tzinfoarg_addr, $none_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _offset_as_timedelta($tzinfo, $name, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr;
      var $name_addr;
      var $tzinfoarg_addr;
      var $retval;
      var $0;
      var $result;
      var $none = __stackBase__;
      var $offset;
      $tzinfo_addr = $tzinfo;
      $name_addr = $name;
      $tzinfoarg_addr = $tzinfoarg;
      
      
      if ($tzinfo_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($name_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str43, __str1, 897, ___PRETTY_FUNCTION___9150);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($tzinfo_addr == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $result = __Py_NoneStruct;
      
      
      
      var $12 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $12;
      __label__ = 12;
      break;
     case 6:
      
      
      
      var $18 = _call_utc_tzinfo_method($tzinfo_addr, $name_addr, $tzinfoarg_addr, $none);
      $offset = $18;
      
      
      if ($offset < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 13;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $result = __Py_NoneStruct;
      
      
      
      var $28 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $28;
      __label__ = 12;
      break;
     case 11:
      
      
      var $33 = _new_delta_ex(0, $offset * 60, 0, 1, _PyDateTime_DeltaType);
      $result = $33;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $result;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _call_dst($tzinfo, $tzinfoarg, $none) {
    
    var $tzinfo_addr;
    var $tzinfoarg_addr;
    var $none_addr;
    var $retval;
    var $0;
    $tzinfo_addr = $tzinfo;
    $tzinfoarg_addr = $tzinfoarg;
    $none_addr = $none;
    
    
    
    var $4 = _call_utc_tzinfo_method($tzinfo_addr, __str44, $tzinfoarg_addr, $none_addr);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _call_tzname($tzinfo, $tzinfoarg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $tzinfo_addr;
      var $tzinfoarg_addr;
      var $retval;
      var $0;
      var $result;
      $tzinfo_addr = $tzinfo;
      $tzinfoarg_addr = $tzinfoarg;
      
      
      if ($tzinfo_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str36, __str1, 942, ___PRETTY_FUNCTION___9191);
      throw "Reached an unreachable!";
     case 2:
      
      var $4 = _check_tzinfo_subclass($tzinfo_addr);
      
      if ($4 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str34, __str1, 943, ___PRETTY_FUNCTION___9191);
      throw "Reached an unreachable!";
     case 4:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str38, __str1, 944, ___PRETTY_FUNCTION___9191);
      throw "Reached an unreachable!";
     case 6:
      
      
      if ($tzinfo_addr == __Py_NoneStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $result = __Py_NoneStruct;
      
      
      
      var $13 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $13;
      __label__ = 9;
      break;
     case 8:
      
      
      var $18 = __PyObject_CallMethod_SizeT($tzinfo_addr, __str45, __str35, allocate([ $tzinfoarg_addr, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $18;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      
      if ($result != 0 & $result != __Py_NoneStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$result + 4] + 84] & 134217728) == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      var $34 = HEAP[HEAP[$result + 4] + 12];
      var $35 = HEAP[_PyExc_TypeError];
      var $36 = _PyErr_Format($35, __str46, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      var $40 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $40;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $51 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$51]($result);
      __label__ = 13;
      break;
     case 13:
      $result = 0;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $result;
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _classify_utcoffset($op, $tzinfoarg, $offset) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $op_addr;
      var $tzinfoarg_addr;
      var $offset_addr;
      var $retval;
      var $iftmp_41;
      var $iftmp_40;
      var $0;
      var $none = __stackBase__;
      var $tzinfo;
      $op_addr = $op;
      $tzinfoarg_addr = $tzinfoarg;
      $offset_addr = $offset;
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str38, __str1, 996, ___PRETTY_FUNCTION___9239);
      throw "Reached an unreachable!";
     case 2:
      
      HEAP[$offset_addr] = 0;
      
      var $5 = _get_tzinfo_member($op_addr);
      $tzinfo = $5;
      
      
      if ($tzinfo == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 2;
      __label__ = 19;
      break;
     case 4:
      
      
      if ($tzinfo == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      if (HEAP[$op_addr + 4] == _PyDateTime_TimeType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $16 = HEAP[$op_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_TimeType);
      
      if ($17 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$op_addr + 4] == _PyDateTime_DateType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $25 = HEAP[$op_addr + 4];
      var $26 = _PyType_IsSubtype($25, _PyDateTime_DateType);
      
      if ($26 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_40 = 2;
      __label__ = 11;
      break;
     case 10:
      $iftmp_40 = 1;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $iftmp_40;
      __label__ = 19;
      break;
     case 12:
      
      
      var $31 = _call_utcoffset($tzinfo, $tzinfoarg_addr, $none);
      
      HEAP[$offset_addr] = $31;
      
      
      var $35 = HEAP[$offset_addr] == -1;
      if ($35) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $36 = _PyErr_Occurred();
      
      if ($36 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 19;
      break;
     case 15:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $iftmp_41 = 2;
      __label__ = 18;
      break;
     case 17:
      $iftmp_41 = 3;
      __label__ = 18;
      break;
     case 18:
      
      $0 = $iftmp_41;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _classify_two_utcoffsets($o1, $offset1, $n1, $tzinfoarg1, $o2, $offset2, $n2, $tzinfoarg2) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $o1_addr = $o1;
      $offset1_addr = $offset1;
      $n1_addr = $n1;
      $tzinfoarg1_addr = $tzinfoarg1;
      $o2_addr = $o2;
      $offset2_addr = $offset2;
      $n2_addr = $n2;
      $tzinfoarg2_addr = $tzinfoarg2;
      
      var $2 = _get_tzinfo_member($o1_addr);
      
      var $4 = _get_tzinfo_member($o2_addr);
      
      if ($2 == $4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      HEAP[$offset2_addr] = 0;
      
      var $8 = HEAP[$offset2_addr];
      
      HEAP[$offset1_addr] = $8;
      
      HEAP[$n2_addr] = 2;
      
      var $12 = HEAP[$n2_addr];
      
      HEAP[$n1_addr] = $12;
      __label__ = 6;
      break;
     case 2:
      
      
      
      var $17 = _classify_utcoffset($o1_addr, $tzinfoarg1_addr, $offset1_addr);
      
      HEAP[$n1_addr] = $17;
      
      
      
      if (HEAP[$n1_addr] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      
      var $25 = _classify_utcoffset($o2_addr, $tzinfoarg2_addr, $offset2_addr);
      
      HEAP[$n2_addr] = $25;
      
      
      
      if (HEAP[$n2_addr] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = -1;
      __label__ = 7;
      break;
     case 6:
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
  function _append_keyword_tzinfo($repr, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $repr_addr = __stackBase__;
      var $tzinfo_addr;
      var $retval;
      var $0;
      var $temp;
      HEAP[$repr_addr] = $repr;
      $tzinfo_addr = $tzinfo;
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$repr_addr] + 4] + 84] & 134217728) == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str47, __str1, 1052, ___PRETTY_FUNCTION___9306);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($tzinfo_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str48, __str1, 1053, ___PRETTY_FUNCTION___9306);
      throw "Reached an unreachable!";
     case 4:
      
      
      var $12 = HEAP[$repr_addr];
      if ($tzinfo_addr == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = $12;
      __label__ = 13;
      break;
     case 6:
      var $13 = _PyString_AsString($12);
      var $14 = HEAP[$repr_addr];
      var $15 = _PyString_Size($14);
      
      
      
      
      if (HEAP[$13 + ($15 - 1)] != 41) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str49, __str1, 1057, ___PRETTY_FUNCTION___9306);
      throw "Reached an unreachable!";
     case 8:
      var $20 = HEAP[$repr_addr];
      var $21 = _PyString_Size($20);
      var $22 = $21 - 1;
      var $23 = HEAP[$repr_addr];
      var $24 = _PyString_AsString($23);
      var $25 = _PyString_FromStringAndSize($24, $22);
      $temp = $25;
      var $26 = HEAP[$repr_addr];
      
      
      var $29 = HEAP[$26] - 1;
      var $30 = $26;
      HEAP[$30] = $29;
      
      
      
      if (HEAP[$26] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $38 = HEAP[HEAP[HEAP[$repr_addr] + 4] + 24];
      var $39 = HEAP[$repr_addr];
      FUNCTION_TABLE[$38]($39);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($temp == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      
      HEAP[$repr_addr] = $temp;
      var $43 = _PyString_FromString(__str50);
      _PyString_ConcatAndDel($repr_addr, $43);
      
      var $45 = _PyObject_Repr($tzinfo_addr);
      _PyString_ConcatAndDel($repr_addr, $45);
      var $46 = _PyString_FromString(__str51);
      _PyString_ConcatAndDel($repr_addr, $46);
      
      $0 = HEAP[$repr_addr];
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _format_ctime($date, $hours, $minutes, $seconds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    _memset(__stackBase__, 0, 128);
    
    var $date_addr;
    var $hours_addr;
    var $minutes_addr;
    var $seconds_addr;
    var $retval;
    var $0;
    var $buffer = __stackBase__;
    var $wday;
    $date_addr = $date;
    $hours_addr = $hours;
    $minutes_addr = $minutes;
    $seconds_addr = $seconds;
    
    
    
    
    var $5 = HEAP[$date_addr + 13 + 3];
    
    
    
    
    var $10 = HEAP[$date_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $22 = HEAP[$date_addr + 13 + 1] | HEAP[$date_addr + 13] << 8;
    var $23 = _weekday($22, $10, $5);
    $wday = $23;
    
    
    
    
    
    
    
    
    
    
    
    var $35 = HEAP[$date_addr + 13 + 1] | HEAP[$date_addr + 13] << 8;
    
    
    
    
    var $40 = HEAP[$date_addr + 13 + 3];
    
    
    
    
    
    
    
    var $48 = HEAP[_MonthNames_9355 + (HEAP[$date_addr + 13 + 2] - 1) * 4];
    
    
    var $51 = HEAP[_DayNames_9354 + $wday * 4];
    var $buffer1 = $buffer;
    
    
    
    var $55 = _PyOS_snprintf($buffer1, 128, __str71, allocate([ $51, 0, 0, 0, $48, 0, 0, 0, $40, 0, 0, 0, $hours_addr, 0, 0, 0, $minutes_addr, 0, 0, 0, $seconds_addr, 0, 0, 0, $35, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
    var $buffer2 = $buffer;
    var $56 = _PyString_FromString($buffer2);
    $0 = $56;
    
    $retval = $0;
    var $retval3 = $retval;
    STACKTOP = __stackBase__;
    return $retval3;
  }
  function _format_utcoffset($buf, $sep, $tzinfo, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buf_addr;
      var $buflen_addr;
      var $sep_addr;
      var $tzinfo_addr;
      var $tzinfoarg_addr;
      var $retval;
      var $0;
      var $offset;
      var $hours;
      var $minutes = __stackBase__;
      var $sign;
      var $none = __stackBase__ + 4;
      $buf_addr = $buf;
      $buflen_addr = 100;
      $sep_addr = $sep;
      $tzinfo_addr = $tzinfo;
      $tzinfoarg_addr = $tzinfoarg;
      
      
      if ($buflen_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str72, __str1, 1121, ___PRETTY_FUNCTION___9398);
      throw "Reached an unreachable!";
     case 2:
      
      
      var $5 = _call_utcoffset($tzinfo_addr, $tzinfoarg_addr, $none);
      $offset = $5;
      
      var $7 = $offset == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $8 = _PyErr_Occurred();
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      HEAP[$buf_addr] = 0;
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      $sign = 43;
      
      
      if ($offset < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $sign = 45;
      
      var $16 = 0 - $offset;
      $offset = $16;
      __label__ = 9;
      break;
     case 9:
      
      var $18 = _divmod($offset, 60, $minutes);
      $hours = $18;
      var $19 = HEAP[$minutes];
      
      
      
      
      
      
      var $26 = _PyOS_snprintf($buf_addr, $buflen_addr, __str73, allocate([ $sign, 0, 0, 0, $hours, 0, 0, 0, $sep_addr, 0, 0, 0, $19, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
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
  function _make_freplacement($object) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $object_addr;
      var $retval;
      var $0;
      var $freplacement = __stackBase__;
      $object_addr = $object;
      
      
      
      
      if (HEAP[$object_addr + 4] == _PyDateTime_TimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$object_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_TimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $31 = HEAP[$object_addr + 13 + 4] << 8 | HEAP[$object_addr + 13 + 3] << 16 | HEAP[$object_addr + 13 + 5];
      var $freplacement2 = $freplacement;
      var $32 = _sprintf($freplacement2, __str74, allocate([ $31, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 7;
      break;
     case 3:
      
      
      
      
      if (HEAP[$object_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      var $39 = HEAP[$object_addr + 4];
      var $40 = _PyType_IsSubtype($39, _PyDateTime_DateTimeType);
      
      if ($40 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[$object_addr + 13 + 8] << 8 | HEAP[$object_addr + 13 + 7] << 16 | HEAP[$object_addr + 13 + 9];
      var $freplacement6 = $freplacement;
      var $64 = _sprintf($freplacement6, __str74, allocate([ $63, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 7;
      break;
     case 6:
      var $freplacement8 = $freplacement;
      var $65 = _sprintf($freplacement8, __str74, allocate(4, "i32", ALLOC_STACK));
      __label__ = 7;
      break;
     case 7:
      var $freplacement10 = $freplacement;
      var $66 = _strlen($freplacement10);
      var $freplacement11 = $freplacement;
      var $67 = _PyString_FromStringAndSize($freplacement11, $66);
      $0 = $67;
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _wrap_strftime($object, $format, $format_len, $timetuple, $tzinfoarg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 104;
    _memset(__stackBase__, 0, 104);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      var $newfmt = __stackBase__;
      var $pnew;
      var $totalnew;
      var $usednew;
      var $ptoappend;
      var $ntoappend;
      var $year;
      var $pyyear;
      var $buf = __stackBase__ + 4;
      var $tzinfo;
      var $tzinfo38;
      var $temp;
      var $bigger;
      var $time;
      $object_addr = $object;
      $format_addr = $format;
      $format_len_addr = $format_len;
      $timetuple_addr = $timetuple;
      $tzinfoarg_addr = $tzinfoarg;
      $result = 0;
      $zreplacement = 0;
      $Zreplacement = 0;
      $freplacement = 0;
      HEAP[$newfmt] = 0;
      
      
      if ($object_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if ($format_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if ($timetuple_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str75, __str1, 1183, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 4:
      
      var $8 = _PySequence_GetItem($timetuple_addr, 0);
      $pyyear = $8;
      
      
      if ($pyyear == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 91;
      break;
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$pyyear + 4] + 84] & 8388608) == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      ___assert_fail(__str76, __str1, 1198, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 8:
      
      var $19 = _PyInt_AsLong($pyyear);
      $year = $19;
      
      
      
      var $23 = HEAP[$pyyear] - 1;
      
      
      HEAP[$pyyear] = $23;
      
      
      
      
      if (HEAP[$pyyear] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $34 = HEAP[HEAP[$pyyear + 4] + 24];
      
      FUNCTION_TABLE[$34]($pyyear);
      __label__ = 10;
      break;
     case 10:
      
      
      if ($year <= 1899) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $38 = HEAP[_PyExc_ValueError];
      
      var $40 = _PyErr_Format($38, __str77, allocate([ $year, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 91;
      break;
     case 12:
      
      
      if ($format_len_addr > 2147483646) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $43 = _PyErr_NoMemory();
      __label__ = 78;
      break;
     case 14:
      
      
      $totalnew = $format_len_addr + 1;
      
      var $47 = _PyString_FromStringAndSize(0, $totalnew);
      HEAP[$newfmt] = $47;
      
      
      if (HEAP[$newfmt] == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      var $50 = HEAP[$newfmt];
      var $51 = _PyString_AsString($50);
      $pnew = $51;
      $usednew = 0;
      
      $pin = $format_addr;
      var $buf27 = $buf;
      var $buf31 = $buf;
      __label__ = 73;
      break;
     case 16:
      
      
      var $55 = $pin;
      if ($ch != 37) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $56 = $55 + -1;
      $ptoappend = $56;
      $ntoappend = 1;
      __lastLabel__ = 17;
      __label__ = 63;
      break;
     case 18:
      
      $ch = HEAP[$55];
      
      
      
      
      var $62 = $pin + 1;
      $pin = $62;
      
      if ($ch == 0 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $63 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($63, __str78);
      __label__ = 78;
      break;
     case 20:
      
      
      if ($ch == 122) {
        __label__ = 21;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 21:
      
      
      if ($zreplacement == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 22:
      
      var $69 = _get_tzinfo_member($object_addr);
      $tzinfo = $69;
      var $70 = _PyString_FromString(__str79);
      $zreplacement = $70;
      
      
      if ($zreplacement == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      
      if ($tzinfo != __Py_NoneStruct & $tzinfo != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 24:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str38, __str1, 1246, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 26:
      
      
      var $81 = _format_utcoffset($buf27, __str79, $tzinfo, $tzinfoarg_addr);
      
      if ($81 < 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      
      var $86 = HEAP[$zreplacement] - 1;
      
      
      HEAP[$zreplacement] = $86;
      
      
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $97 = HEAP[HEAP[$zreplacement + 4] + 24];
      
      FUNCTION_TABLE[$97]($zreplacement);
      __label__ = 29;
      break;
     case 29:
      var $99 = _PyString_FromString($buf31);
      $zreplacement = $99;
      
      if ($99 == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      if ($zreplacement == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      ___assert_fail(__str80, __str1, 1258, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 32:
      
      
      
      
      $ptoappend = $zreplacement + 20;
      
      
      
      
      $ntoappend = HEAP[$zreplacement + 8];
      __label__ = 62;
      break;
     case 33:
      
      
      if ($ch == 90) {
        __label__ = 34;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 34:
      
      
      if ($Zreplacement == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 35:
      
      var $115 = _get_tzinfo_member($object_addr);
      $tzinfo38 = $115;
      var $116 = _PyString_FromString(__str79);
      $Zreplacement = $116;
      
      
      if ($Zreplacement == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      
      
      if ($tzinfo38 != __Py_NoneStruct & $tzinfo38 != 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 37:
      
      
      if ($tzinfoarg_addr == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      ___assert_fail(__str38, __str1, 1270, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 39:
      
      
      var $127 = _call_tzname($tzinfo38, $tzinfoarg_addr);
      $temp = $127;
      
      
      if ($temp == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      var $132 = $temp;
      if ($temp != __Py_NoneStruct) {
        __label__ = 41;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 41:
      
      
      
      
      
      
      if ((HEAP[HEAP[$132 + 4] + 84] & 134217728) == 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 42:
      ___assert_fail(__str81, __str1, 1274, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 43:
      
      
      
      var $142 = HEAP[$Zreplacement] - 1;
      
      
      HEAP[$Zreplacement] = $142;
      
      
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 44:
      
      
      
      
      var $153 = HEAP[HEAP[$Zreplacement + 4] + 24];
      
      FUNCTION_TABLE[$153]($Zreplacement);
      __label__ = 45;
      break;
     case 45:
      
      var $156 = __PyObject_CallMethod_SizeT($temp, __str82, __str83, allocate([ __str84, 0, 0, 0, __str85, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $Zreplacement = $156;
      
      
      
      var $160 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $160;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $171 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$171]($temp);
      __label__ = 47;
      break;
     case 47:
      
      
      if ($Zreplacement == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$Zreplacement + 4] + 84] & 134217728) == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      var $182 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($182, __str86);
      __label__ = 78;
      break;
     case 50:
      
      
      var $185 = HEAP[$132] - 1;
      
      
      HEAP[$temp] = $185;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      
      
      
      
      var $196 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$196]($temp);
      __label__ = 52;
      break;
     case 52:
      
      
      if ($Zreplacement == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      ___assert_fail(__str87, __str1, 1297, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 54:
      
      
      
      
      $ptoappend = $Zreplacement + 20;
      
      
      
      
      $ntoappend = HEAP[$Zreplacement + 8];
      __label__ = 62;
      break;
     case 55:
      
      
      if ($ch == 102) {
        __label__ = 56;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 56:
      
      
      if ($freplacement == 0) {
        __label__ = 57;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 57:
      
      var $212 = _make_freplacement($object_addr);
      $freplacement = $212;
      
      
      if ($freplacement == 0) {
        __label__ = 81;
        break;
      } else {
        __label__ = 58;
        break;
      }
     case 58:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$freplacement + 4] + 84] & 134217728) == 0) {
        __label__ = 59;
        break;
      } else {
        __label__ = 60;
        break;
      }
     case 59:
      ___assert_fail(__str89, __str1, 1309, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 60:
      
      
      
      
      $ptoappend = $freplacement + 20;
      
      
      
      
      $ntoappend = HEAP[$freplacement + 8];
      __label__ = 62;
      break;
     case 61:
      
      var $231 = $pin + -2;
      $ptoappend = $231;
      $ntoappend = 2;
      __lastLabel__ = 61;
      __label__ = 63;
      break;
     case 62:
      var $_pr5 = $ptoappend;
      __lastLabel__ = 62;
      __label__ = 63;
      break;
     case 63:
      var $232 = __lastLabel__ == 62 ? $_pr5 : __lastLabel__ == 61 ? $231 : $56;
      
      if ($232 == 0) {
        __label__ = 64;
        break;
      } else {
        __label__ = 65;
        break;
      }
     case 64:
      ___assert_fail(__str90, __str1, 1322, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 65:
      
      
      if ($ntoappend == 0) {
        __label__ = 73;
        break;
      } else {
        __label__ = 70;
        break;
      }
     case 66:
      
      
      $bigger = $totalnew << 1;
      
      
      
      
      if ($bigger >>> 1 != $totalnew) {
        __label__ = 67;
        break;
      } else {
        __label__ = 68;
        break;
      }
     case 67:
      var $242 = _PyErr_NoMemory();
      __label__ = 78;
      break;
     case 68:
      
      var $244 = __PyString_Resize($newfmt, $bigger);
      
      if ($244 < 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 69;
        break;
      }
     case 69:
      
      $totalnew = $bigger;
      var $247 = HEAP[$newfmt];
      var $248 = _PyString_AsString($247);
      
      
      $pnew = $248 + $usednew;
      __label__ = 70;
      break;
     case 70:
      
      
      
      
      
      if ($ntoappend + $usednew > $totalnew) {
        __label__ = 66;
        break;
      } else {
        __label__ = 71;
        break;
      }
     case 71:
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($pnew, $ptoappend, $ntoappend, 1, 0);
      
      
      var $261 = $pnew + $ntoappend;
      $pnew = $261;
      
      
      var $264 = $ntoappend + $usednew;
      $usednew = $264;
      
      
      
      if ($usednew > $totalnew) {
        __label__ = 72;
        break;
      } else {
        __label__ = 73;
        break;
      }
     case 72:
      ___assert_fail(__str91, __str1, 1340, ___PRETTY_FUNCTION___9485);
      throw "Reached an unreachable!";
     case 73:
      
      
      $ch = HEAP[$pin];
      
      
      
      
      var $274 = $pin + 1;
      $pin = $274;
      
      if ($ch != 0 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 74;
        break;
      }
     case 74:
      
      var $276 = __PyString_Resize($newfmt, $usednew);
      
      if ($276 < 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 75;
        break;
      }
     case 75:
      var $278 = _PyImport_ImportModuleNoBlock(__str92);
      $time = $278;
      
      
      if ($time == 0) {
        __label__ = 78;
        break;
      } else {
        __label__ = 76;
        break;
      }
     case 76:
      var $281 = HEAP[$newfmt];
      
      
      var $284 = __PyObject_CallMethod_SizeT($time, __str93, __str94, allocate([ $281, 0, 0, 0, $timetuple_addr, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $284;
      
      
      
      var $288 = HEAP[$time] - 1;
      
      
      HEAP[$time] = $288;
      
      
      
      
      if (HEAP[$time] == 0) {
        __label__ = 77;
        break;
      } else {
        __label__ = 78;
        break;
      }
     case 77:
      
      
      
      
      var $299 = HEAP[HEAP[$time + 4] + 24];
      
      FUNCTION_TABLE[$299]($time);
      __label__ = 78;
      break;
     case 78:
      
      
      if ($freplacement != 0) {
        __label__ = 79;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 79:
      
      
      
      var $305 = HEAP[$freplacement] - 1;
      
      
      HEAP[$freplacement] = $305;
      
      
      
      
      if (HEAP[$freplacement] == 0) {
        __label__ = 80;
        break;
      } else {
        __label__ = 81;
        break;
      }
     case 80:
      
      
      
      
      var $316 = HEAP[HEAP[$freplacement + 4] + 24];
      
      FUNCTION_TABLE[$316]($freplacement);
      __label__ = 81;
      break;
     case 81:
      
      
      if ($zreplacement != 0) {
        __label__ = 82;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 82:
      
      
      
      var $323 = HEAP[$zreplacement] - 1;
      
      
      HEAP[$zreplacement] = $323;
      
      
      
      
      if (HEAP[$zreplacement] == 0) {
        __label__ = 83;
        break;
      } else {
        __label__ = 84;
        break;
      }
     case 83:
      
      
      
      
      var $334 = HEAP[HEAP[$zreplacement + 4] + 24];
      
      FUNCTION_TABLE[$334]($zreplacement);
      __label__ = 84;
      break;
     case 84:
      
      
      if ($Zreplacement != 0) {
        __label__ = 85;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 85:
      
      
      
      var $341 = HEAP[$Zreplacement] - 1;
      
      
      HEAP[$Zreplacement] = $341;
      
      
      
      
      if (HEAP[$Zreplacement] == 0) {
        __label__ = 86;
        break;
      } else {
        __label__ = 87;
        break;
      }
     case 86:
      
      
      
      
      var $352 = HEAP[HEAP[$Zreplacement + 4] + 24];
      
      FUNCTION_TABLE[$352]($Zreplacement);
      __label__ = 87;
      break;
     case 87:
      
      
      if (HEAP[$newfmt] != 0) {
        __label__ = 88;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 88:
      var $356 = HEAP[$newfmt];
      
      
      var $359 = HEAP[$356] - 1;
      var $360 = $356;
      HEAP[$360] = $359;
      
      
      
      if (HEAP[$356] == 0) {
        __label__ = 89;
        break;
      } else {
        __label__ = 90;
        break;
      }
     case 89:
      
      
      
      
      var $368 = HEAP[HEAP[HEAP[$newfmt] + 4] + 24];
      var $369 = HEAP[$newfmt];
      FUNCTION_TABLE[$368]($369);
      __label__ = 90;
      break;
     case 90:
      
      $0 = $result;
      __label__ = 91;
      break;
     case 91:
      
      $retval = $0;
      var $retval99 = $retval;
      STACKTOP = __stackBase__;
      return $retval99;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _isoformat_date($dt, $buffer, $bufflen) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dt_addr;
      var $buffer_addr;
      var $bufflen_addr;
      var $retval;
      var $0;
      var $x;
      $dt_addr = $dt;
      $buffer_addr = $buffer;
      $bufflen_addr = $bufflen;
      
      
      
      
      var $5 = HEAP[$dt_addr + 13 + 3];
      
      
      
      
      var $10 = HEAP[$dt_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      var $22 = HEAP[$dt_addr + 13 + 1] | HEAP[$dt_addr + 13] << 8;
      
      
      var $25 = _PyOS_snprintf($buffer_addr, $bufflen_addr, __str95, allocate([ $22, 0, 0, 0, $10, 0, 0, 0, $5, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $x = $25;
      
      
      
      if ($bufflen_addr < $x) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str96, __str1, 1368, ___PRETTY_FUNCTION___9722);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      $0 = $buffer_addr + $x;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _isoformat_time($dt, $buffer, $bufflen) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dt_addr;
      var $buffer_addr;
      var $bufflen_addr;
      var $retval;
      var $0;
      var $x;
      var $us;
      $dt_addr = $dt;
      $buffer_addr = $buffer;
      $bufflen_addr = $bufflen;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $us = HEAP[$dt_addr + 13 + 8] << 8 | HEAP[$dt_addr + 13 + 7] << 16 | HEAP[$dt_addr + 13 + 9];
      
      
      
      
      var $24 = HEAP[$dt_addr + 13 + 6];
      
      
      
      
      var $29 = HEAP[$dt_addr + 13 + 5];
      
      
      
      
      var $34 = HEAP[$dt_addr + 13 + 4];
      
      
      var $37 = _PyOS_snprintf($buffer_addr, $bufflen_addr, __str97, allocate([ $34, 0, 0, 0, $29, 0, 0, 0, $24, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $x = $37;
      
      
      
      if ($bufflen_addr < $x) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str96, __str1, 1383, ___PRETTY_FUNCTION___9746);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($us != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      var $50 = _PyOS_snprintf($buffer_addr + $x, $bufflen_addr - $x, __str98, allocate([ $us, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      var $52 = $x + $50;
      $x = $52;
      __label__ = 4;
      break;
     case 4:
      
      
      
      if ($bufflen_addr < $x) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str96, __str1, 1386, ___PRETTY_FUNCTION___9746);
      throw "Reached an unreachable!";
     case 6:
      
      
      
      $0 = $buffer_addr + $x;
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_time() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $result;
      var $time;
      $result = 0;
      var $1 = _PyImport_ImportModuleNoBlock(__str92);
      $time = $1;
      
      
      if ($time != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $5 = __PyObject_CallMethod_SizeT($time, __str92, __str99, allocate(1, "i32", ALLOC_STACK));
      $result = $5;
      
      
      
      var $9 = HEAP[$time] - 1;
      
      
      HEAP[$time] = $9;
      
      
      
      
      if (HEAP[$time] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $20 = HEAP[HEAP[$time + 4] + 24];
      
      FUNCTION_TABLE[$20]($time);
      __label__ = 3;
      break;
     case 3:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _build_struct_time($y, $m, $d, $hh, $mm, $ss, $dstflag) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $y_addr = $y;
      $m_addr = $m;
      $d_addr = $d;
      $hh_addr = $hh;
      $mm_addr = $mm;
      $ss_addr = $ss;
      $dstflag_addr = $dstflag;
      $result = 0;
      var $1 = _PyImport_ImportModuleNoBlock(__str92);
      $time = $1;
      
      
      if ($time != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      var $6 = _days_before_month($y_addr, $m_addr);
      
      var $8 = $d_addr + $6;
      
      
      
      var $12 = _weekday($y_addr, $m_addr, $d_addr);
      
      
      
      
      
      
      
      
      var $21 = __PyObject_CallMethod_SizeT($time, __str100, __str101, allocate([ $y_addr, 0, 0, 0, $m_addr, 0, 0, 0, $d_addr, 0, 0, 0, $hh_addr, 0, 0, 0, $mm_addr, 0, 0, 0, $ss_addr, 0, 0, 0, $12, 0, 0, 0, $8, 0, 0, 0, $dstflag_addr, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $21;
      
      
      
      var $25 = HEAP[$time] - 1;
      
      
      HEAP[$time] = $25;
      
      
      
      
      if (HEAP[$time] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $36 = HEAP[HEAP[$time + 4] + 24];
      
      FUNCTION_TABLE[$36]($time);
      __label__ = 3;
      break;
     case 3:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _diff_to_bool($diff, $op) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $diff_addr;
      var $op_addr;
      var $retval;
      var $0;
      var $iftmp_83;
      var $result;
      var $istrue;
      $diff_addr = $diff;
      $op_addr = $op;
      var $1 = $op_addr;
      if ($1 == 0) {
        __label__ = 5;
        break;
      } else if ($1 == 1) {
        __label__ = 3;
        break;
      } else if ($1 == 2) {
        __label__ = 1;
        break;
      } else if ($1 == 3) {
        __label__ = 2;
        break;
      } else if ($1 == 4) {
        __label__ = 6;
        break;
      } else if ($1 == 5) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      var $4 = $diff_addr == 0;
      $istrue = $4;
      __lastLabel__ = 1;
      __label__ = 8;
      break;
     case 2:
      
      
      var $7 = $diff_addr != 0;
      $istrue = $7;
      __lastLabel__ = 2;
      __label__ = 8;
      break;
     case 3:
      
      
      var $10 = $diff_addr <= 0;
      $istrue = $10;
      __lastLabel__ = 3;
      __label__ = 8;
      break;
     case 4:
      
      
      var $13 = $diff_addr >= 0;
      $istrue = $13;
      __lastLabel__ = 4;
      __label__ = 8;
      break;
     case 5:
      
      
      var $16 = $diff_addr < 0;
      $istrue = $16;
      __lastLabel__ = 5;
      __label__ = 8;
      break;
     case 6:
      
      
      var $19 = $diff_addr > 0;
      $istrue = $19;
      __lastLabel__ = 6;
      __label__ = 8;
      break;
     case 7:
      ___assert_fail(__str102, __str1, 1454, ___PRETTY_FUNCTION___9835);
      throw "Reached an unreachable!";
     case 8:
      var $20 = __lastLabel__ == 6 ? $19 : __lastLabel__ == 5 ? $16 : __lastLabel__ == 4 ? $13 : __lastLabel__ == 3 ? $10 : __lastLabel__ == 2 ? $7 : $4;
      
      if ($20 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_83 = __Py_TrueStruct;
      __label__ = 11;
      break;
     case 10:
      $iftmp_83 = __Py_ZeroStruct;
      __label__ = 11;
      break;
     case 11:
      
      $result = $iftmp_83;
      
      
      
      var $26 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $26;
      
      $0 = $result;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmperror($a, $b) {
    
    var $a_addr;
    var $b_addr;
    var $retval;
    var $0;
    $a_addr = $a;
    $b_addr = $b;
    
    
    
    
    var $5 = HEAP[HEAP[$b_addr + 4] + 12];
    
    
    
    
    var $10 = HEAP[HEAP[$a_addr + 4] + 12];
    var $11 = HEAP[_PyExc_TypeError];
    var $12 = _PyErr_Format($11, __str103, allocate([ $10, 0, 0, 0, $5, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _delta_to_microseconds($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $x1;
      var $x2;
      var $x3;
      var $result;
      $self_addr = $self;
      $x1 = 0;
      $x2 = 0;
      $x3 = 0;
      $result = 0;
      
      
      var $3 = HEAP[$self_addr + 12];
      var $4 = _PyInt_FromLong($3);
      $x1 = $4;
      
      
      if ($x1 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $7 = HEAP[_seconds_per_day];
      
      var $9 = _PyNumber_Multiply($x1, $7);
      $x2 = $9;
      
      
      if ($x2 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      var $15 = HEAP[$x1] - 1;
      
      
      HEAP[$x1] = $15;
      
      
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $26 = HEAP[HEAP[$x1 + 4] + 24];
      
      FUNCTION_TABLE[$26]($x1);
      __label__ = 4;
      break;
     case 4:
      $x1 = 0;
      
      
      var $30 = HEAP[$self_addr + 16];
      var $31 = _PyInt_FromLong($30);
      $x1 = $31;
      
      if ($31 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $35 = _PyNumber_Add($x1, $x2);
      $x3 = $35;
      
      
      if ($x3 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $41 = HEAP[$x1] - 1;
      
      
      HEAP[$x1] = $41;
      
      
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $52 = HEAP[HEAP[$x1 + 4] + 24];
      
      FUNCTION_TABLE[$52]($x1);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $57 = HEAP[$x2] - 1;
      
      
      HEAP[$x2] = $57;
      
      
      
      
      if (HEAP[$x2] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $68 = HEAP[HEAP[$x2 + 4] + 24];
      
      FUNCTION_TABLE[$68]($x2);
      __label__ = 10;
      break;
     case 10:
      $x2 = 0;
      var $70 = HEAP[_us_per_second];
      
      var $72 = _PyNumber_Multiply($x3, $70);
      $x1 = $72;
      
      if ($72 == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      var $77 = HEAP[$x3] - 1;
      
      
      HEAP[$x3] = $77;
      
      
      
      
      if (HEAP[$x3] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $88 = HEAP[HEAP[$x3 + 4] + 24];
      
      FUNCTION_TABLE[$88]($x3);
      __label__ = 13;
      break;
     case 13:
      $x3 = 0;
      
      
      var $92 = HEAP[$self_addr + 20];
      var $93 = _PyInt_FromLong($92);
      $x2 = $93;
      
      if ($93 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $97 = _PyNumber_Add($x1, $x2);
      $result = $97;
      __label__ = 15;
      break;
     case 15:
      
      
      if ($x1 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $102 = HEAP[$x1] - 1;
      
      
      HEAP[$x1] = $102;
      
      
      
      
      if (HEAP[$x1] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $113 = HEAP[HEAP[$x1 + 4] + 24];
      
      FUNCTION_TABLE[$113]($x1);
      __label__ = 18;
      break;
     case 18:
      
      
      if ($x2 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      
      
      var $120 = HEAP[$x2] - 1;
      
      
      HEAP[$x2] = $120;
      
      
      
      
      if (HEAP[$x2] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $131 = HEAP[HEAP[$x2 + 4] + 24];
      
      FUNCTION_TABLE[$131]($x2);
      __label__ = 21;
      break;
     case 21:
      
      
      if ($x3 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 22:
      
      
      
      var $138 = HEAP[$x3] - 1;
      
      
      HEAP[$x3] = $138;
      
      
      
      
      if (HEAP[$x3] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      
      
      
      var $149 = HEAP[HEAP[$x3 + 4] + 24];
      
      FUNCTION_TABLE[$149]($x3);
      __label__ = 24;
      break;
     case 24:
      
      $0 = $result;
      
      $retval = $0;
      var $retval23 = $retval;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _microseconds_to_delta_ex($pyus, $type) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $pyus_addr = $pyus;
      $type_addr = $type;
      $tuple = 0;
      $num = 0;
      $result = 0;
      var $1 = HEAP[_us_per_second];
      
      var $3 = _PyNumber_Divmod($pyus_addr, $1);
      $tuple = $3;
      
      
      if ($tuple == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = _PyTuple_GetItem($tuple, 1);
      $num = $7;
      
      
      if ($num == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $11 = _PyLong_AsLong($num);
      $temp = $11;
      $num = 0;
      
      var $13 = $temp == -1;
      if ($13) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if ($temp < 0 | $temp > 999999) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str104, __str1, 1573, ___PRETTY_FUNCTION___9958);
      throw "Reached an unreachable!";
     case 6:
      
      $us = $temp;
      
      
      if ($us < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $23 = _PyErr_Occurred();
      
      if ($23 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 8:
      ___assert_fail(__str105, __str1, 1577, ___PRETTY_FUNCTION___9958);
      throw "Reached an unreachable!";
     case 9:
      
      var $26 = _PyTuple_GetItem($tuple, 0);
      $num = $26;
      
      
      if ($num == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      var $32 = HEAP[$num] + 1;
      
      
      HEAP[$num] = $32;
      
      
      
      var $38 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $38;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      var $49 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$49]($tuple);
      __label__ = 12;
      break;
     case 12:
      var $51 = HEAP[_seconds_per_day];
      
      var $53 = _PyNumber_Divmod($num, $51);
      $tuple = $53;
      
      if ($53 == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      var $58 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $58;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $69 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$69]($num);
      __label__ = 15;
      break;
     case 15:
      
      var $72 = _PyTuple_GetItem($tuple, 1);
      $num = $72;
      
      if ($72 == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $75 = _PyLong_AsLong($num);
      $temp = $75;
      $num = 0;
      
      var $77 = $temp == -1;
      if ($77) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $78 = _PyErr_Occurred();
      
      if ($78 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      
      
      
      if ($temp < 0 | $temp > 86399) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      ___assert_fail(__str106, __str1, 1599, ___PRETTY_FUNCTION___9958);
      throw "Reached an unreachable!";
     case 20:
      
      $s = $temp;
      
      
      if ($s < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      var $87 = _PyErr_Occurred();
      
      if ($87 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 22:
      ___assert_fail(__str105, __str1, 1604, ___PRETTY_FUNCTION___9958);
      throw "Reached an unreachable!";
     case 23:
      
      var $90 = _PyTuple_GetItem($tuple, 0);
      $num = $90;
      
      
      if ($num == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $96 = HEAP[$num] + 1;
      
      
      HEAP[$num] = $96;
      
      var $100 = _PyLong_AsLong($num);
      $temp = $100;
      
      var $102 = $temp == -1;
      if ($102) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $103 = _PyErr_Occurred();
      
      if ($103 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      $d = $temp;
      
      
      
      if ($d != $temp) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $109 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($109, __str107);
      __label__ = 29;
      break;
     case 28:
      
      
      
      
      var $114 = _new_delta_ex($d, $s, $us, 0, $type_addr);
      $result = $114;
      __label__ = 29;
      break;
     case 29:
      
      
      if ($tuple != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 30:
      
      
      
      var $119 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $119;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      
      
      
      var $130 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$130]($tuple);
      __label__ = 32;
      break;
     case 32:
      
      
      if ($num != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      var $137 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $137;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $148 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$148]($num);
      __label__ = 35;
      break;
     case 35:
      
      $0 = $result;
      
      $retval = $0;
      var $retval38 = $retval;
      return $retval38;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _multiply_int_timedelta($intobj, $delta) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $intobj_addr;
      var $delta_addr;
      var $retval;
      var $0;
      var $pyus_in;
      var $pyus_out;
      var $result;
      $intobj_addr = $intobj;
      $delta_addr = $delta;
      
      var $2 = _delta_to_microseconds($delta_addr);
      $pyus_in = $2;
      
      
      if ($pyus_in == 0) {
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
      
      
      var $7 = _PyNumber_Multiply($pyus_in, $intobj_addr);
      $pyus_out = $7;
      
      
      
      var $11 = HEAP[$pyus_in] - 1;
      
      
      HEAP[$pyus_in] = $11;
      
      
      
      
      if (HEAP[$pyus_in] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[$pyus_in + 4] + 24];
      
      FUNCTION_TABLE[$22]($pyus_in);
      __label__ = 4;
      break;
     case 4:
      
      
      if ($pyus_out == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      var $27 = _microseconds_to_delta_ex($pyus_out, _PyDateTime_DeltaType);
      $result = $27;
      
      
      
      var $31 = HEAP[$pyus_out] - 1;
      
      
      HEAP[$pyus_out] = $31;
      
      
      
      
      if (HEAP[$pyus_out] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$pyus_out + 4] + 24];
      
      FUNCTION_TABLE[$42]($pyus_out);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _divide_timedelta_int($delta, $intobj) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $delta_addr;
      var $intobj_addr;
      var $retval;
      var $0;
      var $pyus_in;
      var $pyus_out;
      var $result;
      $delta_addr = $delta;
      $intobj_addr = $intobj;
      
      var $2 = _delta_to_microseconds($delta_addr);
      $pyus_in = $2;
      
      
      if ($pyus_in == 0) {
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
      
      
      var $7 = _PyNumber_FloorDivide($pyus_in, $intobj_addr);
      $pyus_out = $7;
      
      
      
      var $11 = HEAP[$pyus_in] - 1;
      
      
      HEAP[$pyus_in] = $11;
      
      
      
      
      if (HEAP[$pyus_in] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $22 = HEAP[HEAP[$pyus_in + 4] + 24];
      
      FUNCTION_TABLE[$22]($pyus_in);
      __label__ = 4;
      break;
     case 4:
      
      
      if ($pyus_out == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      var $27 = _microseconds_to_delta_ex($pyus_out, _PyDateTime_DeltaType);
      $result = $27;
      
      
      
      var $31 = HEAP[$pyus_out] - 1;
      
      
      HEAP[$pyus_out] = $31;
      
      
      
      
      if (HEAP[$pyus_out] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $42 = HEAP[HEAP[$pyus_out + 4] + 24];
      
      FUNCTION_TABLE[$42]($pyus_out);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_add($left, $right) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $result;
      var $days;
      var $seconds;
      var $microseconds;
      $left_addr = $left;
      $right_addr = $right;
      $result = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      $days = HEAP[$right_addr + 12] + HEAP[$left_addr + 12];
      
      
      
      
      
      
      
      
      
      $seconds = HEAP[$right_addr + 16] + HEAP[$left_addr + 16];
      
      
      
      
      
      
      
      
      
      $microseconds = HEAP[$right_addr + 20] + HEAP[$left_addr + 20];
      
      
      
      var $49 = _new_delta_ex($days, $seconds, $microseconds, 1, _PyDateTime_DeltaType);
      $result = $49;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      var $_pr = $result;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $50 = __lastLabel__ == 5 ? $_pr : $49;
      
      if ($50 == __Py_NotImplementedStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $55 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $55;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_negative($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    var $4 = 0 - HEAP[$self_addr + 20];
    
    
    
    var $8 = 0 - HEAP[$self_addr + 16];
    
    
    
    var $12 = 0 - HEAP[$self_addr + 12];
    var $13 = _new_delta_ex($12, $8, $4, 1, _PyDateTime_DeltaType);
    $0 = $13;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _delta_positive($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = HEAP[$self_addr + 20];
    
    
    var $6 = HEAP[$self_addr + 16];
    
    
    var $9 = HEAP[$self_addr + 12];
    var $10 = _new_delta_ex($9, $6, $3, 0, _PyDateTime_DeltaType);
    $0 = $10;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _delta_abs($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $result;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 20] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str108, __str1, 1722, ___PRETTY_FUNCTION___10169);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 16] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str109, __str1, 1723, ___PRETTY_FUNCTION___10169);
      throw "Reached an unreachable!";
     case 4:
      
      
      
      
      var $13 = $self_addr;
      if (HEAP[$self_addr + 12] < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = _delta_negative($13);
      $result = $14;
      __label__ = 7;
      break;
     case 6:
      var $15 = _delta_positive($13);
      $result = $15;
      __label__ = 7;
      break;
     case 7:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_subtract($left, $right) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $result;
      var $days;
      var $seconds;
      var $microseconds;
      $left_addr = $left;
      $right_addr = $right;
      $result = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      $days = HEAP[$left_addr + 12] - HEAP[$right_addr + 12];
      
      
      
      
      
      
      
      
      
      $seconds = HEAP[$left_addr + 16] - HEAP[$right_addr + 16];
      
      
      
      
      
      
      
      
      
      $microseconds = HEAP[$left_addr + 20] - HEAP[$right_addr + 20];
      
      
      
      var $49 = _new_delta_ex($days, $seconds, $microseconds, 1, _PyDateTime_DeltaType);
      $result = $49;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      var $_pr = $result;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $50 = __lastLabel__ == 5 ? $_pr : $49;
      
      if ($50 == __Py_NotImplementedStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $55 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $55;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_richcompare($self, $other, $op) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $other_addr;
      var $op_addr;
      var $retval;
      var $0;
      var $diff;
      $self_addr = $self;
      $other_addr = $other;
      $op_addr = $op;
      $diff = 42;
      
      
      
      
      if (HEAP[$other_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$other_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      
      $diff = HEAP[$self_addr + 12] - HEAP[$other_addr + 12];
      
      if (HEAP[$self_addr + 12] - HEAP[$other_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      $diff = HEAP[$self_addr + 16] - HEAP[$other_addr + 16];
      
      
      if ($diff == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      $diff = HEAP[$self_addr + 20] - HEAP[$other_addr + 20];
      __label__ = 8;
      break;
     case 5:
      
      
      
      
      
      if ($op_addr == 2 | $op_addr == 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $diff = 1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $44 = _cmperror($self_addr, $other_addr);
      $0 = $44;
      __label__ = 9;
      break;
     case 8:
      
      
      var $47 = _diff_to_bool($diff, $op_addr);
      $0 = $47;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_hash($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $temp;
      $self_addr = $self;
      
      
      
      var $4 = HEAP[$self_addr + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $6 = _delta_getstate($self_addr);
      $temp = $6;
      
      
      if ($temp != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      var $10 = _PyObject_Hash($temp);
      
      
      HEAP[$self_addr + 8] = $10;
      
      
      
      var $16 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $16;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$27]($temp);
      __label__ = 4;
      break;
     case 4:
      
      
      
      $0 = HEAP[$self_addr + 8];
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_multiply($left, $right) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $result;
      $left_addr = $left;
      $right_addr = $right;
      $result = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$right_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$right_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      var $27 = _multiply_int_timedelta($right_addr, $left_addr);
      $result = $27;
      __lastLabel__ = 4;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$left_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$left_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $45 = _multiply_int_timedelta($left_addr, $right_addr);
      $result = $45;
      __lastLabel__ = 7;
      __label__ = 9;
      break;
     case 8:
      var $_pr = $result;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $46 = __lastLabel__ == 8 ? $_pr : __lastLabel__ == 4 ? $27 : $45;
      
      if ($46 == __Py_NotImplementedStruct) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $51 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $51;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $result;
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_divide($left, $right) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $result;
      $left_addr = $left;
      $right_addr = $right;
      $result = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DeltaType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$right_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$right_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      var $27 = _divide_timedelta_int($left_addr, $right_addr);
      $result = $27;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      var $_pr = $result;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $28 = __lastLabel__ == 5 ? $_pr : $27;
      
      if ($28 == __Py_NotImplementedStruct) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      var $33 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $33;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _accum($tag, $sofar, $num, $factor, $leftover) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      var $intpart = __stackBase__;
      var $x;
      var $y;
      $tag_addr = $tag;
      $sofar_addr = $sofar;
      $num_addr = $num;
      $factor_addr = $factor;
      $leftover_addr = $leftover;
      
      
      if ($num_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str110, __str1, 1851, ___PRETTY_FUNCTION___10356);
      throw "Reached an unreachable!";
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$num_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$num_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      var $19 = _PyNumber_Multiply($num_addr, $factor_addr);
      $prod = $19;
      
      if ($19 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 42;
      break;
     case 6:
      
      
      var $23 = _PyNumber_Add($sofar_addr, $prod);
      $sum = $23;
      
      
      
      var $27 = HEAP[$prod] - 1;
      
      
      HEAP[$prod] = $27;
      
      
      
      
      if (HEAP[$prod] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $38 = HEAP[HEAP[$prod + 4] + 24];
      
      FUNCTION_TABLE[$38]($prod);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $sum;
      __label__ = 42;
      break;
     case 9:
      
      
      
      
      if (HEAP[$num_addr + 4] == _PyFloat_Type) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      var $47 = HEAP[$num_addr + 4];
      var $48 = _PyType_IsSubtype($47, _PyFloat_Type);
      
      if ($48 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 11:
      
      var $51 = _PyFloat_AsDouble($num_addr);
      $dnum = $51;
      var $52 = $51 == -1;
      if ($52) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $53 = _PyErr_Occurred();
      
      if ($53 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 42;
      break;
     case 14:
      
      var $56 = _modf($dnum, $intpart);
      $fracpart = $56;
      var $57 = HEAP[$intpart];
      var $58 = _PyLong_FromDouble($57);
      $x = $58;
      
      if ($58 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 42;
      break;
     case 16:
      
      
      var $62 = _PyNumber_Multiply($x, $factor_addr);
      $prod = $62;
      
      
      
      var $66 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $66;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $77 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$77]($x);
      __label__ = 18;
      break;
     case 18:
      
      
      if ($prod == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 42;
      break;
     case 20:
      
      
      var $83 = _PyNumber_Add($sofar_addr, $prod);
      $sum = $83;
      
      
      
      var $87 = HEAP[$prod] - 1;
      
      
      HEAP[$prod] = $87;
      
      
      
      
      if (HEAP[$prod] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $98 = HEAP[HEAP[$prod + 4] + 24];
      
      FUNCTION_TABLE[$98]($prod);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($sum == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      $0 = 0;
      __label__ = 42;
      break;
     case 24:
      
      
      if ($fracpart == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      $0 = $sum;
      __label__ = 42;
      break;
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$factor_addr + 4] + 84] & 8388608) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$factor_addr + 4] + 84] & 16777216) == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      ___assert_fail(__str111, __str1, 1901, ___PRETTY_FUNCTION___10356);
      throw "Reached an unreachable!";
     case 29:
      
      
      
      
      
      
      
      var $126 = $factor_addr;
      if ((HEAP[HEAP[$factor_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $127 = _PyInt_AsLong($126);
      
      $dnum = $127;
      __label__ = 32;
      break;
     case 31:
      var $129 = _PyLong_AsDouble($126);
      $dnum = $129;
      __label__ = 32;
      break;
     case 32:
      
      
      var $132 = $dnum * $fracpart;
      $dnum = $132;
      
      var $134 = _modf($dnum, $intpart);
      $fracpart = $134;
      var $135 = HEAP[$intpart];
      var $136 = _PyLong_FromDouble($135);
      $x = $136;
      
      var $138 = $sum;
      if ($136 == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 33:
      
      
      var $141 = HEAP[$138] - 1;
      
      
      HEAP[$sum] = $141;
      
      
      
      
      if (HEAP[$sum] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $152 = HEAP[HEAP[$sum + 4] + 24];
      
      FUNCTION_TABLE[$152]($sum);
      __label__ = 35;
      break;
     case 35:
      $0 = 0;
      __label__ = 42;
      break;
     case 36:
      
      var $155 = _PyNumber_Add($138, $x);
      $y = $155;
      
      
      
      var $159 = HEAP[$sum] - 1;
      
      
      HEAP[$sum] = $159;
      
      
      
      
      if (HEAP[$sum] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $170 = HEAP[HEAP[$sum + 4] + 24];
      
      FUNCTION_TABLE[$170]($sum);
      __label__ = 38;
      break;
     case 38:
      
      
      
      var $175 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $175;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      
      
      var $186 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$186]($x);
      __label__ = 40;
      break;
     case 40:
      
      
      
      var $191 = HEAP[$leftover_addr] + $fracpart;
      
      HEAP[$leftover_addr] = $191;
      
      $0 = $y;
      __label__ = 42;
      break;
     case 41:
      
      
      
      
      var $198 = HEAP[HEAP[$num_addr + 4] + 12];
      var $199 = HEAP[_PyExc_TypeError];
      
      var $201 = _PyErr_Format($199, __str112, allocate([ $tag_addr, 0, 0, 0, $198, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval42 = $retval;
      STACKTOP = __stackBase__;
      return $retval42;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $self;
      var $day = __stackBase__;
      var $second = __stackBase__ + 4;
      var $us = __stackBase__ + 8;
      var $ms = __stackBase__ + 12;
      var $minute = __stackBase__ + 16;
      var $hour = __stackBase__ + 20;
      var $week = __stackBase__ + 24;
      var $x;
      var $y;
      var $leftover_us = __stackBase__ + 28;
      var $temp;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      $self = 0;
      HEAP[$day] = 0;
      HEAP[$second] = 0;
      HEAP[$us] = 0;
      HEAP[$ms] = 0;
      HEAP[$minute] = 0;
      HEAP[$hour] = 0;
      HEAP[$week] = 0;
      $x = 0;
      $y = 0;
      HEAP[$leftover_us] = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str113, _keywords_10491, allocate([ $day, 0, 0, 0, $second, 0, 0, 0, $us, 0, 0, 0, $ms, 0, 0, 0, $minute, 0, 0, 0, $hour, 0, 0, 0, $week, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $5 = _PyInt_FromLong(0);
      $x = $5;
      
      
      if ($x == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      if (HEAP[$us] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $10 = HEAP[_us_per_us];
      var $11 = HEAP[$us];
      
      var $13 = _accum(__str116, $x, $11, $10, $leftover_us);
      $y = $13;
      
      
      
      var $17 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $17;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $28 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$28]($x);
      __label__ = 5;
      break;
     case 5:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if (HEAP[$ms] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $34 = HEAP[_us_per_ms];
      var $35 = HEAP[$ms];
      
      var $37 = _accum(__str117, $x, $35, $34, $leftover_us);
      $y = $37;
      
      
      
      var $41 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $41;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $52 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$52]($x);
      __label__ = 9;
      break;
     case 9:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$second] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $58 = HEAP[_us_per_second];
      var $59 = HEAP[$second];
      
      var $61 = _accum(__str115, $x, $59, $58, $leftover_us);
      $y = $61;
      
      
      
      var $65 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $65;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $76 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$76]($x);
      __label__ = 13;
      break;
     case 13:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if (HEAP[$minute] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 15:
      var $82 = HEAP[_us_per_minute];
      var $83 = HEAP[$minute];
      
      var $85 = _accum(__str118, $x, $83, $82, $leftover_us);
      $y = $85;
      
      
      
      var $89 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $89;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $100 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$100]($x);
      __label__ = 17;
      break;
     case 17:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      
      if (HEAP[$hour] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      var $106 = HEAP[_us_per_hour];
      var $107 = HEAP[$hour];
      
      var $109 = _accum(__str119, $x, $107, $106, $leftover_us);
      $y = $109;
      
      
      
      var $113 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $113;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $124 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$124]($x);
      __label__ = 21;
      break;
     case 21:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      
      
      if (HEAP[$day] != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      var $130 = HEAP[_us_per_day];
      var $131 = HEAP[$day];
      
      var $133 = _accum(__str114, $x, $131, $130, $leftover_us);
      $y = $133;
      
      
      
      var $137 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $137;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $148 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$148]($x);
      __label__ = 25;
      break;
     case 25:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      if (HEAP[$week] != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      var $154 = HEAP[_us_per_week];
      var $155 = HEAP[$week];
      
      var $157 = _accum(__str120, $x, $155, $154, $leftover_us);
      $y = $157;
      
      
      
      var $161 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $161;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $172 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$172]($x);
      __label__ = 29;
      break;
     case 29:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if (HEAP[$leftover_us] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 31:
      var $178 = HEAP[$leftover_us];
      var $179 = _round_to_long($178);
      var $180 = _PyLong_FromLong($179);
      $temp = $180;
      
      
      var $183 = $x;
      if ($temp == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 32:
      
      
      var $186 = HEAP[$183] - 1;
      
      
      HEAP[$x] = $186;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 33:
      
      
      
      
      var $197 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$197]($x);
      __label__ = 41;
      break;
     case 34:
      
      var $200 = _PyNumber_Add($183, $temp);
      $y = $200;
      
      
      
      var $204 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $204;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      
      var $215 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$215]($temp);
      __label__ = 36;
      break;
     case 36:
      
      
      
      var $220 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $220;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $231 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$231]($x);
      __label__ = 38;
      break;
     case 38:
      
      $x = $y;
      
      if ($y == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      var $237 = _microseconds_to_delta_ex($x, $type_addr);
      $self = $237;
      
      
      
      var $241 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $241;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $252 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$252]($x);
      __label__ = 41;
      break;
     case 41:
      
      $0 = $self;
      
      $retval = $0;
      var $retval41 = $retval;
      STACKTOP = __stackBase__;
      return $retval41;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_nonzero($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $iftmp_135;
      var $0;
      $self_addr = $self;
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $iftmp_135 = 1;
      __label__ = 5;
      break;
     case 4:
      $iftmp_135 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $iftmp_135;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_repr($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      
      
      var $5 = $self_addr;
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $7 = HEAP[$5 + 20];
      
      
      var $10 = HEAP[$self_addr + 16];
      
      
      var $13 = HEAP[$self_addr + 12];
      
      
      
      
      
      var $19 = HEAP[HEAP[$self_addr + 4] + 12];
      var $20 = _PyString_FromFormat(__str121, allocate([ $19, 0, 0, 0, $13, 0, 0, 0, $10, 0, 0, 0, $7, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $20;
      __label__ = 5;
      break;
     case 2:
      
      
      
      var $24 = $self_addr;
      if (HEAP[$5 + 16] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $26 = HEAP[$24 + 16];
      
      
      var $29 = HEAP[$self_addr + 12];
      
      
      
      
      
      var $35 = HEAP[HEAP[$self_addr + 4] + 12];
      var $36 = _PyString_FromFormat(__str122, allocate([ $35, 0, 0, 0, $29, 0, 0, 0, $26, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $36;
      __label__ = 5;
      break;
     case 4:
      
      var $38 = HEAP[$24 + 12];
      
      
      
      
      
      var $44 = HEAP[HEAP[$self_addr + 4] + 12];
      var $45 = _PyString_FromFormat(__str123, allocate([ $44, 0, 0, 0, $38, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $45;
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
  function _delta_str($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 108;
    _memset(__stackBase__, 0, 108);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $iftmp_141;
      var $days;
      var $seconds = __stackBase__;
      var $us;
      var $hours;
      var $minutes = __stackBase__ + 4;
      var $buf = __stackBase__ + 8;
      var $pbuf;
      var $buflen;
      var $n;
      $self_addr = $self;
      
      
      
      $days = HEAP[$self_addr + 12];
      
      
      var $6 = HEAP[$self_addr + 16];
      HEAP[$seconds] = $6;
      
      
      
      $us = HEAP[$self_addr + 20];
      
      $pbuf = $buf;
      $buflen = 100;
      var $10 = HEAP[$seconds];
      var $11 = _divmod($10, 60, $seconds);
      HEAP[$minutes] = $11;
      var $12 = HEAP[$minutes];
      var $13 = _divmod($12, 60, $minutes);
      $hours = $13;
      
      
      if ($days != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      var $19 = $days == -1;
      
      if ($days == 1 | $19) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $iftmp_141 = __str79;
      __label__ = 4;
      break;
     case 3:
      $iftmp_141 = __str124;
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      var $24 = _PyOS_snprintf($pbuf, $buflen, __str125, allocate([ $days, 0, 0, 0, $iftmp_141, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $n = $24;
      
      if ($24 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      if ($n >= $buflen) {
        __label__ = 14;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $31 = $pbuf + $n;
      $pbuf = $31;
      
      
      var $34 = $buflen - $n;
      $buflen = $34;
      __label__ = 7;
      break;
     case 7:
      var $35 = HEAP[$seconds];
      var $36 = HEAP[$minutes];
      
      
      
      var $40 = _PyOS_snprintf($pbuf, $buflen, __str126, allocate([ $hours, 0, 0, 0, $36, 0, 0, 0, $35, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $n = $40;
      
      if ($40 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      if ($n >= $buflen) {
        __label__ = 14;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      var $47 = $pbuf + $n;
      $pbuf = $47;
      
      
      var $50 = $buflen - $n;
      $buflen = $50;
      
      
      if ($us != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 10:
      
      
      
      var $56 = _PyOS_snprintf($pbuf, $buflen, __str98, allocate([ $us, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $n = $56;
      
      
      if ($n < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      if ($n >= $buflen) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      var $64 = $pbuf + $n;
      $pbuf = $64;
      __label__ = 13;
      break;
     case 13:
      
      
      
      
      var $67 = $pbuf - $buf;
      var $buf18 = $buf;
      var $68 = _PyString_FromStringAndSize($buf18, $67);
      $0 = $68;
      __label__ = 15;
      break;
     case 14:
      var $69 = HEAP[_PyExc_SystemError];
      _PyErr_SetString($69, __str127);
      $0 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _delta_getstate($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = HEAP[$self_addr + 20];
    
    
    var $6 = HEAP[$self_addr + 16];
    
    
    var $9 = HEAP[$self_addr + 12];
    var $10 = __Py_BuildValue_SizeT(__str128, allocate([ $9, 0, 0, 0, $6, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
    $0 = $10;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _delta_total_seconds($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $total_seconds;
      var $total_microseconds;
      var $one_million;
      $self_addr = $self;
      
      
      var $3 = _delta_to_microseconds($self_addr);
      $total_microseconds = $3;
      
      
      if ($total_microseconds == 0) {
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
      var $6 = _PyLong_FromLong(1e6);
      $one_million = $6;
      
      
      var $9 = $total_microseconds;
      if ($one_million == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      var $12 = HEAP[$9] - 1;
      
      
      HEAP[$total_microseconds] = $12;
      
      
      
      
      if (HEAP[$total_microseconds] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[$total_microseconds + 4] + 24];
      
      FUNCTION_TABLE[$23]($total_microseconds);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      
      var $26 = _PyNumber_TrueDivide($9, $one_million);
      $total_seconds = $26;
      
      
      
      var $30 = HEAP[$total_microseconds] - 1;
      
      
      HEAP[$total_microseconds] = $30;
      
      
      
      
      if (HEAP[$total_microseconds] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $41 = HEAP[HEAP[$total_microseconds + 4] + 24];
      
      FUNCTION_TABLE[$41]($total_microseconds);
      __label__ = 8;
      break;
     case 8:
      
      
      
      var $46 = HEAP[$one_million] - 1;
      
      
      HEAP[$one_million] = $46;
      
      
      
      
      if (HEAP[$one_million] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $57 = HEAP[HEAP[$one_million + 4] + 24];
      
      FUNCTION_TABLE[$57]($one_million);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $total_seconds;
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
  function _delta_reduce($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    var $2 = _delta_getstate($self_addr);
    
    
    
    var $6 = HEAP[$self_addr + 4];
    var $7 = __Py_BuildValue_SizeT(__str129, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_year($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    
    
    
    
    
    
    
    var $12 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $13 = _PyInt_FromLong($12);
    $0 = $13;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_month($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 2];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_day($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 3];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $self;
      var $state;
      var $year = __stackBase__;
      var $month = __stackBase__ + 4;
      var $day = __stackBase__ + 8;
      var $me;
      var $pdata;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      $self = 0;
      
      
      
      
      
      if (HEAP[$args_addr + 8] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      
      $state = HEAP[$args_addr + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state + 4] + 84] & 134217728) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 2:
      
      
      
      
      
      if (HEAP[$state + 8] == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      
      if (HEAP[$state + 20 + 2] - 1 <= 11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      var $33 = HEAP[$type_addr + 152];
      
      var $35 = FUNCTION_TABLE[$33]($type_addr, 0);
      
      $me = $35;
      
      
      if ($me != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      $pdata = $state + 20;
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($me + 13, $pdata, 4, 1, 0);
      
      
      HEAP[$me + 8] = -1;
      __label__ = 6;
      break;
     case 6:
      
      
      $0 = $me;
      __label__ = 12;
      break;
     case 7:
      
      
      var $53 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str128, _date_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($53 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $55 = HEAP[$day];
      var $56 = HEAP[$month];
      var $57 = HEAP[$year];
      var $58 = _check_date_args($57, $56, $55);
      
      if ($58 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 12;
      break;
     case 10:
      var $60 = HEAP[$day];
      var $61 = HEAP[$month];
      var $62 = HEAP[$year];
      
      var $64 = _new_date_ex($62, $61, $60, $type_addr);
      $self = $64;
      __label__ = 11;
      break;
     case 11:
      
      $0 = $self;
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
  function _date_local_from_time_t($cls, $ts) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $ts_addr;
      var $retval;
      var $0;
      var $tm;
      var $t = __stackBase__;
      var $result;
      $cls_addr = $cls;
      $ts_addr = $ts;
      $result = 0;
      
      var $2 = __PyTime_DoubleToTimet($ts_addr);
      HEAP[$t] = $2;
      
      var $4 = HEAP[$t] == -1;
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
      var $7 = _localtime($t);
      $tm = $7;
      
      if ($7 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $11 = HEAP[$tm + 12];
      
      
      
      var $15 = HEAP[$tm + 16] + 1;
      
      
      
      var $19 = HEAP[$tm + 20] + 1900;
      
      var $21 = __PyObject_CallFunction_SizeT($cls_addr, __str128, allocate([ $19, 0, 0, 0, $15, 0, 0, 0, $11, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $21;
      __label__ = 6;
      break;
     case 5:
      var $22 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($22, __str141);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $result;
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
  function _date_today($cls, $dummy) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $dummy_addr;
      var $retval;
      var $0;
      var $time;
      var $result;
      $cls_addr = $cls;
      $dummy_addr = $dummy;
      var $1 = _time_time();
      $time = $1;
      
      
      if ($time == 0) {
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
      
      
      var $6 = __PyObject_CallMethod_SizeT($cls_addr, __str142, __str35, allocate([ $time, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $6;
      
      
      
      var $10 = HEAP[$time] - 1;
      
      
      HEAP[$time] = $10;
      
      
      
      
      if (HEAP[$time] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[$time + 4] + 24];
      
      FUNCTION_TABLE[$21]($time);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $result;
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
  function _date_fromtimestamp($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $timestamp = __stackBase__;
      var $result;
      $cls_addr = $cls;
      $args_addr = $args;
      $result = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str143, allocate([ $timestamp, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$timestamp];
      
      var $6 = _date_local_from_time_t($cls_addr, $4);
      $result = $6;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $result;
      
      $retval = $0;
      var $retval2 = $retval;
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_fromordinal($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      var $ordinal = __stackBase__;
      var $year = __stackBase__ + 4;
      var $month = __stackBase__ + 8;
      var $day = __stackBase__ + 12;
      $cls_addr = $cls;
      $args_addr = $args;
      $result = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str144, allocate([ $ordinal, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      if (HEAP[$ordinal] <= 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str145);
      __label__ = 4;
      break;
     case 3:
      var $7 = HEAP[$ordinal];
      _ord_to_ymd($7, $year, $month, $day);
      var $8 = HEAP[$day];
      var $9 = HEAP[$month];
      var $10 = HEAP[$year];
      
      var $12 = __PyObject_CallFunction_SizeT($cls_addr, __str128, allocate([ $10, 0, 0, 0, $9, 0, 0, 0, $8, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $12;
      __label__ = 4;
      break;
     case 4:
      
      $0 = $result;
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _add_date_timedelta($date, $delta, $negate) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $date_addr;
      var $delta_addr;
      var $negate_addr;
      var $retval;
      var $0;
      var $iftmp_174;
      var $result;
      var $year = __stackBase__;
      var $month = __stackBase__ + 4;
      var $deltadays;
      var $day = __stackBase__ + 8;
      $date_addr = $date;
      $delta_addr = $delta;
      $negate_addr = $negate;
      $result = 0;
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[$date_addr + 13 + 1] | HEAP[$date_addr + 13] << 8;
      HEAP[$year] = $12;
      
      
      
      
      var $17 = HEAP[$date_addr + 13 + 2];
      HEAP[$month] = $17;
      
      
      
      $deltadays = HEAP[$delta_addr + 12];
      
      
      
      
      var $25 = HEAP[$date_addr + 13 + 3];
      
      
      var $28 = $deltadays;
      if ($negate_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $iftmp_174 = 0 - $28;
      __label__ = 3;
      break;
     case 2:
      $iftmp_174 = $28;
      __label__ = 3;
      break;
     case 3:
      
      var $31 = $iftmp_174 + $25;
      HEAP[$day] = $31;
      var $32 = _normalize_date($year, $month, $day);
      
      if ($32 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $34 = HEAP[$day];
      var $35 = HEAP[$month];
      var $36 = HEAP[$year];
      var $37 = _new_date_ex($36, $35, $34, _PyDateTime_DateType);
      $result = $37;
      __label__ = 5;
      break;
     case 5:
      
      $0 = $result;
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_add($left, $right) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      $left_addr = $left;
      $right_addr = $right;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      $0 = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateType) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[$left_addr + 4];
      var $28 = _PyType_IsSubtype($27, _PyDateTime_DateType);
      
      if ($28 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $36 = HEAP[$right_addr + 4];
      var $37 = _PyType_IsSubtype($36, _PyDateTime_DeltaType);
      
      if ($37 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      
      
      var $43 = _add_date_timedelta($left_addr, $right_addr, 0);
      $0 = $43;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $50 = HEAP[$left_addr + 4];
      var $51 = _PyType_IsSubtype($50, _PyDateTime_DeltaType);
      
      if ($51 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $57 = _add_date_timedelta($right_addr, $left_addr, 0);
      $0 = $57;
      __label__ = 14;
      break;
     case 13:
      
      var $59 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $59;
      $0 = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_subtract($left, $right) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $left_ord;
      var $right_ord;
      $left_addr = $left;
      $right_addr = $right;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $20 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $20;
      $0 = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 5:
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateType) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $27 = HEAP[$left_addr + 4];
      var $28 = _PyType_IsSubtype($27, _PyDateTime_DateType);
      
      if ($28 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 7:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DateType) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      var $36 = HEAP[$right_addr + 4];
      var $37 = _PyType_IsSubtype($36, _PyDateTime_DateType);
      
      if ($37 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      
      var $44 = HEAP[$left_addr + 13 + 3];
      
      
      
      
      
      var $50 = HEAP[$left_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[$left_addr + 13 + 1] | HEAP[$left_addr + 13] << 8;
      var $65 = _ymd_to_ord($64, $50, $44);
      $left_ord = $65;
      
      
      
      
      
      var $71 = HEAP[$right_addr + 13 + 3];
      
      
      
      
      
      var $77 = HEAP[$right_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $91 = HEAP[$right_addr + 13 + 1] | HEAP[$right_addr + 13] << 8;
      var $92 = _ymd_to_ord($91, $77, $71);
      $right_ord = $92;
      
      
      
      var $96 = _new_delta_ex($left_ord - $right_ord, 0, 0, 0, _PyDateTime_DeltaType);
      $0 = $96;
      __label__ = 14;
      break;
     case 10:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $103 = HEAP[$right_addr + 4];
      var $104 = _PyType_IsSubtype($103, _PyDateTime_DeltaType);
      
      if ($104 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $110 = _add_date_timedelta($left_addr, $right_addr, 1);
      $0 = $110;
      __label__ = 14;
      break;
     case 13:
      
      var $112 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $112;
      $0 = __Py_NotImplementedStruct;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1028;
    _memset(__stackBase__, 0, 1028);
    
    var $self_addr;
    var $retval;
    var $0;
    var $buffer = __stackBase__;
    var $type_name;
    $self_addr = $self;
    
    
    
    
    
    
    $type_name = HEAP[HEAP[$self_addr + 4] + 12];
    
    
    
    
    var $11 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    var $16 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $28 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $buffer1 = $buffer;
    
    var $30 = _PyOS_snprintf($buffer1, 1028, __str121, allocate([ $type_name, 0, 0, 0, $28, 0, 0, 0, $16, 0, 0, 0, $11, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
    var $buffer2 = $buffer;
    var $31 = _PyString_FromString($buffer2);
    $0 = $31;
    
    $retval = $0;
    var $retval3 = $retval;
    STACKTOP = __stackBase__;
    return $retval3;
  }
  function _date_isoformat($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    _memset(__stackBase__, 0, 128);
    
    var $self_addr;
    var $retval;
    var $0;
    var $buffer = __stackBase__;
    $self_addr = $self;
    
    var $buffer1 = $buffer;
    var $2 = _isoformat_date($self_addr, $buffer1, 128);
    var $buffer2 = $buffer;
    var $3 = _PyString_FromString($buffer2);
    $0 = $3;
    
    $retval = $0;
    var $retval3 = $retval;
    STACKTOP = __stackBase__;
    return $retval3;
  }
  function _date_str($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = __PyObject_CallMethod_SizeT($self_addr, __str146, __str99, allocate(1, "i32", ALLOC_STACK));
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_ctime($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    var $2 = _format_ctime($self_addr, 0, 0, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_strftime($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $result;
      var $tuple;
      var $format = __stackBase__;
      var $format_len = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str147, _keywords_11164, allocate([ $format, 0, 0, 0, $format_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $7 = __PyObject_CallMethod_SizeT($self_addr, __str149, __str99, allocate(1, "i32", ALLOC_STACK));
      $tuple = $7;
      
      
      if ($tuple == 0) {
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
      
      
      var $12 = HEAP[$format_len];
      var $13 = HEAP[$format];
      
      
      
      var $17 = _wrap_strftime($self_addr, $13, $12, $tuple, $self_addr);
      $result = $17;
      
      
      
      var $21 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $21;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $32 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$32]($tuple);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $result;
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
  function _date_format($self, $args) {
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
      var $format = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str150, allocate([ $format, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      
      
      var $11 = HEAP[$format];
      if ((HEAP[HEAP[HEAP[$format] + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$11 + 8] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      
      
      var $18 = _PyObject_Str($self_addr);
      $0 = $18;
      __label__ = 10;
      break;
     case 5:
      
      
      
      
      
      
      var $25 = HEAP[$format];
      if ((HEAP[HEAP[$11 + 4] + 84] & 268435456) != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      if (HEAP[$25 + 8] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      
      var $32 = _PyObject_Unicode($self_addr);
      $0 = $32;
      __label__ = 10;
      break;
     case 8:
      
      
      
      var $36 = HEAP[HEAP[$25 + 4] + 12];
      var $37 = HEAP[_PyExc_ValueError];
      var $38 = _PyErr_Format($37, __str151, allocate([ $36, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 10;
      break;
     case 9:
      var $39 = HEAP[$format];
      
      
      var $42 = __PyObject_CallMethod_SizeT($self_addr, __str93, __str35, allocate([ $39, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $42;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_isoweekday($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    var $dow;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    var $10 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $22 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $23 = _weekday($22, $10, $5);
    $dow = $23;
    
    
    var $26 = _PyInt_FromLong($dow + 1);
    $0 = $26;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_isocalendar($self) {
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
      var $year;
      var $week1_monday;
      var $today;
      var $week;
      var $day = __stackBase__;
      $self_addr = $self;
      
      
      
      
      
      
      
      
      
      
      
      
      $year = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      
      var $14 = _iso_week1_monday($year);
      $week1_monday = $14;
      
      
      
      
      var $19 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      var $24 = HEAP[$self_addr + 13 + 2];
      
      var $26 = _ymd_to_ord($year, $24, $19);
      $today = $26;
      
      
      
      var $30 = _divmod($today - $week1_monday, 7, $day);
      $week = $30;
      
      
      if ($week < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $34 = $year - 1;
      $year = $34;
      
      var $36 = _iso_week1_monday($year);
      $week1_monday = $36;
      
      
      
      var $40 = _divmod($today - $week1_monday, 7, $day);
      $week = $40;
      __label__ = 5;
      break;
     case 2:
      
      
      if ($week > 51) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $45 = _iso_week1_monday($year + 1);
      
      
      if ($45 <= $today) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $49 = $year + 1;
      $year = $49;
      $week = 0;
      __label__ = 5;
      break;
     case 5:
      
      var $51 = HEAP[$day] + 1;
      
      
      
      var $55 = __Py_BuildValue_SizeT(__str128, allocate([ $year, 0, 0, 0, $week + 1, 0, 0, 0, $51, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $55;
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_richcompare($self, $other, $op) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $other_addr;
      var $op_addr;
      var $retval;
      var $0;
      var $diff;
      $self_addr = $self;
      $other_addr = $other;
      $op_addr = $op;
      $diff = 42;
      
      
      
      
      if (HEAP[$other_addr + 4] == _PyDateTime_DateType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$other_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      
      
      
      var $17 = _memcmp($self_addr + 13, $other_addr + 13, 4);
      $diff = $17;
      __label__ = 8;
      break;
     case 3:
      
      var $19 = _PyObject_HasAttrString($other_addr, __str149);
      
      if ($19 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $22 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $22;
      $0 = __Py_NotImplementedStruct;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      
      if ($op_addr == 2 | $op_addr == 3) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $diff = 1;
      __label__ = 8;
      break;
     case 7:
      
      
      
      var $30 = _cmperror($self_addr, $other_addr);
      $0 = $30;
      __label__ = 9;
      break;
     case 8:
      
      
      var $33 = _diff_to_bool($diff, $op_addr);
      $0 = $33;
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
  function _date_timetuple($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    var $10 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $22 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $23 = _build_struct_time($22, $10, $5, 0, 0, 0, -1);
    $0 = $23;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_replace($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $clone;
      var $tuple;
      var $year = __stackBase__;
      var $month = __stackBase__ + 4;
      var $day = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      
      
      
      
      
      
      
      
      
      var $12 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      HEAP[$year] = $12;
      
      
      
      
      var $17 = HEAP[$self_addr + 13 + 2];
      HEAP[$month] = $17;
      
      
      
      
      var $22 = HEAP[$self_addr + 13 + 3];
      HEAP[$day] = $22;
      
      
      var $25 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str152, _date_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($25 == 0) {
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
      var $27 = HEAP[$day];
      var $28 = HEAP[$month];
      var $29 = HEAP[$year];
      var $30 = __Py_BuildValue_SizeT(__str128, allocate([ $29, 0, 0, 0, $28, 0, 0, 0, $27, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $tuple = $30;
      
      
      if ($tuple == 0) {
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
      
      
      
      var $36 = HEAP[$self_addr + 4];
      
      var $38 = _date_new($36, $tuple, 0);
      $clone = $38;
      
      
      
      var $42 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $42;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $53 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$53]($tuple);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $clone;
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
  function _date_hash($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $temp;
      $self_addr = $self;
      
      
      
      var $4 = HEAP[$self_addr + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      var $6 = _date_getstate($self_addr);
      $temp = $6;
      
      
      if ($temp != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      var $10 = _PyObject_Hash($temp);
      
      
      HEAP[$self_addr + 8] = $10;
      
      
      
      var $16 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $16;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $27 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$27]($temp);
      __label__ = 4;
      break;
     case 4:
      
      
      
      $0 = HEAP[$self_addr + 8];
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _date_toordinal($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    var $10 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $22 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $23 = _ymd_to_ord($22, $10, $5);
    var $24 = _PyInt_FromLong($23);
    $0 = $24;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_weekday($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    var $dow;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    var $10 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    var $22 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $23 = _weekday($22, $10, $5);
    $dow = $23;
    
    var $25 = _PyInt_FromLong($dow);
    $0 = $25;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_getstate($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    var $4 = _PyString_FromStringAndSize($self_addr + 13, 4);
    var $5 = __Py_BuildValue_SizeT(__str153, allocate([ $4, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $5;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _date_reduce($self, $arg) {
    
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $arg_addr = $arg;
    
    var $2 = _date_getstate($self_addr);
    
    
    
    var $6 = HEAP[$self_addr + 4];
    var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _tzinfo_nogo($methodname) {
    
    var $methodname_addr;
    var $retval;
    var $0;
    $methodname_addr = $methodname;
    var $1 = HEAP[_PyExc_NotImplementedError];
    
    var $3 = _PyErr_Format($1, __str177, allocate([ $methodname_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _tzinfo_tzname($self, $dt) {
    
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $dt_addr = $dt;
    var $1 = _tzinfo_nogo(__str45);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _tzinfo_utcoffset($self, $dt) {
    
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $dt_addr = $dt;
    var $1 = _tzinfo_nogo(__str42);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _tzinfo_dst($self, $dt) {
    
    var $self_addr;
    var $dt_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $dt_addr = $dt;
    var $1 = _tzinfo_nogo(__str44);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _tzinfo_fromutc($self, $dt) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $dt_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $m = __stackBase__ + 4;
      var $d = __stackBase__ + 8;
      var $hh = __stackBase__ + 12;
      var $mm = __stackBase__ + 16;
      var $ss = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      var $result;
      var $off;
      var $dst;
      var $none = __stackBase__ + 28;
      var $delta;
      $self_addr = $self;
      $dt_addr = $dt;
      
      
      
      
      
      if (HEAP[$dt_addr + 4] != _PyDateTime_DateTimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      
      
      var $9 = HEAP[$dt_addr + 4];
      var $10 = _PyType_IsSubtype($9, _PyDateTime_DateTimeType);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($12, __str178);
      $0 = 0;
      __label__ = 35;
      break;
     case 3:
      
      
      
      
      
      if (HEAP[$dt_addr + 12] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      if (HEAP[$dt_addr + 24] != $self_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $23 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($23, __str179);
      $0 = 0;
      __label__ = 35;
      break;
     case 6:
      
      
      
      
      var $28 = HEAP[$dt_addr + 24];
      var $29 = _call_utcoffset($28, $dt_addr, $none);
      $off = $29;
      
      var $31 = $off == -1;
      if ($31) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $32 = _PyErr_Occurred();
      
      if ($32 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 35;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $36 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($36, __str180);
      $0 = 0;
      __label__ = 35;
      break;
     case 11:
      
      
      
      
      var $41 = HEAP[$dt_addr + 24];
      var $42 = _call_dst($41, $dt_addr, $none);
      $dst = $42;
      
      var $44 = $dst == -1;
      if ($44) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $45 = _PyErr_Occurred();
      
      if ($45 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 35;
      break;
     case 14:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $49 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($49, __str181);
      $0 = 0;
      __label__ = 35;
      break;
     case 16:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $63 = HEAP[$dt_addr + 13 + 1] | HEAP[$dt_addr + 13] << 8;
      HEAP[$y] = $63;
      
      
      
      
      
      var $69 = HEAP[$dt_addr + 13 + 2];
      HEAP[$m] = $69;
      
      
      
      
      
      var $75 = HEAP[$dt_addr + 13 + 3];
      HEAP[$d] = $75;
      
      
      
      
      var $80 = HEAP[$dt_addr + 13 + 4];
      HEAP[$hh] = $80;
      
      
      
      
      var $85 = HEAP[$dt_addr + 13 + 5];
      HEAP[$mm] = $85;
      
      
      
      
      var $90 = HEAP[$dt_addr + 13 + 6];
      HEAP[$ss] = $90;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $109 = HEAP[$dt_addr + 13 + 8] << 8 | HEAP[$dt_addr + 13 + 7] << 16 | HEAP[$dt_addr + 13 + 9];
      HEAP[$us] = $109;
      
      
      
      $delta = $off - $dst;
      
      
      var $115 = $delta + HEAP[$mm];
      HEAP[$mm] = $115;
      
      
      
      
      
      if (HEAP[$mm] < 0 | HEAP[$mm] > 59) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      var $120 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($120 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 35;
      break;
     case 19:
      
      
      var $124 = HEAP[$dt_addr + 24];
      var $125 = HEAP[$us];
      var $126 = HEAP[$ss];
      var $127 = HEAP[$mm];
      var $128 = HEAP[$hh];
      var $129 = HEAP[$d];
      var $130 = HEAP[$m];
      var $131 = HEAP[$y];
      var $132 = _new_datetime_ex($131, $130, $129, $128, $127, $126, $125, $124, _PyDateTime_DateTimeType);
      $result = $132;
      
      if ($132 == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $0 = $result;
      __label__ = 35;
      break;
     case 21:
      
      
      var $137 = HEAP[$dt_addr + 24];
      
      var $139 = _call_dst($137, $result, $none);
      $dst = $139;
      
      var $141 = $dst == -1;
      if ($141) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      var $142 = _PyErr_Occurred();
      
      if ($142 != 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      if ($dst == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      $0 = $result;
      __label__ = 35;
      break;
     case 26:
      
      
      var $151 = $dst + HEAP[$mm];
      HEAP[$mm] = $151;
      
      
      
      
      
      if (HEAP[$mm] < 0 | HEAP[$mm] > 59) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $156 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($156 < 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $161 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $161;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $172 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$172]($result);
      __label__ = 30;
      break;
     case 30:
      
      
      var $176 = HEAP[$dt_addr + 24];
      var $177 = HEAP[$us];
      var $178 = HEAP[$ss];
      var $179 = HEAP[$mm];
      var $180 = HEAP[$hh];
      var $181 = HEAP[$d];
      var $182 = HEAP[$m];
      var $183 = HEAP[$y];
      var $184 = _new_datetime_ex($183, $182, $181, $180, $179, $178, $177, $176, _PyDateTime_DateTimeType);
      $result = $184;
      
      $0 = $result;
      __label__ = 35;
      break;
     case 31:
      var $186 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($186, __str182);
      __label__ = 32;
      break;
     case 32:
      
      
      
      var $190 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $190;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $201 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$201]($result);
      __label__ = 34;
      break;
     case 34:
      $0 = 0;
      __label__ = 35;
      break;
     case 35:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _tzinfo_reduce($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $args;
      var $state;
      var $tmp;
      var $getinitargs;
      var $getstate;
      var $dictptr;
      $self_addr = $self;
      var $1 = _PyTuple_New(0);
      $tmp = $1;
      
      
      if ($tmp == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 31;
      break;
     case 2:
      
      var $5 = _PyObject_GetAttrString($self_addr, __str183);
      $getinitargs = $5;
      
      
      if ($getinitargs != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 3:
      
      
      var $10 = _PyObject_CallObject($getinitargs, $tmp);
      $args = $10;
      
      
      
      var $14 = HEAP[$getinitargs] - 1;
      
      
      HEAP[$getinitargs] = $14;
      
      
      
      
      if (HEAP[$getinitargs] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $25 = HEAP[HEAP[$getinitargs + 4] + 24];
      
      FUNCTION_TABLE[$25]($getinitargs);
      __label__ = 5;
      break;
     case 5:
      
      
      if ($args == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      
      
      var $32 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $32;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $43 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$43]($tmp);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 31;
      break;
     case 9:
      _PyErr_Clear();
      
      $args = $tmp;
      
      
      
      var $49 = HEAP[$args] + 1;
      
      
      HEAP[$args] = $49;
      __label__ = 10;
      break;
     case 10:
      
      var $53 = _PyObject_GetAttrString($self_addr, __str184);
      $getstate = $53;
      
      if ($53 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 11:
      
      
      var $57 = _PyObject_CallObject($getstate, $tmp);
      $state = $57;
      
      
      
      var $61 = HEAP[$getstate] - 1;
      
      
      HEAP[$getstate] = $61;
      
      
      
      
      if (HEAP[$getstate] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $72 = HEAP[HEAP[$getstate + 4] + 24];
      
      FUNCTION_TABLE[$72]($getstate);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($state == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 14:
      
      
      
      var $79 = HEAP[$args] - 1;
      
      
      HEAP[$args] = $79;
      
      
      
      
      if (HEAP[$args] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $90 = HEAP[HEAP[$args + 4] + 24];
      
      FUNCTION_TABLE[$90]($args);
      __label__ = 16;
      break;
     case 16:
      
      
      
      var $95 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $95;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $106 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$106]($tmp);
      __label__ = 18;
      break;
     case 18:
      $0 = 0;
      __label__ = 31;
      break;
     case 19:
      _PyErr_Clear();
      $state = __Py_NoneStruct;
      
      var $109 = __PyObject_GetDictPtr($self_addr);
      $dictptr = $109;
      
      
      if ($dictptr != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$dictptr] != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 21:
      
      var $116 = HEAP[$dictptr];
      var $117 = _PyDict_Size($116);
      
      if ($117 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      $state = HEAP[$dictptr];
      __label__ = 23;
      break;
     case 23:
      
      
      
      var $124 = HEAP[$state] + 1;
      
      
      HEAP[$state] = $124;
      __label__ = 24;
      break;
     case 24:
      
      
      
      var $130 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $130;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $141 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$141]($tmp);
      __label__ = 26;
      break;
     case 26:
      
      
      if ($state == __Py_NoneStruct) {
        __label__ = 27;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 27:
      
      
      
      var $148 = HEAP[$state] - 1;
      
      
      HEAP[$state] = $148;
      
      
      
      
      if (HEAP[$state] == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      var $159 = HEAP[HEAP[$state + 4] + 24];
      
      FUNCTION_TABLE[$159]($state);
      __label__ = 29;
      break;
     case 29:
      
      
      var $163 = HEAP[$self_addr + 4];
      
      var $165 = __Py_BuildValue_SizeT(__str154, allocate([ $163, 0, 0, 0, $args, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $165;
      __label__ = 31;
      break;
     case 30:
      
      
      var $168 = HEAP[$self_addr + 4];
      
      
      var $171 = __Py_BuildValue_SizeT(__str185, allocate([ $168, 0, 0, 0, $args, 0, 0, 0, $state, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $171;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval33 = $retval;
      return $retval33;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_hour($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_minute($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 1];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _py_time_second($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 2];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_microsecond($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var $19 = HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5];
    var $20 = _PyInt_FromLong($19);
    $0 = $20;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_tzinfo($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $iftmp_259;
      var $result;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_259 = HEAP[$self_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_259 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      $result = $iftmp_259;
      
      
      
      var $13 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $13;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $self;
      var $state;
      var $hour = __stackBase__;
      var $minute = __stackBase__ + 4;
      var $second = __stackBase__ + 8;
      var $usecond = __stackBase__ + 12;
      var $tzinfo = __stackBase__ + 16;
      var $me;
      var $aware;
      var $pdata;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      $self = 0;
      HEAP[$hour] = 0;
      HEAP[$minute] = 0;
      HEAP[$second] = 0;
      HEAP[$usecond] = 0;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[$args_addr + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$args_addr + 8] <= 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      
      $state = HEAP[$args_addr + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$state + 8] == 6) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      
      if (HEAP[$state + 20] <= 23) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$args_addr + 8] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      var $43 = HEAP[$args_addr + 12 + 4];
      HEAP[$tzinfo] = $43;
      var $44 = HEAP[$tzinfo];
      var $45 = _check_tzinfo_subclass($44);
      
      if ($45 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $47 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($47, __str197);
      $0 = 0;
      __label__ = 19;
      break;
     case 8:
      
      
      
      $aware = HEAP[$tzinfo] != __Py_NoneStruct;
      
      
      var $53 = HEAP[$type_addr + 152];
      
      
      
      var $57 = FUNCTION_TABLE[$53]($type_addr, $aware);
      
      $me = $57;
      
      if ($57 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      $pdata = $state + 20;
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($me + 13, $pdata, 6, 1, 0);
      
      
      HEAP[$me + 8] = -1;
      
      
      
      HEAP[$me + 12] = $aware;
      
      
      if ($aware != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $78 = HEAP[HEAP[$tzinfo]] + 1;
      var $79 = HEAP[$tzinfo];
      HEAP[$79] = $78;
      var $80 = HEAP[$tzinfo];
      
      
      HEAP[$me + 20] = $80;
      __label__ = 11;
      break;
     case 11:
      
      
      $0 = $me;
      __label__ = 19;
      break;
     case 12:
      
      
      var $87 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str198, _time_kws, allocate([ $hour, 0, 0, 0, $minute, 0, 0, 0, $second, 0, 0, 0, $usecond, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($87 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 13:
      var $89 = HEAP[$usecond];
      var $90 = HEAP[$second];
      var $91 = HEAP[$minute];
      var $92 = HEAP[$hour];
      var $93 = _check_time_args($92, $91, $90, $89);
      
      if ($93 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 19;
      break;
     case 15:
      var $95 = HEAP[$tzinfo];
      var $96 = _check_tzinfo_subclass($95);
      
      if ($96 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 19;
      break;
     case 17:
      var $98 = HEAP[$tzinfo];
      var $99 = HEAP[$usecond];
      var $100 = HEAP[$second];
      var $101 = HEAP[$minute];
      var $102 = HEAP[$hour];
      
      var $104 = _new_time_ex($102, $101, $100, $99, $98, $type_addr);
      $self = $104;
      __label__ = 18;
      break;
     case 18:
      
      $0 = $self;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 20] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$self_addr + 20];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$self_addr + 20] + 4] + 24];
      
      
      var $28 = HEAP[$self_addr + 20];
      FUNCTION_TABLE[$25]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$34]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_utcoffset($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_286;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_286 = HEAP[$self_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_286 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $10 = _offset_as_timedelta($iftmp_286, __str42, __Py_NoneStruct);
      $0 = $10;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_dst($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_288;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_288 = HEAP[$self_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_288 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $10 = _offset_as_timedelta($iftmp_288, __str44, __Py_NoneStruct);
      $0 = $10;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_tzname($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_290;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_290 = HEAP[$self_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_290 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $10 = _call_tzname($iftmp_290, __Py_NoneStruct);
      $0 = $10;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 100;
    _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $buffer = __stackBase__;
      var $type_name;
      var $h;
      var $m;
      var $s;
      var $us;
      var $result;
      $self_addr = $self;
      
      
      
      
      
      
      $type_name = HEAP[HEAP[$self_addr + 4] + 12];
      
      
      
      
      
      $h = HEAP[$self_addr + 13];
      
      
      
      
      
      $m = HEAP[$self_addr + 13 + 1];
      
      
      
      
      
      $s = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $us = HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5];
      $result = 0;
      
      
      if ($us != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $buffer1 = $buffer;
      
      
      
      
      
      var $48 = _PyOS_snprintf($buffer1, 100, __str199, allocate([ $type_name, 0, 0, 0, $h, 0, 0, 0, $m, 0, 0, 0, $s, 0, 0, 0, $us, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 2:
      
      
      var $buffer4 = $buffer;
      var $51 = $type_name;
      var $52 = $h;
      var $53 = $m;
      if ($s != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $55 = _PyOS_snprintf($buffer4, 100, __str121, allocate([ $51, 0, 0, 0, $52, 0, 0, 0, $53, 0, 0, 0, $s, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 4:
      var $56 = _PyOS_snprintf($buffer4, 100, __str122, allocate([ $51, 0, 0, 0, $52, 0, 0, 0, $53, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 5:
      var $buffer8 = $buffer;
      var $57 = _PyString_FromString($buffer8);
      $result = $57;
      
      if ($57 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $66 = HEAP[$self_addr + 20];
      
      var $68 = _append_keyword_tzinfo($result, $66);
      $result = $68;
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_str($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = __PyObject_CallMethod_SizeT($self_addr, __str146, __str99, allocate(1, "i32", ALLOC_STACK));
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_isoformat($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 132;
    _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $result = __stackBase__ + 100;
      var $datetime = __stackBase__ + 104;
      var $pdatetime;
      $self_addr = $self;
      $unused_addr = $unused;
      $pdatetime = $datetime;
      
      
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($pdatetime + 13 + 4, $self_addr + 13, 6, 1, 0);
      
      var $buf1 = $buf;
      var $9 = _isoformat_time($pdatetime, $buf1, 100);
      var $buf2 = $buf;
      var $10 = _PyString_FromString($buf2);
      HEAP[$result] = $10;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      $0 = HEAP[$result];
      __label__ = 9;
      break;
     case 4:
      
      
      var $25 = HEAP[$self_addr + 20];
      var $buf6 = $buf;
      var $26 = _format_utcoffset($buf6, __str200, $25, __Py_NoneStruct);
      
      if ($26 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $28 = HEAP[$result];
      
      
      var $31 = HEAP[$28] - 1;
      var $32 = $28;
      HEAP[$32] = $31;
      
      
      
      if (HEAP[$28] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $40 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $41 = HEAP[$result];
      FUNCTION_TABLE[$40]($41);
      __label__ = 7;
      break;
     case 7:
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      var $buf11 = $buf;
      var $42 = _PyString_FromString($buf11);
      _PyString_ConcatAndDel($result, $42);
      
      $0 = HEAP[$result];
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strftime($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $result;
      var $tuple;
      var $format = __stackBase__;
      var $format_len = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str147, _keywords_12042, allocate([ $format, 0, 0, 0, $format_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      
      
      var $9 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      var $14 = HEAP[$self_addr + 13 + 1];
      
      
      
      
      var $19 = HEAP[$self_addr + 13];
      var $20 = __Py_BuildValue_SizeT(__str201, allocate([ 1900, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, $19, 0, 0, 0, $14, 0, 0, 0, $9, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $tuple = $20;
      
      
      if ($tuple == 0) {
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
      
      var $24 = _PyTuple_Size($tuple);
      
      if ($24 != 9) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str202, __str1, 3325, ___PRETTY_FUNCTION___12043);
      throw "Reached an unreachable!";
     case 6:
      var $26 = HEAP[$format_len];
      var $27 = HEAP[$format];
      
      
      
      var $31 = _wrap_strftime($self_addr, $27, $26, $tuple, __Py_NoneStruct);
      $result = $31;
      
      
      
      var $35 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $35;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $46 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$46]($tuple);
      __label__ = 8;
      break;
     case 8:
      
      $0 = $result;
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
  function _time_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $other_addr;
      var $op_addr;
      var $retval;
      var $0;
      var $iftmp_304;
      var $diff;
      var $n1 = __stackBase__;
      var $n2 = __stackBase__ + 4;
      var $offset1 = __stackBase__ + 8;
      var $offset2 = __stackBase__ + 12;
      var $result;
      $self_addr = $self;
      $other_addr = $other;
      $op_addr = $op;
      
      
      
      
      if (HEAP[$other_addr + 4] != _PyDateTime_TimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$other_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_TimeType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      
      
      
      if ($op_addr == 2 | $op_addr == 3) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      if ($op_addr == 2) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_304 = __Py_ZeroStruct;
      __label__ = 6;
      break;
     case 5:
      $iftmp_304 = __Py_TrueStruct;
      __label__ = 6;
      break;
     case 6:
      
      $result = $iftmp_304;
      
      
      
      var $20 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $20;
      
      $0 = $result;
      __label__ = 27;
      break;
     case 7:
      
      
      
      var $27 = _cmperror($self_addr, $other_addr);
      $0 = $27;
      __label__ = 27;
      break;
     case 8:
      
      
      
      var $31 = _classify_two_utcoffsets($self_addr, $offset1, $n1, __Py_NoneStruct, $other_addr, $offset2, $n2, __Py_NoneStruct);
      
      if ($31 < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 27;
      break;
     case 10:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      ___assert_fail(__str203, __str1, 3359, ___PRETTY_FUNCTION___12084);
      throw "Reached an unreachable!";
     case 13:
      var $37 = HEAP[$n1];
      
      
      if ($37 == HEAP[$n2]) {
        __lastLabel__ = 13;
        __label__ = 14;
        break;
      } else {
        __lastLabel__ = 13;
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      var $50 = _memcmp($self_addr + 13, $other_addr + 13, 6);
      $diff = $50;
      
      
      var $53 = _diff_to_bool($diff, $op_addr);
      $0 = $53;
      __label__ = 27;
      break;
     case 16:
      var $_pr = HEAP[$n1];
      __lastLabel__ = 16;
      __label__ = 17;
      break;
     case 17:
      var $54 = __lastLabel__ == 16 ? $_pr : $37;
      
      if ($54 == 3) {
        __label__ = 18;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 18:
      
      
      if (HEAP[$n2] == 3) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 19:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      ___assert_fail(__str204, __str1, 3371, ___PRETTY_FUNCTION___12084);
      throw "Reached an unreachable!";
     case 21:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $81 = (HEAP[$self_addr + 13 + 1] - HEAP[$offset1]) * 60 + HEAP[$self_addr + 13] * 3600 + HEAP[$self_addr + 13 + 2];
      HEAP[$offset1] = $81;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $105 = (HEAP[$other_addr + 13 + 1] - HEAP[$offset2]) * 60 + HEAP[$other_addr + 13] * 3600 + HEAP[$other_addr + 13 + 2];
      HEAP[$offset2] = $105;
      
      
      
      $diff = HEAP[$offset1] - HEAP[$offset2];
      
      
      if ($diff == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $diff = (HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5]) - (HEAP[$other_addr + 13 + 4] << 8 | HEAP[$other_addr + 13 + 3] << 16 | HEAP[$other_addr + 13 + 5]);
      __label__ = 23;
      break;
     case 23:
      
      
      var $155 = _diff_to_bool($diff, $op_addr);
      $0 = $155;
      __label__ = 27;
      break;
     case 24:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      ___assert_fail(__str205, __str1, 3388, ___PRETTY_FUNCTION___12084);
      throw "Reached an unreachable!";
     case 26:
      var $159 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($159, __str206);
      $0 = 0;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_hash($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $n;
      var $offset = __stackBase__;
      var $temp;
      var $hour;
      var $minute = __stackBase__ + 4;
      $self_addr = $self;
      
      
      
      var $4 = HEAP[$self_addr + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 1:
      
      
      var $7 = _classify_utcoffset($self_addr, __Py_NoneStruct, $offset);
      $n = $7;
      
      
      if ($n == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str207, __str1, 3404, ___PRETTY_FUNCTION___12202);
      throw "Reached an unreachable!";
     case 3:
      
      
      if ($n == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 18;
      break;
     case 5:
      
      
      if (HEAP[$offset] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $17 = _PyString_FromStringAndSize($self_addr + 13, 6);
      $temp = $17;
      __lastLabel__ = 6;
      __label__ = 14;
      break;
     case 7:
      
      
      if ($n != 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str208, __str1, 3416, ___PRETTY_FUNCTION___12202);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str209, __str1, 3417, ___PRETTY_FUNCTION___12202);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $38 = 0 - HEAP[$offset] + HEAP[$self_addr + 13] * 60 + HEAP[$self_addr + 13 + 1];
      var $39 = _divmod($38, 60, $minute);
      $hour = $39;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $62 = HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5];
      
      
      
      
      var $67 = HEAP[$self_addr + 13 + 2];
      var $68 = HEAP[$minute];
      var $69 = $hour;
      if ($hour < 0 | $hour > 23) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $70 = _new_time_ex($69, $68, $67, $62, __Py_NoneStruct, _PyDateTime_TimeType);
      $temp = $70;
      __lastLabel__ = 12;
      __label__ = 14;
      break;
     case 13:
      var $71 = __Py_BuildValue_SizeT(__str210, allocate([ $69, 0, 0, 0, $68, 0, 0, 0, $67, 0, 0, 0, $62, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $temp = $71;
      __lastLabel__ = 13;
      __label__ = 14;
      break;
     case 14:
      var $72 = __lastLabel__ == 13 ? $71 : __lastLabel__ == 12 ? $70 : $17;
      
      if ($72 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 15:
      
      var $75 = _PyObject_Hash($temp);
      
      
      HEAP[$self_addr + 8] = $75;
      
      
      
      var $81 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $81;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $92 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$92]($temp);
      __label__ = 17;
      break;
     case 17:
      
      
      
      $0 = HEAP[$self_addr + 8];
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_replace($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $iftmp_337;
      var $clone;
      var $tuple;
      var $hh = __stackBase__;
      var $mm = __stackBase__ + 4;
      var $ss = __stackBase__ + 8;
      var $us = __stackBase__ + 12;
      var $tzinfo = __stackBase__ + 16;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      
      
      var $5 = HEAP[$self_addr + 13];
      HEAP[$hh] = $5;
      
      
      
      
      var $10 = HEAP[$self_addr + 13 + 1];
      HEAP[$mm] = $10;
      
      
      
      
      var $15 = HEAP[$self_addr + 13 + 2];
      HEAP[$ss] = $15;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $34 = HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5];
      HEAP[$us] = $34;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_337 = HEAP[$self_addr + 20];
      __label__ = 3;
      break;
     case 2:
      $iftmp_337 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      HEAP[$tzinfo] = $iftmp_337;
      
      
      var $46 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str211, _time_kws, allocate([ $hh, 0, 0, 0, $mm, 0, 0, 0, $ss, 0, 0, 0, $us, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($46 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 10;
      break;
     case 5:
      var $48 = HEAP[$tzinfo];
      var $49 = HEAP[$us];
      var $50 = HEAP[$ss];
      var $51 = HEAP[$mm];
      var $52 = HEAP[$hh];
      var $53 = __Py_BuildValue_SizeT(__str212, allocate([ $52, 0, 0, 0, $51, 0, 0, 0, $50, 0, 0, 0, $49, 0, 0, 0, $48, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $tuple = $53;
      
      
      if ($tuple == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $59 = HEAP[$self_addr + 4];
      
      var $61 = _time_new($59, $tuple, 0);
      $clone = $61;
      
      
      
      var $65 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $65;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $76 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$76]($tuple);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $clone;
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
  function _time_nonzero($self) {
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
      var $offset;
      var $none = __stackBase__;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 13 + 2] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if ((HEAP[$self_addr + 13 + 4] << 8 | HEAP[$self_addr + 13 + 3] << 16 | HEAP[$self_addr + 13 + 5]) != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 1;
      __label__ = 9;
      break;
     case 3:
      $offset = 0;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      if (HEAP[$self_addr + 20] != __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      var $37 = HEAP[$self_addr + 20];
      var $38 = _call_utcoffset($37, __Py_NoneStruct, $none);
      $offset = $38;
      
      var $40 = $offset == -1;
      if ($40) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      var $41 = _PyErr_Occurred();
      
      if ($41 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = -1;
      __label__ = 9;
      break;
     case 8:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $0 = HEAP[$self_addr + 13 + 1] + (0 - $offset) + HEAP[$self_addr + 13] * 60 != 0;
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
  function _time_getstate($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $basestate;
      var $result;
      $self_addr = $self;
      $result = 0;
      
      
      
      var $4 = _PyString_FromStringAndSize($self_addr + 13, 6);
      $basestate = $4;
      
      
      if ($basestate != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 20] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $17 = _PyTuple_Pack(1, allocate([ $basestate, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $17;
      __label__ = 5;
      break;
     case 4:
      
      
      var $20 = HEAP[$self_addr + 20];
      
      var $22 = _PyTuple_Pack(2, allocate([ $basestate, 0, 0, 0, $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $22;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $26 = HEAP[$basestate] - 1;
      
      
      HEAP[$basestate] = $26;
      
      
      
      
      if (HEAP[$basestate] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $37 = HEAP[HEAP[$basestate + 4] + 24];
      
      FUNCTION_TABLE[$37]($basestate);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_reduce($self, $arg) {
    
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $arg_addr = $arg;
    
    var $2 = _time_getstate($self_addr);
    
    
    
    var $6 = HEAP[$self_addr + 4];
    var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_hour($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 4];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_minute($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 5];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_second($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 6];
    var $6 = _PyInt_FromLong($5);
    $0 = $6;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_microsecond($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var $19 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
    var $20 = _PyInt_FromLong($19);
    $0 = $20;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_tzinfo($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $iftmp_348;
      var $result;
      $self_addr = $self;
      $unused_addr = $unused;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_348 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_348 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      $result = $iftmp_348;
      
      
      
      var $13 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $13;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_new($type, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $self;
      var $state;
      var $year = __stackBase__;
      var $month = __stackBase__ + 4;
      var $day = __stackBase__ + 8;
      var $hour = __stackBase__ + 12;
      var $minute = __stackBase__ + 16;
      var $second = __stackBase__ + 20;
      var $usecond = __stackBase__ + 24;
      var $tzinfo = __stackBase__ + 28;
      var $me;
      var $aware;
      var $pdata;
      $type_addr = $type;
      $args_addr = $args;
      $kw_addr = $kw;
      $self = 0;
      HEAP[$hour] = 0;
      HEAP[$minute] = 0;
      HEAP[$second] = 0;
      HEAP[$usecond] = 0;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[$args_addr + 8] > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$args_addr + 8] <= 2) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      
      
      
      
      $state = HEAP[$args_addr + 12];
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$state + 4] + 84] & 134217728) != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[$state + 8] == 10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      if (HEAP[$state + 20 + 2] - 1 <= 11) {
        __label__ = 5;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$args_addr + 8] == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      var $45 = HEAP[$args_addr + 12 + 4];
      HEAP[$tzinfo] = $45;
      var $46 = HEAP[$tzinfo];
      var $47 = _check_tzinfo_subclass($46);
      
      if ($47 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $49 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($49, __str197);
      $0 = 0;
      __label__ = 21;
      break;
     case 8:
      
      
      
      $aware = HEAP[$tzinfo] != __Py_NoneStruct;
      
      
      var $55 = HEAP[$type_addr + 152];
      
      
      
      var $59 = FUNCTION_TABLE[$55]($type_addr, $aware);
      
      $me = $59;
      
      if ($59 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 9:
      
      
      
      
      $pdata = $state + 20;
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($me + 13, $pdata, 10, 1, 0);
      
      
      HEAP[$me + 8] = -1;
      
      
      
      HEAP[$me + 12] = $aware;
      
      
      if ($aware != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      var $80 = HEAP[HEAP[$tzinfo]] + 1;
      var $81 = HEAP[$tzinfo];
      HEAP[$81] = $80;
      var $82 = HEAP[$tzinfo];
      
      
      HEAP[$me + 24] = $82;
      __label__ = 11;
      break;
     case 11:
      
      
      $0 = $me;
      __label__ = 21;
      break;
     case 12:
      
      
      var $89 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str219, _datetime_kws, allocate([ $year, 0, 0, 0, $month, 0, 0, 0, $day, 0, 0, 0, $hour, 0, 0, 0, $minute, 0, 0, 0, $second, 0, 0, 0, $usecond, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($89 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 13:
      var $91 = HEAP[$day];
      var $92 = HEAP[$month];
      var $93 = HEAP[$year];
      var $94 = _check_date_args($93, $92, $91);
      
      if ($94 < 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 21;
      break;
     case 15:
      var $96 = HEAP[$usecond];
      var $97 = HEAP[$second];
      var $98 = HEAP[$minute];
      var $99 = HEAP[$hour];
      var $100 = _check_time_args($99, $98, $97, $96);
      
      if ($100 < 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 21;
      break;
     case 17:
      var $102 = HEAP[$tzinfo];
      var $103 = _check_tzinfo_subclass($102);
      
      if ($103 < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 21;
      break;
     case 19:
      var $105 = HEAP[$tzinfo];
      var $106 = HEAP[$usecond];
      var $107 = HEAP[$second];
      var $108 = HEAP[$minute];
      var $109 = HEAP[$hour];
      var $110 = HEAP[$day];
      var $111 = HEAP[$month];
      var $112 = HEAP[$year];
      
      var $114 = _new_datetime_ex($112, $111, $110, $109, $108, $107, $106, $105, $type_addr);
      $self = $114;
      __label__ = 20;
      break;
     case 20:
      
      $0 = $self;
      __label__ = 21;
      break;
     case 21:
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_from_timet_and_us($cls, $f, $timet, $us, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $f_addr;
      var $timet_addr = __stackBase__;
      var $us_addr;
      var $tzinfo_addr;
      var $retval;
      var $0;
      var $tm;
      var $result;
      $cls_addr = $cls;
      $f_addr = $f;
      HEAP[$timet_addr] = $timet;
      $us_addr = $us;
      $tzinfo_addr = $tzinfo;
      $result = 0;
      var $1 = $f_addr;
      var $2 = FUNCTION_TABLE[$1]($timet_addr);
      $tm = $2;
      
      
      if ($tm != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$tm] > 59) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      HEAP[$tm] = 59;
      __label__ = 3;
      break;
     case 3:
      
      
      var $13 = HEAP[$tm];
      
      
      var $16 = HEAP[$tm + 4];
      
      
      var $19 = HEAP[$tm + 8];
      
      
      var $22 = HEAP[$tm + 12];
      
      
      
      var $26 = HEAP[$tm + 16] + 1;
      
      
      
      var $30 = HEAP[$tm + 20] + 1900;
      
      
      
      var $34 = __PyObject_CallFunction_SizeT($cls_addr, __str220, allocate([ $30, 0, 0, 0, $26, 0, 0, 0, $22, 0, 0, 0, $19, 0, 0, 0, $16, 0, 0, 0, $13, 0, 0, 0, $us_addr, 0, 0, 0, $tzinfo_addr, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $34;
      __label__ = 5;
      break;
     case 4:
      var $35 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($35, __str221);
      __label__ = 5;
      break;
     case 5:
      
      $0 = $result;
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_from_timestamp($cls, $f, $timestamp, $tzinfo) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $f_addr;
      var $timestamp_addr;
      var $tzinfo_addr;
      var $retval;
      var $0;
      var $timet;
      var $fraction;
      var $us;
      $cls_addr = $cls;
      $f_addr = $f;
      $timestamp_addr = $timestamp;
      $tzinfo_addr = $tzinfo;
      
      var $2 = __PyTime_DoubleToTimet($timestamp_addr);
      $timet = $2;
      
      var $4 = $timet == -1;
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
      
      
      
      
      $fraction = $timestamp_addr - $timet;
      
      
      var $13 = _round_to_long($fraction * 1e6);
      $us = $13;
      
      if ($13 < 0) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 5;
        break;
      }
     case 4:
      
      var $16 = $timet - 1;
      $timet = $16;
      
      var $18 = $us + 1e6;
      $us = $18;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $19 = __lastLabel__ == 4 ? $18 : $13;
      
      if ($19 == 1e6) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $22 = $timet + 1;
      $timet = $22;
      $us = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      
      var $28 = _datetime_from_timet_and_us($cls_addr, $f_addr, $timet, $us, $tzinfo_addr);
      $0 = $28;
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
  function _datetime_best_possible($cls, $f, $tzinfo) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    
    var $cls_addr;
    var $f_addr;
    var $tzinfo_addr;
    var $retval;
    var $0;
    var $t = __stackBase__;
    $cls_addr = $cls;
    $f_addr = $f;
    $tzinfo_addr = $tzinfo;
    var $1 = _gettimeofday($t, 0);
    
    var $3 = HEAP[$t + 4];
    
    var $5 = HEAP[$t];
    
    
    
    var $9 = _datetime_from_timet_and_us($cls_addr, $f_addr, $5, $3, $tzinfo_addr);
    $0 = $9;
    
    $retval = $0;
    var $retval1 = $retval;
    STACKTOP = __stackBase__;
    return $retval1;
  }
  function _datetime_now($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $iftmp_382;
      var $0;
      var $self;
      var $tzinfo = __stackBase__;
      var $temp;
      $cls_addr = $cls;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str222, _keywords_12654, allocate([ $tzinfo, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$tzinfo];
      var $6 = _check_tzinfo_subclass($5);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      var $8 = HEAP[$tzinfo];
      
      
      if (HEAP[$tzinfo] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_382 = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 7;
      break;
     case 6:
      $iftmp_382 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 7;
      break;
     case 7:
      
      
      var $13 = _datetime_best_possible($cls_addr, $iftmp_382, $8);
      $self = $13;
      
      
      
      
      if ($13 != 0 & HEAP[$tzinfo] != __Py_NoneStruct) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      $temp = $self;
      var $18 = HEAP[$tzinfo];
      
      var $20 = __PyObject_CallMethod_SizeT($18, __str189, __str35, allocate([ $self, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $self = $20;
      
      
      
      var $24 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $24;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$35]($temp);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $self;
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
  function _datetime_utcnow($cls, $dummy) {
    
    var $cls_addr;
    var $dummy_addr;
    var $retval;
    var $0;
    $cls_addr = $cls;
    $dummy_addr = $dummy;
    
    var $2 = _datetime_best_possible($cls_addr, FUNCTION_TABLE_OFFSET + 4, __Py_NoneStruct);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_fromtimestamp($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $iftmp_389;
      var $0;
      var $self;
      var $timestamp = __stackBase__;
      var $tzinfo = __stackBase__ + 8;
      var $temp;
      $cls_addr = $cls;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$tzinfo] = __Py_NoneStruct;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str224, _keywords_12701, allocate([ $timestamp, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "double*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = HEAP[$tzinfo];
      var $6 = _check_tzinfo_subclass($5);
      
      if ($6 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      var $8 = HEAP[$tzinfo];
      var $9 = HEAP[$timestamp];
      
      
      if (HEAP[$tzinfo] == __Py_NoneStruct) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_389 = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 7;
      break;
     case 6:
      $iftmp_389 = FUNCTION_TABLE_OFFSET + 4;
      __label__ = 7;
      break;
     case 7:
      
      
      var $14 = _datetime_from_timestamp($cls_addr, $iftmp_389, $9, $8);
      $self = $14;
      
      
      
      
      if ($14 != 0 & HEAP[$tzinfo] != __Py_NoneStruct) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      $temp = $self;
      var $19 = HEAP[$tzinfo];
      
      var $21 = __PyObject_CallMethod_SizeT($19, __str189, __str35, allocate([ $self, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $self = $21;
      
      
      
      var $25 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $25;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $36 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$36]($temp);
      __label__ = 10;
      break;
     case 10:
      
      $0 = $self;
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
  function _datetime_utcfromtimestamp($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $timestamp = __stackBase__;
      var $result;
      $cls_addr = $cls;
      $args_addr = $args;
      $result = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str226, allocate([ $timestamp, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[$timestamp];
      
      var $6 = _datetime_from_timestamp($cls_addr, FUNCTION_TABLE_OFFSET + 4, $4, __Py_NoneStruct);
      $result = $6;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $result;
      
      $retval = $0;
      var $retval2 = $retval;
      STACKTOP = __stackBase__;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_strptime($cls, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $result;
      var $obj;
      var $st;
      var $frac;
      var $string = __stackBase__;
      var $format = __stackBase__ + 4;
      var $i;
      var $good_timetuple;
      var $ia = __stackBase__ + 8;
      var $p;
      $cls_addr = $cls;
      $args_addr = $args;
      $result = 0;
      $st = 0;
      $frac = 0;
      
      var $2 = __PyArg_ParseTuple_SizeT($args_addr, __str227, allocate([ $string, 0, 0, 0, $format, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 42;
      break;
     case 2:
      
      
      if (HEAP[_module_12751] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $6 = _PyImport_ImportModuleNoBlock(__str228);
      HEAP[_module_12751] = $6;
      
      
      if (HEAP[_module_12751] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 42;
      break;
     case 5:
      var $9 = HEAP[$format];
      var $10 = HEAP[$string];
      var $11 = HEAP[_module_12751];
      var $12 = __PyObject_CallMethod_SizeT($11, __str228, __str83, allocate([ $10, 0, 0, 0, $9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $obj = $12;
      
      if ($12 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 6:
      $good_timetuple = 1;
      
      var $15 = _PySequence_Check($obj);
      
      if ($15 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $18 = _PySequence_Size($obj);
      
      if ($18 != 2) {
        __label__ = 28;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $21 = _PySequence_GetItem($obj, 0);
      $st = $21;
      
      var $23 = _PySequence_GetItem($obj, 1);
      $frac = $23;
      
      
      if ($st == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($frac == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $good_timetuple = 0;
      __label__ = 24;
      break;
     case 11:
      
      
      if ($good_timetuple == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $30 = _PySequence_Check($st);
      
      if ($30 == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $33 = _PySequence_Size($st);
      
      if ($33 <= 5) {
        __label__ = 24;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      $i = 0;
      __lastLabel__ = 14;
      __label__ = 23;
      break;
     case 15:
      
      
      var $37 = _PySequence_GetItem($st, $i);
      $p = $37;
      
      
      if ($p == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $good_timetuple = 0;
      __label__ = 27;
      break;
     case 17:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$p + 4] + 84] & 8388608) != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $47 = $i;
      
      var $49 = _PyInt_AsLong($p);
      
      HEAP[$ia + $47 * 4] = $49;
      __label__ = 20;
      break;
     case 19:
      $good_timetuple = 0;
      __label__ = 20;
      break;
     case 20:
      
      
      
      var $54 = HEAP[$p] - 1;
      
      
      HEAP[$p] = $54;
      
      
      
      
      if (HEAP[$p] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $65 = HEAP[HEAP[$p + 4] + 24];
      
      FUNCTION_TABLE[$65]($p);
      __label__ = 22;
      break;
     case 22:
      
      var $68 = $i + 1;
      $i = $68;
      __lastLabel__ = 22;
      __label__ = 23;
      break;
     case 23:
      var $69 = __lastLabel__ == 22 ? $68 : 0;
      
      if ($69 <= 5) {
        __label__ = 15;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $good_timetuple = 0;
      __label__ = 27;
      break;
     case 25:
      
      
      if ($good_timetuple == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$frac + 4] + 84] & 8388608) == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      $good_timetuple = 0;
      __label__ = 31;
      break;
     case 28:
      $good_timetuple = 0;
      __label__ = 31;
      break;
     case 29:
      
      var $80 = _PyInt_AsLong($frac);
      
      HEAP[$ia + 24] = $80;
      
      
      if ($good_timetuple != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      var $84 = HEAP[$ia + 24];
      
      var $86 = HEAP[$ia + 20];
      
      var $88 = HEAP[$ia + 16];
      
      var $90 = HEAP[$ia + 12];
      
      var $92 = HEAP[$ia + 8];
      
      var $94 = HEAP[$ia + 4];
      
      var $96 = HEAP[$ia];
      
      var $98 = __PyObject_CallFunction_SizeT($cls_addr, __str229, allocate([ $96, 0, 0, 0, $94, 0, 0, 0, $92, 0, 0, 0, $90, 0, 0, 0, $88, 0, 0, 0, $86, 0, 0, 0, $84, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $result = $98;
      __label__ = 32;
      break;
     case 31:
      var $99 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($99, __str230);
      __label__ = 32;
      break;
     case 32:
      
      
      if ($obj != 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 33:
      
      
      
      var $104 = HEAP[$obj] - 1;
      
      
      HEAP[$obj] = $104;
      
      
      
      
      if (HEAP[$obj] == 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 34:
      
      
      
      
      var $115 = HEAP[HEAP[$obj + 4] + 24];
      
      FUNCTION_TABLE[$115]($obj);
      __label__ = 35;
      break;
     case 35:
      
      
      if ($st != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $122 = HEAP[$st] - 1;
      
      
      HEAP[$st] = $122;
      
      
      
      
      if (HEAP[$st] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $133 = HEAP[HEAP[$st + 4] + 24];
      
      FUNCTION_TABLE[$133]($st);
      __label__ = 38;
      break;
     case 38:
      
      
      if ($frac != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $140 = HEAP[$frac] - 1;
      
      
      HEAP[$frac] = $140;
      
      
      
      
      if (HEAP[$frac] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $151 = HEAP[HEAP[$frac + 4] + 24];
      
      FUNCTION_TABLE[$151]($frac);
      __label__ = 41;
      break;
     case 41:
      
      $0 = $result;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_combine($cls, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $cls_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $date = __stackBase__;
      var $time = __stackBase__ + 4;
      var $result;
      var $tzinfo;
      $cls_addr = $cls;
      $args_addr = $args;
      $kw_addr = $kw;
      $result = 0;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str231, _keywords_12871, allocate([ _PyDateTime_DateType, 0, 0, 0, $date, 0, 0, 0, _PyDateTime_TimeType, 0, 0, 0, $time, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $tzinfo = __Py_NoneStruct;
      
      
      
      
      
      if (HEAP[HEAP[$time] + 12] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      $tzinfo = HEAP[HEAP[$time] + 20];
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $35 = HEAP[HEAP[$time] + 13 + 4] << 8 | HEAP[HEAP[$time] + 13 + 3] << 16 | HEAP[HEAP[$time] + 13 + 5];
      
      
      
      
      
      var $41 = HEAP[HEAP[$time] + 13 + 2];
      
      
      
      
      
      var $47 = HEAP[HEAP[$time] + 13 + 1];
      
      
      
      
      
      var $53 = HEAP[HEAP[$time] + 13];
      
      
      
      
      
      var $59 = HEAP[HEAP[$date] + 13 + 3];
      
      
      
      
      
      var $65 = HEAP[HEAP[$date] + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $79 = HEAP[HEAP[$date] + 13 + 1] | HEAP[HEAP[$date] + 13] << 8;
      
      
      var $82 = __PyObject_CallFunction_SizeT($cls_addr, __str220, allocate([ $79, 0, 0, 0, $65, 0, 0, 0, $59, 0, 0, 0, $53, 0, 0, 0, $47, 0, 0, 0, $41, 0, 0, 0, $35, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $82;
      __label__ = 4;
      break;
     case 4:
      
      $0 = $result;
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_dealloc($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 24] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      
      
      var $11 = HEAP[$self_addr + 24];
      
      
      var $14 = HEAP[$11] - 1;
      var $15 = $11;
      HEAP[$15] = $14;
      
      
      
      if (HEAP[$11] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      
      
      var $25 = HEAP[HEAP[HEAP[$self_addr + 24] + 4] + 24];
      
      
      var $28 = HEAP[$self_addr + 24];
      FUNCTION_TABLE[$25]($28);
      __label__ = 4;
      break;
     case 4:
      
      
      
      
      
      var $34 = HEAP[HEAP[$self_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$34]($self_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_utcoffset($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_428;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      var $2 = $self_addr;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_428 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_428 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $12 = _offset_as_timedelta($iftmp_428, __str42, $2);
      $0 = $12;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_dst($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_431;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      var $2 = $self_addr;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_431 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_431 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $12 = _offset_as_timedelta($iftmp_431, __str44, $2);
      $0 = $12;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_tzname($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_434;
      var $0;
      $self_addr = $self;
      $unused_addr = $unused;
      
      var $2 = $self_addr;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_434 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_434 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      var $12 = _call_tzname($iftmp_434, $2);
      $0 = $12;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _add_datetime_timedelta($date, $delta, $factor) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $date_addr;
      var $delta_addr;
      var $factor_addr;
      var $retval;
      var $iftmp_440;
      var $0;
      var $year = __stackBase__;
      var $month = __stackBase__ + 4;
      var $day = __stackBase__ + 8;
      var $hour = __stackBase__ + 12;
      var $minute = __stackBase__ + 16;
      var $second = __stackBase__ + 20;
      var $microsecond = __stackBase__ + 24;
      $date_addr = $date;
      $delta_addr = $delta;
      $factor_addr = $factor;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[$date_addr + 13 + 1] | HEAP[$date_addr + 13] << 8;
      HEAP[$year] = $14;
      
      
      
      
      
      var $20 = HEAP[$date_addr + 13 + 2];
      HEAP[$month] = $20;
      
      
      
      
      
      
      
      
      
      
      
      var $32 = $factor_addr * HEAP[$delta_addr + 12] + HEAP[$date_addr + 13 + 3];
      HEAP[$day] = $32;
      
      
      
      
      var $37 = HEAP[$date_addr + 13 + 4];
      HEAP[$hour] = $37;
      
      
      
      
      var $42 = HEAP[$date_addr + 13 + 5];
      HEAP[$minute] = $42;
      
      
      
      
      
      
      
      
      
      
      var $53 = $factor_addr * HEAP[$delta_addr + 16] + HEAP[$date_addr + 13 + 6];
      HEAP[$second] = $53;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $78 = $factor_addr * HEAP[$delta_addr + 20] + (HEAP[$date_addr + 13 + 8] << 8 | HEAP[$date_addr + 13 + 7] << 16 | HEAP[$date_addr + 13 + 9]);
      HEAP[$microsecond] = $78;
      
      
      
      var $82 = $factor_addr != -1;
      
      if ($factor_addr != 1 & $82) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str233, __str1, 4085, ___PRETTY_FUNCTION___13012);
      throw "Reached an unreachable!";
     case 2:
      var $83 = _normalize_datetime($year, $month, $day, $hour, $minute, $second, $microsecond);
      
      if ($83 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 8;
      break;
     case 4:
      
      
      
      
      
      if (HEAP[$date_addr + 12] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      $iftmp_440 = HEAP[$date_addr + 24];
      __label__ = 7;
      break;
     case 6:
      $iftmp_440 = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      var $93 = HEAP[$microsecond];
      var $94 = HEAP[$second];
      var $95 = HEAP[$minute];
      var $96 = HEAP[$hour];
      var $97 = HEAP[$day];
      var $98 = HEAP[$month];
      var $99 = HEAP[$year];
      
      var $101 = _new_datetime_ex($99, $98, $97, $96, $95, $94, $93, $iftmp_440, _PyDateTime_DateTimeType);
      $0 = $101;
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
  function _datetime_add($left, $right) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      $left_addr = $left;
      $right_addr = $right;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DeltaType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      
      
      
      var $23 = _add_datetime_timedelta($left_addr, $right_addr, 1);
      $0 = $23;
      __label__ = 9;
      break;
     case 5:
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $30 = HEAP[$left_addr + 4];
      var $31 = _PyType_IsSubtype($30, _PyDateTime_DeltaType);
      
      if ($31 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $37 = _add_datetime_timedelta($right_addr, $left_addr, 1);
      $0 = $37;
      __label__ = 9;
      break;
     case 8:
      
      var $39 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $39;
      $0 = __Py_NotImplementedStruct;
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
  function _datetime_subtract($left, $right) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $left_addr;
      var $right_addr;
      var $retval;
      var $0;
      var $result;
      var $n1 = __stackBase__;
      var $n2 = __stackBase__ + 4;
      var $offset1 = __stackBase__ + 8;
      var $offset2 = __stackBase__ + 12;
      var $delta_d;
      var $delta_s;
      var $delta_us;
      $left_addr = $left;
      $right_addr = $right;
      $result = __Py_NotImplementedStruct;
      
      
      
      
      if (HEAP[$left_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$left_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DateTimeType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$right_addr + 4];
      var $17 = _PyType_IsSubtype($16, _PyDateTime_DateTimeType);
      
      if ($17 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 4:
      
      
      
      
      var $23 = _classify_two_utcoffsets($left_addr, $offset1, $n1, $left_addr, $right_addr, $offset2, $n2, $right_addr);
      
      if ($23 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str203, __str1, 4134, ___PRETTY_FUNCTION___13120);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      if (HEAP[$n1] != HEAP[$n2]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $32 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($32, __str234);
      $0 = 0;
      __label__ = 19;
      break;
     case 11:
      
      
      
      
      
      var $38 = HEAP[$left_addr + 13 + 3];
      
      
      
      
      
      var $44 = HEAP[$left_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $58 = HEAP[$left_addr + 13 + 1] | HEAP[$left_addr + 13] << 8;
      var $59 = _ymd_to_ord($58, $44, $38);
      
      
      
      
      
      var $65 = HEAP[$right_addr + 13 + 3];
      
      
      
      
      
      var $71 = HEAP[$right_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $85 = HEAP[$right_addr + 13 + 1] | HEAP[$right_addr + 13] << 8;
      var $86 = _ymd_to_ord($85, $71, $65);
      
      $delta_d = $59 - $86;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $delta_s = HEAP[$left_addr + 13 + 6] + (HEAP[$left_addr + 13 + 4] - HEAP[$right_addr + 13 + 4]) * 3600 + (HEAP[$left_addr + 13 + 5] - HEAP[$right_addr + 13 + 5]) * 60 + (0 - HEAP[$right_addr + 13 + 6]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $delta_us = (HEAP[$left_addr + 13 + 8] << 8 | HEAP[$left_addr + 13 + 7] << 16 | HEAP[$left_addr + 13 + 9]) - (HEAP[$right_addr + 13 + 8] << 8 | HEAP[$right_addr + 13 + 7] << 16 | HEAP[$right_addr + 13 + 9]);
      
      
      
      
      
      var $181 = (HEAP[$offset2] - HEAP[$offset1]) * 60 + $delta_s;
      $delta_s = $181;
      
      
      
      var $185 = _new_delta_ex($delta_d, $delta_s, $delta_us, 1, _PyDateTime_DeltaType);
      $result = $185;
      __lastLabel__ = 11;
      __label__ = 16;
      break;
     case 12:
      
      
      
      
      if (HEAP[$right_addr + 4] == _PyDateTime_DeltaType) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      var $192 = HEAP[$right_addr + 4];
      var $193 = _PyType_IsSubtype($192, _PyDateTime_DeltaType);
      
      if ($193 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $199 = _add_datetime_timedelta($left_addr, $right_addr, -1);
      $result = $199;
      __lastLabel__ = 14;
      __label__ = 16;
      break;
     case 15:
      var $_pr = $result;
      __lastLabel__ = 15;
      __label__ = 16;
      break;
     case 16:
      var $200 = __lastLabel__ == 15 ? $_pr : __lastLabel__ == 14 ? $199 : $185;
      
      if ($200 == __Py_NotImplementedStruct) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $205 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $205;
      __label__ = 18;
      break;
     case 18:
      
      $0 = $result;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_repr($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1e3;
    _memset(__stackBase__, 0, 1e3);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $buffer = __stackBase__;
      var $type_name;
      var $baserepr;
      $self_addr = $self;
      
      
      
      
      
      
      $type_name = HEAP[HEAP[$self_addr + 4] + 12];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $28 = $self_addr + 13;
      if ((HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9]) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $45 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$28 + 7] << 16 | HEAP[$self_addr + 13 + 9];
      
      
      
      
      var $50 = HEAP[$self_addr + 13 + 6];
      
      
      
      
      var $55 = HEAP[$self_addr + 13 + 5];
      
      
      
      
      var $60 = HEAP[$self_addr + 13 + 4];
      
      
      
      
      
      var $66 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      
      var $72 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $86 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      var $buffer1 = $buffer;
      
      var $88 = _PyOS_snprintf($buffer1, 1e3, __str235, allocate([ $type_name, 0, 0, 0, $86, 0, 0, 0, $72, 0, 0, 0, $66, 0, 0, 0, $60, 0, 0, 0, $55, 0, 0, 0, $50, 0, 0, 0, $45, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 2:
      
      
      
      
      var $93 = $self_addr + 13;
      if (HEAP[$28 + 6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $96 = HEAP[$93 + 6];
      
      
      
      
      var $101 = HEAP[$self_addr + 13 + 5];
      
      
      
      
      var $106 = HEAP[$self_addr + 13 + 4];
      
      
      
      
      
      var $112 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      
      var $118 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $132 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      var $buffer4 = $buffer;
      
      var $134 = _PyOS_snprintf($buffer4, 1e3, __str236, allocate([ $type_name, 0, 0, 0, $132, 0, 0, 0, $118, 0, 0, 0, $112, 0, 0, 0, $106, 0, 0, 0, $101, 0, 0, 0, $96, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 4:
      
      
      var $137 = HEAP[$93 + 5];
      
      
      
      
      var $142 = HEAP[$self_addr + 13 + 4];
      
      
      
      
      
      var $148 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      
      var $154 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $168 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      var $buffer6 = $buffer;
      
      var $170 = _PyOS_snprintf($buffer6, 1e3, __str237, allocate([ $type_name, 0, 0, 0, $168, 0, 0, 0, $154, 0, 0, 0, $148, 0, 0, 0, $142, 0, 0, 0, $137, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 5;
      break;
     case 5:
      var $buffer8 = $buffer;
      var $171 = _PyString_FromString($buffer8);
      $baserepr = $171;
      
      if ($171 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      $0 = $baserepr;
      __label__ = 9;
      break;
     case 8:
      
      
      var $181 = HEAP[$self_addr + 24];
      
      var $183 = _append_keyword_tzinfo($baserepr, $181);
      $0 = $183;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_str($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    var $3 = __PyObject_CallMethod_SizeT($self_addr, __str146, __str238, allocate([ __str239, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $3;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_isoformat($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 105;
    _memset(__stackBase__, 0, 105);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $sep = __stackBase__;
      var $buffer = __stackBase__ + 1;
      var $cp;
      var $result = __stackBase__ + 101;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      HEAP[$sep] = 84;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str240, _keywords_13363, allocate([ $sep, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      var $buffer2 = $buffer;
      var $7 = _isoformat_date($self_addr, $buffer2, 100);
      $cp = $7;
      
      
      if ($cp == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str242, __str1, 4237, ___PRETTY_FUNCTION___13367);
      throw "Reached an unreachable!";
     case 4:
      var $10 = HEAP[$sep];
      
      HEAP[$cp] = $10;
      
      var $13 = $cp + 1;
      $cp = $13;
      
      
      
      
      
      
      
      
      var $16 = 0 - (0 - $buffer) + 100 + (0 - $cp);
      
      
      var $19 = _isoformat_time($self_addr, $cp, $16);
      $cp = $19;
      
      
      
      
      var $22 = $cp - $buffer;
      var $buffer11 = $buffer;
      var $23 = _PyString_FromStringAndSize($buffer11, $22);
      HEAP[$result] = $23;
      
      
      if (HEAP[$result] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $0 = HEAP[$result];
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      var $36 = HEAP[$self_addr + 24];
      var $buffer15 = $buffer;
      var $37 = _format_utcoffset($buffer15, __str200, $36, $self_addr);
      
      if ($37 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $39 = HEAP[$result];
      
      
      var $42 = HEAP[$39] - 1;
      var $43 = $39;
      HEAP[$43] = $42;
      
      
      
      if (HEAP[$39] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $51 = HEAP[HEAP[HEAP[$result] + 4] + 24];
      var $52 = HEAP[$result];
      FUNCTION_TABLE[$51]($52);
      __label__ = 10;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      var $buffer20 = $buffer;
      var $53 = _PyString_FromString($buffer20);
      _PyString_ConcatAndDel($result, $53);
      
      $0 = HEAP[$result];
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_ctime($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    var $5 = HEAP[$self_addr + 13 + 6];
    
    
    
    
    var $10 = HEAP[$self_addr + 13 + 5];
    
    
    
    
    var $15 = HEAP[$self_addr + 13 + 4];
    
    
    var $18 = _format_ctime($self_addr, $15, $10, $5);
    $0 = $18;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_richcompare($self, $other, $op) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $other_addr;
      var $op_addr;
      var $retval;
      var $iftmp_510;
      var $0;
      var $diff;
      var $n1 = __stackBase__;
      var $n2 = __stackBase__ + 4;
      var $offset1 = __stackBase__ + 8;
      var $offset2 = __stackBase__ + 12;
      var $result;
      var $delta;
      $self_addr = $self;
      $other_addr = $other;
      $op_addr = $op;
      
      
      
      
      if (HEAP[$other_addr + 4] != _PyDateTime_DateTimeType) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$other_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyDateTime_DateTimeType);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 2:
      
      var $11 = _PyObject_HasAttrString($other_addr, __str149);
      
      if ($11 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$other_addr + 4] != _PyDateTime_DateType) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      var $19 = HEAP[$other_addr + 4];
      var $20 = _PyType_IsSubtype($19, _PyDateTime_DateType);
      
      if ($20 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $23 = HEAP[__Py_NotImplementedStruct] + 1;
      HEAP[__Py_NotImplementedStruct] = $23;
      $0 = __Py_NotImplementedStruct;
      __label__ = 35;
      break;
     case 6:
      
      
      
      
      
      if ($op_addr == 2 | $op_addr == 3) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      if ($op_addr == 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $iftmp_510 = __Py_ZeroStruct;
      __label__ = 10;
      break;
     case 9:
      $iftmp_510 = __Py_TrueStruct;
      __label__ = 10;
      break;
     case 10:
      
      $result = $iftmp_510;
      
      
      
      var $34 = HEAP[$result] + 1;
      
      
      HEAP[$result] = $34;
      
      $0 = $result;
      __label__ = 35;
      break;
     case 11:
      
      
      
      var $41 = _cmperror($self_addr, $other_addr);
      $0 = $41;
      __label__ = 35;
      break;
     case 12:
      
      
      
      
      
      
      var $48 = _classify_two_utcoffsets($self_addr, $offset1, $n1, $self_addr, $other_addr, $offset2, $n2, $other_addr);
      
      if ($48 < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 35;
      break;
     case 14:
      
      
      if (HEAP[$n1] == 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      if (HEAP[$n2] == 1) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      ___assert_fail(__str203, __str1, 4306, ___PRETTY_FUNCTION___13435);
      throw "Reached an unreachable!";
     case 17:
      var $54 = HEAP[$n1];
      
      
      if ($54 == HEAP[$n2]) {
        __lastLabel__ = 17;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 21;
        break;
      }
     case 18:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      
      
      
      
      
      
      var $67 = _memcmp($self_addr + 13, $other_addr + 13, 10);
      $diff = $67;
      
      
      var $70 = _diff_to_bool($diff, $op_addr);
      $0 = $70;
      __label__ = 35;
      break;
     case 20:
      var $_pr = HEAP[$n1];
      __lastLabel__ = 20;
      __label__ = 21;
      break;
     case 21:
      var $71 = __lastLabel__ == 20 ? $_pr : $54;
      
      if ($71 == 3) {
        __label__ = 22;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 22:
      
      
      if (HEAP[$n2] == 3) {
        __label__ = 23;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$offset1] == HEAP[$offset2]) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      ___assert_fail(__str204, __str1, 4320, ___PRETTY_FUNCTION___13435);
      throw "Reached an unreachable!";
     case 25:
      
      
      
      var $81 = _datetime_subtract($self_addr, $other_addr);
      
      $delta = $81;
      
      
      if ($delta == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      $0 = 0;
      __label__ = 35;
      break;
     case 27:
      
      
      
      $diff = HEAP[$delta + 12];
      
      
      if ($diff == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      
      
      
      
      $diff = HEAP[$delta + 20] | HEAP[$delta + 16];
      __label__ = 29;
      break;
     case 29:
      
      
      
      
      var $101 = HEAP[$delta] - 1;
      
      HEAP[$delta] = $101;
      
      
      
      if (HEAP[$delta] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      
      var $111 = HEAP[HEAP[$delta + 4] + 24];
      
      
      FUNCTION_TABLE[$111]($delta);
      __label__ = 31;
      break;
     case 31:
      
      
      var $116 = _diff_to_bool($diff, $op_addr);
      $0 = $116;
      __label__ = 35;
      break;
     case 32:
      
      
      
      if (HEAP[$n1] == HEAP[$n2]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      ___assert_fail(__str205, __str1, 4333, ___PRETTY_FUNCTION___13435);
      throw "Reached an unreachable!";
     case 34:
      var $120 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($120, __str243);
      $0 = 0;
      __label__ = 35;
      break;
     case 35:
      
      $retval = $0;
      var $retval35 = $retval;
      STACKTOP = __stackBase__;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_hash($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $n;
      var $offset = __stackBase__;
      var $temp;
      var $days;
      var $seconds;
      $self_addr = $self;
      
      
      
      var $4 = HEAP[$self_addr + 8] == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 1:
      
      
      
      
      var $9 = _classify_utcoffset($self_addr, $self_addr, $offset);
      $n = $9;
      
      
      if ($n == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      ___assert_fail(__str207, __str1, 4350, ___PRETTY_FUNCTION___13531);
      throw "Reached an unreachable!";
     case 3:
      
      
      if ($n == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -1;
      __label__ = 16;
      break;
     case 5:
      
      
      if ($n == 2) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      var $19 = _PyString_FromStringAndSize($self_addr + 13, 10);
      $temp = $19;
      __lastLabel__ = 6;
      __label__ = 12;
      break;
     case 7:
      
      
      if ($n != 3) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      ___assert_fail(__str208, __str1, 4363, ___PRETTY_FUNCTION___13531);
      throw "Reached an unreachable!";
     case 9:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      ___assert_fail(__str209, __str1, 4364, ___PRETTY_FUNCTION___13531);
      throw "Reached an unreachable!";
     case 11:
      
      
      
      
      
      var $32 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      
      var $38 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $52 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      var $53 = _ymd_to_ord($52, $38, $32);
      $days = $53;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $seconds = (HEAP[$self_addr + 13 + 5] - HEAP[$offset]) * 60 + HEAP[$self_addr + 13 + 4] * 3600 + HEAP[$self_addr + 13 + 6];
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $93 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
      
      
      var $96 = _new_delta_ex($days, $seconds, $93, 1, _PyDateTime_DeltaType);
      $temp = $96;
      __lastLabel__ = 11;
      __label__ = 12;
      break;
     case 12:
      var $97 = __lastLabel__ == 11 ? $96 : $19;
      
      if ($97 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      var $100 = _PyObject_Hash($temp);
      
      
      HEAP[$self_addr + 8] = $100;
      
      
      
      var $106 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $106;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $117 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$117]($temp);
      __label__ = 15;
      break;
     case 15:
      
      
      
      $0 = HEAP[$self_addr + 8];
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_replace($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $iftmp_544;
      var $clone;
      var $tuple;
      var $y = __stackBase__;
      var $m = __stackBase__ + 4;
      var $d = __stackBase__ + 8;
      var $hh = __stackBase__ + 12;
      var $mm = __stackBase__ + 16;
      var $ss = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      var $tzinfo = __stackBase__ + 28;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      HEAP[$y] = $14;
      
      
      
      
      
      var $20 = HEAP[$self_addr + 13 + 2];
      HEAP[$m] = $20;
      
      
      
      
      
      var $26 = HEAP[$self_addr + 13 + 3];
      HEAP[$d] = $26;
      
      
      
      
      var $31 = HEAP[$self_addr + 13 + 4];
      HEAP[$hh] = $31;
      
      
      
      
      var $36 = HEAP[$self_addr + 13 + 5];
      HEAP[$mm] = $36;
      
      
      
      
      var $41 = HEAP[$self_addr + 13 + 6];
      HEAP[$ss] = $41;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $60 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
      HEAP[$us] = $60;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_544 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_544 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      HEAP[$tzinfo] = $iftmp_544;
      
      
      var $72 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str244, _datetime_kws, allocate([ $y, 0, 0, 0, $m, 0, 0, 0, $d, 0, 0, 0, $hh, 0, 0, 0, $mm, 0, 0, 0, $ss, 0, 0, 0, $us, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($72 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 10;
      break;
     case 5:
      var $74 = HEAP[$tzinfo];
      var $75 = HEAP[$us];
      var $76 = HEAP[$ss];
      var $77 = HEAP[$mm];
      var $78 = HEAP[$hh];
      var $79 = HEAP[$d];
      var $80 = HEAP[$m];
      var $81 = HEAP[$y];
      var $82 = __Py_BuildValue_SizeT(__str220, allocate([ $81, 0, 0, 0, $80, 0, 0, 0, $79, 0, 0, 0, $78, 0, 0, 0, $77, 0, 0, 0, $76, 0, 0, 0, $75, 0, 0, 0, $74, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $tuple = $82;
      
      
      if ($tuple == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 10;
      break;
     case 7:
      
      
      
      var $88 = HEAP[$self_addr + 4];
      
      var $90 = _datetime_new($88, $tuple, 0);
      $clone = $90;
      
      
      
      var $94 = HEAP[$tuple] - 1;
      
      
      HEAP[$tuple] = $94;
      
      
      
      
      if (HEAP[$tuple] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $105 = HEAP[HEAP[$tuple + 4] + 24];
      
      FUNCTION_TABLE[$105]($tuple);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $clone;
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
  function _datetime_astimezone($self, $args, $kw) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kw_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $m = __stackBase__ + 4;
      var $d = __stackBase__ + 8;
      var $hh = __stackBase__ + 12;
      var $mm = __stackBase__ + 16;
      var $ss = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      var $result;
      var $offset;
      var $none = __stackBase__ + 28;
      var $tzinfo = __stackBase__ + 32;
      var $temp;
      $self_addr = $self;
      $args_addr = $args;
      $kw_addr = $kw;
      
      
      var $3 = __PyArg_ParseTupleAndKeywords_SizeT($args_addr, $kw_addr, __str245, _keywords_13698, allocate([ _PyDateTime_TZInfoType, 0, 0, 0, $tzinfo, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      if (HEAP[$self_addr + 24] == __Py_NoneStruct) {
        __label__ = 17;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $20 = $self_addr;
      if (HEAP[$self_addr + 24] == HEAP[$tzinfo]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $23 = HEAP[$20] + 1;
      
      HEAP[$20] = $23;
      
      
      $0 = $self_addr;
      __label__ = 18;
      break;
     case 6:
      
      
      var $29 = HEAP[$self_addr + 24];
      var $30 = _call_utcoffset($29, $20, $none);
      $offset = $30;
      
      var $32 = $offset == -1;
      if ($32) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $33 = _PyErr_Occurred();
      
      if ($33 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 18;
      break;
     case 9:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $50 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      HEAP[$y] = $50;
      
      
      
      
      
      var $56 = HEAP[$self_addr + 13 + 2];
      HEAP[$m] = $56;
      
      
      
      
      
      var $62 = HEAP[$self_addr + 13 + 3];
      HEAP[$d] = $62;
      
      
      
      
      var $67 = HEAP[$self_addr + 13 + 4];
      HEAP[$hh] = $67;
      
      
      
      
      var $72 = HEAP[$self_addr + 13 + 5];
      HEAP[$mm] = $72;
      
      
      
      
      var $77 = HEAP[$self_addr + 13 + 6];
      HEAP[$ss] = $77;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $96 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
      HEAP[$us] = $96;
      
      
      var $99 = HEAP[$mm] - $offset;
      HEAP[$mm] = $99;
      
      
      
      
      
      if (HEAP[$mm] < 0 | HEAP[$mm] > 59) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $104 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      
      if ($104 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 18;
      break;
     case 13:
      var $106 = HEAP[$tzinfo];
      var $107 = HEAP[$us];
      var $108 = HEAP[$ss];
      var $109 = HEAP[$mm];
      var $110 = HEAP[$hh];
      var $111 = HEAP[$d];
      var $112 = HEAP[$m];
      var $113 = HEAP[$y];
      var $114 = _new_datetime_ex($113, $112, $111, $110, $109, $108, $107, $106, _PyDateTime_DateTimeType);
      $result = $114;
      
      if ($114 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      $temp = $result;
      var $117 = HEAP[$tzinfo];
      
      var $119 = __PyObject_CallMethod_SizeT($117, __str189, __str35, allocate([ $temp, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $119;
      
      
      
      var $123 = HEAP[$temp] - 1;
      
      
      HEAP[$temp] = $123;
      
      
      
      
      if (HEAP[$temp] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $134 = HEAP[HEAP[$temp + 4] + 24];
      
      FUNCTION_TABLE[$134]($temp);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $result;
      __label__ = 18;
      break;
     case 17:
      var $137 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($137, __str246);
      $0 = 0;
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
  function _datetime_timetuple($self) {
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
      var $dstflag;
      var $none = __stackBase__;
      $self_addr = $self;
      $dstflag = -1;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 24] != __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      
      
      
      var $14 = HEAP[$self_addr + 24];
      var $15 = _call_dst($14, $self_addr, $none);
      $dstflag = $15;
      
      var $17 = $dstflag == -1;
      if ($17) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $18 = _PyErr_Occurred();
      
      if ($18 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 10;
      break;
     case 5:
      
      
      if (HEAP[$none] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $dstflag = -1;
      __label__ = 9;
      break;
     case 7:
      
      
      if ($dstflag != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $dstflag = 1;
      __label__ = 9;
      break;
     case 9:
      
      
      
      
      var $28 = HEAP[$self_addr + 13 + 6];
      
      
      
      
      var $33 = HEAP[$self_addr + 13 + 5];
      
      
      
      
      var $38 = HEAP[$self_addr + 13 + 4];
      
      
      
      
      
      var $44 = HEAP[$self_addr + 13 + 3];
      
      
      
      
      
      var $50 = HEAP[$self_addr + 13 + 2];
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $64 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      
      var $66 = _build_struct_time($64, $50, $44, $38, $33, $28, $dstflag);
      $0 = $66;
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
  function _datetime_getdate($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    var $6 = HEAP[$self_addr + 13 + 3];
    
    
    
    
    
    var $12 = HEAP[$self_addr + 13 + 2];
    
    
    
    
    
    
    
    
    
    
    
    
    
    var $26 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
    var $27 = _new_date_ex($26, $12, $6, _PyDateTime_DateType);
    $0 = $27;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_gettime($self) {
    
    var $self_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var $19 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
    
    
    
    
    var $24 = HEAP[$self_addr + 13 + 6];
    
    
    
    
    var $29 = HEAP[$self_addr + 13 + 5];
    
    
    
    
    var $34 = HEAP[$self_addr + 13 + 4];
    var $35 = _new_time_ex($34, $29, $24, $19, __Py_NoneStruct, _PyDateTime_TimeType);
    $0 = $35;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _datetime_gettimetz($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $iftmp_588;
      var $0;
      $self_addr = $self;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_588 = HEAP[$self_addr + 24];
      __label__ = 3;
      break;
     case 2:
      $iftmp_588 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $27 = HEAP[$self_addr + 13 + 8] << 8 | HEAP[$self_addr + 13 + 7] << 16 | HEAP[$self_addr + 13 + 9];
      
      
      
      
      var $32 = HEAP[$self_addr + 13 + 6];
      
      
      
      
      var $37 = HEAP[$self_addr + 13 + 5];
      
      
      
      
      var $42 = HEAP[$self_addr + 13 + 4];
      
      var $44 = _new_time_ex($42, $37, $32, $27, $iftmp_588, _PyDateTime_TimeType);
      $0 = $44;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_utctimetuple($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $m = __stackBase__ + 4;
      var $d = __stackBase__ + 8;
      var $hh = __stackBase__ + 12;
      var $mm = __stackBase__ + 16;
      var $ss = __stackBase__ + 20;
      var $us = __stackBase__ + 24;
      var $offset;
      var $none = __stackBase__ + 28;
      var $stat;
      $self_addr = $self;
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $14 = HEAP[$self_addr + 13 + 1] | HEAP[$self_addr + 13] << 8;
      HEAP[$y] = $14;
      
      
      
      
      
      var $20 = HEAP[$self_addr + 13 + 2];
      HEAP[$m] = $20;
      
      
      
      
      
      var $26 = HEAP[$self_addr + 13 + 3];
      HEAP[$d] = $26;
      
      
      
      
      var $31 = HEAP[$self_addr + 13 + 4];
      HEAP[$hh] = $31;
      
      
      
      
      var $36 = HEAP[$self_addr + 13 + 5];
      HEAP[$mm] = $36;
      
      
      
      
      var $41 = HEAP[$self_addr + 13 + 6];
      HEAP[$ss] = $41;
      HEAP[$us] = 0;
      $offset = 0;
      
      
      
      
      
      if (HEAP[$self_addr + 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      
      
      if (HEAP[$self_addr + 24] != __Py_NoneStruct) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      
      
      
      
      var $55 = HEAP[$self_addr + 24];
      var $56 = _call_utcoffset($55, $self_addr, $none);
      $offset = $56;
      var $57 = $offset;
      var $58 = $57 == -1;
      if ($58) {
        __lastLabel__ = 2;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 2;
        __label__ = 6;
        break;
      }
     case 3:
      var $59 = _PyErr_Occurred();
      
      if ($59 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 12;
      break;
     case 5:
      var $_pr = $offset;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $61 = __lastLabel__ == 5 ? $_pr : $57;
      
      if ($61 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      var $65 = HEAP[$mm] - $offset;
      HEAP[$mm] = $65;
      var $66 = _normalize_datetime($y, $m, $d, $hh, $mm, $ss, $us);
      $stat = $66;
      
      
      if ($stat < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $69 = HEAP[_PyExc_OverflowError];
      var $70 = _PyErr_ExceptionMatches($69);
      
      if ($70 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      _PyErr_Clear();
      __label__ = 11;
      break;
     case 10:
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      var $72 = HEAP[$ss];
      var $73 = HEAP[$mm];
      var $74 = HEAP[$hh];
      var $75 = HEAP[$d];
      var $76 = HEAP[$m];
      var $77 = HEAP[$y];
      var $78 = _build_struct_time($77, $76, $75, $74, $73, $72, 0);
      $0 = $78;
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
  function _datetime_getstate($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $basestate;
      var $result;
      $self_addr = $self;
      $result = 0;
      
      
      
      var $4 = _PyString_FromStringAndSize($self_addr + 13, 10);
      $basestate = $4;
      
      
      if ($basestate != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      
      
      if (HEAP[$self_addr + 12] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      if (HEAP[$self_addr + 24] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $17 = _PyTuple_Pack(1, allocate([ $basestate, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $17;
      __label__ = 5;
      break;
     case 4:
      
      
      var $20 = HEAP[$self_addr + 24];
      
      var $22 = _PyTuple_Pack(2, allocate([ $basestate, 0, 0, 0, $20, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $result = $22;
      __label__ = 5;
      break;
     case 5:
      
      
      
      var $26 = HEAP[$basestate] - 1;
      
      
      HEAP[$basestate] = $26;
      
      
      
      
      if (HEAP[$basestate] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      var $37 = HEAP[HEAP[$basestate + 4] + 24];
      
      FUNCTION_TABLE[$37]($basestate);
      __label__ = 7;
      break;
     case 7:
      
      $0 = $result;
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _datetime_reduce($self, $arg) {
    
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $arg_addr = $arg;
    
    var $2 = _datetime_getstate($self_addr);
    
    
    
    var $6 = HEAP[$self_addr + 4];
    var $7 = __Py_BuildValue_SizeT(__str154, allocate([ $6, 0, 0, 0, $2, 0, 0, 0 ], [ "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
    $0 = $7;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _initdatetime() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $x;
      var $0 = _Py_InitModule4(__str269, _module_methods, __str270, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyType_Ready(_PyDateTime_DateType);
      
      if ($3 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _PyType_Ready(_PyDateTime_DateTimeType);
      
      if ($5 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $7 = _PyType_Ready(_PyDateTime_DeltaType);
      
      if ($7 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $9 = _PyType_Ready(_PyDateTime_TimeType);
      
      if ($9 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $11 = _PyType_Ready(_PyDateTime_TZInfoType);
      
      if ($11 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      $d = HEAP[_PyDateTime_DeltaType + 132];
      var $14 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      $x = $14;
      
      
      if ($x == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      var $19 = _PyDict_SetItemString($d, __str271, $x);
      
      if ($19 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      
      var $24 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $24;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $35 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$35]($x);
      __label__ = 10;
      break;
     case 10:
      var $37 = _new_delta_ex(-999999999, 0, 0, 0, _PyDateTime_DeltaType);
      $x = $37;
      
      if ($37 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $41 = _PyDict_SetItemString($d, __str272, $x);
      
      if ($41 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      var $46 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $46;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $57 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$57]($x);
      __label__ = 14;
      break;
     case 14:
      var $59 = _new_delta_ex(999999999, 86399, 999999, 0, _PyDateTime_DeltaType);
      $x = $59;
      
      if ($59 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      
      var $63 = _PyDict_SetItemString($d, __str273, $x);
      
      if ($63 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      
      
      var $68 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $68;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $79 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$79]($x);
      __label__ = 18;
      break;
     case 18:
      
      $d = HEAP[_PyDateTime_DateType + 132];
      var $82 = _new_date_ex(1, 1, 1, _PyDateTime_DateType);
      $x = $82;
      
      if ($82 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      var $86 = _PyDict_SetItemString($d, __str272, $x);
      
      if ($86 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      var $91 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $91;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $102 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$102]($x);
      __label__ = 22;
      break;
     case 22:
      var $104 = _new_date_ex(9999, 12, 31, _PyDateTime_DateType);
      $x = $104;
      
      if ($104 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      var $108 = _PyDict_SetItemString($d, __str273, $x);
      
      if ($108 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      
      
      
      var $113 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $113;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      
      var $124 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$124]($x);
      __label__ = 26;
      break;
     case 26:
      var $126 = _new_delta_ex(1, 0, 0, 0, _PyDateTime_DeltaType);
      $x = $126;
      
      if ($126 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      
      var $130 = _PyDict_SetItemString($d, __str271, $x);
      
      if ($130 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 28:
      
      
      
      var $135 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $135;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $146 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$146]($x);
      __label__ = 30;
      break;
     case 30:
      
      $d = HEAP[_PyDateTime_TimeType + 132];
      var $149 = _new_time_ex(0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_TimeType);
      $x = $149;
      
      if ($149 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 31:
      
      
      var $153 = _PyDict_SetItemString($d, __str272, $x);
      
      if ($153 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      
      
      var $158 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $158;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      
      
      
      
      var $169 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$169]($x);
      __label__ = 34;
      break;
     case 34:
      var $171 = _new_time_ex(23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_TimeType);
      $x = $171;
      
      if ($171 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      var $175 = _PyDict_SetItemString($d, __str273, $x);
      
      if ($175 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 36:
      
      
      
      var $180 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $180;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $191 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$191]($x);
      __label__ = 38;
      break;
     case 38:
      var $193 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      $x = $193;
      
      if ($193 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 39:
      
      
      var $197 = _PyDict_SetItemString($d, __str271, $x);
      
      if ($197 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      var $202 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $202;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      
      
      var $213 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$213]($x);
      __label__ = 42;
      break;
     case 42:
      
      $d = HEAP[_PyDateTime_DateTimeType + 132];
      var $216 = _new_datetime_ex(1, 1, 1, 0, 0, 0, 0, __Py_NoneStruct, _PyDateTime_DateTimeType);
      $x = $216;
      
      if ($216 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 43;
        break;
      }
     case 43:
      
      
      var $220 = _PyDict_SetItemString($d, __str272, $x);
      
      if ($220 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      
      var $225 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $225;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      
      
      
      
      var $236 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$236]($x);
      __label__ = 46;
      break;
     case 46:
      var $238 = _new_datetime_ex(9999, 12, 31, 23, 59, 59, 999999, __Py_NoneStruct, _PyDateTime_DateTimeType);
      $x = $238;
      
      if ($238 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      var $242 = _PyDict_SetItemString($d, __str273, $x);
      
      if ($242 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      var $247 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $247;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $258 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$258]($x);
      __label__ = 50;
      break;
     case 50:
      var $260 = _new_delta_ex(0, 0, 1, 0, _PyDateTime_DeltaType);
      $x = $260;
      
      if ($260 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 51:
      
      
      var $264 = _PyDict_SetItemString($d, __str271, $x);
      
      if ($264 < 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 52:
      
      
      
      var $269 = HEAP[$x] - 1;
      
      
      HEAP[$x] = $269;
      
      
      
      
      if (HEAP[$x] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $280 = HEAP[HEAP[$x + 4] + 24];
      
      FUNCTION_TABLE[$280]($x);
      __label__ = 54;
      break;
     case 54:
      
      var $283 = _PyModule_AddIntConstant($m, __str274, 1);
      
      var $285 = _PyModule_AddIntConstant($m, __str275, 9999);
      
      var $287 = HEAP[_PyDateTime_DateType] + 1;
      HEAP[_PyDateTime_DateType] = $287;
      
      var $289 = _PyModule_AddObject($m, __str232, _PyDateTime_DateType);
      
      var $291 = HEAP[_PyDateTime_DateTimeType] + 1;
      HEAP[_PyDateTime_DateTimeType] = $291;
      
      var $293 = _PyModule_AddObject($m, __str269, _PyDateTime_DateTimeType);
      
      var $295 = HEAP[_PyDateTime_TimeType] + 1;
      HEAP[_PyDateTime_TimeType] = $295;
      
      var $297 = _PyModule_AddObject($m, __str92, _PyDateTime_TimeType);
      
      var $299 = HEAP[_PyDateTime_DeltaType] + 1;
      HEAP[_PyDateTime_DeltaType] = $299;
      
      var $301 = _PyModule_AddObject($m, __str276, _PyDateTime_DeltaType);
      
      var $303 = HEAP[_PyDateTime_TZInfoType] + 1;
      HEAP[_PyDateTime_TZInfoType] = $303;
      
      var $305 = _PyModule_AddObject($m, __str48, _PyDateTime_TZInfoType);
      var $306 = _PyCapsule_New(_CAPI, __str277, 0);
      $x = $306;
      
      if ($306 == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 55:
      
      
      var $310 = _PyModule_AddObject($m, __str278, $x);
      var $311 = _days_before_year(5);
      
      if ($311 != 1461) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      ___assert_fail(__str279, __str1, 4888, ___PRETTY_FUNCTION___14028);
      throw "Reached an unreachable!";
     case 57:
      var $313 = _days_before_year(401);
      
      if ($313 != 146097) {
        __label__ = 58;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 58:
      ___assert_fail(__str280, __str1, 4894, ___PRETTY_FUNCTION___14028);
      throw "Reached an unreachable!";
     case 59:
      var $315 = _days_before_year(101);
      
      if ($315 != 36524) {
        __label__ = 60;
        break;
      } else {
        __label__ = 61;
        break;
      }
     case 60:
      ___assert_fail(__str281, __str1, 4900, ___PRETTY_FUNCTION___14028);
      throw "Reached an unreachable!";
     case 61:
      var $317 = _PyInt_FromLong(1);
      HEAP[_us_per_us] = $317;
      var $318 = _PyInt_FromLong(1e3);
      HEAP[_us_per_ms] = $318;
      var $319 = _PyInt_FromLong(1e6);
      HEAP[_us_per_second] = $319;
      var $320 = _PyInt_FromLong(6e7);
      HEAP[_us_per_minute] = $320;
      var $321 = _PyInt_FromLong(86400);
      HEAP[_seconds_per_day] = $321;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      if (HEAP[_us_per_us] == 0 | HEAP[_us_per_ms] == 0 | HEAP[_us_per_second] == 0 | HEAP[_us_per_minute] == 0 | HEAP[_seconds_per_day] == 0) {
        __label__ = 63;
        break;
      } else {
        __label__ = 62;
        break;
      }
     case 62:
      var $332 = _PyLong_FromDouble(36e8);
      HEAP[_us_per_hour] = $332;
      var $333 = _PyLong_FromDouble(864e8);
      HEAP[_us_per_day] = $333;
      var $334 = _PyLong_FromDouble(6048e8);
      HEAP[_us_per_week] = $334;
      return;
     case 63:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initdatetime"] = _initdatetime;
  function __PyTime_DoubleToTimet($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $result;
      var $diff;
      $x_addr = $x;
      
      
      $result = $x_addr | 0;
      
      
      
      
      $diff = $x_addr - $result;
      
      var $8 = $diff <= -1;
      
      
      
      if ($8 | $diff >= 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $11 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($11, __str282);
      $result = -1;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_time346($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $secs;
      $self_addr = $self;
      $unused_addr = $unused;
      var $1 = _floattime();
      $secs = $1;
      
      
      if ($secs == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_IOError];
      var $5 = _PyErr_SetFromErrno($4);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      var $7 = _PyFloat_FromDouble($secs);
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
  function _time_clock($self, $unused) {
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $unused_addr = $unused;
    var $1 = _clock();
    
    var $3 = $1 / 1e6;
    var $4 = _PyFloat_FromDouble($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _time_sleep($self, $args) {
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
      var $secs = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str1284, allocate([ $secs, 0, 0, 0 ], [ "double*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$secs];
      var $5 = _floatsleep($4);
      
      if ($5 != 0) {
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
      
      var $8 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $8;
      $0 = __Py_NoneStruct;
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
  function _tmtotuple($p) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_addr;
      var $retval;
      var $0;
      var $v;
      $p_addr = $p;
      var $1 = _PyStructSequence_New(_StructTimeType);
      $v = $1;
      
      
      if ($v == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 8;
      break;
     case 2:
      
      var $5 = $v;
      
      
      
      var $9 = HEAP[$p_addr + 20] + 1900;
      var $10 = _PyInt_FromLong($9);
      
      
      HEAP[$5 + 12] = $10;
      
      var $14 = $v;
      
      
      
      var $18 = HEAP[$p_addr + 16] + 1;
      var $19 = _PyInt_FromLong($18);
      
      
      HEAP[$14 + 12 + 4] = $19;
      
      var $23 = $v;
      
      
      var $26 = HEAP[$p_addr + 12];
      var $27 = _PyInt_FromLong($26);
      
      
      HEAP[$23 + 12 + 8] = $27;
      
      var $31 = $v;
      
      
      var $34 = HEAP[$p_addr + 8];
      var $35 = _PyInt_FromLong($34);
      
      
      HEAP[$31 + 12 + 12] = $35;
      
      var $39 = $v;
      
      
      var $42 = HEAP[$p_addr + 4];
      var $43 = _PyInt_FromLong($42);
      
      
      HEAP[$39 + 12 + 16] = $43;
      
      var $47 = $v;
      
      
      var $50 = HEAP[$p_addr];
      var $51 = _PyInt_FromLong($50);
      
      
      HEAP[$47 + 12 + 20] = $51;
      
      var $55 = $v;
      
      
      
      
      var $60 = (HEAP[$p_addr + 24] + 6) % 7;
      var $61 = _PyInt_FromLong($60);
      
      
      HEAP[$55 + 12 + 24] = $61;
      
      var $65 = $v;
      
      
      
      var $69 = HEAP[$p_addr + 28] + 1;
      var $70 = _PyInt_FromLong($69);
      
      
      HEAP[$65 + 12 + 28] = $70;
      
      var $74 = $v;
      
      
      var $77 = HEAP[$p_addr + 32];
      var $78 = _PyInt_FromLong($77);
      
      
      HEAP[$74 + 12 + 32] = $78;
      var $81 = _PyErr_Occurred();
      
      var $83 = $v;
      if ($81 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      if ($83 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      var $88 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $88;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $99 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$99]($v);
      __label__ = 6;
      break;
     case 6:
      $0 = 0;
      __label__ = 8;
      break;
     case 7:
      $0 = $83;
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
  function _time_convert($when, $function) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $when_addr;
      var $function_addr;
      var $retval;
      var $0;
      var $p;
      var $whent = __stackBase__;
      $when_addr = $when;
      $function_addr = $function;
      
      var $2 = __PyTime_DoubleToTimet($when_addr);
      HEAP[$whent] = $2;
      
      var $4 = HEAP[$whent] == -1;
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
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = $function_addr;
      var $9 = FUNCTION_TABLE[$8]($whent);
      $p = $9;
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      var $11 = ___errno_location();
      
      
      if (HEAP[$11] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = ___errno_location();
      HEAP[$14] = 22;
      __label__ = 6;
      break;
     case 6:
      var $15 = HEAP[_PyExc_ValueError];
      var $16 = _PyErr_SetFromErrno($15);
      $0 = $16;
      __label__ = 8;
      break;
     case 7:
      
      var $18 = _tmtotuple($p);
      $0 = $18;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _parse_time_double_args($args, $format, $pwhen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $format_addr;
      var $pwhen_addr;
      var $retval;
      var $0;
      var $ot = __stackBase__;
      var $when;
      $args_addr = $args;
      $format_addr = $format;
      $pwhen_addr = $pwhen;
      HEAP[$ot] = 0;
      
      
      var $3 = _PyArg_ParseTuple($args_addr, $format_addr, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 8;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$ot] == 0 | HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _floattime();
      
      HEAP[$pwhen_addr] = $9;
      __label__ = 7;
      break;
     case 4:
      var $11 = HEAP[$ot];
      var $12 = _PyFloat_AsDouble($11);
      $when = $12;
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
      __label__ = 8;
      break;
     case 6:
      
      
      HEAP[$pwhen_addr] = $when;
      __label__ = 7;
      break;
     case 7:
      $0 = 1;
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
  function _time_gmtime($self, $args) {
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
      var $when = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _parse_time_double_args($args_addr, __str22305, $when);
      
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 4);
      $0 = $5;
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
  function _time_localtime($self, $args) {
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
      var $when = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _parse_time_double_args($args_addr, __str23306, $when);
      
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
      var $4 = HEAP[$when];
      var $5 = _time_convert($4, FUNCTION_TABLE_OFFSET + 2);
      $0 = $5;
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
  function _gettmarg($args, $p) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $p_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $accept;
      $args_addr = $args;
      $p_addr = $p;
      
      
      _llvm_memset_p0i8_i32($p_addr, 0, 44, 1, 0);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $20 = _PyArg_Parse($args_addr, __str24307, allocate([ $y, 0, 0, 0, $p_addr + 16, 0, 0, 0, $p_addr + 12, 0, 0, 0, $p_addr + 8, 0, 0, 0, $p_addr + 4, 0, 0, 0, $p_addr, 0, 0, 0, $p_addr + 24, 0, 0, 0, $p_addr + 28, 0, 0, 0, $p_addr + 32, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($20 == 0) {
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
      
      
      if (HEAP[$y] <= 1899) {
        __label__ = 3;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 3:
      var $24 = HEAP[_moddict];
      var $25 = _PyDict_GetItemString($24, __str25308);
      $accept = $25;
      
      
      if ($accept == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$accept + 4] + 84] & 8388608) == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      var $36 = _PyInt_AsLong($accept);
      
      if ($36 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str26309);
      $0 = 0;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      var $43 = HEAP[$y];
      if (HEAP[$y] <= 68 | HEAP[$y] > 99) {
        __label__ = 9;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      var $44 = $43 + 1900;
      HEAP[$y] = $44;
      __label__ = 12;
      break;
     case 9:
      
      
      
      
      if ($43 < 0 | HEAP[$y] > 68) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $49 = HEAP[$y] + 2e3;
      HEAP[$y] = $49;
      __label__ = 12;
      break;
     case 11:
      var $50 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($50, __str27310);
      $0 = 0;
      __label__ = 13;
      break;
     case 12:
      
      var $52 = HEAP[$y] - 1900;
      
      
      HEAP[$p_addr + 20] = $52;
      
      
      
      var $58 = HEAP[$p_addr + 16] - 1;
      
      
      HEAP[$p_addr + 16] = $58;
      
      
      
      
      var $65 = (HEAP[$p_addr + 24] + 1) % 7;
      
      
      HEAP[$p_addr + 24] = $65;
      
      
      
      var $71 = HEAP[$p_addr + 28] - 1;
      
      
      HEAP[$p_addr + 28] = $71;
      $0 = 1;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strftime347($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $tup = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $fmt = __stackBase__ + 48;
      var $fmtlen;
      var $buflen;
      var $outbuf;
      var $i;
      var $tt = __stackBase__ + 52;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tup] = 0;
      $outbuf = 0;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 44, 1, 0);
      
      var $2 = _PyArg_ParseTuple($args_addr, __str28311, allocate([ $fmt, 0, 0, 0, $tup, 0, 0, 0 ], [ "i8**", 0, 0, 0, "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 43;
      break;
     case 2:
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf4 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf4, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 43;
      break;
     case 6:
      
      
      var $14 = HEAP[$buf + 16] == -1;
      var $15 = $buf + 16;
      if ($14) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      HEAP[$15] = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$15] < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      if (HEAP[$buf + 16] > 11) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str29312);
      $0 = 0;
      __label__ = 43;
      break;
     case 11:
      
      
      
      var $25 = $buf + 12;
      if (HEAP[$buf + 12] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      HEAP[$25] = 1;
      __label__ = 16;
      break;
     case 13:
      
      
      if (HEAP[$25] < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      
      if (HEAP[$buf + 12] > 31) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $31 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($31, __str30313);
      $0 = 0;
      __label__ = 43;
      break;
     case 16:
      
      
      
      if (HEAP[$buf + 8] < 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      
      
      if (HEAP[$buf + 8] > 23) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $38 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($38, __str31314);
      $0 = 0;
      __label__ = 43;
      break;
     case 19:
      
      
      
      if (HEAP[$buf + 4] < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      
      if (HEAP[$buf + 4] > 59) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $45 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($45, __str32315);
      $0 = 0;
      __label__ = 43;
      break;
     case 22:
      
      
      
      if (HEAP[$buf] < 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      if (HEAP[$buf] > 61) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      var $52 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($52, __str33316);
      $0 = 0;
      __label__ = 43;
      break;
     case 25:
      
      
      
      if (HEAP[$buf + 24] < 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      var $56 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($56, __str34317);
      $0 = 0;
      __label__ = 43;
      break;
     case 27:
      
      
      var $59 = HEAP[$buf + 28] == -1;
      var $60 = $buf + 28;
      if ($59) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      HEAP[$60] = 0;
      __label__ = 32;
      break;
     case 29:
      
      
      if (HEAP[$60] < 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      
      if (HEAP[$buf + 28] > 365) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      var $66 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($66, __str35318);
      $0 = 0;
      __label__ = 43;
      break;
     case 32:
      
      
      var $69 = HEAP[$buf + 32] < -1;
      var $70 = $buf + 32;
      if ($69) {
        __label__ = 33;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 33:
      HEAP[$70] = -1;
      __label__ = 36;
      break;
     case 34:
      
      
      if (HEAP[$70] > 1) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      HEAP[$buf + 32] = 1;
      __label__ = 36;
      break;
     case 36:
      var $74 = HEAP[$fmt];
      var $75 = _strlen($74);
      $fmtlen = $75;
      $i = 1024;
      __label__ = 37;
      break;
     case 37:
      
      var $77 = _malloc($i);
      $outbuf = $77;
      
      if ($77 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 39;
        break;
      }
     case 38:
      var $79 = _PyErr_NoMemory();
      $0 = $79;
      __label__ = 43;
      break;
     case 39:
      var $80 = HEAP[$fmt];
      
      
      var $83 = _strftime($outbuf, $i, $80, $buf);
      $buflen = $83;
      
      
      if ($buflen != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 40:
      
      
      
      
      if ($fmtlen * 256 <= $i) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      
      
      var $92 = _PyString_FromStringAndSize($outbuf, $buflen);
      $ret = $92;
      
      _free($outbuf);
      
      $0 = $ret;
      __label__ = 43;
      break;
     case 42:
      
      _free($outbuf);
      
      
      var $98 = $i + $i;
      $i = $98;
      __label__ = 37;
      break;
     case 43:
      
      $retval = $0;
      var $retval45 = $retval;
      STACKTOP = __stackBase__;
      return $retval45;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_strptime($self, $args) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $strptime_module;
      var $strptime_result;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _PyImport_ImportModuleNoBlock(__str228);
      $strptime_module = $1;
      
      
      if ($strptime_module == 0) {
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
      
      
      var $6 = _PyObject_CallMethod($strptime_module, __str37320, __str35, allocate([ $args_addr, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo*", 0, 0, 0 ], ALLOC_STACK));
      $strptime_result = $6;
      
      
      
      var $10 = HEAP[$strptime_module] - 1;
      
      
      HEAP[$strptime_module] = $10;
      
      
      
      
      if (HEAP[$strptime_module] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $21 = HEAP[HEAP[$strptime_module + 4] + 24];
      
      FUNCTION_TABLE[$21]($strptime_module);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $strptime_result;
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
  function _time_asctime($self, $args) {
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
      var $tup = __stackBase__;
      var $buf = __stackBase__ + 4;
      var $p;
      var $tt = __stackBase__ + 48;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$tup] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str39322, 0, 1, allocate([ $tup, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$tup] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = _time(0);
      HEAP[$tt] = $6;
      var $7 = _localtime($tt);
      var $buf3 = $buf;
      var $8 = $7;
      _llvm_memcpy_p0i8_p0i8_i32($buf3, $8, 44, 4, 0);
      __label__ = 6;
      break;
     case 4:
      var $9 = HEAP[$tup];
      var $10 = _gettmarg($9, $buf);
      
      if ($10 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      var $12 = _asctime($buf);
      $p = $12;
      
      if ($12 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str40323);
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      if (HEAP[$p + 24] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      HEAP[$p + 24] = 0;
      __label__ = 10;
      break;
     case 10:
      
      var $22 = _PyString_FromString($p);
      $0 = $22;
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
  function _time_ctime($self, $args) {
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
      var $ot = __stackBase__;
      var $tt = __stackBase__ + 4;
      var $p;
      var $dt;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$ot] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str160, 0, 1, allocate([ $ot, 0, 0, 0 ], [ "%struct.PyDateTime_TZInfo**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$ot] == 0 | HEAP[$ot] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _time(0);
      HEAP[$tt] = $8;
      __label__ = 9;
      break;
     case 4:
      var $9 = HEAP[$ot];
      var $10 = _PyFloat_AsDouble($9);
      $dt = $10;
      var $11 = _PyErr_Occurred();
      
      if ($11 != 0) {
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
      
      var $14 = __PyTime_DoubleToTimet($dt);
      HEAP[$tt] = $14;
      
      var $16 = HEAP[$tt] == -1;
      if ($16) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $17 = _PyErr_Occurred();
      
      if ($17 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 14;
      break;
     case 9:
      var $19 = _ctime($tt);
      $p = $19;
      
      if ($19 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str42325);
      $0 = 0;
      __label__ = 14;
      break;
     case 11:
      
      
      
      
      if (HEAP[$p + 24] == 10) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      HEAP[$p + 24] = 0;
      __label__ = 13;
      break;
     case 13:
      
      var $29 = _PyString_FromString($p);
      $0 = $29;
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
  function _time_mktime($self, $tup) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $tup_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $tt;
      $self_addr = $self;
      $tup_addr = $tup;
      
      var $2 = _gettmarg($tup_addr, $buf);
      
      if ($2 == 0) {
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
      
      HEAP[$buf + 24] = -1;
      var $5 = _mktime($buf);
      $tt = $5;
      
      var $7 = $tt == -1;
      if ($7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      var $10 = HEAP[$buf + 24] == -1;
      if ($10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($11, __str43326);
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      var $14 = _PyFloat_FromDouble($tt);
      $0 = $14;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _time_tzset($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $m;
      $self_addr = $self;
      $unused_addr = $unused;
      var $1 = _PyImport_ImportModuleNoBlock(__str92);
      $m = $1;
      
      
      if ($m == 0) {
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
      _tzset();
      
      _inittimezone($m);
      
      
      
      var $8 = HEAP[$m] - 1;
      
      
      HEAP[$m] = $8;
      
      
      
      
      if (HEAP[$m] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      
      
      var $19 = HEAP[HEAP[$m + 4] + 24];
      
      FUNCTION_TABLE[$19]($m);
      __label__ = 4;
      break;
     case 4:
      
      var $22 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $22;
      $0 = __Py_NoneStruct;
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
  function _inittimezone($m) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m_addr;
      var $iftmp_53;
      var $iftmp_51;
      var $t = __stackBase__;
      var $p;
      var $janzone;
      var $julyzone;
      var $janname = __stackBase__ + 4;
      var $julyname = __stackBase__ + 14;
      $m_addr = $m;
      var $0 = _time(0);
      
      
      HEAP[$t] = ($0 / 31557600 | 0) * 31557600;
      var $3 = _localtime($t);
      $p = $3;
      
      
      
      
      $janzone = 0 - HEAP[$p + 36];
      
      
      
      
      if (HEAP[$p + 40] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      $iftmp_51 = HEAP[$p + 40];
      __label__ = 3;
      break;
     case 2:
      $iftmp_51 = __str45328;
      __label__ = 3;
      break;
     case 3:
      var $janname3 = $janname;
      
      var $16 = _strncpy($janname3, $iftmp_51, 9);
      
      HEAP[$janname + 9] = 0;
      
      var $19 = HEAP[$t] + 15778800;
      HEAP[$t] = $19;
      var $20 = _localtime($t);
      $p = $20;
      
      
      
      
      $julyzone = 0 - HEAP[$p + 36];
      
      
      
      
      if (HEAP[$p + 40] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      $iftmp_53 = HEAP[$p + 40];
      __label__ = 6;
      break;
     case 5:
      $iftmp_53 = __str45328;
      __label__ = 6;
      break;
     case 6:
      var $julyname7 = $julyname;
      
      var $33 = _strncpy($julyname7, $iftmp_53, 9);
      
      HEAP[$julyname + 9] = 0;
      
      
      
      var $38 = $m_addr;
      if ($janzone < $julyzone) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $40 = _PyModule_AddIntConstant($38, __str46329, $julyzone);
      
      
      var $43 = _PyModule_AddIntConstant($m_addr, __str47330, $janzone);
      
      
      
      
      
      var $49 = _PyModule_AddIntConstant($m_addr, __str48331, $janzone != $julyzone);
      var $julyname9 = $julyname;
      var $janname10 = $janname;
      var $50 = _Py_BuildValue(__str49332, allocate([ $julyname9, 0, 0, 0, $janname10, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      var $52 = _PyModule_AddObject($m_addr, __str45, $50);
      __label__ = 9;
      break;
     case 8:
      
      var $54 = _PyModule_AddIntConstant($38, __str46329, $janzone);
      
      
      var $57 = _PyModule_AddIntConstant($m_addr, __str47330, $julyzone);
      
      
      
      
      
      var $63 = _PyModule_AddIntConstant($m_addr, __str48331, $janzone != $julyzone);
      var $janname12 = $janname;
      var $julyname13 = $julyname;
      var $64 = _Py_BuildValue(__str49332, allocate([ $janname12, 0, 0, 0, $julyname13, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      var $66 = _PyModule_AddObject($m_addr, __str45, $64);
      __label__ = 9;
      break;
     case 9:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _inittime() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $iftmp_56;
      var $iftmp_54;
      var $m;
      var $p;
      var $0 = _Py_InitModule4(__str92, _time_methods342, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      if (HEAP[_Py_IgnoreEnvironmentFlag] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $iftmp_54 = 0;
      $p = 0;
      __label__ = 5;
      break;
     case 3:
      var $5 = _getenv(__str59343);
      $iftmp_54 = $5;
      $p = $5;
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$p] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_56 = 1;
      __label__ = 7;
      break;
     case 6:
      $iftmp_56 = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      var $12 = _PyModule_AddIntConstant($m, __str25308, $iftmp_56);
      
      var $14 = _PyModule_GetDict($m);
      HEAP[_moddict] = $14;
      
      
      
      var $18 = HEAP[HEAP[_moddict]] + 1;
      var $19 = HEAP[_moddict];
      HEAP[$19] = $18;
      
      _inittimezone($m);
      
      
      
      if (HEAP[_initialized_b] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _PyStructSequence_InitType(_StructTimeType, _struct_time_type_desc);
      __label__ = 9;
      break;
     case 9:
      
      var $24 = HEAP[_StructTimeType] + 1;
      HEAP[_StructTimeType] = $24;
      
      var $26 = _PyModule_AddObject($m, __str100, _StructTimeType);
      HEAP[_initialized_b] = 1;
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _floattime() {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $t = __stackBase__;
      var $t2 = __stackBase__ + 8;
      var $1 = _gettimeofday($t, 0);
      
      if ($1 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      
      
      $0 = HEAP[$t] + HEAP[$t + 4] * 1e-6;
      __label__ = 3;
      break;
     case 2:
      var $11 = _ftime($t2);
      
      
      
      
      
      
      
      
      $0 = HEAP[$t2] + HEAP[$t2 + 4] * .001;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _floatsleep($secs) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $secs_addr;
      var $retval;
      var $0;
      var $t = __stackBase__;
      var $frac;
      $secs_addr = $secs;
      
      var $2 = _fmod($secs_addr, 1);
      $frac = $2;
      
      var $4 = _floor($secs_addr);
      $secs_addr = $4;
      
      
      
      HEAP[$t] = $secs_addr | 0;
      
      
      
      
      HEAP[$t + 4] = $frac * 1e6 | 0;
      var $12 = _select(0, 0, 0, 0, $t);
      
      if ($12 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $14 = ___errno_location();
      
      
      if (HEAP[$14] != 4) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $17 = HEAP[_PyExc_IOError];
      var $18 = _PyErr_SetFromErrno($17);
      $0 = -1;
      __label__ = 4;
      break;
     case 3:
      $0 = 0;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      STACKTOP = __stackBase__;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _localtime, 0, _gmtime, 0, _delta_total_seconds, 0, _delta_reduce, 0, _delta_add, 0, _delta_subtract, 0, _delta_multiply, 0, _delta_divide, 0, _delta_negative, 0, _delta_positive, 0, _delta_abs, 0, _delta_nonzero, 0, _delta_repr, 0, _delta_hash, 0, _delta_str, 0, _PyObject_GenericGetAttr, 0, _delta_richcompare, 0, _delta_new, 0, _date_year, 0, _date_month, 0, _date_day, 0, _date_fromtimestamp, 0, _date_fromordinal, 0, _date_today, 0, _date_ctime, 0, _date_strftime, 0, _date_format, 0, _date_timetuple, 0, _date_isocalendar, 0, _date_isoformat, 0, _date_isoweekday, 0, _date_toordinal, 0, _date_weekday, 0, _date_replace, 0, _date_reduce, 0, _date_add, 0, _date_subtract, 0, _date_repr, 0, _date_hash, 0, _date_str, 0, _date_richcompare, 0, _date_new, 0, _tzinfo_tzname, 0, _tzinfo_utcoffset, 0, _tzinfo_dst, 0, _tzinfo_fromutc, 0, _tzinfo_reduce, 0, _PyType_GenericNew, 0, _time_hour, 0, _time_minute, 0, _py_time_second, 0, _time_microsecond, 0, _time_tzinfo, 0, _time_isoformat, 0, _time_strftime, 0, _time_utcoffset, 0, _time_tzname, 0, _time_dst, 0, _time_replace, 0, _time_reduce, 0, _time_nonzero, 0, _time_dealloc, 0, _time_repr, 0, _time_hash, 0, _time_str, 0, _time_richcompare, 0, _time_alloc, 0, _time_new, 0, _datetime_hour, 0, _datetime_minute, 0, _datetime_second, 0, _datetime_microsecond, 0, _datetime_tzinfo, 0, _datetime_now, 0, _datetime_utcnow, 0, _datetime_fromtimestamp, 0, _datetime_utcfromtimestamp, 0, _datetime_strptime, 0, _datetime_combine, 0, _datetime_getdate, 0, _datetime_gettime, 0, _datetime_gettimetz, 0, _datetime_ctime, 0, _datetime_timetuple, 0, _datetime_utctimetuple, 0, _datetime_isoformat, 0, _datetime_utcoffset, 0, _datetime_tzname, 0, _datetime_dst, 0, _datetime_replace, 0, _datetime_astimezone, 0, _datetime_reduce, 0, _datetime_add, 0, _datetime_subtract, 0, _datetime_dealloc, 0, _datetime_repr, 0, _datetime_hash, 0, _datetime_str, 0, _datetime_richcompare, 0, _datetime_alloc, 0, _datetime_new, 0, _new_date_ex, 0, _new_datetime_ex, 0, _new_time_ex, 0, _new_delta_ex, 0, _time_time346, 0, _time_clock, 0, _time_sleep, 0, _time_gmtime, 0, _time_localtime, 0, _time_asctime, 0, _time_ctime, 0, _time_mktime, 0, _time_strftime347, 0, _time_strptime, 0, _time_tzset, 0 ]);
  function run(args) {
    __str = allocate([ 121, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 100, 97, 116, 101, 116, 105, 109, 101, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8440 = allocate([ 100, 105, 118, 109, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 48, 32, 60, 61, 32, 42, 114, 32, 38, 38, 32, 42, 114, 32, 60, 32, 121, 0 ], "i8", ALLOC_NORMAL);
    __days_in_month = allocate([ 0, 0, 0, 0, 31, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0, 30, 0, 0, 0, 31, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __days_before_month = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 59, 0, 0, 0, 90, 0, 0, 0, 120, 0, 0, 0, 151, 0, 0, 0, 181, 0, 0, 0, 212, 0, 0, 0, 243, 0, 0, 0, 273, 0, 0, 0, 304, 0, 0, 0, 334, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str3 = allocate([ 109, 111, 110, 116, 104, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8488 = allocate([ 100, 97, 121, 115, 95, 105, 110, 95, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 109, 111, 110, 116, 104, 32, 60, 61, 32, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8505 = allocate([ 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 121, 101, 97, 114, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8522 = allocate([ 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 121, 32, 61, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 111, 114, 100, 105, 110, 97, 108, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8550 = allocate([ 111, 114, 100, 95, 116, 111, 95, 121, 109, 100, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 32, 61, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 108, 101, 97, 112, 121, 101, 97, 114, 32, 61, 61, 32, 105, 115, 95, 108, 101, 97, 112, 40, 42, 121, 101, 97, 114, 41, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 48, 32, 60, 61, 32, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 32, 60, 32, 100, 97, 121, 115, 95, 105, 110, 95, 109, 111, 110, 116, 104, 40, 42, 121, 101, 97, 114, 44, 32, 42, 109, 111, 110, 116, 104, 41, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 100, 97, 121, 115, 61, 37, 100, 59, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 109, 97, 103, 110, 105, 116, 117, 100, 101, 32, 60, 61, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 121, 101, 97, 114, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 111, 110, 116, 104, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 49, 46, 46, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 100, 97, 121, 32, 105, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 104, 111, 117, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 50, 51, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 109, 105, 110, 117, 116, 101, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 53, 57, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 115, 101, 99, 111, 110, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 53, 57, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 48, 46, 46, 57, 57, 57, 57, 57, 57, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 102, 97, 99, 116, 111, 114, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8694 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 108, 111, 32, 33, 61, 32, 104, 105, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 33, 32, 40, 40, 40, 40, 110, 101, 119, 95, 104, 105, 41, 32, 94, 32, 40, 42, 104, 105, 41, 41, 32, 38, 32, 40, 40, 110, 101, 119, 95, 104, 105, 41, 32, 94, 32, 40, 110, 117, 109, 95, 104, 105, 41, 41, 41, 32, 60, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 48, 32, 60, 61, 32, 42, 108, 111, 32, 38, 38, 32, 42, 108, 111, 32, 60, 32, 102, 97, 99, 116, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 48, 32, 60, 61, 32, 42, 115, 32, 38, 38, 32, 42, 115, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8725 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 100, 95, 115, 95, 117, 115, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 48, 32, 60, 61, 32, 42, 117, 115, 32, 38, 38, 32, 42, 117, 115, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 49, 32, 60, 61, 32, 42, 109, 32, 38, 38, 32, 42, 109, 32, 60, 61, 32, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8752 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 95, 121, 95, 109, 95, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 42, 109, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 42, 100, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 100, 97, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 48, 32, 60, 61, 32, 115, 101, 99, 111, 110, 100, 115, 32, 38, 38, 32, 115, 101, 99, 111, 110, 100, 115, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8976 = allocate([ 110, 101, 119, 95, 100, 101, 108, 116, 97, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 48, 32, 60, 61, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 38, 38, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 116, 122, 105, 110, 102, 111, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 78, 111, 110, 101, 32, 111, 114, 32, 111, 102, 32, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 44, 32, 110, 111, 116, 32, 116, 121, 112, 101, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 116, 122, 105, 110, 102, 111, 32, 38, 38, 32, 109, 101, 116, 104, 110, 97, 109, 101, 32, 38, 38, 32, 116, 122, 105, 110, 102, 111, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9023 = allocate([ 99, 97, 108, 108, 95, 116, 122, 105, 110, 102, 111, 95, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 99, 104, 101, 99, 107, 95, 116, 122, 105, 110, 102, 111, 95, 115, 117, 98, 99, 108, 97, 115, 115, 40, 116, 122, 105, 110, 102, 111, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 79, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 116, 122, 105, 110, 102, 111, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9075 = allocate([ 99, 97, 108, 108, 95, 117, 116, 99, 95, 116, 122, 105, 110, 102, 111, 95, 109, 101, 116, 104, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 122, 105, 110, 102, 111, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 32, 61, 61, 32, 40, 38, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 84, 90, 73, 110, 102, 111, 84, 121, 112, 101, 41, 32, 124, 124, 32, 80, 121, 84, 121, 112, 101, 95, 73, 115, 83, 117, 98, 116, 121, 112, 101, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 122, 105, 110, 102, 111, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 44, 32, 40, 38, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 84, 90, 73, 110, 102, 111, 84, 121, 112, 101, 41, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 116, 122, 105, 110, 102, 111, 97, 114, 103, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 119, 104, 111, 108, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 109, 105, 110, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 111, 110, 101, 32, 111, 114, 32, 116, 105, 109, 101, 100, 101, 108, 116, 97, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 116, 122, 105, 110, 102, 111, 46, 37, 115, 40, 41, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 37, 100, 59, 32, 109, 117, 115, 116, 32, 98, 101, 32, 105, 110, 32, 45, 49, 52, 51, 57, 32, 46, 46, 32, 49, 52, 51, 57, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 116, 122, 105, 110, 102, 111, 32, 38, 38, 32, 110, 97, 109, 101, 32, 38, 38, 32, 116, 122, 105, 110, 102, 111, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9150 = allocate([ 111, 102, 102, 115, 101, 116, 95, 97, 115, 95, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 100, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9191 = allocate([ 99, 97, 108, 108, 95, 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 116, 122, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 116, 122, 105, 110, 102, 111, 46, 116, 122, 110, 97, 109, 101, 40, 41, 32, 109, 117, 115, 116, 32, 114, 101, 116, 117, 114, 110, 32, 78, 111, 110, 101, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 110, 111, 116, 32, 39, 37, 115, 39, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9239 = allocate([ 99, 108, 97, 115, 115, 105, 102, 121, 95, 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 114, 101, 112, 114, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9306 = allocate([ 97, 112, 112, 101, 110, 100, 95, 107, 101, 121, 119, 111, 114, 100, 95, 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 80, 121, 83, 116, 114, 105, 110, 103, 95, 65, 115, 83, 116, 114, 105, 110, 103, 40, 114, 101, 112, 114, 41, 91, 80, 121, 83, 116, 114, 105, 110, 103, 95, 83, 105, 122, 101, 40, 114, 101, 112, 114, 41, 45, 49, 93, 32, 61, 61, 32, 39, 41, 39, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 44, 32, 116, 122, 105, 110, 102, 111, 61, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 41, 0 ], "i8", ALLOC_NORMAL);
    _MonthNames_9355 = allocate(48, "i8*", ALLOC_NORMAL);
    __str52 = allocate([ 74, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 70, 101, 98, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 77, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 65, 112, 114, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 77, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 74, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 74, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 65, 117, 103, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 83, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 79, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 78, 111, 118, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 68, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    _DayNames_9354 = allocate(28, "i8*", ALLOC_NORMAL);
    __str64 = allocate([ 77, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 84, 117, 101, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 87, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 84, 104, 117, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 70, 114, 105, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 83, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 83, 117, 110, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 37, 115, 32, 37, 115, 32, 37, 50, 100, 32, 37, 48, 50, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 32, 37, 48, 52, 100, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 98, 117, 102, 108, 101, 110, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9398 = allocate([ 102, 111, 114, 109, 97, 116, 95, 117, 116, 99, 111, 102, 102, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 37, 99, 37, 48, 50, 100, 37, 115, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 37, 48, 54, 100, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 111, 98, 106, 101, 99, 116, 32, 38, 38, 32, 102, 111, 114, 109, 97, 116, 32, 38, 38, 32, 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9485 = allocate([ 119, 114, 97, 112, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 40, 40, 40, 40, 112, 121, 121, 101, 97, 114, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 121, 101, 97, 114, 61, 37, 108, 100, 32, 105, 115, 32, 98, 101, 102, 111, 114, 101, 32, 49, 57, 48, 48, 59, 32, 116, 104, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 109, 101, 116, 104, 111, 100, 115, 32, 114, 101, 113, 117, 105, 114, 101, 32, 121, 101, 97, 114, 32, 62, 61, 32, 49, 57, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 32, 102, 111, 114, 109, 97, 116, 32, 101, 110, 100, 115, 32, 119, 105, 116, 104, 32, 114, 97, 119, 32, 37, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate(1, "i8", ALLOC_NORMAL);
    __str80 = allocate([ 122, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 116, 101, 109, 112, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 37, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 37, 37, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 116, 122, 110, 97, 109, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 41, 32, 100, 105, 100, 32, 110, 111, 116, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 90, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 102, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 55, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 112, 116, 111, 97, 112, 112, 101, 110, 100, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 117, 115, 101, 100, 110, 101, 119, 32, 60, 61, 32, 116, 111, 116, 97, 108, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 37, 48, 52, 100, 45, 37, 48, 50, 100, 45, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str96 = allocate([ 98, 117, 102, 102, 108, 101, 110, 32, 62, 61, 32, 120, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9722 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 95, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 37, 48, 50, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9746 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str98 = allocate([ 46, 37, 48, 54, 100, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 40, 40, 105, 105, 105, 105, 105, 105, 105, 105, 105, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 33, 32, 34, 111, 112, 32, 117, 110, 107, 110, 111, 119, 110, 34, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9835 = allocate([ 100, 105, 102, 102, 95, 116, 111, 95, 98, 111, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 37, 115, 32, 116, 111, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    _us_per_us = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_ms = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_second = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_minute = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_hour = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_day = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _us_per_week = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    _seconds_per_day = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str104 = allocate([ 48, 32, 60, 61, 32, 116, 101, 109, 112, 32, 38, 38, 32, 116, 101, 109, 112, 32, 60, 32, 49, 48, 48, 48, 48, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9958 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 95, 116, 111, 95, 100, 101, 108, 116, 97, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 80, 121, 69, 114, 114, 95, 79, 99, 99, 117, 114, 114, 101, 100, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 48, 32, 60, 61, 32, 116, 101, 109, 112, 32, 38, 38, 32, 116, 101, 109, 112, 32, 60, 32, 50, 52, 42, 51, 54, 48, 48, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 110, 111, 114, 109, 97, 108, 105, 122, 101, 100, 32, 100, 97, 121, 115, 32, 116, 111, 111, 32, 108, 97, 114, 103, 101, 32, 116, 111, 32, 102, 105, 116, 32, 105, 110, 32, 97, 32, 67, 32, 105, 110, 116, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 40, 40, 40, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 68, 101, 108, 116, 97, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10169 = allocate([ 100, 101, 108, 116, 97, 95, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 40, 40, 40, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 68, 101, 108, 116, 97, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 115, 101, 99, 111, 110, 100, 115, 41, 32, 62, 61, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 110, 117, 109, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10356 = allocate([ 97, 99, 99, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 40, 40, 40, 40, 102, 97, 99, 116, 111, 114, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 51, 41, 41, 41, 32, 33, 61, 32, 48, 41, 32, 124, 124, 32, 40, 40, 40, 40, 40, 40, 80, 121, 79, 98, 106, 101, 99, 116, 42, 41, 40, 102, 97, 99, 116, 111, 114, 41, 41, 45, 62, 111, 98, 95, 116, 121, 112, 101, 41, 41, 45, 62, 116, 112, 95, 102, 108, 97, 103, 115, 32, 38, 32, 40, 40, 49, 76, 60, 60, 50, 52, 41, 41, 41, 32, 33, 61, 32, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 116, 105, 109, 101, 100, 101, 108, 116, 97, 32, 37, 115, 32, 99, 111, 109, 112, 111, 110, 101, 110, 116, 58, 32, 37, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 124, 79, 79, 79, 79, 79, 79, 79, 58, 95, 95, 110, 101, 119, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _keywords_10491 = allocate(32, "i8*", ALLOC_NORMAL);
    __str114 = allocate([ 100, 97, 121, 115, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 109, 105, 108, 108, 105, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 109, 105, 110, 117, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 104, 111, 117, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 119, 101, 101, 107, 115, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 37, 115, 40, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 37, 100, 32, 100, 97, 121, 37, 115, 44, 32, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 37, 100, 58, 37, 48, 50, 100, 58, 37, 48, 50, 100, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 103, 111, 111, 102, 121, 32, 114, 101, 115, 117, 108, 116, 32, 102, 114, 111, 109, 32, 80, 121, 79, 83, 95, 115, 110, 112, 114, 105, 110, 116, 102, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 79, 78, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 100, 97, 121, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 40, 62, 61, 32, 48, 32, 97, 110, 100, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 49, 32, 100, 97, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 78, 117, 109, 98, 101, 114, 32, 111, 102, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 115, 32, 40, 62, 61, 32, 48, 32, 97, 110, 100, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 49, 32, 115, 101, 99, 111, 110, 100, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _delta_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str133 = allocate([ 116, 111, 116, 97, 108, 95, 115, 101, 99, 111, 110, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 84, 111, 116, 97, 108, 32, 115, 101, 99, 111, 110, 100, 115, 32, 105, 110, 32, 116, 104, 101, 32, 100, 117, 114, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 95, 95, 114, 101, 100, 117, 99, 101, 95, 95, 40, 41, 32, 45, 62, 32, 40, 99, 108, 115, 44, 32, 115, 116, 97, 116, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _delta_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _delta_doc = allocate([ 68, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 98, 101, 116, 119, 101, 101, 110, 32, 116, 119, 111, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _delta_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo**, %struct.PyDateTime_TZInfo**)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str137 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DeltaType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str138 = allocate([ 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 109, 111, 110, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    _date_getset = allocate(80, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _date_kws = allocate(16, "i8*", ALLOC_NORMAL);
    __str141 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 100, 58, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 105, 58, 102, 114, 111, 109, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 111, 114, 100, 105, 110, 97, 108, 32, 109, 117, 115, 116, 32, 98, 101, 32, 62, 61, 32, 49, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 115, 35, 58, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_11164 = allocate(8, "i8*", ALLOC_NORMAL);
    __str148 = allocate([ 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 79, 58, 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 32, 101, 120, 112, 101, 99, 116, 115, 32, 115, 116, 114, 32, 111, 114, 32, 117, 110, 105, 99, 111, 100, 101, 44, 32, 110, 111, 116, 32, 37, 46, 50, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 124, 105, 105, 105, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 40, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 40, 79, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 45, 62, 32, 108, 111, 99, 97, 108, 32, 100, 97, 116, 101, 32, 102, 114, 111, 109, 32, 97, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 102, 114, 111, 109, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 105, 110, 116, 32, 45, 62, 32, 100, 97, 116, 101, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 112, 114, 111, 108, 101, 112, 116, 105, 99, 32, 71, 114, 101, 103, 111, 114, 105, 97, 110, 32, 111, 114, 100, 105, 110, 97, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 116, 111, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 67, 117, 114, 114, 101, 110, 116, 32, 100, 97, 116, 101, 32, 111, 114, 32, 100, 97, 116, 101, 116, 105, 109, 101, 58, 32, 32, 115, 97, 109, 101, 32, 97, 115, 32, 115, 101, 108, 102, 46, 95, 95, 99, 108, 97, 115, 115, 95, 95, 46, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 40, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 82, 101, 116, 117, 114, 110, 32, 99, 116, 105, 109, 101, 40, 41, 32, 115, 116, 121, 108, 101, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 102, 111, 114, 109, 97, 116, 32, 45, 62, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 115, 116, 121, 108, 101, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 95, 95, 102, 111, 114, 109, 97, 116, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 70, 111, 114, 109, 97, 116, 115, 32, 115, 101, 108, 102, 32, 119, 105, 116, 104, 32, 115, 116, 114, 102, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 44, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 119, 105, 116, 104, 32, 116, 105, 109, 101, 46, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 105, 115, 111, 99, 97, 108, 101, 110, 100, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 51, 45, 116, 117, 112, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 105, 110, 103, 32, 73, 83, 79, 32, 121, 101, 97, 114, 44, 32, 119, 101, 101, 107, 32, 110, 117, 109, 98, 101, 114, 44, 32, 97, 110, 100, 32, 119, 101, 101, 107, 100, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 89, 89, 89, 89, 45, 77, 77, 45, 68, 68, 46, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 105, 115, 111, 119, 101, 101, 107, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 97, 121, 32, 111, 102, 32, 116, 104, 101, 32, 119, 101, 101, 107, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 97, 116, 101, 46, 10, 77, 111, 110, 100, 97, 121, 32, 61, 61, 32, 49, 32, 46, 46, 46, 32, 83, 117, 110, 100, 97, 121, 32, 61, 61, 32, 55, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 116, 111, 111, 114, 100, 105, 110, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 82, 101, 116, 117, 114, 110, 32, 112, 114, 111, 108, 101, 112, 116, 105, 99, 32, 71, 114, 101, 103, 111, 114, 105, 97, 110, 32, 111, 114, 100, 105, 110, 97, 108, 46, 32, 32, 74, 97, 110, 117, 97, 114, 121, 32, 49, 32, 111, 102, 32, 121, 101, 97, 114, 32, 49, 32, 105, 115, 32, 100, 97, 121, 32, 49, 46, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 119, 101, 101, 107, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 97, 121, 32, 111, 102, 32, 116, 104, 101, 32, 119, 101, 101, 107, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 100, 97, 116, 101, 46, 10, 77, 111, 110, 100, 97, 121, 32, 61, 61, 32, 48, 32, 46, 46, 46, 32, 83, 117, 110, 100, 97, 121, 32, 61, 61, 32, 54, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _date_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _date_doc = allocate([ 100, 97, 116, 101, 40, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 44, 32, 100, 97, 121, 41, 32, 45, 45, 62, 32, 100, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _date_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str176 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DateType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str177 = allocate([ 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 32, 109, 117, 115, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 32, 37, 115, 40, 41, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 100, 116, 46, 116, 122, 105, 110, 102, 111, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 108, 102, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 110, 111, 110, 45, 78, 111, 110, 101, 32, 117, 116, 99, 111, 102, 102, 115, 101, 116, 40, 41, 32, 114, 101, 115, 117, 108, 116, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 110, 111, 110, 45, 78, 111, 110, 101, 32, 100, 115, 116, 40, 41, 32, 114, 101, 115, 117, 108, 116, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 102, 114, 111, 109, 117, 116, 99, 58, 32, 116, 122, 46, 100, 115, 116, 40, 41, 32, 103, 97, 118, 101, 105, 110, 99, 111, 110, 115, 105, 115, 116, 101, 110, 116, 32, 114, 101, 115, 117, 108, 116, 115, 59, 32, 99, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 95, 95, 103, 101, 116, 105, 110, 105, 116, 97, 114, 103, 115, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 95, 95, 103, 101, 116, 115, 116, 97, 116, 101, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 40, 79, 78, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 109, 105, 110, 117, 116, 101, 115, 32, 101, 97, 115, 116, 32, 111, 102, 32, 85, 84, 67, 32, 40, 110, 101, 103, 97, 116, 105, 118, 101, 32, 102, 111, 114, 32, 119, 101, 115, 116, 32, 111, 102, 32, 85, 84, 67, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 45, 62, 32, 68, 83, 84, 32, 111, 102, 102, 115, 101, 116, 32, 105, 110, 32, 109, 105, 110, 117, 116, 101, 115, 32, 101, 97, 115, 116, 32, 111, 102, 32, 85, 84, 67, 46, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 102, 114, 111, 109, 117, 116, 99, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 32, 105, 110, 32, 85, 84, 67, 32, 45, 62, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 45, 62, 32, 40, 99, 108, 115, 44, 32, 115, 116, 97, 116, 101, 41, 0 ], "i8", ALLOC_NORMAL);
    _tzinfo_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _tzinfo_doc = allocate([ 65, 98, 115, 116, 114, 97, 99, 116, 32, 98, 97, 115, 101, 32, 99, 108, 97, 115, 115, 32, 102, 111, 114, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 105, 110, 102, 111, 32, 111, 98, 106, 101, 99, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 122, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_TZInfoType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str193 = allocate([ 104, 111, 117, 114, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 109, 105, 110, 117, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 115, 101, 99, 111, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _time_getset = allocate(120, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _time_kws = allocate(24, "i8*", ALLOC_NORMAL);
    __str197 = allocate([ 98, 97, 100, 32, 116, 122, 105, 110, 102, 111, 32, 115, 116, 97, 116, 101, 32, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 124, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 58, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12042 = allocate(8, "i8*", ALLOC_NORMAL);
    __str201 = allocate([ 105, 105, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 80, 121, 84, 117, 112, 108, 101, 95, 83, 105, 122, 101, 40, 116, 117, 112, 108, 101, 41, 32, 61, 61, 32, 57, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12043 = allocate([ 116, 105, 109, 101, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 110, 49, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 32, 38, 38, 32, 110, 50, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12084 = allocate([ 116, 105, 109, 101, 95, 114, 105, 99, 104, 99, 111, 109, 112, 97, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 111, 102, 102, 115, 101, 116, 49, 32, 33, 61, 32, 111, 102, 102, 115, 101, 116, 50, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 110, 49, 32, 33, 61, 32, 110, 50, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 110, 32, 33, 61, 32, 79, 70, 70, 83, 69, 84, 95, 85, 78, 75, 78, 79, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___12202 = allocate([ 116, 105, 109, 101, 95, 104, 97, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 110, 32, 61, 61, 32, 79, 70, 70, 83, 69, 84, 95, 65, 87, 65, 82, 69, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 40, 40, 40, 95, 80, 121, 68, 97, 116, 101, 84, 105, 109, 101, 95, 66, 97, 115, 101, 84, 90, 73, 110, 102, 111, 32, 42, 41, 40, 115, 101, 108, 102, 41, 41, 45, 62, 104, 97, 115, 116, 122, 105, 110, 102, 111, 41, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 124, 105, 105, 105, 105, 79, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 72, 72, 58, 77, 77, 58, 83, 83, 91, 46, 109, 109, 109, 109, 109, 109, 93, 91, 43, 72, 72, 58, 77, 77, 93, 46, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 117, 116, 99, 111, 102, 102, 115, 101, 116, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 116, 122, 110, 97, 109, 101, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 82, 101, 116, 117, 114, 110, 32, 115, 101, 108, 102, 46, 116, 122, 105, 110, 102, 111, 46, 100, 115, 116, 40, 115, 101, 108, 102, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _time_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _time_doc = allocate([ 116, 105, 109, 101, 40, 91, 104, 111, 117, 114, 91, 44, 32, 109, 105, 110, 117, 116, 101, 91, 44, 32, 115, 101, 99, 111, 110, 100, 91, 44, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 91, 44, 32, 116, 122, 105, 110, 102, 111, 93, 93, 93, 93, 93, 41, 32, 45, 45, 62, 32, 97, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 65, 108, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 46, 32, 116, 122, 105, 110, 102, 111, 32, 109, 97, 121, 32, 98, 101, 32, 78, 111, 110, 101, 44, 32, 111, 114, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 10, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 46, 32, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 97, 121, 32, 98, 101, 32, 105, 110, 116, 115, 32, 111, 114, 32, 108, 111, 110, 103, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _time_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str218 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_TimeType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_getset = allocate(120, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_kws = allocate(36, "i8*", ALLOC_NORMAL);
    __str219 = allocate([ 105, 105, 105, 124, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 105, 105, 105, 105, 105, 105, 105, 79, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 47, 103, 109, 116, 105, 109, 101, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 124, 79, 58, 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12654 = allocate(8, "i8*", ALLOC_NORMAL);
    __str223 = allocate([ 116, 122, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 100, 124, 79, 58, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12701 = allocate(12, "i8*", ALLOC_NORMAL);
    __str225 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 100, 58, 117, 116, 99, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 115, 115, 58, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _module_12751 = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str228 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str229 = allocate([ 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str230 = allocate([ 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 118, 97, 108, 117, 101, 32, 102, 114, 111, 109, 32, 95, 115, 116, 114, 112, 116, 105, 109, 101, 46, 95, 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str231 = allocate([ 79, 33, 79, 33, 58, 99, 111, 109, 98, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_12871 = allocate(12, "i8*", ALLOC_NORMAL);
    __str232 = allocate([ 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str233 = allocate([ 102, 97, 99, 116, 111, 114, 32, 61, 61, 32, 49, 32, 124, 124, 32, 102, 97, 99, 116, 111, 114, 32, 61, 61, 32, 45, 49, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13012 = allocate([ 97, 100, 100, 95, 100, 97, 116, 101, 116, 105, 109, 101, 95, 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13120 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str234 = allocate([ 99, 97, 110, 39, 116, 32, 115, 117, 98, 116, 114, 97, 99, 116, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str235 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str236 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str237 = allocate([ 37, 115, 40, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 44, 32, 37, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    __str238 = allocate([ 40, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    __str239 = allocate([ 32, 0 ], "i8", ALLOC_NORMAL);
    __str240 = allocate([ 124, 99, 58, 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_13363 = allocate(8, "i8*", ALLOC_NORMAL);
    __str241 = allocate([ 115, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str242 = allocate([ 99, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13367 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 105, 115, 111, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13435 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 114, 105, 99, 104, 99, 111, 109, 112, 97, 114, 101, 0 ], "i8", ALLOC_NORMAL);
    __str243 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 109, 112, 97, 114, 101, 32, 111, 102, 102, 115, 101, 116, 45, 110, 97, 105, 118, 101, 32, 97, 110, 100, 32, 111, 102, 102, 115, 101, 116, 45, 97, 119, 97, 114, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___13531 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 104, 97, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str244 = allocate([ 124, 105, 105, 105, 105, 105, 105, 105, 79, 58, 114, 101, 112, 108, 97, 99, 101, 0 ], "i8", ALLOC_NORMAL);
    __str245 = allocate([ 79, 33, 58, 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    _keywords_13698 = allocate(8, "i8*", ALLOC_NORMAL);
    __str246 = allocate([ 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 40, 41, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 97, 112, 112, 108, 105, 101, 100, 32, 116, 111, 32, 97, 32, 110, 97, 105, 118, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str247 = allocate([ 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str248 = allocate([ 91, 116, 122, 93, 32, 45, 62, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 116, 122, 39, 115, 32, 108, 111, 99, 97, 108, 32, 100, 97, 121, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str249 = allocate([ 117, 116, 99, 110, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    __str250 = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 85, 84, 67, 32, 100, 97, 121, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str251 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 91, 44, 32, 116, 122, 93, 32, 45, 62, 32, 116, 122, 39, 115, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 102, 114, 111, 109, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    __str252 = allocate([ 117, 116, 99, 102, 114, 111, 109, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0 ], "i8", ALLOC_NORMAL);
    __str253 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 45, 62, 32, 85, 84, 67, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 102, 114, 111, 109, 32, 97, 32, 80, 79, 83, 73, 88, 32, 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str254 = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str255 = allocate([ 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 114, 109, 97, 116, 32, 45, 62, 32, 110, 101, 119, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 112, 97, 114, 115, 101, 100, 32, 102, 114, 111, 109, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 40, 108, 105, 107, 101, 32, 116, 105, 109, 101, 46, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str256 = allocate([ 99, 111, 109, 98, 105, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str257 = allocate([ 100, 97, 116, 101, 44, 32, 116, 105, 109, 101, 32, 45, 62, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 100, 97, 116, 101, 32, 97, 110, 100, 32, 116, 105, 109, 101, 32, 102, 105, 101, 108, 100, 115, 0 ], "i8", ALLOC_NORMAL);
    __str258 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 32, 97, 110, 100, 32, 100, 97, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str259 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 116, 105, 109, 101, 32, 98, 117, 116, 32, 119, 105, 116, 104, 32, 116, 122, 105, 110, 102, 111, 61, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str260 = allocate([ 116, 105, 109, 101, 116, 122, 0 ], "i8", ALLOC_NORMAL);
    __str261 = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 32, 111, 98, 106, 101, 99, 116, 32, 119, 105, 116, 104, 32, 115, 97, 109, 101, 32, 116, 105, 109, 101, 32, 97, 110, 100, 32, 116, 122, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str262 = allocate([ 117, 116, 99, 116, 105, 109, 101, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str263 = allocate([ 82, 101, 116, 117, 114, 110, 32, 85, 84, 67, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 44, 32, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 32, 119, 105, 116, 104, 32, 116, 105, 109, 101, 46, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str264 = allocate([ 91, 115, 101, 112, 93, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 73, 83, 79, 32, 56, 54, 48, 49, 32, 102, 111, 114, 109, 97, 116, 44, 32, 89, 89, 89, 89, 45, 77, 77, 45, 68, 68, 84, 72, 72, 58, 77, 77, 58, 83, 83, 91, 46, 109, 109, 109, 109, 109, 109, 93, 91, 43, 72, 72, 58, 77, 77, 93, 46, 10, 10, 115, 101, 112, 32, 105, 115, 32, 117, 115, 101, 100, 32, 116, 111, 32, 115, 101, 112, 97, 114, 97, 116, 101, 32, 116, 104, 101, 32, 121, 101, 97, 114, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 116, 105, 109, 101, 44, 32, 97, 110, 100, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 39, 84, 39, 46, 0 ], "i8", ALLOC_NORMAL);
    __str265 = allocate([ 82, 101, 116, 117, 114, 110, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 119, 105, 116, 104, 32, 110, 101, 119, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 102, 105, 101, 108, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str266 = allocate([ 97, 115, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str267 = allocate([ 116, 122, 32, 45, 62, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 105, 110, 32, 110, 101, 119, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 116, 122, 10, 0 ], "i8", ALLOC_NORMAL);
    _datetime_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _datetime_doc = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 40, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 44, 32, 100, 97, 121, 91, 44, 32, 104, 111, 117, 114, 91, 44, 32, 109, 105, 110, 117, 116, 101, 91, 44, 32, 115, 101, 99, 111, 110, 100, 91, 44, 32, 109, 105, 99, 114, 111, 115, 101, 99, 111, 110, 100, 91, 44, 116, 122, 105, 110, 102, 111, 93, 93, 93, 93, 93, 41, 10, 10, 84, 104, 101, 32, 121, 101, 97, 114, 44, 32, 109, 111, 110, 116, 104, 32, 97, 110, 100, 32, 100, 97, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 114, 101, 113, 117, 105, 114, 101, 100, 46, 32, 116, 122, 105, 110, 102, 111, 32, 109, 97, 121, 32, 98, 101, 32, 78, 111, 110, 101, 44, 32, 111, 114, 32, 97, 110, 10, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 97, 32, 116, 122, 105, 110, 102, 111, 32, 115, 117, 98, 99, 108, 97, 115, 115, 46, 32, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 109, 97, 121, 32, 98, 101, 32, 105, 110, 116, 115, 32, 111, 114, 32, 108, 111, 110, 103, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _datetime_as_number = allocate(156, [ "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str268 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _PyDateTime_DateTimeType = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_methods = allocate(16, [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _CAPI = allocate(44, [ "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct.PyDateTime_TZInfo*, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (i32, i32, i32, i32, %struct._typeobject*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0 ], ALLOC_NORMAL);
    __str269 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str270 = allocate([ 70, 97, 115, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 111, 102, 32, 116, 104, 101, 32, 100, 97, 116, 101, 116, 105, 109, 101, 32, 116, 121, 112, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str271 = allocate([ 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str272 = allocate([ 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str273 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str274 = allocate([ 77, 73, 78, 89, 69, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str275 = allocate([ 77, 65, 88, 89, 69, 65, 82, 0 ], "i8", ALLOC_NORMAL);
    __str276 = allocate([ 116, 105, 109, 101, 100, 101, 108, 116, 97, 0 ], "i8", ALLOC_NORMAL);
    __str277 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 46, 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str278 = allocate([ 100, 97, 116, 101, 116, 105, 109, 101, 95, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str279 = allocate([ 49, 52, 54, 49, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 52, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___14028 = allocate([ 105, 110, 105, 116, 100, 97, 116, 101, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str280 = allocate([ 49, 52, 54, 48, 57, 55, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 52, 48, 48, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str281 = allocate([ 51, 54, 53, 50, 52, 32, 61, 61, 32, 100, 97, 121, 115, 95, 98, 101, 102, 111, 114, 101, 95, 121, 101, 97, 114, 40, 49, 48, 48, 43, 49, 41, 0 ], "i8", ALLOC_NORMAL);
    __str282 = allocate([ 116, 105, 109, 101, 115, 116, 97, 109, 112, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 32, 102, 111, 114, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 116, 105, 109, 101, 95, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_doc283 = allocate([ 116, 105, 109, 101, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 10, 70, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 97, 32, 115, 101, 99, 111, 110, 100, 32, 109, 97, 121, 32, 98, 101, 32, 112, 114, 101, 115, 101, 110, 116, 32, 105, 102, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 99, 108, 111, 99, 107, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 116, 104, 101, 109, 46, 0 ], "i8", ALLOC_NORMAL);
    _clock_doc = allocate([ 99, 108, 111, 99, 107, 40, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 111, 114, 32, 114, 101, 97, 108, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 115, 116, 97, 114, 116, 32, 111, 102, 32, 116, 104, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 111, 114, 32, 115, 105, 110, 99, 101, 10, 116, 104, 101, 32, 102, 105, 114, 115, 116, 32, 99, 97, 108, 108, 32, 116, 111, 32, 99, 108, 111, 99, 107, 40, 41, 46, 32, 32, 84, 104, 105, 115, 32, 104, 97, 115, 32, 97, 115, 32, 109, 117, 99, 104, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 32, 97, 115, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 10, 114, 101, 99, 111, 114, 100, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str1284 = allocate([ 100, 58, 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    _sleep_doc = allocate([ 115, 108, 101, 101, 112, 40, 115, 101, 99, 111, 110, 100, 115, 41, 10, 10, 68, 101, 108, 97, 121, 32, 101, 120, 101, 99, 117, 116, 105, 111, 110, 32, 102, 111, 114, 32, 97, 32, 103, 105, 118, 101, 110, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 46, 32, 32, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 97, 121, 32, 98, 101, 10, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 102, 111, 114, 32, 115, 117, 98, 115, 101, 99, 111, 110, 100, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str2285 = allocate([ 116, 109, 95, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str3286 = allocate([ 121, 101, 97, 114, 44, 32, 102, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 49, 57, 57, 51, 0 ], "i8", ALLOC_NORMAL);
    __str4287 = allocate([ 116, 109, 95, 109, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str5288 = allocate([ 109, 111, 110, 116, 104, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 49, 50, 93, 0 ], "i8", ALLOC_NORMAL);
    __str6289 = allocate([ 116, 109, 95, 109, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str7290 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 49, 93, 0 ], "i8", ALLOC_NORMAL);
    __str8291 = allocate([ 116, 109, 95, 104, 111, 117, 114, 0 ], "i8", ALLOC_NORMAL);
    __str9292 = allocate([ 104, 111, 117, 114, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 50, 51, 93, 0 ], "i8", ALLOC_NORMAL);
    __str10293 = allocate([ 116, 109, 95, 109, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str11294 = allocate([ 109, 105, 110, 117, 116, 101, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 53, 57, 93, 0 ], "i8", ALLOC_NORMAL);
    __str12295 = allocate([ 116, 109, 95, 115, 101, 99, 0 ], "i8", ALLOC_NORMAL);
    __str13296 = allocate([ 115, 101, 99, 111, 110, 100, 115, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 49, 93, 41, 0 ], "i8", ALLOC_NORMAL);
    __str14297 = allocate([ 116, 109, 95, 119, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str15298 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 44, 32, 114, 97, 110, 103, 101, 32, 91, 48, 44, 32, 54, 93, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str16299 = allocate([ 116, 109, 95, 121, 100, 97, 121, 0 ], "i8", ALLOC_NORMAL);
    __str17300 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 44, 32, 114, 97, 110, 103, 101, 32, 91, 49, 44, 32, 51, 54, 54, 93, 0 ], "i8", ALLOC_NORMAL);
    __str18301 = allocate([ 116, 109, 95, 105, 115, 100, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str19302 = allocate([ 49, 32, 105, 102, 32, 115, 117, 109, 109, 101, 114, 32, 116, 105, 109, 101, 32, 105, 115, 32, 105, 110, 32, 101, 102, 102, 101, 99, 116, 44, 32, 48, 32, 105, 102, 32, 110, 111, 116, 44, 32, 97, 110, 100, 32, 45, 49, 32, 105, 102, 32, 117, 110, 107, 110, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    _struct_time_type_fields = allocate(80, [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _struct_time_type_desc = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyStructSequence_Field*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str20303 = allocate([ 116, 105, 109, 101, 46, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str21304 = allocate([ 84, 104, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 103, 109, 116, 105, 109, 101, 40, 41, 44, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 32, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 44, 32, 97, 110, 100, 10, 32, 97, 99, 99, 101, 112, 116, 101, 100, 32, 98, 121, 32, 97, 115, 99, 116, 105, 109, 101, 40, 41, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 97, 110, 100, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 46, 32, 32, 77, 97, 121, 32, 98, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 32, 97, 115, 32, 97, 10, 32, 115, 101, 113, 117, 101, 110, 99, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 46, 10, 10, 32, 78, 111, 116, 101, 32, 116, 104, 97, 116, 32, 115, 101, 118, 101, 114, 97, 108, 32, 102, 105, 101, 108, 100, 115, 39, 32, 118, 97, 108, 117, 101, 115, 32, 97, 114, 101, 32, 110, 111, 116, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 116, 104, 111, 115, 101, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 10, 32, 116, 104, 101, 32, 67, 32, 108, 97, 110, 103, 117, 97, 103, 101, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 102, 111, 114, 32, 115, 116, 114, 117, 99, 116, 32, 116, 109, 46, 32, 32, 70, 111, 114, 32, 101, 120, 97, 109, 112, 108, 101, 44, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 10, 32, 102, 105, 101, 108, 100, 32, 116, 109, 95, 121, 101, 97, 114, 32, 105, 115, 32, 116, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 121, 101, 97, 114, 44, 32, 110, 111, 116, 32, 121, 101, 97, 114, 32, 45, 32, 49, 57, 48, 48, 46, 32, 32, 83, 101, 101, 32, 105, 110, 100, 105, 118, 105, 100, 117, 97, 108, 10, 32, 102, 105, 101, 108, 100, 115, 39, 32, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 100, 101, 116, 97, 105, 108, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _StructTimeType = allocate(196, [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i8*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, i32 (%struct.PyDateTime_TZInfo*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct._typeobject*, %struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i32 (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "%struct.PyDateTime_TZInfo*", 0, 0, 0, "void (%struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str22305 = allocate([ 124, 79, 58, 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _gmtime_doc = allocate([ 103, 109, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 32, 116, 109, 95, 109, 111, 110, 44, 32, 116, 109, 95, 109, 100, 97, 121, 44, 32, 116, 109, 95, 104, 111, 117, 114, 44, 32, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 32, 116, 109, 95, 119, 100, 97, 121, 44, 32, 116, 109, 95, 121, 100, 97, 121, 44, 32, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 10, 71, 77, 84, 41, 46, 32, 32, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23306 = allocate([ 124, 79, 58, 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _localtime_doc = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 91, 115, 101, 99, 111, 110, 100, 115, 93, 41, 32, 45, 62, 32, 40, 116, 109, 95, 121, 101, 97, 114, 44, 116, 109, 95, 109, 111, 110, 44, 116, 109, 95, 109, 100, 97, 121, 44, 116, 109, 95, 104, 111, 117, 114, 44, 116, 109, 95, 109, 105, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 109, 95, 115, 101, 99, 44, 116, 109, 95, 119, 100, 97, 121, 44, 116, 109, 95, 121, 100, 97, 121, 44, 116, 109, 95, 105, 115, 100, 115, 116, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 101, 120, 112, 114, 101, 115, 115, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 87, 104, 101, 110, 32, 39, 115, 101, 99, 111, 110, 100, 115, 39, 32, 105, 115, 32, 110, 111, 116, 32, 112, 97, 115, 115, 101, 100, 32, 105, 110, 44, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 115, 116, 101, 97, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24307 = allocate([ 40, 105, 105, 105, 105, 105, 105, 105, 105, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _moddict = allocate(1, "%struct.PyDateTime_TZInfo*", ALLOC_NORMAL);
    __str25308 = allocate([ 97, 99, 99, 101, 112, 116, 50, 100, 121, 101, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str26309 = allocate([ 121, 101, 97, 114, 32, 62, 61, 32, 49, 57, 48, 48, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str27310 = allocate([ 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str28311 = allocate([ 115, 124, 79, 58, 115, 116, 114, 102, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str29312 = allocate([ 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str30313 = allocate([ 100, 97, 121, 32, 111, 102, 32, 109, 111, 110, 116, 104, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str31314 = allocate([ 104, 111, 117, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str32315 = allocate([ 109, 105, 110, 117, 116, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str33316 = allocate([ 115, 101, 99, 111, 110, 100, 115, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str34317 = allocate([ 100, 97, 121, 32, 111, 102, 32, 119, 101, 101, 107, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    __str35318 = allocate([ 100, 97, 121, 32, 111, 102, 32, 121, 101, 97, 114, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _strftime_doc = allocate([ 115, 116, 114, 102, 116, 105, 109, 101, 40, 102, 111, 114, 109, 97, 116, 91, 44, 32, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str37320 = allocate([ 95, 115, 116, 114, 112, 116, 105, 109, 101, 95, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _strptime_doc = allocate([ 115, 116, 114, 112, 116, 105, 109, 101, 40, 115, 116, 114, 105, 110, 103, 44, 32, 102, 111, 114, 109, 97, 116, 41, 32, 45, 62, 32, 115, 116, 114, 117, 99, 116, 95, 116, 105, 109, 101, 10, 10, 80, 97, 114, 115, 101, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 97, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 46, 10, 83, 101, 101, 32, 116, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 114, 101, 102, 101, 114, 101, 110, 99, 101, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 102, 111, 114, 109, 97, 116, 116, 105, 110, 103, 32, 99, 111, 100, 101, 115, 32, 40, 115, 97, 109, 101, 32, 97, 115, 32, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39322 = allocate([ 97, 115, 99, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str40323 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _asctime_doc = allocate([ 97, 115, 99, 116, 105, 109, 101, 40, 91, 116, 117, 112, 108, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 44, 32, 101, 46, 103, 46, 32, 39, 83, 97, 116, 32, 74, 117, 110, 32, 48, 54, 32, 49, 54, 58, 50, 54, 58, 49, 49, 32, 49, 57, 57, 56, 39, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 10, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str42325 = allocate([ 117, 110, 99, 111, 110, 118, 101, 114, 116, 105, 98, 108, 101, 32, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _ctime_doc = allocate([ 99, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 97, 115, 99, 116, 105, 109, 101, 40, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 115, 101, 99, 111, 110, 100, 115, 41, 41, 46, 32, 87, 104, 101, 110, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 115, 10, 110, 111, 116, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 97, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 105, 115, 32, 117, 115, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str43326 = allocate([ 109, 107, 116, 105, 109, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _mktime_doc = allocate([ 109, 107, 116, 105, 109, 101, 40, 116, 117, 112, 108, 101, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 105, 110, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    _tzset_doc = allocate([ 116, 122, 115, 101, 116, 40, 41, 10, 10, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 111, 114, 32, 114, 101, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 116, 111, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 115, 116, 111, 114, 101, 100, 32, 105, 110, 10, 111, 115, 46, 101, 110, 118, 105, 114, 111, 110, 91, 39, 84, 90, 39, 93, 46, 32, 84, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 110, 10, 115, 116, 97, 110, 100, 97, 114, 100, 32, 85, 110, 105, 120, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 102, 111, 114, 109, 97, 116, 32, 97, 115, 32, 100, 111, 99, 117, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 116, 122, 115, 101, 116, 32, 109, 97, 110, 32, 112, 97, 103, 101, 10, 40, 101, 103, 46, 32, 39, 85, 83, 47, 69, 97, 115, 116, 101, 114, 110, 39, 44, 32, 39, 69, 117, 114, 111, 112, 101, 47, 65, 109, 115, 116, 101, 114, 100, 97, 109, 39, 41, 46, 32, 85, 110, 107, 110, 111, 119, 110, 32, 116, 105, 109, 101, 122, 111, 110, 101, 115, 32, 119, 105, 108, 108, 32, 115, 105, 108, 101, 110, 116, 108, 121, 10, 102, 97, 108, 108, 32, 98, 97, 99, 107, 32, 116, 111, 32, 85, 84, 67, 46, 32, 73, 102, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 105, 115, 32, 110, 111, 116, 32, 115, 101, 116, 44, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 115, 32, 98, 101, 115, 116, 32, 103, 117, 101, 115, 115, 32, 111, 102, 32, 119, 97, 108, 108, 99, 108, 111, 99, 107, 32, 116, 105, 109, 101, 46, 10, 67, 104, 97, 110, 103, 105, 110, 103, 32, 116, 104, 101, 32, 84, 90, 32, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 32, 118, 97, 114, 105, 97, 98, 108, 101, 32, 119, 105, 116, 104, 111, 117, 116, 32, 99, 97, 108, 108, 105, 110, 103, 32, 116, 122, 115, 101, 116, 32, 42, 109, 97, 121, 42, 32, 99, 104, 97, 110, 103, 101, 10, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 32, 117, 115, 101, 100, 32, 98, 121, 32, 109, 101, 116, 104, 111, 100, 115, 32, 115, 117, 99, 104, 32, 97, 115, 32, 108, 111, 99, 97, 108, 116, 105, 109, 101, 44, 32, 98, 117, 116, 32, 116, 104, 105, 115, 32, 98, 101, 104, 97, 118, 105, 111, 117, 114, 10, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 114, 101, 108, 105, 101, 100, 32, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str45328 = allocate([ 32, 32, 32, 0 ], "i8", ALLOC_NORMAL);
    __str46329 = allocate([ 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str47330 = allocate([ 97, 108, 116, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str48331 = allocate([ 100, 97, 121, 108, 105, 103, 104, 116, 0 ], "i8", ALLOC_NORMAL);
    __str49332 = allocate([ 40, 122, 122, 41, 0 ], "i8", ALLOC_NORMAL);
    __str51334 = allocate([ 99, 108, 111, 99, 107, 0 ], "i8", ALLOC_NORMAL);
    __str52335 = allocate([ 115, 108, 101, 101, 112, 0 ], "i8", ALLOC_NORMAL);
    __str53336 = allocate([ 103, 109, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str54337 = allocate([ 108, 111, 99, 97, 108, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str55338 = allocate([ 109, 107, 116, 105, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str58341 = allocate([ 116, 122, 115, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _time_methods342 = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyDateTime_TZInfo* (%struct.PyDateTime_TZInfo*, %struct.PyDateTime_TZInfo*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 118, 97, 114, 105, 111, 117, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 116, 111, 32, 109, 97, 110, 105, 112, 117, 108, 97, 116, 101, 32, 116, 105, 109, 101, 32, 118, 97, 108, 117, 101, 115, 46, 10, 10, 84, 104, 101, 114, 101, 32, 97, 114, 101, 32, 116, 119, 111, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 115, 32, 111, 102, 32, 116, 105, 109, 101, 46, 32, 32, 79, 110, 101, 32, 105, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 10, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 44, 32, 105, 110, 32, 85, 84, 67, 32, 40, 97, 46, 107, 46, 97, 46, 32, 71, 77, 84, 41, 46, 32, 32, 73, 116, 32, 109, 97, 121, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 10, 111, 114, 32, 97, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 110, 117, 109, 98, 101, 114, 32, 40, 116, 111, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 32, 102, 114, 97, 99, 116, 105, 111, 110, 115, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 41, 46, 10, 84, 104, 101, 32, 69, 112, 111, 99, 104, 32, 105, 115, 32, 115, 121, 115, 116, 101, 109, 45, 100, 101, 102, 105, 110, 101, 100, 59, 32, 111, 110, 32, 85, 110, 105, 120, 44, 32, 105, 116, 32, 105, 115, 32, 103, 101, 110, 101, 114, 97, 108, 108, 121, 32, 74, 97, 110, 117, 97, 114, 121, 32, 49, 115, 116, 44, 32, 49, 57, 55, 48, 46, 10, 84, 104, 101, 32, 97, 99, 116, 117, 97, 108, 32, 118, 97, 108, 117, 101, 32, 99, 97, 110, 32, 98, 101, 32, 114, 101, 116, 114, 105, 101, 118, 101, 100, 32, 98, 121, 32, 99, 97, 108, 108, 105, 110, 103, 32, 103, 109, 116, 105, 109, 101, 40, 48, 41, 46, 10, 10, 84, 104, 101, 32, 111, 116, 104, 101, 114, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 57, 32, 105, 110, 116, 101, 103, 101, 114, 115, 32, 103, 105, 118, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 46, 10, 84, 104, 101, 32, 116, 117, 112, 108, 101, 32, 105, 116, 101, 109, 115, 32, 97, 114, 101, 58, 10, 32, 32, 121, 101, 97, 114, 32, 40, 102, 111, 117, 114, 32, 100, 105, 103, 105, 116, 115, 44, 32, 101, 46, 103, 46, 32, 49, 57, 57, 56, 41, 10, 32, 32, 109, 111, 110, 116, 104, 32, 40, 49, 45, 49, 50, 41, 10, 32, 32, 100, 97, 121, 32, 40, 49, 45, 51, 49, 41, 10, 32, 32, 104, 111, 117, 114, 115, 32, 40, 48, 45, 50, 51, 41, 10, 32, 32, 109, 105, 110, 117, 116, 101, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 40, 48, 45, 53, 57, 41, 10, 32, 32, 119, 101, 101, 107, 100, 97, 121, 32, 40, 48, 45, 54, 44, 32, 77, 111, 110, 100, 97, 121, 32, 105, 115, 32, 48, 41, 10, 32, 32, 74, 117, 108, 105, 97, 110, 32, 100, 97, 121, 32, 40, 100, 97, 121, 32, 105, 110, 32, 116, 104, 101, 32, 121, 101, 97, 114, 44, 32, 49, 45, 51, 54, 54, 41, 10, 32, 32, 68, 83, 84, 32, 40, 68, 97, 121, 108, 105, 103, 104, 116, 32, 83, 97, 118, 105, 110, 103, 115, 32, 84, 105, 109, 101, 41, 32, 102, 108, 97, 103, 32, 40, 45, 49, 44, 32, 48, 32, 111, 114, 32, 49, 41, 10, 73, 102, 32, 116, 104, 101, 32, 68, 83, 84, 32, 102, 108, 97, 103, 32, 105, 115, 32, 48, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 114, 101, 103, 117, 108, 97, 114, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 49, 44, 32, 116, 104, 101, 32, 116, 105, 109, 101, 32, 105, 115, 32, 103, 105, 118, 101, 110, 32, 105, 110, 32, 116, 104, 101, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 59, 10, 105, 102, 32, 105, 116, 32, 105, 115, 32, 45, 49, 44, 32, 109, 107, 116, 105, 109, 101, 40, 41, 32, 115, 104, 111, 117, 108, 100, 32, 103, 117, 101, 115, 115, 32, 98, 97, 115, 101, 100, 32, 111, 110, 32, 116, 104, 101, 32, 100, 97, 116, 101, 32, 97, 110, 100, 32, 116, 105, 109, 101, 46, 10, 10, 86, 97, 114, 105, 97, 98, 108, 101, 115, 58, 10, 10, 116, 105, 109, 101, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 10, 97, 108, 116, 122, 111, 110, 101, 32, 45, 45, 32, 100, 105, 102, 102, 101, 114, 101, 110, 99, 101, 32, 105, 110, 32, 32, 115, 101, 99, 111, 110, 100, 115, 32, 98, 101, 116, 119, 101, 101, 110, 32, 85, 84, 67, 32, 97, 110, 100, 32, 108, 111, 99, 97, 108, 32, 68, 83, 84, 32, 116, 105, 109, 101, 10, 100, 97, 121, 108, 105, 103, 104, 116, 32, 45, 45, 32, 119, 104, 101, 116, 104, 101, 114, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 115, 104, 111, 117, 108, 100, 32, 114, 101, 102, 108, 101, 99, 116, 32, 68, 83, 84, 10, 116, 122, 110, 97, 109, 101, 32, 45, 45, 32, 116, 117, 112, 108, 101, 32, 111, 102, 32, 40, 115, 116, 97, 110, 100, 97, 114, 100, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 44, 32, 68, 83, 84, 32, 116, 105, 109, 101, 32, 122, 111, 110, 101, 32, 110, 97, 109, 101, 41, 10, 10, 70, 117, 110, 99, 116, 105, 111, 110, 115, 58, 10, 10, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 99, 117, 114, 114, 101, 110, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 116, 104, 101, 32, 69, 112, 111, 99, 104, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 99, 108, 111, 99, 107, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 67, 80, 85, 32, 116, 105, 109, 101, 32, 115, 105, 110, 99, 101, 32, 112, 114, 111, 99, 101, 115, 115, 32, 115, 116, 97, 114, 116, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 115, 108, 101, 101, 112, 40, 41, 32, 45, 45, 32, 100, 101, 108, 97, 121, 32, 102, 111, 114, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 115, 101, 99, 111, 110, 100, 115, 32, 103, 105, 118, 101, 110, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 10, 103, 109, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 85, 84, 67, 32, 116, 117, 112, 108, 101, 10, 108, 111, 99, 97, 108, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 10, 97, 115, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 99, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 10, 109, 107, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 101, 99, 111, 110, 100, 115, 32, 115, 105, 110, 99, 101, 32, 69, 112, 111, 99, 104, 10, 115, 116, 114, 102, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 99, 111, 110, 118, 101, 114, 116, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 115, 116, 114, 112, 116, 105, 109, 101, 40, 41, 32, 45, 45, 32, 112, 97, 114, 115, 101, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 105, 109, 101, 32, 116, 117, 112, 108, 101, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 102, 111, 114, 109, 97, 116, 32, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 10, 116, 122, 115, 101, 116, 40, 41, 32, 45, 45, 32, 99, 104, 97, 110, 103, 101, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 116, 105, 109, 101, 122, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str59343 = allocate([ 80, 89, 84, 72, 79, 78, 89, 50, 75, 0 ], "i8", ALLOC_NORMAL);
    _initialized_b = allocate(1, "i1", ALLOC_NORMAL);
    HEAP[_MonthNames_9355] = __str52;
    HEAP[_MonthNames_9355 + 4] = __str53;
    HEAP[_MonthNames_9355 + 8] = __str54;
    HEAP[_MonthNames_9355 + 12] = __str55;
    HEAP[_MonthNames_9355 + 16] = __str56;
    HEAP[_MonthNames_9355 + 20] = __str57;
    HEAP[_MonthNames_9355 + 24] = __str58;
    HEAP[_MonthNames_9355 + 28] = __str59;
    HEAP[_MonthNames_9355 + 32] = __str60;
    HEAP[_MonthNames_9355 + 36] = __str61;
    HEAP[_MonthNames_9355 + 40] = __str62;
    HEAP[_MonthNames_9355 + 44] = __str63;
    HEAP[_DayNames_9354] = __str64;
    HEAP[_DayNames_9354 + 4] = __str65;
    HEAP[_DayNames_9354 + 8] = __str66;
    HEAP[_DayNames_9354 + 12] = __str67;
    HEAP[_DayNames_9354 + 16] = __str68;
    HEAP[_DayNames_9354 + 20] = __str69;
    HEAP[_DayNames_9354 + 24] = __str70;
    HEAP[_keywords_10491] = __str114;
    HEAP[_keywords_10491 + 4] = __str115;
    HEAP[_keywords_10491 + 8] = __str116;
    HEAP[_keywords_10491 + 12] = __str117;
    HEAP[_keywords_10491 + 16] = __str118;
    HEAP[_keywords_10491 + 20] = __str119;
    HEAP[_keywords_10491 + 24] = __str120;
    HEAP[_delta_members] = __str114;
    HEAP[_delta_members + 16] = __str130;
    HEAP[_delta_members + 20] = __str115;
    HEAP[_delta_members + 36] = __str131;
    HEAP[_delta_members + 40] = __str116;
    HEAP[_delta_members + 56] = __str132;
    HEAP[_delta_methods] = __str133;
    HEAP[_delta_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_delta_methods + 12] = __str134;
    HEAP[_delta_methods + 16] = __str135;
    HEAP[_delta_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_delta_methods + 28] = __str136;
    HEAP[_delta_as_number] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_delta_as_number + 4] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_delta_as_number + 8] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_delta_as_number + 12] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_delta_as_number + 28] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_delta_as_number + 32] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_delta_as_number + 36] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_delta_as_number + 40] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_delta_as_number + 136] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_PyDateTime_DeltaType + 12] = __str137;
    HEAP[_PyDateTime_DeltaType + 44] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_PyDateTime_DeltaType + 48] = _delta_as_number;
    HEAP[_PyDateTime_DeltaType + 60] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_PyDateTime_DeltaType + 68] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_PyDateTime_DeltaType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DeltaType + 88] = _delta_doc;
    HEAP[_PyDateTime_DeltaType + 100] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_PyDateTime_DeltaType + 116] = _delta_methods;
    HEAP[_PyDateTime_DeltaType + 120] = _delta_members;
    HEAP[_PyDateTime_DeltaType + 156] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_date_getset] = __str138;
    HEAP[_date_getset + 4] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_date_getset + 20] = __str139;
    HEAP[_date_getset + 24] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_date_getset + 40] = __str140;
    HEAP[_date_getset + 44] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_date_kws] = __str138;
    HEAP[_date_kws + 4] = __str139;
    HEAP[_date_kws + 8] = __str140;
    HEAP[_keywords_11164] = __str148;
    HEAP[_date_methods] = __str142;
    HEAP[_date_methods + 4] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_date_methods + 12] = __str155;
    HEAP[_date_methods + 16] = __str156;
    HEAP[_date_methods + 20] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_date_methods + 28] = __str157;
    HEAP[_date_methods + 32] = __str158;
    HEAP[_date_methods + 36] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_date_methods + 44] = __str159;
    HEAP[_date_methods + 48] = __str160;
    HEAP[_date_methods + 52] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_date_methods + 60] = __str161;
    HEAP[_date_methods + 64] = __str93;
    HEAP[_date_methods + 68] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_date_methods + 76] = __str162;
    HEAP[_date_methods + 80] = __str163;
    HEAP[_date_methods + 84] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_date_methods + 92] = __str164;
    HEAP[_date_methods + 96] = __str149;
    HEAP[_date_methods + 100] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_date_methods + 108] = __str165;
    HEAP[_date_methods + 112] = __str166;
    HEAP[_date_methods + 116] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_date_methods + 124] = __str167;
    HEAP[_date_methods + 128] = __str146;
    HEAP[_date_methods + 132] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_date_methods + 140] = __str168;
    HEAP[_date_methods + 144] = __str169;
    HEAP[_date_methods + 148] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_date_methods + 156] = __str170;
    HEAP[_date_methods + 160] = __str171;
    HEAP[_date_methods + 164] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_date_methods + 172] = __str172;
    HEAP[_date_methods + 176] = __str173;
    HEAP[_date_methods + 180] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_date_methods + 188] = __str174;
    HEAP[_date_methods + 192] = __str82;
    HEAP[_date_methods + 196] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_date_methods + 204] = __str175;
    HEAP[_date_methods + 208] = __str135;
    HEAP[_date_methods + 212] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_date_methods + 220] = __str136;
    HEAP[_date_as_number] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_date_as_number + 4] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_PyDateTime_DateType + 12] = __str176;
    HEAP[_PyDateTime_DateType + 44] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_PyDateTime_DateType + 48] = _date_as_number;
    HEAP[_PyDateTime_DateType + 60] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_PyDateTime_DateType + 68] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_PyDateTime_DateType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DateType + 88] = _date_doc;
    HEAP[_PyDateTime_DateType + 100] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_PyDateTime_DateType + 116] = _date_methods;
    HEAP[_PyDateTime_DateType + 124] = _date_getset;
    HEAP[_PyDateTime_DateType + 156] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_tzinfo_methods] = __str45;
    HEAP[_tzinfo_methods + 4] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_tzinfo_methods + 12] = __str186;
    HEAP[_tzinfo_methods + 16] = __str42;
    HEAP[_tzinfo_methods + 20] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_tzinfo_methods + 28] = __str187;
    HEAP[_tzinfo_methods + 32] = __str44;
    HEAP[_tzinfo_methods + 36] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_tzinfo_methods + 44] = __str188;
    HEAP[_tzinfo_methods + 48] = __str189;
    HEAP[_tzinfo_methods + 52] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_tzinfo_methods + 60] = __str190;
    HEAP[_tzinfo_methods + 64] = __str135;
    HEAP[_tzinfo_methods + 68] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_tzinfo_methods + 76] = __str191;
    HEAP[_PyDateTime_TZInfoType + 12] = __str192;
    HEAP[_PyDateTime_TZInfoType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_TZInfoType + 88] = _tzinfo_doc;
    HEAP[_PyDateTime_TZInfoType + 116] = _tzinfo_methods;
    HEAP[_PyDateTime_TZInfoType + 156] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_time_getset] = __str193;
    HEAP[_time_getset + 4] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_time_getset + 20] = __str194;
    HEAP[_time_getset + 24] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_time_getset + 40] = __str195;
    HEAP[_time_getset + 44] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_time_getset + 60] = __str196;
    HEAP[_time_getset + 64] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_time_getset + 80] = __str48;
    HEAP[_time_getset + 84] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_time_kws] = __str193;
    HEAP[_time_kws + 4] = __str194;
    HEAP[_time_kws + 8] = __str195;
    HEAP[_time_kws + 12] = __str196;
    HEAP[_time_kws + 16] = __str48;
    HEAP[_keywords_12042] = __str148;
    HEAP[_time_methods] = __str146;
    HEAP[_time_methods + 4] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_time_methods + 12] = __str213;
    HEAP[_time_methods + 16] = __str93;
    HEAP[_time_methods + 20] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_time_methods + 28] = __str162;
    HEAP[_time_methods + 32] = __str163;
    HEAP[_time_methods + 36] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_time_methods + 44] = __str164;
    HEAP[_time_methods + 48] = __str42;
    HEAP[_time_methods + 52] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_time_methods + 60] = __str214;
    HEAP[_time_methods + 64] = __str45;
    HEAP[_time_methods + 68] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_time_methods + 76] = __str215;
    HEAP[_time_methods + 80] = __str44;
    HEAP[_time_methods + 84] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_time_methods + 92] = __str216;
    HEAP[_time_methods + 96] = __str82;
    HEAP[_time_methods + 100] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_time_methods + 108] = __str217;
    HEAP[_time_methods + 112] = __str135;
    HEAP[_time_methods + 116] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_time_methods + 124] = __str136;
    HEAP[_time_as_number + 40] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_PyDateTime_TimeType + 12] = __str218;
    HEAP[_PyDateTime_TimeType + 24] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_PyDateTime_TimeType + 44] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_PyDateTime_TimeType + 48] = _time_as_number;
    HEAP[_PyDateTime_TimeType + 60] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_PyDateTime_TimeType + 68] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_PyDateTime_TimeType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_TimeType + 88] = _time_doc;
    HEAP[_PyDateTime_TimeType + 100] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_PyDateTime_TimeType + 116] = _time_methods;
    HEAP[_PyDateTime_TimeType + 124] = _time_getset;
    HEAP[_PyDateTime_TimeType + 152] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_PyDateTime_TimeType + 156] = FUNCTION_TABLE_OFFSET + 136;
    HEAP[_datetime_getset] = __str193;
    HEAP[_datetime_getset + 4] = FUNCTION_TABLE_OFFSET + 138;
    HEAP[_datetime_getset + 20] = __str194;
    HEAP[_datetime_getset + 24] = FUNCTION_TABLE_OFFSET + 140;
    HEAP[_datetime_getset + 40] = __str195;
    HEAP[_datetime_getset + 44] = FUNCTION_TABLE_OFFSET + 142;
    HEAP[_datetime_getset + 60] = __str196;
    HEAP[_datetime_getset + 64] = FUNCTION_TABLE_OFFSET + 144;
    HEAP[_datetime_getset + 80] = __str48;
    HEAP[_datetime_getset + 84] = FUNCTION_TABLE_OFFSET + 146;
    HEAP[_datetime_kws] = __str138;
    HEAP[_datetime_kws + 4] = __str139;
    HEAP[_datetime_kws + 8] = __str140;
    HEAP[_datetime_kws + 12] = __str193;
    HEAP[_datetime_kws + 16] = __str194;
    HEAP[_datetime_kws + 20] = __str195;
    HEAP[_datetime_kws + 24] = __str196;
    HEAP[_datetime_kws + 28] = __str48;
    HEAP[_keywords_12654] = __str223;
    HEAP[_keywords_12701] = __str225;
    HEAP[_keywords_12701 + 4] = __str223;
    HEAP[_keywords_12871] = __str232;
    HEAP[_keywords_12871 + 4] = __str92;
    HEAP[_keywords_13363] = __str241;
    HEAP[_keywords_13698] = __str223;
    HEAP[_datetime_methods] = __str247;
    HEAP[_datetime_methods + 4] = FUNCTION_TABLE_OFFSET + 148;
    HEAP[_datetime_methods + 12] = __str248;
    HEAP[_datetime_methods + 16] = __str249;
    HEAP[_datetime_methods + 20] = FUNCTION_TABLE_OFFSET + 150;
    HEAP[_datetime_methods + 28] = __str250;
    HEAP[_datetime_methods + 32] = __str142;
    HEAP[_datetime_methods + 36] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_datetime_methods + 44] = __str251;
    HEAP[_datetime_methods + 48] = __str252;
    HEAP[_datetime_methods + 52] = FUNCTION_TABLE_OFFSET + 154;
    HEAP[_datetime_methods + 60] = __str253;
    HEAP[_datetime_methods + 64] = __str254;
    HEAP[_datetime_methods + 68] = FUNCTION_TABLE_OFFSET + 156;
    HEAP[_datetime_methods + 76] = __str255;
    HEAP[_datetime_methods + 80] = __str256;
    HEAP[_datetime_methods + 84] = FUNCTION_TABLE_OFFSET + 158;
    HEAP[_datetime_methods + 92] = __str257;
    HEAP[_datetime_methods + 96] = __str232;
    HEAP[_datetime_methods + 100] = FUNCTION_TABLE_OFFSET + 160;
    HEAP[_datetime_methods + 108] = __str258;
    HEAP[_datetime_methods + 112] = __str92;
    HEAP[_datetime_methods + 116] = FUNCTION_TABLE_OFFSET + 162;
    HEAP[_datetime_methods + 124] = __str259;
    HEAP[_datetime_methods + 128] = __str260;
    HEAP[_datetime_methods + 132] = FUNCTION_TABLE_OFFSET + 164;
    HEAP[_datetime_methods + 140] = __str261;
    HEAP[_datetime_methods + 144] = __str160;
    HEAP[_datetime_methods + 148] = FUNCTION_TABLE_OFFSET + 166;
    HEAP[_datetime_methods + 156] = __str161;
    HEAP[_datetime_methods + 160] = __str149;
    HEAP[_datetime_methods + 164] = FUNCTION_TABLE_OFFSET + 168;
    HEAP[_datetime_methods + 172] = __str165;
    HEAP[_datetime_methods + 176] = __str262;
    HEAP[_datetime_methods + 180] = FUNCTION_TABLE_OFFSET + 170;
    HEAP[_datetime_methods + 188] = __str263;
    HEAP[_datetime_methods + 192] = __str146;
    HEAP[_datetime_methods + 196] = FUNCTION_TABLE_OFFSET + 172;
    HEAP[_datetime_methods + 204] = __str264;
    HEAP[_datetime_methods + 208] = __str42;
    HEAP[_datetime_methods + 212] = FUNCTION_TABLE_OFFSET + 174;
    HEAP[_datetime_methods + 220] = __str214;
    HEAP[_datetime_methods + 224] = __str45;
    HEAP[_datetime_methods + 228] = FUNCTION_TABLE_OFFSET + 176;
    HEAP[_datetime_methods + 236] = __str215;
    HEAP[_datetime_methods + 240] = __str44;
    HEAP[_datetime_methods + 244] = FUNCTION_TABLE_OFFSET + 178;
    HEAP[_datetime_methods + 252] = __str216;
    HEAP[_datetime_methods + 256] = __str82;
    HEAP[_datetime_methods + 260] = FUNCTION_TABLE_OFFSET + 180;
    HEAP[_datetime_methods + 268] = __str265;
    HEAP[_datetime_methods + 272] = __str266;
    HEAP[_datetime_methods + 276] = FUNCTION_TABLE_OFFSET + 182;
    HEAP[_datetime_methods + 284] = __str267;
    HEAP[_datetime_methods + 288] = __str135;
    HEAP[_datetime_methods + 292] = FUNCTION_TABLE_OFFSET + 184;
    HEAP[_datetime_methods + 300] = __str136;
    HEAP[_datetime_as_number] = FUNCTION_TABLE_OFFSET + 186;
    HEAP[_datetime_as_number + 4] = FUNCTION_TABLE_OFFSET + 188;
    HEAP[_PyDateTime_DateTimeType + 12] = __str268;
    HEAP[_PyDateTime_DateTimeType + 24] = FUNCTION_TABLE_OFFSET + 190;
    HEAP[_PyDateTime_DateTimeType + 44] = FUNCTION_TABLE_OFFSET + 192;
    HEAP[_PyDateTime_DateTimeType + 48] = _datetime_as_number;
    HEAP[_PyDateTime_DateTimeType + 60] = FUNCTION_TABLE_OFFSET + 194;
    HEAP[_PyDateTime_DateTimeType + 68] = FUNCTION_TABLE_OFFSET + 196;
    HEAP[_PyDateTime_DateTimeType + 72] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_PyDateTime_DateTimeType + 88] = _datetime_doc;
    HEAP[_PyDateTime_DateTimeType + 100] = FUNCTION_TABLE_OFFSET + 198;
    HEAP[_PyDateTime_DateTimeType + 116] = _datetime_methods;
    HEAP[_PyDateTime_DateTimeType + 124] = _datetime_getset;
    HEAP[_PyDateTime_DateTimeType + 128] = _PyDateTime_DateType;
    HEAP[_PyDateTime_DateTimeType + 152] = FUNCTION_TABLE_OFFSET + 200;
    HEAP[_PyDateTime_DateTimeType + 156] = FUNCTION_TABLE_OFFSET + 202;
    HEAP[_CAPI] = _PyDateTime_DateType;
    HEAP[_CAPI + 4] = _PyDateTime_DateTimeType;
    HEAP[_CAPI + 8] = _PyDateTime_TimeType;
    HEAP[_CAPI + 12] = _PyDateTime_DeltaType;
    HEAP[_CAPI + 16] = _PyDateTime_TZInfoType;
    HEAP[_CAPI + 20] = FUNCTION_TABLE_OFFSET + 204;
    HEAP[_CAPI + 24] = FUNCTION_TABLE_OFFSET + 206;
    HEAP[_CAPI + 28] = FUNCTION_TABLE_OFFSET + 208;
    HEAP[_CAPI + 32] = FUNCTION_TABLE_OFFSET + 210;
    HEAP[_CAPI + 36] = FUNCTION_TABLE_OFFSET + 152;
    HEAP[_CAPI + 40] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_struct_time_type_fields] = __str2285;
    HEAP[_struct_time_type_fields + 4] = __str3286;
    HEAP[_struct_time_type_fields + 8] = __str4287;
    HEAP[_struct_time_type_fields + 12] = __str5288;
    HEAP[_struct_time_type_fields + 16] = __str6289;
    HEAP[_struct_time_type_fields + 20] = __str7290;
    HEAP[_struct_time_type_fields + 24] = __str8291;
    HEAP[_struct_time_type_fields + 28] = __str9292;
    HEAP[_struct_time_type_fields + 32] = __str10293;
    HEAP[_struct_time_type_fields + 36] = __str11294;
    HEAP[_struct_time_type_fields + 40] = __str12295;
    HEAP[_struct_time_type_fields + 44] = __str13296;
    HEAP[_struct_time_type_fields + 48] = __str14297;
    HEAP[_struct_time_type_fields + 52] = __str15298;
    HEAP[_struct_time_type_fields + 56] = __str16299;
    HEAP[_struct_time_type_fields + 60] = __str17300;
    HEAP[_struct_time_type_fields + 64] = __str18301;
    HEAP[_struct_time_type_fields + 68] = __str19302;
    HEAP[_struct_time_type_desc] = __str20303;
    HEAP[_struct_time_type_desc + 4] = __str21304;
    HEAP[_struct_time_type_desc + 8] = _struct_time_type_fields;
    HEAP[_time_methods342] = __str92;
    HEAP[_time_methods342 + 4] = FUNCTION_TABLE_OFFSET + 212;
    HEAP[_time_methods342 + 12] = _time_doc283;
    HEAP[_time_methods342 + 16] = __str51334;
    HEAP[_time_methods342 + 20] = FUNCTION_TABLE_OFFSET + 214;
    HEAP[_time_methods342 + 28] = _clock_doc;
    HEAP[_time_methods342 + 32] = __str52335;
    HEAP[_time_methods342 + 36] = FUNCTION_TABLE_OFFSET + 216;
    HEAP[_time_methods342 + 44] = _sleep_doc;
    HEAP[_time_methods342 + 48] = __str53336;
    HEAP[_time_methods342 + 52] = FUNCTION_TABLE_OFFSET + 218;
    HEAP[_time_methods342 + 60] = _gmtime_doc;
    HEAP[_time_methods342 + 64] = __str54337;
    HEAP[_time_methods342 + 68] = FUNCTION_TABLE_OFFSET + 220;
    HEAP[_time_methods342 + 76] = _localtime_doc;
    HEAP[_time_methods342 + 80] = __str39322;
    HEAP[_time_methods342 + 84] = FUNCTION_TABLE_OFFSET + 222;
    HEAP[_time_methods342 + 92] = _asctime_doc;
    HEAP[_time_methods342 + 96] = __str160;
    HEAP[_time_methods342 + 100] = FUNCTION_TABLE_OFFSET + 224;
    HEAP[_time_methods342 + 108] = _ctime_doc;
    HEAP[_time_methods342 + 112] = __str55338;
    HEAP[_time_methods342 + 116] = FUNCTION_TABLE_OFFSET + 226;
    HEAP[_time_methods342 + 124] = _mktime_doc;
    HEAP[_time_methods342 + 128] = __str93;
    HEAP[_time_methods342 + 132] = FUNCTION_TABLE_OFFSET + 228;
    HEAP[_time_methods342 + 140] = _strftime_doc;
    HEAP[_time_methods342 + 144] = __str254;
    HEAP[_time_methods342 + 148] = FUNCTION_TABLE_OFFSET + 230;
    HEAP[_time_methods342 + 156] = _strptime_doc;
    HEAP[_time_methods342 + 160] = __str58341;
    HEAP[_time_methods342 + 164] = FUNCTION_TABLE_OFFSET + 232;
    HEAP[_time_methods342 + 172] = _tzset_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
