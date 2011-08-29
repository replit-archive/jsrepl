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
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _S_ident_o;
var _S_log_open_b;
var __str;
var __str1;
var _keywords_8364;
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
var _syslog_methods;
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






















  function _syslog_get_argv() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $argv_len;
        var $scriptobj;
        var $atslash;
        var $argv;
        var $1=_PySys_GetObject(__str); //@line 74 "syslogmodule.c"
        $argv=$1; //@line 74 "syslogmodule.c"
        var $2=$argv; //@line 76 "syslogmodule.c"
        var $3=($2)==0; //@line 76 "syslogmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 76 "syslogmodule.c"
      case 1: // $bb
        $0=0; //@line 77 "syslogmodule.c"
        __label__ = 13; break; //@line 77 "syslogmodule.c"
      case 2: // $bb1
        var $4=$argv; //@line 80 "syslogmodule.c"
        var $5=_PyList_Size($4); //@line 80 "syslogmodule.c"
        $argv_len=$5; //@line 80 "syslogmodule.c"
        var $6=$argv_len; //@line 81 "syslogmodule.c"
        var $7=($6)==-1; //@line 81 "syslogmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 81 "syslogmodule.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 82 "syslogmodule.c"
        $0=0; //@line 83 "syslogmodule.c"
        __label__ = 13; break; //@line 83 "syslogmodule.c"
      case 4: // $bb3
        var $8=$argv_len; //@line 85 "syslogmodule.c"
        var $9=($8)==0; //@line 85 "syslogmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 85 "syslogmodule.c"
      case 5: // $bb4
        $0=0; //@line 86 "syslogmodule.c"
        __label__ = 13; break; //@line 86 "syslogmodule.c"
      case 6: // $bb5
        var $10=$argv; //@line 89 "syslogmodule.c"
        var $11=_PyList_GetItem($10, 0); //@line 89 "syslogmodule.c"
        $scriptobj=$11; //@line 89 "syslogmodule.c"
        var $12=$scriptobj; //@line 90 "syslogmodule.c"
        var $13=$12+4; //@line 90 "syslogmodule.c"
        var $14=HEAP[$13]; //@line 90 "syslogmodule.c"
        var $15=$14+84; //@line 90 "syslogmodule.c"
        var $16=HEAP[$15]; //@line 90 "syslogmodule.c"
        var $17=($16) & 134217728; //@line 90 "syslogmodule.c"
        var $18=($17)==0; //@line 90 "syslogmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 90 "syslogmodule.c"
      case 7: // $bb6
        $0=0; //@line 91 "syslogmodule.c"
        __label__ = 13; break; //@line 91 "syslogmodule.c"
      case 8: // $bb7
        var $19=$scriptobj; //@line 93 "syslogmodule.c"
        var $20=$19; //@line 93 "syslogmodule.c"
        var $21=$20+8; //@line 93 "syslogmodule.c"
        var $22=HEAP[$21]; //@line 93 "syslogmodule.c"
        var $23=($22)==0; //@line 93 "syslogmodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 93 "syslogmodule.c"
      case 9: // $bb8
        $0=0; //@line 94 "syslogmodule.c"
        __label__ = 13; break; //@line 94 "syslogmodule.c"
      case 10: // $bb9
        var $24=$scriptobj; //@line 97 "syslogmodule.c"
        var $25=_PyString_AsString($24); //@line 97 "syslogmodule.c"
        var $26=_strrchr($25, 47); //@line 97 "syslogmodule.c"
        $atslash=$26; //@line 97 "syslogmodule.c"
        var $27=$atslash; //@line 98 "syslogmodule.c"
        var $28=($27)!=0; //@line 98 "syslogmodule.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 98 "syslogmodule.c"
      case 11: // $bb10
        var $29=$atslash; //@line 99 "syslogmodule.c"
        var $30=$29+1; //@line 99 "syslogmodule.c"
        var $31=_PyString_FromString($30); //@line 99 "syslogmodule.c"
        $0=$31; //@line 99 "syslogmodule.c"
        __label__ = 13; break; //@line 99 "syslogmodule.c"
      case 12: // $bb11
        var $32=$scriptobj; //@line 101 "syslogmodule.c"
        var $33=$32; //@line 101 "syslogmodule.c"
        var $34=HEAP[$33]; //@line 101 "syslogmodule.c"
        var $35=($34) + 1; //@line 101 "syslogmodule.c"
        var $36=$scriptobj; //@line 101 "syslogmodule.c"
        var $37=$36; //@line 101 "syslogmodule.c"
        HEAP[$37]=$35; //@line 101 "syslogmodule.c"
        var $38=$scriptobj; //@line 102 "syslogmodule.c"
        $0=$38; //@line 102 "syslogmodule.c"
        __label__ = 13; break; //@line 102 "syslogmodule.c"
      case 13: // $bb12
        var $39=$0; //@line 77 "syslogmodule.c"
        $retval=$39; //@line 77 "syslogmodule.c"
        var $retval13=$retval; //@line 77 "syslogmodule.c"
        ;
        return $retval13; //@line 77 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_openlog($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $iftmp_11;
        var $0;
        var $logopt=__stackBase__;
        var $facility=__stackBase__+4;
        var $new_S_ident_o=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$logopt]=0; //@line 112 "syslogmodule.c"
        HEAP[$facility]=8; //@line 113 "syslogmodule.c"
        HEAP[$new_S_ident_o]=0; //@line 114 "syslogmodule.c"
        var $1=$args_addr; //@line 117 "syslogmodule.c"
        var $2=$kwds_addr; //@line 117 "syslogmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str1, _keywords_8364, allocate([$new_S_ident_o,0,0,0,$logopt,0,0,0,$facility,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 117 "syslogmodule.c"
        var $4=($3)==0; //@line 117 "syslogmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 117 "syslogmodule.c"
      case 1: // $bb
        $0=0; //@line 119 "syslogmodule.c"
        __label__ = 12; break; //@line 119 "syslogmodule.c"
      case 2: // $bb1
        var $5=HEAP[$new_S_ident_o]; //@line 121 "syslogmodule.c"
        var $6=($5)!=0; //@line 121 "syslogmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 121 "syslogmodule.c"
      case 3: // $bb3
        var $7=HEAP[$new_S_ident_o]; //@line 121 "syslogmodule.c"
        var $8=$7; //@line 121 "syslogmodule.c"
        var $9=HEAP[$8]; //@line 121 "syslogmodule.c"
        var $10=($9) + 1; //@line 121 "syslogmodule.c"
        var $11=$7; //@line 121 "syslogmodule.c"
        HEAP[$11]=$10; //@line 121 "syslogmodule.c"
        var $_pr=HEAP[$new_S_ident_o];
        var $12=($_pr)==0; //@line 124 "syslogmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 124 "syslogmodule.c"
      case 4: // $bb4
        var $13=_syslog_get_argv(); //@line 125 "syslogmodule.c"
        HEAP[$new_S_ident_o]=$13; //@line 125 "syslogmodule.c"
        __label__ = 5; break; //@line 125 "syslogmodule.c"
      case 5: // $bb5
        var $14=HEAP[_S_ident_o]; //@line 128 "syslogmodule.c"
        var $15=($14)!=0; //@line 128 "syslogmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 128 "syslogmodule.c"
      case 6: // $bb6
        var $16=HEAP[_S_ident_o]; //@line 128 "syslogmodule.c"
        var $17=$16; //@line 128 "syslogmodule.c"
        var $18=HEAP[$17]; //@line 128 "syslogmodule.c"
        var $19=($18) - 1; //@line 128 "syslogmodule.c"
        var $20=$16; //@line 128 "syslogmodule.c"
        HEAP[$20]=$19; //@line 128 "syslogmodule.c"
        var $21=$16; //@line 128 "syslogmodule.c"
        var $22=HEAP[$21]; //@line 128 "syslogmodule.c"
        var $23=($22)==0; //@line 128 "syslogmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 128 "syslogmodule.c"
      case 7: // $bb7
        var $24=HEAP[_S_ident_o]; //@line 128 "syslogmodule.c"
        var $25=$24+4; //@line 128 "syslogmodule.c"
        var $26=HEAP[$25]; //@line 128 "syslogmodule.c"
        var $27=$26+24; //@line 128 "syslogmodule.c"
        var $28=HEAP[$27]; //@line 128 "syslogmodule.c"
        var $29=HEAP[_S_ident_o]; //@line 128 "syslogmodule.c"
        FUNCTION_TABLE[$28]($29); //@line 128 "syslogmodule.c"
        __label__ = 8; break; //@line 128 "syslogmodule.c"
      case 8: // $bb8
        var $30=HEAP[$new_S_ident_o]; //@line 129 "syslogmodule.c"
        HEAP[_S_ident_o]=$30; //@line 129 "syslogmodule.c"
        var $31=HEAP[$facility]; //@line 136 "syslogmodule.c"
        var $32=HEAP[$logopt]; //@line 136 "syslogmodule.c"
        var $33=($30)!=0; //@line 136 "syslogmodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 136 "syslogmodule.c"
      case 9: // $bb9
        var $34=HEAP[_S_ident_o]; //@line 136 "syslogmodule.c"
        var $35=_PyString_AsString($34); //@line 136 "syslogmodule.c"
        $iftmp_11=$35; //@line 136 "syslogmodule.c"
        __label__ = 11; break; //@line 136 "syslogmodule.c"
      case 10: // $bb10
        $iftmp_11=0; //@line 136 "syslogmodule.c"
        __label__ = 11; break; //@line 136 "syslogmodule.c"
      case 11: // $bb11
        var $36=$iftmp_11; //@line 136 "syslogmodule.c"
        _openlog($36, $32, $31); //@line 136 "syslogmodule.c"
        HEAP[_S_log_open_b]=1;
        var $37=HEAP[__Py_NoneStruct]; //@line 139 "syslogmodule.c"
        var $38=($37) + 1; //@line 139 "syslogmodule.c"
        HEAP[__Py_NoneStruct]=$38; //@line 139 "syslogmodule.c"
        $0=__Py_NoneStruct; //@line 140 "syslogmodule.c"
        __label__ = 12; break; //@line 140 "syslogmodule.c"
      case 12: // $bb12
        var $39=$0; //@line 119 "syslogmodule.c"
        $retval=$39; //@line 119 "syslogmodule.c"
        var $retval13=$retval; //@line 119 "syslogmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 119 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_syslog($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $message=__stackBase__;
        var $priority=__stackBase__+4;
        var $openargs;
        var $openlog_ret;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$priority]=6; //@line 148 "syslogmodule.c"
        var $1=$args_addr; //@line 150 "syslogmodule.c"
        var $2=_PyArg_ParseTuple($1, __str5, allocate([$priority,0,0,0,$message,0,0,0], ["i32*",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 150 "syslogmodule.c"
        var $3=($2)==0; //@line 150 "syslogmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 150 "syslogmodule.c"
      case 1: // $bb
        _PyErr_Clear(); //@line 152 "syslogmodule.c"
        var $4=$args_addr; //@line 153 "syslogmodule.c"
        var $5=_PyArg_ParseTuple($4, __str6, allocate([$message,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 153 "syslogmodule.c"
        var $6=($5)==0; //@line 153 "syslogmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 153 "syslogmodule.c"
      case 2: // $bb1
        $0=0; //@line 155 "syslogmodule.c"
        __label__ = 11; break; //@line 155 "syslogmodule.c"
      case 3: // $bb2
        var $_b=HEAP[_S_log_open_b];
        var $7=($_b);
        var $8=($7)==0; //@line 159 "syslogmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 159 "syslogmodule.c"
      case 4: // $bb3
        var $9=_PyTuple_New(0); //@line 166 "syslogmodule.c"
        $openargs=$9; //@line 166 "syslogmodule.c"
        var $10=$openargs; //@line 166 "syslogmodule.c"
        var $11=($10)!=0; //@line 166 "syslogmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 166 "syslogmodule.c"
      case 5: // $bb4
        var $12=$self_addr; //@line 167 "syslogmodule.c"
        var $13=$openargs; //@line 167 "syslogmodule.c"
        var $14=_syslog_openlog($12, $13, 0); //@line 167 "syslogmodule.c"
        $openlog_ret=$14; //@line 167 "syslogmodule.c"
        var $15=$openlog_ret; //@line 168 "syslogmodule.c"
        var $16=($15)!=0; //@line 168 "syslogmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 168 "syslogmodule.c"
      case 6: // $bb5
        var $17=$openlog_ret; //@line 168 "syslogmodule.c"
        var $18=$17; //@line 168 "syslogmodule.c"
        var $19=HEAP[$18]; //@line 168 "syslogmodule.c"
        var $20=($19) - 1; //@line 168 "syslogmodule.c"
        var $21=$openlog_ret; //@line 168 "syslogmodule.c"
        var $22=$21; //@line 168 "syslogmodule.c"
        HEAP[$22]=$20; //@line 168 "syslogmodule.c"
        var $23=$openlog_ret; //@line 168 "syslogmodule.c"
        var $24=$23; //@line 168 "syslogmodule.c"
        var $25=HEAP[$24]; //@line 168 "syslogmodule.c"
        var $26=($25)==0; //@line 168 "syslogmodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 168 "syslogmodule.c"
      case 7: // $bb6
        var $27=$openlog_ret; //@line 168 "syslogmodule.c"
        var $28=$27+4; //@line 168 "syslogmodule.c"
        var $29=HEAP[$28]; //@line 168 "syslogmodule.c"
        var $30=$29+24; //@line 168 "syslogmodule.c"
        var $31=HEAP[$30]; //@line 168 "syslogmodule.c"
        var $32=$openlog_ret; //@line 168 "syslogmodule.c"
        FUNCTION_TABLE[$31]($32); //@line 168 "syslogmodule.c"
        __label__ = 8; break; //@line 168 "syslogmodule.c"
      case 8: // $bb7
        var $33=$openargs; //@line 169 "syslogmodule.c"
        var $34=$33; //@line 169 "syslogmodule.c"
        var $35=HEAP[$34]; //@line 169 "syslogmodule.c"
        var $36=($35) - 1; //@line 169 "syslogmodule.c"
        var $37=$openargs; //@line 169 "syslogmodule.c"
        var $38=$37; //@line 169 "syslogmodule.c"
        HEAP[$38]=$36; //@line 169 "syslogmodule.c"
        var $39=$openargs; //@line 169 "syslogmodule.c"
        var $40=$39; //@line 169 "syslogmodule.c"
        var $41=HEAP[$40]; //@line 169 "syslogmodule.c"
        var $42=($41)==0; //@line 169 "syslogmodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 169 "syslogmodule.c"
      case 9: // $bb8
        var $43=$openargs; //@line 169 "syslogmodule.c"
        var $44=$43+4; //@line 169 "syslogmodule.c"
        var $45=HEAP[$44]; //@line 169 "syslogmodule.c"
        var $46=$45+24; //@line 169 "syslogmodule.c"
        var $47=HEAP[$46]; //@line 169 "syslogmodule.c"
        var $48=$openargs; //@line 169 "syslogmodule.c"
        FUNCTION_TABLE[$47]($48); //@line 169 "syslogmodule.c"
        __label__ = 10; break; //@line 169 "syslogmodule.c"
      case 10: // $bb9
        var $49=HEAP[$message]; //@line 174 "syslogmodule.c"
        var $50=HEAP[$priority]; //@line 174 "syslogmodule.c"
        _syslog($50, __str7, allocate([$49,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 174 "syslogmodule.c"
        var $51=HEAP[__Py_NoneStruct]; //@line 176 "syslogmodule.c"
        var $52=($51) + 1; //@line 176 "syslogmodule.c"
        HEAP[__Py_NoneStruct]=$52; //@line 176 "syslogmodule.c"
        $0=__Py_NoneStruct; //@line 177 "syslogmodule.c"
        __label__ = 11; break; //@line 177 "syslogmodule.c"
      case 11: // $bb10
        var $53=$0; //@line 155 "syslogmodule.c"
        $retval=$53; //@line 155 "syslogmodule.c"
        var $retval11=$retval; //@line 155 "syslogmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 155 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_closelog($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $_b=HEAP[_S_log_open_b];
        var $1=($_b);
        var $2=($1)!=0; //@line 183 "syslogmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 183 "syslogmodule.c"
      case 1: // $bb
        _closelog(); //@line 184 "syslogmodule.c"
        var $3=HEAP[_S_ident_o]; //@line 185 "syslogmodule.c"
        var $4=($3)!=0; //@line 185 "syslogmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 185 "syslogmodule.c"
      case 2: // $bb1
        var $5=HEAP[_S_ident_o]; //@line 185 "syslogmodule.c"
        var $6=$5; //@line 185 "syslogmodule.c"
        var $7=HEAP[$6]; //@line 185 "syslogmodule.c"
        var $8=($7) - 1; //@line 185 "syslogmodule.c"
        var $9=$5; //@line 185 "syslogmodule.c"
        HEAP[$9]=$8; //@line 185 "syslogmodule.c"
        var $10=$5; //@line 185 "syslogmodule.c"
        var $11=HEAP[$10]; //@line 185 "syslogmodule.c"
        var $12=($11)==0; //@line 185 "syslogmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 185 "syslogmodule.c"
      case 3: // $bb2
        var $13=HEAP[_S_ident_o]; //@line 185 "syslogmodule.c"
        var $14=$13+4; //@line 185 "syslogmodule.c"
        var $15=HEAP[$14]; //@line 185 "syslogmodule.c"
        var $16=$15+24; //@line 185 "syslogmodule.c"
        var $17=HEAP[$16]; //@line 185 "syslogmodule.c"
        var $18=HEAP[_S_ident_o]; //@line 185 "syslogmodule.c"
        FUNCTION_TABLE[$17]($18); //@line 185 "syslogmodule.c"
        __label__ = 4; break; //@line 185 "syslogmodule.c"
      case 4: // $bb3
        HEAP[_S_ident_o]=0; //@line 186 "syslogmodule.c"
        HEAP[_S_log_open_b]=0;
        __label__ = 5; break; //@line 187 "syslogmodule.c"
      case 5: // $bb4
        var $19=HEAP[__Py_NoneStruct]; //@line 189 "syslogmodule.c"
        var $20=($19) + 1; //@line 189 "syslogmodule.c"
        HEAP[__Py_NoneStruct]=$20; //@line 189 "syslogmodule.c"
        $0=__Py_NoneStruct; //@line 190 "syslogmodule.c"
        var $21=$0; //@line 190 "syslogmodule.c"
        $retval=$21; //@line 190 "syslogmodule.c"
        var $retval5=$retval; //@line 190 "syslogmodule.c"
        ;
        return $retval5; //@line 190 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_setlogmask($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $maskpri=__stackBase__;
        var $omaskpri;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 198 "syslogmodule.c"
        var $2=_PyArg_ParseTuple($1, __str8, allocate([$maskpri,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 198 "syslogmodule.c"
        var $3=($2)==0; //@line 198 "syslogmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 198 "syslogmodule.c"
      case 1: // $bb
        $0=0; //@line 199 "syslogmodule.c"
        __label__ = 3; break; //@line 199 "syslogmodule.c"
      case 2: // $bb1
        var $4=HEAP[$maskpri]; //@line 200 "syslogmodule.c"
        var $5=_setlogmask($4); //@line 200 "syslogmodule.c"
        $omaskpri=$5; //@line 200 "syslogmodule.c"
        var $6=$omaskpri; //@line 201 "syslogmodule.c"
        var $7=_PyInt_FromLong($6); //@line 201 "syslogmodule.c"
        $0=$7; //@line 201 "syslogmodule.c"
        __label__ = 3; break; //@line 201 "syslogmodule.c"
      case 3: // $bb2
        var $8=$0; //@line 199 "syslogmodule.c"
        $retval=$8; //@line 199 "syslogmodule.c"
        var $retval3=$retval; //@line 199 "syslogmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 199 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_log_mask($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $mask;
        var $pri=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 209 "syslogmodule.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$pri,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 209 "syslogmodule.c"
        var $3=($2)==0; //@line 209 "syslogmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 209 "syslogmodule.c"
      case 1: // $bb
        $0=0; //@line 210 "syslogmodule.c"
        __label__ = 3; break; //@line 210 "syslogmodule.c"
      case 2: // $bb1
        var $4=HEAP[$pri]; //@line 211 "syslogmodule.c"
        var $5=1 << ($4); //@line 211 "syslogmodule.c"
        $mask=$5; //@line 211 "syslogmodule.c"
        var $6=$mask; //@line 212 "syslogmodule.c"
        var $7=_PyInt_FromLong($6); //@line 212 "syslogmodule.c"
        $0=$7; //@line 212 "syslogmodule.c"
        __label__ = 3; break; //@line 212 "syslogmodule.c"
      case 3: // $bb2
        var $8=$0; //@line 210 "syslogmodule.c"
        $retval=$8; //@line 210 "syslogmodule.c"
        var $retval3=$retval; //@line 210 "syslogmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 210 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _syslog_log_upto($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $mask;
        var $pri=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 220 "syslogmodule.c"
        var $2=_PyArg_ParseTuple($1, __str10, allocate([$pri,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 220 "syslogmodule.c"
        var $3=($2)==0; //@line 220 "syslogmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 220 "syslogmodule.c"
      case 1: // $bb
        $0=0; //@line 221 "syslogmodule.c"
        __label__ = 3; break; //@line 221 "syslogmodule.c"
      case 2: // $bb1
        var $4=HEAP[$pri]; //@line 222 "syslogmodule.c"
        var $5=($4) + 1; //@line 222 "syslogmodule.c"
        var $6=1 << ($5); //@line 222 "syslogmodule.c"
        var $7=($6) - 1; //@line 222 "syslogmodule.c"
        $mask=$7; //@line 222 "syslogmodule.c"
        var $8=$mask; //@line 223 "syslogmodule.c"
        var $9=_PyInt_FromLong($8); //@line 223 "syslogmodule.c"
        $0=$9; //@line 223 "syslogmodule.c"
        __label__ = 3; break; //@line 223 "syslogmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 221 "syslogmodule.c"
        $retval=$10; //@line 221 "syslogmodule.c"
        var $retval3=$retval; //@line 221 "syslogmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 221 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initsyslog() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str13, _syslog_methods, 0, 0, 1013); //@line 246 "syslogmodule.c"
        $m=$0; //@line 246 "syslogmodule.c"
        var $1=$m; //@line 247 "syslogmodule.c"
        var $2=($1)==0; //@line 247 "syslogmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 247 "syslogmodule.c"
      case 1: // $bb
        var $3=$m; //@line 253 "syslogmodule.c"
        var $4=_PyModule_AddIntConstant($3, __str17, 0); //@line 253 "syslogmodule.c"
        var $5=$m; //@line 254 "syslogmodule.c"
        var $6=_PyModule_AddIntConstant($5, __str18, 1); //@line 254 "syslogmodule.c"
        var $7=$m; //@line 255 "syslogmodule.c"
        var $8=_PyModule_AddIntConstant($7, __str19, 2); //@line 255 "syslogmodule.c"
        var $9=$m; //@line 256 "syslogmodule.c"
        var $10=_PyModule_AddIntConstant($9, __str20, 3); //@line 256 "syslogmodule.c"
        var $11=$m; //@line 257 "syslogmodule.c"
        var $12=_PyModule_AddIntConstant($11, __str21, 4); //@line 257 "syslogmodule.c"
        var $13=$m; //@line 258 "syslogmodule.c"
        var $14=_PyModule_AddIntConstant($13, __str22, 5); //@line 258 "syslogmodule.c"
        var $15=$m; //@line 259 "syslogmodule.c"
        var $16=_PyModule_AddIntConstant($15, __str23, 6); //@line 259 "syslogmodule.c"
        var $17=$m; //@line 260 "syslogmodule.c"
        var $18=_PyModule_AddIntConstant($17, __str24, 7); //@line 260 "syslogmodule.c"
        var $19=$m; //@line 263 "syslogmodule.c"
        var $20=_PyModule_AddIntConstant($19, __str25, 1); //@line 263 "syslogmodule.c"
        var $21=$m; //@line 264 "syslogmodule.c"
        var $22=_PyModule_AddIntConstant($21, __str26, 2); //@line 264 "syslogmodule.c"
        var $23=$m; //@line 265 "syslogmodule.c"
        var $24=_PyModule_AddIntConstant($23, __str27, 8); //@line 265 "syslogmodule.c"
        var $25=$m; //@line 267 "syslogmodule.c"
        var $26=_PyModule_AddIntConstant($25, __str28, 16); //@line 267 "syslogmodule.c"
        var $27=$m; //@line 270 "syslogmodule.c"
        var $28=_PyModule_AddIntConstant($27, __str29, 32); //@line 270 "syslogmodule.c"
        var $29=$m; //@line 274 "syslogmodule.c"
        var $30=_PyModule_AddIntConstant($29, __str30, 0); //@line 274 "syslogmodule.c"
        var $31=$m; //@line 275 "syslogmodule.c"
        var $32=_PyModule_AddIntConstant($31, __str31, 8); //@line 275 "syslogmodule.c"
        var $33=$m; //@line 276 "syslogmodule.c"
        var $34=_PyModule_AddIntConstant($33, __str32, 16); //@line 276 "syslogmodule.c"
        var $35=$m; //@line 277 "syslogmodule.c"
        var $36=_PyModule_AddIntConstant($35, __str33, 24); //@line 277 "syslogmodule.c"
        var $37=$m; //@line 278 "syslogmodule.c"
        var $38=_PyModule_AddIntConstant($37, __str34, 32); //@line 278 "syslogmodule.c"
        var $39=$m; //@line 279 "syslogmodule.c"
        var $40=_PyModule_AddIntConstant($39, __str35, 48); //@line 279 "syslogmodule.c"
        var $41=$m; //@line 280 "syslogmodule.c"
        var $42=_PyModule_AddIntConstant($41, __str36, 128); //@line 280 "syslogmodule.c"
        var $43=$m; //@line 281 "syslogmodule.c"
        var $44=_PyModule_AddIntConstant($43, __str37, 136); //@line 281 "syslogmodule.c"
        var $45=$m; //@line 282 "syslogmodule.c"
        var $46=_PyModule_AddIntConstant($45, __str38, 144); //@line 282 "syslogmodule.c"
        var $47=$m; //@line 283 "syslogmodule.c"
        var $48=_PyModule_AddIntConstant($47, __str39, 152); //@line 283 "syslogmodule.c"
        var $49=$m; //@line 284 "syslogmodule.c"
        var $50=_PyModule_AddIntConstant($49, __str40, 160); //@line 284 "syslogmodule.c"
        var $51=$m; //@line 285 "syslogmodule.c"
        var $52=_PyModule_AddIntConstant($51, __str41, 168); //@line 285 "syslogmodule.c"
        var $53=$m; //@line 286 "syslogmodule.c"
        var $54=_PyModule_AddIntConstant($53, __str42, 176); //@line 286 "syslogmodule.c"
        var $55=$m; //@line 287 "syslogmodule.c"
        var $56=_PyModule_AddIntConstant($55, __str43, 184); //@line 287 "syslogmodule.c"
        var $57=$m; //@line 302 "syslogmodule.c"
        var $58=_PyModule_AddIntConstant($57, __str44, 40); //@line 302 "syslogmodule.c"
        var $59=$m; //@line 303 "syslogmodule.c"
        var $60=_PyModule_AddIntConstant($59, __str45, 72); //@line 303 "syslogmodule.c"
        var $61=$m; //@line 304 "syslogmodule.c"
        var $62=_PyModule_AddIntConstant($61, __str46, 64); //@line 304 "syslogmodule.c"
        var $63=$m; //@line 305 "syslogmodule.c"
        var $64=_PyModule_AddIntConstant($63, __str47, 56); //@line 305 "syslogmodule.c"
        __label__ = 2; break; //@line 305 "syslogmodule.c"
      case 2: // $return
        ;
        return; //@line 248 "syslogmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initsyslog"] = _initsyslog;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_syslog_openlog,0,_syslog_closelog,0,_syslog_syslog,0,_syslog_setlogmask,0,_syslog_log_mask,0,_syslog_log_upto,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_S_ident_o=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_S_log_open_b=allocate(1, "i1", ALLOC_NORMAL);
__str=allocate([97,114,103,118,0] /* argv\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([124,83,108,108,58,111,112,101,110,108,111,103,0] /* |Sll:openlog\00 */, "i8", ALLOC_NORMAL);
_keywords_8364=allocate(16, "i8*", ALLOC_NORMAL);
__str2=allocate([105,100,101,110,116,0] /* ident\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([108,111,103,111,112,116,105,111,110,0] /* logoption\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([102,97,99,105,108,105,116,121,0] /* facility\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,115,59,91,112,114,105,111,114,105,116,121,44,93,32,109,101,115,115,97,103,101,32,115,116,114,105,110,103,0] /* is;[priority,] messa */, "i8", ALLOC_NORMAL);
__str6=allocate([115,59,91,112,114,105,111,114,105,116,121,44,93,32,109,101,115,115,97,103,101,32,115,116,114,105,110,103,0] /* s;[priority,] messag */, "i8", ALLOC_NORMAL);
__str7=allocate([37,115,0] /* %s\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([108,59,109,97,115,107,32,102,111,114,32,112,114,105,111,114,105,116,121,0] /* l;mask for priority\ */, "i8", ALLOC_NORMAL);
__str9=allocate([108,58,76,79,71,95,77,65,83,75,0] /* l:LOG_MASK\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([108,58,76,79,71,95,85,80,84,79,0] /* l:LOG_UPTO\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([111,112,101,110,108,111,103,0] /* openlog\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([99,108,111,115,101,108,111,103,0] /* closelog\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,121,115,108,111,103,0] /* syslog\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([115,101,116,108,111,103,109,97,115,107,0] /* setlogmask\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([76,79,71,95,77,65,83,75,0] /* LOG_MASK\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([76,79,71,95,85,80,84,79,0] /* LOG_UPTO\00 */, "i8", ALLOC_NORMAL);
_syslog_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
__str17=allocate([76,79,71,95,69,77,69,82,71,0] /* LOG_EMERG\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([76,79,71,95,65,76,69,82,84,0] /* LOG_ALERT\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([76,79,71,95,67,82,73,84,0] /* LOG_CRIT\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([76,79,71,95,69,82,82,0] /* LOG_ERR\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([76,79,71,95,87,65,82,78,73,78,71,0] /* LOG_WARNING\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([76,79,71,95,78,79,84,73,67,69,0] /* LOG_NOTICE\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([76,79,71,95,73,78,70,79,0] /* LOG_INFO\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([76,79,71,95,68,69,66,85,71,0] /* LOG_DEBUG\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([76,79,71,95,80,73,68,0] /* LOG_PID\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([76,79,71,95,67,79,78,83,0] /* LOG_CONS\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([76,79,71,95,78,68,69,76,65,89,0] /* LOG_NDELAY\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([76,79,71,95,78,79,87,65,73,84,0] /* LOG_NOWAIT\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([76,79,71,95,80,69,82,82,79,82,0] /* LOG_PERROR\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([76,79,71,95,75,69,82,78,0] /* LOG_KERN\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([76,79,71,95,85,83,69,82,0] /* LOG_USER\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([76,79,71,95,77,65,73,76,0] /* LOG_MAIL\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([76,79,71,95,68,65,69,77,79,78,0] /* LOG_DAEMON\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([76,79,71,95,65,85,84,72,0] /* LOG_AUTH\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([76,79,71,95,76,80,82,0] /* LOG_LPR\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([76,79,71,95,76,79,67,65,76,48,0] /* LOG_LOCAL0\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([76,79,71,95,76,79,67,65,76,49,0] /* LOG_LOCAL1\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([76,79,71,95,76,79,67,65,76,50,0] /* LOG_LOCAL2\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([76,79,71,95,76,79,67,65,76,51,0] /* LOG_LOCAL3\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([76,79,71,95,76,79,67,65,76,52,0] /* LOG_LOCAL4\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([76,79,71,95,76,79,67,65,76,53,0] /* LOG_LOCAL5\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([76,79,71,95,76,79,67,65,76,54,0] /* LOG_LOCAL6\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([76,79,71,95,76,79,67,65,76,55,0] /* LOG_LOCAL7\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([76,79,71,95,83,89,83,76,79,71,0] /* LOG_SYSLOG\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([76,79,71,95,67,82,79,78,0] /* LOG_CRON\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([76,79,71,95,85,85,67,80,0] /* LOG_UUCP\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([76,79,71,95,78,69,87,83,0] /* LOG_NEWS\00 */, "i8", ALLOC_NORMAL);
HEAP[_keywords_8364]=__str2;
HEAP[_keywords_8364+4]=__str3;
HEAP[_keywords_8364+8]=__str4;
HEAP[_syslog_methods]=__str11;
HEAP[_syslog_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_syslog_methods+16]=__str12;
HEAP[_syslog_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_syslog_methods+32]=__str13;
HEAP[_syslog_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_syslog_methods+48]=__str14;
HEAP[_syslog_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_syslog_methods+64]=__str15;
HEAP[_syslog_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_syslog_methods+80]=__str16;
HEAP[_syslog_methods+84]=(FUNCTION_TABLE_OFFSET + 12);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

