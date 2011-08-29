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



var $0___SIZE = 196; // %0
  
var $1___SIZE = 32; // %1
  
var $2___SIZE = 16; // %2
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__grouperobject___SIZE = 16; // %struct._grouperobject
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_combinationsobject___SIZE = 28; // %struct.combinationsobject
  
var $struct_countobject___SIZE = 20; // %struct.countobject
  
var $struct_cycleobject___SIZE = 20; // %struct.cycleobject
  
var $struct_groupbyobject___SIZE = 28; // %struct.groupbyobject
  
var $struct_isliceobject___SIZE = 28; // %struct.isliceobject
  
var $struct_iziplongestobject___SIZE = 28; // %struct.iziplongestobject
  
var $struct_permutationsobject___SIZE = 32; // %struct.permutationsobject
  
var $struct_productobject___SIZE = 24; // %struct.productobject
  
var $struct_repeatobject___SIZE = 16; // %struct.repeatobject
  
var $struct_teedataobject___SIZE = 248; // %struct.teedataobject
  
var $struct_teeobject___SIZE = 20; // %struct.teeobject
  

var __str;
var _kwargs_8351;
var __str1;
var __str2;
var _groupby_doc;
var __str3;
var _groupby_type;
var __str4;
var __str5;
var ___PRETTY_FUNCTION___8669;
var __str6;
var __str7;
var __grouper_type;
var __str8;
var ___PRETTY_FUNCTION___8768;
var __str9;
var _teedataobject_doc;
var __str10;
var _teedataobject_type;
var _teecopy_doc;
var __str11;
var _teeobject_doc;
var __str12;
var _tee_methods;
var __str13;
var _tee_type;
var __str14;

var __str15;
var _tee_doc;
var __str16;
var __str17;

var _cycle_doc;
var __str18;
var _cycle_type;
var __str19;
var __str20;
var _dropwhile_doc;
var __str21;
var _dropwhile_type;
var __str22;
var __str23;
var _takewhile_doc;
var __str24;
var _takewhile_type;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var _islice_doc;
var __str30;
var _islice_type;
var __str31;
var __str32;

var _starmap_doc;
var __str33;
var _starmap_type;
var __str34;

var __str35;
var _imap_doc;
var __str36;
var _imap_type;
var __str37;
var _chain_doc;
var _chain_from_iterable_doc;
var __str38;
var _chain_methods;
var __str39;
var _chain_type;
var __str40;
var __str41;
var __str42;
var __str43;
var ___PRETTY_FUNCTION___10265;
var __str44;
var ___PRETTY_FUNCTION___10428;
var _product_doc;
var __str45;
var _product_type;
var __str46;
var _kwargs_10542;
var __str47;
var __str48;
var __str49;
var ___PRETTY_FUNCTION___10664;
var _combinations_doc;
var __str50;
var _combinations_type;
var __str51;
var _kwargs_10765;
var ___PRETTY_FUNCTION___10891;
var _cwr_doc;
var __str52;
var _cwr_type;
var __str53;
var _kwargs_10993;
var ___PRETTY_FUNCTION___11129;
var _permutations_doc;
var __str54;
var _permutations_type;
var __str55;
var _kwargs_11231;
var __str56;
var __str57;
var _compress_doc;
var __str58;
var _compress_type;
var __str59;
var __str60;

var _ifilter_doc;
var __str61;
var _ifilter_type;
var __str62;
var __str63;
var _ifilterfalse_doc;
var __str64;
var _ifilterfalse_type;
var __str65;
var _kwlist_11697;
var __str66;
var __str67;
var __str68;
var __str69;
var ___PRETTY_FUNCTION___11698;
var __str70;
var __str71;
var __str72;
var ___PRETTY_FUNCTION___11885;
var __str73;
var __str74;
var __str75;
var __str76;
var __str77;
var _count_reduce_doc;
var __str78;
var _count_methods;
var _count_doc;
var __str79;
var _count_type;
var __str80;
var ___PRETTY_FUNCTION___12009;
var __str81;
var _izip_doc;
var __str82;
var _izip_type;
var __str83;
var _kwargs_12229;
var __str84;
var __str85;
var __str86;
var __str87;
var __str88;
var _length_hint_doc;
var __str89;
var _repeat_methods;
var _repeat_doc;
var __str90;
var _repeat_type;

var __str91;
var __str92;
var ___PRETTY_FUNCTION___12366;
var __str93;
var _izip_longest_doc;
var __str94;
var _iziplongest_type;
var _module_doc;
var _module_methods;
var _C_280_12667;

var __str95;
var __str96;
var ___PRETTY_FUNCTION___12663;


























































  function _groupby_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $gbo;
        var $it=__stackBase__;
        var $keyfunc=__stackBase__+4;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$keyfunc]=__Py_NoneStruct; //@line 31 "itertoolsmodule.c"
        var $1=$args_addr; //@line 33 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 33 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str, _kwargs_8351, allocate([$it,0,0,0,$keyfunc,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 33 "itertoolsmodule.c"
        var $4=($3)==0; //@line 33 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 33 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 35 "itertoolsmodule.c"
        __label__ = 9; break; //@line 35 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 37 "itertoolsmodule.c"
        var $6=$5+152; //@line 37 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 37 "itertoolsmodule.c"
        var $8=$type_addr; //@line 37 "itertoolsmodule.c"
        var $9=FUNCTION_TABLE[$7]($8, 0); //@line 37 "itertoolsmodule.c"
        var $10=$9; //@line 37 "itertoolsmodule.c"
        $gbo=$10; //@line 37 "itertoolsmodule.c"
        var $11=$gbo; //@line 38 "itertoolsmodule.c"
        var $12=($11)==0; //@line 38 "itertoolsmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 38 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 39 "itertoolsmodule.c"
        __label__ = 9; break; //@line 39 "itertoolsmodule.c"
      case 4: // $bb3
        var $13=$gbo; //@line 40 "itertoolsmodule.c"
        var $14=$13+16; //@line 40 "itertoolsmodule.c"
        HEAP[$14]=0; //@line 40 "itertoolsmodule.c"
        var $15=$gbo; //@line 41 "itertoolsmodule.c"
        var $16=$15+20; //@line 41 "itertoolsmodule.c"
        HEAP[$16]=0; //@line 41 "itertoolsmodule.c"
        var $17=$gbo; //@line 42 "itertoolsmodule.c"
        var $18=$17+24; //@line 42 "itertoolsmodule.c"
        HEAP[$18]=0; //@line 42 "itertoolsmodule.c"
        var $19=HEAP[$keyfunc]; //@line 43 "itertoolsmodule.c"
        var $20=$gbo; //@line 43 "itertoolsmodule.c"
        var $21=$20+12; //@line 43 "itertoolsmodule.c"
        HEAP[$21]=$19; //@line 43 "itertoolsmodule.c"
        var $22=HEAP[$keyfunc]; //@line 44 "itertoolsmodule.c"
        var $23=$22; //@line 44 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 44 "itertoolsmodule.c"
        var $25=($24) + 1; //@line 44 "itertoolsmodule.c"
        var $26=$22; //@line 44 "itertoolsmodule.c"
        HEAP[$26]=$25; //@line 44 "itertoolsmodule.c"
        var $27=HEAP[$it]; //@line 45 "itertoolsmodule.c"
        var $28=_PyObject_GetIter($27); //@line 45 "itertoolsmodule.c"
        var $29=$gbo; //@line 45 "itertoolsmodule.c"
        var $30=$29+8; //@line 45 "itertoolsmodule.c"
        HEAP[$30]=$28; //@line 45 "itertoolsmodule.c"
        var $31=$gbo; //@line 46 "itertoolsmodule.c"
        var $32=$31+8; //@line 46 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 46 "itertoolsmodule.c"
        var $34=($33)==0; //@line 46 "itertoolsmodule.c"
        var $35=$gbo; //@line 47 "itertoolsmodule.c"
        var $36=$35; //@line 47 "itertoolsmodule.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 46 "itertoolsmodule.c"
      case 5: // $bb4
        var $37=$36; //@line 47 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 47 "itertoolsmodule.c"
        var $39=($38) - 1; //@line 47 "itertoolsmodule.c"
        var $40=$36; //@line 47 "itertoolsmodule.c"
        HEAP[$40]=$39; //@line 47 "itertoolsmodule.c"
        var $41=$36; //@line 47 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 47 "itertoolsmodule.c"
        var $43=($42)==0; //@line 47 "itertoolsmodule.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 47 "itertoolsmodule.c"
      case 6: // $bb5
        var $44=$gbo; //@line 47 "itertoolsmodule.c"
        var $45=$44; //@line 47 "itertoolsmodule.c"
        var $46=$45+4; //@line 47 "itertoolsmodule.c"
        var $47=HEAP[$46]; //@line 47 "itertoolsmodule.c"
        var $48=$47+24; //@line 47 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 47 "itertoolsmodule.c"
        var $50=$gbo; //@line 47 "itertoolsmodule.c"
        var $51=$50; //@line 47 "itertoolsmodule.c"
        FUNCTION_TABLE[$49]($51); //@line 47 "itertoolsmodule.c"
        __label__ = 7; break; //@line 47 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 48 "itertoolsmodule.c"
        __label__ = 9; break; //@line 48 "itertoolsmodule.c"
      case 8: // $bb7
        $0=$36; //@line 50 "itertoolsmodule.c"
        __label__ = 9; break; //@line 50 "itertoolsmodule.c"
      case 9: // $bb8
        var $52=$0; //@line 35 "itertoolsmodule.c"
        $retval=$52; //@line 35 "itertoolsmodule.c"
        var $retval9=$retval; //@line 35 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 35 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _groupby_dealloc($gbo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $gbo_addr;
        $gbo_addr=$gbo;
        var $0=$gbo_addr; //@line 56 "itertoolsmodule.c"
        var $1=$0; //@line 56 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 56 "itertoolsmodule.c"
        var $2=$gbo_addr; //@line 57 "itertoolsmodule.c"
        var $3=$2+8; //@line 57 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 57 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 57 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 57 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$gbo_addr; //@line 57 "itertoolsmodule.c"
        var $7=$6+8; //@line 57 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 57 "itertoolsmodule.c"
        var $9=$8; //@line 57 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 57 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 57 "itertoolsmodule.c"
        var $12=$8; //@line 57 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 57 "itertoolsmodule.c"
        var $13=$8; //@line 57 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 57 "itertoolsmodule.c"
        var $15=($14)==0; //@line 57 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 57 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$gbo_addr; //@line 57 "itertoolsmodule.c"
        var $17=$16+8; //@line 57 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 57 "itertoolsmodule.c"
        var $19=$18+4; //@line 57 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 57 "itertoolsmodule.c"
        var $21=$20+24; //@line 57 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 57 "itertoolsmodule.c"
        var $23=$gbo_addr; //@line 57 "itertoolsmodule.c"
        var $24=$23+8; //@line 57 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 57 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 57 "itertoolsmodule.c"
        __label__ = 3; break; //@line 57 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$gbo_addr; //@line 58 "itertoolsmodule.c"
        var $27=$26+12; //@line 58 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 58 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 58 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 58 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$gbo_addr; //@line 58 "itertoolsmodule.c"
        var $31=$30+12; //@line 58 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 58 "itertoolsmodule.c"
        var $33=$32; //@line 58 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 58 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 58 "itertoolsmodule.c"
        var $36=$32; //@line 58 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 58 "itertoolsmodule.c"
        var $37=$32; //@line 58 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 58 "itertoolsmodule.c"
        var $39=($38)==0; //@line 58 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 58 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$gbo_addr; //@line 58 "itertoolsmodule.c"
        var $41=$40+12; //@line 58 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 58 "itertoolsmodule.c"
        var $43=$42+4; //@line 58 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 58 "itertoolsmodule.c"
        var $45=$44+24; //@line 58 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 58 "itertoolsmodule.c"
        var $47=$gbo_addr; //@line 58 "itertoolsmodule.c"
        var $48=$47+12; //@line 58 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 58 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 58 "itertoolsmodule.c"
        __label__ = 6; break; //@line 58 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$gbo_addr; //@line 59 "itertoolsmodule.c"
        var $51=$50+16; //@line 59 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 59 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 59 "itertoolsmodule.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 59 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$gbo_addr; //@line 59 "itertoolsmodule.c"
        var $55=$54+16; //@line 59 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 59 "itertoolsmodule.c"
        var $57=$56; //@line 59 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 59 "itertoolsmodule.c"
        var $59=($58) - 1; //@line 59 "itertoolsmodule.c"
        var $60=$56; //@line 59 "itertoolsmodule.c"
        HEAP[$60]=$59; //@line 59 "itertoolsmodule.c"
        var $61=$56; //@line 59 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 59 "itertoolsmodule.c"
        var $63=($62)==0; //@line 59 "itertoolsmodule.c"
        if ($63) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 59 "itertoolsmodule.c"
      case 8: // $bb7
        var $64=$gbo_addr; //@line 59 "itertoolsmodule.c"
        var $65=$64+16; //@line 59 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 59 "itertoolsmodule.c"
        var $67=$66+4; //@line 59 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 59 "itertoolsmodule.c"
        var $69=$68+24; //@line 59 "itertoolsmodule.c"
        var $70=HEAP[$69]; //@line 59 "itertoolsmodule.c"
        var $71=$gbo_addr; //@line 59 "itertoolsmodule.c"
        var $72=$71+16; //@line 59 "itertoolsmodule.c"
        var $73=HEAP[$72]; //@line 59 "itertoolsmodule.c"
        FUNCTION_TABLE[$70]($73); //@line 59 "itertoolsmodule.c"
        __label__ = 9; break; //@line 59 "itertoolsmodule.c"
      case 9: // $bb8
        var $74=$gbo_addr; //@line 60 "itertoolsmodule.c"
        var $75=$74+20; //@line 60 "itertoolsmodule.c"
        var $76=HEAP[$75]; //@line 60 "itertoolsmodule.c"
        var $77=($76)!=0; //@line 60 "itertoolsmodule.c"
        if ($77) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 60 "itertoolsmodule.c"
      case 10: // $bb9
        var $78=$gbo_addr; //@line 60 "itertoolsmodule.c"
        var $79=$78+20; //@line 60 "itertoolsmodule.c"
        var $80=HEAP[$79]; //@line 60 "itertoolsmodule.c"
        var $81=$80; //@line 60 "itertoolsmodule.c"
        var $82=HEAP[$81]; //@line 60 "itertoolsmodule.c"
        var $83=($82) - 1; //@line 60 "itertoolsmodule.c"
        var $84=$80; //@line 60 "itertoolsmodule.c"
        HEAP[$84]=$83; //@line 60 "itertoolsmodule.c"
        var $85=$80; //@line 60 "itertoolsmodule.c"
        var $86=HEAP[$85]; //@line 60 "itertoolsmodule.c"
        var $87=($86)==0; //@line 60 "itertoolsmodule.c"
        if ($87) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 60 "itertoolsmodule.c"
      case 11: // $bb10
        var $88=$gbo_addr; //@line 60 "itertoolsmodule.c"
        var $89=$88+20; //@line 60 "itertoolsmodule.c"
        var $90=HEAP[$89]; //@line 60 "itertoolsmodule.c"
        var $91=$90+4; //@line 60 "itertoolsmodule.c"
        var $92=HEAP[$91]; //@line 60 "itertoolsmodule.c"
        var $93=$92+24; //@line 60 "itertoolsmodule.c"
        var $94=HEAP[$93]; //@line 60 "itertoolsmodule.c"
        var $95=$gbo_addr; //@line 60 "itertoolsmodule.c"
        var $96=$95+20; //@line 60 "itertoolsmodule.c"
        var $97=HEAP[$96]; //@line 60 "itertoolsmodule.c"
        FUNCTION_TABLE[$94]($97); //@line 60 "itertoolsmodule.c"
        __label__ = 12; break; //@line 60 "itertoolsmodule.c"
      case 12: // $bb11
        var $98=$gbo_addr; //@line 61 "itertoolsmodule.c"
        var $99=$98+24; //@line 61 "itertoolsmodule.c"
        var $100=HEAP[$99]; //@line 61 "itertoolsmodule.c"
        var $101=($100)!=0; //@line 61 "itertoolsmodule.c"
        if ($101) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 61 "itertoolsmodule.c"
      case 13: // $bb12
        var $102=$gbo_addr; //@line 61 "itertoolsmodule.c"
        var $103=$102+24; //@line 61 "itertoolsmodule.c"
        var $104=HEAP[$103]; //@line 61 "itertoolsmodule.c"
        var $105=$104; //@line 61 "itertoolsmodule.c"
        var $106=HEAP[$105]; //@line 61 "itertoolsmodule.c"
        var $107=($106) - 1; //@line 61 "itertoolsmodule.c"
        var $108=$104; //@line 61 "itertoolsmodule.c"
        HEAP[$108]=$107; //@line 61 "itertoolsmodule.c"
        var $109=$104; //@line 61 "itertoolsmodule.c"
        var $110=HEAP[$109]; //@line 61 "itertoolsmodule.c"
        var $111=($110)==0; //@line 61 "itertoolsmodule.c"
        if ($111) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 61 "itertoolsmodule.c"
      case 14: // $bb13
        var $112=$gbo_addr; //@line 61 "itertoolsmodule.c"
        var $113=$112+24; //@line 61 "itertoolsmodule.c"
        var $114=HEAP[$113]; //@line 61 "itertoolsmodule.c"
        var $115=$114+4; //@line 61 "itertoolsmodule.c"
        var $116=HEAP[$115]; //@line 61 "itertoolsmodule.c"
        var $117=$116+24; //@line 61 "itertoolsmodule.c"
        var $118=HEAP[$117]; //@line 61 "itertoolsmodule.c"
        var $119=$gbo_addr; //@line 61 "itertoolsmodule.c"
        var $120=$119+24; //@line 61 "itertoolsmodule.c"
        var $121=HEAP[$120]; //@line 61 "itertoolsmodule.c"
        FUNCTION_TABLE[$118]($121); //@line 61 "itertoolsmodule.c"
        __label__ = 15; break; //@line 61 "itertoolsmodule.c"
      case 15: // $bb14
        var $122=$gbo_addr; //@line 62 "itertoolsmodule.c"
        var $123=$122; //@line 62 "itertoolsmodule.c"
        var $124=$123+4; //@line 62 "itertoolsmodule.c"
        var $125=HEAP[$124]; //@line 62 "itertoolsmodule.c"
        var $126=$125+160; //@line 62 "itertoolsmodule.c"
        var $127=HEAP[$126]; //@line 62 "itertoolsmodule.c"
        var $128=$gbo_addr; //@line 62 "itertoolsmodule.c"
        var $129=$128; //@line 62 "itertoolsmodule.c"
        FUNCTION_TABLE[$127]($129); //@line 62 "itertoolsmodule.c"
        ;
        return; //@line 63 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _groupby_traverse($gbo, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $gbo_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        var $vret8;
        var $vret12;
        var $vret16;
        $gbo_addr=$gbo;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$gbo_addr; //@line 68 "itertoolsmodule.c"
        var $2=$1+8; //@line 68 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 68 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 68 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 68 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$gbo_addr; //@line 68 "itertoolsmodule.c"
        var $6=$5+8; //@line 68 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 68 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 68 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 68 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 68 "itertoolsmodule.c"
        $vret=$10; //@line 68 "itertoolsmodule.c"
        var $11=$vret; //@line 68 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 68 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 68 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 68 "itertoolsmodule.c"
        $0=$13; //@line 68 "itertoolsmodule.c"
        __label__ = 16; break; //@line 68 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$gbo_addr; //@line 69 "itertoolsmodule.c"
        var $15=$14+12; //@line 69 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 69 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 69 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 69 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$gbo_addr; //@line 69 "itertoolsmodule.c"
        var $19=$18+12; //@line 69 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 69 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 69 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 69 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 69 "itertoolsmodule.c"
        $vret4=$23; //@line 69 "itertoolsmodule.c"
        var $24=$vret4; //@line 69 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 69 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 69 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 69 "itertoolsmodule.c"
        $0=$26; //@line 69 "itertoolsmodule.c"
        __label__ = 16; break; //@line 69 "itertoolsmodule.c"
      case 6: // $bb6
        var $27=$gbo_addr; //@line 70 "itertoolsmodule.c"
        var $28=$27+16; //@line 70 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 70 "itertoolsmodule.c"
        var $30=($29)!=0; //@line 70 "itertoolsmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 70 "itertoolsmodule.c"
      case 7: // $bb7
        var $31=$gbo_addr; //@line 70 "itertoolsmodule.c"
        var $32=$31+16; //@line 70 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 70 "itertoolsmodule.c"
        var $34=$visit_addr; //@line 70 "itertoolsmodule.c"
        var $35=$arg_addr; //@line 70 "itertoolsmodule.c"
        var $36=FUNCTION_TABLE[$34]($33, $35); //@line 70 "itertoolsmodule.c"
        $vret8=$36; //@line 70 "itertoolsmodule.c"
        var $37=$vret8; //@line 70 "itertoolsmodule.c"
        var $38=($37)!=0; //@line 70 "itertoolsmodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 70 "itertoolsmodule.c"
      case 8: // $bb9
        var $39=$vret8; //@line 70 "itertoolsmodule.c"
        $0=$39; //@line 70 "itertoolsmodule.c"
        __label__ = 16; break; //@line 70 "itertoolsmodule.c"
      case 9: // $bb10
        var $40=$gbo_addr; //@line 71 "itertoolsmodule.c"
        var $41=$40+20; //@line 71 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 71 "itertoolsmodule.c"
        var $43=($42)!=0; //@line 71 "itertoolsmodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 71 "itertoolsmodule.c"
      case 10: // $bb11
        var $44=$gbo_addr; //@line 71 "itertoolsmodule.c"
        var $45=$44+20; //@line 71 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 71 "itertoolsmodule.c"
        var $47=$visit_addr; //@line 71 "itertoolsmodule.c"
        var $48=$arg_addr; //@line 71 "itertoolsmodule.c"
        var $49=FUNCTION_TABLE[$47]($46, $48); //@line 71 "itertoolsmodule.c"
        $vret12=$49; //@line 71 "itertoolsmodule.c"
        var $50=$vret12; //@line 71 "itertoolsmodule.c"
        var $51=($50)!=0; //@line 71 "itertoolsmodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 71 "itertoolsmodule.c"
      case 11: // $bb13
        var $52=$vret12; //@line 71 "itertoolsmodule.c"
        $0=$52; //@line 71 "itertoolsmodule.c"
        __label__ = 16; break; //@line 71 "itertoolsmodule.c"
      case 12: // $bb14
        var $53=$gbo_addr; //@line 72 "itertoolsmodule.c"
        var $54=$53+24; //@line 72 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 72 "itertoolsmodule.c"
        var $56=($55)!=0; //@line 72 "itertoolsmodule.c"
        if ($56) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 72 "itertoolsmodule.c"
      case 13: // $bb15
        var $57=$gbo_addr; //@line 72 "itertoolsmodule.c"
        var $58=$57+24; //@line 72 "itertoolsmodule.c"
        var $59=HEAP[$58]; //@line 72 "itertoolsmodule.c"
        var $60=$visit_addr; //@line 72 "itertoolsmodule.c"
        var $61=$arg_addr; //@line 72 "itertoolsmodule.c"
        var $62=FUNCTION_TABLE[$60]($59, $61); //@line 72 "itertoolsmodule.c"
        $vret16=$62; //@line 72 "itertoolsmodule.c"
        var $63=$vret16; //@line 72 "itertoolsmodule.c"
        var $64=($63)!=0; //@line 72 "itertoolsmodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 72 "itertoolsmodule.c"
      case 14: // $bb17
        var $65=$vret16; //@line 72 "itertoolsmodule.c"
        $0=$65; //@line 72 "itertoolsmodule.c"
        __label__ = 16; break; //@line 72 "itertoolsmodule.c"
      case 15: // $bb18
        $0=0; //@line 73 "itertoolsmodule.c"
        __label__ = 16; break; //@line 73 "itertoolsmodule.c"
      case 16: // $bb19
        var $66=$0; //@line 68 "itertoolsmodule.c"
        $retval=$66; //@line 68 "itertoolsmodule.c"
        var $retval20=$retval; //@line 68 "itertoolsmodule.c"
        ;
        return $retval20; //@line 68 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _groupby_next($gbo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $gbo_addr;
        var $retval;
        var $0;
        var $newvalue;
        var $newkey;
        var $r;
        var $grouper;
        var $tmp;
        var $rcmp;
        $gbo_addr=$gbo;
        __label__ = 1; break; //@line 78 "itertoolsmodule.c"
      case 1: // $bb
        var $1=$gbo_addr; //@line 83 "itertoolsmodule.c"
        var $2=$1+20; //@line 83 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 83 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 83 "itertoolsmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 83 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$gbo_addr; //@line 85 "itertoolsmodule.c"
        var $6=$5+16; //@line 85 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 85 "itertoolsmodule.c"
        var $8=($7)==0; //@line 85 "itertoolsmodule.c"
        if ($8) { __label__ = 20; break; } else { __label__ = 3; break; } //@line 85 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$gbo_addr; //@line 90 "itertoolsmodule.c"
        var $10=$9+20; //@line 90 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 90 "itertoolsmodule.c"
        var $12=$gbo_addr; //@line 90 "itertoolsmodule.c"
        var $13=$12+16; //@line 90 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 90 "itertoolsmodule.c"
        var $15=_PyObject_RichCompareBool($14, $11, 2); //@line 90 "itertoolsmodule.c"
        $rcmp=$15; //@line 90 "itertoolsmodule.c"
        var $16=$rcmp; //@line 92 "itertoolsmodule.c"
        var $17=($16)==-1; //@line 92 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 92 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 93 "itertoolsmodule.c"
        __label__ = 28; break; //@line 93 "itertoolsmodule.c"
      case 5: // $bb4
        var $18=$rcmp; //@line 94 "itertoolsmodule.c"
        var $19=($18)==0; //@line 94 "itertoolsmodule.c"
        if ($19) { __label__ = 20; break; } else { __label__ = 6; break; } //@line 94 "itertoolsmodule.c"
      case 6: // $bb5
        var $20=$gbo_addr; //@line 98 "itertoolsmodule.c"
        var $21=$20+8; //@line 98 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 98 "itertoolsmodule.c"
        var $23=_PyIter_Next($22); //@line 98 "itertoolsmodule.c"
        $newvalue=$23; //@line 98 "itertoolsmodule.c"
        var $24=($23)==0; //@line 99 "itertoolsmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 99 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 100 "itertoolsmodule.c"
        __label__ = 28; break; //@line 100 "itertoolsmodule.c"
      case 8: // $bb7
        var $25=$gbo_addr; //@line 102 "itertoolsmodule.c"
        var $26=$25+12; //@line 102 "itertoolsmodule.c"
        var $27=HEAP[$26]; //@line 102 "itertoolsmodule.c"
        var $28=($27)==(__Py_NoneStruct); //@line 102 "itertoolsmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 102 "itertoolsmodule.c"
      case 9: // $bb8
        var $29=$newvalue; //@line 103 "itertoolsmodule.c"
        $newkey=$29; //@line 103 "itertoolsmodule.c"
        var $30=$newvalue; //@line 104 "itertoolsmodule.c"
        var $31=$30; //@line 104 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 104 "itertoolsmodule.c"
        var $33=($32) + 1; //@line 104 "itertoolsmodule.c"
        var $34=$newvalue; //@line 104 "itertoolsmodule.c"
        var $35=$34; //@line 104 "itertoolsmodule.c"
        HEAP[$35]=$33; //@line 104 "itertoolsmodule.c"
        __label__ = 14; break; //@line 104 "itertoolsmodule.c"
      case 10: // $bb9
        var $36=$gbo_addr; //@line 106 "itertoolsmodule.c"
        var $37=$36+12; //@line 106 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 106 "itertoolsmodule.c"
        var $39=$newvalue; //@line 106 "itertoolsmodule.c"
        var $40=_PyObject_CallFunctionObjArgs($38, allocate([$39,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 106 "itertoolsmodule.c"
        $newkey=$40; //@line 106 "itertoolsmodule.c"
        var $41=$newkey; //@line 108 "itertoolsmodule.c"
        var $42=($41)==0; //@line 108 "itertoolsmodule.c"
        if ($42) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 108 "itertoolsmodule.c"
      case 11: // $bb10
        var $43=$newvalue; //@line 109 "itertoolsmodule.c"
        var $44=$43; //@line 109 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 109 "itertoolsmodule.c"
        var $46=($45) - 1; //@line 109 "itertoolsmodule.c"
        var $47=$newvalue; //@line 109 "itertoolsmodule.c"
        var $48=$47; //@line 109 "itertoolsmodule.c"
        HEAP[$48]=$46; //@line 109 "itertoolsmodule.c"
        var $49=$newvalue; //@line 109 "itertoolsmodule.c"
        var $50=$49; //@line 109 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 109 "itertoolsmodule.c"
        var $52=($51)==0; //@line 109 "itertoolsmodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 109 "itertoolsmodule.c"
      case 12: // $bb11
        var $53=$newvalue; //@line 109 "itertoolsmodule.c"
        var $54=$53+4; //@line 109 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 109 "itertoolsmodule.c"
        var $56=$55+24; //@line 109 "itertoolsmodule.c"
        var $57=HEAP[$56]; //@line 109 "itertoolsmodule.c"
        var $58=$newvalue; //@line 109 "itertoolsmodule.c"
        FUNCTION_TABLE[$57]($58); //@line 109 "itertoolsmodule.c"
        __label__ = 13; break; //@line 109 "itertoolsmodule.c"
      case 13: // $bb12
        $0=0; //@line 110 "itertoolsmodule.c"
        __label__ = 28; break; //@line 110 "itertoolsmodule.c"
      case 14: // $bb13
        var $59=$gbo_addr; //@line 114 "itertoolsmodule.c"
        var $60=$59+20; //@line 114 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 114 "itertoolsmodule.c"
        $tmp=$61; //@line 114 "itertoolsmodule.c"
        var $62=$gbo_addr; //@line 115 "itertoolsmodule.c"
        var $63=$62+20; //@line 115 "itertoolsmodule.c"
        var $64=$newkey; //@line 115 "itertoolsmodule.c"
        HEAP[$63]=$64; //@line 115 "itertoolsmodule.c"
        var $65=$tmp; //@line 116 "itertoolsmodule.c"
        var $66=($65)!=0; //@line 116 "itertoolsmodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 116 "itertoolsmodule.c"
      case 15: // $bb14
        var $67=$tmp; //@line 116 "itertoolsmodule.c"
        var $68=$67; //@line 116 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 116 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 116 "itertoolsmodule.c"
        var $71=$tmp; //@line 116 "itertoolsmodule.c"
        var $72=$71; //@line 116 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 116 "itertoolsmodule.c"
        var $73=$tmp; //@line 116 "itertoolsmodule.c"
        var $74=$73; //@line 116 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 116 "itertoolsmodule.c"
        var $76=($75)==0; //@line 116 "itertoolsmodule.c"
        if ($76) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 116 "itertoolsmodule.c"
      case 16: // $bb15
        var $77=$tmp; //@line 116 "itertoolsmodule.c"
        var $78=$77+4; //@line 116 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 116 "itertoolsmodule.c"
        var $80=$79+24; //@line 116 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 116 "itertoolsmodule.c"
        var $82=$tmp; //@line 116 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 116 "itertoolsmodule.c"
        __label__ = 17; break; //@line 116 "itertoolsmodule.c"
      case 17: // $bb16
        var $83=$gbo_addr; //@line 118 "itertoolsmodule.c"
        var $84=$83+24; //@line 118 "itertoolsmodule.c"
        var $85=HEAP[$84]; //@line 118 "itertoolsmodule.c"
        $tmp=$85; //@line 118 "itertoolsmodule.c"
        var $86=$gbo_addr; //@line 119 "itertoolsmodule.c"
        var $87=$86+24; //@line 119 "itertoolsmodule.c"
        var $88=$newvalue; //@line 119 "itertoolsmodule.c"
        HEAP[$87]=$88; //@line 119 "itertoolsmodule.c"
        var $89=$tmp; //@line 120 "itertoolsmodule.c"
        var $90=($89)!=0; //@line 120 "itertoolsmodule.c"
        if ($90) { __label__ = 18; break; } else { __label__ = 1; break; } //@line 120 "itertoolsmodule.c"
      case 18: // $bb17
        var $91=$tmp; //@line 120 "itertoolsmodule.c"
        var $92=$91; //@line 120 "itertoolsmodule.c"
        var $93=HEAP[$92]; //@line 120 "itertoolsmodule.c"
        var $94=($93) - 1; //@line 120 "itertoolsmodule.c"
        var $95=$tmp; //@line 120 "itertoolsmodule.c"
        var $96=$95; //@line 120 "itertoolsmodule.c"
        HEAP[$96]=$94; //@line 120 "itertoolsmodule.c"
        var $97=$tmp; //@line 120 "itertoolsmodule.c"
        var $98=$97; //@line 120 "itertoolsmodule.c"
        var $99=HEAP[$98]; //@line 120 "itertoolsmodule.c"
        var $100=($99)==0; //@line 120 "itertoolsmodule.c"
        if ($100) { __label__ = 19; break; } else { __label__ = 1; break; } //@line 120 "itertoolsmodule.c"
      case 19: // $bb18
        var $101=$tmp; //@line 120 "itertoolsmodule.c"
        var $102=$101+4; //@line 120 "itertoolsmodule.c"
        var $103=HEAP[$102]; //@line 120 "itertoolsmodule.c"
        var $104=$103+24; //@line 120 "itertoolsmodule.c"
        var $105=HEAP[$104]; //@line 120 "itertoolsmodule.c"
        var $106=$tmp; //@line 120 "itertoolsmodule.c"
        FUNCTION_TABLE[$105]($106); //@line 120 "itertoolsmodule.c"
        __label__ = 1; break; //@line 120 "itertoolsmodule.c"
      case 20: // $bb20
        var $107=$gbo_addr; //@line 123 "itertoolsmodule.c"
        var $108=$107+20; //@line 123 "itertoolsmodule.c"
        var $109=HEAP[$108]; //@line 123 "itertoolsmodule.c"
        var $110=$109; //@line 123 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 123 "itertoolsmodule.c"
        var $112=($111) + 1; //@line 123 "itertoolsmodule.c"
        var $113=$109; //@line 123 "itertoolsmodule.c"
        HEAP[$113]=$112; //@line 123 "itertoolsmodule.c"
        var $114=$gbo_addr; //@line 124 "itertoolsmodule.c"
        var $115=$114+16; //@line 124 "itertoolsmodule.c"
        var $116=HEAP[$115]; //@line 124 "itertoolsmodule.c"
        $tmp=$116; //@line 124 "itertoolsmodule.c"
        var $117=$gbo_addr; //@line 125 "itertoolsmodule.c"
        var $118=$117+20; //@line 125 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 125 "itertoolsmodule.c"
        var $120=$gbo_addr; //@line 125 "itertoolsmodule.c"
        var $121=$120+16; //@line 125 "itertoolsmodule.c"
        HEAP[$121]=$119; //@line 125 "itertoolsmodule.c"
        var $122=$tmp; //@line 126 "itertoolsmodule.c"
        var $123=($122)!=0; //@line 126 "itertoolsmodule.c"
        if ($123) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 126 "itertoolsmodule.c"
      case 21: // $bb21
        var $124=$tmp; //@line 126 "itertoolsmodule.c"
        var $125=$124; //@line 126 "itertoolsmodule.c"
        var $126=HEAP[$125]; //@line 126 "itertoolsmodule.c"
        var $127=($126) - 1; //@line 126 "itertoolsmodule.c"
        var $128=$tmp; //@line 126 "itertoolsmodule.c"
        var $129=$128; //@line 126 "itertoolsmodule.c"
        HEAP[$129]=$127; //@line 126 "itertoolsmodule.c"
        var $130=$tmp; //@line 126 "itertoolsmodule.c"
        var $131=$130; //@line 126 "itertoolsmodule.c"
        var $132=HEAP[$131]; //@line 126 "itertoolsmodule.c"
        var $133=($132)==0; //@line 126 "itertoolsmodule.c"
        if ($133) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 126 "itertoolsmodule.c"
      case 22: // $bb22
        var $134=$tmp; //@line 126 "itertoolsmodule.c"
        var $135=$134+4; //@line 126 "itertoolsmodule.c"
        var $136=HEAP[$135]; //@line 126 "itertoolsmodule.c"
        var $137=$136+24; //@line 126 "itertoolsmodule.c"
        var $138=HEAP[$137]; //@line 126 "itertoolsmodule.c"
        var $139=$tmp; //@line 126 "itertoolsmodule.c"
        FUNCTION_TABLE[$138]($139); //@line 126 "itertoolsmodule.c"
        __label__ = 23; break; //@line 126 "itertoolsmodule.c"
      case 23: // $bb23
        var $140=$gbo_addr; //@line 128 "itertoolsmodule.c"
        var $141=$140+16; //@line 128 "itertoolsmodule.c"
        var $142=HEAP[$141]; //@line 128 "itertoolsmodule.c"
        var $143=$gbo_addr; //@line 128 "itertoolsmodule.c"
        var $144=__grouper_create($143, $142); //@line 128 "itertoolsmodule.c"
        $grouper=$144; //@line 128 "itertoolsmodule.c"
        var $145=($144)==0; //@line 129 "itertoolsmodule.c"
        if ($145) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 129 "itertoolsmodule.c"
      case 24: // $bb24
        $0=0; //@line 130 "itertoolsmodule.c"
        __label__ = 28; break; //@line 130 "itertoolsmodule.c"
      case 25: // $bb25
        var $146=$gbo_addr; //@line 132 "itertoolsmodule.c"
        var $147=$146+20; //@line 132 "itertoolsmodule.c"
        var $148=HEAP[$147]; //@line 132 "itertoolsmodule.c"
        var $149=$grouper; //@line 132 "itertoolsmodule.c"
        var $150=_PyTuple_Pack(2, allocate([$148,0,0,0,$149,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 132 "itertoolsmodule.c"
        $r=$150; //@line 132 "itertoolsmodule.c"
        var $151=$grouper; //@line 133 "itertoolsmodule.c"
        var $152=$151; //@line 133 "itertoolsmodule.c"
        var $153=HEAP[$152]; //@line 133 "itertoolsmodule.c"
        var $154=($153) - 1; //@line 133 "itertoolsmodule.c"
        var $155=$grouper; //@line 133 "itertoolsmodule.c"
        var $156=$155; //@line 133 "itertoolsmodule.c"
        HEAP[$156]=$154; //@line 133 "itertoolsmodule.c"
        var $157=$grouper; //@line 133 "itertoolsmodule.c"
        var $158=$157; //@line 133 "itertoolsmodule.c"
        var $159=HEAP[$158]; //@line 133 "itertoolsmodule.c"
        var $160=($159)==0; //@line 133 "itertoolsmodule.c"
        if ($160) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 133 "itertoolsmodule.c"
      case 26: // $bb26
        var $161=$grouper; //@line 133 "itertoolsmodule.c"
        var $162=$161+4; //@line 133 "itertoolsmodule.c"
        var $163=HEAP[$162]; //@line 133 "itertoolsmodule.c"
        var $164=$163+24; //@line 133 "itertoolsmodule.c"
        var $165=HEAP[$164]; //@line 133 "itertoolsmodule.c"
        var $166=$grouper; //@line 133 "itertoolsmodule.c"
        FUNCTION_TABLE[$165]($166); //@line 133 "itertoolsmodule.c"
        __label__ = 27; break; //@line 133 "itertoolsmodule.c"
      case 27: // $bb27
        var $167=$r; //@line 134 "itertoolsmodule.c"
        $0=$167; //@line 134 "itertoolsmodule.c"
        __label__ = 28; break; //@line 134 "itertoolsmodule.c"
      case 28: // $bb28
        var $168=$0; //@line 93 "itertoolsmodule.c"
        $retval=$168; //@line 93 "itertoolsmodule.c"
        var $retval29=$retval; //@line 93 "itertoolsmodule.c"
        ;
        return $retval29; //@line 93 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __grouper_create($parent, $tgtkey) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $parent_addr;
        var $tgtkey_addr;
        var $retval;
        var $0;
        var $igo;
        $parent_addr=$parent;
        $tgtkey_addr=$tgtkey;
        var $1=__PyObject_GC_New(__grouper_type); //@line 201 "itertoolsmodule.c"
        var $2=$1; //@line 201 "itertoolsmodule.c"
        $igo=$2; //@line 201 "itertoolsmodule.c"
        var $3=$igo; //@line 202 "itertoolsmodule.c"
        var $4=($3)==0; //@line 202 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 202 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 203 "itertoolsmodule.c"
        __label__ = 3; break; //@line 203 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$parent_addr; //@line 204 "itertoolsmodule.c"
        var $6=$5; //@line 204 "itertoolsmodule.c"
        var $7=$igo; //@line 204 "itertoolsmodule.c"
        var $8=$7+8; //@line 204 "itertoolsmodule.c"
        HEAP[$8]=$6; //@line 204 "itertoolsmodule.c"
        var $9=$parent_addr; //@line 205 "itertoolsmodule.c"
        var $10=$9; //@line 205 "itertoolsmodule.c"
        var $11=$10; //@line 205 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 205 "itertoolsmodule.c"
        var $13=($12) + 1; //@line 205 "itertoolsmodule.c"
        var $14=$10; //@line 205 "itertoolsmodule.c"
        HEAP[$14]=$13; //@line 205 "itertoolsmodule.c"
        var $15=$igo; //@line 206 "itertoolsmodule.c"
        var $16=$15+12; //@line 206 "itertoolsmodule.c"
        var $17=$tgtkey_addr; //@line 206 "itertoolsmodule.c"
        HEAP[$16]=$17; //@line 206 "itertoolsmodule.c"
        var $18=$tgtkey_addr; //@line 207 "itertoolsmodule.c"
        var $19=$18; //@line 207 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 207 "itertoolsmodule.c"
        var $21=($20) + 1; //@line 207 "itertoolsmodule.c"
        var $22=$tgtkey_addr; //@line 207 "itertoolsmodule.c"
        var $23=$22; //@line 207 "itertoolsmodule.c"
        HEAP[$23]=$21; //@line 207 "itertoolsmodule.c"
        var $24=$igo; //@line 209 "itertoolsmodule.c"
        var $25=$24; //@line 209 "itertoolsmodule.c"
        _PyObject_GC_Track($25); //@line 209 "itertoolsmodule.c"
        var $26=$igo; //@line 210 "itertoolsmodule.c"
        var $27=$26; //@line 210 "itertoolsmodule.c"
        $0=$27; //@line 210 "itertoolsmodule.c"
        __label__ = 3; break; //@line 210 "itertoolsmodule.c"
      case 3: // $bb2
        var $28=$0; //@line 203 "itertoolsmodule.c"
        $retval=$28; //@line 203 "itertoolsmodule.c"
        var $retval3=$retval; //@line 203 "itertoolsmodule.c"
        ;
        return $retval3; //@line 203 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __grouper_dealloc($igo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $igo_addr;
        $igo_addr=$igo;
        var $0=$igo_addr; //@line 216 "itertoolsmodule.c"
        var $1=$0; //@line 216 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 216 "itertoolsmodule.c"
        var $2=$igo_addr; //@line 217 "itertoolsmodule.c"
        var $3=$2+8; //@line 217 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 217 "itertoolsmodule.c"
        var $5=$4; //@line 217 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 217 "itertoolsmodule.c"
        var $7=($6) - 1; //@line 217 "itertoolsmodule.c"
        var $8=$4; //@line 217 "itertoolsmodule.c"
        HEAP[$8]=$7; //@line 217 "itertoolsmodule.c"
        var $9=$4; //@line 217 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 217 "itertoolsmodule.c"
        var $11=($10)==0; //@line 217 "itertoolsmodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 217 "itertoolsmodule.c"
      case 1: // $bb
        var $12=$igo_addr; //@line 217 "itertoolsmodule.c"
        var $13=$12+8; //@line 217 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 217 "itertoolsmodule.c"
        var $15=$14+4; //@line 217 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 217 "itertoolsmodule.c"
        var $17=$16+24; //@line 217 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 217 "itertoolsmodule.c"
        var $19=$igo_addr; //@line 217 "itertoolsmodule.c"
        var $20=$19+8; //@line 217 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 217 "itertoolsmodule.c"
        FUNCTION_TABLE[$18]($21); //@line 217 "itertoolsmodule.c"
        __label__ = 2; break; //@line 217 "itertoolsmodule.c"
      case 2: // $bb1
        var $22=$igo_addr; //@line 218 "itertoolsmodule.c"
        var $23=$22+12; //@line 218 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 218 "itertoolsmodule.c"
        var $25=$24; //@line 218 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 218 "itertoolsmodule.c"
        var $27=($26) - 1; //@line 218 "itertoolsmodule.c"
        var $28=$24; //@line 218 "itertoolsmodule.c"
        HEAP[$28]=$27; //@line 218 "itertoolsmodule.c"
        var $29=$24; //@line 218 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 218 "itertoolsmodule.c"
        var $31=($30)==0; //@line 218 "itertoolsmodule.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 218 "itertoolsmodule.c"
      case 3: // $bb2
        var $32=$igo_addr; //@line 218 "itertoolsmodule.c"
        var $33=$32+12; //@line 218 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 218 "itertoolsmodule.c"
        var $35=$34+4; //@line 218 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 218 "itertoolsmodule.c"
        var $37=$36+24; //@line 218 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 218 "itertoolsmodule.c"
        var $39=$igo_addr; //@line 218 "itertoolsmodule.c"
        var $40=$39+12; //@line 218 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 218 "itertoolsmodule.c"
        FUNCTION_TABLE[$38]($41); //@line 218 "itertoolsmodule.c"
        __label__ = 4; break; //@line 218 "itertoolsmodule.c"
      case 4: // $bb3
        var $42=$igo_addr; //@line 219 "itertoolsmodule.c"
        var $43=$42; //@line 219 "itertoolsmodule.c"
        _PyObject_GC_Del($43); //@line 219 "itertoolsmodule.c"
        ;
        return; //@line 220 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __grouper_traverse($igo, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $igo_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $igo_addr=$igo;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$igo_addr; //@line 225 "itertoolsmodule.c"
        var $2=$1+8; //@line 225 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 225 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 225 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 225 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$igo_addr; //@line 225 "itertoolsmodule.c"
        var $6=$5+8; //@line 225 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 225 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 225 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 225 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 225 "itertoolsmodule.c"
        $vret=$10; //@line 225 "itertoolsmodule.c"
        var $11=$vret; //@line 225 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 225 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 225 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 225 "itertoolsmodule.c"
        $0=$13; //@line 225 "itertoolsmodule.c"
        __label__ = 7; break; //@line 225 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$igo_addr; //@line 226 "itertoolsmodule.c"
        var $15=$14+12; //@line 226 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 226 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 226 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 226 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$igo_addr; //@line 226 "itertoolsmodule.c"
        var $19=$18+12; //@line 226 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 226 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 226 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 226 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 226 "itertoolsmodule.c"
        $vret4=$23; //@line 226 "itertoolsmodule.c"
        var $24=$vret4; //@line 226 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 226 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 226 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 226 "itertoolsmodule.c"
        $0=$26; //@line 226 "itertoolsmodule.c"
        __label__ = 7; break; //@line 226 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 227 "itertoolsmodule.c"
        __label__ = 7; break; //@line 227 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 225 "itertoolsmodule.c"
        $retval=$27; //@line 225 "itertoolsmodule.c"
        var $retval8=$retval; //@line 225 "itertoolsmodule.c"
        ;
        return $retval8; //@line 225 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __grouper_next($igo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $igo_addr;
        var $retval;
        var $0;
        var $gbo;
        var $newvalue;
        var $newkey;
        var $r;
        var $rcmp;
        var $_py_tmp;
        $igo_addr=$igo;
        var $1=$igo_addr; //@line 233 "itertoolsmodule.c"
        var $2=$1+8; //@line 233 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 233 "itertoolsmodule.c"
        var $4=$3; //@line 233 "itertoolsmodule.c"
        $gbo=$4; //@line 233 "itertoolsmodule.c"
        var $5=$gbo; //@line 237 "itertoolsmodule.c"
        var $6=$5+24; //@line 237 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 237 "itertoolsmodule.c"
        var $8=($7)==0; //@line 237 "itertoolsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 237 "itertoolsmodule.c"
      case 1: // $bb
        var $9=$gbo; //@line 238 "itertoolsmodule.c"
        var $10=$9+8; //@line 238 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 238 "itertoolsmodule.c"
        var $12=_PyIter_Next($11); //@line 238 "itertoolsmodule.c"
        $newvalue=$12; //@line 238 "itertoolsmodule.c"
        var $13=$newvalue; //@line 239 "itertoolsmodule.c"
        var $14=($13)==0; //@line 239 "itertoolsmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 239 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 240 "itertoolsmodule.c"
        __label__ = 20; break; //@line 240 "itertoolsmodule.c"
      case 3: // $bb2
        var $15=$gbo; //@line 242 "itertoolsmodule.c"
        var $16=$15+12; //@line 242 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 242 "itertoolsmodule.c"
        var $18=($17)==(__Py_NoneStruct); //@line 242 "itertoolsmodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 242 "itertoolsmodule.c"
      case 4: // $bb3
        var $19=$newvalue; //@line 243 "itertoolsmodule.c"
        $newkey=$19; //@line 243 "itertoolsmodule.c"
        var $20=$newvalue; //@line 244 "itertoolsmodule.c"
        var $21=$20; //@line 244 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 244 "itertoolsmodule.c"
        var $23=($22) + 1; //@line 244 "itertoolsmodule.c"
        var $24=$newvalue; //@line 244 "itertoolsmodule.c"
        var $25=$24; //@line 244 "itertoolsmodule.c"
        HEAP[$25]=$23; //@line 244 "itertoolsmodule.c"
        __label__ = 9; break; //@line 244 "itertoolsmodule.c"
      case 5: // $bb4
        var $26=$gbo; //@line 246 "itertoolsmodule.c"
        var $27=$26+12; //@line 246 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 246 "itertoolsmodule.c"
        var $29=$newvalue; //@line 246 "itertoolsmodule.c"
        var $30=_PyObject_CallFunctionObjArgs($28, allocate([$29,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 246 "itertoolsmodule.c"
        $newkey=$30; //@line 246 "itertoolsmodule.c"
        var $31=$newkey; //@line 248 "itertoolsmodule.c"
        var $32=($31)==0; //@line 248 "itertoolsmodule.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 248 "itertoolsmodule.c"
      case 6: // $bb5
        var $33=$newvalue; //@line 249 "itertoolsmodule.c"
        var $34=$33; //@line 249 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 249 "itertoolsmodule.c"
        var $36=($35) - 1; //@line 249 "itertoolsmodule.c"
        var $37=$newvalue; //@line 249 "itertoolsmodule.c"
        var $38=$37; //@line 249 "itertoolsmodule.c"
        HEAP[$38]=$36; //@line 249 "itertoolsmodule.c"
        var $39=$newvalue; //@line 249 "itertoolsmodule.c"
        var $40=$39; //@line 249 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 249 "itertoolsmodule.c"
        var $42=($41)==0; //@line 249 "itertoolsmodule.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 249 "itertoolsmodule.c"
      case 7: // $bb6
        var $43=$newvalue; //@line 249 "itertoolsmodule.c"
        var $44=$43+4; //@line 249 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 249 "itertoolsmodule.c"
        var $46=$45+24; //@line 249 "itertoolsmodule.c"
        var $47=HEAP[$46]; //@line 249 "itertoolsmodule.c"
        var $48=$newvalue; //@line 249 "itertoolsmodule.c"
        FUNCTION_TABLE[$47]($48); //@line 249 "itertoolsmodule.c"
        __label__ = 8; break; //@line 249 "itertoolsmodule.c"
      case 8: // $bb7
        $0=0; //@line 250 "itertoolsmodule.c"
        __label__ = 20; break; //@line 250 "itertoolsmodule.c"
      case 9: // $bb8
        var $49=$gbo; //@line 254 "itertoolsmodule.c"
        var $50=$49+20; //@line 254 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 254 "itertoolsmodule.c"
        var $52=($51)!=0; //@line 254 "itertoolsmodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 254 "itertoolsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str4, __str5, 254, ___PRETTY_FUNCTION___8669); //@line 254 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 254 "itertoolsmodule.c"
      case 11: // $bb10
        var $53=$gbo; //@line 255 "itertoolsmodule.c"
        var $54=$53+20; //@line 255 "itertoolsmodule.c"
        var $55=$newkey; //@line 255 "itertoolsmodule.c"
        HEAP[$54]=$55; //@line 255 "itertoolsmodule.c"
        var $56=$gbo; //@line 256 "itertoolsmodule.c"
        var $57=$56+24; //@line 256 "itertoolsmodule.c"
        var $58=$newvalue; //@line 256 "itertoolsmodule.c"
        HEAP[$57]=$58; //@line 256 "itertoolsmodule.c"
        __label__ = 12; break; //@line 256 "itertoolsmodule.c"
      case 12: // $bb11
        var $59=$gbo; //@line 259 "itertoolsmodule.c"
        var $60=$59+20; //@line 259 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 259 "itertoolsmodule.c"
        var $62=($61)==0; //@line 259 "itertoolsmodule.c"
        if ($62) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 259 "itertoolsmodule.c"
      case 13: // $bb12
        ___assert_fail(__str6, __str5, 259, ___PRETTY_FUNCTION___8669); //@line 259 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 259 "itertoolsmodule.c"
      case 14: // $bb13
        var $63=$gbo; //@line 260 "itertoolsmodule.c"
        var $64=$63+20; //@line 260 "itertoolsmodule.c"
        var $65=HEAP[$64]; //@line 260 "itertoolsmodule.c"
        var $66=$igo_addr; //@line 260 "itertoolsmodule.c"
        var $67=$66+12; //@line 260 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 260 "itertoolsmodule.c"
        var $69=_PyObject_RichCompareBool($68, $65, 2); //@line 260 "itertoolsmodule.c"
        $rcmp=$69; //@line 260 "itertoolsmodule.c"
        var $70=$rcmp; //@line 261 "itertoolsmodule.c"
        var $71=($70) <= 0; //@line 261 "itertoolsmodule.c"
        if ($71) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 261 "itertoolsmodule.c"
      case 15: // $bb14
        $0=0; //@line 263 "itertoolsmodule.c"
        __label__ = 20; break; //@line 263 "itertoolsmodule.c"
      case 16: // $bb15
        var $72=$gbo; //@line 265 "itertoolsmodule.c"
        var $73=$72+24; //@line 265 "itertoolsmodule.c"
        var $74=HEAP[$73]; //@line 265 "itertoolsmodule.c"
        $r=$74; //@line 265 "itertoolsmodule.c"
        var $75=$gbo; //@line 266 "itertoolsmodule.c"
        var $76=$75+24; //@line 266 "itertoolsmodule.c"
        HEAP[$76]=0; //@line 266 "itertoolsmodule.c"
        var $77=$gbo; //@line 267 "itertoolsmodule.c"
        var $78=$77+20; //@line 267 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 267 "itertoolsmodule.c"
        var $80=($79)!=0; //@line 267 "itertoolsmodule.c"
        if ($80) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 267 "itertoolsmodule.c"
      case 17: // $bb16
        var $81=$gbo; //@line 267 "itertoolsmodule.c"
        var $82=$81+20; //@line 267 "itertoolsmodule.c"
        var $83=HEAP[$82]; //@line 267 "itertoolsmodule.c"
        $_py_tmp=$83; //@line 267 "itertoolsmodule.c"
        var $84=$gbo; //@line 267 "itertoolsmodule.c"
        var $85=$84+20; //@line 267 "itertoolsmodule.c"
        HEAP[$85]=0; //@line 267 "itertoolsmodule.c"
        var $86=$_py_tmp; //@line 267 "itertoolsmodule.c"
        var $87=$86; //@line 267 "itertoolsmodule.c"
        var $88=HEAP[$87]; //@line 267 "itertoolsmodule.c"
        var $89=($88) - 1; //@line 267 "itertoolsmodule.c"
        var $90=$_py_tmp; //@line 267 "itertoolsmodule.c"
        var $91=$90; //@line 267 "itertoolsmodule.c"
        HEAP[$91]=$89; //@line 267 "itertoolsmodule.c"
        var $92=$_py_tmp; //@line 267 "itertoolsmodule.c"
        var $93=$92; //@line 267 "itertoolsmodule.c"
        var $94=HEAP[$93]; //@line 267 "itertoolsmodule.c"
        var $95=($94)==0; //@line 267 "itertoolsmodule.c"
        if ($95) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 267 "itertoolsmodule.c"
      case 18: // $bb17
        var $96=$_py_tmp; //@line 267 "itertoolsmodule.c"
        var $97=$96+4; //@line 267 "itertoolsmodule.c"
        var $98=HEAP[$97]; //@line 267 "itertoolsmodule.c"
        var $99=$98+24; //@line 267 "itertoolsmodule.c"
        var $100=HEAP[$99]; //@line 267 "itertoolsmodule.c"
        var $101=$_py_tmp; //@line 267 "itertoolsmodule.c"
        FUNCTION_TABLE[$100]($101); //@line 267 "itertoolsmodule.c"
        __label__ = 19; break; //@line 267 "itertoolsmodule.c"
      case 19: // $bb18
        var $102=$r; //@line 269 "itertoolsmodule.c"
        $0=$102; //@line 269 "itertoolsmodule.c"
        __label__ = 20; break; //@line 269 "itertoolsmodule.c"
      case 20: // $bb19
        var $103=$0; //@line 240 "itertoolsmodule.c"
        $retval=$103; //@line 240 "itertoolsmodule.c"
        var $retval20=$retval; //@line 240 "itertoolsmodule.c"
        ;
        return $retval20; //@line 240 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_new($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $retval;
        var $0;
        var $tdo;
        $it_addr=$it;
        var $1=__PyObject_GC_New(_teedataobject_type); //@line 351 "itertoolsmodule.c"
        var $2=$1; //@line 351 "itertoolsmodule.c"
        $tdo=$2; //@line 351 "itertoolsmodule.c"
        var $3=$tdo; //@line 352 "itertoolsmodule.c"
        var $4=($3)==0; //@line 352 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 352 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 353 "itertoolsmodule.c"
        __label__ = 3; break; //@line 353 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$tdo; //@line 355 "itertoolsmodule.c"
        var $6=$5+12; //@line 355 "itertoolsmodule.c"
        HEAP[$6]=0; //@line 355 "itertoolsmodule.c"
        var $7=$tdo; //@line 356 "itertoolsmodule.c"
        var $8=$7+16; //@line 356 "itertoolsmodule.c"
        HEAP[$8]=0; //@line 356 "itertoolsmodule.c"
        var $9=$it_addr; //@line 357 "itertoolsmodule.c"
        var $10=$9; //@line 357 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 357 "itertoolsmodule.c"
        var $12=($11) + 1; //@line 357 "itertoolsmodule.c"
        var $13=$it_addr; //@line 357 "itertoolsmodule.c"
        var $14=$13; //@line 357 "itertoolsmodule.c"
        HEAP[$14]=$12; //@line 357 "itertoolsmodule.c"
        var $15=$tdo; //@line 358 "itertoolsmodule.c"
        var $16=$15+8; //@line 358 "itertoolsmodule.c"
        var $17=$it_addr; //@line 358 "itertoolsmodule.c"
        HEAP[$16]=$17; //@line 358 "itertoolsmodule.c"
        var $18=$tdo; //@line 359 "itertoolsmodule.c"
        var $19=$18; //@line 359 "itertoolsmodule.c"
        _PyObject_GC_Track($19); //@line 359 "itertoolsmodule.c"
        var $20=$tdo; //@line 360 "itertoolsmodule.c"
        var $21=$20; //@line 360 "itertoolsmodule.c"
        $0=$21; //@line 360 "itertoolsmodule.c"
        __label__ = 3; break; //@line 360 "itertoolsmodule.c"
      case 3: // $bb2
        var $22=$0; //@line 353 "itertoolsmodule.c"
        $retval=$22; //@line 353 "itertoolsmodule.c"
        var $retval3=$retval; //@line 353 "itertoolsmodule.c"
        ;
        return $retval3; //@line 353 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_jumplink($tdo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tdo_addr;
        var $retval;
        var $0;
        $tdo_addr=$tdo;
        var $1=$tdo_addr; //@line 366 "itertoolsmodule.c"
        var $2=$1+16; //@line 366 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 366 "itertoolsmodule.c"
        var $4=($3)==0; //@line 366 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 366 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$tdo_addr; //@line 367 "itertoolsmodule.c"
        var $6=$5+8; //@line 367 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 367 "itertoolsmodule.c"
        var $8=_teedataobject_new($7); //@line 367 "itertoolsmodule.c"
        var $9=$tdo_addr; //@line 367 "itertoolsmodule.c"
        var $10=$9+16; //@line 367 "itertoolsmodule.c"
        HEAP[$10]=$8; //@line 367 "itertoolsmodule.c"
        __label__ = 2; break; //@line 367 "itertoolsmodule.c"
      case 2: // $bb1
        var $11=$tdo_addr; //@line 368 "itertoolsmodule.c"
        var $12=$11+16; //@line 368 "itertoolsmodule.c"
        var $13=HEAP[$12]; //@line 368 "itertoolsmodule.c"
        var $14=($13)!=0; //@line 368 "itertoolsmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 368 "itertoolsmodule.c"
      case 3: // $bb2
        var $15=$tdo_addr; //@line 368 "itertoolsmodule.c"
        var $16=$15+16; //@line 368 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 368 "itertoolsmodule.c"
        var $18=$17; //@line 368 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 368 "itertoolsmodule.c"
        var $20=($19) + 1; //@line 368 "itertoolsmodule.c"
        var $21=$17; //@line 368 "itertoolsmodule.c"
        HEAP[$21]=$20; //@line 368 "itertoolsmodule.c"
        __label__ = 4; break; //@line 368 "itertoolsmodule.c"
      case 4: // $bb3
        var $22=$tdo_addr; //@line 369 "itertoolsmodule.c"
        var $23=$22+16; //@line 369 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 369 "itertoolsmodule.c"
        $0=$24; //@line 369 "itertoolsmodule.c"
        var $25=$0; //@line 369 "itertoolsmodule.c"
        $retval=$25; //@line 369 "itertoolsmodule.c"
        var $retval4=$retval; //@line 369 "itertoolsmodule.c"
        ;
        return $retval4; //@line 369 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_getitem($tdo, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tdo_addr;
        var $i_addr;
        var $retval;
        var $0;
        var $value;
        $tdo_addr=$tdo;
        $i_addr=$i;
        var $1=$i_addr; //@line 377 "itertoolsmodule.c"
        var $2=($1) > 56; //@line 377 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 377 "itertoolsmodule.c"
      case 1: // $bb
        ___assert_fail(__str8, __str5, 377, ___PRETTY_FUNCTION___8768); //@line 377 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 377 "itertoolsmodule.c"
      case 2: // $bb1
        var $3=$tdo_addr; //@line 378 "itertoolsmodule.c"
        var $4=$3+12; //@line 378 "itertoolsmodule.c"
        var $5=HEAP[$4]; //@line 378 "itertoolsmodule.c"
        var $6=$i_addr; //@line 378 "itertoolsmodule.c"
        var $7=($5) > ($6); //@line 378 "itertoolsmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 378 "itertoolsmodule.c"
      case 3: // $bb2
        var $8=$i_addr; //@line 379 "itertoolsmodule.c"
        var $9=$tdo_addr; //@line 379 "itertoolsmodule.c"
        var $10=$9+20; //@line 379 "itertoolsmodule.c"
        var $11=$10+$8*4; //@line 379 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 379 "itertoolsmodule.c"
        $value=$12; //@line 379 "itertoolsmodule.c"
        __label__ = 9; break; //@line 379 "itertoolsmodule.c"
      case 4: // $bb3
        var $13=$tdo_addr; //@line 382 "itertoolsmodule.c"
        var $14=$13+12; //@line 382 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 382 "itertoolsmodule.c"
        var $16=$i_addr; //@line 382 "itertoolsmodule.c"
        var $17=($15)!=($16); //@line 382 "itertoolsmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 382 "itertoolsmodule.c"
      case 5: // $bb4
        ___assert_fail(__str9, __str5, 382, ___PRETTY_FUNCTION___8768); //@line 382 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 382 "itertoolsmodule.c"
      case 6: // $bb5
        var $18=$tdo_addr; //@line 383 "itertoolsmodule.c"
        var $19=$18+8; //@line 383 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 383 "itertoolsmodule.c"
        var $21=_PyIter_Next($20); //@line 383 "itertoolsmodule.c"
        $value=$21; //@line 383 "itertoolsmodule.c"
        var $22=$value; //@line 384 "itertoolsmodule.c"
        var $23=($22)==0; //@line 384 "itertoolsmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 384 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 385 "itertoolsmodule.c"
        __label__ = 10; break; //@line 385 "itertoolsmodule.c"
      case 8: // $bb7
        var $24=$tdo_addr; //@line 386 "itertoolsmodule.c"
        var $25=$24+12; //@line 386 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 386 "itertoolsmodule.c"
        var $27=($26) + 1; //@line 386 "itertoolsmodule.c"
        var $28=$tdo_addr; //@line 386 "itertoolsmodule.c"
        var $29=$28+12; //@line 386 "itertoolsmodule.c"
        HEAP[$29]=$27; //@line 386 "itertoolsmodule.c"
        var $30=$i_addr; //@line 387 "itertoolsmodule.c"
        var $31=$tdo_addr; //@line 387 "itertoolsmodule.c"
        var $32=$31+20; //@line 387 "itertoolsmodule.c"
        var $33=$32+$30*4; //@line 387 "itertoolsmodule.c"
        var $34=$value; //@line 387 "itertoolsmodule.c"
        HEAP[$33]=$34; //@line 387 "itertoolsmodule.c"
        __label__ = 9; break; //@line 387 "itertoolsmodule.c"
      case 9: // $bb8
        var $35=$value; //@line 389 "itertoolsmodule.c"
        var $36=$35; //@line 389 "itertoolsmodule.c"
        var $37=HEAP[$36]; //@line 389 "itertoolsmodule.c"
        var $38=($37) + 1; //@line 389 "itertoolsmodule.c"
        var $39=$value; //@line 389 "itertoolsmodule.c"
        var $40=$39; //@line 389 "itertoolsmodule.c"
        HEAP[$40]=$38; //@line 389 "itertoolsmodule.c"
        var $41=$value; //@line 390 "itertoolsmodule.c"
        $0=$41; //@line 390 "itertoolsmodule.c"
        __label__ = 10; break; //@line 390 "itertoolsmodule.c"
      case 10: // $bb9
        var $42=$0; //@line 385 "itertoolsmodule.c"
        $retval=$42; //@line 385 "itertoolsmodule.c"
        var $retval10=$retval; //@line 385 "itertoolsmodule.c"
        ;
        return $retval10; //@line 385 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_traverse($tdo, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tdo_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $i;
        var $vret;
        var $vret5;
        var $vret11;
        $tdo_addr=$tdo;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$tdo_addr; //@line 397 "itertoolsmodule.c"
        var $2=$1+8; //@line 397 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 397 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 397 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 397 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$tdo_addr; //@line 397 "itertoolsmodule.c"
        var $6=$5+8; //@line 397 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 397 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 397 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 397 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 397 "itertoolsmodule.c"
        $vret=$10; //@line 397 "itertoolsmodule.c"
        var $11=$vret; //@line 397 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 397 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 397 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 397 "itertoolsmodule.c"
        $0=$13; //@line 397 "itertoolsmodule.c"
        __label__ = 13; break; //@line 397 "itertoolsmodule.c"
      case 3: // $bb2
        $i=0; //@line 398 "itertoolsmodule.c"
        __label__ = 8; break; //@line 398 "itertoolsmodule.c"
      case 4: // $bb3
        var $14=$i; //@line 399 "itertoolsmodule.c"
        var $15=$tdo_addr; //@line 399 "itertoolsmodule.c"
        var $16=$15+20; //@line 399 "itertoolsmodule.c"
        var $17=$16+$14*4; //@line 399 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 399 "itertoolsmodule.c"
        var $19=($18)!=0; //@line 399 "itertoolsmodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 399 "itertoolsmodule.c"
      case 5: // $bb4
        var $20=$i; //@line 399 "itertoolsmodule.c"
        var $21=$tdo_addr; //@line 399 "itertoolsmodule.c"
        var $22=$21+20; //@line 399 "itertoolsmodule.c"
        var $23=$22+$20*4; //@line 399 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 399 "itertoolsmodule.c"
        var $25=$visit_addr; //@line 399 "itertoolsmodule.c"
        var $26=$arg_addr; //@line 399 "itertoolsmodule.c"
        var $27=FUNCTION_TABLE[$25]($24, $26); //@line 399 "itertoolsmodule.c"
        $vret5=$27; //@line 399 "itertoolsmodule.c"
        var $28=$vret5; //@line 399 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 399 "itertoolsmodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 399 "itertoolsmodule.c"
      case 6: // $bb6
        var $30=$vret5; //@line 399 "itertoolsmodule.c"
        $0=$30; //@line 399 "itertoolsmodule.c"
        __label__ = 13; break; //@line 399 "itertoolsmodule.c"
      case 7: // $bb7
        var $31=$i; //@line 398 "itertoolsmodule.c"
        var $32=($31) + 1; //@line 398 "itertoolsmodule.c"
        $i=$32; //@line 398 "itertoolsmodule.c"
        __label__ = 8; break; //@line 398 "itertoolsmodule.c"
      case 8: // $bb8
        var $33=$tdo_addr; //@line 398 "itertoolsmodule.c"
        var $34=$33+12; //@line 398 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 398 "itertoolsmodule.c"
        var $36=$i; //@line 398 "itertoolsmodule.c"
        var $37=($35) > ($36); //@line 398 "itertoolsmodule.c"
        if ($37) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 398 "itertoolsmodule.c"
      case 9: // $bb9
        var $38=$tdo_addr; //@line 400 "itertoolsmodule.c"
        var $39=$38+16; //@line 400 "itertoolsmodule.c"
        var $40=HEAP[$39]; //@line 400 "itertoolsmodule.c"
        var $41=($40)!=0; //@line 400 "itertoolsmodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 400 "itertoolsmodule.c"
      case 10: // $bb10
        var $42=$tdo_addr; //@line 400 "itertoolsmodule.c"
        var $43=$42+16; //@line 400 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 400 "itertoolsmodule.c"
        var $45=$visit_addr; //@line 400 "itertoolsmodule.c"
        var $46=$arg_addr; //@line 400 "itertoolsmodule.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 400 "itertoolsmodule.c"
        $vret11=$47; //@line 400 "itertoolsmodule.c"
        var $48=$vret11; //@line 400 "itertoolsmodule.c"
        var $49=($48)!=0; //@line 400 "itertoolsmodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 400 "itertoolsmodule.c"
      case 11: // $bb12
        var $50=$vret11; //@line 400 "itertoolsmodule.c"
        $0=$50; //@line 400 "itertoolsmodule.c"
        __label__ = 13; break; //@line 400 "itertoolsmodule.c"
      case 12: // $bb13
        $0=0; //@line 401 "itertoolsmodule.c"
        __label__ = 13; break; //@line 401 "itertoolsmodule.c"
      case 13: // $bb14
        var $51=$0; //@line 397 "itertoolsmodule.c"
        $retval=$51; //@line 397 "itertoolsmodule.c"
        var $retval15=$retval; //@line 397 "itertoolsmodule.c"
        ;
        return $retval15; //@line 397 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_clear($tdo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tdo_addr;
        var $retval;
        var $0;
        var $i;
        var $_py_tmp;
        var $_py_tmp5;
        var $_py_tmp11;
        $tdo_addr=$tdo;
        var $1=$tdo_addr; //@line 408 "itertoolsmodule.c"
        var $2=$1+8; //@line 408 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 408 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 408 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 408 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$tdo_addr; //@line 408 "itertoolsmodule.c"
        var $6=$5+8; //@line 408 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 408 "itertoolsmodule.c"
        $_py_tmp=$7; //@line 408 "itertoolsmodule.c"
        var $8=$tdo_addr; //@line 408 "itertoolsmodule.c"
        var $9=$8+8; //@line 408 "itertoolsmodule.c"
        HEAP[$9]=0; //@line 408 "itertoolsmodule.c"
        var $10=$_py_tmp; //@line 408 "itertoolsmodule.c"
        var $11=$10; //@line 408 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 408 "itertoolsmodule.c"
        var $13=($12) - 1; //@line 408 "itertoolsmodule.c"
        var $14=$_py_tmp; //@line 408 "itertoolsmodule.c"
        var $15=$14; //@line 408 "itertoolsmodule.c"
        HEAP[$15]=$13; //@line 408 "itertoolsmodule.c"
        var $16=$_py_tmp; //@line 408 "itertoolsmodule.c"
        var $17=$16; //@line 408 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 408 "itertoolsmodule.c"
        var $19=($18)==0; //@line 408 "itertoolsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 408 "itertoolsmodule.c"
      case 2: // $bb1
        var $20=$_py_tmp; //@line 408 "itertoolsmodule.c"
        var $21=$20+4; //@line 408 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 408 "itertoolsmodule.c"
        var $23=$22+24; //@line 408 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 408 "itertoolsmodule.c"
        var $25=$_py_tmp; //@line 408 "itertoolsmodule.c"
        FUNCTION_TABLE[$24]($25); //@line 408 "itertoolsmodule.c"
        __label__ = 3; break; //@line 408 "itertoolsmodule.c"
      case 3: // $bb2
        $i=0; //@line 409 "itertoolsmodule.c"
        var $26=$tdo_addr; //@line 409 "itertoolsmodule.c"
        var $27=$26+12; //@line 409 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 409 "itertoolsmodule.c"
        var $29=$i; //@line 409 "itertoolsmodule.c"
        var $30=($28) > ($29); //@line 409 "itertoolsmodule.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 409 "itertoolsmodule.c"
      case 4: // $bb3
        var $31=$i; //@line 410 "itertoolsmodule.c"
        var $32=$tdo_addr; //@line 410 "itertoolsmodule.c"
        var $33=$32+20; //@line 410 "itertoolsmodule.c"
        var $34=$33+$31*4; //@line 410 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 410 "itertoolsmodule.c"
        var $36=($35)!=0; //@line 410 "itertoolsmodule.c"
        if ($36) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 410 "itertoolsmodule.c"
      case 5: // $bb4
        var $37=$i; //@line 410 "itertoolsmodule.c"
        var $38=$tdo_addr; //@line 410 "itertoolsmodule.c"
        var $39=$38+20; //@line 410 "itertoolsmodule.c"
        var $40=$39+$37*4; //@line 410 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 410 "itertoolsmodule.c"
        $_py_tmp5=$41; //@line 410 "itertoolsmodule.c"
        var $42=$i; //@line 410 "itertoolsmodule.c"
        var $43=$tdo_addr; //@line 410 "itertoolsmodule.c"
        var $44=$43+20; //@line 410 "itertoolsmodule.c"
        var $45=$44+$42*4; //@line 410 "itertoolsmodule.c"
        HEAP[$45]=0; //@line 410 "itertoolsmodule.c"
        var $46=$_py_tmp5; //@line 410 "itertoolsmodule.c"
        var $47=$46; //@line 410 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 410 "itertoolsmodule.c"
        var $49=($48) - 1; //@line 410 "itertoolsmodule.c"
        var $50=$_py_tmp5; //@line 410 "itertoolsmodule.c"
        var $51=$50; //@line 410 "itertoolsmodule.c"
        HEAP[$51]=$49; //@line 410 "itertoolsmodule.c"
        var $52=$_py_tmp5; //@line 410 "itertoolsmodule.c"
        var $53=$52; //@line 410 "itertoolsmodule.c"
        var $54=HEAP[$53]; //@line 410 "itertoolsmodule.c"
        var $55=($54)==0; //@line 410 "itertoolsmodule.c"
        if ($55) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 410 "itertoolsmodule.c"
      case 6: // $bb6
        var $56=$_py_tmp5; //@line 410 "itertoolsmodule.c"
        var $57=$56+4; //@line 410 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 410 "itertoolsmodule.c"
        var $59=$58+24; //@line 410 "itertoolsmodule.c"
        var $60=HEAP[$59]; //@line 410 "itertoolsmodule.c"
        var $61=$_py_tmp5; //@line 410 "itertoolsmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 410 "itertoolsmodule.c"
        __label__ = 7; break; //@line 410 "itertoolsmodule.c"
      case 7: // $bb7
        var $62=$i; //@line 409 "itertoolsmodule.c"
        var $63=($62) + 1; //@line 409 "itertoolsmodule.c"
        $i=$63; //@line 409 "itertoolsmodule.c"
        var $64=$tdo_addr; //@line 409 "itertoolsmodule.c"
        var $65=$64+12; //@line 409 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 409 "itertoolsmodule.c"
        var $67=$i; //@line 409 "itertoolsmodule.c"
        var $68=($66) > ($67); //@line 409 "itertoolsmodule.c"
        if ($68) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 409 "itertoolsmodule.c"
      case 8: // $bb9
        var $69=$tdo_addr; //@line 411 "itertoolsmodule.c"
        var $70=$69+16; //@line 411 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 411 "itertoolsmodule.c"
        var $72=($71)!=0; //@line 411 "itertoolsmodule.c"
        if ($72) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 411 "itertoolsmodule.c"
      case 9: // $bb10
        var $73=$tdo_addr; //@line 411 "itertoolsmodule.c"
        var $74=$73+16; //@line 411 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 411 "itertoolsmodule.c"
        $_py_tmp11=$75; //@line 411 "itertoolsmodule.c"
        var $76=$tdo_addr; //@line 411 "itertoolsmodule.c"
        var $77=$76+16; //@line 411 "itertoolsmodule.c"
        HEAP[$77]=0; //@line 411 "itertoolsmodule.c"
        var $78=$_py_tmp11; //@line 411 "itertoolsmodule.c"
        var $79=$78; //@line 411 "itertoolsmodule.c"
        var $80=HEAP[$79]; //@line 411 "itertoolsmodule.c"
        var $81=($80) - 1; //@line 411 "itertoolsmodule.c"
        var $82=$_py_tmp11; //@line 411 "itertoolsmodule.c"
        var $83=$82; //@line 411 "itertoolsmodule.c"
        HEAP[$83]=$81; //@line 411 "itertoolsmodule.c"
        var $84=$_py_tmp11; //@line 411 "itertoolsmodule.c"
        var $85=$84; //@line 411 "itertoolsmodule.c"
        var $86=HEAP[$85]; //@line 411 "itertoolsmodule.c"
        var $87=($86)==0; //@line 411 "itertoolsmodule.c"
        if ($87) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 411 "itertoolsmodule.c"
      case 10: // $bb12
        var $88=$_py_tmp11; //@line 411 "itertoolsmodule.c"
        var $89=$88+4; //@line 411 "itertoolsmodule.c"
        var $90=HEAP[$89]; //@line 411 "itertoolsmodule.c"
        var $91=$90+24; //@line 411 "itertoolsmodule.c"
        var $92=HEAP[$91]; //@line 411 "itertoolsmodule.c"
        var $93=$_py_tmp11; //@line 411 "itertoolsmodule.c"
        FUNCTION_TABLE[$92]($93); //@line 411 "itertoolsmodule.c"
        __label__ = 11; break; //@line 411 "itertoolsmodule.c"
      case 11: // $bb13
        $0=0; //@line 412 "itertoolsmodule.c"
        var $94=$0; //@line 412 "itertoolsmodule.c"
        $retval=$94; //@line 412 "itertoolsmodule.c"
        var $retval14=$retval; //@line 412 "itertoolsmodule.c"
        ;
        return $retval14; //@line 412 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _teedataobject_dealloc($tdo) {
    ;
    var __label__;
  
    var $tdo_addr;
    $tdo_addr=$tdo;
    var $0=$tdo_addr; //@line 418 "itertoolsmodule.c"
    var $1=$0; //@line 418 "itertoolsmodule.c"
    _PyObject_GC_UnTrack($1); //@line 418 "itertoolsmodule.c"
    var $2=$tdo_addr; //@line 419 "itertoolsmodule.c"
    var $3=_teedataobject_clear($2); //@line 419 "itertoolsmodule.c"
    var $4=$tdo_addr; //@line 420 "itertoolsmodule.c"
    var $5=$4; //@line 420 "itertoolsmodule.c"
    _PyObject_GC_Del($5); //@line 420 "itertoolsmodule.c"
    ;
    return; //@line 421 "itertoolsmodule.c"
  }
  

  function _tee_next($to) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $to_addr;
        var $retval;
        var $0;
        var $value;
        var $link;
        $to_addr=$to;
        var $1=$to_addr; //@line 476 "itertoolsmodule.c"
        var $2=$1+12; //@line 476 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 476 "itertoolsmodule.c"
        var $4=($3) > 56; //@line 476 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 476 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$to_addr; //@line 477 "itertoolsmodule.c"
        var $6=$5+8; //@line 477 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 477 "itertoolsmodule.c"
        var $8=_teedataobject_jumplink($7); //@line 477 "itertoolsmodule.c"
        $link=$8; //@line 477 "itertoolsmodule.c"
        var $9=$to_addr; //@line 478 "itertoolsmodule.c"
        var $10=$9+8; //@line 478 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 478 "itertoolsmodule.c"
        var $12=$11; //@line 478 "itertoolsmodule.c"
        var $13=$12; //@line 478 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 478 "itertoolsmodule.c"
        var $15=($14) - 1; //@line 478 "itertoolsmodule.c"
        var $16=$12; //@line 478 "itertoolsmodule.c"
        HEAP[$16]=$15; //@line 478 "itertoolsmodule.c"
        var $17=$12; //@line 478 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 478 "itertoolsmodule.c"
        var $19=($18)==0; //@line 478 "itertoolsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 478 "itertoolsmodule.c"
      case 2: // $bb1
        var $20=$to_addr; //@line 478 "itertoolsmodule.c"
        var $21=$20+8; //@line 478 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 478 "itertoolsmodule.c"
        var $23=$22; //@line 478 "itertoolsmodule.c"
        var $24=$23+4; //@line 478 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 478 "itertoolsmodule.c"
        var $26=$25+24; //@line 478 "itertoolsmodule.c"
        var $27=HEAP[$26]; //@line 478 "itertoolsmodule.c"
        var $28=$to_addr; //@line 478 "itertoolsmodule.c"
        var $29=$28+8; //@line 478 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 478 "itertoolsmodule.c"
        var $31=$30; //@line 478 "itertoolsmodule.c"
        FUNCTION_TABLE[$27]($31); //@line 478 "itertoolsmodule.c"
        __label__ = 3; break; //@line 478 "itertoolsmodule.c"
      case 3: // $bb2
        var $32=$link; //@line 479 "itertoolsmodule.c"
        var $33=$32; //@line 479 "itertoolsmodule.c"
        var $34=$to_addr; //@line 479 "itertoolsmodule.c"
        var $35=$34+8; //@line 479 "itertoolsmodule.c"
        HEAP[$35]=$33; //@line 479 "itertoolsmodule.c"
        var $36=$to_addr; //@line 480 "itertoolsmodule.c"
        var $37=$36+12; //@line 480 "itertoolsmodule.c"
        HEAP[$37]=0; //@line 480 "itertoolsmodule.c"
        __label__ = 4; break; //@line 480 "itertoolsmodule.c"
      case 4: // $bb3
        var $38=$to_addr; //@line 482 "itertoolsmodule.c"
        var $39=$38+12; //@line 482 "itertoolsmodule.c"
        var $40=HEAP[$39]; //@line 482 "itertoolsmodule.c"
        var $41=$to_addr; //@line 482 "itertoolsmodule.c"
        var $42=$41+8; //@line 482 "itertoolsmodule.c"
        var $43=HEAP[$42]; //@line 482 "itertoolsmodule.c"
        var $44=_teedataobject_getitem($43, $40); //@line 482 "itertoolsmodule.c"
        $value=$44; //@line 482 "itertoolsmodule.c"
        var $45=($44)==0; //@line 483 "itertoolsmodule.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 483 "itertoolsmodule.c"
      case 5: // $bb4
        $0=0; //@line 484 "itertoolsmodule.c"
        __label__ = 7; break; //@line 484 "itertoolsmodule.c"
      case 6: // $bb5
        var $46=$to_addr; //@line 485 "itertoolsmodule.c"
        var $47=$46+12; //@line 485 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 485 "itertoolsmodule.c"
        var $49=($48) + 1; //@line 485 "itertoolsmodule.c"
        var $50=$to_addr; //@line 485 "itertoolsmodule.c"
        var $51=$50+12; //@line 485 "itertoolsmodule.c"
        HEAP[$51]=$49; //@line 485 "itertoolsmodule.c"
        var $52=$value; //@line 486 "itertoolsmodule.c"
        $0=$52; //@line 486 "itertoolsmodule.c"
        __label__ = 7; break; //@line 486 "itertoolsmodule.c"
      case 7: // $bb6
        var $53=$0; //@line 484 "itertoolsmodule.c"
        $retval=$53; //@line 484 "itertoolsmodule.c"
        var $retval7=$retval; //@line 484 "itertoolsmodule.c"
        ;
        return $retval7; //@line 484 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_traverse($to, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $to_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $to_addr=$to;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$to_addr; //@line 492 "itertoolsmodule.c"
        var $2=$1+8; //@line 492 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 492 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 492 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 492 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$to_addr; //@line 492 "itertoolsmodule.c"
        var $6=$5+8; //@line 492 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 492 "itertoolsmodule.c"
        var $8=$7; //@line 492 "itertoolsmodule.c"
        var $9=$visit_addr; //@line 492 "itertoolsmodule.c"
        var $10=$arg_addr; //@line 492 "itertoolsmodule.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 492 "itertoolsmodule.c"
        $vret=$11; //@line 492 "itertoolsmodule.c"
        var $12=$vret; //@line 492 "itertoolsmodule.c"
        var $13=($12)!=0; //@line 492 "itertoolsmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 492 "itertoolsmodule.c"
      case 2: // $bb1
        var $14=$vret; //@line 492 "itertoolsmodule.c"
        $0=$14; //@line 492 "itertoolsmodule.c"
        __label__ = 4; break; //@line 492 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 493 "itertoolsmodule.c"
        __label__ = 4; break; //@line 493 "itertoolsmodule.c"
      case 4: // $bb3
        var $15=$0; //@line 492 "itertoolsmodule.c"
        $retval=$15; //@line 492 "itertoolsmodule.c"
        var $retval4=$retval; //@line 492 "itertoolsmodule.c"
        ;
        return $retval4; //@line 492 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_copy($to) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $to_addr;
        var $retval;
        var $0;
        var $newto;
        $to_addr=$to;
        var $1=__PyObject_GC_New(_tee_type); //@line 501 "itertoolsmodule.c"
        var $2=$1; //@line 501 "itertoolsmodule.c"
        $newto=$2; //@line 501 "itertoolsmodule.c"
        var $3=$newto; //@line 502 "itertoolsmodule.c"
        var $4=($3)==0; //@line 502 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 502 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 503 "itertoolsmodule.c"
        __label__ = 3; break; //@line 503 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$to_addr; //@line 504 "itertoolsmodule.c"
        var $6=$5+8; //@line 504 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 504 "itertoolsmodule.c"
        var $8=$7; //@line 504 "itertoolsmodule.c"
        var $9=$8; //@line 504 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 504 "itertoolsmodule.c"
        var $11=($10) + 1; //@line 504 "itertoolsmodule.c"
        var $12=$8; //@line 504 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 504 "itertoolsmodule.c"
        var $13=$to_addr; //@line 505 "itertoolsmodule.c"
        var $14=$13+8; //@line 505 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 505 "itertoolsmodule.c"
        var $16=$newto; //@line 505 "itertoolsmodule.c"
        var $17=$16+8; //@line 505 "itertoolsmodule.c"
        HEAP[$17]=$15; //@line 505 "itertoolsmodule.c"
        var $18=$to_addr; //@line 506 "itertoolsmodule.c"
        var $19=$18+12; //@line 506 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 506 "itertoolsmodule.c"
        var $21=$newto; //@line 506 "itertoolsmodule.c"
        var $22=$21+12; //@line 506 "itertoolsmodule.c"
        HEAP[$22]=$20; //@line 506 "itertoolsmodule.c"
        var $23=$newto; //@line 507 "itertoolsmodule.c"
        var $24=$23+16; //@line 507 "itertoolsmodule.c"
        HEAP[$24]=0; //@line 507 "itertoolsmodule.c"
        var $25=$newto; //@line 508 "itertoolsmodule.c"
        var $26=$25; //@line 508 "itertoolsmodule.c"
        _PyObject_GC_Track($26); //@line 508 "itertoolsmodule.c"
        var $27=$newto; //@line 509 "itertoolsmodule.c"
        var $28=$27; //@line 509 "itertoolsmodule.c"
        $0=$28; //@line 509 "itertoolsmodule.c"
        __label__ = 3; break; //@line 509 "itertoolsmodule.c"
      case 3: // $bb2
        var $29=$0; //@line 503 "itertoolsmodule.c"
        $retval=$29; //@line 503 "itertoolsmodule.c"
        var $retval3=$retval; //@line 503 "itertoolsmodule.c"
        ;
        return $retval3; //@line 503 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_fromiterable($iterable) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $iterable_addr;
        var $retval;
        var $0;
        var $to;
        var $it;
        $iterable_addr=$iterable;
        $it=0; //@line 518 "itertoolsmodule.c"
        var $1=$iterable_addr; //@line 520 "itertoolsmodule.c"
        var $2=_PyObject_GetIter($1); //@line 520 "itertoolsmodule.c"
        $it=$2; //@line 520 "itertoolsmodule.c"
        var $3=$it; //@line 521 "itertoolsmodule.c"
        var $4=($3)==0; //@line 521 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 521 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 522 "itertoolsmodule.c"
        __label__ = 13; break; //@line 522 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$it; //@line 523 "itertoolsmodule.c"
        var $6=$5+4; //@line 523 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 523 "itertoolsmodule.c"
        var $8=($7)==(_tee_type); //@line 523 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 523 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$it; //@line 523 "itertoolsmodule.c"
        var $10=$9+4; //@line 523 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 523 "itertoolsmodule.c"
        var $12=_PyType_IsSubtype($11, _tee_type); //@line 523 "itertoolsmodule.c"
        var $13=($12)!=0; //@line 523 "itertoolsmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 523 "itertoolsmodule.c"
      case 4: // $bb3
        var $14=$it; //@line 524 "itertoolsmodule.c"
        var $15=$14; //@line 524 "itertoolsmodule.c"
        var $16=_tee_copy($15); //@line 524 "itertoolsmodule.c"
        var $17=$16; //@line 524 "itertoolsmodule.c"
        $to=$17; //@line 524 "itertoolsmodule.c"
        __label__ = 9; break; //@line 524 "itertoolsmodule.c"
      case 5: // $bb4
        var $18=__PyObject_GC_New(_tee_type); //@line 528 "itertoolsmodule.c"
        var $19=$18; //@line 528 "itertoolsmodule.c"
        $to=$19; //@line 528 "itertoolsmodule.c"
        var $20=$to; //@line 529 "itertoolsmodule.c"
        var $21=($20)==0; //@line 529 "itertoolsmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 529 "itertoolsmodule.c"
      case 6: // $bb5
        var $22=$it; //@line 531 "itertoolsmodule.c"
        var $23=_teedataobject_new($22); //@line 531 "itertoolsmodule.c"
        var $24=$23; //@line 531 "itertoolsmodule.c"
        var $25=$to; //@line 531 "itertoolsmodule.c"
        var $26=$25+8; //@line 531 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 531 "itertoolsmodule.c"
        var $27=$to; //@line 532 "itertoolsmodule.c"
        var $28=$27+8; //@line 532 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 532 "itertoolsmodule.c"
        var $30=($29)==0; //@line 532 "itertoolsmodule.c"
        var $31=$to; //@line 533 "itertoolsmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 532 "itertoolsmodule.c"
      case 7: // $bb6
        var $32=$31; //@line 533 "itertoolsmodule.c"
        _PyObject_GC_Del($32); //@line 533 "itertoolsmodule.c"
        $to=0; //@line 534 "itertoolsmodule.c"
        __label__ = 9; break; //@line 534 "itertoolsmodule.c"
      case 8: // $bb7
        var $33=$31+12; //@line 538 "itertoolsmodule.c"
        HEAP[$33]=0; //@line 538 "itertoolsmodule.c"
        var $34=$to; //@line 539 "itertoolsmodule.c"
        var $35=$34+16; //@line 539 "itertoolsmodule.c"
        HEAP[$35]=0; //@line 539 "itertoolsmodule.c"
        var $36=$to; //@line 540 "itertoolsmodule.c"
        var $37=$36; //@line 540 "itertoolsmodule.c"
        _PyObject_GC_Track($37); //@line 540 "itertoolsmodule.c"
        __label__ = 9; break; //@line 541 "itertoolsmodule.c"
      case 9: // $done
        var $38=$it; //@line 542 "itertoolsmodule.c"
        var $39=($38)!=0; //@line 542 "itertoolsmodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 542 "itertoolsmodule.c"
      case 10: // $bb8
        var $40=$it; //@line 542 "itertoolsmodule.c"
        var $41=$40; //@line 542 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 542 "itertoolsmodule.c"
        var $43=($42) - 1; //@line 542 "itertoolsmodule.c"
        var $44=$it; //@line 542 "itertoolsmodule.c"
        var $45=$44; //@line 542 "itertoolsmodule.c"
        HEAP[$45]=$43; //@line 542 "itertoolsmodule.c"
        var $46=$it; //@line 542 "itertoolsmodule.c"
        var $47=$46; //@line 542 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 542 "itertoolsmodule.c"
        var $49=($48)==0; //@line 542 "itertoolsmodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 542 "itertoolsmodule.c"
      case 11: // $bb9
        var $50=$it; //@line 542 "itertoolsmodule.c"
        var $51=$50+4; //@line 542 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 542 "itertoolsmodule.c"
        var $53=$52+24; //@line 542 "itertoolsmodule.c"
        var $54=HEAP[$53]; //@line 542 "itertoolsmodule.c"
        var $55=$it; //@line 542 "itertoolsmodule.c"
        FUNCTION_TABLE[$54]($55); //@line 542 "itertoolsmodule.c"
        __label__ = 12; break; //@line 542 "itertoolsmodule.c"
      case 12: // $bb10
        var $56=$to; //@line 543 "itertoolsmodule.c"
        var $57=$56; //@line 543 "itertoolsmodule.c"
        $0=$57; //@line 543 "itertoolsmodule.c"
        __label__ = 13; break; //@line 543 "itertoolsmodule.c"
      case 13: // $bb11
        var $58=$0; //@line 522 "itertoolsmodule.c"
        $retval=$58; //@line 522 "itertoolsmodule.c"
        var $retval12=$retval; //@line 522 "itertoolsmodule.c"
        ;
        return $retval12; //@line 522 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_new($type, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iterable=__stackBase__;
        $type_addr=$type;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 551 "itertoolsmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str11, 1, 1, allocate([$iterable,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 551 "itertoolsmodule.c"
        var $3=($2)==0; //@line 551 "itertoolsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 551 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 552 "itertoolsmodule.c"
        __label__ = 3; break; //@line 552 "itertoolsmodule.c"
      case 2: // $bb1
        var $4=HEAP[$iterable]; //@line 553 "itertoolsmodule.c"
        var $5=_tee_fromiterable($4); //@line 553 "itertoolsmodule.c"
        $0=$5; //@line 553 "itertoolsmodule.c"
        __label__ = 3; break; //@line 553 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$0; //@line 552 "itertoolsmodule.c"
        $retval=$6; //@line 552 "itertoolsmodule.c"
        var $retval3=$retval; //@line 552 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 552 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_clear($to) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $to_addr;
        var $retval;
        var $0;
        var $_py_tmp;
        $to_addr=$to;
        var $1=$to_addr; //@line 559 "itertoolsmodule.c"
        var $2=$1+16; //@line 559 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 559 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 559 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 559 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$to_addr; //@line 560 "itertoolsmodule.c"
        var $6=$5; //@line 560 "itertoolsmodule.c"
        _PyObject_ClearWeakRefs($6); //@line 560 "itertoolsmodule.c"
        __label__ = 2; break; //@line 560 "itertoolsmodule.c"
      case 2: // $bb1
        var $7=$to_addr; //@line 561 "itertoolsmodule.c"
        var $8=$7+8; //@line 561 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 561 "itertoolsmodule.c"
        var $10=($9)!=0; //@line 561 "itertoolsmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 561 "itertoolsmodule.c"
      case 3: // $bb2
        var $11=$to_addr; //@line 561 "itertoolsmodule.c"
        var $12=$11+8; //@line 561 "itertoolsmodule.c"
        var $13=HEAP[$12]; //@line 561 "itertoolsmodule.c"
        var $14=$13; //@line 561 "itertoolsmodule.c"
        $_py_tmp=$14; //@line 561 "itertoolsmodule.c"
        var $15=$to_addr; //@line 561 "itertoolsmodule.c"
        var $16=$15+8; //@line 561 "itertoolsmodule.c"
        HEAP[$16]=0; //@line 561 "itertoolsmodule.c"
        var $17=$_py_tmp; //@line 561 "itertoolsmodule.c"
        var $18=$17; //@line 561 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 561 "itertoolsmodule.c"
        var $20=($19) - 1; //@line 561 "itertoolsmodule.c"
        var $21=$_py_tmp; //@line 561 "itertoolsmodule.c"
        var $22=$21; //@line 561 "itertoolsmodule.c"
        HEAP[$22]=$20; //@line 561 "itertoolsmodule.c"
        var $23=$_py_tmp; //@line 561 "itertoolsmodule.c"
        var $24=$23; //@line 561 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 561 "itertoolsmodule.c"
        var $26=($25)==0; //@line 561 "itertoolsmodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 561 "itertoolsmodule.c"
      case 4: // $bb3
        var $27=$_py_tmp; //@line 561 "itertoolsmodule.c"
        var $28=$27+4; //@line 561 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 561 "itertoolsmodule.c"
        var $30=$29+24; //@line 561 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 561 "itertoolsmodule.c"
        var $32=$_py_tmp; //@line 561 "itertoolsmodule.c"
        FUNCTION_TABLE[$31]($32); //@line 561 "itertoolsmodule.c"
        __label__ = 5; break; //@line 561 "itertoolsmodule.c"
      case 5: // $bb4
        $0=0; //@line 562 "itertoolsmodule.c"
        var $33=$0; //@line 562 "itertoolsmodule.c"
        $retval=$33; //@line 562 "itertoolsmodule.c"
        var $retval5=$retval; //@line 562 "itertoolsmodule.c"
        ;
        return $retval5; //@line 562 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _tee_dealloc($to) {
    ;
    var __label__;
  
    var $to_addr;
    $to_addr=$to;
    var $0=$to_addr; //@line 568 "itertoolsmodule.c"
    var $1=$0; //@line 568 "itertoolsmodule.c"
    _PyObject_GC_UnTrack($1); //@line 568 "itertoolsmodule.c"
    var $2=$to_addr; //@line 569 "itertoolsmodule.c"
    var $3=_tee_clear($2); //@line 569 "itertoolsmodule.c"
    var $4=$to_addr; //@line 570 "itertoolsmodule.c"
    var $5=$4; //@line 570 "itertoolsmodule.c"
    _PyObject_GC_Del($5); //@line 570 "itertoolsmodule.c"
    ;
    return; //@line 571 "itertoolsmodule.c"
  }
  

  function _tee($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i;
        var $n=__stackBase__;
        var $it;
        var $iterable=__stackBase__+4;
        var $copyable;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$n]=2; //@line 627 "itertoolsmodule.c"
        var $1=$args_addr; //@line 630 "itertoolsmodule.c"
        var $2=_PyArg_ParseTuple($1, __str14, allocate([$iterable,0,0,0,$n,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 630 "itertoolsmodule.c"
        var $3=($2)==0; //@line 630 "itertoolsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 630 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 631 "itertoolsmodule.c"
        __label__ = 28; break; //@line 631 "itertoolsmodule.c"
      case 2: // $bb1
        var $4=HEAP[$n]; //@line 632 "itertoolsmodule.c"
        var $5=($4) < 0; //@line 632 "itertoolsmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 632 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 633 "itertoolsmodule.c"
        _PyErr_SetString($6, __str15); //@line 633 "itertoolsmodule.c"
        $0=0; //@line 634 "itertoolsmodule.c"
        __label__ = 28; break; //@line 634 "itertoolsmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 636 "itertoolsmodule.c"
        var $8=_PyTuple_New($7); //@line 636 "itertoolsmodule.c"
        $result=$8; //@line 636 "itertoolsmodule.c"
        var $9=$result; //@line 637 "itertoolsmodule.c"
        var $10=($9)==0; //@line 637 "itertoolsmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 637 "itertoolsmodule.c"
      case 5: // $bb4
        $0=0; //@line 638 "itertoolsmodule.c"
        __label__ = 28; break; //@line 638 "itertoolsmodule.c"
      case 6: // $bb5
        var $11=HEAP[$n]; //@line 639 "itertoolsmodule.c"
        var $12=($11)==0; //@line 639 "itertoolsmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 639 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$result; //@line 640 "itertoolsmodule.c"
        $0=$13; //@line 640 "itertoolsmodule.c"
        __label__ = 28; break; //@line 640 "itertoolsmodule.c"
      case 8: // $bb7
        var $14=HEAP[$iterable]; //@line 641 "itertoolsmodule.c"
        var $15=_PyObject_GetIter($14); //@line 641 "itertoolsmodule.c"
        $it=$15; //@line 641 "itertoolsmodule.c"
        var $16=$it; //@line 642 "itertoolsmodule.c"
        var $17=($16)==0; //@line 642 "itertoolsmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 642 "itertoolsmodule.c"
      case 9: // $bb8
        var $18=$result; //@line 643 "itertoolsmodule.c"
        var $19=$18; //@line 643 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 643 "itertoolsmodule.c"
        var $21=($20) - 1; //@line 643 "itertoolsmodule.c"
        var $22=$result; //@line 643 "itertoolsmodule.c"
        var $23=$22; //@line 643 "itertoolsmodule.c"
        HEAP[$23]=$21; //@line 643 "itertoolsmodule.c"
        var $24=$result; //@line 643 "itertoolsmodule.c"
        var $25=$24; //@line 643 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 643 "itertoolsmodule.c"
        var $27=($26)==0; //@line 643 "itertoolsmodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 643 "itertoolsmodule.c"
      case 10: // $bb9
        var $28=$result; //@line 643 "itertoolsmodule.c"
        var $29=$28+4; //@line 643 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 643 "itertoolsmodule.c"
        var $31=$30+24; //@line 643 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 643 "itertoolsmodule.c"
        var $33=$result; //@line 643 "itertoolsmodule.c"
        FUNCTION_TABLE[$32]($33); //@line 643 "itertoolsmodule.c"
        __label__ = 11; break; //@line 643 "itertoolsmodule.c"
      case 11: // $bb10
        $0=0; //@line 644 "itertoolsmodule.c"
        __label__ = 28; break; //@line 644 "itertoolsmodule.c"
      case 12: // $bb11
        var $34=$it; //@line 646 "itertoolsmodule.c"
        var $35=_PyObject_HasAttrString($34, __str12); //@line 646 "itertoolsmodule.c"
        var $36=($35)==0; //@line 646 "itertoolsmodule.c"
        var $37=$it; //@line 647 "itertoolsmodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 646 "itertoolsmodule.c"
      case 13: // $bb12
        var $38=_tee_fromiterable($37); //@line 647 "itertoolsmodule.c"
        $copyable=$38; //@line 647 "itertoolsmodule.c"
        var $39=$it; //@line 648 "itertoolsmodule.c"
        var $40=$39; //@line 648 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 648 "itertoolsmodule.c"
        var $42=($41) - 1; //@line 648 "itertoolsmodule.c"
        var $43=$it; //@line 648 "itertoolsmodule.c"
        var $44=$43; //@line 648 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 648 "itertoolsmodule.c"
        var $45=$it; //@line 648 "itertoolsmodule.c"
        var $46=$45; //@line 648 "itertoolsmodule.c"
        var $47=HEAP[$46]; //@line 648 "itertoolsmodule.c"
        var $48=($47)==0; //@line 648 "itertoolsmodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 648 "itertoolsmodule.c"
      case 14: // $bb13
        var $49=$it; //@line 648 "itertoolsmodule.c"
        var $50=$49+4; //@line 648 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 648 "itertoolsmodule.c"
        var $52=$51+24; //@line 648 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 648 "itertoolsmodule.c"
        var $54=$it; //@line 648 "itertoolsmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 648 "itertoolsmodule.c"
        __label__ = 15; break; //@line 648 "itertoolsmodule.c"
      case 15: // $bb14
        var $55=$copyable; //@line 649 "itertoolsmodule.c"
        var $56=($55)==0; //@line 649 "itertoolsmodule.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 649 "itertoolsmodule.c"
      case 16: // $bb15
        var $57=$result; //@line 650 "itertoolsmodule.c"
        var $58=$57; //@line 650 "itertoolsmodule.c"
        var $59=HEAP[$58]; //@line 650 "itertoolsmodule.c"
        var $60=($59) - 1; //@line 650 "itertoolsmodule.c"
        var $61=$result; //@line 650 "itertoolsmodule.c"
        var $62=$61; //@line 650 "itertoolsmodule.c"
        HEAP[$62]=$60; //@line 650 "itertoolsmodule.c"
        var $63=$result; //@line 650 "itertoolsmodule.c"
        var $64=$63; //@line 650 "itertoolsmodule.c"
        var $65=HEAP[$64]; //@line 650 "itertoolsmodule.c"
        var $66=($65)==0; //@line 650 "itertoolsmodule.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 650 "itertoolsmodule.c"
      case 17: // $bb16
        var $67=$result; //@line 650 "itertoolsmodule.c"
        var $68=$67+4; //@line 650 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 650 "itertoolsmodule.c"
        var $70=$69+24; //@line 650 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 650 "itertoolsmodule.c"
        var $72=$result; //@line 650 "itertoolsmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 650 "itertoolsmodule.c"
        __label__ = 18; break; //@line 650 "itertoolsmodule.c"
      case 18: // $bb17
        $0=0; //@line 651 "itertoolsmodule.c"
        __label__ = 28; break; //@line 651 "itertoolsmodule.c"
      case 19: // $bb19
        $copyable=$37; //@line 654 "itertoolsmodule.c"
        __label__ = 20; break; //@line 654 "itertoolsmodule.c"
      case 20: // $bb20
        var $73=$result; //@line 655 "itertoolsmodule.c"
        var $74=$73; //@line 655 "itertoolsmodule.c"
        var $75=$74+12; //@line 655 "itertoolsmodule.c"
        var $76=$75; //@line 655 "itertoolsmodule.c"
        var $77=$copyable; //@line 655 "itertoolsmodule.c"
        HEAP[$76]=$77; //@line 655 "itertoolsmodule.c"
        $i=1; //@line 656 "itertoolsmodule.c"
        __label__ = 26; break; //@line 656 "itertoolsmodule.c"
      case 21: // $bb21
        var $78=$copyable; //@line 657 "itertoolsmodule.c"
        var $79=_PyObject_CallMethod($78, __str12, 0, allocate(1, "i32", ALLOC_STACK)); //@line 657 "itertoolsmodule.c"
        $copyable=$79; //@line 657 "itertoolsmodule.c"
        var $80=$copyable; //@line 658 "itertoolsmodule.c"
        var $81=($80)==0; //@line 658 "itertoolsmodule.c"
        var $82=$result; //@line 659 "itertoolsmodule.c"
        if ($81) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 658 "itertoolsmodule.c"
      case 22: // $bb22
        var $83=$82; //@line 659 "itertoolsmodule.c"
        var $84=HEAP[$83]; //@line 659 "itertoolsmodule.c"
        var $85=($84) - 1; //@line 659 "itertoolsmodule.c"
        var $86=$result; //@line 659 "itertoolsmodule.c"
        var $87=$86; //@line 659 "itertoolsmodule.c"
        HEAP[$87]=$85; //@line 659 "itertoolsmodule.c"
        var $88=$result; //@line 659 "itertoolsmodule.c"
        var $89=$88; //@line 659 "itertoolsmodule.c"
        var $90=HEAP[$89]; //@line 659 "itertoolsmodule.c"
        var $91=($90)==0; //@line 659 "itertoolsmodule.c"
        if ($91) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 659 "itertoolsmodule.c"
      case 23: // $bb23
        var $92=$result; //@line 659 "itertoolsmodule.c"
        var $93=$92+4; //@line 659 "itertoolsmodule.c"
        var $94=HEAP[$93]; //@line 659 "itertoolsmodule.c"
        var $95=$94+24; //@line 659 "itertoolsmodule.c"
        var $96=HEAP[$95]; //@line 659 "itertoolsmodule.c"
        var $97=$result; //@line 659 "itertoolsmodule.c"
        FUNCTION_TABLE[$96]($97); //@line 659 "itertoolsmodule.c"
        __label__ = 24; break; //@line 659 "itertoolsmodule.c"
      case 24: // $bb24
        $0=0; //@line 660 "itertoolsmodule.c"
        __label__ = 28; break; //@line 660 "itertoolsmodule.c"
      case 25: // $bb25
        var $98=$82; //@line 662 "itertoolsmodule.c"
        var $99=$i; //@line 662 "itertoolsmodule.c"
        var $100=$98+12; //@line 662 "itertoolsmodule.c"
        var $101=$100+$99*4; //@line 662 "itertoolsmodule.c"
        var $102=$copyable; //@line 662 "itertoolsmodule.c"
        HEAP[$101]=$102; //@line 662 "itertoolsmodule.c"
        var $103=$i; //@line 656 "itertoolsmodule.c"
        var $104=($103) + 1; //@line 656 "itertoolsmodule.c"
        $i=$104; //@line 656 "itertoolsmodule.c"
        __label__ = 26; break; //@line 656 "itertoolsmodule.c"
      case 26: // $bb26
        var $105=HEAP[$n]; //@line 656 "itertoolsmodule.c"
        var $106=$i; //@line 656 "itertoolsmodule.c"
        var $107=($106) < ($105); //@line 656 "itertoolsmodule.c"
        if ($107) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 656 "itertoolsmodule.c"
      case 27: // $bb27
        var $108=$result; //@line 664 "itertoolsmodule.c"
        $0=$108; //@line 664 "itertoolsmodule.c"
        __label__ = 28; break; //@line 664 "itertoolsmodule.c"
      case 28: // $bb28
        var $109=$0; //@line 631 "itertoolsmodule.c"
        $retval=$109; //@line 631 "itertoolsmodule.c"
        var $retval29=$retval; //@line 631 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 631 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cycle_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $it;
        var $iterable=__stackBase__;
        var $saved;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 690 "itertoolsmodule.c"
        var $2=($1)==(_cycle_type); //@line 690 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 690 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 690 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str16, $3); //@line 690 "itertoolsmodule.c"
        var $5=($4)==0; //@line 690 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 690 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 691 "itertoolsmodule.c"
        __label__ = 18; break; //@line 691 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 693 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str17, 1, 1, allocate([$iterable,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 693 "itertoolsmodule.c"
        var $8=($7)==0; //@line 693 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 693 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 694 "itertoolsmodule.c"
        __label__ = 18; break; //@line 694 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$iterable]; //@line 697 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 697 "itertoolsmodule.c"
        $it=$10; //@line 697 "itertoolsmodule.c"
        var $11=$it; //@line 698 "itertoolsmodule.c"
        var $12=($11)==0; //@line 698 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 698 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 699 "itertoolsmodule.c"
        __label__ = 18; break; //@line 699 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=_PyList_New(0); //@line 701 "itertoolsmodule.c"
        $saved=$13; //@line 701 "itertoolsmodule.c"
        var $14=$saved; //@line 702 "itertoolsmodule.c"
        var $15=($14)==0; //@line 702 "itertoolsmodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 702 "itertoolsmodule.c"
      case 8: // $bb7
        var $16=$it; //@line 703 "itertoolsmodule.c"
        var $17=$16; //@line 703 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 703 "itertoolsmodule.c"
        var $19=($18) - 1; //@line 703 "itertoolsmodule.c"
        var $20=$it; //@line 703 "itertoolsmodule.c"
        var $21=$20; //@line 703 "itertoolsmodule.c"
        HEAP[$21]=$19; //@line 703 "itertoolsmodule.c"
        var $22=$it; //@line 703 "itertoolsmodule.c"
        var $23=$22; //@line 703 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 703 "itertoolsmodule.c"
        var $25=($24)==0; //@line 703 "itertoolsmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 703 "itertoolsmodule.c"
      case 9: // $bb8
        var $26=$it; //@line 703 "itertoolsmodule.c"
        var $27=$26+4; //@line 703 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 703 "itertoolsmodule.c"
        var $29=$28+24; //@line 703 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 703 "itertoolsmodule.c"
        var $31=$it; //@line 703 "itertoolsmodule.c"
        FUNCTION_TABLE[$30]($31); //@line 703 "itertoolsmodule.c"
        __label__ = 10; break; //@line 703 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 704 "itertoolsmodule.c"
        __label__ = 18; break; //@line 704 "itertoolsmodule.c"
      case 11: // $bb10
        var $32=$type_addr; //@line 708 "itertoolsmodule.c"
        var $33=$32+152; //@line 708 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 708 "itertoolsmodule.c"
        var $35=$type_addr; //@line 708 "itertoolsmodule.c"
        var $36=FUNCTION_TABLE[$34]($35, 0); //@line 708 "itertoolsmodule.c"
        var $37=$36; //@line 708 "itertoolsmodule.c"
        $lz=$37; //@line 708 "itertoolsmodule.c"
        var $38=$lz; //@line 709 "itertoolsmodule.c"
        var $39=($38)==0; //@line 709 "itertoolsmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 709 "itertoolsmodule.c"
      case 12: // $bb11
        var $40=$it; //@line 710 "itertoolsmodule.c"
        var $41=$40; //@line 710 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 710 "itertoolsmodule.c"
        var $43=($42) - 1; //@line 710 "itertoolsmodule.c"
        var $44=$it; //@line 710 "itertoolsmodule.c"
        var $45=$44; //@line 710 "itertoolsmodule.c"
        HEAP[$45]=$43; //@line 710 "itertoolsmodule.c"
        var $46=$it; //@line 710 "itertoolsmodule.c"
        var $47=$46; //@line 710 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 710 "itertoolsmodule.c"
        var $49=($48)==0; //@line 710 "itertoolsmodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 710 "itertoolsmodule.c"
      case 13: // $bb12
        var $50=$it; //@line 710 "itertoolsmodule.c"
        var $51=$50+4; //@line 710 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 710 "itertoolsmodule.c"
        var $53=$52+24; //@line 710 "itertoolsmodule.c"
        var $54=HEAP[$53]; //@line 710 "itertoolsmodule.c"
        var $55=$it; //@line 710 "itertoolsmodule.c"
        FUNCTION_TABLE[$54]($55); //@line 710 "itertoolsmodule.c"
        __label__ = 14; break; //@line 710 "itertoolsmodule.c"
      case 14: // $bb13
        var $56=$saved; //@line 711 "itertoolsmodule.c"
        var $57=$56; //@line 711 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 711 "itertoolsmodule.c"
        var $59=($58) - 1; //@line 711 "itertoolsmodule.c"
        var $60=$saved; //@line 711 "itertoolsmodule.c"
        var $61=$60; //@line 711 "itertoolsmodule.c"
        HEAP[$61]=$59; //@line 711 "itertoolsmodule.c"
        var $62=$saved; //@line 711 "itertoolsmodule.c"
        var $63=$62; //@line 711 "itertoolsmodule.c"
        var $64=HEAP[$63]; //@line 711 "itertoolsmodule.c"
        var $65=($64)==0; //@line 711 "itertoolsmodule.c"
        if ($65) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 711 "itertoolsmodule.c"
      case 15: // $bb14
        var $66=$saved; //@line 711 "itertoolsmodule.c"
        var $67=$66+4; //@line 711 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 711 "itertoolsmodule.c"
        var $69=$68+24; //@line 711 "itertoolsmodule.c"
        var $70=HEAP[$69]; //@line 711 "itertoolsmodule.c"
        var $71=$saved; //@line 711 "itertoolsmodule.c"
        FUNCTION_TABLE[$70]($71); //@line 711 "itertoolsmodule.c"
        __label__ = 16; break; //@line 711 "itertoolsmodule.c"
      case 16: // $bb15
        $0=0; //@line 712 "itertoolsmodule.c"
        __label__ = 18; break; //@line 712 "itertoolsmodule.c"
      case 17: // $bb16
        var $72=$lz; //@line 714 "itertoolsmodule.c"
        var $73=$72+8; //@line 714 "itertoolsmodule.c"
        var $74=$it; //@line 714 "itertoolsmodule.c"
        HEAP[$73]=$74; //@line 714 "itertoolsmodule.c"
        var $75=$lz; //@line 715 "itertoolsmodule.c"
        var $76=$75+12; //@line 715 "itertoolsmodule.c"
        var $77=$saved; //@line 715 "itertoolsmodule.c"
        HEAP[$76]=$77; //@line 715 "itertoolsmodule.c"
        var $78=$lz; //@line 716 "itertoolsmodule.c"
        var $79=$78+16; //@line 716 "itertoolsmodule.c"
        HEAP[$79]=0; //@line 716 "itertoolsmodule.c"
        var $80=$lz; //@line 718 "itertoolsmodule.c"
        var $81=$80; //@line 718 "itertoolsmodule.c"
        $0=$81; //@line 718 "itertoolsmodule.c"
        __label__ = 18; break; //@line 718 "itertoolsmodule.c"
      case 18: // $bb17
        var $82=$0; //@line 691 "itertoolsmodule.c"
        $retval=$82; //@line 691 "itertoolsmodule.c"
        var $retval18=$retval; //@line 691 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 691 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cycle_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 724 "itertoolsmodule.c"
        var $1=$0; //@line 724 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 724 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 725 "itertoolsmodule.c"
        var $3=$2+12; //@line 725 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 725 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 725 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 725 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 725 "itertoolsmodule.c"
        var $7=$6+12; //@line 725 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 725 "itertoolsmodule.c"
        var $9=$8; //@line 725 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 725 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 725 "itertoolsmodule.c"
        var $12=$8; //@line 725 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 725 "itertoolsmodule.c"
        var $13=$8; //@line 725 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 725 "itertoolsmodule.c"
        var $15=($14)==0; //@line 725 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 725 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 725 "itertoolsmodule.c"
        var $17=$16+12; //@line 725 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 725 "itertoolsmodule.c"
        var $19=$18+4; //@line 725 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 725 "itertoolsmodule.c"
        var $21=$20+24; //@line 725 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 725 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 725 "itertoolsmodule.c"
        var $24=$23+12; //@line 725 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 725 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 725 "itertoolsmodule.c"
        __label__ = 3; break; //@line 725 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 726 "itertoolsmodule.c"
        var $27=$26+8; //@line 726 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 726 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 726 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 726 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 726 "itertoolsmodule.c"
        var $31=$30+8; //@line 726 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 726 "itertoolsmodule.c"
        var $33=$32; //@line 726 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 726 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 726 "itertoolsmodule.c"
        var $36=$32; //@line 726 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 726 "itertoolsmodule.c"
        var $37=$32; //@line 726 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 726 "itertoolsmodule.c"
        var $39=($38)==0; //@line 726 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 726 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 726 "itertoolsmodule.c"
        var $41=$40+8; //@line 726 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 726 "itertoolsmodule.c"
        var $43=$42+4; //@line 726 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 726 "itertoolsmodule.c"
        var $45=$44+24; //@line 726 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 726 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 726 "itertoolsmodule.c"
        var $48=$47+8; //@line 726 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 726 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 726 "itertoolsmodule.c"
        __label__ = 6; break; //@line 726 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 727 "itertoolsmodule.c"
        var $51=$50; //@line 727 "itertoolsmodule.c"
        var $52=$51+4; //@line 727 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 727 "itertoolsmodule.c"
        var $54=$53+160; //@line 727 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 727 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 727 "itertoolsmodule.c"
        var $57=$56; //@line 727 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 727 "itertoolsmodule.c"
        ;
        return; //@line 728 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cycle_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 733 "itertoolsmodule.c"
        var $2=$1+8; //@line 733 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 733 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 733 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 733 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 733 "itertoolsmodule.c"
        var $6=$5+8; //@line 733 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 733 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 733 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 733 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 733 "itertoolsmodule.c"
        $vret=$10; //@line 733 "itertoolsmodule.c"
        var $11=$vret; //@line 733 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 733 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 733 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 733 "itertoolsmodule.c"
        $0=$13; //@line 733 "itertoolsmodule.c"
        __label__ = 7; break; //@line 733 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 734 "itertoolsmodule.c"
        var $15=$14+12; //@line 734 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 734 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 734 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 734 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 734 "itertoolsmodule.c"
        var $19=$18+12; //@line 734 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 734 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 734 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 734 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 734 "itertoolsmodule.c"
        $vret4=$23; //@line 734 "itertoolsmodule.c"
        var $24=$vret4; //@line 734 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 734 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 734 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 734 "itertoolsmodule.c"
        $0=$26; //@line 734 "itertoolsmodule.c"
        __label__ = 7; break; //@line 734 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 735 "itertoolsmodule.c"
        __label__ = 7; break; //@line 735 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 733 "itertoolsmodule.c"
        $retval=$27; //@line 733 "itertoolsmodule.c"
        var $retval8=$retval; //@line 733 "itertoolsmodule.c"
        ;
        return $retval8; //@line 733 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cycle_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $it;
        var $tmp;
        $lz_addr=$lz;
        __label__ = 1; break; //@line 740 "itertoolsmodule.c"
      case 1: // $bb
        var $1=$lz_addr; //@line 746 "itertoolsmodule.c"
        var $2=$1+8; //@line 746 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 746 "itertoolsmodule.c"
        var $4=_PyIter_Next($3); //@line 746 "itertoolsmodule.c"
        $item=$4; //@line 746 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 747 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 747 "itertoolsmodule.c"
      case 2: // $bb1
        var $6=$lz_addr; //@line 748 "itertoolsmodule.c"
        var $7=$6+16; //@line 748 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 748 "itertoolsmodule.c"
        var $9=($8)==0; //@line 748 "itertoolsmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 748 "itertoolsmodule.c"
      case 3: // $bb2
        var $10=$lz_addr; //@line 748 "itertoolsmodule.c"
        var $11=$10+12; //@line 748 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 748 "itertoolsmodule.c"
        var $13=$item; //@line 748 "itertoolsmodule.c"
        var $14=_PyList_Append($12, $13); //@line 748 "itertoolsmodule.c"
        var $15=($14)!=0; //@line 748 "itertoolsmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 748 "itertoolsmodule.c"
      case 4: // $bb3
        var $16=$item; //@line 749 "itertoolsmodule.c"
        var $17=$16; //@line 749 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 749 "itertoolsmodule.c"
        var $19=($18) - 1; //@line 749 "itertoolsmodule.c"
        var $20=$item; //@line 749 "itertoolsmodule.c"
        var $21=$20; //@line 749 "itertoolsmodule.c"
        HEAP[$21]=$19; //@line 749 "itertoolsmodule.c"
        var $22=$item; //@line 749 "itertoolsmodule.c"
        var $23=$22; //@line 749 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 749 "itertoolsmodule.c"
        var $25=($24)==0; //@line 749 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 749 "itertoolsmodule.c"
      case 5: // $bb4
        var $26=$item; //@line 749 "itertoolsmodule.c"
        var $27=$26+4; //@line 749 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 749 "itertoolsmodule.c"
        var $29=$28+24; //@line 749 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 749 "itertoolsmodule.c"
        var $31=$item; //@line 749 "itertoolsmodule.c"
        FUNCTION_TABLE[$30]($31); //@line 749 "itertoolsmodule.c"
        __label__ = 6; break; //@line 749 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 750 "itertoolsmodule.c"
        __label__ = 18; break; //@line 750 "itertoolsmodule.c"
      case 7: // $bb6
        var $32=$item; //@line 752 "itertoolsmodule.c"
        $0=$32; //@line 752 "itertoolsmodule.c"
        __label__ = 18; break; //@line 752 "itertoolsmodule.c"
      case 8: // $bb7
        var $33=_PyErr_Occurred(); //@line 754 "itertoolsmodule.c"
        var $34=($33)!=0; //@line 754 "itertoolsmodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 754 "itertoolsmodule.c"
      case 9: // $bb8
        var $35=HEAP[_PyExc_StopIteration]; //@line 755 "itertoolsmodule.c"
        var $36=_PyErr_ExceptionMatches($35); //@line 755 "itertoolsmodule.c"
        var $37=($36)!=0; //@line 755 "itertoolsmodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 755 "itertoolsmodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 756 "itertoolsmodule.c"
        __label__ = 12; break; //@line 756 "itertoolsmodule.c"
      case 11: // $bb10
        $0=0; //@line 758 "itertoolsmodule.c"
        __label__ = 18; break; //@line 758 "itertoolsmodule.c"
      case 12: // $bb11
        var $38=$lz_addr; //@line 760 "itertoolsmodule.c"
        var $39=$38+12; //@line 760 "itertoolsmodule.c"
        var $40=HEAP[$39]; //@line 760 "itertoolsmodule.c"
        var $41=_PyList_Size($40); //@line 760 "itertoolsmodule.c"
        var $42=($41)==0; //@line 760 "itertoolsmodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 760 "itertoolsmodule.c"
      case 13: // $bb12
        $0=0; //@line 761 "itertoolsmodule.c"
        __label__ = 18; break; //@line 761 "itertoolsmodule.c"
      case 14: // $bb13
        var $43=$lz_addr; //@line 762 "itertoolsmodule.c"
        var $44=$43+12; //@line 762 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 762 "itertoolsmodule.c"
        var $46=_PyObject_GetIter($45); //@line 762 "itertoolsmodule.c"
        $it=$46; //@line 762 "itertoolsmodule.c"
        var $47=$it; //@line 763 "itertoolsmodule.c"
        var $48=($47)==0; //@line 763 "itertoolsmodule.c"
        if ($48) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 763 "itertoolsmodule.c"
      case 15: // $bb14
        $0=0; //@line 764 "itertoolsmodule.c"
        __label__ = 18; break; //@line 764 "itertoolsmodule.c"
      case 16: // $bb15
        var $49=$lz_addr; //@line 765 "itertoolsmodule.c"
        var $50=$49+8; //@line 765 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 765 "itertoolsmodule.c"
        $tmp=$51; //@line 765 "itertoolsmodule.c"
        var $52=$lz_addr; //@line 766 "itertoolsmodule.c"
        var $53=$52+8; //@line 766 "itertoolsmodule.c"
        var $54=$it; //@line 766 "itertoolsmodule.c"
        HEAP[$53]=$54; //@line 766 "itertoolsmodule.c"
        var $55=$lz_addr; //@line 767 "itertoolsmodule.c"
        var $56=$55+16; //@line 767 "itertoolsmodule.c"
        HEAP[$56]=1; //@line 767 "itertoolsmodule.c"
        var $57=$tmp; //@line 768 "itertoolsmodule.c"
        var $58=$57; //@line 768 "itertoolsmodule.c"
        var $59=HEAP[$58]; //@line 768 "itertoolsmodule.c"
        var $60=($59) - 1; //@line 768 "itertoolsmodule.c"
        var $61=$tmp; //@line 768 "itertoolsmodule.c"
        var $62=$61; //@line 768 "itertoolsmodule.c"
        HEAP[$62]=$60; //@line 768 "itertoolsmodule.c"
        var $63=$tmp; //@line 768 "itertoolsmodule.c"
        var $64=$63; //@line 768 "itertoolsmodule.c"
        var $65=HEAP[$64]; //@line 768 "itertoolsmodule.c"
        var $66=($65)==0; //@line 768 "itertoolsmodule.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 1; break; } //@line 768 "itertoolsmodule.c"
      case 17: // $bb16
        var $67=$tmp; //@line 768 "itertoolsmodule.c"
        var $68=$67+4; //@line 768 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 768 "itertoolsmodule.c"
        var $70=$69+24; //@line 768 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 768 "itertoolsmodule.c"
        var $72=$tmp; //@line 768 "itertoolsmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 768 "itertoolsmodule.c"
        __label__ = 1; break; //@line 768 "itertoolsmodule.c"
      case 18: // $bb18
        var $73=$0; //@line 750 "itertoolsmodule.c"
        $retval=$73; //@line 750 "itertoolsmodule.c"
        var $retval19=$retval; //@line 750 "itertoolsmodule.c"
        ;
        return $retval19; //@line 750 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dropwhile_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $func=__stackBase__;
        var $seq=__stackBase__+4;
        var $it;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 841 "itertoolsmodule.c"
        var $2=($1)==(_dropwhile_type); //@line 841 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 841 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 841 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str19, $3); //@line 841 "itertoolsmodule.c"
        var $5=($4)==0; //@line 841 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 841 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 842 "itertoolsmodule.c"
        __label__ = 12; break; //@line 842 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 844 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str20, 2, 2, allocate([$func,0,0,0,$seq,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 844 "itertoolsmodule.c"
        var $8=($7)==0; //@line 844 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 844 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 845 "itertoolsmodule.c"
        __label__ = 12; break; //@line 845 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$seq]; //@line 848 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 848 "itertoolsmodule.c"
        $it=$10; //@line 848 "itertoolsmodule.c"
        var $11=$it; //@line 849 "itertoolsmodule.c"
        var $12=($11)==0; //@line 849 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 849 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 850 "itertoolsmodule.c"
        __label__ = 12; break; //@line 850 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$type_addr; //@line 853 "itertoolsmodule.c"
        var $14=$13+152; //@line 853 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 853 "itertoolsmodule.c"
        var $16=$type_addr; //@line 853 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 853 "itertoolsmodule.c"
        var $18=$17; //@line 853 "itertoolsmodule.c"
        $lz=$18; //@line 853 "itertoolsmodule.c"
        var $19=$lz; //@line 854 "itertoolsmodule.c"
        var $20=($19)==0; //@line 854 "itertoolsmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 854 "itertoolsmodule.c"
      case 8: // $bb7
        var $21=$it; //@line 855 "itertoolsmodule.c"
        var $22=$21; //@line 855 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 855 "itertoolsmodule.c"
        var $24=($23) - 1; //@line 855 "itertoolsmodule.c"
        var $25=$it; //@line 855 "itertoolsmodule.c"
        var $26=$25; //@line 855 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 855 "itertoolsmodule.c"
        var $27=$it; //@line 855 "itertoolsmodule.c"
        var $28=$27; //@line 855 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 855 "itertoolsmodule.c"
        var $30=($29)==0; //@line 855 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 855 "itertoolsmodule.c"
      case 9: // $bb8
        var $31=$it; //@line 855 "itertoolsmodule.c"
        var $32=$31+4; //@line 855 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 855 "itertoolsmodule.c"
        var $34=$33+24; //@line 855 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 855 "itertoolsmodule.c"
        var $36=$it; //@line 855 "itertoolsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 855 "itertoolsmodule.c"
        __label__ = 10; break; //@line 855 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 856 "itertoolsmodule.c"
        __label__ = 12; break; //@line 856 "itertoolsmodule.c"
      case 11: // $bb10
        var $37=HEAP[$func]; //@line 858 "itertoolsmodule.c"
        var $38=$37; //@line 858 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 858 "itertoolsmodule.c"
        var $40=($39) + 1; //@line 858 "itertoolsmodule.c"
        var $41=$37; //@line 858 "itertoolsmodule.c"
        HEAP[$41]=$40; //@line 858 "itertoolsmodule.c"
        var $42=HEAP[$func]; //@line 859 "itertoolsmodule.c"
        var $43=$lz; //@line 859 "itertoolsmodule.c"
        var $44=$43+8; //@line 859 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 859 "itertoolsmodule.c"
        var $45=$lz; //@line 860 "itertoolsmodule.c"
        var $46=$45+12; //@line 860 "itertoolsmodule.c"
        var $47=$it; //@line 860 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 860 "itertoolsmodule.c"
        var $48=$lz; //@line 861 "itertoolsmodule.c"
        var $49=$48+16; //@line 861 "itertoolsmodule.c"
        HEAP[$49]=0; //@line 861 "itertoolsmodule.c"
        var $50=$lz; //@line 863 "itertoolsmodule.c"
        var $51=$50; //@line 863 "itertoolsmodule.c"
        $0=$51; //@line 863 "itertoolsmodule.c"
        __label__ = 12; break; //@line 863 "itertoolsmodule.c"
      case 12: // $bb11
        var $52=$0; //@line 842 "itertoolsmodule.c"
        $retval=$52; //@line 842 "itertoolsmodule.c"
        var $retval12=$retval; //@line 842 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 842 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dropwhile_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 869 "itertoolsmodule.c"
        var $1=$0; //@line 869 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 869 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 870 "itertoolsmodule.c"
        var $3=$2+8; //@line 870 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 870 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 870 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 870 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 870 "itertoolsmodule.c"
        var $7=$6+8; //@line 870 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 870 "itertoolsmodule.c"
        var $9=$8; //@line 870 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 870 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 870 "itertoolsmodule.c"
        var $12=$8; //@line 870 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 870 "itertoolsmodule.c"
        var $13=$8; //@line 870 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 870 "itertoolsmodule.c"
        var $15=($14)==0; //@line 870 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 870 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 870 "itertoolsmodule.c"
        var $17=$16+8; //@line 870 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 870 "itertoolsmodule.c"
        var $19=$18+4; //@line 870 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 870 "itertoolsmodule.c"
        var $21=$20+24; //@line 870 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 870 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 870 "itertoolsmodule.c"
        var $24=$23+8; //@line 870 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 870 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 870 "itertoolsmodule.c"
        __label__ = 3; break; //@line 870 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 871 "itertoolsmodule.c"
        var $27=$26+12; //@line 871 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 871 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 871 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 871 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 871 "itertoolsmodule.c"
        var $31=$30+12; //@line 871 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 871 "itertoolsmodule.c"
        var $33=$32; //@line 871 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 871 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 871 "itertoolsmodule.c"
        var $36=$32; //@line 871 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 871 "itertoolsmodule.c"
        var $37=$32; //@line 871 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 871 "itertoolsmodule.c"
        var $39=($38)==0; //@line 871 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 871 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 871 "itertoolsmodule.c"
        var $41=$40+12; //@line 871 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 871 "itertoolsmodule.c"
        var $43=$42+4; //@line 871 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 871 "itertoolsmodule.c"
        var $45=$44+24; //@line 871 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 871 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 871 "itertoolsmodule.c"
        var $48=$47+12; //@line 871 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 871 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 871 "itertoolsmodule.c"
        __label__ = 6; break; //@line 871 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 872 "itertoolsmodule.c"
        var $51=$50; //@line 872 "itertoolsmodule.c"
        var $52=$51+4; //@line 872 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 872 "itertoolsmodule.c"
        var $54=$53+160; //@line 872 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 872 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 872 "itertoolsmodule.c"
        var $57=$56; //@line 872 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 872 "itertoolsmodule.c"
        ;
        return; //@line 873 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dropwhile_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 878 "itertoolsmodule.c"
        var $2=$1+12; //@line 878 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 878 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 878 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 878 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 878 "itertoolsmodule.c"
        var $6=$5+12; //@line 878 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 878 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 878 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 878 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 878 "itertoolsmodule.c"
        $vret=$10; //@line 878 "itertoolsmodule.c"
        var $11=$vret; //@line 878 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 878 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 878 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 878 "itertoolsmodule.c"
        $0=$13; //@line 878 "itertoolsmodule.c"
        __label__ = 7; break; //@line 878 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 879 "itertoolsmodule.c"
        var $15=$14+8; //@line 879 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 879 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 879 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 879 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 879 "itertoolsmodule.c"
        var $19=$18+8; //@line 879 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 879 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 879 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 879 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 879 "itertoolsmodule.c"
        $vret4=$23; //@line 879 "itertoolsmodule.c"
        var $24=$vret4; //@line 879 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 879 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 879 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 879 "itertoolsmodule.c"
        $0=$26; //@line 879 "itertoolsmodule.c"
        __label__ = 7; break; //@line 879 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 880 "itertoolsmodule.c"
        __label__ = 7; break; //@line 880 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 878 "itertoolsmodule.c"
        $retval=$27; //@line 878 "itertoolsmodule.c"
        var $retval8=$retval; //@line 878 "itertoolsmodule.c"
        ;
        return $retval8; //@line 878 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dropwhile_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $good;
        var $it;
        var $ok;
        var $iternext;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 887 "itertoolsmodule.c"
        var $2=$1+12; //@line 887 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 887 "itertoolsmodule.c"
        $it=$3; //@line 887 "itertoolsmodule.c"
        var $4=$it; //@line 891 "itertoolsmodule.c"
        var $5=$4+4; //@line 891 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 891 "itertoolsmodule.c"
        var $7=$6+112; //@line 891 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 891 "itertoolsmodule.c"
        $iternext=$8; //@line 891 "itertoolsmodule.c"
        __label__ = 1; break; //@line 891 "itertoolsmodule.c"
      case 1: // $bb
        var $9=$iternext; //@line 893 "itertoolsmodule.c"
        var $10=$it; //@line 893 "itertoolsmodule.c"
        var $11=FUNCTION_TABLE[$9]($10); //@line 893 "itertoolsmodule.c"
        $item=$11; //@line 893 "itertoolsmodule.c"
        var $12=($11)==0; //@line 894 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 894 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 895 "itertoolsmodule.c"
        __label__ = 15; break; //@line 895 "itertoolsmodule.c"
      case 3: // $bb2
        var $13=$lz_addr; //@line 896 "itertoolsmodule.c"
        var $14=$13+16; //@line 896 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 896 "itertoolsmodule.c"
        var $16=($15)==1; //@line 896 "itertoolsmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 896 "itertoolsmodule.c"
      case 4: // $bb3
        var $17=$item; //@line 897 "itertoolsmodule.c"
        $0=$17; //@line 897 "itertoolsmodule.c"
        __label__ = 15; break; //@line 897 "itertoolsmodule.c"
      case 5: // $bb4
        var $18=$lz_addr; //@line 899 "itertoolsmodule.c"
        var $19=$18+8; //@line 899 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 899 "itertoolsmodule.c"
        var $21=$item; //@line 899 "itertoolsmodule.c"
        var $22=_PyObject_CallFunctionObjArgs($20, allocate([$21,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 899 "itertoolsmodule.c"
        $good=$22; //@line 899 "itertoolsmodule.c"
        var $23=$good; //@line 900 "itertoolsmodule.c"
        var $24=($23)==0; //@line 900 "itertoolsmodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 900 "itertoolsmodule.c"
      case 6: // $bb5
        var $25=$item; //@line 901 "itertoolsmodule.c"
        var $26=$25; //@line 901 "itertoolsmodule.c"
        var $27=HEAP[$26]; //@line 901 "itertoolsmodule.c"
        var $28=($27) - 1; //@line 901 "itertoolsmodule.c"
        var $29=$item; //@line 901 "itertoolsmodule.c"
        var $30=$29; //@line 901 "itertoolsmodule.c"
        HEAP[$30]=$28; //@line 901 "itertoolsmodule.c"
        var $31=$item; //@line 901 "itertoolsmodule.c"
        var $32=$31; //@line 901 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 901 "itertoolsmodule.c"
        var $34=($33)==0; //@line 901 "itertoolsmodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 901 "itertoolsmodule.c"
      case 7: // $bb6
        var $35=$item; //@line 901 "itertoolsmodule.c"
        var $36=$35+4; //@line 901 "itertoolsmodule.c"
        var $37=HEAP[$36]; //@line 901 "itertoolsmodule.c"
        var $38=$37+24; //@line 901 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 901 "itertoolsmodule.c"
        var $40=$item; //@line 901 "itertoolsmodule.c"
        FUNCTION_TABLE[$39]($40); //@line 901 "itertoolsmodule.c"
        __label__ = 8; break; //@line 901 "itertoolsmodule.c"
      case 8: // $bb7
        $0=0; //@line 902 "itertoolsmodule.c"
        __label__ = 15; break; //@line 902 "itertoolsmodule.c"
      case 9: // $bb8
        var $41=$good; //@line 904 "itertoolsmodule.c"
        var $42=_PyObject_IsTrue($41); //@line 904 "itertoolsmodule.c"
        $ok=$42; //@line 904 "itertoolsmodule.c"
        var $43=$good; //@line 905 "itertoolsmodule.c"
        var $44=$43; //@line 905 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 905 "itertoolsmodule.c"
        var $46=($45) - 1; //@line 905 "itertoolsmodule.c"
        var $47=$good; //@line 905 "itertoolsmodule.c"
        var $48=$47; //@line 905 "itertoolsmodule.c"
        HEAP[$48]=$46; //@line 905 "itertoolsmodule.c"
        var $49=$good; //@line 905 "itertoolsmodule.c"
        var $50=$49; //@line 905 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 905 "itertoolsmodule.c"
        var $52=($51)==0; //@line 905 "itertoolsmodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 905 "itertoolsmodule.c"
      case 10: // $bb9
        var $53=$good; //@line 905 "itertoolsmodule.c"
        var $54=$53+4; //@line 905 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 905 "itertoolsmodule.c"
        var $56=$55+24; //@line 905 "itertoolsmodule.c"
        var $57=HEAP[$56]; //@line 905 "itertoolsmodule.c"
        var $58=$good; //@line 905 "itertoolsmodule.c"
        FUNCTION_TABLE[$57]($58); //@line 905 "itertoolsmodule.c"
        __label__ = 11; break; //@line 905 "itertoolsmodule.c"
      case 11: // $bb10
        var $59=$ok; //@line 906 "itertoolsmodule.c"
        var $60=($59)==0; //@line 906 "itertoolsmodule.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 906 "itertoolsmodule.c"
      case 12: // $bb11
        var $61=$lz_addr; //@line 907 "itertoolsmodule.c"
        var $62=$61+16; //@line 907 "itertoolsmodule.c"
        HEAP[$62]=1; //@line 907 "itertoolsmodule.c"
        var $63=$item; //@line 908 "itertoolsmodule.c"
        $0=$63; //@line 908 "itertoolsmodule.c"
        __label__ = 15; break; //@line 908 "itertoolsmodule.c"
      case 13: // $bb12
        var $64=$item; //@line 910 "itertoolsmodule.c"
        var $65=$64; //@line 910 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 910 "itertoolsmodule.c"
        var $67=($66) - 1; //@line 910 "itertoolsmodule.c"
        var $68=$item; //@line 910 "itertoolsmodule.c"
        var $69=$68; //@line 910 "itertoolsmodule.c"
        HEAP[$69]=$67; //@line 910 "itertoolsmodule.c"
        var $70=$item; //@line 910 "itertoolsmodule.c"
        var $71=$70; //@line 910 "itertoolsmodule.c"
        var $72=HEAP[$71]; //@line 910 "itertoolsmodule.c"
        var $73=($72)==0; //@line 910 "itertoolsmodule.c"
        if ($73) { __label__ = 14; break; } else { __label__ = 1; break; } //@line 910 "itertoolsmodule.c"
      case 14: // $bb13
        var $74=$item; //@line 910 "itertoolsmodule.c"
        var $75=$74+4; //@line 910 "itertoolsmodule.c"
        var $76=HEAP[$75]; //@line 910 "itertoolsmodule.c"
        var $77=$76+24; //@line 910 "itertoolsmodule.c"
        var $78=HEAP[$77]; //@line 910 "itertoolsmodule.c"
        var $79=$item; //@line 910 "itertoolsmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 910 "itertoolsmodule.c"
        __label__ = 1; break; //@line 910 "itertoolsmodule.c"
      case 15: // $bb15
        var $80=$0; //@line 895 "itertoolsmodule.c"
        $retval=$80; //@line 895 "itertoolsmodule.c"
        var $retval16=$retval; //@line 895 "itertoolsmodule.c"
        ;
        return $retval16; //@line 895 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _takewhile_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $func=__stackBase__;
        var $seq=__stackBase__+4;
        var $it;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 983 "itertoolsmodule.c"
        var $2=($1)==(_takewhile_type); //@line 983 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 983 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 983 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str22, $3); //@line 983 "itertoolsmodule.c"
        var $5=($4)==0; //@line 983 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 983 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 984 "itertoolsmodule.c"
        __label__ = 12; break; //@line 984 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 986 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str23, 2, 2, allocate([$func,0,0,0,$seq,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 986 "itertoolsmodule.c"
        var $8=($7)==0; //@line 986 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 986 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 987 "itertoolsmodule.c"
        __label__ = 12; break; //@line 987 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$seq]; //@line 990 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 990 "itertoolsmodule.c"
        $it=$10; //@line 990 "itertoolsmodule.c"
        var $11=$it; //@line 991 "itertoolsmodule.c"
        var $12=($11)==0; //@line 991 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 991 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 992 "itertoolsmodule.c"
        __label__ = 12; break; //@line 992 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$type_addr; //@line 995 "itertoolsmodule.c"
        var $14=$13+152; //@line 995 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 995 "itertoolsmodule.c"
        var $16=$type_addr; //@line 995 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 995 "itertoolsmodule.c"
        var $18=$17; //@line 995 "itertoolsmodule.c"
        $lz=$18; //@line 995 "itertoolsmodule.c"
        var $19=$lz; //@line 996 "itertoolsmodule.c"
        var $20=($19)==0; //@line 996 "itertoolsmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 996 "itertoolsmodule.c"
      case 8: // $bb7
        var $21=$it; //@line 997 "itertoolsmodule.c"
        var $22=$21; //@line 997 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 997 "itertoolsmodule.c"
        var $24=($23) - 1; //@line 997 "itertoolsmodule.c"
        var $25=$it; //@line 997 "itertoolsmodule.c"
        var $26=$25; //@line 997 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 997 "itertoolsmodule.c"
        var $27=$it; //@line 997 "itertoolsmodule.c"
        var $28=$27; //@line 997 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 997 "itertoolsmodule.c"
        var $30=($29)==0; //@line 997 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 997 "itertoolsmodule.c"
      case 9: // $bb8
        var $31=$it; //@line 997 "itertoolsmodule.c"
        var $32=$31+4; //@line 997 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 997 "itertoolsmodule.c"
        var $34=$33+24; //@line 997 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 997 "itertoolsmodule.c"
        var $36=$it; //@line 997 "itertoolsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 997 "itertoolsmodule.c"
        __label__ = 10; break; //@line 997 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 998 "itertoolsmodule.c"
        __label__ = 12; break; //@line 998 "itertoolsmodule.c"
      case 11: // $bb10
        var $37=HEAP[$func]; //@line 1000 "itertoolsmodule.c"
        var $38=$37; //@line 1000 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 1000 "itertoolsmodule.c"
        var $40=($39) + 1; //@line 1000 "itertoolsmodule.c"
        var $41=$37; //@line 1000 "itertoolsmodule.c"
        HEAP[$41]=$40; //@line 1000 "itertoolsmodule.c"
        var $42=HEAP[$func]; //@line 1001 "itertoolsmodule.c"
        var $43=$lz; //@line 1001 "itertoolsmodule.c"
        var $44=$43+8; //@line 1001 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 1001 "itertoolsmodule.c"
        var $45=$lz; //@line 1002 "itertoolsmodule.c"
        var $46=$45+12; //@line 1002 "itertoolsmodule.c"
        var $47=$it; //@line 1002 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 1002 "itertoolsmodule.c"
        var $48=$lz; //@line 1003 "itertoolsmodule.c"
        var $49=$48+16; //@line 1003 "itertoolsmodule.c"
        HEAP[$49]=0; //@line 1003 "itertoolsmodule.c"
        var $50=$lz; //@line 1005 "itertoolsmodule.c"
        var $51=$50; //@line 1005 "itertoolsmodule.c"
        $0=$51; //@line 1005 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1005 "itertoolsmodule.c"
      case 12: // $bb11
        var $52=$0; //@line 984 "itertoolsmodule.c"
        $retval=$52; //@line 984 "itertoolsmodule.c"
        var $retval12=$retval; //@line 984 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 984 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _takewhile_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1011 "itertoolsmodule.c"
        var $1=$0; //@line 1011 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1011 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1012 "itertoolsmodule.c"
        var $3=$2+8; //@line 1012 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1012 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1012 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1012 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1012 "itertoolsmodule.c"
        var $7=$6+8; //@line 1012 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1012 "itertoolsmodule.c"
        var $9=$8; //@line 1012 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1012 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1012 "itertoolsmodule.c"
        var $12=$8; //@line 1012 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1012 "itertoolsmodule.c"
        var $13=$8; //@line 1012 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1012 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1012 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1012 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1012 "itertoolsmodule.c"
        var $17=$16+8; //@line 1012 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1012 "itertoolsmodule.c"
        var $19=$18+4; //@line 1012 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1012 "itertoolsmodule.c"
        var $21=$20+24; //@line 1012 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1012 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1012 "itertoolsmodule.c"
        var $24=$23+8; //@line 1012 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1012 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1012 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1012 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1013 "itertoolsmodule.c"
        var $27=$26+12; //@line 1013 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 1013 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 1013 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1013 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 1013 "itertoolsmodule.c"
        var $31=$30+12; //@line 1013 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1013 "itertoolsmodule.c"
        var $33=$32; //@line 1013 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 1013 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 1013 "itertoolsmodule.c"
        var $36=$32; //@line 1013 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 1013 "itertoolsmodule.c"
        var $37=$32; //@line 1013 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1013 "itertoolsmodule.c"
        var $39=($38)==0; //@line 1013 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1013 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 1013 "itertoolsmodule.c"
        var $41=$40+12; //@line 1013 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1013 "itertoolsmodule.c"
        var $43=$42+4; //@line 1013 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1013 "itertoolsmodule.c"
        var $45=$44+24; //@line 1013 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1013 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 1013 "itertoolsmodule.c"
        var $48=$47+12; //@line 1013 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1013 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 1013 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1013 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 1014 "itertoolsmodule.c"
        var $51=$50; //@line 1014 "itertoolsmodule.c"
        var $52=$51+4; //@line 1014 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 1014 "itertoolsmodule.c"
        var $54=$53+160; //@line 1014 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 1014 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 1014 "itertoolsmodule.c"
        var $57=$56; //@line 1014 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 1014 "itertoolsmodule.c"
        ;
        return; //@line 1015 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _takewhile_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1020 "itertoolsmodule.c"
        var $2=$1+12; //@line 1020 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1020 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1020 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1020 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1020 "itertoolsmodule.c"
        var $6=$5+12; //@line 1020 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1020 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1020 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1020 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1020 "itertoolsmodule.c"
        $vret=$10; //@line 1020 "itertoolsmodule.c"
        var $11=$vret; //@line 1020 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1020 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1020 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1020 "itertoolsmodule.c"
        $0=$13; //@line 1020 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1020 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 1021 "itertoolsmodule.c"
        var $15=$14+8; //@line 1021 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 1021 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 1021 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1021 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 1021 "itertoolsmodule.c"
        var $19=$18+8; //@line 1021 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1021 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 1021 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 1021 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 1021 "itertoolsmodule.c"
        $vret4=$23; //@line 1021 "itertoolsmodule.c"
        var $24=$vret4; //@line 1021 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 1021 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1021 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 1021 "itertoolsmodule.c"
        $0=$26; //@line 1021 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1021 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1022 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1022 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 1020 "itertoolsmodule.c"
        $retval=$27; //@line 1020 "itertoolsmodule.c"
        var $retval8=$retval; //@line 1020 "itertoolsmodule.c"
        ;
        return $retval8; //@line 1020 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _takewhile_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $good;
        var $it;
        var $ok;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1029 "itertoolsmodule.c"
        var $2=$1+12; //@line 1029 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1029 "itertoolsmodule.c"
        $it=$3; //@line 1029 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 1032 "itertoolsmodule.c"
        var $5=$4+16; //@line 1032 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 1032 "itertoolsmodule.c"
        var $7=($6)==1; //@line 1032 "itertoolsmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1032 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1033 "itertoolsmodule.c"
        __label__ = 15; break; //@line 1033 "itertoolsmodule.c"
      case 2: // $bb1
        var $8=$it; //@line 1035 "itertoolsmodule.c"
        var $9=$8+4; //@line 1035 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1035 "itertoolsmodule.c"
        var $11=$10+112; //@line 1035 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 1035 "itertoolsmodule.c"
        var $13=$it; //@line 1035 "itertoolsmodule.c"
        var $14=FUNCTION_TABLE[$12]($13); //@line 1035 "itertoolsmodule.c"
        $item=$14; //@line 1035 "itertoolsmodule.c"
        var $15=$item; //@line 1036 "itertoolsmodule.c"
        var $16=($15)==0; //@line 1036 "itertoolsmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1036 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 1037 "itertoolsmodule.c"
        __label__ = 15; break; //@line 1037 "itertoolsmodule.c"
      case 4: // $bb3
        var $17=$lz_addr; //@line 1039 "itertoolsmodule.c"
        var $18=$17+8; //@line 1039 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 1039 "itertoolsmodule.c"
        var $20=$item; //@line 1039 "itertoolsmodule.c"
        var $21=_PyObject_CallFunctionObjArgs($19, allocate([$20,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1039 "itertoolsmodule.c"
        $good=$21; //@line 1039 "itertoolsmodule.c"
        var $22=$good; //@line 1040 "itertoolsmodule.c"
        var $23=($22)==0; //@line 1040 "itertoolsmodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1040 "itertoolsmodule.c"
      case 5: // $bb4
        var $24=$item; //@line 1041 "itertoolsmodule.c"
        var $25=$24; //@line 1041 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 1041 "itertoolsmodule.c"
        var $27=($26) - 1; //@line 1041 "itertoolsmodule.c"
        var $28=$item; //@line 1041 "itertoolsmodule.c"
        var $29=$28; //@line 1041 "itertoolsmodule.c"
        HEAP[$29]=$27; //@line 1041 "itertoolsmodule.c"
        var $30=$item; //@line 1041 "itertoolsmodule.c"
        var $31=$30; //@line 1041 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1041 "itertoolsmodule.c"
        var $33=($32)==0; //@line 1041 "itertoolsmodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1041 "itertoolsmodule.c"
      case 6: // $bb5
        var $34=$item; //@line 1041 "itertoolsmodule.c"
        var $35=$34+4; //@line 1041 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 1041 "itertoolsmodule.c"
        var $37=$36+24; //@line 1041 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1041 "itertoolsmodule.c"
        var $39=$item; //@line 1041 "itertoolsmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 1041 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1041 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 1042 "itertoolsmodule.c"
        __label__ = 15; break; //@line 1042 "itertoolsmodule.c"
      case 8: // $bb7
        var $40=$good; //@line 1044 "itertoolsmodule.c"
        var $41=_PyObject_IsTrue($40); //@line 1044 "itertoolsmodule.c"
        $ok=$41; //@line 1044 "itertoolsmodule.c"
        var $42=$good; //@line 1045 "itertoolsmodule.c"
        var $43=$42; //@line 1045 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1045 "itertoolsmodule.c"
        var $45=($44) - 1; //@line 1045 "itertoolsmodule.c"
        var $46=$good; //@line 1045 "itertoolsmodule.c"
        var $47=$46; //@line 1045 "itertoolsmodule.c"
        HEAP[$47]=$45; //@line 1045 "itertoolsmodule.c"
        var $48=$good; //@line 1045 "itertoolsmodule.c"
        var $49=$48; //@line 1045 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 1045 "itertoolsmodule.c"
        var $51=($50)==0; //@line 1045 "itertoolsmodule.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1045 "itertoolsmodule.c"
      case 9: // $bb8
        var $52=$good; //@line 1045 "itertoolsmodule.c"
        var $53=$52+4; //@line 1045 "itertoolsmodule.c"
        var $54=HEAP[$53]; //@line 1045 "itertoolsmodule.c"
        var $55=$54+24; //@line 1045 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 1045 "itertoolsmodule.c"
        var $57=$good; //@line 1045 "itertoolsmodule.c"
        FUNCTION_TABLE[$56]($57); //@line 1045 "itertoolsmodule.c"
        __label__ = 10; break; //@line 1045 "itertoolsmodule.c"
      case 10: // $bb9
        var $58=$ok; //@line 1046 "itertoolsmodule.c"
        var $59=($58)!=0; //@line 1046 "itertoolsmodule.c"
        var $60=$item; //@line 1047 "itertoolsmodule.c"
        if ($59) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1046 "itertoolsmodule.c"
      case 11: // $bb10
        $0=$60; //@line 1047 "itertoolsmodule.c"
        __label__ = 15; break; //@line 1047 "itertoolsmodule.c"
      case 12: // $bb11
        var $61=$60; //@line 1048 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 1048 "itertoolsmodule.c"
        var $63=($62) - 1; //@line 1048 "itertoolsmodule.c"
        var $64=$item; //@line 1048 "itertoolsmodule.c"
        var $65=$64; //@line 1048 "itertoolsmodule.c"
        HEAP[$65]=$63; //@line 1048 "itertoolsmodule.c"
        var $66=$item; //@line 1048 "itertoolsmodule.c"
        var $67=$66; //@line 1048 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 1048 "itertoolsmodule.c"
        var $69=($68)==0; //@line 1048 "itertoolsmodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1048 "itertoolsmodule.c"
      case 13: // $bb12
        var $70=$item; //@line 1048 "itertoolsmodule.c"
        var $71=$70+4; //@line 1048 "itertoolsmodule.c"
        var $72=HEAP[$71]; //@line 1048 "itertoolsmodule.c"
        var $73=$72+24; //@line 1048 "itertoolsmodule.c"
        var $74=HEAP[$73]; //@line 1048 "itertoolsmodule.c"
        var $75=$item; //@line 1048 "itertoolsmodule.c"
        FUNCTION_TABLE[$74]($75); //@line 1048 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1048 "itertoolsmodule.c"
      case 14: // $bb13
        var $76=$lz_addr; //@line 1049 "itertoolsmodule.c"
        var $77=$76+16; //@line 1049 "itertoolsmodule.c"
        HEAP[$77]=1; //@line 1049 "itertoolsmodule.c"
        $0=0; //@line 1050 "itertoolsmodule.c"
        __label__ = 15; break; //@line 1050 "itertoolsmodule.c"
      case 15: // $bb14
        var $78=$0; //@line 1033 "itertoolsmodule.c"
        $retval=$78; //@line 1033 "itertoolsmodule.c"
        var $retval15=$retval; //@line 1033 "itertoolsmodule.c"
        ;
        return $retval15; //@line 1033 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _islice_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $seq=__stackBase__;
        var $start;
        var $stop;
        var $step;
        var $it;
        var $a1=__stackBase__+4;
        var $a2=__stackBase__+8;
        var $a3=__stackBase__+12;
        var $numargs;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $start=0; //@line 1121 "itertoolsmodule.c"
        $stop=-1; //@line 1121 "itertoolsmodule.c"
        $step=1; //@line 1121 "itertoolsmodule.c"
        HEAP[$a1]=0; //@line 1122 "itertoolsmodule.c"
        HEAP[$a2]=0; //@line 1122 "itertoolsmodule.c"
        HEAP[$a3]=0; //@line 1122 "itertoolsmodule.c"
        var $1=$type_addr; //@line 1126 "itertoolsmodule.c"
        var $2=($1)==(_islice_type); //@line 1126 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1126 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 1126 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str25, $3); //@line 1126 "itertoolsmodule.c"
        var $5=($4)==0; //@line 1126 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1126 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1127 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1127 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 1129 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str26, 2, 4, allocate([$seq,0,0,0,$a1,0,0,0,$a2,0,0,0,$a3,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1129 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1129 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1129 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 1130 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1130 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=$args_addr; //@line 1132 "itertoolsmodule.c"
        var $10=_PyTuple_Size($9); //@line 1132 "itertoolsmodule.c"
        $numargs=$10; //@line 1132 "itertoolsmodule.c"
        var $11=$numargs; //@line 1133 "itertoolsmodule.c"
        var $12=($11)==2; //@line 1133 "itertoolsmodule.c"
        var $13=HEAP[$a1]; //@line 1134 "itertoolsmodule.c"
        var $14=($13)!=(__Py_NoneStruct); //@line 1134 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 1133 "itertoolsmodule.c"
      case 6: // $bb5
        if ($14) { __label__ = 7; break; } else { __label__ = 22; break; } //@line 1134 "itertoolsmodule.c"
      case 7: // $bb6
        var $15=HEAP[$a1]; //@line 1135 "itertoolsmodule.c"
        var $16=_PyInt_AsSsize_t($15); //@line 1135 "itertoolsmodule.c"
        $stop=$16; //@line 1135 "itertoolsmodule.c"
        var $17=$stop; //@line 1136 "itertoolsmodule.c"
        var $18=($17)==-1; //@line 1136 "itertoolsmodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 22; break; } //@line 1136 "itertoolsmodule.c"
      case 8: // $bb7
        var $19=_PyErr_Occurred(); //@line 1137 "itertoolsmodule.c"
        var $20=($19)!=0; //@line 1137 "itertoolsmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1137 "itertoolsmodule.c"
      case 9: // $bb8
        _PyErr_Clear(); //@line 1138 "itertoolsmodule.c"
        __label__ = 10; break; //@line 1138 "itertoolsmodule.c"
      case 10: // $bb9
        var $21=HEAP[_PyExc_ValueError]; //@line 1139 "itertoolsmodule.c"
        _PyErr_SetString($21, __str27); //@line 1139 "itertoolsmodule.c"
        $0=0; //@line 1141 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1141 "itertoolsmodule.c"
      case 11: // $bb11
        if ($14) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1145 "itertoolsmodule.c"
      case 12: // $bb12
        var $22=HEAP[$a1]; //@line 1146 "itertoolsmodule.c"
        var $23=_PyInt_AsSsize_t($22); //@line 1146 "itertoolsmodule.c"
        $start=$23; //@line 1146 "itertoolsmodule.c"
        __lastLabel__ = 12; __label__ = 14; break; //@line 1146 "itertoolsmodule.c"
      case 13: // $bb13thread_pre_split
        var $_pr=$start;
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $bb13
        var $24=__lastLabel__ == 13 ? $_pr : ($23);
        var $25=($24)==-1; //@line 1147 "itertoolsmodule.c"
        if ($25) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1147 "itertoolsmodule.c"
      case 15: // $bb14
        var $26=_PyErr_Occurred(); //@line 1147 "itertoolsmodule.c"
        var $27=($26)!=0; //@line 1147 "itertoolsmodule.c"
        if ($27) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1147 "itertoolsmodule.c"
      case 16: // $bb15
        _PyErr_Clear(); //@line 1148 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1148 "itertoolsmodule.c"
      case 17: // $bb16
        var $28=HEAP[$a2]; //@line 1149 "itertoolsmodule.c"
        var $29=($28)!=(__Py_NoneStruct); //@line 1149 "itertoolsmodule.c"
        if ($29) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1149 "itertoolsmodule.c"
      case 18: // $bb17
        var $30=HEAP[$a2]; //@line 1150 "itertoolsmodule.c"
        var $31=_PyInt_AsSsize_t($30); //@line 1150 "itertoolsmodule.c"
        $stop=$31; //@line 1150 "itertoolsmodule.c"
        var $32=$stop; //@line 1151 "itertoolsmodule.c"
        var $33=($32)==-1; //@line 1151 "itertoolsmodule.c"
        if ($33) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 1151 "itertoolsmodule.c"
      case 19: // $bb18
        var $34=_PyErr_Occurred(); //@line 1152 "itertoolsmodule.c"
        var $35=($34)!=0; //@line 1152 "itertoolsmodule.c"
        if ($35) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1152 "itertoolsmodule.c"
      case 20: // $bb19
        _PyErr_Clear(); //@line 1153 "itertoolsmodule.c"
        __label__ = 21; break; //@line 1153 "itertoolsmodule.c"
      case 21: // $bb20
        var $36=HEAP[_PyExc_ValueError]; //@line 1154 "itertoolsmodule.c"
        _PyErr_SetString($36, __str27); //@line 1154 "itertoolsmodule.c"
        $0=0; //@line 1156 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1156 "itertoolsmodule.c"
      case 22: // $bb21
        var $37=$start; //@line 1160 "itertoolsmodule.c"
        var $38=($37) < 0; //@line 1160 "itertoolsmodule.c"
        if ($38) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 1160 "itertoolsmodule.c"
      case 23: // $bb22
        var $39=$stop; //@line 1160 "itertoolsmodule.c"
        var $40=($39) < -1; //@line 1160 "itertoolsmodule.c"
        if ($40) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1160 "itertoolsmodule.c"
      case 24: // $bb23
        var $41=HEAP[_PyExc_ValueError]; //@line 1161 "itertoolsmodule.c"
        _PyErr_SetString($41, __str28); //@line 1161 "itertoolsmodule.c"
        $0=0; //@line 1163 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1163 "itertoolsmodule.c"
      case 25: // $bb24
        var $42=HEAP[$a3]; //@line 1166 "itertoolsmodule.c"
        var $43=($42)!=0; //@line 1166 "itertoolsmodule.c"
        if ($43) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 1166 "itertoolsmodule.c"
      case 26: // $bb25
        var $44=HEAP[$a3]; //@line 1167 "itertoolsmodule.c"
        var $45=($44)!=(__Py_NoneStruct); //@line 1167 "itertoolsmodule.c"
        if ($45) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1167 "itertoolsmodule.c"
      case 27: // $bb26
        var $46=HEAP[$a3]; //@line 1168 "itertoolsmodule.c"
        var $47=_PyInt_AsSsize_t($46); //@line 1168 "itertoolsmodule.c"
        $step=$47; //@line 1168 "itertoolsmodule.c"
        __lastLabel__ = 27; __label__ = 29; break; //@line 1168 "itertoolsmodule.c"
      case 28: // $bb27thread_pre_split
        var $_pr1=$step;
        __lastLabel__ = 28; __label__ = 29; break;
      case 29: // $bb27
        var $48=__lastLabel__ == 28 ? $_pr1 : ($47);
        var $49=($48)==-1; //@line 1169 "itertoolsmodule.c"
        if ($49) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1169 "itertoolsmodule.c"
      case 30: // $bb28
        var $50=_PyErr_Occurred(); //@line 1169 "itertoolsmodule.c"
        var $51=($50)!=0; //@line 1169 "itertoolsmodule.c"
        if ($51) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1169 "itertoolsmodule.c"
      case 31: // $bb29
        _PyErr_Clear(); //@line 1170 "itertoolsmodule.c"
        __label__ = 32; break; //@line 1170 "itertoolsmodule.c"
      case 32: // $bb30
        var $52=$step; //@line 1172 "itertoolsmodule.c"
        var $53=($52) <= 0; //@line 1172 "itertoolsmodule.c"
        if ($53) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1172 "itertoolsmodule.c"
      case 33: // $bb31
        var $54=HEAP[_PyExc_ValueError]; //@line 1173 "itertoolsmodule.c"
        _PyErr_SetString($54, __str29); //@line 1173 "itertoolsmodule.c"
        $0=0; //@line 1175 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1175 "itertoolsmodule.c"
      case 34: // $bb32
        var $55=HEAP[$seq]; //@line 1179 "itertoolsmodule.c"
        var $56=_PyObject_GetIter($55); //@line 1179 "itertoolsmodule.c"
        $it=$56; //@line 1179 "itertoolsmodule.c"
        var $57=$it; //@line 1180 "itertoolsmodule.c"
        var $58=($57)==0; //@line 1180 "itertoolsmodule.c"
        if ($58) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1180 "itertoolsmodule.c"
      case 35: // $bb33
        $0=0; //@line 1181 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1181 "itertoolsmodule.c"
      case 36: // $bb34
        var $59=$type_addr; //@line 1184 "itertoolsmodule.c"
        var $60=$59+152; //@line 1184 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 1184 "itertoolsmodule.c"
        var $62=$type_addr; //@line 1184 "itertoolsmodule.c"
        var $63=FUNCTION_TABLE[$61]($62, 0); //@line 1184 "itertoolsmodule.c"
        var $64=$63; //@line 1184 "itertoolsmodule.c"
        $lz=$64; //@line 1184 "itertoolsmodule.c"
        var $65=$lz; //@line 1185 "itertoolsmodule.c"
        var $66=($65)==0; //@line 1185 "itertoolsmodule.c"
        if ($66) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 1185 "itertoolsmodule.c"
      case 37: // $bb35
        var $67=$it; //@line 1186 "itertoolsmodule.c"
        var $68=$67; //@line 1186 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 1186 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 1186 "itertoolsmodule.c"
        var $71=$it; //@line 1186 "itertoolsmodule.c"
        var $72=$71; //@line 1186 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 1186 "itertoolsmodule.c"
        var $73=$it; //@line 1186 "itertoolsmodule.c"
        var $74=$73; //@line 1186 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 1186 "itertoolsmodule.c"
        var $76=($75)==0; //@line 1186 "itertoolsmodule.c"
        if ($76) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1186 "itertoolsmodule.c"
      case 38: // $bb36
        var $77=$it; //@line 1186 "itertoolsmodule.c"
        var $78=$77+4; //@line 1186 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 1186 "itertoolsmodule.c"
        var $80=$79+24; //@line 1186 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 1186 "itertoolsmodule.c"
        var $82=$it; //@line 1186 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 1186 "itertoolsmodule.c"
        __label__ = 39; break; //@line 1186 "itertoolsmodule.c"
      case 39: // $bb37
        $0=0; //@line 1187 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1187 "itertoolsmodule.c"
      case 40: // $bb38
        var $83=$lz; //@line 1189 "itertoolsmodule.c"
        var $84=$83+8; //@line 1189 "itertoolsmodule.c"
        var $85=$it; //@line 1189 "itertoolsmodule.c"
        HEAP[$84]=$85; //@line 1189 "itertoolsmodule.c"
        var $86=$lz; //@line 1190 "itertoolsmodule.c"
        var $87=$86+12; //@line 1190 "itertoolsmodule.c"
        var $88=$start; //@line 1190 "itertoolsmodule.c"
        HEAP[$87]=$88; //@line 1190 "itertoolsmodule.c"
        var $89=$lz; //@line 1191 "itertoolsmodule.c"
        var $90=$89+16; //@line 1191 "itertoolsmodule.c"
        var $91=$stop; //@line 1191 "itertoolsmodule.c"
        HEAP[$90]=$91; //@line 1191 "itertoolsmodule.c"
        var $92=$lz; //@line 1192 "itertoolsmodule.c"
        var $93=$92+20; //@line 1192 "itertoolsmodule.c"
        var $94=$step; //@line 1192 "itertoolsmodule.c"
        HEAP[$93]=$94; //@line 1192 "itertoolsmodule.c"
        var $95=$lz; //@line 1193 "itertoolsmodule.c"
        var $96=$95+24; //@line 1193 "itertoolsmodule.c"
        HEAP[$96]=0; //@line 1193 "itertoolsmodule.c"
        var $97=$lz; //@line 1195 "itertoolsmodule.c"
        var $98=$97; //@line 1195 "itertoolsmodule.c"
        $0=$98; //@line 1195 "itertoolsmodule.c"
        __label__ = 41; break; //@line 1195 "itertoolsmodule.c"
      case 41: // $bb39
        var $99=$0; //@line 1127 "itertoolsmodule.c"
        $retval=$99; //@line 1127 "itertoolsmodule.c"
        var $retval40=$retval; //@line 1127 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval40; //@line 1127 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _islice_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1201 "itertoolsmodule.c"
        var $1=$0; //@line 1201 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1201 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1202 "itertoolsmodule.c"
        var $3=$2+8; //@line 1202 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1202 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1202 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1202 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1202 "itertoolsmodule.c"
        var $7=$6+8; //@line 1202 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1202 "itertoolsmodule.c"
        var $9=$8; //@line 1202 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1202 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1202 "itertoolsmodule.c"
        var $12=$8; //@line 1202 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1202 "itertoolsmodule.c"
        var $13=$8; //@line 1202 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1202 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1202 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1202 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1202 "itertoolsmodule.c"
        var $17=$16+8; //@line 1202 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1202 "itertoolsmodule.c"
        var $19=$18+4; //@line 1202 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1202 "itertoolsmodule.c"
        var $21=$20+24; //@line 1202 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1202 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1202 "itertoolsmodule.c"
        var $24=$23+8; //@line 1202 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1202 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1202 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1202 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1203 "itertoolsmodule.c"
        var $27=$26; //@line 1203 "itertoolsmodule.c"
        var $28=$27+4; //@line 1203 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 1203 "itertoolsmodule.c"
        var $30=$29+160; //@line 1203 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 1203 "itertoolsmodule.c"
        var $32=$lz_addr; //@line 1203 "itertoolsmodule.c"
        var $33=$32; //@line 1203 "itertoolsmodule.c"
        FUNCTION_TABLE[$31]($33); //@line 1203 "itertoolsmodule.c"
        ;
        return; //@line 1204 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _islice_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1209 "itertoolsmodule.c"
        var $2=$1+8; //@line 1209 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1209 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1209 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1209 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1209 "itertoolsmodule.c"
        var $6=$5+8; //@line 1209 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1209 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1209 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1209 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1209 "itertoolsmodule.c"
        $vret=$10; //@line 1209 "itertoolsmodule.c"
        var $11=$vret; //@line 1209 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1209 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1209 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1209 "itertoolsmodule.c"
        $0=$13; //@line 1209 "itertoolsmodule.c"
        __label__ = 4; break; //@line 1209 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 1210 "itertoolsmodule.c"
        __label__ = 4; break; //@line 1210 "itertoolsmodule.c"
      case 4: // $bb3
        var $14=$0; //@line 1209 "itertoolsmodule.c"
        $retval=$14; //@line 1209 "itertoolsmodule.c"
        var $retval4=$retval; //@line 1209 "itertoolsmodule.c"
        ;
        return $retval4; //@line 1209 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _islice_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $it;
        var $stop;
        var $oldnext;
        var $iternext;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1217 "itertoolsmodule.c"
        var $2=$1+8; //@line 1217 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1217 "itertoolsmodule.c"
        $it=$3; //@line 1217 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 1218 "itertoolsmodule.c"
        var $5=$4+16; //@line 1218 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 1218 "itertoolsmodule.c"
        $stop=$6; //@line 1218 "itertoolsmodule.c"
        var $7=$it; //@line 1222 "itertoolsmodule.c"
        var $8=$7+4; //@line 1222 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 1222 "itertoolsmodule.c"
        var $10=$9+112; //@line 1222 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 1222 "itertoolsmodule.c"
        $iternext=$11; //@line 1222 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1222 "itertoolsmodule.c"
      case 1: // $bb
        var $12=$iternext; //@line 1224 "itertoolsmodule.c"
        var $13=$it; //@line 1224 "itertoolsmodule.c"
        var $14=FUNCTION_TABLE[$12]($13); //@line 1224 "itertoolsmodule.c"
        $item=$14; //@line 1224 "itertoolsmodule.c"
        var $15=$item; //@line 1225 "itertoolsmodule.c"
        var $16=($15)==0; //@line 1225 "itertoolsmodule.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1225 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1226 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1226 "itertoolsmodule.c"
      case 3: // $bb2
        var $17=$item; //@line 1227 "itertoolsmodule.c"
        var $18=$17; //@line 1227 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 1227 "itertoolsmodule.c"
        var $20=($19) - 1; //@line 1227 "itertoolsmodule.c"
        var $21=$item; //@line 1227 "itertoolsmodule.c"
        var $22=$21; //@line 1227 "itertoolsmodule.c"
        HEAP[$22]=$20; //@line 1227 "itertoolsmodule.c"
        var $23=$item; //@line 1227 "itertoolsmodule.c"
        var $24=$23; //@line 1227 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1227 "itertoolsmodule.c"
        var $26=($25)==0; //@line 1227 "itertoolsmodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1227 "itertoolsmodule.c"
      case 4: // $bb3
        var $27=$item; //@line 1227 "itertoolsmodule.c"
        var $28=$27+4; //@line 1227 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 1227 "itertoolsmodule.c"
        var $30=$29+24; //@line 1227 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 1227 "itertoolsmodule.c"
        var $32=$item; //@line 1227 "itertoolsmodule.c"
        FUNCTION_TABLE[$31]($32); //@line 1227 "itertoolsmodule.c"
        __label__ = 5; break; //@line 1227 "itertoolsmodule.c"
      case 5: // $bb4
        var $33=$lz_addr; //@line 1228 "itertoolsmodule.c"
        var $34=$33+24; //@line 1228 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 1228 "itertoolsmodule.c"
        var $36=($35) + 1; //@line 1228 "itertoolsmodule.c"
        var $37=$lz_addr; //@line 1228 "itertoolsmodule.c"
        var $38=$37+24; //@line 1228 "itertoolsmodule.c"
        HEAP[$38]=$36; //@line 1228 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1228 "itertoolsmodule.c"
      case 6: // $bb5
        var $39=$lz_addr; //@line 1223 "itertoolsmodule.c"
        var $40=$39+24; //@line 1223 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 1223 "itertoolsmodule.c"
        var $42=$lz_addr; //@line 1223 "itertoolsmodule.c"
        var $43=$42+12; //@line 1223 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1223 "itertoolsmodule.c"
        var $45=($41) < ($44); //@line 1223 "itertoolsmodule.c"
        if ($45) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 1223 "itertoolsmodule.c"
      case 7: // $bb6
        var $46=$stop; //@line 1230 "itertoolsmodule.c"
        var $47=($46)!=-1; //@line 1230 "itertoolsmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1230 "itertoolsmodule.c"
      case 8: // $bb7
        var $48=$lz_addr; //@line 1230 "itertoolsmodule.c"
        var $49=$48+24; //@line 1230 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 1230 "itertoolsmodule.c"
        var $51=$stop; //@line 1230 "itertoolsmodule.c"
        var $52=($50) >= ($51); //@line 1230 "itertoolsmodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1230 "itertoolsmodule.c"
      case 9: // $bb8
        $0=0; //@line 1231 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1231 "itertoolsmodule.c"
      case 10: // $bb9
        var $53=$iternext; //@line 1232 "itertoolsmodule.c"
        var $54=$it; //@line 1232 "itertoolsmodule.c"
        var $55=FUNCTION_TABLE[$53]($54); //@line 1232 "itertoolsmodule.c"
        $item=$55; //@line 1232 "itertoolsmodule.c"
        var $56=($55)==0; //@line 1233 "itertoolsmodule.c"
        if ($56) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1233 "itertoolsmodule.c"
      case 11: // $bb10
        $0=0; //@line 1234 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1234 "itertoolsmodule.c"
      case 12: // $bb11
        var $57=$lz_addr; //@line 1235 "itertoolsmodule.c"
        var $58=$57+24; //@line 1235 "itertoolsmodule.c"
        var $59=HEAP[$58]; //@line 1235 "itertoolsmodule.c"
        var $60=($59) + 1; //@line 1235 "itertoolsmodule.c"
        var $61=$lz_addr; //@line 1235 "itertoolsmodule.c"
        var $62=$61+24; //@line 1235 "itertoolsmodule.c"
        HEAP[$62]=$60; //@line 1235 "itertoolsmodule.c"
        var $63=$lz_addr; //@line 1236 "itertoolsmodule.c"
        var $64=$63+12; //@line 1236 "itertoolsmodule.c"
        var $65=HEAP[$64]; //@line 1236 "itertoolsmodule.c"
        $oldnext=$65; //@line 1236 "itertoolsmodule.c"
        var $66=$lz_addr; //@line 1237 "itertoolsmodule.c"
        var $67=$66+12; //@line 1237 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 1237 "itertoolsmodule.c"
        var $69=$lz_addr; //@line 1237 "itertoolsmodule.c"
        var $70=$69+20; //@line 1237 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 1237 "itertoolsmodule.c"
        var $72=($71) + ($68); //@line 1237 "itertoolsmodule.c"
        var $73=$lz_addr; //@line 1237 "itertoolsmodule.c"
        var $74=$73+12; //@line 1237 "itertoolsmodule.c"
        HEAP[$74]=$72; //@line 1237 "itertoolsmodule.c"
        var $75=$lz_addr; //@line 1238 "itertoolsmodule.c"
        var $76=$75+12; //@line 1238 "itertoolsmodule.c"
        var $77=HEAP[$76]; //@line 1238 "itertoolsmodule.c"
        var $78=$oldnext; //@line 1238 "itertoolsmodule.c"
        var $79=($77) < ($78); //@line 1238 "itertoolsmodule.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 1238 "itertoolsmodule.c"
      case 13: // $bb12
        var $80=$stop; //@line 1238 "itertoolsmodule.c"
        var $81=($80)==-1; //@line 1238 "itertoolsmodule.c"
        if ($81) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1238 "itertoolsmodule.c"
      case 14: // $bb13
        var $82=$lz_addr; //@line 1238 "itertoolsmodule.c"
        var $83=$82+12; //@line 1238 "itertoolsmodule.c"
        var $84=HEAP[$83]; //@line 1238 "itertoolsmodule.c"
        var $85=$stop; //@line 1238 "itertoolsmodule.c"
        var $86=($84) > ($85); //@line 1238 "itertoolsmodule.c"
        if ($86) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1238 "itertoolsmodule.c"
      case 15: // $bb14
        var $87=$lz_addr; //@line 1239 "itertoolsmodule.c"
        var $88=$87+12; //@line 1239 "itertoolsmodule.c"
        var $89=$stop; //@line 1239 "itertoolsmodule.c"
        HEAP[$88]=$89; //@line 1239 "itertoolsmodule.c"
        __label__ = 16; break; //@line 1239 "itertoolsmodule.c"
      case 16: // $bb15
        var $90=$item; //@line 1240 "itertoolsmodule.c"
        $0=$90; //@line 1240 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1240 "itertoolsmodule.c"
      case 17: // $bb16
        var $91=$0; //@line 1226 "itertoolsmodule.c"
        $retval=$91; //@line 1226 "itertoolsmodule.c"
        var $retval17=$retval; //@line 1226 "itertoolsmodule.c"
        ;
        return $retval17; //@line 1226 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _starmap_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $func=__stackBase__;
        var $seq=__stackBase__+4;
        var $it;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1315 "itertoolsmodule.c"
        var $2=($1)==(_starmap_type); //@line 1315 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1315 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 1315 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str31, $3); //@line 1315 "itertoolsmodule.c"
        var $5=($4)==0; //@line 1315 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1315 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1316 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1316 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 1318 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str32, 2, 2, allocate([$func,0,0,0,$seq,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1318 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1318 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1318 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 1319 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1319 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$seq]; //@line 1322 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 1322 "itertoolsmodule.c"
        $it=$10; //@line 1322 "itertoolsmodule.c"
        var $11=$it; //@line 1323 "itertoolsmodule.c"
        var $12=($11)==0; //@line 1323 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1323 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 1324 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1324 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$type_addr; //@line 1327 "itertoolsmodule.c"
        var $14=$13+152; //@line 1327 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 1327 "itertoolsmodule.c"
        var $16=$type_addr; //@line 1327 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 1327 "itertoolsmodule.c"
        var $18=$17; //@line 1327 "itertoolsmodule.c"
        $lz=$18; //@line 1327 "itertoolsmodule.c"
        var $19=$lz; //@line 1328 "itertoolsmodule.c"
        var $20=($19)==0; //@line 1328 "itertoolsmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1328 "itertoolsmodule.c"
      case 8: // $bb7
        var $21=$it; //@line 1329 "itertoolsmodule.c"
        var $22=$21; //@line 1329 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 1329 "itertoolsmodule.c"
        var $24=($23) - 1; //@line 1329 "itertoolsmodule.c"
        var $25=$it; //@line 1329 "itertoolsmodule.c"
        var $26=$25; //@line 1329 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 1329 "itertoolsmodule.c"
        var $27=$it; //@line 1329 "itertoolsmodule.c"
        var $28=$27; //@line 1329 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 1329 "itertoolsmodule.c"
        var $30=($29)==0; //@line 1329 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1329 "itertoolsmodule.c"
      case 9: // $bb8
        var $31=$it; //@line 1329 "itertoolsmodule.c"
        var $32=$31+4; //@line 1329 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 1329 "itertoolsmodule.c"
        var $34=$33+24; //@line 1329 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 1329 "itertoolsmodule.c"
        var $36=$it; //@line 1329 "itertoolsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 1329 "itertoolsmodule.c"
        __label__ = 10; break; //@line 1329 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 1330 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1330 "itertoolsmodule.c"
      case 11: // $bb10
        var $37=HEAP[$func]; //@line 1332 "itertoolsmodule.c"
        var $38=$37; //@line 1332 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 1332 "itertoolsmodule.c"
        var $40=($39) + 1; //@line 1332 "itertoolsmodule.c"
        var $41=$37; //@line 1332 "itertoolsmodule.c"
        HEAP[$41]=$40; //@line 1332 "itertoolsmodule.c"
        var $42=HEAP[$func]; //@line 1333 "itertoolsmodule.c"
        var $43=$lz; //@line 1333 "itertoolsmodule.c"
        var $44=$43+8; //@line 1333 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 1333 "itertoolsmodule.c"
        var $45=$lz; //@line 1334 "itertoolsmodule.c"
        var $46=$45+12; //@line 1334 "itertoolsmodule.c"
        var $47=$it; //@line 1334 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 1334 "itertoolsmodule.c"
        var $48=$lz; //@line 1336 "itertoolsmodule.c"
        var $49=$48; //@line 1336 "itertoolsmodule.c"
        $0=$49; //@line 1336 "itertoolsmodule.c"
        __label__ = 12; break; //@line 1336 "itertoolsmodule.c"
      case 12: // $bb11
        var $50=$0; //@line 1316 "itertoolsmodule.c"
        $retval=$50; //@line 1316 "itertoolsmodule.c"
        var $retval12=$retval; //@line 1316 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1316 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _starmap_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1342 "itertoolsmodule.c"
        var $1=$0; //@line 1342 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1342 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1343 "itertoolsmodule.c"
        var $3=$2+8; //@line 1343 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1343 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1343 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1343 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1343 "itertoolsmodule.c"
        var $7=$6+8; //@line 1343 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1343 "itertoolsmodule.c"
        var $9=$8; //@line 1343 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1343 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1343 "itertoolsmodule.c"
        var $12=$8; //@line 1343 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1343 "itertoolsmodule.c"
        var $13=$8; //@line 1343 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1343 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1343 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1343 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1343 "itertoolsmodule.c"
        var $17=$16+8; //@line 1343 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1343 "itertoolsmodule.c"
        var $19=$18+4; //@line 1343 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1343 "itertoolsmodule.c"
        var $21=$20+24; //@line 1343 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1343 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1343 "itertoolsmodule.c"
        var $24=$23+8; //@line 1343 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1343 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1343 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1343 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1344 "itertoolsmodule.c"
        var $27=$26+12; //@line 1344 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 1344 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 1344 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1344 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 1344 "itertoolsmodule.c"
        var $31=$30+12; //@line 1344 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1344 "itertoolsmodule.c"
        var $33=$32; //@line 1344 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 1344 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 1344 "itertoolsmodule.c"
        var $36=$32; //@line 1344 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 1344 "itertoolsmodule.c"
        var $37=$32; //@line 1344 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1344 "itertoolsmodule.c"
        var $39=($38)==0; //@line 1344 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1344 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 1344 "itertoolsmodule.c"
        var $41=$40+12; //@line 1344 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1344 "itertoolsmodule.c"
        var $43=$42+4; //@line 1344 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1344 "itertoolsmodule.c"
        var $45=$44+24; //@line 1344 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1344 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 1344 "itertoolsmodule.c"
        var $48=$47+12; //@line 1344 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1344 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 1344 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1344 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 1345 "itertoolsmodule.c"
        var $51=$50; //@line 1345 "itertoolsmodule.c"
        var $52=$51+4; //@line 1345 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 1345 "itertoolsmodule.c"
        var $54=$53+160; //@line 1345 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 1345 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 1345 "itertoolsmodule.c"
        var $57=$56; //@line 1345 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 1345 "itertoolsmodule.c"
        ;
        return; //@line 1346 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _starmap_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1351 "itertoolsmodule.c"
        var $2=$1+12; //@line 1351 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1351 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1351 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1351 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1351 "itertoolsmodule.c"
        var $6=$5+12; //@line 1351 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1351 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1351 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1351 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1351 "itertoolsmodule.c"
        $vret=$10; //@line 1351 "itertoolsmodule.c"
        var $11=$vret; //@line 1351 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1351 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1351 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1351 "itertoolsmodule.c"
        $0=$13; //@line 1351 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1351 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 1352 "itertoolsmodule.c"
        var $15=$14+8; //@line 1352 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 1352 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 1352 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1352 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 1352 "itertoolsmodule.c"
        var $19=$18+8; //@line 1352 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1352 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 1352 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 1352 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 1352 "itertoolsmodule.c"
        $vret4=$23; //@line 1352 "itertoolsmodule.c"
        var $24=$vret4; //@line 1352 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 1352 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1352 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 1352 "itertoolsmodule.c"
        $0=$26; //@line 1352 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1352 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1353 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1353 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 1351 "itertoolsmodule.c"
        $retval=$27; //@line 1351 "itertoolsmodule.c"
        var $retval8=$retval; //@line 1351 "itertoolsmodule.c"
        ;
        return $retval8; //@line 1351 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _starmap_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $args;
        var $result;
        var $it;
        var $newargs;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1361 "itertoolsmodule.c"
        var $2=$1+12; //@line 1361 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1361 "itertoolsmodule.c"
        $it=$3; //@line 1361 "itertoolsmodule.c"
        var $4=$it; //@line 1363 "itertoolsmodule.c"
        var $5=$4+4; //@line 1363 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 1363 "itertoolsmodule.c"
        var $7=$6+112; //@line 1363 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1363 "itertoolsmodule.c"
        var $9=$it; //@line 1363 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($9); //@line 1363 "itertoolsmodule.c"
        $args=$10; //@line 1363 "itertoolsmodule.c"
        var $11=$args; //@line 1364 "itertoolsmodule.c"
        var $12=($11)==0; //@line 1364 "itertoolsmodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1364 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1365 "itertoolsmodule.c"
        __label__ = 11; break; //@line 1365 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$args; //@line 1366 "itertoolsmodule.c"
        var $14=$13+4; //@line 1366 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 1366 "itertoolsmodule.c"
        var $16=($15)!=(_PyTuple_Type); //@line 1366 "itertoolsmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1366 "itertoolsmodule.c"
      case 3: // $bb2
        var $17=$args; //@line 1367 "itertoolsmodule.c"
        var $18=_PySequence_Tuple($17); //@line 1367 "itertoolsmodule.c"
        $newargs=$18; //@line 1367 "itertoolsmodule.c"
        var $19=$args; //@line 1368 "itertoolsmodule.c"
        var $20=$19; //@line 1368 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 1368 "itertoolsmodule.c"
        var $22=($21) - 1; //@line 1368 "itertoolsmodule.c"
        var $23=$args; //@line 1368 "itertoolsmodule.c"
        var $24=$23; //@line 1368 "itertoolsmodule.c"
        HEAP[$24]=$22; //@line 1368 "itertoolsmodule.c"
        var $25=$args; //@line 1368 "itertoolsmodule.c"
        var $26=$25; //@line 1368 "itertoolsmodule.c"
        var $27=HEAP[$26]; //@line 1368 "itertoolsmodule.c"
        var $28=($27)==0; //@line 1368 "itertoolsmodule.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1368 "itertoolsmodule.c"
      case 4: // $bb3
        var $29=$args; //@line 1368 "itertoolsmodule.c"
        var $30=$29+4; //@line 1368 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 1368 "itertoolsmodule.c"
        var $32=$31+24; //@line 1368 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 1368 "itertoolsmodule.c"
        var $34=$args; //@line 1368 "itertoolsmodule.c"
        FUNCTION_TABLE[$33]($34); //@line 1368 "itertoolsmodule.c"
        __label__ = 5; break; //@line 1368 "itertoolsmodule.c"
      case 5: // $bb4
        var $35=$newargs; //@line 1369 "itertoolsmodule.c"
        var $36=($35)==0; //@line 1369 "itertoolsmodule.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1369 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 1370 "itertoolsmodule.c"
        __label__ = 11; break; //@line 1370 "itertoolsmodule.c"
      case 7: // $bb6
        var $37=$newargs; //@line 1371 "itertoolsmodule.c"
        $args=$37; //@line 1371 "itertoolsmodule.c"
        __label__ = 8; break; //@line 1371 "itertoolsmodule.c"
      case 8: // $bb7
        var $38=$lz_addr; //@line 1373 "itertoolsmodule.c"
        var $39=$38+8; //@line 1373 "itertoolsmodule.c"
        var $40=HEAP[$39]; //@line 1373 "itertoolsmodule.c"
        var $41=$args; //@line 1373 "itertoolsmodule.c"
        var $42=_PyObject_Call($40, $41, 0); //@line 1373 "itertoolsmodule.c"
        $result=$42; //@line 1373 "itertoolsmodule.c"
        var $43=$args; //@line 1374 "itertoolsmodule.c"
        var $44=$43; //@line 1374 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 1374 "itertoolsmodule.c"
        var $46=($45) - 1; //@line 1374 "itertoolsmodule.c"
        var $47=$args; //@line 1374 "itertoolsmodule.c"
        var $48=$47; //@line 1374 "itertoolsmodule.c"
        HEAP[$48]=$46; //@line 1374 "itertoolsmodule.c"
        var $49=$args; //@line 1374 "itertoolsmodule.c"
        var $50=$49; //@line 1374 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 1374 "itertoolsmodule.c"
        var $52=($51)==0; //@line 1374 "itertoolsmodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1374 "itertoolsmodule.c"
      case 9: // $bb8
        var $53=$args; //@line 1374 "itertoolsmodule.c"
        var $54=$53+4; //@line 1374 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 1374 "itertoolsmodule.c"
        var $56=$55+24; //@line 1374 "itertoolsmodule.c"
        var $57=HEAP[$56]; //@line 1374 "itertoolsmodule.c"
        var $58=$args; //@line 1374 "itertoolsmodule.c"
        FUNCTION_TABLE[$57]($58); //@line 1374 "itertoolsmodule.c"
        __label__ = 10; break; //@line 1374 "itertoolsmodule.c"
      case 10: // $bb9
        var $59=$result; //@line 1375 "itertoolsmodule.c"
        $0=$59; //@line 1375 "itertoolsmodule.c"
        __label__ = 11; break; //@line 1375 "itertoolsmodule.c"
      case 11: // $bb10
        var $60=$0; //@line 1365 "itertoolsmodule.c"
        $retval=$60; //@line 1365 "itertoolsmodule.c"
        var $retval11=$retval; //@line 1365 "itertoolsmodule.c"
        ;
        return $retval11; //@line 1365 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imap_new($type, $args, $kwds) {
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
        var $it;
        var $iters;
        var $func;
        var $lz;
        var $numargs;
        var $i;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1446 "itertoolsmodule.c"
        var $2=($1)==(_imap_type); //@line 1446 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1446 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 1446 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str34, $3); //@line 1446 "itertoolsmodule.c"
        var $5=($4)==0; //@line 1446 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1446 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1447 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1447 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 1449 "itertoolsmodule.c"
        var $7=_PyTuple_Size($6); //@line 1449 "itertoolsmodule.c"
        $numargs=$7; //@line 1449 "itertoolsmodule.c"
        var $8=($7) <= 1; //@line 1450 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1450 "itertoolsmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_TypeError]; //@line 1451 "itertoolsmodule.c"
        _PyErr_SetString($9, __str35); //@line 1451 "itertoolsmodule.c"
        $0=0; //@line 1453 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1453 "itertoolsmodule.c"
      case 5: // $bb4
        var $10=$numargs; //@line 1456 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1456 "itertoolsmodule.c"
        var $12=_PyTuple_New($11); //@line 1456 "itertoolsmodule.c"
        $iters=$12; //@line 1456 "itertoolsmodule.c"
        var $13=$iters; //@line 1457 "itertoolsmodule.c"
        var $14=($13)==0; //@line 1457 "itertoolsmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1457 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 1458 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1458 "itertoolsmodule.c"
      case 7: // $bb6
        $i=1; //@line 1460 "itertoolsmodule.c"
        __label__ = 13; break; //@line 1460 "itertoolsmodule.c"
      case 8: // $bb7
        var $15=$args_addr; //@line 1462 "itertoolsmodule.c"
        var $16=$15; //@line 1462 "itertoolsmodule.c"
        var $17=$i; //@line 1462 "itertoolsmodule.c"
        var $18=$16+12; //@line 1462 "itertoolsmodule.c"
        var $19=$18+$17*4; //@line 1462 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1462 "itertoolsmodule.c"
        var $21=_PyObject_GetIter($20); //@line 1462 "itertoolsmodule.c"
        $it=$21; //@line 1462 "itertoolsmodule.c"
        var $22=$it; //@line 1463 "itertoolsmodule.c"
        var $23=($22)==0; //@line 1463 "itertoolsmodule.c"
        var $24=$iters; //@line 1464 "itertoolsmodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1463 "itertoolsmodule.c"
      case 9: // $bb8
        var $25=$24; //@line 1464 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 1464 "itertoolsmodule.c"
        var $27=($26) - 1; //@line 1464 "itertoolsmodule.c"
        var $28=$iters; //@line 1464 "itertoolsmodule.c"
        var $29=$28; //@line 1464 "itertoolsmodule.c"
        HEAP[$29]=$27; //@line 1464 "itertoolsmodule.c"
        var $30=$iters; //@line 1464 "itertoolsmodule.c"
        var $31=$30; //@line 1464 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1464 "itertoolsmodule.c"
        var $33=($32)==0; //@line 1464 "itertoolsmodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1464 "itertoolsmodule.c"
      case 10: // $bb9
        var $34=$iters; //@line 1464 "itertoolsmodule.c"
        var $35=$34+4; //@line 1464 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 1464 "itertoolsmodule.c"
        var $37=$36+24; //@line 1464 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1464 "itertoolsmodule.c"
        var $39=$iters; //@line 1464 "itertoolsmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 1464 "itertoolsmodule.c"
        __label__ = 11; break; //@line 1464 "itertoolsmodule.c"
      case 11: // $bb10
        $0=0; //@line 1465 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1465 "itertoolsmodule.c"
      case 12: // $bb11
        var $40=$24; //@line 1467 "itertoolsmodule.c"
        var $41=$i; //@line 1467 "itertoolsmodule.c"
        var $42=($41) - 1; //@line 1467 "itertoolsmodule.c"
        var $43=$40+12; //@line 1467 "itertoolsmodule.c"
        var $44=$43+$42*4; //@line 1467 "itertoolsmodule.c"
        var $45=$it; //@line 1467 "itertoolsmodule.c"
        HEAP[$44]=$45; //@line 1467 "itertoolsmodule.c"
        var $46=$i; //@line 1460 "itertoolsmodule.c"
        var $47=($46) + 1; //@line 1460 "itertoolsmodule.c"
        $i=$47; //@line 1460 "itertoolsmodule.c"
        __label__ = 13; break; //@line 1460 "itertoolsmodule.c"
      case 13: // $bb12
        var $48=$i; //@line 1460 "itertoolsmodule.c"
        var $49=$numargs; //@line 1460 "itertoolsmodule.c"
        var $50=($48) < ($49); //@line 1460 "itertoolsmodule.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 1460 "itertoolsmodule.c"
      case 14: // $bb13
        var $51=$type_addr; //@line 1471 "itertoolsmodule.c"
        var $52=$51+152; //@line 1471 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 1471 "itertoolsmodule.c"
        var $54=$type_addr; //@line 1471 "itertoolsmodule.c"
        var $55=FUNCTION_TABLE[$53]($54, 0); //@line 1471 "itertoolsmodule.c"
        var $56=$55; //@line 1471 "itertoolsmodule.c"
        $lz=$56; //@line 1471 "itertoolsmodule.c"
        var $57=$lz; //@line 1472 "itertoolsmodule.c"
        var $58=($57)==0; //@line 1472 "itertoolsmodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1472 "itertoolsmodule.c"
      case 15: // $bb14
        var $59=$iters; //@line 1473 "itertoolsmodule.c"
        var $60=$59; //@line 1473 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 1473 "itertoolsmodule.c"
        var $62=($61) - 1; //@line 1473 "itertoolsmodule.c"
        var $63=$iters; //@line 1473 "itertoolsmodule.c"
        var $64=$63; //@line 1473 "itertoolsmodule.c"
        HEAP[$64]=$62; //@line 1473 "itertoolsmodule.c"
        var $65=$iters; //@line 1473 "itertoolsmodule.c"
        var $66=$65; //@line 1473 "itertoolsmodule.c"
        var $67=HEAP[$66]; //@line 1473 "itertoolsmodule.c"
        var $68=($67)==0; //@line 1473 "itertoolsmodule.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1473 "itertoolsmodule.c"
      case 16: // $bb15
        var $69=$iters; //@line 1473 "itertoolsmodule.c"
        var $70=$69+4; //@line 1473 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 1473 "itertoolsmodule.c"
        var $72=$71+24; //@line 1473 "itertoolsmodule.c"
        var $73=HEAP[$72]; //@line 1473 "itertoolsmodule.c"
        var $74=$iters; //@line 1473 "itertoolsmodule.c"
        FUNCTION_TABLE[$73]($74); //@line 1473 "itertoolsmodule.c"
        __label__ = 17; break; //@line 1473 "itertoolsmodule.c"
      case 17: // $bb16
        $0=0; //@line 1474 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1474 "itertoolsmodule.c"
      case 18: // $bb17
        var $75=$lz; //@line 1476 "itertoolsmodule.c"
        var $76=$75+8; //@line 1476 "itertoolsmodule.c"
        var $77=$iters; //@line 1476 "itertoolsmodule.c"
        HEAP[$76]=$77; //@line 1476 "itertoolsmodule.c"
        var $78=$args_addr; //@line 1477 "itertoolsmodule.c"
        var $79=$78; //@line 1477 "itertoolsmodule.c"
        var $80=$79+12; //@line 1477 "itertoolsmodule.c"
        var $81=$80; //@line 1477 "itertoolsmodule.c"
        var $82=HEAP[$81]; //@line 1477 "itertoolsmodule.c"
        $func=$82; //@line 1477 "itertoolsmodule.c"
        var $83=$func; //@line 1478 "itertoolsmodule.c"
        var $84=$83; //@line 1478 "itertoolsmodule.c"
        var $85=HEAP[$84]; //@line 1478 "itertoolsmodule.c"
        var $86=($85) + 1; //@line 1478 "itertoolsmodule.c"
        var $87=$func; //@line 1478 "itertoolsmodule.c"
        var $88=$87; //@line 1478 "itertoolsmodule.c"
        HEAP[$88]=$86; //@line 1478 "itertoolsmodule.c"
        var $89=$lz; //@line 1479 "itertoolsmodule.c"
        var $90=$89+12; //@line 1479 "itertoolsmodule.c"
        var $91=$func; //@line 1479 "itertoolsmodule.c"
        HEAP[$90]=$91; //@line 1479 "itertoolsmodule.c"
        var $92=$lz; //@line 1481 "itertoolsmodule.c"
        var $93=$92; //@line 1481 "itertoolsmodule.c"
        $0=$93; //@line 1481 "itertoolsmodule.c"
        __label__ = 19; break; //@line 1481 "itertoolsmodule.c"
      case 19: // $bb18
        var $94=$0; //@line 1447 "itertoolsmodule.c"
        $retval=$94; //@line 1447 "itertoolsmodule.c"
        var $retval19=$retval; //@line 1447 "itertoolsmodule.c"
        ;
        return $retval19; //@line 1447 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imap_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1487 "itertoolsmodule.c"
        var $1=$0; //@line 1487 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1487 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1488 "itertoolsmodule.c"
        var $3=$2+8; //@line 1488 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1488 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1488 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1488 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1488 "itertoolsmodule.c"
        var $7=$6+8; //@line 1488 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1488 "itertoolsmodule.c"
        var $9=$8; //@line 1488 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1488 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1488 "itertoolsmodule.c"
        var $12=$8; //@line 1488 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1488 "itertoolsmodule.c"
        var $13=$8; //@line 1488 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1488 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1488 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1488 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1488 "itertoolsmodule.c"
        var $17=$16+8; //@line 1488 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1488 "itertoolsmodule.c"
        var $19=$18+4; //@line 1488 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1488 "itertoolsmodule.c"
        var $21=$20+24; //@line 1488 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1488 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1488 "itertoolsmodule.c"
        var $24=$23+8; //@line 1488 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1488 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1488 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1488 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1489 "itertoolsmodule.c"
        var $27=$26+12; //@line 1489 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 1489 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 1489 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1489 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 1489 "itertoolsmodule.c"
        var $31=$30+12; //@line 1489 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1489 "itertoolsmodule.c"
        var $33=$32; //@line 1489 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 1489 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 1489 "itertoolsmodule.c"
        var $36=$32; //@line 1489 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 1489 "itertoolsmodule.c"
        var $37=$32; //@line 1489 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1489 "itertoolsmodule.c"
        var $39=($38)==0; //@line 1489 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1489 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 1489 "itertoolsmodule.c"
        var $41=$40+12; //@line 1489 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1489 "itertoolsmodule.c"
        var $43=$42+4; //@line 1489 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1489 "itertoolsmodule.c"
        var $45=$44+24; //@line 1489 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1489 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 1489 "itertoolsmodule.c"
        var $48=$47+12; //@line 1489 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1489 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 1489 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1489 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 1490 "itertoolsmodule.c"
        var $51=$50; //@line 1490 "itertoolsmodule.c"
        var $52=$51+4; //@line 1490 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 1490 "itertoolsmodule.c"
        var $54=$53+160; //@line 1490 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 1490 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 1490 "itertoolsmodule.c"
        var $57=$56; //@line 1490 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 1490 "itertoolsmodule.c"
        ;
        return; //@line 1491 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imap_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1496 "itertoolsmodule.c"
        var $2=$1+8; //@line 1496 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1496 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1496 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1496 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1496 "itertoolsmodule.c"
        var $6=$5+8; //@line 1496 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1496 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1496 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1496 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1496 "itertoolsmodule.c"
        $vret=$10; //@line 1496 "itertoolsmodule.c"
        var $11=$vret; //@line 1496 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1496 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1496 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1496 "itertoolsmodule.c"
        $0=$13; //@line 1496 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1496 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 1497 "itertoolsmodule.c"
        var $15=$14+12; //@line 1497 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 1497 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 1497 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1497 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 1497 "itertoolsmodule.c"
        var $19=$18+12; //@line 1497 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1497 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 1497 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 1497 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 1497 "itertoolsmodule.c"
        $vret4=$23; //@line 1497 "itertoolsmodule.c"
        var $24=$vret4; //@line 1497 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 1497 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1497 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 1497 "itertoolsmodule.c"
        $0=$26; //@line 1497 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1497 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1498 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1498 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 1496 "itertoolsmodule.c"
        $retval=$27; //@line 1496 "itertoolsmodule.c"
        var $retval8=$retval; //@line 1496 "itertoolsmodule.c"
        ;
        return $retval8; //@line 1496 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imap_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $val;
        var $argtuple;
        var $result;
        var $numargs;
        var $i;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1534 "itertoolsmodule.c"
        var $2=$1+8; //@line 1534 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1534 "itertoolsmodule.c"
        var $4=_PyTuple_Size($3); //@line 1534 "itertoolsmodule.c"
        $numargs=$4; //@line 1534 "itertoolsmodule.c"
        var $5=$numargs; //@line 1535 "itertoolsmodule.c"
        var $6=_PyTuple_New($5); //@line 1535 "itertoolsmodule.c"
        $argtuple=$6; //@line 1535 "itertoolsmodule.c"
        var $7=$argtuple; //@line 1536 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1536 "itertoolsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1536 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1537 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1537 "itertoolsmodule.c"
      case 2: // $bb1
        $i=0; //@line 1539 "itertoolsmodule.c"
        __label__ = 8; break; //@line 1539 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$45+8; //@line 1540 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1540 "itertoolsmodule.c"
        var $11=$10; //@line 1540 "itertoolsmodule.c"
        var $12=$i; //@line 1540 "itertoolsmodule.c"
        var $13=$11+12; //@line 1540 "itertoolsmodule.c"
        var $14=$13+$12*4; //@line 1540 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 1540 "itertoolsmodule.c"
        var $16=_PyIter_Next($15); //@line 1540 "itertoolsmodule.c"
        $val=$16; //@line 1540 "itertoolsmodule.c"
        var $17=$val; //@line 1541 "itertoolsmodule.c"
        var $18=($17)==0; //@line 1541 "itertoolsmodule.c"
        var $19=$argtuple; //@line 1542 "itertoolsmodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1541 "itertoolsmodule.c"
      case 4: // $bb3
        var $20=$19; //@line 1542 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 1542 "itertoolsmodule.c"
        var $22=($21) - 1; //@line 1542 "itertoolsmodule.c"
        var $23=$argtuple; //@line 1542 "itertoolsmodule.c"
        var $24=$23; //@line 1542 "itertoolsmodule.c"
        HEAP[$24]=$22; //@line 1542 "itertoolsmodule.c"
        var $25=$argtuple; //@line 1542 "itertoolsmodule.c"
        var $26=$25; //@line 1542 "itertoolsmodule.c"
        var $27=HEAP[$26]; //@line 1542 "itertoolsmodule.c"
        var $28=($27)==0; //@line 1542 "itertoolsmodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1542 "itertoolsmodule.c"
      case 5: // $bb4
        var $29=$argtuple; //@line 1542 "itertoolsmodule.c"
        var $30=$29+4; //@line 1542 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 1542 "itertoolsmodule.c"
        var $32=$31+24; //@line 1542 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 1542 "itertoolsmodule.c"
        var $34=$argtuple; //@line 1542 "itertoolsmodule.c"
        FUNCTION_TABLE[$33]($34); //@line 1542 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1542 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 1543 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1543 "itertoolsmodule.c"
      case 7: // $bb6
        var $35=$19; //@line 1545 "itertoolsmodule.c"
        var $36=$i; //@line 1545 "itertoolsmodule.c"
        var $37=$35+12; //@line 1545 "itertoolsmodule.c"
        var $38=$37+$36*4; //@line 1545 "itertoolsmodule.c"
        var $39=$val; //@line 1545 "itertoolsmodule.c"
        HEAP[$38]=$39; //@line 1545 "itertoolsmodule.c"
        var $40=$i; //@line 1539 "itertoolsmodule.c"
        var $41=($40) + 1; //@line 1539 "itertoolsmodule.c"
        $i=$41; //@line 1539 "itertoolsmodule.c"
        __label__ = 8; break; //@line 1539 "itertoolsmodule.c"
      case 8: // $bb7
        var $42=$i; //@line 1539 "itertoolsmodule.c"
        var $43=$numargs; //@line 1539 "itertoolsmodule.c"
        var $44=($42) < ($43); //@line 1539 "itertoolsmodule.c"
        var $45=$lz_addr; //@line 1540 "itertoolsmodule.c"
        if ($44) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1539 "itertoolsmodule.c"
      case 9: // $bb8
        var $46=$45+12; //@line 1547 "itertoolsmodule.c"
        var $47=HEAP[$46]; //@line 1547 "itertoolsmodule.c"
        var $48=($47)==(__Py_NoneStruct); //@line 1547 "itertoolsmodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1547 "itertoolsmodule.c"
      case 10: // $bb9
        var $49=$argtuple; //@line 1548 "itertoolsmodule.c"
        $0=$49; //@line 1548 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1548 "itertoolsmodule.c"
      case 11: // $bb10
        var $50=$lz_addr; //@line 1549 "itertoolsmodule.c"
        var $51=$50+12; //@line 1549 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 1549 "itertoolsmodule.c"
        var $53=$argtuple; //@line 1549 "itertoolsmodule.c"
        var $54=_PyObject_Call($52, $53, 0); //@line 1549 "itertoolsmodule.c"
        $result=$54; //@line 1549 "itertoolsmodule.c"
        var $55=$argtuple; //@line 1550 "itertoolsmodule.c"
        var $56=$55; //@line 1550 "itertoolsmodule.c"
        var $57=HEAP[$56]; //@line 1550 "itertoolsmodule.c"
        var $58=($57) - 1; //@line 1550 "itertoolsmodule.c"
        var $59=$argtuple; //@line 1550 "itertoolsmodule.c"
        var $60=$59; //@line 1550 "itertoolsmodule.c"
        HEAP[$60]=$58; //@line 1550 "itertoolsmodule.c"
        var $61=$argtuple; //@line 1550 "itertoolsmodule.c"
        var $62=$61; //@line 1550 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 1550 "itertoolsmodule.c"
        var $64=($63)==0; //@line 1550 "itertoolsmodule.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1550 "itertoolsmodule.c"
      case 12: // $bb11
        var $65=$argtuple; //@line 1550 "itertoolsmodule.c"
        var $66=$65+4; //@line 1550 "itertoolsmodule.c"
        var $67=HEAP[$66]; //@line 1550 "itertoolsmodule.c"
        var $68=$67+24; //@line 1550 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 1550 "itertoolsmodule.c"
        var $70=$argtuple; //@line 1550 "itertoolsmodule.c"
        FUNCTION_TABLE[$69]($70); //@line 1550 "itertoolsmodule.c"
        __label__ = 13; break; //@line 1550 "itertoolsmodule.c"
      case 13: // $bb12
        var $71=$result; //@line 1551 "itertoolsmodule.c"
        $0=$71; //@line 1551 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1551 "itertoolsmodule.c"
      case 14: // $bb13
        var $72=$0; //@line 1537 "itertoolsmodule.c"
        $retval=$72; //@line 1537 "itertoolsmodule.c"
        var $retval14=$retval; //@line 1537 "itertoolsmodule.c"
        ;
        return $retval14; //@line 1537 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_new_internal($type, $source) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $source_addr;
        var $retval;
        var $0;
        var $lz;
        $type_addr=$type;
        $source_addr=$source;
        var $1=$type_addr; //@line 1623 "itertoolsmodule.c"
        var $2=$1+152; //@line 1623 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1623 "itertoolsmodule.c"
        var $4=$type_addr; //@line 1623 "itertoolsmodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1623 "itertoolsmodule.c"
        var $6=$5; //@line 1623 "itertoolsmodule.c"
        $lz=$6; //@line 1623 "itertoolsmodule.c"
        var $7=$lz; //@line 1624 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1624 "itertoolsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1624 "itertoolsmodule.c"
      case 1: // $bb
        var $9=$source_addr; //@line 1625 "itertoolsmodule.c"
        var $10=$9; //@line 1625 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 1625 "itertoolsmodule.c"
        var $12=($11) - 1; //@line 1625 "itertoolsmodule.c"
        var $13=$source_addr; //@line 1625 "itertoolsmodule.c"
        var $14=$13; //@line 1625 "itertoolsmodule.c"
        HEAP[$14]=$12; //@line 1625 "itertoolsmodule.c"
        var $15=$source_addr; //@line 1625 "itertoolsmodule.c"
        var $16=$15; //@line 1625 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 1625 "itertoolsmodule.c"
        var $18=($17)==0; //@line 1625 "itertoolsmodule.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1625 "itertoolsmodule.c"
      case 2: // $bb1
        var $19=$source_addr; //@line 1625 "itertoolsmodule.c"
        var $20=$19+4; //@line 1625 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 1625 "itertoolsmodule.c"
        var $22=$21+24; //@line 1625 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 1625 "itertoolsmodule.c"
        var $24=$source_addr; //@line 1625 "itertoolsmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 1625 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1625 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 1626 "itertoolsmodule.c"
        __label__ = 5; break; //@line 1626 "itertoolsmodule.c"
      case 4: // $bb3
        var $25=$lz; //@line 1629 "itertoolsmodule.c"
        var $26=$25+8; //@line 1629 "itertoolsmodule.c"
        var $27=$source_addr; //@line 1629 "itertoolsmodule.c"
        HEAP[$26]=$27; //@line 1629 "itertoolsmodule.c"
        var $28=$lz; //@line 1630 "itertoolsmodule.c"
        var $29=$28+12; //@line 1630 "itertoolsmodule.c"
        HEAP[$29]=0; //@line 1630 "itertoolsmodule.c"
        var $30=$lz; //@line 1631 "itertoolsmodule.c"
        var $31=$30; //@line 1631 "itertoolsmodule.c"
        $0=$31; //@line 1631 "itertoolsmodule.c"
        __label__ = 5; break; //@line 1631 "itertoolsmodule.c"
      case 5: // $bb4
        var $32=$0; //@line 1626 "itertoolsmodule.c"
        $retval=$32; //@line 1626 "itertoolsmodule.c"
        var $retval5=$retval; //@line 1626 "itertoolsmodule.c"
        ;
        return $retval5; //@line 1626 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_new($type, $args, $kwds) {
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
        var $source;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1639 "itertoolsmodule.c"
        var $2=($1)==(_chain_type); //@line 1639 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1639 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 1639 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str37, $3); //@line 1639 "itertoolsmodule.c"
        var $5=($4)==0; //@line 1639 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1639 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1640 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1640 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 1642 "itertoolsmodule.c"
        var $7=_PyObject_GetIter($6); //@line 1642 "itertoolsmodule.c"
        $source=$7; //@line 1642 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1643 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1643 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 1644 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1644 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=$type_addr; //@line 1646 "itertoolsmodule.c"
        var $10=$source; //@line 1646 "itertoolsmodule.c"
        var $11=_chain_new_internal($9, $10); //@line 1646 "itertoolsmodule.c"
        $0=$11; //@line 1646 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1646 "itertoolsmodule.c"
      case 6: // $bb5
        var $12=$0; //@line 1640 "itertoolsmodule.c"
        $retval=$12; //@line 1640 "itertoolsmodule.c"
        var $retval6=$retval; //@line 1640 "itertoolsmodule.c"
        ;
        return $retval6; //@line 1640 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_new_from_iterable($type, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $source;
        $type_addr=$type;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1654 "itertoolsmodule.c"
        var $2=_PyObject_GetIter($1); //@line 1654 "itertoolsmodule.c"
        $source=$2; //@line 1654 "itertoolsmodule.c"
        var $3=$source; //@line 1655 "itertoolsmodule.c"
        var $4=($3)==0; //@line 1655 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1655 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1656 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1656 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$type_addr; //@line 1658 "itertoolsmodule.c"
        var $6=$source; //@line 1658 "itertoolsmodule.c"
        var $7=_chain_new_internal($5, $6); //@line 1658 "itertoolsmodule.c"
        $0=$7; //@line 1658 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1658 "itertoolsmodule.c"
      case 3: // $bb2
        var $8=$0; //@line 1656 "itertoolsmodule.c"
        $retval=$8; //@line 1656 "itertoolsmodule.c"
        var $retval3=$retval; //@line 1656 "itertoolsmodule.c"
        ;
        return $retval3; //@line 1656 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1664 "itertoolsmodule.c"
        var $1=$0; //@line 1664 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1664 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1665 "itertoolsmodule.c"
        var $3=$2+12; //@line 1665 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1665 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1665 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1665 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1665 "itertoolsmodule.c"
        var $7=$6+12; //@line 1665 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1665 "itertoolsmodule.c"
        var $9=$8; //@line 1665 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1665 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1665 "itertoolsmodule.c"
        var $12=$8; //@line 1665 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1665 "itertoolsmodule.c"
        var $13=$8; //@line 1665 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1665 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1665 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1665 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1665 "itertoolsmodule.c"
        var $17=$16+12; //@line 1665 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1665 "itertoolsmodule.c"
        var $19=$18+4; //@line 1665 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1665 "itertoolsmodule.c"
        var $21=$20+24; //@line 1665 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1665 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1665 "itertoolsmodule.c"
        var $24=$23+12; //@line 1665 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1665 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1665 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1665 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1666 "itertoolsmodule.c"
        var $27=$26+8; //@line 1666 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 1666 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 1666 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1666 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 1666 "itertoolsmodule.c"
        var $31=$30+8; //@line 1666 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1666 "itertoolsmodule.c"
        var $33=$32; //@line 1666 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 1666 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 1666 "itertoolsmodule.c"
        var $36=$32; //@line 1666 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 1666 "itertoolsmodule.c"
        var $37=$32; //@line 1666 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1666 "itertoolsmodule.c"
        var $39=($38)==0; //@line 1666 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1666 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 1666 "itertoolsmodule.c"
        var $41=$40+8; //@line 1666 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1666 "itertoolsmodule.c"
        var $43=$42+4; //@line 1666 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1666 "itertoolsmodule.c"
        var $45=$44+24; //@line 1666 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1666 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 1666 "itertoolsmodule.c"
        var $48=$47+8; //@line 1666 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1666 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 1666 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1666 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 1667 "itertoolsmodule.c"
        var $51=$50; //@line 1667 "itertoolsmodule.c"
        var $52=$51+4; //@line 1667 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 1667 "itertoolsmodule.c"
        var $54=$53+160; //@line 1667 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 1667 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 1667 "itertoolsmodule.c"
        var $57=$56; //@line 1667 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 1667 "itertoolsmodule.c"
        ;
        return; //@line 1668 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1673 "itertoolsmodule.c"
        var $2=$1+8; //@line 1673 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1673 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1673 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1673 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1673 "itertoolsmodule.c"
        var $6=$5+8; //@line 1673 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1673 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1673 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1673 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1673 "itertoolsmodule.c"
        $vret=$10; //@line 1673 "itertoolsmodule.c"
        var $11=$vret; //@line 1673 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1673 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1673 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1673 "itertoolsmodule.c"
        $0=$13; //@line 1673 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1673 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 1674 "itertoolsmodule.c"
        var $15=$14+12; //@line 1674 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 1674 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 1674 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1674 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 1674 "itertoolsmodule.c"
        var $19=$18+12; //@line 1674 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1674 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 1674 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 1674 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 1674 "itertoolsmodule.c"
        $vret4=$23; //@line 1674 "itertoolsmodule.c"
        var $24=$vret4; //@line 1674 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 1674 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1674 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 1674 "itertoolsmodule.c"
        $0=$26; //@line 1674 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1674 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1675 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1675 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 1673 "itertoolsmodule.c"
        $retval=$27; //@line 1673 "itertoolsmodule.c"
        var $retval8=$retval; //@line 1673 "itertoolsmodule.c"
        ;
        return $retval8; //@line 1673 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _chain_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $iterable;
        var $_py_tmp;
        var $_py_tmp12;
        var $_py_tmp23;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1683 "itertoolsmodule.c"
        var $2=$1+8; //@line 1683 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1683 "itertoolsmodule.c"
        var $4=($3)==0; //@line 1683 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1683 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1684 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1684 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$lz_addr; //@line 1686 "itertoolsmodule.c"
        var $6=$5+12; //@line 1686 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1686 "itertoolsmodule.c"
        var $8=($7)==0; //@line 1686 "itertoolsmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 1686 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$lz_addr; //@line 1687 "itertoolsmodule.c"
        var $10=$9+8; //@line 1687 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 1687 "itertoolsmodule.c"
        var $12=_PyIter_Next($11); //@line 1687 "itertoolsmodule.c"
        $iterable=$12; //@line 1687 "itertoolsmodule.c"
        var $13=$iterable; //@line 1688 "itertoolsmodule.c"
        var $14=($13)==0; //@line 1688 "itertoolsmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1688 "itertoolsmodule.c"
      case 4: // $bb3
        var $15=$lz_addr; //@line 1689 "itertoolsmodule.c"
        var $16=$15+8; //@line 1689 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 1689 "itertoolsmodule.c"
        var $18=($17)!=0; //@line 1689 "itertoolsmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1689 "itertoolsmodule.c"
      case 5: // $bb4
        var $19=$lz_addr; //@line 1689 "itertoolsmodule.c"
        var $20=$19+8; //@line 1689 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 1689 "itertoolsmodule.c"
        $_py_tmp=$21; //@line 1689 "itertoolsmodule.c"
        var $22=$lz_addr; //@line 1689 "itertoolsmodule.c"
        var $23=$22+8; //@line 1689 "itertoolsmodule.c"
        HEAP[$23]=0; //@line 1689 "itertoolsmodule.c"
        var $24=$_py_tmp; //@line 1689 "itertoolsmodule.c"
        var $25=$24; //@line 1689 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 1689 "itertoolsmodule.c"
        var $27=($26) - 1; //@line 1689 "itertoolsmodule.c"
        var $28=$_py_tmp; //@line 1689 "itertoolsmodule.c"
        var $29=$28; //@line 1689 "itertoolsmodule.c"
        HEAP[$29]=$27; //@line 1689 "itertoolsmodule.c"
        var $30=$_py_tmp; //@line 1689 "itertoolsmodule.c"
        var $31=$30; //@line 1689 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1689 "itertoolsmodule.c"
        var $33=($32)==0; //@line 1689 "itertoolsmodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1689 "itertoolsmodule.c"
      case 6: // $bb5
        var $34=$_py_tmp; //@line 1689 "itertoolsmodule.c"
        var $35=$34+4; //@line 1689 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 1689 "itertoolsmodule.c"
        var $37=$36+24; //@line 1689 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1689 "itertoolsmodule.c"
        var $39=$_py_tmp; //@line 1689 "itertoolsmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 1689 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1689 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 1690 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1690 "itertoolsmodule.c"
      case 8: // $bb7
        var $40=$iterable; //@line 1692 "itertoolsmodule.c"
        var $41=_PyObject_GetIter($40); //@line 1692 "itertoolsmodule.c"
        var $42=$lz_addr; //@line 1692 "itertoolsmodule.c"
        var $43=$42+12; //@line 1692 "itertoolsmodule.c"
        HEAP[$43]=$41; //@line 1692 "itertoolsmodule.c"
        var $44=$iterable; //@line 1693 "itertoolsmodule.c"
        var $45=$44; //@line 1693 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1693 "itertoolsmodule.c"
        var $47=($46) - 1; //@line 1693 "itertoolsmodule.c"
        var $48=$iterable; //@line 1693 "itertoolsmodule.c"
        var $49=$48; //@line 1693 "itertoolsmodule.c"
        HEAP[$49]=$47; //@line 1693 "itertoolsmodule.c"
        var $50=$iterable; //@line 1693 "itertoolsmodule.c"
        var $51=$50; //@line 1693 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 1693 "itertoolsmodule.c"
        var $53=($52)==0; //@line 1693 "itertoolsmodule.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1693 "itertoolsmodule.c"
      case 9: // $bb8
        var $54=$iterable; //@line 1693 "itertoolsmodule.c"
        var $55=$54+4; //@line 1693 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 1693 "itertoolsmodule.c"
        var $57=$56+24; //@line 1693 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 1693 "itertoolsmodule.c"
        var $59=$iterable; //@line 1693 "itertoolsmodule.c"
        FUNCTION_TABLE[$58]($59); //@line 1693 "itertoolsmodule.c"
        __label__ = 10; break; //@line 1693 "itertoolsmodule.c"
      case 10: // $bb9
        var $60=$lz_addr; //@line 1694 "itertoolsmodule.c"
        var $61=$60+12; //@line 1694 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 1694 "itertoolsmodule.c"
        var $63=($62)==0; //@line 1694 "itertoolsmodule.c"
        if ($63) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 1694 "itertoolsmodule.c"
      case 11: // $bb10
        var $64=$lz_addr; //@line 1695 "itertoolsmodule.c"
        var $65=$64+8; //@line 1695 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 1695 "itertoolsmodule.c"
        var $67=($66)!=0; //@line 1695 "itertoolsmodule.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1695 "itertoolsmodule.c"
      case 12: // $bb11
        var $68=$lz_addr; //@line 1695 "itertoolsmodule.c"
        var $69=$68+8; //@line 1695 "itertoolsmodule.c"
        var $70=HEAP[$69]; //@line 1695 "itertoolsmodule.c"
        $_py_tmp12=$70; //@line 1695 "itertoolsmodule.c"
        var $71=$lz_addr; //@line 1695 "itertoolsmodule.c"
        var $72=$71+8; //@line 1695 "itertoolsmodule.c"
        HEAP[$72]=0; //@line 1695 "itertoolsmodule.c"
        var $73=$_py_tmp12; //@line 1695 "itertoolsmodule.c"
        var $74=$73; //@line 1695 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 1695 "itertoolsmodule.c"
        var $76=($75) - 1; //@line 1695 "itertoolsmodule.c"
        var $77=$_py_tmp12; //@line 1695 "itertoolsmodule.c"
        var $78=$77; //@line 1695 "itertoolsmodule.c"
        HEAP[$78]=$76; //@line 1695 "itertoolsmodule.c"
        var $79=$_py_tmp12; //@line 1695 "itertoolsmodule.c"
        var $80=$79; //@line 1695 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 1695 "itertoolsmodule.c"
        var $82=($81)==0; //@line 1695 "itertoolsmodule.c"
        if ($82) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1695 "itertoolsmodule.c"
      case 13: // $bb13
        var $83=$_py_tmp12; //@line 1695 "itertoolsmodule.c"
        var $84=$83+4; //@line 1695 "itertoolsmodule.c"
        var $85=HEAP[$84]; //@line 1695 "itertoolsmodule.c"
        var $86=$85+24; //@line 1695 "itertoolsmodule.c"
        var $87=HEAP[$86]; //@line 1695 "itertoolsmodule.c"
        var $88=$_py_tmp12; //@line 1695 "itertoolsmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 1695 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1695 "itertoolsmodule.c"
      case 14: // $bb14
        $0=0; //@line 1696 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1696 "itertoolsmodule.c"
      case 15: // $bb15
        var $89=$lz_addr; //@line 1699 "itertoolsmodule.c"
        var $90=$89+12; //@line 1699 "itertoolsmodule.c"
        var $91=HEAP[$90]; //@line 1699 "itertoolsmodule.c"
        var $92=_PyIter_Next($91); //@line 1699 "itertoolsmodule.c"
        $item=$92; //@line 1699 "itertoolsmodule.c"
        var $93=($92)!=0; //@line 1700 "itertoolsmodule.c"
        if ($93) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1700 "itertoolsmodule.c"
      case 16: // $bb16
        var $94=$item; //@line 1701 "itertoolsmodule.c"
        $0=$94; //@line 1701 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1701 "itertoolsmodule.c"
      case 17: // $bb17
        var $95=_PyErr_Occurred(); //@line 1702 "itertoolsmodule.c"
        var $96=($95)!=0; //@line 1702 "itertoolsmodule.c"
        if ($96) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1702 "itertoolsmodule.c"
      case 18: // $bb18
        var $97=HEAP[_PyExc_StopIteration]; //@line 1703 "itertoolsmodule.c"
        var $98=_PyErr_ExceptionMatches($97); //@line 1703 "itertoolsmodule.c"
        var $99=($98)!=0; //@line 1703 "itertoolsmodule.c"
        if ($99) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1703 "itertoolsmodule.c"
      case 19: // $bb19
        _PyErr_Clear(); //@line 1704 "itertoolsmodule.c"
        __label__ = 21; break; //@line 1704 "itertoolsmodule.c"
      case 20: // $bb20
        $0=0; //@line 1706 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1706 "itertoolsmodule.c"
      case 21: // $bb21
        var $100=$lz_addr; //@line 1708 "itertoolsmodule.c"
        var $101=$100+12; //@line 1708 "itertoolsmodule.c"
        var $102=HEAP[$101]; //@line 1708 "itertoolsmodule.c"
        var $103=($102)!=0; //@line 1708 "itertoolsmodule.c"
        if ($103) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 1708 "itertoolsmodule.c"
      case 22: // $bb22
        var $104=$lz_addr; //@line 1708 "itertoolsmodule.c"
        var $105=$104+12; //@line 1708 "itertoolsmodule.c"
        var $106=HEAP[$105]; //@line 1708 "itertoolsmodule.c"
        $_py_tmp23=$106; //@line 1708 "itertoolsmodule.c"
        var $107=$lz_addr; //@line 1708 "itertoolsmodule.c"
        var $108=$107+12; //@line 1708 "itertoolsmodule.c"
        HEAP[$108]=0; //@line 1708 "itertoolsmodule.c"
        var $109=$_py_tmp23; //@line 1708 "itertoolsmodule.c"
        var $110=$109; //@line 1708 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 1708 "itertoolsmodule.c"
        var $112=($111) - 1; //@line 1708 "itertoolsmodule.c"
        var $113=$_py_tmp23; //@line 1708 "itertoolsmodule.c"
        var $114=$113; //@line 1708 "itertoolsmodule.c"
        HEAP[$114]=$112; //@line 1708 "itertoolsmodule.c"
        var $115=$_py_tmp23; //@line 1708 "itertoolsmodule.c"
        var $116=$115; //@line 1708 "itertoolsmodule.c"
        var $117=HEAP[$116]; //@line 1708 "itertoolsmodule.c"
        var $118=($117)==0; //@line 1708 "itertoolsmodule.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1708 "itertoolsmodule.c"
      case 23: // $bb24
        var $119=$_py_tmp23; //@line 1708 "itertoolsmodule.c"
        var $120=$119+4; //@line 1708 "itertoolsmodule.c"
        var $121=HEAP[$120]; //@line 1708 "itertoolsmodule.c"
        var $122=$121+24; //@line 1708 "itertoolsmodule.c"
        var $123=HEAP[$122]; //@line 1708 "itertoolsmodule.c"
        var $124=$_py_tmp23; //@line 1708 "itertoolsmodule.c"
        FUNCTION_TABLE[$123]($124); //@line 1708 "itertoolsmodule.c"
        __label__ = 24; break; //@line 1708 "itertoolsmodule.c"
      case 24: // $bb25
        var $125=$lz_addr; //@line 1709 "itertoolsmodule.c"
        var $126=_chain_next($125); //@line 1709 "itertoolsmodule.c"
        $0=$126; //@line 1709 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1709 "itertoolsmodule.c"
      case 25: // $bb26
        var $127=$0; //@line 1684 "itertoolsmodule.c"
        $retval=$127; //@line 1684 "itertoolsmodule.c"
        var $retval27=$retval; //@line 1684 "itertoolsmodule.c"
        ;
        return $retval27; //@line 1684 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _product_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $iftmp_73;
        var $0;
        var $lz;
        var $nargs;
        var $npools;
        var $repeat=__stackBase__;
        var $pools;
        var $indices;
        var $i;
        var $kwlist=__stackBase__+4;
        var $tmpargs;
        var $item;
        var $pool;
        var $pool25;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$repeat]=1; //@line 1792 "itertoolsmodule.c"
        $pools=0; //@line 1793 "itertoolsmodule.c"
        $indices=0; //@line 1794 "itertoolsmodule.c"
        var $1=$kwds_addr; //@line 1797 "itertoolsmodule.c"
        var $2=($1)!=0; //@line 1797 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1797 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwlist; //@line 1798 "itertoolsmodule.c"
        HEAP[$3]=__str40; //@line 1798 "itertoolsmodule.c"
        var $4=$kwlist+4; //@line 1798 "itertoolsmodule.c"
        HEAP[$4]=0; //@line 1798 "itertoolsmodule.c"
        var $5=_PyTuple_New(0); //@line 1799 "itertoolsmodule.c"
        $tmpargs=$5; //@line 1799 "itertoolsmodule.c"
        var $6=$tmpargs; //@line 1800 "itertoolsmodule.c"
        var $7=($6)==0; //@line 1800 "itertoolsmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1800 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 1801 "itertoolsmodule.c"
        __label__ = 33; break; //@line 1801 "itertoolsmodule.c"
      case 3: // $bb2
        var $8=$tmpargs; //@line 1802 "itertoolsmodule.c"
        var $9=$kwds_addr; //@line 1802 "itertoolsmodule.c"
        var $kwlist3=$kwlist; //@line 1802 "itertoolsmodule.c"
        var $10=_PyArg_ParseTupleAndKeywords($8, $9, __str41, $kwlist3, allocate([$repeat,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 1802 "itertoolsmodule.c"
        var $11=($10)==0; //@line 1802 "itertoolsmodule.c"
        var $12=$tmpargs; //@line 1803 "itertoolsmodule.c"
        var $13=$12; //@line 1803 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1803 "itertoolsmodule.c"
        var $15=($14) - 1; //@line 1803 "itertoolsmodule.c"
        var $16=$tmpargs; //@line 1803 "itertoolsmodule.c"
        var $17=$16; //@line 1803 "itertoolsmodule.c"
        HEAP[$17]=$15; //@line 1803 "itertoolsmodule.c"
        var $18=$tmpargs; //@line 1803 "itertoolsmodule.c"
        var $19=$18; //@line 1803 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1803 "itertoolsmodule.c"
        var $21=($20)==0; //@line 1803 "itertoolsmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1802 "itertoolsmodule.c"
      case 4: // $bb4
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1803 "itertoolsmodule.c"
      case 5: // $bb5
        var $22=$tmpargs; //@line 1803 "itertoolsmodule.c"
        var $23=$22+4; //@line 1803 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 1803 "itertoolsmodule.c"
        var $25=$24+24; //@line 1803 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 1803 "itertoolsmodule.c"
        var $27=$tmpargs; //@line 1803 "itertoolsmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 1803 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1803 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1804 "itertoolsmodule.c"
        __label__ = 33; break; //@line 1804 "itertoolsmodule.c"
      case 7: // $bb7
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1806 "itertoolsmodule.c"
      case 8: // $bb8
        var $28=$tmpargs; //@line 1806 "itertoolsmodule.c"
        var $29=$28+4; //@line 1806 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 1806 "itertoolsmodule.c"
        var $31=$30+24; //@line 1806 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1806 "itertoolsmodule.c"
        var $33=$tmpargs; //@line 1806 "itertoolsmodule.c"
        FUNCTION_TABLE[$32]($33); //@line 1806 "itertoolsmodule.c"
        __label__ = 9; break; //@line 1806 "itertoolsmodule.c"
      case 9: // $bb9
        var $34=HEAP[$repeat]; //@line 1807 "itertoolsmodule.c"
        var $35=($34) < 0; //@line 1807 "itertoolsmodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1807 "itertoolsmodule.c"
      case 10: // $bb10
        var $36=HEAP[_PyExc_ValueError]; //@line 1808 "itertoolsmodule.c"
        _PyErr_SetString($36, __str42); //@line 1808 "itertoolsmodule.c"
        $0=0; //@line 1810 "itertoolsmodule.c"
        __label__ = 33; break; //@line 1810 "itertoolsmodule.c"
      case 11: // $bb11
        var $37=$args_addr; //@line 1814 "itertoolsmodule.c"
        var $38=$37+4; //@line 1814 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 1814 "itertoolsmodule.c"
        var $40=$39+84; //@line 1814 "itertoolsmodule.c"
        var $41=HEAP[$40]; //@line 1814 "itertoolsmodule.c"
        var $42=($41) & 67108864; //@line 1814 "itertoolsmodule.c"
        var $43=($42)==0; //@line 1814 "itertoolsmodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1814 "itertoolsmodule.c"
      case 12: // $bb12
        ___assert_fail(__str43, __str5, 1814, ___PRETTY_FUNCTION___10265); //@line 1814 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 1814 "itertoolsmodule.c"
      case 13: // $bb13
        var $44=HEAP[$repeat]; //@line 1815 "itertoolsmodule.c"
        var $45=($44)!=0; //@line 1815 "itertoolsmodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1815 "itertoolsmodule.c"
      case 14: // $bb14
        var $46=$args_addr; //@line 1815 "itertoolsmodule.c"
        var $47=$46; //@line 1815 "itertoolsmodule.c"
        var $48=$47+8; //@line 1815 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1815 "itertoolsmodule.c"
        $iftmp_73=$49; //@line 1815 "itertoolsmodule.c"
        __label__ = 16; break; //@line 1815 "itertoolsmodule.c"
      case 15: // $bb15
        $iftmp_73=0; //@line 1815 "itertoolsmodule.c"
        __label__ = 16; break; //@line 1815 "itertoolsmodule.c"
      case 16: // $bb16
        var $50=$iftmp_73; //@line 1815 "itertoolsmodule.c"
        $nargs=$50; //@line 1815 "itertoolsmodule.c"
        var $51=HEAP[$repeat]; //@line 1816 "itertoolsmodule.c"
        var $52=$nargs; //@line 1816 "itertoolsmodule.c"
        var $53=($52) * ($51); //@line 1816 "itertoolsmodule.c"
        $npools=$53; //@line 1816 "itertoolsmodule.c"
        var $54=$npools; //@line 1818 "itertoolsmodule.c"
        var $55=($54) * 4; //@line 1818 "itertoolsmodule.c"
        var $56=_PyMem_Malloc($55); //@line 1818 "itertoolsmodule.c"
        var $57=$56; //@line 1818 "itertoolsmodule.c"
        $indices=$57; //@line 1818 "itertoolsmodule.c"
        var $58=($57)==0; //@line 1819 "itertoolsmodule.c"
        if ($58) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1819 "itertoolsmodule.c"
      case 17: // $bb17
        var $59=_PyErr_NoMemory(); //@line 1820 "itertoolsmodule.c"
        __label__ = 27; break; //@line 1820 "itertoolsmodule.c"
      case 18: // $bb18
        var $60=$npools; //@line 1824 "itertoolsmodule.c"
        var $61=_PyTuple_New($60); //@line 1824 "itertoolsmodule.c"
        $pools=$61; //@line 1824 "itertoolsmodule.c"
        var $62=$pools; //@line 1825 "itertoolsmodule.c"
        var $63=($62)==0; //@line 1825 "itertoolsmodule.c"
        if ($63) { __label__ = 27; break; } else { __label__ = 19; break; } //@line 1825 "itertoolsmodule.c"
      case 19: // $bb19
        $i=0; //@line 1828 "itertoolsmodule.c"
        __label__ = 22; break; //@line 1828 "itertoolsmodule.c"
      case 20: // $bb20
        var $64=$args_addr; //@line 1829 "itertoolsmodule.c"
        var $65=$64; //@line 1829 "itertoolsmodule.c"
        var $66=$i; //@line 1829 "itertoolsmodule.c"
        var $67=$65+12; //@line 1829 "itertoolsmodule.c"
        var $68=$67+$66*4; //@line 1829 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 1829 "itertoolsmodule.c"
        $item=$69; //@line 1829 "itertoolsmodule.c"
        var $70=$item; //@line 1830 "itertoolsmodule.c"
        var $71=_PySequence_Tuple($70); //@line 1830 "itertoolsmodule.c"
        $pool=$71; //@line 1830 "itertoolsmodule.c"
        var $72=$pool; //@line 1831 "itertoolsmodule.c"
        var $73=($72)==0; //@line 1831 "itertoolsmodule.c"
        if ($73) { __label__ = 27; break; } else { __label__ = 21; break; } //@line 1831 "itertoolsmodule.c"
      case 21: // $bb21
        var $74=$pools; //@line 1833 "itertoolsmodule.c"
        var $75=$74; //@line 1833 "itertoolsmodule.c"
        var $76=$i; //@line 1833 "itertoolsmodule.c"
        var $77=$75+12; //@line 1833 "itertoolsmodule.c"
        var $78=$77+$76*4; //@line 1833 "itertoolsmodule.c"
        var $79=$pool; //@line 1833 "itertoolsmodule.c"
        HEAP[$78]=$79; //@line 1833 "itertoolsmodule.c"
        var $80=$indices; //@line 1834 "itertoolsmodule.c"
        var $81=$i; //@line 1834 "itertoolsmodule.c"
        var $82=$80+4*$81; //@line 1834 "itertoolsmodule.c"
        HEAP[$82]=0; //@line 1834 "itertoolsmodule.c"
        var $83=$i; //@line 1828 "itertoolsmodule.c"
        var $84=($83) + 1; //@line 1828 "itertoolsmodule.c"
        $i=$84; //@line 1828 "itertoolsmodule.c"
        __label__ = 22; break; //@line 1828 "itertoolsmodule.c"
      case 22: // $bb22
        var $85=$i; //@line 1828 "itertoolsmodule.c"
        var $86=$nargs; //@line 1828 "itertoolsmodule.c"
        var $87=($85) < ($86); //@line 1828 "itertoolsmodule.c"
        if ($87) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 1828 "itertoolsmodule.c"
      case 23: // $bb26_preheader
        var $88=$i; //@line 1836 "itertoolsmodule.c"
        var $89=$npools; //@line 1836 "itertoolsmodule.c"
        var $90=($88) < ($89); //@line 1836 "itertoolsmodule.c"
        if ($90) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1836 "itertoolsmodule.c"
      case 24: // $bb24
        var $91=$pools; //@line 1837 "itertoolsmodule.c"
        var $92=$91; //@line 1837 "itertoolsmodule.c"
        var $93=$i; //@line 1837 "itertoolsmodule.c"
        var $94=$nargs; //@line 1837 "itertoolsmodule.c"
        var $95=($93) - ($94); //@line 1837 "itertoolsmodule.c"
        var $96=$92+12; //@line 1837 "itertoolsmodule.c"
        var $97=$96+$95*4; //@line 1837 "itertoolsmodule.c"
        var $98=HEAP[$97]; //@line 1837 "itertoolsmodule.c"
        $pool25=$98; //@line 1837 "itertoolsmodule.c"
        var $99=$pool25; //@line 1838 "itertoolsmodule.c"
        var $100=$99; //@line 1838 "itertoolsmodule.c"
        var $101=HEAP[$100]; //@line 1838 "itertoolsmodule.c"
        var $102=($101) + 1; //@line 1838 "itertoolsmodule.c"
        var $103=$pool25; //@line 1838 "itertoolsmodule.c"
        var $104=$103; //@line 1838 "itertoolsmodule.c"
        HEAP[$104]=$102; //@line 1838 "itertoolsmodule.c"
        var $105=$pools; //@line 1839 "itertoolsmodule.c"
        var $106=$105; //@line 1839 "itertoolsmodule.c"
        var $107=$i; //@line 1839 "itertoolsmodule.c"
        var $108=$106+12; //@line 1839 "itertoolsmodule.c"
        var $109=$108+$107*4; //@line 1839 "itertoolsmodule.c"
        var $110=$pool25; //@line 1839 "itertoolsmodule.c"
        HEAP[$109]=$110; //@line 1839 "itertoolsmodule.c"
        var $111=$indices; //@line 1840 "itertoolsmodule.c"
        var $112=$i; //@line 1840 "itertoolsmodule.c"
        var $113=$111+4*$112; //@line 1840 "itertoolsmodule.c"
        HEAP[$113]=0; //@line 1840 "itertoolsmodule.c"
        var $114=$i; //@line 1836 "itertoolsmodule.c"
        var $115=($114) + 1; //@line 1836 "itertoolsmodule.c"
        $i=$115; //@line 1836 "itertoolsmodule.c"
        var $116=$i; //@line 1836 "itertoolsmodule.c"
        var $117=$npools; //@line 1836 "itertoolsmodule.c"
        var $118=($116) < ($117); //@line 1836 "itertoolsmodule.c"
        if ($118) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1836 "itertoolsmodule.c"
      case 25: // $bb27
        var $119=$type_addr; //@line 1844 "itertoolsmodule.c"
        var $120=$119+152; //@line 1844 "itertoolsmodule.c"
        var $121=HEAP[$120]; //@line 1844 "itertoolsmodule.c"
        var $122=$type_addr; //@line 1844 "itertoolsmodule.c"
        var $123=FUNCTION_TABLE[$121]($122, 0); //@line 1844 "itertoolsmodule.c"
        var $124=$123; //@line 1844 "itertoolsmodule.c"
        $lz=$124; //@line 1844 "itertoolsmodule.c"
        var $125=($124)==0; //@line 1845 "itertoolsmodule.c"
        if ($125) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1845 "itertoolsmodule.c"
      case 26: // $bb28
        var $126=$lz; //@line 1848 "itertoolsmodule.c"
        var $127=$126+8; //@line 1848 "itertoolsmodule.c"
        var $128=$pools; //@line 1848 "itertoolsmodule.c"
        HEAP[$127]=$128; //@line 1848 "itertoolsmodule.c"
        var $129=$lz; //@line 1849 "itertoolsmodule.c"
        var $130=$129+12; //@line 1849 "itertoolsmodule.c"
        var $131=$indices; //@line 1849 "itertoolsmodule.c"
        HEAP[$130]=$131; //@line 1849 "itertoolsmodule.c"
        var $132=$lz; //@line 1850 "itertoolsmodule.c"
        var $133=$132+16; //@line 1850 "itertoolsmodule.c"
        HEAP[$133]=0; //@line 1850 "itertoolsmodule.c"
        var $134=$lz; //@line 1851 "itertoolsmodule.c"
        var $135=$134+20; //@line 1851 "itertoolsmodule.c"
        HEAP[$135]=0; //@line 1851 "itertoolsmodule.c"
        var $136=$lz; //@line 1853 "itertoolsmodule.c"
        var $137=$136; //@line 1853 "itertoolsmodule.c"
        $0=$137; //@line 1853 "itertoolsmodule.c"
        __label__ = 33; break; //@line 1853 "itertoolsmodule.c"
      case 27: // $error
        var $138=$indices; //@line 1856 "itertoolsmodule.c"
        var $139=($138)!=0; //@line 1856 "itertoolsmodule.c"
        if ($139) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1856 "itertoolsmodule.c"
      case 28: // $bb29
        var $140=$indices; //@line 1857 "itertoolsmodule.c"
        var $141=$140; //@line 1857 "itertoolsmodule.c"
        _PyMem_Free($141); //@line 1857 "itertoolsmodule.c"
        __label__ = 29; break; //@line 1857 "itertoolsmodule.c"
      case 29: // $bb30
        var $142=$pools; //@line 1858 "itertoolsmodule.c"
        var $143=($142)!=0; //@line 1858 "itertoolsmodule.c"
        if ($143) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1858 "itertoolsmodule.c"
      case 30: // $bb31
        var $144=$pools; //@line 1858 "itertoolsmodule.c"
        var $145=$144; //@line 1858 "itertoolsmodule.c"
        var $146=HEAP[$145]; //@line 1858 "itertoolsmodule.c"
        var $147=($146) - 1; //@line 1858 "itertoolsmodule.c"
        var $148=$pools; //@line 1858 "itertoolsmodule.c"
        var $149=$148; //@line 1858 "itertoolsmodule.c"
        HEAP[$149]=$147; //@line 1858 "itertoolsmodule.c"
        var $150=$pools; //@line 1858 "itertoolsmodule.c"
        var $151=$150; //@line 1858 "itertoolsmodule.c"
        var $152=HEAP[$151]; //@line 1858 "itertoolsmodule.c"
        var $153=($152)==0; //@line 1858 "itertoolsmodule.c"
        if ($153) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1858 "itertoolsmodule.c"
      case 31: // $bb32
        var $154=$pools; //@line 1858 "itertoolsmodule.c"
        var $155=$154+4; //@line 1858 "itertoolsmodule.c"
        var $156=HEAP[$155]; //@line 1858 "itertoolsmodule.c"
        var $157=$156+24; //@line 1858 "itertoolsmodule.c"
        var $158=HEAP[$157]; //@line 1858 "itertoolsmodule.c"
        var $159=$pools; //@line 1858 "itertoolsmodule.c"
        FUNCTION_TABLE[$158]($159); //@line 1858 "itertoolsmodule.c"
        __label__ = 32; break; //@line 1858 "itertoolsmodule.c"
      case 32: // $bb33
        $0=0; //@line 1859 "itertoolsmodule.c"
        __label__ = 33; break; //@line 1859 "itertoolsmodule.c"
      case 33: // $bb34
        var $160=$0; //@line 1801 "itertoolsmodule.c"
        $retval=$160; //@line 1801 "itertoolsmodule.c"
        var $retval35=$retval; //@line 1801 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 1801 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _product_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 1865 "itertoolsmodule.c"
        var $1=$0; //@line 1865 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 1865 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 1866 "itertoolsmodule.c"
        var $3=$2+8; //@line 1866 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 1866 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 1866 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1866 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 1866 "itertoolsmodule.c"
        var $7=$6+8; //@line 1866 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 1866 "itertoolsmodule.c"
        var $9=$8; //@line 1866 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1866 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 1866 "itertoolsmodule.c"
        var $12=$8; //@line 1866 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 1866 "itertoolsmodule.c"
        var $13=$8; //@line 1866 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 1866 "itertoolsmodule.c"
        var $15=($14)==0; //@line 1866 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1866 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 1866 "itertoolsmodule.c"
        var $17=$16+8; //@line 1866 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 1866 "itertoolsmodule.c"
        var $19=$18+4; //@line 1866 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1866 "itertoolsmodule.c"
        var $21=$20+24; //@line 1866 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 1866 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 1866 "itertoolsmodule.c"
        var $24=$23+8; //@line 1866 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 1866 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 1866 "itertoolsmodule.c"
        __label__ = 3; break; //@line 1866 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 1867 "itertoolsmodule.c"
        var $27=$26+16; //@line 1867 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 1867 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 1867 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1867 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 1867 "itertoolsmodule.c"
        var $31=$30+16; //@line 1867 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 1867 "itertoolsmodule.c"
        var $33=$32; //@line 1867 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 1867 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 1867 "itertoolsmodule.c"
        var $36=$32; //@line 1867 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 1867 "itertoolsmodule.c"
        var $37=$32; //@line 1867 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 1867 "itertoolsmodule.c"
        var $39=($38)==0; //@line 1867 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1867 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 1867 "itertoolsmodule.c"
        var $41=$40+16; //@line 1867 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1867 "itertoolsmodule.c"
        var $43=$42+4; //@line 1867 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 1867 "itertoolsmodule.c"
        var $45=$44+24; //@line 1867 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 1867 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 1867 "itertoolsmodule.c"
        var $48=$47+16; //@line 1867 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 1867 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 1867 "itertoolsmodule.c"
        __label__ = 6; break; //@line 1867 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 1868 "itertoolsmodule.c"
        var $51=$50+12; //@line 1868 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 1868 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 1868 "itertoolsmodule.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1868 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$lz_addr; //@line 1869 "itertoolsmodule.c"
        var $55=$54+12; //@line 1869 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 1869 "itertoolsmodule.c"
        var $57=$56; //@line 1869 "itertoolsmodule.c"
        _PyMem_Free($57); //@line 1869 "itertoolsmodule.c"
        __label__ = 8; break; //@line 1869 "itertoolsmodule.c"
      case 8: // $bb7
        var $58=$lz_addr; //@line 1870 "itertoolsmodule.c"
        var $59=$58; //@line 1870 "itertoolsmodule.c"
        var $60=$59+4; //@line 1870 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 1870 "itertoolsmodule.c"
        var $62=$61+160; //@line 1870 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 1870 "itertoolsmodule.c"
        var $64=$lz_addr; //@line 1870 "itertoolsmodule.c"
        var $65=$64; //@line 1870 "itertoolsmodule.c"
        FUNCTION_TABLE[$63]($65); //@line 1870 "itertoolsmodule.c"
        ;
        return; //@line 1871 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _product_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 1876 "itertoolsmodule.c"
        var $2=$1+8; //@line 1876 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1876 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 1876 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1876 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 1876 "itertoolsmodule.c"
        var $6=$5+8; //@line 1876 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 1876 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 1876 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 1876 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 1876 "itertoolsmodule.c"
        $vret=$10; //@line 1876 "itertoolsmodule.c"
        var $11=$vret; //@line 1876 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 1876 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1876 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 1876 "itertoolsmodule.c"
        $0=$13; //@line 1876 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1876 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 1877 "itertoolsmodule.c"
        var $15=$14+16; //@line 1877 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 1877 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 1877 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1877 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 1877 "itertoolsmodule.c"
        var $19=$18+16; //@line 1877 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 1877 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 1877 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 1877 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 1877 "itertoolsmodule.c"
        $vret4=$23; //@line 1877 "itertoolsmodule.c"
        var $24=$vret4; //@line 1877 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 1877 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1877 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 1877 "itertoolsmodule.c"
        $0=$26; //@line 1877 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1877 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 1878 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1878 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 1876 "itertoolsmodule.c"
        $retval=$27; //@line 1876 "itertoolsmodule.c"
        var $retval8=$retval; //@line 1876 "itertoolsmodule.c"
        ;
        return $retval8; //@line 1876 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _product_next($lz) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $pool;
        var $elem;
        var $oldelem;
        var $pools;
        var $result;
        var $npools;
        var $i;
        var $indices;
        var $old_result;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 1887 "itertoolsmodule.c"
        var $2=$1+8; //@line 1887 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 1887 "itertoolsmodule.c"
        $pools=$3; //@line 1887 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 1888 "itertoolsmodule.c"
        var $5=$4+16; //@line 1888 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 1888 "itertoolsmodule.c"
        $result=$6; //@line 1888 "itertoolsmodule.c"
        var $7=$pools; //@line 1889 "itertoolsmodule.c"
        var $8=$7; //@line 1889 "itertoolsmodule.c"
        var $9=$8+8; //@line 1889 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 1889 "itertoolsmodule.c"
        $npools=$10; //@line 1889 "itertoolsmodule.c"
        var $11=$lz_addr; //@line 1892 "itertoolsmodule.c"
        var $12=$11+20; //@line 1892 "itertoolsmodule.c"
        var $13=HEAP[$12]; //@line 1892 "itertoolsmodule.c"
        var $14=($13)!=0; //@line 1892 "itertoolsmodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1892 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 1893 "itertoolsmodule.c"
        __label__ = 28; break; //@line 1893 "itertoolsmodule.c"
      case 2: // $bb1
        var $15=$result; //@line 1895 "itertoolsmodule.c"
        var $16=($15)==0; //@line 1895 "itertoolsmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 1895 "itertoolsmodule.c"
      case 3: // $bb2
        var $17=$npools; //@line 1898 "itertoolsmodule.c"
        var $18=_PyTuple_New($17); //@line 1898 "itertoolsmodule.c"
        $result=$18; //@line 1898 "itertoolsmodule.c"
        var $19=$result; //@line 1899 "itertoolsmodule.c"
        var $20=($19)==0; //@line 1899 "itertoolsmodule.c"
        if ($20) { __label__ = 27; break; } else { __label__ = 4; break; } //@line 1899 "itertoolsmodule.c"
      case 4: // $bb3
        var $21=$lz_addr; //@line 1901 "itertoolsmodule.c"
        var $22=$21+16; //@line 1901 "itertoolsmodule.c"
        var $23=$result; //@line 1901 "itertoolsmodule.c"
        HEAP[$22]=$23; //@line 1901 "itertoolsmodule.c"
        $i=0; //@line 1902 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1902 "itertoolsmodule.c"
      case 5: // $bb4
        var $24=$pools; //@line 1903 "itertoolsmodule.c"
        var $25=$24; //@line 1903 "itertoolsmodule.c"
        var $26=$i; //@line 1903 "itertoolsmodule.c"
        var $27=$25+12; //@line 1903 "itertoolsmodule.c"
        var $28=$27+$26*4; //@line 1903 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 1903 "itertoolsmodule.c"
        $pool=$29; //@line 1903 "itertoolsmodule.c"
        var $30=$pool; //@line 1904 "itertoolsmodule.c"
        var $31=$30; //@line 1904 "itertoolsmodule.c"
        var $32=$31+8; //@line 1904 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 1904 "itertoolsmodule.c"
        var $34=($33)==0; //@line 1904 "itertoolsmodule.c"
        if ($34) { __label__ = 27; break; } else { __label__ = 6; break; } //@line 1904 "itertoolsmodule.c"
      case 6: // $bb5
        var $35=$pool; //@line 1906 "itertoolsmodule.c"
        var $36=$35; //@line 1906 "itertoolsmodule.c"
        var $37=$36+12; //@line 1906 "itertoolsmodule.c"
        var $38=$37; //@line 1906 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 1906 "itertoolsmodule.c"
        $elem=$39; //@line 1906 "itertoolsmodule.c"
        var $40=$elem; //@line 1907 "itertoolsmodule.c"
        var $41=$40; //@line 1907 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 1907 "itertoolsmodule.c"
        var $43=($42) + 1; //@line 1907 "itertoolsmodule.c"
        var $44=$elem; //@line 1907 "itertoolsmodule.c"
        var $45=$44; //@line 1907 "itertoolsmodule.c"
        HEAP[$45]=$43; //@line 1907 "itertoolsmodule.c"
        var $46=$result; //@line 1908 "itertoolsmodule.c"
        var $47=$46; //@line 1908 "itertoolsmodule.c"
        var $48=$i; //@line 1908 "itertoolsmodule.c"
        var $49=$47+12; //@line 1908 "itertoolsmodule.c"
        var $50=$49+$48*4; //@line 1908 "itertoolsmodule.c"
        var $51=$elem; //@line 1908 "itertoolsmodule.c"
        HEAP[$50]=$51; //@line 1908 "itertoolsmodule.c"
        var $52=$i; //@line 1902 "itertoolsmodule.c"
        var $53=($52) + 1; //@line 1902 "itertoolsmodule.c"
        $i=$53; //@line 1902 "itertoolsmodule.c"
        __label__ = 7; break; //@line 1902 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$i; //@line 1902 "itertoolsmodule.c"
        var $55=$npools; //@line 1902 "itertoolsmodule.c"
        var $56=($54) < ($55); //@line 1902 "itertoolsmodule.c"
        if ($56) { __label__ = 5; break; } else { __label__ = 26; break; } //@line 1902 "itertoolsmodule.c"
      case 8: // $bb8
        var $57=$lz_addr; //@line 1911 "itertoolsmodule.c"
        var $58=$57+12; //@line 1911 "itertoolsmodule.c"
        var $59=HEAP[$58]; //@line 1911 "itertoolsmodule.c"
        $indices=$59; //@line 1911 "itertoolsmodule.c"
        var $60=$result; //@line 1914 "itertoolsmodule.c"
        var $61=$60; //@line 1914 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 1914 "itertoolsmodule.c"
        var $63=($62) > 1; //@line 1914 "itertoolsmodule.c"
        if ($63) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1914 "itertoolsmodule.c"
      case 9: // $bb9
        var $64=$result; //@line 1915 "itertoolsmodule.c"
        $old_result=$64; //@line 1915 "itertoolsmodule.c"
        var $65=$npools; //@line 1916 "itertoolsmodule.c"
        var $66=_PyTuple_New($65); //@line 1916 "itertoolsmodule.c"
        $result=$66; //@line 1916 "itertoolsmodule.c"
        var $67=$result; //@line 1917 "itertoolsmodule.c"
        var $68=($67)==0; //@line 1917 "itertoolsmodule.c"
        if ($68) { __label__ = 27; break; } else { __label__ = 10; break; } //@line 1917 "itertoolsmodule.c"
      case 10: // $bb10
        var $69=$lz_addr; //@line 1919 "itertoolsmodule.c"
        var $70=$69+16; //@line 1919 "itertoolsmodule.c"
        var $71=$result; //@line 1919 "itertoolsmodule.c"
        HEAP[$70]=$71; //@line 1919 "itertoolsmodule.c"
        $i=0; //@line 1920 "itertoolsmodule.c"
        var $72=$i; //@line 1920 "itertoolsmodule.c"
        var $73=$npools; //@line 1920 "itertoolsmodule.c"
        var $74=($72) < ($73); //@line 1920 "itertoolsmodule.c"
        var $75=$old_result; //@line 1921 "itertoolsmodule.c"
        if ($74) { __lastLabel__ = 10; __label__ = 11; break; } else { __lastLabel__ = 10; __label__ = 12; break; } //@line 1920 "itertoolsmodule.c"
      case 11: // $bb11
        var $76=__lastLabel__ == 11 ? $99 : ($75);
        var $77=$76; //@line 1921 "itertoolsmodule.c"
        var $78=$i; //@line 1921 "itertoolsmodule.c"
        var $79=$77+12; //@line 1921 "itertoolsmodule.c"
        var $80=$79+$78*4; //@line 1921 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 1921 "itertoolsmodule.c"
        $elem=$81; //@line 1921 "itertoolsmodule.c"
        var $82=$elem; //@line 1922 "itertoolsmodule.c"
        var $83=$82; //@line 1922 "itertoolsmodule.c"
        var $84=HEAP[$83]; //@line 1922 "itertoolsmodule.c"
        var $85=($84) + 1; //@line 1922 "itertoolsmodule.c"
        var $86=$elem; //@line 1922 "itertoolsmodule.c"
        var $87=$86; //@line 1922 "itertoolsmodule.c"
        HEAP[$87]=$85; //@line 1922 "itertoolsmodule.c"
        var $88=$result; //@line 1923 "itertoolsmodule.c"
        var $89=$88; //@line 1923 "itertoolsmodule.c"
        var $90=$i; //@line 1923 "itertoolsmodule.c"
        var $91=$89+12; //@line 1923 "itertoolsmodule.c"
        var $92=$91+$90*4; //@line 1923 "itertoolsmodule.c"
        var $93=$elem; //@line 1923 "itertoolsmodule.c"
        HEAP[$92]=$93; //@line 1923 "itertoolsmodule.c"
        var $94=$i; //@line 1920 "itertoolsmodule.c"
        var $95=($94) + 1; //@line 1920 "itertoolsmodule.c"
        $i=$95; //@line 1920 "itertoolsmodule.c"
        var $96=$i; //@line 1920 "itertoolsmodule.c"
        var $97=$npools; //@line 1920 "itertoolsmodule.c"
        var $98=($96) < ($97); //@line 1920 "itertoolsmodule.c"
        var $99=$old_result; //@line 1921 "itertoolsmodule.c"
        if ($98) { __lastLabel__ = 11; __label__ = 11; break; } else { __lastLabel__ = 11; __label__ = 12; break; } //@line 1920 "itertoolsmodule.c"
      case 12: // $bb13
        var $_lcssa=__lastLabel__ == 10 ? $75 : ($99);
        var $100=$_lcssa; //@line 1925 "itertoolsmodule.c"
        var $101=HEAP[$100]; //@line 1925 "itertoolsmodule.c"
        var $102=($101) - 1; //@line 1925 "itertoolsmodule.c"
        var $103=$old_result; //@line 1925 "itertoolsmodule.c"
        var $104=$103; //@line 1925 "itertoolsmodule.c"
        HEAP[$104]=$102; //@line 1925 "itertoolsmodule.c"
        var $105=$old_result; //@line 1925 "itertoolsmodule.c"
        var $106=$105; //@line 1925 "itertoolsmodule.c"
        var $107=HEAP[$106]; //@line 1925 "itertoolsmodule.c"
        var $108=($107)==0; //@line 1925 "itertoolsmodule.c"
        if ($108) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1925 "itertoolsmodule.c"
      case 13: // $bb14
        var $109=$old_result; //@line 1925 "itertoolsmodule.c"
        var $110=$109+4; //@line 1925 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 1925 "itertoolsmodule.c"
        var $112=$111+24; //@line 1925 "itertoolsmodule.c"
        var $113=HEAP[$112]; //@line 1925 "itertoolsmodule.c"
        var $114=$old_result; //@line 1925 "itertoolsmodule.c"
        FUNCTION_TABLE[$113]($114); //@line 1925 "itertoolsmodule.c"
        __label__ = 14; break; //@line 1925 "itertoolsmodule.c"
      case 14: // $bb15
        var $115=$npools; //@line 1928 "itertoolsmodule.c"
        var $116=($115)!=0; //@line 1928 "itertoolsmodule.c"
        if ($116) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1928 "itertoolsmodule.c"
      case 15: // $bb16
        var $117=$result; //@line 1928 "itertoolsmodule.c"
        var $118=$117; //@line 1928 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 1928 "itertoolsmodule.c"
        var $120=($119)!=1; //@line 1928 "itertoolsmodule.c"
        if ($120) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1928 "itertoolsmodule.c"
      case 16: // $bb17
        ___assert_fail(__str44, __str5, 1928, ___PRETTY_FUNCTION___10428); //@line 1928 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 1928 "itertoolsmodule.c"
      case 17: // $bb18
        var $121=$npools; //@line 1932 "itertoolsmodule.c"
        var $122=($121) - 1; //@line 1932 "itertoolsmodule.c"
        $i=$122; //@line 1932 "itertoolsmodule.c"
        __lastLabel__ = 17; __label__ = 24; break; //@line 1932 "itertoolsmodule.c"
      case 18: // $bb19
        var $123=$pools; //@line 1933 "itertoolsmodule.c"
        var $124=$123; //@line 1933 "itertoolsmodule.c"
        var $125=$i; //@line 1933 "itertoolsmodule.c"
        var $126=$124+12; //@line 1933 "itertoolsmodule.c"
        var $127=$126+$125*4; //@line 1933 "itertoolsmodule.c"
        var $128=HEAP[$127]; //@line 1933 "itertoolsmodule.c"
        $pool=$128; //@line 1933 "itertoolsmodule.c"
        var $129=$indices; //@line 1934 "itertoolsmodule.c"
        var $130=$i; //@line 1934 "itertoolsmodule.c"
        var $131=$129+4*$130; //@line 1934 "itertoolsmodule.c"
        var $132=HEAP[$131]; //@line 1934 "itertoolsmodule.c"
        var $133=($132) + 1; //@line 1934 "itertoolsmodule.c"
        var $134=$indices; //@line 1934 "itertoolsmodule.c"
        var $135=$i; //@line 1934 "itertoolsmodule.c"
        var $136=$134+4*$135; //@line 1934 "itertoolsmodule.c"
        HEAP[$136]=$133; //@line 1934 "itertoolsmodule.c"
        var $137=$indices; //@line 1935 "itertoolsmodule.c"
        var $138=$i; //@line 1935 "itertoolsmodule.c"
        var $139=$137+4*$138; //@line 1935 "itertoolsmodule.c"
        var $140=HEAP[$139]; //@line 1935 "itertoolsmodule.c"
        var $141=$pool; //@line 1935 "itertoolsmodule.c"
        var $142=$141; //@line 1935 "itertoolsmodule.c"
        var $143=$142+8; //@line 1935 "itertoolsmodule.c"
        var $144=HEAP[$143]; //@line 1935 "itertoolsmodule.c"
        var $145=($140)==($144); //@line 1935 "itertoolsmodule.c"
        if ($145) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 1935 "itertoolsmodule.c"
      case 19: // $bb20
        var $146=$indices; //@line 1937 "itertoolsmodule.c"
        var $147=$i; //@line 1937 "itertoolsmodule.c"
        var $148=$146+4*$147; //@line 1937 "itertoolsmodule.c"
        HEAP[$148]=0; //@line 1937 "itertoolsmodule.c"
        var $149=$pool; //@line 1938 "itertoolsmodule.c"
        var $150=$149; //@line 1938 "itertoolsmodule.c"
        var $151=$150+12; //@line 1938 "itertoolsmodule.c"
        var $152=$151; //@line 1938 "itertoolsmodule.c"
        var $153=HEAP[$152]; //@line 1938 "itertoolsmodule.c"
        $elem=$153; //@line 1938 "itertoolsmodule.c"
        var $154=$elem; //@line 1939 "itertoolsmodule.c"
        var $155=$154; //@line 1939 "itertoolsmodule.c"
        var $156=HEAP[$155]; //@line 1939 "itertoolsmodule.c"
        var $157=($156) + 1; //@line 1939 "itertoolsmodule.c"
        var $158=$elem; //@line 1939 "itertoolsmodule.c"
        var $159=$158; //@line 1939 "itertoolsmodule.c"
        HEAP[$159]=$157; //@line 1939 "itertoolsmodule.c"
        var $160=$result; //@line 1940 "itertoolsmodule.c"
        var $161=$160; //@line 1940 "itertoolsmodule.c"
        var $162=$i; //@line 1940 "itertoolsmodule.c"
        var $163=$161+12; //@line 1940 "itertoolsmodule.c"
        var $164=$163+$162*4; //@line 1940 "itertoolsmodule.c"
        var $165=HEAP[$164]; //@line 1940 "itertoolsmodule.c"
        $oldelem=$165; //@line 1940 "itertoolsmodule.c"
        var $166=$result; //@line 1941 "itertoolsmodule.c"
        var $167=$166; //@line 1941 "itertoolsmodule.c"
        var $168=$i; //@line 1941 "itertoolsmodule.c"
        var $169=$167+12; //@line 1941 "itertoolsmodule.c"
        var $170=$169+$168*4; //@line 1941 "itertoolsmodule.c"
        var $171=$elem; //@line 1941 "itertoolsmodule.c"
        HEAP[$170]=$171; //@line 1941 "itertoolsmodule.c"
        var $172=$oldelem; //@line 1942 "itertoolsmodule.c"
        var $173=$172; //@line 1942 "itertoolsmodule.c"
        var $174=HEAP[$173]; //@line 1942 "itertoolsmodule.c"
        var $175=($174) - 1; //@line 1942 "itertoolsmodule.c"
        var $176=$oldelem; //@line 1942 "itertoolsmodule.c"
        var $177=$176; //@line 1942 "itertoolsmodule.c"
        HEAP[$177]=$175; //@line 1942 "itertoolsmodule.c"
        var $178=$oldelem; //@line 1942 "itertoolsmodule.c"
        var $179=$178; //@line 1942 "itertoolsmodule.c"
        var $180=HEAP[$179]; //@line 1942 "itertoolsmodule.c"
        var $181=($180)==0; //@line 1942 "itertoolsmodule.c"
        if ($181) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1942 "itertoolsmodule.c"
      case 20: // $bb21
        var $182=$oldelem; //@line 1942 "itertoolsmodule.c"
        var $183=$182+4; //@line 1942 "itertoolsmodule.c"
        var $184=HEAP[$183]; //@line 1942 "itertoolsmodule.c"
        var $185=$184+24; //@line 1942 "itertoolsmodule.c"
        var $186=HEAP[$185]; //@line 1942 "itertoolsmodule.c"
        var $187=$oldelem; //@line 1942 "itertoolsmodule.c"
        FUNCTION_TABLE[$186]($187); //@line 1942 "itertoolsmodule.c"
        __label__ = 21; break; //@line 1942 "itertoolsmodule.c"
      case 21: // $bb22
        var $188=$i; //@line 1932 "itertoolsmodule.c"
        var $189=($188) - 1; //@line 1932 "itertoolsmodule.c"
        $i=$189; //@line 1932 "itertoolsmodule.c"
        __lastLabel__ = 21; __label__ = 24; break; //@line 1932 "itertoolsmodule.c"
      case 22: // $bb23
        var $190=$pool; //@line 1945 "itertoolsmodule.c"
        var $191=$190; //@line 1945 "itertoolsmodule.c"
        var $192=$indices; //@line 1945 "itertoolsmodule.c"
        var $193=$i; //@line 1945 "itertoolsmodule.c"
        var $194=$192+4*$193; //@line 1945 "itertoolsmodule.c"
        var $195=HEAP[$194]; //@line 1945 "itertoolsmodule.c"
        var $196=$191+12; //@line 1945 "itertoolsmodule.c"
        var $197=$196+$195*4; //@line 1945 "itertoolsmodule.c"
        var $198=HEAP[$197]; //@line 1945 "itertoolsmodule.c"
        $elem=$198; //@line 1945 "itertoolsmodule.c"
        var $199=$elem; //@line 1946 "itertoolsmodule.c"
        var $200=$199; //@line 1946 "itertoolsmodule.c"
        var $201=HEAP[$200]; //@line 1946 "itertoolsmodule.c"
        var $202=($201) + 1; //@line 1946 "itertoolsmodule.c"
        var $203=$elem; //@line 1946 "itertoolsmodule.c"
        var $204=$203; //@line 1946 "itertoolsmodule.c"
        HEAP[$204]=$202; //@line 1946 "itertoolsmodule.c"
        var $205=$result; //@line 1947 "itertoolsmodule.c"
        var $206=$205; //@line 1947 "itertoolsmodule.c"
        var $207=$i; //@line 1947 "itertoolsmodule.c"
        var $208=$206+12; //@line 1947 "itertoolsmodule.c"
        var $209=$208+$207*4; //@line 1947 "itertoolsmodule.c"
        var $210=HEAP[$209]; //@line 1947 "itertoolsmodule.c"
        $oldelem=$210; //@line 1947 "itertoolsmodule.c"
        var $211=$result; //@line 1948 "itertoolsmodule.c"
        var $212=$211; //@line 1948 "itertoolsmodule.c"
        var $213=$i; //@line 1948 "itertoolsmodule.c"
        var $214=$212+12; //@line 1948 "itertoolsmodule.c"
        var $215=$214+$213*4; //@line 1948 "itertoolsmodule.c"
        var $216=$elem; //@line 1948 "itertoolsmodule.c"
        HEAP[$215]=$216; //@line 1948 "itertoolsmodule.c"
        var $217=$oldelem; //@line 1949 "itertoolsmodule.c"
        var $218=$217; //@line 1949 "itertoolsmodule.c"
        var $219=HEAP[$218]; //@line 1949 "itertoolsmodule.c"
        var $220=($219) - 1; //@line 1949 "itertoolsmodule.c"
        var $221=$oldelem; //@line 1949 "itertoolsmodule.c"
        var $222=$221; //@line 1949 "itertoolsmodule.c"
        HEAP[$222]=$220; //@line 1949 "itertoolsmodule.c"
        var $223=$oldelem; //@line 1949 "itertoolsmodule.c"
        var $224=$223; //@line 1949 "itertoolsmodule.c"
        var $225=HEAP[$224]; //@line 1949 "itertoolsmodule.c"
        var $226=($225)==0; //@line 1949 "itertoolsmodule.c"
        if ($226) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 1949 "itertoolsmodule.c"
      case 23: // $bb24
        var $227=$oldelem; //@line 1949 "itertoolsmodule.c"
        var $228=$227+4; //@line 1949 "itertoolsmodule.c"
        var $229=HEAP[$228]; //@line 1949 "itertoolsmodule.c"
        var $230=$229+24; //@line 1949 "itertoolsmodule.c"
        var $231=HEAP[$230]; //@line 1949 "itertoolsmodule.c"
        var $232=$oldelem; //@line 1949 "itertoolsmodule.c"
        FUNCTION_TABLE[$231]($232); //@line 1949 "itertoolsmodule.c"
        __label__ = 25; break; //@line 1949 "itertoolsmodule.c"
      case 24: // $bb26
        var $233=__lastLabel__ == 21 ? $189 : ($122);
        var $234=($233) >= 0; //@line 1932 "itertoolsmodule.c"
        if ($234) { __label__ = 18; break; } else { __label__ = 25; break; } //@line 1932 "itertoolsmodule.c"
      case 25: // $bb27
        var $235=$i; //@line 1956 "itertoolsmodule.c"
        var $236=($235) < 0; //@line 1956 "itertoolsmodule.c"
        if ($236) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1956 "itertoolsmodule.c"
      case 26: // $bb28
        var $237=$result; //@line 1960 "itertoolsmodule.c"
        var $238=$237; //@line 1960 "itertoolsmodule.c"
        var $239=HEAP[$238]; //@line 1960 "itertoolsmodule.c"
        var $240=($239) + 1; //@line 1960 "itertoolsmodule.c"
        var $241=$result; //@line 1960 "itertoolsmodule.c"
        var $242=$241; //@line 1960 "itertoolsmodule.c"
        HEAP[$242]=$240; //@line 1960 "itertoolsmodule.c"
        var $243=$result; //@line 1961 "itertoolsmodule.c"
        $0=$243; //@line 1961 "itertoolsmodule.c"
        __label__ = 28; break; //@line 1961 "itertoolsmodule.c"
      case 27: // $empty
        var $244=$lz_addr; //@line 1964 "itertoolsmodule.c"
        var $245=$244+20; //@line 1964 "itertoolsmodule.c"
        HEAP[$245]=1; //@line 1964 "itertoolsmodule.c"
        $0=0; //@line 1965 "itertoolsmodule.c"
        __label__ = 28; break; //@line 1965 "itertoolsmodule.c"
      case 28: // $bb29
        var $246=$0; //@line 1893 "itertoolsmodule.c"
        $retval=$246; //@line 1893 "itertoolsmodule.c"
        var $retval30=$retval; //@line 1893 "itertoolsmodule.c"
        ;
        return $retval30; //@line 1893 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _combinations_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $co;
        var $n;
        var $r=__stackBase__;
        var $pool;
        var $iterable=__stackBase__+4;
        var $indices;
        var $i;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $pool=0; //@line 2046 "itertoolsmodule.c"
        HEAP[$iterable]=0; //@line 2047 "itertoolsmodule.c"
        $indices=0; //@line 2048 "itertoolsmodule.c"
        var $1=$args_addr; //@line 2052 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 2052 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str46, _kwargs_10542, allocate([$iterable,0,0,0,$r,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2052 "itertoolsmodule.c"
        var $4=($3)==0; //@line 2052 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2052 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2054 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2054 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=HEAP[$iterable]; //@line 2056 "itertoolsmodule.c"
        var $6=_PySequence_Tuple($5); //@line 2056 "itertoolsmodule.c"
        $pool=$6; //@line 2056 "itertoolsmodule.c"
        var $7=$pool; //@line 2057 "itertoolsmodule.c"
        var $8=($7)==0; //@line 2057 "itertoolsmodule.c"
        if ($8) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 2057 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$pool; //@line 2059 "itertoolsmodule.c"
        var $10=$9; //@line 2059 "itertoolsmodule.c"
        var $11=$10+8; //@line 2059 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 2059 "itertoolsmodule.c"
        $n=$12; //@line 2059 "itertoolsmodule.c"
        var $13=HEAP[$r]; //@line 2060 "itertoolsmodule.c"
        var $14=($13) < 0; //@line 2060 "itertoolsmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2060 "itertoolsmodule.c"
      case 4: // $bb3
        var $15=HEAP[_PyExc_ValueError]; //@line 2061 "itertoolsmodule.c"
        _PyErr_SetString($15, __str48); //@line 2061 "itertoolsmodule.c"
        __label__ = 11; break; //@line 2061 "itertoolsmodule.c"
      case 5: // $bb4
        var $16=HEAP[$r]; //@line 2065 "itertoolsmodule.c"
        var $17=($16) * 4; //@line 2065 "itertoolsmodule.c"
        var $18=_PyMem_Malloc($17); //@line 2065 "itertoolsmodule.c"
        var $19=$18; //@line 2065 "itertoolsmodule.c"
        $indices=$19; //@line 2065 "itertoolsmodule.c"
        var $20=$indices; //@line 2066 "itertoolsmodule.c"
        var $21=($20)==0; //@line 2066 "itertoolsmodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2066 "itertoolsmodule.c"
      case 6: // $bb5
        var $22=_PyErr_NoMemory(); //@line 2067 "itertoolsmodule.c"
        __label__ = 11; break; //@line 2067 "itertoolsmodule.c"
      case 7: // $bb6
        $i=0; //@line 2071 "itertoolsmodule.c"
        var $23=HEAP[$r]; //@line 2071 "itertoolsmodule.c"
        var $24=$i; //@line 2071 "itertoolsmodule.c"
        var $25=($24) < ($23); //@line 2071 "itertoolsmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2071 "itertoolsmodule.c"
      case 8: // $bb7
        var $26=$indices; //@line 2072 "itertoolsmodule.c"
        var $27=$i; //@line 2072 "itertoolsmodule.c"
        var $28=$26+4*$27; //@line 2072 "itertoolsmodule.c"
        var $29=$i; //@line 2072 "itertoolsmodule.c"
        HEAP[$28]=$29; //@line 2072 "itertoolsmodule.c"
        var $30=$i; //@line 2071 "itertoolsmodule.c"
        var $31=($30) + 1; //@line 2071 "itertoolsmodule.c"
        $i=$31; //@line 2071 "itertoolsmodule.c"
        var $32=HEAP[$r]; //@line 2071 "itertoolsmodule.c"
        var $33=$i; //@line 2071 "itertoolsmodule.c"
        var $34=($33) < ($32); //@line 2071 "itertoolsmodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2071 "itertoolsmodule.c"
      case 9: // $bb9
        var $35=$type_addr; //@line 2075 "itertoolsmodule.c"
        var $36=$35+152; //@line 2075 "itertoolsmodule.c"
        var $37=HEAP[$36]; //@line 2075 "itertoolsmodule.c"
        var $38=$type_addr; //@line 2075 "itertoolsmodule.c"
        var $39=FUNCTION_TABLE[$37]($38, 0); //@line 2075 "itertoolsmodule.c"
        var $40=$39; //@line 2075 "itertoolsmodule.c"
        $co=$40; //@line 2075 "itertoolsmodule.c"
        var $41=($40)==0; //@line 2076 "itertoolsmodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2076 "itertoolsmodule.c"
      case 10: // $bb10
        var $42=$co; //@line 2079 "itertoolsmodule.c"
        var $43=$42+8; //@line 2079 "itertoolsmodule.c"
        var $44=$pool; //@line 2079 "itertoolsmodule.c"
        HEAP[$43]=$44; //@line 2079 "itertoolsmodule.c"
        var $45=$co; //@line 2080 "itertoolsmodule.c"
        var $46=$45+12; //@line 2080 "itertoolsmodule.c"
        var $47=$indices; //@line 2080 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 2080 "itertoolsmodule.c"
        var $48=$co; //@line 2081 "itertoolsmodule.c"
        var $49=$48+16; //@line 2081 "itertoolsmodule.c"
        HEAP[$49]=0; //@line 2081 "itertoolsmodule.c"
        var $50=HEAP[$r]; //@line 2082 "itertoolsmodule.c"
        var $51=$co; //@line 2082 "itertoolsmodule.c"
        var $52=$51+20; //@line 2082 "itertoolsmodule.c"
        HEAP[$52]=$50; //@line 2082 "itertoolsmodule.c"
        var $53=HEAP[$r]; //@line 2083 "itertoolsmodule.c"
        var $54=$n; //@line 2083 "itertoolsmodule.c"
        var $55=($53) > ($54); //@line 2083 "itertoolsmodule.c"
        var $56=($55); //@line 2083 "itertoolsmodule.c"
        var $57=$co; //@line 2083 "itertoolsmodule.c"
        var $58=$57+24; //@line 2083 "itertoolsmodule.c"
        HEAP[$58]=$56; //@line 2083 "itertoolsmodule.c"
        var $59=$co; //@line 2085 "itertoolsmodule.c"
        var $60=$59; //@line 2085 "itertoolsmodule.c"
        $0=$60; //@line 2085 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2085 "itertoolsmodule.c"
      case 11: // $error
        var $61=$indices; //@line 2088 "itertoolsmodule.c"
        var $62=($61)!=0; //@line 2088 "itertoolsmodule.c"
        if ($62) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2088 "itertoolsmodule.c"
      case 12: // $bb11
        var $63=$indices; //@line 2089 "itertoolsmodule.c"
        var $64=$63; //@line 2089 "itertoolsmodule.c"
        _PyMem_Free($64); //@line 2089 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2089 "itertoolsmodule.c"
      case 13: // $bb12
        var $65=$pool; //@line 2090 "itertoolsmodule.c"
        var $66=($65)!=0; //@line 2090 "itertoolsmodule.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2090 "itertoolsmodule.c"
      case 14: // $bb13
        var $67=$pool; //@line 2090 "itertoolsmodule.c"
        var $68=$67; //@line 2090 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 2090 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 2090 "itertoolsmodule.c"
        var $71=$pool; //@line 2090 "itertoolsmodule.c"
        var $72=$71; //@line 2090 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 2090 "itertoolsmodule.c"
        var $73=$pool; //@line 2090 "itertoolsmodule.c"
        var $74=$73; //@line 2090 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 2090 "itertoolsmodule.c"
        var $76=($75)==0; //@line 2090 "itertoolsmodule.c"
        if ($76) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2090 "itertoolsmodule.c"
      case 15: // $bb14
        var $77=$pool; //@line 2090 "itertoolsmodule.c"
        var $78=$77+4; //@line 2090 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 2090 "itertoolsmodule.c"
        var $80=$79+24; //@line 2090 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 2090 "itertoolsmodule.c"
        var $82=$pool; //@line 2090 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 2090 "itertoolsmodule.c"
        __label__ = 16; break; //@line 2090 "itertoolsmodule.c"
      case 16: // $bb15
        $0=0; //@line 2091 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2091 "itertoolsmodule.c"
      case 17: // $bb16
        var $83=$0; //@line 2054 "itertoolsmodule.c"
        $retval=$83; //@line 2054 "itertoolsmodule.c"
        var $retval17=$retval; //@line 2054 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 2054 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _combinations_dealloc($co) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        $co_addr=$co;
        var $0=$co_addr; //@line 2097 "itertoolsmodule.c"
        var $1=$0; //@line 2097 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 2097 "itertoolsmodule.c"
        var $2=$co_addr; //@line 2098 "itertoolsmodule.c"
        var $3=$2+8; //@line 2098 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 2098 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 2098 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2098 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$co_addr; //@line 2098 "itertoolsmodule.c"
        var $7=$6+8; //@line 2098 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2098 "itertoolsmodule.c"
        var $9=$8; //@line 2098 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 2098 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 2098 "itertoolsmodule.c"
        var $12=$8; //@line 2098 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 2098 "itertoolsmodule.c"
        var $13=$8; //@line 2098 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2098 "itertoolsmodule.c"
        var $15=($14)==0; //@line 2098 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2098 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$co_addr; //@line 2098 "itertoolsmodule.c"
        var $17=$16+8; //@line 2098 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 2098 "itertoolsmodule.c"
        var $19=$18+4; //@line 2098 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2098 "itertoolsmodule.c"
        var $21=$20+24; //@line 2098 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2098 "itertoolsmodule.c"
        var $23=$co_addr; //@line 2098 "itertoolsmodule.c"
        var $24=$23+8; //@line 2098 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2098 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 2098 "itertoolsmodule.c"
        __label__ = 3; break; //@line 2098 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$co_addr; //@line 2099 "itertoolsmodule.c"
        var $27=$26+16; //@line 2099 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2099 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 2099 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2099 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$co_addr; //@line 2099 "itertoolsmodule.c"
        var $31=$30+16; //@line 2099 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2099 "itertoolsmodule.c"
        var $33=$32; //@line 2099 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2099 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 2099 "itertoolsmodule.c"
        var $36=$32; //@line 2099 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 2099 "itertoolsmodule.c"
        var $37=$32; //@line 2099 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2099 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2099 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2099 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$co_addr; //@line 2099 "itertoolsmodule.c"
        var $41=$40+16; //@line 2099 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2099 "itertoolsmodule.c"
        var $43=$42+4; //@line 2099 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2099 "itertoolsmodule.c"
        var $45=$44+24; //@line 2099 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2099 "itertoolsmodule.c"
        var $47=$co_addr; //@line 2099 "itertoolsmodule.c"
        var $48=$47+16; //@line 2099 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 2099 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 2099 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2099 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$co_addr; //@line 2100 "itertoolsmodule.c"
        var $51=$50+12; //@line 2100 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 2100 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 2100 "itertoolsmodule.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2100 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$co_addr; //@line 2101 "itertoolsmodule.c"
        var $55=$54+12; //@line 2101 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 2101 "itertoolsmodule.c"
        var $57=$56; //@line 2101 "itertoolsmodule.c"
        _PyMem_Free($57); //@line 2101 "itertoolsmodule.c"
        __label__ = 8; break; //@line 2101 "itertoolsmodule.c"
      case 8: // $bb7
        var $58=$co_addr; //@line 2102 "itertoolsmodule.c"
        var $59=$58; //@line 2102 "itertoolsmodule.c"
        var $60=$59+4; //@line 2102 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 2102 "itertoolsmodule.c"
        var $62=$61+160; //@line 2102 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 2102 "itertoolsmodule.c"
        var $64=$co_addr; //@line 2102 "itertoolsmodule.c"
        var $65=$64; //@line 2102 "itertoolsmodule.c"
        FUNCTION_TABLE[$63]($65); //@line 2102 "itertoolsmodule.c"
        ;
        return; //@line 2103 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _combinations_traverse($co, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $co_addr=$co;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$co_addr; //@line 2108 "itertoolsmodule.c"
        var $2=$1+8; //@line 2108 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2108 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 2108 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2108 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$co_addr; //@line 2108 "itertoolsmodule.c"
        var $6=$5+8; //@line 2108 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 2108 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 2108 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 2108 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 2108 "itertoolsmodule.c"
        $vret=$10; //@line 2108 "itertoolsmodule.c"
        var $11=$vret; //@line 2108 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 2108 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2108 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 2108 "itertoolsmodule.c"
        $0=$13; //@line 2108 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2108 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$co_addr; //@line 2109 "itertoolsmodule.c"
        var $15=$14+16; //@line 2109 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2109 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 2109 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2109 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$co_addr; //@line 2109 "itertoolsmodule.c"
        var $19=$18+16; //@line 2109 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2109 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 2109 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 2109 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 2109 "itertoolsmodule.c"
        $vret4=$23; //@line 2109 "itertoolsmodule.c"
        var $24=$vret4; //@line 2109 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 2109 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2109 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 2109 "itertoolsmodule.c"
        $0=$26; //@line 2109 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2109 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 2110 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2110 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 2108 "itertoolsmodule.c"
        $retval=$27; //@line 2108 "itertoolsmodule.c"
        var $retval8=$retval; //@line 2108 "itertoolsmodule.c"
        ;
        return $retval8; //@line 2108 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _combinations_next($co) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        var $retval;
        var $0;
        var $elem;
        var $oldelem;
        var $pool;
        var $indices;
        var $result;
        var $n;
        var $r;
        var $i;
        var $j;
        var $index;
        var $old_result;
        $co_addr=$co;
        var $1=$co_addr; //@line 2118 "itertoolsmodule.c"
        var $2=$1+8; //@line 2118 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2118 "itertoolsmodule.c"
        $pool=$3; //@line 2118 "itertoolsmodule.c"
        var $4=$co_addr; //@line 2119 "itertoolsmodule.c"
        var $5=$4+12; //@line 2119 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 2119 "itertoolsmodule.c"
        $indices=$6; //@line 2119 "itertoolsmodule.c"
        var $7=$co_addr; //@line 2120 "itertoolsmodule.c"
        var $8=$7+16; //@line 2120 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 2120 "itertoolsmodule.c"
        $result=$9; //@line 2120 "itertoolsmodule.c"
        var $10=$pool; //@line 2121 "itertoolsmodule.c"
        var $11=$10; //@line 2121 "itertoolsmodule.c"
        var $12=$11+8; //@line 2121 "itertoolsmodule.c"
        var $13=HEAP[$12]; //@line 2121 "itertoolsmodule.c"
        $n=$13; //@line 2121 "itertoolsmodule.c"
        var $14=$co_addr; //@line 2122 "itertoolsmodule.c"
        var $15=$14+20; //@line 2122 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2122 "itertoolsmodule.c"
        $r=$16; //@line 2122 "itertoolsmodule.c"
        var $17=$co_addr; //@line 2125 "itertoolsmodule.c"
        var $18=$17+24; //@line 2125 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 2125 "itertoolsmodule.c"
        var $20=($19)!=0; //@line 2125 "itertoolsmodule.c"
        if ($20) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2125 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2126 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2126 "itertoolsmodule.c"
      case 2: // $bb1
        var $21=$result; //@line 2128 "itertoolsmodule.c"
        var $22=($21)==0; //@line 2128 "itertoolsmodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2128 "itertoolsmodule.c"
      case 3: // $bb2
        var $23=$r; //@line 2130 "itertoolsmodule.c"
        var $24=_PyTuple_New($23); //@line 2130 "itertoolsmodule.c"
        $result=$24; //@line 2130 "itertoolsmodule.c"
        var $25=$result; //@line 2131 "itertoolsmodule.c"
        var $26=($25)==0; //@line 2131 "itertoolsmodule.c"
        if ($26) { __label__ = 27; break; } else { __label__ = 4; break; } //@line 2131 "itertoolsmodule.c"
      case 4: // $bb3
        var $27=$co_addr; //@line 2133 "itertoolsmodule.c"
        var $28=$27+16; //@line 2133 "itertoolsmodule.c"
        var $29=$result; //@line 2133 "itertoolsmodule.c"
        HEAP[$28]=$29; //@line 2133 "itertoolsmodule.c"
        $i=0; //@line 2134 "itertoolsmodule.c"
        var $30=$i; //@line 2134 "itertoolsmodule.c"
        var $31=$r; //@line 2134 "itertoolsmodule.c"
        var $32=($30) < ($31); //@line 2134 "itertoolsmodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 26; break; } //@line 2134 "itertoolsmodule.c"
      case 5: // $bb4
        var $33=$indices; //@line 2135 "itertoolsmodule.c"
        var $34=$i; //@line 2135 "itertoolsmodule.c"
        var $35=$33+4*$34; //@line 2135 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 2135 "itertoolsmodule.c"
        $index=$36; //@line 2135 "itertoolsmodule.c"
        var $37=$pool; //@line 2136 "itertoolsmodule.c"
        var $38=$37; //@line 2136 "itertoolsmodule.c"
        var $39=$index; //@line 2136 "itertoolsmodule.c"
        var $40=$38+12; //@line 2136 "itertoolsmodule.c"
        var $41=$40+$39*4; //@line 2136 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2136 "itertoolsmodule.c"
        $elem=$42; //@line 2136 "itertoolsmodule.c"
        var $43=$elem; //@line 2137 "itertoolsmodule.c"
        var $44=$43; //@line 2137 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 2137 "itertoolsmodule.c"
        var $46=($45) + 1; //@line 2137 "itertoolsmodule.c"
        var $47=$elem; //@line 2137 "itertoolsmodule.c"
        var $48=$47; //@line 2137 "itertoolsmodule.c"
        HEAP[$48]=$46; //@line 2137 "itertoolsmodule.c"
        var $49=$result; //@line 2138 "itertoolsmodule.c"
        var $50=$49; //@line 2138 "itertoolsmodule.c"
        var $51=$i; //@line 2138 "itertoolsmodule.c"
        var $52=$50+12; //@line 2138 "itertoolsmodule.c"
        var $53=$52+$51*4; //@line 2138 "itertoolsmodule.c"
        var $54=$elem; //@line 2138 "itertoolsmodule.c"
        HEAP[$53]=$54; //@line 2138 "itertoolsmodule.c"
        var $55=$i; //@line 2134 "itertoolsmodule.c"
        var $56=($55) + 1; //@line 2134 "itertoolsmodule.c"
        $i=$56; //@line 2134 "itertoolsmodule.c"
        var $57=$i; //@line 2134 "itertoolsmodule.c"
        var $58=$r; //@line 2134 "itertoolsmodule.c"
        var $59=($57) < ($58); //@line 2134 "itertoolsmodule.c"
        if ($59) { __label__ = 5; break; } else { __label__ = 26; break; } //@line 2134 "itertoolsmodule.c"
      case 6: // $bb7
        var $60=$result; //@line 2142 "itertoolsmodule.c"
        var $61=$60; //@line 2142 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 2142 "itertoolsmodule.c"
        var $63=($62) > 1; //@line 2142 "itertoolsmodule.c"
        if ($63) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2142 "itertoolsmodule.c"
      case 7: // $bb8
        var $64=$result; //@line 2143 "itertoolsmodule.c"
        $old_result=$64; //@line 2143 "itertoolsmodule.c"
        var $65=$r; //@line 2144 "itertoolsmodule.c"
        var $66=_PyTuple_New($65); //@line 2144 "itertoolsmodule.c"
        $result=$66; //@line 2144 "itertoolsmodule.c"
        var $67=$result; //@line 2145 "itertoolsmodule.c"
        var $68=($67)==0; //@line 2145 "itertoolsmodule.c"
        if ($68) { __label__ = 27; break; } else { __label__ = 8; break; } //@line 2145 "itertoolsmodule.c"
      case 8: // $bb9
        var $69=$co_addr; //@line 2147 "itertoolsmodule.c"
        var $70=$69+16; //@line 2147 "itertoolsmodule.c"
        var $71=$result; //@line 2147 "itertoolsmodule.c"
        HEAP[$70]=$71; //@line 2147 "itertoolsmodule.c"
        $i=0; //@line 2148 "itertoolsmodule.c"
        var $72=$i; //@line 2148 "itertoolsmodule.c"
        var $73=$r; //@line 2148 "itertoolsmodule.c"
        var $74=($72) < ($73); //@line 2148 "itertoolsmodule.c"
        var $75=$old_result; //@line 2149 "itertoolsmodule.c"
        if ($74) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 10; break; } //@line 2148 "itertoolsmodule.c"
      case 9: // $bb10
        var $76=__lastLabel__ == 9 ? $99 : ($75);
        var $77=$76; //@line 2149 "itertoolsmodule.c"
        var $78=$i; //@line 2149 "itertoolsmodule.c"
        var $79=$77+12; //@line 2149 "itertoolsmodule.c"
        var $80=$79+$78*4; //@line 2149 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 2149 "itertoolsmodule.c"
        $elem=$81; //@line 2149 "itertoolsmodule.c"
        var $82=$elem; //@line 2150 "itertoolsmodule.c"
        var $83=$82; //@line 2150 "itertoolsmodule.c"
        var $84=HEAP[$83]; //@line 2150 "itertoolsmodule.c"
        var $85=($84) + 1; //@line 2150 "itertoolsmodule.c"
        var $86=$elem; //@line 2150 "itertoolsmodule.c"
        var $87=$86; //@line 2150 "itertoolsmodule.c"
        HEAP[$87]=$85; //@line 2150 "itertoolsmodule.c"
        var $88=$result; //@line 2151 "itertoolsmodule.c"
        var $89=$88; //@line 2151 "itertoolsmodule.c"
        var $90=$i; //@line 2151 "itertoolsmodule.c"
        var $91=$89+12; //@line 2151 "itertoolsmodule.c"
        var $92=$91+$90*4; //@line 2151 "itertoolsmodule.c"
        var $93=$elem; //@line 2151 "itertoolsmodule.c"
        HEAP[$92]=$93; //@line 2151 "itertoolsmodule.c"
        var $94=$i; //@line 2148 "itertoolsmodule.c"
        var $95=($94) + 1; //@line 2148 "itertoolsmodule.c"
        $i=$95; //@line 2148 "itertoolsmodule.c"
        var $96=$i; //@line 2148 "itertoolsmodule.c"
        var $97=$r; //@line 2148 "itertoolsmodule.c"
        var $98=($96) < ($97); //@line 2148 "itertoolsmodule.c"
        var $99=$old_result; //@line 2149 "itertoolsmodule.c"
        if ($98) { __lastLabel__ = 9; __label__ = 9; break; } else { __lastLabel__ = 9; __label__ = 10; break; } //@line 2148 "itertoolsmodule.c"
      case 10: // $bb12
        var $_lcssa=__lastLabel__ == 8 ? $75 : ($99);
        var $100=$_lcssa; //@line 2153 "itertoolsmodule.c"
        var $101=HEAP[$100]; //@line 2153 "itertoolsmodule.c"
        var $102=($101) - 1; //@line 2153 "itertoolsmodule.c"
        var $103=$old_result; //@line 2153 "itertoolsmodule.c"
        var $104=$103; //@line 2153 "itertoolsmodule.c"
        HEAP[$104]=$102; //@line 2153 "itertoolsmodule.c"
        var $105=$old_result; //@line 2153 "itertoolsmodule.c"
        var $106=$105; //@line 2153 "itertoolsmodule.c"
        var $107=HEAP[$106]; //@line 2153 "itertoolsmodule.c"
        var $108=($107)==0; //@line 2153 "itertoolsmodule.c"
        if ($108) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2153 "itertoolsmodule.c"
      case 11: // $bb13
        var $109=$old_result; //@line 2153 "itertoolsmodule.c"
        var $110=$109+4; //@line 2153 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 2153 "itertoolsmodule.c"
        var $112=$111+24; //@line 2153 "itertoolsmodule.c"
        var $113=HEAP[$112]; //@line 2153 "itertoolsmodule.c"
        var $114=$old_result; //@line 2153 "itertoolsmodule.c"
        FUNCTION_TABLE[$113]($114); //@line 2153 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2153 "itertoolsmodule.c"
      case 12: // $bb14
        var $115=$r; //@line 2159 "itertoolsmodule.c"
        var $116=($115)!=0; //@line 2159 "itertoolsmodule.c"
        if ($116) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2159 "itertoolsmodule.c"
      case 13: // $bb15
        var $117=$result; //@line 2159 "itertoolsmodule.c"
        var $118=$117; //@line 2159 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 2159 "itertoolsmodule.c"
        var $120=($119)!=1; //@line 2159 "itertoolsmodule.c"
        if ($120) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2159 "itertoolsmodule.c"
      case 14: // $bb16
        ___assert_fail(__str49, __str5, 2159, ___PRETTY_FUNCTION___10664); //@line 2159 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 2159 "itertoolsmodule.c"
      case 15: // $bb17
        var $121=$r; //@line 2163 "itertoolsmodule.c"
        var $122=($121) - 1; //@line 2163 "itertoolsmodule.c"
        $i=$122; //@line 2163 "itertoolsmodule.c"
        __lastLabel__ = 15; __label__ = 17; break; //@line 2163 "itertoolsmodule.c"
      case 16: // $bb18
        var $123=$i; //@line 2163 "itertoolsmodule.c"
        var $124=($123) - 1; //@line 2163 "itertoolsmodule.c"
        $i=$124; //@line 2163 "itertoolsmodule.c"
        __lastLabel__ = 16; __label__ = 17; break; //@line 2163 "itertoolsmodule.c"
      case 17: // $bb19
        var $125=__lastLabel__ == 16 ? $124 : ($122);
        var $126=($125) < 0; //@line 2163 "itertoolsmodule.c"
        if ($126) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2163 "itertoolsmodule.c"
      case 18: // $bb20
        var $127=$indices; //@line 2163 "itertoolsmodule.c"
        var $128=$i; //@line 2163 "itertoolsmodule.c"
        var $129=$127+4*$128; //@line 2163 "itertoolsmodule.c"
        var $130=HEAP[$129]; //@line 2163 "itertoolsmodule.c"
        var $131=$i; //@line 2163 "itertoolsmodule.c"
        var $132=$n; //@line 2163 "itertoolsmodule.c"
        var $133=$r; //@line 2163 "itertoolsmodule.c"
        var $_neg=0 - ($133);
        var $134=($132) + ($131); //@line 2163 "itertoolsmodule.c"
        var $135=($134) + ($_neg);
        var $136=($130)==($135); //@line 2163 "itertoolsmodule.c"
        if ($136) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2163 "itertoolsmodule.c"
      case 19: // $bb21
        var $137=$i; //@line 2168 "itertoolsmodule.c"
        var $138=($137) < 0; //@line 2168 "itertoolsmodule.c"
        if ($138) { __label__ = 27; break; } else { __label__ = 20; break; } //@line 2168 "itertoolsmodule.c"
      case 20: // $bb22
        var $139=$indices; //@line 2175 "itertoolsmodule.c"
        var $140=$i; //@line 2175 "itertoolsmodule.c"
        var $141=$139+4*$140; //@line 2175 "itertoolsmodule.c"
        var $142=HEAP[$141]; //@line 2175 "itertoolsmodule.c"
        var $143=($142) + 1; //@line 2175 "itertoolsmodule.c"
        var $144=$indices; //@line 2175 "itertoolsmodule.c"
        var $145=$i; //@line 2175 "itertoolsmodule.c"
        var $146=$144+4*$145; //@line 2175 "itertoolsmodule.c"
        HEAP[$146]=$143; //@line 2175 "itertoolsmodule.c"
        var $147=$i; //@line 2176 "itertoolsmodule.c"
        var $148=($147) + 1; //@line 2176 "itertoolsmodule.c"
        $j=$148; //@line 2176 "itertoolsmodule.c"
        var $149=$j; //@line 2176 "itertoolsmodule.c"
        var $150=$r; //@line 2176 "itertoolsmodule.c"
        var $151=($149) < ($150); //@line 2176 "itertoolsmodule.c"
        if ($151) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2176 "itertoolsmodule.c"
      case 21: // $bb23
        var $152=$j; //@line 2177 "itertoolsmodule.c"
        var $153=($152) - 1; //@line 2177 "itertoolsmodule.c"
        var $154=$indices; //@line 2177 "itertoolsmodule.c"
        var $155=$154+4*$153; //@line 2177 "itertoolsmodule.c"
        var $156=HEAP[$155]; //@line 2177 "itertoolsmodule.c"
        var $157=($156) + 1; //@line 2177 "itertoolsmodule.c"
        var $158=$indices; //@line 2177 "itertoolsmodule.c"
        var $159=$j; //@line 2177 "itertoolsmodule.c"
        var $160=$158+4*$159; //@line 2177 "itertoolsmodule.c"
        HEAP[$160]=$157; //@line 2177 "itertoolsmodule.c"
        var $161=$j; //@line 2176 "itertoolsmodule.c"
        var $162=($161) + 1; //@line 2176 "itertoolsmodule.c"
        $j=$162; //@line 2176 "itertoolsmodule.c"
        var $163=$j; //@line 2176 "itertoolsmodule.c"
        var $164=$r; //@line 2176 "itertoolsmodule.c"
        var $165=($163) < ($164); //@line 2176 "itertoolsmodule.c"
        if ($165) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2176 "itertoolsmodule.c"
      case 22: // $bb29_preheader
        var $166=$i; //@line 2181 "itertoolsmodule.c"
        var $167=$r; //@line 2181 "itertoolsmodule.c"
        var $168=($166) < ($167); //@line 2181 "itertoolsmodule.c"
        if ($168) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 2181 "itertoolsmodule.c"
      case 23: // $bb26
        var $169=$indices; //@line 2182 "itertoolsmodule.c"
        var $170=$i; //@line 2182 "itertoolsmodule.c"
        var $171=$169+4*$170; //@line 2182 "itertoolsmodule.c"
        var $172=HEAP[$171]; //@line 2182 "itertoolsmodule.c"
        $index=$172; //@line 2182 "itertoolsmodule.c"
        var $173=$pool; //@line 2183 "itertoolsmodule.c"
        var $174=$173; //@line 2183 "itertoolsmodule.c"
        var $175=$index; //@line 2183 "itertoolsmodule.c"
        var $176=$174+12; //@line 2183 "itertoolsmodule.c"
        var $177=$176+$175*4; //@line 2183 "itertoolsmodule.c"
        var $178=HEAP[$177]; //@line 2183 "itertoolsmodule.c"
        $elem=$178; //@line 2183 "itertoolsmodule.c"
        var $179=$elem; //@line 2184 "itertoolsmodule.c"
        var $180=$179; //@line 2184 "itertoolsmodule.c"
        var $181=HEAP[$180]; //@line 2184 "itertoolsmodule.c"
        var $182=($181) + 1; //@line 2184 "itertoolsmodule.c"
        var $183=$elem; //@line 2184 "itertoolsmodule.c"
        var $184=$183; //@line 2184 "itertoolsmodule.c"
        HEAP[$184]=$182; //@line 2184 "itertoolsmodule.c"
        var $185=$result; //@line 2185 "itertoolsmodule.c"
        var $186=$185; //@line 2185 "itertoolsmodule.c"
        var $187=$i; //@line 2185 "itertoolsmodule.c"
        var $188=$186+12; //@line 2185 "itertoolsmodule.c"
        var $189=$188+$187*4; //@line 2185 "itertoolsmodule.c"
        var $190=HEAP[$189]; //@line 2185 "itertoolsmodule.c"
        $oldelem=$190; //@line 2185 "itertoolsmodule.c"
        var $191=$result; //@line 2186 "itertoolsmodule.c"
        var $192=$191; //@line 2186 "itertoolsmodule.c"
        var $193=$i; //@line 2186 "itertoolsmodule.c"
        var $194=$192+12; //@line 2186 "itertoolsmodule.c"
        var $195=$194+$193*4; //@line 2186 "itertoolsmodule.c"
        var $196=$elem; //@line 2186 "itertoolsmodule.c"
        HEAP[$195]=$196; //@line 2186 "itertoolsmodule.c"
        var $197=$oldelem; //@line 2187 "itertoolsmodule.c"
        var $198=$197; //@line 2187 "itertoolsmodule.c"
        var $199=HEAP[$198]; //@line 2187 "itertoolsmodule.c"
        var $200=($199) - 1; //@line 2187 "itertoolsmodule.c"
        var $201=$oldelem; //@line 2187 "itertoolsmodule.c"
        var $202=$201; //@line 2187 "itertoolsmodule.c"
        HEAP[$202]=$200; //@line 2187 "itertoolsmodule.c"
        var $203=$oldelem; //@line 2187 "itertoolsmodule.c"
        var $204=$203; //@line 2187 "itertoolsmodule.c"
        var $205=HEAP[$204]; //@line 2187 "itertoolsmodule.c"
        var $206=($205)==0; //@line 2187 "itertoolsmodule.c"
        if ($206) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2187 "itertoolsmodule.c"
      case 24: // $bb27
        var $207=$oldelem; //@line 2187 "itertoolsmodule.c"
        var $208=$207+4; //@line 2187 "itertoolsmodule.c"
        var $209=HEAP[$208]; //@line 2187 "itertoolsmodule.c"
        var $210=$209+24; //@line 2187 "itertoolsmodule.c"
        var $211=HEAP[$210]; //@line 2187 "itertoolsmodule.c"
        var $212=$oldelem; //@line 2187 "itertoolsmodule.c"
        FUNCTION_TABLE[$211]($212); //@line 2187 "itertoolsmodule.c"
        __label__ = 25; break; //@line 2187 "itertoolsmodule.c"
      case 25: // $bb28
        var $213=$i; //@line 2181 "itertoolsmodule.c"
        var $214=($213) + 1; //@line 2181 "itertoolsmodule.c"
        $i=$214; //@line 2181 "itertoolsmodule.c"
        var $215=$i; //@line 2181 "itertoolsmodule.c"
        var $216=$r; //@line 2181 "itertoolsmodule.c"
        var $217=($215) < ($216); //@line 2181 "itertoolsmodule.c"
        if ($217) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 2181 "itertoolsmodule.c"
      case 26: // $bb30
        var $218=$result; //@line 2191 "itertoolsmodule.c"
        var $219=$218; //@line 2191 "itertoolsmodule.c"
        var $220=HEAP[$219]; //@line 2191 "itertoolsmodule.c"
        var $221=($220) + 1; //@line 2191 "itertoolsmodule.c"
        var $222=$result; //@line 2191 "itertoolsmodule.c"
        var $223=$222; //@line 2191 "itertoolsmodule.c"
        HEAP[$223]=$221; //@line 2191 "itertoolsmodule.c"
        var $224=$result; //@line 2192 "itertoolsmodule.c"
        $0=$224; //@line 2192 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2192 "itertoolsmodule.c"
      case 27: // $empty
        var $225=$co_addr; //@line 2195 "itertoolsmodule.c"
        var $226=$225+24; //@line 2195 "itertoolsmodule.c"
        HEAP[$226]=1; //@line 2195 "itertoolsmodule.c"
        $0=0; //@line 2196 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2196 "itertoolsmodule.c"
      case 28: // $bb31
        var $227=$0; //@line 2126 "itertoolsmodule.c"
        $retval=$227; //@line 2126 "itertoolsmodule.c"
        var $retval32=$retval; //@line 2126 "itertoolsmodule.c"
        ;
        return $retval32; //@line 2126 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cwr_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $iftmp_143;
        var $0;
        var $co;
        var $n;
        var $r=__stackBase__;
        var $pool;
        var $iterable=__stackBase__+4;
        var $indices;
        var $i;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $pool=0; //@line 2295 "itertoolsmodule.c"
        HEAP[$iterable]=0; //@line 2296 "itertoolsmodule.c"
        $indices=0; //@line 2297 "itertoolsmodule.c"
        var $1=$args_addr; //@line 2301 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 2301 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str51, _kwargs_10765, allocate([$iterable,0,0,0,$r,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2301 "itertoolsmodule.c"
        var $4=($3)==0; //@line 2301 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2301 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2303 "itertoolsmodule.c"
        __label__ = 21; break; //@line 2303 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=HEAP[$iterable]; //@line 2305 "itertoolsmodule.c"
        var $6=_PySequence_Tuple($5); //@line 2305 "itertoolsmodule.c"
        $pool=$6; //@line 2305 "itertoolsmodule.c"
        var $7=$pool; //@line 2306 "itertoolsmodule.c"
        var $8=($7)==0; //@line 2306 "itertoolsmodule.c"
        if ($8) { __label__ = 15; break; } else { __label__ = 3; break; } //@line 2306 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$pool; //@line 2308 "itertoolsmodule.c"
        var $10=$9; //@line 2308 "itertoolsmodule.c"
        var $11=$10+8; //@line 2308 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 2308 "itertoolsmodule.c"
        $n=$12; //@line 2308 "itertoolsmodule.c"
        var $13=HEAP[$r]; //@line 2309 "itertoolsmodule.c"
        var $14=($13) < 0; //@line 2309 "itertoolsmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2309 "itertoolsmodule.c"
      case 4: // $bb3
        var $15=HEAP[_PyExc_ValueError]; //@line 2310 "itertoolsmodule.c"
        _PyErr_SetString($15, __str48); //@line 2310 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2310 "itertoolsmodule.c"
      case 5: // $bb4
        var $16=HEAP[$r]; //@line 2314 "itertoolsmodule.c"
        var $17=($16) * 4; //@line 2314 "itertoolsmodule.c"
        var $18=_PyMem_Malloc($17); //@line 2314 "itertoolsmodule.c"
        var $19=$18; //@line 2314 "itertoolsmodule.c"
        $indices=$19; //@line 2314 "itertoolsmodule.c"
        var $20=$indices; //@line 2315 "itertoolsmodule.c"
        var $21=($20)==0; //@line 2315 "itertoolsmodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2315 "itertoolsmodule.c"
      case 6: // $bb5
        var $22=_PyErr_NoMemory(); //@line 2316 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2316 "itertoolsmodule.c"
      case 7: // $bb6
        $i=0; //@line 2320 "itertoolsmodule.c"
        var $23=HEAP[$r]; //@line 2320 "itertoolsmodule.c"
        var $24=$i; //@line 2320 "itertoolsmodule.c"
        var $25=($24) < ($23); //@line 2320 "itertoolsmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2320 "itertoolsmodule.c"
      case 8: // $bb7
        var $26=$indices; //@line 2321 "itertoolsmodule.c"
        var $27=$i; //@line 2321 "itertoolsmodule.c"
        var $28=$26+4*$27; //@line 2321 "itertoolsmodule.c"
        HEAP[$28]=0; //@line 2321 "itertoolsmodule.c"
        var $29=$i; //@line 2320 "itertoolsmodule.c"
        var $30=($29) + 1; //@line 2320 "itertoolsmodule.c"
        $i=$30; //@line 2320 "itertoolsmodule.c"
        var $31=HEAP[$r]; //@line 2320 "itertoolsmodule.c"
        var $32=$i; //@line 2320 "itertoolsmodule.c"
        var $33=($32) < ($31); //@line 2320 "itertoolsmodule.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2320 "itertoolsmodule.c"
      case 9: // $bb9
        var $34=$type_addr; //@line 2324 "itertoolsmodule.c"
        var $35=$34+152; //@line 2324 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 2324 "itertoolsmodule.c"
        var $37=$type_addr; //@line 2324 "itertoolsmodule.c"
        var $38=FUNCTION_TABLE[$36]($37, 0); //@line 2324 "itertoolsmodule.c"
        var $39=$38; //@line 2324 "itertoolsmodule.c"
        $co=$39; //@line 2324 "itertoolsmodule.c"
        var $40=($39)==0; //@line 2325 "itertoolsmodule.c"
        if ($40) { __label__ = 15; break; } else { __label__ = 10; break; } //@line 2325 "itertoolsmodule.c"
      case 10: // $bb10
        var $41=$co; //@line 2328 "itertoolsmodule.c"
        var $42=$41+8; //@line 2328 "itertoolsmodule.c"
        var $43=$pool; //@line 2328 "itertoolsmodule.c"
        HEAP[$42]=$43; //@line 2328 "itertoolsmodule.c"
        var $44=$co; //@line 2329 "itertoolsmodule.c"
        var $45=$44+12; //@line 2329 "itertoolsmodule.c"
        var $46=$indices; //@line 2329 "itertoolsmodule.c"
        HEAP[$45]=$46; //@line 2329 "itertoolsmodule.c"
        var $47=$co; //@line 2330 "itertoolsmodule.c"
        var $48=$47+16; //@line 2330 "itertoolsmodule.c"
        HEAP[$48]=0; //@line 2330 "itertoolsmodule.c"
        var $49=HEAP[$r]; //@line 2331 "itertoolsmodule.c"
        var $50=$co; //@line 2331 "itertoolsmodule.c"
        var $51=$50+20; //@line 2331 "itertoolsmodule.c"
        HEAP[$51]=$49; //@line 2331 "itertoolsmodule.c"
        var $52=$n; //@line 2332 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 2332 "itertoolsmodule.c"
        if ($53) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 2332 "itertoolsmodule.c"
      case 11: // $bb11
        var $54=HEAP[$r]; //@line 2332 "itertoolsmodule.c"
        var $55=($54)==0; //@line 2332 "itertoolsmodule.c"
        if ($55) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2332 "itertoolsmodule.c"
      case 12: // $bb12
        $iftmp_143=1; //@line 2332 "itertoolsmodule.c"
        __label__ = 14; break; //@line 2332 "itertoolsmodule.c"
      case 13: // $bb13
        $iftmp_143=0; //@line 2332 "itertoolsmodule.c"
        __label__ = 14; break; //@line 2332 "itertoolsmodule.c"
      case 14: // $bb14
        var $56=$co; //@line 2332 "itertoolsmodule.c"
        var $57=$56+24; //@line 2332 "itertoolsmodule.c"
        var $58=$iftmp_143; //@line 2332 "itertoolsmodule.c"
        HEAP[$57]=$58; //@line 2332 "itertoolsmodule.c"
        var $59=$co; //@line 2334 "itertoolsmodule.c"
        var $60=$59; //@line 2334 "itertoolsmodule.c"
        $0=$60; //@line 2334 "itertoolsmodule.c"
        __label__ = 21; break; //@line 2334 "itertoolsmodule.c"
      case 15: // $error
        var $61=$indices; //@line 2337 "itertoolsmodule.c"
        var $62=($61)!=0; //@line 2337 "itertoolsmodule.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2337 "itertoolsmodule.c"
      case 16: // $bb15
        var $63=$indices; //@line 2338 "itertoolsmodule.c"
        var $64=$63; //@line 2338 "itertoolsmodule.c"
        _PyMem_Free($64); //@line 2338 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2338 "itertoolsmodule.c"
      case 17: // $bb16
        var $65=$pool; //@line 2339 "itertoolsmodule.c"
        var $66=($65)!=0; //@line 2339 "itertoolsmodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 2339 "itertoolsmodule.c"
      case 18: // $bb17
        var $67=$pool; //@line 2339 "itertoolsmodule.c"
        var $68=$67; //@line 2339 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 2339 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 2339 "itertoolsmodule.c"
        var $71=$pool; //@line 2339 "itertoolsmodule.c"
        var $72=$71; //@line 2339 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 2339 "itertoolsmodule.c"
        var $73=$pool; //@line 2339 "itertoolsmodule.c"
        var $74=$73; //@line 2339 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 2339 "itertoolsmodule.c"
        var $76=($75)==0; //@line 2339 "itertoolsmodule.c"
        if ($76) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2339 "itertoolsmodule.c"
      case 19: // $bb18
        var $77=$pool; //@line 2339 "itertoolsmodule.c"
        var $78=$77+4; //@line 2339 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 2339 "itertoolsmodule.c"
        var $80=$79+24; //@line 2339 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 2339 "itertoolsmodule.c"
        var $82=$pool; //@line 2339 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 2339 "itertoolsmodule.c"
        __label__ = 20; break; //@line 2339 "itertoolsmodule.c"
      case 20: // $bb19
        $0=0; //@line 2340 "itertoolsmodule.c"
        __label__ = 21; break; //@line 2340 "itertoolsmodule.c"
      case 21: // $bb20
        var $83=$0; //@line 2303 "itertoolsmodule.c"
        $retval=$83; //@line 2303 "itertoolsmodule.c"
        var $retval21=$retval; //@line 2303 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 2303 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cwr_dealloc($co) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        $co_addr=$co;
        var $0=$co_addr; //@line 2346 "itertoolsmodule.c"
        var $1=$0; //@line 2346 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 2346 "itertoolsmodule.c"
        var $2=$co_addr; //@line 2347 "itertoolsmodule.c"
        var $3=$2+8; //@line 2347 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 2347 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 2347 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2347 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$co_addr; //@line 2347 "itertoolsmodule.c"
        var $7=$6+8; //@line 2347 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2347 "itertoolsmodule.c"
        var $9=$8; //@line 2347 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 2347 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 2347 "itertoolsmodule.c"
        var $12=$8; //@line 2347 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 2347 "itertoolsmodule.c"
        var $13=$8; //@line 2347 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2347 "itertoolsmodule.c"
        var $15=($14)==0; //@line 2347 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2347 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$co_addr; //@line 2347 "itertoolsmodule.c"
        var $17=$16+8; //@line 2347 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 2347 "itertoolsmodule.c"
        var $19=$18+4; //@line 2347 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2347 "itertoolsmodule.c"
        var $21=$20+24; //@line 2347 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2347 "itertoolsmodule.c"
        var $23=$co_addr; //@line 2347 "itertoolsmodule.c"
        var $24=$23+8; //@line 2347 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2347 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 2347 "itertoolsmodule.c"
        __label__ = 3; break; //@line 2347 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$co_addr; //@line 2348 "itertoolsmodule.c"
        var $27=$26+16; //@line 2348 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2348 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 2348 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2348 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$co_addr; //@line 2348 "itertoolsmodule.c"
        var $31=$30+16; //@line 2348 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2348 "itertoolsmodule.c"
        var $33=$32; //@line 2348 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2348 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 2348 "itertoolsmodule.c"
        var $36=$32; //@line 2348 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 2348 "itertoolsmodule.c"
        var $37=$32; //@line 2348 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2348 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2348 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2348 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$co_addr; //@line 2348 "itertoolsmodule.c"
        var $41=$40+16; //@line 2348 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2348 "itertoolsmodule.c"
        var $43=$42+4; //@line 2348 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2348 "itertoolsmodule.c"
        var $45=$44+24; //@line 2348 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2348 "itertoolsmodule.c"
        var $47=$co_addr; //@line 2348 "itertoolsmodule.c"
        var $48=$47+16; //@line 2348 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 2348 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 2348 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2348 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$co_addr; //@line 2349 "itertoolsmodule.c"
        var $51=$50+12; //@line 2349 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 2349 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 2349 "itertoolsmodule.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2349 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$co_addr; //@line 2350 "itertoolsmodule.c"
        var $55=$54+12; //@line 2350 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 2350 "itertoolsmodule.c"
        var $57=$56; //@line 2350 "itertoolsmodule.c"
        _PyMem_Free($57); //@line 2350 "itertoolsmodule.c"
        __label__ = 8; break; //@line 2350 "itertoolsmodule.c"
      case 8: // $bb7
        var $58=$co_addr; //@line 2351 "itertoolsmodule.c"
        var $59=$58; //@line 2351 "itertoolsmodule.c"
        var $60=$59+4; //@line 2351 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 2351 "itertoolsmodule.c"
        var $62=$61+160; //@line 2351 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 2351 "itertoolsmodule.c"
        var $64=$co_addr; //@line 2351 "itertoolsmodule.c"
        var $65=$64; //@line 2351 "itertoolsmodule.c"
        FUNCTION_TABLE[$63]($65); //@line 2351 "itertoolsmodule.c"
        ;
        return; //@line 2352 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cwr_traverse($co, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $co_addr=$co;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$co_addr; //@line 2357 "itertoolsmodule.c"
        var $2=$1+8; //@line 2357 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2357 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 2357 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2357 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$co_addr; //@line 2357 "itertoolsmodule.c"
        var $6=$5+8; //@line 2357 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 2357 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 2357 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 2357 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 2357 "itertoolsmodule.c"
        $vret=$10; //@line 2357 "itertoolsmodule.c"
        var $11=$vret; //@line 2357 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 2357 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2357 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 2357 "itertoolsmodule.c"
        $0=$13; //@line 2357 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2357 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$co_addr; //@line 2358 "itertoolsmodule.c"
        var $15=$14+16; //@line 2358 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2358 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 2358 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2358 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$co_addr; //@line 2358 "itertoolsmodule.c"
        var $19=$18+16; //@line 2358 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2358 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 2358 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 2358 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 2358 "itertoolsmodule.c"
        $vret4=$23; //@line 2358 "itertoolsmodule.c"
        var $24=$vret4; //@line 2358 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 2358 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2358 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 2358 "itertoolsmodule.c"
        $0=$26; //@line 2358 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2358 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 2359 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2359 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 2357 "itertoolsmodule.c"
        $retval=$27; //@line 2357 "itertoolsmodule.c"
        var $retval8=$retval; //@line 2357 "itertoolsmodule.c"
        ;
        return $retval8; //@line 2357 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _cwr_next($co) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $co_addr;
        var $retval;
        var $0;
        var $elem;
        var $oldelem;
        var $pool;
        var $indices;
        var $result;
        var $n;
        var $r;
        var $i;
        var $j;
        var $index;
        var $old_result;
        $co_addr=$co;
        var $1=$co_addr; //@line 2367 "itertoolsmodule.c"
        var $2=$1+8; //@line 2367 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2367 "itertoolsmodule.c"
        $pool=$3; //@line 2367 "itertoolsmodule.c"
        var $4=$co_addr; //@line 2368 "itertoolsmodule.c"
        var $5=$4+12; //@line 2368 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 2368 "itertoolsmodule.c"
        $indices=$6; //@line 2368 "itertoolsmodule.c"
        var $7=$co_addr; //@line 2369 "itertoolsmodule.c"
        var $8=$7+16; //@line 2369 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 2369 "itertoolsmodule.c"
        $result=$9; //@line 2369 "itertoolsmodule.c"
        var $10=$pool; //@line 2370 "itertoolsmodule.c"
        var $11=$10; //@line 2370 "itertoolsmodule.c"
        var $12=$11+8; //@line 2370 "itertoolsmodule.c"
        var $13=HEAP[$12]; //@line 2370 "itertoolsmodule.c"
        $n=$13; //@line 2370 "itertoolsmodule.c"
        var $14=$co_addr; //@line 2371 "itertoolsmodule.c"
        var $15=$14+20; //@line 2371 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2371 "itertoolsmodule.c"
        $r=$16; //@line 2371 "itertoolsmodule.c"
        var $17=$co_addr; //@line 2374 "itertoolsmodule.c"
        var $18=$17+24; //@line 2374 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 2374 "itertoolsmodule.c"
        var $20=($19)!=0; //@line 2374 "itertoolsmodule.c"
        if ($20) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2374 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2375 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2375 "itertoolsmodule.c"
      case 2: // $bb1
        var $21=$result; //@line 2377 "itertoolsmodule.c"
        var $22=($21)==0; //@line 2377 "itertoolsmodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2377 "itertoolsmodule.c"
      case 3: // $bb2
        var $23=$r; //@line 2379 "itertoolsmodule.c"
        var $24=_PyTuple_New($23); //@line 2379 "itertoolsmodule.c"
        $result=$24; //@line 2379 "itertoolsmodule.c"
        var $25=$result; //@line 2380 "itertoolsmodule.c"
        var $26=($25)==0; //@line 2380 "itertoolsmodule.c"
        if ($26) { __label__ = 27; break; } else { __label__ = 4; break; } //@line 2380 "itertoolsmodule.c"
      case 4: // $bb3
        var $27=$co_addr; //@line 2382 "itertoolsmodule.c"
        var $28=$27+16; //@line 2382 "itertoolsmodule.c"
        var $29=$result; //@line 2382 "itertoolsmodule.c"
        HEAP[$28]=$29; //@line 2382 "itertoolsmodule.c"
        $i=0; //@line 2383 "itertoolsmodule.c"
        var $30=$i; //@line 2383 "itertoolsmodule.c"
        var $31=$r; //@line 2383 "itertoolsmodule.c"
        var $32=($30) < ($31); //@line 2383 "itertoolsmodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 26; break; } //@line 2383 "itertoolsmodule.c"
      case 5: // $bb4
        var $33=$indices; //@line 2384 "itertoolsmodule.c"
        var $34=$i; //@line 2384 "itertoolsmodule.c"
        var $35=$33+4*$34; //@line 2384 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 2384 "itertoolsmodule.c"
        $index=$36; //@line 2384 "itertoolsmodule.c"
        var $37=$pool; //@line 2385 "itertoolsmodule.c"
        var $38=$37; //@line 2385 "itertoolsmodule.c"
        var $39=$index; //@line 2385 "itertoolsmodule.c"
        var $40=$38+12; //@line 2385 "itertoolsmodule.c"
        var $41=$40+$39*4; //@line 2385 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2385 "itertoolsmodule.c"
        $elem=$42; //@line 2385 "itertoolsmodule.c"
        var $43=$elem; //@line 2386 "itertoolsmodule.c"
        var $44=$43; //@line 2386 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 2386 "itertoolsmodule.c"
        var $46=($45) + 1; //@line 2386 "itertoolsmodule.c"
        var $47=$elem; //@line 2386 "itertoolsmodule.c"
        var $48=$47; //@line 2386 "itertoolsmodule.c"
        HEAP[$48]=$46; //@line 2386 "itertoolsmodule.c"
        var $49=$result; //@line 2387 "itertoolsmodule.c"
        var $50=$49; //@line 2387 "itertoolsmodule.c"
        var $51=$i; //@line 2387 "itertoolsmodule.c"
        var $52=$50+12; //@line 2387 "itertoolsmodule.c"
        var $53=$52+$51*4; //@line 2387 "itertoolsmodule.c"
        var $54=$elem; //@line 2387 "itertoolsmodule.c"
        HEAP[$53]=$54; //@line 2387 "itertoolsmodule.c"
        var $55=$i; //@line 2383 "itertoolsmodule.c"
        var $56=($55) + 1; //@line 2383 "itertoolsmodule.c"
        $i=$56; //@line 2383 "itertoolsmodule.c"
        var $57=$i; //@line 2383 "itertoolsmodule.c"
        var $58=$r; //@line 2383 "itertoolsmodule.c"
        var $59=($57) < ($58); //@line 2383 "itertoolsmodule.c"
        if ($59) { __label__ = 5; break; } else { __label__ = 26; break; } //@line 2383 "itertoolsmodule.c"
      case 6: // $bb7
        var $60=$result; //@line 2391 "itertoolsmodule.c"
        var $61=$60; //@line 2391 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 2391 "itertoolsmodule.c"
        var $63=($62) > 1; //@line 2391 "itertoolsmodule.c"
        if ($63) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2391 "itertoolsmodule.c"
      case 7: // $bb8
        var $64=$result; //@line 2392 "itertoolsmodule.c"
        $old_result=$64; //@line 2392 "itertoolsmodule.c"
        var $65=$r; //@line 2393 "itertoolsmodule.c"
        var $66=_PyTuple_New($65); //@line 2393 "itertoolsmodule.c"
        $result=$66; //@line 2393 "itertoolsmodule.c"
        var $67=$result; //@line 2394 "itertoolsmodule.c"
        var $68=($67)==0; //@line 2394 "itertoolsmodule.c"
        if ($68) { __label__ = 27; break; } else { __label__ = 8; break; } //@line 2394 "itertoolsmodule.c"
      case 8: // $bb9
        var $69=$co_addr; //@line 2396 "itertoolsmodule.c"
        var $70=$69+16; //@line 2396 "itertoolsmodule.c"
        var $71=$result; //@line 2396 "itertoolsmodule.c"
        HEAP[$70]=$71; //@line 2396 "itertoolsmodule.c"
        $i=0; //@line 2397 "itertoolsmodule.c"
        var $72=$i; //@line 2397 "itertoolsmodule.c"
        var $73=$r; //@line 2397 "itertoolsmodule.c"
        var $74=($72) < ($73); //@line 2397 "itertoolsmodule.c"
        var $75=$old_result; //@line 2398 "itertoolsmodule.c"
        if ($74) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 10; break; } //@line 2397 "itertoolsmodule.c"
      case 9: // $bb10
        var $76=__lastLabel__ == 9 ? $99 : ($75);
        var $77=$76; //@line 2398 "itertoolsmodule.c"
        var $78=$i; //@line 2398 "itertoolsmodule.c"
        var $79=$77+12; //@line 2398 "itertoolsmodule.c"
        var $80=$79+$78*4; //@line 2398 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 2398 "itertoolsmodule.c"
        $elem=$81; //@line 2398 "itertoolsmodule.c"
        var $82=$elem; //@line 2399 "itertoolsmodule.c"
        var $83=$82; //@line 2399 "itertoolsmodule.c"
        var $84=HEAP[$83]; //@line 2399 "itertoolsmodule.c"
        var $85=($84) + 1; //@line 2399 "itertoolsmodule.c"
        var $86=$elem; //@line 2399 "itertoolsmodule.c"
        var $87=$86; //@line 2399 "itertoolsmodule.c"
        HEAP[$87]=$85; //@line 2399 "itertoolsmodule.c"
        var $88=$result; //@line 2400 "itertoolsmodule.c"
        var $89=$88; //@line 2400 "itertoolsmodule.c"
        var $90=$i; //@line 2400 "itertoolsmodule.c"
        var $91=$89+12; //@line 2400 "itertoolsmodule.c"
        var $92=$91+$90*4; //@line 2400 "itertoolsmodule.c"
        var $93=$elem; //@line 2400 "itertoolsmodule.c"
        HEAP[$92]=$93; //@line 2400 "itertoolsmodule.c"
        var $94=$i; //@line 2397 "itertoolsmodule.c"
        var $95=($94) + 1; //@line 2397 "itertoolsmodule.c"
        $i=$95; //@line 2397 "itertoolsmodule.c"
        var $96=$i; //@line 2397 "itertoolsmodule.c"
        var $97=$r; //@line 2397 "itertoolsmodule.c"
        var $98=($96) < ($97); //@line 2397 "itertoolsmodule.c"
        var $99=$old_result; //@line 2398 "itertoolsmodule.c"
        if ($98) { __lastLabel__ = 9; __label__ = 9; break; } else { __lastLabel__ = 9; __label__ = 10; break; } //@line 2397 "itertoolsmodule.c"
      case 10: // $bb12
        var $_lcssa=__lastLabel__ == 8 ? $75 : ($99);
        var $100=$_lcssa; //@line 2402 "itertoolsmodule.c"
        var $101=HEAP[$100]; //@line 2402 "itertoolsmodule.c"
        var $102=($101) - 1; //@line 2402 "itertoolsmodule.c"
        var $103=$old_result; //@line 2402 "itertoolsmodule.c"
        var $104=$103; //@line 2402 "itertoolsmodule.c"
        HEAP[$104]=$102; //@line 2402 "itertoolsmodule.c"
        var $105=$old_result; //@line 2402 "itertoolsmodule.c"
        var $106=$105; //@line 2402 "itertoolsmodule.c"
        var $107=HEAP[$106]; //@line 2402 "itertoolsmodule.c"
        var $108=($107)==0; //@line 2402 "itertoolsmodule.c"
        if ($108) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2402 "itertoolsmodule.c"
      case 11: // $bb13
        var $109=$old_result; //@line 2402 "itertoolsmodule.c"
        var $110=$109+4; //@line 2402 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 2402 "itertoolsmodule.c"
        var $112=$111+24; //@line 2402 "itertoolsmodule.c"
        var $113=HEAP[$112]; //@line 2402 "itertoolsmodule.c"
        var $114=$old_result; //@line 2402 "itertoolsmodule.c"
        FUNCTION_TABLE[$113]($114); //@line 2402 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2402 "itertoolsmodule.c"
      case 12: // $bb14
        var $115=$r; //@line 2406 "itertoolsmodule.c"
        var $116=($115)!=0; //@line 2406 "itertoolsmodule.c"
        if ($116) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2406 "itertoolsmodule.c"
      case 13: // $bb15
        var $117=$result; //@line 2406 "itertoolsmodule.c"
        var $118=$117; //@line 2406 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 2406 "itertoolsmodule.c"
        var $120=($119)!=1; //@line 2406 "itertoolsmodule.c"
        if ($120) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2406 "itertoolsmodule.c"
      case 14: // $bb16
        ___assert_fail(__str49, __str5, 2406, ___PRETTY_FUNCTION___10891); //@line 2406 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 2406 "itertoolsmodule.c"
      case 15: // $bb17
        var $121=$r; //@line 2410 "itertoolsmodule.c"
        var $122=($121) - 1; //@line 2410 "itertoolsmodule.c"
        $i=$122; //@line 2410 "itertoolsmodule.c"
        __lastLabel__ = 15; __label__ = 17; break; //@line 2410 "itertoolsmodule.c"
      case 16: // $bb18
        var $123=$i; //@line 2410 "itertoolsmodule.c"
        var $124=($123) - 1; //@line 2410 "itertoolsmodule.c"
        $i=$124; //@line 2410 "itertoolsmodule.c"
        __lastLabel__ = 16; __label__ = 17; break; //@line 2410 "itertoolsmodule.c"
      case 17: // $bb19
        var $125=__lastLabel__ == 16 ? $124 : ($122);
        var $126=($125) < 0; //@line 2410 "itertoolsmodule.c"
        if ($126) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2410 "itertoolsmodule.c"
      case 18: // $bb20
        var $127=$indices; //@line 2410 "itertoolsmodule.c"
        var $128=$i; //@line 2410 "itertoolsmodule.c"
        var $129=$127+4*$128; //@line 2410 "itertoolsmodule.c"
        var $130=HEAP[$129]; //@line 2410 "itertoolsmodule.c"
        var $131=$n; //@line 2410 "itertoolsmodule.c"
        var $132=($131) - 1; //@line 2410 "itertoolsmodule.c"
        var $133=($130)==($132); //@line 2410 "itertoolsmodule.c"
        if ($133) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2410 "itertoolsmodule.c"
      case 19: // $bb21
        var $134=$i; //@line 2415 "itertoolsmodule.c"
        var $135=($134) < 0; //@line 2415 "itertoolsmodule.c"
        if ($135) { __label__ = 27; break; } else { __label__ = 20; break; } //@line 2415 "itertoolsmodule.c"
      case 20: // $bb22
        var $136=$indices; //@line 2420 "itertoolsmodule.c"
        var $137=$i; //@line 2420 "itertoolsmodule.c"
        var $138=$136+4*$137; //@line 2420 "itertoolsmodule.c"
        var $139=HEAP[$138]; //@line 2420 "itertoolsmodule.c"
        var $140=($139) + 1; //@line 2420 "itertoolsmodule.c"
        var $141=$indices; //@line 2420 "itertoolsmodule.c"
        var $142=$i; //@line 2420 "itertoolsmodule.c"
        var $143=$141+4*$142; //@line 2420 "itertoolsmodule.c"
        HEAP[$143]=$140; //@line 2420 "itertoolsmodule.c"
        var $144=$i; //@line 2421 "itertoolsmodule.c"
        var $145=($144) + 1; //@line 2421 "itertoolsmodule.c"
        $j=$145; //@line 2421 "itertoolsmodule.c"
        var $146=$j; //@line 2421 "itertoolsmodule.c"
        var $147=$r; //@line 2421 "itertoolsmodule.c"
        var $148=($146) < ($147); //@line 2421 "itertoolsmodule.c"
        if ($148) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2421 "itertoolsmodule.c"
      case 21: // $bb23
        var $149=$j; //@line 2422 "itertoolsmodule.c"
        var $150=($149) - 1; //@line 2422 "itertoolsmodule.c"
        var $151=$indices; //@line 2422 "itertoolsmodule.c"
        var $152=$151+4*$150; //@line 2422 "itertoolsmodule.c"
        var $153=HEAP[$152]; //@line 2422 "itertoolsmodule.c"
        var $154=$indices; //@line 2422 "itertoolsmodule.c"
        var $155=$j; //@line 2422 "itertoolsmodule.c"
        var $156=$154+4*$155; //@line 2422 "itertoolsmodule.c"
        HEAP[$156]=$153; //@line 2422 "itertoolsmodule.c"
        var $157=$j; //@line 2421 "itertoolsmodule.c"
        var $158=($157) + 1; //@line 2421 "itertoolsmodule.c"
        $j=$158; //@line 2421 "itertoolsmodule.c"
        var $159=$j; //@line 2421 "itertoolsmodule.c"
        var $160=$r; //@line 2421 "itertoolsmodule.c"
        var $161=($159) < ($160); //@line 2421 "itertoolsmodule.c"
        if ($161) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2421 "itertoolsmodule.c"
      case 22: // $bb29_preheader
        var $162=$i; //@line 2426 "itertoolsmodule.c"
        var $163=$r; //@line 2426 "itertoolsmodule.c"
        var $164=($162) < ($163); //@line 2426 "itertoolsmodule.c"
        if ($164) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 2426 "itertoolsmodule.c"
      case 23: // $bb26
        var $165=$indices; //@line 2427 "itertoolsmodule.c"
        var $166=$i; //@line 2427 "itertoolsmodule.c"
        var $167=$165+4*$166; //@line 2427 "itertoolsmodule.c"
        var $168=HEAP[$167]; //@line 2427 "itertoolsmodule.c"
        $index=$168; //@line 2427 "itertoolsmodule.c"
        var $169=$pool; //@line 2428 "itertoolsmodule.c"
        var $170=$169; //@line 2428 "itertoolsmodule.c"
        var $171=$index; //@line 2428 "itertoolsmodule.c"
        var $172=$170+12; //@line 2428 "itertoolsmodule.c"
        var $173=$172+$171*4; //@line 2428 "itertoolsmodule.c"
        var $174=HEAP[$173]; //@line 2428 "itertoolsmodule.c"
        $elem=$174; //@line 2428 "itertoolsmodule.c"
        var $175=$elem; //@line 2429 "itertoolsmodule.c"
        var $176=$175; //@line 2429 "itertoolsmodule.c"
        var $177=HEAP[$176]; //@line 2429 "itertoolsmodule.c"
        var $178=($177) + 1; //@line 2429 "itertoolsmodule.c"
        var $179=$elem; //@line 2429 "itertoolsmodule.c"
        var $180=$179; //@line 2429 "itertoolsmodule.c"
        HEAP[$180]=$178; //@line 2429 "itertoolsmodule.c"
        var $181=$result; //@line 2430 "itertoolsmodule.c"
        var $182=$181; //@line 2430 "itertoolsmodule.c"
        var $183=$i; //@line 2430 "itertoolsmodule.c"
        var $184=$182+12; //@line 2430 "itertoolsmodule.c"
        var $185=$184+$183*4; //@line 2430 "itertoolsmodule.c"
        var $186=HEAP[$185]; //@line 2430 "itertoolsmodule.c"
        $oldelem=$186; //@line 2430 "itertoolsmodule.c"
        var $187=$result; //@line 2431 "itertoolsmodule.c"
        var $188=$187; //@line 2431 "itertoolsmodule.c"
        var $189=$i; //@line 2431 "itertoolsmodule.c"
        var $190=$188+12; //@line 2431 "itertoolsmodule.c"
        var $191=$190+$189*4; //@line 2431 "itertoolsmodule.c"
        var $192=$elem; //@line 2431 "itertoolsmodule.c"
        HEAP[$191]=$192; //@line 2431 "itertoolsmodule.c"
        var $193=$oldelem; //@line 2432 "itertoolsmodule.c"
        var $194=$193; //@line 2432 "itertoolsmodule.c"
        var $195=HEAP[$194]; //@line 2432 "itertoolsmodule.c"
        var $196=($195) - 1; //@line 2432 "itertoolsmodule.c"
        var $197=$oldelem; //@line 2432 "itertoolsmodule.c"
        var $198=$197; //@line 2432 "itertoolsmodule.c"
        HEAP[$198]=$196; //@line 2432 "itertoolsmodule.c"
        var $199=$oldelem; //@line 2432 "itertoolsmodule.c"
        var $200=$199; //@line 2432 "itertoolsmodule.c"
        var $201=HEAP[$200]; //@line 2432 "itertoolsmodule.c"
        var $202=($201)==0; //@line 2432 "itertoolsmodule.c"
        if ($202) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2432 "itertoolsmodule.c"
      case 24: // $bb27
        var $203=$oldelem; //@line 2432 "itertoolsmodule.c"
        var $204=$203+4; //@line 2432 "itertoolsmodule.c"
        var $205=HEAP[$204]; //@line 2432 "itertoolsmodule.c"
        var $206=$205+24; //@line 2432 "itertoolsmodule.c"
        var $207=HEAP[$206]; //@line 2432 "itertoolsmodule.c"
        var $208=$oldelem; //@line 2432 "itertoolsmodule.c"
        FUNCTION_TABLE[$207]($208); //@line 2432 "itertoolsmodule.c"
        __label__ = 25; break; //@line 2432 "itertoolsmodule.c"
      case 25: // $bb28
        var $209=$i; //@line 2426 "itertoolsmodule.c"
        var $210=($209) + 1; //@line 2426 "itertoolsmodule.c"
        $i=$210; //@line 2426 "itertoolsmodule.c"
        var $211=$i; //@line 2426 "itertoolsmodule.c"
        var $212=$r; //@line 2426 "itertoolsmodule.c"
        var $213=($211) < ($212); //@line 2426 "itertoolsmodule.c"
        if ($213) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 2426 "itertoolsmodule.c"
      case 26: // $bb30
        var $214=$result; //@line 2436 "itertoolsmodule.c"
        var $215=$214; //@line 2436 "itertoolsmodule.c"
        var $216=HEAP[$215]; //@line 2436 "itertoolsmodule.c"
        var $217=($216) + 1; //@line 2436 "itertoolsmodule.c"
        var $218=$result; //@line 2436 "itertoolsmodule.c"
        var $219=$218; //@line 2436 "itertoolsmodule.c"
        HEAP[$219]=$217; //@line 2436 "itertoolsmodule.c"
        var $220=$result; //@line 2437 "itertoolsmodule.c"
        $0=$220; //@line 2437 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2437 "itertoolsmodule.c"
      case 27: // $empty
        var $221=$co_addr; //@line 2440 "itertoolsmodule.c"
        var $222=$221+24; //@line 2440 "itertoolsmodule.c"
        HEAP[$222]=1; //@line 2440 "itertoolsmodule.c"
        $0=0; //@line 2441 "itertoolsmodule.c"
        __label__ = 28; break; //@line 2441 "itertoolsmodule.c"
      case 28: // $bb31
        var $223=$0; //@line 2375 "itertoolsmodule.c"
        $retval=$223; //@line 2375 "itertoolsmodule.c"
        var $retval32=$retval; //@line 2375 "itertoolsmodule.c"
        ;
        return $retval32; //@line 2375 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _permutations_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $po;
        var $n;
        var $r;
        var $robj=__stackBase__;
        var $pool;
        var $iterable=__stackBase__+4;
        var $indices;
        var $cycles;
        var $i;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$robj]=__Py_NoneStruct; //@line 2539 "itertoolsmodule.c"
        $pool=0; //@line 2540 "itertoolsmodule.c"
        HEAP[$iterable]=0; //@line 2541 "itertoolsmodule.c"
        $indices=0; //@line 2542 "itertoolsmodule.c"
        $cycles=0; //@line 2543 "itertoolsmodule.c"
        var $1=$args_addr; //@line 2547 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 2547 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str53, _kwargs_10993, allocate([$iterable,0,0,0,$robj,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2547 "itertoolsmodule.c"
        var $4=($3)==0; //@line 2547 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2547 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2549 "itertoolsmodule.c"
        __label__ = 26; break; //@line 2549 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=HEAP[$iterable]; //@line 2551 "itertoolsmodule.c"
        var $6=_PySequence_Tuple($5); //@line 2551 "itertoolsmodule.c"
        $pool=$6; //@line 2551 "itertoolsmodule.c"
        var $7=$pool; //@line 2552 "itertoolsmodule.c"
        var $8=($7)==0; //@line 2552 "itertoolsmodule.c"
        if ($8) { __label__ = 18; break; } else { __label__ = 3; break; } //@line 2552 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$pool; //@line 2554 "itertoolsmodule.c"
        var $10=$9; //@line 2554 "itertoolsmodule.c"
        var $11=$10+8; //@line 2554 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 2554 "itertoolsmodule.c"
        $n=$12; //@line 2554 "itertoolsmodule.c"
        var $13=$n; //@line 2556 "itertoolsmodule.c"
        $r=$13; //@line 2556 "itertoolsmodule.c"
        var $14=HEAP[$robj]; //@line 2557 "itertoolsmodule.c"
        var $15=($14)!=(__Py_NoneStruct); //@line 2557 "itertoolsmodule.c"
        if ($15) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 2557 "itertoolsmodule.c"
      case 4: // $bb3
        var $16=HEAP[$robj]; //@line 2558 "itertoolsmodule.c"
        var $17=_PyInt_AsSsize_t($16); //@line 2558 "itertoolsmodule.c"
        $r=$17; //@line 2558 "itertoolsmodule.c"
        var $18=$r; //@line 2559 "itertoolsmodule.c"
        var $19=($18)==-1; //@line 2559 "itertoolsmodule.c"
        if ($19) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 7; break; } //@line 2559 "itertoolsmodule.c"
      case 5: // $bb4
        var $20=_PyErr_Occurred(); //@line 2559 "itertoolsmodule.c"
        var $21=($20)!=0; //@line 2559 "itertoolsmodule.c"
        if ($21) { __label__ = 18; break; } else { __label__ = 6; break; } //@line 2559 "itertoolsmodule.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$r;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $22=__lastLabel__ == 6 ? $_pr : (__lastLabel__ == 4 ? $18 : ($13));
        var $23=($22) < 0; //@line 2562 "itertoolsmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2562 "itertoolsmodule.c"
      case 8: // $bb6
        var $24=HEAP[_PyExc_ValueError]; //@line 2563 "itertoolsmodule.c"
        _PyErr_SetString($24, __str48); //@line 2563 "itertoolsmodule.c"
        __label__ = 18; break; //@line 2563 "itertoolsmodule.c"
      case 9: // $bb7
        var $25=$n; //@line 2567 "itertoolsmodule.c"
        var $26=($25) * 4; //@line 2567 "itertoolsmodule.c"
        var $27=_PyMem_Malloc($26); //@line 2567 "itertoolsmodule.c"
        var $28=$27; //@line 2567 "itertoolsmodule.c"
        $indices=$28; //@line 2567 "itertoolsmodule.c"
        var $29=$r; //@line 2568 "itertoolsmodule.c"
        var $30=($29) * 4; //@line 2568 "itertoolsmodule.c"
        var $31=_PyMem_Malloc($30); //@line 2568 "itertoolsmodule.c"
        var $32=$31; //@line 2568 "itertoolsmodule.c"
        $cycles=$32; //@line 2568 "itertoolsmodule.c"
        var $33=$indices; //@line 2569 "itertoolsmodule.c"
        var $34=($33)==0; //@line 2569 "itertoolsmodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2569 "itertoolsmodule.c"
      case 10: // $bb8
        var $35=$cycles; //@line 2569 "itertoolsmodule.c"
        var $36=($35)==0; //@line 2569 "itertoolsmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2569 "itertoolsmodule.c"
      case 11: // $bb9
        var $37=_PyErr_NoMemory(); //@line 2570 "itertoolsmodule.c"
        __label__ = 18; break; //@line 2570 "itertoolsmodule.c"
      case 12: // $bb10
        $i=0; //@line 2574 "itertoolsmodule.c"
        var $38=$i; //@line 2574 "itertoolsmodule.c"
        var $39=$n; //@line 2574 "itertoolsmodule.c"
        var $40=($38) < ($39); //@line 2574 "itertoolsmodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2574 "itertoolsmodule.c"
      case 13: // $bb11
        var $41=$indices; //@line 2575 "itertoolsmodule.c"
        var $42=$i; //@line 2575 "itertoolsmodule.c"
        var $43=$41+4*$42; //@line 2575 "itertoolsmodule.c"
        var $44=$i; //@line 2575 "itertoolsmodule.c"
        HEAP[$43]=$44; //@line 2575 "itertoolsmodule.c"
        var $45=$i; //@line 2574 "itertoolsmodule.c"
        var $46=($45) + 1; //@line 2574 "itertoolsmodule.c"
        $i=$46; //@line 2574 "itertoolsmodule.c"
        var $47=$i; //@line 2574 "itertoolsmodule.c"
        var $48=$n; //@line 2574 "itertoolsmodule.c"
        var $49=($47) < ($48); //@line 2574 "itertoolsmodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2574 "itertoolsmodule.c"
      case 14: // $bb13
        $i=0; //@line 2576 "itertoolsmodule.c"
        var $50=$i; //@line 2576 "itertoolsmodule.c"
        var $51=$r; //@line 2576 "itertoolsmodule.c"
        var $52=($50) < ($51); //@line 2576 "itertoolsmodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2576 "itertoolsmodule.c"
      case 15: // $bb14
        var $53=$n; //@line 2577 "itertoolsmodule.c"
        var $54=$i; //@line 2577 "itertoolsmodule.c"
        var $55=($53) - ($54); //@line 2577 "itertoolsmodule.c"
        var $56=$cycles; //@line 2577 "itertoolsmodule.c"
        var $57=$i; //@line 2577 "itertoolsmodule.c"
        var $58=$56+4*$57; //@line 2577 "itertoolsmodule.c"
        HEAP[$58]=$55; //@line 2577 "itertoolsmodule.c"
        var $59=$i; //@line 2576 "itertoolsmodule.c"
        var $60=($59) + 1; //@line 2576 "itertoolsmodule.c"
        $i=$60; //@line 2576 "itertoolsmodule.c"
        var $61=$i; //@line 2576 "itertoolsmodule.c"
        var $62=$r; //@line 2576 "itertoolsmodule.c"
        var $63=($61) < ($62); //@line 2576 "itertoolsmodule.c"
        if ($63) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2576 "itertoolsmodule.c"
      case 16: // $bb16
        var $64=$type_addr; //@line 2580 "itertoolsmodule.c"
        var $65=$64+152; //@line 2580 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 2580 "itertoolsmodule.c"
        var $67=$type_addr; //@line 2580 "itertoolsmodule.c"
        var $68=FUNCTION_TABLE[$66]($67, 0); //@line 2580 "itertoolsmodule.c"
        var $69=$68; //@line 2580 "itertoolsmodule.c"
        $po=$69; //@line 2580 "itertoolsmodule.c"
        var $70=($69)==0; //@line 2581 "itertoolsmodule.c"
        if ($70) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 2581 "itertoolsmodule.c"
      case 17: // $bb17
        var $71=$po; //@line 2584 "itertoolsmodule.c"
        var $72=$71+8; //@line 2584 "itertoolsmodule.c"
        var $73=$pool; //@line 2584 "itertoolsmodule.c"
        HEAP[$72]=$73; //@line 2584 "itertoolsmodule.c"
        var $74=$po; //@line 2585 "itertoolsmodule.c"
        var $75=$74+12; //@line 2585 "itertoolsmodule.c"
        var $76=$indices; //@line 2585 "itertoolsmodule.c"
        HEAP[$75]=$76; //@line 2585 "itertoolsmodule.c"
        var $77=$po; //@line 2586 "itertoolsmodule.c"
        var $78=$77+16; //@line 2586 "itertoolsmodule.c"
        var $79=$cycles; //@line 2586 "itertoolsmodule.c"
        HEAP[$78]=$79; //@line 2586 "itertoolsmodule.c"
        var $80=$po; //@line 2587 "itertoolsmodule.c"
        var $81=$80+20; //@line 2587 "itertoolsmodule.c"
        HEAP[$81]=0; //@line 2587 "itertoolsmodule.c"
        var $82=$po; //@line 2588 "itertoolsmodule.c"
        var $83=$82+24; //@line 2588 "itertoolsmodule.c"
        var $84=$r; //@line 2588 "itertoolsmodule.c"
        HEAP[$83]=$84; //@line 2588 "itertoolsmodule.c"
        var $85=$r; //@line 2589 "itertoolsmodule.c"
        var $86=$n; //@line 2589 "itertoolsmodule.c"
        var $87=($85) > ($86); //@line 2589 "itertoolsmodule.c"
        var $88=($87); //@line 2589 "itertoolsmodule.c"
        var $89=$po; //@line 2589 "itertoolsmodule.c"
        var $90=$89+28; //@line 2589 "itertoolsmodule.c"
        HEAP[$90]=$88; //@line 2589 "itertoolsmodule.c"
        var $91=$po; //@line 2591 "itertoolsmodule.c"
        var $92=$91; //@line 2591 "itertoolsmodule.c"
        $0=$92; //@line 2591 "itertoolsmodule.c"
        __label__ = 26; break; //@line 2591 "itertoolsmodule.c"
      case 18: // $error
        var $93=$indices; //@line 2594 "itertoolsmodule.c"
        var $94=($93)!=0; //@line 2594 "itertoolsmodule.c"
        if ($94) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2594 "itertoolsmodule.c"
      case 19: // $bb18
        var $95=$indices; //@line 2595 "itertoolsmodule.c"
        var $96=$95; //@line 2595 "itertoolsmodule.c"
        _PyMem_Free($96); //@line 2595 "itertoolsmodule.c"
        __label__ = 20; break; //@line 2595 "itertoolsmodule.c"
      case 20: // $bb19
        var $97=$cycles; //@line 2596 "itertoolsmodule.c"
        var $98=($97)!=0; //@line 2596 "itertoolsmodule.c"
        if ($98) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2596 "itertoolsmodule.c"
      case 21: // $bb20
        var $99=$cycles; //@line 2597 "itertoolsmodule.c"
        var $100=$99; //@line 2597 "itertoolsmodule.c"
        _PyMem_Free($100); //@line 2597 "itertoolsmodule.c"
        __label__ = 22; break; //@line 2597 "itertoolsmodule.c"
      case 22: // $bb21
        var $101=$pool; //@line 2598 "itertoolsmodule.c"
        var $102=($101)!=0; //@line 2598 "itertoolsmodule.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 2598 "itertoolsmodule.c"
      case 23: // $bb22
        var $103=$pool; //@line 2598 "itertoolsmodule.c"
        var $104=$103; //@line 2598 "itertoolsmodule.c"
        var $105=HEAP[$104]; //@line 2598 "itertoolsmodule.c"
        var $106=($105) - 1; //@line 2598 "itertoolsmodule.c"
        var $107=$pool; //@line 2598 "itertoolsmodule.c"
        var $108=$107; //@line 2598 "itertoolsmodule.c"
        HEAP[$108]=$106; //@line 2598 "itertoolsmodule.c"
        var $109=$pool; //@line 2598 "itertoolsmodule.c"
        var $110=$109; //@line 2598 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 2598 "itertoolsmodule.c"
        var $112=($111)==0; //@line 2598 "itertoolsmodule.c"
        if ($112) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2598 "itertoolsmodule.c"
      case 24: // $bb23
        var $113=$pool; //@line 2598 "itertoolsmodule.c"
        var $114=$113+4; //@line 2598 "itertoolsmodule.c"
        var $115=HEAP[$114]; //@line 2598 "itertoolsmodule.c"
        var $116=$115+24; //@line 2598 "itertoolsmodule.c"
        var $117=HEAP[$116]; //@line 2598 "itertoolsmodule.c"
        var $118=$pool; //@line 2598 "itertoolsmodule.c"
        FUNCTION_TABLE[$117]($118); //@line 2598 "itertoolsmodule.c"
        __label__ = 25; break; //@line 2598 "itertoolsmodule.c"
      case 25: // $bb24
        $0=0; //@line 2599 "itertoolsmodule.c"
        __label__ = 26; break; //@line 2599 "itertoolsmodule.c"
      case 26: // $bb25
        var $119=$0; //@line 2549 "itertoolsmodule.c"
        $retval=$119; //@line 2549 "itertoolsmodule.c"
        var $retval26=$retval; //@line 2549 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 2549 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _permutations_dealloc($po) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr;
        $po_addr=$po;
        var $0=$po_addr; //@line 2605 "itertoolsmodule.c"
        var $1=$0; //@line 2605 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 2605 "itertoolsmodule.c"
        var $2=$po_addr; //@line 2606 "itertoolsmodule.c"
        var $3=$2+8; //@line 2606 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 2606 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 2606 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2606 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$po_addr; //@line 2606 "itertoolsmodule.c"
        var $7=$6+8; //@line 2606 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2606 "itertoolsmodule.c"
        var $9=$8; //@line 2606 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 2606 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 2606 "itertoolsmodule.c"
        var $12=$8; //@line 2606 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 2606 "itertoolsmodule.c"
        var $13=$8; //@line 2606 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2606 "itertoolsmodule.c"
        var $15=($14)==0; //@line 2606 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2606 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$po_addr; //@line 2606 "itertoolsmodule.c"
        var $17=$16+8; //@line 2606 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 2606 "itertoolsmodule.c"
        var $19=$18+4; //@line 2606 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2606 "itertoolsmodule.c"
        var $21=$20+24; //@line 2606 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2606 "itertoolsmodule.c"
        var $23=$po_addr; //@line 2606 "itertoolsmodule.c"
        var $24=$23+8; //@line 2606 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2606 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 2606 "itertoolsmodule.c"
        __label__ = 3; break; //@line 2606 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$po_addr; //@line 2607 "itertoolsmodule.c"
        var $27=$26+20; //@line 2607 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2607 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 2607 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2607 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$po_addr; //@line 2607 "itertoolsmodule.c"
        var $31=$30+20; //@line 2607 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2607 "itertoolsmodule.c"
        var $33=$32; //@line 2607 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2607 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 2607 "itertoolsmodule.c"
        var $36=$32; //@line 2607 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 2607 "itertoolsmodule.c"
        var $37=$32; //@line 2607 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2607 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2607 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2607 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$po_addr; //@line 2607 "itertoolsmodule.c"
        var $41=$40+20; //@line 2607 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2607 "itertoolsmodule.c"
        var $43=$42+4; //@line 2607 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2607 "itertoolsmodule.c"
        var $45=$44+24; //@line 2607 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2607 "itertoolsmodule.c"
        var $47=$po_addr; //@line 2607 "itertoolsmodule.c"
        var $48=$47+20; //@line 2607 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 2607 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 2607 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2607 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$po_addr; //@line 2608 "itertoolsmodule.c"
        var $51=$50+12; //@line 2608 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 2608 "itertoolsmodule.c"
        var $53=$52; //@line 2608 "itertoolsmodule.c"
        _PyMem_Free($53); //@line 2608 "itertoolsmodule.c"
        var $54=$po_addr; //@line 2609 "itertoolsmodule.c"
        var $55=$54+16; //@line 2609 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 2609 "itertoolsmodule.c"
        var $57=$56; //@line 2609 "itertoolsmodule.c"
        _PyMem_Free($57); //@line 2609 "itertoolsmodule.c"
        var $58=$po_addr; //@line 2610 "itertoolsmodule.c"
        var $59=$58; //@line 2610 "itertoolsmodule.c"
        var $60=$59+4; //@line 2610 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 2610 "itertoolsmodule.c"
        var $62=$61+160; //@line 2610 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 2610 "itertoolsmodule.c"
        var $64=$po_addr; //@line 2610 "itertoolsmodule.c"
        var $65=$64; //@line 2610 "itertoolsmodule.c"
        FUNCTION_TABLE[$63]($65); //@line 2610 "itertoolsmodule.c"
        ;
        return; //@line 2611 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _permutations_traverse($po, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $po_addr=$po;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$po_addr; //@line 2616 "itertoolsmodule.c"
        var $2=$1+8; //@line 2616 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2616 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 2616 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2616 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$po_addr; //@line 2616 "itertoolsmodule.c"
        var $6=$5+8; //@line 2616 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 2616 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 2616 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 2616 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 2616 "itertoolsmodule.c"
        $vret=$10; //@line 2616 "itertoolsmodule.c"
        var $11=$vret; //@line 2616 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 2616 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2616 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 2616 "itertoolsmodule.c"
        $0=$13; //@line 2616 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2616 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$po_addr; //@line 2617 "itertoolsmodule.c"
        var $15=$14+20; //@line 2617 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2617 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 2617 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2617 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$po_addr; //@line 2617 "itertoolsmodule.c"
        var $19=$18+20; //@line 2617 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2617 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 2617 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 2617 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 2617 "itertoolsmodule.c"
        $vret4=$23; //@line 2617 "itertoolsmodule.c"
        var $24=$vret4; //@line 2617 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 2617 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2617 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 2617 "itertoolsmodule.c"
        $0=$26; //@line 2617 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2617 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 2618 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2618 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 2616 "itertoolsmodule.c"
        $retval=$27; //@line 2616 "itertoolsmodule.c"
        var $retval8=$retval; //@line 2616 "itertoolsmodule.c"
        ;
        return $retval8; //@line 2616 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _permutations_next($po) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr;
        var $retval;
        var $0;
        var $elem;
        var $oldelem;
        var $pool;
        var $indices;
        var $cycles;
        var $result;
        var $n;
        var $r;
        var $i;
        var $j;
        var $k;
        var $index;
        var $old_result;
        $po_addr=$po;
        var $1=$po_addr; //@line 2626 "itertoolsmodule.c"
        var $2=$1+8; //@line 2626 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2626 "itertoolsmodule.c"
        $pool=$3; //@line 2626 "itertoolsmodule.c"
        var $4=$po_addr; //@line 2627 "itertoolsmodule.c"
        var $5=$4+12; //@line 2627 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 2627 "itertoolsmodule.c"
        $indices=$6; //@line 2627 "itertoolsmodule.c"
        var $7=$po_addr; //@line 2628 "itertoolsmodule.c"
        var $8=$7+16; //@line 2628 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 2628 "itertoolsmodule.c"
        $cycles=$9; //@line 2628 "itertoolsmodule.c"
        var $10=$po_addr; //@line 2629 "itertoolsmodule.c"
        var $11=$10+20; //@line 2629 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 2629 "itertoolsmodule.c"
        $result=$12; //@line 2629 "itertoolsmodule.c"
        var $13=$pool; //@line 2630 "itertoolsmodule.c"
        var $14=$13; //@line 2630 "itertoolsmodule.c"
        var $15=$14+8; //@line 2630 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2630 "itertoolsmodule.c"
        $n=$16; //@line 2630 "itertoolsmodule.c"
        var $17=$po_addr; //@line 2631 "itertoolsmodule.c"
        var $18=$17+24; //@line 2631 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 2631 "itertoolsmodule.c"
        $r=$19; //@line 2631 "itertoolsmodule.c"
        var $20=$po_addr; //@line 2634 "itertoolsmodule.c"
        var $21=$20+28; //@line 2634 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2634 "itertoolsmodule.c"
        var $23=($22)!=0; //@line 2634 "itertoolsmodule.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2634 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2635 "itertoolsmodule.c"
        __label__ = 30; break; //@line 2635 "itertoolsmodule.c"
      case 2: // $bb1
        var $24=$result; //@line 2637 "itertoolsmodule.c"
        var $25=($24)==0; //@line 2637 "itertoolsmodule.c"
        if ($25) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2637 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$r; //@line 2639 "itertoolsmodule.c"
        var $27=_PyTuple_New($26); //@line 2639 "itertoolsmodule.c"
        $result=$27; //@line 2639 "itertoolsmodule.c"
        var $28=$result; //@line 2640 "itertoolsmodule.c"
        var $29=($28)==0; //@line 2640 "itertoolsmodule.c"
        if ($29) { __label__ = 29; break; } else { __label__ = 4; break; } //@line 2640 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$po_addr; //@line 2642 "itertoolsmodule.c"
        var $31=$30+20; //@line 2642 "itertoolsmodule.c"
        var $32=$result; //@line 2642 "itertoolsmodule.c"
        HEAP[$31]=$32; //@line 2642 "itertoolsmodule.c"
        $i=0; //@line 2643 "itertoolsmodule.c"
        var $33=$i; //@line 2643 "itertoolsmodule.c"
        var $34=$r; //@line 2643 "itertoolsmodule.c"
        var $35=($33) < ($34); //@line 2643 "itertoolsmodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 28; break; } //@line 2643 "itertoolsmodule.c"
      case 5: // $bb4
        var $36=$indices; //@line 2644 "itertoolsmodule.c"
        var $37=$i; //@line 2644 "itertoolsmodule.c"
        var $38=$36+4*$37; //@line 2644 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 2644 "itertoolsmodule.c"
        $index=$39; //@line 2644 "itertoolsmodule.c"
        var $40=$pool; //@line 2645 "itertoolsmodule.c"
        var $41=$40; //@line 2645 "itertoolsmodule.c"
        var $42=$index; //@line 2645 "itertoolsmodule.c"
        var $43=$41+12; //@line 2645 "itertoolsmodule.c"
        var $44=$43+$42*4; //@line 2645 "itertoolsmodule.c"
        var $45=HEAP[$44]; //@line 2645 "itertoolsmodule.c"
        $elem=$45; //@line 2645 "itertoolsmodule.c"
        var $46=$elem; //@line 2646 "itertoolsmodule.c"
        var $47=$46; //@line 2646 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 2646 "itertoolsmodule.c"
        var $49=($48) + 1; //@line 2646 "itertoolsmodule.c"
        var $50=$elem; //@line 2646 "itertoolsmodule.c"
        var $51=$50; //@line 2646 "itertoolsmodule.c"
        HEAP[$51]=$49; //@line 2646 "itertoolsmodule.c"
        var $52=$result; //@line 2647 "itertoolsmodule.c"
        var $53=$52; //@line 2647 "itertoolsmodule.c"
        var $54=$i; //@line 2647 "itertoolsmodule.c"
        var $55=$53+12; //@line 2647 "itertoolsmodule.c"
        var $56=$55+$54*4; //@line 2647 "itertoolsmodule.c"
        var $57=$elem; //@line 2647 "itertoolsmodule.c"
        HEAP[$56]=$57; //@line 2647 "itertoolsmodule.c"
        var $58=$i; //@line 2643 "itertoolsmodule.c"
        var $59=($58) + 1; //@line 2643 "itertoolsmodule.c"
        $i=$59; //@line 2643 "itertoolsmodule.c"
        var $60=$i; //@line 2643 "itertoolsmodule.c"
        var $61=$r; //@line 2643 "itertoolsmodule.c"
        var $62=($60) < ($61); //@line 2643 "itertoolsmodule.c"
        if ($62) { __label__ = 5; break; } else { __label__ = 28; break; } //@line 2643 "itertoolsmodule.c"
      case 6: // $bb7
        var $63=$n; //@line 2650 "itertoolsmodule.c"
        var $64=($63)==0; //@line 2650 "itertoolsmodule.c"
        if ($64) { __label__ = 29; break; } else { __label__ = 7; break; } //@line 2650 "itertoolsmodule.c"
      case 7: // $bb8
        var $65=$result; //@line 2654 "itertoolsmodule.c"
        var $66=$65; //@line 2654 "itertoolsmodule.c"
        var $67=HEAP[$66]; //@line 2654 "itertoolsmodule.c"
        var $68=($67) > 1; //@line 2654 "itertoolsmodule.c"
        if ($68) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2654 "itertoolsmodule.c"
      case 8: // $bb9
        var $69=$result; //@line 2655 "itertoolsmodule.c"
        $old_result=$69; //@line 2655 "itertoolsmodule.c"
        var $70=$r; //@line 2656 "itertoolsmodule.c"
        var $71=_PyTuple_New($70); //@line 2656 "itertoolsmodule.c"
        $result=$71; //@line 2656 "itertoolsmodule.c"
        var $72=$result; //@line 2657 "itertoolsmodule.c"
        var $73=($72)==0; //@line 2657 "itertoolsmodule.c"
        if ($73) { __label__ = 29; break; } else { __label__ = 9; break; } //@line 2657 "itertoolsmodule.c"
      case 9: // $bb10
        var $74=$po_addr; //@line 2659 "itertoolsmodule.c"
        var $75=$74+20; //@line 2659 "itertoolsmodule.c"
        var $76=$result; //@line 2659 "itertoolsmodule.c"
        HEAP[$75]=$76; //@line 2659 "itertoolsmodule.c"
        $i=0; //@line 2660 "itertoolsmodule.c"
        var $77=$i; //@line 2660 "itertoolsmodule.c"
        var $78=$r; //@line 2660 "itertoolsmodule.c"
        var $79=($77) < ($78); //@line 2660 "itertoolsmodule.c"
        var $80=$old_result; //@line 2661 "itertoolsmodule.c"
        if ($79) { __lastLabel__ = 9; __label__ = 10; break; } else { __lastLabel__ = 9; __label__ = 11; break; } //@line 2660 "itertoolsmodule.c"
      case 10: // $bb11
        var $81=__lastLabel__ == 10 ? $104 : ($80);
        var $82=$81; //@line 2661 "itertoolsmodule.c"
        var $83=$i; //@line 2661 "itertoolsmodule.c"
        var $84=$82+12; //@line 2661 "itertoolsmodule.c"
        var $85=$84+$83*4; //@line 2661 "itertoolsmodule.c"
        var $86=HEAP[$85]; //@line 2661 "itertoolsmodule.c"
        $elem=$86; //@line 2661 "itertoolsmodule.c"
        var $87=$elem; //@line 2662 "itertoolsmodule.c"
        var $88=$87; //@line 2662 "itertoolsmodule.c"
        var $89=HEAP[$88]; //@line 2662 "itertoolsmodule.c"
        var $90=($89) + 1; //@line 2662 "itertoolsmodule.c"
        var $91=$elem; //@line 2662 "itertoolsmodule.c"
        var $92=$91; //@line 2662 "itertoolsmodule.c"
        HEAP[$92]=$90; //@line 2662 "itertoolsmodule.c"
        var $93=$result; //@line 2663 "itertoolsmodule.c"
        var $94=$93; //@line 2663 "itertoolsmodule.c"
        var $95=$i; //@line 2663 "itertoolsmodule.c"
        var $96=$94+12; //@line 2663 "itertoolsmodule.c"
        var $97=$96+$95*4; //@line 2663 "itertoolsmodule.c"
        var $98=$elem; //@line 2663 "itertoolsmodule.c"
        HEAP[$97]=$98; //@line 2663 "itertoolsmodule.c"
        var $99=$i; //@line 2660 "itertoolsmodule.c"
        var $100=($99) + 1; //@line 2660 "itertoolsmodule.c"
        $i=$100; //@line 2660 "itertoolsmodule.c"
        var $101=$i; //@line 2660 "itertoolsmodule.c"
        var $102=$r; //@line 2660 "itertoolsmodule.c"
        var $103=($101) < ($102); //@line 2660 "itertoolsmodule.c"
        var $104=$old_result; //@line 2661 "itertoolsmodule.c"
        if ($103) { __lastLabel__ = 10; __label__ = 10; break; } else { __lastLabel__ = 10; __label__ = 11; break; } //@line 2660 "itertoolsmodule.c"
      case 11: // $bb13
        var $_lcssa=__lastLabel__ == 9 ? $80 : ($104);
        var $105=$_lcssa; //@line 2665 "itertoolsmodule.c"
        var $106=HEAP[$105]; //@line 2665 "itertoolsmodule.c"
        var $107=($106) - 1; //@line 2665 "itertoolsmodule.c"
        var $108=$old_result; //@line 2665 "itertoolsmodule.c"
        var $109=$108; //@line 2665 "itertoolsmodule.c"
        HEAP[$109]=$107; //@line 2665 "itertoolsmodule.c"
        var $110=$old_result; //@line 2665 "itertoolsmodule.c"
        var $111=$110; //@line 2665 "itertoolsmodule.c"
        var $112=HEAP[$111]; //@line 2665 "itertoolsmodule.c"
        var $113=($112)==0; //@line 2665 "itertoolsmodule.c"
        if ($113) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2665 "itertoolsmodule.c"
      case 12: // $bb14
        var $114=$old_result; //@line 2665 "itertoolsmodule.c"
        var $115=$114+4; //@line 2665 "itertoolsmodule.c"
        var $116=HEAP[$115]; //@line 2665 "itertoolsmodule.c"
        var $117=$116+24; //@line 2665 "itertoolsmodule.c"
        var $118=HEAP[$117]; //@line 2665 "itertoolsmodule.c"
        var $119=$old_result; //@line 2665 "itertoolsmodule.c"
        FUNCTION_TABLE[$118]($119); //@line 2665 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2665 "itertoolsmodule.c"
      case 13: // $bb15
        var $120=$r; //@line 2668 "itertoolsmodule.c"
        var $121=($120)!=0; //@line 2668 "itertoolsmodule.c"
        if ($121) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2668 "itertoolsmodule.c"
      case 14: // $bb16
        var $122=$result; //@line 2668 "itertoolsmodule.c"
        var $123=$122; //@line 2668 "itertoolsmodule.c"
        var $124=HEAP[$123]; //@line 2668 "itertoolsmodule.c"
        var $125=($124)!=1; //@line 2668 "itertoolsmodule.c"
        if ($125) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2668 "itertoolsmodule.c"
      case 15: // $bb17
        ___assert_fail(__str49, __str5, 2668, ___PRETTY_FUNCTION___11129); //@line 2668 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 2668 "itertoolsmodule.c"
      case 16: // $bb18
        var $126=$r; //@line 2671 "itertoolsmodule.c"
        var $127=($126) - 1; //@line 2671 "itertoolsmodule.c"
        $i=$127; //@line 2671 "itertoolsmodule.c"
        __lastLabel__ = 16; __label__ = 25; break; //@line 2671 "itertoolsmodule.c"
      case 17: // $bb19
        var $128=$cycles; //@line 2672 "itertoolsmodule.c"
        var $129=$i; //@line 2672 "itertoolsmodule.c"
        var $130=$128+4*$129; //@line 2672 "itertoolsmodule.c"
        var $131=HEAP[$130]; //@line 2672 "itertoolsmodule.c"
        var $132=($131) - 1; //@line 2672 "itertoolsmodule.c"
        var $133=$cycles; //@line 2672 "itertoolsmodule.c"
        var $134=$i; //@line 2672 "itertoolsmodule.c"
        var $135=$133+4*$134; //@line 2672 "itertoolsmodule.c"
        HEAP[$135]=$132; //@line 2672 "itertoolsmodule.c"
        var $136=$cycles; //@line 2673 "itertoolsmodule.c"
        var $137=$i; //@line 2673 "itertoolsmodule.c"
        var $138=$136+4*$137; //@line 2673 "itertoolsmodule.c"
        var $139=HEAP[$138]; //@line 2673 "itertoolsmodule.c"
        var $140=($139)==0; //@line 2673 "itertoolsmodule.c"
        if ($140) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 2673 "itertoolsmodule.c"
      case 18: // $bb20
        var $141=$indices; //@line 2675 "itertoolsmodule.c"
        var $142=$i; //@line 2675 "itertoolsmodule.c"
        var $143=$141+4*$142; //@line 2675 "itertoolsmodule.c"
        var $144=HEAP[$143]; //@line 2675 "itertoolsmodule.c"
        $index=$144; //@line 2675 "itertoolsmodule.c"
        var $145=$i; //@line 2676 "itertoolsmodule.c"
        $j=$145; //@line 2676 "itertoolsmodule.c"
        var $146=$n; //@line 2676 "itertoolsmodule.c"
        var $147=($146) - 1; //@line 2676 "itertoolsmodule.c"
        var $148=$j; //@line 2676 "itertoolsmodule.c"
        var $149=($147) > ($148); //@line 2676 "itertoolsmodule.c"
        if ($149) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2676 "itertoolsmodule.c"
      case 19: // $bb21
        var $150=$j; //@line 2677 "itertoolsmodule.c"
        var $151=($150) + 1; //@line 2677 "itertoolsmodule.c"
        var $152=$indices; //@line 2677 "itertoolsmodule.c"
        var $153=$152+4*$151; //@line 2677 "itertoolsmodule.c"
        var $154=HEAP[$153]; //@line 2677 "itertoolsmodule.c"
        var $155=$indices; //@line 2677 "itertoolsmodule.c"
        var $156=$j; //@line 2677 "itertoolsmodule.c"
        var $157=$155+4*$156; //@line 2677 "itertoolsmodule.c"
        HEAP[$157]=$154; //@line 2677 "itertoolsmodule.c"
        var $158=$j; //@line 2676 "itertoolsmodule.c"
        var $159=($158) + 1; //@line 2676 "itertoolsmodule.c"
        $j=$159; //@line 2676 "itertoolsmodule.c"
        var $160=$n; //@line 2676 "itertoolsmodule.c"
        var $161=($160) - 1; //@line 2676 "itertoolsmodule.c"
        var $162=$j; //@line 2676 "itertoolsmodule.c"
        var $163=($161) > ($162); //@line 2676 "itertoolsmodule.c"
        if ($163) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2676 "itertoolsmodule.c"
      case 20: // $bb23
        var $164=$n; //@line 2678 "itertoolsmodule.c"
        var $165=($164) - 1; //@line 2678 "itertoolsmodule.c"
        var $166=$indices; //@line 2678 "itertoolsmodule.c"
        var $167=$166+4*$165; //@line 2678 "itertoolsmodule.c"
        var $168=$index; //@line 2678 "itertoolsmodule.c"
        HEAP[$167]=$168; //@line 2678 "itertoolsmodule.c"
        var $169=$n; //@line 2679 "itertoolsmodule.c"
        var $170=$i; //@line 2679 "itertoolsmodule.c"
        var $171=($169) - ($170); //@line 2679 "itertoolsmodule.c"
        var $172=$cycles; //@line 2679 "itertoolsmodule.c"
        var $173=$i; //@line 2679 "itertoolsmodule.c"
        var $174=$172+4*$173; //@line 2679 "itertoolsmodule.c"
        HEAP[$174]=$171; //@line 2679 "itertoolsmodule.c"
        var $175=$i; //@line 2671 "itertoolsmodule.c"
        var $176=($175) - 1; //@line 2671 "itertoolsmodule.c"
        $i=$176; //@line 2671 "itertoolsmodule.c"
        __lastLabel__ = 20; __label__ = 25; break; //@line 2671 "itertoolsmodule.c"
      case 21: // $bb24
        var $177=$cycles; //@line 2681 "itertoolsmodule.c"
        var $178=$i; //@line 2681 "itertoolsmodule.c"
        var $179=$177+4*$178; //@line 2681 "itertoolsmodule.c"
        var $180=HEAP[$179]; //@line 2681 "itertoolsmodule.c"
        $j=$180; //@line 2681 "itertoolsmodule.c"
        var $181=$indices; //@line 2682 "itertoolsmodule.c"
        var $182=$i; //@line 2682 "itertoolsmodule.c"
        var $183=$181+4*$182; //@line 2682 "itertoolsmodule.c"
        var $184=HEAP[$183]; //@line 2682 "itertoolsmodule.c"
        $index=$184; //@line 2682 "itertoolsmodule.c"
        var $185=$n; //@line 2683 "itertoolsmodule.c"
        var $186=$j; //@line 2683 "itertoolsmodule.c"
        var $187=($185) - ($186); //@line 2683 "itertoolsmodule.c"
        var $188=$indices; //@line 2683 "itertoolsmodule.c"
        var $189=$188+4*$187; //@line 2683 "itertoolsmodule.c"
        var $190=HEAP[$189]; //@line 2683 "itertoolsmodule.c"
        var $191=$indices; //@line 2683 "itertoolsmodule.c"
        var $192=$i; //@line 2683 "itertoolsmodule.c"
        var $193=$191+4*$192; //@line 2683 "itertoolsmodule.c"
        HEAP[$193]=$190; //@line 2683 "itertoolsmodule.c"
        var $194=$n; //@line 2684 "itertoolsmodule.c"
        var $195=$j; //@line 2684 "itertoolsmodule.c"
        var $196=($194) - ($195); //@line 2684 "itertoolsmodule.c"
        var $197=$indices; //@line 2684 "itertoolsmodule.c"
        var $198=$197+4*$196; //@line 2684 "itertoolsmodule.c"
        var $199=$index; //@line 2684 "itertoolsmodule.c"
        HEAP[$198]=$199; //@line 2684 "itertoolsmodule.c"
        var $200=$i; //@line 2686 "itertoolsmodule.c"
        $k=$200; //@line 2686 "itertoolsmodule.c"
        var $201=$k; //@line 2686 "itertoolsmodule.c"
        var $202=$r; //@line 2686 "itertoolsmodule.c"
        var $203=($201) < ($202); //@line 2686 "itertoolsmodule.c"
        if ($203) { __lastLabel__ = 21; __label__ = 22; break; } else { __lastLabel__ = 21; __label__ = 27; break; } //@line 2686 "itertoolsmodule.c"
      case 22: // $bb25
        var $204=$indices; //@line 2689 "itertoolsmodule.c"
        var $205=$k; //@line 2689 "itertoolsmodule.c"
        var $206=$204+4*$205; //@line 2689 "itertoolsmodule.c"
        var $207=HEAP[$206]; //@line 2689 "itertoolsmodule.c"
        $index=$207; //@line 2689 "itertoolsmodule.c"
        var $208=$pool; //@line 2690 "itertoolsmodule.c"
        var $209=$208; //@line 2690 "itertoolsmodule.c"
        var $210=$index; //@line 2690 "itertoolsmodule.c"
        var $211=$209+12; //@line 2690 "itertoolsmodule.c"
        var $212=$211+$210*4; //@line 2690 "itertoolsmodule.c"
        var $213=HEAP[$212]; //@line 2690 "itertoolsmodule.c"
        $elem=$213; //@line 2690 "itertoolsmodule.c"
        var $214=$elem; //@line 2691 "itertoolsmodule.c"
        var $215=$214; //@line 2691 "itertoolsmodule.c"
        var $216=HEAP[$215]; //@line 2691 "itertoolsmodule.c"
        var $217=($216) + 1; //@line 2691 "itertoolsmodule.c"
        var $218=$elem; //@line 2691 "itertoolsmodule.c"
        var $219=$218; //@line 2691 "itertoolsmodule.c"
        HEAP[$219]=$217; //@line 2691 "itertoolsmodule.c"
        var $220=$result; //@line 2692 "itertoolsmodule.c"
        var $221=$220; //@line 2692 "itertoolsmodule.c"
        var $222=$k; //@line 2692 "itertoolsmodule.c"
        var $223=$221+12; //@line 2692 "itertoolsmodule.c"
        var $224=$223+$222*4; //@line 2692 "itertoolsmodule.c"
        var $225=HEAP[$224]; //@line 2692 "itertoolsmodule.c"
        $oldelem=$225; //@line 2692 "itertoolsmodule.c"
        var $226=$result; //@line 2693 "itertoolsmodule.c"
        var $227=$226; //@line 2693 "itertoolsmodule.c"
        var $228=$k; //@line 2693 "itertoolsmodule.c"
        var $229=$227+12; //@line 2693 "itertoolsmodule.c"
        var $230=$229+$228*4; //@line 2693 "itertoolsmodule.c"
        var $231=$elem; //@line 2693 "itertoolsmodule.c"
        HEAP[$230]=$231; //@line 2693 "itertoolsmodule.c"
        var $232=$oldelem; //@line 2694 "itertoolsmodule.c"
        var $233=$232; //@line 2694 "itertoolsmodule.c"
        var $234=HEAP[$233]; //@line 2694 "itertoolsmodule.c"
        var $235=($234) - 1; //@line 2694 "itertoolsmodule.c"
        var $236=$oldelem; //@line 2694 "itertoolsmodule.c"
        var $237=$236; //@line 2694 "itertoolsmodule.c"
        HEAP[$237]=$235; //@line 2694 "itertoolsmodule.c"
        var $238=$oldelem; //@line 2694 "itertoolsmodule.c"
        var $239=$238; //@line 2694 "itertoolsmodule.c"
        var $240=HEAP[$239]; //@line 2694 "itertoolsmodule.c"
        var $241=($240)==0; //@line 2694 "itertoolsmodule.c"
        if ($241) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2694 "itertoolsmodule.c"
      case 23: // $bb26
        var $242=$oldelem; //@line 2694 "itertoolsmodule.c"
        var $243=$242+4; //@line 2694 "itertoolsmodule.c"
        var $244=HEAP[$243]; //@line 2694 "itertoolsmodule.c"
        var $245=$244+24; //@line 2694 "itertoolsmodule.c"
        var $246=HEAP[$245]; //@line 2694 "itertoolsmodule.c"
        var $247=$oldelem; //@line 2694 "itertoolsmodule.c"
        FUNCTION_TABLE[$246]($247); //@line 2694 "itertoolsmodule.c"
        __label__ = 24; break; //@line 2694 "itertoolsmodule.c"
      case 24: // $bb27
        var $248=$k; //@line 2686 "itertoolsmodule.c"
        var $249=($248) + 1; //@line 2686 "itertoolsmodule.c"
        $k=$249; //@line 2686 "itertoolsmodule.c"
        var $250=$k; //@line 2686 "itertoolsmodule.c"
        var $251=$r; //@line 2686 "itertoolsmodule.c"
        var $252=($250) < ($251); //@line 2686 "itertoolsmodule.c"
        if ($252) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 2686 "itertoolsmodule.c"
      case 25: // $bb30
        var $253=__lastLabel__ == 20 ? $176 : ($127);
        var $254=($253) >= 0; //@line 2671 "itertoolsmodule.c"
        if ($254) { __label__ = 17; break; } else { __label__ = 26; break; } //@line 2671 "itertoolsmodule.c"
      case 26: // $bb31thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 26; __label__ = 27; break;
      case 27: // $bb31
        var $255=__lastLabel__ == 26 ? $_pr : ($200);
        var $256=($255) < 0; //@line 2701 "itertoolsmodule.c"
        if ($256) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 2701 "itertoolsmodule.c"
      case 28: // $bb32
        var $257=$result; //@line 2704 "itertoolsmodule.c"
        var $258=$257; //@line 2704 "itertoolsmodule.c"
        var $259=HEAP[$258]; //@line 2704 "itertoolsmodule.c"
        var $260=($259) + 1; //@line 2704 "itertoolsmodule.c"
        var $261=$result; //@line 2704 "itertoolsmodule.c"
        var $262=$261; //@line 2704 "itertoolsmodule.c"
        HEAP[$262]=$260; //@line 2704 "itertoolsmodule.c"
        var $263=$result; //@line 2705 "itertoolsmodule.c"
        $0=$263; //@line 2705 "itertoolsmodule.c"
        __label__ = 30; break; //@line 2705 "itertoolsmodule.c"
      case 29: // $empty
        var $264=$po_addr; //@line 2708 "itertoolsmodule.c"
        var $265=$264+28; //@line 2708 "itertoolsmodule.c"
        HEAP[$265]=1; //@line 2708 "itertoolsmodule.c"
        $0=0; //@line 2709 "itertoolsmodule.c"
        __label__ = 30; break; //@line 2709 "itertoolsmodule.c"
      case 30: // $bb33
        var $266=$0; //@line 2635 "itertoolsmodule.c"
        $retval=$266; //@line 2635 "itertoolsmodule.c"
        var $retval34=$retval; //@line 2635 "itertoolsmodule.c"
        ;
        return $retval34; //@line 2635 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _compress_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $seq1=__stackBase__;
        var $seq2=__stackBase__+4;
        var $data;
        var $selectors;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $data=0; //@line 2784 "itertoolsmodule.c"
        $selectors=0; //@line 2784 "itertoolsmodule.c"
        var $1=$args_addr; //@line 2788 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 2788 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str55, _kwargs_11231, allocate([$seq1,0,0,0,$seq2,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2788 "itertoolsmodule.c"
        var $4=($3)==0; //@line 2788 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2788 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 2789 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2789 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=HEAP[$seq1]; //@line 2791 "itertoolsmodule.c"
        var $6=_PyObject_GetIter($5); //@line 2791 "itertoolsmodule.c"
        $data=$6; //@line 2791 "itertoolsmodule.c"
        var $7=$data; //@line 2792 "itertoolsmodule.c"
        var $8=($7)==0; //@line 2792 "itertoolsmodule.c"
        if ($8) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 2792 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=HEAP[$seq2]; //@line 2794 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 2794 "itertoolsmodule.c"
        $selectors=$10; //@line 2794 "itertoolsmodule.c"
        var $11=$selectors; //@line 2795 "itertoolsmodule.c"
        var $12=($11)==0; //@line 2795 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2795 "itertoolsmodule.c"
      case 4: // $bb3
        var $13=$type_addr; //@line 2799 "itertoolsmodule.c"
        var $14=$13+152; //@line 2799 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 2799 "itertoolsmodule.c"
        var $16=$type_addr; //@line 2799 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 2799 "itertoolsmodule.c"
        var $18=$17; //@line 2799 "itertoolsmodule.c"
        $lz=$18; //@line 2799 "itertoolsmodule.c"
        var $19=$lz; //@line 2800 "itertoolsmodule.c"
        var $20=($19)==0; //@line 2800 "itertoolsmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2800 "itertoolsmodule.c"
      case 5: // $bb4
        var $21=$lz; //@line 2802 "itertoolsmodule.c"
        var $22=$21+8; //@line 2802 "itertoolsmodule.c"
        var $23=$data; //@line 2802 "itertoolsmodule.c"
        HEAP[$22]=$23; //@line 2802 "itertoolsmodule.c"
        var $24=$lz; //@line 2803 "itertoolsmodule.c"
        var $25=$24+12; //@line 2803 "itertoolsmodule.c"
        var $26=$selectors; //@line 2803 "itertoolsmodule.c"
        HEAP[$25]=$26; //@line 2803 "itertoolsmodule.c"
        var $27=$lz; //@line 2804 "itertoolsmodule.c"
        var $28=$27; //@line 2804 "itertoolsmodule.c"
        $0=$28; //@line 2804 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2804 "itertoolsmodule.c"
      case 6: // $fail
        var $_pr=$data;
        var $29=($_pr)!=0; //@line 2807 "itertoolsmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2807 "itertoolsmodule.c"
      case 7: // $bb5
        var $30=$data; //@line 2807 "itertoolsmodule.c"
        var $31=$30; //@line 2807 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2807 "itertoolsmodule.c"
        var $33=($32) - 1; //@line 2807 "itertoolsmodule.c"
        var $34=$data; //@line 2807 "itertoolsmodule.c"
        var $35=$34; //@line 2807 "itertoolsmodule.c"
        HEAP[$35]=$33; //@line 2807 "itertoolsmodule.c"
        var $36=$data; //@line 2807 "itertoolsmodule.c"
        var $37=$36; //@line 2807 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2807 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2807 "itertoolsmodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2807 "itertoolsmodule.c"
      case 8: // $bb6
        var $40=$data; //@line 2807 "itertoolsmodule.c"
        var $41=$40+4; //@line 2807 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2807 "itertoolsmodule.c"
        var $43=$42+24; //@line 2807 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2807 "itertoolsmodule.c"
        var $45=$data; //@line 2807 "itertoolsmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 2807 "itertoolsmodule.c"
        __label__ = 9; break; //@line 2807 "itertoolsmodule.c"
      case 9: // $bb7
        var $46=$selectors; //@line 2808 "itertoolsmodule.c"
        var $47=($46)!=0; //@line 2808 "itertoolsmodule.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2808 "itertoolsmodule.c"
      case 10: // $bb8
        var $48=$selectors; //@line 2808 "itertoolsmodule.c"
        var $49=$48; //@line 2808 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 2808 "itertoolsmodule.c"
        var $51=($50) - 1; //@line 2808 "itertoolsmodule.c"
        var $52=$selectors; //@line 2808 "itertoolsmodule.c"
        var $53=$52; //@line 2808 "itertoolsmodule.c"
        HEAP[$53]=$51; //@line 2808 "itertoolsmodule.c"
        var $54=$selectors; //@line 2808 "itertoolsmodule.c"
        var $55=$54; //@line 2808 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 2808 "itertoolsmodule.c"
        var $57=($56)==0; //@line 2808 "itertoolsmodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2808 "itertoolsmodule.c"
      case 11: // $bb9
        var $58=$selectors; //@line 2808 "itertoolsmodule.c"
        var $59=$58+4; //@line 2808 "itertoolsmodule.c"
        var $60=HEAP[$59]; //@line 2808 "itertoolsmodule.c"
        var $61=$60+24; //@line 2808 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 2808 "itertoolsmodule.c"
        var $63=$selectors; //@line 2808 "itertoolsmodule.c"
        FUNCTION_TABLE[$62]($63); //@line 2808 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2808 "itertoolsmodule.c"
      case 12: // $bb10
        $0=0; //@line 2809 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2809 "itertoolsmodule.c"
      case 13: // $bb11
        var $64=$0; //@line 2789 "itertoolsmodule.c"
        $retval=$64; //@line 2789 "itertoolsmodule.c"
        var $retval12=$retval; //@line 2789 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2789 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _compress_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 2815 "itertoolsmodule.c"
        var $1=$0; //@line 2815 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 2815 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 2816 "itertoolsmodule.c"
        var $3=$2+8; //@line 2816 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 2816 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 2816 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2816 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 2816 "itertoolsmodule.c"
        var $7=$6+8; //@line 2816 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2816 "itertoolsmodule.c"
        var $9=$8; //@line 2816 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 2816 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 2816 "itertoolsmodule.c"
        var $12=$8; //@line 2816 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 2816 "itertoolsmodule.c"
        var $13=$8; //@line 2816 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2816 "itertoolsmodule.c"
        var $15=($14)==0; //@line 2816 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2816 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 2816 "itertoolsmodule.c"
        var $17=$16+8; //@line 2816 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 2816 "itertoolsmodule.c"
        var $19=$18+4; //@line 2816 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2816 "itertoolsmodule.c"
        var $21=$20+24; //@line 2816 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2816 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 2816 "itertoolsmodule.c"
        var $24=$23+8; //@line 2816 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2816 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 2816 "itertoolsmodule.c"
        __label__ = 3; break; //@line 2816 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 2817 "itertoolsmodule.c"
        var $27=$26+12; //@line 2817 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2817 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 2817 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2817 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 2817 "itertoolsmodule.c"
        var $31=$30+12; //@line 2817 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2817 "itertoolsmodule.c"
        var $33=$32; //@line 2817 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2817 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 2817 "itertoolsmodule.c"
        var $36=$32; //@line 2817 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 2817 "itertoolsmodule.c"
        var $37=$32; //@line 2817 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2817 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2817 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2817 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 2817 "itertoolsmodule.c"
        var $41=$40+12; //@line 2817 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2817 "itertoolsmodule.c"
        var $43=$42+4; //@line 2817 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2817 "itertoolsmodule.c"
        var $45=$44+24; //@line 2817 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2817 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 2817 "itertoolsmodule.c"
        var $48=$47+12; //@line 2817 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 2817 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 2817 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2817 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 2818 "itertoolsmodule.c"
        var $51=$50; //@line 2818 "itertoolsmodule.c"
        var $52=$51+4; //@line 2818 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 2818 "itertoolsmodule.c"
        var $54=$53+160; //@line 2818 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 2818 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 2818 "itertoolsmodule.c"
        var $57=$56; //@line 2818 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 2818 "itertoolsmodule.c"
        ;
        return; //@line 2819 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _compress_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 2824 "itertoolsmodule.c"
        var $2=$1+8; //@line 2824 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2824 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 2824 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2824 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 2824 "itertoolsmodule.c"
        var $6=$5+8; //@line 2824 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 2824 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 2824 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 2824 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 2824 "itertoolsmodule.c"
        $vret=$10; //@line 2824 "itertoolsmodule.c"
        var $11=$vret; //@line 2824 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 2824 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2824 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 2824 "itertoolsmodule.c"
        $0=$13; //@line 2824 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2824 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 2825 "itertoolsmodule.c"
        var $15=$14+12; //@line 2825 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2825 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 2825 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2825 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 2825 "itertoolsmodule.c"
        var $19=$18+12; //@line 2825 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2825 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 2825 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 2825 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 2825 "itertoolsmodule.c"
        $vret4=$23; //@line 2825 "itertoolsmodule.c"
        var $24=$vret4; //@line 2825 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 2825 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2825 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 2825 "itertoolsmodule.c"
        $0=$26; //@line 2825 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2825 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 2826 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2826 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 2824 "itertoolsmodule.c"
        $retval=$27; //@line 2824 "itertoolsmodule.c"
        var $retval8=$retval; //@line 2824 "itertoolsmodule.c"
        ;
        return $retval8; //@line 2824 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _compress_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $data;
        var $selectors;
        var $datum;
        var $selector;
        var $datanext;
        var $selectornext;
        var $ok;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 2832 "itertoolsmodule.c"
        var $2=$1+8; //@line 2832 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2832 "itertoolsmodule.c"
        $data=$3; //@line 2832 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 2832 "itertoolsmodule.c"
        var $5=$4+12; //@line 2832 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 2832 "itertoolsmodule.c"
        $selectors=$6; //@line 2832 "itertoolsmodule.c"
        var $7=$data; //@line 2834 "itertoolsmodule.c"
        var $8=$7+4; //@line 2834 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 2834 "itertoolsmodule.c"
        var $10=$9+112; //@line 2834 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 2834 "itertoolsmodule.c"
        $datanext=$11; //@line 2834 "itertoolsmodule.c"
        var $12=$selectors; //@line 2835 "itertoolsmodule.c"
        var $13=$12+4; //@line 2835 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2835 "itertoolsmodule.c"
        var $15=$14+112; //@line 2835 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2835 "itertoolsmodule.c"
        $selectornext=$16; //@line 2835 "itertoolsmodule.c"
        __label__ = 1; break; //@line 2835 "itertoolsmodule.c"
      case 1: // $bb
        var $17=$datanext; //@line 2845 "itertoolsmodule.c"
        var $18=$data; //@line 2845 "itertoolsmodule.c"
        var $19=FUNCTION_TABLE[$17]($18); //@line 2845 "itertoolsmodule.c"
        $datum=$19; //@line 2845 "itertoolsmodule.c"
        var $20=($19)==0; //@line 2846 "itertoolsmodule.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2846 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 2847 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2847 "itertoolsmodule.c"
      case 3: // $bb2
        var $21=$selectornext; //@line 2849 "itertoolsmodule.c"
        var $22=$selectors; //@line 2849 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($22); //@line 2849 "itertoolsmodule.c"
        $selector=$23; //@line 2849 "itertoolsmodule.c"
        var $24=$selector; //@line 2850 "itertoolsmodule.c"
        var $25=($24)==0; //@line 2850 "itertoolsmodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2850 "itertoolsmodule.c"
      case 4: // $bb3
        var $26=$datum; //@line 2851 "itertoolsmodule.c"
        var $27=$26; //@line 2851 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2851 "itertoolsmodule.c"
        var $29=($28) - 1; //@line 2851 "itertoolsmodule.c"
        var $30=$datum; //@line 2851 "itertoolsmodule.c"
        var $31=$30; //@line 2851 "itertoolsmodule.c"
        HEAP[$31]=$29; //@line 2851 "itertoolsmodule.c"
        var $32=$datum; //@line 2851 "itertoolsmodule.c"
        var $33=$32; //@line 2851 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2851 "itertoolsmodule.c"
        var $35=($34)==0; //@line 2851 "itertoolsmodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2851 "itertoolsmodule.c"
      case 5: // $bb4
        var $36=$datum; //@line 2851 "itertoolsmodule.c"
        var $37=$36+4; //@line 2851 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2851 "itertoolsmodule.c"
        var $39=$38+24; //@line 2851 "itertoolsmodule.c"
        var $40=HEAP[$39]; //@line 2851 "itertoolsmodule.c"
        var $41=$datum; //@line 2851 "itertoolsmodule.c"
        FUNCTION_TABLE[$40]($41); //@line 2851 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2851 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 2852 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2852 "itertoolsmodule.c"
      case 7: // $bb6
        var $42=$selector; //@line 2855 "itertoolsmodule.c"
        var $43=_PyObject_IsTrue($42); //@line 2855 "itertoolsmodule.c"
        $ok=$43; //@line 2855 "itertoolsmodule.c"
        var $44=$selector; //@line 2856 "itertoolsmodule.c"
        var $45=$44; //@line 2856 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2856 "itertoolsmodule.c"
        var $47=($46) - 1; //@line 2856 "itertoolsmodule.c"
        var $48=$selector; //@line 2856 "itertoolsmodule.c"
        var $49=$48; //@line 2856 "itertoolsmodule.c"
        HEAP[$49]=$47; //@line 2856 "itertoolsmodule.c"
        var $50=$selector; //@line 2856 "itertoolsmodule.c"
        var $51=$50; //@line 2856 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 2856 "itertoolsmodule.c"
        var $53=($52)==0; //@line 2856 "itertoolsmodule.c"
        if ($53) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2856 "itertoolsmodule.c"
      case 8: // $bb7
        var $54=$selector; //@line 2856 "itertoolsmodule.c"
        var $55=$54+4; //@line 2856 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 2856 "itertoolsmodule.c"
        var $57=$56+24; //@line 2856 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 2856 "itertoolsmodule.c"
        var $59=$selector; //@line 2856 "itertoolsmodule.c"
        FUNCTION_TABLE[$58]($59); //@line 2856 "itertoolsmodule.c"
        __label__ = 9; break; //@line 2856 "itertoolsmodule.c"
      case 9: // $bb8
        var $60=$ok; //@line 2857 "itertoolsmodule.c"
        var $61=($60)==1; //@line 2857 "itertoolsmodule.c"
        var $62=$datum; //@line 2858 "itertoolsmodule.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2857 "itertoolsmodule.c"
      case 10: // $bb9
        $0=$62; //@line 2858 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2858 "itertoolsmodule.c"
      case 11: // $bb10
        var $63=$62; //@line 2859 "itertoolsmodule.c"
        var $64=HEAP[$63]; //@line 2859 "itertoolsmodule.c"
        var $65=($64) - 1; //@line 2859 "itertoolsmodule.c"
        var $66=$datum; //@line 2859 "itertoolsmodule.c"
        var $67=$66; //@line 2859 "itertoolsmodule.c"
        HEAP[$67]=$65; //@line 2859 "itertoolsmodule.c"
        var $68=$datum; //@line 2859 "itertoolsmodule.c"
        var $69=$68; //@line 2859 "itertoolsmodule.c"
        var $70=HEAP[$69]; //@line 2859 "itertoolsmodule.c"
        var $71=($70)==0; //@line 2859 "itertoolsmodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2859 "itertoolsmodule.c"
      case 12: // $bb11
        var $72=$datum; //@line 2859 "itertoolsmodule.c"
        var $73=$72+4; //@line 2859 "itertoolsmodule.c"
        var $74=HEAP[$73]; //@line 2859 "itertoolsmodule.c"
        var $75=$74+24; //@line 2859 "itertoolsmodule.c"
        var $76=HEAP[$75]; //@line 2859 "itertoolsmodule.c"
        var $77=$datum; //@line 2859 "itertoolsmodule.c"
        FUNCTION_TABLE[$76]($77); //@line 2859 "itertoolsmodule.c"
        __label__ = 13; break; //@line 2859 "itertoolsmodule.c"
      case 13: // $bb12
        var $78=$ok; //@line 2860 "itertoolsmodule.c"
        var $79=($78)==-1; //@line 2860 "itertoolsmodule.c"
        if ($79) { __label__ = 14; break; } else { __label__ = 1; break; } //@line 2860 "itertoolsmodule.c"
      case 14: // $bb13
        $0=0; //@line 2861 "itertoolsmodule.c"
        __label__ = 15; break; //@line 2861 "itertoolsmodule.c"
      case 15: // $bb15
        var $80=$0; //@line 2847 "itertoolsmodule.c"
        $retval=$80; //@line 2847 "itertoolsmodule.c"
        var $retval16=$retval; //@line 2847 "itertoolsmodule.c"
        ;
        return $retval16; //@line 2847 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilter_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $func=__stackBase__;
        var $seq=__stackBase__+4;
        var $it;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 2934 "itertoolsmodule.c"
        var $2=($1)==(_ifilter_type); //@line 2934 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2934 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 2934 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str59, $3); //@line 2934 "itertoolsmodule.c"
        var $5=($4)==0; //@line 2934 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2934 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 2935 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2935 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 2937 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str60, 2, 2, allocate([$func,0,0,0,$seq,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2937 "itertoolsmodule.c"
        var $8=($7)==0; //@line 2937 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2937 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 2938 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2938 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$seq]; //@line 2941 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 2941 "itertoolsmodule.c"
        $it=$10; //@line 2941 "itertoolsmodule.c"
        var $11=$it; //@line 2942 "itertoolsmodule.c"
        var $12=($11)==0; //@line 2942 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2942 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 2943 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2943 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$type_addr; //@line 2946 "itertoolsmodule.c"
        var $14=$13+152; //@line 2946 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 2946 "itertoolsmodule.c"
        var $16=$type_addr; //@line 2946 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 2946 "itertoolsmodule.c"
        var $18=$17; //@line 2946 "itertoolsmodule.c"
        $lz=$18; //@line 2946 "itertoolsmodule.c"
        var $19=$lz; //@line 2947 "itertoolsmodule.c"
        var $20=($19)==0; //@line 2947 "itertoolsmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2947 "itertoolsmodule.c"
      case 8: // $bb7
        var $21=$it; //@line 2948 "itertoolsmodule.c"
        var $22=$21; //@line 2948 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 2948 "itertoolsmodule.c"
        var $24=($23) - 1; //@line 2948 "itertoolsmodule.c"
        var $25=$it; //@line 2948 "itertoolsmodule.c"
        var $26=$25; //@line 2948 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 2948 "itertoolsmodule.c"
        var $27=$it; //@line 2948 "itertoolsmodule.c"
        var $28=$27; //@line 2948 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 2948 "itertoolsmodule.c"
        var $30=($29)==0; //@line 2948 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2948 "itertoolsmodule.c"
      case 9: // $bb8
        var $31=$it; //@line 2948 "itertoolsmodule.c"
        var $32=$31+4; //@line 2948 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 2948 "itertoolsmodule.c"
        var $34=$33+24; //@line 2948 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 2948 "itertoolsmodule.c"
        var $36=$it; //@line 2948 "itertoolsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 2948 "itertoolsmodule.c"
        __label__ = 10; break; //@line 2948 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 2949 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2949 "itertoolsmodule.c"
      case 11: // $bb10
        var $37=HEAP[$func]; //@line 2951 "itertoolsmodule.c"
        var $38=$37; //@line 2951 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 2951 "itertoolsmodule.c"
        var $40=($39) + 1; //@line 2951 "itertoolsmodule.c"
        var $41=$37; //@line 2951 "itertoolsmodule.c"
        HEAP[$41]=$40; //@line 2951 "itertoolsmodule.c"
        var $42=HEAP[$func]; //@line 2952 "itertoolsmodule.c"
        var $43=$lz; //@line 2952 "itertoolsmodule.c"
        var $44=$43+8; //@line 2952 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 2952 "itertoolsmodule.c"
        var $45=$lz; //@line 2953 "itertoolsmodule.c"
        var $46=$45+12; //@line 2953 "itertoolsmodule.c"
        var $47=$it; //@line 2953 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 2953 "itertoolsmodule.c"
        var $48=$lz; //@line 2955 "itertoolsmodule.c"
        var $49=$48; //@line 2955 "itertoolsmodule.c"
        $0=$49; //@line 2955 "itertoolsmodule.c"
        __label__ = 12; break; //@line 2955 "itertoolsmodule.c"
      case 12: // $bb11
        var $50=$0; //@line 2935 "itertoolsmodule.c"
        $retval=$50; //@line 2935 "itertoolsmodule.c"
        var $retval12=$retval; //@line 2935 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2935 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilter_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 2961 "itertoolsmodule.c"
        var $1=$0; //@line 2961 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 2961 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 2962 "itertoolsmodule.c"
        var $3=$2+8; //@line 2962 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 2962 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 2962 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2962 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 2962 "itertoolsmodule.c"
        var $7=$6+8; //@line 2962 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2962 "itertoolsmodule.c"
        var $9=$8; //@line 2962 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 2962 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 2962 "itertoolsmodule.c"
        var $12=$8; //@line 2962 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 2962 "itertoolsmodule.c"
        var $13=$8; //@line 2962 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 2962 "itertoolsmodule.c"
        var $15=($14)==0; //@line 2962 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2962 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 2962 "itertoolsmodule.c"
        var $17=$16+8; //@line 2962 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 2962 "itertoolsmodule.c"
        var $19=$18+4; //@line 2962 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2962 "itertoolsmodule.c"
        var $21=$20+24; //@line 2962 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 2962 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 2962 "itertoolsmodule.c"
        var $24=$23+8; //@line 2962 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2962 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 2962 "itertoolsmodule.c"
        __label__ = 3; break; //@line 2962 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 2963 "itertoolsmodule.c"
        var $27=$26+12; //@line 2963 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 2963 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 2963 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2963 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 2963 "itertoolsmodule.c"
        var $31=$30+12; //@line 2963 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2963 "itertoolsmodule.c"
        var $33=$32; //@line 2963 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 2963 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 2963 "itertoolsmodule.c"
        var $36=$32; //@line 2963 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 2963 "itertoolsmodule.c"
        var $37=$32; //@line 2963 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2963 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2963 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2963 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 2963 "itertoolsmodule.c"
        var $41=$40+12; //@line 2963 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2963 "itertoolsmodule.c"
        var $43=$42+4; //@line 2963 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2963 "itertoolsmodule.c"
        var $45=$44+24; //@line 2963 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 2963 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 2963 "itertoolsmodule.c"
        var $48=$47+12; //@line 2963 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 2963 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 2963 "itertoolsmodule.c"
        __label__ = 6; break; //@line 2963 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 2964 "itertoolsmodule.c"
        var $51=$50; //@line 2964 "itertoolsmodule.c"
        var $52=$51+4; //@line 2964 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 2964 "itertoolsmodule.c"
        var $54=$53+160; //@line 2964 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 2964 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 2964 "itertoolsmodule.c"
        var $57=$56; //@line 2964 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 2964 "itertoolsmodule.c"
        ;
        return; //@line 2965 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilter_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 2970 "itertoolsmodule.c"
        var $2=$1+12; //@line 2970 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2970 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 2970 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2970 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 2970 "itertoolsmodule.c"
        var $6=$5+12; //@line 2970 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 2970 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 2970 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 2970 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 2970 "itertoolsmodule.c"
        $vret=$10; //@line 2970 "itertoolsmodule.c"
        var $11=$vret; //@line 2970 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 2970 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2970 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 2970 "itertoolsmodule.c"
        $0=$13; //@line 2970 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2970 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 2971 "itertoolsmodule.c"
        var $15=$14+8; //@line 2971 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 2971 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 2971 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2971 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 2971 "itertoolsmodule.c"
        var $19=$18+8; //@line 2971 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 2971 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 2971 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 2971 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 2971 "itertoolsmodule.c"
        $vret4=$23; //@line 2971 "itertoolsmodule.c"
        var $24=$vret4; //@line 2971 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 2971 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2971 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 2971 "itertoolsmodule.c"
        $0=$26; //@line 2971 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2971 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 2972 "itertoolsmodule.c"
        __label__ = 7; break; //@line 2972 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 2970 "itertoolsmodule.c"
        $retval=$27; //@line 2970 "itertoolsmodule.c"
        var $retval8=$retval; //@line 2970 "itertoolsmodule.c"
        ;
        return $retval8; //@line 2970 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilter_next($lz) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $it;
        var $ok;
        var $iternext;
        var $good;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 2979 "itertoolsmodule.c"
        var $2=$1+12; //@line 2979 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 2979 "itertoolsmodule.c"
        $it=$3; //@line 2979 "itertoolsmodule.c"
        var $4=$it; //@line 2983 "itertoolsmodule.c"
        var $5=$4+4; //@line 2983 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 2983 "itertoolsmodule.c"
        var $7=$6+112; //@line 2983 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 2983 "itertoolsmodule.c"
        $iternext=$8; //@line 2983 "itertoolsmodule.c"
        __label__ = 1; break; //@line 2983 "itertoolsmodule.c"
      case 1: // $bb
        var $9=$iternext; //@line 2985 "itertoolsmodule.c"
        var $10=$it; //@line 2985 "itertoolsmodule.c"
        var $11=FUNCTION_TABLE[$9]($10); //@line 2985 "itertoolsmodule.c"
        $item=$11; //@line 2985 "itertoolsmodule.c"
        var $12=($11)==0; //@line 2986 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2986 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 2987 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2987 "itertoolsmodule.c"
      case 3: // $bb2
        var $13=$lz_addr; //@line 2989 "itertoolsmodule.c"
        var $14=$13+8; //@line 2989 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 2989 "itertoolsmodule.c"
        var $16=($15)==(__Py_NoneStruct); //@line 2989 "itertoolsmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2989 "itertoolsmodule.c"
      case 4: // $bb3
        var $17=$lz_addr; //@line 2989 "itertoolsmodule.c"
        var $18=$17+8; //@line 2989 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 2989 "itertoolsmodule.c"
        var $20=($19)==(_PyBool_Type); //@line 2989 "itertoolsmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2989 "itertoolsmodule.c"
      case 5: // $bb4
        var $21=$item; //@line 2990 "itertoolsmodule.c"
        var $22=_PyObject_IsTrue($21); //@line 2990 "itertoolsmodule.c"
        $ok=$22; //@line 2990 "itertoolsmodule.c"
        __lastLabel__ = 5; __label__ = 13; break; //@line 2990 "itertoolsmodule.c"
      case 6: // $bb5
        var $23=$lz_addr; //@line 2993 "itertoolsmodule.c"
        var $24=$23+8; //@line 2993 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 2993 "itertoolsmodule.c"
        var $26=$item; //@line 2993 "itertoolsmodule.c"
        var $27=_PyObject_CallFunctionObjArgs($25, allocate([$26,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 2993 "itertoolsmodule.c"
        $good=$27; //@line 2993 "itertoolsmodule.c"
        var $28=$good; //@line 2995 "itertoolsmodule.c"
        var $29=($28)==0; //@line 2995 "itertoolsmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2995 "itertoolsmodule.c"
      case 7: // $bb6
        var $30=$item; //@line 2996 "itertoolsmodule.c"
        var $31=$30; //@line 2996 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 2996 "itertoolsmodule.c"
        var $33=($32) - 1; //@line 2996 "itertoolsmodule.c"
        var $34=$item; //@line 2996 "itertoolsmodule.c"
        var $35=$34; //@line 2996 "itertoolsmodule.c"
        HEAP[$35]=$33; //@line 2996 "itertoolsmodule.c"
        var $36=$item; //@line 2996 "itertoolsmodule.c"
        var $37=$36; //@line 2996 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 2996 "itertoolsmodule.c"
        var $39=($38)==0; //@line 2996 "itertoolsmodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2996 "itertoolsmodule.c"
      case 8: // $bb7
        var $40=$item; //@line 2996 "itertoolsmodule.c"
        var $41=$40+4; //@line 2996 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 2996 "itertoolsmodule.c"
        var $43=$42+24; //@line 2996 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 2996 "itertoolsmodule.c"
        var $45=$item; //@line 2996 "itertoolsmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 2996 "itertoolsmodule.c"
        __label__ = 9; break; //@line 2996 "itertoolsmodule.c"
      case 9: // $bb8
        $0=0; //@line 2997 "itertoolsmodule.c"
        __label__ = 17; break; //@line 2997 "itertoolsmodule.c"
      case 10: // $bb9
        var $46=$good; //@line 2999 "itertoolsmodule.c"
        var $47=_PyObject_IsTrue($46); //@line 2999 "itertoolsmodule.c"
        $ok=$47; //@line 2999 "itertoolsmodule.c"
        var $48=$good; //@line 3000 "itertoolsmodule.c"
        var $49=$48; //@line 3000 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 3000 "itertoolsmodule.c"
        var $51=($50) - 1; //@line 3000 "itertoolsmodule.c"
        var $52=$good; //@line 3000 "itertoolsmodule.c"
        var $53=$52; //@line 3000 "itertoolsmodule.c"
        HEAP[$53]=$51; //@line 3000 "itertoolsmodule.c"
        var $54=$good; //@line 3000 "itertoolsmodule.c"
        var $55=$54; //@line 3000 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 3000 "itertoolsmodule.c"
        var $57=($56)==0; //@line 3000 "itertoolsmodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3000 "itertoolsmodule.c"
      case 11: // $bb10
        var $58=$good; //@line 3000 "itertoolsmodule.c"
        var $59=$58+4; //@line 3000 "itertoolsmodule.c"
        var $60=HEAP[$59]; //@line 3000 "itertoolsmodule.c"
        var $61=$60+24; //@line 3000 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 3000 "itertoolsmodule.c"
        var $63=$good; //@line 3000 "itertoolsmodule.c"
        FUNCTION_TABLE[$62]($63); //@line 3000 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3000 "itertoolsmodule.c"
      case 12: // $bb11thread_pre_split
        var $_pr=$ok;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb11
        var $64=__lastLabel__ == 12 ? $_pr : ($22);
        var $65=($64)!=0; //@line 3002 "itertoolsmodule.c"
        var $66=$item; //@line 3003 "itertoolsmodule.c"
        if ($65) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3002 "itertoolsmodule.c"
      case 14: // $bb12
        $0=$66; //@line 3003 "itertoolsmodule.c"
        __label__ = 17; break; //@line 3003 "itertoolsmodule.c"
      case 15: // $bb13
        var $67=$66; //@line 3004 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 3004 "itertoolsmodule.c"
        var $69=($68) - 1; //@line 3004 "itertoolsmodule.c"
        var $70=$item; //@line 3004 "itertoolsmodule.c"
        var $71=$70; //@line 3004 "itertoolsmodule.c"
        HEAP[$71]=$69; //@line 3004 "itertoolsmodule.c"
        var $72=$item; //@line 3004 "itertoolsmodule.c"
        var $73=$72; //@line 3004 "itertoolsmodule.c"
        var $74=HEAP[$73]; //@line 3004 "itertoolsmodule.c"
        var $75=($74)==0; //@line 3004 "itertoolsmodule.c"
        if ($75) { __label__ = 16; break; } else { __label__ = 1; break; } //@line 3004 "itertoolsmodule.c"
      case 16: // $bb14
        var $76=$item; //@line 3004 "itertoolsmodule.c"
        var $77=$76+4; //@line 3004 "itertoolsmodule.c"
        var $78=HEAP[$77]; //@line 3004 "itertoolsmodule.c"
        var $79=$78+24; //@line 3004 "itertoolsmodule.c"
        var $80=HEAP[$79]; //@line 3004 "itertoolsmodule.c"
        var $81=$item; //@line 3004 "itertoolsmodule.c"
        FUNCTION_TABLE[$80]($81); //@line 3004 "itertoolsmodule.c"
        __label__ = 1; break; //@line 3004 "itertoolsmodule.c"
      case 17: // $bb16
        var $82=$0; //@line 2987 "itertoolsmodule.c"
        $retval=$82; //@line 2987 "itertoolsmodule.c"
        var $retval17=$retval; //@line 2987 "itertoolsmodule.c"
        ;
        return $retval17; //@line 2987 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilterfalse_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $func=__stackBase__;
        var $seq=__stackBase__+4;
        var $it;
        var $lz;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 3076 "itertoolsmodule.c"
        var $2=($1)==(_ifilterfalse_type); //@line 3076 "itertoolsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3076 "itertoolsmodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 3076 "itertoolsmodule.c"
        var $4=__PyArg_NoKeywords(__str62, $3); //@line 3076 "itertoolsmodule.c"
        var $5=($4)==0; //@line 3076 "itertoolsmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3076 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 3078 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3078 "itertoolsmodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 3080 "itertoolsmodule.c"
        var $7=_PyArg_UnpackTuple($6, __str63, 2, 2, allocate([$func,0,0,0,$seq,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 3080 "itertoolsmodule.c"
        var $8=($7)==0; //@line 3080 "itertoolsmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3080 "itertoolsmodule.c"
      case 4: // $bb3
        $0=0; //@line 3081 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3081 "itertoolsmodule.c"
      case 5: // $bb4
        var $9=HEAP[$seq]; //@line 3084 "itertoolsmodule.c"
        var $10=_PyObject_GetIter($9); //@line 3084 "itertoolsmodule.c"
        $it=$10; //@line 3084 "itertoolsmodule.c"
        var $11=$it; //@line 3085 "itertoolsmodule.c"
        var $12=($11)==0; //@line 3085 "itertoolsmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3085 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 3086 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3086 "itertoolsmodule.c"
      case 7: // $bb6
        var $13=$type_addr; //@line 3089 "itertoolsmodule.c"
        var $14=$13+152; //@line 3089 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 3089 "itertoolsmodule.c"
        var $16=$type_addr; //@line 3089 "itertoolsmodule.c"
        var $17=FUNCTION_TABLE[$15]($16, 0); //@line 3089 "itertoolsmodule.c"
        var $18=$17; //@line 3089 "itertoolsmodule.c"
        $lz=$18; //@line 3089 "itertoolsmodule.c"
        var $19=$lz; //@line 3090 "itertoolsmodule.c"
        var $20=($19)==0; //@line 3090 "itertoolsmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 3090 "itertoolsmodule.c"
      case 8: // $bb7
        var $21=$it; //@line 3091 "itertoolsmodule.c"
        var $22=$21; //@line 3091 "itertoolsmodule.c"
        var $23=HEAP[$22]; //@line 3091 "itertoolsmodule.c"
        var $24=($23) - 1; //@line 3091 "itertoolsmodule.c"
        var $25=$it; //@line 3091 "itertoolsmodule.c"
        var $26=$25; //@line 3091 "itertoolsmodule.c"
        HEAP[$26]=$24; //@line 3091 "itertoolsmodule.c"
        var $27=$it; //@line 3091 "itertoolsmodule.c"
        var $28=$27; //@line 3091 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 3091 "itertoolsmodule.c"
        var $30=($29)==0; //@line 3091 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3091 "itertoolsmodule.c"
      case 9: // $bb8
        var $31=$it; //@line 3091 "itertoolsmodule.c"
        var $32=$31+4; //@line 3091 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 3091 "itertoolsmodule.c"
        var $34=$33+24; //@line 3091 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 3091 "itertoolsmodule.c"
        var $36=$it; //@line 3091 "itertoolsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 3091 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3091 "itertoolsmodule.c"
      case 10: // $bb9
        $0=0; //@line 3092 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3092 "itertoolsmodule.c"
      case 11: // $bb10
        var $37=HEAP[$func]; //@line 3094 "itertoolsmodule.c"
        var $38=$37; //@line 3094 "itertoolsmodule.c"
        var $39=HEAP[$38]; //@line 3094 "itertoolsmodule.c"
        var $40=($39) + 1; //@line 3094 "itertoolsmodule.c"
        var $41=$37; //@line 3094 "itertoolsmodule.c"
        HEAP[$41]=$40; //@line 3094 "itertoolsmodule.c"
        var $42=HEAP[$func]; //@line 3095 "itertoolsmodule.c"
        var $43=$lz; //@line 3095 "itertoolsmodule.c"
        var $44=$43+8; //@line 3095 "itertoolsmodule.c"
        HEAP[$44]=$42; //@line 3095 "itertoolsmodule.c"
        var $45=$lz; //@line 3096 "itertoolsmodule.c"
        var $46=$45+12; //@line 3096 "itertoolsmodule.c"
        var $47=$it; //@line 3096 "itertoolsmodule.c"
        HEAP[$46]=$47; //@line 3096 "itertoolsmodule.c"
        var $48=$lz; //@line 3098 "itertoolsmodule.c"
        var $49=$48; //@line 3098 "itertoolsmodule.c"
        $0=$49; //@line 3098 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3098 "itertoolsmodule.c"
      case 12: // $bb11
        var $50=$0; //@line 3078 "itertoolsmodule.c"
        $retval=$50; //@line 3078 "itertoolsmodule.c"
        var $retval12=$retval; //@line 3078 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3078 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilterfalse_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 3104 "itertoolsmodule.c"
        var $1=$0; //@line 3104 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 3104 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 3105 "itertoolsmodule.c"
        var $3=$2+8; //@line 3105 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 3105 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 3105 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3105 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 3105 "itertoolsmodule.c"
        var $7=$6+8; //@line 3105 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3105 "itertoolsmodule.c"
        var $9=$8; //@line 3105 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3105 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 3105 "itertoolsmodule.c"
        var $12=$8; //@line 3105 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 3105 "itertoolsmodule.c"
        var $13=$8; //@line 3105 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3105 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3105 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3105 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 3105 "itertoolsmodule.c"
        var $17=$16+8; //@line 3105 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3105 "itertoolsmodule.c"
        var $19=$18+4; //@line 3105 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3105 "itertoolsmodule.c"
        var $21=$20+24; //@line 3105 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3105 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 3105 "itertoolsmodule.c"
        var $24=$23+8; //@line 3105 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3105 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 3105 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3105 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 3106 "itertoolsmodule.c"
        var $27=$26+12; //@line 3106 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3106 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 3106 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3106 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 3106 "itertoolsmodule.c"
        var $31=$30+12; //@line 3106 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3106 "itertoolsmodule.c"
        var $33=$32; //@line 3106 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 3106 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 3106 "itertoolsmodule.c"
        var $36=$32; //@line 3106 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 3106 "itertoolsmodule.c"
        var $37=$32; //@line 3106 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3106 "itertoolsmodule.c"
        var $39=($38)==0; //@line 3106 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3106 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 3106 "itertoolsmodule.c"
        var $41=$40+12; //@line 3106 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3106 "itertoolsmodule.c"
        var $43=$42+4; //@line 3106 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3106 "itertoolsmodule.c"
        var $45=$44+24; //@line 3106 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 3106 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 3106 "itertoolsmodule.c"
        var $48=$47+12; //@line 3106 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 3106 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 3106 "itertoolsmodule.c"
        __label__ = 6; break; //@line 3106 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 3107 "itertoolsmodule.c"
        var $51=$50; //@line 3107 "itertoolsmodule.c"
        var $52=$51+4; //@line 3107 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 3107 "itertoolsmodule.c"
        var $54=$53+160; //@line 3107 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 3107 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 3107 "itertoolsmodule.c"
        var $57=$56; //@line 3107 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 3107 "itertoolsmodule.c"
        ;
        return; //@line 3108 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilterfalse_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 3113 "itertoolsmodule.c"
        var $2=$1+12; //@line 3113 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3113 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3113 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3113 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 3113 "itertoolsmodule.c"
        var $6=$5+12; //@line 3113 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3113 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 3113 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 3113 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 3113 "itertoolsmodule.c"
        $vret=$10; //@line 3113 "itertoolsmodule.c"
        var $11=$vret; //@line 3113 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 3113 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3113 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 3113 "itertoolsmodule.c"
        $0=$13; //@line 3113 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3113 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 3114 "itertoolsmodule.c"
        var $15=$14+8; //@line 3114 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 3114 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 3114 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3114 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 3114 "itertoolsmodule.c"
        var $19=$18+8; //@line 3114 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3114 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 3114 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 3114 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 3114 "itertoolsmodule.c"
        $vret4=$23; //@line 3114 "itertoolsmodule.c"
        var $24=$vret4; //@line 3114 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 3114 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3114 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 3114 "itertoolsmodule.c"
        $0=$26; //@line 3114 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3114 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 3115 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3115 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 3113 "itertoolsmodule.c"
        $retval=$27; //@line 3113 "itertoolsmodule.c"
        var $retval8=$retval; //@line 3113 "itertoolsmodule.c"
        ;
        return $retval8; //@line 3113 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ifilterfalse_next($lz) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $item;
        var $it;
        var $ok;
        var $iternext;
        var $good;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3122 "itertoolsmodule.c"
        var $2=$1+12; //@line 3122 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3122 "itertoolsmodule.c"
        $it=$3; //@line 3122 "itertoolsmodule.c"
        var $4=$it; //@line 3126 "itertoolsmodule.c"
        var $5=$4+4; //@line 3126 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 3126 "itertoolsmodule.c"
        var $7=$6+112; //@line 3126 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3126 "itertoolsmodule.c"
        $iternext=$8; //@line 3126 "itertoolsmodule.c"
        __label__ = 1; break; //@line 3126 "itertoolsmodule.c"
      case 1: // $bb
        var $9=$iternext; //@line 3128 "itertoolsmodule.c"
        var $10=$it; //@line 3128 "itertoolsmodule.c"
        var $11=FUNCTION_TABLE[$9]($10); //@line 3128 "itertoolsmodule.c"
        $item=$11; //@line 3128 "itertoolsmodule.c"
        var $12=($11)==0; //@line 3129 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3129 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 3130 "itertoolsmodule.c"
        __label__ = 17; break; //@line 3130 "itertoolsmodule.c"
      case 3: // $bb2
        var $13=$lz_addr; //@line 3132 "itertoolsmodule.c"
        var $14=$13+8; //@line 3132 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 3132 "itertoolsmodule.c"
        var $16=($15)==(__Py_NoneStruct); //@line 3132 "itertoolsmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 3132 "itertoolsmodule.c"
      case 4: // $bb3
        var $17=$lz_addr; //@line 3132 "itertoolsmodule.c"
        var $18=$17+8; //@line 3132 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 3132 "itertoolsmodule.c"
        var $20=($19)==(_PyBool_Type); //@line 3132 "itertoolsmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3132 "itertoolsmodule.c"
      case 5: // $bb4
        var $21=$item; //@line 3133 "itertoolsmodule.c"
        var $22=_PyObject_IsTrue($21); //@line 3133 "itertoolsmodule.c"
        $ok=$22; //@line 3133 "itertoolsmodule.c"
        __lastLabel__ = 5; __label__ = 13; break; //@line 3133 "itertoolsmodule.c"
      case 6: // $bb5
        var $23=$lz_addr; //@line 3136 "itertoolsmodule.c"
        var $24=$23+8; //@line 3136 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3136 "itertoolsmodule.c"
        var $26=$item; //@line 3136 "itertoolsmodule.c"
        var $27=_PyObject_CallFunctionObjArgs($25, allocate([$26,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 3136 "itertoolsmodule.c"
        $good=$27; //@line 3136 "itertoolsmodule.c"
        var $28=$good; //@line 3138 "itertoolsmodule.c"
        var $29=($28)==0; //@line 3138 "itertoolsmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 3138 "itertoolsmodule.c"
      case 7: // $bb6
        var $30=$item; //@line 3139 "itertoolsmodule.c"
        var $31=$30; //@line 3139 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3139 "itertoolsmodule.c"
        var $33=($32) - 1; //@line 3139 "itertoolsmodule.c"
        var $34=$item; //@line 3139 "itertoolsmodule.c"
        var $35=$34; //@line 3139 "itertoolsmodule.c"
        HEAP[$35]=$33; //@line 3139 "itertoolsmodule.c"
        var $36=$item; //@line 3139 "itertoolsmodule.c"
        var $37=$36; //@line 3139 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3139 "itertoolsmodule.c"
        var $39=($38)==0; //@line 3139 "itertoolsmodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3139 "itertoolsmodule.c"
      case 8: // $bb7
        var $40=$item; //@line 3139 "itertoolsmodule.c"
        var $41=$40+4; //@line 3139 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3139 "itertoolsmodule.c"
        var $43=$42+24; //@line 3139 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3139 "itertoolsmodule.c"
        var $45=$item; //@line 3139 "itertoolsmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 3139 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3139 "itertoolsmodule.c"
      case 9: // $bb8
        $0=0; //@line 3140 "itertoolsmodule.c"
        __label__ = 17; break; //@line 3140 "itertoolsmodule.c"
      case 10: // $bb9
        var $46=$good; //@line 3142 "itertoolsmodule.c"
        var $47=_PyObject_IsTrue($46); //@line 3142 "itertoolsmodule.c"
        $ok=$47; //@line 3142 "itertoolsmodule.c"
        var $48=$good; //@line 3143 "itertoolsmodule.c"
        var $49=$48; //@line 3143 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 3143 "itertoolsmodule.c"
        var $51=($50) - 1; //@line 3143 "itertoolsmodule.c"
        var $52=$good; //@line 3143 "itertoolsmodule.c"
        var $53=$52; //@line 3143 "itertoolsmodule.c"
        HEAP[$53]=$51; //@line 3143 "itertoolsmodule.c"
        var $54=$good; //@line 3143 "itertoolsmodule.c"
        var $55=$54; //@line 3143 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 3143 "itertoolsmodule.c"
        var $57=($56)==0; //@line 3143 "itertoolsmodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3143 "itertoolsmodule.c"
      case 11: // $bb10
        var $58=$good; //@line 3143 "itertoolsmodule.c"
        var $59=$58+4; //@line 3143 "itertoolsmodule.c"
        var $60=HEAP[$59]; //@line 3143 "itertoolsmodule.c"
        var $61=$60+24; //@line 3143 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 3143 "itertoolsmodule.c"
        var $63=$good; //@line 3143 "itertoolsmodule.c"
        FUNCTION_TABLE[$62]($63); //@line 3143 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3143 "itertoolsmodule.c"
      case 12: // $bb11thread_pre_split
        var $_pr=$ok;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb11
        var $64=__lastLabel__ == 12 ? $_pr : ($22);
        var $65=($64)==0; //@line 3145 "itertoolsmodule.c"
        var $66=$item; //@line 3146 "itertoolsmodule.c"
        if ($65) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3145 "itertoolsmodule.c"
      case 14: // $bb12
        $0=$66; //@line 3146 "itertoolsmodule.c"
        __label__ = 17; break; //@line 3146 "itertoolsmodule.c"
      case 15: // $bb13
        var $67=$66; //@line 3147 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 3147 "itertoolsmodule.c"
        var $69=($68) - 1; //@line 3147 "itertoolsmodule.c"
        var $70=$item; //@line 3147 "itertoolsmodule.c"
        var $71=$70; //@line 3147 "itertoolsmodule.c"
        HEAP[$71]=$69; //@line 3147 "itertoolsmodule.c"
        var $72=$item; //@line 3147 "itertoolsmodule.c"
        var $73=$72; //@line 3147 "itertoolsmodule.c"
        var $74=HEAP[$73]; //@line 3147 "itertoolsmodule.c"
        var $75=($74)==0; //@line 3147 "itertoolsmodule.c"
        if ($75) { __label__ = 16; break; } else { __label__ = 1; break; } //@line 3147 "itertoolsmodule.c"
      case 16: // $bb14
        var $76=$item; //@line 3147 "itertoolsmodule.c"
        var $77=$76+4; //@line 3147 "itertoolsmodule.c"
        var $78=HEAP[$77]; //@line 3147 "itertoolsmodule.c"
        var $79=$78+24; //@line 3147 "itertoolsmodule.c"
        var $80=HEAP[$79]; //@line 3147 "itertoolsmodule.c"
        var $81=$item; //@line 3147 "itertoolsmodule.c"
        FUNCTION_TABLE[$80]($81); //@line 3147 "itertoolsmodule.c"
        __label__ = 1; break; //@line 3147 "itertoolsmodule.c"
      case 17: // $bb16
        var $82=$0; //@line 3130 "itertoolsmodule.c"
        $retval=$82; //@line 3130 "itertoolsmodule.c"
        var $retval17=$retval; //@line 3130 "itertoolsmodule.c"
        ;
        return $retval17; //@line 3130 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $lz;
        var $slow_mode;
        var $cnt;
        var $long_cnt=__stackBase__;
        var $long_step=__stackBase__+4;
        var $_py_tmp;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $slow_mode=0; //@line 3234 "itertoolsmodule.c"
        $cnt=0; //@line 3235 "itertoolsmodule.c"
        HEAP[$long_cnt]=0; //@line 3236 "itertoolsmodule.c"
        HEAP[$long_step]=0; //@line 3237 "itertoolsmodule.c"
        var $1=$args_addr; //@line 3240 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 3240 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str65, _kwlist_11697, allocate([$long_cnt,0,0,0,$long_step,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 3240 "itertoolsmodule.c"
        var $4=($3)==0; //@line 3240 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3240 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3242 "itertoolsmodule.c"
        __label__ = 47; break; //@line 3242 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=HEAP[$long_cnt]; //@line 3244 "itertoolsmodule.c"
        var $6=($5)==0; //@line 3244 "itertoolsmodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 3244 "itertoolsmodule.c"
      case 3: // $bb2
        var $7=HEAP[$long_cnt]; //@line 3244 "itertoolsmodule.c"
        var $8=_PyNumber_Check($7); //@line 3244 "itertoolsmodule.c"
        var $9=($8)==0; //@line 3244 "itertoolsmodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 3244 "itertoolsmodule.c"
      case 4: // $bb3
        var $10=HEAP[$long_step]; //@line 3244 "itertoolsmodule.c"
        var $11=($10)==0; //@line 3244 "itertoolsmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 3244 "itertoolsmodule.c"
      case 5: // $bb4
        var $12=HEAP[$long_step]; //@line 3244 "itertoolsmodule.c"
        var $13=_PyNumber_Check($12); //@line 3244 "itertoolsmodule.c"
        var $14=($13)==0; //@line 3244 "itertoolsmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3244 "itertoolsmodule.c"
      case 6: // $bb5
        var $15=HEAP[_PyExc_TypeError]; //@line 3246 "itertoolsmodule.c"
        _PyErr_SetString($15, __str68); //@line 3246 "itertoolsmodule.c"
        $0=0; //@line 3247 "itertoolsmodule.c"
        __label__ = 47; break; //@line 3247 "itertoolsmodule.c"
      case 7: // $bb6
        var $16=HEAP[$long_cnt]; //@line 3250 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 3250 "itertoolsmodule.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 3250 "itertoolsmodule.c"
      case 8: // $bb7
        var $18=HEAP[$long_cnt]; //@line 3251 "itertoolsmodule.c"
        var $19=_PyInt_AsSsize_t($18); //@line 3251 "itertoolsmodule.c"
        $cnt=$19; //@line 3251 "itertoolsmodule.c"
        var $20=$cnt; //@line 3252 "itertoolsmodule.c"
        var $21=($20)!=-1; //@line 3252 "itertoolsmodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 3252 "itertoolsmodule.c"
      case 9: // $bb8
        var $22=_PyErr_Occurred(); //@line 3252 "itertoolsmodule.c"
        var $23=($22)!=0; //@line 3252 "itertoolsmodule.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 3252 "itertoolsmodule.c"
      case 10: // $bb9
        var $24=HEAP[$long_cnt]; //@line 3252 "itertoolsmodule.c"
        var $25=$24+4; //@line 3252 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 3252 "itertoolsmodule.c"
        var $27=$26+84; //@line 3252 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3252 "itertoolsmodule.c"
        var $29=($28) & 8388608; //@line 3252 "itertoolsmodule.c"
        var $30=($29)==0; //@line 3252 "itertoolsmodule.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3252 "itertoolsmodule.c"
      case 11: // $bb10
        _PyErr_Clear(); //@line 3253 "itertoolsmodule.c"
        $slow_mode=1; //@line 3254 "itertoolsmodule.c"
        __label__ = 12; break; //@line 3254 "itertoolsmodule.c"
      case 12: // $bb11
        var $31=HEAP[$long_cnt]; //@line 3256 "itertoolsmodule.c"
        var $32=$31; //@line 3256 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 3256 "itertoolsmodule.c"
        var $34=($33) + 1; //@line 3256 "itertoolsmodule.c"
        var $35=$31; //@line 3256 "itertoolsmodule.c"
        HEAP[$35]=$34; //@line 3256 "itertoolsmodule.c"
        __label__ = 14; break; //@line 3256 "itertoolsmodule.c"
      case 13: // $bb12
        $cnt=0; //@line 3258 "itertoolsmodule.c"
        var $36=_PyInt_FromLong(0); //@line 3259 "itertoolsmodule.c"
        HEAP[$long_cnt]=$36; //@line 3259 "itertoolsmodule.c"
        __label__ = 14; break; //@line 3259 "itertoolsmodule.c"
      case 14: // $bb13
        var $37=HEAP[$long_step]; //@line 3263 "itertoolsmodule.c"
        var $38=($37)==0; //@line 3263 "itertoolsmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 3263 "itertoolsmodule.c"
      case 15: // $bb14
        var $39=_PyInt_FromLong(1); //@line 3264 "itertoolsmodule.c"
        HEAP[$long_step]=$39; //@line 3264 "itertoolsmodule.c"
        var $40=HEAP[$long_step]; //@line 3265 "itertoolsmodule.c"
        var $41=($40)==0; //@line 3265 "itertoolsmodule.c"
        if ($41) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 3265 "itertoolsmodule.c"
      case 16: // $bb15
        var $42=HEAP[$long_cnt]; //@line 3266 "itertoolsmodule.c"
        var $43=$42; //@line 3266 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3266 "itertoolsmodule.c"
        var $45=($44) - 1; //@line 3266 "itertoolsmodule.c"
        var $46=$42; //@line 3266 "itertoolsmodule.c"
        HEAP[$46]=$45; //@line 3266 "itertoolsmodule.c"
        var $47=$42; //@line 3266 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 3266 "itertoolsmodule.c"
        var $49=($48)==0; //@line 3266 "itertoolsmodule.c"
        if ($49) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3266 "itertoolsmodule.c"
      case 17: // $bb16
        var $50=HEAP[$long_cnt]; //@line 3266 "itertoolsmodule.c"
        var $51=$50+4; //@line 3266 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 3266 "itertoolsmodule.c"
        var $53=$52+24; //@line 3266 "itertoolsmodule.c"
        var $54=HEAP[$53]; //@line 3266 "itertoolsmodule.c"
        var $55=HEAP[$long_cnt]; //@line 3266 "itertoolsmodule.c"
        FUNCTION_TABLE[$54]($55); //@line 3266 "itertoolsmodule.c"
        __label__ = 18; break; //@line 3266 "itertoolsmodule.c"
      case 18: // $bb17
        $0=0; //@line 3267 "itertoolsmodule.c"
        __label__ = 47; break; //@line 3267 "itertoolsmodule.c"
      case 19: // $bb19
        var $56=HEAP[$long_step]; //@line 3270 "itertoolsmodule.c"
        var $57=$56; //@line 3270 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 3270 "itertoolsmodule.c"
        var $59=($58) + 1; //@line 3270 "itertoolsmodule.c"
        var $60=$56; //@line 3270 "itertoolsmodule.c"
        HEAP[$60]=$59; //@line 3270 "itertoolsmodule.c"
        __label__ = 20; break; //@line 3270 "itertoolsmodule.c"
      case 20: // $bb20
        var $61=HEAP[$long_cnt]; //@line 3272 "itertoolsmodule.c"
        var $62=($61)==0; //@line 3272 "itertoolsmodule.c"
        if ($62) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 3272 "itertoolsmodule.c"
      case 21: // $bb21
        var $63=HEAP[$long_step]; //@line 3272 "itertoolsmodule.c"
        var $64=($63)==0; //@line 3272 "itertoolsmodule.c"
        if ($64) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 3272 "itertoolsmodule.c"
      case 22: // $bb22
        ___assert_fail(__str69, __str5, 3272, ___PRETTY_FUNCTION___11698); //@line 3272 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3272 "itertoolsmodule.c"
      case 23: // $bb23
        var $65=HEAP[$long_step]; //@line 3275 "itertoolsmodule.c"
        var $66=$65+4; //@line 3275 "itertoolsmodule.c"
        var $67=HEAP[$66]; //@line 3275 "itertoolsmodule.c"
        var $68=$67+84; //@line 3275 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 3275 "itertoolsmodule.c"
        var $70=($69) & 8388608; //@line 3275 "itertoolsmodule.c"
        var $71=($70)==0; //@line 3275 "itertoolsmodule.c"
        if ($71) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 3275 "itertoolsmodule.c"
      case 24: // $bb24
        var $72=HEAP[$long_step]; //@line 3275 "itertoolsmodule.c"
        var $73=$72; //@line 3275 "itertoolsmodule.c"
        var $74=$73+8; //@line 3275 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 3275 "itertoolsmodule.c"
        var $76=($75)!=1; //@line 3275 "itertoolsmodule.c"
        if ($76) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 3275 "itertoolsmodule.c"
      case 25: // $bb26_thread
        $slow_mode=1; //@line 3277 "itertoolsmodule.c"
        __label__ = 27; break;
      case 26: // $bb26
        var $_pr=$slow_mode;
        var $77=($_pr)!=0; //@line 3280 "itertoolsmodule.c"
        if ($77) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 3280 "itertoolsmodule.c"
      case 27: // $bb34_thread
        $cnt=2147483647; //@line 3281 "itertoolsmodule.c"
        __label__ = 35; break;
      case 28: // $bb28
        var $78=HEAP[$long_cnt]; //@line 3283 "itertoolsmodule.c"
        var $79=($78)!=0; //@line 3283 "itertoolsmodule.c"
        if ($79) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 3283 "itertoolsmodule.c"
      case 29: // $bb29
        var $80=HEAP[$long_cnt]; //@line 3283 "itertoolsmodule.c"
        $_py_tmp=$80; //@line 3283 "itertoolsmodule.c"
        HEAP[$long_cnt]=0; //@line 3283 "itertoolsmodule.c"
        var $81=$_py_tmp; //@line 3283 "itertoolsmodule.c"
        var $82=$81; //@line 3283 "itertoolsmodule.c"
        var $83=HEAP[$82]; //@line 3283 "itertoolsmodule.c"
        var $84=($83) - 1; //@line 3283 "itertoolsmodule.c"
        var $85=$_py_tmp; //@line 3283 "itertoolsmodule.c"
        var $86=$85; //@line 3283 "itertoolsmodule.c"
        HEAP[$86]=$84; //@line 3283 "itertoolsmodule.c"
        var $87=$_py_tmp; //@line 3283 "itertoolsmodule.c"
        var $88=$87; //@line 3283 "itertoolsmodule.c"
        var $89=HEAP[$88]; //@line 3283 "itertoolsmodule.c"
        var $90=($89)==0; //@line 3283 "itertoolsmodule.c"
        if ($90) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 3283 "itertoolsmodule.c"
      case 30: // $bb30
        var $91=$_py_tmp; //@line 3283 "itertoolsmodule.c"
        var $92=$91+4; //@line 3283 "itertoolsmodule.c"
        var $93=HEAP[$92]; //@line 3283 "itertoolsmodule.c"
        var $94=$93+24; //@line 3283 "itertoolsmodule.c"
        var $95=HEAP[$94]; //@line 3283 "itertoolsmodule.c"
        var $96=$_py_tmp; //@line 3283 "itertoolsmodule.c"
        FUNCTION_TABLE[$95]($96); //@line 3283 "itertoolsmodule.c"
        __label__ = 31; break; //@line 3283 "itertoolsmodule.c"
      case 31: // $bb31
        var $_pr1=$cnt;
        var $97=($_pr1)==2147483647; //@line 3285 "itertoolsmodule.c"
        if ($97) { __label__ = 35; break; } else { __label__ = 32; break; } //@line 3285 "itertoolsmodule.c"
      case 32: // $bb32
        var $98=HEAP[$long_cnt]; //@line 3285 "itertoolsmodule.c"
        var $99=($98)!=0; //@line 3285 "itertoolsmodule.c"
        if ($99) { __label__ = 34; break; } else { __label__ = 33; break; } //@line 3285 "itertoolsmodule.c"
      case 33: // $bb33
        var $100=$slow_mode; //@line 3285 "itertoolsmodule.c"
        var $101=($100)!=0; //@line 3285 "itertoolsmodule.c"
        if ($101) { __label__ = 34; break; } else { __label__ = 38; break; } //@line 3285 "itertoolsmodule.c"
      case 34: // $bb34
        var $_pr2_pr=$cnt;
        var $102=($_pr2_pr)!=2147483647; //@line 3285 "itertoolsmodule.c"
        if ($102) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 3285 "itertoolsmodule.c"
      case 35: // $bb35
        var $103=HEAP[$long_cnt]; //@line 3285 "itertoolsmodule.c"
        var $104=($103)==0; //@line 3285 "itertoolsmodule.c"
        if ($104) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 3285 "itertoolsmodule.c"
      case 36: // $bb36
        var $105=$slow_mode; //@line 3285 "itertoolsmodule.c"
        var $106=($105)==0; //@line 3285 "itertoolsmodule.c"
        if ($106) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 3285 "itertoolsmodule.c"
      case 37: // $bb37
        ___assert_fail(__str70, __str5, 3286, ___PRETTY_FUNCTION___11698); //@line 3285 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3285 "itertoolsmodule.c"
      case 38: // $bb39
        var $107=HEAP[$long_step]; //@line 3287 "itertoolsmodule.c"
        var $108=$107+4; //@line 3287 "itertoolsmodule.c"
        var $109=HEAP[$108]; //@line 3287 "itertoolsmodule.c"
        var $110=$109+84; //@line 3287 "itertoolsmodule.c"
        var $111=HEAP[$110]; //@line 3287 "itertoolsmodule.c"
        var $112=($111) & 8388608; //@line 3287 "itertoolsmodule.c"
        var $113=($112)==0; //@line 3287 "itertoolsmodule.c"
        if ($113) { __label__ = 40; break; } else { __label__ = 39; break; } //@line 3287 "itertoolsmodule.c"
      case 39: // $bb40
        var $114=HEAP[$long_step]; //@line 3287 "itertoolsmodule.c"
        var $115=$114; //@line 3287 "itertoolsmodule.c"
        var $116=$115+8; //@line 3287 "itertoolsmodule.c"
        var $117=HEAP[$116]; //@line 3287 "itertoolsmodule.c"
        var $118=($117)!=1; //@line 3287 "itertoolsmodule.c"
        if ($118) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 3287 "itertoolsmodule.c"
      case 40: // $bb41
        ___assert_fail(__str71, __str5, 3288, ___PRETTY_FUNCTION___11698); //@line 3287 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3287 "itertoolsmodule.c"
      case 41: // $bb42
        var $119=$type_addr; //@line 3291 "itertoolsmodule.c"
        var $120=$119+152; //@line 3291 "itertoolsmodule.c"
        var $121=HEAP[$120]; //@line 3291 "itertoolsmodule.c"
        var $122=$type_addr; //@line 3291 "itertoolsmodule.c"
        var $123=FUNCTION_TABLE[$121]($122, 0); //@line 3291 "itertoolsmodule.c"
        var $124=$123; //@line 3291 "itertoolsmodule.c"
        $lz=$124; //@line 3291 "itertoolsmodule.c"
        var $125=($124)==0; //@line 3292 "itertoolsmodule.c"
        if ($125) { __label__ = 42; break; } else { __label__ = 46; break; } //@line 3292 "itertoolsmodule.c"
      case 42: // $bb43
        var $126=HEAP[$long_cnt]; //@line 3293 "itertoolsmodule.c"
        var $127=($126)!=0; //@line 3293 "itertoolsmodule.c"
        if ($127) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 3293 "itertoolsmodule.c"
      case 43: // $bb44
        var $128=HEAP[$long_cnt]; //@line 3293 "itertoolsmodule.c"
        var $129=$128; //@line 3293 "itertoolsmodule.c"
        var $130=HEAP[$129]; //@line 3293 "itertoolsmodule.c"
        var $131=($130) - 1; //@line 3293 "itertoolsmodule.c"
        var $132=$128; //@line 3293 "itertoolsmodule.c"
        HEAP[$132]=$131; //@line 3293 "itertoolsmodule.c"
        var $133=$128; //@line 3293 "itertoolsmodule.c"
        var $134=HEAP[$133]; //@line 3293 "itertoolsmodule.c"
        var $135=($134)==0; //@line 3293 "itertoolsmodule.c"
        if ($135) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 3293 "itertoolsmodule.c"
      case 44: // $bb45
        var $136=HEAP[$long_cnt]; //@line 3293 "itertoolsmodule.c"
        var $137=$136+4; //@line 3293 "itertoolsmodule.c"
        var $138=HEAP[$137]; //@line 3293 "itertoolsmodule.c"
        var $139=$138+24; //@line 3293 "itertoolsmodule.c"
        var $140=HEAP[$139]; //@line 3293 "itertoolsmodule.c"
        var $141=HEAP[$long_cnt]; //@line 3293 "itertoolsmodule.c"
        FUNCTION_TABLE[$140]($141); //@line 3293 "itertoolsmodule.c"
        __label__ = 45; break; //@line 3293 "itertoolsmodule.c"
      case 45: // $bb46
        $0=0; //@line 3294 "itertoolsmodule.c"
        __label__ = 47; break; //@line 3294 "itertoolsmodule.c"
      case 46: // $bb47
        var $142=$lz; //@line 3296 "itertoolsmodule.c"
        var $143=$142+8; //@line 3296 "itertoolsmodule.c"
        var $144=$cnt; //@line 3296 "itertoolsmodule.c"
        HEAP[$143]=$144; //@line 3296 "itertoolsmodule.c"
        var $145=HEAP[$long_cnt]; //@line 3297 "itertoolsmodule.c"
        var $146=$lz; //@line 3297 "itertoolsmodule.c"
        var $147=$146+12; //@line 3297 "itertoolsmodule.c"
        HEAP[$147]=$145; //@line 3297 "itertoolsmodule.c"
        var $148=HEAP[$long_step]; //@line 3298 "itertoolsmodule.c"
        var $149=$lz; //@line 3298 "itertoolsmodule.c"
        var $150=$149+16; //@line 3298 "itertoolsmodule.c"
        HEAP[$150]=$148; //@line 3298 "itertoolsmodule.c"
        var $151=$lz; //@line 3300 "itertoolsmodule.c"
        var $152=$151; //@line 3300 "itertoolsmodule.c"
        $0=$152; //@line 3300 "itertoolsmodule.c"
        __label__ = 47; break; //@line 3300 "itertoolsmodule.c"
      case 47: // $bb48
        var $153=$0; //@line 3242 "itertoolsmodule.c"
        $retval=$153; //@line 3242 "itertoolsmodule.c"
        var $retval49=$retval; //@line 3242 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval49; //@line 3242 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 3306 "itertoolsmodule.c"
        var $1=$0; //@line 3306 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 3306 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 3307 "itertoolsmodule.c"
        var $3=$2+12; //@line 3307 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 3307 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 3307 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3307 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 3307 "itertoolsmodule.c"
        var $7=$6+12; //@line 3307 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3307 "itertoolsmodule.c"
        var $9=$8; //@line 3307 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3307 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 3307 "itertoolsmodule.c"
        var $12=$8; //@line 3307 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 3307 "itertoolsmodule.c"
        var $13=$8; //@line 3307 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3307 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3307 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3307 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 3307 "itertoolsmodule.c"
        var $17=$16+12; //@line 3307 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3307 "itertoolsmodule.c"
        var $19=$18+4; //@line 3307 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3307 "itertoolsmodule.c"
        var $21=$20+24; //@line 3307 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3307 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 3307 "itertoolsmodule.c"
        var $24=$23+12; //@line 3307 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3307 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 3307 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3307 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 3308 "itertoolsmodule.c"
        var $27=$26+16; //@line 3308 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3308 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 3308 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3308 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 3308 "itertoolsmodule.c"
        var $31=$30+16; //@line 3308 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3308 "itertoolsmodule.c"
        var $33=$32; //@line 3308 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 3308 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 3308 "itertoolsmodule.c"
        var $36=$32; //@line 3308 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 3308 "itertoolsmodule.c"
        var $37=$32; //@line 3308 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3308 "itertoolsmodule.c"
        var $39=($38)==0; //@line 3308 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3308 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 3308 "itertoolsmodule.c"
        var $41=$40+16; //@line 3308 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3308 "itertoolsmodule.c"
        var $43=$42+4; //@line 3308 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3308 "itertoolsmodule.c"
        var $45=$44+24; //@line 3308 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 3308 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 3308 "itertoolsmodule.c"
        var $48=$47+16; //@line 3308 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 3308 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 3308 "itertoolsmodule.c"
        __label__ = 6; break; //@line 3308 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 3309 "itertoolsmodule.c"
        var $51=$50; //@line 3309 "itertoolsmodule.c"
        var $52=$51+4; //@line 3309 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 3309 "itertoolsmodule.c"
        var $54=$53+160; //@line 3309 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 3309 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 3309 "itertoolsmodule.c"
        var $57=$56; //@line 3309 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 3309 "itertoolsmodule.c"
        ;
        return; //@line 3310 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 3315 "itertoolsmodule.c"
        var $2=$1+12; //@line 3315 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3315 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3315 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3315 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 3315 "itertoolsmodule.c"
        var $6=$5+12; //@line 3315 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3315 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 3315 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 3315 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 3315 "itertoolsmodule.c"
        $vret=$10; //@line 3315 "itertoolsmodule.c"
        var $11=$vret; //@line 3315 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 3315 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3315 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 3315 "itertoolsmodule.c"
        $0=$13; //@line 3315 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3315 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 3316 "itertoolsmodule.c"
        var $15=$14+16; //@line 3316 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 3316 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 3316 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3316 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 3316 "itertoolsmodule.c"
        var $19=$18+16; //@line 3316 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3316 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 3316 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 3316 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 3316 "itertoolsmodule.c"
        $vret4=$23; //@line 3316 "itertoolsmodule.c"
        var $24=$vret4; //@line 3316 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 3316 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3316 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 3316 "itertoolsmodule.c"
        $0=$26; //@line 3316 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3316 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 3317 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3317 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 3315 "itertoolsmodule.c"
        $retval=$27; //@line 3315 "itertoolsmodule.c"
        var $retval8=$retval; //@line 3315 "itertoolsmodule.c"
        ;
        return $retval8; //@line 3315 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_nextlong($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $long_cnt;
        var $stepped_up;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3326 "itertoolsmodule.c"
        var $2=$1+12; //@line 3326 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3326 "itertoolsmodule.c"
        $long_cnt=$3; //@line 3326 "itertoolsmodule.c"
        var $4=$long_cnt; //@line 3327 "itertoolsmodule.c"
        var $5=($4)==0; //@line 3327 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3327 "itertoolsmodule.c"
      case 1: // $bb
        var $6=_PyInt_FromSsize_t(2147483647); //@line 3329 "itertoolsmodule.c"
        $long_cnt=$6; //@line 3329 "itertoolsmodule.c"
        var $7=$long_cnt; //@line 3330 "itertoolsmodule.c"
        var $8=($7)==0; //@line 3330 "itertoolsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3330 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 3331 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3331 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$lz_addr; //@line 3333 "itertoolsmodule.c"
        var $10=$9+8; //@line 3333 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 3333 "itertoolsmodule.c"
        var $12=($11)!=2147483647; //@line 3333 "itertoolsmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 3333 "itertoolsmodule.c"
      case 4: // $bb3
        var $13=$long_cnt; //@line 3333 "itertoolsmodule.c"
        var $14=($13)==0; //@line 3333 "itertoolsmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3333 "itertoolsmodule.c"
      case 5: // $bb4
        ___assert_fail(__str72, __str5, 3333, ___PRETTY_FUNCTION___11885); //@line 3333 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3333 "itertoolsmodule.c"
      case 6: // $bb5
        var $15=$lz_addr; //@line 3335 "itertoolsmodule.c"
        var $16=$15+16; //@line 3335 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 3335 "itertoolsmodule.c"
        var $18=$long_cnt; //@line 3335 "itertoolsmodule.c"
        var $19=_PyNumber_Add($18, $17); //@line 3335 "itertoolsmodule.c"
        $stepped_up=$19; //@line 3335 "itertoolsmodule.c"
        var $20=$stepped_up; //@line 3336 "itertoolsmodule.c"
        var $21=($20)==0; //@line 3336 "itertoolsmodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3336 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 3337 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3337 "itertoolsmodule.c"
      case 8: // $bb7
        var $22=$lz_addr; //@line 3338 "itertoolsmodule.c"
        var $23=$22+12; //@line 3338 "itertoolsmodule.c"
        var $24=$stepped_up; //@line 3338 "itertoolsmodule.c"
        HEAP[$23]=$24; //@line 3338 "itertoolsmodule.c"
        var $25=$long_cnt; //@line 3339 "itertoolsmodule.c"
        $0=$25; //@line 3339 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3339 "itertoolsmodule.c"
      case 9: // $bb8
        var $26=$0; //@line 3331 "itertoolsmodule.c"
        $retval=$26; //@line 3331 "itertoolsmodule.c"
        var $retval9=$retval; //@line 3331 "itertoolsmodule.c"
        ;
        return $retval9; //@line 3331 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3345 "itertoolsmodule.c"
        var $2=$1+8; //@line 3345 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3345 "itertoolsmodule.c"
        var $4=($3)==2147483647; //@line 3345 "itertoolsmodule.c"
        var $5=$lz_addr; //@line 3346 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3345 "itertoolsmodule.c"
      case 1: // $bb
        var $6=_count_nextlong($5); //@line 3346 "itertoolsmodule.c"
        $0=$6; //@line 3346 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3346 "itertoolsmodule.c"
      case 2: // $bb1
        var $7=$5+8; //@line 3347 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3347 "itertoolsmodule.c"
        var $9=($8) + 1; //@line 3347 "itertoolsmodule.c"
        var $10=$lz_addr; //@line 3347 "itertoolsmodule.c"
        var $11=$10+8; //@line 3347 "itertoolsmodule.c"
        HEAP[$11]=$9; //@line 3347 "itertoolsmodule.c"
        var $12=_PyInt_FromSsize_t($8); //@line 3347 "itertoolsmodule.c"
        $0=$12; //@line 3347 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3347 "itertoolsmodule.c"
      case 3: // $bb2
        var $13=$0; //@line 3346 "itertoolsmodule.c"
        $retval=$13; //@line 3346 "itertoolsmodule.c"
        var $retval3=$retval; //@line 3346 "itertoolsmodule.c"
        ;
        return $retval3; //@line 3346 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_repr($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $cnt_repr;
        var $step_repr;
        var $result;
        $lz_addr=$lz;
        $step_repr=0; //@line 3353 "itertoolsmodule.c"
        $result=0; //@line 3354 "itertoolsmodule.c"
        var $1=$lz_addr; //@line 3356 "itertoolsmodule.c"
        var $2=$1+8; //@line 3356 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3356 "itertoolsmodule.c"
        var $4=($3)!=2147483647; //@line 3356 "itertoolsmodule.c"
        var $5=$lz_addr; //@line 3357 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3356 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$5+8; //@line 3357 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3357 "itertoolsmodule.c"
        var $8=_PyString_FromFormat(__str73, allocate([$7,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 3357 "itertoolsmodule.c"
        $0=$8; //@line 3357 "itertoolsmodule.c"
        __label__ = 15; break; //@line 3357 "itertoolsmodule.c"
      case 2: // $bb1
        var $9=$5+12; //@line 3359 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3359 "itertoolsmodule.c"
        var $11=_PyObject_Repr($10); //@line 3359 "itertoolsmodule.c"
        $cnt_repr=$11; //@line 3359 "itertoolsmodule.c"
        var $12=$cnt_repr; //@line 3360 "itertoolsmodule.c"
        var $13=($12)==0; //@line 3360 "itertoolsmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3360 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 3361 "itertoolsmodule.c"
        __label__ = 15; break; //@line 3361 "itertoolsmodule.c"
      case 4: // $bb3
        var $14=$lz_addr; //@line 3363 "itertoolsmodule.c"
        var $15=$14+16; //@line 3363 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 3363 "itertoolsmodule.c"
        var $17=$16+4; //@line 3363 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3363 "itertoolsmodule.c"
        var $19=$18+84; //@line 3363 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3363 "itertoolsmodule.c"
        var $21=($20) & 8388608; //@line 3363 "itertoolsmodule.c"
        var $22=($21)==0; //@line 3363 "itertoolsmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 3363 "itertoolsmodule.c"
      case 5: // $bb4
        var $23=$lz_addr; //@line 3363 "itertoolsmodule.c"
        var $24=$23+16; //@line 3363 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3363 "itertoolsmodule.c"
        var $26=$25; //@line 3363 "itertoolsmodule.c"
        var $27=$26+8; //@line 3363 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3363 "itertoolsmodule.c"
        var $29=($28)!=1; //@line 3363 "itertoolsmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 3363 "itertoolsmodule.c"
      case 6: // $bb5
        var $30=$cnt_repr; //@line 3365 "itertoolsmodule.c"
        var $31=$30; //@line 3365 "itertoolsmodule.c"
        var $32=$31+20; //@line 3365 "itertoolsmodule.c"
        var $33=$32; //@line 3365 "itertoolsmodule.c"
        var $34=_PyString_FromFormat(__str74, allocate([$33,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 3365 "itertoolsmodule.c"
        $result=$34; //@line 3365 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3365 "itertoolsmodule.c"
      case 7: // $bb6
        var $35=$lz_addr; //@line 3368 "itertoolsmodule.c"
        var $36=$35+16; //@line 3368 "itertoolsmodule.c"
        var $37=HEAP[$36]; //@line 3368 "itertoolsmodule.c"
        var $38=_PyObject_Repr($37); //@line 3368 "itertoolsmodule.c"
        $step_repr=$38; //@line 3368 "itertoolsmodule.c"
        var $39=($38)!=0; //@line 3369 "itertoolsmodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3369 "itertoolsmodule.c"
      case 8: // $bb7
        var $40=$step_repr; //@line 3370 "itertoolsmodule.c"
        var $41=$40; //@line 3370 "itertoolsmodule.c"
        var $42=$41+20; //@line 3370 "itertoolsmodule.c"
        var $43=$42; //@line 3370 "itertoolsmodule.c"
        var $44=$cnt_repr; //@line 3370 "itertoolsmodule.c"
        var $45=$44; //@line 3370 "itertoolsmodule.c"
        var $46=$45+20; //@line 3370 "itertoolsmodule.c"
        var $47=$46; //@line 3370 "itertoolsmodule.c"
        var $48=_PyString_FromFormat(__str75, allocate([$47,0,0,0,$43,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 3370 "itertoolsmodule.c"
        $result=$48; //@line 3370 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3370 "itertoolsmodule.c"
      case 9: // $bb8
        var $49=$cnt_repr; //@line 3374 "itertoolsmodule.c"
        var $50=$49; //@line 3374 "itertoolsmodule.c"
        var $51=HEAP[$50]; //@line 3374 "itertoolsmodule.c"
        var $52=($51) - 1; //@line 3374 "itertoolsmodule.c"
        var $53=$cnt_repr; //@line 3374 "itertoolsmodule.c"
        var $54=$53; //@line 3374 "itertoolsmodule.c"
        HEAP[$54]=$52; //@line 3374 "itertoolsmodule.c"
        var $55=$cnt_repr; //@line 3374 "itertoolsmodule.c"
        var $56=$55; //@line 3374 "itertoolsmodule.c"
        var $57=HEAP[$56]; //@line 3374 "itertoolsmodule.c"
        var $58=($57)==0; //@line 3374 "itertoolsmodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3374 "itertoolsmodule.c"
      case 10: // $bb9
        var $59=$cnt_repr; //@line 3374 "itertoolsmodule.c"
        var $60=$59+4; //@line 3374 "itertoolsmodule.c"
        var $61=HEAP[$60]; //@line 3374 "itertoolsmodule.c"
        var $62=$61+24; //@line 3374 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 3374 "itertoolsmodule.c"
        var $64=$cnt_repr; //@line 3374 "itertoolsmodule.c"
        FUNCTION_TABLE[$63]($64); //@line 3374 "itertoolsmodule.c"
        __label__ = 11; break; //@line 3374 "itertoolsmodule.c"
      case 11: // $bb10
        var $65=$step_repr; //@line 3375 "itertoolsmodule.c"
        var $66=($65)!=0; //@line 3375 "itertoolsmodule.c"
        if ($66) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 3375 "itertoolsmodule.c"
      case 12: // $bb11
        var $67=$step_repr; //@line 3375 "itertoolsmodule.c"
        var $68=$67; //@line 3375 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 3375 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 3375 "itertoolsmodule.c"
        var $71=$step_repr; //@line 3375 "itertoolsmodule.c"
        var $72=$71; //@line 3375 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 3375 "itertoolsmodule.c"
        var $73=$step_repr; //@line 3375 "itertoolsmodule.c"
        var $74=$73; //@line 3375 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 3375 "itertoolsmodule.c"
        var $76=($75)==0; //@line 3375 "itertoolsmodule.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3375 "itertoolsmodule.c"
      case 13: // $bb12
        var $77=$step_repr; //@line 3375 "itertoolsmodule.c"
        var $78=$77+4; //@line 3375 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 3375 "itertoolsmodule.c"
        var $80=$79+24; //@line 3375 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 3375 "itertoolsmodule.c"
        var $82=$step_repr; //@line 3375 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 3375 "itertoolsmodule.c"
        __label__ = 14; break; //@line 3375 "itertoolsmodule.c"
      case 14: // $bb13
        var $83=$result; //@line 3376 "itertoolsmodule.c"
        $0=$83; //@line 3376 "itertoolsmodule.c"
        __label__ = 15; break; //@line 3376 "itertoolsmodule.c"
      case 15: // $bb14
        var $84=$0; //@line 3357 "itertoolsmodule.c"
        $retval=$84; //@line 3357 "itertoolsmodule.c"
        var $retval15=$retval; //@line 3357 "itertoolsmodule.c"
        ;
        return $retval15; //@line 3357 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_reduce($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3382 "itertoolsmodule.c"
        var $2=$1+8; //@line 3382 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3382 "itertoolsmodule.c"
        var $4=($3)==2147483647; //@line 3382 "itertoolsmodule.c"
        var $5=$lz_addr; //@line 3383 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3382 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$5+16; //@line 3383 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3383 "itertoolsmodule.c"
        var $8=$lz_addr; //@line 3383 "itertoolsmodule.c"
        var $9=$8+12; //@line 3383 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3383 "itertoolsmodule.c"
        var $11=$lz_addr; //@line 3383 "itertoolsmodule.c"
        var $12=$11; //@line 3383 "itertoolsmodule.c"
        var $13=$12+4; //@line 3383 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3383 "itertoolsmodule.c"
        var $15=_Py_BuildValue(__str76, allocate([$14,0,0,0,$10,0,0,0,$7,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 3383 "itertoolsmodule.c"
        $0=$15; //@line 3383 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3383 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$5+8; //@line 3384 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 3384 "itertoolsmodule.c"
        var $18=$lz_addr; //@line 3384 "itertoolsmodule.c"
        var $19=$18; //@line 3384 "itertoolsmodule.c"
        var $20=$19+4; //@line 3384 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 3384 "itertoolsmodule.c"
        var $22=_Py_BuildValue(__str77, allocate([$21,0,0,0,$17,0,0,0], ["%struct._typeobject*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3384 "itertoolsmodule.c"
        $0=$22; //@line 3384 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3384 "itertoolsmodule.c"
      case 3: // $bb2
        var $23=$0; //@line 3383 "itertoolsmodule.c"
        $retval=$23; //@line 3383 "itertoolsmodule.c"
        var $retval3=$retval; //@line 3383 "itertoolsmodule.c"
        ;
        return $retval3; //@line 3383 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_new($type, $args, $kwds) {
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
        var $lz;
        var $i;
        var $ittuple;
        var $result;
        var $tuplesize;
        var $item;
        var $it;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$args_addr; //@line 3471 "itertoolsmodule.c"
        var $2=_PySequence_Size($1); //@line 3471 "itertoolsmodule.c"
        $tuplesize=$2; //@line 3471 "itertoolsmodule.c"
        var $3=$type_addr; //@line 3473 "itertoolsmodule.c"
        var $4=($3)==(_izip_type); //@line 3473 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3473 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$kwds_addr; //@line 3473 "itertoolsmodule.c"
        var $6=__PyArg_NoKeywords(__str80, $5); //@line 3473 "itertoolsmodule.c"
        var $7=($6)==0; //@line 3473 "itertoolsmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3473 "itertoolsmodule.c"
      case 2: // $bb1
        $0=0; //@line 3474 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3474 "itertoolsmodule.c"
      case 3: // $bb2
        var $8=$args_addr; //@line 3477 "itertoolsmodule.c"
        var $9=$8+4; //@line 3477 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3477 "itertoolsmodule.c"
        var $11=$10+84; //@line 3477 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 3477 "itertoolsmodule.c"
        var $13=($12) & 67108864; //@line 3477 "itertoolsmodule.c"
        var $14=($13)==0; //@line 3477 "itertoolsmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3477 "itertoolsmodule.c"
      case 4: // $bb3
        ___assert_fail(__str43, __str5, 3477, ___PRETTY_FUNCTION___12009); //@line 3477 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3477 "itertoolsmodule.c"
      case 5: // $bb4
        var $15=$tuplesize; //@line 3480 "itertoolsmodule.c"
        var $16=_PyTuple_New($15); //@line 3480 "itertoolsmodule.c"
        $ittuple=$16; //@line 3480 "itertoolsmodule.c"
        var $17=$ittuple; //@line 3481 "itertoolsmodule.c"
        var $18=($17)==0; //@line 3481 "itertoolsmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3481 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 3482 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3482 "itertoolsmodule.c"
      case 7: // $bb6
        $i=0; //@line 3483 "itertoolsmodule.c"
        __label__ = 15; break; //@line 3483 "itertoolsmodule.c"
      case 8: // $bb7
        var $19=$args_addr; //@line 3484 "itertoolsmodule.c"
        var $20=$19; //@line 3484 "itertoolsmodule.c"
        var $21=$i; //@line 3484 "itertoolsmodule.c"
        var $22=$20+12; //@line 3484 "itertoolsmodule.c"
        var $23=$22+$21*4; //@line 3484 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 3484 "itertoolsmodule.c"
        $item=$24; //@line 3484 "itertoolsmodule.c"
        var $25=$item; //@line 3485 "itertoolsmodule.c"
        var $26=_PyObject_GetIter($25); //@line 3485 "itertoolsmodule.c"
        $it=$26; //@line 3485 "itertoolsmodule.c"
        var $27=$it; //@line 3486 "itertoolsmodule.c"
        var $28=($27)==0; //@line 3486 "itertoolsmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 3486 "itertoolsmodule.c"
      case 9: // $bb8
        var $29=HEAP[_PyExc_TypeError]; //@line 3487 "itertoolsmodule.c"
        var $30=_PyErr_ExceptionMatches($29); //@line 3487 "itertoolsmodule.c"
        var $31=($30)!=0; //@line 3487 "itertoolsmodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3487 "itertoolsmodule.c"
      case 10: // $bb9
        var $32=$i; //@line 3488 "itertoolsmodule.c"
        var $33=($32) + 1; //@line 3488 "itertoolsmodule.c"
        var $34=HEAP[_PyExc_TypeError]; //@line 3488 "itertoolsmodule.c"
        var $35=_PyErr_Format($34, __str81, allocate([$33,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 3488 "itertoolsmodule.c"
        __label__ = 11; break; //@line 3488 "itertoolsmodule.c"
      case 11: // $bb10
        var $36=$ittuple; //@line 3491 "itertoolsmodule.c"
        var $37=$36; //@line 3491 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3491 "itertoolsmodule.c"
        var $39=($38) - 1; //@line 3491 "itertoolsmodule.c"
        var $40=$ittuple; //@line 3491 "itertoolsmodule.c"
        var $41=$40; //@line 3491 "itertoolsmodule.c"
        HEAP[$41]=$39; //@line 3491 "itertoolsmodule.c"
        var $42=$ittuple; //@line 3491 "itertoolsmodule.c"
        var $43=$42; //@line 3491 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3491 "itertoolsmodule.c"
        var $45=($44)==0; //@line 3491 "itertoolsmodule.c"
        if ($45) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3491 "itertoolsmodule.c"
      case 12: // $bb11
        var $46=$ittuple; //@line 3491 "itertoolsmodule.c"
        var $47=$46+4; //@line 3491 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 3491 "itertoolsmodule.c"
        var $49=$48+24; //@line 3491 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 3491 "itertoolsmodule.c"
        var $51=$ittuple; //@line 3491 "itertoolsmodule.c"
        FUNCTION_TABLE[$50]($51); //@line 3491 "itertoolsmodule.c"
        __label__ = 13; break; //@line 3491 "itertoolsmodule.c"
      case 13: // $bb12
        $0=0; //@line 3492 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3492 "itertoolsmodule.c"
      case 14: // $bb13
        var $52=$ittuple; //@line 3494 "itertoolsmodule.c"
        var $53=$52; //@line 3494 "itertoolsmodule.c"
        var $54=$i; //@line 3494 "itertoolsmodule.c"
        var $55=$53+12; //@line 3494 "itertoolsmodule.c"
        var $56=$55+$54*4; //@line 3494 "itertoolsmodule.c"
        var $57=$it; //@line 3494 "itertoolsmodule.c"
        HEAP[$56]=$57; //@line 3494 "itertoolsmodule.c"
        var $58=$i; //@line 3483 "itertoolsmodule.c"
        var $59=($58) + 1; //@line 3483 "itertoolsmodule.c"
        $i=$59; //@line 3483 "itertoolsmodule.c"
        __label__ = 15; break; //@line 3483 "itertoolsmodule.c"
      case 15: // $bb14
        var $60=$i; //@line 3483 "itertoolsmodule.c"
        var $61=$tuplesize; //@line 3483 "itertoolsmodule.c"
        var $62=($60) < ($61); //@line 3483 "itertoolsmodule.c"
        if ($62) { __label__ = 8; break; } else { __label__ = 16; break; } //@line 3483 "itertoolsmodule.c"
      case 16: // $bb15
        var $63=$tuplesize; //@line 3498 "itertoolsmodule.c"
        var $64=_PyTuple_New($63); //@line 3498 "itertoolsmodule.c"
        $result=$64; //@line 3498 "itertoolsmodule.c"
        var $65=$result; //@line 3499 "itertoolsmodule.c"
        var $66=($65)==0; //@line 3499 "itertoolsmodule.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 3499 "itertoolsmodule.c"
      case 17: // $bb16
        var $67=$ittuple; //@line 3500 "itertoolsmodule.c"
        var $68=$67; //@line 3500 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 3500 "itertoolsmodule.c"
        var $70=($69) - 1; //@line 3500 "itertoolsmodule.c"
        var $71=$ittuple; //@line 3500 "itertoolsmodule.c"
        var $72=$71; //@line 3500 "itertoolsmodule.c"
        HEAP[$72]=$70; //@line 3500 "itertoolsmodule.c"
        var $73=$ittuple; //@line 3500 "itertoolsmodule.c"
        var $74=$73; //@line 3500 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 3500 "itertoolsmodule.c"
        var $76=($75)==0; //@line 3500 "itertoolsmodule.c"
        if ($76) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3500 "itertoolsmodule.c"
      case 18: // $bb17
        var $77=$ittuple; //@line 3500 "itertoolsmodule.c"
        var $78=$77+4; //@line 3500 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 3500 "itertoolsmodule.c"
        var $80=$79+24; //@line 3500 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 3500 "itertoolsmodule.c"
        var $82=$ittuple; //@line 3500 "itertoolsmodule.c"
        FUNCTION_TABLE[$81]($82); //@line 3500 "itertoolsmodule.c"
        __label__ = 19; break; //@line 3500 "itertoolsmodule.c"
      case 19: // $bb18
        $0=0; //@line 3501 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3501 "itertoolsmodule.c"
      case 20: // $bb19
        $i=0; //@line 3503 "itertoolsmodule.c"
        var $83=$i; //@line 3503 "itertoolsmodule.c"
        var $84=$tuplesize; //@line 3503 "itertoolsmodule.c"
        var $85=($83) < ($84); //@line 3503 "itertoolsmodule.c"
        if ($85) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3503 "itertoolsmodule.c"
      case 21: // $bb20
        var $86=HEAP[__Py_NoneStruct]; //@line 3504 "itertoolsmodule.c"
        var $87=($86) + 1; //@line 3504 "itertoolsmodule.c"
        HEAP[__Py_NoneStruct]=$87; //@line 3504 "itertoolsmodule.c"
        var $88=$result; //@line 3505 "itertoolsmodule.c"
        var $89=$88; //@line 3505 "itertoolsmodule.c"
        var $90=$i; //@line 3505 "itertoolsmodule.c"
        var $91=$89+12; //@line 3505 "itertoolsmodule.c"
        var $92=$91+$90*4; //@line 3505 "itertoolsmodule.c"
        HEAP[$92]=__Py_NoneStruct; //@line 3505 "itertoolsmodule.c"
        var $93=$i; //@line 3503 "itertoolsmodule.c"
        var $94=($93) + 1; //@line 3503 "itertoolsmodule.c"
        $i=$94; //@line 3503 "itertoolsmodule.c"
        var $95=$i; //@line 3503 "itertoolsmodule.c"
        var $96=$tuplesize; //@line 3503 "itertoolsmodule.c"
        var $97=($95) < ($96); //@line 3503 "itertoolsmodule.c"
        if ($97) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3503 "itertoolsmodule.c"
      case 22: // $bb22
        var $98=$type_addr; //@line 3509 "itertoolsmodule.c"
        var $99=$98+152; //@line 3509 "itertoolsmodule.c"
        var $100=HEAP[$99]; //@line 3509 "itertoolsmodule.c"
        var $101=$type_addr; //@line 3509 "itertoolsmodule.c"
        var $102=FUNCTION_TABLE[$100]($101, 0); //@line 3509 "itertoolsmodule.c"
        var $103=$102; //@line 3509 "itertoolsmodule.c"
        $lz=$103; //@line 3509 "itertoolsmodule.c"
        var $104=($103)==0; //@line 3510 "itertoolsmodule.c"
        if ($104) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 3510 "itertoolsmodule.c"
      case 23: // $bb23
        var $105=$ittuple; //@line 3511 "itertoolsmodule.c"
        var $106=$105; //@line 3511 "itertoolsmodule.c"
        var $107=HEAP[$106]; //@line 3511 "itertoolsmodule.c"
        var $108=($107) - 1; //@line 3511 "itertoolsmodule.c"
        var $109=$ittuple; //@line 3511 "itertoolsmodule.c"
        var $110=$109; //@line 3511 "itertoolsmodule.c"
        HEAP[$110]=$108; //@line 3511 "itertoolsmodule.c"
        var $111=$ittuple; //@line 3511 "itertoolsmodule.c"
        var $112=$111; //@line 3511 "itertoolsmodule.c"
        var $113=HEAP[$112]; //@line 3511 "itertoolsmodule.c"
        var $114=($113)==0; //@line 3511 "itertoolsmodule.c"
        if ($114) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3511 "itertoolsmodule.c"
      case 24: // $bb24
        var $115=$ittuple; //@line 3511 "itertoolsmodule.c"
        var $116=$115+4; //@line 3511 "itertoolsmodule.c"
        var $117=HEAP[$116]; //@line 3511 "itertoolsmodule.c"
        var $118=$117+24; //@line 3511 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 3511 "itertoolsmodule.c"
        var $120=$ittuple; //@line 3511 "itertoolsmodule.c"
        FUNCTION_TABLE[$119]($120); //@line 3511 "itertoolsmodule.c"
        __label__ = 25; break; //@line 3511 "itertoolsmodule.c"
      case 25: // $bb25
        var $121=$result; //@line 3512 "itertoolsmodule.c"
        var $122=$121; //@line 3512 "itertoolsmodule.c"
        var $123=HEAP[$122]; //@line 3512 "itertoolsmodule.c"
        var $124=($123) - 1; //@line 3512 "itertoolsmodule.c"
        var $125=$result; //@line 3512 "itertoolsmodule.c"
        var $126=$125; //@line 3512 "itertoolsmodule.c"
        HEAP[$126]=$124; //@line 3512 "itertoolsmodule.c"
        var $127=$result; //@line 3512 "itertoolsmodule.c"
        var $128=$127; //@line 3512 "itertoolsmodule.c"
        var $129=HEAP[$128]; //@line 3512 "itertoolsmodule.c"
        var $130=($129)==0; //@line 3512 "itertoolsmodule.c"
        if ($130) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 3512 "itertoolsmodule.c"
      case 26: // $bb26
        var $131=$result; //@line 3512 "itertoolsmodule.c"
        var $132=$131+4; //@line 3512 "itertoolsmodule.c"
        var $133=HEAP[$132]; //@line 3512 "itertoolsmodule.c"
        var $134=$133+24; //@line 3512 "itertoolsmodule.c"
        var $135=HEAP[$134]; //@line 3512 "itertoolsmodule.c"
        var $136=$result; //@line 3512 "itertoolsmodule.c"
        FUNCTION_TABLE[$135]($136); //@line 3512 "itertoolsmodule.c"
        __label__ = 27; break; //@line 3512 "itertoolsmodule.c"
      case 27: // $bb27
        $0=0; //@line 3513 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3513 "itertoolsmodule.c"
      case 28: // $bb28
        var $137=$lz; //@line 3515 "itertoolsmodule.c"
        var $138=$137+12; //@line 3515 "itertoolsmodule.c"
        var $139=$ittuple; //@line 3515 "itertoolsmodule.c"
        HEAP[$138]=$139; //@line 3515 "itertoolsmodule.c"
        var $140=$lz; //@line 3516 "itertoolsmodule.c"
        var $141=$140+8; //@line 3516 "itertoolsmodule.c"
        var $142=$tuplesize; //@line 3516 "itertoolsmodule.c"
        HEAP[$141]=$142; //@line 3516 "itertoolsmodule.c"
        var $143=$lz; //@line 3517 "itertoolsmodule.c"
        var $144=$143+16; //@line 3517 "itertoolsmodule.c"
        var $145=$result; //@line 3517 "itertoolsmodule.c"
        HEAP[$144]=$145; //@line 3517 "itertoolsmodule.c"
        var $146=$lz; //@line 3519 "itertoolsmodule.c"
        var $147=$146; //@line 3519 "itertoolsmodule.c"
        $0=$147; //@line 3519 "itertoolsmodule.c"
        __label__ = 29; break; //@line 3519 "itertoolsmodule.c"
      case 29: // $bb29
        var $148=$0; //@line 3474 "itertoolsmodule.c"
        $retval=$148; //@line 3474 "itertoolsmodule.c"
        var $retval30=$retval; //@line 3474 "itertoolsmodule.c"
        ;
        return $retval30; //@line 3474 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 3525 "itertoolsmodule.c"
        var $1=$0; //@line 3525 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 3525 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 3526 "itertoolsmodule.c"
        var $3=$2+12; //@line 3526 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 3526 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 3526 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3526 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 3526 "itertoolsmodule.c"
        var $7=$6+12; //@line 3526 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3526 "itertoolsmodule.c"
        var $9=$8; //@line 3526 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3526 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 3526 "itertoolsmodule.c"
        var $12=$8; //@line 3526 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 3526 "itertoolsmodule.c"
        var $13=$8; //@line 3526 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3526 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3526 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3526 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 3526 "itertoolsmodule.c"
        var $17=$16+12; //@line 3526 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3526 "itertoolsmodule.c"
        var $19=$18+4; //@line 3526 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3526 "itertoolsmodule.c"
        var $21=$20+24; //@line 3526 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3526 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 3526 "itertoolsmodule.c"
        var $24=$23+12; //@line 3526 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3526 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 3526 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3526 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 3527 "itertoolsmodule.c"
        var $27=$26+16; //@line 3527 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3527 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 3527 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3527 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 3527 "itertoolsmodule.c"
        var $31=$30+16; //@line 3527 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3527 "itertoolsmodule.c"
        var $33=$32; //@line 3527 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 3527 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 3527 "itertoolsmodule.c"
        var $36=$32; //@line 3527 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 3527 "itertoolsmodule.c"
        var $37=$32; //@line 3527 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3527 "itertoolsmodule.c"
        var $39=($38)==0; //@line 3527 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3527 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 3527 "itertoolsmodule.c"
        var $41=$40+16; //@line 3527 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3527 "itertoolsmodule.c"
        var $43=$42+4; //@line 3527 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3527 "itertoolsmodule.c"
        var $45=$44+24; //@line 3527 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 3527 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 3527 "itertoolsmodule.c"
        var $48=$47+16; //@line 3527 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 3527 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 3527 "itertoolsmodule.c"
        __label__ = 6; break; //@line 3527 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 3528 "itertoolsmodule.c"
        var $51=$50; //@line 3528 "itertoolsmodule.c"
        var $52=$51+4; //@line 3528 "itertoolsmodule.c"
        var $53=HEAP[$52]; //@line 3528 "itertoolsmodule.c"
        var $54=$53+160; //@line 3528 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 3528 "itertoolsmodule.c"
        var $56=$lz_addr; //@line 3528 "itertoolsmodule.c"
        var $57=$56; //@line 3528 "itertoolsmodule.c"
        FUNCTION_TABLE[$55]($57); //@line 3528 "itertoolsmodule.c"
        ;
        return; //@line 3529 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 3534 "itertoolsmodule.c"
        var $2=$1+12; //@line 3534 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3534 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3534 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3534 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 3534 "itertoolsmodule.c"
        var $6=$5+12; //@line 3534 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3534 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 3534 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 3534 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 3534 "itertoolsmodule.c"
        $vret=$10; //@line 3534 "itertoolsmodule.c"
        var $11=$vret; //@line 3534 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 3534 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3534 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 3534 "itertoolsmodule.c"
        $0=$13; //@line 3534 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3534 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 3535 "itertoolsmodule.c"
        var $15=$14+16; //@line 3535 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 3535 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 3535 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3535 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 3535 "itertoolsmodule.c"
        var $19=$18+16; //@line 3535 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3535 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 3535 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 3535 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 3535 "itertoolsmodule.c"
        $vret4=$23; //@line 3535 "itertoolsmodule.c"
        var $24=$vret4; //@line 3535 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 3535 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3535 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 3535 "itertoolsmodule.c"
        $0=$26; //@line 3535 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3535 "itertoolsmodule.c"
      case 6: // $bb6
        $0=0; //@line 3536 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3536 "itertoolsmodule.c"
      case 7: // $bb7
        var $27=$0; //@line 3534 "itertoolsmodule.c"
        $retval=$27; //@line 3534 "itertoolsmodule.c"
        var $retval8=$retval; //@line 3534 "itertoolsmodule.c"
        ;
        return $retval8; //@line 3534 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $i;
        var $tuplesize;
        var $result;
        var $it;
        var $item;
        var $olditem;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3543 "itertoolsmodule.c"
        var $2=$1+8; //@line 3543 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3543 "itertoolsmodule.c"
        $tuplesize=$3; //@line 3543 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 3544 "itertoolsmodule.c"
        var $5=$4+16; //@line 3544 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 3544 "itertoolsmodule.c"
        $result=$6; //@line 3544 "itertoolsmodule.c"
        var $7=$tuplesize; //@line 3549 "itertoolsmodule.c"
        var $8=($7)==0; //@line 3549 "itertoolsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3549 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3550 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3550 "itertoolsmodule.c"
      case 2: // $bb1
        var $9=$result; //@line 3551 "itertoolsmodule.c"
        var $10=$9; //@line 3551 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 3551 "itertoolsmodule.c"
        var $12=($11)==1; //@line 3551 "itertoolsmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 3551 "itertoolsmodule.c"
      case 3: // $bb2
        var $13=$result; //@line 3552 "itertoolsmodule.c"
        var $14=$13; //@line 3552 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 3552 "itertoolsmodule.c"
        var $16=($15) + 1; //@line 3552 "itertoolsmodule.c"
        var $17=$result; //@line 3552 "itertoolsmodule.c"
        var $18=$17; //@line 3552 "itertoolsmodule.c"
        HEAP[$18]=$16; //@line 3552 "itertoolsmodule.c"
        $i=0; //@line 3553 "itertoolsmodule.c"
        __label__ = 11; break; //@line 3553 "itertoolsmodule.c"
      case 4: // $bb3
        var $19=$lz_addr; //@line 3554 "itertoolsmodule.c"
        var $20=$19+12; //@line 3554 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 3554 "itertoolsmodule.c"
        var $22=$21; //@line 3554 "itertoolsmodule.c"
        var $23=$i; //@line 3554 "itertoolsmodule.c"
        var $24=$22+12; //@line 3554 "itertoolsmodule.c"
        var $25=$24+$23*4; //@line 3554 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 3554 "itertoolsmodule.c"
        $it=$26; //@line 3554 "itertoolsmodule.c"
        var $27=$it; //@line 3555 "itertoolsmodule.c"
        var $28=$27+4; //@line 3555 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 3555 "itertoolsmodule.c"
        var $30=$29+112; //@line 3555 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 3555 "itertoolsmodule.c"
        var $32=$it; //@line 3555 "itertoolsmodule.c"
        var $33=FUNCTION_TABLE[$31]($32); //@line 3555 "itertoolsmodule.c"
        $item=$33; //@line 3555 "itertoolsmodule.c"
        var $34=$item; //@line 3556 "itertoolsmodule.c"
        var $35=($34)==0; //@line 3556 "itertoolsmodule.c"
        var $36=$result; //@line 3557 "itertoolsmodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 3556 "itertoolsmodule.c"
      case 5: // $bb4
        var $37=$36; //@line 3557 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3557 "itertoolsmodule.c"
        var $39=($38) - 1; //@line 3557 "itertoolsmodule.c"
        var $40=$result; //@line 3557 "itertoolsmodule.c"
        var $41=$40; //@line 3557 "itertoolsmodule.c"
        HEAP[$41]=$39; //@line 3557 "itertoolsmodule.c"
        var $42=$result; //@line 3557 "itertoolsmodule.c"
        var $43=$42; //@line 3557 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3557 "itertoolsmodule.c"
        var $45=($44)==0; //@line 3557 "itertoolsmodule.c"
        if ($45) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3557 "itertoolsmodule.c"
      case 6: // $bb5
        var $46=$result; //@line 3557 "itertoolsmodule.c"
        var $47=$46+4; //@line 3557 "itertoolsmodule.c"
        var $48=HEAP[$47]; //@line 3557 "itertoolsmodule.c"
        var $49=$48+24; //@line 3557 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 3557 "itertoolsmodule.c"
        var $51=$result; //@line 3557 "itertoolsmodule.c"
        FUNCTION_TABLE[$50]($51); //@line 3557 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3557 "itertoolsmodule.c"
      case 7: // $bb6
        $0=0; //@line 3558 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3558 "itertoolsmodule.c"
      case 8: // $bb7
        var $52=$36; //@line 3560 "itertoolsmodule.c"
        var $53=$i; //@line 3560 "itertoolsmodule.c"
        var $54=$52+12; //@line 3560 "itertoolsmodule.c"
        var $55=$54+$53*4; //@line 3560 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 3560 "itertoolsmodule.c"
        $olditem=$56; //@line 3560 "itertoolsmodule.c"
        var $57=$result; //@line 3561 "itertoolsmodule.c"
        var $58=$57; //@line 3561 "itertoolsmodule.c"
        var $59=$i; //@line 3561 "itertoolsmodule.c"
        var $60=$58+12; //@line 3561 "itertoolsmodule.c"
        var $61=$60+$59*4; //@line 3561 "itertoolsmodule.c"
        var $62=$item; //@line 3561 "itertoolsmodule.c"
        HEAP[$61]=$62; //@line 3561 "itertoolsmodule.c"
        var $63=$olditem; //@line 3562 "itertoolsmodule.c"
        var $64=$63; //@line 3562 "itertoolsmodule.c"
        var $65=HEAP[$64]; //@line 3562 "itertoolsmodule.c"
        var $66=($65) - 1; //@line 3562 "itertoolsmodule.c"
        var $67=$olditem; //@line 3562 "itertoolsmodule.c"
        var $68=$67; //@line 3562 "itertoolsmodule.c"
        HEAP[$68]=$66; //@line 3562 "itertoolsmodule.c"
        var $69=$olditem; //@line 3562 "itertoolsmodule.c"
        var $70=$69; //@line 3562 "itertoolsmodule.c"
        var $71=HEAP[$70]; //@line 3562 "itertoolsmodule.c"
        var $72=($71)==0; //@line 3562 "itertoolsmodule.c"
        if ($72) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3562 "itertoolsmodule.c"
      case 9: // $bb8
        var $73=$olditem; //@line 3562 "itertoolsmodule.c"
        var $74=$73+4; //@line 3562 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 3562 "itertoolsmodule.c"
        var $76=$75+24; //@line 3562 "itertoolsmodule.c"
        var $77=HEAP[$76]; //@line 3562 "itertoolsmodule.c"
        var $78=$olditem; //@line 3562 "itertoolsmodule.c"
        FUNCTION_TABLE[$77]($78); //@line 3562 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3562 "itertoolsmodule.c"
      case 10: // $bb9
        var $79=$i; //@line 3553 "itertoolsmodule.c"
        var $80=($79) + 1; //@line 3553 "itertoolsmodule.c"
        $i=$80; //@line 3553 "itertoolsmodule.c"
        __label__ = 11; break; //@line 3553 "itertoolsmodule.c"
      case 11: // $bb10
        var $81=$i; //@line 3553 "itertoolsmodule.c"
        var $82=$tuplesize; //@line 3553 "itertoolsmodule.c"
        var $83=($81) < ($82); //@line 3553 "itertoolsmodule.c"
        if ($83) { __label__ = 4; break; } else { __label__ = 21; break; } //@line 3553 "itertoolsmodule.c"
      case 12: // $bb12
        var $84=$tuplesize; //@line 3565 "itertoolsmodule.c"
        var $85=_PyTuple_New($84); //@line 3565 "itertoolsmodule.c"
        $result=$85; //@line 3565 "itertoolsmodule.c"
        var $86=$result; //@line 3566 "itertoolsmodule.c"
        var $87=($86)==0; //@line 3566 "itertoolsmodule.c"
        if ($87) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3566 "itertoolsmodule.c"
      case 13: // $bb13
        $0=0; //@line 3567 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3567 "itertoolsmodule.c"
      case 14: // $bb14
        $i=0; //@line 3568 "itertoolsmodule.c"
        __label__ = 20; break; //@line 3568 "itertoolsmodule.c"
      case 15: // $bb15
        var $88=$lz_addr; //@line 3569 "itertoolsmodule.c"
        var $89=$88+12; //@line 3569 "itertoolsmodule.c"
        var $90=HEAP[$89]; //@line 3569 "itertoolsmodule.c"
        var $91=$90; //@line 3569 "itertoolsmodule.c"
        var $92=$i; //@line 3569 "itertoolsmodule.c"
        var $93=$91+12; //@line 3569 "itertoolsmodule.c"
        var $94=$93+$92*4; //@line 3569 "itertoolsmodule.c"
        var $95=HEAP[$94]; //@line 3569 "itertoolsmodule.c"
        $it=$95; //@line 3569 "itertoolsmodule.c"
        var $96=$it; //@line 3570 "itertoolsmodule.c"
        var $97=$96+4; //@line 3570 "itertoolsmodule.c"
        var $98=HEAP[$97]; //@line 3570 "itertoolsmodule.c"
        var $99=$98+112; //@line 3570 "itertoolsmodule.c"
        var $100=HEAP[$99]; //@line 3570 "itertoolsmodule.c"
        var $101=$it; //@line 3570 "itertoolsmodule.c"
        var $102=FUNCTION_TABLE[$100]($101); //@line 3570 "itertoolsmodule.c"
        $item=$102; //@line 3570 "itertoolsmodule.c"
        var $103=$item; //@line 3571 "itertoolsmodule.c"
        var $104=($103)==0; //@line 3571 "itertoolsmodule.c"
        var $105=$result; //@line 3572 "itertoolsmodule.c"
        if ($104) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 3571 "itertoolsmodule.c"
      case 16: // $bb16
        var $106=$105; //@line 3572 "itertoolsmodule.c"
        var $107=HEAP[$106]; //@line 3572 "itertoolsmodule.c"
        var $108=($107) - 1; //@line 3572 "itertoolsmodule.c"
        var $109=$result; //@line 3572 "itertoolsmodule.c"
        var $110=$109; //@line 3572 "itertoolsmodule.c"
        HEAP[$110]=$108; //@line 3572 "itertoolsmodule.c"
        var $111=$result; //@line 3572 "itertoolsmodule.c"
        var $112=$111; //@line 3572 "itertoolsmodule.c"
        var $113=HEAP[$112]; //@line 3572 "itertoolsmodule.c"
        var $114=($113)==0; //@line 3572 "itertoolsmodule.c"
        if ($114) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3572 "itertoolsmodule.c"
      case 17: // $bb17
        var $115=$result; //@line 3572 "itertoolsmodule.c"
        var $116=$115+4; //@line 3572 "itertoolsmodule.c"
        var $117=HEAP[$116]; //@line 3572 "itertoolsmodule.c"
        var $118=$117+24; //@line 3572 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 3572 "itertoolsmodule.c"
        var $120=$result; //@line 3572 "itertoolsmodule.c"
        FUNCTION_TABLE[$119]($120); //@line 3572 "itertoolsmodule.c"
        __label__ = 18; break; //@line 3572 "itertoolsmodule.c"
      case 18: // $bb18
        $0=0; //@line 3573 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3573 "itertoolsmodule.c"
      case 19: // $bb19
        var $121=$105; //@line 3575 "itertoolsmodule.c"
        var $122=$i; //@line 3575 "itertoolsmodule.c"
        var $123=$121+12; //@line 3575 "itertoolsmodule.c"
        var $124=$123+$122*4; //@line 3575 "itertoolsmodule.c"
        var $125=$item; //@line 3575 "itertoolsmodule.c"
        HEAP[$124]=$125; //@line 3575 "itertoolsmodule.c"
        var $126=$i; //@line 3568 "itertoolsmodule.c"
        var $127=($126) + 1; //@line 3568 "itertoolsmodule.c"
        $i=$127; //@line 3568 "itertoolsmodule.c"
        __label__ = 20; break; //@line 3568 "itertoolsmodule.c"
      case 20: // $bb20
        var $128=$i; //@line 3568 "itertoolsmodule.c"
        var $129=$tuplesize; //@line 3568 "itertoolsmodule.c"
        var $130=($128) < ($129); //@line 3568 "itertoolsmodule.c"
        if ($130) { __label__ = 15; break; } else { __label__ = 21; break; } //@line 3568 "itertoolsmodule.c"
      case 21: // $bb21
        var $131=$result; //@line 3578 "itertoolsmodule.c"
        $0=$131; //@line 3578 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3578 "itertoolsmodule.c"
      case 22: // $bb22
        var $132=$0; //@line 3550 "itertoolsmodule.c"
        $retval=$132; //@line 3550 "itertoolsmodule.c"
        var $retval23=$retval; //@line 3550 "itertoolsmodule.c"
        ;
        return $retval23; //@line 3550 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $ro;
        var $element=__stackBase__;
        var $cnt=__stackBase__+4;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$cnt]=-1; //@line 3651 "itertoolsmodule.c"
        var $1=$args_addr; //@line 3654 "itertoolsmodule.c"
        var $2=$kwds_addr; //@line 3654 "itertoolsmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str83, _kwargs_12229, allocate([$element,0,0,0,$cnt,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3654 "itertoolsmodule.c"
        var $4=($3)==0; //@line 3654 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3654 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3656 "itertoolsmodule.c"
        __label__ = 8; break; //@line 3656 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$args_addr; //@line 3658 "itertoolsmodule.c"
        var $6=_PyTuple_Size($5); //@line 3658 "itertoolsmodule.c"
        var $7=($6)==2; //@line 3658 "itertoolsmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 3658 "itertoolsmodule.c"
      case 3: // $bb2
        var $8=HEAP[$cnt]; //@line 3658 "itertoolsmodule.c"
        var $9=($8) < 0; //@line 3658 "itertoolsmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3658 "itertoolsmodule.c"
      case 4: // $bb3
        HEAP[$cnt]=0; //@line 3659 "itertoolsmodule.c"
        __label__ = 5; break; //@line 3659 "itertoolsmodule.c"
      case 5: // $bb4
        var $10=$type_addr; //@line 3661 "itertoolsmodule.c"
        var $11=$10+152; //@line 3661 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 3661 "itertoolsmodule.c"
        var $13=$type_addr; //@line 3661 "itertoolsmodule.c"
        var $14=FUNCTION_TABLE[$12]($13, 0); //@line 3661 "itertoolsmodule.c"
        var $15=$14; //@line 3661 "itertoolsmodule.c"
        $ro=$15; //@line 3661 "itertoolsmodule.c"
        var $16=($15)==0; //@line 3662 "itertoolsmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3662 "itertoolsmodule.c"
      case 6: // $bb5
        $0=0; //@line 3663 "itertoolsmodule.c"
        __label__ = 8; break; //@line 3663 "itertoolsmodule.c"
      case 7: // $bb6
        var $17=HEAP[$element]; //@line 3664 "itertoolsmodule.c"
        var $18=$17; //@line 3664 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 3664 "itertoolsmodule.c"
        var $20=($19) + 1; //@line 3664 "itertoolsmodule.c"
        var $21=$17; //@line 3664 "itertoolsmodule.c"
        HEAP[$21]=$20; //@line 3664 "itertoolsmodule.c"
        var $22=HEAP[$element]; //@line 3665 "itertoolsmodule.c"
        var $23=$ro; //@line 3665 "itertoolsmodule.c"
        var $24=$23+8; //@line 3665 "itertoolsmodule.c"
        HEAP[$24]=$22; //@line 3665 "itertoolsmodule.c"
        var $25=HEAP[$cnt]; //@line 3666 "itertoolsmodule.c"
        var $26=$ro; //@line 3666 "itertoolsmodule.c"
        var $27=$26+12; //@line 3666 "itertoolsmodule.c"
        HEAP[$27]=$25; //@line 3666 "itertoolsmodule.c"
        var $28=$ro; //@line 3667 "itertoolsmodule.c"
        var $29=$28; //@line 3667 "itertoolsmodule.c"
        $0=$29; //@line 3667 "itertoolsmodule.c"
        __label__ = 8; break; //@line 3667 "itertoolsmodule.c"
      case 8: // $bb7
        var $30=$0; //@line 3656 "itertoolsmodule.c"
        $retval=$30; //@line 3656 "itertoolsmodule.c"
        var $retval8=$retval; //@line 3656 "itertoolsmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 3656 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_dealloc($ro) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ro_addr;
        $ro_addr=$ro;
        var $0=$ro_addr; //@line 3673 "itertoolsmodule.c"
        var $1=$0; //@line 3673 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 3673 "itertoolsmodule.c"
        var $2=$ro_addr; //@line 3674 "itertoolsmodule.c"
        var $3=$2+8; //@line 3674 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 3674 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 3674 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3674 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$ro_addr; //@line 3674 "itertoolsmodule.c"
        var $7=$6+8; //@line 3674 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3674 "itertoolsmodule.c"
        var $9=$8; //@line 3674 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3674 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 3674 "itertoolsmodule.c"
        var $12=$8; //@line 3674 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 3674 "itertoolsmodule.c"
        var $13=$8; //@line 3674 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3674 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3674 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3674 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$ro_addr; //@line 3674 "itertoolsmodule.c"
        var $17=$16+8; //@line 3674 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3674 "itertoolsmodule.c"
        var $19=$18+4; //@line 3674 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3674 "itertoolsmodule.c"
        var $21=$20+24; //@line 3674 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3674 "itertoolsmodule.c"
        var $23=$ro_addr; //@line 3674 "itertoolsmodule.c"
        var $24=$23+8; //@line 3674 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3674 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 3674 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3674 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$ro_addr; //@line 3675 "itertoolsmodule.c"
        var $27=$26; //@line 3675 "itertoolsmodule.c"
        var $28=$27+4; //@line 3675 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 3675 "itertoolsmodule.c"
        var $30=$29+160; //@line 3675 "itertoolsmodule.c"
        var $31=HEAP[$30]; //@line 3675 "itertoolsmodule.c"
        var $32=$ro_addr; //@line 3675 "itertoolsmodule.c"
        var $33=$32; //@line 3675 "itertoolsmodule.c"
        FUNCTION_TABLE[$31]($33); //@line 3675 "itertoolsmodule.c"
        ;
        return; //@line 3676 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_traverse($ro, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ro_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $ro_addr=$ro;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$ro_addr; //@line 3681 "itertoolsmodule.c"
        var $2=$1+8; //@line 3681 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3681 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3681 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3681 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$ro_addr; //@line 3681 "itertoolsmodule.c"
        var $6=$5+8; //@line 3681 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3681 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 3681 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 3681 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 3681 "itertoolsmodule.c"
        $vret=$10; //@line 3681 "itertoolsmodule.c"
        var $11=$vret; //@line 3681 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 3681 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3681 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 3681 "itertoolsmodule.c"
        $0=$13; //@line 3681 "itertoolsmodule.c"
        __label__ = 4; break; //@line 3681 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 3682 "itertoolsmodule.c"
        __label__ = 4; break; //@line 3682 "itertoolsmodule.c"
      case 4: // $bb3
        var $14=$0; //@line 3681 "itertoolsmodule.c"
        $retval=$14; //@line 3681 "itertoolsmodule.c"
        var $retval4=$retval; //@line 3681 "itertoolsmodule.c"
        ;
        return $retval4; //@line 3681 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_next($ro) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ro_addr;
        var $retval;
        var $0;
        $ro_addr=$ro;
        var $1=$ro_addr; //@line 3688 "itertoolsmodule.c"
        var $2=$1+12; //@line 3688 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3688 "itertoolsmodule.c"
        var $4=($3)==0; //@line 3688 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3688 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3689 "itertoolsmodule.c"
        __label__ = 5; break; //@line 3689 "itertoolsmodule.c"
      case 2: // $bb1
        var $5=$ro_addr; //@line 3690 "itertoolsmodule.c"
        var $6=$5+12; //@line 3690 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3690 "itertoolsmodule.c"
        var $8=($7) > 0; //@line 3690 "itertoolsmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3690 "itertoolsmodule.c"
      case 3: // $bb2
        var $9=$ro_addr; //@line 3691 "itertoolsmodule.c"
        var $10=$9+12; //@line 3691 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 3691 "itertoolsmodule.c"
        var $12=($11) - 1; //@line 3691 "itertoolsmodule.c"
        var $13=$ro_addr; //@line 3691 "itertoolsmodule.c"
        var $14=$13+12; //@line 3691 "itertoolsmodule.c"
        HEAP[$14]=$12; //@line 3691 "itertoolsmodule.c"
        __label__ = 4; break; //@line 3691 "itertoolsmodule.c"
      case 4: // $bb3
        var $15=$ro_addr; //@line 3692 "itertoolsmodule.c"
        var $16=$15+8; //@line 3692 "itertoolsmodule.c"
        var $17=HEAP[$16]; //@line 3692 "itertoolsmodule.c"
        var $18=$17; //@line 3692 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 3692 "itertoolsmodule.c"
        var $20=($19) + 1; //@line 3692 "itertoolsmodule.c"
        var $21=$17; //@line 3692 "itertoolsmodule.c"
        HEAP[$21]=$20; //@line 3692 "itertoolsmodule.c"
        var $22=$ro_addr; //@line 3693 "itertoolsmodule.c"
        var $23=$22+8; //@line 3693 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 3693 "itertoolsmodule.c"
        $0=$24; //@line 3693 "itertoolsmodule.c"
        __label__ = 5; break; //@line 3693 "itertoolsmodule.c"
      case 5: // $bb4
        var $25=$0; //@line 3689 "itertoolsmodule.c"
        $retval=$25; //@line 3689 "itertoolsmodule.c"
        var $retval5=$retval; //@line 3689 "itertoolsmodule.c"
        ;
        return $retval5; //@line 3689 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_repr($ro) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ro_addr;
        var $retval;
        var $0;
        var $result;
        var $objrepr;
        $ro_addr=$ro;
        var $1=$ro_addr; //@line 3701 "itertoolsmodule.c"
        var $2=$1+8; //@line 3701 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3701 "itertoolsmodule.c"
        var $4=_PyObject_Repr($3); //@line 3701 "itertoolsmodule.c"
        $objrepr=$4; //@line 3701 "itertoolsmodule.c"
        var $5=$objrepr; //@line 3702 "itertoolsmodule.c"
        var $6=($5)==0; //@line 3702 "itertoolsmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3702 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3703 "itertoolsmodule.c"
        __label__ = 8; break; //@line 3703 "itertoolsmodule.c"
      case 2: // $bb1
        var $7=$ro_addr; //@line 3705 "itertoolsmodule.c"
        var $8=$7+12; //@line 3705 "itertoolsmodule.c"
        var $9=HEAP[$8]; //@line 3705 "itertoolsmodule.c"
        var $10=($9)==-1; //@line 3705 "itertoolsmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3705 "itertoolsmodule.c"
      case 3: // $bb2
        var $11=$objrepr; //@line 3706 "itertoolsmodule.c"
        var $12=$11; //@line 3706 "itertoolsmodule.c"
        var $13=$12+20; //@line 3706 "itertoolsmodule.c"
        var $14=$13; //@line 3706 "itertoolsmodule.c"
        var $15=_PyString_FromFormat(__str86, allocate([$14,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 3706 "itertoolsmodule.c"
        $result=$15; //@line 3706 "itertoolsmodule.c"
        __label__ = 5; break; //@line 3706 "itertoolsmodule.c"
      case 4: // $bb3
        var $16=$ro_addr; //@line 3709 "itertoolsmodule.c"
        var $17=$16+12; //@line 3709 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3709 "itertoolsmodule.c"
        var $19=$objrepr; //@line 3709 "itertoolsmodule.c"
        var $20=$19; //@line 3709 "itertoolsmodule.c"
        var $21=$20+20; //@line 3709 "itertoolsmodule.c"
        var $22=$21; //@line 3709 "itertoolsmodule.c"
        var $23=_PyString_FromFormat(__str87, allocate([$22,0,0,0,$18,0,0,0], ["i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3709 "itertoolsmodule.c"
        $result=$23; //@line 3709 "itertoolsmodule.c"
        __label__ = 5; break; //@line 3709 "itertoolsmodule.c"
      case 5: // $bb4
        var $24=$objrepr; //@line 3711 "itertoolsmodule.c"
        var $25=$24; //@line 3711 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 3711 "itertoolsmodule.c"
        var $27=($26) - 1; //@line 3711 "itertoolsmodule.c"
        var $28=$objrepr; //@line 3711 "itertoolsmodule.c"
        var $29=$28; //@line 3711 "itertoolsmodule.c"
        HEAP[$29]=$27; //@line 3711 "itertoolsmodule.c"
        var $30=$objrepr; //@line 3711 "itertoolsmodule.c"
        var $31=$30; //@line 3711 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3711 "itertoolsmodule.c"
        var $33=($32)==0; //@line 3711 "itertoolsmodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3711 "itertoolsmodule.c"
      case 6: // $bb5
        var $34=$objrepr; //@line 3711 "itertoolsmodule.c"
        var $35=$34+4; //@line 3711 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 3711 "itertoolsmodule.c"
        var $37=$36+24; //@line 3711 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3711 "itertoolsmodule.c"
        var $39=$objrepr; //@line 3711 "itertoolsmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 3711 "itertoolsmodule.c"
        __label__ = 7; break; //@line 3711 "itertoolsmodule.c"
      case 7: // $bb6
        var $40=$result; //@line 3712 "itertoolsmodule.c"
        $0=$40; //@line 3712 "itertoolsmodule.c"
        __label__ = 8; break; //@line 3712 "itertoolsmodule.c"
      case 8: // $bb7
        var $41=$0; //@line 3703 "itertoolsmodule.c"
        $retval=$41; //@line 3703 "itertoolsmodule.c"
        var $retval8=$retval; //@line 3703 "itertoolsmodule.c"
        ;
        return $retval8; //@line 3703 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _repeat_len($ro) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ro_addr;
        var $retval;
        var $0;
        $ro_addr=$ro;
        var $1=$ro_addr; //@line 3718 "itertoolsmodule.c"
        var $2=$1+12; //@line 3718 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3718 "itertoolsmodule.c"
        var $4=($3)==-1; //@line 3718 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3718 "itertoolsmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 3719 "itertoolsmodule.c"
        _PyErr_SetString($5, __str88); //@line 3719 "itertoolsmodule.c"
        $0=0; //@line 3720 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3720 "itertoolsmodule.c"
      case 2: // $bb1
        var $6=$ro_addr; //@line 3722 "itertoolsmodule.c"
        var $7=$6+12; //@line 3722 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3722 "itertoolsmodule.c"
        var $9=_PyInt_FromSize_t($8); //@line 3722 "itertoolsmodule.c"
        $0=$9; //@line 3722 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3722 "itertoolsmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 3720 "itertoolsmodule.c"
        $retval=$10; //@line 3720 "itertoolsmodule.c"
        var $retval3=$retval; //@line 3720 "itertoolsmodule.c"
        ;
        return $retval3; //@line 3720 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_longest_new($type, $args, $kwds) {
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
        var $lz;
        var $i;
        var $ittuple;
        var $result;
        var $fillvalue;
        var $tuplesize;
        var $item;
        var $it;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        $fillvalue=__Py_NoneStruct; //@line 3803 "itertoolsmodule.c"
        var $1=$args_addr; //@line 3804 "itertoolsmodule.c"
        var $2=_PySequence_Size($1); //@line 3804 "itertoolsmodule.c"
        $tuplesize=$2; //@line 3804 "itertoolsmodule.c"
        var $3=$kwds_addr; //@line 3806 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3806 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 3806 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$kwds_addr; //@line 3806 "itertoolsmodule.c"
        var $6=$5+4; //@line 3806 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3806 "itertoolsmodule.c"
        var $8=($7)==(_PyDict_Type); //@line 3806 "itertoolsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 3806 "itertoolsmodule.c"
      case 2: // $bb1
        var $9=$kwds_addr; //@line 3806 "itertoolsmodule.c"
        var $10=_PyDict_Size($9); //@line 3806 "itertoolsmodule.c"
        var $11=($10) > 0; //@line 3806 "itertoolsmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 3806 "itertoolsmodule.c"
      case 3: // $bb2
        var $12=$kwds_addr; //@line 3807 "itertoolsmodule.c"
        var $13=_PyDict_GetItemString($12, __str91); //@line 3807 "itertoolsmodule.c"
        $fillvalue=$13; //@line 3807 "itertoolsmodule.c"
        var $14=$fillvalue; //@line 3808 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3808 "itertoolsmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 3808 "itertoolsmodule.c"
      case 4: // $bb3
        var $16=$kwds_addr; //@line 3808 "itertoolsmodule.c"
        var $17=_PyDict_Size($16); //@line 3808 "itertoolsmodule.c"
        var $18=($17) > 1; //@line 3808 "itertoolsmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3808 "itertoolsmodule.c"
      case 5: // $bb4
        var $19=HEAP[_PyExc_TypeError]; //@line 3809 "itertoolsmodule.c"
        _PyErr_SetString($19, __str92); //@line 3809 "itertoolsmodule.c"
        $0=0; //@line 3811 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3811 "itertoolsmodule.c"
      case 6: // $bb5
        var $20=$args_addr; //@line 3816 "itertoolsmodule.c"
        var $21=$20+4; //@line 3816 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3816 "itertoolsmodule.c"
        var $23=$22+84; //@line 3816 "itertoolsmodule.c"
        var $24=HEAP[$23]; //@line 3816 "itertoolsmodule.c"
        var $25=($24) & 67108864; //@line 3816 "itertoolsmodule.c"
        var $26=($25)==0; //@line 3816 "itertoolsmodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3816 "itertoolsmodule.c"
      case 7: // $bb6
        ___assert_fail(__str43, __str5, 3816, ___PRETTY_FUNCTION___12366); //@line 3816 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 3816 "itertoolsmodule.c"
      case 8: // $bb7
        var $27=$tuplesize; //@line 3819 "itertoolsmodule.c"
        var $28=_PyTuple_New($27); //@line 3819 "itertoolsmodule.c"
        $ittuple=$28; //@line 3819 "itertoolsmodule.c"
        var $29=$ittuple; //@line 3820 "itertoolsmodule.c"
        var $30=($29)==0; //@line 3820 "itertoolsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3820 "itertoolsmodule.c"
      case 9: // $bb8
        $0=0; //@line 3821 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3821 "itertoolsmodule.c"
      case 10: // $bb9
        $i=0; //@line 3822 "itertoolsmodule.c"
        __label__ = 18; break; //@line 3822 "itertoolsmodule.c"
      case 11: // $bb10
        var $31=$args_addr; //@line 3823 "itertoolsmodule.c"
        var $32=$31; //@line 3823 "itertoolsmodule.c"
        var $33=$i; //@line 3823 "itertoolsmodule.c"
        var $34=$32+12; //@line 3823 "itertoolsmodule.c"
        var $35=$34+$33*4; //@line 3823 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 3823 "itertoolsmodule.c"
        $item=$36; //@line 3823 "itertoolsmodule.c"
        var $37=$item; //@line 3824 "itertoolsmodule.c"
        var $38=_PyObject_GetIter($37); //@line 3824 "itertoolsmodule.c"
        $it=$38; //@line 3824 "itertoolsmodule.c"
        var $39=$it; //@line 3825 "itertoolsmodule.c"
        var $40=($39)==0; //@line 3825 "itertoolsmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 3825 "itertoolsmodule.c"
      case 12: // $bb11
        var $41=HEAP[_PyExc_TypeError]; //@line 3826 "itertoolsmodule.c"
        var $42=_PyErr_ExceptionMatches($41); //@line 3826 "itertoolsmodule.c"
        var $43=($42)!=0; //@line 3826 "itertoolsmodule.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3826 "itertoolsmodule.c"
      case 13: // $bb12
        var $44=$i; //@line 3827 "itertoolsmodule.c"
        var $45=($44) + 1; //@line 3827 "itertoolsmodule.c"
        var $46=HEAP[_PyExc_TypeError]; //@line 3827 "itertoolsmodule.c"
        var $47=_PyErr_Format($46, __str93, allocate([$45,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 3827 "itertoolsmodule.c"
        __label__ = 14; break; //@line 3827 "itertoolsmodule.c"
      case 14: // $bb13
        var $48=$ittuple; //@line 3830 "itertoolsmodule.c"
        var $49=$48; //@line 3830 "itertoolsmodule.c"
        var $50=HEAP[$49]; //@line 3830 "itertoolsmodule.c"
        var $51=($50) - 1; //@line 3830 "itertoolsmodule.c"
        var $52=$ittuple; //@line 3830 "itertoolsmodule.c"
        var $53=$52; //@line 3830 "itertoolsmodule.c"
        HEAP[$53]=$51; //@line 3830 "itertoolsmodule.c"
        var $54=$ittuple; //@line 3830 "itertoolsmodule.c"
        var $55=$54; //@line 3830 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 3830 "itertoolsmodule.c"
        var $57=($56)==0; //@line 3830 "itertoolsmodule.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3830 "itertoolsmodule.c"
      case 15: // $bb14
        var $58=$ittuple; //@line 3830 "itertoolsmodule.c"
        var $59=$58+4; //@line 3830 "itertoolsmodule.c"
        var $60=HEAP[$59]; //@line 3830 "itertoolsmodule.c"
        var $61=$60+24; //@line 3830 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 3830 "itertoolsmodule.c"
        var $63=$ittuple; //@line 3830 "itertoolsmodule.c"
        FUNCTION_TABLE[$62]($63); //@line 3830 "itertoolsmodule.c"
        __label__ = 16; break; //@line 3830 "itertoolsmodule.c"
      case 16: // $bb15
        $0=0; //@line 3831 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3831 "itertoolsmodule.c"
      case 17: // $bb16
        var $64=$ittuple; //@line 3833 "itertoolsmodule.c"
        var $65=$64; //@line 3833 "itertoolsmodule.c"
        var $66=$i; //@line 3833 "itertoolsmodule.c"
        var $67=$65+12; //@line 3833 "itertoolsmodule.c"
        var $68=$67+$66*4; //@line 3833 "itertoolsmodule.c"
        var $69=$it; //@line 3833 "itertoolsmodule.c"
        HEAP[$68]=$69; //@line 3833 "itertoolsmodule.c"
        var $70=$i; //@line 3822 "itertoolsmodule.c"
        var $71=($70) + 1; //@line 3822 "itertoolsmodule.c"
        $i=$71; //@line 3822 "itertoolsmodule.c"
        __label__ = 18; break; //@line 3822 "itertoolsmodule.c"
      case 18: // $bb17
        var $72=$i; //@line 3822 "itertoolsmodule.c"
        var $73=$tuplesize; //@line 3822 "itertoolsmodule.c"
        var $74=($72) < ($73); //@line 3822 "itertoolsmodule.c"
        if ($74) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 3822 "itertoolsmodule.c"
      case 19: // $bb18
        var $75=$tuplesize; //@line 3837 "itertoolsmodule.c"
        var $76=_PyTuple_New($75); //@line 3837 "itertoolsmodule.c"
        $result=$76; //@line 3837 "itertoolsmodule.c"
        var $77=$result; //@line 3838 "itertoolsmodule.c"
        var $78=($77)==0; //@line 3838 "itertoolsmodule.c"
        if ($78) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 3838 "itertoolsmodule.c"
      case 20: // $bb19
        var $79=$ittuple; //@line 3839 "itertoolsmodule.c"
        var $80=$79; //@line 3839 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 3839 "itertoolsmodule.c"
        var $82=($81) - 1; //@line 3839 "itertoolsmodule.c"
        var $83=$ittuple; //@line 3839 "itertoolsmodule.c"
        var $84=$83; //@line 3839 "itertoolsmodule.c"
        HEAP[$84]=$82; //@line 3839 "itertoolsmodule.c"
        var $85=$ittuple; //@line 3839 "itertoolsmodule.c"
        var $86=$85; //@line 3839 "itertoolsmodule.c"
        var $87=HEAP[$86]; //@line 3839 "itertoolsmodule.c"
        var $88=($87)==0; //@line 3839 "itertoolsmodule.c"
        if ($88) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3839 "itertoolsmodule.c"
      case 21: // $bb20
        var $89=$ittuple; //@line 3839 "itertoolsmodule.c"
        var $90=$89+4; //@line 3839 "itertoolsmodule.c"
        var $91=HEAP[$90]; //@line 3839 "itertoolsmodule.c"
        var $92=$91+24; //@line 3839 "itertoolsmodule.c"
        var $93=HEAP[$92]; //@line 3839 "itertoolsmodule.c"
        var $94=$ittuple; //@line 3839 "itertoolsmodule.c"
        FUNCTION_TABLE[$93]($94); //@line 3839 "itertoolsmodule.c"
        __label__ = 22; break; //@line 3839 "itertoolsmodule.c"
      case 22: // $bb21
        $0=0; //@line 3840 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3840 "itertoolsmodule.c"
      case 23: // $bb22
        $i=0; //@line 3842 "itertoolsmodule.c"
        var $95=$i; //@line 3842 "itertoolsmodule.c"
        var $96=$tuplesize; //@line 3842 "itertoolsmodule.c"
        var $97=($95) < ($96); //@line 3842 "itertoolsmodule.c"
        if ($97) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3842 "itertoolsmodule.c"
      case 24: // $bb23
        var $98=HEAP[__Py_NoneStruct]; //@line 3843 "itertoolsmodule.c"
        var $99=($98) + 1; //@line 3843 "itertoolsmodule.c"
        HEAP[__Py_NoneStruct]=$99; //@line 3843 "itertoolsmodule.c"
        var $100=$result; //@line 3844 "itertoolsmodule.c"
        var $101=$100; //@line 3844 "itertoolsmodule.c"
        var $102=$i; //@line 3844 "itertoolsmodule.c"
        var $103=$101+12; //@line 3844 "itertoolsmodule.c"
        var $104=$103+$102*4; //@line 3844 "itertoolsmodule.c"
        HEAP[$104]=__Py_NoneStruct; //@line 3844 "itertoolsmodule.c"
        var $105=$i; //@line 3842 "itertoolsmodule.c"
        var $106=($105) + 1; //@line 3842 "itertoolsmodule.c"
        $i=$106; //@line 3842 "itertoolsmodule.c"
        var $107=$i; //@line 3842 "itertoolsmodule.c"
        var $108=$tuplesize; //@line 3842 "itertoolsmodule.c"
        var $109=($107) < ($108); //@line 3842 "itertoolsmodule.c"
        if ($109) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3842 "itertoolsmodule.c"
      case 25: // $bb25
        var $110=$type_addr; //@line 3848 "itertoolsmodule.c"
        var $111=$110+152; //@line 3848 "itertoolsmodule.c"
        var $112=HEAP[$111]; //@line 3848 "itertoolsmodule.c"
        var $113=$type_addr; //@line 3848 "itertoolsmodule.c"
        var $114=FUNCTION_TABLE[$112]($113, 0); //@line 3848 "itertoolsmodule.c"
        var $115=$114; //@line 3848 "itertoolsmodule.c"
        $lz=$115; //@line 3848 "itertoolsmodule.c"
        var $116=($115)==0; //@line 3849 "itertoolsmodule.c"
        if ($116) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 3849 "itertoolsmodule.c"
      case 26: // $bb26
        var $117=$ittuple; //@line 3850 "itertoolsmodule.c"
        var $118=$117; //@line 3850 "itertoolsmodule.c"
        var $119=HEAP[$118]; //@line 3850 "itertoolsmodule.c"
        var $120=($119) - 1; //@line 3850 "itertoolsmodule.c"
        var $121=$ittuple; //@line 3850 "itertoolsmodule.c"
        var $122=$121; //@line 3850 "itertoolsmodule.c"
        HEAP[$122]=$120; //@line 3850 "itertoolsmodule.c"
        var $123=$ittuple; //@line 3850 "itertoolsmodule.c"
        var $124=$123; //@line 3850 "itertoolsmodule.c"
        var $125=HEAP[$124]; //@line 3850 "itertoolsmodule.c"
        var $126=($125)==0; //@line 3850 "itertoolsmodule.c"
        if ($126) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 3850 "itertoolsmodule.c"
      case 27: // $bb27
        var $127=$ittuple; //@line 3850 "itertoolsmodule.c"
        var $128=$127+4; //@line 3850 "itertoolsmodule.c"
        var $129=HEAP[$128]; //@line 3850 "itertoolsmodule.c"
        var $130=$129+24; //@line 3850 "itertoolsmodule.c"
        var $131=HEAP[$130]; //@line 3850 "itertoolsmodule.c"
        var $132=$ittuple; //@line 3850 "itertoolsmodule.c"
        FUNCTION_TABLE[$131]($132); //@line 3850 "itertoolsmodule.c"
        __label__ = 28; break; //@line 3850 "itertoolsmodule.c"
      case 28: // $bb28
        var $133=$result; //@line 3851 "itertoolsmodule.c"
        var $134=$133; //@line 3851 "itertoolsmodule.c"
        var $135=HEAP[$134]; //@line 3851 "itertoolsmodule.c"
        var $136=($135) - 1; //@line 3851 "itertoolsmodule.c"
        var $137=$result; //@line 3851 "itertoolsmodule.c"
        var $138=$137; //@line 3851 "itertoolsmodule.c"
        HEAP[$138]=$136; //@line 3851 "itertoolsmodule.c"
        var $139=$result; //@line 3851 "itertoolsmodule.c"
        var $140=$139; //@line 3851 "itertoolsmodule.c"
        var $141=HEAP[$140]; //@line 3851 "itertoolsmodule.c"
        var $142=($141)==0; //@line 3851 "itertoolsmodule.c"
        if ($142) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 3851 "itertoolsmodule.c"
      case 29: // $bb29
        var $143=$result; //@line 3851 "itertoolsmodule.c"
        var $144=$143+4; //@line 3851 "itertoolsmodule.c"
        var $145=HEAP[$144]; //@line 3851 "itertoolsmodule.c"
        var $146=$145+24; //@line 3851 "itertoolsmodule.c"
        var $147=HEAP[$146]; //@line 3851 "itertoolsmodule.c"
        var $148=$result; //@line 3851 "itertoolsmodule.c"
        FUNCTION_TABLE[$147]($148); //@line 3851 "itertoolsmodule.c"
        __label__ = 30; break; //@line 3851 "itertoolsmodule.c"
      case 30: // $bb30
        $0=0; //@line 3852 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3852 "itertoolsmodule.c"
      case 31: // $bb31
        var $149=$lz; //@line 3854 "itertoolsmodule.c"
        var $150=$149+16; //@line 3854 "itertoolsmodule.c"
        var $151=$ittuple; //@line 3854 "itertoolsmodule.c"
        HEAP[$150]=$151; //@line 3854 "itertoolsmodule.c"
        var $152=$lz; //@line 3855 "itertoolsmodule.c"
        var $153=$152+8; //@line 3855 "itertoolsmodule.c"
        var $154=$tuplesize; //@line 3855 "itertoolsmodule.c"
        HEAP[$153]=$154; //@line 3855 "itertoolsmodule.c"
        var $155=$lz; //@line 3856 "itertoolsmodule.c"
        var $156=$155+12; //@line 3856 "itertoolsmodule.c"
        var $157=$tuplesize; //@line 3856 "itertoolsmodule.c"
        HEAP[$156]=$157; //@line 3856 "itertoolsmodule.c"
        var $158=$lz; //@line 3857 "itertoolsmodule.c"
        var $159=$158+20; //@line 3857 "itertoolsmodule.c"
        var $160=$result; //@line 3857 "itertoolsmodule.c"
        HEAP[$159]=$160; //@line 3857 "itertoolsmodule.c"
        var $161=$fillvalue; //@line 3858 "itertoolsmodule.c"
        var $162=$161; //@line 3858 "itertoolsmodule.c"
        var $163=HEAP[$162]; //@line 3858 "itertoolsmodule.c"
        var $164=($163) + 1; //@line 3858 "itertoolsmodule.c"
        var $165=$fillvalue; //@line 3858 "itertoolsmodule.c"
        var $166=$165; //@line 3858 "itertoolsmodule.c"
        HEAP[$166]=$164; //@line 3858 "itertoolsmodule.c"
        var $167=$lz; //@line 3859 "itertoolsmodule.c"
        var $168=$167+24; //@line 3859 "itertoolsmodule.c"
        var $169=$fillvalue; //@line 3859 "itertoolsmodule.c"
        HEAP[$168]=$169; //@line 3859 "itertoolsmodule.c"
        var $170=$lz; //@line 3860 "itertoolsmodule.c"
        var $171=$170; //@line 3860 "itertoolsmodule.c"
        $0=$171; //@line 3860 "itertoolsmodule.c"
        __label__ = 32; break; //@line 3860 "itertoolsmodule.c"
      case 32: // $bb32
        var $172=$0; //@line 3811 "itertoolsmodule.c"
        $retval=$172; //@line 3811 "itertoolsmodule.c"
        var $retval33=$retval; //@line 3811 "itertoolsmodule.c"
        ;
        return $retval33; //@line 3811 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_longest_dealloc($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        $lz_addr=$lz;
        var $0=$lz_addr; //@line 3866 "itertoolsmodule.c"
        var $1=$0; //@line 3866 "itertoolsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 3866 "itertoolsmodule.c"
        var $2=$lz_addr; //@line 3867 "itertoolsmodule.c"
        var $3=$2+16; //@line 3867 "itertoolsmodule.c"
        var $4=HEAP[$3]; //@line 3867 "itertoolsmodule.c"
        var $5=($4)!=0; //@line 3867 "itertoolsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3867 "itertoolsmodule.c"
      case 1: // $bb
        var $6=$lz_addr; //@line 3867 "itertoolsmodule.c"
        var $7=$6+16; //@line 3867 "itertoolsmodule.c"
        var $8=HEAP[$7]; //@line 3867 "itertoolsmodule.c"
        var $9=$8; //@line 3867 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 3867 "itertoolsmodule.c"
        var $11=($10) - 1; //@line 3867 "itertoolsmodule.c"
        var $12=$8; //@line 3867 "itertoolsmodule.c"
        HEAP[$12]=$11; //@line 3867 "itertoolsmodule.c"
        var $13=$8; //@line 3867 "itertoolsmodule.c"
        var $14=HEAP[$13]; //@line 3867 "itertoolsmodule.c"
        var $15=($14)==0; //@line 3867 "itertoolsmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3867 "itertoolsmodule.c"
      case 2: // $bb1
        var $16=$lz_addr; //@line 3867 "itertoolsmodule.c"
        var $17=$16+16; //@line 3867 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 3867 "itertoolsmodule.c"
        var $19=$18+4; //@line 3867 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3867 "itertoolsmodule.c"
        var $21=$20+24; //@line 3867 "itertoolsmodule.c"
        var $22=HEAP[$21]; //@line 3867 "itertoolsmodule.c"
        var $23=$lz_addr; //@line 3867 "itertoolsmodule.c"
        var $24=$23+16; //@line 3867 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3867 "itertoolsmodule.c"
        FUNCTION_TABLE[$22]($25); //@line 3867 "itertoolsmodule.c"
        __label__ = 3; break; //@line 3867 "itertoolsmodule.c"
      case 3: // $bb2
        var $26=$lz_addr; //@line 3868 "itertoolsmodule.c"
        var $27=$26+20; //@line 3868 "itertoolsmodule.c"
        var $28=HEAP[$27]; //@line 3868 "itertoolsmodule.c"
        var $29=($28)!=0; //@line 3868 "itertoolsmodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3868 "itertoolsmodule.c"
      case 4: // $bb3
        var $30=$lz_addr; //@line 3868 "itertoolsmodule.c"
        var $31=$30+20; //@line 3868 "itertoolsmodule.c"
        var $32=HEAP[$31]; //@line 3868 "itertoolsmodule.c"
        var $33=$32; //@line 3868 "itertoolsmodule.c"
        var $34=HEAP[$33]; //@line 3868 "itertoolsmodule.c"
        var $35=($34) - 1; //@line 3868 "itertoolsmodule.c"
        var $36=$32; //@line 3868 "itertoolsmodule.c"
        HEAP[$36]=$35; //@line 3868 "itertoolsmodule.c"
        var $37=$32; //@line 3868 "itertoolsmodule.c"
        var $38=HEAP[$37]; //@line 3868 "itertoolsmodule.c"
        var $39=($38)==0; //@line 3868 "itertoolsmodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3868 "itertoolsmodule.c"
      case 5: // $bb4
        var $40=$lz_addr; //@line 3868 "itertoolsmodule.c"
        var $41=$40+20; //@line 3868 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3868 "itertoolsmodule.c"
        var $43=$42+4; //@line 3868 "itertoolsmodule.c"
        var $44=HEAP[$43]; //@line 3868 "itertoolsmodule.c"
        var $45=$44+24; //@line 3868 "itertoolsmodule.c"
        var $46=HEAP[$45]; //@line 3868 "itertoolsmodule.c"
        var $47=$lz_addr; //@line 3868 "itertoolsmodule.c"
        var $48=$47+20; //@line 3868 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 3868 "itertoolsmodule.c"
        FUNCTION_TABLE[$46]($49); //@line 3868 "itertoolsmodule.c"
        __label__ = 6; break; //@line 3868 "itertoolsmodule.c"
      case 6: // $bb5
        var $50=$lz_addr; //@line 3869 "itertoolsmodule.c"
        var $51=$50+24; //@line 3869 "itertoolsmodule.c"
        var $52=HEAP[$51]; //@line 3869 "itertoolsmodule.c"
        var $53=($52)!=0; //@line 3869 "itertoolsmodule.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 3869 "itertoolsmodule.c"
      case 7: // $bb6
        var $54=$lz_addr; //@line 3869 "itertoolsmodule.c"
        var $55=$54+24; //@line 3869 "itertoolsmodule.c"
        var $56=HEAP[$55]; //@line 3869 "itertoolsmodule.c"
        var $57=$56; //@line 3869 "itertoolsmodule.c"
        var $58=HEAP[$57]; //@line 3869 "itertoolsmodule.c"
        var $59=($58) - 1; //@line 3869 "itertoolsmodule.c"
        var $60=$56; //@line 3869 "itertoolsmodule.c"
        HEAP[$60]=$59; //@line 3869 "itertoolsmodule.c"
        var $61=$56; //@line 3869 "itertoolsmodule.c"
        var $62=HEAP[$61]; //@line 3869 "itertoolsmodule.c"
        var $63=($62)==0; //@line 3869 "itertoolsmodule.c"
        if ($63) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3869 "itertoolsmodule.c"
      case 8: // $bb7
        var $64=$lz_addr; //@line 3869 "itertoolsmodule.c"
        var $65=$64+24; //@line 3869 "itertoolsmodule.c"
        var $66=HEAP[$65]; //@line 3869 "itertoolsmodule.c"
        var $67=$66+4; //@line 3869 "itertoolsmodule.c"
        var $68=HEAP[$67]; //@line 3869 "itertoolsmodule.c"
        var $69=$68+24; //@line 3869 "itertoolsmodule.c"
        var $70=HEAP[$69]; //@line 3869 "itertoolsmodule.c"
        var $71=$lz_addr; //@line 3869 "itertoolsmodule.c"
        var $72=$71+24; //@line 3869 "itertoolsmodule.c"
        var $73=HEAP[$72]; //@line 3869 "itertoolsmodule.c"
        FUNCTION_TABLE[$70]($73); //@line 3869 "itertoolsmodule.c"
        __label__ = 9; break; //@line 3869 "itertoolsmodule.c"
      case 9: // $bb8
        var $74=$lz_addr; //@line 3870 "itertoolsmodule.c"
        var $75=$74; //@line 3870 "itertoolsmodule.c"
        var $76=$75+4; //@line 3870 "itertoolsmodule.c"
        var $77=HEAP[$76]; //@line 3870 "itertoolsmodule.c"
        var $78=$77+160; //@line 3870 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 3870 "itertoolsmodule.c"
        var $80=$lz_addr; //@line 3870 "itertoolsmodule.c"
        var $81=$80; //@line 3870 "itertoolsmodule.c"
        FUNCTION_TABLE[$79]($81); //@line 3870 "itertoolsmodule.c"
        ;
        return; //@line 3871 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_longest_traverse($lz, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        var $vret4;
        var $vret8;
        $lz_addr=$lz;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$lz_addr; //@line 3876 "itertoolsmodule.c"
        var $2=$1+16; //@line 3876 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3876 "itertoolsmodule.c"
        var $4=($3)!=0; //@line 3876 "itertoolsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3876 "itertoolsmodule.c"
      case 1: // $bb
        var $5=$lz_addr; //@line 3876 "itertoolsmodule.c"
        var $6=$5+16; //@line 3876 "itertoolsmodule.c"
        var $7=HEAP[$6]; //@line 3876 "itertoolsmodule.c"
        var $8=$visit_addr; //@line 3876 "itertoolsmodule.c"
        var $9=$arg_addr; //@line 3876 "itertoolsmodule.c"
        var $10=FUNCTION_TABLE[$8]($7, $9); //@line 3876 "itertoolsmodule.c"
        $vret=$10; //@line 3876 "itertoolsmodule.c"
        var $11=$vret; //@line 3876 "itertoolsmodule.c"
        var $12=($11)!=0; //@line 3876 "itertoolsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3876 "itertoolsmodule.c"
      case 2: // $bb1
        var $13=$vret; //@line 3876 "itertoolsmodule.c"
        $0=$13; //@line 3876 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3876 "itertoolsmodule.c"
      case 3: // $bb2
        var $14=$lz_addr; //@line 3877 "itertoolsmodule.c"
        var $15=$14+20; //@line 3877 "itertoolsmodule.c"
        var $16=HEAP[$15]; //@line 3877 "itertoolsmodule.c"
        var $17=($16)!=0; //@line 3877 "itertoolsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3877 "itertoolsmodule.c"
      case 4: // $bb3
        var $18=$lz_addr; //@line 3877 "itertoolsmodule.c"
        var $19=$18+20; //@line 3877 "itertoolsmodule.c"
        var $20=HEAP[$19]; //@line 3877 "itertoolsmodule.c"
        var $21=$visit_addr; //@line 3877 "itertoolsmodule.c"
        var $22=$arg_addr; //@line 3877 "itertoolsmodule.c"
        var $23=FUNCTION_TABLE[$21]($20, $22); //@line 3877 "itertoolsmodule.c"
        $vret4=$23; //@line 3877 "itertoolsmodule.c"
        var $24=$vret4; //@line 3877 "itertoolsmodule.c"
        var $25=($24)!=0; //@line 3877 "itertoolsmodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3877 "itertoolsmodule.c"
      case 5: // $bb5
        var $26=$vret4; //@line 3877 "itertoolsmodule.c"
        $0=$26; //@line 3877 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3877 "itertoolsmodule.c"
      case 6: // $bb6
        var $27=$lz_addr; //@line 3878 "itertoolsmodule.c"
        var $28=$27+24; //@line 3878 "itertoolsmodule.c"
        var $29=HEAP[$28]; //@line 3878 "itertoolsmodule.c"
        var $30=($29)!=0; //@line 3878 "itertoolsmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 3878 "itertoolsmodule.c"
      case 7: // $bb7
        var $31=$lz_addr; //@line 3878 "itertoolsmodule.c"
        var $32=$31+24; //@line 3878 "itertoolsmodule.c"
        var $33=HEAP[$32]; //@line 3878 "itertoolsmodule.c"
        var $34=$visit_addr; //@line 3878 "itertoolsmodule.c"
        var $35=$arg_addr; //@line 3878 "itertoolsmodule.c"
        var $36=FUNCTION_TABLE[$34]($33, $35); //@line 3878 "itertoolsmodule.c"
        $vret8=$36; //@line 3878 "itertoolsmodule.c"
        var $37=$vret8; //@line 3878 "itertoolsmodule.c"
        var $38=($37)!=0; //@line 3878 "itertoolsmodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3878 "itertoolsmodule.c"
      case 8: // $bb9
        var $39=$vret8; //@line 3878 "itertoolsmodule.c"
        $0=$39; //@line 3878 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3878 "itertoolsmodule.c"
      case 9: // $bb10
        $0=0; //@line 3879 "itertoolsmodule.c"
        __label__ = 10; break; //@line 3879 "itertoolsmodule.c"
      case 10: // $bb11
        var $40=$0; //@line 3876 "itertoolsmodule.c"
        $retval=$40; //@line 3876 "itertoolsmodule.c"
        var $retval12=$retval; //@line 3876 "itertoolsmodule.c"
        ;
        return $retval12; //@line 3876 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _izip_longest_next($lz) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lz_addr;
        var $retval;
        var $0;
        var $i;
        var $tuplesize;
        var $result;
        var $it;
        var $item;
        var $olditem;
        $lz_addr=$lz;
        var $1=$lz_addr; //@line 3886 "itertoolsmodule.c"
        var $2=$1+8; //@line 3886 "itertoolsmodule.c"
        var $3=HEAP[$2]; //@line 3886 "itertoolsmodule.c"
        $tuplesize=$3; //@line 3886 "itertoolsmodule.c"
        var $4=$lz_addr; //@line 3887 "itertoolsmodule.c"
        var $5=$4+20; //@line 3887 "itertoolsmodule.c"
        var $6=HEAP[$5]; //@line 3887 "itertoolsmodule.c"
        $result=$6; //@line 3887 "itertoolsmodule.c"
        var $7=$tuplesize; //@line 3892 "itertoolsmodule.c"
        var $8=($7)==0; //@line 3892 "itertoolsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3892 "itertoolsmodule.c"
      case 1: // $bb
        $0=0; //@line 3893 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3893 "itertoolsmodule.c"
      case 2: // $bb1
        var $9=$lz_addr; //@line 3894 "itertoolsmodule.c"
        var $10=$9+12; //@line 3894 "itertoolsmodule.c"
        var $11=HEAP[$10]; //@line 3894 "itertoolsmodule.c"
        var $12=($11)==0; //@line 3894 "itertoolsmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3894 "itertoolsmodule.c"
      case 3: // $bb2
        $0=0; //@line 3895 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3895 "itertoolsmodule.c"
      case 4: // $bb3
        var $13=$result; //@line 3896 "itertoolsmodule.c"
        var $14=$13; //@line 3896 "itertoolsmodule.c"
        var $15=HEAP[$14]; //@line 3896 "itertoolsmodule.c"
        var $16=($15)==1; //@line 3896 "itertoolsmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 20; break; } //@line 3896 "itertoolsmodule.c"
      case 5: // $bb4
        var $17=$result; //@line 3897 "itertoolsmodule.c"
        var $18=$17; //@line 3897 "itertoolsmodule.c"
        var $19=HEAP[$18]; //@line 3897 "itertoolsmodule.c"
        var $20=($19) + 1; //@line 3897 "itertoolsmodule.c"
        var $21=$result; //@line 3897 "itertoolsmodule.c"
        var $22=$21; //@line 3897 "itertoolsmodule.c"
        HEAP[$22]=$20; //@line 3897 "itertoolsmodule.c"
        $i=0; //@line 3898 "itertoolsmodule.c"
        __label__ = 19; break; //@line 3898 "itertoolsmodule.c"
      case 6: // $bb5
        var $23=$lz_addr; //@line 3899 "itertoolsmodule.c"
        var $24=$23+16; //@line 3899 "itertoolsmodule.c"
        var $25=HEAP[$24]; //@line 3899 "itertoolsmodule.c"
        var $26=$25; //@line 3899 "itertoolsmodule.c"
        var $27=$i; //@line 3899 "itertoolsmodule.c"
        var $28=$26+12; //@line 3899 "itertoolsmodule.c"
        var $29=$28+$27*4; //@line 3899 "itertoolsmodule.c"
        var $30=HEAP[$29]; //@line 3899 "itertoolsmodule.c"
        $it=$30; //@line 3899 "itertoolsmodule.c"
        var $31=$it; //@line 3900 "itertoolsmodule.c"
        var $32=($31)==0; //@line 3900 "itertoolsmodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3900 "itertoolsmodule.c"
      case 7: // $bb6
        var $33=$lz_addr; //@line 3901 "itertoolsmodule.c"
        var $34=$33+24; //@line 3901 "itertoolsmodule.c"
        var $35=HEAP[$34]; //@line 3901 "itertoolsmodule.c"
        var $36=$35; //@line 3901 "itertoolsmodule.c"
        var $37=HEAP[$36]; //@line 3901 "itertoolsmodule.c"
        var $38=($37) + 1; //@line 3901 "itertoolsmodule.c"
        var $39=$35; //@line 3901 "itertoolsmodule.c"
        HEAP[$39]=$38; //@line 3901 "itertoolsmodule.c"
        var $40=$lz_addr; //@line 3902 "itertoolsmodule.c"
        var $41=$40+24; //@line 3902 "itertoolsmodule.c"
        var $42=HEAP[$41]; //@line 3902 "itertoolsmodule.c"
        $item=$42; //@line 3902 "itertoolsmodule.c"
        __label__ = 16; break; //@line 3902 "itertoolsmodule.c"
      case 8: // $bb7
        var $43=$it; //@line 3904 "itertoolsmodule.c"
        var $44=_PyIter_Next($43); //@line 3904 "itertoolsmodule.c"
        $item=$44; //@line 3904 "itertoolsmodule.c"
        var $45=$item; //@line 3905 "itertoolsmodule.c"
        var $46=($45)==0; //@line 3905 "itertoolsmodule.c"
        if ($46) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 3905 "itertoolsmodule.c"
      case 9: // $bb8
        var $47=$lz_addr; //@line 3906 "itertoolsmodule.c"
        var $48=$47+12; //@line 3906 "itertoolsmodule.c"
        var $49=HEAP[$48]; //@line 3906 "itertoolsmodule.c"
        var $50=($49) - 1; //@line 3906 "itertoolsmodule.c"
        var $51=$lz_addr; //@line 3906 "itertoolsmodule.c"
        var $52=$51+12; //@line 3906 "itertoolsmodule.c"
        HEAP[$52]=$50; //@line 3906 "itertoolsmodule.c"
        var $53=$lz_addr; //@line 3907 "itertoolsmodule.c"
        var $54=$53+12; //@line 3907 "itertoolsmodule.c"
        var $55=HEAP[$54]; //@line 3907 "itertoolsmodule.c"
        var $56=($55)==0; //@line 3907 "itertoolsmodule.c"
        if ($56) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 3907 "itertoolsmodule.c"
      case 10: // $bb9
        var $57=_PyErr_Occurred(); //@line 3907 "itertoolsmodule.c"
        var $58=($57)!=0; //@line 3907 "itertoolsmodule.c"
        if ($58) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 3907 "itertoolsmodule.c"
      case 11: // $bb10
        var $59=$lz_addr; //@line 3908 "itertoolsmodule.c"
        var $60=$59+12; //@line 3908 "itertoolsmodule.c"
        HEAP[$60]=0; //@line 3908 "itertoolsmodule.c"
        var $61=$result; //@line 3909 "itertoolsmodule.c"
        var $62=$61; //@line 3909 "itertoolsmodule.c"
        var $63=HEAP[$62]; //@line 3909 "itertoolsmodule.c"
        var $64=($63) - 1; //@line 3909 "itertoolsmodule.c"
        var $65=$result; //@line 3909 "itertoolsmodule.c"
        var $66=$65; //@line 3909 "itertoolsmodule.c"
        HEAP[$66]=$64; //@line 3909 "itertoolsmodule.c"
        var $67=$result; //@line 3909 "itertoolsmodule.c"
        var $68=$67; //@line 3909 "itertoolsmodule.c"
        var $69=HEAP[$68]; //@line 3909 "itertoolsmodule.c"
        var $70=($69)==0; //@line 3909 "itertoolsmodule.c"
        if ($70) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3909 "itertoolsmodule.c"
      case 12: // $bb11
        var $71=$result; //@line 3909 "itertoolsmodule.c"
        var $72=$71+4; //@line 3909 "itertoolsmodule.c"
        var $73=HEAP[$72]; //@line 3909 "itertoolsmodule.c"
        var $74=$73+24; //@line 3909 "itertoolsmodule.c"
        var $75=HEAP[$74]; //@line 3909 "itertoolsmodule.c"
        var $76=$result; //@line 3909 "itertoolsmodule.c"
        FUNCTION_TABLE[$75]($76); //@line 3909 "itertoolsmodule.c"
        __label__ = 13; break; //@line 3909 "itertoolsmodule.c"
      case 13: // $bb12
        $0=0; //@line 3910 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3910 "itertoolsmodule.c"
      case 14: // $bb13
        var $77=$lz_addr; //@line 3912 "itertoolsmodule.c"
        var $78=$77+24; //@line 3912 "itertoolsmodule.c"
        var $79=HEAP[$78]; //@line 3912 "itertoolsmodule.c"
        var $80=$79; //@line 3912 "itertoolsmodule.c"
        var $81=HEAP[$80]; //@line 3912 "itertoolsmodule.c"
        var $82=($81) + 1; //@line 3912 "itertoolsmodule.c"
        var $83=$79; //@line 3912 "itertoolsmodule.c"
        HEAP[$83]=$82; //@line 3912 "itertoolsmodule.c"
        var $84=$lz_addr; //@line 3913 "itertoolsmodule.c"
        var $85=$84+24; //@line 3913 "itertoolsmodule.c"
        var $86=HEAP[$85]; //@line 3913 "itertoolsmodule.c"
        $item=$86; //@line 3913 "itertoolsmodule.c"
        var $87=$lz_addr; //@line 3914 "itertoolsmodule.c"
        var $88=$87+16; //@line 3914 "itertoolsmodule.c"
        var $89=HEAP[$88]; //@line 3914 "itertoolsmodule.c"
        var $90=$89; //@line 3914 "itertoolsmodule.c"
        var $91=$i; //@line 3914 "itertoolsmodule.c"
        var $92=$90+12; //@line 3914 "itertoolsmodule.c"
        var $93=$92+$91*4; //@line 3914 "itertoolsmodule.c"
        HEAP[$93]=0; //@line 3914 "itertoolsmodule.c"
        var $94=$it; //@line 3915 "itertoolsmodule.c"
        var $95=$94; //@line 3915 "itertoolsmodule.c"
        var $96=HEAP[$95]; //@line 3915 "itertoolsmodule.c"
        var $97=($96) - 1; //@line 3915 "itertoolsmodule.c"
        var $98=$it; //@line 3915 "itertoolsmodule.c"
        var $99=$98; //@line 3915 "itertoolsmodule.c"
        HEAP[$99]=$97; //@line 3915 "itertoolsmodule.c"
        var $100=$it; //@line 3915 "itertoolsmodule.c"
        var $101=$100; //@line 3915 "itertoolsmodule.c"
        var $102=HEAP[$101]; //@line 3915 "itertoolsmodule.c"
        var $103=($102)==0; //@line 3915 "itertoolsmodule.c"
        if ($103) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3915 "itertoolsmodule.c"
      case 15: // $bb14
        var $104=$it; //@line 3915 "itertoolsmodule.c"
        var $105=$104+4; //@line 3915 "itertoolsmodule.c"
        var $106=HEAP[$105]; //@line 3915 "itertoolsmodule.c"
        var $107=$106+24; //@line 3915 "itertoolsmodule.c"
        var $108=HEAP[$107]; //@line 3915 "itertoolsmodule.c"
        var $109=$it; //@line 3915 "itertoolsmodule.c"
        FUNCTION_TABLE[$108]($109); //@line 3915 "itertoolsmodule.c"
        __label__ = 16; break; //@line 3915 "itertoolsmodule.c"
      case 16: // $bb15
        var $110=$result; //@line 3919 "itertoolsmodule.c"
        var $111=$110; //@line 3919 "itertoolsmodule.c"
        var $112=$i; //@line 3919 "itertoolsmodule.c"
        var $113=$111+12; //@line 3919 "itertoolsmodule.c"
        var $114=$113+$112*4; //@line 3919 "itertoolsmodule.c"
        var $115=HEAP[$114]; //@line 3919 "itertoolsmodule.c"
        $olditem=$115; //@line 3919 "itertoolsmodule.c"
        var $116=$result; //@line 3920 "itertoolsmodule.c"
        var $117=$116; //@line 3920 "itertoolsmodule.c"
        var $118=$i; //@line 3920 "itertoolsmodule.c"
        var $119=$117+12; //@line 3920 "itertoolsmodule.c"
        var $120=$119+$118*4; //@line 3920 "itertoolsmodule.c"
        var $121=$item; //@line 3920 "itertoolsmodule.c"
        HEAP[$120]=$121; //@line 3920 "itertoolsmodule.c"
        var $122=$olditem; //@line 3921 "itertoolsmodule.c"
        var $123=$122; //@line 3921 "itertoolsmodule.c"
        var $124=HEAP[$123]; //@line 3921 "itertoolsmodule.c"
        var $125=($124) - 1; //@line 3921 "itertoolsmodule.c"
        var $126=$olditem; //@line 3921 "itertoolsmodule.c"
        var $127=$126; //@line 3921 "itertoolsmodule.c"
        HEAP[$127]=$125; //@line 3921 "itertoolsmodule.c"
        var $128=$olditem; //@line 3921 "itertoolsmodule.c"
        var $129=$128; //@line 3921 "itertoolsmodule.c"
        var $130=HEAP[$129]; //@line 3921 "itertoolsmodule.c"
        var $131=($130)==0; //@line 3921 "itertoolsmodule.c"
        if ($131) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3921 "itertoolsmodule.c"
      case 17: // $bb16
        var $132=$olditem; //@line 3921 "itertoolsmodule.c"
        var $133=$132+4; //@line 3921 "itertoolsmodule.c"
        var $134=HEAP[$133]; //@line 3921 "itertoolsmodule.c"
        var $135=$134+24; //@line 3921 "itertoolsmodule.c"
        var $136=HEAP[$135]; //@line 3921 "itertoolsmodule.c"
        var $137=$olditem; //@line 3921 "itertoolsmodule.c"
        FUNCTION_TABLE[$136]($137); //@line 3921 "itertoolsmodule.c"
        __label__ = 18; break; //@line 3921 "itertoolsmodule.c"
      case 18: // $bb17
        var $138=$i; //@line 3898 "itertoolsmodule.c"
        var $139=($138) + 1; //@line 3898 "itertoolsmodule.c"
        $i=$139; //@line 3898 "itertoolsmodule.c"
        __label__ = 19; break; //@line 3898 "itertoolsmodule.c"
      case 19: // $bb18
        var $140=$i; //@line 3898 "itertoolsmodule.c"
        var $141=$tuplesize; //@line 3898 "itertoolsmodule.c"
        var $142=($140) < ($141); //@line 3898 "itertoolsmodule.c"
        if ($142) { __label__ = 6; break; } else { __label__ = 35; break; } //@line 3898 "itertoolsmodule.c"
      case 20: // $bb20
        var $143=$tuplesize; //@line 3924 "itertoolsmodule.c"
        var $144=_PyTuple_New($143); //@line 3924 "itertoolsmodule.c"
        $result=$144; //@line 3924 "itertoolsmodule.c"
        var $145=$result; //@line 3925 "itertoolsmodule.c"
        var $146=($145)==0; //@line 3925 "itertoolsmodule.c"
        if ($146) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3925 "itertoolsmodule.c"
      case 21: // $bb21
        $0=0; //@line 3926 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3926 "itertoolsmodule.c"
      case 22: // $bb22
        $i=0; //@line 3927 "itertoolsmodule.c"
        __label__ = 34; break; //@line 3927 "itertoolsmodule.c"
      case 23: // $bb23
        var $147=$lz_addr; //@line 3928 "itertoolsmodule.c"
        var $148=$147+16; //@line 3928 "itertoolsmodule.c"
        var $149=HEAP[$148]; //@line 3928 "itertoolsmodule.c"
        var $150=$149; //@line 3928 "itertoolsmodule.c"
        var $151=$i; //@line 3928 "itertoolsmodule.c"
        var $152=$150+12; //@line 3928 "itertoolsmodule.c"
        var $153=$152+$151*4; //@line 3928 "itertoolsmodule.c"
        var $154=HEAP[$153]; //@line 3928 "itertoolsmodule.c"
        $it=$154; //@line 3928 "itertoolsmodule.c"
        var $155=$it; //@line 3929 "itertoolsmodule.c"
        var $156=($155)==0; //@line 3929 "itertoolsmodule.c"
        if ($156) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3929 "itertoolsmodule.c"
      case 24: // $bb24
        var $157=$lz_addr; //@line 3930 "itertoolsmodule.c"
        var $158=$157+24; //@line 3930 "itertoolsmodule.c"
        var $159=HEAP[$158]; //@line 3930 "itertoolsmodule.c"
        var $160=$159; //@line 3930 "itertoolsmodule.c"
        var $161=HEAP[$160]; //@line 3930 "itertoolsmodule.c"
        var $162=($161) + 1; //@line 3930 "itertoolsmodule.c"
        var $163=$159; //@line 3930 "itertoolsmodule.c"
        HEAP[$163]=$162; //@line 3930 "itertoolsmodule.c"
        var $164=$lz_addr; //@line 3931 "itertoolsmodule.c"
        var $165=$164+24; //@line 3931 "itertoolsmodule.c"
        var $166=HEAP[$165]; //@line 3931 "itertoolsmodule.c"
        $item=$166; //@line 3931 "itertoolsmodule.c"
        __label__ = 33; break; //@line 3931 "itertoolsmodule.c"
      case 25: // $bb25
        var $167=$it; //@line 3933 "itertoolsmodule.c"
        var $168=_PyIter_Next($167); //@line 3933 "itertoolsmodule.c"
        $item=$168; //@line 3933 "itertoolsmodule.c"
        var $169=$item; //@line 3934 "itertoolsmodule.c"
        var $170=($169)==0; //@line 3934 "itertoolsmodule.c"
        if ($170) { __label__ = 26; break; } else { __label__ = 33; break; } //@line 3934 "itertoolsmodule.c"
      case 26: // $bb26
        var $171=$lz_addr; //@line 3935 "itertoolsmodule.c"
        var $172=$171+12; //@line 3935 "itertoolsmodule.c"
        var $173=HEAP[$172]; //@line 3935 "itertoolsmodule.c"
        var $174=($173) - 1; //@line 3935 "itertoolsmodule.c"
        var $175=$lz_addr; //@line 3935 "itertoolsmodule.c"
        var $176=$175+12; //@line 3935 "itertoolsmodule.c"
        HEAP[$176]=$174; //@line 3935 "itertoolsmodule.c"
        var $177=$lz_addr; //@line 3936 "itertoolsmodule.c"
        var $178=$177+12; //@line 3936 "itertoolsmodule.c"
        var $179=HEAP[$178]; //@line 3936 "itertoolsmodule.c"
        var $180=($179)==0; //@line 3936 "itertoolsmodule.c"
        if ($180) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 3936 "itertoolsmodule.c"
      case 27: // $bb27
        var $181=_PyErr_Occurred(); //@line 3936 "itertoolsmodule.c"
        var $182=($181)!=0; //@line 3936 "itertoolsmodule.c"
        if ($182) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 3936 "itertoolsmodule.c"
      case 28: // $bb28
        var $183=$lz_addr; //@line 3937 "itertoolsmodule.c"
        var $184=$183+12; //@line 3937 "itertoolsmodule.c"
        HEAP[$184]=0; //@line 3937 "itertoolsmodule.c"
        var $185=$result; //@line 3938 "itertoolsmodule.c"
        var $186=$185; //@line 3938 "itertoolsmodule.c"
        var $187=HEAP[$186]; //@line 3938 "itertoolsmodule.c"
        var $188=($187) - 1; //@line 3938 "itertoolsmodule.c"
        var $189=$result; //@line 3938 "itertoolsmodule.c"
        var $190=$189; //@line 3938 "itertoolsmodule.c"
        HEAP[$190]=$188; //@line 3938 "itertoolsmodule.c"
        var $191=$result; //@line 3938 "itertoolsmodule.c"
        var $192=$191; //@line 3938 "itertoolsmodule.c"
        var $193=HEAP[$192]; //@line 3938 "itertoolsmodule.c"
        var $194=($193)==0; //@line 3938 "itertoolsmodule.c"
        if ($194) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 3938 "itertoolsmodule.c"
      case 29: // $bb29
        var $195=$result; //@line 3938 "itertoolsmodule.c"
        var $196=$195+4; //@line 3938 "itertoolsmodule.c"
        var $197=HEAP[$196]; //@line 3938 "itertoolsmodule.c"
        var $198=$197+24; //@line 3938 "itertoolsmodule.c"
        var $199=HEAP[$198]; //@line 3938 "itertoolsmodule.c"
        var $200=$result; //@line 3938 "itertoolsmodule.c"
        FUNCTION_TABLE[$199]($200); //@line 3938 "itertoolsmodule.c"
        __label__ = 30; break; //@line 3938 "itertoolsmodule.c"
      case 30: // $bb30
        $0=0; //@line 3939 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3939 "itertoolsmodule.c"
      case 31: // $bb31
        var $201=$lz_addr; //@line 3941 "itertoolsmodule.c"
        var $202=$201+24; //@line 3941 "itertoolsmodule.c"
        var $203=HEAP[$202]; //@line 3941 "itertoolsmodule.c"
        var $204=$203; //@line 3941 "itertoolsmodule.c"
        var $205=HEAP[$204]; //@line 3941 "itertoolsmodule.c"
        var $206=($205) + 1; //@line 3941 "itertoolsmodule.c"
        var $207=$203; //@line 3941 "itertoolsmodule.c"
        HEAP[$207]=$206; //@line 3941 "itertoolsmodule.c"
        var $208=$lz_addr; //@line 3942 "itertoolsmodule.c"
        var $209=$208+24; //@line 3942 "itertoolsmodule.c"
        var $210=HEAP[$209]; //@line 3942 "itertoolsmodule.c"
        $item=$210; //@line 3942 "itertoolsmodule.c"
        var $211=$lz_addr; //@line 3943 "itertoolsmodule.c"
        var $212=$211+16; //@line 3943 "itertoolsmodule.c"
        var $213=HEAP[$212]; //@line 3943 "itertoolsmodule.c"
        var $214=$213; //@line 3943 "itertoolsmodule.c"
        var $215=$i; //@line 3943 "itertoolsmodule.c"
        var $216=$214+12; //@line 3943 "itertoolsmodule.c"
        var $217=$216+$215*4; //@line 3943 "itertoolsmodule.c"
        HEAP[$217]=0; //@line 3943 "itertoolsmodule.c"
        var $218=$it; //@line 3944 "itertoolsmodule.c"
        var $219=$218; //@line 3944 "itertoolsmodule.c"
        var $220=HEAP[$219]; //@line 3944 "itertoolsmodule.c"
        var $221=($220) - 1; //@line 3944 "itertoolsmodule.c"
        var $222=$it; //@line 3944 "itertoolsmodule.c"
        var $223=$222; //@line 3944 "itertoolsmodule.c"
        HEAP[$223]=$221; //@line 3944 "itertoolsmodule.c"
        var $224=$it; //@line 3944 "itertoolsmodule.c"
        var $225=$224; //@line 3944 "itertoolsmodule.c"
        var $226=HEAP[$225]; //@line 3944 "itertoolsmodule.c"
        var $227=($226)==0; //@line 3944 "itertoolsmodule.c"
        if ($227) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 3944 "itertoolsmodule.c"
      case 32: // $bb32
        var $228=$it; //@line 3944 "itertoolsmodule.c"
        var $229=$228+4; //@line 3944 "itertoolsmodule.c"
        var $230=HEAP[$229]; //@line 3944 "itertoolsmodule.c"
        var $231=$230+24; //@line 3944 "itertoolsmodule.c"
        var $232=HEAP[$231]; //@line 3944 "itertoolsmodule.c"
        var $233=$it; //@line 3944 "itertoolsmodule.c"
        FUNCTION_TABLE[$232]($233); //@line 3944 "itertoolsmodule.c"
        __label__ = 33; break; //@line 3944 "itertoolsmodule.c"
      case 33: // $bb33
        var $234=$result; //@line 3948 "itertoolsmodule.c"
        var $235=$234; //@line 3948 "itertoolsmodule.c"
        var $236=$i; //@line 3948 "itertoolsmodule.c"
        var $237=$235+12; //@line 3948 "itertoolsmodule.c"
        var $238=$237+$236*4; //@line 3948 "itertoolsmodule.c"
        var $239=$item; //@line 3948 "itertoolsmodule.c"
        HEAP[$238]=$239; //@line 3948 "itertoolsmodule.c"
        var $240=$i; //@line 3927 "itertoolsmodule.c"
        var $241=($240) + 1; //@line 3927 "itertoolsmodule.c"
        $i=$241; //@line 3927 "itertoolsmodule.c"
        __label__ = 34; break; //@line 3927 "itertoolsmodule.c"
      case 34: // $bb34
        var $242=$i; //@line 3927 "itertoolsmodule.c"
        var $243=$tuplesize; //@line 3927 "itertoolsmodule.c"
        var $244=($242) < ($243); //@line 3927 "itertoolsmodule.c"
        if ($244) { __label__ = 23; break; } else { __label__ = 35; break; } //@line 3927 "itertoolsmodule.c"
      case 35: // $bb35
        var $245=$result; //@line 3951 "itertoolsmodule.c"
        $0=$245; //@line 3951 "itertoolsmodule.c"
        __label__ = 36; break; //@line 3951 "itertoolsmodule.c"
      case 36: // $bb36
        var $246=$0; //@line 3893 "itertoolsmodule.c"
        $retval=$246; //@line 3893 "itertoolsmodule.c"
        var $retval37=$retval; //@line 3893 "itertoolsmodule.c"
        ;
        return $retval37; //@line 3893 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inititertools() {
    var __stackBase__  = STACKTOP; STACKTOP += 80; _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $i;
        var $m;
        var $name;
        var $typelist=__stackBase__;
        var $typelist1=$typelist; //@line 4075 "itertoolsmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($typelist1, _C_280_12667, 80, 4, 0); //@line 4075 "itertoolsmodule.c"
        HEAP[_teedataobject_type+4]=_PyType_Type; //@line 4077 "itertoolsmodule.c"
        var $0=_Py_InitModule4(__str95, _module_methods, _module_doc, 0, 1013); //@line 4078 "itertoolsmodule.c"
        $m=$0; //@line 4078 "itertoolsmodule.c"
        var $1=$m; //@line 4079 "itertoolsmodule.c"
        var $2=($1)==0; //@line 4079 "itertoolsmodule.c"
        if ($2) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 4079 "itertoolsmodule.c"
      case 1: // $bb
        $i=0; //@line 4082 "itertoolsmodule.c"
        __label__ = 6; break; //@line 4082 "itertoolsmodule.c"
      case 2: // $bb2
        var $3=$i; //@line 4083 "itertoolsmodule.c"
        var $4=$typelist+$3*4; //@line 4083 "itertoolsmodule.c"
        var $5=HEAP[$4]; //@line 4083 "itertoolsmodule.c"
        var $6=_PyType_Ready($5); //@line 4083 "itertoolsmodule.c"
        var $7=($6) < 0; //@line 4083 "itertoolsmodule.c"
        if ($7) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 4083 "itertoolsmodule.c"
      case 3: // $bb3
        var $8=$i; //@line 4085 "itertoolsmodule.c"
        var $9=$typelist+$8*4; //@line 4085 "itertoolsmodule.c"
        var $10=HEAP[$9]; //@line 4085 "itertoolsmodule.c"
        var $11=$10+12; //@line 4085 "itertoolsmodule.c"
        var $12=HEAP[$11]; //@line 4085 "itertoolsmodule.c"
        var $13=_strchr($12, 46); //@line 4085 "itertoolsmodule.c"
        $name=$13; //@line 4085 "itertoolsmodule.c"
        var $14=$name; //@line 4086 "itertoolsmodule.c"
        var $15=($14)==0; //@line 4086 "itertoolsmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4086 "itertoolsmodule.c"
      case 4: // $bb4
        ___assert_fail(__str96, __str5, 4086, ___PRETTY_FUNCTION___12663); //@line 4086 "itertoolsmodule.c"
        throw "Reached an unreachable!" //@line 4086 "itertoolsmodule.c"
      case 5: // $bb5
        var $16=$i; //@line 4087 "itertoolsmodule.c"
        var $17=$typelist+$16*4; //@line 4087 "itertoolsmodule.c"
        var $18=HEAP[$17]; //@line 4087 "itertoolsmodule.c"
        var $19=$18; //@line 4087 "itertoolsmodule.c"
        var $20=$19; //@line 4087 "itertoolsmodule.c"
        var $21=HEAP[$20]; //@line 4087 "itertoolsmodule.c"
        var $22=($21) + 1; //@line 4087 "itertoolsmodule.c"
        var $23=$19; //@line 4087 "itertoolsmodule.c"
        HEAP[$23]=$22; //@line 4087 "itertoolsmodule.c"
        var $24=$i; //@line 4088 "itertoolsmodule.c"
        var $25=$typelist+$24*4; //@line 4088 "itertoolsmodule.c"
        var $26=HEAP[$25]; //@line 4088 "itertoolsmodule.c"
        var $27=$26; //@line 4088 "itertoolsmodule.c"
        var $28=$name; //@line 4088 "itertoolsmodule.c"
        var $29=$28+1; //@line 4088 "itertoolsmodule.c"
        var $30=$m; //@line 4088 "itertoolsmodule.c"
        var $31=_PyModule_AddObject($30, $29, $27); //@line 4088 "itertoolsmodule.c"
        var $32=$i; //@line 4082 "itertoolsmodule.c"
        var $33=($32) + 1; //@line 4082 "itertoolsmodule.c"
        $i=$33; //@line 4082 "itertoolsmodule.c"
        __label__ = 6; break; //@line 4082 "itertoolsmodule.c"
      case 6: // $bb6
        var $34=$i; //@line 4082 "itertoolsmodule.c"
        var $35=$typelist+$34*4; //@line 4082 "itertoolsmodule.c"
        var $36=HEAP[$35]; //@line 4082 "itertoolsmodule.c"
        var $37=($36)!=0; //@line 4082 "itertoolsmodule.c"
        if ($37) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 4082 "itertoolsmodule.c"
      case 7: // $bb7
        var $38=_PyType_Ready(_teedataobject_type); //@line 4091 "itertoolsmodule.c"
        var $39=($38) < 0; //@line 4091 "itertoolsmodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 4091 "itertoolsmodule.c"
      case 8: // $bb8
        var $40=_PyType_Ready(_tee_type); //@line 4093 "itertoolsmodule.c"
        var $41=($40) < 0; //@line 4093 "itertoolsmodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 4093 "itertoolsmodule.c"
      case 9: // $bb9
        var $42=_PyType_Ready(__grouper_type); //@line 4095 "itertoolsmodule.c"
        __label__ = 10; break; //@line 4095 "itertoolsmodule.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 4080 "itertoolsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_inititertools"] = _inititertools;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_groupby_dealloc,0,_PyObject_GenericGetAttr,0,_groupby_traverse,0,_PyObject_SelfIter,0,_groupby_next,0,_groupby_new,0,_PyObject_GC_Del,0,__grouper_dealloc,0,__grouper_traverse,0,__grouper_next,0,_teedataobject_dealloc,0,_teedataobject_traverse,0,_teedataobject_clear,0,_tee_copy,0,_tee_dealloc,0,_tee_traverse,0,_tee_clear,0,_tee_next,0,_tee_new,0,_cycle_dealloc,0,_cycle_traverse,0,_cycle_next,0,_cycle_new,0,_dropwhile_dealloc,0,_dropwhile_traverse,0,_dropwhile_next,0,_dropwhile_new,0,_takewhile_dealloc,0,_takewhile_traverse,0,_takewhile_next,0,_takewhile_new,0,_islice_dealloc,0,_islice_traverse,0,_islice_next,0,_islice_new,0,_starmap_dealloc,0,_starmap_traverse,0,_starmap_next,0,_starmap_new,0,_imap_dealloc,0,_imap_traverse,0,_imap_next,0,_imap_new,0,_chain_new_from_iterable,0,_chain_dealloc,0,_chain_traverse,0,_chain_next,0,_chain_new,0,_product_dealloc,0,_product_traverse,0,_product_next,0,_product_new,0,_combinations_dealloc,0,_combinations_traverse,0,_combinations_next,0,_combinations_new,0,_cwr_dealloc,0,_cwr_traverse,0,_cwr_next,0,_cwr_new,0,_permutations_dealloc,0,_permutations_traverse,0,_permutations_next,0,_permutations_new,0,_compress_dealloc,0,_compress_traverse,0,_compress_next,0,_compress_new,0,_ifilter_dealloc,0,_ifilter_traverse,0,_ifilter_next,0,_ifilter_new,0,_ifilterfalse_dealloc,0,_ifilterfalse_traverse,0,_ifilterfalse_next,0,_ifilterfalse_new,0,_count_reduce,0,_count_dealloc,0,_count_repr,0,_count_traverse,0,_count_next,0,_count_new,0,_izip_dealloc,0,_izip_traverse,0,_izip_next,0,_izip_new,0,_repeat_len,0,_repeat_dealloc,0,_repeat_repr,0,_repeat_traverse,0,_repeat_next,0,_repeat_new,0,_izip_longest_dealloc,0,_izip_longest_traverse,0,_izip_longest_next,0,_izip_longest_new,0,_tee,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([79,124,79,58,103,114,111,117,112,98,121,0] /* O|O:groupby\00 */, "i8", ALLOC_NORMAL);
_kwargs_8351=allocate(12, "i8*", ALLOC_NORMAL);
__str1=allocate([105,116,101,114,97,98,108,101,0] /* iterable\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([107,101,121,0] /* key\00 */, "i8", ALLOC_NORMAL);
_groupby_doc=allocate([103,114,111,117,112,98,121,40,105,116,101,114,97,98,108,101,91,44,32,107,101,121,102,117,110,99,93,41,32,45,62,32,99,114,101,97,116,101,32,97,110,32,105,116,101,114,97,116,111,114,32,119,104,105,99,104,32,114,101,116,117,114,110,115,10,40,107,101,121,44,32,115,117,98,45,105,116,101,114,97,116,111,114,41,32,103,114,111,117,112,101,100,32,98,121,32,101,97,99,104,32,118,97,108,117,101,32,111,102,32,107,101,121,40,118,97,108,117,101,41,46,10,0] /* groupby(iterable[, k */, "i8", ALLOC_NORMAL);
__str3=allocate([105,116,101,114,116,111,111,108,115,46,103,114,111,117,112,98,121,0] /* itertools.groupby\00 */, "i8", ALLOC_NORMAL);
_groupby_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str4=allocate([103,98,111,45,62,99,117,114,114,107,101,121,32,61,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* gbo->currkey == ((vo */, "i8", ALLOC_NORMAL);
__str5=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,105,116,101,114,116,111,111,108,115,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/i */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8669=allocate([95,103,114,111,117,112,101,114,95,110,101,120,116,0] /* _grouper_next\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([103,98,111,45,62,99,117,114,114,107,101,121,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* gbo->currkey != ((vo */, "i8", ALLOC_NORMAL);
__str7=allocate([105,116,101,114,116,111,111,108,115,46,95,103,114,111,117,112,101,114,0] /* itertools._grouper\0 */, "i8", ALLOC_NORMAL);
__grouper_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str8=allocate([105,32,60,32,53,55,0] /* i < 57\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8768=allocate([116,101,101,100,97,116,97,111,98,106,101,99,116,95,103,101,116,105,116,101,109,0] /* teedataobject_getite */, "i8", ALLOC_NORMAL);
__str9=allocate([105,32,61,61,32,116,100,111,45,62,110,117,109,114,101,97,100,0] /* i == tdo->numread\00 */, "i8", ALLOC_NORMAL);
_teedataobject_doc=allocate([68,97,116,97,32,99,111,110,116,97,105,110,101,114,32,99,111,109,109,111,110,32,116,111,32,109,117,108,116,105,112,108,101,32,116,101,101,32,111,98,106,101,99,116,115,46,0] /* Data container commo */, "i8", ALLOC_NORMAL);
__str10=allocate([105,116,101,114,116,111,111,108,115,46,116,101,101,95,100,97,116,97,111,98,106,101,99,116,0] /* itertools.tee_dataob */, "i8", ALLOC_NORMAL);
_teedataobject_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_teecopy_doc=allocate([82,101,116,117,114,110,115,32,97,110,32,105,110,100,101,112,101,110,100,101,110,116,32,105,116,101,114,97,116,111,114,46,0] /* Returns an independe */, "i8", ALLOC_NORMAL);
__str11=allocate([116,101,101,0] /* tee\00 */, "i8", ALLOC_NORMAL);
_teeobject_doc=allocate([73,116,101,114,97,116,111,114,32,119,114,97,112,112,101,100,32,116,111,32,109,97,107,101,32,105,116,32,99,111,112,121,97,98,108,101,0] /* Iterator wrapped to  */, "i8", ALLOC_NORMAL);
__str12=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
_tee_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([105,116,101,114,116,111,111,108,115,46,116,101,101,0] /* itertools.tee\00 */, "i8", ALLOC_NORMAL);
_tee_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str14=allocate([79,124,110,0] /* O|n\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([110,32,109,117,115,116,32,98,101,32,62,61,32,48,0] /* n must be >= 0\00 */, "i8", ALLOC_NORMAL);
_tee_doc=allocate([116,101,101,40,105,116,101,114,97,98,108,101,44,32,110,61,50,41,32,45,45,62,32,116,117,112,108,101,32,111,102,32,110,32,105,110,100,101,112,101,110,100,101,110,116,32,105,116,101,114,97,116,111,114,115,46,0] /* tee(iterable, n=2) - */, "i8", ALLOC_NORMAL);
__str16=allocate([99,121,99,108,101,40,41,0] /* cycle()\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([99,121,99,108,101,0] /* cycle\00 */, "i8", ALLOC_NORMAL);
_cycle_doc=allocate([99,121,99,108,101,40,105,116,101,114,97,98,108,101,41,32,45,45,62,32,99,121,99,108,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,32,117,110,116,105,108,32,105,116,32,105,115,32,101,120,104,97,117,115,116,101,100,46,10,84,104,101,110,32,114,101,112,101,97,116,32,116,104,101,32,115,101,113,117,101,110,99,101,32,105,110,100,101,102,105,110,105,116,101,108,121,46,0] /* cycle(iterable) -->  */, "i8", ALLOC_NORMAL);
__str18=allocate([105,116,101,114,116,111,111,108,115,46,99,121,99,108,101,0] /* itertools.cycle\00 */, "i8", ALLOC_NORMAL);
_cycle_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str19=allocate([100,114,111,112,119,104,105,108,101,40,41,0] /* dropwhile()\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([100,114,111,112,119,104,105,108,101,0] /* dropwhile\00 */, "i8", ALLOC_NORMAL);
_dropwhile_doc=allocate([100,114,111,112,119,104,105,108,101,40,112,114,101,100,105,99,97,116,101,44,32,105,116,101,114,97,98,108,101,41,32,45,45,62,32,100,114,111,112,119,104,105,108,101,32,111,98,106,101,99,116,10,10,68,114,111,112,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,32,119,104,105,108,101,32,112,114,101,100,105,99,97,116,101,40,105,116,101,109,41,32,105,115,32,116,114,117,101,46,10,65,102,116,101,114,119,97,114,100,115,44,32,114,101,116,117,114,110,32,101,118,101,114,121,32,101,108,101,109,101,110,116,32,117,110,116,105,108,32,116,104,101,32,105,116,101,114,97,98,108,101,32,105,115,32,101,120,104,97,117,115,116,101,100,46,0] /* dropwhile(predicate, */, "i8", ALLOC_NORMAL);
__str21=allocate([105,116,101,114,116,111,111,108,115,46,100,114,111,112,119,104,105,108,101,0] /* itertools.dropwhile\ */, "i8", ALLOC_NORMAL);
_dropwhile_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str22=allocate([116,97,107,101,119,104,105,108,101,40,41,0] /* takewhile()\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([116,97,107,101,119,104,105,108,101,0] /* takewhile\00 */, "i8", ALLOC_NORMAL);
_takewhile_doc=allocate([116,97,107,101,119,104,105,108,101,40,112,114,101,100,105,99,97,116,101,44,32,105,116,101,114,97,98,108,101,41,32,45,45,62,32,116,97,107,101,119,104,105,108,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,115,117,99,99,101,115,115,105,118,101,32,101,110,116,114,105,101,115,32,102,114,111,109,32,97,110,32,105,116,101,114,97,98,108,101,32,97,115,32,108,111,110,103,32,97,115,32,116,104,101,32,10,112,114,101,100,105,99,97,116,101,32,101,118,97,108,117,97,116,101,115,32,116,111,32,116,114,117,101,32,102,111,114,32,101,97,99,104,32,101,110,116,114,121,46,0] /* takewhile(predicate, */, "i8", ALLOC_NORMAL);
__str24=allocate([105,116,101,114,116,111,111,108,115,46,116,97,107,101,119,104,105,108,101,0] /* itertools.takewhile\ */, "i8", ALLOC_NORMAL);
_takewhile_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str25=allocate([105,115,108,105,99,101,40,41,0] /* islice()\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([105,115,108,105,99,101,0] /* islice\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([83,116,111,112,32,97,114,103,117,109,101,110,116,32,102,111,114,32,105,115,108,105,99,101,40,41,32,109,117,115,116,32,98,101,32,78,111,110,101,32,111,114,32,97,110,32,105,110,116,101,103,101,114,58,32,48,32,60,61,32,120,32,60,61,32,109,97,120,105,110,116,46,0] /* Stop argument for is */, "i8", ALLOC_NORMAL);
__str28=allocate([73,110,100,105,99,101,115,32,102,111,114,32,105,115,108,105,99,101,40,41,32,109,117,115,116,32,98,101,32,78,111,110,101,32,111,114,32,97,110,32,105,110,116,101,103,101,114,58,32,48,32,60,61,32,120,32,60,61,32,109,97,120,105,110,116,46,0] /* Indices for islice() */, "i8", ALLOC_NORMAL);
__str29=allocate([83,116,101,112,32,102,111,114,32,105,115,108,105,99,101,40,41,32,109,117,115,116,32,98,101,32,97,32,112,111,115,105,116,105,118,101,32,105,110,116,101,103,101,114,32,111,114,32,78,111,110,101,46,0] /* Step for islice() mu */, "i8", ALLOC_NORMAL);
_islice_doc=allocate([105,115,108,105,99,101,40,105,116,101,114,97,98,108,101,44,32,91,115,116,97,114,116,44,93,32,115,116,111,112,32,91,44,32,115,116,101,112,93,41,32,45,45,62,32,105,115,108,105,99,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,110,32,105,116,101,114,97,116,111,114,32,119,104,111,115,101,32,110,101,120,116,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,115,101,108,101,99,116,101,100,32,118,97,108,117,101,115,32,102,114,111,109,32,97,110,10,105,116,101,114,97,98,108,101,46,32,32,73,102,32,115,116,97,114,116,32,105,115,32,115,112,101,99,105,102,105,101,100,44,32,119,105,108,108,32,115,107,105,112,32,97,108,108,32,112,114,101,99,101,100,105,110,103,32,101,108,101,109,101,110,116,115,59,10,111,116,104,101,114,119,105,115,101,44,32,115,116,97,114,116,32,100,101,102,97,117,108,116,115,32,116,111,32,122,101,114,111,46,32,32,83,116,101,112,32,100,101,102,97,117,108,116,115,32,116,111,32,111,110,101,46,32,32,73,102,10,115,112,101,99,105,102,105,101,100,32,97,115,32,97,110,111,116,104,101,114,32,118,97,108,117,101,44,32,115,116,101,112,32,100,101,116,101,114,109,105,110,101,115,32,104,111,119,32,109,97,110,121,32,118,97,108,117,101,115,32,97,114,101,32,10,115,107,105,112,112,101,100,32,98,101,116,119,101,101,110,32,115,117,99,99,101,115,115,105,118,101,32,99,97,108,108,115,46,32,32,87,111,114,107,115,32,108,105,107,101,32,97,32,115,108,105,99,101,40,41,32,111,110,32,97,32,108,105,115,116,10,98,117,116,32,114,101,116,117,114,110,115,32,97,110,32,105,116,101,114,97,116,111,114,46,0] /* islice(iterable, [st */, "i8", ALLOC_NORMAL);
__str30=allocate([105,116,101,114,116,111,111,108,115,46,105,115,108,105,99,101,0] /* itertools.islice\00 */, "i8", ALLOC_NORMAL);
_islice_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([115,116,97,114,109,97,112,40,41,0] /* starmap()\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([115,116,97,114,109,97,112,0] /* starmap\00 */, "i8", ALLOC_NORMAL);
_starmap_doc=allocate([115,116,97,114,109,97,112,40,102,117,110,99,116,105,111,110,44,32,115,101,113,117,101,110,99,101,41,32,45,45,62,32,115,116,97,114,109,97,112,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,110,32,105,116,101,114,97,116,111,114,32,119,104,111,115,101,32,118,97,108,117,101,115,32,97,114,101,32,114,101,116,117,114,110,101,100,32,102,114,111,109,32,116,104,101,32,102,117,110,99,116,105,111,110,32,101,118,97,108,117,97,116,101,100,10,119,105,116,104,32,97,32,97,114,103,117,109,101,110,116,32,116,117,112,108,101,32,116,97,107,101,110,32,102,114,111,109,32,116,104,101,32,103,105,118,101,110,32,115,101,113,117,101,110,99,101,46,0] /* starmap(function, se */, "i8", ALLOC_NORMAL);
__str33=allocate([105,116,101,114,116,111,111,108,115,46,115,116,97,114,109,97,112,0] /* itertools.starmap\00 */, "i8", ALLOC_NORMAL);
_starmap_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str34=allocate([105,109,97,112,40,41,0] /* imap()\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,109,97,112,40,41,32,109,117,115,116,32,104,97,118,101,32,97,116,32,108,101,97,115,116,32,116,119,111,32,97,114,103,117,109,101,110,116,115,46,0] /* imap() must have at  */, "i8", ALLOC_NORMAL);
_imap_doc=allocate([105,109,97,112,40,102,117,110,99,44,32,42,105,116,101,114,97,98,108,101,115,41,32,45,45,62,32,105,109,97,112,32,111,98,106,101,99,116,10,10,77,97,107,101,32,97,110,32,105,116,101,114,97,116,111,114,32,116,104,97,116,32,99,111,109,112,117,116,101,115,32,116,104,101,32,102,117,110,99,116,105,111,110,32,117,115,105,110,103,32,97,114,103,117,109,101,110,116,115,32,102,114,111,109,10,101,97,99,104,32,111,102,32,116,104,101,32,105,116,101,114,97,98,108,101,115,46,32,32,76,105,107,101,32,109,97,112,40,41,32,101,120,99,101,112,116,32,116,104,97,116,32,105,116,32,114,101,116,117,114,110,115,10,97,110,32,105,116,101,114,97,116,111,114,32,105,110,115,116,101,97,100,32,111,102,32,97,32,108,105,115,116,32,97,110,100,32,116,104,97,116,32,105,116,32,115,116,111,112,115,32,119,104,101,110,32,116,104,101,32,115,104,111,114,116,101,115,116,10,105,116,101,114,97,98,108,101,32,105,115,32,101,120,104,97,117,115,116,101,100,32,105,110,115,116,101,97,100,32,111,102,32,102,105,108,108,105,110,103,32,105,110,32,78,111,110,101,32,102,111,114,32,115,104,111,114,116,101,114,10,105,116,101,114,97,98,108,101,115,46,0] /* imap(func, _iterable */, "i8", ALLOC_NORMAL);
__str36=allocate([105,116,101,114,116,111,111,108,115,46,105,109,97,112,0] /* itertools.imap\00 */, "i8", ALLOC_NORMAL);
_imap_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str37=allocate([99,104,97,105,110,40,41,0] /* chain()\00 */, "i8", ALLOC_NORMAL);
_chain_doc=allocate([99,104,97,105,110,40,42,105,116,101,114,97,98,108,101,115,41,32,45,45,62,32,99,104,97,105,110,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,99,104,97,105,110,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,10,102,105,114,115,116,32,105,116,101,114,97,98,108,101,32,117,110,116,105,108,32,105,116,32,105,115,32,101,120,104,97,117,115,116,101,100,44,32,116,104,101,110,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,110,101,120,116,10,105,116,101,114,97,98,108,101,44,32,117,110,116,105,108,32,97,108,108,32,111,102,32,116,104,101,32,105,116,101,114,97,98,108,101,115,32,97,114,101,32,101,120,104,97,117,115,116,101,100,46,0] /* chain(_iterables) -- */, "i8", ALLOC_NORMAL);
_chain_from_iterable_doc=allocate([99,104,97,105,110,46,102,114,111,109,95,105,116,101,114,97,98,108,101,40,105,116,101,114,97,98,108,101,41,32,45,45,62,32,99,104,97,105,110,32,111,98,106,101,99,116,10,10,65,108,116,101,114,110,97,116,101,32,99,104,97,105,110,40,41,32,99,111,110,116,114,117,99,116,111,114,32,116,97,107,105,110,103,32,97,32,115,105,110,103,108,101,32,105,116,101,114,97,98,108,101,32,97,114,103,117,109,101,110,116,10,116,104,97,116,32,101,118,97,108,117,97,116,101,115,32,108,97,122,105,108,121,46,0] /* chain.from_iterable( */, "i8", ALLOC_NORMAL);
__str38=allocate([102,114,111,109,95,105,116,101,114,97,98,108,101,0] /* from_iterable\00 */, "i8", ALLOC_NORMAL);
_chain_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str39=allocate([105,116,101,114,116,111,111,108,115,46,99,104,97,105,110,0] /* itertools.chain\00 */, "i8", ALLOC_NORMAL);
_chain_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str40=allocate([114,101,112,101,97,116,0] /* repeat\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([124,110,58,112,114,111,100,117,99,116,0] /* |n:product\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([114,101,112,101,97,116,32,97,114,103,117,109,101,110,116,32,99,97,110,110,111,116,32,98,101,32,110,101,103,97,116,105,118,101,0] /* repeat argument cann */, "i8", ALLOC_NORMAL);
__str43=allocate([40,40,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,114,103,115,41,41,45,62,111,98,95,116,121,112,101,41,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,54,41,41,41,32,33,61,32,48,41,0] /* ((((((PyObject_)(arg */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10265=allocate([112,114,111,100,117,99,116,95,110,101,119,0] /* product_new\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([110,112,111,111,108,115,61,61,48,32,124,124,32,40,40,40,80,121,79,98,106,101,99,116,42,41,40,114,101,115,117,108,116,41,41,45,62,111,98,95,114,101,102,99,110,116,41,32,61,61,32,49,0] /* npools==0 || (((PyOb */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10428=allocate([112,114,111,100,117,99,116,95,110,101,120,116,0] /* product_next\00 */, "i8", ALLOC_NORMAL);
_product_doc=allocate([112,114,111,100,117,99,116,40,42,105,116,101,114,97,98,108,101,115,41,32,45,45,62,32,112,114,111,100,117,99,116,32,111,98,106,101,99,116,10,10,67,97,114,116,101,115,105,97,110,32,112,114,111,100,117,99,116,32,111,102,32,105,110,112,117,116,32,105,116,101,114,97,98,108,101,115,46,32,32,69,113,117,105,118,97,108,101,110,116,32,116,111,32,110,101,115,116,101,100,32,102,111,114,45,108,111,111,112,115,46,10,10,70,111,114,32,101,120,97,109,112,108,101,44,32,112,114,111,100,117,99,116,40,65,44,32,66,41,32,114,101,116,117,114,110,115,32,116,104,101,32,115,97,109,101,32,97,115,58,32,32,40,40,120,44,121,41,32,102,111,114,32,120,32,105,110,32,65,32,102,111,114,32,121,32,105,110,32,66,41,46,10,84,104,101,32,108,101,102,116,109,111,115,116,32,105,116,101,114,97,116,111,114,115,32,97,114,101,32,105,110,32,116,104,101,32,111,117,116,101,114,109,111,115,116,32,102,111,114,45,108,111,111,112,44,32,115,111,32,116,104,101,32,111,117,116,112,117,116,32,116,117,112,108,101,115,10,99,121,99,108,101,32,105,110,32,97,32,109,97,110,110,101,114,32,115,105,109,105,108,97,114,32,116,111,32,97,110,32,111,100,111,109,101,116,101,114,32,40,119,105,116,104,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,101,108,101,109,101,110,116,32,99,104,97,110,103,105,110,103,10,111,110,32,101,118,101,114,121,32,105,116,101,114,97,116,105,111,110,41,46,10,10,84,111,32,99,111,109,112,117,116,101,32,116,104,101,32,112,114,111,100,117,99,116,32,111,102,32,97,110,32,105,116,101,114,97,98,108,101,32,119,105,116,104,32,105,116,115,101,108,102,44,32,115,112,101,99,105,102,121,32,116,104,101,32,110,117,109,98,101,114,10,111,102,32,114,101,112,101,116,105,116,105,111,110,115,32,119,105,116,104,32,116,104,101,32,111,112,116,105,111,110,97,108,32,114,101,112,101,97,116,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,46,32,70,111,114,32,101,120,97,109,112,108,101,44,10,112,114,111,100,117,99,116,40,65,44,32,114,101,112,101,97,116,61,52,41,32,109,101,97,110,115,32,116,104,101,32,115,97,109,101,32,97,115,32,112,114,111,100,117,99,116,40,65,44,32,65,44,32,65,44,32,65,41,46,10,10,112,114,111,100,117,99,116,40,39,97,98,39,44,32,114,97,110,103,101,40,51,41,41,32,45,45,62,32,40,39,97,39,44,48,41,32,40,39,97,39,44,49,41,32,40,39,97,39,44,50,41,32,40,39,98,39,44,48,41,32,40,39,98,39,44,49,41,32,40,39,98,39,44,50,41,10,112,114,111,100,117,99,116,40,40,48,44,49,41,44,32,40,48,44,49,41,44,32,40,48,44,49,41,41,32,45,45,62,32,40,48,44,48,44,48,41,32,40,48,44,48,44,49,41,32,40,48,44,49,44,48,41,32,40,48,44,49,44,49,41,32,40,49,44,48,44,48,41,32,46,46,46,0] /* product(_iterables)  */, "i8", ALLOC_NORMAL);
__str45=allocate([105,116,101,114,116,111,111,108,115,46,112,114,111,100,117,99,116,0] /* itertools.product\00 */, "i8", ALLOC_NORMAL);
_product_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str46=allocate([79,110,58,99,111,109,98,105,110,97,116,105,111,110,115,0] /* On:combinations\00 */, "i8", ALLOC_NORMAL);
_kwargs_10542=allocate(12, "i8*", ALLOC_NORMAL);
__str47=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([114,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0] /* r must be non-negati */, "i8", ALLOC_NORMAL);
__str49=allocate([114,32,61,61,32,48,32,124,124,32,40,40,40,80,121,79,98,106,101,99,116,42,41,40,114,101,115,117,108,116,41,41,45,62,111,98,95,114,101,102,99,110,116,41,32,61,61,32,49,0] /* r == 0 || (((PyObjec */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10664=allocate([99,111,109,98,105,110,97,116,105,111,110,115,95,110,101,120,116,0] /* combinations_next\00 */, "i8", ALLOC_NORMAL);
_combinations_doc=allocate([99,111,109,98,105,110,97,116,105,111,110,115,40,105,116,101,114,97,98,108,101,44,32,114,41,32,45,45,62,32,99,111,109,98,105,110,97,116,105,111,110,115,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,115,117,99,99,101,115,115,105,118,101,32,114,45,108,101,110,103,116,104,32,99,111,109,98,105,110,97,116,105,111,110,115,32,111,102,32,101,108,101,109,101,110,116,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,10,99,111,109,98,105,110,97,116,105,111,110,115,40,114,97,110,103,101,40,52,41,44,32,51,41,32,45,45,62,32,40,48,44,49,44,50,41,44,32,40,48,44,49,44,51,41,44,32,40,48,44,50,44,51,41,44,32,40,49,44,50,44,51,41,0] /* combinations(iterabl */, "i8", ALLOC_NORMAL);
__str50=allocate([105,116,101,114,116,111,111,108,115,46,99,111,109,98,105,110,97,116,105,111,110,115,0] /* itertools.combinatio */, "i8", ALLOC_NORMAL);
_combinations_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([79,110,58,99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,0] /* On:combinations_with */, "i8", ALLOC_NORMAL);
_kwargs_10765=allocate(12, "i8*", ALLOC_NORMAL);
___PRETTY_FUNCTION___10891=allocate([99,119,114,95,110,101,120,116,0] /* cwr_next\00 */, "i8", ALLOC_NORMAL);
_cwr_doc=allocate([99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,40,105,116,101,114,97,98,108,101,44,32,114,41,32,45,45,62,32,99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,115,117,99,99,101,115,115,105,118,101,32,114,45,108,101,110,103,116,104,32,99,111,109,98,105,110,97,116,105,111,110,115,32,111,102,32,101,108,101,109,101,110,116,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,10,97,108,108,111,119,105,110,103,32,105,110,100,105,118,105,100,117,97,108,32,101,108,101,109,101,110,116,115,32,116,111,32,104,97,118,101,32,115,117,99,99,101,115,115,105,118,101,32,114,101,112,101,97,116,115,46,10,99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,40,39,65,66,67,39,44,32,50,41,32,45,45,62,32,65,65,32,65,66,32,65,67,32,66,66,32,66,67,32,67,67,0] /* combinations_with_re */, "i8", ALLOC_NORMAL);
__str52=allocate([105,116,101,114,116,111,111,108,115,46,99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,0] /* itertools.combinatio */, "i8", ALLOC_NORMAL);
_cwr_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str53=allocate([79,124,79,58,112,101,114,109,117,116,97,116,105,111,110,115,0] /* O|O:permutations\00 */, "i8", ALLOC_NORMAL);
_kwargs_10993=allocate(12, "i8*", ALLOC_NORMAL);
___PRETTY_FUNCTION___11129=allocate([112,101,114,109,117,116,97,116,105,111,110,115,95,110,101,120,116,0] /* permutations_next\00 */, "i8", ALLOC_NORMAL);
_permutations_doc=allocate([112,101,114,109,117,116,97,116,105,111,110,115,40,105,116,101,114,97,98,108,101,91,44,32,114,93,41,32,45,45,62,32,112,101,114,109,117,116,97,116,105,111,110,115,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,115,117,99,99,101,115,115,105,118,101,32,114,45,108,101,110,103,116,104,32,112,101,114,109,117,116,97,116,105,111,110,115,32,111,102,32,101,108,101,109,101,110,116,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,10,112,101,114,109,117,116,97,116,105,111,110,115,40,114,97,110,103,101,40,51,41,44,32,50,41,32,45,45,62,32,40,48,44,49,41,44,32,40,48,44,50,41,44,32,40,49,44,48,41,44,32,40,49,44,50,41,44,32,40,50,44,48,41,44,32,40,50,44,49,41,0] /* permutations(iterabl */, "i8", ALLOC_NORMAL);
__str54=allocate([105,116,101,114,116,111,111,108,115,46,112,101,114,109,117,116,97,116,105,111,110,115,0] /* itertools.permutatio */, "i8", ALLOC_NORMAL);
_permutations_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str55=allocate([79,79,58,99,111,109,112,114,101,115,115,0] /* OO:compress\00 */, "i8", ALLOC_NORMAL);
_kwargs_11231=allocate(12, "i8*", ALLOC_NORMAL);
__str56=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([115,101,108,101,99,116,111,114,115,0] /* selectors\00 */, "i8", ALLOC_NORMAL);
_compress_doc=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,44,32,115,101,108,101,99,116,111,114,115,41,32,45,45,62,32,105,116,101,114,97,116,111,114,32,111,118,101,114,32,115,101,108,101,99,116,101,100,32,100,97,116,97,10,10,82,101,116,117,114,110,32,100,97,116,97,32,101,108,101,109,101,110,116,115,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,116,114,117,101,32,115,101,108,101,99,116,111,114,32,101,108,101,109,101,110,116,115,46,10,70,111,114,109,115,32,97,32,115,104,111,114,116,101,114,32,105,116,101,114,97,116,111,114,32,102,114,111,109,32,115,101,108,101,99,116,101,100,32,100,97,116,97,32,101,108,101,109,101,110,116,115,32,117,115,105,110,103,32,116,104,101,10,115,101,108,101,99,116,111,114,115,32,116,111,32,99,104,111,111,115,101,32,116,104,101,32,100,97,116,97,32,101,108,101,109,101,110,116,115,46,0] /* compress(data, selec */, "i8", ALLOC_NORMAL);
__str58=allocate([105,116,101,114,116,111,111,108,115,46,99,111,109,112,114,101,115,115,0] /* itertools.compress\0 */, "i8", ALLOC_NORMAL);
_compress_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str59=allocate([105,102,105,108,116,101,114,40,41,0] /* ifilter()\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([105,102,105,108,116,101,114,0] /* ifilter\00 */, "i8", ALLOC_NORMAL);
_ifilter_doc=allocate([105,102,105,108,116,101,114,40,102,117,110,99,116,105,111,110,32,111,114,32,78,111,110,101,44,32,115,101,113,117,101,110,99,101,41,32,45,45,62,32,105,102,105,108,116,101,114,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,116,104,111,115,101,32,105,116,101,109,115,32,111,102,32,115,101,113,117,101,110,99,101,32,102,111,114,32,119,104,105,99,104,32,102,117,110,99,116,105,111,110,40,105,116,101,109,41,32,105,115,32,116,114,117,101,46,10,73,102,32,102,117,110,99,116,105,111,110,32,105,115,32,78,111,110,101,44,32,114,101,116,117,114,110,32,116,104,101,32,105,116,101,109,115,32,116,104,97,116,32,97,114,101,32,116,114,117,101,46,0] /* ifilter(function or  */, "i8", ALLOC_NORMAL);
__str61=allocate([105,116,101,114,116,111,111,108,115,46,105,102,105,108,116,101,114,0] /* itertools.ifilter\00 */, "i8", ALLOC_NORMAL);
_ifilter_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str62=allocate([105,102,105,108,116,101,114,102,97,108,115,101,40,41,0] /* ifilterfalse()\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([105,102,105,108,116,101,114,102,97,108,115,101,0] /* ifilterfalse\00 */, "i8", ALLOC_NORMAL);
_ifilterfalse_doc=allocate([105,102,105,108,116,101,114,102,97,108,115,101,40,102,117,110,99,116,105,111,110,32,111,114,32,78,111,110,101,44,32,115,101,113,117,101,110,99,101,41,32,45,45,62,32,105,102,105,108,116,101,114,102,97,108,115,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,116,104,111,115,101,32,105,116,101,109,115,32,111,102,32,115,101,113,117,101,110,99,101,32,102,111,114,32,119,104,105,99,104,32,102,117,110,99,116,105,111,110,40,105,116,101,109,41,32,105,115,32,102,97,108,115,101,46,10,73,102,32,102,117,110,99,116,105,111,110,32,105,115,32,78,111,110,101,44,32,114,101,116,117,114,110,32,116,104,101,32,105,116,101,109,115,32,116,104,97,116,32,97,114,101,32,102,97,108,115,101,46,0] /* ifilterfalse(functio */, "i8", ALLOC_NORMAL);
__str64=allocate([105,116,101,114,116,111,111,108,115,46,105,102,105,108,116,101,114,102,97,108,115,101,0] /* itertools.ifilterfal */, "i8", ALLOC_NORMAL);
_ifilterfalse_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str65=allocate([124,79,79,58,99,111,117,110,116,0] /* |OO:count\00 */, "i8", ALLOC_NORMAL);
_kwlist_11697=allocate(12, "i8*", ALLOC_NORMAL);
__str66=allocate([115,116,97,114,116,0] /* start\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([115,116,101,112,0] /* step\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([97,32,110,117,109,98,101,114,32,105,115,32,114,101,113,117,105,114,101,100,0] /* a number is required */, "i8", ALLOC_NORMAL);
__str69=allocate([108,111,110,103,95,99,110,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,32,38,38,32,108,111,110,103,95,115,116,101,112,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* long_cnt != ((void _ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11698=allocate([99,111,117,110,116,95,110,101,119,0] /* count_new\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([40,99,110,116,32,33,61,32,40,40,80,121,95,115,115,105,122,101,95,116,41,40,40,40,115,105,122,101,95,116,41,45,49,41,62,62,49,41,41,32,38,38,32,108,111,110,103,95,99,110,116,32,61,61,32,40,40,118,111,105,100,32,42,41,48,41,32,38,38,32,33,115,108,111,119,95,109,111,100,101,41,32,124,124,32,40,99,110,116,32,61,61,32,40,40,80,121,95,115,115,105,122,101,95,116,41,40,40,40,115,105,122,101,95,116,41,45,49,41,62,62,49,41,41,32,38,38,32,108,111,110,103,95,99,110,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,32,38,38,32,115,108,111,119,95,109,111,100,101,41,0] /* (cnt != ((Py_ssize_t */, "i8", ALLOC_NORMAL);
__str71=allocate([115,108,111,119,95,109,111,100,101,32,124,124,32,40,40,40,40,40,108,111,110,103,95,115,116,101,112,41,45,62,111,98,95,116,121,112,101,41,45,62,116,112,95,102,108,97,103,115,32,38,32,40,40,49,76,60,60,50,51,41,41,41,32,33,61,32,48,41,32,38,38,32,40,40,40,80,121,73,110,116,79,98,106,101,99,116,32,42,41,40,108,111,110,103,95,115,116,101,112,41,41,45,62,111,98,95,105,118,97,108,41,32,61,61,32,49,41,0] /* slow_mode || (((((lo */, "i8", ALLOC_NORMAL);
__str72=allocate([108,122,45,62,99,110,116,32,61,61,32,40,40,80,121,95,115,115,105,122,101,95,116,41,40,40,40,115,105,122,101,95,116,41,45,49,41,62,62,49,41,41,32,38,38,32,108,111,110,103,95,99,110,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* lz->cnt == ((Py_ssiz */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11885=allocate([99,111,117,110,116,95,110,101,120,116,108,111,110,103,0] /* count_nextlong\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([99,111,117,110,116,40,37,122,100,41,0] /* count(%zd)\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([99,111,117,110,116,40,37,115,41,0] /* count(%s)\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([99,111,117,110,116,40,37,115,44,32,37,115,41,0] /* count(%s, %s)\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([79,40,79,79,41,0] /* O(OO)\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([79,40,110,41,0] /* O(n)\00 */, "i8", ALLOC_NORMAL);
_count_reduce_doc=allocate([82,101,116,117,114,110,32,115,116,97,116,101,32,105,110,102,111,114,109,97,116,105,111,110,32,102,111,114,32,112,105,99,107,108,105,110,103,46,0] /* Return state informa */, "i8", ALLOC_NORMAL);
__str78=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
_count_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_count_doc=allocate([99,111,117,110,116,40,115,116,97,114,116,61,48,44,32,115,116,101,112,61,49,41,32,45,45,62,32,99,111,117,110,116,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,99,111,117,110,116,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,99,111,110,115,101,99,117,116,105,118,101,32,118,97,108,117,101,115,46,10,69,113,117,105,118,97,108,101,110,116,32,116,111,58,10,10,32,32,32,32,100,101,102,32,99,111,117,110,116,40,102,105,114,115,116,118,97,108,61,48,44,32,115,116,101,112,61,49,41,58,10,32,32,32,32,120,32,61,32,102,105,114,115,116,118,97,108,10,32,32,32,32,119,104,105,108,101,32,49,58,10,32,32,32,32,32,32,32,32,121,105,101,108,100,32,120,10,32,32,32,32,32,32,32,32,120,32,43,61,32,115,116,101,112,10,0] /* count(start=0, step= */, "i8", ALLOC_NORMAL);
__str79=allocate([105,116,101,114,116,111,111,108,115,46,99,111,117,110,116,0] /* itertools.count\00 */, "i8", ALLOC_NORMAL);
_count_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str80=allocate([105,122,105,112,40,41,0] /* izip()\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12009=allocate([105,122,105,112,95,110,101,119,0] /* izip_new\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([105,122,105,112,32,97,114,103,117,109,101,110,116,32,35,37,122,100,32,109,117,115,116,32,115,117,112,112,111,114,116,32,105,116,101,114,97,116,105,111,110,0] /* izip argument #%zd m */, "i8", ALLOC_NORMAL);
_izip_doc=allocate([105,122,105,112,40,105,116,101,114,49,32,91,44,105,116,101,114,50,32,91,46,46,46,93,93,41,32,45,45,62,32,105,122,105,112,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,105,122,105,112,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,119,104,101,114,101,10,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,99,111,109,101,115,32,102,114,111,109,32,116,104,101,32,105,45,116,104,32,105,116,101,114,97,98,108,101,32,97,114,103,117,109,101,110,116,46,32,32,84,104,101,32,46,110,101,120,116,40,41,10,109,101,116,104,111,100,32,99,111,110,116,105,110,117,101,115,32,117,110,116,105,108,32,116,104,101,32,115,104,111,114,116,101,115,116,32,105,116,101,114,97,98,108,101,32,105,110,32,116,104,101,32,97,114,103,117,109,101,110,116,32,115,101,113,117,101,110,99,101,10,105,115,32,101,120,104,97,117,115,116,101,100,32,97,110,100,32,116,104,101,110,32,105,116,32,114,97,105,115,101,115,32,83,116,111,112,73,116,101,114,97,116,105,111,110,46,32,32,87,111,114,107,115,32,108,105,107,101,32,116,104,101,32,122,105,112,40,41,10,102,117,110,99,116,105,111,110,32,98,117,116,32,99,111,110,115,117,109,101,115,32,108,101,115,115,32,109,101,109,111,114,121,32,98,121,32,114,101,116,117,114,110,105,110,103,32,97,110,32,105,116,101,114,97,116,111,114,32,105,110,115,116,101,97,100,32,111,102,10,97,32,108,105,115,116,46,0] /* izip(iter1 [,iter2 [ */, "i8", ALLOC_NORMAL);
__str82=allocate([105,116,101,114,116,111,111,108,115,46,105,122,105,112,0] /* itertools.izip\00 */, "i8", ALLOC_NORMAL);
_izip_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str83=allocate([79,124,110,58,114,101,112,101,97,116,0] /* O|n:repeat\00 */, "i8", ALLOC_NORMAL);
_kwargs_12229=allocate(12, "i8*", ALLOC_NORMAL);
__str84=allocate([111,98,106,101,99,116,0] /* object\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([116,105,109,101,115,0] /* times\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([114,101,112,101,97,116,40,37,115,41,0] /* repeat(%s)\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([114,101,112,101,97,116,40,37,115,44,32,37,122,100,41,0] /* repeat(%s, %zd)\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([108,101,110,40,41,32,111,102,32,117,110,115,105,122,101,100,32,111,98,106,101,99,116,0] /* len() of unsized obj */, "i8", ALLOC_NORMAL);
_length_hint_doc=allocate([80,114,105,118,97,116,101,32,109,101,116,104,111,100,32,114,101,116,117,114,110,105,110,103,32,97,110,32,101,115,116,105,109,97,116,101,32,111,102,32,108,101,110,40,108,105,115,116,40,105,116,41,41,46,0] /* Private method retur */, "i8", ALLOC_NORMAL);
__str89=allocate([95,95,108,101,110,103,116,104,95,104,105,110,116,95,95,0] /* __length_hint__\00 */, "i8", ALLOC_NORMAL);
_repeat_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_repeat_doc=allocate([114,101,112,101,97,116,40,111,98,106,101,99,116,32,91,44,116,105,109,101,115,93,41,32,45,62,32,99,114,101,97,116,101,32,97,110,32,105,116,101,114,97,116,111,114,32,119,104,105,99,104,32,114,101,116,117,114,110,115,32,116,104,101,32,111,98,106,101,99,116,10,102,111,114,32,116,104,101,32,115,112,101,99,105,102,105,101,100,32,110,117,109,98,101,114,32,111,102,32,116,105,109,101,115,46,32,32,73,102,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,114,101,116,117,114,110,115,32,116,104,101,32,111,98,106,101,99,116,10,101,110,100,108,101,115,115,108,121,46,0] /* repeat(object [,time */, "i8", ALLOC_NORMAL);
__str90=allocate([105,116,101,114,116,111,111,108,115,46,114,101,112,101,97,116,0] /* itertools.repeat\00 */, "i8", ALLOC_NORMAL);
_repeat_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str91=allocate([102,105,108,108,118,97,108,117,101,0] /* fillvalue\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([105,122,105,112,95,108,111,110,103,101,115,116,40,41,32,103,111,116,32,97,110,32,117,110,101,120,112,101,99,116,101,100,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,0] /* izip_longest() got a */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12366=allocate([105,122,105,112,95,108,111,110,103,101,115,116,95,110,101,119,0] /* izip_longest_new\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([105,122,105,112,95,108,111,110,103,101,115,116,32,97,114,103,117,109,101,110,116,32,35,37,122,100,32,109,117,115,116,32,115,117,112,112,111,114,116,32,105,116,101,114,97,116,105,111,110,0] /* izip_longest argumen */, "i8", ALLOC_NORMAL);
_izip_longest_doc=allocate([105,122,105,112,95,108,111,110,103,101,115,116,40,105,116,101,114,49,32,91,44,105,116,101,114,50,32,91,46,46,46,93,93,44,32,91,102,105,108,108,118,97,108,117,101,61,78,111,110,101,93,41,32,45,45,62,32,105,122,105,112,95,108,111,110,103,101,115,116,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,110,32,105,122,105,112,95,108,111,110,103,101,115,116,32,111,98,106,101,99,116,32,119,104,111,115,101,32,46,110,101,120,116,40,41,32,109,101,116,104,111,100,32,114,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,119,104,101,114,101,10,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,99,111,109,101,115,32,102,114,111,109,32,116,104,101,32,105,45,116,104,32,105,116,101,114,97,98,108,101,32,97,114,103,117,109,101,110,116,46,32,32,84,104,101,32,46,110,101,120,116,40,41,10,109,101,116,104,111,100,32,99,111,110,116,105,110,117,101,115,32,117,110,116,105,108,32,116,104,101,32,108,111,110,103,101,115,116,32,105,116,101,114,97,98,108,101,32,105,110,32,116,104,101,32,97,114,103,117,109,101,110,116,32,115,101,113,117,101,110,99,101,10,105,115,32,101,120,104,97,117,115,116,101,100,32,97,110,100,32,116,104,101,110,32,105,116,32,114,97,105,115,101,115,32,83,116,111,112,73,116,101,114,97,116,105,111,110,46,32,32,87,104,101,110,32,116,104,101,32,115,104,111,114,116,101,114,32,105,116,101,114,97,98,108,101,115,10,97,114,101,32,101,120,104,97,117,115,116,101,100,44,32,116,104,101,32,102,105,108,108,118,97,108,117,101,32,105,115,32,115,117,98,115,116,105,116,117,116,101,100,32,105,110,32,116,104,101,105,114,32,112,108,97,99,101,46,32,32,84,104,101,32,102,105,108,108,118,97,108,117,101,10,100,101,102,97,117,108,116,115,32,116,111,32,78,111,110,101,32,111,114,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,32,98,121,32,97,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,46,10,0] /* izip_longest(iter1 [ */, "i8", ALLOC_NORMAL);
__str94=allocate([105,116,101,114,116,111,111,108,115,46,105,122,105,112,95,108,111,110,103,101,115,116,0] /* itertools.izip_longe */, "i8", ALLOC_NORMAL);
_iziplongest_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([70,117,110,99,116,105,111,110,97,108,32,116,111,111,108,115,32,102,111,114,32,99,114,101,97,116,105,110,103,32,97,110,100,32,117,115,105,110,103,32,105,116,101,114,97,116,111,114,115,46,10,10,73,110,102,105,110,105,116,101,32,105,116,101,114,97,116,111,114,115,58,10,99,111,117,110,116,40,91,110,93,41,32,45,45,62,32,110,44,32,110,43,49,44,32,110,43,50,44,32,46,46,46,10,99,121,99,108,101,40,112,41,32,45,45,62,32,112,48,44,32,112,49,44,32,46,46,46,32,112,108,97,115,116,44,32,112,48,44,32,112,49,44,32,46,46,46,10,114,101,112,101,97,116,40,101,108,101,109,32,91,44,110,93,41,32,45,45,62,32,101,108,101,109,44,32,101,108,101,109,44,32,101,108,101,109,44,32,46,46,46,32,101,110,100,108,101,115,115,108,121,32,111,114,32,117,112,32,116,111,32,110,32,116,105,109,101,115,10,10,73,116,101,114,97,116,111,114,115,32,116,101,114,109,105,110,97,116,105,110,103,32,111,110,32,116,104,101,32,115,104,111,114,116,101,115,116,32,105,110,112,117,116,32,115,101,113,117,101,110,99,101,58,10,99,104,97,105,110,40,112,44,32,113,44,32,46,46,46,41,32,45,45,62,32,112,48,44,32,112,49,44,32,46,46,46,32,112,108,97,115,116,44,32,113,48,44,32,113,49,44,32,46,46,46,32,10,99,111,109,112,114,101,115,115,40,100,97,116,97,44,32,115,101,108,101,99,116,111,114,115,41,32,45,45,62,32,40,100,91,48,93,32,105,102,32,115,91,48,93,41,44,32,40,100,91,49,93,32,105,102,32,115,91,49,93,41,44,32,46,46,46,10,100,114,111,112,119,104,105,108,101,40,112,114,101,100,44,32,115,101,113,41,32,45,45,62,32,115,101,113,91,110,93,44,32,115,101,113,91,110,43,49,93,44,32,115,116,97,114,116,105,110,103,32,119,104,101,110,32,112,114,101,100,32,102,97,105,108,115,10,103,114,111,117,112,98,121,40,105,116,101,114,97,98,108,101,91,44,32,107,101,121,102,117,110,99,93,41,32,45,45,62,32,115,117,98,45,105,116,101,114,97,116,111,114,115,32,103,114,111,117,112,101,100,32,98,121,32,118,97,108,117,101,32,111,102,32,107,101,121,102,117,110,99,40,118,41,10,105,102,105,108,116,101,114,40,112,114,101,100,44,32,115,101,113,41,32,45,45,62,32,101,108,101,109,101,110,116,115,32,111,102,32,115,101,113,32,119,104,101,114,101,32,112,114,101,100,40,101,108,101,109,41,32,105,115,32,84,114,117,101,10,105,102,105,108,116,101,114,102,97,108,115,101,40,112,114,101,100,44,32,115,101,113,41,32,45,45,62,32,101,108,101,109,101,110,116,115,32,111,102,32,115,101,113,32,119,104,101,114,101,32,112,114,101,100,40,101,108,101,109,41,32,105,115,32,70,97,108,115,101,10,105,115,108,105,99,101,40,115,101,113,44,32,91,115,116,97,114,116,44,93,32,115,116,111,112,32,91,44,32,115,116,101,112,93,41,32,45,45,62,32,101,108,101,109,101,110,116,115,32,102,114,111,109,10,32,32,32,32,32,32,32,115,101,113,91,115,116,97,114,116,58,115,116,111,112,58,115,116,101,112,93,10,105,109,97,112,40,102,117,110,44,32,112,44,32,113,44,32,46,46,46,41,32,45,45,62,32,102,117,110,40,112,48,44,32,113,48,41,44,32,102,117,110,40,112,49,44,32,113,49,41,44,32,46,46,46,10,115,116,97,114,109,97,112,40,102,117,110,44,32,115,101,113,41,32,45,45,62,32,102,117,110,40,42,115,101,113,91,48,93,41,44,32,102,117,110,40,42,115,101,113,91,49,93,41,44,32,46,46,46,10,116,101,101,40,105,116,44,32,110,61,50,41,32,45,45,62,32,40,105,116,49,44,32,105,116,50,32,44,32,46,46,46,32,105,116,110,41,32,115,112,108,105,116,115,32,111,110,101,32,105,116,101,114,97,116,111,114,32,105,110,116,111,32,110,10,116,97,107,101,119,104,105,108,101,40,112,114,101,100,44,32,115,101,113,41,32,45,45,62,32,115,101,113,91,48,93,44,32,115,101,113,91,49,93,44,32,117,110,116,105,108,32,112,114,101,100,32,102,97,105,108,115,10,105,122,105,112,40,112,44,32,113,44,32,46,46,46,41,32,45,45,62,32,40,112,91,48,93,44,32,113,91,48,93,41,44,32,40,112,91,49,93,44,32,113,91,49,93,41,44,32,46,46,46,32,10,105,122,105,112,95,108,111,110,103,101,115,116,40,112,44,32,113,44,32,46,46,46,41,32,45,45,62,32,40,112,91,48,93,44,32,113,91,48,93,41,44,32,40,112,91,49,93,44,32,113,91,49,93,41,44,32,46,46,46,32,10,10,67,111,109,98,105,110,97,116,111,114,105,99,32,103,101,110,101,114,97,116,111,114,115,58,10,112,114,111,100,117,99,116,40,112,44,32,113,44,32,46,46,46,32,91,114,101,112,101,97,116,61,49,93,41,32,45,45,62,32,99,97,114,116,101,115,105,97,110,32,112,114,111,100,117,99,116,10,112,101,114,109,117,116,97,116,105,111,110,115,40,112,91,44,32,114,93,41,10,99,111,109,98,105,110,97,116,105,111,110,115,40,112,44,32,114,41,10,99,111,109,98,105,110,97,116,105,111,110,115,95,119,105,116,104,95,114,101,112,108,97,99,101,109,101,110,116,40,112,44,32,114,41,10,0] /* Functional tools for */, "i8", ALLOC_NORMAL);
_module_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_C_280_12667=allocate(80, "%struct._typeobject*", ALLOC_NORMAL);
__str95=allocate([105,116,101,114,116,111,111,108,115,0] /* itertools\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([110,97,109,101,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* name != ((void _)0)\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___12663=allocate([105,110,105,116,105,116,101,114,116,111,111,108,115,0] /* inititertools\00 */, "i8", ALLOC_NORMAL);
HEAP[_kwargs_8351]=__str1;
HEAP[_kwargs_8351+4]=__str2;
HEAP[_groupby_type+12]=__str3;
HEAP[_groupby_type+24]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_groupby_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_groupby_type+88]=_groupby_doc;
HEAP[_groupby_type+92]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_groupby_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_groupby_type+112]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_groupby_type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_groupby_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[__grouper_type+12]=__str7;
HEAP[__grouper_type+24]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[__grouper_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[__grouper_type+92]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[__grouper_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[__grouper_type+112]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[__grouper_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_teedataobject_type+12]=__str10;
HEAP[_teedataobject_type+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_teedataobject_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_teedataobject_type+88]=_teedataobject_doc;
HEAP[_teedataobject_type+92]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_teedataobject_type+96]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_teedataobject_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_tee_methods]=__str12;
HEAP[_tee_methods+4]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_tee_methods+12]=_teecopy_doc;
HEAP[_tee_type+12]=__str13;
HEAP[_tee_type+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_tee_type+88]=_teeobject_doc;
HEAP[_tee_type+92]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_tee_type+96]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_tee_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_tee_type+112]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_tee_type+116]=_tee_methods;
HEAP[_tee_type+156]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_tee_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_cycle_type+12]=__str18;
HEAP[_cycle_type+24]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_cycle_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_cycle_type+88]=_cycle_doc;
HEAP[_cycle_type+92]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_cycle_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_cycle_type+112]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_cycle_type+156]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_cycle_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_dropwhile_type+12]=__str21;
HEAP[_dropwhile_type+24]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_dropwhile_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_dropwhile_type+88]=_dropwhile_doc;
HEAP[_dropwhile_type+92]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_dropwhile_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_dropwhile_type+112]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_dropwhile_type+156]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_dropwhile_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_takewhile_type+12]=__str24;
HEAP[_takewhile_type+24]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_takewhile_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_takewhile_type+88]=_takewhile_doc;
HEAP[_takewhile_type+92]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_takewhile_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_takewhile_type+112]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_takewhile_type+156]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_takewhile_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_islice_type+12]=__str30;
HEAP[_islice_type+24]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_islice_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_islice_type+88]=_islice_doc;
HEAP[_islice_type+92]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_islice_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_islice_type+112]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_islice_type+156]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_islice_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_starmap_type+12]=__str33;
HEAP[_starmap_type+24]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_starmap_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_starmap_type+88]=_starmap_doc;
HEAP[_starmap_type+92]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_starmap_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_starmap_type+112]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_starmap_type+156]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_starmap_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_imap_type+12]=__str36;
HEAP[_imap_type+24]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_imap_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_imap_type+88]=_imap_doc;
HEAP[_imap_type+92]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_imap_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_imap_type+112]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_imap_type+156]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_imap_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_chain_methods]=__str38;
HEAP[_chain_methods+4]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_chain_methods+12]=_chain_from_iterable_doc;
HEAP[_chain_type+12]=__str39;
HEAP[_chain_type+24]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_chain_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_chain_type+88]=_chain_doc;
HEAP[_chain_type+92]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_chain_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_chain_type+112]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_chain_type+116]=_chain_methods;
HEAP[_chain_type+156]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_chain_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_product_type+12]=__str45;
HEAP[_product_type+24]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_product_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_product_type+88]=_product_doc;
HEAP[_product_type+92]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_product_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_product_type+112]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_product_type+156]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_product_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwargs_10542]=__str1;
HEAP[_kwargs_10542+4]=__str47;
HEAP[_combinations_type+12]=__str50;
HEAP[_combinations_type+24]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_combinations_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_combinations_type+88]=_combinations_doc;
HEAP[_combinations_type+92]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_combinations_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_combinations_type+112]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_combinations_type+156]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_combinations_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwargs_10765]=__str1;
HEAP[_kwargs_10765+4]=__str47;
HEAP[_cwr_type+12]=__str52;
HEAP[_cwr_type+24]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_cwr_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_cwr_type+88]=_cwr_doc;
HEAP[_cwr_type+92]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_cwr_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_cwr_type+112]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_cwr_type+156]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_cwr_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwargs_10993]=__str1;
HEAP[_kwargs_10993+4]=__str47;
HEAP[_permutations_type+12]=__str54;
HEAP[_permutations_type+24]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_permutations_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_permutations_type+88]=_permutations_doc;
HEAP[_permutations_type+92]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_permutations_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_permutations_type+112]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_permutations_type+156]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_permutations_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwargs_11231]=__str56;
HEAP[_kwargs_11231+4]=__str57;
HEAP[_compress_type+12]=__str58;
HEAP[_compress_type+24]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_compress_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_compress_type+88]=_compress_doc;
HEAP[_compress_type+92]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_compress_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_compress_type+112]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_compress_type+156]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_compress_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_ifilter_type+12]=__str61;
HEAP[_ifilter_type+24]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_ifilter_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_ifilter_type+88]=_ifilter_doc;
HEAP[_ifilter_type+92]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_ifilter_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_ifilter_type+112]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_ifilter_type+156]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_ifilter_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_ifilterfalse_type+12]=__str64;
HEAP[_ifilterfalse_type+24]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_ifilterfalse_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_ifilterfalse_type+88]=_ifilterfalse_doc;
HEAP[_ifilterfalse_type+92]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_ifilterfalse_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_ifilterfalse_type+112]=(FUNCTION_TABLE_OFFSET + 150);
HEAP[_ifilterfalse_type+156]=(FUNCTION_TABLE_OFFSET + 152);
HEAP[_ifilterfalse_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwlist_11697]=__str66;
HEAP[_kwlist_11697+4]=__str67;
HEAP[_count_methods]=__str78;
HEAP[_count_methods+4]=(FUNCTION_TABLE_OFFSET + 154);
HEAP[_count_methods+12]=_count_reduce_doc;
HEAP[_count_type+12]=__str79;
HEAP[_count_type+24]=(FUNCTION_TABLE_OFFSET + 156);
HEAP[_count_type+44]=(FUNCTION_TABLE_OFFSET + 158);
HEAP[_count_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_count_type+88]=_count_doc;
HEAP[_count_type+92]=(FUNCTION_TABLE_OFFSET + 160);
HEAP[_count_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_count_type+112]=(FUNCTION_TABLE_OFFSET + 162);
HEAP[_count_type+116]=_count_methods;
HEAP[_count_type+156]=(FUNCTION_TABLE_OFFSET + 164);
HEAP[_count_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_izip_type+12]=__str82;
HEAP[_izip_type+24]=(FUNCTION_TABLE_OFFSET + 166);
HEAP[_izip_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_izip_type+88]=_izip_doc;
HEAP[_izip_type+92]=(FUNCTION_TABLE_OFFSET + 168);
HEAP[_izip_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_izip_type+112]=(FUNCTION_TABLE_OFFSET + 170);
HEAP[_izip_type+156]=(FUNCTION_TABLE_OFFSET + 172);
HEAP[_izip_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_kwargs_12229]=__str84;
HEAP[_kwargs_12229+4]=__str85;
HEAP[_repeat_methods]=__str89;
HEAP[_repeat_methods+4]=(FUNCTION_TABLE_OFFSET + 174);
HEAP[_repeat_methods+12]=_length_hint_doc;
HEAP[_repeat_type+12]=__str90;
HEAP[_repeat_type+24]=(FUNCTION_TABLE_OFFSET + 176);
HEAP[_repeat_type+44]=(FUNCTION_TABLE_OFFSET + 178);
HEAP[_repeat_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_repeat_type+88]=_repeat_doc;
HEAP[_repeat_type+92]=(FUNCTION_TABLE_OFFSET + 180);
HEAP[_repeat_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_repeat_type+112]=(FUNCTION_TABLE_OFFSET + 182);
HEAP[_repeat_type+116]=_repeat_methods;
HEAP[_repeat_type+156]=(FUNCTION_TABLE_OFFSET + 184);
HEAP[_repeat_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iziplongest_type+12]=__str94;
HEAP[_iziplongest_type+24]=(FUNCTION_TABLE_OFFSET + 186);
HEAP[_iziplongest_type+72]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_iziplongest_type+88]=_izip_longest_doc;
HEAP[_iziplongest_type+92]=(FUNCTION_TABLE_OFFSET + 188);
HEAP[_iziplongest_type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_iziplongest_type+112]=(FUNCTION_TABLE_OFFSET + 190);
HEAP[_iziplongest_type+156]=(FUNCTION_TABLE_OFFSET + 192);
HEAP[_iziplongest_type+160]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_module_methods]=__str11;
HEAP[_module_methods+4]=(FUNCTION_TABLE_OFFSET + 194);
HEAP[_module_methods+12]=_tee_doc;
HEAP[_C_280_12667]=_combinations_type;
HEAP[_C_280_12667+4]=_cwr_type;
HEAP[_C_280_12667+8]=_cycle_type;
HEAP[_C_280_12667+12]=_dropwhile_type;
HEAP[_C_280_12667+16]=_takewhile_type;
HEAP[_C_280_12667+20]=_islice_type;
HEAP[_C_280_12667+24]=_starmap_type;
HEAP[_C_280_12667+28]=_imap_type;
HEAP[_C_280_12667+32]=_chain_type;
HEAP[_C_280_12667+36]=_compress_type;
HEAP[_C_280_12667+40]=_ifilter_type;
HEAP[_C_280_12667+44]=_ifilterfalse_type;
HEAP[_C_280_12667+48]=_count_type;
HEAP[_C_280_12667+52]=_izip_type;
HEAP[_C_280_12667+56]=_iziplongest_type;
HEAP[_C_280_12667+60]=_permutations_type;
HEAP[_C_280_12667+64]=_product_type;
HEAP[_C_280_12667+68]=_repeat_type;
HEAP[_C_280_12667+72]=_groupby_type;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

