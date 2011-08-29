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



var $0___SIZE = 112; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 196; // %2
  
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
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_RandomObject___SIZE = 2508; // %struct.RandomObject
  var $struct_RandomObject___FLATTENER = [0,4,8,2504];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _mag01_8316;

var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8478;

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
var _random_methods;
var _random_doc;
var __str20;
var _Random_Type;
var _module_doc;
var __str21;
var __str22;






































  function _genrand_int32($self) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $y;
        var $mt;
        var $kk;
        $self_addr=$self;
        var $1=$self_addr; //@line 102 "_randommodule.c"
        var $2=$1+8; //@line 102 "_randommodule.c"
        var $3=$2; //@line 102 "_randommodule.c"
        $mt=$3; //@line 102 "_randommodule.c"
        var $4=$self_addr; //@line 103 "_randommodule.c"
        var $5=$4+2504; //@line 103 "_randommodule.c"
        var $6=HEAP[$5]; //@line 103 "_randommodule.c"
        var $7=($6) > 623; //@line 103 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 103 "_randommodule.c"
      case 1: // $bb
        $kk=0; //@line 106 "_randommodule.c"
        __label__ = 2; break;
      case 2: // $bb1
        var $8=$mt; //@line 107 "_randommodule.c"
        var $9=$kk; //@line 107 "_randommodule.c"
        var $10=$8+4*$9; //@line 107 "_randommodule.c"
        var $11=HEAP[$10]; //@line 107 "_randommodule.c"
        var $12=($11) & -2147483648; //@line 107 "_randommodule.c"
        var $13=$kk; //@line 107 "_randommodule.c"
        var $14=($13) + 1; //@line 107 "_randommodule.c"
        var $15=$mt; //@line 107 "_randommodule.c"
        var $16=$15+4*$14; //@line 107 "_randommodule.c"
        var $17=HEAP[$16]; //@line 107 "_randommodule.c"
        var $18=($17) & 2147483647; //@line 107 "_randommodule.c"
        var $19=($18) | ($12); //@line 107 "_randommodule.c"
        $y=$19; //@line 107 "_randommodule.c"
        var $20=$kk; //@line 108 "_randommodule.c"
        var $21=($20) + 397; //@line 108 "_randommodule.c"
        var $22=$mt; //@line 108 "_randommodule.c"
        var $23=$22+4*$21; //@line 108 "_randommodule.c"
        var $24=HEAP[$23]; //@line 108 "_randommodule.c"
        var $25=$y; //@line 108 "_randommodule.c"
        var $26=((($25))>>>0) >>> 1; //@line 108 "_randommodule.c"
        var $27=$y; //@line 108 "_randommodule.c"
        var $28=($27) & 1; //@line 108 "_randommodule.c"
        var $29=_mag01_8316+$28*4; //@line 108 "_randommodule.c"
        var $30=HEAP[$29]; //@line 108 "_randommodule.c"
        var $31=($26) ^ ($24); //@line 108 "_randommodule.c"
        var $32=($31) ^ ($30); //@line 108 "_randommodule.c"
        var $33=$mt; //@line 108 "_randommodule.c"
        var $34=$kk; //@line 108 "_randommodule.c"
        var $35=$33+4*$34; //@line 108 "_randommodule.c"
        HEAP[$35]=$32; //@line 108 "_randommodule.c"
        var $36=$kk; //@line 106 "_randommodule.c"
        var $37=($36) + 1; //@line 106 "_randommodule.c"
        $kk=$37; //@line 106 "_randommodule.c"
        var $38=($37) <= 226; //@line 106 "_randommodule.c"
        if ($38) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 106 "_randommodule.c"
      case 3: // $bb4
        var $39=__lastLabel__ == 3 ? $70 : ($72);
        var $40=$kk; //@line 111 "_randommodule.c"
        var $41=$39+4*$40; //@line 111 "_randommodule.c"
        var $42=HEAP[$41]; //@line 111 "_randommodule.c"
        var $43=($42) & -2147483648; //@line 111 "_randommodule.c"
        var $44=$kk; //@line 111 "_randommodule.c"
        var $45=($44) + 1; //@line 111 "_randommodule.c"
        var $46=$mt; //@line 111 "_randommodule.c"
        var $47=$46+4*$45; //@line 111 "_randommodule.c"
        var $48=HEAP[$47]; //@line 111 "_randommodule.c"
        var $49=($48) & 2147483647; //@line 111 "_randommodule.c"
        var $50=($49) | ($43); //@line 111 "_randommodule.c"
        $y=$50; //@line 111 "_randommodule.c"
        var $51=$kk; //@line 112 "_randommodule.c"
        var $52=($51) + -227; //@line 112 "_randommodule.c"
        var $53=$mt; //@line 112 "_randommodule.c"
        var $54=$53+4*$52; //@line 112 "_randommodule.c"
        var $55=HEAP[$54]; //@line 112 "_randommodule.c"
        var $56=$y; //@line 112 "_randommodule.c"
        var $57=((($56))>>>0) >>> 1; //@line 112 "_randommodule.c"
        var $58=$y; //@line 112 "_randommodule.c"
        var $59=($58) & 1; //@line 112 "_randommodule.c"
        var $60=_mag01_8316+$59*4; //@line 112 "_randommodule.c"
        var $61=HEAP[$60]; //@line 112 "_randommodule.c"
        var $62=($57) ^ ($55); //@line 112 "_randommodule.c"
        var $63=($62) ^ ($61); //@line 112 "_randommodule.c"
        var $64=$mt; //@line 112 "_randommodule.c"
        var $65=$kk; //@line 112 "_randommodule.c"
        var $66=$64+4*$65; //@line 112 "_randommodule.c"
        HEAP[$66]=$63; //@line 112 "_randommodule.c"
        var $67=$kk; //@line 110 "_randommodule.c"
        var $68=($67) + 1; //@line 110 "_randommodule.c"
        $kk=$68; //@line 110 "_randommodule.c"
        var $69=($68) <= 622; //@line 110 "_randommodule.c"
        var $70=$mt; //@line 111 "_randommodule.c"
        if ($69) { __lastLabel__ = 3; __label__ = 3; break; } else { __lastLabel__ = 3; __label__ = 5; break; } //@line 110 "_randommodule.c"
      case 4: // $bb5thread_pre_split
        var $_pr=$kk;
        var $71=($_pr) <= 622; //@line 110 "_randommodule.c"
        var $72=$mt; //@line 111 "_randommodule.c"
        if ($71) { __lastLabel__ = 4; __label__ = 3; break; } else { __lastLabel__ = 4; __label__ = 5; break; } //@line 110 "_randommodule.c"
      case 5: // $bb6
        var $_lcssa=__lastLabel__ == 4 ? $72 : ($70);
        var $73=$_lcssa+2492; //@line 114 "_randommodule.c"
        var $74=HEAP[$73]; //@line 114 "_randommodule.c"
        var $75=($74) & -2147483648; //@line 114 "_randommodule.c"
        var $76=$mt; //@line 114 "_randommodule.c"
        var $77=$76; //@line 114 "_randommodule.c"
        var $78=HEAP[$77]; //@line 114 "_randommodule.c"
        var $79=($78) & 2147483647; //@line 114 "_randommodule.c"
        var $80=($79) | ($75); //@line 114 "_randommodule.c"
        $y=$80; //@line 114 "_randommodule.c"
        var $81=$mt; //@line 115 "_randommodule.c"
        var $82=$81+1584; //@line 115 "_randommodule.c"
        var $83=HEAP[$82]; //@line 115 "_randommodule.c"
        var $84=$y; //@line 115 "_randommodule.c"
        var $85=((($84))>>>0) >>> 1; //@line 115 "_randommodule.c"
        var $86=$y; //@line 115 "_randommodule.c"
        var $87=($86) & 1; //@line 115 "_randommodule.c"
        var $88=_mag01_8316+$87*4; //@line 115 "_randommodule.c"
        var $89=HEAP[$88]; //@line 115 "_randommodule.c"
        var $90=($85) ^ ($83); //@line 115 "_randommodule.c"
        var $91=($90) ^ ($89); //@line 115 "_randommodule.c"
        var $92=$mt; //@line 115 "_randommodule.c"
        var $93=$92+2492; //@line 115 "_randommodule.c"
        HEAP[$93]=$91; //@line 115 "_randommodule.c"
        var $94=$self_addr; //@line 117 "_randommodule.c"
        var $95=$94+2504; //@line 117 "_randommodule.c"
        HEAP[$95]=0; //@line 117 "_randommodule.c"
        __label__ = 6; break; //@line 117 "_randommodule.c"
      case 6: // $bb7
        var $96=$self_addr; //@line 120 "_randommodule.c"
        var $97=$96+2504; //@line 120 "_randommodule.c"
        var $98=HEAP[$97]; //@line 120 "_randommodule.c"
        var $99=$mt; //@line 120 "_randommodule.c"
        var $100=$99+4*$98; //@line 120 "_randommodule.c"
        var $101=HEAP[$100]; //@line 120 "_randommodule.c"
        $y=$101; //@line 120 "_randommodule.c"
        var $102=($98) + 1; //@line 120 "_randommodule.c"
        var $103=$self_addr; //@line 120 "_randommodule.c"
        var $104=$103+2504; //@line 120 "_randommodule.c"
        HEAP[$104]=$102; //@line 120 "_randommodule.c"
        var $105=$y; //@line 121 "_randommodule.c"
        var $106=((($105))>>>0) >>> 11; //@line 121 "_randommodule.c"
        var $107=$y; //@line 121 "_randommodule.c"
        var $108=($106) ^ ($107); //@line 121 "_randommodule.c"
        $y=$108; //@line 121 "_randommodule.c"
        var $109=$y; //@line 122 "_randommodule.c"
        var $110=($109) << 7; //@line 122 "_randommodule.c"
        var $111=($110) & -1658038656; //@line 122 "_randommodule.c"
        var $112=$y; //@line 122 "_randommodule.c"
        var $113=($111) ^ ($112); //@line 122 "_randommodule.c"
        $y=$113; //@line 122 "_randommodule.c"
        var $114=$y; //@line 123 "_randommodule.c"
        var $115=($114) << 15; //@line 123 "_randommodule.c"
        var $116=($115) & -272236544; //@line 123 "_randommodule.c"
        var $117=$y; //@line 123 "_randommodule.c"
        var $118=($116) ^ ($117); //@line 123 "_randommodule.c"
        $y=$118; //@line 123 "_randommodule.c"
        var $119=$y; //@line 124 "_randommodule.c"
        var $120=((($119))>>>0) >>> 18; //@line 124 "_randommodule.c"
        var $121=$y; //@line 124 "_randommodule.c"
        var $122=($120) ^ ($121); //@line 124 "_randommodule.c"
        $y=$122; //@line 124 "_randommodule.c"
        var $123=$y; //@line 125 "_randommodule.c"
        $0=$123; //@line 125 "_randommodule.c"
        var $124=$0; //@line 125 "_randommodule.c"
        $retval=$124; //@line 125 "_randommodule.c"
        var $retval8=$retval; //@line 125 "_randommodule.c"
        ;
        return $retval8; //@line 125 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_random($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    var $a;
    var $b;
    $self_addr=$self;
    var $1=$self_addr; //@line 140 "_randommodule.c"
    var $2=_genrand_int32($1); //@line 140 "_randommodule.c"
    var $3=((($2))>>>0) >>> 5; //@line 140 "_randommodule.c"
    $a=$3; //@line 140 "_randommodule.c"
    var $4=$self_addr; //@line 140 "_randommodule.c"
    var $5=_genrand_int32($4); //@line 140 "_randommodule.c"
    var $6=((($5))>>>0) >>> 6; //@line 140 "_randommodule.c"
    $b=$6; //@line 140 "_randommodule.c"
    var $7=$a; //@line 141 "_randommodule.c"
    var $8=($7); //@line 141 "_randommodule.c"
    var $9=($8) * 67108864; //@line 141 "_randommodule.c"
    var $10=$b; //@line 141 "_randommodule.c"
    var $11=($10); //@line 141 "_randommodule.c"
    var $12=($9) + ($11); //@line 141 "_randommodule.c"
    var $13=($12) * 1.1102230246251565e-16; //@line 141 "_randommodule.c"
    var $14=_PyFloat_FromDouble($13); //@line 141 "_randommodule.c"
    $0=$14; //@line 141 "_randommodule.c"
    var $15=$0; //@line 141 "_randommodule.c"
    $retval=$15; //@line 141 "_randommodule.c"
    var $retval1=$retval; //@line 141 "_randommodule.c"
    ;
    return $retval1; //@line 141 "_randommodule.c"
  }
  

  function _init_genrand($self, $s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $s_addr;
        var $mti;
        var $mt;
        $self_addr=$self;
        $s_addr=$s;
        var $0=$self_addr; //@line 151 "_randommodule.c"
        var $1=$0+8; //@line 151 "_randommodule.c"
        var $2=$1; //@line 151 "_randommodule.c"
        $mt=$2; //@line 151 "_randommodule.c"
        var $3=$mt; //@line 152 "_randommodule.c"
        var $4=$3; //@line 152 "_randommodule.c"
        var $5=$s_addr; //@line 152 "_randommodule.c"
        HEAP[$4]=$5; //@line 152 "_randommodule.c"
        $mti=1; //@line 153 "_randommodule.c"
        __label__ = 1; break;
      case 1: // $bb
        var $6=$mti; //@line 154 "_randommodule.c"
        var $7=((($6) - 1)&4294967295); //@line 154 "_randommodule.c"
        var $8=$mt; //@line 154 "_randommodule.c"
        var $9=(($8+4*$7)&4294967295); //@line 154 "_randommodule.c"
        var $10=HEAP[$9]; //@line 154 "_randommodule.c"
        var $11=$mti; //@line 154 "_randommodule.c"
        var $12=((($11) - 1)&4294967295); //@line 154 "_randommodule.c"
        var $13=$mt; //@line 154 "_randommodule.c"
        var $14=(($13+4*$12)&4294967295); //@line 154 "_randommodule.c"
        var $15=HEAP[$14]; //@line 154 "_randommodule.c"
        var $16=((($15))>>>0) >>> 30; //@line 154 "_randommodule.c"
        var $17=($16) ^ ($10); //@line 154 "_randommodule.c"
        var $18=((($17) * 1812433253)&4294967295); //@line 154 "_randommodule.c"
        var $19=$mti; //@line 154 "_randommodule.c"
        var $20=((($18) + ($19))&4294967295); //@line 154 "_randommodule.c"
        var $21=$mt; //@line 154 "_randommodule.c"
        var $22=$mti; //@line 154 "_randommodule.c"
        var $23=(($21+4*$22)&4294967295); //@line 154 "_randommodule.c"
        HEAP[$23]=$20; //@line 154 "_randommodule.c"
        var $24=$mt; //@line 160 "_randommodule.c"
        var $25=$mti; //@line 160 "_randommodule.c"
        var $26=$24+4*$25; //@line 160 "_randommodule.c"
        var $27=HEAP[$26]; //@line 160 "_randommodule.c"
        var $28=$mt; //@line 160 "_randommodule.c"
        var $29=$mti; //@line 160 "_randommodule.c"
        var $30=$28+4*$29; //@line 160 "_randommodule.c"
        HEAP[$30]=$27; //@line 160 "_randommodule.c"
        var $31=$mti; //@line 153 "_randommodule.c"
        var $32=($31) + 1; //@line 153 "_randommodule.c"
        $mti=$32; //@line 153 "_randommodule.c"
        var $33=($32) <= 623; //@line 153 "_randommodule.c"
        if ($33) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 153 "_randommodule.c"
      case 2: // $bb2
        var $34=$self_addr; //@line 163 "_randommodule.c"
        var $35=$34+2504; //@line 163 "_randommodule.c"
        var $36=$mti; //@line 163 "_randommodule.c"
        HEAP[$35]=$36; //@line 163 "_randommodule.c"
        ;
        return; //@line 164 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_by_array($self, $init_key, $key_length) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $init_key_addr;
        var $key_length_addr;
        var $retval;
        var $0;
        var $i;
        var $j;
        var $k;
        var $mt;
        $self_addr=$self;
        $init_key_addr=$init_key;
        $key_length_addr=$key_length;
        var $1=$self_addr; //@line 176 "_randommodule.c"
        var $2=$1+8; //@line 176 "_randommodule.c"
        var $3=$2; //@line 176 "_randommodule.c"
        $mt=$3; //@line 176 "_randommodule.c"
        var $4=$self_addr; //@line 177 "_randommodule.c"
        _init_genrand($4, 19650218); //@line 177 "_randommodule.c"
        $i=1; //@line 178 "_randommodule.c"
        $j=0; //@line 178 "_randommodule.c"
        var $5=$key_length_addr; //@line 179 "_randommodule.c"
        var $6=($5) >= 624; //@line 179 "_randommodule.c"
        var $max=($6) ? ($5) : 624; //@line 179 "_randommodule.c"
        $k=$max; //@line 179 "_randommodule.c"
        var $7=($max)!=0; //@line 180 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 180 "_randommodule.c"
      case 1: // $bb
        var $8=$mt; //@line 181 "_randommodule.c"
        var $9=$i; //@line 181 "_randommodule.c"
        var $10=(($8+4*$9)&4294967295); //@line 181 "_randommodule.c"
        var $11=HEAP[$10]; //@line 181 "_randommodule.c"
        var $12=$i; //@line 181 "_randommodule.c"
        var $13=((($12) - 1)&4294967295); //@line 181 "_randommodule.c"
        var $14=$mt; //@line 181 "_randommodule.c"
        var $15=(($14+4*$13)&4294967295); //@line 181 "_randommodule.c"
        var $16=HEAP[$15]; //@line 181 "_randommodule.c"
        var $17=$i; //@line 181 "_randommodule.c"
        var $18=((($17) - 1)&4294967295); //@line 181 "_randommodule.c"
        var $19=$mt; //@line 181 "_randommodule.c"
        var $20=(($19+4*$18)&4294967295); //@line 181 "_randommodule.c"
        var $21=HEAP[$20]; //@line 181 "_randommodule.c"
        var $22=((($21))>>>0) >>> 30; //@line 181 "_randommodule.c"
        var $23=($22) ^ ($16); //@line 181 "_randommodule.c"
        var $24=((($23) * 1664525)&4294967295); //@line 181 "_randommodule.c"
        var $25=($24) ^ ($11); //@line 181 "_randommodule.c"
        var $26=$init_key_addr; //@line 181 "_randommodule.c"
        var $27=$j; //@line 181 "_randommodule.c"
        var $28=(($26+4*$27)&4294967295); //@line 181 "_randommodule.c"
        var $29=HEAP[$28]; //@line 181 "_randommodule.c"
        var $30=$j; //@line 181 "_randommodule.c"
        var $31=((($30) + ($29))&4294967295); //@line 181 "_randommodule.c"
        var $32=((($31) + ($25))&4294967295); //@line 181 "_randommodule.c"
        var $33=$mt; //@line 181 "_randommodule.c"
        var $34=$i; //@line 181 "_randommodule.c"
        var $35=(($33+4*$34)&4294967295); //@line 181 "_randommodule.c"
        HEAP[$35]=$32; //@line 181 "_randommodule.c"
        var $36=$mt; //@line 183 "_randommodule.c"
        var $37=$i; //@line 183 "_randommodule.c"
        var $38=$36+4*$37; //@line 183 "_randommodule.c"
        var $39=HEAP[$38]; //@line 183 "_randommodule.c"
        var $40=$mt; //@line 183 "_randommodule.c"
        var $41=$i; //@line 183 "_randommodule.c"
        var $42=$40+4*$41; //@line 183 "_randommodule.c"
        HEAP[$42]=$39; //@line 183 "_randommodule.c"
        var $43=$i; //@line 184 "_randommodule.c"
        var $44=($43) + 1; //@line 184 "_randommodule.c"
        $i=$44; //@line 184 "_randommodule.c"
        var $45=$j; //@line 184 "_randommodule.c"
        var $46=($45) + 1; //@line 184 "_randommodule.c"
        $j=$46; //@line 184 "_randommodule.c"
        var $47=($44) > 623; //@line 185 "_randommodule.c"
        if ($47) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 185 "_randommodule.c"
      case 2: // $bb1
        var $48=$mt; //@line 185 "_randommodule.c"
        var $49=$48+2492; //@line 185 "_randommodule.c"
        var $50=HEAP[$49]; //@line 185 "_randommodule.c"
        var $51=$mt; //@line 185 "_randommodule.c"
        var $52=$51; //@line 185 "_randommodule.c"
        HEAP[$52]=$50; //@line 185 "_randommodule.c"
        $i=1; //@line 185 "_randommodule.c"
        __label__ = 3; break; //@line 185 "_randommodule.c"
      case 3: // $bb2
        var $53=$j; //@line 186 "_randommodule.c"
        var $54=$key_length_addr; //@line 186 "_randommodule.c"
        var $55=($53) >= ($54); //@line 186 "_randommodule.c"
        if ($55) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 186 "_randommodule.c"
      case 4: // $bb3
        $j=0; //@line 186 "_randommodule.c"
        __label__ = 5; break; //@line 186 "_randommodule.c"
      case 5: // $bb4
        var $56=$k; //@line 180 "_randommodule.c"
        var $57=($56) - 1; //@line 180 "_randommodule.c"
        $k=$57; //@line 180 "_randommodule.c"
        var $58=($57)!=0; //@line 180 "_randommodule.c"
        if ($58) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 180 "_randommodule.c"
      case 6: // $bb6
        $k=623; //@line 188 "_randommodule.c"
        var $59=$mt; //@line 189 "_randommodule.c"
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb7
        var $60=__lastLabel__ == 6 ? $59 : ($101);
        var $61=$i; //@line 189 "_randommodule.c"
        var $62=(($60+4*$61)&4294967295); //@line 189 "_randommodule.c"
        var $63=HEAP[$62]; //@line 189 "_randommodule.c"
        var $64=$i; //@line 189 "_randommodule.c"
        var $65=((($64) - 1)&4294967295); //@line 189 "_randommodule.c"
        var $66=$mt; //@line 189 "_randommodule.c"
        var $67=(($66+4*$65)&4294967295); //@line 189 "_randommodule.c"
        var $68=HEAP[$67]; //@line 189 "_randommodule.c"
        var $69=$i; //@line 189 "_randommodule.c"
        var $70=((($69) - 1)&4294967295); //@line 189 "_randommodule.c"
        var $71=$mt; //@line 189 "_randommodule.c"
        var $72=(($71+4*$70)&4294967295); //@line 189 "_randommodule.c"
        var $73=HEAP[$72]; //@line 189 "_randommodule.c"
        var $74=((($73))>>>0) >>> 30; //@line 189 "_randommodule.c"
        var $75=($74) ^ ($68); //@line 189 "_randommodule.c"
        var $76=((($75) * 1566083941)&4294967295); //@line 189 "_randommodule.c"
        var $77=($76) ^ ($63); //@line 189 "_randommodule.c"
        var $78=$i; //@line 189 "_randommodule.c"
        var $79=((($77) - ($78))&4294967295); //@line 189 "_randommodule.c"
        var $80=$mt; //@line 189 "_randommodule.c"
        var $81=$i; //@line 189 "_randommodule.c"
        var $82=(($80+4*$81)&4294967295); //@line 189 "_randommodule.c"
        HEAP[$82]=$79; //@line 189 "_randommodule.c"
        var $83=$mt; //@line 191 "_randommodule.c"
        var $84=$i; //@line 191 "_randommodule.c"
        var $85=$83+4*$84; //@line 191 "_randommodule.c"
        var $86=HEAP[$85]; //@line 191 "_randommodule.c"
        var $87=$mt; //@line 191 "_randommodule.c"
        var $88=$i; //@line 191 "_randommodule.c"
        var $89=$87+4*$88; //@line 191 "_randommodule.c"
        HEAP[$89]=$86; //@line 191 "_randommodule.c"
        var $90=$i; //@line 192 "_randommodule.c"
        var $91=($90) + 1; //@line 192 "_randommodule.c"
        $i=$91; //@line 192 "_randommodule.c"
        var $92=($91) > 623; //@line 193 "_randommodule.c"
        if ($92) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 193 "_randommodule.c"
      case 8: // $bb8
        var $93=$mt; //@line 193 "_randommodule.c"
        var $94=$93+2492; //@line 193 "_randommodule.c"
        var $95=HEAP[$94]; //@line 193 "_randommodule.c"
        var $96=$mt; //@line 193 "_randommodule.c"
        var $97=$96; //@line 193 "_randommodule.c"
        HEAP[$97]=$95; //@line 193 "_randommodule.c"
        $i=1; //@line 193 "_randommodule.c"
        __label__ = 9; break; //@line 193 "_randommodule.c"
      case 9: // $bb9
        var $98=$k; //@line 188 "_randommodule.c"
        var $99=($98) - 1; //@line 188 "_randommodule.c"
        $k=$99; //@line 188 "_randommodule.c"
        var $100=($99)!=0; //@line 188 "_randommodule.c"
        var $101=$mt; //@line 189 "_randommodule.c"
        if ($100) { __lastLabel__ = 9; __label__ = 7; break; } else { __lastLabel__ = 9; __label__ = 10; break; } //@line 188 "_randommodule.c"
      case 10: // $bb11
        var $102=$101; //@line 196 "_randommodule.c"
        HEAP[$102]=-2147483648; //@line 196 "_randommodule.c"
        var $103=HEAP[__Py_NoneStruct]; //@line 197 "_randommodule.c"
        var $104=($103) + 1; //@line 197 "_randommodule.c"
        HEAP[__Py_NoneStruct]=$104; //@line 197 "_randommodule.c"
        $0=__Py_NoneStruct; //@line 198 "_randommodule.c"
        var $105=$0; //@line 198 "_randommodule.c"
        $retval=$105; //@line 198 "_randommodule.c"
        var $retval12=$retval; //@line 198 "_randommodule.c"
        ;
        return $retval12; //@line 198 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_seed($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $masklower;
        var $thirtytwo;
        var $n;
        var $key;
        var $keymax;
        var $keyused;
        var $err;
        var $arg=__stackBase__;
        var $now=__stackBase__+4;
        var $hash;
        var $newn;
        var $pychunk;
        var $chunk;
        var $bigger;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 209 "_randommodule.c"
        $masklower=0; //@line 210 "_randommodule.c"
        $thirtytwo=0; //@line 211 "_randommodule.c"
        $n=0; //@line 212 "_randommodule.c"
        $key=0; //@line 213 "_randommodule.c"
        HEAP[$arg]=0; //@line 218 "_randommodule.c"
        var $1=$args_addr; //@line 220 "_randommodule.c"
        var $2=_PyArg_UnpackTuple($1, __str, 0, 1, allocate([$arg,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 220 "_randommodule.c"
        var $3=($2)==0; //@line 220 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 220 "_randommodule.c"
      case 1: // $bb
        $0=0; //@line 221 "_randommodule.c"
        __label__ = 44; break; //@line 221 "_randommodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg]; //@line 223 "_randommodule.c"
        var $5=($4)==0; //@line 223 "_randommodule.c"
        var $6=HEAP[$arg]; //@line 223 "_randommodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 223 "_randommodule.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 223 "_randommodule.c"
      case 3: // $bb3
        var $8=_time($now); //@line 226 "_randommodule.c"
        var $9=HEAP[$now]; //@line 227 "_randommodule.c"
        var $10=$self_addr; //@line 227 "_randommodule.c"
        _init_genrand($10, $9); //@line 227 "_randommodule.c"
        var $11=HEAP[__Py_NoneStruct]; //@line 228 "_randommodule.c"
        var $12=($11) + 1; //@line 228 "_randommodule.c"
        HEAP[__Py_NoneStruct]=$12; //@line 228 "_randommodule.c"
        $0=__Py_NoneStruct; //@line 229 "_randommodule.c"
        __label__ = 44; break; //@line 229 "_randommodule.c"
      case 4: // $bb4
        var $13=HEAP[$arg]; //@line 234 "_randommodule.c"
        var $14=$13+4; //@line 234 "_randommodule.c"
        var $15=HEAP[$14]; //@line 234 "_randommodule.c"
        var $16=$15+84; //@line 234 "_randommodule.c"
        var $17=HEAP[$16]; //@line 234 "_randommodule.c"
        var $18=($17) & 8388608; //@line 234 "_randommodule.c"
        var $19=($18)!=0; //@line 234 "_randommodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 234 "_randommodule.c"
      case 5: // $bb5
        var $20=HEAP[$arg]; //@line 234 "_randommodule.c"
        var $21=$20+4; //@line 234 "_randommodule.c"
        var $22=HEAP[$21]; //@line 234 "_randommodule.c"
        var $23=$22+84; //@line 234 "_randommodule.c"
        var $24=HEAP[$23]; //@line 234 "_randommodule.c"
        var $25=($24) & 16777216; //@line 234 "_randommodule.c"
        var $26=($25)!=0; //@line 234 "_randommodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 234 "_randommodule.c"
      case 6: // $bb6
        var $27=HEAP[$arg]; //@line 235 "_randommodule.c"
        var $28=_PyNumber_Absolute($27); //@line 235 "_randommodule.c"
        $n=$28; //@line 235 "_randommodule.c"
        __lastLabel__ = 6; __label__ = 9; break; //@line 235 "_randommodule.c"
      case 7: // $bb7
        var $29=HEAP[$arg]; //@line 237 "_randommodule.c"
        var $30=_PyObject_Hash($29); //@line 237 "_randommodule.c"
        $hash=$30; //@line 237 "_randommodule.c"
        var $31=$hash; //@line 238 "_randommodule.c"
        var $32=($31)==-1; //@line 238 "_randommodule.c"
        if ($32) { __label__ = 34; break; } else { __label__ = 8; break; } //@line 238 "_randommodule.c"
      case 8: // $bb8
        var $33=$hash; //@line 240 "_randommodule.c"
        var $34=_PyLong_FromUnsignedLong($33); //@line 240 "_randommodule.c"
        $n=$34; //@line 240 "_randommodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 240 "_randommodule.c"
      case 9: // $bb9
        var $35=__lastLabel__ == 8 ? $34 : ($28);
        var $36=($35)==0; //@line 242 "_randommodule.c"
        if ($36) { __label__ = 34; break; } else { __label__ = 10; break; } //@line 242 "_randommodule.c"
      case 10: // $bb10
        $keymax=8; //@line 253 "_randommodule.c"
        $keyused=0; //@line 254 "_randommodule.c"
        var $37=$keymax; //@line 255 "_randommodule.c"
        var $38=($37) * 4; //@line 255 "_randommodule.c"
        var $39=_PyMem_Malloc($38); //@line 255 "_randommodule.c"
        var $40=$39; //@line 255 "_randommodule.c"
        $key=$40; //@line 255 "_randommodule.c"
        var $41=$key; //@line 256 "_randommodule.c"
        var $42=($41)==0; //@line 256 "_randommodule.c"
        if ($42) { __label__ = 34; break; } else { __label__ = 11; break; } //@line 256 "_randommodule.c"
      case 11: // $bb11
        var $43=_PyLong_FromUnsignedLong(-1); //@line 259 "_randommodule.c"
        $masklower=$43; //@line 259 "_randommodule.c"
        var $44=$masklower; //@line 260 "_randommodule.c"
        var $45=($44)==0; //@line 260 "_randommodule.c"
        if ($45) { __label__ = 37; break; } else { __label__ = 12; break; } //@line 260 "_randommodule.c"
      case 12: // $bb12
        var $46=_PyInt_FromLong(32); //@line 262 "_randommodule.c"
        $thirtytwo=$46; //@line 262 "_randommodule.c"
        var $47=$thirtytwo; //@line 263 "_randommodule.c"
        var $48=($47)==0; //@line 263 "_randommodule.c"
        if ($48) { __label__ = 34; break; } else { __label__ = 30; break; } //@line 263 "_randommodule.c"
      case 13: // $bb14
        var $49=$err; //@line 270 "_randommodule.c"
        var $50=($49)==-1; //@line 270 "_randommodule.c"
        if ($50) { __label__ = 34; break; } else { __label__ = 14; break; } //@line 270 "_randommodule.c"
      case 14: // $bb15
        var $51=$n; //@line 272 "_randommodule.c"
        var $52=$masklower; //@line 272 "_randommodule.c"
        var $53=_PyNumber_And($51, $52); //@line 272 "_randommodule.c"
        $pychunk=$53; //@line 272 "_randommodule.c"
        var $54=$pychunk; //@line 273 "_randommodule.c"
        var $55=($54)==0; //@line 273 "_randommodule.c"
        if ($55) { __label__ = 34; break; } else { __label__ = 15; break; } //@line 273 "_randommodule.c"
      case 15: // $bb16
        var $56=$pychunk; //@line 275 "_randommodule.c"
        var $57=_PyLong_AsUnsignedLong($56); //@line 275 "_randommodule.c"
        $chunk=$57; //@line 275 "_randommodule.c"
        var $58=$pychunk; //@line 276 "_randommodule.c"
        var $59=$58; //@line 276 "_randommodule.c"
        var $60=HEAP[$59]; //@line 276 "_randommodule.c"
        var $61=($60) - 1; //@line 276 "_randommodule.c"
        var $62=$pychunk; //@line 276 "_randommodule.c"
        var $63=$62; //@line 276 "_randommodule.c"
        HEAP[$63]=$61; //@line 276 "_randommodule.c"
        var $64=$pychunk; //@line 276 "_randommodule.c"
        var $65=$64; //@line 276 "_randommodule.c"
        var $66=HEAP[$65]; //@line 276 "_randommodule.c"
        var $67=($66)==0; //@line 276 "_randommodule.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 276 "_randommodule.c"
      case 16: // $bb17
        var $68=$pychunk; //@line 276 "_randommodule.c"
        var $69=$68+4; //@line 276 "_randommodule.c"
        var $70=HEAP[$69]; //@line 276 "_randommodule.c"
        var $71=$70+24; //@line 276 "_randommodule.c"
        var $72=HEAP[$71]; //@line 276 "_randommodule.c"
        var $73=$pychunk; //@line 276 "_randommodule.c"
        FUNCTION_TABLE[$72]($73); //@line 276 "_randommodule.c"
        __label__ = 17; break; //@line 276 "_randommodule.c"
      case 17: // $bb18
        var $74=$chunk; //@line 277 "_randommodule.c"
        var $75=($74)==-1; //@line 277 "_randommodule.c"
        if ($75) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 277 "_randommodule.c"
      case 18: // $bb19
        var $76=_PyErr_Occurred(); //@line 277 "_randommodule.c"
        var $77=($76)!=0; //@line 277 "_randommodule.c"
        if ($77) { __label__ = 34; break; } else { __label__ = 19; break; } //@line 277 "_randommodule.c"
      case 19: // $bb20
        var $78=$n; //@line 279 "_randommodule.c"
        var $79=$thirtytwo; //@line 279 "_randommodule.c"
        var $80=_PyNumber_Rshift($78, $79); //@line 279 "_randommodule.c"
        $newn=$80; //@line 279 "_randommodule.c"
        var $81=($80)==0; //@line 280 "_randommodule.c"
        if ($81) { __label__ = 34; break; } else { __label__ = 20; break; } //@line 280 "_randommodule.c"
      case 20: // $bb21
        var $82=$n; //@line 282 "_randommodule.c"
        var $83=$82; //@line 282 "_randommodule.c"
        var $84=HEAP[$83]; //@line 282 "_randommodule.c"
        var $85=($84) - 1; //@line 282 "_randommodule.c"
        var $86=$n; //@line 282 "_randommodule.c"
        var $87=$86; //@line 282 "_randommodule.c"
        HEAP[$87]=$85; //@line 282 "_randommodule.c"
        var $88=$n; //@line 282 "_randommodule.c"
        var $89=$88; //@line 282 "_randommodule.c"
        var $90=HEAP[$89]; //@line 282 "_randommodule.c"
        var $91=($90)==0; //@line 282 "_randommodule.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 282 "_randommodule.c"
      case 21: // $bb22
        var $92=$n; //@line 282 "_randommodule.c"
        var $93=$92+4; //@line 282 "_randommodule.c"
        var $94=HEAP[$93]; //@line 282 "_randommodule.c"
        var $95=$94+24; //@line 282 "_randommodule.c"
        var $96=HEAP[$95]; //@line 282 "_randommodule.c"
        var $97=$n; //@line 282 "_randommodule.c"
        FUNCTION_TABLE[$96]($97); //@line 282 "_randommodule.c"
        __label__ = 22; break; //@line 282 "_randommodule.c"
      case 22: // $bb23
        var $98=$newn; //@line 283 "_randommodule.c"
        $n=$98; //@line 283 "_randommodule.c"
        var $99=$keyused; //@line 284 "_randommodule.c"
        var $100=$keymax; //@line 284 "_randommodule.c"
        var $101=($99) >= ($100); //@line 284 "_randommodule.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 284 "_randommodule.c"
      case 23: // $bb24
        var $102=$keymax; //@line 285 "_randommodule.c"
        var $103=($102) << 1; //@line 285 "_randommodule.c"
        $bigger=$103; //@line 285 "_randommodule.c"
        var $104=$bigger; //@line 286 "_randommodule.c"
        var $105=($104) >>> 1; //@line 286 "_randommodule.c"
        var $106=$keymax; //@line 286 "_randommodule.c"
        var $107=($105)!=($106); //@line 286 "_randommodule.c"
        if ($107) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 286 "_randommodule.c"
      case 24: // $bb25
        var $108=_PyErr_NoMemory(); //@line 287 "_randommodule.c"
        __label__ = 34; break; //@line 287 "_randommodule.c"
      case 25: // $bb26
        var $109=$bigger; //@line 290 "_randommodule.c"
        var $110=($109) * 4; //@line 290 "_randommodule.c"
        var $111=$key; //@line 290 "_randommodule.c"
        var $112=$111; //@line 290 "_randommodule.c"
        var $113=_PyMem_Realloc($112, $110); //@line 290 "_randommodule.c"
        var $114=$113; //@line 290 "_randommodule.c"
        $key=$114; //@line 290 "_randommodule.c"
        var $115=$key; //@line 292 "_randommodule.c"
        var $116=($115)==0; //@line 292 "_randommodule.c"
        if ($116) { __label__ = 34; break; } else { __label__ = 26; break; } //@line 292 "_randommodule.c"
      case 26: // $bb27
        var $117=$bigger; //@line 294 "_randommodule.c"
        $keymax=$117; //@line 294 "_randommodule.c"
        __label__ = 27; break; //@line 294 "_randommodule.c"
      case 27: // $bb28
        var $118=$keyused; //@line 296 "_randommodule.c"
        var $119=$keymax; //@line 296 "_randommodule.c"
        var $120=($118) >= ($119); //@line 296 "_randommodule.c"
        if ($120) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 296 "_randommodule.c"
      case 28: // $bb29
        ___assert_fail(__str1, __str2, 296, ___PRETTY_FUNCTION___8478); //@line 296 "_randommodule.c"
        throw "Reached an unreachable!" //@line 296 "_randommodule.c"
      case 29: // $bb30
        var $121=$key; //@line 297 "_randommodule.c"
        var $122=$keyused; //@line 297 "_randommodule.c"
        var $123=$121+4*$122; //@line 297 "_randommodule.c"
        var $124=$chunk; //@line 297 "_randommodule.c"
        HEAP[$123]=$124; //@line 297 "_randommodule.c"
        var $125=$keyused; //@line 297 "_randommodule.c"
        var $126=($125) + 1; //@line 297 "_randommodule.c"
        $keyused=$126; //@line 297 "_randommodule.c"
        __label__ = 30; break; //@line 297 "_randommodule.c"
      case 30: // $bb31
        var $127=$n; //@line 265 "_randommodule.c"
        var $128=_PyObject_IsTrue($127); //@line 265 "_randommodule.c"
        $err=$128; //@line 265 "_randommodule.c"
        var $129=($128)!=0; //@line 265 "_randommodule.c"
        if ($129) { __label__ = 13; break; } else { __label__ = 31; break; } //@line 265 "_randommodule.c"
      case 31: // $bb32
        var $130=$keyused; //@line 300 "_randommodule.c"
        var $131=($130)==0; //@line 300 "_randommodule.c"
        if ($131) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 300 "_randommodule.c"
      case 32: // $bb33
        var $132=$key; //@line 301 "_randommodule.c"
        var $133=$keyused; //@line 301 "_randommodule.c"
        var $134=$132+4*$133; //@line 301 "_randommodule.c"
        HEAP[$134]=0; //@line 301 "_randommodule.c"
        var $135=$keyused; //@line 301 "_randommodule.c"
        var $136=($135) + 1; //@line 301 "_randommodule.c"
        $keyused=$136; //@line 301 "_randommodule.c"
        __label__ = 33; break; //@line 301 "_randommodule.c"
      case 33: // $bb34
        var $137=$self_addr; //@line 302 "_randommodule.c"
        var $138=$key; //@line 302 "_randommodule.c"
        var $139=$keyused; //@line 302 "_randommodule.c"
        var $140=_init_by_array($137, $138, $139); //@line 302 "_randommodule.c"
        $result=$140; //@line 302 "_randommodule.c"
        __label__ = 34; break; //@line 303 "_randommodule.c"
      case 34: // $Done
        var $_pr=$masklower;
        var $141=($_pr)!=0; //@line 304 "_randommodule.c"
        if ($141) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 304 "_randommodule.c"
      case 35: // $bb35
        var $142=$masklower; //@line 304 "_randommodule.c"
        var $143=$142; //@line 304 "_randommodule.c"
        var $144=HEAP[$143]; //@line 304 "_randommodule.c"
        var $145=($144) - 1; //@line 304 "_randommodule.c"
        var $146=$masklower; //@line 304 "_randommodule.c"
        var $147=$146; //@line 304 "_randommodule.c"
        HEAP[$147]=$145; //@line 304 "_randommodule.c"
        var $148=$masklower; //@line 304 "_randommodule.c"
        var $149=$148; //@line 304 "_randommodule.c"
        var $150=HEAP[$149]; //@line 304 "_randommodule.c"
        var $151=($150)==0; //@line 304 "_randommodule.c"
        if ($151) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 304 "_randommodule.c"
      case 36: // $bb36
        var $152=$masklower; //@line 304 "_randommodule.c"
        var $153=$152+4; //@line 304 "_randommodule.c"
        var $154=HEAP[$153]; //@line 304 "_randommodule.c"
        var $155=$154+24; //@line 304 "_randommodule.c"
        var $156=HEAP[$155]; //@line 304 "_randommodule.c"
        var $157=$masklower; //@line 304 "_randommodule.c"
        FUNCTION_TABLE[$156]($157); //@line 304 "_randommodule.c"
        __label__ = 37; break; //@line 304 "_randommodule.c"
      case 37: // $bb37
        var $158=$thirtytwo; //@line 305 "_randommodule.c"
        var $159=($158)!=0; //@line 305 "_randommodule.c"
        if ($159) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 305 "_randommodule.c"
      case 38: // $bb38
        var $160=$thirtytwo; //@line 305 "_randommodule.c"
        var $161=$160; //@line 305 "_randommodule.c"
        var $162=HEAP[$161]; //@line 305 "_randommodule.c"
        var $163=($162) - 1; //@line 305 "_randommodule.c"
        var $164=$thirtytwo; //@line 305 "_randommodule.c"
        var $165=$164; //@line 305 "_randommodule.c"
        HEAP[$165]=$163; //@line 305 "_randommodule.c"
        var $166=$thirtytwo; //@line 305 "_randommodule.c"
        var $167=$166; //@line 305 "_randommodule.c"
        var $168=HEAP[$167]; //@line 305 "_randommodule.c"
        var $169=($168)==0; //@line 305 "_randommodule.c"
        if ($169) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 305 "_randommodule.c"
      case 39: // $bb39
        var $170=$thirtytwo; //@line 305 "_randommodule.c"
        var $171=$170+4; //@line 305 "_randommodule.c"
        var $172=HEAP[$171]; //@line 305 "_randommodule.c"
        var $173=$172+24; //@line 305 "_randommodule.c"
        var $174=HEAP[$173]; //@line 305 "_randommodule.c"
        var $175=$thirtytwo; //@line 305 "_randommodule.c"
        FUNCTION_TABLE[$174]($175); //@line 305 "_randommodule.c"
        __label__ = 40; break; //@line 305 "_randommodule.c"
      case 40: // $bb40
        var $176=$n; //@line 306 "_randommodule.c"
        var $177=($176)!=0; //@line 306 "_randommodule.c"
        if ($177) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 306 "_randommodule.c"
      case 41: // $bb41
        var $178=$n; //@line 306 "_randommodule.c"
        var $179=$178; //@line 306 "_randommodule.c"
        var $180=HEAP[$179]; //@line 306 "_randommodule.c"
        var $181=($180) - 1; //@line 306 "_randommodule.c"
        var $182=$n; //@line 306 "_randommodule.c"
        var $183=$182; //@line 306 "_randommodule.c"
        HEAP[$183]=$181; //@line 306 "_randommodule.c"
        var $184=$n; //@line 306 "_randommodule.c"
        var $185=$184; //@line 306 "_randommodule.c"
        var $186=HEAP[$185]; //@line 306 "_randommodule.c"
        var $187=($186)==0; //@line 306 "_randommodule.c"
        if ($187) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 306 "_randommodule.c"
      case 42: // $bb42
        var $188=$n; //@line 306 "_randommodule.c"
        var $189=$188+4; //@line 306 "_randommodule.c"
        var $190=HEAP[$189]; //@line 306 "_randommodule.c"
        var $191=$190+24; //@line 306 "_randommodule.c"
        var $192=HEAP[$191]; //@line 306 "_randommodule.c"
        var $193=$n; //@line 306 "_randommodule.c"
        FUNCTION_TABLE[$192]($193); //@line 306 "_randommodule.c"
        __label__ = 43; break; //@line 306 "_randommodule.c"
      case 43: // $bb43
        var $194=$key; //@line 307 "_randommodule.c"
        var $195=$194; //@line 307 "_randommodule.c"
        _PyMem_Free($195); //@line 307 "_randommodule.c"
        var $196=$result; //@line 308 "_randommodule.c"
        $0=$196; //@line 308 "_randommodule.c"
        __label__ = 44; break; //@line 308 "_randommodule.c"
      case 44: // $bb44
        var $197=$0; //@line 221 "_randommodule.c"
        $retval=$197; //@line 221 "_randommodule.c"
        var $retval45=$retval; //@line 221 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 221 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_getstate($self) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $state;
        var $element;
        var $i;
        $self_addr=$self;
        var $1=_PyTuple_New(625); //@line 318 "_randommodule.c"
        $state=$1; //@line 318 "_randommodule.c"
        var $2=$state; //@line 319 "_randommodule.c"
        var $3=($2)==0; //@line 319 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 319 "_randommodule.c"
      case 1: // $bb
        $0=0; //@line 320 "_randommodule.c"
        __label__ = 11; break; //@line 320 "_randommodule.c"
      case 2: // $bb1
        $i=0; //@line 321 "_randommodule.c"
        __lastLabel__ = 2; __label__ = 5; break; //@line 321 "_randommodule.c"
      case 3: // $bb2
        var $4=$i; //@line 322 "_randommodule.c"
        var $5=$self_addr; //@line 322 "_randommodule.c"
        var $6=$5+8; //@line 322 "_randommodule.c"
        var $7=$6+$4*4; //@line 322 "_randommodule.c"
        var $8=HEAP[$7]; //@line 322 "_randommodule.c"
        var $9=_PyLong_FromUnsignedLong($8); //@line 322 "_randommodule.c"
        $element=$9; //@line 322 "_randommodule.c"
        var $10=$element; //@line 323 "_randommodule.c"
        var $11=($10)==0; //@line 323 "_randommodule.c"
        if ($11) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 323 "_randommodule.c"
      case 4: // $bb3
        var $12=$state; //@line 325 "_randommodule.c"
        var $13=$12; //@line 325 "_randommodule.c"
        var $14=$i; //@line 325 "_randommodule.c"
        var $15=$13+12; //@line 325 "_randommodule.c"
        var $16=$15+$14*4; //@line 325 "_randommodule.c"
        var $17=$element; //@line 325 "_randommodule.c"
        HEAP[$16]=$17; //@line 325 "_randommodule.c"
        var $18=$i; //@line 321 "_randommodule.c"
        var $19=($18) + 1; //@line 321 "_randommodule.c"
        $i=$19; //@line 321 "_randommodule.c"
        __lastLabel__ = 4; __label__ = 5; break; //@line 321 "_randommodule.c"
      case 5: // $bb4
        var $20=__lastLabel__ == 4 ? $19 : (0);
        var $21=($20) <= 623; //@line 321 "_randommodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 321 "_randommodule.c"
      case 6: // $bb5
        var $22=$self_addr; //@line 327 "_randommodule.c"
        var $23=$22+2504; //@line 327 "_randommodule.c"
        var $24=HEAP[$23]; //@line 327 "_randommodule.c"
        var $25=_PyLong_FromLong($24); //@line 327 "_randommodule.c"
        $element=$25; //@line 327 "_randommodule.c"
        var $26=$element; //@line 328 "_randommodule.c"
        var $27=($26)==0; //@line 328 "_randommodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 328 "_randommodule.c"
      case 7: // $bb6
        var $28=$state; //@line 330 "_randommodule.c"
        var $29=$28; //@line 330 "_randommodule.c"
        var $30=$i; //@line 330 "_randommodule.c"
        var $31=$29+12; //@line 330 "_randommodule.c"
        var $32=$31+$30*4; //@line 330 "_randommodule.c"
        var $33=$element; //@line 330 "_randommodule.c"
        HEAP[$32]=$33; //@line 330 "_randommodule.c"
        var $34=$state; //@line 331 "_randommodule.c"
        $0=$34; //@line 331 "_randommodule.c"
        __label__ = 11; break; //@line 331 "_randommodule.c"
      case 8: // $Fail
        var $35=$state; //@line 334 "_randommodule.c"
        var $36=$35; //@line 334 "_randommodule.c"
        var $37=HEAP[$36]; //@line 334 "_randommodule.c"
        var $38=($37) - 1; //@line 334 "_randommodule.c"
        var $39=$state; //@line 334 "_randommodule.c"
        var $40=$39; //@line 334 "_randommodule.c"
        HEAP[$40]=$38; //@line 334 "_randommodule.c"
        var $41=$state; //@line 334 "_randommodule.c"
        var $42=$41; //@line 334 "_randommodule.c"
        var $43=HEAP[$42]; //@line 334 "_randommodule.c"
        var $44=($43)==0; //@line 334 "_randommodule.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 334 "_randommodule.c"
      case 9: // $bb7
        var $45=$state; //@line 334 "_randommodule.c"
        var $46=$45+4; //@line 334 "_randommodule.c"
        var $47=HEAP[$46]; //@line 334 "_randommodule.c"
        var $48=$47+24; //@line 334 "_randommodule.c"
        var $49=HEAP[$48]; //@line 334 "_randommodule.c"
        var $50=$state; //@line 334 "_randommodule.c"
        FUNCTION_TABLE[$49]($50); //@line 334 "_randommodule.c"
        __label__ = 10; break; //@line 334 "_randommodule.c"
      case 10: // $bb8
        $0=0; //@line 335 "_randommodule.c"
        __label__ = 11; break; //@line 335 "_randommodule.c"
      case 11: // $bb9
        var $51=$0; //@line 320 "_randommodule.c"
        $retval=$51; //@line 320 "_randommodule.c"
        var $retval10=$retval; //@line 320 "_randommodule.c"
        ;
        return $retval10; //@line 320 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_setstate($self, $state) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $state_addr;
        var $retval;
        var $0;
        var $i;
        var $element;
        var $index;
        $self_addr=$self;
        $state_addr=$state;
        var $1=$state_addr; //@line 345 "_randommodule.c"
        var $2=$1+4; //@line 345 "_randommodule.c"
        var $3=HEAP[$2]; //@line 345 "_randommodule.c"
        var $4=$3+84; //@line 345 "_randommodule.c"
        var $5=HEAP[$4]; //@line 345 "_randommodule.c"
        var $6=($5) & 67108864; //@line 345 "_randommodule.c"
        var $7=($6)==0; //@line 345 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 345 "_randommodule.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 346 "_randommodule.c"
        _PyErr_SetString($8, __str3); //@line 346 "_randommodule.c"
        $0=0; //@line 348 "_randommodule.c"
        __label__ = 14; break; //@line 348 "_randommodule.c"
      case 2: // $bb1
        var $9=$state_addr; //@line 350 "_randommodule.c"
        var $10=_PyTuple_Size($9); //@line 350 "_randommodule.c"
        var $11=($10)!=625; //@line 350 "_randommodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 350 "_randommodule.c"
      case 3: // $bb2
        var $12=HEAP[_PyExc_ValueError]; //@line 351 "_randommodule.c"
        _PyErr_SetString($12, __str4); //@line 351 "_randommodule.c"
        $0=0; //@line 353 "_randommodule.c"
        __label__ = 14; break; //@line 353 "_randommodule.c"
      case 4: // $bb3
        $i=0; //@line 356 "_randommodule.c"
        __lastLabel__ = 4; __label__ = 9; break; //@line 356 "_randommodule.c"
      case 5: // $bb4
        var $13=_PyLong_AsUnsignedLong($32); //@line 357 "_randommodule.c"
        $element=$13; //@line 357 "_randommodule.c"
        var $14=$element; //@line 358 "_randommodule.c"
        var $15=($14)==-1; //@line 358 "_randommodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 358 "_randommodule.c"
      case 6: // $bb5
        var $16=_PyErr_Occurred(); //@line 358 "_randommodule.c"
        var $17=($16)!=0; //@line 358 "_randommodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 358 "_randommodule.c"
      case 7: // $bb6
        $0=0; //@line 359 "_randommodule.c"
        __label__ = 14; break; //@line 359 "_randommodule.c"
      case 8: // $bb7
        var $18=$i; //@line 360 "_randommodule.c"
        var $19=$self_addr; //@line 360 "_randommodule.c"
        var $20=$19+8; //@line 360 "_randommodule.c"
        var $21=$20+$18*4; //@line 360 "_randommodule.c"
        var $22=$element; //@line 360 "_randommodule.c"
        HEAP[$21]=$22; //@line 360 "_randommodule.c"
        var $23=$i; //@line 356 "_randommodule.c"
        var $24=($23) + 1; //@line 356 "_randommodule.c"
        $i=$24; //@line 356 "_randommodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 356 "_randommodule.c"
      case 9: // $bb8
        var $25=__lastLabel__ == 8 ? $24 : (0);
        var $26=($25) <= 623; //@line 356 "_randommodule.c"
        var $27=$state_addr; //@line 357 "_randommodule.c"
        var $28=$27; //@line 357 "_randommodule.c"
        var $29=$i; //@line 357 "_randommodule.c"
        var $30=$28+12; //@line 357 "_randommodule.c"
        var $31=$30+$29*4; //@line 357 "_randommodule.c"
        var $32=HEAP[$31]; //@line 357 "_randommodule.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 356 "_randommodule.c"
      case 10: // $bb9
        var $33=_PyLong_AsLong($32); //@line 363 "_randommodule.c"
        $index=$33; //@line 363 "_randommodule.c"
        var $34=$index; //@line 364 "_randommodule.c"
        var $35=($34)==-1; //@line 364 "_randommodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 364 "_randommodule.c"
      case 11: // $bb10
        var $36=_PyErr_Occurred(); //@line 364 "_randommodule.c"
        var $37=($36)!=0; //@line 364 "_randommodule.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 364 "_randommodule.c"
      case 12: // $bb11
        $0=0; //@line 365 "_randommodule.c"
        __label__ = 14; break; //@line 365 "_randommodule.c"
      case 13: // $bb12
        var $38=$self_addr; //@line 366 "_randommodule.c"
        var $39=$38+2504; //@line 366 "_randommodule.c"
        var $40=$index; //@line 366 "_randommodule.c"
        HEAP[$39]=$40; //@line 366 "_randommodule.c"
        var $41=HEAP[__Py_NoneStruct]; //@line 368 "_randommodule.c"
        var $42=($41) + 1; //@line 368 "_randommodule.c"
        HEAP[__Py_NoneStruct]=$42; //@line 368 "_randommodule.c"
        $0=__Py_NoneStruct; //@line 369 "_randommodule.c"
        __label__ = 14; break; //@line 369 "_randommodule.c"
      case 14: // $bb13
        var $43=$0; //@line 348 "_randommodule.c"
        $retval=$43; //@line 348 "_randommodule.c"
        var $retval14=$retval; //@line 348 "_randommodule.c"
        ;
        return $retval14; //@line 348 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_jumpahead($self, $n) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $n_addr;
        var $retval;
        var $0;
        var $i;
        var $j;
        var $iobj;
        var $remobj;
        var $mt;
        var $tmp;
        $self_addr=$self;
        $n_addr=$n;
        var $1=$n_addr; //@line 405 "_randommodule.c"
        var $2=$1+4; //@line 405 "_randommodule.c"
        var $3=HEAP[$2]; //@line 405 "_randommodule.c"
        var $4=$3+84; //@line 405 "_randommodule.c"
        var $5=HEAP[$4]; //@line 405 "_randommodule.c"
        var $6=($5) & 8388608; //@line 405 "_randommodule.c"
        var $7=($6)==0; //@line 405 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 405 "_randommodule.c"
      case 1: // $bb
        var $8=$n_addr; //@line 405 "_randommodule.c"
        var $9=$8+4; //@line 405 "_randommodule.c"
        var $10=HEAP[$9]; //@line 405 "_randommodule.c"
        var $11=$10+84; //@line 405 "_randommodule.c"
        var $12=HEAP[$11]; //@line 405 "_randommodule.c"
        var $13=($12) & 16777216; //@line 405 "_randommodule.c"
        var $14=($13)==0; //@line 405 "_randommodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 405 "_randommodule.c"
      case 2: // $bb1
        var $15=$n_addr; //@line 406 "_randommodule.c"
        var $16=$15+4; //@line 406 "_randommodule.c"
        var $17=HEAP[$16]; //@line 406 "_randommodule.c"
        var $18=$17+12; //@line 406 "_randommodule.c"
        var $19=HEAP[$18]; //@line 406 "_randommodule.c"
        var $20=HEAP[_PyExc_TypeError]; //@line 406 "_randommodule.c"
        var $21=_PyErr_Format($20, __str5, allocate([$19,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 406 "_randommodule.c"
        $0=0; //@line 409 "_randommodule.c"
        __label__ = 20; break; //@line 409 "_randommodule.c"
      case 3: // $bb2
        var $22=$self_addr; //@line 412 "_randommodule.c"
        var $23=$22+8; //@line 412 "_randommodule.c"
        var $24=$23; //@line 412 "_randommodule.c"
        $mt=$24; //@line 412 "_randommodule.c"
        $i=623; //@line 413 "_randommodule.c"
        __lastLabel__ = 3; __label__ = 16; break; //@line 413 "_randommodule.c"
      case 4: // $bb3
        var $25=$i; //@line 414 "_randommodule.c"
        var $26=_PyInt_FromLong($25); //@line 414 "_randommodule.c"
        $iobj=$26; //@line 414 "_randommodule.c"
        var $27=$iobj; //@line 415 "_randommodule.c"
        var $28=($27)==0; //@line 415 "_randommodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 415 "_randommodule.c"
      case 5: // $bb4
        $0=0; //@line 416 "_randommodule.c"
        __label__ = 20; break; //@line 416 "_randommodule.c"
      case 6: // $bb5
        var $29=$n_addr; //@line 417 "_randommodule.c"
        var $30=$iobj; //@line 417 "_randommodule.c"
        var $31=_PyNumber_Remainder($29, $30); //@line 417 "_randommodule.c"
        $remobj=$31; //@line 417 "_randommodule.c"
        var $32=$iobj; //@line 418 "_randommodule.c"
        var $33=$32; //@line 418 "_randommodule.c"
        var $34=HEAP[$33]; //@line 418 "_randommodule.c"
        var $35=($34) - 1; //@line 418 "_randommodule.c"
        var $36=$iobj; //@line 418 "_randommodule.c"
        var $37=$36; //@line 418 "_randommodule.c"
        HEAP[$37]=$35; //@line 418 "_randommodule.c"
        var $38=$iobj; //@line 418 "_randommodule.c"
        var $39=$38; //@line 418 "_randommodule.c"
        var $40=HEAP[$39]; //@line 418 "_randommodule.c"
        var $41=($40)==0; //@line 418 "_randommodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 418 "_randommodule.c"
      case 7: // $bb6
        var $42=$iobj; //@line 418 "_randommodule.c"
        var $43=$42+4; //@line 418 "_randommodule.c"
        var $44=HEAP[$43]; //@line 418 "_randommodule.c"
        var $45=$44+24; //@line 418 "_randommodule.c"
        var $46=HEAP[$45]; //@line 418 "_randommodule.c"
        var $47=$iobj; //@line 418 "_randommodule.c"
        FUNCTION_TABLE[$46]($47); //@line 418 "_randommodule.c"
        __label__ = 8; break; //@line 418 "_randommodule.c"
      case 8: // $bb7
        var $48=$remobj; //@line 419 "_randommodule.c"
        var $49=($48)==0; //@line 419 "_randommodule.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 419 "_randommodule.c"
      case 9: // $bb8
        $0=0; //@line 420 "_randommodule.c"
        __label__ = 20; break; //@line 420 "_randommodule.c"
      case 10: // $bb9
        var $50=$remobj; //@line 421 "_randommodule.c"
        var $51=_PyInt_AsLong($50); //@line 421 "_randommodule.c"
        $j=$51; //@line 421 "_randommodule.c"
        var $52=$remobj; //@line 422 "_randommodule.c"
        var $53=$52; //@line 422 "_randommodule.c"
        var $54=HEAP[$53]; //@line 422 "_randommodule.c"
        var $55=($54) - 1; //@line 422 "_randommodule.c"
        var $56=$remobj; //@line 422 "_randommodule.c"
        var $57=$56; //@line 422 "_randommodule.c"
        HEAP[$57]=$55; //@line 422 "_randommodule.c"
        var $58=$remobj; //@line 422 "_randommodule.c"
        var $59=$58; //@line 422 "_randommodule.c"
        var $60=HEAP[$59]; //@line 422 "_randommodule.c"
        var $61=($60)==0; //@line 422 "_randommodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 422 "_randommodule.c"
      case 11: // $bb10
        var $62=$remobj; //@line 422 "_randommodule.c"
        var $63=$62+4; //@line 422 "_randommodule.c"
        var $64=HEAP[$63]; //@line 422 "_randommodule.c"
        var $65=$64+24; //@line 422 "_randommodule.c"
        var $66=HEAP[$65]; //@line 422 "_randommodule.c"
        var $67=$remobj; //@line 422 "_randommodule.c"
        FUNCTION_TABLE[$66]($67); //@line 422 "_randommodule.c"
        __label__ = 12; break; //@line 422 "_randommodule.c"
      case 12: // $bb11
        var $68=$j; //@line 423 "_randommodule.c"
        var $69=($68)==-1; //@line 423 "_randommodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 423 "_randommodule.c"
      case 13: // $bb12
        var $70=_PyErr_Occurred(); //@line 423 "_randommodule.c"
        var $71=($70)!=0; //@line 423 "_randommodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 423 "_randommodule.c"
      case 14: // $bb13
        $0=0; //@line 424 "_randommodule.c"
        __label__ = 20; break; //@line 424 "_randommodule.c"
      case 15: // $bb14
        var $72=$mt; //@line 425 "_randommodule.c"
        var $73=$i; //@line 425 "_randommodule.c"
        var $74=$72+4*$73; //@line 425 "_randommodule.c"
        var $75=HEAP[$74]; //@line 425 "_randommodule.c"
        $tmp=$75; //@line 425 "_randommodule.c"
        var $76=$mt; //@line 426 "_randommodule.c"
        var $77=$j; //@line 426 "_randommodule.c"
        var $78=$76+4*$77; //@line 426 "_randommodule.c"
        var $79=HEAP[$78]; //@line 426 "_randommodule.c"
        var $80=$mt; //@line 426 "_randommodule.c"
        var $81=$i; //@line 426 "_randommodule.c"
        var $82=$80+4*$81; //@line 426 "_randommodule.c"
        HEAP[$82]=$79; //@line 426 "_randommodule.c"
        var $83=$mt; //@line 427 "_randommodule.c"
        var $84=$j; //@line 427 "_randommodule.c"
        var $85=$83+4*$84; //@line 427 "_randommodule.c"
        var $86=$tmp; //@line 427 "_randommodule.c"
        HEAP[$85]=$86; //@line 427 "_randommodule.c"
        var $87=$i; //@line 413 "_randommodule.c"
        var $88=($87) - 1; //@line 413 "_randommodule.c"
        $i=$88; //@line 413 "_randommodule.c"
        __lastLabel__ = 15; __label__ = 16; break; //@line 413 "_randommodule.c"
      case 16: // $bb15
        var $89=__lastLabel__ == 15 ? $88 : (623);
        var $90=($89) > 1; //@line 413 "_randommodule.c"
        if ($90) { __label__ = 4; break; } else { __label__ = 17; break; } //@line 413 "_randommodule.c"
      case 17: // $bb16
        $i=0; //@line 430 "_randommodule.c"
        __label__ = 18; break;
      case 18: // $bb17
        var $91=$mt; //@line 431 "_randommodule.c"
        var $92=$i; //@line 431 "_randommodule.c"
        var $93=$91+4*$92; //@line 431 "_randommodule.c"
        var $94=HEAP[$93]; //@line 431 "_randommodule.c"
        var $95=$i; //@line 431 "_randommodule.c"
        var $96=($94) + 1; //@line 431 "_randommodule.c"
        var $97=($96) + ($95); //@line 431 "_randommodule.c"
        var $98=$mt; //@line 431 "_randommodule.c"
        var $99=$i; //@line 431 "_randommodule.c"
        var $100=$98+4*$99; //@line 431 "_randommodule.c"
        HEAP[$100]=$97; //@line 431 "_randommodule.c"
        var $101=$i; //@line 430 "_randommodule.c"
        var $102=($101) + 1; //@line 430 "_randommodule.c"
        $i=$102; //@line 430 "_randommodule.c"
        var $103=($102) <= 623; //@line 430 "_randommodule.c"
        if ($103) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 430 "_randommodule.c"
      case 19: // $bb19
        var $104=$self_addr; //@line 433 "_randommodule.c"
        var $105=$104+2504; //@line 433 "_randommodule.c"
        HEAP[$105]=624; //@line 433 "_randommodule.c"
        var $106=HEAP[__Py_NoneStruct]; //@line 434 "_randommodule.c"
        var $107=($106) + 1; //@line 434 "_randommodule.c"
        HEAP[__Py_NoneStruct]=$107; //@line 434 "_randommodule.c"
        $0=__Py_NoneStruct; //@line 435 "_randommodule.c"
        __label__ = 20; break; //@line 435 "_randommodule.c"
      case 20: // $bb20
        var $108=$0; //@line 409 "_randommodule.c"
        $retval=$108; //@line 409 "_randommodule.c"
        var $retval21=$retval; //@line 409 "_randommodule.c"
        ;
        return $retval21; //@line 409 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_getrandbits($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $k=__stackBase__;
        var $i;
        var $bytes;
        var $r;
        var $bytearray;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 446 "_randommodule.c"
        var $2=_PyArg_ParseTuple($1, __str6, allocate([$k,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 446 "_randommodule.c"
        var $3=($2)==0; //@line 446 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 446 "_randommodule.c"
      case 1: // $bb
        $0=0; //@line 447 "_randommodule.c"
        __label__ = 11; break; //@line 447 "_randommodule.c"
      case 2: // $bb1
        var $4=HEAP[$k]; //@line 449 "_randommodule.c"
        var $5=($4) <= 0; //@line 449 "_randommodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 449 "_randommodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 450 "_randommodule.c"
        _PyErr_SetString($6, __str7); //@line 450 "_randommodule.c"
        $0=0; //@line 452 "_randommodule.c"
        __label__ = 11; break; //@line 452 "_randommodule.c"
      case 4: // $bb3
        var $7=HEAP[$k]; //@line 455 "_randommodule.c"
        var $8=($7) - 1; //@line 455 "_randommodule.c"
        var $9=((($8)/32)|0); //@line 455 "_randommodule.c"
        var $10=($9) + 1; //@line 455 "_randommodule.c"
        var $11=($10) * 4; //@line 455 "_randommodule.c"
        $bytes=$11; //@line 455 "_randommodule.c"
        var $12=$bytes; //@line 456 "_randommodule.c"
        var $13=_PyMem_Malloc($12); //@line 456 "_randommodule.c"
        $bytearray=$13; //@line 456 "_randommodule.c"
        var $14=$bytearray; //@line 457 "_randommodule.c"
        var $15=($14)==0; //@line 457 "_randommodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 457 "_randommodule.c"
      case 5: // $bb4
        var $16=_PyErr_NoMemory(); //@line 458 "_randommodule.c"
        $0=0; //@line 459 "_randommodule.c"
        __label__ = 11; break; //@line 459 "_randommodule.c"
      case 6: // $bb5
        $i=0; //@line 463 "_randommodule.c"
        var $17=$i; //@line 463 "_randommodule.c"
        var $18=$bytes; //@line 463 "_randommodule.c"
        var $19=($17) < ($18); //@line 463 "_randommodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 463 "_randommodule.c"
      case 7: // $bb6
        var $20=$self_addr; //@line 464 "_randommodule.c"
        var $21=_genrand_int32($20); //@line 464 "_randommodule.c"
        $r=$21; //@line 464 "_randommodule.c"
        var $22=HEAP[$k]; //@line 465 "_randommodule.c"
        var $23=($22) <= 31; //@line 465 "_randommodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 465 "_randommodule.c"
      case 8: // $bb7
        var $24=HEAP[$k]; //@line 466 "_randommodule.c"
        var $25=32 - ($24); //@line 466 "_randommodule.c"
        var $26=$r; //@line 466 "_randommodule.c"
        var $27=($26) >>> ($25); //@line 466 "_randommodule.c"
        $r=$27; //@line 466 "_randommodule.c"
        __label__ = 9; break; //@line 466 "_randommodule.c"
      case 9: // $bb8
        var $28=$r; //@line 467 "_randommodule.c"
        var $29=((($28)) & 255); //@line 467 "_randommodule.c"
        var $30=$bytearray; //@line 467 "_randommodule.c"
        var $31=$i; //@line 467 "_randommodule.c"
        var $32=$30+$31; //@line 467 "_randommodule.c"
        HEAP[$32]=$29; //@line 467 "_randommodule.c"
        var $33=$i; //@line 468 "_randommodule.c"
        var $34=($33) + 1; //@line 468 "_randommodule.c"
        var $35=$r; //@line 468 "_randommodule.c"
        var $36=($35) >>> 8; //@line 468 "_randommodule.c"
        var $37=((($36)) & 255); //@line 468 "_randommodule.c"
        var $38=$bytearray; //@line 468 "_randommodule.c"
        var $39=$38+$34; //@line 468 "_randommodule.c"
        HEAP[$39]=$37; //@line 468 "_randommodule.c"
        var $40=$i; //@line 469 "_randommodule.c"
        var $41=($40) + 2; //@line 469 "_randommodule.c"
        var $42=$r; //@line 469 "_randommodule.c"
        var $43=($42) >>> 16; //@line 469 "_randommodule.c"
        var $44=((($43)) & 255); //@line 469 "_randommodule.c"
        var $45=$bytearray; //@line 469 "_randommodule.c"
        var $46=$45+$41; //@line 469 "_randommodule.c"
        HEAP[$46]=$44; //@line 469 "_randommodule.c"
        var $47=$i; //@line 470 "_randommodule.c"
        var $48=($47) + 3; //@line 470 "_randommodule.c"
        var $49=$r; //@line 470 "_randommodule.c"
        var $50=($49) >>> 24; //@line 470 "_randommodule.c"
        var $51=((($50)) & 255); //@line 470 "_randommodule.c"
        var $52=$bytearray; //@line 470 "_randommodule.c"
        var $53=$52+$48; //@line 470 "_randommodule.c"
        HEAP[$53]=$51; //@line 470 "_randommodule.c"
        var $54=$i; //@line 463 "_randommodule.c"
        var $55=($54) + 4; //@line 463 "_randommodule.c"
        $i=$55; //@line 463 "_randommodule.c"
        var $56=HEAP[$k]; //@line 463 "_randommodule.c"
        var $57=($56) - 32; //@line 463 "_randommodule.c"
        HEAP[$k]=$57; //@line 463 "_randommodule.c"
        var $58=$i; //@line 463 "_randommodule.c"
        var $59=$bytes; //@line 463 "_randommodule.c"
        var $60=($58) < ($59); //@line 463 "_randommodule.c"
        if ($60) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 463 "_randommodule.c"
      case 10: // $bb10
        var $61=$bytes; //@line 474 "_randommodule.c"
        var $62=$bytearray; //@line 474 "_randommodule.c"
        var $63=__PyLong_FromByteArray($62, $61, 1, 0); //@line 474 "_randommodule.c"
        $result=$63; //@line 474 "_randommodule.c"
        var $64=$bytearray; //@line 475 "_randommodule.c"
        _PyMem_Free($64); //@line 475 "_randommodule.c"
        var $65=$result; //@line 476 "_randommodule.c"
        $0=$65; //@line 476 "_randommodule.c"
        __label__ = 11; break; //@line 476 "_randommodule.c"
      case 11: // $bb11
        var $66=$0; //@line 447 "_randommodule.c"
        $retval=$66; //@line 447 "_randommodule.c"
        var $retval12=$retval; //@line 447 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 447 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_new($type, $args, $kwds) {
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
        var $self;
        var $tmp;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 485 "_randommodule.c"
        var $2=($1)==(_Random_Type); //@line 485 "_randommodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 485 "_randommodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 485 "_randommodule.c"
        var $4=__PyArg_NoKeywords(__str8, $3); //@line 485 "_randommodule.c"
        var $5=($4)==0; //@line 485 "_randommodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 485 "_randommodule.c"
      case 2: // $bb1
        $0=0; //@line 486 "_randommodule.c"
        __label__ = 12; break; //@line 486 "_randommodule.c"
      case 3: // $bb2
        var $6=$type_addr; //@line 488 "_randommodule.c"
        var $7=$6+152; //@line 488 "_randommodule.c"
        var $8=HEAP[$7]; //@line 488 "_randommodule.c"
        var $9=$type_addr; //@line 488 "_randommodule.c"
        var $10=FUNCTION_TABLE[$8]($9, 0); //@line 488 "_randommodule.c"
        var $11=$10; //@line 488 "_randommodule.c"
        $self=$11; //@line 488 "_randommodule.c"
        var $12=($11)==0; //@line 489 "_randommodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 489 "_randommodule.c"
      case 4: // $bb3
        $0=0; //@line 490 "_randommodule.c"
        __label__ = 12; break; //@line 490 "_randommodule.c"
      case 5: // $bb4
        var $13=$self; //@line 491 "_randommodule.c"
        var $14=$args_addr; //@line 491 "_randommodule.c"
        var $15=_random_seed($13, $14); //@line 491 "_randommodule.c"
        $tmp=$15; //@line 491 "_randommodule.c"
        var $16=$tmp; //@line 492 "_randommodule.c"
        var $17=($16)==0; //@line 492 "_randommodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 492 "_randommodule.c"
      case 6: // $bb5
        var $18=$self; //@line 493 "_randommodule.c"
        var $19=$18; //@line 493 "_randommodule.c"
        var $20=$19; //@line 493 "_randommodule.c"
        var $21=HEAP[$20]; //@line 493 "_randommodule.c"
        var $22=($21) - 1; //@line 493 "_randommodule.c"
        var $23=$19; //@line 493 "_randommodule.c"
        HEAP[$23]=$22; //@line 493 "_randommodule.c"
        var $24=$19; //@line 493 "_randommodule.c"
        var $25=HEAP[$24]; //@line 493 "_randommodule.c"
        var $26=($25)==0; //@line 493 "_randommodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 493 "_randommodule.c"
      case 7: // $bb6
        var $27=$self; //@line 493 "_randommodule.c"
        var $28=$27; //@line 493 "_randommodule.c"
        var $29=$28+4; //@line 493 "_randommodule.c"
        var $30=HEAP[$29]; //@line 493 "_randommodule.c"
        var $31=$30+24; //@line 493 "_randommodule.c"
        var $32=HEAP[$31]; //@line 493 "_randommodule.c"
        var $33=$self; //@line 493 "_randommodule.c"
        var $34=$33; //@line 493 "_randommodule.c"
        FUNCTION_TABLE[$32]($34); //@line 493 "_randommodule.c"
        __label__ = 8; break; //@line 493 "_randommodule.c"
      case 8: // $bb7
        $0=0; //@line 494 "_randommodule.c"
        __label__ = 12; break; //@line 494 "_randommodule.c"
      case 9: // $bb8
        var $35=$tmp; //@line 496 "_randommodule.c"
        var $36=$35; //@line 496 "_randommodule.c"
        var $37=HEAP[$36]; //@line 496 "_randommodule.c"
        var $38=($37) - 1; //@line 496 "_randommodule.c"
        var $39=$tmp; //@line 496 "_randommodule.c"
        var $40=$39; //@line 496 "_randommodule.c"
        HEAP[$40]=$38; //@line 496 "_randommodule.c"
        var $41=$tmp; //@line 496 "_randommodule.c"
        var $42=$41; //@line 496 "_randommodule.c"
        var $43=HEAP[$42]; //@line 496 "_randommodule.c"
        var $44=($43)==0; //@line 496 "_randommodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 496 "_randommodule.c"
      case 10: // $bb9
        var $45=$tmp; //@line 496 "_randommodule.c"
        var $46=$45+4; //@line 496 "_randommodule.c"
        var $47=HEAP[$46]; //@line 496 "_randommodule.c"
        var $48=$47+24; //@line 496 "_randommodule.c"
        var $49=HEAP[$48]; //@line 496 "_randommodule.c"
        var $50=$tmp; //@line 496 "_randommodule.c"
        FUNCTION_TABLE[$49]($50); //@line 496 "_randommodule.c"
        __label__ = 11; break; //@line 496 "_randommodule.c"
      case 11: // $bb10
        var $51=$self; //@line 497 "_randommodule.c"
        var $52=$51; //@line 497 "_randommodule.c"
        $0=$52; //@line 497 "_randommodule.c"
        __label__ = 12; break; //@line 497 "_randommodule.c"
      case 12: // $bb11
        var $53=$0; //@line 486 "_randommodule.c"
        $retval=$53; //@line 486 "_randommodule.c"
        var $retval12=$retval; //@line 486 "_randommodule.c"
        ;
        return $retval12; //@line 486 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_random() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_PyType_Ready(_Random_Type); //@line 573 "_randommodule.c"
        var $1=($0) < 0; //@line 573 "_randommodule.c"
        if ($1) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 573 "_randommodule.c"
      case 1: // $bb
        var $2=_Py_InitModule4(__str21, 0, _module_doc, 0, 1013); //@line 575 "_randommodule.c"
        $m=$2; //@line 575 "_randommodule.c"
        var $3=$m; //@line 576 "_randommodule.c"
        var $4=($3)==0; //@line 576 "_randommodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 576 "_randommodule.c"
      case 2: // $bb1
        var $5=HEAP[_Random_Type]; //@line 578 "_randommodule.c"
        var $6=($5) + 1; //@line 578 "_randommodule.c"
        HEAP[_Random_Type]=$6; //@line 578 "_randommodule.c"
        var $7=$m; //@line 579 "_randommodule.c"
        var $8=_PyModule_AddObject($7, __str22, _Random_Type); //@line 579 "_randommodule.c"
        __label__ = 3; break; //@line 579 "_randommodule.c"
      case 3: // $return
        ;
        return; //@line 574 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_random"] = _init_random;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_random_random,0,_random_seed,0,_random_getstate,0,_random_setstate,0,_random_jumpahead,0,_random_getrandbits,0,_PyObject_GenericGetAttr,0,_random_new,0,_PyObject_Free,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_mag01_8316=allocate([0, 0, 0, 0, -1727483681, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str=allocate([115,101,101,100,0] /* seed\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0] /* keyused < keymax\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8478=allocate([114,97,110,100,111,109,95,115,101,101,100,0] /* random_seed\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0] /* state vector must be */, "i8", ALLOC_NORMAL);
__str4=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0] /* state vector is the  */, "i8", ALLOC_NORMAL);
__str5=allocate([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0] /* jumpahead requires a */, "i8", ALLOC_NORMAL);
__str6=allocate([105,58,103,101,116,114,97,110,100,98,105,116,115,0] /* i:getrandbits\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([110,117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* number of bits must  */, "i8", ALLOC_NORMAL);
__str8=allocate([82,97,110,100,111,109,40,41,0] /* Random()\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([114,97,110,100,111,109,0] /* random\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,0] /* random() -> x in the */, "i8", ALLOC_NORMAL);
__str11=allocate([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,117,114,114,101,110,116,32,116,105,109,101,46,0] /* seed([n]) -> None.   */, "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,115,116,97,116,101,0] /* getstate\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0] /* getstate() -> tuple  */, "i8", ALLOC_NORMAL);
__str14=allocate([115,101,116,115,116,97,116,101,0] /* setstate\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,116,111,114,32,115,116,97,116,101,46,0] /* setstate(state) -> N */, "i8", ALLOC_NORMAL);
__str16=allocate([106,117,109,112,97,104,101,97,100,0] /* jumpahead\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0] /* jumpahead(int) -> No */, "i8", ALLOC_NORMAL);
__str18=allocate([103,101,116,114,97,110,100,98,105,116,115,0] /* getrandbits\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0] /* getrandbits(k) -> x. */, "i8", ALLOC_NORMAL);
_random_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_random_doc=allocate([82,97,110,100,111,109,40,41,32,45,62,32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0] /* Random() -> create a */, "i8", ALLOC_NORMAL);
__str20=allocate([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0] /* _random.Random\00 */, "i8", ALLOC_NORMAL);
_Random_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0] /* Module implements th */, "i8", ALLOC_NORMAL);
__str21=allocate([95,114,97,110,100,111,109,0] /* _random\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([82,97,110,100,111,109,0] /* Random\00 */, "i8", ALLOC_NORMAL);
HEAP[_random_methods]=__str9;
HEAP[_random_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_random_methods+12]=__str10;
HEAP[_random_methods+16]=__str;
HEAP[_random_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_random_methods+28]=__str11;
HEAP[_random_methods+32]=__str12;
HEAP[_random_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_random_methods+44]=__str13;
HEAP[_random_methods+48]=__str14;
HEAP[_random_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_random_methods+60]=__str15;
HEAP[_random_methods+64]=__str16;
HEAP[_random_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_random_methods+76]=__str17;
HEAP[_random_methods+80]=__str18;
HEAP[_random_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_random_methods+92]=__str19;
HEAP[_Random_Type+12]=__str20;
HEAP[_Random_Type+72]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_Random_Type+88]=_random_doc;
HEAP[_Random_Type+116]=_random_methods;
HEAP[_Random_Type+156]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_Random_Type+160]=(FUNCTION_TABLE_OFFSET + 18);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

