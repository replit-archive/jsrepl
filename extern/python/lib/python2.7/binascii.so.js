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



var $0___SIZE = 272; // %0
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _table_a2b_hqx;
var _table_b2a_hqx;
var _table_a2b_base64;
var _table_b2a_base64;
var _crctab_hqx;
var _doc_a2b_uu;
var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8323;
var _Error;
var __str3;
var __str4;
var _doc_b2a_uu;
var __str5;
var __str6;
var _doc_a2b_base64;
var __str7;
var ___PRETTY_FUNCTION___8505;
var __str8;
var __str9;
var _doc_b2a_base64;
var __str10;
var __str11;
var ___PRETTY_FUNCTION___8609;
var __str12;
var _doc_a2b_hqx;
var __str13;
var __str14;
var ___PRETTY_FUNCTION___8689;
var _Incomplete;
var __str15;
var __str16;
var _doc_rlecode_hqx;
var __str17;
var ___PRETTY_FUNCTION___8803;
var _doc_b2a_hqx;
var __str18;
var ___PRETTY_FUNCTION___8876;
var _doc_rledecode_hqx;
var __str19;
var __str20;
var ___PRETTY_FUNCTION___8949;
var __str21;
var _doc_crc_hqx;
var __str22;
var __str23;
var _doc_crc32;
var _crc_32_tab;
var __str24;
var __str25;
var __str26;
var ___PRETTY_FUNCTION___9264;
var _doc_hexlify;
var __str27;
var ___PRETTY_FUNCTION___9339;

var __str28;
var __str29;
var _doc_unhexlify;
var _table_hex;
var _doc_a2b_qp;
var __str30;
var _kwlist_9405;
var __str31;
var __str32;
var __str33;
var _doc_b2a_qp;
var __str34;
var _kwlist_9526;
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
var _binascii_module_methods;
var _doc_binascii;
var __str53;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;


























  function _binascii_a2b_uu($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_1;
        var $0;
        var $pascii=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv;
        var $ascii_len;
        var $bin_len;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 193 "binascii.c"
        $leftchar=0; //@line 195 "binascii.c"
        var $1=$args_addr; //@line 199 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str, allocate([$pascii,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 199 "binascii.c"
        var $3=($2)==0; //@line 199 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 199 "binascii.c"
      case 1: // $bb
        $0=0; //@line 200 "binascii.c"
        __label__ = 28; break; //@line 200 "binascii.c"
      case 2: // $bb1
        var $4=$pascii; //@line 201 "binascii.c"
        var $5=HEAP[$4]; //@line 201 "binascii.c"
        $ascii_data=$5; //@line 201 "binascii.c"
        var $6=$pascii+8; //@line 202 "binascii.c"
        var $7=HEAP[$6]; //@line 202 "binascii.c"
        $ascii_len=$7; //@line 202 "binascii.c"
        var $8=$ascii_len; //@line 204 "binascii.c"
        var $9=($8) < 0; //@line 204 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 204 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str1, __str2, 204, ___PRETTY_FUNCTION___8323); //@line 204 "binascii.c"
        throw "Reached an unreachable!" //@line 204 "binascii.c"
      case 4: // $bb3
        var $10=$ascii_data; //@line 207 "binascii.c"
        var $11=HEAP[$10]; //@line 207 "binascii.c"
        var $12=($11); //@line 207 "binascii.c"
        var $13=($12) - 32; //@line 207 "binascii.c"
        var $14=($13) & 63; //@line 207 "binascii.c"
        $bin_len=$14; //@line 207 "binascii.c"
        var $15=$ascii_data; //@line 207 "binascii.c"
        var $16=$15+1; //@line 207 "binascii.c"
        $ascii_data=$16; //@line 207 "binascii.c"
        var $17=$ascii_len; //@line 208 "binascii.c"
        var $18=($17) - 1; //@line 208 "binascii.c"
        $ascii_len=$18; //@line 208 "binascii.c"
        var $19=$bin_len; //@line 211 "binascii.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 211 "binascii.c"
        $rv=$20; //@line 211 "binascii.c"
        var $21=$rv; //@line 211 "binascii.c"
        var $22=($21)==0; //@line 211 "binascii.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 211 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 212 "binascii.c"
        $0=0; //@line 213 "binascii.c"
        __label__ = 28; break; //@line 213 "binascii.c"
      case 6: // $bb5
        var $23=$rv; //@line 215 "binascii.c"
        var $24=$23; //@line 215 "binascii.c"
        var $25=$24+20; //@line 215 "binascii.c"
        var $26=$25; //@line 215 "binascii.c"
        $bin_data=$26; //@line 215 "binascii.c"
        __label__ = 21; break; //@line 215 "binascii.c"
      case 7: // $bb6
        var $27=$ascii_len; //@line 219 "binascii.c"
        var $28=($27) > 0; //@line 219 "binascii.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 219 "binascii.c"
      case 8: // $bb7
        var $29=$ascii_data; //@line 219 "binascii.c"
        var $30=HEAP[$29]; //@line 219 "binascii.c"
        $iftmp_1=$30; //@line 219 "binascii.c"
        __label__ = 10; break; //@line 219 "binascii.c"
      case 9: // $bb8
        $iftmp_1=0; //@line 219 "binascii.c"
        __label__ = 10; break; //@line 219 "binascii.c"
      case 10: // $bb9
        var $31=$iftmp_1; //@line 219 "binascii.c"
        $this_ch=$31; //@line 219 "binascii.c"
        var $32=$this_ch; //@line 220 "binascii.c"
        var $33=($32)==10; //@line 220 "binascii.c"
        var $34=$this_ch; //@line 220 "binascii.c"
        var $35=($34)==13; //@line 220 "binascii.c"
        var $or_cond=($33) | ($35);
        if ($or_cond) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 220 "binascii.c"
      case 11: // $bb11
        var $36=$ascii_len; //@line 220 "binascii.c"
        var $37=($36) <= 0; //@line 220 "binascii.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 220 "binascii.c"
      case 12: // $bb12
        $this_ch=0; //@line 225 "binascii.c"
        __label__ = 18; break; //@line 225 "binascii.c"
      case 13: // $bb13
        var $38=$this_ch; //@line 232 "binascii.c"
        var $39=($38) <= 31; //@line 232 "binascii.c"
        var $40=$this_ch; //@line 232 "binascii.c"
        var $41=($40) > 96; //@line 232 "binascii.c"
        var $or_cond3=($39) | ($41);
        if ($or_cond3) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 232 "binascii.c"
      case 14: // $bb15
        var $42=HEAP[_Error]; //@line 233 "binascii.c"
        _PyErr_SetString($42, __str3); //@line 233 "binascii.c"
        _PyBuffer_Release($pascii); //@line 234 "binascii.c"
        var $43=$rv; //@line 235 "binascii.c"
        var $44=$43; //@line 235 "binascii.c"
        var $45=HEAP[$44]; //@line 235 "binascii.c"
        var $46=($45) - 1; //@line 235 "binascii.c"
        var $47=$rv; //@line 235 "binascii.c"
        var $48=$47; //@line 235 "binascii.c"
        HEAP[$48]=$46; //@line 235 "binascii.c"
        var $49=$rv; //@line 235 "binascii.c"
        var $50=$49; //@line 235 "binascii.c"
        var $51=HEAP[$50]; //@line 235 "binascii.c"
        var $52=($51)==0; //@line 235 "binascii.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 235 "binascii.c"
      case 15: // $bb16
        var $53=$rv; //@line 235 "binascii.c"
        var $54=$53+4; //@line 235 "binascii.c"
        var $55=HEAP[$54]; //@line 235 "binascii.c"
        var $56=$55+24; //@line 235 "binascii.c"
        var $57=HEAP[$56]; //@line 235 "binascii.c"
        var $58=$rv; //@line 235 "binascii.c"
        FUNCTION_TABLE[$57]($58); //@line 235 "binascii.c"
        __label__ = 16; break; //@line 235 "binascii.c"
      case 16: // $bb17
        $0=0; //@line 236 "binascii.c"
        __label__ = 28; break; //@line 236 "binascii.c"
      case 17: // $bb18
        var $59=$this_ch; //@line 238 "binascii.c"
        var $60=($59) - 32; //@line 238 "binascii.c"
        var $61=($60) & 63; //@line 238 "binascii.c"
        $this_ch=$61; //@line 238 "binascii.c"
        __label__ = 18; break; //@line 238 "binascii.c"
      case 18: // $bb19
        var $62=$leftchar; //@line 244 "binascii.c"
        var $63=($62) << 6; //@line 244 "binascii.c"
        var $64=$this_ch; //@line 244 "binascii.c"
        var $65=($64); //@line 244 "binascii.c"
        var $66=($65) | ($63); //@line 244 "binascii.c"
        $leftchar=$66; //@line 244 "binascii.c"
        var $67=$leftbits; //@line 245 "binascii.c"
        var $68=($67) + 6; //@line 245 "binascii.c"
        $leftbits=$68; //@line 245 "binascii.c"
        var $69=($68) > 7; //@line 246 "binascii.c"
        if ($69) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 246 "binascii.c"
      case 19: // $bb20
        var $70=$leftbits; //@line 247 "binascii.c"
        var $71=($70) - 8; //@line 247 "binascii.c"
        $leftbits=$71; //@line 247 "binascii.c"
        var $72=$leftchar; //@line 248 "binascii.c"
        var $73=$leftbits; //@line 248 "binascii.c"
        var $74=($72) >>> ($73); //@line 248 "binascii.c"
        var $75=((($74)) & 255); //@line 248 "binascii.c"
        var $76=$bin_data; //@line 248 "binascii.c"
        HEAP[$76]=$75; //@line 248 "binascii.c"
        var $77=$bin_data; //@line 248 "binascii.c"
        var $78=$77+1; //@line 248 "binascii.c"
        $bin_data=$78; //@line 248 "binascii.c"
        var $79=$leftbits; //@line 249 "binascii.c"
        var $80=1 << ($79); //@line 249 "binascii.c"
        var $81=($80) - 1; //@line 249 "binascii.c"
        var $82=$leftchar; //@line 249 "binascii.c"
        var $83=($81) & ($82); //@line 249 "binascii.c"
        $leftchar=$83; //@line 249 "binascii.c"
        var $84=$bin_len; //@line 250 "binascii.c"
        var $85=($84) - 1; //@line 250 "binascii.c"
        $bin_len=$85; //@line 250 "binascii.c"
        __label__ = 20; break; //@line 250 "binascii.c"
      case 20: // $bb21
        var $86=$ascii_len; //@line 217 "binascii.c"
        var $87=($86) - 1; //@line 217 "binascii.c"
        $ascii_len=$87; //@line 217 "binascii.c"
        var $88=$ascii_data; //@line 217 "binascii.c"
        var $89=$88+1; //@line 217 "binascii.c"
        $ascii_data=$89; //@line 217 "binascii.c"
        __label__ = 21; break; //@line 217 "binascii.c"
      case 21: // $bb22
        var $90=$bin_len; //@line 217 "binascii.c"
        var $91=($90) > 0; //@line 217 "binascii.c"
        if ($91) { __label__ = 7; break; } else { __label__ = 26; break; } //@line 217 "binascii.c"
      case 22: // $bb24
        var $92=$ascii_data; //@line 258 "binascii.c"
        var $93=HEAP[$92]; //@line 258 "binascii.c"
        $this_ch=$93; //@line 258 "binascii.c"
        var $94=$ascii_data; //@line 258 "binascii.c"
        var $95=$94+1; //@line 258 "binascii.c"
        $ascii_data=$95; //@line 258 "binascii.c"
        var $96=$this_ch; //@line 260 "binascii.c"
        var $97=($96)!=32; //@line 260 "binascii.c"
        var $98=$this_ch; //@line 260 "binascii.c"
        var $99=($98)!=96; //@line 260 "binascii.c"
        var $or_cond5=($97) & ($99);
        var $100=$this_ch; //@line 260 "binascii.c"
        var $101=($100)!=10; //@line 260 "binascii.c"
        var $or_cond7=($or_cond5) & ($101);
        var $102=$this_ch; //@line 260 "binascii.c"
        var $103=($102)!=13; //@line 260 "binascii.c"
        var $or_cond9=($or_cond7) & ($103);
        if ($or_cond9) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 260 "binascii.c"
      case 23: // $bb28
        var $104=HEAP[_Error]; //@line 262 "binascii.c"
        _PyErr_SetString($104, __str4); //@line 262 "binascii.c"
        _PyBuffer_Release($pascii); //@line 263 "binascii.c"
        var $105=$rv; //@line 264 "binascii.c"
        var $106=$105; //@line 264 "binascii.c"
        var $107=HEAP[$106]; //@line 264 "binascii.c"
        var $108=($107) - 1; //@line 264 "binascii.c"
        var $109=$rv; //@line 264 "binascii.c"
        var $110=$109; //@line 264 "binascii.c"
        HEAP[$110]=$108; //@line 264 "binascii.c"
        var $111=$rv; //@line 264 "binascii.c"
        var $112=$111; //@line 264 "binascii.c"
        var $113=HEAP[$112]; //@line 264 "binascii.c"
        var $114=($113)==0; //@line 264 "binascii.c"
        if ($114) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 264 "binascii.c"
      case 24: // $bb29
        var $115=$rv; //@line 264 "binascii.c"
        var $116=$115+4; //@line 264 "binascii.c"
        var $117=HEAP[$116]; //@line 264 "binascii.c"
        var $118=$117+24; //@line 264 "binascii.c"
        var $119=HEAP[$118]; //@line 264 "binascii.c"
        var $120=$rv; //@line 264 "binascii.c"
        FUNCTION_TABLE[$119]($120); //@line 264 "binascii.c"
        __label__ = 25; break; //@line 264 "binascii.c"
      case 25: // $bb30
        $0=0; //@line 265 "binascii.c"
        __label__ = 28; break; //@line 265 "binascii.c"
      case 26: // $bb31
        var $121=$ascii_len; //@line 257 "binascii.c"
        var $122=($121) > 0; //@line 257 "binascii.c"
        var $123=($122); //@line 257 "binascii.c"
        var $124=$ascii_len; //@line 257 "binascii.c"
        var $125=($124) - 1; //@line 257 "binascii.c"
        $ascii_len=$125; //@line 257 "binascii.c"
        var $toBool=($123)!=0; //@line 257 "binascii.c"
        if ($toBool) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 257 "binascii.c"
      case 27: // $bb32
        _PyBuffer_Release($pascii); //@line 268 "binascii.c"
        var $126=$rv; //@line 269 "binascii.c"
        $0=$126; //@line 269 "binascii.c"
        __label__ = 28; break; //@line 269 "binascii.c"
      case 28: // $bb33
        var $127=$0; //@line 200 "binascii.c"
        $retval=$127; //@line 200 "binascii.c"
        var $retval34=$retval; //@line 200 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 200 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_uu($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pbin=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv=__stackBase__+52;
        var $bin_len;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 279 "binascii.c"
        $leftchar=0; //@line 281 "binascii.c"
        var $1=$args_addr; //@line 285 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str5, allocate([$pbin,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 285 "binascii.c"
        var $3=($2)==0; //@line 285 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 285 "binascii.c"
      case 1: // $bb
        $0=0; //@line 286 "binascii.c"
        __label__ = 21; break; //@line 286 "binascii.c"
      case 2: // $bb1
        var $4=$pbin; //@line 287 "binascii.c"
        var $5=HEAP[$4]; //@line 287 "binascii.c"
        $bin_data=$5; //@line 287 "binascii.c"
        var $6=$pbin+8; //@line 288 "binascii.c"
        var $7=HEAP[$6]; //@line 288 "binascii.c"
        $bin_len=$7; //@line 288 "binascii.c"
        var $8=$bin_len; //@line 289 "binascii.c"
        var $9=($8) > 45; //@line 289 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 289 "binascii.c"
      case 3: // $bb2
        var $10=HEAP[_Error]; //@line 291 "binascii.c"
        _PyErr_SetString($10, __str6); //@line 291 "binascii.c"
        _PyBuffer_Release($pbin); //@line 292 "binascii.c"
        $0=0; //@line 293 "binascii.c"
        __label__ = 21; break; //@line 293 "binascii.c"
      case 4: // $bb3
        var $11=$bin_len; //@line 297 "binascii.c"
        var $12=($11) + 2; //@line 297 "binascii.c"
        var $13=((($12)/3)|0); //@line 297 "binascii.c"
        var $14=($13) * 4; //@line 297 "binascii.c"
        var $15=($14) + 2; //@line 297 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 297 "binascii.c"
        HEAP[$rv]=$16; //@line 297 "binascii.c"
        var $17=HEAP[$rv]; //@line 297 "binascii.c"
        var $18=($17)==0; //@line 297 "binascii.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 297 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbin); //@line 298 "binascii.c"
        $0=0; //@line 299 "binascii.c"
        __label__ = 21; break; //@line 299 "binascii.c"
      case 6: // $bb5
        var $19=HEAP[$rv]; //@line 301 "binascii.c"
        var $20=$19; //@line 301 "binascii.c"
        var $21=$20+20; //@line 301 "binascii.c"
        var $22=$21; //@line 301 "binascii.c"
        $ascii_data=$22; //@line 301 "binascii.c"
        var $23=$bin_len; //@line 304 "binascii.c"
        var $24=((($23)) & 255); //@line 304 "binascii.c"
        var $25=($24) & 63; //@line 304 "binascii.c"
        var $26=($25) + 32; //@line 304 "binascii.c"
        var $27=$ascii_data; //@line 304 "binascii.c"
        HEAP[$27]=$26; //@line 304 "binascii.c"
        var $28=$ascii_data; //@line 304 "binascii.c"
        var $29=$28+1; //@line 304 "binascii.c"
        $ascii_data=$29; //@line 304 "binascii.c"
        var $_pr2=$bin_len;
        __lastLabel__ = 6; __label__ = 13; break; //@line 304 "binascii.c"
      case 7: // $bb6
        var $_pr=$bin_len;
        var $30=($_pr) > 0; //@line 308 "binascii.c"
        var $31=$leftchar; //@line 309 "binascii.c"
        var $32=($31) << 8; //@line 309 "binascii.c"
        if ($30) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 9; break; } //@line 308 "binascii.c"
      case 8: // $bb7
        var $33=__lastLabel__ == 14 ? $62 : ($32);
        var $34=$bin_data; //@line 309 "binascii.c"
        var $35=HEAP[$34]; //@line 309 "binascii.c"
        var $36=($35); //@line 309 "binascii.c"
        var $37=($36) | ($33); //@line 309 "binascii.c"
        $leftchar=$37; //@line 309 "binascii.c"
        __label__ = 10; break; //@line 309 "binascii.c"
      case 9: // $bb8
        $leftchar=$32; //@line 311 "binascii.c"
        __label__ = 10; break; //@line 311 "binascii.c"
      case 10: // $bb9
        var $38=$leftbits; //@line 312 "binascii.c"
        var $39=($38) + 8; //@line 312 "binascii.c"
        $leftbits=$39; //@line 312 "binascii.c"
        var $40=($39) > 5; //@line 315 "binascii.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 315 "binascii.c"
      case 11: // $bb10
        var $41=$leftbits; //@line 316 "binascii.c"
        var $42=($41) - 6; //@line 316 "binascii.c"
        var $43=$leftchar; //@line 316 "binascii.c"
        var $44=((($43))>>>0) >>> ((($42))>>>0); //@line 316 "binascii.c"
        var $45=((($44)) & 255); //@line 316 "binascii.c"
        var $46=($45) & 63; //@line 316 "binascii.c"
        $this_ch=$46; //@line 316 "binascii.c"
        var $47=$leftbits; //@line 317 "binascii.c"
        var $48=($47) - 6; //@line 317 "binascii.c"
        $leftbits=$48; //@line 317 "binascii.c"
        var $49=$this_ch; //@line 318 "binascii.c"
        var $50=($49) + 32; //@line 318 "binascii.c"
        var $51=$ascii_data; //@line 318 "binascii.c"
        HEAP[$51]=$50; //@line 318 "binascii.c"
        var $52=$ascii_data; //@line 318 "binascii.c"
        var $53=$52+1; //@line 318 "binascii.c"
        $ascii_data=$53; //@line 318 "binascii.c"
        var $_pr1=$leftbits;
        var $54=($_pr1) > 5; //@line 315 "binascii.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 315 "binascii.c"
      case 12: // $bb12
        var $55=$bin_len; //@line 306 "binascii.c"
        var $56=($55) - 1; //@line 306 "binascii.c"
        $bin_len=$56; //@line 306 "binascii.c"
        var $57=$bin_data; //@line 306 "binascii.c"
        var $58=$57+1; //@line 306 "binascii.c"
        $bin_data=$58; //@line 306 "binascii.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 306 "binascii.c"
      case 13: // $bb13
        var $59=__lastLabel__ == 12 ? $56 : ($_pr2);
        var $60=($59) > 0; //@line 306 "binascii.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 306 "binascii.c"
      case 14: // $bb6_thread
        var $61=$leftchar; //@line 309 "binascii.c"
        var $62=($61) << 8; //@line 309 "binascii.c"
        __lastLabel__ = 14; __label__ = 8; break;
      case 15: // $bb14
        var $63=$leftbits; //@line 306 "binascii.c"
        var $64=($63)!=0; //@line 306 "binascii.c"
        if ($64) { __label__ = 7; break; } else { __label__ = 16; break; } //@line 306 "binascii.c"
      case 16: // $bb15
        var $65=$ascii_data; //@line 321 "binascii.c"
        HEAP[$65]=10; //@line 321 "binascii.c"
        var $66=$ascii_data; //@line 321 "binascii.c"
        var $67=$66+1; //@line 321 "binascii.c"
        $ascii_data=$67; //@line 321 "binascii.c"
        var $68=$ascii_data; //@line 323 "binascii.c"
        var $69=($68); //@line 323 "binascii.c"
        var $70=HEAP[$rv]; //@line 323 "binascii.c"
        var $71=$70; //@line 323 "binascii.c"
        var $72=$71+20; //@line 323 "binascii.c"
        var $73=($72); //@line 323 "binascii.c"
        var $74=($69) - ($73); //@line 323 "binascii.c"
        var $75=__PyString_Resize($rv, $74); //@line 323 "binascii.c"
        var $76=($75) < 0; //@line 323 "binascii.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 323 "binascii.c"
      case 17: // $bb16
        var $77=HEAP[$rv]; //@line 326 "binascii.c"
        var $78=$77; //@line 326 "binascii.c"
        var $79=HEAP[$78]; //@line 326 "binascii.c"
        var $80=($79) - 1; //@line 326 "binascii.c"
        var $81=$77; //@line 326 "binascii.c"
        HEAP[$81]=$80; //@line 326 "binascii.c"
        var $82=$77; //@line 326 "binascii.c"
        var $83=HEAP[$82]; //@line 326 "binascii.c"
        var $84=($83)==0; //@line 326 "binascii.c"
        if ($84) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 326 "binascii.c"
      case 18: // $bb17
        var $85=HEAP[$rv]; //@line 326 "binascii.c"
        var $86=$85+4; //@line 326 "binascii.c"
        var $87=HEAP[$86]; //@line 326 "binascii.c"
        var $88=$87+24; //@line 326 "binascii.c"
        var $89=HEAP[$88]; //@line 326 "binascii.c"
        var $90=HEAP[$rv]; //@line 326 "binascii.c"
        FUNCTION_TABLE[$89]($90); //@line 326 "binascii.c"
        __label__ = 19; break; //@line 326 "binascii.c"
      case 19: // $bb18
        HEAP[$rv]=0; //@line 327 "binascii.c"
        __label__ = 20; break; //@line 327 "binascii.c"
      case 20: // $bb19
        _PyBuffer_Release($pbin); //@line 329 "binascii.c"
        var $91=HEAP[$rv]; //@line 330 "binascii.c"
        $0=$91; //@line 330 "binascii.c"
        __label__ = 21; break; //@line 330 "binascii.c"
      case 21: // $bb20
        var $92=$0; //@line 286 "binascii.c"
        $retval=$92; //@line 286 "binascii.c"
        var $retval21=$retval; //@line 286 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 286 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_find_valid($s, $slen) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $slen_addr;
        var $num_addr;
        var $retval;
        var $0;
        var $ret;
        var $c;
        var $b64val;
        $s_addr=$s;
        $slen_addr=$slen;
        $num_addr=1;
        $ret=-1; //@line 341 "binascii.c"
        __lastLabel__ = -1; __label__ = 7; break; //@line 341 "binascii.c"
      case 1: // $bb
        var $1=$s_addr; //@line 345 "binascii.c"
        var $2=HEAP[$1]; //@line 345 "binascii.c"
        $c=$2; //@line 345 "binascii.c"
        var $3=$c; //@line 346 "binascii.c"
        var $4=($3); //@line 346 "binascii.c"
        var $5=($4) & 127; //@line 346 "binascii.c"
        var $6=_table_a2b_base64+$5; //@line 346 "binascii.c"
        var $7=HEAP[$6]; //@line 346 "binascii.c"
        $b64val=$7; //@line 346 "binascii.c"
        var $8=$c; //@line 347 "binascii.c"
        var $9=($8) >= 0; //@line 347 "binascii.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 347 "binascii.c"
      case 2: // $bb1
        var $10=$b64val; //@line 347 "binascii.c"
        var $11=($10)!=-1; //@line 347 "binascii.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 347 "binascii.c"
      case 3: // $bb2
        var $12=$num_addr; //@line 348 "binascii.c"
        var $13=($12)==0; //@line 348 "binascii.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 348 "binascii.c"
      case 4: // $bb3
        var $14=$s_addr; //@line 349 "binascii.c"
        var $15=HEAP[$14]; //@line 349 "binascii.c"
        var $16=($15); //@line 349 "binascii.c"
        $ret=$16; //@line 349 "binascii.c"
        __label__ = 5; break; //@line 349 "binascii.c"
      case 5: // $bb4
        var $17=$num_addr; //@line 350 "binascii.c"
        var $18=($17) - 1; //@line 350 "binascii.c"
        $num_addr=$18; //@line 350 "binascii.c"
        __label__ = 6; break; //@line 350 "binascii.c"
      case 6: // $bb5
        var $19=$s_addr; //@line 353 "binascii.c"
        var $20=$19+1; //@line 353 "binascii.c"
        $s_addr=$20; //@line 353 "binascii.c"
        var $21=$slen_addr; //@line 354 "binascii.c"
        var $22=($21) - 1; //@line 354 "binascii.c"
        $slen_addr=$22; //@line 354 "binascii.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 354 "binascii.c"
      case 7: // $bb6
        var $23=__lastLabel__ == 6 ? $22 : ($slen);
        var $24=($23) <= 0; //@line 344 "binascii.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 344 "binascii.c"
      case 8: // $bb7
        var $25=$ret; //@line 344 "binascii.c"
        var $26=($25)==-1; //@line 344 "binascii.c"
        if ($26) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 344 "binascii.c"
      case 9: // $bb8
        var $27=$ret; //@line 356 "binascii.c"
        $0=$27; //@line 356 "binascii.c"
        var $28=$0; //@line 356 "binascii.c"
        $retval=$28; //@line 356 "binascii.c"
        var $retval9=$retval; //@line 356 "binascii.c"
        ;
        return $retval9; //@line 356 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_base64($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pascii=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv=__stackBase__+52;
        var $ascii_len;
        var $bin_len;
        var $quad_pos;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 366 "binascii.c"
        $leftchar=0; //@line 368 "binascii.c"
        $quad_pos=0; //@line 371 "binascii.c"
        var $1=$args_addr; //@line 373 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str7, allocate([$pascii,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 373 "binascii.c"
        var $3=($2)==0; //@line 373 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 373 "binascii.c"
      case 1: // $bb
        $0=0; //@line 374 "binascii.c"
        __label__ = 33; break; //@line 374 "binascii.c"
      case 2: // $bb1
        var $4=$pascii; //@line 375 "binascii.c"
        var $5=HEAP[$4]; //@line 375 "binascii.c"
        $ascii_data=$5; //@line 375 "binascii.c"
        var $6=$pascii+8; //@line 376 "binascii.c"
        var $7=HEAP[$6]; //@line 376 "binascii.c"
        $ascii_len=$7; //@line 376 "binascii.c"
        var $8=$ascii_len; //@line 378 "binascii.c"
        var $9=($8) < 0; //@line 378 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 378 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str1, __str2, 378, ___PRETTY_FUNCTION___8505); //@line 378 "binascii.c"
        throw "Reached an unreachable!" //@line 378 "binascii.c"
      case 4: // $bb3
        var $10=$ascii_len; //@line 380 "binascii.c"
        var $11=($10) > 2147483644; //@line 380 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 380 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 381 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 382 "binascii.c"
        $0=$12; //@line 382 "binascii.c"
        __label__ = 33; break; //@line 382 "binascii.c"
      case 6: // $bb5
        var $13=$ascii_len; //@line 385 "binascii.c"
        var $14=($13) + 3; //@line 385 "binascii.c"
        var $15=((($14)/4)|0); //@line 385 "binascii.c"
        var $16=($15) * 3; //@line 385 "binascii.c"
        $bin_len=$16; //@line 385 "binascii.c"
        var $17=$bin_len; //@line 388 "binascii.c"
        var $18=_PyString_FromStringAndSize(0, $17); //@line 388 "binascii.c"
        HEAP[$rv]=$18; //@line 388 "binascii.c"
        var $19=HEAP[$rv]; //@line 388 "binascii.c"
        var $20=($19)==0; //@line 388 "binascii.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 388 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pascii); //@line 389 "binascii.c"
        $0=0; //@line 390 "binascii.c"
        __label__ = 33; break; //@line 390 "binascii.c"
      case 8: // $bb7
        var $21=HEAP[$rv]; //@line 392 "binascii.c"
        var $22=$21; //@line 392 "binascii.c"
        var $23=$22+20; //@line 392 "binascii.c"
        var $24=$23; //@line 392 "binascii.c"
        $bin_data=$24; //@line 392 "binascii.c"
        $bin_len=0; //@line 393 "binascii.c"
        var $_pr=$ascii_len;
        __lastLabel__ = 8; __label__ = 19; break; //@line 393 "binascii.c"
      case 9: // $bb8
        var $25=$ascii_data; //@line 396 "binascii.c"
        var $26=HEAP[$25]; //@line 396 "binascii.c"
        $this_ch=$26; //@line 396 "binascii.c"
        var $27=$this_ch; //@line 398 "binascii.c"
        var $28=reSign(($27), 8, 1) < 0; //@line 398 "binascii.c"
        var $29=$this_ch; //@line 398 "binascii.c"
        var $30=reSign(($29), 8, 1)==13; //@line 398 "binascii.c"
        var $or_cond=($28) | ($30);
        var $31=$this_ch; //@line 398 "binascii.c"
        var $32=reSign(($31), 8, 1)==10; //@line 398 "binascii.c"
        var $or_cond3=($or_cond) | ($32);
        var $33=$this_ch; //@line 398 "binascii.c"
        var $34=reSign(($33), 8, 1)==32; //@line 398 "binascii.c"
        var $or_cond5=($or_cond3) | ($34);
        if ($or_cond5) { __label__ = 18; break; } else { __label__ = 10; break; } //@line 398 "binascii.c"
      case 10: // $bb12
        var $35=$this_ch; //@line 405 "binascii.c"
        var $36=($35)==61; //@line 405 "binascii.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 405 "binascii.c"
      case 11: // $bb13
        var $37=$quad_pos; //@line 406 "binascii.c"
        var $38=($37) <= 1; //@line 406 "binascii.c"
        if ($38) { __label__ = 18; break; } else { __label__ = 12; break; } //@line 406 "binascii.c"
      case 12: // $bb14
        var $39=$quad_pos; //@line 406 "binascii.c"
        var $40=($39)!=2; //@line 406 "binascii.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 406 "binascii.c"
      case 13: // $bb15
        var $41=$ascii_data; //@line 406 "binascii.c"
        var $42=$ascii_len; //@line 406 "binascii.c"
        var $43=_binascii_find_valid($41, $42); //@line 406 "binascii.c"
        var $44=($43)!=61; //@line 406 "binascii.c"
        if ($44) { __label__ = 18; break; } else { __label__ = 14; break; } //@line 406 "binascii.c"
      case 14: // $bb22_thread
        $leftbits=0; //@line 418 "binascii.c"
        __label__ = 24; break;
      case 15: // $bb17
        var $45=$ascii_data; //@line 423 "binascii.c"
        var $46=HEAP[$45]; //@line 423 "binascii.c"
        var $47=($46); //@line 423 "binascii.c"
        var $48=_table_a2b_base64+$47; //@line 423 "binascii.c"
        var $49=HEAP[$48]; //@line 423 "binascii.c"
        $this_ch=$49; //@line 423 "binascii.c"
        var $50=$this_ch; //@line 424 "binascii.c"
        var $51=reSign(($50), 8, 1)==-1; //@line 424 "binascii.c"
        if ($51) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 424 "binascii.c"
      case 16: // $bb18
        var $52=$quad_pos; //@line 431 "binascii.c"
        var $53=($52) + 1; //@line 431 "binascii.c"
        var $54=($53) & 3; //@line 431 "binascii.c"
        $quad_pos=$54; //@line 431 "binascii.c"
        var $55=$leftchar; //@line 432 "binascii.c"
        var $56=($55) << 6; //@line 432 "binascii.c"
        var $57=$this_ch; //@line 432 "binascii.c"
        var $58=($57); //@line 432 "binascii.c"
        var $59=($58) | ($56); //@line 432 "binascii.c"
        $leftchar=$59; //@line 432 "binascii.c"
        var $60=$leftbits; //@line 433 "binascii.c"
        var $61=($60) + 6; //@line 433 "binascii.c"
        $leftbits=$61; //@line 433 "binascii.c"
        var $62=$leftbits; //@line 435 "binascii.c"
        var $63=($62) > 7; //@line 435 "binascii.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 435 "binascii.c"
      case 17: // $bb19
        var $64=$leftbits; //@line 436 "binascii.c"
        var $65=($64) - 8; //@line 436 "binascii.c"
        $leftbits=$65; //@line 436 "binascii.c"
        var $66=$leftchar; //@line 437 "binascii.c"
        var $67=$leftbits; //@line 437 "binascii.c"
        var $68=($66) >>> ($67); //@line 437 "binascii.c"
        var $69=((($68)) & 255); //@line 437 "binascii.c"
        var $70=$bin_data; //@line 437 "binascii.c"
        HEAP[$70]=$69; //@line 437 "binascii.c"
        var $71=$bin_data; //@line 437 "binascii.c"
        var $72=$71+1; //@line 437 "binascii.c"
        $bin_data=$72; //@line 437 "binascii.c"
        var $73=$bin_len; //@line 438 "binascii.c"
        var $74=($73) + 1; //@line 438 "binascii.c"
        $bin_len=$74; //@line 438 "binascii.c"
        var $75=$leftbits; //@line 439 "binascii.c"
        var $76=1 << ($75); //@line 439 "binascii.c"
        var $77=($76) - 1; //@line 439 "binascii.c"
        var $78=$leftchar; //@line 439 "binascii.c"
        var $79=($77) & ($78); //@line 439 "binascii.c"
        $leftchar=$79; //@line 439 "binascii.c"
        __label__ = 18; break; //@line 439 "binascii.c"
      case 18: // $bb20
        var $80=$ascii_len; //@line 395 "binascii.c"
        var $81=($80) - 1; //@line 395 "binascii.c"
        $ascii_len=$81; //@line 395 "binascii.c"
        var $82=$ascii_data; //@line 395 "binascii.c"
        var $83=$82+1; //@line 395 "binascii.c"
        $ascii_data=$83; //@line 395 "binascii.c"
        __lastLabel__ = 18; __label__ = 19; break; //@line 395 "binascii.c"
      case 19: // $bb21
        var $84=__lastLabel__ == 18 ? $81 : ($_pr);
        var $85=($84) > 0; //@line 395 "binascii.c"
        if ($85) { __label__ = 9; break; } else { __label__ = 20; break; } //@line 395 "binascii.c"
      case 20: // $bb22
        var $_pr6=$leftbits;
        var $86=($_pr6)!=0; //@line 443 "binascii.c"
        if ($86) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 443 "binascii.c"
      case 21: // $bb23
        _PyBuffer_Release($pascii); //@line 444 "binascii.c"
        var $87=HEAP[_Error]; //@line 445 "binascii.c"
        _PyErr_SetString($87, __str8); //@line 445 "binascii.c"
        var $88=HEAP[$rv]; //@line 446 "binascii.c"
        var $89=$88; //@line 446 "binascii.c"
        var $90=HEAP[$89]; //@line 446 "binascii.c"
        var $91=($90) - 1; //@line 446 "binascii.c"
        var $92=$88; //@line 446 "binascii.c"
        HEAP[$92]=$91; //@line 446 "binascii.c"
        var $93=$88; //@line 446 "binascii.c"
        var $94=HEAP[$93]; //@line 446 "binascii.c"
        var $95=($94)==0; //@line 446 "binascii.c"
        if ($95) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 446 "binascii.c"
      case 22: // $bb24
        var $96=HEAP[$rv]; //@line 446 "binascii.c"
        var $97=$96+4; //@line 446 "binascii.c"
        var $98=HEAP[$97]; //@line 446 "binascii.c"
        var $99=$98+24; //@line 446 "binascii.c"
        var $100=HEAP[$99]; //@line 446 "binascii.c"
        var $101=HEAP[$rv]; //@line 446 "binascii.c"
        FUNCTION_TABLE[$100]($101); //@line 446 "binascii.c"
        __label__ = 23; break; //@line 446 "binascii.c"
      case 23: // $bb25
        $0=0; //@line 447 "binascii.c"
        __label__ = 33; break; //@line 447 "binascii.c"
      case 24: // $bb26
        var $102=$bin_len; //@line 454 "binascii.c"
        var $103=($102) > 0; //@line 454 "binascii.c"
        if ($103) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 454 "binascii.c"
      case 25: // $bb27
        var $104=$bin_len; //@line 455 "binascii.c"
        var $105=__PyString_Resize($rv, $104); //@line 455 "binascii.c"
        var $106=($105) < 0; //@line 455 "binascii.c"
        if ($106) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 455 "binascii.c"
      case 26: // $bb28
        var $107=HEAP[$rv]; //@line 456 "binascii.c"
        var $108=$107; //@line 456 "binascii.c"
        var $109=HEAP[$108]; //@line 456 "binascii.c"
        var $110=($109) - 1; //@line 456 "binascii.c"
        var $111=$107; //@line 456 "binascii.c"
        HEAP[$111]=$110; //@line 456 "binascii.c"
        var $112=$107; //@line 456 "binascii.c"
        var $113=HEAP[$112]; //@line 456 "binascii.c"
        var $114=($113)==0; //@line 456 "binascii.c"
        if ($114) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 456 "binascii.c"
      case 27: // $bb29
        var $115=HEAP[$rv]; //@line 456 "binascii.c"
        var $116=$115+4; //@line 456 "binascii.c"
        var $117=HEAP[$116]; //@line 456 "binascii.c"
        var $118=$117+24; //@line 456 "binascii.c"
        var $119=HEAP[$118]; //@line 456 "binascii.c"
        var $120=HEAP[$rv]; //@line 456 "binascii.c"
        FUNCTION_TABLE[$119]($120); //@line 456 "binascii.c"
        __label__ = 28; break; //@line 456 "binascii.c"
      case 28: // $bb30
        HEAP[$rv]=0; //@line 457 "binascii.c"
        __label__ = 32; break; //@line 457 "binascii.c"
      case 29: // $bb32
        var $121=HEAP[$rv]; //@line 461 "binascii.c"
        var $122=$121; //@line 461 "binascii.c"
        var $123=HEAP[$122]; //@line 461 "binascii.c"
        var $124=($123) - 1; //@line 461 "binascii.c"
        var $125=$121; //@line 461 "binascii.c"
        HEAP[$125]=$124; //@line 461 "binascii.c"
        var $126=$121; //@line 461 "binascii.c"
        var $127=HEAP[$126]; //@line 461 "binascii.c"
        var $128=($127)==0; //@line 461 "binascii.c"
        if ($128) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 461 "binascii.c"
      case 30: // $bb33
        var $129=HEAP[$rv]; //@line 461 "binascii.c"
        var $130=$129+4; //@line 461 "binascii.c"
        var $131=HEAP[$130]; //@line 461 "binascii.c"
        var $132=$131+24; //@line 461 "binascii.c"
        var $133=HEAP[$132]; //@line 461 "binascii.c"
        var $134=HEAP[$rv]; //@line 461 "binascii.c"
        FUNCTION_TABLE[$133]($134); //@line 461 "binascii.c"
        __label__ = 31; break; //@line 461 "binascii.c"
      case 31: // $bb34
        var $135=_PyString_FromStringAndSize(__str9, 0); //@line 462 "binascii.c"
        HEAP[$rv]=$135; //@line 462 "binascii.c"
        __label__ = 32; break; //@line 462 "binascii.c"
      case 32: // $bb35
        _PyBuffer_Release($pascii); //@line 464 "binascii.c"
        var $136=HEAP[$rv]; //@line 465 "binascii.c"
        $0=$136; //@line 465 "binascii.c"
        __label__ = 33; break; //@line 465 "binascii.c"
      case 33: // $bb36
        var $137=$0; //@line 374 "binascii.c"
        $retval=$137; //@line 374 "binascii.c"
        var $retval37=$retval; //@line 374 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 374 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_base64($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pbuf=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv=__stackBase__+52;
        var $bin_len;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 475 "binascii.c"
        $leftchar=0; //@line 477 "binascii.c"
        var $1=$args_addr; //@line 481 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str10, allocate([$pbuf,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 481 "binascii.c"
        var $3=($2)==0; //@line 481 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 481 "binascii.c"
      case 1: // $bb
        $0=0; //@line 482 "binascii.c"
        __label__ = 21; break; //@line 482 "binascii.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 483 "binascii.c"
        var $5=HEAP[$4]; //@line 483 "binascii.c"
        $bin_data=$5; //@line 483 "binascii.c"
        var $6=$pbuf+8; //@line 484 "binascii.c"
        var $7=HEAP[$6]; //@line 484 "binascii.c"
        $bin_len=$7; //@line 484 "binascii.c"
        var $8=$bin_len; //@line 486 "binascii.c"
        var $9=($8) < 0; //@line 486 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 486 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str11, __str2, 486, ___PRETTY_FUNCTION___8609); //@line 486 "binascii.c"
        throw "Reached an unreachable!" //@line 486 "binascii.c"
      case 4: // $bb3
        var $10=$bin_len; //@line 488 "binascii.c"
        var $11=($10) > 1073741796; //@line 488 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 488 "binascii.c"
      case 5: // $bb4
        var $12=HEAP[_Error]; //@line 489 "binascii.c"
        _PyErr_SetString($12, __str12); //@line 489 "binascii.c"
        _PyBuffer_Release($pbuf); //@line 490 "binascii.c"
        $0=0; //@line 491 "binascii.c"
        __label__ = 21; break; //@line 491 "binascii.c"
      case 6: // $bb5
        var $13=$bin_len; //@line 497 "binascii.c"
        var $14=($13) * 2; //@line 497 "binascii.c"
        var $15=($14) + 3; //@line 497 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 497 "binascii.c"
        HEAP[$rv]=$16; //@line 497 "binascii.c"
        var $17=HEAP[$rv]; //@line 497 "binascii.c"
        var $18=($17)==0; //@line 497 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 497 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbuf); //@line 498 "binascii.c"
        $0=0; //@line 499 "binascii.c"
        __label__ = 21; break; //@line 499 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 501 "binascii.c"
        var $20=$19; //@line 501 "binascii.c"
        var $21=$20+20; //@line 501 "binascii.c"
        var $22=$21; //@line 501 "binascii.c"
        $ascii_data=$22; //@line 501 "binascii.c"
        var $_pr1=$bin_len;
        var $23=($_pr1) > 0; //@line 503 "binascii.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 503 "binascii.c"
      case 9: // $bb8
        var $24=$leftchar; //@line 505 "binascii.c"
        var $25=($24) << 8; //@line 505 "binascii.c"
        var $26=$bin_data; //@line 505 "binascii.c"
        var $27=HEAP[$26]; //@line 505 "binascii.c"
        var $28=($27); //@line 505 "binascii.c"
        var $29=($28) | ($25); //@line 505 "binascii.c"
        $leftchar=$29; //@line 505 "binascii.c"
        var $30=$leftbits; //@line 506 "binascii.c"
        var $31=($30) + 8; //@line 506 "binascii.c"
        $leftbits=$31; //@line 506 "binascii.c"
        var $32=($31) > 5; //@line 509 "binascii.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 509 "binascii.c"
      case 10: // $bb9
        var $33=$leftbits; //@line 510 "binascii.c"
        var $34=($33) - 6; //@line 510 "binascii.c"
        var $35=$leftchar; //@line 510 "binascii.c"
        var $36=((($35))>>>0) >>> ((($34))>>>0); //@line 510 "binascii.c"
        var $37=((($36)) & 255); //@line 510 "binascii.c"
        var $38=($37) & 63; //@line 510 "binascii.c"
        $this_ch=$38; //@line 510 "binascii.c"
        var $39=$leftbits; //@line 511 "binascii.c"
        var $40=($39) - 6; //@line 511 "binascii.c"
        $leftbits=$40; //@line 511 "binascii.c"
        var $41=$this_ch; //@line 512 "binascii.c"
        var $42=($41); //@line 512 "binascii.c"
        var $43=_table_b2a_base64+$42; //@line 512 "binascii.c"
        var $44=HEAP[$43]; //@line 512 "binascii.c"
        var $45=$ascii_data; //@line 512 "binascii.c"
        HEAP[$45]=$44; //@line 512 "binascii.c"
        var $46=$ascii_data; //@line 512 "binascii.c"
        var $47=$46+1; //@line 512 "binascii.c"
        $ascii_data=$47; //@line 512 "binascii.c"
        var $_pr=$leftbits;
        var $48=($_pr) > 5; //@line 509 "binascii.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 509 "binascii.c"
      case 11: // $bb11
        var $49=$bin_len; //@line 503 "binascii.c"
        var $50=($49) - 1; //@line 503 "binascii.c"
        $bin_len=$50; //@line 503 "binascii.c"
        var $51=$bin_data; //@line 503 "binascii.c"
        var $52=$51+1; //@line 503 "binascii.c"
        $bin_data=$52; //@line 503 "binascii.c"
        var $53=($50) > 0; //@line 503 "binascii.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 503 "binascii.c"
      case 12: // $bb13
        var $54=$leftbits; //@line 515 "binascii.c"
        var $55=($54)==2; //@line 515 "binascii.c"
        if ($55) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 515 "binascii.c"
      case 13: // $bb14
        var $56=$leftchar; //@line 516 "binascii.c"
        var $57=($56) & 3; //@line 516 "binascii.c"
        var $58=($57) << 4; //@line 516 "binascii.c"
        var $59=_table_b2a_base64+$58; //@line 516 "binascii.c"
        var $60=HEAP[$59]; //@line 516 "binascii.c"
        var $61=$ascii_data; //@line 516 "binascii.c"
        HEAP[$61]=$60; //@line 516 "binascii.c"
        var $62=$ascii_data; //@line 516 "binascii.c"
        var $63=$62+1; //@line 516 "binascii.c"
        $ascii_data=$63; //@line 516 "binascii.c"
        var $64=$ascii_data; //@line 517 "binascii.c"
        HEAP[$64]=61; //@line 517 "binascii.c"
        var $65=$ascii_data; //@line 517 "binascii.c"
        var $66=$65+1; //@line 517 "binascii.c"
        $ascii_data=$66; //@line 517 "binascii.c"
        var $67=$ascii_data; //@line 518 "binascii.c"
        HEAP[$67]=61; //@line 518 "binascii.c"
        var $68=$ascii_data; //@line 518 "binascii.c"
        var $69=$68+1; //@line 518 "binascii.c"
        $ascii_data=$69; //@line 518 "binascii.c"
        __label__ = 16; break; //@line 518 "binascii.c"
      case 14: // $bb15
        var $70=$leftbits; //@line 519 "binascii.c"
        var $71=($70)==4; //@line 519 "binascii.c"
        if ($71) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 519 "binascii.c"
      case 15: // $bb16
        var $72=$leftchar; //@line 520 "binascii.c"
        var $73=($72) & 15; //@line 520 "binascii.c"
        var $74=($73) << 2; //@line 520 "binascii.c"
        var $75=_table_b2a_base64+$74; //@line 520 "binascii.c"
        var $76=HEAP[$75]; //@line 520 "binascii.c"
        var $77=$ascii_data; //@line 520 "binascii.c"
        HEAP[$77]=$76; //@line 520 "binascii.c"
        var $78=$ascii_data; //@line 520 "binascii.c"
        var $79=$78+1; //@line 520 "binascii.c"
        $ascii_data=$79; //@line 520 "binascii.c"
        var $80=$ascii_data; //@line 521 "binascii.c"
        HEAP[$80]=61; //@line 521 "binascii.c"
        var $81=$ascii_data; //@line 521 "binascii.c"
        var $82=$81+1; //@line 521 "binascii.c"
        $ascii_data=$82; //@line 521 "binascii.c"
        __label__ = 16; break; //@line 521 "binascii.c"
      case 16: // $bb17
        var $83=$ascii_data; //@line 523 "binascii.c"
        HEAP[$83]=10; //@line 523 "binascii.c"
        var $84=$ascii_data; //@line 523 "binascii.c"
        var $85=$84+1; //@line 523 "binascii.c"
        $ascii_data=$85; //@line 523 "binascii.c"
        var $86=$ascii_data; //@line 525 "binascii.c"
        var $87=($86); //@line 525 "binascii.c"
        var $88=HEAP[$rv]; //@line 525 "binascii.c"
        var $89=$88; //@line 525 "binascii.c"
        var $90=$89+20; //@line 525 "binascii.c"
        var $91=($90); //@line 525 "binascii.c"
        var $92=($87) - ($91); //@line 525 "binascii.c"
        var $93=__PyString_Resize($rv, $92); //@line 525 "binascii.c"
        var $94=($93) < 0; //@line 525 "binascii.c"
        if ($94) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 525 "binascii.c"
      case 17: // $bb18
        var $95=HEAP[$rv]; //@line 528 "binascii.c"
        var $96=$95; //@line 528 "binascii.c"
        var $97=HEAP[$96]; //@line 528 "binascii.c"
        var $98=($97) - 1; //@line 528 "binascii.c"
        var $99=$95; //@line 528 "binascii.c"
        HEAP[$99]=$98; //@line 528 "binascii.c"
        var $100=$95; //@line 528 "binascii.c"
        var $101=HEAP[$100]; //@line 528 "binascii.c"
        var $102=($101)==0; //@line 528 "binascii.c"
        if ($102) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 528 "binascii.c"
      case 18: // $bb19
        var $103=HEAP[$rv]; //@line 528 "binascii.c"
        var $104=$103+4; //@line 528 "binascii.c"
        var $105=HEAP[$104]; //@line 528 "binascii.c"
        var $106=$105+24; //@line 528 "binascii.c"
        var $107=HEAP[$106]; //@line 528 "binascii.c"
        var $108=HEAP[$rv]; //@line 528 "binascii.c"
        FUNCTION_TABLE[$107]($108); //@line 528 "binascii.c"
        __label__ = 19; break; //@line 528 "binascii.c"
      case 19: // $bb20
        HEAP[$rv]=0; //@line 529 "binascii.c"
        __label__ = 20; break; //@line 529 "binascii.c"
      case 20: // $bb21
        _PyBuffer_Release($pbuf); //@line 531 "binascii.c"
        var $109=HEAP[$rv]; //@line 532 "binascii.c"
        $0=$109; //@line 532 "binascii.c"
        __label__ = 21; break; //@line 532 "binascii.c"
      case 21: // $bb22
        var $110=$0; //@line 482 "binascii.c"
        $retval=$110; //@line 482 "binascii.c"
        var $retval23=$retval; //@line 482 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 482 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pascii=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv=__stackBase__+52;
        var $len;
        var $done;
        var $rrv;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 542 "binascii.c"
        $leftchar=0; //@line 544 "binascii.c"
        $done=0; //@line 547 "binascii.c"
        var $1=$args_addr; //@line 549 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str13, allocate([$pascii,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 549 "binascii.c"
        var $3=($2)==0; //@line 549 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 549 "binascii.c"
      case 1: // $bb
        $0=0; //@line 550 "binascii.c"
        __label__ = 34; break; //@line 550 "binascii.c"
      case 2: // $bb1
        var $4=$pascii; //@line 551 "binascii.c"
        var $5=HEAP[$4]; //@line 551 "binascii.c"
        $ascii_data=$5; //@line 551 "binascii.c"
        var $6=$pascii+8; //@line 552 "binascii.c"
        var $7=HEAP[$6]; //@line 552 "binascii.c"
        $len=$7; //@line 552 "binascii.c"
        var $8=$len; //@line 554 "binascii.c"
        var $9=($8) < 0; //@line 554 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 554 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str14, __str2, 554, ___PRETTY_FUNCTION___8689); //@line 554 "binascii.c"
        throw "Reached an unreachable!" //@line 554 "binascii.c"
      case 4: // $bb3
        var $10=$len; //@line 556 "binascii.c"
        var $11=($10) > 2147483645; //@line 556 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 556 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 557 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 558 "binascii.c"
        $0=$12; //@line 558 "binascii.c"
        __label__ = 34; break; //@line 558 "binascii.c"
      case 6: // $bb5
        var $13=$len; //@line 564 "binascii.c"
        var $14=($13) + 2; //@line 564 "binascii.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 564 "binascii.c"
        HEAP[$rv]=$15; //@line 564 "binascii.c"
        var $16=HEAP[$rv]; //@line 564 "binascii.c"
        var $17=($16)==0; //@line 564 "binascii.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 564 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pascii); //@line 565 "binascii.c"
        $0=0; //@line 566 "binascii.c"
        __label__ = 34; break; //@line 566 "binascii.c"
      case 8: // $bb7
        var $18=HEAP[$rv]; //@line 568 "binascii.c"
        var $19=$18; //@line 568 "binascii.c"
        var $20=$19+20; //@line 568 "binascii.c"
        var $21=$20; //@line 568 "binascii.c"
        $bin_data=$21; //@line 568 "binascii.c"
        var $_pr=$len;
        __lastLabel__ = 8; __label__ = 19; break; //@line 568 "binascii.c"
      case 9: // $bb8
        var $22=$ascii_data; //@line 572 "binascii.c"
        var $23=HEAP[$22]; //@line 572 "binascii.c"
        var $24=($23); //@line 572 "binascii.c"
        var $25=_table_a2b_hqx+$24; //@line 572 "binascii.c"
        var $26=HEAP[$25]; //@line 572 "binascii.c"
        $this_ch=$26; //@line 572 "binascii.c"
        var $27=$this_ch; //@line 573 "binascii.c"
        var $28=($27)==126; //@line 573 "binascii.c"
        if ($28) { __label__ = 18; break; } else { __label__ = 10; break; } //@line 573 "binascii.c"
      case 10: // $bb9
        var $29=$this_ch; //@line 575 "binascii.c"
        var $30=($29)==125; //@line 575 "binascii.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 575 "binascii.c"
      case 11: // $bb10
        var $31=HEAP[_Error]; //@line 576 "binascii.c"
        _PyErr_SetString($31, __str3); //@line 576 "binascii.c"
        _PyBuffer_Release($pascii); //@line 577 "binascii.c"
        var $32=HEAP[$rv]; //@line 578 "binascii.c"
        var $33=$32; //@line 578 "binascii.c"
        var $34=HEAP[$33]; //@line 578 "binascii.c"
        var $35=($34) - 1; //@line 578 "binascii.c"
        var $36=$32; //@line 578 "binascii.c"
        HEAP[$36]=$35; //@line 578 "binascii.c"
        var $37=$32; //@line 578 "binascii.c"
        var $38=HEAP[$37]; //@line 578 "binascii.c"
        var $39=($38)==0; //@line 578 "binascii.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 578 "binascii.c"
      case 12: // $bb11
        var $40=HEAP[$rv]; //@line 578 "binascii.c"
        var $41=$40+4; //@line 578 "binascii.c"
        var $42=HEAP[$41]; //@line 578 "binascii.c"
        var $43=$42+24; //@line 578 "binascii.c"
        var $44=HEAP[$43]; //@line 578 "binascii.c"
        var $45=HEAP[$rv]; //@line 578 "binascii.c"
        FUNCTION_TABLE[$44]($45); //@line 578 "binascii.c"
        __label__ = 13; break; //@line 578 "binascii.c"
      case 13: // $bb12
        $0=0; //@line 579 "binascii.c"
        __label__ = 34; break; //@line 579 "binascii.c"
      case 14: // $bb13
        var $46=$this_ch; //@line 581 "binascii.c"
        var $47=($46)==127; //@line 581 "binascii.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 581 "binascii.c"
      case 15: // $bb14
        $done=1; //@line 583 "binascii.c"
        __label__ = 20; break; //@line 583 "binascii.c"
      case 16: // $bb15
        var $48=$leftchar; //@line 588 "binascii.c"
        var $49=($48) << 6; //@line 588 "binascii.c"
        var $50=$this_ch; //@line 588 "binascii.c"
        var $51=($50); //@line 588 "binascii.c"
        var $52=($51) | ($49); //@line 588 "binascii.c"
        $leftchar=$52; //@line 588 "binascii.c"
        var $53=$leftbits; //@line 589 "binascii.c"
        var $54=($53) + 6; //@line 589 "binascii.c"
        $leftbits=$54; //@line 589 "binascii.c"
        var $55=$leftbits; //@line 590 "binascii.c"
        var $56=($55) > 7; //@line 590 "binascii.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 590 "binascii.c"
      case 17: // $bb16
        var $57=$leftbits; //@line 591 "binascii.c"
        var $58=($57) - 8; //@line 591 "binascii.c"
        $leftbits=$58; //@line 591 "binascii.c"
        var $59=$leftchar; //@line 592 "binascii.c"
        var $60=$leftbits; //@line 592 "binascii.c"
        var $61=($59) >>> ($60); //@line 592 "binascii.c"
        var $62=((($61)) & 255); //@line 592 "binascii.c"
        var $63=$bin_data; //@line 592 "binascii.c"
        HEAP[$63]=$62; //@line 592 "binascii.c"
        var $64=$bin_data; //@line 592 "binascii.c"
        var $65=$64+1; //@line 592 "binascii.c"
        $bin_data=$65; //@line 592 "binascii.c"
        var $66=$leftbits; //@line 593 "binascii.c"
        var $67=1 << ($66); //@line 593 "binascii.c"
        var $68=($67) - 1; //@line 593 "binascii.c"
        var $69=$leftchar; //@line 593 "binascii.c"
        var $70=($68) & ($69); //@line 593 "binascii.c"
        $leftchar=$70; //@line 593 "binascii.c"
        __label__ = 18; break; //@line 593 "binascii.c"
      case 18: // $bb17
        var $71=$len; //@line 570 "binascii.c"
        var $72=($71) - 1; //@line 570 "binascii.c"
        $len=$72; //@line 570 "binascii.c"
        var $73=$ascii_data; //@line 570 "binascii.c"
        var $74=$73+1; //@line 570 "binascii.c"
        $ascii_data=$74; //@line 570 "binascii.c"
        __lastLabel__ = 18; __label__ = 19; break; //@line 570 "binascii.c"
      case 19: // $bb18
        var $75=__lastLabel__ == 18 ? $72 : ($_pr);
        var $76=($75) > 0; //@line 570 "binascii.c"
        if ($76) { __label__ = 9; break; } else { __label__ = 20; break; } //@line 570 "binascii.c"
      case 20: // $bb19
        var $77=$leftbits; //@line 597 "binascii.c"
        var $78=($77)!=0; //@line 597 "binascii.c"
        if ($78) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 597 "binascii.c"
      case 21: // $bb20
        var $79=$done; //@line 597 "binascii.c"
        var $80=($79)==0; //@line 597 "binascii.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 597 "binascii.c"
      case 22: // $bb21
        var $81=HEAP[_Incomplete]; //@line 598 "binascii.c"
        _PyErr_SetString($81, __str15); //@line 598 "binascii.c"
        _PyBuffer_Release($pascii); //@line 600 "binascii.c"
        var $82=HEAP[$rv]; //@line 601 "binascii.c"
        var $83=$82; //@line 601 "binascii.c"
        var $84=HEAP[$83]; //@line 601 "binascii.c"
        var $85=($84) - 1; //@line 601 "binascii.c"
        var $86=$82; //@line 601 "binascii.c"
        HEAP[$86]=$85; //@line 601 "binascii.c"
        var $87=$82; //@line 601 "binascii.c"
        var $88=HEAP[$87]; //@line 601 "binascii.c"
        var $89=($88)==0; //@line 601 "binascii.c"
        if ($89) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 601 "binascii.c"
      case 23: // $bb22
        var $90=HEAP[$rv]; //@line 601 "binascii.c"
        var $91=$90+4; //@line 601 "binascii.c"
        var $92=HEAP[$91]; //@line 601 "binascii.c"
        var $93=$92+24; //@line 601 "binascii.c"
        var $94=HEAP[$93]; //@line 601 "binascii.c"
        var $95=HEAP[$rv]; //@line 601 "binascii.c"
        FUNCTION_TABLE[$94]($95); //@line 601 "binascii.c"
        __label__ = 24; break; //@line 601 "binascii.c"
      case 24: // $bb23
        $0=0; //@line 602 "binascii.c"
        __label__ = 34; break; //@line 602 "binascii.c"
      case 25: // $bb24
        var $96=$bin_data; //@line 604 "binascii.c"
        var $97=($96); //@line 604 "binascii.c"
        var $98=HEAP[$rv]; //@line 604 "binascii.c"
        var $99=$98; //@line 604 "binascii.c"
        var $100=$99+20; //@line 604 "binascii.c"
        var $101=($100); //@line 604 "binascii.c"
        var $102=($97) - ($101); //@line 604 "binascii.c"
        var $103=__PyString_Resize($rv, $102); //@line 604 "binascii.c"
        var $104=($103) < 0; //@line 604 "binascii.c"
        var $105=HEAP[$rv]; //@line 607 "binascii.c"
        if ($104) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 604 "binascii.c"
      case 26: // $bb25
        var $106=$105; //@line 607 "binascii.c"
        var $107=HEAP[$106]; //@line 607 "binascii.c"
        var $108=($107) - 1; //@line 607 "binascii.c"
        var $109=$105; //@line 607 "binascii.c"
        HEAP[$109]=$108; //@line 607 "binascii.c"
        var $110=$105; //@line 607 "binascii.c"
        var $111=HEAP[$110]; //@line 607 "binascii.c"
        var $112=($111)==0; //@line 607 "binascii.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 607 "binascii.c"
      case 27: // $bb26
        var $113=HEAP[$rv]; //@line 607 "binascii.c"
        var $114=$113+4; //@line 607 "binascii.c"
        var $115=HEAP[$114]; //@line 607 "binascii.c"
        var $116=$115+24; //@line 607 "binascii.c"
        var $117=HEAP[$116]; //@line 607 "binascii.c"
        var $118=HEAP[$rv]; //@line 607 "binascii.c"
        FUNCTION_TABLE[$117]($118); //@line 607 "binascii.c"
        __label__ = 28; break; //@line 607 "binascii.c"
      case 28: // $bb28_thread
        HEAP[$rv]=0; //@line 608 "binascii.c"
        __label__ = 33; break;
      case 29: // $bb28
        var $119=($105)!=0; //@line 610 "binascii.c"
        if ($119) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 610 "binascii.c"
      case 30: // $bb29
        var $120=HEAP[$rv]; //@line 611 "binascii.c"
        var $121=$done; //@line 611 "binascii.c"
        var $122=__Py_BuildValue_SizeT(__str16, allocate([$120,0,0,0,$121,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 611 "binascii.c"
        $rrv=$122; //@line 611 "binascii.c"
        _PyBuffer_Release($pascii); //@line 612 "binascii.c"
        var $123=HEAP[$rv]; //@line 613 "binascii.c"
        var $124=$123; //@line 613 "binascii.c"
        var $125=HEAP[$124]; //@line 613 "binascii.c"
        var $126=($125) - 1; //@line 613 "binascii.c"
        var $127=$123; //@line 613 "binascii.c"
        HEAP[$127]=$126; //@line 613 "binascii.c"
        var $128=$123; //@line 613 "binascii.c"
        var $129=HEAP[$128]; //@line 613 "binascii.c"
        var $130=($129)==0; //@line 613 "binascii.c"
        if ($130) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 613 "binascii.c"
      case 31: // $bb30
        var $131=HEAP[$rv]; //@line 613 "binascii.c"
        var $132=$131+4; //@line 613 "binascii.c"
        var $133=HEAP[$132]; //@line 613 "binascii.c"
        var $134=$133+24; //@line 613 "binascii.c"
        var $135=HEAP[$134]; //@line 613 "binascii.c"
        var $136=HEAP[$rv]; //@line 613 "binascii.c"
        FUNCTION_TABLE[$135]($136); //@line 613 "binascii.c"
        __label__ = 32; break; //@line 613 "binascii.c"
      case 32: // $bb31
        var $137=$rrv; //@line 614 "binascii.c"
        $0=$137; //@line 614 "binascii.c"
        __label__ = 34; break; //@line 614 "binascii.c"
      case 33: // $bb32
        _PyBuffer_Release($pascii); //@line 617 "binascii.c"
        $0=0; //@line 618 "binascii.c"
        __label__ = 34; break; //@line 618 "binascii.c"
      case 34: // $bb33
        var $138=$0; //@line 550 "binascii.c"
        $retval=$138; //@line 550 "binascii.c"
        var $retval34=$retval; //@line 550 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 550 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_rlecode_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pbuf=__stackBase__;
        var $in_data;
        var $out_data;
        var $rv=__stackBase__+52;
        var $ch;
        var $in;
        var $inend;
        var $len;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 632 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str17, allocate([$pbuf,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 632 "binascii.c"
        var $3=($2)==0; //@line 632 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 632 "binascii.c"
      case 1: // $bb
        $0=0; //@line 633 "binascii.c"
        __label__ = 24; break; //@line 633 "binascii.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 634 "binascii.c"
        var $5=HEAP[$4]; //@line 634 "binascii.c"
        $in_data=$5; //@line 634 "binascii.c"
        var $6=$pbuf+8; //@line 635 "binascii.c"
        var $7=HEAP[$6]; //@line 635 "binascii.c"
        $len=$7; //@line 635 "binascii.c"
        var $8=$len; //@line 637 "binascii.c"
        var $9=($8) < 0; //@line 637 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str14, __str2, 637, ___PRETTY_FUNCTION___8803); //@line 637 "binascii.c"
        throw "Reached an unreachable!" //@line 637 "binascii.c"
      case 4: // $bb3
        var $10=$len; //@line 639 "binascii.c"
        var $11=($10) > 1073741821; //@line 639 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 639 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbuf); //@line 640 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 641 "binascii.c"
        $0=$12; //@line 641 "binascii.c"
        __label__ = 24; break; //@line 641 "binascii.c"
      case 6: // $bb5
        var $13=$len; //@line 645 "binascii.c"
        var $14=($13) + 1; //@line 645 "binascii.c"
        var $15=($14) * 2; //@line 645 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 645 "binascii.c"
        HEAP[$rv]=$16; //@line 645 "binascii.c"
        var $17=HEAP[$rv]; //@line 645 "binascii.c"
        var $18=($17)==0; //@line 645 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 645 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbuf); //@line 646 "binascii.c"
        $0=0; //@line 647 "binascii.c"
        __label__ = 24; break; //@line 647 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 649 "binascii.c"
        var $20=$19; //@line 649 "binascii.c"
        var $21=$20+20; //@line 649 "binascii.c"
        var $22=$21; //@line 649 "binascii.c"
        $out_data=$22; //@line 649 "binascii.c"
        $in=0; //@line 651 "binascii.c"
        var $23=$in; //@line 651 "binascii.c"
        var $24=$len; //@line 651 "binascii.c"
        var $25=($23) < ($24); //@line 651 "binascii.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 19; break; } //@line 651 "binascii.c"
      case 9: // $bb8
        var $26=$in_data; //@line 652 "binascii.c"
        var $27=$in; //@line 652 "binascii.c"
        var $28=$26+$27; //@line 652 "binascii.c"
        var $29=HEAP[$28]; //@line 652 "binascii.c"
        $ch=$29; //@line 652 "binascii.c"
        var $30=reSign(($29), 8, 1)==-112; //@line 653 "binascii.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 653 "binascii.c"
      case 10: // $bb9
        var $31=$out_data; //@line 655 "binascii.c"
        HEAP[$31]=-112; //@line 655 "binascii.c"
        var $32=$out_data; //@line 655 "binascii.c"
        var $33=$32+1; //@line 655 "binascii.c"
        $out_data=$33; //@line 655 "binascii.c"
        var $34=$out_data; //@line 656 "binascii.c"
        HEAP[$34]=0; //@line 656 "binascii.c"
        var $35=$out_data; //@line 656 "binascii.c"
        var $36=$35+1; //@line 656 "binascii.c"
        $out_data=$36; //@line 656 "binascii.c"
        __label__ = 18; break; //@line 656 "binascii.c"
      case 11: // $bb10
        var $37=$in; //@line 659 "binascii.c"
        var $38=($37) + 1; //@line 659 "binascii.c"
        $inend=$38; //@line 659 "binascii.c"
        __label__ = 13; break; //@line 659 "binascii.c"
      case 12: // $bb11
        var $39=$inend; //@line 662 "binascii.c"
        var $40=($39) + 1; //@line 662 "binascii.c"
        $inend=$40; //@line 662 "binascii.c"
        __label__ = 13; break; //@line 662 "binascii.c"
      case 13: // $bb12
        var $41=$inend; //@line 660 "binascii.c"
        var $42=$len; //@line 660 "binascii.c"
        var $43=((($41))|0) >= ((($42))|0); //@line 660 "binascii.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 660 "binascii.c"
      case 14: // $bb13
        var $44=$in_data; //@line 660 "binascii.c"
        var $45=$inend; //@line 660 "binascii.c"
        var $46=$44+$45; //@line 660 "binascii.c"
        var $47=HEAP[$46]; //@line 660 "binascii.c"
        var $48=$ch; //@line 660 "binascii.c"
        var $49=reSign(($47), 8, 1)!=reSign(($48), 8, 1); //@line 660 "binascii.c"
        if ($49) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 660 "binascii.c"
      case 15: // $bb14
        var $50=$in; //@line 660 "binascii.c"
        var $51=($50) + 255; //@line 660 "binascii.c"
        var $52=$inend; //@line 660 "binascii.c"
        var $53=((($51))|0) > ((($52))|0); //@line 660 "binascii.c"
        if ($53) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 660 "binascii.c"
      case 16: // $bb15
        var $54=$inend; //@line 663 "binascii.c"
        var $55=$in; //@line 663 "binascii.c"
        var $56=($54) - ($55); //@line 663 "binascii.c"
        var $57=($56) > 3; //@line 663 "binascii.c"
        var $58=$out_data; //@line 665 "binascii.c"
        var $59=$ch; //@line 665 "binascii.c"
        HEAP[$58]=$59; //@line 665 "binascii.c"
        var $60=$out_data; //@line 665 "binascii.c"
        var $61=$60+1; //@line 665 "binascii.c"
        $out_data=$61; //@line 665 "binascii.c"
        if ($57) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 663 "binascii.c"
      case 17: // $bb16
        var $62=$out_data; //@line 666 "binascii.c"
        HEAP[$62]=-112; //@line 666 "binascii.c"
        var $63=$out_data; //@line 666 "binascii.c"
        var $64=$63+1; //@line 666 "binascii.c"
        $out_data=$64; //@line 666 "binascii.c"
        var $65=$inend; //@line 667 "binascii.c"
        var $66=((($65)) & 255); //@line 667 "binascii.c"
        var $67=$in; //@line 667 "binascii.c"
        var $68=((($67)) & 255); //@line 667 "binascii.c"
        var $69=($66) - ($68); //@line 667 "binascii.c"
        var $70=$out_data; //@line 667 "binascii.c"
        HEAP[$70]=$69; //@line 667 "binascii.c"
        var $71=$out_data; //@line 667 "binascii.c"
        var $72=$71+1; //@line 667 "binascii.c"
        $out_data=$72; //@line 667 "binascii.c"
        var $73=$inend; //@line 668 "binascii.c"
        var $74=($73) - 1; //@line 668 "binascii.c"
        $in=$74; //@line 668 "binascii.c"
        __label__ = 18; break; //@line 668 "binascii.c"
      case 18: // $bb18
        var $75=$in; //@line 651 "binascii.c"
        var $76=($75) + 1; //@line 651 "binascii.c"
        $in=$76; //@line 651 "binascii.c"
        var $77=$in; //@line 651 "binascii.c"
        var $78=$len; //@line 651 "binascii.c"
        var $79=($77) < ($78); //@line 651 "binascii.c"
        if ($79) { __label__ = 9; break; } else { __label__ = 19; break; } //@line 651 "binascii.c"
      case 19: // $bb20
        var $80=$out_data; //@line 675 "binascii.c"
        var $81=($80); //@line 675 "binascii.c"
        var $82=HEAP[$rv]; //@line 675 "binascii.c"
        var $83=$82; //@line 675 "binascii.c"
        var $84=$83+20; //@line 675 "binascii.c"
        var $85=($84); //@line 675 "binascii.c"
        var $86=($81) - ($85); //@line 675 "binascii.c"
        var $87=__PyString_Resize($rv, $86); //@line 675 "binascii.c"
        var $88=($87) < 0; //@line 675 "binascii.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 675 "binascii.c"
      case 20: // $bb21
        var $89=HEAP[$rv]; //@line 678 "binascii.c"
        var $90=$89; //@line 678 "binascii.c"
        var $91=HEAP[$90]; //@line 678 "binascii.c"
        var $92=($91) - 1; //@line 678 "binascii.c"
        var $93=$89; //@line 678 "binascii.c"
        HEAP[$93]=$92; //@line 678 "binascii.c"
        var $94=$89; //@line 678 "binascii.c"
        var $95=HEAP[$94]; //@line 678 "binascii.c"
        var $96=($95)==0; //@line 678 "binascii.c"
        if ($96) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 678 "binascii.c"
      case 21: // $bb22
        var $97=HEAP[$rv]; //@line 678 "binascii.c"
        var $98=$97+4; //@line 678 "binascii.c"
        var $99=HEAP[$98]; //@line 678 "binascii.c"
        var $100=$99+24; //@line 678 "binascii.c"
        var $101=HEAP[$100]; //@line 678 "binascii.c"
        var $102=HEAP[$rv]; //@line 678 "binascii.c"
        FUNCTION_TABLE[$101]($102); //@line 678 "binascii.c"
        __label__ = 22; break; //@line 678 "binascii.c"
      case 22: // $bb23
        HEAP[$rv]=0; //@line 679 "binascii.c"
        __label__ = 23; break; //@line 679 "binascii.c"
      case 23: // $bb24
        _PyBuffer_Release($pbuf); //@line 681 "binascii.c"
        var $103=HEAP[$rv]; //@line 682 "binascii.c"
        $0=$103; //@line 682 "binascii.c"
        __label__ = 24; break; //@line 682 "binascii.c"
      case 24: // $bb25
        var $104=$0; //@line 633 "binascii.c"
        $retval=$104; //@line 633 "binascii.c"
        var $retval26=$retval; //@line 633 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 633 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pbin=__stackBase__;
        var $ascii_data;
        var $bin_data;
        var $leftbits;
        var $this_ch;
        var $leftchar;
        var $rv=__stackBase__+52;
        var $len;
        $self_addr=$self;
        $args_addr=$args;
        $leftbits=0; //@line 692 "binascii.c"
        $leftchar=0; //@line 694 "binascii.c"
        var $1=$args_addr; //@line 698 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str18, allocate([$pbin,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 698 "binascii.c"
        var $3=($2)==0; //@line 698 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 698 "binascii.c"
      case 1: // $bb
        $0=0; //@line 699 "binascii.c"
        __label__ = 19; break; //@line 699 "binascii.c"
      case 2: // $bb1
        var $4=$pbin; //@line 700 "binascii.c"
        var $5=HEAP[$4]; //@line 700 "binascii.c"
        $bin_data=$5; //@line 700 "binascii.c"
        var $6=$pbin+8; //@line 701 "binascii.c"
        var $7=HEAP[$6]; //@line 701 "binascii.c"
        $len=$7; //@line 701 "binascii.c"
        var $8=$len; //@line 703 "binascii.c"
        var $9=($8) < 0; //@line 703 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 703 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str14, __str2, 703, ___PRETTY_FUNCTION___8876); //@line 703 "binascii.c"
        throw "Reached an unreachable!" //@line 703 "binascii.c"
      case 4: // $bb3
        var $10=$len; //@line 705 "binascii.c"
        var $11=($10) > 1073741821; //@line 705 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 705 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbin); //@line 706 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 707 "binascii.c"
        $0=$12; //@line 707 "binascii.c"
        __label__ = 19; break; //@line 707 "binascii.c"
      case 6: // $bb5
        var $13=$len; //@line 711 "binascii.c"
        var $14=($13) + 1; //@line 711 "binascii.c"
        var $15=($14) * 2; //@line 711 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 711 "binascii.c"
        HEAP[$rv]=$16; //@line 711 "binascii.c"
        var $17=HEAP[$rv]; //@line 711 "binascii.c"
        var $18=($17)==0; //@line 711 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 711 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbin); //@line 712 "binascii.c"
        $0=0; //@line 713 "binascii.c"
        __label__ = 19; break; //@line 713 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 715 "binascii.c"
        var $20=$19; //@line 715 "binascii.c"
        var $21=$20+20; //@line 715 "binascii.c"
        var $22=$21; //@line 715 "binascii.c"
        $ascii_data=$22; //@line 715 "binascii.c"
        var $_pr1=$len;
        var $23=($_pr1) > 0; //@line 717 "binascii.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 717 "binascii.c"
      case 9: // $bb8
        var $24=$leftchar; //@line 719 "binascii.c"
        var $25=($24) << 8; //@line 719 "binascii.c"
        var $26=$bin_data; //@line 719 "binascii.c"
        var $27=HEAP[$26]; //@line 719 "binascii.c"
        var $28=($27); //@line 719 "binascii.c"
        var $29=($28) | ($25); //@line 719 "binascii.c"
        $leftchar=$29; //@line 719 "binascii.c"
        var $30=$leftbits; //@line 720 "binascii.c"
        var $31=($30) + 8; //@line 720 "binascii.c"
        $leftbits=$31; //@line 720 "binascii.c"
        var $32=($31) > 5; //@line 721 "binascii.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 721 "binascii.c"
      case 10: // $bb9
        var $33=$leftbits; //@line 722 "binascii.c"
        var $34=($33) - 6; //@line 722 "binascii.c"
        var $35=$leftchar; //@line 722 "binascii.c"
        var $36=((($35))>>>0) >>> ((($34))>>>0); //@line 722 "binascii.c"
        var $37=((($36)) & 255); //@line 722 "binascii.c"
        var $38=($37) & 63; //@line 722 "binascii.c"
        $this_ch=$38; //@line 722 "binascii.c"
        var $39=$leftbits; //@line 723 "binascii.c"
        var $40=($39) - 6; //@line 723 "binascii.c"
        $leftbits=$40; //@line 723 "binascii.c"
        var $41=$this_ch; //@line 724 "binascii.c"
        var $42=($41); //@line 724 "binascii.c"
        var $43=_table_b2a_hqx+$42; //@line 724 "binascii.c"
        var $44=HEAP[$43]; //@line 724 "binascii.c"
        var $45=$ascii_data; //@line 724 "binascii.c"
        HEAP[$45]=$44; //@line 724 "binascii.c"
        var $46=$ascii_data; //@line 724 "binascii.c"
        var $47=$46+1; //@line 724 "binascii.c"
        $ascii_data=$47; //@line 724 "binascii.c"
        var $_pr=$leftbits;
        var $48=($_pr) > 5; //@line 721 "binascii.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 721 "binascii.c"
      case 11: // $bb11
        var $49=$len; //@line 717 "binascii.c"
        var $50=($49) - 1; //@line 717 "binascii.c"
        $len=$50; //@line 717 "binascii.c"
        var $51=$bin_data; //@line 717 "binascii.c"
        var $52=$51+1; //@line 717 "binascii.c"
        $bin_data=$52; //@line 717 "binascii.c"
        var $53=($50) > 0; //@line 717 "binascii.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 717 "binascii.c"
      case 12: // $bb13
        var $54=$leftbits; //@line 728 "binascii.c"
        var $55=($54)!=0; //@line 728 "binascii.c"
        if ($55) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 728 "binascii.c"
      case 13: // $bb14
        var $56=$leftbits; //@line 729 "binascii.c"
        var $57=6 - ($56); //@line 729 "binascii.c"
        var $58=$leftchar; //@line 729 "binascii.c"
        var $59=($58) << ($57); //@line 729 "binascii.c"
        $leftchar=$59; //@line 729 "binascii.c"
        var $60=$leftchar; //@line 730 "binascii.c"
        var $61=($60) & 63; //@line 730 "binascii.c"
        var $62=_table_b2a_hqx+$61; //@line 730 "binascii.c"
        var $63=HEAP[$62]; //@line 730 "binascii.c"
        var $64=$ascii_data; //@line 730 "binascii.c"
        HEAP[$64]=$63; //@line 730 "binascii.c"
        var $65=$ascii_data; //@line 730 "binascii.c"
        var $66=$65+1; //@line 730 "binascii.c"
        $ascii_data=$66; //@line 730 "binascii.c"
        __label__ = 14; break; //@line 730 "binascii.c"
      case 14: // $bb15
        var $67=$ascii_data; //@line 732 "binascii.c"
        var $68=($67); //@line 732 "binascii.c"
        var $69=HEAP[$rv]; //@line 732 "binascii.c"
        var $70=$69; //@line 732 "binascii.c"
        var $71=$70+20; //@line 732 "binascii.c"
        var $72=($71); //@line 732 "binascii.c"
        var $73=($68) - ($72); //@line 732 "binascii.c"
        var $74=__PyString_Resize($rv, $73); //@line 732 "binascii.c"
        var $75=($74) < 0; //@line 732 "binascii.c"
        if ($75) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 732 "binascii.c"
      case 15: // $bb16
        var $76=HEAP[$rv]; //@line 735 "binascii.c"
        var $77=$76; //@line 735 "binascii.c"
        var $78=HEAP[$77]; //@line 735 "binascii.c"
        var $79=($78) - 1; //@line 735 "binascii.c"
        var $80=$76; //@line 735 "binascii.c"
        HEAP[$80]=$79; //@line 735 "binascii.c"
        var $81=$76; //@line 735 "binascii.c"
        var $82=HEAP[$81]; //@line 735 "binascii.c"
        var $83=($82)==0; //@line 735 "binascii.c"
        if ($83) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 735 "binascii.c"
      case 16: // $bb17
        var $84=HEAP[$rv]; //@line 735 "binascii.c"
        var $85=$84+4; //@line 735 "binascii.c"
        var $86=HEAP[$85]; //@line 735 "binascii.c"
        var $87=$86+24; //@line 735 "binascii.c"
        var $88=HEAP[$87]; //@line 735 "binascii.c"
        var $89=HEAP[$rv]; //@line 735 "binascii.c"
        FUNCTION_TABLE[$88]($89); //@line 735 "binascii.c"
        __label__ = 17; break; //@line 735 "binascii.c"
      case 17: // $bb18
        HEAP[$rv]=0; //@line 736 "binascii.c"
        __label__ = 18; break; //@line 736 "binascii.c"
      case 18: // $bb19
        _PyBuffer_Release($pbin); //@line 738 "binascii.c"
        var $90=HEAP[$rv]; //@line 739 "binascii.c"
        $0=$90; //@line 739 "binascii.c"
        __label__ = 19; break; //@line 739 "binascii.c"
      case 19: // $bb20
        var $91=$0; //@line 699 "binascii.c"
        $retval=$91; //@line 699 "binascii.c"
        var $retval21=$retval; //@line 699 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 699 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_rledecode_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pin=__stackBase__;
        var $in_data;
        var $out_data;
        var $in_byte;
        var $in_repeat;
        var $rv=__stackBase__+52;
        var $in_len;
        var $out_len;
        var $out_len_left;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 753 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str19, allocate([$pin,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 753 "binascii.c"
        var $3=($2)==0; //@line 753 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 753 "binascii.c"
      case 1: // $bb
        $0=0; //@line 754 "binascii.c"
        __label__ = 86; break; //@line 754 "binascii.c"
      case 2: // $bb1
        var $4=$pin; //@line 755 "binascii.c"
        var $5=HEAP[$4]; //@line 755 "binascii.c"
        $in_data=$5; //@line 755 "binascii.c"
        var $6=$pin+8; //@line 756 "binascii.c"
        var $7=HEAP[$6]; //@line 756 "binascii.c"
        $in_len=$7; //@line 756 "binascii.c"
        var $8=$in_len; //@line 758 "binascii.c"
        var $9=($8) < 0; //@line 758 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 758 "binascii.c"
      case 3: // $bb2
        ___assert_fail(__str20, __str2, 758, ___PRETTY_FUNCTION___8949); //@line 758 "binascii.c"
        throw "Reached an unreachable!" //@line 758 "binascii.c"
      case 4: // $bb3
        var $10=$in_len; //@line 761 "binascii.c"
        var $11=($10)==0; //@line 761 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 761 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pin); //@line 762 "binascii.c"
        var $12=_PyString_FromStringAndSize(__str9, 0); //@line 763 "binascii.c"
        $0=$12; //@line 763 "binascii.c"
        __label__ = 86; break; //@line 763 "binascii.c"
      case 6: // $bb5
        var $13=$in_len; //@line 765 "binascii.c"
        var $14=($13) > 1073741823; //@line 765 "binascii.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 765 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pin); //@line 766 "binascii.c"
        var $15=_PyErr_NoMemory(); //@line 767 "binascii.c"
        $0=$15; //@line 767 "binascii.c"
        __label__ = 86; break; //@line 767 "binascii.c"
      case 8: // $bb7
        var $16=$in_len; //@line 771 "binascii.c"
        var $17=($16) * 2; //@line 771 "binascii.c"
        $out_len=$17; //@line 771 "binascii.c"
        var $18=$out_len; //@line 772 "binascii.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 772 "binascii.c"
        HEAP[$rv]=$19; //@line 772 "binascii.c"
        var $20=HEAP[$rv]; //@line 772 "binascii.c"
        var $21=($20)==0; //@line 772 "binascii.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 772 "binascii.c"
      case 9: // $bb8
        _PyBuffer_Release($pin); //@line 773 "binascii.c"
        $0=0; //@line 774 "binascii.c"
        __label__ = 86; break; //@line 774 "binascii.c"
      case 10: // $bb9
        var $22=$out_len; //@line 776 "binascii.c"
        $out_len_left=$22; //@line 776 "binascii.c"
        var $23=HEAP[$rv]; //@line 777 "binascii.c"
        var $24=$23; //@line 777 "binascii.c"
        var $25=$24+20; //@line 777 "binascii.c"
        var $26=$25; //@line 777 "binascii.c"
        $out_data=$26; //@line 777 "binascii.c"
        var $27=$in_len; //@line 812 "binascii.c"
        var $28=($27) - 1; //@line 812 "binascii.c"
        $in_len=$28; //@line 812 "binascii.c"
        var $29=$in_len; //@line 812 "binascii.c"
        var $30=($29) < 0; //@line 812 "binascii.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 812 "binascii.c"
      case 11: // $bb10
        var $31=HEAP[_Incomplete]; //@line 812 "binascii.c"
        _PyErr_SetString($31, __str9); //@line 812 "binascii.c"
        var $32=HEAP[$rv]; //@line 812 "binascii.c"
        var $33=$32; //@line 812 "binascii.c"
        var $34=HEAP[$33]; //@line 812 "binascii.c"
        var $35=($34) - 1; //@line 812 "binascii.c"
        var $36=$32; //@line 812 "binascii.c"
        HEAP[$36]=$35; //@line 812 "binascii.c"
        var $37=$32; //@line 812 "binascii.c"
        var $38=HEAP[$37]; //@line 812 "binascii.c"
        var $39=($38)==0; //@line 812 "binascii.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 812 "binascii.c"
      case 12: // $bb11
        var $40=HEAP[$rv]; //@line 812 "binascii.c"
        var $41=$40+4; //@line 812 "binascii.c"
        var $42=HEAP[$41]; //@line 812 "binascii.c"
        var $43=$42+24; //@line 812 "binascii.c"
        var $44=HEAP[$43]; //@line 812 "binascii.c"
        var $45=HEAP[$rv]; //@line 812 "binascii.c"
        FUNCTION_TABLE[$44]($45); //@line 812 "binascii.c"
        __label__ = 13; break; //@line 812 "binascii.c"
      case 13: // $bb12
        _PyBuffer_Release($pin); //@line 812 "binascii.c"
        $0=0; //@line 812 "binascii.c"
        __label__ = 86; break; //@line 812 "binascii.c"
      case 14: // $bb13
        var $46=$in_data; //@line 812 "binascii.c"
        var $47=HEAP[$46]; //@line 812 "binascii.c"
        $in_byte=$47; //@line 812 "binascii.c"
        var $48=$in_data; //@line 812 "binascii.c"
        var $49=$48+1; //@line 812 "binascii.c"
        $in_data=$49; //@line 812 "binascii.c"
        var $50=$in_byte; //@line 814 "binascii.c"
        var $51=($50)==-112; //@line 814 "binascii.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 32; break; } //@line 814 "binascii.c"
      case 15: // $bb14
        var $52=$in_len; //@line 815 "binascii.c"
        var $53=($52) - 1; //@line 815 "binascii.c"
        $in_len=$53; //@line 815 "binascii.c"
        var $54=$in_len; //@line 815 "binascii.c"
        var $55=($54) < 0; //@line 815 "binascii.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 815 "binascii.c"
      case 16: // $bb15
        var $56=HEAP[_Incomplete]; //@line 815 "binascii.c"
        _PyErr_SetString($56, __str9); //@line 815 "binascii.c"
        var $57=HEAP[$rv]; //@line 815 "binascii.c"
        var $58=$57; //@line 815 "binascii.c"
        var $59=HEAP[$58]; //@line 815 "binascii.c"
        var $60=($59) - 1; //@line 815 "binascii.c"
        var $61=$57; //@line 815 "binascii.c"
        HEAP[$61]=$60; //@line 815 "binascii.c"
        var $62=$57; //@line 815 "binascii.c"
        var $63=HEAP[$62]; //@line 815 "binascii.c"
        var $64=($63)==0; //@line 815 "binascii.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 815 "binascii.c"
      case 17: // $bb16
        var $65=HEAP[$rv]; //@line 815 "binascii.c"
        var $66=$65+4; //@line 815 "binascii.c"
        var $67=HEAP[$66]; //@line 815 "binascii.c"
        var $68=$67+24; //@line 815 "binascii.c"
        var $69=HEAP[$68]; //@line 815 "binascii.c"
        var $70=HEAP[$rv]; //@line 815 "binascii.c"
        FUNCTION_TABLE[$69]($70); //@line 815 "binascii.c"
        __label__ = 18; break; //@line 815 "binascii.c"
      case 18: // $bb17
        _PyBuffer_Release($pin); //@line 815 "binascii.c"
        $0=0; //@line 815 "binascii.c"
        __label__ = 86; break; //@line 815 "binascii.c"
      case 19: // $bb18
        var $71=$in_data; //@line 815 "binascii.c"
        var $72=HEAP[$71]; //@line 815 "binascii.c"
        $in_repeat=$72; //@line 815 "binascii.c"
        var $73=$in_data; //@line 815 "binascii.c"
        var $74=$73+1; //@line 815 "binascii.c"
        $in_data=$74; //@line 815 "binascii.c"
        var $75=$in_repeat; //@line 816 "binascii.c"
        var $76=($75)!=0; //@line 816 "binascii.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 816 "binascii.c"
      case 20: // $bb19
        var $77=HEAP[_Error]; //@line 820 "binascii.c"
        _PyErr_SetString($77, __str21); //@line 820 "binascii.c"
        _PyBuffer_Release($pin); //@line 821 "binascii.c"
        var $78=HEAP[$rv]; //@line 822 "binascii.c"
        var $79=$78; //@line 822 "binascii.c"
        var $80=HEAP[$79]; //@line 822 "binascii.c"
        var $81=($80) - 1; //@line 822 "binascii.c"
        var $82=$78; //@line 822 "binascii.c"
        HEAP[$82]=$81; //@line 822 "binascii.c"
        var $83=$78; //@line 822 "binascii.c"
        var $84=HEAP[$83]; //@line 822 "binascii.c"
        var $85=($84)==0; //@line 822 "binascii.c"
        if ($85) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 822 "binascii.c"
      case 21: // $bb20
        var $86=HEAP[$rv]; //@line 822 "binascii.c"
        var $87=$86+4; //@line 822 "binascii.c"
        var $88=HEAP[$87]; //@line 822 "binascii.c"
        var $89=$88+24; //@line 822 "binascii.c"
        var $90=HEAP[$89]; //@line 822 "binascii.c"
        var $91=HEAP[$rv]; //@line 822 "binascii.c"
        FUNCTION_TABLE[$90]($91); //@line 822 "binascii.c"
        __label__ = 22; break; //@line 822 "binascii.c"
      case 22: // $bb21
        $0=0; //@line 823 "binascii.c"
        __label__ = 86; break; //@line 823 "binascii.c"
      case 23: // $bb22
        var $92=$out_len_left; //@line 825 "binascii.c"
        var $93=($92) - 1; //@line 825 "binascii.c"
        $out_len_left=$93; //@line 825 "binascii.c"
        var $94=$out_len_left; //@line 825 "binascii.c"
        var $95=($94) < 0; //@line 825 "binascii.c"
        if ($95) { __label__ = 24; break; } else { __label__ = 31; break; } //@line 825 "binascii.c"
      case 24: // $bb23
        var $96=$out_len; //@line 825 "binascii.c"
        var $97=($96) > 1073741823; //@line 825 "binascii.c"
        if ($97) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 825 "binascii.c"
      case 25: // $bb24
        var $98=_PyErr_NoMemory(); //@line 825 "binascii.c"
        $0=$98; //@line 825 "binascii.c"
        __label__ = 86; break; //@line 825 "binascii.c"
      case 26: // $bb25
        var $99=$out_len; //@line 825 "binascii.c"
        var $100=($99) * 2; //@line 825 "binascii.c"
        var $101=__PyString_Resize($rv, $100); //@line 825 "binascii.c"
        var $102=($101) < 0; //@line 825 "binascii.c"
        var $103=HEAP[$rv]; //@line 825 "binascii.c"
        if ($102) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 825 "binascii.c"
      case 27: // $bb26
        var $104=$103; //@line 825 "binascii.c"
        var $105=HEAP[$104]; //@line 825 "binascii.c"
        var $106=($105) - 1; //@line 825 "binascii.c"
        var $107=$103; //@line 825 "binascii.c"
        HEAP[$107]=$106; //@line 825 "binascii.c"
        var $108=$103; //@line 825 "binascii.c"
        var $109=HEAP[$108]; //@line 825 "binascii.c"
        var $110=($109)==0; //@line 825 "binascii.c"
        if ($110) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 825 "binascii.c"
      case 28: // $bb27
        var $111=HEAP[$rv]; //@line 825 "binascii.c"
        var $112=$111+4; //@line 825 "binascii.c"
        var $113=HEAP[$112]; //@line 825 "binascii.c"
        var $114=$113+24; //@line 825 "binascii.c"
        var $115=HEAP[$114]; //@line 825 "binascii.c"
        var $116=HEAP[$rv]; //@line 825 "binascii.c"
        FUNCTION_TABLE[$115]($116); //@line 825 "binascii.c"
        __label__ = 29; break; //@line 825 "binascii.c"
      case 29: // $bb28
        _PyBuffer_Release($pin); //@line 825 "binascii.c"
        $0=0; //@line 825 "binascii.c"
        __label__ = 86; break; //@line 825 "binascii.c"
      case 30: // $bb29
        var $117=$103; //@line 825 "binascii.c"
        var $118=$117+20; //@line 825 "binascii.c"
        var $119=$118; //@line 825 "binascii.c"
        var $120=$out_len; //@line 825 "binascii.c"
        var $121=$119+$120; //@line 825 "binascii.c"
        $out_data=$121; //@line 825 "binascii.c"
        var $122=$out_len; //@line 825 "binascii.c"
        var $123=($122) - 1; //@line 825 "binascii.c"
        $out_len_left=$123; //@line 825 "binascii.c"
        var $124=$out_len; //@line 825 "binascii.c"
        var $125=($124) * 2; //@line 825 "binascii.c"
        $out_len=$125; //@line 825 "binascii.c"
        __label__ = 31; break; //@line 825 "binascii.c"
      case 31: // $bb30
        var $126=$out_data; //@line 825 "binascii.c"
        HEAP[$126]=-112; //@line 825 "binascii.c"
        var $127=$out_data; //@line 825 "binascii.c"
        var $128=$127+1; //@line 825 "binascii.c"
        $out_data=$128; //@line 825 "binascii.c"
        __label__ = 80; break; //@line 825 "binascii.c"
      case 32: // $bb31
        var $129=$out_len_left; //@line 827 "binascii.c"
        var $130=($129) - 1; //@line 827 "binascii.c"
        $out_len_left=$130; //@line 827 "binascii.c"
        var $131=$out_len_left; //@line 827 "binascii.c"
        var $132=($131) < 0; //@line 827 "binascii.c"
        if ($132) { __label__ = 33; break; } else { __label__ = 40; break; } //@line 827 "binascii.c"
      case 33: // $bb32
        var $133=$out_len; //@line 827 "binascii.c"
        var $134=($133) > 1073741823; //@line 827 "binascii.c"
        if ($134) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 827 "binascii.c"
      case 34: // $bb33
        var $135=_PyErr_NoMemory(); //@line 827 "binascii.c"
        $0=$135; //@line 827 "binascii.c"
        __label__ = 86; break; //@line 827 "binascii.c"
      case 35: // $bb34
        var $136=$out_len; //@line 827 "binascii.c"
        var $137=($136) * 2; //@line 827 "binascii.c"
        var $138=__PyString_Resize($rv, $137); //@line 827 "binascii.c"
        var $139=($138) < 0; //@line 827 "binascii.c"
        var $140=HEAP[$rv]; //@line 827 "binascii.c"
        if ($139) { __label__ = 36; break; } else { __label__ = 39; break; } //@line 827 "binascii.c"
      case 36: // $bb35
        var $141=$140; //@line 827 "binascii.c"
        var $142=HEAP[$141]; //@line 827 "binascii.c"
        var $143=($142) - 1; //@line 827 "binascii.c"
        var $144=$140; //@line 827 "binascii.c"
        HEAP[$144]=$143; //@line 827 "binascii.c"
        var $145=$140; //@line 827 "binascii.c"
        var $146=HEAP[$145]; //@line 827 "binascii.c"
        var $147=($146)==0; //@line 827 "binascii.c"
        if ($147) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 827 "binascii.c"
      case 37: // $bb36
        var $148=HEAP[$rv]; //@line 827 "binascii.c"
        var $149=$148+4; //@line 827 "binascii.c"
        var $150=HEAP[$149]; //@line 827 "binascii.c"
        var $151=$150+24; //@line 827 "binascii.c"
        var $152=HEAP[$151]; //@line 827 "binascii.c"
        var $153=HEAP[$rv]; //@line 827 "binascii.c"
        FUNCTION_TABLE[$152]($153); //@line 827 "binascii.c"
        __label__ = 38; break; //@line 827 "binascii.c"
      case 38: // $bb37
        _PyBuffer_Release($pin); //@line 827 "binascii.c"
        $0=0; //@line 827 "binascii.c"
        __label__ = 86; break; //@line 827 "binascii.c"
      case 39: // $bb38
        var $154=$140; //@line 827 "binascii.c"
        var $155=$154+20; //@line 827 "binascii.c"
        var $156=$155; //@line 827 "binascii.c"
        var $157=$out_len; //@line 827 "binascii.c"
        var $158=$156+$157; //@line 827 "binascii.c"
        $out_data=$158; //@line 827 "binascii.c"
        var $159=$out_len; //@line 827 "binascii.c"
        var $160=($159) - 1; //@line 827 "binascii.c"
        $out_len_left=$160; //@line 827 "binascii.c"
        var $161=$out_len; //@line 827 "binascii.c"
        var $162=($161) * 2; //@line 827 "binascii.c"
        $out_len=$162; //@line 827 "binascii.c"
        __label__ = 40; break; //@line 827 "binascii.c"
      case 40: // $bb39
        var $163=$out_data; //@line 827 "binascii.c"
        var $164=$in_byte; //@line 827 "binascii.c"
        HEAP[$163]=$164; //@line 827 "binascii.c"
        var $165=$out_data; //@line 827 "binascii.c"
        var $166=$165+1; //@line 827 "binascii.c"
        $out_data=$166; //@line 827 "binascii.c"
        __label__ = 80; break; //@line 827 "binascii.c"
      case 41: // $bb41
        var $167=$in_len; //@line 831 "binascii.c"
        var $168=($167) - 1; //@line 831 "binascii.c"
        $in_len=$168; //@line 831 "binascii.c"
        var $169=$in_len; //@line 831 "binascii.c"
        var $170=($169) < 0; //@line 831 "binascii.c"
        if ($170) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 831 "binascii.c"
      case 42: // $bb42
        var $171=HEAP[_Incomplete]; //@line 831 "binascii.c"
        _PyErr_SetString($171, __str9); //@line 831 "binascii.c"
        var $172=HEAP[$rv]; //@line 831 "binascii.c"
        var $173=$172; //@line 831 "binascii.c"
        var $174=HEAP[$173]; //@line 831 "binascii.c"
        var $175=($174) - 1; //@line 831 "binascii.c"
        var $176=$172; //@line 831 "binascii.c"
        HEAP[$176]=$175; //@line 831 "binascii.c"
        var $177=$172; //@line 831 "binascii.c"
        var $178=HEAP[$177]; //@line 831 "binascii.c"
        var $179=($178)==0; //@line 831 "binascii.c"
        if ($179) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 831 "binascii.c"
      case 43: // $bb43
        var $180=HEAP[$rv]; //@line 831 "binascii.c"
        var $181=$180+4; //@line 831 "binascii.c"
        var $182=HEAP[$181]; //@line 831 "binascii.c"
        var $183=$182+24; //@line 831 "binascii.c"
        var $184=HEAP[$183]; //@line 831 "binascii.c"
        var $185=HEAP[$rv]; //@line 831 "binascii.c"
        FUNCTION_TABLE[$184]($185); //@line 831 "binascii.c"
        __label__ = 44; break; //@line 831 "binascii.c"
      case 44: // $bb44
        _PyBuffer_Release($pin); //@line 831 "binascii.c"
        $0=0; //@line 831 "binascii.c"
        __label__ = 86; break; //@line 831 "binascii.c"
      case 45: // $bb45
        var $186=$in_data; //@line 831 "binascii.c"
        var $187=HEAP[$186]; //@line 831 "binascii.c"
        $in_byte=$187; //@line 831 "binascii.c"
        var $188=$in_data; //@line 831 "binascii.c"
        var $189=$188+1; //@line 831 "binascii.c"
        $in_data=$189; //@line 831 "binascii.c"
        var $190=$in_byte; //@line 833 "binascii.c"
        var $191=reSign(($190), 8, 1)==-112; //@line 833 "binascii.c"
        if ($191) { __label__ = 46; break; } else { __label__ = 71; break; } //@line 833 "binascii.c"
      case 46: // $bb46
        var $192=$in_len; //@line 834 "binascii.c"
        var $193=($192) - 1; //@line 834 "binascii.c"
        $in_len=$193; //@line 834 "binascii.c"
        var $194=$in_len; //@line 834 "binascii.c"
        var $195=($194) < 0; //@line 834 "binascii.c"
        if ($195) { __label__ = 47; break; } else { __label__ = 50; break; } //@line 834 "binascii.c"
      case 47: // $bb47
        var $196=HEAP[_Incomplete]; //@line 834 "binascii.c"
        _PyErr_SetString($196, __str9); //@line 834 "binascii.c"
        var $197=HEAP[$rv]; //@line 834 "binascii.c"
        var $198=$197; //@line 834 "binascii.c"
        var $199=HEAP[$198]; //@line 834 "binascii.c"
        var $200=($199) - 1; //@line 834 "binascii.c"
        var $201=$197; //@line 834 "binascii.c"
        HEAP[$201]=$200; //@line 834 "binascii.c"
        var $202=$197; //@line 834 "binascii.c"
        var $203=HEAP[$202]; //@line 834 "binascii.c"
        var $204=($203)==0; //@line 834 "binascii.c"
        if ($204) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 834 "binascii.c"
      case 48: // $bb48
        var $205=HEAP[$rv]; //@line 834 "binascii.c"
        var $206=$205+4; //@line 834 "binascii.c"
        var $207=HEAP[$206]; //@line 834 "binascii.c"
        var $208=$207+24; //@line 834 "binascii.c"
        var $209=HEAP[$208]; //@line 834 "binascii.c"
        var $210=HEAP[$rv]; //@line 834 "binascii.c"
        FUNCTION_TABLE[$209]($210); //@line 834 "binascii.c"
        __label__ = 49; break; //@line 834 "binascii.c"
      case 49: // $bb49
        _PyBuffer_Release($pin); //@line 834 "binascii.c"
        $0=0; //@line 834 "binascii.c"
        __label__ = 86; break; //@line 834 "binascii.c"
      case 50: // $bb50
        var $211=$in_data; //@line 834 "binascii.c"
        var $212=HEAP[$211]; //@line 834 "binascii.c"
        $in_repeat=$212; //@line 834 "binascii.c"
        var $213=$in_data; //@line 834 "binascii.c"
        var $214=$213+1; //@line 834 "binascii.c"
        $in_data=$214; //@line 834 "binascii.c"
        var $215=$in_repeat; //@line 835 "binascii.c"
        var $216=($215)==0; //@line 835 "binascii.c"
        if ($216) { __label__ = 51; break; } else { __label__ = 60; break; } //@line 835 "binascii.c"
      case 51: // $bb51
        var $217=$out_len_left; //@line 837 "binascii.c"
        var $218=($217) - 1; //@line 837 "binascii.c"
        $out_len_left=$218; //@line 837 "binascii.c"
        var $219=$out_len_left; //@line 837 "binascii.c"
        var $220=($219) < 0; //@line 837 "binascii.c"
        if ($220) { __label__ = 52; break; } else { __label__ = 59; break; } //@line 837 "binascii.c"
      case 52: // $bb52
        var $221=$out_len; //@line 837 "binascii.c"
        var $222=($221) > 1073741823; //@line 837 "binascii.c"
        if ($222) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 837 "binascii.c"
      case 53: // $bb53
        var $223=_PyErr_NoMemory(); //@line 837 "binascii.c"
        $0=$223; //@line 837 "binascii.c"
        __label__ = 86; break; //@line 837 "binascii.c"
      case 54: // $bb54
        var $224=$out_len; //@line 837 "binascii.c"
        var $225=($224) * 2; //@line 837 "binascii.c"
        var $226=__PyString_Resize($rv, $225); //@line 837 "binascii.c"
        var $227=($226) < 0; //@line 837 "binascii.c"
        var $228=HEAP[$rv]; //@line 837 "binascii.c"
        if ($227) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 837 "binascii.c"
      case 55: // $bb55
        var $229=$228; //@line 837 "binascii.c"
        var $230=HEAP[$229]; //@line 837 "binascii.c"
        var $231=($230) - 1; //@line 837 "binascii.c"
        var $232=$228; //@line 837 "binascii.c"
        HEAP[$232]=$231; //@line 837 "binascii.c"
        var $233=$228; //@line 837 "binascii.c"
        var $234=HEAP[$233]; //@line 837 "binascii.c"
        var $235=($234)==0; //@line 837 "binascii.c"
        if ($235) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 837 "binascii.c"
      case 56: // $bb56
        var $236=HEAP[$rv]; //@line 837 "binascii.c"
        var $237=$236+4; //@line 837 "binascii.c"
        var $238=HEAP[$237]; //@line 837 "binascii.c"
        var $239=$238+24; //@line 837 "binascii.c"
        var $240=HEAP[$239]; //@line 837 "binascii.c"
        var $241=HEAP[$rv]; //@line 837 "binascii.c"
        FUNCTION_TABLE[$240]($241); //@line 837 "binascii.c"
        __label__ = 57; break; //@line 837 "binascii.c"
      case 57: // $bb57
        _PyBuffer_Release($pin); //@line 837 "binascii.c"
        $0=0; //@line 837 "binascii.c"
        __label__ = 86; break; //@line 837 "binascii.c"
      case 58: // $bb58
        var $242=$228; //@line 837 "binascii.c"
        var $243=$242+20; //@line 837 "binascii.c"
        var $244=$243; //@line 837 "binascii.c"
        var $245=$out_len; //@line 837 "binascii.c"
        var $246=$244+$245; //@line 837 "binascii.c"
        $out_data=$246; //@line 837 "binascii.c"
        var $247=$out_len; //@line 837 "binascii.c"
        var $248=($247) - 1; //@line 837 "binascii.c"
        $out_len_left=$248; //@line 837 "binascii.c"
        var $249=$out_len; //@line 837 "binascii.c"
        var $250=($249) * 2; //@line 837 "binascii.c"
        $out_len=$250; //@line 837 "binascii.c"
        __label__ = 59; break; //@line 837 "binascii.c"
      case 59: // $bb59
        var $251=$out_data; //@line 837 "binascii.c"
        HEAP[$251]=-112; //@line 837 "binascii.c"
        var $252=$out_data; //@line 837 "binascii.c"
        var $253=$252+1; //@line 837 "binascii.c"
        $out_data=$253; //@line 837 "binascii.c"
        __label__ = 80; break; //@line 837 "binascii.c"
      case 60: // $bb60
        var $254=$out_data; //@line 840 "binascii.c"
        var $255=$254+-1; //@line 840 "binascii.c"
        var $256=HEAP[$255]; //@line 840 "binascii.c"
        $in_byte=$256; //@line 840 "binascii.c"
        __label__ = 70; break; //@line 840 "binascii.c"
      case 61: // $bb61
        var $257=$out_len_left; //@line 842 "binascii.c"
        var $258=($257) - 1; //@line 842 "binascii.c"
        $out_len_left=$258; //@line 842 "binascii.c"
        var $259=$out_len_left; //@line 842 "binascii.c"
        var $260=($259) < 0; //@line 842 "binascii.c"
        if ($260) { __label__ = 62; break; } else { __label__ = 69; break; } //@line 842 "binascii.c"
      case 62: // $bb62
        var $261=$out_len; //@line 842 "binascii.c"
        var $262=($261) > 1073741823; //@line 842 "binascii.c"
        if ($262) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 842 "binascii.c"
      case 63: // $bb63
        var $263=_PyErr_NoMemory(); //@line 842 "binascii.c"
        $0=$263; //@line 842 "binascii.c"
        __label__ = 86; break; //@line 842 "binascii.c"
      case 64: // $bb64
        var $264=$out_len; //@line 842 "binascii.c"
        var $265=($264) * 2; //@line 842 "binascii.c"
        var $266=__PyString_Resize($rv, $265); //@line 842 "binascii.c"
        var $267=($266) < 0; //@line 842 "binascii.c"
        var $268=HEAP[$rv]; //@line 842 "binascii.c"
        if ($267) { __label__ = 65; break; } else { __label__ = 68; break; } //@line 842 "binascii.c"
      case 65: // $bb65
        var $269=$268; //@line 842 "binascii.c"
        var $270=HEAP[$269]; //@line 842 "binascii.c"
        var $271=($270) - 1; //@line 842 "binascii.c"
        var $272=$268; //@line 842 "binascii.c"
        HEAP[$272]=$271; //@line 842 "binascii.c"
        var $273=$268; //@line 842 "binascii.c"
        var $274=HEAP[$273]; //@line 842 "binascii.c"
        var $275=($274)==0; //@line 842 "binascii.c"
        if ($275) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 842 "binascii.c"
      case 66: // $bb66
        var $276=HEAP[$rv]; //@line 842 "binascii.c"
        var $277=$276+4; //@line 842 "binascii.c"
        var $278=HEAP[$277]; //@line 842 "binascii.c"
        var $279=$278+24; //@line 842 "binascii.c"
        var $280=HEAP[$279]; //@line 842 "binascii.c"
        var $281=HEAP[$rv]; //@line 842 "binascii.c"
        FUNCTION_TABLE[$280]($281); //@line 842 "binascii.c"
        __label__ = 67; break; //@line 842 "binascii.c"
      case 67: // $bb67
        _PyBuffer_Release($pin); //@line 842 "binascii.c"
        $0=0; //@line 842 "binascii.c"
        __label__ = 86; break; //@line 842 "binascii.c"
      case 68: // $bb68
        var $282=$268; //@line 842 "binascii.c"
        var $283=$282+20; //@line 842 "binascii.c"
        var $284=$283; //@line 842 "binascii.c"
        var $285=$out_len; //@line 842 "binascii.c"
        var $286=$284+$285; //@line 842 "binascii.c"
        $out_data=$286; //@line 842 "binascii.c"
        var $287=$out_len; //@line 842 "binascii.c"
        var $288=($287) - 1; //@line 842 "binascii.c"
        $out_len_left=$288; //@line 842 "binascii.c"
        var $289=$out_len; //@line 842 "binascii.c"
        var $290=($289) * 2; //@line 842 "binascii.c"
        $out_len=$290; //@line 842 "binascii.c"
        __label__ = 69; break; //@line 842 "binascii.c"
      case 69: // $bb69
        var $291=$out_data; //@line 842 "binascii.c"
        var $292=$in_byte; //@line 842 "binascii.c"
        HEAP[$291]=$292; //@line 842 "binascii.c"
        var $293=$out_data; //@line 842 "binascii.c"
        var $294=$293+1; //@line 842 "binascii.c"
        $out_data=$294; //@line 842 "binascii.c"
        __label__ = 70; break; //@line 842 "binascii.c"
      case 70: // $bb70
        var $295=$in_repeat; //@line 841 "binascii.c"
        var $296=($295) - 1; //@line 841 "binascii.c"
        $in_repeat=$296; //@line 841 "binascii.c"
        var $297=($296)!=0; //@line 841 "binascii.c"
        if ($297) { __label__ = 61; break; } else { __label__ = 80; break; } //@line 841 "binascii.c"
      case 71: // $bb72
        var $298=$out_len_left; //@line 846 "binascii.c"
        var $299=($298) - 1; //@line 846 "binascii.c"
        $out_len_left=$299; //@line 846 "binascii.c"
        var $300=$out_len_left; //@line 846 "binascii.c"
        var $301=($300) < 0; //@line 846 "binascii.c"
        if ($301) { __label__ = 72; break; } else { __label__ = 79; break; } //@line 846 "binascii.c"
      case 72: // $bb73
        var $302=$out_len; //@line 846 "binascii.c"
        var $303=($302) > 1073741823; //@line 846 "binascii.c"
        if ($303) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 846 "binascii.c"
      case 73: // $bb74
        var $304=_PyErr_NoMemory(); //@line 846 "binascii.c"
        $0=$304; //@line 846 "binascii.c"
        __label__ = 86; break; //@line 846 "binascii.c"
      case 74: // $bb75
        var $305=$out_len; //@line 846 "binascii.c"
        var $306=($305) * 2; //@line 846 "binascii.c"
        var $307=__PyString_Resize($rv, $306); //@line 846 "binascii.c"
        var $308=($307) < 0; //@line 846 "binascii.c"
        var $309=HEAP[$rv]; //@line 846 "binascii.c"
        if ($308) { __label__ = 75; break; } else { __label__ = 78; break; } //@line 846 "binascii.c"
      case 75: // $bb76
        var $310=$309; //@line 846 "binascii.c"
        var $311=HEAP[$310]; //@line 846 "binascii.c"
        var $312=($311) - 1; //@line 846 "binascii.c"
        var $313=$309; //@line 846 "binascii.c"
        HEAP[$313]=$312; //@line 846 "binascii.c"
        var $314=$309; //@line 846 "binascii.c"
        var $315=HEAP[$314]; //@line 846 "binascii.c"
        var $316=($315)==0; //@line 846 "binascii.c"
        if ($316) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 846 "binascii.c"
      case 76: // $bb77
        var $317=HEAP[$rv]; //@line 846 "binascii.c"
        var $318=$317+4; //@line 846 "binascii.c"
        var $319=HEAP[$318]; //@line 846 "binascii.c"
        var $320=$319+24; //@line 846 "binascii.c"
        var $321=HEAP[$320]; //@line 846 "binascii.c"
        var $322=HEAP[$rv]; //@line 846 "binascii.c"
        FUNCTION_TABLE[$321]($322); //@line 846 "binascii.c"
        __label__ = 77; break; //@line 846 "binascii.c"
      case 77: // $bb78
        _PyBuffer_Release($pin); //@line 846 "binascii.c"
        $0=0; //@line 846 "binascii.c"
        __label__ = 86; break; //@line 846 "binascii.c"
      case 78: // $bb79
        var $323=$309; //@line 846 "binascii.c"
        var $324=$323+20; //@line 846 "binascii.c"
        var $325=$324; //@line 846 "binascii.c"
        var $326=$out_len; //@line 846 "binascii.c"
        var $327=$325+$326; //@line 846 "binascii.c"
        $out_data=$327; //@line 846 "binascii.c"
        var $328=$out_len; //@line 846 "binascii.c"
        var $329=($328) - 1; //@line 846 "binascii.c"
        $out_len_left=$329; //@line 846 "binascii.c"
        var $330=$out_len; //@line 846 "binascii.c"
        var $331=($330) * 2; //@line 846 "binascii.c"
        $out_len=$331; //@line 846 "binascii.c"
        __label__ = 79; break; //@line 846 "binascii.c"
      case 79: // $bb80
        var $332=$out_data; //@line 846 "binascii.c"
        var $333=$in_byte; //@line 846 "binascii.c"
        HEAP[$332]=$333; //@line 846 "binascii.c"
        var $334=$out_data; //@line 846 "binascii.c"
        var $335=$334+1; //@line 846 "binascii.c"
        $out_data=$335; //@line 846 "binascii.c"
        __label__ = 80; break; //@line 846 "binascii.c"
      case 80: // $bb81
        var $336=$in_len; //@line 830 "binascii.c"
        var $337=($336) > 0; //@line 830 "binascii.c"
        if ($337) { __label__ = 41; break; } else { __label__ = 81; break; } //@line 830 "binascii.c"
      case 81: // $bb82
        var $338=$out_data; //@line 849 "binascii.c"
        var $339=($338); //@line 849 "binascii.c"
        var $340=HEAP[$rv]; //@line 849 "binascii.c"
        var $341=$340; //@line 849 "binascii.c"
        var $342=$341+20; //@line 849 "binascii.c"
        var $343=($342); //@line 849 "binascii.c"
        var $344=($339) - ($343); //@line 849 "binascii.c"
        var $345=__PyString_Resize($rv, $344); //@line 849 "binascii.c"
        var $346=($345) < 0; //@line 849 "binascii.c"
        if ($346) { __label__ = 82; break; } else { __label__ = 85; break; } //@line 849 "binascii.c"
      case 82: // $bb83
        var $347=HEAP[$rv]; //@line 852 "binascii.c"
        var $348=$347; //@line 852 "binascii.c"
        var $349=HEAP[$348]; //@line 852 "binascii.c"
        var $350=($349) - 1; //@line 852 "binascii.c"
        var $351=$347; //@line 852 "binascii.c"
        HEAP[$351]=$350; //@line 852 "binascii.c"
        var $352=$347; //@line 852 "binascii.c"
        var $353=HEAP[$352]; //@line 852 "binascii.c"
        var $354=($353)==0; //@line 852 "binascii.c"
        if ($354) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 852 "binascii.c"
      case 83: // $bb84
        var $355=HEAP[$rv]; //@line 852 "binascii.c"
        var $356=$355+4; //@line 852 "binascii.c"
        var $357=HEAP[$356]; //@line 852 "binascii.c"
        var $358=$357+24; //@line 852 "binascii.c"
        var $359=HEAP[$358]; //@line 852 "binascii.c"
        var $360=HEAP[$rv]; //@line 852 "binascii.c"
        FUNCTION_TABLE[$359]($360); //@line 852 "binascii.c"
        __label__ = 84; break; //@line 852 "binascii.c"
      case 84: // $bb85
        HEAP[$rv]=0; //@line 853 "binascii.c"
        __label__ = 85; break; //@line 853 "binascii.c"
      case 85: // $bb86
        _PyBuffer_Release($pin); //@line 855 "binascii.c"
        var $361=HEAP[$rv]; //@line 856 "binascii.c"
        $0=$361; //@line 856 "binascii.c"
        __label__ = 86; break; //@line 856 "binascii.c"
      case 86: // $bb87
        var $362=$0; //@line 754 "binascii.c"
        $retval=$362; //@line 754 "binascii.c"
        var $retval88=$retval; //@line 754 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval88; //@line 754 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_crc_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pin=__stackBase__;
        var $bin_data;
        var $crc=__stackBase__+52;
        var $len;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 870 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str22, allocate([$pin,0,0,0,$crc,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 870 "binascii.c"
        var $3=($2)==0; //@line 870 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 870 "binascii.c"
      case 1: // $bb
        $0=0; //@line 871 "binascii.c"
        __label__ = 5; break; //@line 871 "binascii.c"
      case 2: // $bb1
        var $4=$pin; //@line 872 "binascii.c"
        var $5=HEAP[$4]; //@line 872 "binascii.c"
        $bin_data=$5; //@line 872 "binascii.c"
        var $6=$pin+8; //@line 873 "binascii.c"
        var $7=HEAP[$6]; //@line 873 "binascii.c"
        $len=$7; //@line 873 "binascii.c"
        var $8=$len; //@line 875 "binascii.c"
        var $9=($8) > 0; //@line 875 "binascii.c"
        var $10=$len; //@line 875 "binascii.c"
        var $11=($10) - 1; //@line 875 "binascii.c"
        $len=$11; //@line 875 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 875 "binascii.c"
      case 3: // $bb2
        var $12=HEAP[$crc]; //@line 876 "binascii.c"
        var $13=($12) << 8; //@line 876 "binascii.c"
        var $14=($13) & 65280; //@line 876 "binascii.c"
        var $15=HEAP[$crc]; //@line 876 "binascii.c"
        var $16=((($15))>>>0) >>> 8; //@line 876 "binascii.c"
        var $17=($16) & 255; //@line 876 "binascii.c"
        var $18=$bin_data; //@line 876 "binascii.c"
        var $19=HEAP[$18]; //@line 876 "binascii.c"
        var $20=unSign(($19), 8, 1); //@line 876 "binascii.c"
        var $21=($20) ^ ($17); //@line 876 "binascii.c"
        var $22=_crctab_hqx+$21*2; //@line 876 "binascii.c"
        var $23=HEAP[$22]; //@line 876 "binascii.c"
        var $24=unSign(($23), 16, 1); //@line 876 "binascii.c"
        var $25=($24) ^ ($14); //@line 876 "binascii.c"
        HEAP[$crc]=$25; //@line 876 "binascii.c"
        var $26=$bin_data; //@line 876 "binascii.c"
        var $27=$26+1; //@line 876 "binascii.c"
        $bin_data=$27; //@line 876 "binascii.c"
        var $28=$len; //@line 875 "binascii.c"
        var $29=($28) > 0; //@line 875 "binascii.c"
        var $30=($29); //@line 875 "binascii.c"
        var $31=$len; //@line 875 "binascii.c"
        var $32=($31) - 1; //@line 875 "binascii.c"
        $len=$32; //@line 875 "binascii.c"
        var $toBool=($30)!=0; //@line 875 "binascii.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 875 "binascii.c"
      case 4: // $bb4
        _PyBuffer_Release($pin); //@line 879 "binascii.c"
        var $33=HEAP[$crc]; //@line 880 "binascii.c"
        var $34=__Py_BuildValue_SizeT(__str23, allocate([$33,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 880 "binascii.c"
        $0=$34; //@line 880 "binascii.c"
        __label__ = 5; break; //@line 880 "binascii.c"
      case 5: // $bb5
        var $35=$0; //@line 871 "binascii.c"
        $retval=$35; //@line 871 "binascii.c"
        var $retval6=$retval; //@line 871 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 871 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_crc32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pbin=__stackBase__;
        var $bin_data;
        var $crc=__stackBase__+52;
        var $len;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$crc]=0; //@line 1033 "binascii.c"
        var $1=$args_addr; //@line 1037 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str24, allocate([$pbin,0,0,0,$crc,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1037 "binascii.c"
        var $3=($2)==0; //@line 1037 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "binascii.c"
      case 1: // $bb
        $0=0; //@line 1038 "binascii.c"
        __label__ = 5; break; //@line 1038 "binascii.c"
      case 2: // $bb1
        var $4=$pbin; //@line 1039 "binascii.c"
        var $5=HEAP[$4]; //@line 1039 "binascii.c"
        $bin_data=$5; //@line 1039 "binascii.c"
        var $6=$pbin+8; //@line 1040 "binascii.c"
        var $7=HEAP[$6]; //@line 1040 "binascii.c"
        $len=$7; //@line 1040 "binascii.c"
        var $8=HEAP[$crc]; //@line 1042 "binascii.c"
        var $not=($8) ^ -1; //@line 1042 "binascii.c"
        HEAP[$crc]=$not; //@line 1042 "binascii.c"
        var $9=$len; //@line 1043 "binascii.c"
        var $10=($9) > 0; //@line 1043 "binascii.c"
        var $11=$len; //@line 1043 "binascii.c"
        var $12=($11) - 1; //@line 1043 "binascii.c"
        $len=$12; //@line 1043 "binascii.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1043 "binascii.c"
      case 3: // $bb3
        var $13=$bin_data; //@line 1044 "binascii.c"
        var $14=HEAP[$13]; //@line 1044 "binascii.c"
        var $15=unSign(($14), 8, 1); //@line 1044 "binascii.c"
        var $16=HEAP[$crc]; //@line 1044 "binascii.c"
        var $17=($15) ^ ($16); //@line 1044 "binascii.c"
        var $18=($17) & 255; //@line 1044 "binascii.c"
        var $19=_crc_32_tab+$18*4; //@line 1044 "binascii.c"
        var $20=HEAP[$19]; //@line 1044 "binascii.c"
        var $21=HEAP[$crc]; //@line 1044 "binascii.c"
        var $22=((($21))>>>0) >>> 8; //@line 1044 "binascii.c"
        var $23=($22) ^ ($20); //@line 1044 "binascii.c"
        HEAP[$crc]=$23; //@line 1044 "binascii.c"
        var $24=$bin_data; //@line 1044 "binascii.c"
        var $25=$24+1; //@line 1044 "binascii.c"
        $bin_data=$25; //@line 1044 "binascii.c"
        var $26=$len; //@line 1043 "binascii.c"
        var $27=($26) > 0; //@line 1043 "binascii.c"
        var $28=($27); //@line 1043 "binascii.c"
        var $29=$len; //@line 1043 "binascii.c"
        var $30=($29) - 1; //@line 1043 "binascii.c"
        $len=$30; //@line 1043 "binascii.c"
        var $toBool=($28)!=0; //@line 1043 "binascii.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1043 "binascii.c"
      case 4: // $bb5
        var $31=HEAP[$crc]; //@line 1047 "binascii.c"
        var $not6=($31) ^ -1; //@line 1047 "binascii.c"
        $result=$not6; //@line 1047 "binascii.c"
        _PyBuffer_Release($pbin); //@line 1048 "binascii.c"
        var $32=$result; //@line 1049 "binascii.c"
        var $33=_PyInt_FromLong($32); //@line 1049 "binascii.c"
        $0=$33; //@line 1049 "binascii.c"
        __label__ = 5; break; //@line 1049 "binascii.c"
      case 5: // $bb8
        var $34=$0; //@line 1038 "binascii.c"
        $retval=$34; //@line 1038 "binascii.c"
        var $retval9=$retval; //@line 1038 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1038 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_hexlify($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_145;
        var $iftmp_142;
        var $0;
        var $parg=__stackBase__;
        var $argbuf;
        var $arglen;
        var $retval1;
        var $retbuf;
        var $i;
        var $j;
        var $c;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1064 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str25, allocate([$parg,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 1064 "binascii.c"
        var $3=($2)==0; //@line 1064 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1064 "binascii.c"
      case 1: // $bb
        $0=0; //@line 1065 "binascii.c"
        __label__ = 17; break; //@line 1065 "binascii.c"
      case 2: // $bb2
        var $4=$parg; //@line 1066 "binascii.c"
        var $5=HEAP[$4]; //@line 1066 "binascii.c"
        $argbuf=$5; //@line 1066 "binascii.c"
        var $6=$parg+8; //@line 1067 "binascii.c"
        var $7=HEAP[$6]; //@line 1067 "binascii.c"
        $arglen=$7; //@line 1067 "binascii.c"
        var $8=$arglen; //@line 1069 "binascii.c"
        var $9=($8) < 0; //@line 1069 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1069 "binascii.c"
      case 3: // $bb3
        ___assert_fail(__str26, __str2, 1069, ___PRETTY_FUNCTION___9264); //@line 1069 "binascii.c"
        throw "Reached an unreachable!" //@line 1069 "binascii.c"
      case 4: // $bb4
        var $10=$arglen; //@line 1070 "binascii.c"
        var $11=($10) > 1073741823; //@line 1070 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1070 "binascii.c"
      case 5: // $bb5
        _PyBuffer_Release($parg); //@line 1071 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 1072 "binascii.c"
        $0=$12; //@line 1072 "binascii.c"
        __label__ = 17; break; //@line 1072 "binascii.c"
      case 6: // $bb6
        var $13=$arglen; //@line 1075 "binascii.c"
        var $14=($13) * 2; //@line 1075 "binascii.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 1075 "binascii.c"
        $retval1=$15; //@line 1075 "binascii.c"
        var $16=$retval1; //@line 1076 "binascii.c"
        var $17=($16)==0; //@line 1076 "binascii.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1076 "binascii.c"
      case 7: // $bb7
        _PyBuffer_Release($parg); //@line 1077 "binascii.c"
        $0=0; //@line 1078 "binascii.c"
        __label__ = 17; break; //@line 1078 "binascii.c"
      case 8: // $bb8
        var $18=$retval1; //@line 1080 "binascii.c"
        var $19=$18; //@line 1080 "binascii.c"
        var $20=$19+20; //@line 1080 "binascii.c"
        var $21=$20; //@line 1080 "binascii.c"
        $retbuf=$21; //@line 1080 "binascii.c"
        $j=0; //@line 1083 "binascii.c"
        var $22=$j; //@line 1083 "binascii.c"
        $i=$22; //@line 1083 "binascii.c"
        var $23=$i; //@line 1083 "binascii.c"
        var $24=$arglen; //@line 1083 "binascii.c"
        var $25=($23) < ($24); //@line 1083 "binascii.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1083 "binascii.c"
      case 9: // $bb9
        var $26=$argbuf; //@line 1085 "binascii.c"
        var $27=$i; //@line 1085 "binascii.c"
        var $28=$26+$27; //@line 1085 "binascii.c"
        var $29=HEAP[$28]; //@line 1085 "binascii.c"
        var $30=($29) >> 4; //@line 1085 "binascii.c"
        var $31=($30) & 15; //@line 1085 "binascii.c"
        $c=$31; //@line 1085 "binascii.c"
        var $32=($31) > 9; //@line 1086 "binascii.c"
        var $33=$c; //@line 1086 "binascii.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1086 "binascii.c"
      case 10: // $bb10
        var $34=($33) + 87; //@line 1086 "binascii.c"
        $iftmp_142=$34; //@line 1086 "binascii.c"
        __label__ = 12; break; //@line 1086 "binascii.c"
      case 11: // $bb11
        var $35=($33) + 48; //@line 1086 "binascii.c"
        $iftmp_142=$35; //@line 1086 "binascii.c"
        __label__ = 12; break; //@line 1086 "binascii.c"
      case 12: // $bb12
        var $36=$iftmp_142; //@line 1086 "binascii.c"
        $c=$36; //@line 1086 "binascii.c"
        var $37=$retbuf; //@line 1087 "binascii.c"
        var $38=$j; //@line 1087 "binascii.c"
        var $39=$37+$38; //@line 1087 "binascii.c"
        var $40=$c; //@line 1087 "binascii.c"
        HEAP[$39]=$40; //@line 1087 "binascii.c"
        var $41=$j; //@line 1087 "binascii.c"
        var $42=($41) + 1; //@line 1087 "binascii.c"
        $j=$42; //@line 1087 "binascii.c"
        var $43=$argbuf; //@line 1088 "binascii.c"
        var $44=$i; //@line 1088 "binascii.c"
        var $45=$43+$44; //@line 1088 "binascii.c"
        var $46=HEAP[$45]; //@line 1088 "binascii.c"
        var $47=($46) & 15; //@line 1088 "binascii.c"
        $c=$47; //@line 1088 "binascii.c"
        var $48=($47) > 9; //@line 1089 "binascii.c"
        var $49=$c; //@line 1089 "binascii.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1089 "binascii.c"
      case 13: // $bb13
        var $50=($49) + 87; //@line 1089 "binascii.c"
        $iftmp_145=$50; //@line 1089 "binascii.c"
        __label__ = 15; break; //@line 1089 "binascii.c"
      case 14: // $bb14
        var $51=($49) + 48; //@line 1089 "binascii.c"
        $iftmp_145=$51; //@line 1089 "binascii.c"
        __label__ = 15; break; //@line 1089 "binascii.c"
      case 15: // $bb15
        var $52=$iftmp_145; //@line 1089 "binascii.c"
        $c=$52; //@line 1089 "binascii.c"
        var $53=$retbuf; //@line 1090 "binascii.c"
        var $54=$j; //@line 1090 "binascii.c"
        var $55=$53+$54; //@line 1090 "binascii.c"
        var $56=$c; //@line 1090 "binascii.c"
        HEAP[$55]=$56; //@line 1090 "binascii.c"
        var $57=$j; //@line 1090 "binascii.c"
        var $58=($57) + 1; //@line 1090 "binascii.c"
        $j=$58; //@line 1090 "binascii.c"
        var $59=$i; //@line 1083 "binascii.c"
        var $60=($59) + 1; //@line 1083 "binascii.c"
        $i=$60; //@line 1083 "binascii.c"
        var $61=$i; //@line 1083 "binascii.c"
        var $62=$arglen; //@line 1083 "binascii.c"
        var $63=($61) < ($62); //@line 1083 "binascii.c"
        if ($63) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1083 "binascii.c"
      case 16: // $bb17
        _PyBuffer_Release($parg); //@line 1092 "binascii.c"
        var $64=$retval1; //@line 1093 "binascii.c"
        $0=$64; //@line 1093 "binascii.c"
        __label__ = 17; break; //@line 1093 "binascii.c"
      case 17: // $bb18
        var $65=$0; //@line 1065 "binascii.c"
        $retval=$65; //@line 1065 "binascii.c"
        var $retval19=$retval; //@line 1065 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1065 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _to_int($c) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr;
        var $retval;
        var $0;
        $c_addr=$c;
        var $1=___ctype_b_loc(); //@line 1105 "binascii.c"
        var $2=HEAP[$1]; //@line 1105 "binascii.c"
        var $3=$c_addr; //@line 1105 "binascii.c"
        var $4=$2+2*$3; //@line 1105 "binascii.c"
        var $5=HEAP[$4]; //@line 1105 "binascii.c"
        var $6=($5); //@line 1105 "binascii.c"
        var $7=($6) & 2048; //@line 1105 "binascii.c"
        var $8=($7)!=0; //@line 1105 "binascii.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1105 "binascii.c"
      case 1: // $bb
        var $9=$c_addr; //@line 1106 "binascii.c"
        var $10=($9) - 48; //@line 1106 "binascii.c"
        $0=$10; //@line 1106 "binascii.c"
        __label__ = 7; break; //@line 1106 "binascii.c"
      case 2: // $bb1
        var $11=___ctype_b_loc(); //@line 1108 "binascii.c"
        var $12=HEAP[$11]; //@line 1108 "binascii.c"
        var $13=$c_addr; //@line 1108 "binascii.c"
        var $14=$12+2*$13; //@line 1108 "binascii.c"
        var $15=HEAP[$14]; //@line 1108 "binascii.c"
        var $16=($15); //@line 1108 "binascii.c"
        var $17=($16) & 256; //@line 1108 "binascii.c"
        var $18=($17)!=0; //@line 1108 "binascii.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1108 "binascii.c"
      case 3: // $bb2
        var $19=$c_addr; //@line 1109 "binascii.c"
        var $20=_tolower($19); //@line 1109 "binascii.c"
        $c_addr=$20; //@line 1109 "binascii.c"
        __label__ = 4; break; //@line 1109 "binascii.c"
      case 4: // $bb3
        var $21=$c_addr; //@line 1110 "binascii.c"
        var $22=($21) > 96; //@line 1110 "binascii.c"
        var $23=$c_addr; //@line 1110 "binascii.c"
        var $24=($23) <= 102; //@line 1110 "binascii.c"
        var $or_cond=($22) & ($24);
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1110 "binascii.c"
      case 5: // $bb5
        var $25=$c_addr; //@line 1111 "binascii.c"
        var $26=($25) - 87; //@line 1111 "binascii.c"
        $0=$26; //@line 1111 "binascii.c"
        __label__ = 7; break; //@line 1111 "binascii.c"
      case 6: // $bb6
        $0=-1; //@line 1113 "binascii.c"
        __label__ = 7; break; //@line 1113 "binascii.c"
      case 7: // $bb7
        var $27=$0; //@line 1106 "binascii.c"
        $retval=$27; //@line 1106 "binascii.c"
        var $retval8=$retval; //@line 1106 "binascii.c"
        ;
        return $retval8; //@line 1106 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_unhexlify($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $parg=__stackBase__;
        var $argbuf;
        var $arglen;
        var $retval1;
        var $retbuf;
        var $i;
        var $j;
        var $top;
        var $bot;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1127 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str27, allocate([$parg,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 1127 "binascii.c"
        var $3=($2)==0; //@line 1127 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1127 "binascii.c"
      case 1: // $bb
        $0=0; //@line 1128 "binascii.c"
        __label__ = 17; break; //@line 1128 "binascii.c"
      case 2: // $bb2
        var $4=$parg; //@line 1129 "binascii.c"
        var $5=HEAP[$4]; //@line 1129 "binascii.c"
        $argbuf=$5; //@line 1129 "binascii.c"
        var $6=$parg+8; //@line 1130 "binascii.c"
        var $7=HEAP[$6]; //@line 1130 "binascii.c"
        $arglen=$7; //@line 1130 "binascii.c"
        var $8=$arglen; //@line 1132 "binascii.c"
        var $9=($8) < 0; //@line 1132 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1132 "binascii.c"
      case 3: // $bb3
        ___assert_fail(__str26, __str2, 1132, ___PRETTY_FUNCTION___9339); //@line 1132 "binascii.c"
        throw "Reached an unreachable!" //@line 1132 "binascii.c"
      case 4: // $bb4
        var $10=$arglen; //@line 1138 "binascii.c"
        var $11=($10) & 1; //@line 1138 "binascii.c"
        var $12=((($11)) & 255); //@line 1138 "binascii.c"
        var $toBool=($12)!=0; //@line 1138 "binascii.c"
        if ($toBool) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1138 "binascii.c"
      case 5: // $bb5
        _PyBuffer_Release($parg); //@line 1139 "binascii.c"
        var $13=HEAP[_PyExc_TypeError]; //@line 1140 "binascii.c"
        _PyErr_SetString($13, __str28); //@line 1140 "binascii.c"
        $0=0; //@line 1141 "binascii.c"
        __label__ = 17; break; //@line 1141 "binascii.c"
      case 6: // $bb6
        var $14=$arglen; //@line 1144 "binascii.c"
        var $15=((($14)/2)|0); //@line 1144 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1144 "binascii.c"
        $retval1=$16; //@line 1144 "binascii.c"
        var $17=$retval1; //@line 1145 "binascii.c"
        var $18=($17)==0; //@line 1145 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1145 "binascii.c"
      case 7: // $bb7
        _PyBuffer_Release($parg); //@line 1146 "binascii.c"
        $0=0; //@line 1147 "binascii.c"
        __label__ = 17; break; //@line 1147 "binascii.c"
      case 8: // $bb8
        var $19=$retval1; //@line 1149 "binascii.c"
        var $20=$19; //@line 1149 "binascii.c"
        var $21=$20+20; //@line 1149 "binascii.c"
        var $22=$21; //@line 1149 "binascii.c"
        $retbuf=$22; //@line 1149 "binascii.c"
        $j=0; //@line 1151 "binascii.c"
        var $23=$j; //@line 1151 "binascii.c"
        $i=$23; //@line 1151 "binascii.c"
        __label__ = 13; break; //@line 1151 "binascii.c"
      case 9: // $bb9
        var $24=$argbuf; //@line 1152 "binascii.c"
        var $25=$i; //@line 1152 "binascii.c"
        var $26=$24+$25; //@line 1152 "binascii.c"
        var $27=HEAP[$26]; //@line 1152 "binascii.c"
        var $28=($27); //@line 1152 "binascii.c"
        var $29=_to_int($28); //@line 1152 "binascii.c"
        $top=$29; //@line 1152 "binascii.c"
        var $30=$i; //@line 1153 "binascii.c"
        var $31=($30) + 1; //@line 1153 "binascii.c"
        var $32=$argbuf; //@line 1153 "binascii.c"
        var $33=$32+$31; //@line 1153 "binascii.c"
        var $34=HEAP[$33]; //@line 1153 "binascii.c"
        var $35=($34); //@line 1153 "binascii.c"
        var $36=_to_int($35); //@line 1153 "binascii.c"
        $bot=$36; //@line 1153 "binascii.c"
        var $37=$top; //@line 1154 "binascii.c"
        var $38=($37)==-1; //@line 1154 "binascii.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1154 "binascii.c"
      case 10: // $bb10
        var $39=$bot; //@line 1154 "binascii.c"
        var $40=($39)==-1; //@line 1154 "binascii.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1154 "binascii.c"
      case 11: // $bb11
        var $41=HEAP[_PyExc_TypeError]; //@line 1155 "binascii.c"
        _PyErr_SetString($41, __str29); //@line 1155 "binascii.c"
        _PyBuffer_Release($parg); //@line 1165 "binascii.c"
        var $42=$retval1; //@line 1166 "binascii.c"
        var $43=$42; //@line 1166 "binascii.c"
        var $44=HEAP[$43]; //@line 1166 "binascii.c"
        var $45=($44) - 1; //@line 1166 "binascii.c"
        var $46=$retval1; //@line 1166 "binascii.c"
        var $47=$46; //@line 1166 "binascii.c"
        HEAP[$47]=$45; //@line 1166 "binascii.c"
        var $48=$retval1; //@line 1166 "binascii.c"
        var $49=$48; //@line 1166 "binascii.c"
        var $50=HEAP[$49]; //@line 1166 "binascii.c"
        var $51=($50)==0; //@line 1166 "binascii.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1166 "binascii.c"
      case 12: // $bb12
        var $52=$top; //@line 1159 "binascii.c"
        var $53=((($52)) & 255); //@line 1159 "binascii.c"
        var $54=($53) * 16;
        var $55=$bot; //@line 1159 "binascii.c"
        var $56=((($55)) & 255); //@line 1159 "binascii.c"
        var $57=((($54) + ($56))&255); //@line 1159 "binascii.c"
        var $58=$retbuf; //@line 1159 "binascii.c"
        var $59=$j; //@line 1159 "binascii.c"
        var $60=(($58+$59)&4294967295); //@line 1159 "binascii.c"
        HEAP[$60]=$57; //@line 1159 "binascii.c"
        var $61=$j; //@line 1159 "binascii.c"
        var $62=((($61) + 1)&4294967295); //@line 1159 "binascii.c"
        $j=$62; //@line 1159 "binascii.c"
        var $63=$i; //@line 1151 "binascii.c"
        var $64=($63) + 2; //@line 1151 "binascii.c"
        $i=$64; //@line 1151 "binascii.c"
        __label__ = 13; break; //@line 1151 "binascii.c"
      case 13: // $bb13
        var $65=$i; //@line 1151 "binascii.c"
        var $66=$arglen; //@line 1151 "binascii.c"
        var $67=($65) < ($66); //@line 1151 "binascii.c"
        if ($67) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1151 "binascii.c"
      case 14: // $bb14
        _PyBuffer_Release($parg); //@line 1161 "binascii.c"
        var $68=$retval1; //@line 1162 "binascii.c"
        $0=$68; //@line 1162 "binascii.c"
        __label__ = 17; break; //@line 1162 "binascii.c"
      case 15: // $bb15
        var $69=$retval1; //@line 1166 "binascii.c"
        var $70=$69+4; //@line 1166 "binascii.c"
        var $71=HEAP[$70]; //@line 1166 "binascii.c"
        var $72=$71+24; //@line 1166 "binascii.c"
        var $73=HEAP[$72]; //@line 1166 "binascii.c"
        var $74=$retval1; //@line 1166 "binascii.c"
        FUNCTION_TABLE[$73]($74); //@line 1166 "binascii.c"
        __label__ = 16; break; //@line 1166 "binascii.c"
      case 16: // $bb16
        $0=0; //@line 1167 "binascii.c"
        __label__ = 17; break; //@line 1167 "binascii.c"
      case 17: // $bb17
        var $75=$0; //@line 1128 "binascii.c"
        $retval=$75; //@line 1128 "binascii.c"
        var $retval18=$retval; //@line 1128 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1128 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_qp($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $in;
        var $out;
        var $ch;
        var $pdata=__stackBase__;
        var $data;
        var $odata;
        var $datalen;
        var $rv;
        var $header=__stackBase__+52;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        $datalen=0; //@line 1200 "binascii.c"
        HEAP[$header]=0; //@line 1203 "binascii.c"
        var $1=$args_addr; //@line 1205 "binascii.c"
        var $2=$kwargs_addr; //@line 1205 "binascii.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str30, _kwlist_9405, allocate([$pdata,0,0,0,$header,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1205 "binascii.c"
        var $4=($3)==0; //@line 1205 "binascii.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1205 "binascii.c"
      case 1: // $bb
        $0=0; //@line 1207 "binascii.c"
        __label__ = 39; break; //@line 1207 "binascii.c"
      case 2: // $bb1
        var $5=$pdata; //@line 1208 "binascii.c"
        var $6=HEAP[$5]; //@line 1208 "binascii.c"
        $data=$6; //@line 1208 "binascii.c"
        var $7=$pdata+8; //@line 1209 "binascii.c"
        var $8=HEAP[$7]; //@line 1209 "binascii.c"
        $datalen=$8; //@line 1209 "binascii.c"
        var $9=$datalen; //@line 1215 "binascii.c"
        var $10=_PyMem_Malloc($9); //@line 1215 "binascii.c"
        $odata=$10; //@line 1215 "binascii.c"
        var $11=$odata; //@line 1216 "binascii.c"
        var $12=($11)==0; //@line 1216 "binascii.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1216 "binascii.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 1217 "binascii.c"
        var $13=_PyErr_NoMemory(); //@line 1218 "binascii.c"
        $0=0; //@line 1219 "binascii.c"
        __label__ = 39; break; //@line 1219 "binascii.c"
      case 4: // $bb3
        var $14=$datalen; //@line 1221 "binascii.c"
        var $15=$odata; //@line 1221 "binascii.c"
        _llvm_memset_p0i8_i32($15, 0, $14, 1, 0); //@line 1221 "binascii.c"
        $out=0; //@line 1223 "binascii.c"
        var $16=$out; //@line 1223 "binascii.c"
        $in=$16; //@line 1223 "binascii.c"
        __label__ = 35; break; //@line 1223 "binascii.c"
      case 5: // $bb4
        var $17=$data; //@line 1225 "binascii.c"
        var $18=$in; //@line 1225 "binascii.c"
        var $19=$17+$18; //@line 1225 "binascii.c"
        var $20=HEAP[$19]; //@line 1225 "binascii.c"
        var $21=($20)==61; //@line 1225 "binascii.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 31; break; } //@line 1225 "binascii.c"
      case 6: // $bb5
        var $22=$in; //@line 1226 "binascii.c"
        var $23=($22) + 1; //@line 1226 "binascii.c"
        $in=$23; //@line 1226 "binascii.c"
        var $24=$in; //@line 1227 "binascii.c"
        var $25=$datalen; //@line 1227 "binascii.c"
        var $26=($24) >= ($25); //@line 1227 "binascii.c"
        if ($26) { __label__ = 36; break; } else { __label__ = 7; break; } //@line 1227 "binascii.c"
      case 7: // $bb6
        var $27=$data; //@line 1229 "binascii.c"
        var $28=$in; //@line 1229 "binascii.c"
        var $29=$27+$28; //@line 1229 "binascii.c"
        var $30=HEAP[$29]; //@line 1229 "binascii.c"
        var $31=($30)==10; //@line 1229 "binascii.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1229 "binascii.c"
      case 8: // $bb7
        var $32=$data; //@line 1229 "binascii.c"
        var $33=$in; //@line 1229 "binascii.c"
        var $34=$32+$33; //@line 1229 "binascii.c"
        var $35=HEAP[$34]; //@line 1229 "binascii.c"
        var $36=($35)==13; //@line 1229 "binascii.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 1229 "binascii.c"
      case 9: // $bb8
        var $37=$data; //@line 1230 "binascii.c"
        var $38=$in; //@line 1230 "binascii.c"
        var $39=$37+$38; //@line 1230 "binascii.c"
        var $40=HEAP[$39]; //@line 1230 "binascii.c"
        var $41=($40)!=10; //@line 1230 "binascii.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 1230 "binascii.c"
      case 10: // $bb10
        var $42=$in; //@line 1231 "binascii.c"
        var $43=($42) + 1; //@line 1231 "binascii.c"
        $in=$43; //@line 1231 "binascii.c"
        __label__ = 11; break; //@line 1231 "binascii.c"
      case 11: // $bb11
        var $44=$in; //@line 1231 "binascii.c"
        var $45=$datalen; //@line 1231 "binascii.c"
        var $46=($44) >= ($45); //@line 1231 "binascii.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1231 "binascii.c"
      case 12: // $bb12
        var $47=$data; //@line 1231 "binascii.c"
        var $48=$in; //@line 1231 "binascii.c"
        var $49=$47+$48; //@line 1231 "binascii.c"
        var $50=HEAP[$49]; //@line 1231 "binascii.c"
        var $51=($50)!=10; //@line 1231 "binascii.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1231 "binascii.c"
      case 13: // $bb13
        var $52=$in; //@line 1233 "binascii.c"
        var $53=$datalen; //@line 1233 "binascii.c"
        var $54=($52) < ($53); //@line 1233 "binascii.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 35; break; } //@line 1233 "binascii.c"
      case 14: // $bb14
        var $55=$in; //@line 1233 "binascii.c"
        var $56=($55) + 1; //@line 1233 "binascii.c"
        $in=$56; //@line 1233 "binascii.c"
        __label__ = 35; break; //@line 1233 "binascii.c"
      case 15: // $bb16
        var $57=$data; //@line 1235 "binascii.c"
        var $58=$in; //@line 1235 "binascii.c"
        var $59=$57+$58; //@line 1235 "binascii.c"
        var $60=HEAP[$59]; //@line 1235 "binascii.c"
        var $61=($60)==61; //@line 1235 "binascii.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1235 "binascii.c"
      case 16: // $bb17
        var $62=$odata; //@line 1237 "binascii.c"
        var $63=$out; //@line 1237 "binascii.c"
        var $64=$62+$63; //@line 1237 "binascii.c"
        HEAP[$64]=61; //@line 1237 "binascii.c"
        var $65=$out; //@line 1237 "binascii.c"
        var $66=($65) + 1; //@line 1237 "binascii.c"
        $out=$66; //@line 1237 "binascii.c"
        var $67=$in; //@line 1238 "binascii.c"
        var $68=($67) + 1; //@line 1238 "binascii.c"
        $in=$68; //@line 1238 "binascii.c"
        __label__ = 35; break; //@line 1238 "binascii.c"
      case 17: // $bb18
        var $69=$data; //@line 1240 "binascii.c"
        var $70=$in; //@line 1240 "binascii.c"
        var $71=$69+$70; //@line 1240 "binascii.c"
        var $72=HEAP[$71]; //@line 1240 "binascii.c"
        var $73=($72) <= 64; //@line 1240 "binascii.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1240 "binascii.c"
      case 18: // $bb19
        var $74=$data; //@line 1240 "binascii.c"
        var $75=$in; //@line 1240 "binascii.c"
        var $76=$74+$75; //@line 1240 "binascii.c"
        var $77=HEAP[$76]; //@line 1240 "binascii.c"
        var $78=($77) <= 70; //@line 1240 "binascii.c"
        if ($78) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 1240 "binascii.c"
      case 19: // $bb20
        var $79=$data; //@line 1240 "binascii.c"
        var $80=$in; //@line 1240 "binascii.c"
        var $81=$79+$80; //@line 1240 "binascii.c"
        var $82=HEAP[$81]; //@line 1240 "binascii.c"
        var $83=($82) <= 96; //@line 1240 "binascii.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1240 "binascii.c"
      case 20: // $bb21
        var $84=$data; //@line 1240 "binascii.c"
        var $85=$in; //@line 1240 "binascii.c"
        var $86=$84+$85; //@line 1240 "binascii.c"
        var $87=HEAP[$86]; //@line 1240 "binascii.c"
        var $88=($87) <= 102; //@line 1240 "binascii.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1240 "binascii.c"
      case 21: // $bb22
        var $89=$data; //@line 1240 "binascii.c"
        var $90=$in; //@line 1240 "binascii.c"
        var $91=$89+$90; //@line 1240 "binascii.c"
        var $92=HEAP[$91]; //@line 1240 "binascii.c"
        var $93=($92) <= 47; //@line 1240 "binascii.c"
        if ($93) { __label__ = 30; break; } else { __label__ = 22; break; } //@line 1240 "binascii.c"
      case 22: // $bb23
        var $94=$data; //@line 1240 "binascii.c"
        var $95=$in; //@line 1240 "binascii.c"
        var $96=$94+$95; //@line 1240 "binascii.c"
        var $97=HEAP[$96]; //@line 1240 "binascii.c"
        var $98=($97) <= 57; //@line 1240 "binascii.c"
        if ($98) { __label__ = 23; break; } else { __label__ = 30; break; } //@line 1240 "binascii.c"
      case 23: // $bb24
        var $99=$in; //@line 1240 "binascii.c"
        var $100=($99) + 1; //@line 1240 "binascii.c"
        var $101=$data; //@line 1240 "binascii.c"
        var $102=$101+$100; //@line 1240 "binascii.c"
        var $103=HEAP[$102]; //@line 1240 "binascii.c"
        var $104=($103) <= 64; //@line 1240 "binascii.c"
        if ($104) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1240 "binascii.c"
      case 24: // $bb25
        var $105=$in; //@line 1240 "binascii.c"
        var $106=($105) + 1; //@line 1240 "binascii.c"
        var $107=$data; //@line 1240 "binascii.c"
        var $108=$107+$106; //@line 1240 "binascii.c"
        var $109=HEAP[$108]; //@line 1240 "binascii.c"
        var $110=($109) <= 70; //@line 1240 "binascii.c"
        if ($110) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 1240 "binascii.c"
      case 25: // $bb26
        var $111=$in; //@line 1240 "binascii.c"
        var $112=($111) + 1; //@line 1240 "binascii.c"
        var $113=$data; //@line 1240 "binascii.c"
        var $114=$113+$112; //@line 1240 "binascii.c"
        var $115=HEAP[$114]; //@line 1240 "binascii.c"
        var $116=($115) <= 96; //@line 1240 "binascii.c"
        if ($116) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1240 "binascii.c"
      case 26: // $bb27
        var $117=$in; //@line 1240 "binascii.c"
        var $118=($117) + 1; //@line 1240 "binascii.c"
        var $119=$data; //@line 1240 "binascii.c"
        var $120=$119+$118; //@line 1240 "binascii.c"
        var $121=HEAP[$120]; //@line 1240 "binascii.c"
        var $122=($121) <= 102; //@line 1240 "binascii.c"
        if ($122) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 1240 "binascii.c"
      case 27: // $bb28
        var $123=$in; //@line 1240 "binascii.c"
        var $124=($123) + 1; //@line 1240 "binascii.c"
        var $125=$data; //@line 1240 "binascii.c"
        var $126=$125+$124; //@line 1240 "binascii.c"
        var $127=HEAP[$126]; //@line 1240 "binascii.c"
        var $128=($127) <= 47; //@line 1240 "binascii.c"
        if ($128) { __label__ = 30; break; } else { __label__ = 28; break; } //@line 1240 "binascii.c"
      case 28: // $bb29
        var $129=$in; //@line 1240 "binascii.c"
        var $130=($129) + 1; //@line 1240 "binascii.c"
        var $131=$data; //@line 1240 "binascii.c"
        var $132=$131+$130; //@line 1240 "binascii.c"
        var $133=HEAP[$132]; //@line 1240 "binascii.c"
        var $134=($133) <= 57; //@line 1240 "binascii.c"
        if ($134) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1240 "binascii.c"
      case 29: // $bb30
        var $135=$data; //@line 1247 "binascii.c"
        var $136=$in; //@line 1247 "binascii.c"
        var $137=$135+$136; //@line 1247 "binascii.c"
        var $138=HEAP[$137]; //@line 1247 "binascii.c"
        var $139=($138); //@line 1247 "binascii.c"
        var $140=_table_hex+$139*4; //@line 1247 "binascii.c"
        var $141=HEAP[$140]; //@line 1247 "binascii.c"
        var $142=($141) << 4; //@line 1247 "binascii.c"
        var $143=((($142)) & 255); //@line 1247 "binascii.c"
        $ch=$143; //@line 1247 "binascii.c"
        var $144=$in; //@line 1248 "binascii.c"
        var $145=($144) + 1; //@line 1248 "binascii.c"
        $in=$145; //@line 1248 "binascii.c"
        var $146=$data; //@line 1249 "binascii.c"
        var $147=$in; //@line 1249 "binascii.c"
        var $148=$146+$147; //@line 1249 "binascii.c"
        var $149=HEAP[$148]; //@line 1249 "binascii.c"
        var $150=($149); //@line 1249 "binascii.c"
        var $151=_table_hex+$150*4; //@line 1249 "binascii.c"
        var $152=HEAP[$151]; //@line 1249 "binascii.c"
        var $153=((($152)) & 255); //@line 1249 "binascii.c"
        var $154=$ch; //@line 1249 "binascii.c"
        var $155=($153) | ($154); //@line 1249 "binascii.c"
        $ch=$155; //@line 1249 "binascii.c"
        var $156=$in; //@line 1250 "binascii.c"
        var $157=($156) + 1; //@line 1250 "binascii.c"
        $in=$157; //@line 1250 "binascii.c"
        var $158=$ch; //@line 1251 "binascii.c"
        var $159=$odata; //@line 1251 "binascii.c"
        var $160=$out; //@line 1251 "binascii.c"
        var $161=$159+$160; //@line 1251 "binascii.c"
        HEAP[$161]=$158; //@line 1251 "binascii.c"
        var $162=$out; //@line 1251 "binascii.c"
        var $163=($162) + 1; //@line 1251 "binascii.c"
        $out=$163; //@line 1251 "binascii.c"
        __label__ = 35; break; //@line 1251 "binascii.c"
      case 30: // $bb31
        var $164=$odata; //@line 1254 "binascii.c"
        var $165=$out; //@line 1254 "binascii.c"
        var $166=$164+$165; //@line 1254 "binascii.c"
        HEAP[$166]=61; //@line 1254 "binascii.c"
        var $167=$out; //@line 1254 "binascii.c"
        var $168=($167) + 1; //@line 1254 "binascii.c"
        $out=$168; //@line 1254 "binascii.c"
        __label__ = 35; break; //@line 1254 "binascii.c"
      case 31: // $bb33
        var $169=HEAP[$header]; //@line 1257 "binascii.c"
        var $170=($169)==0; //@line 1257 "binascii.c"
        if ($170) { __label__ = 34; break; } else { __label__ = 32; break; } //@line 1257 "binascii.c"
      case 32: // $bb34
        var $171=$data; //@line 1257 "binascii.c"
        var $172=$in; //@line 1257 "binascii.c"
        var $173=$171+$172; //@line 1257 "binascii.c"
        var $174=HEAP[$173]; //@line 1257 "binascii.c"
        var $175=($174)!=95; //@line 1257 "binascii.c"
        if ($175) { __label__ = 34; break; } else { __label__ = 33; break; } //@line 1257 "binascii.c"
      case 33: // $bb35
        var $176=$odata; //@line 1258 "binascii.c"
        var $177=$out; //@line 1258 "binascii.c"
        var $178=$176+$177; //@line 1258 "binascii.c"
        HEAP[$178]=32; //@line 1258 "binascii.c"
        var $179=$out; //@line 1258 "binascii.c"
        var $180=($179) + 1; //@line 1258 "binascii.c"
        $out=$180; //@line 1258 "binascii.c"
        var $181=$in; //@line 1259 "binascii.c"
        var $182=($181) + 1; //@line 1259 "binascii.c"
        $in=$182; //@line 1259 "binascii.c"
        __label__ = 35; break; //@line 1259 "binascii.c"
      case 34: // $bb36
        var $183=$data; //@line 1262 "binascii.c"
        var $184=$in; //@line 1262 "binascii.c"
        var $185=$183+$184; //@line 1262 "binascii.c"
        var $186=HEAP[$185]; //@line 1262 "binascii.c"
        var $187=$odata; //@line 1262 "binascii.c"
        var $188=$out; //@line 1262 "binascii.c"
        var $189=$187+$188; //@line 1262 "binascii.c"
        HEAP[$189]=$186; //@line 1262 "binascii.c"
        var $190=$in; //@line 1263 "binascii.c"
        var $191=($190) + 1; //@line 1263 "binascii.c"
        $in=$191; //@line 1263 "binascii.c"
        var $192=$out; //@line 1264 "binascii.c"
        var $193=($192) + 1; //@line 1264 "binascii.c"
        $out=$193; //@line 1264 "binascii.c"
        __label__ = 35; break; //@line 1264 "binascii.c"
      case 35: // $bb37
        var $194=$in; //@line 1224 "binascii.c"
        var $195=$datalen; //@line 1224 "binascii.c"
        var $196=($194) < ($195); //@line 1224 "binascii.c"
        if ($196) { __label__ = 5; break; } else { __label__ = 36; break; } //@line 1224 "binascii.c"
      case 36: // $bb38
        var $197=$odata; //@line 1267 "binascii.c"
        var $198=$out; //@line 1267 "binascii.c"
        var $199=_PyString_FromStringAndSize($197, $198); //@line 1267 "binascii.c"
        $rv=$199; //@line 1267 "binascii.c"
        var $200=($199)==0; //@line 1267 "binascii.c"
        _PyBuffer_Release($pdata); //@line 1268 "binascii.c"
        var $201=$odata; //@line 1269 "binascii.c"
        _PyMem_Free($201); //@line 1269 "binascii.c"
        if ($200) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1267 "binascii.c"
      case 37: // $bb39
        $0=0; //@line 1270 "binascii.c"
        __label__ = 39; break; //@line 1270 "binascii.c"
      case 38: // $bb40
        var $202=$rv; //@line 1274 "binascii.c"
        $0=$202; //@line 1274 "binascii.c"
        __label__ = 39; break; //@line 1274 "binascii.c"
      case 39: // $bb41
        var $203=$0; //@line 1207 "binascii.c"
        $retval=$203; //@line 1207 "binascii.c"
        var $retval42=$retval; //@line 1207 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval42; //@line 1207 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _to_hex($ch, $s) {
    ;
    var __label__;
  
    var $ch_addr;
    var $s_addr;
    var $uvalue;
    $ch_addr=$ch;
    $s_addr=$s;
    var $0=$ch_addr; //@line 1280 "binascii.c"
    var $1=($0); //@line 1280 "binascii.c"
    $uvalue=$1; //@line 1280 "binascii.c"
    var $2=$uvalue; //@line 1282 "binascii.c"
    var $3=($2) & 15; //@line 1282 "binascii.c"
    var $4=__str33+$3; //@line 1282 "binascii.c"
    var $5=HEAP[$4]; //@line 1282 "binascii.c"
    var $6=$s_addr; //@line 1282 "binascii.c"
    var $7=$6+1; //@line 1282 "binascii.c"
    HEAP[$7]=$5; //@line 1282 "binascii.c"
    var $8=$uvalue; //@line 1283 "binascii.c"
    var $9=Math.floor(($8)/16); //@line 1283 "binascii.c"
    $uvalue=$9; //@line 1283 "binascii.c"
    var $10=$uvalue; //@line 1284 "binascii.c"
    var $11=($10) & 15; //@line 1284 "binascii.c"
    var $12=__str33+$11; //@line 1284 "binascii.c"
    var $13=HEAP[$12]; //@line 1284 "binascii.c"
    var $14=$s_addr; //@line 1284 "binascii.c"
    var $15=$14; //@line 1284 "binascii.c"
    HEAP[$15]=$13; //@line 1284 "binascii.c"
    ;
    return;
  }
  

  function _binascii_b2a_qp($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; _memset(__stackBase__, 0, 64);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $in;
        var $out;
        var $pdata=__stackBase__;
        var $data;
        var $odata;
        var $datalen;
        var $odatalen;
        var $rv;
        var $linelen;
        var $istext=__stackBase__+52;
        var $quotetabs=__stackBase__+56;
        var $header=__stackBase__+60;
        var $ch;
        var $crlf;
        var $p;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        $datalen=0; //@line 1305 "binascii.c"
        $odatalen=0; //@line 1305 "binascii.c"
        $linelen=0; //@line 1307 "binascii.c"
        HEAP[$istext]=1; //@line 1310 "binascii.c"
        HEAP[$quotetabs]=0; //@line 1311 "binascii.c"
        HEAP[$header]=0; //@line 1312 "binascii.c"
        $crlf=0; //@line 1314 "binascii.c"
        var $1=$args_addr; //@line 1317 "binascii.c"
        var $2=$kwargs_addr; //@line 1317 "binascii.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, __str34, _kwlist_9526, allocate([$pdata,0,0,0,$quotetabs,0,0,0,$istext,0,0,0,$header,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1317 "binascii.c"
        var $4=($3)==0; //@line 1317 "binascii.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1317 "binascii.c"
      case 1: // $bb
        $0=0; //@line 1319 "binascii.c"
        __label__ = 116; break; //@line 1319 "binascii.c"
      case 2: // $bb1
        var $5=$pdata; //@line 1320 "binascii.c"
        var $6=HEAP[$5]; //@line 1320 "binascii.c"
        $data=$6; //@line 1320 "binascii.c"
        var $7=$pdata+8; //@line 1321 "binascii.c"
        var $8=HEAP[$7]; //@line 1321 "binascii.c"
        $datalen=$8; //@line 1321 "binascii.c"
        var $9=$datalen; //@line 1327 "binascii.c"
        var $10=$data; //@line 1327 "binascii.c"
        var $11=_memchr($10, 10, $9); //@line 1327 "binascii.c"
        $p=$11; //@line 1327 "binascii.c"
        var $12=$p; //@line 1328 "binascii.c"
        var $13=($12)!=0; //@line 1328 "binascii.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 3: // $bb2
        var $14=$p; //@line 1328 "binascii.c"
        var $15=$data; //@line 1328 "binascii.c"
        var $16=($14) > ($15); //@line 1328 "binascii.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 4: // $bb3
        var $17=$p; //@line 1328 "binascii.c"
        var $18=$17+-1; //@line 1328 "binascii.c"
        var $19=HEAP[$18]; //@line 1328 "binascii.c"
        var $20=($19)==13; //@line 1328 "binascii.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 5: // $bb4
        $crlf=1; //@line 1329 "binascii.c"
        __label__ = 6; break; //@line 1329 "binascii.c"
      case 6: // $bb5
        $in=0; //@line 1332 "binascii.c"
        var $21=$in; //@line 1333 "binascii.c"
        var $22=$datalen; //@line 1333 "binascii.c"
        var $23=($21) < ($22); //@line 1333 "binascii.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 58; break; } //@line 1333 "binascii.c"
      case 7: // $bb6
        var $24=$data; //@line 1334 "binascii.c"
        var $25=$in; //@line 1334 "binascii.c"
        var $26=$24+$25; //@line 1334 "binascii.c"
        var $27=HEAP[$26]; //@line 1334 "binascii.c"
        var $28=($27) > 126; //@line 1334 "binascii.c"
        if ($28) { __label__ = 29; break; } else { __label__ = 8; break; } //@line 1334 "binascii.c"
      case 8: // $bb7
        var $29=$data; //@line 1334 "binascii.c"
        var $30=$in; //@line 1334 "binascii.c"
        var $31=$29+$30; //@line 1334 "binascii.c"
        var $32=HEAP[$31]; //@line 1334 "binascii.c"
        var $33=($32)==61; //@line 1334 "binascii.c"
        if ($33) { __label__ = 29; break; } else { __label__ = 9; break; } //@line 1334 "binascii.c"
      case 9: // $bb8
        var $34=HEAP[$header]; //@line 1334 "binascii.c"
        var $35=($34)==0; //@line 1334 "binascii.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1334 "binascii.c"
      case 10: // $bb9
        var $36=$data; //@line 1334 "binascii.c"
        var $37=$in; //@line 1334 "binascii.c"
        var $38=$36+$37; //@line 1334 "binascii.c"
        var $39=HEAP[$38]; //@line 1334 "binascii.c"
        var $40=($39)==95; //@line 1334 "binascii.c"
        if ($40) { __label__ = 29; break; } else { __label__ = 11; break; } //@line 1334 "binascii.c"
      case 11: // $bb10
        var $41=$data; //@line 1334 "binascii.c"
        var $42=$in; //@line 1334 "binascii.c"
        var $43=$41+$42; //@line 1334 "binascii.c"
        var $44=HEAP[$43]; //@line 1334 "binascii.c"
        var $45=($44)!=46; //@line 1334 "binascii.c"
        if ($45) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 1334 "binascii.c"
      case 12: // $bb11
        var $46=$linelen; //@line 1334 "binascii.c"
        var $47=($46)!=0; //@line 1334 "binascii.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 1334 "binascii.c"
      case 13: // $bb12
        var $48=$in; //@line 1334 "binascii.c"
        var $49=($48) + 1; //@line 1334 "binascii.c"
        var $50=$data; //@line 1334 "binascii.c"
        var $51=$50+$49; //@line 1334 "binascii.c"
        var $52=HEAP[$51]; //@line 1334 "binascii.c"
        var $53=($52)==10; //@line 1334 "binascii.c"
        if ($53) { __label__ = 29; break; } else { __label__ = 14; break; } //@line 1334 "binascii.c"
      case 14: // $bb13
        var $54=$in; //@line 1334 "binascii.c"
        var $55=($54) + 1; //@line 1334 "binascii.c"
        var $56=$data; //@line 1334 "binascii.c"
        var $57=$56+$55; //@line 1334 "binascii.c"
        var $58=HEAP[$57]; //@line 1334 "binascii.c"
        var $59=($58)==13; //@line 1334 "binascii.c"
        if ($59) { __label__ = 29; break; } else { __label__ = 15; break; } //@line 1334 "binascii.c"
      case 15: // $bb14
        var $60=$in; //@line 1334 "binascii.c"
        var $61=($60) + 1; //@line 1334 "binascii.c"
        var $62=$data; //@line 1334 "binascii.c"
        var $63=$62+$61; //@line 1334 "binascii.c"
        var $64=HEAP[$63]; //@line 1334 "binascii.c"
        var $65=($64)==0; //@line 1334 "binascii.c"
        if ($65) { __label__ = 29; break; } else { __label__ = 16; break; } //@line 1334 "binascii.c"
      case 16: // $bb15
        var $66=HEAP[$istext]; //@line 1334 "binascii.c"
        var $67=($66)!=0; //@line 1334 "binascii.c"
        if ($67) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1334 "binascii.c"
      case 17: // $bb16
        var $68=$data; //@line 1334 "binascii.c"
        var $69=$in; //@line 1334 "binascii.c"
        var $70=$68+$69; //@line 1334 "binascii.c"
        var $71=HEAP[$70]; //@line 1334 "binascii.c"
        var $72=($71)==13; //@line 1334 "binascii.c"
        if ($72) { __label__ = 29; break; } else { __label__ = 18; break; } //@line 1334 "binascii.c"
      case 18: // $bb17
        var $73=$data; //@line 1334 "binascii.c"
        var $74=$in; //@line 1334 "binascii.c"
        var $75=$73+$74; //@line 1334 "binascii.c"
        var $76=HEAP[$75]; //@line 1334 "binascii.c"
        var $77=($76)==10; //@line 1334 "binascii.c"
        if ($77) { __label__ = 29; break; } else { __label__ = 19; break; } //@line 1334 "binascii.c"
      case 19: // $bb18
        var $78=$data; //@line 1334 "binascii.c"
        var $79=$in; //@line 1334 "binascii.c"
        var $80=$78+$79; //@line 1334 "binascii.c"
        var $81=HEAP[$80]; //@line 1334 "binascii.c"
        var $82=($81)==9; //@line 1334 "binascii.c"
        if ($82) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1334 "binascii.c"
      case 20: // $bb19
        var $83=$data; //@line 1334 "binascii.c"
        var $84=$in; //@line 1334 "binascii.c"
        var $85=$83+$84; //@line 1334 "binascii.c"
        var $86=HEAP[$85]; //@line 1334 "binascii.c"
        var $87=($86)==32; //@line 1334 "binascii.c"
        if ($87) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1334 "binascii.c"
      case 21: // $bb20
        var $88=$in; //@line 1334 "binascii.c"
        var $89=($88) + 1; //@line 1334 "binascii.c"
        var $90=$datalen; //@line 1334 "binascii.c"
        var $91=($89)==($90); //@line 1334 "binascii.c"
        if ($91) { __label__ = 29; break; } else { __label__ = 22; break; } //@line 1334 "binascii.c"
      case 22: // $bb21
        var $92=$data; //@line 1334 "binascii.c"
        var $93=$in; //@line 1334 "binascii.c"
        var $94=$92+$93; //@line 1334 "binascii.c"
        var $95=HEAP[$94]; //@line 1334 "binascii.c"
        var $96=($95) > 32; //@line 1334 "binascii.c"
        if ($96) { __label__ = 35; break; } else { __label__ = 23; break; } //@line 1334 "binascii.c"
      case 23: // $bb22
        var $97=$data; //@line 1334 "binascii.c"
        var $98=$in; //@line 1334 "binascii.c"
        var $99=$97+$98; //@line 1334 "binascii.c"
        var $100=HEAP[$99]; //@line 1334 "binascii.c"
        var $101=($100)==13; //@line 1334 "binascii.c"
        if ($101) { __label__ = 35; break; } else { __label__ = 24; break; } //@line 1334 "binascii.c"
      case 24: // $bb23
        var $102=$data; //@line 1334 "binascii.c"
        var $103=$in; //@line 1334 "binascii.c"
        var $104=$102+$103; //@line 1334 "binascii.c"
        var $105=HEAP[$104]; //@line 1334 "binascii.c"
        var $106=($105)==10; //@line 1334 "binascii.c"
        if ($106) { __label__ = 35; break; } else { __label__ = 25; break; } //@line 1334 "binascii.c"
      case 25: // $bb24
        var $107=HEAP[$quotetabs]; //@line 1334 "binascii.c"
        var $108=($107)!=0; //@line 1334 "binascii.c"
        if ($108) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 1334 "binascii.c"
      case 26: // $bb25
        var $109=HEAP[$quotetabs]; //@line 1334 "binascii.c"
        var $110=($109)!=0; //@line 1334 "binascii.c"
        if ($110) { __label__ = 35; break; } else { __label__ = 27; break; } //@line 1334 "binascii.c"
      case 27: // $bb26
        var $111=$data; //@line 1334 "binascii.c"
        var $112=$in; //@line 1334 "binascii.c"
        var $113=$111+$112; //@line 1334 "binascii.c"
        var $114=HEAP[$113]; //@line 1334 "binascii.c"
        var $115=($114)==9; //@line 1334 "binascii.c"
        if ($115) { __label__ = 35; break; } else { __label__ = 28; break; } //@line 1334 "binascii.c"
      case 28: // $bb27
        var $116=$data; //@line 1334 "binascii.c"
        var $117=$in; //@line 1334 "binascii.c"
        var $118=$116+$117; //@line 1334 "binascii.c"
        var $119=HEAP[$118]; //@line 1334 "binascii.c"
        var $120=($119)!=32; //@line 1334 "binascii.c"
        if ($120) { __label__ = 29; break; } else { __label__ = 35; break; } //@line 1334 "binascii.c"
      case 29: // $bb28
        var $121=$linelen; //@line 1346 "binascii.c"
        var $122=($121) + 3; //@line 1346 "binascii.c"
        var $123=($122) > 75; //@line 1346 "binascii.c"
        if ($123) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 1346 "binascii.c"
      case 30: // $bb29
        $linelen=0; //@line 1347 "binascii.c"
        var $124=$crlf; //@line 1348 "binascii.c"
        var $125=($124)!=0; //@line 1348 "binascii.c"
        var $126=$odatalen; //@line 1349 "binascii.c"
        if ($125) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1348 "binascii.c"
      case 31: // $bb30
        var $127=($126) + 3; //@line 1349 "binascii.c"
        $odatalen=$127; //@line 1349 "binascii.c"
        __label__ = 33; break; //@line 1349 "binascii.c"
      case 32: // $bb31
        var $128=($126) + 2; //@line 1351 "binascii.c"
        $odatalen=$128; //@line 1351 "binascii.c"
        __label__ = 33; break; //@line 1351 "binascii.c"
      case 33: // $bb32
        var $129=$linelen; //@line 1353 "binascii.c"
        var $130=($129) + 3; //@line 1353 "binascii.c"
        $linelen=$130; //@line 1353 "binascii.c"
        var $131=$odatalen; //@line 1354 "binascii.c"
        var $132=($131) + 3; //@line 1354 "binascii.c"
        $odatalen=$132; //@line 1354 "binascii.c"
        var $133=$in; //@line 1355 "binascii.c"
        var $134=($133) + 1; //@line 1355 "binascii.c"
        $in=$134; //@line 1355 "binascii.c"
        __label__ = 34; break; //@line 1355 "binascii.c"
      case 34: // $bb56_backedge
        var $135=$in; //@line 1333 "binascii.c"
        var $136=$datalen; //@line 1333 "binascii.c"
        var $137=($135) < ($136); //@line 1333 "binascii.c"
        if ($137) { __label__ = 7; break; } else { __label__ = 58; break; } //@line 1333 "binascii.c"
      case 35: // $bb33
        var $138=HEAP[$istext]; //@line 1358 "binascii.c"
        var $139=($138)==0; //@line 1358 "binascii.c"
        if ($139) { __label__ = 51; break; } else { __label__ = 36; break; } //@line 1358 "binascii.c"
      case 36: // $bb34
        var $140=$data; //@line 1358 "binascii.c"
        var $141=$in; //@line 1358 "binascii.c"
        var $142=$140+$141; //@line 1358 "binascii.c"
        var $143=HEAP[$142]; //@line 1358 "binascii.c"
        var $144=($143)==10; //@line 1358 "binascii.c"
        if ($144) { __lastLabel__ = 36; __label__ = 41; break; } else { __lastLabel__ = 36; __label__ = 37; break; } //@line 1358 "binascii.c"
      case 37: // $bb35
        var $145=$in; //@line 1358 "binascii.c"
        var $146=($145) + 1; //@line 1358 "binascii.c"
        var $147=$datalen; //@line 1358 "binascii.c"
        var $148=($146) >= ($147); //@line 1358 "binascii.c"
        if ($148) { __label__ = 51; break; } else { __label__ = 38; break; } //@line 1358 "binascii.c"
      case 38: // $bb36
        var $149=$data; //@line 1358 "binascii.c"
        var $150=$in; //@line 1358 "binascii.c"
        var $151=$149+$150; //@line 1358 "binascii.c"
        var $152=HEAP[$151]; //@line 1358 "binascii.c"
        var $153=($152)!=13; //@line 1358 "binascii.c"
        if ($153) { __label__ = 51; break; } else { __label__ = 39; break; } //@line 1358 "binascii.c"
      case 39: // $bb37
        var $154=$in; //@line 1358 "binascii.c"
        var $155=($154) + 1; //@line 1358 "binascii.c"
        var $156=$data; //@line 1358 "binascii.c"
        var $157=$156+$155; //@line 1358 "binascii.c"
        var $158=HEAP[$157]; //@line 1358 "binascii.c"
        var $159=($158)==10; //@line 1358 "binascii.c"
        if ($159) { __label__ = 40; break; } else { __label__ = 51; break; } //@line 1358 "binascii.c"
      case 40: // $bb38thread_pre_split
        var $_pr=$in;
        __lastLabel__ = 40; __label__ = 41; break;
      case 41: // $bb38
        var $160=__lastLabel__ == 40 ? $_pr : ($141);
        $linelen=0; //@line 1363 "binascii.c"
        var $161=((($160))|0)!=0; //@line 1365 "binascii.c"
        if ($161) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 1365 "binascii.c"
      case 42: // $bb39
        var $162=$in; //@line 1365 "binascii.c"
        var $163=($162) - 1; //@line 1365 "binascii.c"
        var $164=$data; //@line 1365 "binascii.c"
        var $165=$164+$163; //@line 1365 "binascii.c"
        var $166=HEAP[$165]; //@line 1365 "binascii.c"
        var $167=reSign(($166), 8, 1)==32; //@line 1365 "binascii.c"
        if ($167) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 1365 "binascii.c"
      case 43: // $bb40
        var $168=$in; //@line 1365 "binascii.c"
        var $169=($168) - 1; //@line 1365 "binascii.c"
        var $170=$data; //@line 1365 "binascii.c"
        var $171=$170+$169; //@line 1365 "binascii.c"
        var $172=HEAP[$171]; //@line 1365 "binascii.c"
        var $173=reSign(($172), 8, 1)==9; //@line 1365 "binascii.c"
        if ($173) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1365 "binascii.c"
      case 44: // $bb41
        var $174=$odatalen; //@line 1366 "binascii.c"
        var $175=($174) + 2; //@line 1366 "binascii.c"
        $odatalen=$175; //@line 1366 "binascii.c"
        __label__ = 45; break; //@line 1366 "binascii.c"
      case 45: // $bb42
        var $176=$crlf; //@line 1367 "binascii.c"
        var $177=($176)!=0; //@line 1367 "binascii.c"
        var $178=$odatalen; //@line 1368 "binascii.c"
        if ($177) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1367 "binascii.c"
      case 46: // $bb43
        var $179=($178) + 2; //@line 1368 "binascii.c"
        $odatalen=$179; //@line 1368 "binascii.c"
        __label__ = 48; break; //@line 1368 "binascii.c"
      case 47: // $bb44
        var $180=($178) + 1; //@line 1370 "binascii.c"
        $odatalen=$180; //@line 1370 "binascii.c"
        __label__ = 48; break; //@line 1370 "binascii.c"
      case 48: // $bb45
        var $181=$data; //@line 1371 "binascii.c"
        var $182=$in; //@line 1371 "binascii.c"
        var $183=$181+$182; //@line 1371 "binascii.c"
        var $184=HEAP[$183]; //@line 1371 "binascii.c"
        var $185=($184)==13; //@line 1371 "binascii.c"
        var $186=$in; //@line 1372 "binascii.c"
        if ($185) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1371 "binascii.c"
      case 49: // $bb46
        var $187=($186) + 2; //@line 1372 "binascii.c"
        $in=$187; //@line 1372 "binascii.c"
        __label__ = 34; break; //@line 1372 "binascii.c"
      case 50: // $bb47
        var $188=($186) + 1; //@line 1374 "binascii.c"
        $in=$188; //@line 1374 "binascii.c"
        __label__ = 34; break; //@line 1374 "binascii.c"
      case 51: // $bb49
        var $189=$in; //@line 1377 "binascii.c"
        var $190=($189) + 1; //@line 1377 "binascii.c"
        var $191=$datalen; //@line 1377 "binascii.c"
        var $192=($190)!=($191); //@line 1377 "binascii.c"
        if ($192) { __label__ = 52; break; } else { __label__ = 57; break; } //@line 1377 "binascii.c"
      case 52: // $bb50
        var $193=$in; //@line 1377 "binascii.c"
        var $194=($193) + 1; //@line 1377 "binascii.c"
        var $195=$data; //@line 1377 "binascii.c"
        var $196=$195+$194; //@line 1377 "binascii.c"
        var $197=HEAP[$196]; //@line 1377 "binascii.c"
        var $198=($197)!=10; //@line 1377 "binascii.c"
        if ($198) { __label__ = 53; break; } else { __label__ = 57; break; } //@line 1377 "binascii.c"
      case 53: // $bb51
        var $199=$linelen; //@line 1377 "binascii.c"
        var $200=($199) + 1; //@line 1377 "binascii.c"
        var $201=($200) > 75; //@line 1377 "binascii.c"
        if ($201) { __label__ = 54; break; } else { __label__ = 57; break; } //@line 1377 "binascii.c"
      case 54: // $bb52
        $linelen=0; //@line 1380 "binascii.c"
        var $202=$crlf; //@line 1381 "binascii.c"
        var $203=($202)!=0; //@line 1381 "binascii.c"
        var $204=$odatalen; //@line 1382 "binascii.c"
        if ($203) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1381 "binascii.c"
      case 55: // $bb53
        var $205=($204) + 3; //@line 1382 "binascii.c"
        $odatalen=$205; //@line 1382 "binascii.c"
        __label__ = 57; break; //@line 1382 "binascii.c"
      case 56: // $bb54
        var $206=($204) + 2; //@line 1384 "binascii.c"
        $odatalen=$206; //@line 1384 "binascii.c"
        __label__ = 57; break; //@line 1384 "binascii.c"
      case 57: // $bb55
        var $207=$linelen; //@line 1386 "binascii.c"
        var $208=($207) + 1; //@line 1386 "binascii.c"
        $linelen=$208; //@line 1386 "binascii.c"
        var $209=$odatalen; //@line 1387 "binascii.c"
        var $210=($209) + 1; //@line 1387 "binascii.c"
        $odatalen=$210; //@line 1387 "binascii.c"
        var $211=$in; //@line 1388 "binascii.c"
        var $212=($211) + 1; //@line 1388 "binascii.c"
        $in=$212; //@line 1388 "binascii.c"
        __label__ = 34; break; //@line 1388 "binascii.c"
      case 58: // $bb57
        var $213=$odatalen; //@line 1397 "binascii.c"
        var $214=_PyMem_Malloc($213); //@line 1397 "binascii.c"
        $odata=$214; //@line 1397 "binascii.c"
        var $215=($214)==0; //@line 1398 "binascii.c"
        if ($215) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1398 "binascii.c"
      case 59: // $bb58
        _PyBuffer_Release($pdata); //@line 1399 "binascii.c"
        var $216=_PyErr_NoMemory(); //@line 1400 "binascii.c"
        $0=0; //@line 1401 "binascii.c"
        __label__ = 116; break; //@line 1401 "binascii.c"
      case 60: // $bb59
        var $217=$odatalen; //@line 1403 "binascii.c"
        var $218=$odata; //@line 1403 "binascii.c"
        _llvm_memset_p0i8_i32($218, 0, $217, 1, 0); //@line 1403 "binascii.c"
        $linelen=0; //@line 1405 "binascii.c"
        $out=0; //@line 1405 "binascii.c"
        var $219=$out; //@line 1405 "binascii.c"
        $in=$219; //@line 1405 "binascii.c"
        var $220=$in; //@line 1406 "binascii.c"
        var $221=$datalen; //@line 1406 "binascii.c"
        var $222=($220) < ($221); //@line 1406 "binascii.c"
        if ($222) { __label__ = 61; break; } else { __label__ = 113; break; } //@line 1406 "binascii.c"
      case 61: // $bb60
        var $223=$data; //@line 1407 "binascii.c"
        var $224=$in; //@line 1407 "binascii.c"
        var $225=$223+$224; //@line 1407 "binascii.c"
        var $226=HEAP[$225]; //@line 1407 "binascii.c"
        var $227=($226) > 126; //@line 1407 "binascii.c"
        if ($227) { __label__ = 83; break; } else { __label__ = 62; break; } //@line 1407 "binascii.c"
      case 62: // $bb61
        var $228=$data; //@line 1407 "binascii.c"
        var $229=$in; //@line 1407 "binascii.c"
        var $230=$228+$229; //@line 1407 "binascii.c"
        var $231=HEAP[$230]; //@line 1407 "binascii.c"
        var $232=($231)==61; //@line 1407 "binascii.c"
        if ($232) { __label__ = 83; break; } else { __label__ = 63; break; } //@line 1407 "binascii.c"
      case 63: // $bb62
        var $233=HEAP[$header]; //@line 1407 "binascii.c"
        var $234=($233)==0; //@line 1407 "binascii.c"
        if ($234) { __label__ = 65; break; } else { __label__ = 64; break; } //@line 1407 "binascii.c"
      case 64: // $bb63
        var $235=$data; //@line 1407 "binascii.c"
        var $236=$in; //@line 1407 "binascii.c"
        var $237=$235+$236; //@line 1407 "binascii.c"
        var $238=HEAP[$237]; //@line 1407 "binascii.c"
        var $239=($238)==95; //@line 1407 "binascii.c"
        if ($239) { __label__ = 83; break; } else { __label__ = 65; break; } //@line 1407 "binascii.c"
      case 65: // $bb64
        var $240=$data; //@line 1407 "binascii.c"
        var $241=$in; //@line 1407 "binascii.c"
        var $242=$240+$241; //@line 1407 "binascii.c"
        var $243=HEAP[$242]; //@line 1407 "binascii.c"
        var $244=($243)!=46; //@line 1407 "binascii.c"
        if ($244) { __label__ = 70; break; } else { __label__ = 66; break; } //@line 1407 "binascii.c"
      case 66: // $bb65
        var $245=$linelen; //@line 1407 "binascii.c"
        var $246=($245)!=0; //@line 1407 "binascii.c"
        if ($246) { __label__ = 70; break; } else { __label__ = 67; break; } //@line 1407 "binascii.c"
      case 67: // $bb66
        var $247=$in; //@line 1407 "binascii.c"
        var $248=($247) + 1; //@line 1407 "binascii.c"
        var $249=$data; //@line 1407 "binascii.c"
        var $250=$249+$248; //@line 1407 "binascii.c"
        var $251=HEAP[$250]; //@line 1407 "binascii.c"
        var $252=($251)==10; //@line 1407 "binascii.c"
        if ($252) { __label__ = 83; break; } else { __label__ = 68; break; } //@line 1407 "binascii.c"
      case 68: // $bb67
        var $253=$in; //@line 1407 "binascii.c"
        var $254=($253) + 1; //@line 1407 "binascii.c"
        var $255=$data; //@line 1407 "binascii.c"
        var $256=$255+$254; //@line 1407 "binascii.c"
        var $257=HEAP[$256]; //@line 1407 "binascii.c"
        var $258=($257)==13; //@line 1407 "binascii.c"
        if ($258) { __label__ = 83; break; } else { __label__ = 69; break; } //@line 1407 "binascii.c"
      case 69: // $bb68
        var $259=$in; //@line 1407 "binascii.c"
        var $260=($259) + 1; //@line 1407 "binascii.c"
        var $261=$data; //@line 1407 "binascii.c"
        var $262=$261+$260; //@line 1407 "binascii.c"
        var $263=HEAP[$262]; //@line 1407 "binascii.c"
        var $264=($263)==0; //@line 1407 "binascii.c"
        if ($264) { __label__ = 83; break; } else { __label__ = 70; break; } //@line 1407 "binascii.c"
      case 70: // $bb69
        var $265=HEAP[$istext]; //@line 1407 "binascii.c"
        var $266=($265)!=0; //@line 1407 "binascii.c"
        if ($266) { __label__ = 73; break; } else { __label__ = 71; break; } //@line 1407 "binascii.c"
      case 71: // $bb70
        var $267=$data; //@line 1407 "binascii.c"
        var $268=$in; //@line 1407 "binascii.c"
        var $269=$267+$268; //@line 1407 "binascii.c"
        var $270=HEAP[$269]; //@line 1407 "binascii.c"
        var $271=($270)==13; //@line 1407 "binascii.c"
        if ($271) { __label__ = 83; break; } else { __label__ = 72; break; } //@line 1407 "binascii.c"
      case 72: // $bb71
        var $272=$data; //@line 1407 "binascii.c"
        var $273=$in; //@line 1407 "binascii.c"
        var $274=$272+$273; //@line 1407 "binascii.c"
        var $275=HEAP[$274]; //@line 1407 "binascii.c"
        var $276=($275)==10; //@line 1407 "binascii.c"
        if ($276) { __label__ = 83; break; } else { __label__ = 73; break; } //@line 1407 "binascii.c"
      case 73: // $bb72
        var $277=$data; //@line 1407 "binascii.c"
        var $278=$in; //@line 1407 "binascii.c"
        var $279=$277+$278; //@line 1407 "binascii.c"
        var $280=HEAP[$279]; //@line 1407 "binascii.c"
        var $281=($280)==9; //@line 1407 "binascii.c"
        if ($281) { __label__ = 75; break; } else { __label__ = 74; break; } //@line 1407 "binascii.c"
      case 74: // $bb73
        var $282=$data; //@line 1407 "binascii.c"
        var $283=$in; //@line 1407 "binascii.c"
        var $284=$282+$283; //@line 1407 "binascii.c"
        var $285=HEAP[$284]; //@line 1407 "binascii.c"
        var $286=($285)==32; //@line 1407 "binascii.c"
        if ($286) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 1407 "binascii.c"
      case 75: // $bb74
        var $287=$in; //@line 1407 "binascii.c"
        var $288=($287) + 1; //@line 1407 "binascii.c"
        var $289=$datalen; //@line 1407 "binascii.c"
        var $290=($288)==($289); //@line 1407 "binascii.c"
        if ($290) { __label__ = 83; break; } else { __label__ = 76; break; } //@line 1407 "binascii.c"
      case 76: // $bb75
        var $291=$data; //@line 1407 "binascii.c"
        var $292=$in; //@line 1407 "binascii.c"
        var $293=$291+$292; //@line 1407 "binascii.c"
        var $294=HEAP[$293]; //@line 1407 "binascii.c"
        var $295=($294) > 32; //@line 1407 "binascii.c"
        if ($295) { __label__ = 89; break; } else { __label__ = 77; break; } //@line 1407 "binascii.c"
      case 77: // $bb76
        var $296=$data; //@line 1407 "binascii.c"
        var $297=$in; //@line 1407 "binascii.c"
        var $298=$296+$297; //@line 1407 "binascii.c"
        var $299=HEAP[$298]; //@line 1407 "binascii.c"
        var $300=($299)==13; //@line 1407 "binascii.c"
        if ($300) { __label__ = 89; break; } else { __label__ = 78; break; } //@line 1407 "binascii.c"
      case 78: // $bb77
        var $301=$data; //@line 1407 "binascii.c"
        var $302=$in; //@line 1407 "binascii.c"
        var $303=$301+$302; //@line 1407 "binascii.c"
        var $304=HEAP[$303]; //@line 1407 "binascii.c"
        var $305=($304)==10; //@line 1407 "binascii.c"
        if ($305) { __label__ = 89; break; } else { __label__ = 79; break; } //@line 1407 "binascii.c"
      case 79: // $bb78
        var $306=HEAP[$quotetabs]; //@line 1407 "binascii.c"
        var $307=($306)!=0; //@line 1407 "binascii.c"
        if ($307) { __label__ = 83; break; } else { __label__ = 80; break; } //@line 1407 "binascii.c"
      case 80: // $bb79
        var $308=HEAP[$quotetabs]; //@line 1407 "binascii.c"
        var $309=($308)!=0; //@line 1407 "binascii.c"
        if ($309) { __label__ = 89; break; } else { __label__ = 81; break; } //@line 1407 "binascii.c"
      case 81: // $bb80
        var $310=$data; //@line 1407 "binascii.c"
        var $311=$in; //@line 1407 "binascii.c"
        var $312=$310+$311; //@line 1407 "binascii.c"
        var $313=HEAP[$312]; //@line 1407 "binascii.c"
        var $314=($313)==9; //@line 1407 "binascii.c"
        if ($314) { __label__ = 89; break; } else { __label__ = 82; break; } //@line 1407 "binascii.c"
      case 82: // $bb81
        var $315=$data; //@line 1407 "binascii.c"
        var $316=$in; //@line 1407 "binascii.c"
        var $317=$315+$316; //@line 1407 "binascii.c"
        var $318=HEAP[$317]; //@line 1407 "binascii.c"
        var $319=($318)!=32; //@line 1407 "binascii.c"
        if ($319) { __label__ = 83; break; } else { __label__ = 89; break; } //@line 1407 "binascii.c"
      case 83: // $bb82
        var $320=$linelen; //@line 1419 "binascii.c"
        var $321=($320) + 3; //@line 1419 "binascii.c"
        var $322=($321) > 75; //@line 1419 "binascii.c"
        if ($322) { __label__ = 84; break; } else { __label__ = 87; break; } //@line 1419 "binascii.c"
      case 84: // $bb83
        var $323=$odata; //@line 1420 "binascii.c"
        var $324=$out; //@line 1420 "binascii.c"
        var $325=$323+$324; //@line 1420 "binascii.c"
        HEAP[$325]=61; //@line 1420 "binascii.c"
        var $326=$out; //@line 1420 "binascii.c"
        var $327=($326) + 1; //@line 1420 "binascii.c"
        $out=$327; //@line 1420 "binascii.c"
        var $328=$crlf; //@line 1421 "binascii.c"
        var $329=($328)!=0; //@line 1421 "binascii.c"
        if ($329) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 1421 "binascii.c"
      case 85: // $bb84
        var $330=$odata; //@line 1421 "binascii.c"
        var $331=$out; //@line 1421 "binascii.c"
        var $332=$330+$331; //@line 1421 "binascii.c"
        HEAP[$332]=13; //@line 1421 "binascii.c"
        var $333=$out; //@line 1421 "binascii.c"
        var $334=($333) + 1; //@line 1421 "binascii.c"
        $out=$334; //@line 1421 "binascii.c"
        __label__ = 86; break; //@line 1421 "binascii.c"
      case 86: // $bb85
        var $335=$odata; //@line 1422 "binascii.c"
        var $336=$out; //@line 1422 "binascii.c"
        var $337=$335+$336; //@line 1422 "binascii.c"
        HEAP[$337]=10; //@line 1422 "binascii.c"
        var $338=$out; //@line 1422 "binascii.c"
        var $339=($338) + 1; //@line 1422 "binascii.c"
        $out=$339; //@line 1422 "binascii.c"
        $linelen=0; //@line 1423 "binascii.c"
        __label__ = 87; break; //@line 1423 "binascii.c"
      case 87: // $bb86
        var $340=$odata; //@line 1425 "binascii.c"
        var $341=$out; //@line 1425 "binascii.c"
        var $342=$340+$341; //@line 1425 "binascii.c"
        HEAP[$342]=61; //@line 1425 "binascii.c"
        var $343=$out; //@line 1425 "binascii.c"
        var $344=($343) + 1; //@line 1425 "binascii.c"
        $out=$344; //@line 1425 "binascii.c"
        var $345=$odata; //@line 1426 "binascii.c"
        var $346=$out; //@line 1426 "binascii.c"
        var $347=$345+$346; //@line 1426 "binascii.c"
        var $348=$data; //@line 1426 "binascii.c"
        var $349=$in; //@line 1426 "binascii.c"
        var $350=$348+$349; //@line 1426 "binascii.c"
        var $351=HEAP[$350]; //@line 1426 "binascii.c"
        var $352=($351); //@line 1426 "binascii.c"
        var $353=((($352)) & 255); //@line 1426 "binascii.c"
        _to_hex($353, $347); //@line 1426 "binascii.c"
        var $354=$out; //@line 1427 "binascii.c"
        var $355=($354) + 2; //@line 1427 "binascii.c"
        $out=$355; //@line 1427 "binascii.c"
        var $356=$in; //@line 1428 "binascii.c"
        var $357=($356) + 1; //@line 1428 "binascii.c"
        $in=$357; //@line 1428 "binascii.c"
        var $358=$linelen; //@line 1429 "binascii.c"
        var $359=($358) + 3; //@line 1429 "binascii.c"
        $linelen=$359; //@line 1429 "binascii.c"
        __label__ = 88; break; //@line 1429 "binascii.c"
      case 88: // $bb112_backedge
        var $360=$in; //@line 1406 "binascii.c"
        var $361=$datalen; //@line 1406 "binascii.c"
        var $362=($360) < ($361); //@line 1406 "binascii.c"
        if ($362) { __label__ = 61; break; } else { __label__ = 113; break; } //@line 1406 "binascii.c"
      case 89: // $bb87
        var $363=HEAP[$istext]; //@line 1432 "binascii.c"
        var $364=($363)==0; //@line 1432 "binascii.c"
        if ($364) { __label__ = 103; break; } else { __label__ = 90; break; } //@line 1432 "binascii.c"
      case 90: // $bb88
        var $365=$data; //@line 1432 "binascii.c"
        var $366=$in; //@line 1432 "binascii.c"
        var $367=$365+$366; //@line 1432 "binascii.c"
        var $368=HEAP[$367]; //@line 1432 "binascii.c"
        var $369=($368)==10; //@line 1432 "binascii.c"
        if ($369) { __label__ = 94; break; } else { __label__ = 91; break; } //@line 1432 "binascii.c"
      case 91: // $bb89
        var $370=$in; //@line 1432 "binascii.c"
        var $371=($370) + 1; //@line 1432 "binascii.c"
        var $372=$datalen; //@line 1432 "binascii.c"
        var $373=($371) >= ($372); //@line 1432 "binascii.c"
        if ($373) { __label__ = 103; break; } else { __label__ = 92; break; } //@line 1432 "binascii.c"
      case 92: // $bb90
        var $374=$data; //@line 1432 "binascii.c"
        var $375=$in; //@line 1432 "binascii.c"
        var $376=$374+$375; //@line 1432 "binascii.c"
        var $377=HEAP[$376]; //@line 1432 "binascii.c"
        var $378=($377)!=13; //@line 1432 "binascii.c"
        if ($378) { __label__ = 103; break; } else { __label__ = 93; break; } //@line 1432 "binascii.c"
      case 93: // $bb91
        var $379=$in; //@line 1432 "binascii.c"
        var $380=($379) + 1; //@line 1432 "binascii.c"
        var $381=$data; //@line 1432 "binascii.c"
        var $382=$381+$380; //@line 1432 "binascii.c"
        var $383=HEAP[$382]; //@line 1432 "binascii.c"
        var $384=($383)==10; //@line 1432 "binascii.c"
        if ($384) { __label__ = 94; break; } else { __label__ = 103; break; } //@line 1432 "binascii.c"
      case 94: // $bb92
        $linelen=0; //@line 1437 "binascii.c"
        var $385=$out; //@line 1439 "binascii.c"
        var $386=($385)!=0; //@line 1439 "binascii.c"
        if ($386) { __label__ = 95; break; } else { __label__ = 98; break; } //@line 1439 "binascii.c"
      case 95: // $bb93
        var $387=$out; //@line 1439 "binascii.c"
        var $388=($387) - 1; //@line 1439 "binascii.c"
        var $389=$odata; //@line 1439 "binascii.c"
        var $390=$389+$388; //@line 1439 "binascii.c"
        var $391=HEAP[$390]; //@line 1439 "binascii.c"
        var $392=($391)==32; //@line 1439 "binascii.c"
        if ($392) { __label__ = 97; break; } else { __label__ = 96; break; } //@line 1439 "binascii.c"
      case 96: // $bb94
        var $393=$out; //@line 1439 "binascii.c"
        var $394=($393) - 1; //@line 1439 "binascii.c"
        var $395=$odata; //@line 1439 "binascii.c"
        var $396=$395+$394; //@line 1439 "binascii.c"
        var $397=HEAP[$396]; //@line 1439 "binascii.c"
        var $398=($397)==9; //@line 1439 "binascii.c"
        if ($398) { __label__ = 97; break; } else { __label__ = 98; break; } //@line 1439 "binascii.c"
      case 97: // $bb95
        var $399=$out; //@line 1440 "binascii.c"
        var $400=($399) - 1; //@line 1440 "binascii.c"
        var $401=$odata; //@line 1440 "binascii.c"
        var $402=$401+$400; //@line 1440 "binascii.c"
        var $403=HEAP[$402]; //@line 1440 "binascii.c"
        $ch=$403; //@line 1440 "binascii.c"
        var $404=$out; //@line 1441 "binascii.c"
        var $405=($404) - 1; //@line 1441 "binascii.c"
        var $406=$odata; //@line 1441 "binascii.c"
        var $407=$406+$405; //@line 1441 "binascii.c"
        HEAP[$407]=61; //@line 1441 "binascii.c"
        var $408=$odata; //@line 1442 "binascii.c"
        var $409=$out; //@line 1442 "binascii.c"
        var $410=$408+$409; //@line 1442 "binascii.c"
        var $411=$ch; //@line 1442 "binascii.c"
        var $412=($411); //@line 1442 "binascii.c"
        var $413=((($412)) & 255); //@line 1442 "binascii.c"
        _to_hex($413, $410); //@line 1442 "binascii.c"
        var $414=$out; //@line 1443 "binascii.c"
        var $415=($414) + 2; //@line 1443 "binascii.c"
        $out=$415; //@line 1443 "binascii.c"
        __label__ = 98; break; //@line 1443 "binascii.c"
      case 98: // $bb96
        var $416=$crlf; //@line 1446 "binascii.c"
        var $417=($416)!=0; //@line 1446 "binascii.c"
        if ($417) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 1446 "binascii.c"
      case 99: // $bb97
        var $418=$odata; //@line 1446 "binascii.c"
        var $419=$out; //@line 1446 "binascii.c"
        var $420=$418+$419; //@line 1446 "binascii.c"
        HEAP[$420]=13; //@line 1446 "binascii.c"
        var $421=$out; //@line 1446 "binascii.c"
        var $422=($421) + 1; //@line 1446 "binascii.c"
        $out=$422; //@line 1446 "binascii.c"
        __label__ = 100; break; //@line 1446 "binascii.c"
      case 100: // $bb98
        var $423=$odata; //@line 1447 "binascii.c"
        var $424=$out; //@line 1447 "binascii.c"
        var $425=$423+$424; //@line 1447 "binascii.c"
        HEAP[$425]=10; //@line 1447 "binascii.c"
        var $426=$out; //@line 1447 "binascii.c"
        var $427=($426) + 1; //@line 1447 "binascii.c"
        $out=$427; //@line 1447 "binascii.c"
        var $428=$data; //@line 1448 "binascii.c"
        var $429=$in; //@line 1448 "binascii.c"
        var $430=$428+$429; //@line 1448 "binascii.c"
        var $431=HEAP[$430]; //@line 1448 "binascii.c"
        var $432=($431)==13; //@line 1448 "binascii.c"
        var $433=$in; //@line 1449 "binascii.c"
        if ($432) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 1448 "binascii.c"
      case 101: // $bb99
        var $434=($433) + 2; //@line 1449 "binascii.c"
        $in=$434; //@line 1449 "binascii.c"
        __label__ = 88; break; //@line 1449 "binascii.c"
      case 102: // $bb100
        var $435=($433) + 1; //@line 1451 "binascii.c"
        $in=$435; //@line 1451 "binascii.c"
        __label__ = 88; break; //@line 1451 "binascii.c"
      case 103: // $bb102
        var $436=$in; //@line 1454 "binascii.c"
        var $437=($436) + 1; //@line 1454 "binascii.c"
        var $438=$datalen; //@line 1454 "binascii.c"
        var $439=($437)!=($438); //@line 1454 "binascii.c"
        if ($439) { __label__ = 104; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 104: // $bb103
        var $440=$in; //@line 1454 "binascii.c"
        var $441=($440) + 1; //@line 1454 "binascii.c"
        var $442=$data; //@line 1454 "binascii.c"
        var $443=$442+$441; //@line 1454 "binascii.c"
        var $444=HEAP[$443]; //@line 1454 "binascii.c"
        var $445=($444)!=10; //@line 1454 "binascii.c"
        if ($445) { __label__ = 105; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 105: // $bb104
        var $446=$linelen; //@line 1454 "binascii.c"
        var $447=($446) + 1; //@line 1454 "binascii.c"
        var $448=($447) > 75; //@line 1454 "binascii.c"
        if ($448) { __label__ = 106; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 106: // $bb105
        var $449=$odata; //@line 1457 "binascii.c"
        var $450=$out; //@line 1457 "binascii.c"
        var $451=$449+$450; //@line 1457 "binascii.c"
        HEAP[$451]=61; //@line 1457 "binascii.c"
        var $452=$out; //@line 1457 "binascii.c"
        var $453=($452) + 1; //@line 1457 "binascii.c"
        $out=$453; //@line 1457 "binascii.c"
        var $454=$crlf; //@line 1458 "binascii.c"
        var $455=($454)!=0; //@line 1458 "binascii.c"
        if ($455) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 1458 "binascii.c"
      case 107: // $bb106
        var $456=$odata; //@line 1458 "binascii.c"
        var $457=$out; //@line 1458 "binascii.c"
        var $458=$456+$457; //@line 1458 "binascii.c"
        HEAP[$458]=13; //@line 1458 "binascii.c"
        var $459=$out; //@line 1458 "binascii.c"
        var $460=($459) + 1; //@line 1458 "binascii.c"
        $out=$460; //@line 1458 "binascii.c"
        __label__ = 108; break; //@line 1458 "binascii.c"
      case 108: // $bb107
        var $461=$odata; //@line 1459 "binascii.c"
        var $462=$out; //@line 1459 "binascii.c"
        var $463=$461+$462; //@line 1459 "binascii.c"
        HEAP[$463]=10; //@line 1459 "binascii.c"
        var $464=$out; //@line 1459 "binascii.c"
        var $465=($464) + 1; //@line 1459 "binascii.c"
        $out=$465; //@line 1459 "binascii.c"
        $linelen=0; //@line 1460 "binascii.c"
        __label__ = 109; break; //@line 1460 "binascii.c"
      case 109: // $bb108
        var $466=$linelen; //@line 1462 "binascii.c"
        var $467=($466) + 1; //@line 1462 "binascii.c"
        $linelen=$467; //@line 1462 "binascii.c"
        var $468=HEAP[$header]; //@line 1463 "binascii.c"
        var $469=($468)==0; //@line 1463 "binascii.c"
        if ($469) { __label__ = 112; break; } else { __label__ = 110; break; } //@line 1463 "binascii.c"
      case 110: // $bb109
        var $470=$data; //@line 1463 "binascii.c"
        var $471=$in; //@line 1463 "binascii.c"
        var $472=$470+$471; //@line 1463 "binascii.c"
        var $473=HEAP[$472]; //@line 1463 "binascii.c"
        var $474=($473)!=32; //@line 1463 "binascii.c"
        if ($474) { __label__ = 112; break; } else { __label__ = 111; break; } //@line 1463 "binascii.c"
      case 111: // $bb110
        var $475=$odata; //@line 1464 "binascii.c"
        var $476=$out; //@line 1464 "binascii.c"
        var $477=$475+$476; //@line 1464 "binascii.c"
        HEAP[$477]=95; //@line 1464 "binascii.c"
        var $478=$out; //@line 1464 "binascii.c"
        var $479=($478) + 1; //@line 1464 "binascii.c"
        $out=$479; //@line 1464 "binascii.c"
        var $480=$in; //@line 1465 "binascii.c"
        var $481=($480) + 1; //@line 1465 "binascii.c"
        $in=$481; //@line 1465 "binascii.c"
        __label__ = 88; break; //@line 1465 "binascii.c"
      case 112: // $bb111
        var $482=$data; //@line 1468 "binascii.c"
        var $483=$in; //@line 1468 "binascii.c"
        var $484=$482+$483; //@line 1468 "binascii.c"
        var $485=HEAP[$484]; //@line 1468 "binascii.c"
        var $486=$odata; //@line 1468 "binascii.c"
        var $487=$out; //@line 1468 "binascii.c"
        var $488=$486+$487; //@line 1468 "binascii.c"
        HEAP[$488]=$485; //@line 1468 "binascii.c"
        var $489=$out; //@line 1468 "binascii.c"
        var $490=($489) + 1; //@line 1468 "binascii.c"
        $out=$490; //@line 1468 "binascii.c"
        var $491=$in; //@line 1468 "binascii.c"
        var $492=($491) + 1; //@line 1468 "binascii.c"
        $in=$492; //@line 1468 "binascii.c"
        __label__ = 88; break; //@line 1468 "binascii.c"
      case 113: // $bb113
        var $493=$odata; //@line 1473 "binascii.c"
        var $494=$out; //@line 1473 "binascii.c"
        var $495=_PyString_FromStringAndSize($493, $494); //@line 1473 "binascii.c"
        $rv=$495; //@line 1473 "binascii.c"
        var $496=($495)==0; //@line 1473 "binascii.c"
        _PyBuffer_Release($pdata); //@line 1474 "binascii.c"
        var $497=$odata; //@line 1475 "binascii.c"
        _PyMem_Free($497); //@line 1475 "binascii.c"
        if ($496) { __label__ = 114; break; } else { __label__ = 115; break; } //@line 1473 "binascii.c"
      case 114: // $bb114
        $0=0; //@line 1476 "binascii.c"
        __label__ = 116; break; //@line 1476 "binascii.c"
      case 115: // $bb115
        var $498=$rv; //@line 1480 "binascii.c"
        $0=$498; //@line 1480 "binascii.c"
        __label__ = 116; break; //@line 1480 "binascii.c"
      case 116: // $bb116
        var $499=$0; //@line 1319 "binascii.c"
        $retval=$499; //@line 1319 "binascii.c"
        var $retval117=$retval; //@line 1319 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval117; //@line 1319 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initbinascii() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $x;
        var $0=_Py_InitModule4(__str53, _binascii_module_methods, 0, 0, 1013); //@line 1518 "binascii.c"
        $m=$0; //@line 1518 "binascii.c"
        var $1=$m; //@line 1519 "binascii.c"
        var $2=($1)==0; //@line 1519 "binascii.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1519 "binascii.c"
      case 1: // $bb
        var $3=$m; //@line 1522 "binascii.c"
        var $4=_PyModule_GetDict($3); //@line 1522 "binascii.c"
        $d=$4; //@line 1522 "binascii.c"
        var $5=_PyString_FromString(_doc_binascii); //@line 1523 "binascii.c"
        $x=$5; //@line 1523 "binascii.c"
        var $6=$d; //@line 1524 "binascii.c"
        var $7=$x; //@line 1524 "binascii.c"
        var $8=_PyDict_SetItemString($6, __str54, $7); //@line 1524 "binascii.c"
        var $9=$x; //@line 1525 "binascii.c"
        var $10=($9)!=0; //@line 1525 "binascii.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1525 "binascii.c"
      case 2: // $bb1
        var $11=$x; //@line 1525 "binascii.c"
        var $12=$11; //@line 1525 "binascii.c"
        var $13=HEAP[$12]; //@line 1525 "binascii.c"
        var $14=($13) - 1; //@line 1525 "binascii.c"
        var $15=$x; //@line 1525 "binascii.c"
        var $16=$15; //@line 1525 "binascii.c"
        HEAP[$16]=$14; //@line 1525 "binascii.c"
        var $17=$x; //@line 1525 "binascii.c"
        var $18=$17; //@line 1525 "binascii.c"
        var $19=HEAP[$18]; //@line 1525 "binascii.c"
        var $20=($19)==0; //@line 1525 "binascii.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1525 "binascii.c"
      case 3: // $bb2
        var $21=$x; //@line 1525 "binascii.c"
        var $22=$21+4; //@line 1525 "binascii.c"
        var $23=HEAP[$22]; //@line 1525 "binascii.c"
        var $24=$23+24; //@line 1525 "binascii.c"
        var $25=HEAP[$24]; //@line 1525 "binascii.c"
        var $26=$x; //@line 1525 "binascii.c"
        FUNCTION_TABLE[$25]($26); //@line 1525 "binascii.c"
        __label__ = 4; break; //@line 1525 "binascii.c"
      case 4: // $bb3
        var $27=_PyErr_NewException(__str55, 0, 0); //@line 1527 "binascii.c"
        HEAP[_Error]=$27; //@line 1527 "binascii.c"
        var $28=HEAP[_Error]; //@line 1528 "binascii.c"
        var $29=$d; //@line 1528 "binascii.c"
        var $30=_PyDict_SetItemString($29, __str56, $28); //@line 1528 "binascii.c"
        var $31=_PyErr_NewException(__str57, 0, 0); //@line 1529 "binascii.c"
        HEAP[_Incomplete]=$31; //@line 1529 "binascii.c"
        var $32=HEAP[_Incomplete]; //@line 1530 "binascii.c"
        var $33=$d; //@line 1530 "binascii.c"
        var $34=_PyDict_SetItemString($33, __str58, $32); //@line 1530 "binascii.c"
        __label__ = 5; break; //@line 1530 "binascii.c"
      case 5: // $return
        ;
        return; //@line 1520 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbinascii"] = _initbinascii;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_binascii_a2b_uu,0,_binascii_b2a_uu,0,_binascii_a2b_base64,0,_binascii_b2a_base64,0,_binascii_a2b_hqx,0,_binascii_b2a_hqx,0,_binascii_hexlify,0,_binascii_unhexlify,0,_binascii_rlecode_hqx,0,_binascii_rledecode_hqx,0,_binascii_crc_hqx,0,_binascii_crc32,0,_binascii_a2b_qp,0,_binascii_b2a_qp,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_table_a2b_hqx=allocate([125,125,125,125,125,125,125,125,125,125,126,125,125,126,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,0,1,2,3,4,5,6,7,8,9,10,11,12,125,125,13,14,15,16,17,18,19,125,20,21,127,125,125,125,125,125,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,125,37,38,39,40,41,42,43,125,44,45,46,47,125,125,125,125,48,49,50,51,52,53,54,125,55,56,57,58,59,60,125,125,61,62,63,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125] /* }}}}}}}}}}~}}~}}}}}} */, "i8", ALLOC_NORMAL);
_table_b2a_hqx=allocate([33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,51,52,53,54,56,57,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,88,89,90,91,96,97,98,99,100,101,102,104,105,106,107,108,109,112,113,114,0] /* !\22#$%&'()_+,-01234 */, "i8", ALLOC_NORMAL);
_table_a2b_base64=allocate([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,62,255,255,255,63,52,53,54,55,56,57,58,59,60,61,255,255,255,0,255,255,255,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,255,255,255,255,255,255,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,255,255,255,255,255] /* \FF\FF\FF\FF\FF\FF\F */, "i8", ALLOC_NORMAL);
_table_b2a_base64=allocate([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47,0] /* ABCDEFGHIJKLMNOPQRST */, "i8", ALLOC_NORMAL);
_crctab_hqx=allocate([0, 0, 4129, 0, 8258, 0, 12387, 0, 16516, 0, 20645, 0, 24774, 0, 28903, 0, -32504, 0, -28375, 0, -24246, 0, -20117, 0, -15988, 0, -11859, 0, -7730, 0, -3601, 0, 4657, 0, 528, 0, 12915, 0, 8786, 0, 21173, 0, 17044, 0, 29431, 0, 25302, 0, -27847, 0, -31976, 0, -19589, 0, -23718, 0, -11331, 0, -15460, 0, -3073, 0, -7202, 0, 9314, 0, 13379, 0, 1056, 0, 5121, 0, 25830, 0, 29895, 0, 17572, 0, 21637, 0, -23190, 0, -19125, 0, -31448, 0, -27383, 0, -6674, 0, -2609, 0, -14932, 0, -10867, 0, 13907, 0, 9842, 0, 5649, 0, 1584, 0, 30423, 0, 26358, 0, 22165, 0, 18100, 0, -18597, 0, -22662, 0, -26855, 0, -30920, 0, -2081, 0, -6146, 0, -10339, 0, -14404, 0, 18628, 0, 22757, 0, 26758, 0, 30887, 0, 2112, 0, 6241, 0, 10242, 0, 14371, 0, -13876, 0, -9747, 0, -5746, 0, -1617, 0, -30392, 0, -26263, 0, -22262, 0, -18133, 0, 23285, 0, 19156, 0, 31415, 0, 27286, 0, 6769, 0, 2640, 0, 14899, 0, 10770, 0, -9219, 0, -13348, 0, -1089, 0, -5218, 0, -25735, 0, -29864, 0, -17605, 0, -21734, 0, 27814, 0, 31879, 0, 19684, 0, 23749, 0, 11298, 0, 15363, 0, 3168, 0, 7233, 0, -4690, 0, -625, 0, -12820, 0, -8755, 0, -21206, 0, -17141, 0, -29336, 0, -25271, 0, 32407, 0, 28342, 0, 24277, 0, 20212, 0, 15891, 0, 11826, 0, 7761, 0, 3696, 0, -97, 0, -4162, 0, -8227, 0, -12292, 0, -16613, 0, -20678, 0, -24743, 0, -28808, 0, -28280, 0, -32343, 0, -20022, 0, -24085, 0, -12020, 0, -16083, 0, -3762, 0, -7825, 0, 4224, 0, 161, 0, 12482, 0, 8419, 0, 20484, 0, 16421, 0, 28742, 0, 24679, 0, -31815, 0, -27752, 0, -23557, 0, -19494, 0, -15555, 0, -11492, 0, -7297, 0, -3234, 0, 689, 0, 4752, 0, 8947, 0, 13010, 0, 16949, 0, 21012, 0, 25207, 0, 29270, 0, -18966, 0, -23093, 0, -27224, 0, -31351, 0, -2706, 0, -6833, 0, -10964, 0, -15091, 0, 13538, 0, 9411, 0, 5280, 0, 1153, 0, 29798, 0, 25671, 0, 21540, 0, 17413, 0, -22565, 0, -18438, 0, -30823, 0, -26696, 0, -6305, 0, -2178, 0, -14563, 0, -10436, 0, 9939, 0, 14066, 0, 1681, 0, 5808, 0, 26199, 0, 30326, 0, 17941, 0, 22068, 0, -9908, 0, -13971, 0, -1778, 0, -5841, 0, -26168, 0, -30231, 0, -18038, 0, -22101, 0, 22596, 0, 18533, 0, 30726, 0, 26663, 0, 6336, 0, 2273, 0, 14466, 0, 10403, 0, -13443, 0, -9380, 0, -5313, 0, -1250, 0, -29703, 0, -25640, 0, -21573, 0, -17510, 0, 19061, 0, 23124, 0, 27191, 0, 31254, 0, 2801, 0, 6864, 0, 10931, 0, 14994, 0, -722, 0, -4849, 0, -8852, 0, -12979, 0, -16982, 0, -21109, 0, -25112, 0, -29239, 0, 31782, 0, 27655, 0, 23652, 0, 19525, 0, 15522, 0, 11395, 0, 7392, 0, 3265, 0, -4321, 0, -194, 0, -12451, 0, -8324, 0, -20581, 0, -16454, 0, -28711, 0, -24584, 0, 28183, 0, 32310, 0, 20053, 0, 24180, 0, 11923, 0, 16050, 0, 3793, 0, 7920, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_doc_a2b_uu=allocate([40,97,115,99,105,105,41,32,45,62,32,98,105,110,46,32,68,101,99,111,100,101,32,97,32,108,105,110,101,32,111,102,32,117,117,101,110,99,111,100,101,100,32,100,97,116,97,0] /* (ascii) -> bin. Deco */, "i8", ALLOC_NORMAL);
__str=allocate([115,42,58,97,50,98,95,117,117,0] /* s_:a2b_uu\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([97,115,99,105,105,95,108,101,110,32,62,61,32,48,0] /* ascii_len >= 0\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,98,105,110,97,115,99,105,105,46,99,0] /* ../cpython/Modules/b */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8323=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,117,117,0] /* binascii_a2b_uu\00 */, "i8", ALLOC_NORMAL);
_Error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([73,108,108,101,103,97,108,32,99,104,97,114,0] /* Illegal char\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([84,114,97,105,108,105,110,103,32,103,97,114,98,97,103,101,0] /* Trailing garbage\00 */, "i8", ALLOC_NORMAL);
_doc_b2a_uu=allocate([40,98,105,110,41,32,45,62,32,97,115,99,105,105,46,32,85,117,101,110,99,111,100,101,32,108,105,110,101,32,111,102,32,100,97,116,97,0] /* (bin) -> ascii. Uuen */, "i8", ALLOC_NORMAL);
__str5=allocate([115,42,58,98,50,97,95,117,117,0] /* s_:b2a_uu\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([65,116,32,109,111,115,116,32,52,53,32,98,121,116,101,115,32,97,116,32,111,110,99,101,0] /* At most 45 bytes at  */, "i8", ALLOC_NORMAL);
_doc_a2b_base64=allocate([40,97,115,99,105,105,41,32,45,62,32,98,105,110,46,32,68,101,99,111,100,101,32,97,32,108,105,110,101,32,111,102,32,98,97,115,101,54,52,32,100,97,116,97,0] /* (ascii) -> bin. Deco */, "i8", ALLOC_NORMAL);
__str7=allocate([115,42,58,97,50,98,95,98,97,115,101,54,52,0] /* s_:a2b_base64\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8505=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,98,97,115,101,54,52,0] /* binascii_a2b_base64\ */, "i8", ALLOC_NORMAL);
__str8=allocate([73,110,99,111,114,114,101,99,116,32,112,97,100,100,105,110,103,0] /* Incorrect padding\00 */, "i8", ALLOC_NORMAL);
__str9=allocate(1, "i8", ALLOC_NORMAL);
_doc_b2a_base64=allocate([40,98,105,110,41,32,45,62,32,97,115,99,105,105,46,32,66,97,115,101,54,52,45,99,111,100,101,32,108,105,110,101,32,111,102,32,100,97,116,97,0] /* (bin) -> ascii. Base */, "i8", ALLOC_NORMAL);
__str10=allocate([115,42,58,98,50,97,95,98,97,115,101,54,52,0] /* s_:b2a_base64\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([98,105,110,95,108,101,110,32,62,61,32,48,0] /* bin_len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8609=allocate([98,105,110,97,115,99,105,105,95,98,50,97,95,98,97,115,101,54,52,0] /* binascii_b2a_base64\ */, "i8", ALLOC_NORMAL);
__str12=allocate([84,111,111,32,109,117,99,104,32,100,97,116,97,32,102,111,114,32,98,97,115,101,54,52,32,108,105,110,101,0] /* Too much data for ba */, "i8", ALLOC_NORMAL);
_doc_a2b_hqx=allocate([97,115,99,105,105,32,45,62,32,98,105,110,44,32,100,111,110,101,46,32,68,101,99,111,100,101,32,46,104,113,120,32,99,111,100,105,110,103,0] /* ascii -> bin, done.  */, "i8", ALLOC_NORMAL);
__str13=allocate([115,42,58,97,50,98,95,104,113,120,0] /* s_:a2b_hqx\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([108,101,110,32,62,61,32,48,0] /* len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8689=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,104,113,120,0] /* binascii_a2b_hqx\00 */, "i8", ALLOC_NORMAL);
_Incomplete=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str15=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,109,112,108,101,116,101,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,0] /* String has incomplet */, "i8", ALLOC_NORMAL);
__str16=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
_doc_rlecode_hqx=allocate([66,105,110,104,101,120,32,82,76,69,45,99,111,100,101,32,98,105,110,97,114,121,32,100,97,116,97,0] /* Binhex RLE-code bina */, "i8", ALLOC_NORMAL);
__str17=allocate([115,42,58,114,108,101,99,111,100,101,95,104,113,120,0] /* s_:rlecode_hqx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8803=allocate([98,105,110,97,115,99,105,105,95,114,108,101,99,111,100,101,95,104,113,120,0] /* binascii_rlecode_hqx */, "i8", ALLOC_NORMAL);
_doc_b2a_hqx=allocate([69,110,99,111,100,101,32,46,104,113,120,32,100,97,116,97,0] /* Encode .hqx data\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([115,42,58,98,50,97,95,104,113,120,0] /* s_:b2a_hqx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8876=allocate([98,105,110,97,115,99,105,105,95,98,50,97,95,104,113,120,0] /* binascii_b2a_hqx\00 */, "i8", ALLOC_NORMAL);
_doc_rledecode_hqx=allocate([68,101,99,111,100,101,32,104,101,120,98,105,110,32,82,76,69,45,99,111,100,101,100,32,115,116,114,105,110,103,0] /* Decode hexbin RLE-co */, "i8", ALLOC_NORMAL);
__str19=allocate([115,42,58,114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* s_:rledecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([105,110,95,108,101,110,32,62,61,32,48,0] /* in_len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8949=allocate([98,105,110,97,115,99,105,105,95,114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* binascii_rledecode_h */, "i8", ALLOC_NORMAL);
__str21=allocate([79,114,112,104,97,110,101,100,32,82,76,69,32,99,111,100,101,32,97,116,32,115,116,97,114,116,0] /* Orphaned RLE code at */, "i8", ALLOC_NORMAL);
_doc_crc_hqx=allocate([40,100,97,116,97,44,32,111,108,100,99,114,99,41,32,45,62,32,110,101,119,99,114,99,46,32,67,111,109,112,117,116,101,32,104,113,120,32,67,82,67,32,105,110,99,114,101,109,101,110,116,97,108,108,121,0] /* (data, oldcrc) -> ne */, "i8", ALLOC_NORMAL);
__str22=allocate([115,42,105,58,99,114,99,95,104,113,120,0] /* s_i:crc_hqx\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
_doc_crc32=allocate([40,100,97,116,97,44,32,111,108,100,99,114,99,32,61,32,48,41,32,45,62,32,110,101,119,99,114,99,46,32,67,111,109,112,117,116,101,32,67,82,67,45,51,50,32,105,110,99,114,101,109,101,110,116,97,108,108,121,0] /* (data, oldcrc = 0) - */, "i8", ALLOC_NORMAL);
_crc_32_tab=allocate([0, 0, 0, 0, 1996959894, 0, 0, 0, -301047508, 0, 0, 0, -1727442502, 0, 0, 0, 124634137, 0, 0, 0, 1886057615, 0, 0, 0, -379345611, 0, 0, 0, -1637575261, 0, 0, 0, 249268274, 0, 0, 0, 2044508324, 0, 0, 0, -522852066, 0, 0, 0, -1747789432, 0, 0, 0, 162941995, 0, 0, 0, 2125561021, 0, 0, 0, -407360249, 0, 0, 0, -1866523247, 0, 0, 0, 498536548, 0, 0, 0, 1789927666, 0, 0, 0, -205950648, 0, 0, 0, -2067906082, 0, 0, 0, 450548861, 0, 0, 0, 1843258603, 0, 0, 0, -187386543, 0, 0, 0, -2083289657, 0, 0, 0, 325883990, 0, 0, 0, 1684777152, 0, 0, 0, -43845254, 0, 0, 0, -1973040660, 0, 0, 0, 335633487, 0, 0, 0, 1661365465, 0, 0, 0, -99664541, 0, 0, 0, -1928851979, 0, 0, 0, 997073096, 0, 0, 0, 1281953886, 0, 0, 0, -715111964, 0, 0, 0, -1570279054, 0, 0, 0, 1006888145, 0, 0, 0, 1258607687, 0, 0, 0, -770865667, 0, 0, 0, -1526024853, 0, 0, 0, 901097722, 0, 0, 0, 1119000684, 0, 0, 0, -608450090, 0, 0, 0, -1396901568, 0, 0, 0, 853044451, 0, 0, 0, 1172266101, 0, 0, 0, -589951537, 0, 0, 0, -1412350631, 0, 0, 0, 651767980, 0, 0, 0, 1373503546, 0, 0, 0, -925412992, 0, 0, 0, -1076862698, 0, 0, 0, 565507253, 0, 0, 0, 1454621731, 0, 0, 0, -809855591, 0, 0, 0, -1195530993, 0, 0, 0, 671266974, 0, 0, 0, 1594198024, 0, 0, 0, -972236366, 0, 0, 0, -1324619484, 0, 0, 0, 795835527, 0, 0, 0, 1483230225, 0, 0, 0, -1050600021, 0, 0, 0, -1234817731, 0, 0, 0, 1994146192, 0, 0, 0, 31158534, 0, 0, 0, -1731059524, 0, 0, 0, -271249366, 0, 0, 0, 1907459465, 0, 0, 0, 112637215, 0, 0, 0, -1614814043, 0, 0, 0, -390540237, 0, 0, 0, 2013776290, 0, 0, 0, 251722036, 0, 0, 0, -1777751922, 0, 0, 0, -519137256, 0, 0, 0, 2137656763, 0, 0, 0, 141376813, 0, 0, 0, -1855689577, 0, 0, 0, -429695999, 0, 0, 0, 1802195444, 0, 0, 0, 476864866, 0, 0, 0, -2056965928, 0, 0, 0, -228458418, 0, 0, 0, 1812370925, 0, 0, 0, 453092731, 0, 0, 0, -2113342271, 0, 0, 0, -183516073, 0, 0, 0, 1706088902, 0, 0, 0, 314042704, 0, 0, 0, -1950435094, 0, 0, 0, -54949764, 0, 0, 0, 1658658271, 0, 0, 0, 366619977, 0, 0, 0, -1932296973, 0, 0, 0, -69972891, 0, 0, 0, 1303535960, 0, 0, 0, 984961486, 0, 0, 0, -1547960204, 0, 0, 0, -725929758, 0, 0, 0, 1256170817, 0, 0, 0, 1037604311, 0, 0, 0, -1529756563, 0, 0, 0, -740887301, 0, 0, 0, 1131014506, 0, 0, 0, 879679996, 0, 0, 0, -1385723834, 0, 0, 0, -631195440, 0, 0, 0, 1141124467, 0, 0, 0, 855842277, 0, 0, 0, -1442165665, 0, 0, 0, -586318647, 0, 0, 0, 1342533948, 0, 0, 0, 654459306, 0, 0, 0, -1106571248, 0, 0, 0, -921952122, 0, 0, 0, 1466479909, 0, 0, 0, 544179635, 0, 0, 0, -1184443383, 0, 0, 0, -832445281, 0, 0, 0, 1591671054, 0, 0, 0, 702138776, 0, 0, 0, -1328506846, 0, 0, 0, -942167884, 0, 0, 0, 1504918807, 0, 0, 0, 783551873, 0, 0, 0, -1212326853, 0, 0, 0, -1061524307, 0, 0, 0, -306674912, 0, 0, 0, -1698712650, 0, 0, 0, 62317068, 0, 0, 0, 1957810842, 0, 0, 0, -355121351, 0, 0, 0, -1647151185, 0, 0, 0, 81470997, 0, 0, 0, 1943803523, 0, 0, 0, -480048366, 0, 0, 0, -1805370492, 0, 0, 0, 225274430, 0, 0, 0, 2053790376, 0, 0, 0, -468791541, 0, 0, 0, -1828061283, 0, 0, 0, 167816743, 0, 0, 0, 2097651377, 0, 0, 0, -267414716, 0, 0, 0, -2029476910, 0, 0, 0, 503444072, 0, 0, 0, 1762050814, 0, 0, 0, -144550051, 0, 0, 0, -2140837941, 0, 0, 0, 426522225, 0, 0, 0, 1852507879, 0, 0, 0, -19653770, 0, 0, 0, -1982649376, 0, 0, 0, 282753626, 0, 0, 0, 1742555852, 0, 0, 0, -105259153, 0, 0, 0, -1900089351, 0, 0, 0, 397917763, 0, 0, 0, 1622183637, 0, 0, 0, -690576408, 0, 0, 0, -1580100738, 0, 0, 0, 953729732, 0, 0, 0, 1340076626, 0, 0, 0, -776247311, 0, 0, 0, -1497606297, 0, 0, 0, 1068828381, 0, 0, 0, 1219638859, 0, 0, 0, -670225446, 0, 0, 0, -1358292148, 0, 0, 0, 906185462, 0, 0, 0, 1090812512, 0, 0, 0, -547295293, 0, 0, 0, -1469587627, 0, 0, 0, 829329135, 0, 0, 0, 1181335161, 0, 0, 0, -882789492, 0, 0, 0, -1134132454, 0, 0, 0, 628085408, 0, 0, 0, 1382605366, 0, 0, 0, -871598187, 0, 0, 0, -1156888829, 0, 0, 0, 570562233, 0, 0, 0, 1426400815, 0, 0, 0, -977650754, 0, 0, 0, -1296233688, 0, 0, 0, 733239954, 0, 0, 0, 1555261956, 0, 0, 0, -1026031705, 0, 0, 0, -1244606671, 0, 0, 0, 752459403, 0, 0, 0, 1541320221, 0, 0, 0, -1687895376, 0, 0, 0, -328994266, 0, 0, 0, 1969922972, 0, 0, 0, 40735498, 0, 0, 0, -1677130071, 0, 0, 0, -351390145, 0, 0, 0, 1913087877, 0, 0, 0, 83908371, 0, 0, 0, -1782625662, 0, 0, 0, -491226604, 0, 0, 0, 2075208622, 0, 0, 0, 213261112, 0, 0, 0, -1831694693, 0, 0, 0, -438977011, 0, 0, 0, 2094854071, 0, 0, 0, 198958881, 0, 0, 0, -2032938284, 0, 0, 0, -237706686, 0, 0, 0, 1759359992, 0, 0, 0, 534414190, 0, 0, 0, -2118248755, 0, 0, 0, -155638181, 0, 0, 0, 1873836001, 0, 0, 0, 414664567, 0, 0, 0, -2012718362, 0, 0, 0, -15766928, 0, 0, 0, 1711684554, 0, 0, 0, 285281116, 0, 0, 0, -1889165569, 0, 0, 0, -127750551, 0, 0, 0, 1634467795, 0, 0, 0, 376229701, 0, 0, 0, -1609899400, 0, 0, 0, -686959890, 0, 0, 0, 1308918612, 0, 0, 0, 956543938, 0, 0, 0, -1486412191, 0, 0, 0, -799009033, 0, 0, 0, 1231636301, 0, 0, 0, 1047427035, 0, 0, 0, -1362007478, 0, 0, 0, -640263460, 0, 0, 0, 1088359270, 0, 0, 0, 936918000, 0, 0, 0, -1447252397, 0, 0, 0, -558129467, 0, 0, 0, 1202900863, 0, 0, 0, 817233897, 0, 0, 0, -1111625188, 0, 0, 0, -893730166, 0, 0, 0, 1404277552, 0, 0, 0, 615818150, 0, 0, 0, -1160759803, 0, 0, 0, -841546093, 0, 0, 0, 1423857449, 0, 0, 0, 601450431, 0, 0, 0, -1285129682, 0, 0, 0, -1000256840, 0, 0, 0, 1567103746, 0, 0, 0, 711928724, 0, 0, 0, -1274298825, 0, 0, 0, -1022587231, 0, 0, 0, 1510334235, 0, 0, 0, 755167117, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str24=allocate([115,42,124,73,58,99,114,99,51,50,0] /* s_|I:crc32\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([115,42,58,98,50,97,95,104,101,120,0] /* s_:b2a_hex\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([97,114,103,108,101,110,32,62,61,32,48,0] /* arglen >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9264=allocate([98,105,110,97,115,99,105,105,95,104,101,120,108,105,102,121,0] /* binascii_hexlify\00 */, "i8", ALLOC_NORMAL);
_doc_hexlify=allocate([98,50,97,95,104,101,120,40,100,97,116,97,41,32,45,62,32,115,59,32,72,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,98,105,110,97,114,121,32,100,97,116,97,46,10,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,105,115,32,97,108,115,111,32,97,118,97,105,108,97,98,108,101,32,97,115,32,34,104,101,120,108,105,102,121,40,41,34,46,0] /* b2a_hex(data) -> s;  */, "i8", ALLOC_NORMAL);
__str27=allocate([115,42,58,97,50,98,95,104,101,120,0] /* s_:a2b_hex\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9339=allocate([98,105,110,97,115,99,105,105,95,117,110,104,101,120,108,105,102,121,0] /* binascii_unhexlify\0 */, "i8", ALLOC_NORMAL);
__str28=allocate([79,100,100,45,108,101,110,103,116,104,32,115,116,114,105,110,103,0] /* Odd-length string\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([78,111,110,45,104,101,120,97,100,101,99,105,109,97,108,32,100,105,103,105,116,32,102,111,117,110,100,0] /* Non-hexadecimal digi */, "i8", ALLOC_NORMAL);
_doc_unhexlify=allocate([97,50,98,95,104,101,120,40,104,101,120,115,116,114,41,32,45,62,32,115,59,32,66,105,110,97,114,121,32,100,97,116,97,32,111,102,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,10,10,104,101,120,115,116,114,32,109,117,115,116,32,99,111,110,116,97,105,110,32,97,110,32,101,118,101,110,32,110,117,109,98,101,114,32,111,102,32,104,101,120,32,100,105,103,105,116,115,32,40,117,112,112,101,114,32,111,114,32,108,111,119,101,114,32,99,97,115,101,41,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,105,115,32,97,108,115,111,32,97,118,97,105,108,97,98,108,101,32,97,115,32,34,117,110,104,101,120,108,105,102,121,40,41,34,0] /* a2b_hex(hexstr) -> s */, "i8", ALLOC_NORMAL);
_table_hex=allocate([-1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_doc_a2b_qp=allocate([68,101,99,111,100,101,32,97,32,115,116,114,105,110,103,32,111,102,32,113,112,45,101,110,99,111,100,101,100,32,100,97,116,97,0] /* Decode a string of q */, "i8", ALLOC_NORMAL);
__str30=allocate([115,42,124,105,0] /* s_|i\00 */, "i8", ALLOC_NORMAL);
_kwlist_9405=allocate(12, "i8*", ALLOC_NORMAL);
__str31=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([104,101,97,100,101,114,0] /* header\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0] /* 0123456789ABCDEF\00 */, "i8", ALLOC_NORMAL);
_doc_b2a_qp=allocate([98,50,97,95,113,112,40,100,97,116,97,44,32,113,117,111,116,101,116,97,98,115,61,48,44,32,105,115,116,101,120,116,61,49,44,32,104,101,97,100,101,114,61,48,41,32,45,62,32,115,59,32,10,32,69,110,99,111,100,101,32,97,32,115,116,114,105,110,103,32,117,115,105,110,103,32,113,117,111,116,101,100,45,112,114,105,110,116,97,98,108,101,32,101,110,99,111,100,105,110,103,46,32,10,10,79,110,32,101,110,99,111,100,105,110,103,44,32,119,104,101,110,32,105,115,116,101,120,116,32,105,115,32,115,101,116,44,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,32,101,110,99,111,100,101,100,44,32,97,110,100,32,119,104,105,116,101,32,10,115,112,97,99,101,32,97,116,32,101,110,100,32,111,102,32,108,105,110,101,115,32,105,115,46,32,32,87,104,101,110,32,105,115,116,101,120,116,32,105,115,32,110,111,116,32,115,101,116,44,32,92,114,32,97,110,100,32,92,110,32,40,67,82,47,76,70,41,32,97,114,101,32,10,98,111,116,104,32,101,110,99,111,100,101,100,46,32,32,87,104,101,110,32,113,117,111,116,101,116,97,98,115,32,105,115,32,115,101,116,44,32,115,112,97,99,101,32,97,110,100,32,116,97,98,115,32,97,114,101,32,101,110,99,111,100,101,100,46,0] /* b2a_qp(data, quoteta */, "i8", ALLOC_NORMAL);
__str34=allocate([115,42,124,105,105,105,0] /* s_|iii\00 */, "i8", ALLOC_NORMAL);
_kwlist_9526=allocate(20, "i8*", ALLOC_NORMAL);
__str35=allocate([113,117,111,116,101,116,97,98,115,0] /* quotetabs\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([105,115,116,101,120,116,0] /* istext\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([97,50,98,95,117,117,0] /* a2b_uu\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([98,50,97,95,117,117,0] /* b2a_uu\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([97,50,98,95,98,97,115,101,54,52,0] /* a2b_base64\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([98,50,97,95,98,97,115,101,54,52,0] /* b2a_base64\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([97,50,98,95,104,113,120,0] /* a2b_hqx\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([98,50,97,95,104,113,120,0] /* b2a_hqx\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([98,50,97,95,104,101,120,0] /* b2a_hex\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([97,50,98,95,104,101,120,0] /* a2b_hex\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([104,101,120,108,105,102,121,0] /* hexlify\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([117,110,104,101,120,108,105,102,121,0] /* unhexlify\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([114,108,101,99,111,100,101,95,104,113,120,0] /* rlecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* rledecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([99,114,99,95,104,113,120,0] /* crc_hqx\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([99,114,99,51,50,0] /* crc32\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([97,50,98,95,113,112,0] /* a2b_qp\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([98,50,97,95,113,112,0] /* b2a_qp\00 */, "i8", ALLOC_NORMAL);
_binascii_module_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_doc_binascii=allocate([67,111,110,118,101,114,115,105,111,110,32,98,101,116,119,101,101,110,32,98,105,110,97,114,121,32,100,97,116,97,32,97,110,100,32,65,83,67,73,73,0] /* Conversion between b */, "i8", ALLOC_NORMAL);
__str53=allocate([98,105,110,97,115,99,105,105,0] /* binascii\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([98,105,110,97,115,99,105,105,46,69,114,114,111,114,0] /* binascii.Error\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([98,105,110,97,115,99,105,105,46,73,110,99,111,109,112,108,101,116,101,0] /* binascii.Incomplete\ */, "i8", ALLOC_NORMAL);
__str58=allocate([73,110,99,111,109,112,108,101,116,101,0] /* Incomplete\00 */, "i8", ALLOC_NORMAL);
HEAP[_kwlist_9405]=__str31;
HEAP[_kwlist_9405+4]=__str32;
HEAP[_kwlist_9526]=__str31;
HEAP[_kwlist_9526+4]=__str35;
HEAP[_kwlist_9526+8]=__str36;
HEAP[_kwlist_9526+12]=__str32;
HEAP[_binascii_module_methods]=__str37;
HEAP[_binascii_module_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_binascii_module_methods+12]=_doc_a2b_uu;
HEAP[_binascii_module_methods+16]=__str38;
HEAP[_binascii_module_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_binascii_module_methods+28]=_doc_b2a_uu;
HEAP[_binascii_module_methods+32]=__str39;
HEAP[_binascii_module_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_binascii_module_methods+44]=_doc_a2b_base64;
HEAP[_binascii_module_methods+48]=__str40;
HEAP[_binascii_module_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_binascii_module_methods+60]=_doc_b2a_base64;
HEAP[_binascii_module_methods+64]=__str41;
HEAP[_binascii_module_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_binascii_module_methods+76]=_doc_a2b_hqx;
HEAP[_binascii_module_methods+80]=__str42;
HEAP[_binascii_module_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_binascii_module_methods+92]=_doc_b2a_hqx;
HEAP[_binascii_module_methods+96]=__str43;
HEAP[_binascii_module_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_binascii_module_methods+108]=_doc_hexlify;
HEAP[_binascii_module_methods+112]=__str44;
HEAP[_binascii_module_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_binascii_module_methods+124]=_doc_unhexlify;
HEAP[_binascii_module_methods+128]=__str45;
HEAP[_binascii_module_methods+132]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_binascii_module_methods+140]=_doc_hexlify;
HEAP[_binascii_module_methods+144]=__str46;
HEAP[_binascii_module_methods+148]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_binascii_module_methods+156]=_doc_unhexlify;
HEAP[_binascii_module_methods+160]=__str47;
HEAP[_binascii_module_methods+164]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_binascii_module_methods+172]=_doc_rlecode_hqx;
HEAP[_binascii_module_methods+176]=__str48;
HEAP[_binascii_module_methods+180]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_binascii_module_methods+188]=_doc_rledecode_hqx;
HEAP[_binascii_module_methods+192]=__str49;
HEAP[_binascii_module_methods+196]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_binascii_module_methods+204]=_doc_crc_hqx;
HEAP[_binascii_module_methods+208]=__str50;
HEAP[_binascii_module_methods+212]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_binascii_module_methods+220]=_doc_crc32;
HEAP[_binascii_module_methods+224]=__str51;
HEAP[_binascii_module_methods+228]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_binascii_module_methods+236]=_doc_a2b_qp;
HEAP[_binascii_module_methods+240]=__str52;
HEAP[_binascii_module_methods+244]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_binascii_module_methods+252]=_doc_b2a_qp;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

