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



var $0___SIZE = 192; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_langinfo_constant___SIZE = 8; // %struct.langinfo_constant
  
var $struct_lconv___SIZE = 56; // %struct.lconv
  var $struct_lconv___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
var _locale__doc__;
var _setlocale__doc__;
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var _Error;
var __str6;
var __str7;
var _localeconv__doc__;
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
var _strcoll__doc__;
var __str26;

var __str27;
var _strxfrm__doc__;
var __str28;
var _langinfo_constants;
var __str29;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var __str41;
var __str42;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var __str48;
var __str49;
var __str50;
var __str51;
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
var _nl_langinfo__doc__;
var __str85;
var __str86;
var __str87;
var _gettext__doc__;
var __str88;
var _dgettext__doc__;
var __str89;
var _dcgettext__doc__;
var __str90;
var _textdomain__doc__;
var __str91;

var _bindtextdomain__doc__;
var __str92;
var __str93;
var _bind_textdomain_codeset__doc__;

var __str94;
var __str95;
var __str96;
var __str97;
var __str98;
var __str99;
var __str100;
var __str101;
var __str102;
var __str103;
var _PyLocale_Methods;
var __str104;
var __str105;
var __str106;
var __str107;
var __str108;
var __str109;
var __str110;
var __str111;
var __str112;
var __str113;
var __str114;
var __str115;













































  function _copy_grouping($s) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        var $i;
        var $result;
        var $val;
        $s_addr=$s;
        $val=0; //@line 58 "_localemodule.c"
        var $1=$s_addr; //@line 60 "_localemodule.c"
        var $2=$1; //@line 60 "_localemodule.c"
        var $3=HEAP[$2]; //@line 60 "_localemodule.c"
        var $4=($3)==0; //@line 60 "_localemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 60 "_localemodule.c"
      case 1: // $bb
        var $5=_PyList_New(0); //@line 62 "_localemodule.c"
        $0=$5; //@line 62 "_localemodule.c"
        __label__ = 22; break; //@line 62 "_localemodule.c"
      case 2: // $bb1
        $i=0; //@line 64 "_localemodule.c"
        __label__ = 4; break; //@line 64 "_localemodule.c"
      case 3: // $bb2
        var $6=$i; //@line 64 "_localemodule.c"
        var $7=($6) + 1; //@line 64 "_localemodule.c"
        $i=$7; //@line 64 "_localemodule.c"
        __label__ = 4; break; //@line 64 "_localemodule.c"
      case 4: // $bb3
        var $8=$s_addr; //@line 64 "_localemodule.c"
        var $9=$i; //@line 64 "_localemodule.c"
        var $10=$8+$9; //@line 64 "_localemodule.c"
        var $11=HEAP[$10]; //@line 64 "_localemodule.c"
        var $12=($11)==0; //@line 64 "_localemodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 64 "_localemodule.c"
      case 5: // $bb4
        var $13=$s_addr; //@line 64 "_localemodule.c"
        var $14=$i; //@line 64 "_localemodule.c"
        var $15=$13+$14; //@line 64 "_localemodule.c"
        var $16=HEAP[$15]; //@line 64 "_localemodule.c"
        var $17=($16)!=127; //@line 64 "_localemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 64 "_localemodule.c"
      case 6: // $bb5
        var $18=$i; //@line 67 "_localemodule.c"
        var $19=($18) + 1; //@line 67 "_localemodule.c"
        var $20=_PyList_New($19); //@line 67 "_localemodule.c"
        $result=$20; //@line 67 "_localemodule.c"
        var $21=($20)==0; //@line 68 "_localemodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 68 "_localemodule.c"
      case 7: // $bb6
        $0=0; //@line 69 "_localemodule.c"
        __label__ = 22; break; //@line 69 "_localemodule.c"
      case 8: // $bb7
        $i=-1; //@line 71 "_localemodule.c"
        __label__ = 9; break; //@line 71 "_localemodule.c"
      case 9: // $bb8
        var $22=$i; //@line 73 "_localemodule.c"
        var $23=($22) + 1; //@line 73 "_localemodule.c"
        $i=$23; //@line 73 "_localemodule.c"
        var $24=$s_addr; //@line 74 "_localemodule.c"
        var $25=$i; //@line 74 "_localemodule.c"
        var $26=$24+$25; //@line 74 "_localemodule.c"
        var $27=HEAP[$26]; //@line 74 "_localemodule.c"
        var $28=($27); //@line 74 "_localemodule.c"
        var $29=_PyInt_FromLong($28); //@line 74 "_localemodule.c"
        $val=$29; //@line 74 "_localemodule.c"
        var $30=($29)==0; //@line 75 "_localemodule.c"
        if ($30) { __label__ = 16; break; } else { __label__ = 10; break; } //@line 75 "_localemodule.c"
      case 10: // $bb9
        var $31=$result; //@line 77 "_localemodule.c"
        var $32=$i; //@line 77 "_localemodule.c"
        var $33=$val; //@line 77 "_localemodule.c"
        var $34=_PyList_SetItem($31, $32, $33); //@line 77 "_localemodule.c"
        var $35=($34)!=0; //@line 77 "_localemodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 77 "_localemodule.c"
      case 11: // $bb10
        var $36=$val; //@line 78 "_localemodule.c"
        var $37=$36; //@line 78 "_localemodule.c"
        var $38=HEAP[$37]; //@line 78 "_localemodule.c"
        var $39=($38) - 1; //@line 78 "_localemodule.c"
        var $40=$val; //@line 78 "_localemodule.c"
        var $41=$40; //@line 78 "_localemodule.c"
        HEAP[$41]=$39; //@line 78 "_localemodule.c"
        var $42=$val; //@line 78 "_localemodule.c"
        var $43=$42; //@line 78 "_localemodule.c"
        var $44=HEAP[$43]; //@line 78 "_localemodule.c"
        var $45=($44)==0; //@line 78 "_localemodule.c"
        if ($45) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 78 "_localemodule.c"
      case 12: // $bb11
        var $46=$val; //@line 78 "_localemodule.c"
        var $47=$46+4; //@line 78 "_localemodule.c"
        var $48=HEAP[$47]; //@line 78 "_localemodule.c"
        var $49=$48+24; //@line 78 "_localemodule.c"
        var $50=HEAP[$49]; //@line 78 "_localemodule.c"
        var $51=$val; //@line 78 "_localemodule.c"
        FUNCTION_TABLE[$50]($51); //@line 78 "_localemodule.c"
        __label__ = 13; break; //@line 78 "_localemodule.c"
      case 13: // $bb12
        $val=0; //@line 79 "_localemodule.c"
        __label__ = 16; break; //@line 79 "_localemodule.c"
      case 14: // $bb13
        var $52=$s_addr; //@line 82 "_localemodule.c"
        var $53=$i; //@line 82 "_localemodule.c"
        var $54=$52+$53; //@line 82 "_localemodule.c"
        var $55=HEAP[$54]; //@line 82 "_localemodule.c"
        var $56=($55)==0; //@line 82 "_localemodule.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 82 "_localemodule.c"
      case 15: // $bb14
        var $57=$s_addr; //@line 82 "_localemodule.c"
        var $58=$i; //@line 82 "_localemodule.c"
        var $59=$57+$58; //@line 82 "_localemodule.c"
        var $60=HEAP[$59]; //@line 82 "_localemodule.c"
        var $61=($60)!=127; //@line 82 "_localemodule.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 82 "_localemodule.c"
      case 16: // $bb15_thread
        var $62=$result; //@line 85 "_localemodule.c"
        __lastLabel__ = 16; __label__ = 18; break;
      case 17: // $bb15
        var $_pr=$val;
        var $63=($_pr)==0; //@line 84 "_localemodule.c"
        var $64=$result; //@line 85 "_localemodule.c"
        if ($63) { __lastLabel__ = 17; __label__ = 18; break; } else { __lastLabel__ = 17; __label__ = 21; break; } //@line 84 "_localemodule.c"
      case 18: // $bb16
        var $65=__lastLabel__ == 16 ? $62 : ($64);
        var $66=$65; //@line 85 "_localemodule.c"
        var $67=HEAP[$66]; //@line 85 "_localemodule.c"
        var $68=($67) - 1; //@line 85 "_localemodule.c"
        var $69=$result; //@line 85 "_localemodule.c"
        var $70=$69; //@line 85 "_localemodule.c"
        HEAP[$70]=$68; //@line 85 "_localemodule.c"
        var $71=$result; //@line 85 "_localemodule.c"
        var $72=$71; //@line 85 "_localemodule.c"
        var $73=HEAP[$72]; //@line 85 "_localemodule.c"
        var $74=($73)==0; //@line 85 "_localemodule.c"
        if ($74) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 85 "_localemodule.c"
      case 19: // $bb17
        var $75=$result; //@line 85 "_localemodule.c"
        var $76=$75+4; //@line 85 "_localemodule.c"
        var $77=HEAP[$76]; //@line 85 "_localemodule.c"
        var $78=$77+24; //@line 85 "_localemodule.c"
        var $79=HEAP[$78]; //@line 85 "_localemodule.c"
        var $80=$result; //@line 85 "_localemodule.c"
        FUNCTION_TABLE[$79]($80); //@line 85 "_localemodule.c"
        __label__ = 20; break; //@line 85 "_localemodule.c"
      case 20: // $bb18
        $0=0; //@line 86 "_localemodule.c"
        __label__ = 22; break; //@line 86 "_localemodule.c"
      case 21: // $bb19
        $0=$64; //@line 89 "_localemodule.c"
        __label__ = 22; break; //@line 89 "_localemodule.c"
      case 22: // $bb20
        var $81=$0; //@line 62 "_localemodule.c"
        $retval=$81; //@line 62 "_localemodule.c"
        var $retval21=$retval; //@line 62 "_localemodule.c"
        ;
        return $retval21; //@line 62 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fixup_ulcase() {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mods;
        var $strop;
        var $string;
        var $ulo;
        var $ul=__stackBase__;
        var $n;
        var $c;
        var $0=_PyImport_GetModuleDict(); //@line 100 "_localemodule.c"
        $mods=$0; //@line 100 "_localemodule.c"
        var $1=$mods; //@line 101 "_localemodule.c"
        var $2=($1)==0; //@line 101 "_localemodule.c"
        if ($2) { __label__ = 38; break; } else { __label__ = 1; break; } //@line 101 "_localemodule.c"
      case 1: // $bb
        var $3=$mods; //@line 103 "_localemodule.c"
        var $4=_PyDict_GetItemString($3, __str); //@line 103 "_localemodule.c"
        $string=$4; //@line 103 "_localemodule.c"
        var $5=$string; //@line 104 "_localemodule.c"
        var $6=($5)!=0; //@line 104 "_localemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 104 "_localemodule.c"
      case 2: // $bb1
        var $7=$string; //@line 105 "_localemodule.c"
        var $8=_PyModule_GetDict($7); //@line 105 "_localemodule.c"
        $string=$8; //@line 105 "_localemodule.c"
        __label__ = 3; break; //@line 105 "_localemodule.c"
      case 3: // $bb2
        var $9=$mods; //@line 106 "_localemodule.c"
        var $10=_PyDict_GetItemString($9, __str1); //@line 106 "_localemodule.c"
        $strop=$10; //@line 106 "_localemodule.c"
        var $11=($10)!=0; //@line 107 "_localemodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 107 "_localemodule.c"
      case 4: // $bb3
        var $12=$strop; //@line 108 "_localemodule.c"
        var $13=_PyModule_GetDict($12); //@line 108 "_localemodule.c"
        $strop=$13; //@line 108 "_localemodule.c"
        __label__ = 5; break; //@line 108 "_localemodule.c"
      case 5: // $bb4
        var $14=$string; //@line 109 "_localemodule.c"
        var $15=($14)==0; //@line 109 "_localemodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 109 "_localemodule.c"
      case 6: // $bb5
        var $16=$strop; //@line 109 "_localemodule.c"
        var $17=($16)==0; //@line 109 "_localemodule.c"
        if ($17) { __label__ = 38; break; } else { __label__ = 7; break; } //@line 109 "_localemodule.c"
      case 7: // $bb6
        $n=0; //@line 113 "_localemodule.c"
        $c=0; //@line 114 "_localemodule.c"
        __label__ = 8; break;
      case 8: // $bb7
        var $18=___ctype_b_loc(); //@line 115 "_localemodule.c"
        var $19=HEAP[$18]; //@line 115 "_localemodule.c"
        var $20=$c; //@line 115 "_localemodule.c"
        var $21=$19+2*$20; //@line 115 "_localemodule.c"
        var $22=HEAP[$21]; //@line 115 "_localemodule.c"
        var $23=($22); //@line 115 "_localemodule.c"
        var $24=($23) & 256; //@line 115 "_localemodule.c"
        var $25=($24)!=0; //@line 115 "_localemodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 115 "_localemodule.c"
      case 9: // $bb8
        var $26=$n; //@line 116 "_localemodule.c"
        var $27=$c; //@line 116 "_localemodule.c"
        var $28=((($27)) & 255); //@line 116 "_localemodule.c"
        var $29=$ul+$26; //@line 116 "_localemodule.c"
        HEAP[$29]=$28; //@line 116 "_localemodule.c"
        var $30=$n; //@line 116 "_localemodule.c"
        var $31=($30) + 1; //@line 116 "_localemodule.c"
        $n=$31; //@line 116 "_localemodule.c"
        __label__ = 10; break; //@line 116 "_localemodule.c"
      case 10: // $bb9
        var $32=$c; //@line 114 "_localemodule.c"
        var $33=($32) + 1; //@line 114 "_localemodule.c"
        $c=$33; //@line 114 "_localemodule.c"
        var $34=($33) <= 255; //@line 114 "_localemodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 114 "_localemodule.c"
      case 11: // $bb11
        var $ul12=$ul; //@line 118 "_localemodule.c"
        var $35=$n; //@line 118 "_localemodule.c"
        var $36=_PyString_FromStringAndSize($ul12, $35); //@line 118 "_localemodule.c"
        $ulo=$36; //@line 118 "_localemodule.c"
        var $37=$ulo; //@line 119 "_localemodule.c"
        var $38=($37)==0; //@line 119 "_localemodule.c"
        if ($38) { __label__ = 38; break; } else { __label__ = 12; break; } //@line 119 "_localemodule.c"
      case 12: // $bb14
        var $39=$string; //@line 121 "_localemodule.c"
        var $40=($39)!=0; //@line 121 "_localemodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 121 "_localemodule.c"
      case 13: // $bb15
        var $41=$string; //@line 122 "_localemodule.c"
        var $42=$ulo; //@line 122 "_localemodule.c"
        var $43=_PyDict_SetItemString($41, __str2, $42); //@line 122 "_localemodule.c"
        __label__ = 14; break; //@line 122 "_localemodule.c"
      case 14: // $bb16
        var $44=$strop; //@line 123 "_localemodule.c"
        var $45=($44)!=0; //@line 123 "_localemodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 123 "_localemodule.c"
      case 15: // $bb17
        var $46=$strop; //@line 124 "_localemodule.c"
        var $47=$ulo; //@line 124 "_localemodule.c"
        var $48=_PyDict_SetItemString($46, __str2, $47); //@line 124 "_localemodule.c"
        __label__ = 16; break; //@line 124 "_localemodule.c"
      case 16: // $bb18
        var $49=$ulo; //@line 125 "_localemodule.c"
        var $50=$49; //@line 125 "_localemodule.c"
        var $51=HEAP[$50]; //@line 125 "_localemodule.c"
        var $52=($51) - 1; //@line 125 "_localemodule.c"
        var $53=$ulo; //@line 125 "_localemodule.c"
        var $54=$53; //@line 125 "_localemodule.c"
        HEAP[$54]=$52; //@line 125 "_localemodule.c"
        var $55=$ulo; //@line 125 "_localemodule.c"
        var $56=$55; //@line 125 "_localemodule.c"
        var $57=HEAP[$56]; //@line 125 "_localemodule.c"
        var $58=($57)==0; //@line 125 "_localemodule.c"
        if ($58) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 125 "_localemodule.c"
      case 17: // $bb19
        var $59=$ulo; //@line 125 "_localemodule.c"
        var $60=$59+4; //@line 125 "_localemodule.c"
        var $61=HEAP[$60]; //@line 125 "_localemodule.c"
        var $62=$61+24; //@line 125 "_localemodule.c"
        var $63=HEAP[$62]; //@line 125 "_localemodule.c"
        var $64=$ulo; //@line 125 "_localemodule.c"
        FUNCTION_TABLE[$63]($64); //@line 125 "_localemodule.c"
        __label__ = 18; break; //@line 125 "_localemodule.c"
      case 18: // $bb20
        $n=0; //@line 128 "_localemodule.c"
        $c=0; //@line 129 "_localemodule.c"
        __label__ = 19; break;
      case 19: // $bb21
        var $65=___ctype_b_loc(); //@line 130 "_localemodule.c"
        var $66=HEAP[$65]; //@line 130 "_localemodule.c"
        var $67=$c; //@line 130 "_localemodule.c"
        var $68=$66+2*$67; //@line 130 "_localemodule.c"
        var $69=HEAP[$68]; //@line 130 "_localemodule.c"
        var $70=($69); //@line 130 "_localemodule.c"
        var $71=($70) & 512; //@line 130 "_localemodule.c"
        var $72=($71)!=0; //@line 130 "_localemodule.c"
        if ($72) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 130 "_localemodule.c"
      case 20: // $bb22
        var $73=$n; //@line 131 "_localemodule.c"
        var $74=$c; //@line 131 "_localemodule.c"
        var $75=((($74)) & 255); //@line 131 "_localemodule.c"
        var $76=$ul+$73; //@line 131 "_localemodule.c"
        HEAP[$76]=$75; //@line 131 "_localemodule.c"
        var $77=$n; //@line 131 "_localemodule.c"
        var $78=($77) + 1; //@line 131 "_localemodule.c"
        $n=$78; //@line 131 "_localemodule.c"
        __label__ = 21; break; //@line 131 "_localemodule.c"
      case 21: // $bb23
        var $79=$c; //@line 129 "_localemodule.c"
        var $80=($79) + 1; //@line 129 "_localemodule.c"
        $c=$80; //@line 129 "_localemodule.c"
        var $81=($80) <= 255; //@line 129 "_localemodule.c"
        if ($81) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 129 "_localemodule.c"
      case 22: // $bb25
        var $ul26=$ul; //@line 133 "_localemodule.c"
        var $82=$n; //@line 133 "_localemodule.c"
        var $83=_PyString_FromStringAndSize($ul26, $82); //@line 133 "_localemodule.c"
        $ulo=$83; //@line 133 "_localemodule.c"
        var $84=$ulo; //@line 134 "_localemodule.c"
        var $85=($84)==0; //@line 134 "_localemodule.c"
        if ($85) { __label__ = 38; break; } else { __label__ = 23; break; } //@line 134 "_localemodule.c"
      case 23: // $bb28
        var $86=$string; //@line 136 "_localemodule.c"
        var $87=($86)!=0; //@line 136 "_localemodule.c"
        if ($87) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 136 "_localemodule.c"
      case 24: // $bb29
        var $88=$string; //@line 137 "_localemodule.c"
        var $89=$ulo; //@line 137 "_localemodule.c"
        var $90=_PyDict_SetItemString($88, __str3, $89); //@line 137 "_localemodule.c"
        __label__ = 25; break; //@line 137 "_localemodule.c"
      case 25: // $bb30
        var $91=$strop; //@line 138 "_localemodule.c"
        var $92=($91)!=0; //@line 138 "_localemodule.c"
        if ($92) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 138 "_localemodule.c"
      case 26: // $bb31
        var $93=$strop; //@line 139 "_localemodule.c"
        var $94=$ulo; //@line 139 "_localemodule.c"
        var $95=_PyDict_SetItemString($93, __str3, $94); //@line 139 "_localemodule.c"
        __label__ = 27; break; //@line 139 "_localemodule.c"
      case 27: // $bb32
        var $96=$ulo; //@line 140 "_localemodule.c"
        var $97=$96; //@line 140 "_localemodule.c"
        var $98=HEAP[$97]; //@line 140 "_localemodule.c"
        var $99=($98) - 1; //@line 140 "_localemodule.c"
        var $100=$ulo; //@line 140 "_localemodule.c"
        var $101=$100; //@line 140 "_localemodule.c"
        HEAP[$101]=$99; //@line 140 "_localemodule.c"
        var $102=$ulo; //@line 140 "_localemodule.c"
        var $103=$102; //@line 140 "_localemodule.c"
        var $104=HEAP[$103]; //@line 140 "_localemodule.c"
        var $105=($104)==0; //@line 140 "_localemodule.c"
        if ($105) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 140 "_localemodule.c"
      case 28: // $bb33
        var $106=$ulo; //@line 140 "_localemodule.c"
        var $107=$106+4; //@line 140 "_localemodule.c"
        var $108=HEAP[$107]; //@line 140 "_localemodule.c"
        var $109=$108+24; //@line 140 "_localemodule.c"
        var $110=HEAP[$109]; //@line 140 "_localemodule.c"
        var $111=$ulo; //@line 140 "_localemodule.c"
        FUNCTION_TABLE[$110]($111); //@line 140 "_localemodule.c"
        __label__ = 29; break; //@line 140 "_localemodule.c"
      case 29: // $bb34
        $n=0; //@line 143 "_localemodule.c"
        $c=0; //@line 144 "_localemodule.c"
        __label__ = 30; break;
      case 30: // $bb35
        var $112=___ctype_b_loc(); //@line 145 "_localemodule.c"
        var $113=HEAP[$112]; //@line 145 "_localemodule.c"
        var $114=$c; //@line 145 "_localemodule.c"
        var $115=$113+2*$114; //@line 145 "_localemodule.c"
        var $116=HEAP[$115]; //@line 145 "_localemodule.c"
        var $117=($116); //@line 145 "_localemodule.c"
        var $118=($117) & 1024; //@line 145 "_localemodule.c"
        var $119=($118)!=0; //@line 145 "_localemodule.c"
        if ($119) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 145 "_localemodule.c"
      case 31: // $bb36
        var $120=$n; //@line 146 "_localemodule.c"
        var $121=$c; //@line 146 "_localemodule.c"
        var $122=((($121)) & 255); //@line 146 "_localemodule.c"
        var $123=$ul+$120; //@line 146 "_localemodule.c"
        HEAP[$123]=$122; //@line 146 "_localemodule.c"
        var $124=$n; //@line 146 "_localemodule.c"
        var $125=($124) + 1; //@line 146 "_localemodule.c"
        $n=$125; //@line 146 "_localemodule.c"
        __label__ = 32; break; //@line 146 "_localemodule.c"
      case 32: // $bb37
        var $126=$c; //@line 144 "_localemodule.c"
        var $127=($126) + 1; //@line 144 "_localemodule.c"
        $c=$127; //@line 144 "_localemodule.c"
        var $128=($127) <= 255; //@line 144 "_localemodule.c"
        if ($128) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 144 "_localemodule.c"
      case 33: // $bb39
        var $ul40=$ul; //@line 148 "_localemodule.c"
        var $129=$n; //@line 148 "_localemodule.c"
        var $130=_PyString_FromStringAndSize($ul40, $129); //@line 148 "_localemodule.c"
        $ulo=$130; //@line 148 "_localemodule.c"
        var $131=$ulo; //@line 149 "_localemodule.c"
        var $132=($131)==0; //@line 149 "_localemodule.c"
        if ($132) { __label__ = 38; break; } else { __label__ = 34; break; } //@line 149 "_localemodule.c"
      case 34: // $bb42
        var $133=$string; //@line 151 "_localemodule.c"
        var $134=($133)!=0; //@line 151 "_localemodule.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 151 "_localemodule.c"
      case 35: // $bb43
        var $135=$string; //@line 152 "_localemodule.c"
        var $136=$ulo; //@line 152 "_localemodule.c"
        var $137=_PyDict_SetItemString($135, __str4, $136); //@line 152 "_localemodule.c"
        __label__ = 36; break; //@line 152 "_localemodule.c"
      case 36: // $bb44
        var $138=$ulo; //@line 153 "_localemodule.c"
        var $139=$138; //@line 153 "_localemodule.c"
        var $140=HEAP[$139]; //@line 153 "_localemodule.c"
        var $141=($140) - 1; //@line 153 "_localemodule.c"
        var $142=$ulo; //@line 153 "_localemodule.c"
        var $143=$142; //@line 153 "_localemodule.c"
        HEAP[$143]=$141; //@line 153 "_localemodule.c"
        var $144=$ulo; //@line 153 "_localemodule.c"
        var $145=$144; //@line 153 "_localemodule.c"
        var $146=HEAP[$145]; //@line 153 "_localemodule.c"
        var $147=($146)==0; //@line 153 "_localemodule.c"
        if ($147) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 153 "_localemodule.c"
      case 37: // $bb45
        var $148=$ulo; //@line 153 "_localemodule.c"
        var $149=$148+4; //@line 153 "_localemodule.c"
        var $150=HEAP[$149]; //@line 153 "_localemodule.c"
        var $151=$150+24; //@line 153 "_localemodule.c"
        var $152=HEAP[$151]; //@line 153 "_localemodule.c"
        var $153=$ulo; //@line 153 "_localemodule.c"
        FUNCTION_TABLE[$152]($153); //@line 153 "_localemodule.c"
        __label__ = 38; break; //@line 153 "_localemodule.c"
      case 38: // $return
        STACKTOP = __stackBase__;
        return; //@line 102 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_setlocale($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $category=__stackBase__;
        var $locale=__stackBase__+4;
        var $result;
        var $result_object;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$locale]=0; //@line 160 "_localemodule.c"
        var $1=$args_addr; //@line 163 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str5, allocate([$category,0,0,0,$locale,0,0,0], ["i32*",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 163 "_localemodule.c"
        var $3=($2)==0; //@line 163 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 163 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 164 "_localemodule.c"
        __label__ = 14; break; //@line 164 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$locale]; //@line 174 "_localemodule.c"
        var $5=($4)!=0; //@line 174 "_localemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 174 "_localemodule.c"
      case 3: // $bb2
        var $6=HEAP[$locale]; //@line 176 "_localemodule.c"
        var $7=HEAP[$category]; //@line 176 "_localemodule.c"
        var $8=_setlocale($7, $6); //@line 176 "_localemodule.c"
        $result=$8; //@line 176 "_localemodule.c"
        var $9=$result; //@line 177 "_localemodule.c"
        var $10=($9)==0; //@line 177 "_localemodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 177 "_localemodule.c"
      case 4: // $bb3
        var $11=HEAP[_Error]; //@line 179 "_localemodule.c"
        _PyErr_SetString($11, __str6); //@line 179 "_localemodule.c"
        $0=0; //@line 180 "_localemodule.c"
        __label__ = 14; break; //@line 180 "_localemodule.c"
      case 5: // $bb4
        var $12=$result; //@line 182 "_localemodule.c"
        var $13=_PyString_FromString($12); //@line 182 "_localemodule.c"
        $result_object=$13; //@line 182 "_localemodule.c"
        var $14=$result_object; //@line 183 "_localemodule.c"
        var $15=($14)==0; //@line 183 "_localemodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 183 "_localemodule.c"
      case 6: // $bb5
        $0=0; //@line 184 "_localemodule.c"
        __label__ = 14; break; //@line 184 "_localemodule.c"
      case 7: // $bb6
        var $16=HEAP[$category]; //@line 186 "_localemodule.c"
        var $17=($16)==0; //@line 186 "_localemodule.c"
        var $18=HEAP[$category]; //@line 186 "_localemodule.c"
        var $19=($18)==6; //@line 186 "_localemodule.c"
        var $or_cond=($17) | ($19);
        if ($or_cond) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 186 "_localemodule.c"
      case 8: // $bb8
        _fixup_ulcase(); //@line 187 "_localemodule.c"
        __label__ = 9; break; //@line 187 "_localemodule.c"
      case 9: // $bb9
        _PyErr_Clear(); //@line 189 "_localemodule.c"
        __label__ = 13; break; //@line 189 "_localemodule.c"
      case 10: // $bb10
        var $20=HEAP[$category]; //@line 192 "_localemodule.c"
        var $21=_setlocale($20, 0); //@line 192 "_localemodule.c"
        $result=$21; //@line 192 "_localemodule.c"
        var $22=$result; //@line 193 "_localemodule.c"
        var $23=($22)==0; //@line 193 "_localemodule.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 193 "_localemodule.c"
      case 11: // $bb11
        var $24=HEAP[_Error]; //@line 194 "_localemodule.c"
        _PyErr_SetString($24, __str7); //@line 194 "_localemodule.c"
        $0=0; //@line 195 "_localemodule.c"
        __label__ = 14; break; //@line 195 "_localemodule.c"
      case 12: // $bb12
        var $25=$result; //@line 197 "_localemodule.c"
        var $26=_PyString_FromString($25); //@line 197 "_localemodule.c"
        $result_object=$26; //@line 197 "_localemodule.c"
        __label__ = 13; break; //@line 197 "_localemodule.c"
      case 13: // $bb13
        var $27=$result_object; //@line 199 "_localemodule.c"
        $0=$27; //@line 199 "_localemodule.c"
        __label__ = 14; break; //@line 199 "_localemodule.c"
      case 14: // $bb14
        var $28=$0; //@line 164 "_localemodule.c"
        $retval=$28; //@line 164 "_localemodule.c"
        var $retval15=$retval; //@line 164 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 164 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_localeconv($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $result;
        var $l;
        var $x;
        $self_addr=$self;
        var $1=_PyDict_New(); //@line 212 "_localemodule.c"
        $result=$1; //@line 212 "_localemodule.c"
        var $2=$result; //@line 213 "_localemodule.c"
        var $3=($2)==0; //@line 213 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 213 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 214 "_localemodule.c"
        __label__ = 82; break; //@line 214 "_localemodule.c"
      case 2: // $bb1
        var $4=_localeconv(); //@line 217 "_localemodule.c"
        $l=$4; //@line 217 "_localemodule.c"
        var $5=$l; //@line 235 "_localemodule.c"
        var $6=$5; //@line 235 "_localemodule.c"
        var $7=HEAP[$6]; //@line 235 "_localemodule.c"
        var $8=_PyString_FromString($7); //@line 235 "_localemodule.c"
        $x=$8; //@line 235 "_localemodule.c"
        var $9=$x; //@line 235 "_localemodule.c"
        var $10=($9)==0; //@line 235 "_localemodule.c"
        if ($10) { __label__ = 75; break; } else { __label__ = 3; break; } //@line 235 "_localemodule.c"
      case 3: // $bb2
        var $11=$result; //@line 235 "_localemodule.c"
        var $12=$x; //@line 235 "_localemodule.c"
        var $13=_PyDict_SetItemString($11, __str8, $12); //@line 235 "_localemodule.c"
        var $14=$x; //@line 235 "_localemodule.c"
        var $15=($14)!=0; //@line 235 "_localemodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 235 "_localemodule.c"
      case 4: // $bb3
        var $16=$x; //@line 235 "_localemodule.c"
        var $17=$16; //@line 235 "_localemodule.c"
        var $18=HEAP[$17]; //@line 235 "_localemodule.c"
        var $19=($18) - 1; //@line 235 "_localemodule.c"
        var $20=$x; //@line 235 "_localemodule.c"
        var $21=$20; //@line 235 "_localemodule.c"
        HEAP[$21]=$19; //@line 235 "_localemodule.c"
        var $22=$x; //@line 235 "_localemodule.c"
        var $23=$22; //@line 235 "_localemodule.c"
        var $24=HEAP[$23]; //@line 235 "_localemodule.c"
        var $25=($24)==0; //@line 235 "_localemodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 235 "_localemodule.c"
      case 5: // $bb4
        var $26=$x; //@line 235 "_localemodule.c"
        var $27=$26+4; //@line 235 "_localemodule.c"
        var $28=HEAP[$27]; //@line 235 "_localemodule.c"
        var $29=$28+24; //@line 235 "_localemodule.c"
        var $30=HEAP[$29]; //@line 235 "_localemodule.c"
        var $31=$x; //@line 235 "_localemodule.c"
        FUNCTION_TABLE[$30]($31); //@line 235 "_localemodule.c"
        __label__ = 6; break; //@line 235 "_localemodule.c"
      case 6: // $bb5
        var $32=$l; //@line 236 "_localemodule.c"
        var $33=$32+4; //@line 236 "_localemodule.c"
        var $34=HEAP[$33]; //@line 236 "_localemodule.c"
        var $35=_PyString_FromString($34); //@line 236 "_localemodule.c"
        $x=$35; //@line 236 "_localemodule.c"
        var $36=($35)==0; //@line 236 "_localemodule.c"
        if ($36) { __label__ = 75; break; } else { __label__ = 7; break; } //@line 236 "_localemodule.c"
      case 7: // $bb6
        var $37=$result; //@line 236 "_localemodule.c"
        var $38=$x; //@line 236 "_localemodule.c"
        var $39=_PyDict_SetItemString($37, __str9, $38); //@line 236 "_localemodule.c"
        var $40=$x; //@line 236 "_localemodule.c"
        var $41=($40)!=0; //@line 236 "_localemodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 236 "_localemodule.c"
      case 8: // $bb7
        var $42=$x; //@line 236 "_localemodule.c"
        var $43=$42; //@line 236 "_localemodule.c"
        var $44=HEAP[$43]; //@line 236 "_localemodule.c"
        var $45=($44) - 1; //@line 236 "_localemodule.c"
        var $46=$x; //@line 236 "_localemodule.c"
        var $47=$46; //@line 236 "_localemodule.c"
        HEAP[$47]=$45; //@line 236 "_localemodule.c"
        var $48=$x; //@line 236 "_localemodule.c"
        var $49=$48; //@line 236 "_localemodule.c"
        var $50=HEAP[$49]; //@line 236 "_localemodule.c"
        var $51=($50)==0; //@line 236 "_localemodule.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 236 "_localemodule.c"
      case 9: // $bb8
        var $52=$x; //@line 236 "_localemodule.c"
        var $53=$52+4; //@line 236 "_localemodule.c"
        var $54=HEAP[$53]; //@line 236 "_localemodule.c"
        var $55=$54+24; //@line 236 "_localemodule.c"
        var $56=HEAP[$55]; //@line 236 "_localemodule.c"
        var $57=$x; //@line 236 "_localemodule.c"
        FUNCTION_TABLE[$56]($57); //@line 236 "_localemodule.c"
        __label__ = 10; break; //@line 236 "_localemodule.c"
      case 10: // $bb9
        var $58=$l; //@line 237 "_localemodule.c"
        var $59=$58+8; //@line 237 "_localemodule.c"
        var $60=HEAP[$59]; //@line 237 "_localemodule.c"
        var $61=_copy_grouping($60); //@line 237 "_localemodule.c"
        $x=$61; //@line 237 "_localemodule.c"
        var $62=($61)==0; //@line 238 "_localemodule.c"
        if ($62) { __label__ = 75; break; } else { __label__ = 11; break; } //@line 238 "_localemodule.c"
      case 11: // $bb10
        var $63=$result; //@line 240 "_localemodule.c"
        var $64=$x; //@line 240 "_localemodule.c"
        var $65=_PyDict_SetItemString($63, __str10, $64); //@line 240 "_localemodule.c"
        var $66=$x; //@line 241 "_localemodule.c"
        var $67=($66)!=0; //@line 241 "_localemodule.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 241 "_localemodule.c"
      case 12: // $bb11
        var $68=$x; //@line 241 "_localemodule.c"
        var $69=$68; //@line 241 "_localemodule.c"
        var $70=HEAP[$69]; //@line 241 "_localemodule.c"
        var $71=($70) - 1; //@line 241 "_localemodule.c"
        var $72=$x; //@line 241 "_localemodule.c"
        var $73=$72; //@line 241 "_localemodule.c"
        HEAP[$73]=$71; //@line 241 "_localemodule.c"
        var $74=$x; //@line 241 "_localemodule.c"
        var $75=$74; //@line 241 "_localemodule.c"
        var $76=HEAP[$75]; //@line 241 "_localemodule.c"
        var $77=($76)==0; //@line 241 "_localemodule.c"
        if ($77) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 241 "_localemodule.c"
      case 13: // $bb12
        var $78=$x; //@line 241 "_localemodule.c"
        var $79=$78+4; //@line 241 "_localemodule.c"
        var $80=HEAP[$79]; //@line 241 "_localemodule.c"
        var $81=$80+24; //@line 241 "_localemodule.c"
        var $82=HEAP[$81]; //@line 241 "_localemodule.c"
        var $83=$x; //@line 241 "_localemodule.c"
        FUNCTION_TABLE[$82]($83); //@line 241 "_localemodule.c"
        __label__ = 14; break; //@line 241 "_localemodule.c"
      case 14: // $bb13
        var $84=$l; //@line 244 "_localemodule.c"
        var $85=$84+12; //@line 244 "_localemodule.c"
        var $86=HEAP[$85]; //@line 244 "_localemodule.c"
        var $87=_PyString_FromString($86); //@line 244 "_localemodule.c"
        $x=$87; //@line 244 "_localemodule.c"
        var $88=($87)==0; //@line 244 "_localemodule.c"
        if ($88) { __label__ = 75; break; } else { __label__ = 15; break; } //@line 244 "_localemodule.c"
      case 15: // $bb14
        var $89=$result; //@line 244 "_localemodule.c"
        var $90=$x; //@line 244 "_localemodule.c"
        var $91=_PyDict_SetItemString($89, __str11, $90); //@line 244 "_localemodule.c"
        var $92=$x; //@line 244 "_localemodule.c"
        var $93=($92)!=0; //@line 244 "_localemodule.c"
        if ($93) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 244 "_localemodule.c"
      case 16: // $bb15
        var $94=$x; //@line 244 "_localemodule.c"
        var $95=$94; //@line 244 "_localemodule.c"
        var $96=HEAP[$95]; //@line 244 "_localemodule.c"
        var $97=($96) - 1; //@line 244 "_localemodule.c"
        var $98=$x; //@line 244 "_localemodule.c"
        var $99=$98; //@line 244 "_localemodule.c"
        HEAP[$99]=$97; //@line 244 "_localemodule.c"
        var $100=$x; //@line 244 "_localemodule.c"
        var $101=$100; //@line 244 "_localemodule.c"
        var $102=HEAP[$101]; //@line 244 "_localemodule.c"
        var $103=($102)==0; //@line 244 "_localemodule.c"
        if ($103) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 244 "_localemodule.c"
      case 17: // $bb16
        var $104=$x; //@line 244 "_localemodule.c"
        var $105=$104+4; //@line 244 "_localemodule.c"
        var $106=HEAP[$105]; //@line 244 "_localemodule.c"
        var $107=$106+24; //@line 244 "_localemodule.c"
        var $108=HEAP[$107]; //@line 244 "_localemodule.c"
        var $109=$x; //@line 244 "_localemodule.c"
        FUNCTION_TABLE[$108]($109); //@line 244 "_localemodule.c"
        __label__ = 18; break; //@line 244 "_localemodule.c"
      case 18: // $bb17
        var $110=$l; //@line 245 "_localemodule.c"
        var $111=$110+16; //@line 245 "_localemodule.c"
        var $112=HEAP[$111]; //@line 245 "_localemodule.c"
        var $113=_PyString_FromString($112); //@line 245 "_localemodule.c"
        $x=$113; //@line 245 "_localemodule.c"
        var $114=($113)==0; //@line 245 "_localemodule.c"
        if ($114) { __label__ = 75; break; } else { __label__ = 19; break; } //@line 245 "_localemodule.c"
      case 19: // $bb18
        var $115=$result; //@line 245 "_localemodule.c"
        var $116=$x; //@line 245 "_localemodule.c"
        var $117=_PyDict_SetItemString($115, __str12, $116); //@line 245 "_localemodule.c"
        var $118=$x; //@line 245 "_localemodule.c"
        var $119=($118)!=0; //@line 245 "_localemodule.c"
        if ($119) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 245 "_localemodule.c"
      case 20: // $bb19
        var $120=$x; //@line 245 "_localemodule.c"
        var $121=$120; //@line 245 "_localemodule.c"
        var $122=HEAP[$121]; //@line 245 "_localemodule.c"
        var $123=($122) - 1; //@line 245 "_localemodule.c"
        var $124=$x; //@line 245 "_localemodule.c"
        var $125=$124; //@line 245 "_localemodule.c"
        HEAP[$125]=$123; //@line 245 "_localemodule.c"
        var $126=$x; //@line 245 "_localemodule.c"
        var $127=$126; //@line 245 "_localemodule.c"
        var $128=HEAP[$127]; //@line 245 "_localemodule.c"
        var $129=($128)==0; //@line 245 "_localemodule.c"
        if ($129) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 245 "_localemodule.c"
      case 21: // $bb20
        var $130=$x; //@line 245 "_localemodule.c"
        var $131=$130+4; //@line 245 "_localemodule.c"
        var $132=HEAP[$131]; //@line 245 "_localemodule.c"
        var $133=$132+24; //@line 245 "_localemodule.c"
        var $134=HEAP[$133]; //@line 245 "_localemodule.c"
        var $135=$x; //@line 245 "_localemodule.c"
        FUNCTION_TABLE[$134]($135); //@line 245 "_localemodule.c"
        __label__ = 22; break; //@line 245 "_localemodule.c"
      case 22: // $bb21
        var $136=$l; //@line 246 "_localemodule.c"
        var $137=$136+20; //@line 246 "_localemodule.c"
        var $138=HEAP[$137]; //@line 246 "_localemodule.c"
        var $139=_PyString_FromString($138); //@line 246 "_localemodule.c"
        $x=$139; //@line 246 "_localemodule.c"
        var $140=($139)==0; //@line 246 "_localemodule.c"
        if ($140) { __label__ = 75; break; } else { __label__ = 23; break; } //@line 246 "_localemodule.c"
      case 23: // $bb22
        var $141=$result; //@line 246 "_localemodule.c"
        var $142=$x; //@line 246 "_localemodule.c"
        var $143=_PyDict_SetItemString($141, __str13, $142); //@line 246 "_localemodule.c"
        var $144=$x; //@line 246 "_localemodule.c"
        var $145=($144)!=0; //@line 246 "_localemodule.c"
        if ($145) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 246 "_localemodule.c"
      case 24: // $bb23
        var $146=$x; //@line 246 "_localemodule.c"
        var $147=$146; //@line 246 "_localemodule.c"
        var $148=HEAP[$147]; //@line 246 "_localemodule.c"
        var $149=($148) - 1; //@line 246 "_localemodule.c"
        var $150=$x; //@line 246 "_localemodule.c"
        var $151=$150; //@line 246 "_localemodule.c"
        HEAP[$151]=$149; //@line 246 "_localemodule.c"
        var $152=$x; //@line 246 "_localemodule.c"
        var $153=$152; //@line 246 "_localemodule.c"
        var $154=HEAP[$153]; //@line 246 "_localemodule.c"
        var $155=($154)==0; //@line 246 "_localemodule.c"
        if ($155) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 246 "_localemodule.c"
      case 25: // $bb24
        var $156=$x; //@line 246 "_localemodule.c"
        var $157=$156+4; //@line 246 "_localemodule.c"
        var $158=HEAP[$157]; //@line 246 "_localemodule.c"
        var $159=$158+24; //@line 246 "_localemodule.c"
        var $160=HEAP[$159]; //@line 246 "_localemodule.c"
        var $161=$x; //@line 246 "_localemodule.c"
        FUNCTION_TABLE[$160]($161); //@line 246 "_localemodule.c"
        __label__ = 26; break; //@line 246 "_localemodule.c"
      case 26: // $bb25
        var $162=$l; //@line 247 "_localemodule.c"
        var $163=$162+24; //@line 247 "_localemodule.c"
        var $164=HEAP[$163]; //@line 247 "_localemodule.c"
        var $165=_PyString_FromString($164); //@line 247 "_localemodule.c"
        $x=$165; //@line 247 "_localemodule.c"
        var $166=($165)==0; //@line 247 "_localemodule.c"
        if ($166) { __label__ = 75; break; } else { __label__ = 27; break; } //@line 247 "_localemodule.c"
      case 27: // $bb26
        var $167=$result; //@line 247 "_localemodule.c"
        var $168=$x; //@line 247 "_localemodule.c"
        var $169=_PyDict_SetItemString($167, __str14, $168); //@line 247 "_localemodule.c"
        var $170=$x; //@line 247 "_localemodule.c"
        var $171=($170)!=0; //@line 247 "_localemodule.c"
        if ($171) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 247 "_localemodule.c"
      case 28: // $bb27
        var $172=$x; //@line 247 "_localemodule.c"
        var $173=$172; //@line 247 "_localemodule.c"
        var $174=HEAP[$173]; //@line 247 "_localemodule.c"
        var $175=($174) - 1; //@line 247 "_localemodule.c"
        var $176=$x; //@line 247 "_localemodule.c"
        var $177=$176; //@line 247 "_localemodule.c"
        HEAP[$177]=$175; //@line 247 "_localemodule.c"
        var $178=$x; //@line 247 "_localemodule.c"
        var $179=$178; //@line 247 "_localemodule.c"
        var $180=HEAP[$179]; //@line 247 "_localemodule.c"
        var $181=($180)==0; //@line 247 "_localemodule.c"
        if ($181) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 247 "_localemodule.c"
      case 29: // $bb28
        var $182=$x; //@line 247 "_localemodule.c"
        var $183=$182+4; //@line 247 "_localemodule.c"
        var $184=HEAP[$183]; //@line 247 "_localemodule.c"
        var $185=$184+24; //@line 247 "_localemodule.c"
        var $186=HEAP[$185]; //@line 247 "_localemodule.c"
        var $187=$x; //@line 247 "_localemodule.c"
        FUNCTION_TABLE[$186]($187); //@line 247 "_localemodule.c"
        __label__ = 30; break; //@line 247 "_localemodule.c"
      case 30: // $bb29
        var $188=$l; //@line 248 "_localemodule.c"
        var $189=$188+28; //@line 248 "_localemodule.c"
        var $190=HEAP[$189]; //@line 248 "_localemodule.c"
        var $191=_copy_grouping($190); //@line 248 "_localemodule.c"
        $x=$191; //@line 248 "_localemodule.c"
        var $192=($191)==0; //@line 249 "_localemodule.c"
        if ($192) { __label__ = 75; break; } else { __label__ = 31; break; } //@line 249 "_localemodule.c"
      case 31: // $bb30
        var $193=$result; //@line 251 "_localemodule.c"
        var $194=$x; //@line 251 "_localemodule.c"
        var $195=_PyDict_SetItemString($193, __str15, $194); //@line 251 "_localemodule.c"
        var $196=$x; //@line 252 "_localemodule.c"
        var $197=($196)!=0; //@line 252 "_localemodule.c"
        if ($197) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 252 "_localemodule.c"
      case 32: // $bb31
        var $198=$x; //@line 252 "_localemodule.c"
        var $199=$198; //@line 252 "_localemodule.c"
        var $200=HEAP[$199]; //@line 252 "_localemodule.c"
        var $201=($200) - 1; //@line 252 "_localemodule.c"
        var $202=$x; //@line 252 "_localemodule.c"
        var $203=$202; //@line 252 "_localemodule.c"
        HEAP[$203]=$201; //@line 252 "_localemodule.c"
        var $204=$x; //@line 252 "_localemodule.c"
        var $205=$204; //@line 252 "_localemodule.c"
        var $206=HEAP[$205]; //@line 252 "_localemodule.c"
        var $207=($206)==0; //@line 252 "_localemodule.c"
        if ($207) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 252 "_localemodule.c"
      case 33: // $bb32
        var $208=$x; //@line 252 "_localemodule.c"
        var $209=$208+4; //@line 252 "_localemodule.c"
        var $210=HEAP[$209]; //@line 252 "_localemodule.c"
        var $211=$210+24; //@line 252 "_localemodule.c"
        var $212=HEAP[$211]; //@line 252 "_localemodule.c"
        var $213=$x; //@line 252 "_localemodule.c"
        FUNCTION_TABLE[$212]($213); //@line 252 "_localemodule.c"
        __label__ = 34; break; //@line 252 "_localemodule.c"
      case 34: // $bb33
        var $214=$l; //@line 253 "_localemodule.c"
        var $215=$214+32; //@line 253 "_localemodule.c"
        var $216=HEAP[$215]; //@line 253 "_localemodule.c"
        var $217=_PyString_FromString($216); //@line 253 "_localemodule.c"
        $x=$217; //@line 253 "_localemodule.c"
        var $218=($217)==0; //@line 253 "_localemodule.c"
        if ($218) { __label__ = 75; break; } else { __label__ = 35; break; } //@line 253 "_localemodule.c"
      case 35: // $bb34
        var $219=$result; //@line 253 "_localemodule.c"
        var $220=$x; //@line 253 "_localemodule.c"
        var $221=_PyDict_SetItemString($219, __str16, $220); //@line 253 "_localemodule.c"
        var $222=$x; //@line 253 "_localemodule.c"
        var $223=($222)!=0; //@line 253 "_localemodule.c"
        if ($223) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 253 "_localemodule.c"
      case 36: // $bb35
        var $224=$x; //@line 253 "_localemodule.c"
        var $225=$224; //@line 253 "_localemodule.c"
        var $226=HEAP[$225]; //@line 253 "_localemodule.c"
        var $227=($226) - 1; //@line 253 "_localemodule.c"
        var $228=$x; //@line 253 "_localemodule.c"
        var $229=$228; //@line 253 "_localemodule.c"
        HEAP[$229]=$227; //@line 253 "_localemodule.c"
        var $230=$x; //@line 253 "_localemodule.c"
        var $231=$230; //@line 253 "_localemodule.c"
        var $232=HEAP[$231]; //@line 253 "_localemodule.c"
        var $233=($232)==0; //@line 253 "_localemodule.c"
        if ($233) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 253 "_localemodule.c"
      case 37: // $bb36
        var $234=$x; //@line 253 "_localemodule.c"
        var $235=$234+4; //@line 253 "_localemodule.c"
        var $236=HEAP[$235]; //@line 253 "_localemodule.c"
        var $237=$236+24; //@line 253 "_localemodule.c"
        var $238=HEAP[$237]; //@line 253 "_localemodule.c"
        var $239=$x; //@line 253 "_localemodule.c"
        FUNCTION_TABLE[$238]($239); //@line 253 "_localemodule.c"
        __label__ = 38; break; //@line 253 "_localemodule.c"
      case 38: // $bb37
        var $240=$l; //@line 254 "_localemodule.c"
        var $241=$240+36; //@line 254 "_localemodule.c"
        var $242=HEAP[$241]; //@line 254 "_localemodule.c"
        var $243=_PyString_FromString($242); //@line 254 "_localemodule.c"
        $x=$243; //@line 254 "_localemodule.c"
        var $244=($243)==0; //@line 254 "_localemodule.c"
        if ($244) { __label__ = 75; break; } else { __label__ = 39; break; } //@line 254 "_localemodule.c"
      case 39: // $bb38
        var $245=$result; //@line 254 "_localemodule.c"
        var $246=$x; //@line 254 "_localemodule.c"
        var $247=_PyDict_SetItemString($245, __str17, $246); //@line 254 "_localemodule.c"
        var $248=$x; //@line 254 "_localemodule.c"
        var $249=($248)!=0; //@line 254 "_localemodule.c"
        if ($249) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 254 "_localemodule.c"
      case 40: // $bb39
        var $250=$x; //@line 254 "_localemodule.c"
        var $251=$250; //@line 254 "_localemodule.c"
        var $252=HEAP[$251]; //@line 254 "_localemodule.c"
        var $253=($252) - 1; //@line 254 "_localemodule.c"
        var $254=$x; //@line 254 "_localemodule.c"
        var $255=$254; //@line 254 "_localemodule.c"
        HEAP[$255]=$253; //@line 254 "_localemodule.c"
        var $256=$x; //@line 254 "_localemodule.c"
        var $257=$256; //@line 254 "_localemodule.c"
        var $258=HEAP[$257]; //@line 254 "_localemodule.c"
        var $259=($258)==0; //@line 254 "_localemodule.c"
        if ($259) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 254 "_localemodule.c"
      case 41: // $bb40
        var $260=$x; //@line 254 "_localemodule.c"
        var $261=$260+4; //@line 254 "_localemodule.c"
        var $262=HEAP[$261]; //@line 254 "_localemodule.c"
        var $263=$262+24; //@line 254 "_localemodule.c"
        var $264=HEAP[$263]; //@line 254 "_localemodule.c"
        var $265=$x; //@line 254 "_localemodule.c"
        FUNCTION_TABLE[$264]($265); //@line 254 "_localemodule.c"
        __label__ = 42; break; //@line 254 "_localemodule.c"
      case 42: // $bb41
        var $266=$l; //@line 255 "_localemodule.c"
        var $267=$266+40; //@line 255 "_localemodule.c"
        var $268=HEAP[$267]; //@line 255 "_localemodule.c"
        var $269=($268); //@line 255 "_localemodule.c"
        var $270=_PyInt_FromLong($269); //@line 255 "_localemodule.c"
        $x=$270; //@line 255 "_localemodule.c"
        var $271=($270)==0; //@line 255 "_localemodule.c"
        if ($271) { __label__ = 75; break; } else { __label__ = 43; break; } //@line 255 "_localemodule.c"
      case 43: // $bb42
        var $272=$result; //@line 255 "_localemodule.c"
        var $273=$x; //@line 255 "_localemodule.c"
        var $274=_PyDict_SetItemString($272, __str18, $273); //@line 255 "_localemodule.c"
        var $275=$x; //@line 255 "_localemodule.c"
        var $276=($275)!=0; //@line 255 "_localemodule.c"
        if ($276) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 255 "_localemodule.c"
      case 44: // $bb43
        var $277=$x; //@line 255 "_localemodule.c"
        var $278=$277; //@line 255 "_localemodule.c"
        var $279=HEAP[$278]; //@line 255 "_localemodule.c"
        var $280=($279) - 1; //@line 255 "_localemodule.c"
        var $281=$x; //@line 255 "_localemodule.c"
        var $282=$281; //@line 255 "_localemodule.c"
        HEAP[$282]=$280; //@line 255 "_localemodule.c"
        var $283=$x; //@line 255 "_localemodule.c"
        var $284=$283; //@line 255 "_localemodule.c"
        var $285=HEAP[$284]; //@line 255 "_localemodule.c"
        var $286=($285)==0; //@line 255 "_localemodule.c"
        if ($286) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 255 "_localemodule.c"
      case 45: // $bb44
        var $287=$x; //@line 255 "_localemodule.c"
        var $288=$287+4; //@line 255 "_localemodule.c"
        var $289=HEAP[$288]; //@line 255 "_localemodule.c"
        var $290=$289+24; //@line 255 "_localemodule.c"
        var $291=HEAP[$290]; //@line 255 "_localemodule.c"
        var $292=$x; //@line 255 "_localemodule.c"
        FUNCTION_TABLE[$291]($292); //@line 255 "_localemodule.c"
        __label__ = 46; break; //@line 255 "_localemodule.c"
      case 46: // $bb45
        var $293=$l; //@line 256 "_localemodule.c"
        var $294=$293+41; //@line 256 "_localemodule.c"
        var $295=HEAP[$294]; //@line 256 "_localemodule.c"
        var $296=($295); //@line 256 "_localemodule.c"
        var $297=_PyInt_FromLong($296); //@line 256 "_localemodule.c"
        $x=$297; //@line 256 "_localemodule.c"
        var $298=($297)==0; //@line 256 "_localemodule.c"
        if ($298) { __label__ = 75; break; } else { __label__ = 47; break; } //@line 256 "_localemodule.c"
      case 47: // $bb46
        var $299=$result; //@line 256 "_localemodule.c"
        var $300=$x; //@line 256 "_localemodule.c"
        var $301=_PyDict_SetItemString($299, __str19, $300); //@line 256 "_localemodule.c"
        var $302=$x; //@line 256 "_localemodule.c"
        var $303=($302)!=0; //@line 256 "_localemodule.c"
        if ($303) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 256 "_localemodule.c"
      case 48: // $bb47
        var $304=$x; //@line 256 "_localemodule.c"
        var $305=$304; //@line 256 "_localemodule.c"
        var $306=HEAP[$305]; //@line 256 "_localemodule.c"
        var $307=($306) - 1; //@line 256 "_localemodule.c"
        var $308=$x; //@line 256 "_localemodule.c"
        var $309=$308; //@line 256 "_localemodule.c"
        HEAP[$309]=$307; //@line 256 "_localemodule.c"
        var $310=$x; //@line 256 "_localemodule.c"
        var $311=$310; //@line 256 "_localemodule.c"
        var $312=HEAP[$311]; //@line 256 "_localemodule.c"
        var $313=($312)==0; //@line 256 "_localemodule.c"
        if ($313) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 256 "_localemodule.c"
      case 49: // $bb48
        var $314=$x; //@line 256 "_localemodule.c"
        var $315=$314+4; //@line 256 "_localemodule.c"
        var $316=HEAP[$315]; //@line 256 "_localemodule.c"
        var $317=$316+24; //@line 256 "_localemodule.c"
        var $318=HEAP[$317]; //@line 256 "_localemodule.c"
        var $319=$x; //@line 256 "_localemodule.c"
        FUNCTION_TABLE[$318]($319); //@line 256 "_localemodule.c"
        __label__ = 50; break; //@line 256 "_localemodule.c"
      case 50: // $bb49
        var $320=$l; //@line 257 "_localemodule.c"
        var $321=$320+42; //@line 257 "_localemodule.c"
        var $322=HEAP[$321]; //@line 257 "_localemodule.c"
        var $323=($322); //@line 257 "_localemodule.c"
        var $324=_PyInt_FromLong($323); //@line 257 "_localemodule.c"
        $x=$324; //@line 257 "_localemodule.c"
        var $325=($324)==0; //@line 257 "_localemodule.c"
        if ($325) { __label__ = 75; break; } else { __label__ = 51; break; } //@line 257 "_localemodule.c"
      case 51: // $bb50
        var $326=$result; //@line 257 "_localemodule.c"
        var $327=$x; //@line 257 "_localemodule.c"
        var $328=_PyDict_SetItemString($326, __str20, $327); //@line 257 "_localemodule.c"
        var $329=$x; //@line 257 "_localemodule.c"
        var $330=($329)!=0; //@line 257 "_localemodule.c"
        if ($330) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 257 "_localemodule.c"
      case 52: // $bb51
        var $331=$x; //@line 257 "_localemodule.c"
        var $332=$331; //@line 257 "_localemodule.c"
        var $333=HEAP[$332]; //@line 257 "_localemodule.c"
        var $334=($333) - 1; //@line 257 "_localemodule.c"
        var $335=$x; //@line 257 "_localemodule.c"
        var $336=$335; //@line 257 "_localemodule.c"
        HEAP[$336]=$334; //@line 257 "_localemodule.c"
        var $337=$x; //@line 257 "_localemodule.c"
        var $338=$337; //@line 257 "_localemodule.c"
        var $339=HEAP[$338]; //@line 257 "_localemodule.c"
        var $340=($339)==0; //@line 257 "_localemodule.c"
        if ($340) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 257 "_localemodule.c"
      case 53: // $bb52
        var $341=$x; //@line 257 "_localemodule.c"
        var $342=$341+4; //@line 257 "_localemodule.c"
        var $343=HEAP[$342]; //@line 257 "_localemodule.c"
        var $344=$343+24; //@line 257 "_localemodule.c"
        var $345=HEAP[$344]; //@line 257 "_localemodule.c"
        var $346=$x; //@line 257 "_localemodule.c"
        FUNCTION_TABLE[$345]($346); //@line 257 "_localemodule.c"
        __label__ = 54; break; //@line 257 "_localemodule.c"
      case 54: // $bb53
        var $347=$l; //@line 258 "_localemodule.c"
        var $348=$347+43; //@line 258 "_localemodule.c"
        var $349=HEAP[$348]; //@line 258 "_localemodule.c"
        var $350=($349); //@line 258 "_localemodule.c"
        var $351=_PyInt_FromLong($350); //@line 258 "_localemodule.c"
        $x=$351; //@line 258 "_localemodule.c"
        var $352=($351)==0; //@line 258 "_localemodule.c"
        if ($352) { __label__ = 75; break; } else { __label__ = 55; break; } //@line 258 "_localemodule.c"
      case 55: // $bb54
        var $353=$result; //@line 258 "_localemodule.c"
        var $354=$x; //@line 258 "_localemodule.c"
        var $355=_PyDict_SetItemString($353, __str21, $354); //@line 258 "_localemodule.c"
        var $356=$x; //@line 258 "_localemodule.c"
        var $357=($356)!=0; //@line 258 "_localemodule.c"
        if ($357) { __label__ = 56; break; } else { __label__ = 58; break; } //@line 258 "_localemodule.c"
      case 56: // $bb55
        var $358=$x; //@line 258 "_localemodule.c"
        var $359=$358; //@line 258 "_localemodule.c"
        var $360=HEAP[$359]; //@line 258 "_localemodule.c"
        var $361=($360) - 1; //@line 258 "_localemodule.c"
        var $362=$x; //@line 258 "_localemodule.c"
        var $363=$362; //@line 258 "_localemodule.c"
        HEAP[$363]=$361; //@line 258 "_localemodule.c"
        var $364=$x; //@line 258 "_localemodule.c"
        var $365=$364; //@line 258 "_localemodule.c"
        var $366=HEAP[$365]; //@line 258 "_localemodule.c"
        var $367=($366)==0; //@line 258 "_localemodule.c"
        if ($367) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 258 "_localemodule.c"
      case 57: // $bb56
        var $368=$x; //@line 258 "_localemodule.c"
        var $369=$368+4; //@line 258 "_localemodule.c"
        var $370=HEAP[$369]; //@line 258 "_localemodule.c"
        var $371=$370+24; //@line 258 "_localemodule.c"
        var $372=HEAP[$371]; //@line 258 "_localemodule.c"
        var $373=$x; //@line 258 "_localemodule.c"
        FUNCTION_TABLE[$372]($373); //@line 258 "_localemodule.c"
        __label__ = 58; break; //@line 258 "_localemodule.c"
      case 58: // $bb57
        var $374=$l; //@line 259 "_localemodule.c"
        var $375=$374+44; //@line 259 "_localemodule.c"
        var $376=HEAP[$375]; //@line 259 "_localemodule.c"
        var $377=($376); //@line 259 "_localemodule.c"
        var $378=_PyInt_FromLong($377); //@line 259 "_localemodule.c"
        $x=$378; //@line 259 "_localemodule.c"
        var $379=($378)==0; //@line 259 "_localemodule.c"
        if ($379) { __label__ = 75; break; } else { __label__ = 59; break; } //@line 259 "_localemodule.c"
      case 59: // $bb58
        var $380=$result; //@line 259 "_localemodule.c"
        var $381=$x; //@line 259 "_localemodule.c"
        var $382=_PyDict_SetItemString($380, __str22, $381); //@line 259 "_localemodule.c"
        var $383=$x; //@line 259 "_localemodule.c"
        var $384=($383)!=0; //@line 259 "_localemodule.c"
        if ($384) { __label__ = 60; break; } else { __label__ = 62; break; } //@line 259 "_localemodule.c"
      case 60: // $bb59
        var $385=$x; //@line 259 "_localemodule.c"
        var $386=$385; //@line 259 "_localemodule.c"
        var $387=HEAP[$386]; //@line 259 "_localemodule.c"
        var $388=($387) - 1; //@line 259 "_localemodule.c"
        var $389=$x; //@line 259 "_localemodule.c"
        var $390=$389; //@line 259 "_localemodule.c"
        HEAP[$390]=$388; //@line 259 "_localemodule.c"
        var $391=$x; //@line 259 "_localemodule.c"
        var $392=$391; //@line 259 "_localemodule.c"
        var $393=HEAP[$392]; //@line 259 "_localemodule.c"
        var $394=($393)==0; //@line 259 "_localemodule.c"
        if ($394) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 259 "_localemodule.c"
      case 61: // $bb60
        var $395=$x; //@line 259 "_localemodule.c"
        var $396=$395+4; //@line 259 "_localemodule.c"
        var $397=HEAP[$396]; //@line 259 "_localemodule.c"
        var $398=$397+24; //@line 259 "_localemodule.c"
        var $399=HEAP[$398]; //@line 259 "_localemodule.c"
        var $400=$x; //@line 259 "_localemodule.c"
        FUNCTION_TABLE[$399]($400); //@line 259 "_localemodule.c"
        __label__ = 62; break; //@line 259 "_localemodule.c"
      case 62: // $bb61
        var $401=$l; //@line 260 "_localemodule.c"
        var $402=$401+45; //@line 260 "_localemodule.c"
        var $403=HEAP[$402]; //@line 260 "_localemodule.c"
        var $404=($403); //@line 260 "_localemodule.c"
        var $405=_PyInt_FromLong($404); //@line 260 "_localemodule.c"
        $x=$405; //@line 260 "_localemodule.c"
        var $406=($405)==0; //@line 260 "_localemodule.c"
        if ($406) { __label__ = 75; break; } else { __label__ = 63; break; } //@line 260 "_localemodule.c"
      case 63: // $bb62
        var $407=$result; //@line 260 "_localemodule.c"
        var $408=$x; //@line 260 "_localemodule.c"
        var $409=_PyDict_SetItemString($407, __str23, $408); //@line 260 "_localemodule.c"
        var $410=$x; //@line 260 "_localemodule.c"
        var $411=($410)!=0; //@line 260 "_localemodule.c"
        if ($411) { __label__ = 64; break; } else { __label__ = 66; break; } //@line 260 "_localemodule.c"
      case 64: // $bb63
        var $412=$x; //@line 260 "_localemodule.c"
        var $413=$412; //@line 260 "_localemodule.c"
        var $414=HEAP[$413]; //@line 260 "_localemodule.c"
        var $415=($414) - 1; //@line 260 "_localemodule.c"
        var $416=$x; //@line 260 "_localemodule.c"
        var $417=$416; //@line 260 "_localemodule.c"
        HEAP[$417]=$415; //@line 260 "_localemodule.c"
        var $418=$x; //@line 260 "_localemodule.c"
        var $419=$418; //@line 260 "_localemodule.c"
        var $420=HEAP[$419]; //@line 260 "_localemodule.c"
        var $421=($420)==0; //@line 260 "_localemodule.c"
        if ($421) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 260 "_localemodule.c"
      case 65: // $bb64
        var $422=$x; //@line 260 "_localemodule.c"
        var $423=$422+4; //@line 260 "_localemodule.c"
        var $424=HEAP[$423]; //@line 260 "_localemodule.c"
        var $425=$424+24; //@line 260 "_localemodule.c"
        var $426=HEAP[$425]; //@line 260 "_localemodule.c"
        var $427=$x; //@line 260 "_localemodule.c"
        FUNCTION_TABLE[$426]($427); //@line 260 "_localemodule.c"
        __label__ = 66; break; //@line 260 "_localemodule.c"
      case 66: // $bb65
        var $428=$l; //@line 261 "_localemodule.c"
        var $429=$428+46; //@line 261 "_localemodule.c"
        var $430=HEAP[$429]; //@line 261 "_localemodule.c"
        var $431=($430); //@line 261 "_localemodule.c"
        var $432=_PyInt_FromLong($431); //@line 261 "_localemodule.c"
        $x=$432; //@line 261 "_localemodule.c"
        var $433=($432)==0; //@line 261 "_localemodule.c"
        if ($433) { __label__ = 75; break; } else { __label__ = 67; break; } //@line 261 "_localemodule.c"
      case 67: // $bb66
        var $434=$result; //@line 261 "_localemodule.c"
        var $435=$x; //@line 261 "_localemodule.c"
        var $436=_PyDict_SetItemString($434, __str24, $435); //@line 261 "_localemodule.c"
        var $437=$x; //@line 261 "_localemodule.c"
        var $438=($437)!=0; //@line 261 "_localemodule.c"
        if ($438) { __label__ = 68; break; } else { __label__ = 70; break; } //@line 261 "_localemodule.c"
      case 68: // $bb67
        var $439=$x; //@line 261 "_localemodule.c"
        var $440=$439; //@line 261 "_localemodule.c"
        var $441=HEAP[$440]; //@line 261 "_localemodule.c"
        var $442=($441) - 1; //@line 261 "_localemodule.c"
        var $443=$x; //@line 261 "_localemodule.c"
        var $444=$443; //@line 261 "_localemodule.c"
        HEAP[$444]=$442; //@line 261 "_localemodule.c"
        var $445=$x; //@line 261 "_localemodule.c"
        var $446=$445; //@line 261 "_localemodule.c"
        var $447=HEAP[$446]; //@line 261 "_localemodule.c"
        var $448=($447)==0; //@line 261 "_localemodule.c"
        if ($448) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 261 "_localemodule.c"
      case 69: // $bb68
        var $449=$x; //@line 261 "_localemodule.c"
        var $450=$449+4; //@line 261 "_localemodule.c"
        var $451=HEAP[$450]; //@line 261 "_localemodule.c"
        var $452=$451+24; //@line 261 "_localemodule.c"
        var $453=HEAP[$452]; //@line 261 "_localemodule.c"
        var $454=$x; //@line 261 "_localemodule.c"
        FUNCTION_TABLE[$453]($454); //@line 261 "_localemodule.c"
        __label__ = 70; break; //@line 261 "_localemodule.c"
      case 70: // $bb69
        var $455=$l; //@line 262 "_localemodule.c"
        var $456=$455+47; //@line 262 "_localemodule.c"
        var $457=HEAP[$456]; //@line 262 "_localemodule.c"
        var $458=($457); //@line 262 "_localemodule.c"
        var $459=_PyInt_FromLong($458); //@line 262 "_localemodule.c"
        $x=$459; //@line 262 "_localemodule.c"
        var $460=($459)==0; //@line 262 "_localemodule.c"
        if ($460) { __label__ = 75; break; } else { __label__ = 71; break; } //@line 262 "_localemodule.c"
      case 71: // $bb70
        var $461=$result; //@line 262 "_localemodule.c"
        var $462=$x; //@line 262 "_localemodule.c"
        var $463=_PyDict_SetItemString($461, __str25, $462); //@line 262 "_localemodule.c"
        var $464=$x; //@line 262 "_localemodule.c"
        var $465=($464)!=0; //@line 262 "_localemodule.c"
        if ($465) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 262 "_localemodule.c"
      case 72: // $bb71
        var $466=$x; //@line 262 "_localemodule.c"
        var $467=$466; //@line 262 "_localemodule.c"
        var $468=HEAP[$467]; //@line 262 "_localemodule.c"
        var $469=($468) - 1; //@line 262 "_localemodule.c"
        var $470=$x; //@line 262 "_localemodule.c"
        var $471=$470; //@line 262 "_localemodule.c"
        HEAP[$471]=$469; //@line 262 "_localemodule.c"
        var $472=$x; //@line 262 "_localemodule.c"
        var $473=$472; //@line 262 "_localemodule.c"
        var $474=HEAP[$473]; //@line 262 "_localemodule.c"
        var $475=($474)==0; //@line 262 "_localemodule.c"
        if ($475) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 262 "_localemodule.c"
      case 73: // $bb72
        var $476=$x; //@line 262 "_localemodule.c"
        var $477=$476+4; //@line 262 "_localemodule.c"
        var $478=HEAP[$477]; //@line 262 "_localemodule.c"
        var $479=$478+24; //@line 262 "_localemodule.c"
        var $480=HEAP[$479]; //@line 262 "_localemodule.c"
        var $481=$x; //@line 262 "_localemodule.c"
        FUNCTION_TABLE[$480]($481); //@line 262 "_localemodule.c"
        __label__ = 74; break; //@line 262 "_localemodule.c"
      case 74: // $bb73
        var $482=$result; //@line 263 "_localemodule.c"
        $0=$482; //@line 263 "_localemodule.c"
        __label__ = 82; break; //@line 263 "_localemodule.c"
      case 75: // $failed
        var $483=$result; //@line 266 "_localemodule.c"
        var $484=($483)!=0; //@line 266 "_localemodule.c"
        if ($484) { __label__ = 76; break; } else { __label__ = 78; break; } //@line 266 "_localemodule.c"
      case 76: // $bb74
        var $485=$result; //@line 266 "_localemodule.c"
        var $486=$485; //@line 266 "_localemodule.c"
        var $487=HEAP[$486]; //@line 266 "_localemodule.c"
        var $488=($487) - 1; //@line 266 "_localemodule.c"
        var $489=$result; //@line 266 "_localemodule.c"
        var $490=$489; //@line 266 "_localemodule.c"
        HEAP[$490]=$488; //@line 266 "_localemodule.c"
        var $491=$result; //@line 266 "_localemodule.c"
        var $492=$491; //@line 266 "_localemodule.c"
        var $493=HEAP[$492]; //@line 266 "_localemodule.c"
        var $494=($493)==0; //@line 266 "_localemodule.c"
        if ($494) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 266 "_localemodule.c"
      case 77: // $bb75
        var $495=$result; //@line 266 "_localemodule.c"
        var $496=$495+4; //@line 266 "_localemodule.c"
        var $497=HEAP[$496]; //@line 266 "_localemodule.c"
        var $498=$497+24; //@line 266 "_localemodule.c"
        var $499=HEAP[$498]; //@line 266 "_localemodule.c"
        var $500=$result; //@line 266 "_localemodule.c"
        FUNCTION_TABLE[$499]($500); //@line 266 "_localemodule.c"
        __label__ = 78; break; //@line 266 "_localemodule.c"
      case 78: // $bb76
        var $501=$x; //@line 267 "_localemodule.c"
        var $502=($501)!=0; //@line 267 "_localemodule.c"
        if ($502) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 267 "_localemodule.c"
      case 79: // $bb77
        var $503=$x; //@line 267 "_localemodule.c"
        var $504=$503; //@line 267 "_localemodule.c"
        var $505=HEAP[$504]; //@line 267 "_localemodule.c"
        var $506=($505) - 1; //@line 267 "_localemodule.c"
        var $507=$x; //@line 267 "_localemodule.c"
        var $508=$507; //@line 267 "_localemodule.c"
        HEAP[$508]=$506; //@line 267 "_localemodule.c"
        var $509=$x; //@line 267 "_localemodule.c"
        var $510=$509; //@line 267 "_localemodule.c"
        var $511=HEAP[$510]; //@line 267 "_localemodule.c"
        var $512=($511)==0; //@line 267 "_localemodule.c"
        if ($512) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 267 "_localemodule.c"
      case 80: // $bb78
        var $513=$x; //@line 267 "_localemodule.c"
        var $514=$513+4; //@line 267 "_localemodule.c"
        var $515=HEAP[$514]; //@line 267 "_localemodule.c"
        var $516=$515+24; //@line 267 "_localemodule.c"
        var $517=HEAP[$516]; //@line 267 "_localemodule.c"
        var $518=$x; //@line 267 "_localemodule.c"
        FUNCTION_TABLE[$517]($518); //@line 267 "_localemodule.c"
        __label__ = 81; break; //@line 267 "_localemodule.c"
      case 81: // $bb79
        $0=0; //@line 268 "_localemodule.c"
        __label__ = 82; break; //@line 268 "_localemodule.c"
      case 82: // $bb80
        var $519=$0; //@line 214 "_localemodule.c"
        $retval=$519; //@line 214 "_localemodule.c"
        var $retval81=$retval; //@line 214 "_localemodule.c"
        ;
        return $retval81; //@line 214 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_strcoll($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_45;
        var $iftmp_43;
        var $iftmp_36;
        var $iftmp_34;
        var $0;
        var $os1=__stackBase__;
        var $os2=__stackBase__+4;
        var $result;
        var $ws1;
        var $ws2;
        var $rel1;
        var $rel2;
        var $len1;
        var $len2;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 284 "_localemodule.c"
        $ws1=0; //@line 285 "_localemodule.c"
        $ws2=0; //@line 285 "_localemodule.c"
        $rel1=0; //@line 286 "_localemodule.c"
        $rel2=0; //@line 286 "_localemodule.c"
        var $1=$args_addr; //@line 288 "_localemodule.c"
        var $2=_PyArg_UnpackTuple($1, __str26, 2, 2, allocate([$os1,0,0,0,$os2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 288 "_localemodule.c"
        var $3=($2)==0; //@line 288 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 288 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 289 "_localemodule.c"
        __label__ = 47; break; //@line 289 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$os1]; //@line 291 "_localemodule.c"
        var $5=$4+4; //@line 291 "_localemodule.c"
        var $6=HEAP[$5]; //@line 291 "_localemodule.c"
        var $7=$6+84; //@line 291 "_localemodule.c"
        var $8=HEAP[$7]; //@line 291 "_localemodule.c"
        var $9=($8) & 134217728; //@line 291 "_localemodule.c"
        var $10=($9)!=0; //@line 291 "_localemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 291 "_localemodule.c"
      case 3: // $bb2
        var $11=HEAP[$os2]; //@line 291 "_localemodule.c"
        var $12=$11+4; //@line 291 "_localemodule.c"
        var $13=HEAP[$12]; //@line 291 "_localemodule.c"
        var $14=$13+84; //@line 291 "_localemodule.c"
        var $15=HEAP[$14]; //@line 291 "_localemodule.c"
        var $16=($15) & 134217728; //@line 291 "_localemodule.c"
        var $17=($16)!=0; //@line 291 "_localemodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 291 "_localemodule.c"
      case 4: // $bb3
        var $18=HEAP[$os2]; //@line 292 "_localemodule.c"
        var $19=$18; //@line 292 "_localemodule.c"
        var $20=$19+20; //@line 292 "_localemodule.c"
        var $21=$20; //@line 292 "_localemodule.c"
        var $22=HEAP[$os1]; //@line 292 "_localemodule.c"
        var $23=$22; //@line 292 "_localemodule.c"
        var $24=$23+20; //@line 292 "_localemodule.c"
        var $25=$24; //@line 292 "_localemodule.c"
        var $26=_strcoll($25, $21); //@line 292 "_localemodule.c"
        var $27=_PyInt_FromLong($26); //@line 292 "_localemodule.c"
        $0=$27; //@line 292 "_localemodule.c"
        __label__ = 47; break; //@line 292 "_localemodule.c"
      case 5: // $bb4
        var $28=HEAP[$os1]; //@line 295 "_localemodule.c"
        var $29=$28+4; //@line 295 "_localemodule.c"
        var $30=HEAP[$29]; //@line 295 "_localemodule.c"
        var $31=$30+84; //@line 295 "_localemodule.c"
        var $32=HEAP[$31]; //@line 295 "_localemodule.c"
        var $33=($32) & 268435456; //@line 295 "_localemodule.c"
        var $34=($33)==0; //@line 295 "_localemodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 295 "_localemodule.c"
      case 6: // $bb5
        var $35=HEAP[$os2]; //@line 295 "_localemodule.c"
        var $36=$35+4; //@line 295 "_localemodule.c"
        var $37=HEAP[$36]; //@line 295 "_localemodule.c"
        var $38=$37+84; //@line 295 "_localemodule.c"
        var $39=HEAP[$38]; //@line 295 "_localemodule.c"
        var $40=($39) & 268435456; //@line 295 "_localemodule.c"
        var $41=($40)==0; //@line 295 "_localemodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 295 "_localemodule.c"
      case 7: // $bb6
        var $42=HEAP[_PyExc_ValueError]; //@line 296 "_localemodule.c"
        _PyErr_SetString($42, __str27); //@line 296 "_localemodule.c"
        __label__ = 8; break; //@line 296 "_localemodule.c"
      case 8: // $bb7
        var $43=HEAP[$os1]; //@line 299 "_localemodule.c"
        var $44=$43+4; //@line 299 "_localemodule.c"
        var $45=HEAP[$44]; //@line 299 "_localemodule.c"
        var $46=$45+84; //@line 299 "_localemodule.c"
        var $47=HEAP[$46]; //@line 299 "_localemodule.c"
        var $48=($47) & 268435456; //@line 299 "_localemodule.c"
        var $49=($48)==0; //@line 299 "_localemodule.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 299 "_localemodule.c"
      case 9: // $bb8
        var $50=HEAP[$os1]; //@line 300 "_localemodule.c"
        var $51=_PyUnicodeUCS2_FromObject($50); //@line 300 "_localemodule.c"
        HEAP[$os1]=$51; //@line 300 "_localemodule.c"
        var $52=HEAP[$os1]; //@line 301 "_localemodule.c"
        var $53=($52)==0; //@line 301 "_localemodule.c"
        if ($53) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 301 "_localemodule.c"
      case 10: // $bb9
        $0=0; //@line 302 "_localemodule.c"
        __label__ = 47; break; //@line 302 "_localemodule.c"
      case 11: // $bb10
        $rel1=1; //@line 303 "_localemodule.c"
        __label__ = 12; break; //@line 303 "_localemodule.c"
      case 12: // $bb11
        var $54=HEAP[$os2]; //@line 305 "_localemodule.c"
        var $55=$54+4; //@line 305 "_localemodule.c"
        var $56=HEAP[$55]; //@line 305 "_localemodule.c"
        var $57=$56+84; //@line 305 "_localemodule.c"
        var $58=HEAP[$57]; //@line 305 "_localemodule.c"
        var $59=($58) & 268435456; //@line 305 "_localemodule.c"
        var $60=($59)==0; //@line 305 "_localemodule.c"
        if ($60) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 305 "_localemodule.c"
      case 13: // $bb12
        var $61=HEAP[$os2]; //@line 306 "_localemodule.c"
        var $62=_PyUnicodeUCS2_FromObject($61); //@line 306 "_localemodule.c"
        HEAP[$os2]=$62; //@line 306 "_localemodule.c"
        var $63=HEAP[$os2]; //@line 307 "_localemodule.c"
        var $64=($63)==0; //@line 307 "_localemodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 307 "_localemodule.c"
      case 14: // $bb13
        var $65=$rel1; //@line 308 "_localemodule.c"
        var $66=($65)!=0; //@line 308 "_localemodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 308 "_localemodule.c"
      case 15: // $bb14
        var $67=HEAP[$os1]; //@line 309 "_localemodule.c"
        var $68=$67; //@line 309 "_localemodule.c"
        var $69=HEAP[$68]; //@line 309 "_localemodule.c"
        var $70=($69) - 1; //@line 309 "_localemodule.c"
        var $71=$67; //@line 309 "_localemodule.c"
        HEAP[$71]=$70; //@line 309 "_localemodule.c"
        var $72=$67; //@line 309 "_localemodule.c"
        var $73=HEAP[$72]; //@line 309 "_localemodule.c"
        var $74=($73)==0; //@line 309 "_localemodule.c"
        if ($74) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 309 "_localemodule.c"
      case 16: // $bb15
        var $75=HEAP[$os1]; //@line 309 "_localemodule.c"
        var $76=$75+4; //@line 309 "_localemodule.c"
        var $77=HEAP[$76]; //@line 309 "_localemodule.c"
        var $78=$77+24; //@line 309 "_localemodule.c"
        var $79=HEAP[$78]; //@line 309 "_localemodule.c"
        var $80=HEAP[$os1]; //@line 309 "_localemodule.c"
        FUNCTION_TABLE[$79]($80); //@line 309 "_localemodule.c"
        __label__ = 17; break; //@line 309 "_localemodule.c"
      case 17: // $bb16
        $0=0; //@line 311 "_localemodule.c"
        __label__ = 47; break; //@line 311 "_localemodule.c"
      case 18: // $bb17
        $rel2=1; //@line 313 "_localemodule.c"
        __label__ = 19; break; //@line 313 "_localemodule.c"
      case 19: // $bb18
        var $81=HEAP[$os1]; //@line 316 "_localemodule.c"
        var $82=$81; //@line 316 "_localemodule.c"
        var $83=$82+8; //@line 316 "_localemodule.c"
        var $84=HEAP[$83]; //@line 316 "_localemodule.c"
        var $85=($84) + 1; //@line 316 "_localemodule.c"
        $len1=$85; //@line 316 "_localemodule.c"
        var $86=$len1; //@line 317 "_localemodule.c"
        var $87=($86) * 4; //@line 317 "_localemodule.c"
        var $88=($87) >= 0; //@line 317 "_localemodule.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 317 "_localemodule.c"
      case 20: // $bb19
        var $89=$len1; //@line 317 "_localemodule.c"
        var $90=($89) * 4; //@line 317 "_localemodule.c"
        var $91=($90)!=0; //@line 317 "_localemodule.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 317 "_localemodule.c"
      case 21: // $bb20
        var $92=$len1; //@line 317 "_localemodule.c"
        var $93=($92) * 4; //@line 317 "_localemodule.c"
        $iftmp_36=$93; //@line 317 "_localemodule.c"
        __label__ = 24; break; //@line 317 "_localemodule.c"
      case 22: // $bb21
        $iftmp_36=1; //@line 317 "_localemodule.c"
        __label__ = 24; break; //@line 317 "_localemodule.c"
      case 23: // $bb24_thread
        $iftmp_34=0; //@line 317 "_localemodule.c"
        $ws1=0; //@line 317 "_localemodule.c"
        __label__ = 25; break;
      case 24: // $bb24
        var $94=$iftmp_36; //@line 317 "_localemodule.c"
        var $95=_malloc($94); //@line 317 "_localemodule.c"
        var $96=$95; //@line 317 "_localemodule.c"
        $iftmp_34=$96; //@line 317 "_localemodule.c"
        $ws1=$96; //@line 317 "_localemodule.c"
        var $97=($96)==0; //@line 318 "_localemodule.c"
        if ($97) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 318 "_localemodule.c"
      case 25: // $bb25
        var $98=_PyErr_NoMemory(); //@line 319 "_localemodule.c"
        __label__ = 36; break; //@line 319 "_localemodule.c"
      case 26: // $bb26
        var $99=HEAP[$os1]; //@line 322 "_localemodule.c"
        var $100=$99; //@line 322 "_localemodule.c"
        var $101=$ws1; //@line 322 "_localemodule.c"
        var $102=$len1; //@line 322 "_localemodule.c"
        var $103=_PyUnicodeUCS2_AsWideChar($100, $101, $102); //@line 322 "_localemodule.c"
        var $104=($103)==-1; //@line 322 "_localemodule.c"
        if ($104) { __label__ = 36; break; } else { __label__ = 27; break; } //@line 322 "_localemodule.c"
      case 27: // $bb27
        var $105=$len1; //@line 324 "_localemodule.c"
        var $106=($105) - 1; //@line 324 "_localemodule.c"
        var $107=$ws1; //@line 324 "_localemodule.c"
        var $108=$107+4*$106; //@line 324 "_localemodule.c"
        HEAP[$108]=0; //@line 324 "_localemodule.c"
        var $109=HEAP[$os2]; //@line 325 "_localemodule.c"
        var $110=$109; //@line 325 "_localemodule.c"
        var $111=$110+8; //@line 325 "_localemodule.c"
        var $112=HEAP[$111]; //@line 325 "_localemodule.c"
        var $113=($112) + 1; //@line 325 "_localemodule.c"
        $len2=$113; //@line 325 "_localemodule.c"
        var $114=$len2; //@line 326 "_localemodule.c"
        var $115=($114) * 4; //@line 326 "_localemodule.c"
        var $116=($115) >= 0; //@line 326 "_localemodule.c"
        if ($116) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 326 "_localemodule.c"
      case 28: // $bb28
        var $117=$len2; //@line 326 "_localemodule.c"
        var $118=($117) * 4; //@line 326 "_localemodule.c"
        var $119=($118)!=0; //@line 326 "_localemodule.c"
        if ($119) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 326 "_localemodule.c"
      case 29: // $bb29
        var $120=$len2; //@line 326 "_localemodule.c"
        var $121=($120) * 4; //@line 326 "_localemodule.c"
        $iftmp_45=$121; //@line 326 "_localemodule.c"
        __label__ = 32; break; //@line 326 "_localemodule.c"
      case 30: // $bb30
        $iftmp_45=1; //@line 326 "_localemodule.c"
        __label__ = 32; break; //@line 326 "_localemodule.c"
      case 31: // $bb33_thread
        $iftmp_43=0; //@line 326 "_localemodule.c"
        $ws2=0; //@line 326 "_localemodule.c"
        __label__ = 33; break;
      case 32: // $bb33
        var $122=$iftmp_45; //@line 326 "_localemodule.c"
        var $123=_malloc($122); //@line 326 "_localemodule.c"
        var $124=$123; //@line 326 "_localemodule.c"
        $iftmp_43=$124; //@line 326 "_localemodule.c"
        $ws2=$124; //@line 326 "_localemodule.c"
        var $125=($124)==0; //@line 327 "_localemodule.c"
        if ($125) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 327 "_localemodule.c"
      case 33: // $bb34
        var $126=_PyErr_NoMemory(); //@line 328 "_localemodule.c"
        __label__ = 36; break; //@line 328 "_localemodule.c"
      case 34: // $bb35
        var $127=HEAP[$os2]; //@line 331 "_localemodule.c"
        var $128=$127; //@line 331 "_localemodule.c"
        var $129=$ws2; //@line 331 "_localemodule.c"
        var $130=$len2; //@line 331 "_localemodule.c"
        var $131=_PyUnicodeUCS2_AsWideChar($128, $129, $130); //@line 331 "_localemodule.c"
        var $132=($131)==-1; //@line 331 "_localemodule.c"
        if ($132) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 331 "_localemodule.c"
      case 35: // $bb36
        var $133=$len2; //@line 333 "_localemodule.c"
        var $134=($133) - 1; //@line 333 "_localemodule.c"
        var $135=$ws2; //@line 333 "_localemodule.c"
        var $136=$135+4*$134; //@line 333 "_localemodule.c"
        HEAP[$136]=0; //@line 333 "_localemodule.c"
        var $137=$ws1; //@line 335 "_localemodule.c"
        var $138=$ws2; //@line 335 "_localemodule.c"
        var $139=_wcscoll($137, $138); //@line 335 "_localemodule.c"
        var $140=_PyInt_FromLong($139); //@line 335 "_localemodule.c"
        $result=$140; //@line 335 "_localemodule.c"
        __label__ = 36; break; //@line 336 "_localemodule.c"
      case 36: // $done
        var $141=$ws1; //@line 338 "_localemodule.c"
        var $142=($141)!=0; //@line 338 "_localemodule.c"
        if ($142) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 338 "_localemodule.c"
      case 37: // $bb37
        var $143=$ws1; //@line 338 "_localemodule.c"
        var $144=$143; //@line 338 "_localemodule.c"
        _free($144); //@line 338 "_localemodule.c"
        __label__ = 38; break; //@line 338 "_localemodule.c"
      case 38: // $bb38
        var $145=$ws2; //@line 339 "_localemodule.c"
        var $146=($145)!=0; //@line 339 "_localemodule.c"
        if ($146) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 339 "_localemodule.c"
      case 39: // $bb39
        var $147=$ws2; //@line 339 "_localemodule.c"
        var $148=$147; //@line 339 "_localemodule.c"
        _free($148); //@line 339 "_localemodule.c"
        __label__ = 40; break; //@line 339 "_localemodule.c"
      case 40: // $bb40
        var $149=$rel1; //@line 340 "_localemodule.c"
        var $150=($149)!=0; //@line 340 "_localemodule.c"
        if ($150) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 340 "_localemodule.c"
      case 41: // $bb41
        var $151=HEAP[$os1]; //@line 341 "_localemodule.c"
        var $152=$151; //@line 341 "_localemodule.c"
        var $153=HEAP[$152]; //@line 341 "_localemodule.c"
        var $154=($153) - 1; //@line 341 "_localemodule.c"
        var $155=$151; //@line 341 "_localemodule.c"
        HEAP[$155]=$154; //@line 341 "_localemodule.c"
        var $156=$151; //@line 341 "_localemodule.c"
        var $157=HEAP[$156]; //@line 341 "_localemodule.c"
        var $158=($157)==0; //@line 341 "_localemodule.c"
        if ($158) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 341 "_localemodule.c"
      case 42: // $bb42
        var $159=HEAP[$os1]; //@line 341 "_localemodule.c"
        var $160=$159+4; //@line 341 "_localemodule.c"
        var $161=HEAP[$160]; //@line 341 "_localemodule.c"
        var $162=$161+24; //@line 341 "_localemodule.c"
        var $163=HEAP[$162]; //@line 341 "_localemodule.c"
        var $164=HEAP[$os1]; //@line 341 "_localemodule.c"
        FUNCTION_TABLE[$163]($164); //@line 341 "_localemodule.c"
        __label__ = 43; break; //@line 341 "_localemodule.c"
      case 43: // $bb43
        var $165=$rel2; //@line 343 "_localemodule.c"
        var $166=($165)!=0; //@line 343 "_localemodule.c"
        if ($166) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 343 "_localemodule.c"
      case 44: // $bb44
        var $167=HEAP[$os2]; //@line 344 "_localemodule.c"
        var $168=$167; //@line 344 "_localemodule.c"
        var $169=HEAP[$168]; //@line 344 "_localemodule.c"
        var $170=($169) - 1; //@line 344 "_localemodule.c"
        var $171=$167; //@line 344 "_localemodule.c"
        HEAP[$171]=$170; //@line 344 "_localemodule.c"
        var $172=$167; //@line 344 "_localemodule.c"
        var $173=HEAP[$172]; //@line 344 "_localemodule.c"
        var $174=($173)==0; //@line 344 "_localemodule.c"
        if ($174) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 344 "_localemodule.c"
      case 45: // $bb45
        var $175=HEAP[$os2]; //@line 344 "_localemodule.c"
        var $176=$175+4; //@line 344 "_localemodule.c"
        var $177=HEAP[$176]; //@line 344 "_localemodule.c"
        var $178=$177+24; //@line 344 "_localemodule.c"
        var $179=HEAP[$178]; //@line 344 "_localemodule.c"
        var $180=HEAP[$os2]; //@line 344 "_localemodule.c"
        FUNCTION_TABLE[$179]($180); //@line 344 "_localemodule.c"
        __label__ = 46; break; //@line 344 "_localemodule.c"
      case 46: // $bb46
        var $181=$result; //@line 346 "_localemodule.c"
        $0=$181; //@line 346 "_localemodule.c"
        __label__ = 47; break; //@line 346 "_localemodule.c"
      case 47: // $bb47
        var $182=$0; //@line 289 "_localemodule.c"
        $retval=$182; //@line 289 "_localemodule.c"
        var $retval48=$retval; //@line 289 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 289 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_strxfrm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s=__stackBase__;
        var $buf;
        var $n1;
        var $n2;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 361 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str28, allocate([$s,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 361 "_localemodule.c"
        var $3=($2)==0; //@line 361 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 361 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 362 "_localemodule.c"
        __label__ = 9; break; //@line 362 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$s]; //@line 365 "_localemodule.c"
        var $5=_strlen($4); //@line 365 "_localemodule.c"
        var $6=($5) + 1; //@line 365 "_localemodule.c"
        $n1=$6; //@line 365 "_localemodule.c"
        var $7=$n1; //@line 366 "_localemodule.c"
        var $8=_PyMem_Malloc($7); //@line 366 "_localemodule.c"
        $buf=$8; //@line 366 "_localemodule.c"
        var $9=$buf; //@line 367 "_localemodule.c"
        var $10=($9)==0; //@line 367 "_localemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 367 "_localemodule.c"
      case 3: // $bb2
        var $11=_PyErr_NoMemory(); //@line 368 "_localemodule.c"
        $0=$11; //@line 368 "_localemodule.c"
        __label__ = 9; break; //@line 368 "_localemodule.c"
      case 4: // $bb3
        var $12=HEAP[$s]; //@line 369 "_localemodule.c"
        var $13=$buf; //@line 369 "_localemodule.c"
        var $14=$n1; //@line 369 "_localemodule.c"
        var $15=_strxfrm($13, $12, $14); //@line 369 "_localemodule.c"
        var $16=($15) + 1; //@line 369 "_localemodule.c"
        $n2=$16; //@line 369 "_localemodule.c"
        var $17=$n2; //@line 370 "_localemodule.c"
        var $18=$n1; //@line 370 "_localemodule.c"
        var $19=($17) > ($18); //@line 370 "_localemodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 370 "_localemodule.c"
      case 5: // $bb4
        var $20=$buf; //@line 372 "_localemodule.c"
        var $21=$n2; //@line 372 "_localemodule.c"
        var $22=_PyMem_Realloc($20, $21); //@line 372 "_localemodule.c"
        $buf=$22; //@line 372 "_localemodule.c"
        var $23=$buf; //@line 373 "_localemodule.c"
        var $24=($23)==0; //@line 373 "_localemodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 373 "_localemodule.c"
      case 6: // $bb5
        var $25=_PyErr_NoMemory(); //@line 374 "_localemodule.c"
        $0=$25; //@line 374 "_localemodule.c"
        __label__ = 9; break; //@line 374 "_localemodule.c"
      case 7: // $bb6
        var $26=HEAP[$s]; //@line 375 "_localemodule.c"
        var $27=$buf; //@line 375 "_localemodule.c"
        var $28=$n2; //@line 375 "_localemodule.c"
        var $29=_strxfrm($27, $26, $28); //@line 375 "_localemodule.c"
        __label__ = 8; break; //@line 375 "_localemodule.c"
      case 8: // $bb7
        var $30=$buf; //@line 377 "_localemodule.c"
        var $31=_PyString_FromString($30); //@line 377 "_localemodule.c"
        $result=$31; //@line 377 "_localemodule.c"
        var $32=$buf; //@line 378 "_localemodule.c"
        _PyMem_Free($32); //@line 378 "_localemodule.c"
        var $33=$result; //@line 379 "_localemodule.c"
        $0=$33; //@line 379 "_localemodule.c"
        __label__ = 9; break; //@line 379 "_localemodule.c"
      case 9: // $bb8
        var $34=$0; //@line 362 "_localemodule.c"
        $retval=$34; //@line 362 "_localemodule.c"
        var $retval9=$retval; //@line 362 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 362 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_nl_langinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_62;
        var $0;
        var $item=__stackBase__;
        var $i;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 536 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str85, allocate([$item,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 536 "_localemodule.c"
        var $3=($2)==0; //@line 536 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 536 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 537 "_localemodule.c"
        __label__ = 11; break; //@line 537 "_localemodule.c"
      case 2: // $bb1
        $i=0; //@line 541 "_localemodule.c"
        __label__ = 9; break; //@line 541 "_localemodule.c"
      case 3: // $bb2
        var $4=$i; //@line 542 "_localemodule.c"
        var $5=_langinfo_constants+$4*8; //@line 542 "_localemodule.c"
        var $6=$5+4; //@line 542 "_localemodule.c"
        var $7=HEAP[$6]; //@line 542 "_localemodule.c"
        var $8=HEAP[$item]; //@line 542 "_localemodule.c"
        var $9=($7)==($8); //@line 542 "_localemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 542 "_localemodule.c"
      case 4: // $bb3
        var $10=HEAP[$item]; //@line 545 "_localemodule.c"
        var $11=_nl_langinfo($10); //@line 545 "_localemodule.c"
        $result=$11; //@line 545 "_localemodule.c"
        var $12=$result; //@line 546 "_localemodule.c"
        var $13=($12)!=0; //@line 546 "_localemodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 546 "_localemodule.c"
      case 5: // $bb4
        var $14=$result; //@line 546 "_localemodule.c"
        $iftmp_62=$14; //@line 546 "_localemodule.c"
        __label__ = 7; break; //@line 546 "_localemodule.c"
      case 6: // $bb5
        $iftmp_62=__str86; //@line 546 "_localemodule.c"
        __label__ = 7; break; //@line 546 "_localemodule.c"
      case 7: // $bb6
        var $15=$iftmp_62; //@line 546 "_localemodule.c"
        var $16=_PyString_FromString($15); //@line 546 "_localemodule.c"
        $0=$16; //@line 546 "_localemodule.c"
        __label__ = 11; break; //@line 546 "_localemodule.c"
      case 8: // $bb7
        var $17=$i; //@line 541 "_localemodule.c"
        var $18=($17) + 1; //@line 541 "_localemodule.c"
        $i=$18; //@line 541 "_localemodule.c"
        __label__ = 9; break; //@line 541 "_localemodule.c"
      case 9: // $bb8
        var $19=$i; //@line 541 "_localemodule.c"
        var $20=_langinfo_constants+$19*8; //@line 541 "_localemodule.c"
        var $21=$20; //@line 541 "_localemodule.c"
        var $22=HEAP[$21]; //@line 541 "_localemodule.c"
        var $23=($22)!=0; //@line 541 "_localemodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 541 "_localemodule.c"
      case 10: // $bb9
        var $24=HEAP[_PyExc_ValueError]; //@line 548 "_localemodule.c"
        _PyErr_SetString($24, __str87); //@line 548 "_localemodule.c"
        $0=0; //@line 549 "_localemodule.c"
        __label__ = 11; break; //@line 549 "_localemodule.c"
      case 11: // $bb10
        var $25=$0; //@line 537 "_localemodule.c"
        $retval=$25; //@line 537 "_localemodule.c"
        var $retval11=$retval; //@line 537 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 537 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_gettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $in=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 563 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str88, allocate([$in,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 563 "_localemodule.c"
        var $3=($2)==0; //@line 563 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 563 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 564 "_localemodule.c"
        __label__ = 3; break; //@line 564 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$in]; //@line 565 "_localemodule.c"
        var $5=_gettext($4); //@line 565 "_localemodule.c"
        var $6=_PyString_FromString($5); //@line 565 "_localemodule.c"
        $0=$6; //@line 565 "_localemodule.c"
        __label__ = 3; break; //@line 565 "_localemodule.c"
      case 3: // $bb2
        var $7=$0; //@line 564 "_localemodule.c"
        $retval=$7; //@line 564 "_localemodule.c"
        var $retval3=$retval; //@line 564 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 564 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_dgettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $domain=__stackBase__;
        var $in=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 576 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str89, allocate([$domain,0,0,0,$in,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 576 "_localemodule.c"
        var $3=($2)==0; //@line 576 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 576 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 577 "_localemodule.c"
        __label__ = 3; break; //@line 577 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$in]; //@line 578 "_localemodule.c"
        var $5=HEAP[$domain]; //@line 578 "_localemodule.c"
        var $6=_dgettext($5, $4); //@line 578 "_localemodule.c"
        var $7=_PyString_FromString($6); //@line 578 "_localemodule.c"
        $0=$7; //@line 578 "_localemodule.c"
        __label__ = 3; break; //@line 578 "_localemodule.c"
      case 3: // $bb2
        var $8=$0; //@line 577 "_localemodule.c"
        $retval=$8; //@line 577 "_localemodule.c"
        var $retval3=$retval; //@line 577 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 577 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_dcgettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $domain=__stackBase__;
        var $msgid=__stackBase__+4;
        var $category=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 590 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str90, allocate([$domain,0,0,0,$msgid,0,0,0,$category,0,0,0], ["i8**",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 590 "_localemodule.c"
        var $3=($2)==0; //@line 590 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 590 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 591 "_localemodule.c"
        __label__ = 3; break; //@line 591 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$category]; //@line 592 "_localemodule.c"
        var $5=HEAP[$msgid]; //@line 592 "_localemodule.c"
        var $6=HEAP[$domain]; //@line 592 "_localemodule.c"
        var $7=_dcgettext($6, $5, $4); //@line 592 "_localemodule.c"
        var $8=_PyString_FromString($7); //@line 592 "_localemodule.c"
        $0=$8; //@line 592 "_localemodule.c"
        __label__ = 3; break; //@line 592 "_localemodule.c"
      case 3: // $bb2
        var $9=$0; //@line 591 "_localemodule.c"
        $retval=$9; //@line 591 "_localemodule.c"
        var $retval3=$retval; //@line 591 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 591 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_textdomain($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $domain=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 603 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str91, allocate([$domain,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 603 "_localemodule.c"
        var $3=($2)==0; //@line 603 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 603 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 604 "_localemodule.c"
        __label__ = 5; break; //@line 604 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$domain]; //@line 605 "_localemodule.c"
        var $5=_textdomain($4); //@line 605 "_localemodule.c"
        HEAP[$domain]=$5; //@line 605 "_localemodule.c"
        var $6=HEAP[$domain]; //@line 606 "_localemodule.c"
        var $7=($6)==0; //@line 606 "_localemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 606 "_localemodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_OSError]; //@line 607 "_localemodule.c"
        var $9=_PyErr_SetFromErrno($8); //@line 607 "_localemodule.c"
        $0=0; //@line 608 "_localemodule.c"
        __label__ = 5; break; //@line 608 "_localemodule.c"
      case 4: // $bb3
        var $10=HEAP[$domain]; //@line 610 "_localemodule.c"
        var $11=_PyString_FromString($10); //@line 610 "_localemodule.c"
        $0=$11; //@line 610 "_localemodule.c"
        __label__ = 5; break; //@line 610 "_localemodule.c"
      case 5: // $bb4
        var $12=$0; //@line 604 "_localemodule.c"
        $retval=$12; //@line 604 "_localemodule.c"
        var $retval5=$retval; //@line 604 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 604 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_bindtextdomain($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $domain=__stackBase__;
        var $dirname=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 621 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str92, allocate([$domain,0,0,0,$dirname,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 621 "_localemodule.c"
        var $3=($2)==0; //@line 621 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 621 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 622 "_localemodule.c"
        __label__ = 7; break; //@line 622 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$domain]; //@line 623 "_localemodule.c"
        var $5=HEAP[$4]; //@line 623 "_localemodule.c"
        var $6=($5)==0; //@line 623 "_localemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 623 "_localemodule.c"
      case 3: // $bb2
        var $7=HEAP[_Error]; //@line 624 "_localemodule.c"
        _PyErr_SetString($7, __str93); //@line 624 "_localemodule.c"
        $0=0; //@line 625 "_localemodule.c"
        __label__ = 7; break; //@line 625 "_localemodule.c"
      case 4: // $bb3
        var $8=HEAP[$dirname]; //@line 627 "_localemodule.c"
        var $9=HEAP[$domain]; //@line 627 "_localemodule.c"
        var $10=_bindtextdomain($9, $8); //@line 627 "_localemodule.c"
        HEAP[$dirname]=$10; //@line 627 "_localemodule.c"
        var $11=HEAP[$dirname]; //@line 628 "_localemodule.c"
        var $12=($11)==0; //@line 628 "_localemodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 628 "_localemodule.c"
      case 5: // $bb4
        var $13=HEAP[_PyExc_OSError]; //@line 629 "_localemodule.c"
        var $14=_PyErr_SetFromErrno($13); //@line 629 "_localemodule.c"
        $0=0; //@line 630 "_localemodule.c"
        __label__ = 7; break; //@line 630 "_localemodule.c"
      case 6: // $bb5
        var $15=HEAP[$dirname]; //@line 632 "_localemodule.c"
        var $16=_PyString_FromString($15); //@line 632 "_localemodule.c"
        $0=$16; //@line 632 "_localemodule.c"
        __label__ = 7; break; //@line 632 "_localemodule.c"
      case 7: // $bb6
        var $17=$0; //@line 622 "_localemodule.c"
        $retval=$17; //@line 622 "_localemodule.c"
        var $retval7=$retval; //@line 622 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 622 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_bind_textdomain_codeset($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $domain=__stackBase__;
        var $codeset=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 644 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, __str92, allocate([$domain,0,0,0,$codeset,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 644 "_localemodule.c"
        var $3=($2)==0; //@line 644 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 644 "_localemodule.c"
      case 1: // $bb
        $0=0; //@line 645 "_localemodule.c"
        __label__ = 5; break; //@line 645 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$codeset]; //@line 646 "_localemodule.c"
        var $5=HEAP[$domain]; //@line 646 "_localemodule.c"
        var $6=_bind_textdomain_codeset($5, $4); //@line 646 "_localemodule.c"
        HEAP[$codeset]=$6; //@line 646 "_localemodule.c"
        var $7=HEAP[$codeset]; //@line 647 "_localemodule.c"
        var $8=($7)!=0; //@line 647 "_localemodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 647 "_localemodule.c"
      case 3: // $bb2
        var $9=HEAP[$codeset]; //@line 648 "_localemodule.c"
        var $10=_PyString_FromString($9); //@line 648 "_localemodule.c"
        $0=$10; //@line 648 "_localemodule.c"
        __label__ = 5; break; //@line 648 "_localemodule.c"
      case 4: // $bb3
        var $11=HEAP[__Py_NoneStruct]; //@line 649 "_localemodule.c"
        var $12=($11) + 1; //@line 649 "_localemodule.c"
        HEAP[__Py_NoneStruct]=$12; //@line 649 "_localemodule.c"
        $0=__Py_NoneStruct; //@line 649 "_localemodule.c"
        __label__ = 5; break; //@line 649 "_localemodule.c"
      case 5: // $bb4
        var $13=$0; //@line 645 "_localemodule.c"
        $retval=$13; //@line 645 "_localemodule.c"
        var $retval5=$retval; //@line 645 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 645 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_locale() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $x;
        var $i;
        var $0=_Py_InitModule4(__str104, _PyLocale_Methods, 0, 0, 1013); //@line 698 "_localemodule.c"
        $m=$0; //@line 698 "_localemodule.c"
        var $1=$m; //@line 699 "_localemodule.c"
        var $2=($1)==0; //@line 699 "_localemodule.c"
        if ($2) { __label__ = 30; break; } else { __label__ = 1; break; } //@line 699 "_localemodule.c"
      case 1: // $bb
        var $3=$m; //@line 702 "_localemodule.c"
        var $4=_PyModule_GetDict($3); //@line 702 "_localemodule.c"
        $d=$4; //@line 702 "_localemodule.c"
        var $5=_PyInt_FromLong(0); //@line 704 "_localemodule.c"
        $x=$5; //@line 704 "_localemodule.c"
        var $6=$d; //@line 705 "_localemodule.c"
        var $7=$x; //@line 705 "_localemodule.c"
        var $8=_PyDict_SetItemString($6, __str105, $7); //@line 705 "_localemodule.c"
        var $9=$x; //@line 706 "_localemodule.c"
        var $10=($9)!=0; //@line 706 "_localemodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 706 "_localemodule.c"
      case 2: // $bb1
        var $11=$x; //@line 706 "_localemodule.c"
        var $12=$11; //@line 706 "_localemodule.c"
        var $13=HEAP[$12]; //@line 706 "_localemodule.c"
        var $14=($13) - 1; //@line 706 "_localemodule.c"
        var $15=$x; //@line 706 "_localemodule.c"
        var $16=$15; //@line 706 "_localemodule.c"
        HEAP[$16]=$14; //@line 706 "_localemodule.c"
        var $17=$x; //@line 706 "_localemodule.c"
        var $18=$17; //@line 706 "_localemodule.c"
        var $19=HEAP[$18]; //@line 706 "_localemodule.c"
        var $20=($19)==0; //@line 706 "_localemodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 706 "_localemodule.c"
      case 3: // $bb2
        var $21=$x; //@line 706 "_localemodule.c"
        var $22=$21+4; //@line 706 "_localemodule.c"
        var $23=HEAP[$22]; //@line 706 "_localemodule.c"
        var $24=$23+24; //@line 706 "_localemodule.c"
        var $25=HEAP[$24]; //@line 706 "_localemodule.c"
        var $26=$x; //@line 706 "_localemodule.c"
        FUNCTION_TABLE[$25]($26); //@line 706 "_localemodule.c"
        __label__ = 4; break; //@line 706 "_localemodule.c"
      case 4: // $bb3
        var $27=_PyInt_FromLong(2); //@line 708 "_localemodule.c"
        $x=$27; //@line 708 "_localemodule.c"
        var $28=$d; //@line 709 "_localemodule.c"
        var $29=$x; //@line 709 "_localemodule.c"
        var $30=_PyDict_SetItemString($28, __str106, $29); //@line 709 "_localemodule.c"
        var $31=$x; //@line 710 "_localemodule.c"
        var $32=($31)!=0; //@line 710 "_localemodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 710 "_localemodule.c"
      case 5: // $bb4
        var $33=$x; //@line 710 "_localemodule.c"
        var $34=$33; //@line 710 "_localemodule.c"
        var $35=HEAP[$34]; //@line 710 "_localemodule.c"
        var $36=($35) - 1; //@line 710 "_localemodule.c"
        var $37=$x; //@line 710 "_localemodule.c"
        var $38=$37; //@line 710 "_localemodule.c"
        HEAP[$38]=$36; //@line 710 "_localemodule.c"
        var $39=$x; //@line 710 "_localemodule.c"
        var $40=$39; //@line 710 "_localemodule.c"
        var $41=HEAP[$40]; //@line 710 "_localemodule.c"
        var $42=($41)==0; //@line 710 "_localemodule.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 710 "_localemodule.c"
      case 6: // $bb5
        var $43=$x; //@line 710 "_localemodule.c"
        var $44=$43+4; //@line 710 "_localemodule.c"
        var $45=HEAP[$44]; //@line 710 "_localemodule.c"
        var $46=$45+24; //@line 710 "_localemodule.c"
        var $47=HEAP[$46]; //@line 710 "_localemodule.c"
        var $48=$x; //@line 710 "_localemodule.c"
        FUNCTION_TABLE[$47]($48); //@line 710 "_localemodule.c"
        __label__ = 7; break; //@line 710 "_localemodule.c"
      case 7: // $bb6
        var $49=_PyInt_FromLong(3); //@line 712 "_localemodule.c"
        $x=$49; //@line 712 "_localemodule.c"
        var $50=$d; //@line 713 "_localemodule.c"
        var $51=$x; //@line 713 "_localemodule.c"
        var $52=_PyDict_SetItemString($50, __str107, $51); //@line 713 "_localemodule.c"
        var $53=$x; //@line 714 "_localemodule.c"
        var $54=($53)!=0; //@line 714 "_localemodule.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 714 "_localemodule.c"
      case 8: // $bb7
        var $55=$x; //@line 714 "_localemodule.c"
        var $56=$55; //@line 714 "_localemodule.c"
        var $57=HEAP[$56]; //@line 714 "_localemodule.c"
        var $58=($57) - 1; //@line 714 "_localemodule.c"
        var $59=$x; //@line 714 "_localemodule.c"
        var $60=$59; //@line 714 "_localemodule.c"
        HEAP[$60]=$58; //@line 714 "_localemodule.c"
        var $61=$x; //@line 714 "_localemodule.c"
        var $62=$61; //@line 714 "_localemodule.c"
        var $63=HEAP[$62]; //@line 714 "_localemodule.c"
        var $64=($63)==0; //@line 714 "_localemodule.c"
        if ($64) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 714 "_localemodule.c"
      case 9: // $bb8
        var $65=$x; //@line 714 "_localemodule.c"
        var $66=$65+4; //@line 714 "_localemodule.c"
        var $67=HEAP[$66]; //@line 714 "_localemodule.c"
        var $68=$67+24; //@line 714 "_localemodule.c"
        var $69=HEAP[$68]; //@line 714 "_localemodule.c"
        var $70=$x; //@line 714 "_localemodule.c"
        FUNCTION_TABLE[$69]($70); //@line 714 "_localemodule.c"
        __label__ = 10; break; //@line 714 "_localemodule.c"
      case 10: // $bb9
        var $71=_PyInt_FromLong(4); //@line 716 "_localemodule.c"
        $x=$71; //@line 716 "_localemodule.c"
        var $72=$d; //@line 717 "_localemodule.c"
        var $73=$x; //@line 717 "_localemodule.c"
        var $74=_PyDict_SetItemString($72, __str108, $73); //@line 717 "_localemodule.c"
        var $75=$x; //@line 718 "_localemodule.c"
        var $76=($75)!=0; //@line 718 "_localemodule.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 718 "_localemodule.c"
      case 11: // $bb10
        var $77=$x; //@line 718 "_localemodule.c"
        var $78=$77; //@line 718 "_localemodule.c"
        var $79=HEAP[$78]; //@line 718 "_localemodule.c"
        var $80=($79) - 1; //@line 718 "_localemodule.c"
        var $81=$x; //@line 718 "_localemodule.c"
        var $82=$81; //@line 718 "_localemodule.c"
        HEAP[$82]=$80; //@line 718 "_localemodule.c"
        var $83=$x; //@line 718 "_localemodule.c"
        var $84=$83; //@line 718 "_localemodule.c"
        var $85=HEAP[$84]; //@line 718 "_localemodule.c"
        var $86=($85)==0; //@line 718 "_localemodule.c"
        if ($86) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 718 "_localemodule.c"
      case 12: // $bb11
        var $87=$x; //@line 718 "_localemodule.c"
        var $88=$87+4; //@line 718 "_localemodule.c"
        var $89=HEAP[$88]; //@line 718 "_localemodule.c"
        var $90=$89+24; //@line 718 "_localemodule.c"
        var $91=HEAP[$90]; //@line 718 "_localemodule.c"
        var $92=$x; //@line 718 "_localemodule.c"
        FUNCTION_TABLE[$91]($92); //@line 718 "_localemodule.c"
        __label__ = 13; break; //@line 718 "_localemodule.c"
      case 13: // $bb12
        var $93=_PyInt_FromLong(5); //@line 721 "_localemodule.c"
        $x=$93; //@line 721 "_localemodule.c"
        var $94=$d; //@line 722 "_localemodule.c"
        var $95=$x; //@line 722 "_localemodule.c"
        var $96=_PyDict_SetItemString($94, __str109, $95); //@line 722 "_localemodule.c"
        var $97=$x; //@line 723 "_localemodule.c"
        var $98=($97)!=0; //@line 723 "_localemodule.c"
        if ($98) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 723 "_localemodule.c"
      case 14: // $bb13
        var $99=$x; //@line 723 "_localemodule.c"
        var $100=$99; //@line 723 "_localemodule.c"
        var $101=HEAP[$100]; //@line 723 "_localemodule.c"
        var $102=($101) - 1; //@line 723 "_localemodule.c"
        var $103=$x; //@line 723 "_localemodule.c"
        var $104=$103; //@line 723 "_localemodule.c"
        HEAP[$104]=$102; //@line 723 "_localemodule.c"
        var $105=$x; //@line 723 "_localemodule.c"
        var $106=$105; //@line 723 "_localemodule.c"
        var $107=HEAP[$106]; //@line 723 "_localemodule.c"
        var $108=($107)==0; //@line 723 "_localemodule.c"
        if ($108) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 723 "_localemodule.c"
      case 15: // $bb14
        var $109=$x; //@line 723 "_localemodule.c"
        var $110=$109+4; //@line 723 "_localemodule.c"
        var $111=HEAP[$110]; //@line 723 "_localemodule.c"
        var $112=$111+24; //@line 723 "_localemodule.c"
        var $113=HEAP[$112]; //@line 723 "_localemodule.c"
        var $114=$x; //@line 723 "_localemodule.c"
        FUNCTION_TABLE[$113]($114); //@line 723 "_localemodule.c"
        __label__ = 16; break; //@line 723 "_localemodule.c"
      case 16: // $bb15
        var $115=_PyInt_FromLong(1); //@line 726 "_localemodule.c"
        $x=$115; //@line 726 "_localemodule.c"
        var $116=$d; //@line 727 "_localemodule.c"
        var $117=$x; //@line 727 "_localemodule.c"
        var $118=_PyDict_SetItemString($116, __str110, $117); //@line 727 "_localemodule.c"
        var $119=$x; //@line 728 "_localemodule.c"
        var $120=($119)!=0; //@line 728 "_localemodule.c"
        if ($120) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 728 "_localemodule.c"
      case 17: // $bb16
        var $121=$x; //@line 728 "_localemodule.c"
        var $122=$121; //@line 728 "_localemodule.c"
        var $123=HEAP[$122]; //@line 728 "_localemodule.c"
        var $124=($123) - 1; //@line 728 "_localemodule.c"
        var $125=$x; //@line 728 "_localemodule.c"
        var $126=$125; //@line 728 "_localemodule.c"
        HEAP[$126]=$124; //@line 728 "_localemodule.c"
        var $127=$x; //@line 728 "_localemodule.c"
        var $128=$127; //@line 728 "_localemodule.c"
        var $129=HEAP[$128]; //@line 728 "_localemodule.c"
        var $130=($129)==0; //@line 728 "_localemodule.c"
        if ($130) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 728 "_localemodule.c"
      case 18: // $bb17
        var $131=$x; //@line 728 "_localemodule.c"
        var $132=$131+4; //@line 728 "_localemodule.c"
        var $133=HEAP[$132]; //@line 728 "_localemodule.c"
        var $134=$133+24; //@line 728 "_localemodule.c"
        var $135=HEAP[$134]; //@line 728 "_localemodule.c"
        var $136=$x; //@line 728 "_localemodule.c"
        FUNCTION_TABLE[$135]($136); //@line 728 "_localemodule.c"
        __label__ = 19; break; //@line 728 "_localemodule.c"
      case 19: // $bb18
        var $137=_PyInt_FromLong(6); //@line 730 "_localemodule.c"
        $x=$137; //@line 730 "_localemodule.c"
        var $138=$d; //@line 731 "_localemodule.c"
        var $139=$x; //@line 731 "_localemodule.c"
        var $140=_PyDict_SetItemString($138, __str111, $139); //@line 731 "_localemodule.c"
        var $141=$x; //@line 732 "_localemodule.c"
        var $142=($141)!=0; //@line 732 "_localemodule.c"
        if ($142) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 732 "_localemodule.c"
      case 20: // $bb19
        var $143=$x; //@line 732 "_localemodule.c"
        var $144=$143; //@line 732 "_localemodule.c"
        var $145=HEAP[$144]; //@line 732 "_localemodule.c"
        var $146=($145) - 1; //@line 732 "_localemodule.c"
        var $147=$x; //@line 732 "_localemodule.c"
        var $148=$147; //@line 732 "_localemodule.c"
        HEAP[$148]=$146; //@line 732 "_localemodule.c"
        var $149=$x; //@line 732 "_localemodule.c"
        var $150=$149; //@line 732 "_localemodule.c"
        var $151=HEAP[$150]; //@line 732 "_localemodule.c"
        var $152=($151)==0; //@line 732 "_localemodule.c"
        if ($152) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 732 "_localemodule.c"
      case 21: // $bb20
        var $153=$x; //@line 732 "_localemodule.c"
        var $154=$153+4; //@line 732 "_localemodule.c"
        var $155=HEAP[$154]; //@line 732 "_localemodule.c"
        var $156=$155+24; //@line 732 "_localemodule.c"
        var $157=HEAP[$156]; //@line 732 "_localemodule.c"
        var $158=$x; //@line 732 "_localemodule.c"
        FUNCTION_TABLE[$157]($158); //@line 732 "_localemodule.c"
        __label__ = 22; break; //@line 732 "_localemodule.c"
      case 22: // $bb21
        var $159=_PyInt_FromLong(127); //@line 734 "_localemodule.c"
        $x=$159; //@line 734 "_localemodule.c"
        var $160=$d; //@line 735 "_localemodule.c"
        var $161=$x; //@line 735 "_localemodule.c"
        var $162=_PyDict_SetItemString($160, __str112, $161); //@line 735 "_localemodule.c"
        var $163=$x; //@line 736 "_localemodule.c"
        var $164=($163)!=0; //@line 736 "_localemodule.c"
        if ($164) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 736 "_localemodule.c"
      case 23: // $bb22
        var $165=$x; //@line 736 "_localemodule.c"
        var $166=$165; //@line 736 "_localemodule.c"
        var $167=HEAP[$166]; //@line 736 "_localemodule.c"
        var $168=($167) - 1; //@line 736 "_localemodule.c"
        var $169=$x; //@line 736 "_localemodule.c"
        var $170=$169; //@line 736 "_localemodule.c"
        HEAP[$170]=$168; //@line 736 "_localemodule.c"
        var $171=$x; //@line 736 "_localemodule.c"
        var $172=$171; //@line 736 "_localemodule.c"
        var $173=HEAP[$172]; //@line 736 "_localemodule.c"
        var $174=($173)==0; //@line 736 "_localemodule.c"
        if ($174) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 736 "_localemodule.c"
      case 24: // $bb23
        var $175=$x; //@line 736 "_localemodule.c"
        var $176=$175+4; //@line 736 "_localemodule.c"
        var $177=HEAP[$176]; //@line 736 "_localemodule.c"
        var $178=$177+24; //@line 736 "_localemodule.c"
        var $179=HEAP[$178]; //@line 736 "_localemodule.c"
        var $180=$x; //@line 736 "_localemodule.c"
        FUNCTION_TABLE[$179]($180); //@line 736 "_localemodule.c"
        __label__ = 25; break; //@line 736 "_localemodule.c"
      case 25: // $bb24
        var $181=_PyErr_NewException(__str113, 0, 0); //@line 738 "_localemodule.c"
        HEAP[_Error]=$181; //@line 738 "_localemodule.c"
        var $182=HEAP[_Error]; //@line 739 "_localemodule.c"
        var $183=$d; //@line 739 "_localemodule.c"
        var $184=_PyDict_SetItemString($183, __str114, $182); //@line 739 "_localemodule.c"
        var $185=_PyString_FromString(_locale__doc__); //@line 741 "_localemodule.c"
        $x=$185; //@line 741 "_localemodule.c"
        var $186=$d; //@line 742 "_localemodule.c"
        var $187=$x; //@line 742 "_localemodule.c"
        var $188=_PyDict_SetItemString($186, __str115, $187); //@line 742 "_localemodule.c"
        var $189=$x; //@line 743 "_localemodule.c"
        var $190=($189)!=0; //@line 743 "_localemodule.c"
        if ($190) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 743 "_localemodule.c"
      case 26: // $bb25
        var $191=$x; //@line 743 "_localemodule.c"
        var $192=$191; //@line 743 "_localemodule.c"
        var $193=HEAP[$192]; //@line 743 "_localemodule.c"
        var $194=($193) - 1; //@line 743 "_localemodule.c"
        var $195=$x; //@line 743 "_localemodule.c"
        var $196=$195; //@line 743 "_localemodule.c"
        HEAP[$196]=$194; //@line 743 "_localemodule.c"
        var $197=$x; //@line 743 "_localemodule.c"
        var $198=$197; //@line 743 "_localemodule.c"
        var $199=HEAP[$198]; //@line 743 "_localemodule.c"
        var $200=($199)==0; //@line 743 "_localemodule.c"
        if ($200) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 743 "_localemodule.c"
      case 27: // $bb26
        var $201=$x; //@line 743 "_localemodule.c"
        var $202=$201+4; //@line 743 "_localemodule.c"
        var $203=HEAP[$202]; //@line 743 "_localemodule.c"
        var $204=$203+24; //@line 743 "_localemodule.c"
        var $205=HEAP[$204]; //@line 743 "_localemodule.c"
        var $206=$x; //@line 743 "_localemodule.c"
        FUNCTION_TABLE[$205]($206); //@line 743 "_localemodule.c"
        __label__ = 28; break; //@line 743 "_localemodule.c"
      case 28: // $bb27
        $i=0; //@line 746 "_localemodule.c"
        var $207=$i; //@line 746 "_localemodule.c"
        var $208=_langinfo_constants+$207*8; //@line 746 "_localemodule.c"
        var $209=$208; //@line 746 "_localemodule.c"
        var $210=HEAP[$209]; //@line 746 "_localemodule.c"
        var $211=($210)!=0; //@line 746 "_localemodule.c"
        if ($211) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 746 "_localemodule.c"
      case 29: // $bb28
        var $212=$i; //@line 747 "_localemodule.c"
        var $213=_langinfo_constants+$212*8; //@line 747 "_localemodule.c"
        var $214=$213+4; //@line 747 "_localemodule.c"
        var $215=HEAP[$214]; //@line 747 "_localemodule.c"
        var $216=$i; //@line 747 "_localemodule.c"
        var $217=_langinfo_constants+$216*8; //@line 747 "_localemodule.c"
        var $218=$217; //@line 747 "_localemodule.c"
        var $219=HEAP[$218]; //@line 747 "_localemodule.c"
        var $220=$m; //@line 747 "_localemodule.c"
        var $221=_PyModule_AddIntConstant($220, $219, $215); //@line 747 "_localemodule.c"
        var $222=$i; //@line 746 "_localemodule.c"
        var $223=($222) + 1; //@line 746 "_localemodule.c"
        $i=$223; //@line 746 "_localemodule.c"
        var $224=$i; //@line 746 "_localemodule.c"
        var $225=_langinfo_constants+$224*8; //@line 746 "_localemodule.c"
        var $226=$225; //@line 746 "_localemodule.c"
        var $227=HEAP[$226]; //@line 746 "_localemodule.c"
        var $228=($227)!=0; //@line 746 "_localemodule.c"
        if ($228) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 746 "_localemodule.c"
      case 30: // $return
        ;
        return; //@line 700 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_locale"] = _init_locale;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyLocale_setlocale,0,_PyLocale_localeconv,0,_PyLocale_strcoll,0,_PyLocale_strxfrm,0,_PyLocale_nl_langinfo,0,_PyIntl_gettext,0,_PyIntl_dgettext,0,_PyIntl_dcgettext,0,_PyIntl_textdomain,0,_PyIntl_bindtextdomain,0,_PyIntl_bind_textdomain_codeset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_locale__doc__=allocate([83,117,112,112,111,114,116,32,102,111,114,32,80,79,83,73,88,32,108,111,99,97,108,101,115,46,0] /* Support for POSIX lo */, "i8", ALLOC_NORMAL);
_setlocale__doc__=allocate([40,105,110,116,101,103,101,114,44,115,116,114,105,110,103,61,78,111,110,101,41,32,45,62,32,115,116,114,105,110,103,46,32,65,99,116,105,118,97,116,101,115,47,113,117,101,114,105,101,115,32,108,111,99,97,108,101,32,112,114,111,99,101,115,115,105,110,103,46,0] /* (integer,string=None */, "i8", ALLOC_NORMAL);
__str=allocate([115,116,114,105,110,103,0] /* string\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,111,112,0] /* strop\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([117,112,112,101,114,99,97,115,101,0] /* uppercase\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([108,111,119,101,114,99,97,115,101,0] /* lowercase\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([108,101,116,116,101,114,115,0] /* letters\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,124,122,58,115,101,116,108,111,99,97,108,101,0] /* i|z:setlocale\00 */, "i8", ALLOC_NORMAL);
_Error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str6=allocate([117,110,115,117,112,112,111,114,116,101,100,32,108,111,99,97,108,101,32,115,101,116,116,105,110,103,0] /* unsupported locale s */, "i8", ALLOC_NORMAL);
__str7=allocate([108,111,99,97,108,101,32,113,117,101,114,121,32,102,97,105,108,101,100,0] /* locale query failed\ */, "i8", ALLOC_NORMAL);
_localeconv__doc__=allocate([40,41,32,45,62,32,100,105,99,116,46,32,82,101,116,117,114,110,115,32,110,117,109,101,114,105,99,32,97,110,100,32,109,111,110,101,116,97,114,121,32,108,111,99,97,108,101,45,115,112,101,99,105,102,105,99,32,112,97,114,97,109,101,116,101,114,115,46,0] /* () -> dict. Returns  */, "i8", ALLOC_NORMAL);
__str8=allocate([100,101,99,105,109,97,108,95,112,111,105,110,116,0] /* decimal_point\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([116,104,111,117,115,97,110,100,115,95,115,101,112,0] /* thousands_sep\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([103,114,111,117,112,105,110,103,0] /* grouping\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([105,110,116,95,99,117,114,114,95,115,121,109,98,111,108,0] /* int_curr_symbol\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([99,117,114,114,101,110,99,121,95,115,121,109,98,111,108,0] /* currency_symbol\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([109,111,110,95,100,101,99,105,109,97,108,95,112,111,105,110,116,0] /* mon_decimal_point\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([109,111,110,95,116,104,111,117,115,97,110,100,115,95,115,101,112,0] /* mon_thousands_sep\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([109,111,110,95,103,114,111,117,112,105,110,103,0] /* mon_grouping\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([112,111,115,105,116,105,118,101,95,115,105,103,110,0] /* positive_sign\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([110,101,103,97,116,105,118,101,95,115,105,103,110,0] /* negative_sign\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([105,110,116,95,102,114,97,99,95,100,105,103,105,116,115,0] /* int_frac_digits\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([102,114,97,99,95,100,105,103,105,116,115,0] /* frac_digits\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([112,95,99,115,95,112,114,101,99,101,100,101,115,0] /* p_cs_precedes\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([112,95,115,101,112,95,98,121,95,115,112,97,99,101,0] /* p_sep_by_space\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([110,95,99,115,95,112,114,101,99,101,100,101,115,0] /* n_cs_precedes\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([110,95,115,101,112,95,98,121,95,115,112,97,99,101,0] /* n_sep_by_space\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([112,95,115,105,103,110,95,112,111,115,110,0] /* p_sign_posn\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([110,95,115,105,103,110,95,112,111,115,110,0] /* n_sign_posn\00 */, "i8", ALLOC_NORMAL);
_strcoll__doc__=allocate([115,116,114,105,110,103,44,115,116,114,105,110,103,32,45,62,32,105,110,116,46,32,67,111,109,112,97,114,101,115,32,116,119,111,32,115,116,114,105,110,103,115,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,108,111,99,97,108,101,46,0] /* string,string -> int */, "i8", ALLOC_NORMAL);
__str26=allocate([115,116,114,99,111,108,108,0] /* strcoll\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,116,114,99,111,108,108,32,97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,115,116,114,105,110,103,115,0] /* strcoll arguments mu */, "i8", ALLOC_NORMAL);
_strxfrm__doc__=allocate([115,116,114,105,110,103,32,45,62,32,115,116,114,105,110,103,46,32,82,101,116,117,114,110,115,32,97,32,115,116,114,105,110,103,32,116,104,97,116,32,98,101,104,97,118,101,115,32,102,111,114,32,99,109,112,32,108,111,99,97,108,101,45,97,119,97,114,101,46,0] /* string -> string. Re */, "i8", ALLOC_NORMAL);
__str28=allocate([115,58,115,116,114,120,102,114,109,0] /* s:strxfrm\00 */, "i8", ALLOC_NORMAL);
_langinfo_constants=allocate([0, 0, 0, 0, 131079, 0, 0, 0, 0, 0, 0, 0, 131080, 0, 0, 0, 0, 0, 0, 0, 131081, 0, 0, 0, 0, 0, 0, 0, 131082, 0, 0, 0, 0, 0, 0, 0, 131083, 0, 0, 0, 0, 0, 0, 0, 131084, 0, 0, 0, 0, 0, 0, 0, 131085, 0, 0, 0, 0, 0, 0, 0, 131072, 0, 0, 0, 0, 0, 0, 0, 131073, 0, 0, 0, 0, 0, 0, 0, 131074, 0, 0, 0, 0, 0, 0, 0, 131075, 0, 0, 0, 0, 0, 0, 0, 131076, 0, 0, 0, 0, 0, 0, 0, 131077, 0, 0, 0, 0, 0, 0, 0, 131078, 0, 0, 0, 0, 0, 0, 0, 131098, 0, 0, 0, 0, 0, 0, 0, 131099, 0, 0, 0, 0, 0, 0, 0, 131100, 0, 0, 0, 0, 0, 0, 0, 131101, 0, 0, 0, 0, 0, 0, 0, 131102, 0, 0, 0, 0, 0, 0, 0, 131103, 0, 0, 0, 0, 0, 0, 0, 131104, 0, 0, 0, 0, 0, 0, 0, 131105, 0, 0, 0, 0, 0, 0, 0, 131106, 0, 0, 0, 0, 0, 0, 0, 131107, 0, 0, 0, 0, 0, 0, 0, 131108, 0, 0, 0, 0, 0, 0, 0, 131109, 0, 0, 0, 0, 0, 0, 0, 131086, 0, 0, 0, 0, 0, 0, 0, 131087, 0, 0, 0, 0, 0, 0, 0, 131088, 0, 0, 0, 0, 0, 0, 0, 131089, 0, 0, 0, 0, 0, 0, 0, 131090, 0, 0, 0, 0, 0, 0, 0, 131091, 0, 0, 0, 0, 0, 0, 0, 131092, 0, 0, 0, 0, 0, 0, 0, 131093, 0, 0, 0, 0, 0, 0, 0, 131094, 0, 0, 0, 0, 0, 0, 0, 131095, 0, 0, 0, 0, 0, 0, 0, 131096, 0, 0, 0, 0, 0, 0, 0, 131097, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 65537, 0, 0, 0, 0, 0, 0, 0, 262159, 0, 0, 0, 0, 0, 0, 0, 131112, 0, 0, 0, 0, 0, 0, 0, 131113, 0, 0, 0, 0, 0, 0, 0, 131114, 0, 0, 0, 0, 0, 0, 0, 131110, 0, 0, 0, 0, 0, 0, 0, 131111, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 131115, 0, 0, 0, 0, 0, 0, 0, 131116, 0, 0, 0, 0, 0, 0, 0, 131118, 0, 0, 0, 0, 0, 0, 0, 131120, 0, 0, 0, 0, 0, 0, 0, 131121, 0, 0, 0, 0, 0, 0, 0, 131119, 0, 0, 0, 0, 0, 0, 0, 327680, 0, 0, 0, 0, 0, 0, 0, 327681, 0, 0, 0, 0, 0, 0, 0, 131180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str29=allocate([68,65,89,95,49,0] /* DAY_1\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([68,65,89,95,50,0] /* DAY_2\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([68,65,89,95,51,0] /* DAY_3\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([68,65,89,95,52,0] /* DAY_4\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([68,65,89,95,53,0] /* DAY_5\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([68,65,89,95,54,0] /* DAY_6\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([68,65,89,95,55,0] /* DAY_7\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([65,66,68,65,89,95,49,0] /* ABDAY_1\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([65,66,68,65,89,95,50,0] /* ABDAY_2\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([65,66,68,65,89,95,51,0] /* ABDAY_3\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([65,66,68,65,89,95,52,0] /* ABDAY_4\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([65,66,68,65,89,95,53,0] /* ABDAY_5\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([65,66,68,65,89,95,54,0] /* ABDAY_6\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([65,66,68,65,89,95,55,0] /* ABDAY_7\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([77,79,78,95,49,0] /* MON_1\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([77,79,78,95,50,0] /* MON_2\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([77,79,78,95,51,0] /* MON_3\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([77,79,78,95,52,0] /* MON_4\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([77,79,78,95,53,0] /* MON_5\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([77,79,78,95,54,0] /* MON_6\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([77,79,78,95,55,0] /* MON_7\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([77,79,78,95,56,0] /* MON_8\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([77,79,78,95,57,0] /* MON_9\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([77,79,78,95,49,48,0] /* MON_10\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([77,79,78,95,49,49,0] /* MON_11\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([77,79,78,95,49,50,0] /* MON_12\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([65,66,77,79,78,95,49,0] /* ABMON_1\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([65,66,77,79,78,95,50,0] /* ABMON_2\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([65,66,77,79,78,95,51,0] /* ABMON_3\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([65,66,77,79,78,95,52,0] /* ABMON_4\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([65,66,77,79,78,95,53,0] /* ABMON_5\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([65,66,77,79,78,95,54,0] /* ABMON_6\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([65,66,77,79,78,95,55,0] /* ABMON_7\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([65,66,77,79,78,95,56,0] /* ABMON_8\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([65,66,77,79,78,95,57,0] /* ABMON_9\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([65,66,77,79,78,95,49,48,0] /* ABMON_10\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([65,66,77,79,78,95,49,49,0] /* ABMON_11\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([65,66,77,79,78,95,49,50,0] /* ABMON_12\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([82,65,68,73,88,67,72,65,82,0] /* RADIXCHAR\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([84,72,79,85,83,69,80,0] /* THOUSEP\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([67,82,78,67,89,83,84,82,0] /* CRNCYSTR\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([68,95,84,95,70,77,84,0] /* D_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([68,95,70,77,84,0] /* D_FMT\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([84,95,70,77,84,0] /* T_FMT\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([65,77,95,83,84,82,0] /* AM_STR\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([80,77,95,83,84,82,0] /* PM_STR\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([67,79,68,69,83,69,84,0] /* CODESET\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([84,95,70,77,84,95,65,77,80,77,0] /* T_FMT_AMPM\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([69,82,65,0] /* ERA\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([69,82,65,95,68,95,70,77,84,0] /* ERA_D_FMT\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([69,82,65,95,68,95,84,95,70,77,84,0] /* ERA_D_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([69,82,65,95,84,95,70,77,84,0] /* ERA_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([65,76,84,95,68,73,71,73,84,83,0] /* ALT_DIGITS\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([89,69,83,69,88,80,82,0] /* YESEXPR\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([78,79,69,88,80,82,0] /* NOEXPR\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([95,68,65,84,69,95,70,77,84,0] /* _DATE_FMT\00 */, "i8", ALLOC_NORMAL);
_nl_langinfo__doc__=allocate([110,108,95,108,97,110,103,105,110,102,111,40,107,101,121,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,104,101,32,118,97,108,117,101,32,102,111,114,32,116,104,101,32,108,111,99,97,108,101,32,105,110,102,111,114,109,97,116,105,111,110,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,107,101,121,46,0] /* nl_langinfo(key) ->  */, "i8", ALLOC_NORMAL);
__str85=allocate([105,58,110,108,95,108,97,110,103,105,110,102,111,0] /* i:nl_langinfo\00 */, "i8", ALLOC_NORMAL);
__str86=allocate(1, "i8", ALLOC_NORMAL);
__str87=allocate([117,110,115,117,112,112,111,114,116,101,100,32,108,97,110,103,105,110,102,111,32,99,111,110,115,116,97,110,116,0] /* unsupported langinfo */, "i8", ALLOC_NORMAL);
_gettext__doc__=allocate([103,101,116,116,101,120,116,40,109,115,103,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,46,0] /* gettext(msg) -> stri */, "i8", ALLOC_NORMAL);
__str88=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
_dgettext__doc__=allocate([100,103,101,116,116,101,120,116,40,100,111,109,97,105,110,44,32,109,115,103,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,32,105,110,32,100,111,109,97,105,110,46,0] /* dgettext(domain, msg */, "i8", ALLOC_NORMAL);
__str89=allocate([122,115,0] /* zs\00 */, "i8", ALLOC_NORMAL);
_dcgettext__doc__=allocate([100,99,103,101,116,116,101,120,116,40,100,111,109,97,105,110,44,32,109,115,103,44,32,99,97,116,101,103,111,114,121,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,32,105,110,32,100,111,109,97,105,110,32,97,110,100,32,99,97,116,101,103,111,114,121,46,0] /* dcgettext(domain, ms */, "i8", ALLOC_NORMAL);
__str90=allocate([122,115,105,0] /* zsi\00 */, "i8", ALLOC_NORMAL);
_textdomain__doc__=allocate([116,101,120,116,100,111,109,97,105,110,40,100,111,109,97,105,110,41,32,45,62,32,115,116,114,105,110,103,10,83,101,116,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,116,101,120,116,100,109,97,105,110,32,116,111,32,100,111,109,97,105,110,44,32,114,101,116,117,114,110,105,110,103,32,116,104,101,32,110,101,119,32,100,111,109,97,105,110,46,0] /* textdomain(domain) - */, "i8", ALLOC_NORMAL);
__str91=allocate([122,0] /* z\00 */, "i8", ALLOC_NORMAL);
_bindtextdomain__doc__=allocate([98,105,110,100,116,101,120,116,100,111,109,97,105,110,40,100,111,109,97,105,110,44,32,100,105,114,41,32,45,62,32,115,116,114,105,110,103,10,66,105,110,100,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,100,111,109,97,105,110,32,116,111,32,100,105,114,46,0] /* bindtextdomain(domai */, "i8", ALLOC_NORMAL);
__str92=allocate([115,122,0] /* sz\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([100,111,109,97,105,110,32,109,117,115,116,32,98,101,32,97,32,110,111,110,45,101,109,112,116,121,32,115,116,114,105,110,103,0] /* domain must be a non */, "i8", ALLOC_NORMAL);
_bind_textdomain_codeset__doc__=allocate([98,105,110,100,95,116,101,120,116,100,111,109,97,105,110,95,99,111,100,101,115,101,116,40,100,111,109,97,105,110,44,32,99,111,100,101,115,101,116,41,32,45,62,32,115,116,114,105,110,103,10,66,105,110,100,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,100,111,109,97,105,110,32,116,111,32,99,111,100,101,115,101,116,46,0] /* bind_textdomain_code */, "i8", ALLOC_NORMAL);
__str94=allocate([115,101,116,108,111,99,97,108,101,0] /* setlocale\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([108,111,99,97,108,101,99,111,110,118,0] /* localeconv\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([115,116,114,120,102,114,109,0] /* strxfrm\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([110,108,95,108,97,110,103,105,110,102,111,0] /* nl_langinfo\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([103,101,116,116,101,120,116,0] /* gettext\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([100,103,101,116,116,101,120,116,0] /* dgettext\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([100,99,103,101,116,116,101,120,116,0] /* dcgettext\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([116,101,120,116,100,111,109,97,105,110,0] /* textdomain\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([98,105,110,100,116,101,120,116,100,111,109,97,105,110,0] /* bindtextdomain\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([98,105,110,100,95,116,101,120,116,100,111,109,97,105,110,95,99,111,100,101,115,101,116,0] /* bind_textdomain_code */, "i8", ALLOC_NORMAL);
_PyLocale_Methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str104=allocate([95,108,111,99,97,108,101,0] /* _locale\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([76,67,95,67,84,89,80,69,0] /* LC_CTYPE\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([76,67,95,84,73,77,69,0] /* LC_TIME\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([76,67,95,67,79,76,76,65,84,69,0] /* LC_COLLATE\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([76,67,95,77,79,78,69,84,65,82,89,0] /* LC_MONETARY\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([76,67,95,77,69,83,83,65,71,69,83,0] /* LC_MESSAGES\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([76,67,95,78,85,77,69,82,73,67,0] /* LC_NUMERIC\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([76,67,95,65,76,76,0] /* LC_ALL\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([67,72,65,82,95,77,65,88,0] /* CHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([108,111,99,97,108,101,46,69,114,114,111,114,0] /* locale.Error\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
HEAP[_langinfo_constants]=__str29;
HEAP[_langinfo_constants+8]=__str30;
HEAP[_langinfo_constants+16]=__str31;
HEAP[_langinfo_constants+24]=__str32;
HEAP[_langinfo_constants+32]=__str33;
HEAP[_langinfo_constants+40]=__str34;
HEAP[_langinfo_constants+48]=__str35;
HEAP[_langinfo_constants+56]=__str36;
HEAP[_langinfo_constants+64]=__str37;
HEAP[_langinfo_constants+72]=__str38;
HEAP[_langinfo_constants+80]=__str39;
HEAP[_langinfo_constants+88]=__str40;
HEAP[_langinfo_constants+96]=__str41;
HEAP[_langinfo_constants+104]=__str42;
HEAP[_langinfo_constants+112]=__str43;
HEAP[_langinfo_constants+120]=__str44;
HEAP[_langinfo_constants+128]=__str45;
HEAP[_langinfo_constants+136]=__str46;
HEAP[_langinfo_constants+144]=__str47;
HEAP[_langinfo_constants+152]=__str48;
HEAP[_langinfo_constants+160]=__str49;
HEAP[_langinfo_constants+168]=__str50;
HEAP[_langinfo_constants+176]=__str51;
HEAP[_langinfo_constants+184]=__str52;
HEAP[_langinfo_constants+192]=__str53;
HEAP[_langinfo_constants+200]=__str54;
HEAP[_langinfo_constants+208]=__str55;
HEAP[_langinfo_constants+216]=__str56;
HEAP[_langinfo_constants+224]=__str57;
HEAP[_langinfo_constants+232]=__str58;
HEAP[_langinfo_constants+240]=__str59;
HEAP[_langinfo_constants+248]=__str60;
HEAP[_langinfo_constants+256]=__str61;
HEAP[_langinfo_constants+264]=__str62;
HEAP[_langinfo_constants+272]=__str63;
HEAP[_langinfo_constants+280]=__str64;
HEAP[_langinfo_constants+288]=__str65;
HEAP[_langinfo_constants+296]=__str66;
HEAP[_langinfo_constants+304]=__str67;
HEAP[_langinfo_constants+312]=__str68;
HEAP[_langinfo_constants+320]=__str69;
HEAP[_langinfo_constants+328]=__str70;
HEAP[_langinfo_constants+336]=__str71;
HEAP[_langinfo_constants+344]=__str72;
HEAP[_langinfo_constants+352]=__str73;
HEAP[_langinfo_constants+360]=__str74;
HEAP[_langinfo_constants+368]=__str75;
HEAP[_langinfo_constants+376]=__str76;
HEAP[_langinfo_constants+384]=__str77;
HEAP[_langinfo_constants+392]=__str78;
HEAP[_langinfo_constants+400]=__str79;
HEAP[_langinfo_constants+408]=__str80;
HEAP[_langinfo_constants+416]=__str81;
HEAP[_langinfo_constants+424]=__str82;
HEAP[_langinfo_constants+432]=__str83;
HEAP[_langinfo_constants+440]=__str84;
HEAP[_PyLocale_Methods]=__str94;
HEAP[_PyLocale_Methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_PyLocale_Methods+12]=_setlocale__doc__;
HEAP[_PyLocale_Methods+16]=__str95;
HEAP[_PyLocale_Methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_PyLocale_Methods+28]=_localeconv__doc__;
HEAP[_PyLocale_Methods+32]=__str26;
HEAP[_PyLocale_Methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_PyLocale_Methods+44]=_strcoll__doc__;
HEAP[_PyLocale_Methods+48]=__str96;
HEAP[_PyLocale_Methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_PyLocale_Methods+60]=_strxfrm__doc__;
HEAP[_PyLocale_Methods+64]=__str97;
HEAP[_PyLocale_Methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyLocale_Methods+76]=_nl_langinfo__doc__;
HEAP[_PyLocale_Methods+80]=__str98;
HEAP[_PyLocale_Methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyLocale_Methods+92]=_gettext__doc__;
HEAP[_PyLocale_Methods+96]=__str99;
HEAP[_PyLocale_Methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyLocale_Methods+108]=_dgettext__doc__;
HEAP[_PyLocale_Methods+112]=__str100;
HEAP[_PyLocale_Methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyLocale_Methods+124]=_dcgettext__doc__;
HEAP[_PyLocale_Methods+128]=__str101;
HEAP[_PyLocale_Methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyLocale_Methods+140]=_textdomain__doc__;
HEAP[_PyLocale_Methods+144]=__str102;
HEAP[_PyLocale_Methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyLocale_Methods+156]=_bindtextdomain__doc__;
HEAP[_PyLocale_Methods+160]=__str103;
HEAP[_PyLocale_Methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyLocale_Methods+172]=_bind_textdomain_codeset__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

