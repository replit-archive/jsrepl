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



var $0___SIZE = 352; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 40; // %3
  
var $4___SIZE = 196; // %4
  
var $5___SIZE = 96; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 80; // %7
  
var $struct_ElementObject___SIZE = 24; // %struct.ElementObject
  
var $struct_ElementObjectExtra___SIZE = 32; // %struct.ElementObjectExtra
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCompilerFlags___SIZE = 4; // %struct.PyCompilerFlags
  
var $struct_PyExpat_CAPI___SIZE = 80; // %struct.PyExpat_CAPI
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySliceObject___SIZE = 20; // %struct.PySliceObject
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_TreeBuilderObject___SIZE = 52; // %struct.TreeBuilderObject
  
var $struct_XMLParserObject___SIZE = 52; // %struct.XMLParserObject
  
var $struct_XML_Encoding___SIZE = 1036; // %struct.XML_Encoding
  var $struct_XML_Encoding___FLATTENER = [0,1024,1028,1032];
var $struct_XML_Memory_Handling_Suite___SIZE = 12; // %struct.XML_Memory_Handling_Suite
  
var $struct_XML_ParserStruct___SIZE = 0; // %struct.XML_ParserStruct
  var $struct_XML_ParserStruct___FLATTENER = [];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _elementtree_deepcopy_obj;

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
var _elementpath_obj;
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
var _elementtree_iter_obj;
var __str24;
var __str25;
var _elementtree_itertext_obj;
var __str26;

var __str27;
var __str28;
var __str29;
var __str30;
var __str31;
var __str32;
var _elementtree_copyelement_obj;
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
var _element_methods;
var __str59;
var __str60;
var __str61;
var __str62;

var __str63;
var _element_as_sequence;
var _element_as_mapping;
var __str64;
var _Element_Type;
var __str65;
var _elementtree_parseerror_obj;
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
var _treebuilder_methods;
var __str79;
var _TreeBuilder_Type;
var __str80;
var __str81;
var __str82;
var __str83;
var __str84;
var __str85;
var __str86;
var _expat_capi;
var __str87;
var __str88;
var _kwlist_12207;
var __str89;
var __str90;
var __str91;
var _memory_handler_12204;
var __str92;
var __str93;
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
var __str104;
var __str105;
var __str106;
var __str107;
var _xmlparser_methods;
var __str108;
var __str109;
var __str110;
var __str111;
var _XMLParser_Type;
var __str112;
var __str113;
var __functions;

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































































  function _deepcopy($object, $memo) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr;
        var $memo_addr;
        var $retval;
        var $0;
        var $args;
        var $result;
        $object_addr=$object;
        $memo_addr=$memo;
        var $1=HEAP[_elementtree_deepcopy_obj]; //@line 142 "_elementtree.c"
        var $2=($1)==0; //@line 142 "_elementtree.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 142 "_elementtree.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_RuntimeError]; //@line 143 "_elementtree.c"
        _PyErr_SetString($3, __str); //@line 143 "_elementtree.c"
        $0=0; //@line 147 "_elementtree.c"
        __label__ = 7; break; //@line 147 "_elementtree.c"
      case 2: // $bb1
        var $4=_PyTuple_New(2); //@line 150 "_elementtree.c"
        $args=$4; //@line 150 "_elementtree.c"
        var $5=$args; //@line 151 "_elementtree.c"
        var $6=($5)==0; //@line 151 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 151 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 152 "_elementtree.c"
        __label__ = 7; break; //@line 152 "_elementtree.c"
      case 4: // $bb3
        var $7=$object_addr; //@line 154 "_elementtree.c"
        var $8=$7; //@line 154 "_elementtree.c"
        var $9=HEAP[$8]; //@line 154 "_elementtree.c"
        var $10=($9) + 1; //@line 154 "_elementtree.c"
        var $11=$object_addr; //@line 154 "_elementtree.c"
        var $12=$11; //@line 154 "_elementtree.c"
        HEAP[$12]=$10; //@line 154 "_elementtree.c"
        var $13=$args; //@line 154 "_elementtree.c"
        var $14=$13; //@line 154 "_elementtree.c"
        var $15=$14+12; //@line 154 "_elementtree.c"
        var $16=$15; //@line 154 "_elementtree.c"
        var $17=$object_addr; //@line 154 "_elementtree.c"
        HEAP[$16]=$17; //@line 154 "_elementtree.c"
        var $18=$memo_addr; //@line 155 "_elementtree.c"
        var $19=$18; //@line 155 "_elementtree.c"
        var $20=HEAP[$19]; //@line 155 "_elementtree.c"
        var $21=($20) + 1; //@line 155 "_elementtree.c"
        var $22=$memo_addr; //@line 155 "_elementtree.c"
        var $23=$22; //@line 155 "_elementtree.c"
        HEAP[$23]=$21; //@line 155 "_elementtree.c"
        var $24=$args; //@line 155 "_elementtree.c"
        var $25=$24; //@line 155 "_elementtree.c"
        var $26=$25+12; //@line 155 "_elementtree.c"
        var $27=$26+4; //@line 155 "_elementtree.c"
        var $28=$memo_addr; //@line 155 "_elementtree.c"
        HEAP[$27]=$28; //@line 155 "_elementtree.c"
        var $29=HEAP[_elementtree_deepcopy_obj]; //@line 157 "_elementtree.c"
        var $30=$args; //@line 157 "_elementtree.c"
        var $31=_PyObject_CallObject($29, $30); //@line 157 "_elementtree.c"
        $result=$31; //@line 157 "_elementtree.c"
        var $32=$args; //@line 159 "_elementtree.c"
        var $33=$32; //@line 159 "_elementtree.c"
        var $34=HEAP[$33]; //@line 159 "_elementtree.c"
        var $35=($34) - 1; //@line 159 "_elementtree.c"
        var $36=$args; //@line 159 "_elementtree.c"
        var $37=$36; //@line 159 "_elementtree.c"
        HEAP[$37]=$35; //@line 159 "_elementtree.c"
        var $38=$args; //@line 159 "_elementtree.c"
        var $39=$38; //@line 159 "_elementtree.c"
        var $40=HEAP[$39]; //@line 159 "_elementtree.c"
        var $41=($40)==0; //@line 159 "_elementtree.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 159 "_elementtree.c"
      case 5: // $bb4
        var $42=$args; //@line 159 "_elementtree.c"
        var $43=$42+4; //@line 159 "_elementtree.c"
        var $44=HEAP[$43]; //@line 159 "_elementtree.c"
        var $45=$44+24; //@line 159 "_elementtree.c"
        var $46=HEAP[$45]; //@line 159 "_elementtree.c"
        var $47=$args; //@line 159 "_elementtree.c"
        FUNCTION_TABLE[$46]($47); //@line 159 "_elementtree.c"
        __label__ = 6; break; //@line 159 "_elementtree.c"
      case 6: // $bb5
        var $48=$result; //@line 161 "_elementtree.c"
        $0=$48; //@line 161 "_elementtree.c"
        __label__ = 7; break; //@line 161 "_elementtree.c"
      case 7: // $bb6
        var $49=$0; //@line 147 "_elementtree.c"
        $retval=$49; //@line 147 "_elementtree.c"
        var $retval7=$retval; //@line 147 "_elementtree.c"
        ;
        return $retval7; //@line 147 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _list_join($list) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr;
        var $retval;
        var $0;
        var $joiner;
        var $function;
        var $args;
        var $result;
        $list_addr=$list;
        var $1=$list_addr; //@line 174 "_elementtree.c"
        var $2=$1; //@line 174 "_elementtree.c"
        var $3=$2+8; //@line 174 "_elementtree.c"
        var $4=HEAP[$3]; //@line 174 "_elementtree.c"
        if ($4 == 0) {
          __label__ = 1; break;
        }
        else if ($4 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $5=$list_addr; //@line 176 "_elementtree.c"
        var $6=$5; //@line 176 "_elementtree.c"
        var $7=HEAP[$6]; //@line 176 "_elementtree.c"
        var $8=($7) - 1; //@line 176 "_elementtree.c"
        var $9=$list_addr; //@line 176 "_elementtree.c"
        var $10=$9; //@line 176 "_elementtree.c"
        HEAP[$10]=$8; //@line 176 "_elementtree.c"
        var $11=$list_addr; //@line 176 "_elementtree.c"
        var $12=$11; //@line 176 "_elementtree.c"
        var $13=HEAP[$12]; //@line 176 "_elementtree.c"
        var $14=($13)==0; //@line 176 "_elementtree.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 176 "_elementtree.c"
      case 2: // $bb1
        var $15=$list_addr; //@line 176 "_elementtree.c"
        var $16=$15+4; //@line 176 "_elementtree.c"
        var $17=HEAP[$16]; //@line 176 "_elementtree.c"
        var $18=$17+24; //@line 176 "_elementtree.c"
        var $19=HEAP[$18]; //@line 176 "_elementtree.c"
        var $20=$list_addr; //@line 176 "_elementtree.c"
        FUNCTION_TABLE[$19]($20); //@line 176 "_elementtree.c"
        __label__ = 3; break; //@line 176 "_elementtree.c"
      case 3: // $bb2
        var $21=_PyString_FromString(__str1); //@line 177 "_elementtree.c"
        $0=$21; //@line 177 "_elementtree.c"
        __label__ = 22; break; //@line 177 "_elementtree.c"
      case 4: // $bb3
        var $22=$list_addr; //@line 179 "_elementtree.c"
        var $23=$22; //@line 179 "_elementtree.c"
        var $24=$23+12; //@line 179 "_elementtree.c"
        var $25=HEAP[$24]; //@line 179 "_elementtree.c"
        var $26=$25; //@line 179 "_elementtree.c"
        var $27=HEAP[$26]; //@line 179 "_elementtree.c"
        $result=$27; //@line 179 "_elementtree.c"
        var $28=$result; //@line 180 "_elementtree.c"
        var $29=$28; //@line 180 "_elementtree.c"
        var $30=HEAP[$29]; //@line 180 "_elementtree.c"
        var $31=($30) + 1; //@line 180 "_elementtree.c"
        var $32=$result; //@line 180 "_elementtree.c"
        var $33=$32; //@line 180 "_elementtree.c"
        HEAP[$33]=$31; //@line 180 "_elementtree.c"
        var $34=$list_addr; //@line 181 "_elementtree.c"
        var $35=$34; //@line 181 "_elementtree.c"
        var $36=HEAP[$35]; //@line 181 "_elementtree.c"
        var $37=($36) - 1; //@line 181 "_elementtree.c"
        var $38=$list_addr; //@line 181 "_elementtree.c"
        var $39=$38; //@line 181 "_elementtree.c"
        HEAP[$39]=$37; //@line 181 "_elementtree.c"
        var $40=$list_addr; //@line 181 "_elementtree.c"
        var $41=$40; //@line 181 "_elementtree.c"
        var $42=HEAP[$41]; //@line 181 "_elementtree.c"
        var $43=($42)==0; //@line 181 "_elementtree.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 181 "_elementtree.c"
      case 5: // $bb4
        var $44=$list_addr; //@line 181 "_elementtree.c"
        var $45=$44+4; //@line 181 "_elementtree.c"
        var $46=HEAP[$45]; //@line 181 "_elementtree.c"
        var $47=$46+24; //@line 181 "_elementtree.c"
        var $48=HEAP[$47]; //@line 181 "_elementtree.c"
        var $49=$list_addr; //@line 181 "_elementtree.c"
        FUNCTION_TABLE[$48]($49); //@line 181 "_elementtree.c"
        __label__ = 6; break; //@line 181 "_elementtree.c"
      case 6: // $bb5
        var $50=$result; //@line 182 "_elementtree.c"
        $0=$50; //@line 182 "_elementtree.c"
        __label__ = 22; break; //@line 182 "_elementtree.c"
      case 7: // $bb6
        var $51=$list_addr; //@line 188 "_elementtree.c"
        var $52=$51; //@line 188 "_elementtree.c"
        var $53=$52+12; //@line 188 "_elementtree.c"
        var $54=HEAP[$53]; //@line 188 "_elementtree.c"
        var $55=$54; //@line 188 "_elementtree.c"
        var $56=HEAP[$55]; //@line 188 "_elementtree.c"
        var $57=_PySequence_GetSlice($56, 0, 0); //@line 188 "_elementtree.c"
        $joiner=$57; //@line 188 "_elementtree.c"
        var $58=$joiner; //@line 189 "_elementtree.c"
        var $59=($58)==0; //@line 189 "_elementtree.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 189 "_elementtree.c"
      case 8: // $bb7
        $0=0; //@line 190 "_elementtree.c"
        __label__ = 22; break; //@line 190 "_elementtree.c"
      case 9: // $bb8
        var $60=$joiner; //@line 192 "_elementtree.c"
        var $61=_PyObject_GetAttrString($60, __str2); //@line 192 "_elementtree.c"
        $function=$61; //@line 192 "_elementtree.c"
        var $62=$function; //@line 193 "_elementtree.c"
        var $63=($62)==0; //@line 193 "_elementtree.c"
        if ($63) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 193 "_elementtree.c"
      case 10: // $bb9
        var $64=$joiner; //@line 194 "_elementtree.c"
        var $65=$64; //@line 194 "_elementtree.c"
        var $66=HEAP[$65]; //@line 194 "_elementtree.c"
        var $67=($66) - 1; //@line 194 "_elementtree.c"
        var $68=$joiner; //@line 194 "_elementtree.c"
        var $69=$68; //@line 194 "_elementtree.c"
        HEAP[$69]=$67; //@line 194 "_elementtree.c"
        var $70=$joiner; //@line 194 "_elementtree.c"
        var $71=$70; //@line 194 "_elementtree.c"
        var $72=HEAP[$71]; //@line 194 "_elementtree.c"
        var $73=($72)==0; //@line 194 "_elementtree.c"
        if ($73) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 194 "_elementtree.c"
      case 11: // $bb10
        var $74=$joiner; //@line 194 "_elementtree.c"
        var $75=$74+4; //@line 194 "_elementtree.c"
        var $76=HEAP[$75]; //@line 194 "_elementtree.c"
        var $77=$76+24; //@line 194 "_elementtree.c"
        var $78=HEAP[$77]; //@line 194 "_elementtree.c"
        var $79=$joiner; //@line 194 "_elementtree.c"
        FUNCTION_TABLE[$78]($79); //@line 194 "_elementtree.c"
        __label__ = 12; break; //@line 194 "_elementtree.c"
      case 12: // $bb11
        $0=0; //@line 195 "_elementtree.c"
        __label__ = 22; break; //@line 195 "_elementtree.c"
      case 13: // $bb12
        var $80=_PyTuple_New(1); //@line 198 "_elementtree.c"
        $args=$80; //@line 198 "_elementtree.c"
        var $81=$args; //@line 199 "_elementtree.c"
        var $82=($81)==0; //@line 199 "_elementtree.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 199 "_elementtree.c"
      case 14: // $bb13
        $0=0; //@line 200 "_elementtree.c"
        __label__ = 22; break; //@line 200 "_elementtree.c"
      case 15: // $bb14
        var $83=$args; //@line 202 "_elementtree.c"
        var $84=$83; //@line 202 "_elementtree.c"
        var $85=$84+12; //@line 202 "_elementtree.c"
        var $86=$85; //@line 202 "_elementtree.c"
        var $87=$list_addr; //@line 202 "_elementtree.c"
        HEAP[$86]=$87; //@line 202 "_elementtree.c"
        var $88=$function; //@line 204 "_elementtree.c"
        var $89=$args; //@line 204 "_elementtree.c"
        var $90=_PyObject_CallObject($88, $89); //@line 204 "_elementtree.c"
        $result=$90; //@line 204 "_elementtree.c"
        var $91=$args; //@line 206 "_elementtree.c"
        var $92=$91; //@line 206 "_elementtree.c"
        var $93=HEAP[$92]; //@line 206 "_elementtree.c"
        var $94=($93) - 1; //@line 206 "_elementtree.c"
        var $95=$args; //@line 206 "_elementtree.c"
        var $96=$95; //@line 206 "_elementtree.c"
        HEAP[$96]=$94; //@line 206 "_elementtree.c"
        var $97=$args; //@line 206 "_elementtree.c"
        var $98=$97; //@line 206 "_elementtree.c"
        var $99=HEAP[$98]; //@line 206 "_elementtree.c"
        var $100=($99)==0; //@line 206 "_elementtree.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 206 "_elementtree.c"
      case 16: // $bb15
        var $101=$args; //@line 206 "_elementtree.c"
        var $102=$101+4; //@line 206 "_elementtree.c"
        var $103=HEAP[$102]; //@line 206 "_elementtree.c"
        var $104=$103+24; //@line 206 "_elementtree.c"
        var $105=HEAP[$104]; //@line 206 "_elementtree.c"
        var $106=$args; //@line 206 "_elementtree.c"
        FUNCTION_TABLE[$105]($106); //@line 206 "_elementtree.c"
        __label__ = 17; break; //@line 206 "_elementtree.c"
      case 17: // $bb16
        var $107=$function; //@line 207 "_elementtree.c"
        var $108=$107; //@line 207 "_elementtree.c"
        var $109=HEAP[$108]; //@line 207 "_elementtree.c"
        var $110=($109) - 1; //@line 207 "_elementtree.c"
        var $111=$function; //@line 207 "_elementtree.c"
        var $112=$111; //@line 207 "_elementtree.c"
        HEAP[$112]=$110; //@line 207 "_elementtree.c"
        var $113=$function; //@line 207 "_elementtree.c"
        var $114=$113; //@line 207 "_elementtree.c"
        var $115=HEAP[$114]; //@line 207 "_elementtree.c"
        var $116=($115)==0; //@line 207 "_elementtree.c"
        if ($116) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 207 "_elementtree.c"
      case 18: // $bb17
        var $117=$function; //@line 207 "_elementtree.c"
        var $118=$117+4; //@line 207 "_elementtree.c"
        var $119=HEAP[$118]; //@line 207 "_elementtree.c"
        var $120=$119+24; //@line 207 "_elementtree.c"
        var $121=HEAP[$120]; //@line 207 "_elementtree.c"
        var $122=$function; //@line 207 "_elementtree.c"
        FUNCTION_TABLE[$121]($122); //@line 207 "_elementtree.c"
        __label__ = 19; break; //@line 207 "_elementtree.c"
      case 19: // $bb18
        var $123=$joiner; //@line 208 "_elementtree.c"
        var $124=$123; //@line 208 "_elementtree.c"
        var $125=HEAP[$124]; //@line 208 "_elementtree.c"
        var $126=($125) - 1; //@line 208 "_elementtree.c"
        var $127=$joiner; //@line 208 "_elementtree.c"
        var $128=$127; //@line 208 "_elementtree.c"
        HEAP[$128]=$126; //@line 208 "_elementtree.c"
        var $129=$joiner; //@line 208 "_elementtree.c"
        var $130=$129; //@line 208 "_elementtree.c"
        var $131=HEAP[$130]; //@line 208 "_elementtree.c"
        var $132=($131)==0; //@line 208 "_elementtree.c"
        if ($132) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 208 "_elementtree.c"
      case 20: // $bb19
        var $133=$joiner; //@line 208 "_elementtree.c"
        var $134=$133+4; //@line 208 "_elementtree.c"
        var $135=HEAP[$134]; //@line 208 "_elementtree.c"
        var $136=$135+24; //@line 208 "_elementtree.c"
        var $137=HEAP[$136]; //@line 208 "_elementtree.c"
        var $138=$joiner; //@line 208 "_elementtree.c"
        FUNCTION_TABLE[$137]($138); //@line 208 "_elementtree.c"
        __label__ = 21; break; //@line 208 "_elementtree.c"
      case 21: // $bb20
        var $139=$result; //@line 210 "_elementtree.c"
        $0=$139; //@line 210 "_elementtree.c"
        __label__ = 22; break; //@line 210 "_elementtree.c"
      case 22: // $bb21
        var $140=$0; //@line 177 "_elementtree.c"
        $retval=$140; //@line 177 "_elementtree.c"
        var $retval22=$retval; //@line 177 "_elementtree.c"
        ;
        return $retval22; //@line 177 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_new_extra($self, $attrib) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $attrib_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $attrib_addr=$attrib;
        var $1=_PyObject_Malloc(32); //@line 264 "_elementtree.c"
        var $2=$1; //@line 264 "_elementtree.c"
        var $3=$self_addr; //@line 264 "_elementtree.c"
        var $4=$3+20; //@line 264 "_elementtree.c"
        HEAP[$4]=$2; //@line 264 "_elementtree.c"
        var $5=$self_addr; //@line 265 "_elementtree.c"
        var $6=$5+20; //@line 265 "_elementtree.c"
        var $7=HEAP[$6]; //@line 265 "_elementtree.c"
        var $8=($7)==0; //@line 265 "_elementtree.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 265 "_elementtree.c"
      case 1: // $bb
        $0=-1; //@line 266 "_elementtree.c"
        __label__ = 5; break; //@line 266 "_elementtree.c"
      case 2: // $bb1
        var $9=$attrib_addr; //@line 268 "_elementtree.c"
        var $10=($9)==0; //@line 268 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 268 "_elementtree.c"
      case 3: // $bb2
        $attrib_addr=__Py_NoneStruct; //@line 269 "_elementtree.c"
        __label__ = 4; break; //@line 269 "_elementtree.c"
      case 4: // $bb3
        var $11=$attrib_addr; //@line 271 "_elementtree.c"
        var $12=$11; //@line 271 "_elementtree.c"
        var $13=HEAP[$12]; //@line 271 "_elementtree.c"
        var $14=($13) + 1; //@line 271 "_elementtree.c"
        var $15=$attrib_addr; //@line 271 "_elementtree.c"
        var $16=$15; //@line 271 "_elementtree.c"
        HEAP[$16]=$14; //@line 271 "_elementtree.c"
        var $17=$self_addr; //@line 272 "_elementtree.c"
        var $18=$17+20; //@line 272 "_elementtree.c"
        var $19=HEAP[$18]; //@line 272 "_elementtree.c"
        var $20=$19; //@line 272 "_elementtree.c"
        var $21=$attrib_addr; //@line 272 "_elementtree.c"
        HEAP[$20]=$21; //@line 272 "_elementtree.c"
        var $22=$self_addr; //@line 274 "_elementtree.c"
        var $23=$22+20; //@line 274 "_elementtree.c"
        var $24=HEAP[$23]; //@line 274 "_elementtree.c"
        var $25=$24+4; //@line 274 "_elementtree.c"
        HEAP[$25]=0; //@line 274 "_elementtree.c"
        var $26=$self_addr; //@line 275 "_elementtree.c"
        var $27=$26+20; //@line 275 "_elementtree.c"
        var $28=HEAP[$27]; //@line 275 "_elementtree.c"
        var $29=$28+8; //@line 275 "_elementtree.c"
        HEAP[$29]=4; //@line 275 "_elementtree.c"
        var $30=$self_addr; //@line 276 "_elementtree.c"
        var $31=$30+20; //@line 276 "_elementtree.c"
        var $32=HEAP[$31]; //@line 276 "_elementtree.c"
        var $33=$self_addr; //@line 276 "_elementtree.c"
        var $34=$33+20; //@line 276 "_elementtree.c"
        var $35=HEAP[$34]; //@line 276 "_elementtree.c"
        var $36=$35+16; //@line 276 "_elementtree.c"
        var $37=$36; //@line 276 "_elementtree.c"
        var $38=$32+12; //@line 276 "_elementtree.c"
        HEAP[$38]=$37; //@line 276 "_elementtree.c"
        $0=0; //@line 278 "_elementtree.c"
        __label__ = 5; break; //@line 278 "_elementtree.c"
      case 5: // $bb4
        var $39=$0; //@line 266 "_elementtree.c"
        $retval=$39; //@line 266 "_elementtree.c"
        var $retval5=$retval; //@line 266 "_elementtree.c"
        ;
        return $retval5; //@line 266 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_dealloc_extra($self) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $i;
        $self_addr=$self;
        var $0=$self_addr; //@line 286 "_elementtree.c"
        var $1=$0+20; //@line 286 "_elementtree.c"
        var $2=HEAP[$1]; //@line 286 "_elementtree.c"
        var $3=$2; //@line 286 "_elementtree.c"
        var $4=HEAP[$3]; //@line 286 "_elementtree.c"
        var $5=$4; //@line 286 "_elementtree.c"
        var $6=HEAP[$5]; //@line 286 "_elementtree.c"
        var $7=($6) - 1; //@line 286 "_elementtree.c"
        var $8=$4; //@line 286 "_elementtree.c"
        HEAP[$8]=$7; //@line 286 "_elementtree.c"
        var $9=$4; //@line 286 "_elementtree.c"
        var $10=HEAP[$9]; //@line 286 "_elementtree.c"
        var $11=($10)==0; //@line 286 "_elementtree.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 286 "_elementtree.c"
      case 1: // $bb
        var $12=$self_addr; //@line 286 "_elementtree.c"
        var $13=$12+20; //@line 286 "_elementtree.c"
        var $14=HEAP[$13]; //@line 286 "_elementtree.c"
        var $15=$14; //@line 286 "_elementtree.c"
        var $16=HEAP[$15]; //@line 286 "_elementtree.c"
        var $17=$16+4; //@line 286 "_elementtree.c"
        var $18=HEAP[$17]; //@line 286 "_elementtree.c"
        var $19=$18+24; //@line 286 "_elementtree.c"
        var $20=HEAP[$19]; //@line 286 "_elementtree.c"
        var $21=$self_addr; //@line 286 "_elementtree.c"
        var $22=$21+20; //@line 286 "_elementtree.c"
        var $23=HEAP[$22]; //@line 286 "_elementtree.c"
        var $24=$23; //@line 286 "_elementtree.c"
        var $25=HEAP[$24]; //@line 286 "_elementtree.c"
        FUNCTION_TABLE[$20]($25); //@line 286 "_elementtree.c"
        __label__ = 2; break; //@line 286 "_elementtree.c"
      case 2: // $bb1
        $i=0; //@line 288 "_elementtree.c"
        var $26=$self_addr; //@line 288 "_elementtree.c"
        var $27=$26+20; //@line 288 "_elementtree.c"
        var $28=HEAP[$27]; //@line 288 "_elementtree.c"
        var $29=$28+4; //@line 288 "_elementtree.c"
        var $30=HEAP[$29]; //@line 288 "_elementtree.c"
        var $31=$i; //@line 288 "_elementtree.c"
        var $32=($30) > ($31); //@line 288 "_elementtree.c"
        var $33=$self_addr; //@line 289 "_elementtree.c"
        var $34=$33+20; //@line 289 "_elementtree.c"
        var $35=HEAP[$34]; //@line 289 "_elementtree.c"
        var $36=$35+12; //@line 289 "_elementtree.c"
        var $37=HEAP[$36]; //@line 289 "_elementtree.c"
        if ($32) { __lastLabel__ = 2; __label__ = 3; break; } else { __lastLabel__ = 2; __label__ = 6; break; } //@line 288 "_elementtree.c"
      case 3: // $bb2
        var $38=__lastLabel__ == 5 ? $82 : ($37);
        var $39=$i; //@line 289 "_elementtree.c"
        var $40=$38+4*$39; //@line 289 "_elementtree.c"
        var $41=HEAP[$40]; //@line 289 "_elementtree.c"
        var $42=$41; //@line 289 "_elementtree.c"
        var $43=HEAP[$42]; //@line 289 "_elementtree.c"
        var $44=($43) - 1; //@line 289 "_elementtree.c"
        var $45=$41; //@line 289 "_elementtree.c"
        HEAP[$45]=$44; //@line 289 "_elementtree.c"
        var $46=$41; //@line 289 "_elementtree.c"
        var $47=HEAP[$46]; //@line 289 "_elementtree.c"
        var $48=($47)==0; //@line 289 "_elementtree.c"
        if ($48) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 289 "_elementtree.c"
      case 4: // $bb3
        var $49=$self_addr; //@line 289 "_elementtree.c"
        var $50=$49+20; //@line 289 "_elementtree.c"
        var $51=HEAP[$50]; //@line 289 "_elementtree.c"
        var $52=$51+12; //@line 289 "_elementtree.c"
        var $53=HEAP[$52]; //@line 289 "_elementtree.c"
        var $54=$i; //@line 289 "_elementtree.c"
        var $55=$53+4*$54; //@line 289 "_elementtree.c"
        var $56=HEAP[$55]; //@line 289 "_elementtree.c"
        var $57=$56+4; //@line 289 "_elementtree.c"
        var $58=HEAP[$57]; //@line 289 "_elementtree.c"
        var $59=$58+24; //@line 289 "_elementtree.c"
        var $60=HEAP[$59]; //@line 289 "_elementtree.c"
        var $61=$self_addr; //@line 289 "_elementtree.c"
        var $62=$61+20; //@line 289 "_elementtree.c"
        var $63=HEAP[$62]; //@line 289 "_elementtree.c"
        var $64=$63+12; //@line 289 "_elementtree.c"
        var $65=HEAP[$64]; //@line 289 "_elementtree.c"
        var $66=$i; //@line 289 "_elementtree.c"
        var $67=$65+4*$66; //@line 289 "_elementtree.c"
        var $68=HEAP[$67]; //@line 289 "_elementtree.c"
        FUNCTION_TABLE[$60]($68); //@line 289 "_elementtree.c"
        __label__ = 5; break; //@line 289 "_elementtree.c"
      case 5: // $bb4
        var $69=$i; //@line 288 "_elementtree.c"
        var $70=($69) + 1; //@line 288 "_elementtree.c"
        $i=$70; //@line 288 "_elementtree.c"
        var $71=$self_addr; //@line 288 "_elementtree.c"
        var $72=$71+20; //@line 288 "_elementtree.c"
        var $73=HEAP[$72]; //@line 288 "_elementtree.c"
        var $74=$73+4; //@line 288 "_elementtree.c"
        var $75=HEAP[$74]; //@line 288 "_elementtree.c"
        var $76=$i; //@line 288 "_elementtree.c"
        var $77=($75) > ($76); //@line 288 "_elementtree.c"
        var $78=$self_addr; //@line 289 "_elementtree.c"
        var $79=$78+20; //@line 289 "_elementtree.c"
        var $80=HEAP[$79]; //@line 289 "_elementtree.c"
        var $81=$80+12; //@line 289 "_elementtree.c"
        var $82=HEAP[$81]; //@line 289 "_elementtree.c"
        if ($77) { __lastLabel__ = 5; __label__ = 3; break; } else { __lastLabel__ = 5; __label__ = 6; break; } //@line 288 "_elementtree.c"
      case 6: // $bb6
        var $_lcssa=__lastLabel__ == 2 ? $37 : ($82);
        var $83=$self_addr; //@line 291 "_elementtree.c"
        var $84=$83+20; //@line 291 "_elementtree.c"
        var $85=HEAP[$84]; //@line 291 "_elementtree.c"
        var $86=$85+16; //@line 291 "_elementtree.c"
        var $87=$86; //@line 291 "_elementtree.c"
        var $88=($_lcssa)!=($87); //@line 291 "_elementtree.c"
        if ($88) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 291 "_elementtree.c"
      case 7: // $bb7
        var $89=$self_addr; //@line 292 "_elementtree.c"
        var $90=$89+20; //@line 292 "_elementtree.c"
        var $91=HEAP[$90]; //@line 292 "_elementtree.c"
        var $92=$91+12; //@line 292 "_elementtree.c"
        var $93=HEAP[$92]; //@line 292 "_elementtree.c"
        var $94=$93; //@line 292 "_elementtree.c"
        _PyObject_Free($94); //@line 292 "_elementtree.c"
        __label__ = 8; break; //@line 292 "_elementtree.c"
      case 8: // $bb8
        var $95=$self_addr; //@line 294 "_elementtree.c"
        var $96=$95+20; //@line 294 "_elementtree.c"
        var $97=HEAP[$96]; //@line 294 "_elementtree.c"
        var $98=$97; //@line 294 "_elementtree.c"
        _PyObject_Free($98); //@line 294 "_elementtree.c"
        ;
        return; //@line 295 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_new($tag, $attrib) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tag_addr;
        var $attrib_addr;
        var $retval;
        var $0;
        var $self;
        $tag_addr=$tag;
        $attrib_addr=$attrib;
        var $1=__PyObject_New(_Element_Type); //@line 302 "_elementtree.c"
        var $2=$1; //@line 302 "_elementtree.c"
        $self=$2; //@line 302 "_elementtree.c"
        var $3=$self; //@line 303 "_elementtree.c"
        var $4=($3)==0; //@line 303 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 303 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 304 "_elementtree.c"
        __label__ = 10; break; //@line 304 "_elementtree.c"
      case 2: // $bb1
        var $5=$attrib_addr; //@line 307 "_elementtree.c"
        var $6=$5+4; //@line 307 "_elementtree.c"
        var $7=HEAP[$6]; //@line 307 "_elementtree.c"
        var $8=($7)==(_PyDict_Type); //@line 307 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 307 "_elementtree.c"
      case 3: // $bb2
        var $9=$attrib_addr; //@line 307 "_elementtree.c"
        var $10=_PyDict_Size($9); //@line 307 "_elementtree.c"
        var $11=($10)==0; //@line 307 "_elementtree.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 307 "_elementtree.c"
      case 4: // $bb3
        $attrib_addr=__Py_NoneStruct; //@line 308 "_elementtree.c"
        __label__ = 5; break; //@line 308 "_elementtree.c"
      case 5: // $bb4
        var $12=$self; //@line 310 "_elementtree.c"
        var $13=$12+20; //@line 310 "_elementtree.c"
        HEAP[$13]=0; //@line 310 "_elementtree.c"
        var $14=$attrib_addr; //@line 312 "_elementtree.c"
        var $15=($14)!=(__Py_NoneStruct); //@line 312 "_elementtree.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 312 "_elementtree.c"
      case 6: // $bb5
        var $16=$self; //@line 314 "_elementtree.c"
        var $17=$attrib_addr; //@line 314 "_elementtree.c"
        var $18=_element_new_extra($16, $17); //@line 314 "_elementtree.c"
        var $19=($18) < 0; //@line 314 "_elementtree.c"
        var $20=$self; //@line 315 "_elementtree.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 314 "_elementtree.c"
      case 7: // $bb6
        var $21=$20; //@line 315 "_elementtree.c"
        _PyObject_Free($21); //@line 315 "_elementtree.c"
        $0=0; //@line 316 "_elementtree.c"
        __label__ = 10; break; //@line 316 "_elementtree.c"
      case 8: // $bb7
        var $22=$20+20; //@line 319 "_elementtree.c"
        var $23=HEAP[$22]; //@line 319 "_elementtree.c"
        var $24=$23+4; //@line 319 "_elementtree.c"
        HEAP[$24]=0; //@line 319 "_elementtree.c"
        var $25=$self; //@line 320 "_elementtree.c"
        var $26=$25+20; //@line 320 "_elementtree.c"
        var $27=HEAP[$26]; //@line 320 "_elementtree.c"
        var $28=$27+8; //@line 320 "_elementtree.c"
        HEAP[$28]=4; //@line 320 "_elementtree.c"
        var $29=$self; //@line 321 "_elementtree.c"
        var $30=$29+20; //@line 321 "_elementtree.c"
        var $31=HEAP[$30]; //@line 321 "_elementtree.c"
        var $32=$self; //@line 321 "_elementtree.c"
        var $33=$32+20; //@line 321 "_elementtree.c"
        var $34=HEAP[$33]; //@line 321 "_elementtree.c"
        var $35=$34+16; //@line 321 "_elementtree.c"
        var $36=$35; //@line 321 "_elementtree.c"
        var $37=$31+12; //@line 321 "_elementtree.c"
        HEAP[$37]=$36; //@line 321 "_elementtree.c"
        __label__ = 9; break; //@line 321 "_elementtree.c"
      case 9: // $bb8
        var $38=$tag_addr; //@line 325 "_elementtree.c"
        var $39=$38; //@line 325 "_elementtree.c"
        var $40=HEAP[$39]; //@line 325 "_elementtree.c"
        var $41=($40) + 1; //@line 325 "_elementtree.c"
        var $42=$tag_addr; //@line 325 "_elementtree.c"
        var $43=$42; //@line 325 "_elementtree.c"
        HEAP[$43]=$41; //@line 325 "_elementtree.c"
        var $44=$self; //@line 326 "_elementtree.c"
        var $45=$44+8; //@line 326 "_elementtree.c"
        var $46=$tag_addr; //@line 326 "_elementtree.c"
        HEAP[$45]=$46; //@line 326 "_elementtree.c"
        var $47=HEAP[__Py_NoneStruct]; //@line 328 "_elementtree.c"
        var $48=($47) + 1; //@line 328 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$48; //@line 328 "_elementtree.c"
        var $49=$self; //@line 329 "_elementtree.c"
        var $50=$49+12; //@line 329 "_elementtree.c"
        HEAP[$50]=__Py_NoneStruct; //@line 329 "_elementtree.c"
        var $51=HEAP[__Py_NoneStruct]; //@line 331 "_elementtree.c"
        var $52=($51) + 1; //@line 331 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$52; //@line 331 "_elementtree.c"
        var $53=$self; //@line 332 "_elementtree.c"
        var $54=$53+16; //@line 332 "_elementtree.c"
        HEAP[$54]=__Py_NoneStruct; //@line 332 "_elementtree.c"
        var $55=$self; //@line 336 "_elementtree.c"
        var $56=$55; //@line 336 "_elementtree.c"
        $0=$56; //@line 336 "_elementtree.c"
        __label__ = 10; break; //@line 336 "_elementtree.c"
      case 10: // $bb9
        var $57=$0; //@line 304 "_elementtree.c"
        $retval=$57; //@line 304 "_elementtree.c"
        var $retval10=$retval; //@line 304 "_elementtree.c"
        ;
        return $retval10; //@line 304 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_resize($self, $extra) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $extra_addr;
        var $retval;
        var $0;
        var $iftmp_10;
        var $iftmp_9;
        var $size;
        var $children;
        $self_addr=$self;
        $extra_addr=$extra;
        var $1=$self_addr; //@line 348 "_elementtree.c"
        var $2=$1+20; //@line 348 "_elementtree.c"
        var $3=HEAP[$2]; //@line 348 "_elementtree.c"
        var $4=($3)==0; //@line 348 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 348 "_elementtree.c"
      case 1: // $bb
        var $5=$self_addr; //@line 349 "_elementtree.c"
        var $6=_element_new_extra($5, 0); //@line 349 "_elementtree.c"
        __label__ = 2; break; //@line 349 "_elementtree.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 351 "_elementtree.c"
        var $8=$7+20; //@line 351 "_elementtree.c"
        var $9=HEAP[$8]; //@line 351 "_elementtree.c"
        var $10=$9+4; //@line 351 "_elementtree.c"
        var $11=HEAP[$10]; //@line 351 "_elementtree.c"
        var $12=$extra_addr; //@line 351 "_elementtree.c"
        var $13=($12) + ($11); //@line 351 "_elementtree.c"
        $size=$13; //@line 351 "_elementtree.c"
        var $14=$self_addr; //@line 353 "_elementtree.c"
        var $15=$14+20; //@line 353 "_elementtree.c"
        var $16=HEAP[$15]; //@line 353 "_elementtree.c"
        var $17=$16+8; //@line 353 "_elementtree.c"
        var $18=HEAP[$17]; //@line 353 "_elementtree.c"
        var $19=$size; //@line 353 "_elementtree.c"
        var $20=($18) < ($19); //@line 353 "_elementtree.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 353 "_elementtree.c"
      case 3: // $bb2
        var $21=$size; //@line 355 "_elementtree.c"
        var $22=($21) >> 3; //@line 355 "_elementtree.c"
        var $23=$size; //@line 355 "_elementtree.c"
        var $24=($23) <= 8; //@line 355 "_elementtree.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 355 "_elementtree.c"
      case 4: // $bb3
        $iftmp_9=3; //@line 355 "_elementtree.c"
        __label__ = 6; break; //@line 355 "_elementtree.c"
      case 5: // $bb4
        $iftmp_9=6; //@line 355 "_elementtree.c"
        __label__ = 6; break; //@line 355 "_elementtree.c"
      case 6: // $bb5
        var $25=$iftmp_9; //@line 355 "_elementtree.c"
        var $26=$size; //@line 355 "_elementtree.c"
        var $27=($25) + ($22); //@line 355 "_elementtree.c"
        var $28=($27) + ($26); //@line 355 "_elementtree.c"
        $size=$28; //@line 355 "_elementtree.c"
        var $29=($28)!=0; //@line 361 "_elementtree.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 361 "_elementtree.c"
      case 7: // $bb6
        var $30=$size; //@line 361 "_elementtree.c"
        $iftmp_10=$30; //@line 361 "_elementtree.c"
        __label__ = 9; break; //@line 361 "_elementtree.c"
      case 8: // $bb7
        $iftmp_10=1; //@line 361 "_elementtree.c"
        __label__ = 9; break; //@line 361 "_elementtree.c"
      case 9: // $bb8
        var $31=$iftmp_10; //@line 361 "_elementtree.c"
        $size=$31; //@line 361 "_elementtree.c"
        var $32=$self_addr; //@line 362 "_elementtree.c"
        var $33=$32+20; //@line 362 "_elementtree.c"
        var $34=HEAP[$33]; //@line 362 "_elementtree.c"
        var $35=$34+12; //@line 362 "_elementtree.c"
        var $36=HEAP[$35]; //@line 362 "_elementtree.c"
        var $37=$self_addr; //@line 362 "_elementtree.c"
        var $38=$37+20; //@line 362 "_elementtree.c"
        var $39=HEAP[$38]; //@line 362 "_elementtree.c"
        var $40=$39+16; //@line 362 "_elementtree.c"
        var $41=$40; //@line 362 "_elementtree.c"
        var $42=($36)!=($41); //@line 362 "_elementtree.c"
        var $43=$size; //@line 367 "_elementtree.c"
        var $44=($43) * 4; //@line 367 "_elementtree.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 362 "_elementtree.c"
      case 10: // $bb9
        var $45=$self_addr; //@line 367 "_elementtree.c"
        var $46=$45+20; //@line 367 "_elementtree.c"
        var $47=HEAP[$46]; //@line 367 "_elementtree.c"
        var $48=$47+12; //@line 367 "_elementtree.c"
        var $49=HEAP[$48]; //@line 367 "_elementtree.c"
        var $50=$49; //@line 367 "_elementtree.c"
        var $51=_PyObject_Realloc($50, $44); //@line 367 "_elementtree.c"
        var $52=$51; //@line 367 "_elementtree.c"
        $children=$52; //@line 367 "_elementtree.c"
        var $53=$children; //@line 369 "_elementtree.c"
        var $54=($53)==0; //@line 369 "_elementtree.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 369 "_elementtree.c"
      case 11: // $bb11
        var $55=_PyObject_Malloc($44); //@line 372 "_elementtree.c"
        var $56=$55; //@line 372 "_elementtree.c"
        $children=$56; //@line 372 "_elementtree.c"
        var $57=$children; //@line 373 "_elementtree.c"
        var $58=($57)==0; //@line 373 "_elementtree.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 373 "_elementtree.c"
      case 12: // $bb12
        var $59=$self_addr; //@line 376 "_elementtree.c"
        var $60=$59+20; //@line 376 "_elementtree.c"
        var $61=HEAP[$60]; //@line 376 "_elementtree.c"
        var $62=$61+4; //@line 376 "_elementtree.c"
        var $63=HEAP[$62]; //@line 376 "_elementtree.c"
        var $64=($63) * 4; //@line 376 "_elementtree.c"
        var $65=$self_addr; //@line 376 "_elementtree.c"
        var $66=$65+20; //@line 376 "_elementtree.c"
        var $67=HEAP[$66]; //@line 376 "_elementtree.c"
        var $68=$67+12; //@line 376 "_elementtree.c"
        var $69=HEAP[$68]; //@line 376 "_elementtree.c"
        var $70=$children; //@line 376 "_elementtree.c"
        var $71=$70; //@line 376 "_elementtree.c"
        var $72=$69; //@line 376 "_elementtree.c"
        _llvm_memcpy_p0i8_p0i8_i32($71, $72, $64, 1, 0); //@line 376 "_elementtree.c"
        __label__ = 13; break; //@line 376 "_elementtree.c"
      case 13: // $bb13
        var $73=$self_addr; //@line 379 "_elementtree.c"
        var $74=$73+20; //@line 379 "_elementtree.c"
        var $75=HEAP[$74]; //@line 379 "_elementtree.c"
        var $76=$75+12; //@line 379 "_elementtree.c"
        var $77=$children; //@line 379 "_elementtree.c"
        HEAP[$76]=$77; //@line 379 "_elementtree.c"
        var $78=$self_addr; //@line 380 "_elementtree.c"
        var $79=$78+20; //@line 380 "_elementtree.c"
        var $80=HEAP[$79]; //@line 380 "_elementtree.c"
        var $81=$80+8; //@line 380 "_elementtree.c"
        var $82=$size; //@line 380 "_elementtree.c"
        HEAP[$81]=$82; //@line 380 "_elementtree.c"
        __label__ = 14; break; //@line 380 "_elementtree.c"
      case 14: // $bb14
        $0=0; //@line 383 "_elementtree.c"
        __label__ = 16; break; //@line 383 "_elementtree.c"
      case 15: // $nomemory
        var $83=_PyErr_NoMemory(); //@line 386 "_elementtree.c"
        $0=-1; //@line 387 "_elementtree.c"
        __label__ = 16; break; //@line 387 "_elementtree.c"
      case 16: // $bb15
        var $84=$0; //@line 383 "_elementtree.c"
        $retval=$84; //@line 383 "_elementtree.c"
        var $retval16=$retval; //@line 383 "_elementtree.c"
        ;
        return $retval16; //@line 383 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_add_subelement($self, $element) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $element_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $element_addr=$element;
        var $1=$self_addr; //@line 395 "_elementtree.c"
        var $2=_element_resize($1, 1); //@line 395 "_elementtree.c"
        var $3=($2) < 0; //@line 395 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 395 "_elementtree.c"
      case 1: // $bb
        $0=-1; //@line 396 "_elementtree.c"
        __label__ = 3; break; //@line 396 "_elementtree.c"
      case 2: // $bb1
        var $4=$element_addr; //@line 398 "_elementtree.c"
        var $5=$4; //@line 398 "_elementtree.c"
        var $6=HEAP[$5]; //@line 398 "_elementtree.c"
        var $7=($6) + 1; //@line 398 "_elementtree.c"
        var $8=$element_addr; //@line 398 "_elementtree.c"
        var $9=$8; //@line 398 "_elementtree.c"
        HEAP[$9]=$7; //@line 398 "_elementtree.c"
        var $10=$self_addr; //@line 399 "_elementtree.c"
        var $11=$10+20; //@line 399 "_elementtree.c"
        var $12=HEAP[$11]; //@line 399 "_elementtree.c"
        var $13=$12+12; //@line 399 "_elementtree.c"
        var $14=HEAP[$13]; //@line 399 "_elementtree.c"
        var $15=$self_addr; //@line 399 "_elementtree.c"
        var $16=$15+20; //@line 399 "_elementtree.c"
        var $17=HEAP[$16]; //@line 399 "_elementtree.c"
        var $18=$17+4; //@line 399 "_elementtree.c"
        var $19=HEAP[$18]; //@line 399 "_elementtree.c"
        var $20=$14+4*$19; //@line 399 "_elementtree.c"
        var $21=$element_addr; //@line 399 "_elementtree.c"
        HEAP[$20]=$21; //@line 399 "_elementtree.c"
        var $22=$self_addr; //@line 401 "_elementtree.c"
        var $23=$22+20; //@line 401 "_elementtree.c"
        var $24=HEAP[$23]; //@line 401 "_elementtree.c"
        var $25=$24+4; //@line 401 "_elementtree.c"
        var $26=HEAP[$25]; //@line 401 "_elementtree.c"
        var $27=($26) + 1; //@line 401 "_elementtree.c"
        var $28=$24+4; //@line 401 "_elementtree.c"
        HEAP[$28]=$27; //@line 401 "_elementtree.c"
        $0=0; //@line 403 "_elementtree.c"
        __label__ = 3; break; //@line 403 "_elementtree.c"
      case 3: // $bb2
        var $29=$0; //@line 396 "_elementtree.c"
        $retval=$29; //@line 396 "_elementtree.c"
        var $retval3=$retval; //@line 396 "_elementtree.c"
        ;
        return $retval3; //@line 396 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_attrib($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        var $1=$self_addr; //@line 412 "_elementtree.c"
        var $2=$1+20; //@line 412 "_elementtree.c"
        var $3=HEAP[$2]; //@line 412 "_elementtree.c"
        var $4=$3; //@line 412 "_elementtree.c"
        var $5=HEAP[$4]; //@line 412 "_elementtree.c"
        $res=$5; //@line 412 "_elementtree.c"
        var $6=$res; //@line 414 "_elementtree.c"
        var $7=($6)==(__Py_NoneStruct); //@line 414 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 414 "_elementtree.c"
      case 1: // $bb
        var $8=$res; //@line 415 "_elementtree.c"
        var $9=$8; //@line 415 "_elementtree.c"
        var $10=HEAP[$9]; //@line 415 "_elementtree.c"
        var $11=($10) - 1; //@line 415 "_elementtree.c"
        var $12=$res; //@line 415 "_elementtree.c"
        var $13=$12; //@line 415 "_elementtree.c"
        HEAP[$13]=$11; //@line 415 "_elementtree.c"
        var $14=$res; //@line 415 "_elementtree.c"
        var $15=$14; //@line 415 "_elementtree.c"
        var $16=HEAP[$15]; //@line 415 "_elementtree.c"
        var $17=($16)==0; //@line 415 "_elementtree.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 415 "_elementtree.c"
      case 2: // $bb1
        var $18=$res; //@line 415 "_elementtree.c"
        var $19=$18+4; //@line 415 "_elementtree.c"
        var $20=HEAP[$19]; //@line 415 "_elementtree.c"
        var $21=$20+24; //@line 415 "_elementtree.c"
        var $22=HEAP[$21]; //@line 415 "_elementtree.c"
        var $23=$res; //@line 415 "_elementtree.c"
        FUNCTION_TABLE[$22]($23); //@line 415 "_elementtree.c"
        __label__ = 3; break; //@line 415 "_elementtree.c"
      case 3: // $bb2
        var $24=_PyDict_New(); //@line 417 "_elementtree.c"
        $res=$24; //@line 417 "_elementtree.c"
        var $25=($24)==0; //@line 418 "_elementtree.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 418 "_elementtree.c"
      case 4: // $bb3
        $0=0; //@line 419 "_elementtree.c"
        __label__ = 7; break; //@line 419 "_elementtree.c"
      case 5: // $bb4
        var $26=$self_addr; //@line 420 "_elementtree.c"
        var $27=$26+20; //@line 420 "_elementtree.c"
        var $28=HEAP[$27]; //@line 420 "_elementtree.c"
        var $29=$28; //@line 420 "_elementtree.c"
        var $30=$res; //@line 420 "_elementtree.c"
        HEAP[$29]=$30; //@line 420 "_elementtree.c"
        __label__ = 6; break; //@line 420 "_elementtree.c"
      case 6: // $bb5
        var $31=$res; //@line 423 "_elementtree.c"
        $0=$31; //@line 423 "_elementtree.c"
        __label__ = 7; break; //@line 423 "_elementtree.c"
      case 7: // $bb6
        var $32=$0; //@line 419 "_elementtree.c"
        $retval=$32; //@line 419 "_elementtree.c"
        var $retval7=$retval; //@line 419 "_elementtree.c"
        ;
        return $retval7; //@line 419 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_text($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        var $1=$self_addr; //@line 431 "_elementtree.c"
        var $2=$1+12; //@line 431 "_elementtree.c"
        var $3=HEAP[$2]; //@line 431 "_elementtree.c"
        $res=$3; //@line 431 "_elementtree.c"
        var $4=$res; //@line 433 "_elementtree.c"
        var $5=($4); //@line 433 "_elementtree.c"
        var $6=($5) & 1; //@line 433 "_elementtree.c"
        var $7=((($6)) & 255); //@line 433 "_elementtree.c"
        var $toBool=($7)!=0; //@line 433 "_elementtree.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 433 "_elementtree.c"
      case 1: // $bb
        var $8=$res; //@line 434 "_elementtree.c"
        var $9=($8); //@line 434 "_elementtree.c"
        var $10=($9) & -2; //@line 434 "_elementtree.c"
        var $11=($10); //@line 434 "_elementtree.c"
        $res=$11; //@line 434 "_elementtree.c"
        var $12=$res; //@line 435 "_elementtree.c"
        var $13=$12+4; //@line 435 "_elementtree.c"
        var $14=HEAP[$13]; //@line 435 "_elementtree.c"
        var $15=($14)==(_PyList_Type); //@line 435 "_elementtree.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 435 "_elementtree.c"
      case 2: // $bb1
        var $16=$res; //@line 436 "_elementtree.c"
        var $17=_list_join($16); //@line 436 "_elementtree.c"
        $res=$17; //@line 436 "_elementtree.c"
        var $18=$res; //@line 437 "_elementtree.c"
        var $19=($18)==0; //@line 437 "_elementtree.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 437 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 438 "_elementtree.c"
        __label__ = 6; break; //@line 438 "_elementtree.c"
      case 4: // $bb3
        var $20=$self_addr; //@line 439 "_elementtree.c"
        var $21=$20+12; //@line 439 "_elementtree.c"
        var $22=$res; //@line 439 "_elementtree.c"
        HEAP[$21]=$22; //@line 439 "_elementtree.c"
        __label__ = 5; break; //@line 439 "_elementtree.c"
      case 5: // $bb4
        var $23=$res; //@line 443 "_elementtree.c"
        $0=$23; //@line 443 "_elementtree.c"
        __label__ = 6; break; //@line 443 "_elementtree.c"
      case 6: // $bb5
        var $24=$0; //@line 438 "_elementtree.c"
        $retval=$24; //@line 438 "_elementtree.c"
        var $retval6=$retval; //@line 438 "_elementtree.c"
        ;
        return $retval6; //@line 438 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_tail($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        var $1=$self_addr; //@line 451 "_elementtree.c"
        var $2=$1+16; //@line 451 "_elementtree.c"
        var $3=HEAP[$2]; //@line 451 "_elementtree.c"
        $res=$3; //@line 451 "_elementtree.c"
        var $4=$res; //@line 453 "_elementtree.c"
        var $5=($4); //@line 453 "_elementtree.c"
        var $6=($5) & 1; //@line 453 "_elementtree.c"
        var $7=((($6)) & 255); //@line 453 "_elementtree.c"
        var $toBool=($7)!=0; //@line 453 "_elementtree.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 453 "_elementtree.c"
      case 1: // $bb
        var $8=$res; //@line 454 "_elementtree.c"
        var $9=($8); //@line 454 "_elementtree.c"
        var $10=($9) & -2; //@line 454 "_elementtree.c"
        var $11=($10); //@line 454 "_elementtree.c"
        $res=$11; //@line 454 "_elementtree.c"
        var $12=$res; //@line 455 "_elementtree.c"
        var $13=$12+4; //@line 455 "_elementtree.c"
        var $14=HEAP[$13]; //@line 455 "_elementtree.c"
        var $15=($14)==(_PyList_Type); //@line 455 "_elementtree.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 455 "_elementtree.c"
      case 2: // $bb1
        var $16=$res; //@line 456 "_elementtree.c"
        var $17=_list_join($16); //@line 456 "_elementtree.c"
        $res=$17; //@line 456 "_elementtree.c"
        var $18=$res; //@line 457 "_elementtree.c"
        var $19=($18)==0; //@line 457 "_elementtree.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 457 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 458 "_elementtree.c"
        __label__ = 6; break; //@line 458 "_elementtree.c"
      case 4: // $bb3
        var $20=$self_addr; //@line 459 "_elementtree.c"
        var $21=$20+16; //@line 459 "_elementtree.c"
        var $22=$res; //@line 459 "_elementtree.c"
        HEAP[$21]=$22; //@line 459 "_elementtree.c"
        __label__ = 5; break; //@line 459 "_elementtree.c"
      case 5: // $bb4
        var $23=$res; //@line 463 "_elementtree.c"
        $0=$23; //@line 463 "_elementtree.c"
        __label__ = 6; break; //@line 463 "_elementtree.c"
      case 6: // $bb5
        var $24=$0; //@line 458 "_elementtree.c"
        $retval=$24; //@line 458 "_elementtree.c"
        var $retval6=$retval; //@line 458 "_elementtree.c"
        ;
        return $retval6; //@line 458 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $iftmp_20;
        var $0;
        var $elem;
        var $tag=__stackBase__;
        var $attrib=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$attrib]=0; //@line 472 "_elementtree.c"
        var $1=$args_addr; //@line 473 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str3, allocate([$tag,0,0,0,_PyDict_Type,0,0,0,$attrib,0,0,0], ["%struct.PyObject**",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 473 "_elementtree.c"
        var $3=($2)==0; //@line 473 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 473 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 475 "_elementtree.c"
        __label__ = 15; break; //@line 475 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 477 "_elementtree.c"
        var $5=($4)!=0; //@line 477 "_elementtree.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 477 "_elementtree.c"
      case 3: // $bb2
        var $6=$kw_addr; //@line 477 "_elementtree.c"
        var $7=($6)!=0; //@line 477 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 477 "_elementtree.c"
      case 4: // $bb3
        var $_pr=HEAP[$attrib];
        var $8=($_pr)!=0; //@line 478 "_elementtree.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 478 "_elementtree.c"
      case 5: // $bb4
        var $9=HEAP[$attrib]; //@line 478 "_elementtree.c"
        var $10=_PyDict_Copy($9); //@line 478 "_elementtree.c"
        $iftmp_20=$10; //@line 478 "_elementtree.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 478 "_elementtree.c"
      case 6: // $bb5
        var $11=_PyDict_New(); //@line 478 "_elementtree.c"
        $iftmp_20=$11; //@line 478 "_elementtree.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 478 "_elementtree.c"
      case 7: // $bb6
        var $12=__lastLabel__ == 6 ? $11 : ($10);
        HEAP[$attrib]=$12; //@line 478 "_elementtree.c"
        var $13=($12)==0; //@line 479 "_elementtree.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 479 "_elementtree.c"
      case 8: // $bb7
        $0=0; //@line 480 "_elementtree.c"
        __label__ = 15; break; //@line 480 "_elementtree.c"
      case 9: // $bb8
        var $14=$kw_addr; //@line 481 "_elementtree.c"
        var $15=($14)!=0; //@line 481 "_elementtree.c"
        if ($15) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 481 "_elementtree.c"
      case 10: // $bb9
        var $16=HEAP[$attrib]; //@line 482 "_elementtree.c"
        var $17=$kw_addr; //@line 482 "_elementtree.c"
        var $18=_PyDict_Update($16, $17); //@line 482 "_elementtree.c"
        __label__ = 12; break; //@line 482 "_elementtree.c"
      case 11: // $bb11
        var $19=HEAP[__Py_NoneStruct]; //@line 484 "_elementtree.c"
        var $20=($19) + 1; //@line 484 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$20; //@line 484 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 485 "_elementtree.c"
        __label__ = 12; break; //@line 485 "_elementtree.c"
      case 12: // $bb12
        var $21=HEAP[$attrib]; //@line 488 "_elementtree.c"
        var $22=HEAP[$tag]; //@line 488 "_elementtree.c"
        var $23=_element_new($22, $21); //@line 488 "_elementtree.c"
        $elem=$23; //@line 488 "_elementtree.c"
        var $24=HEAP[$attrib]; //@line 490 "_elementtree.c"
        var $25=$24; //@line 490 "_elementtree.c"
        var $26=HEAP[$25]; //@line 490 "_elementtree.c"
        var $27=($26) - 1; //@line 490 "_elementtree.c"
        var $28=$24; //@line 490 "_elementtree.c"
        HEAP[$28]=$27; //@line 490 "_elementtree.c"
        var $29=$24; //@line 490 "_elementtree.c"
        var $30=HEAP[$29]; //@line 490 "_elementtree.c"
        var $31=($30)==0; //@line 490 "_elementtree.c"
        if ($31) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 490 "_elementtree.c"
      case 13: // $bb13
        var $32=HEAP[$attrib]; //@line 490 "_elementtree.c"
        var $33=$32+4; //@line 490 "_elementtree.c"
        var $34=HEAP[$33]; //@line 490 "_elementtree.c"
        var $35=$34+24; //@line 490 "_elementtree.c"
        var $36=HEAP[$35]; //@line 490 "_elementtree.c"
        var $37=HEAP[$attrib]; //@line 490 "_elementtree.c"
        FUNCTION_TABLE[$36]($37); //@line 490 "_elementtree.c"
        __label__ = 14; break; //@line 490 "_elementtree.c"
      case 14: // $bb14
        var $38=$elem; //@line 492 "_elementtree.c"
        $0=$38; //@line 492 "_elementtree.c"
        __label__ = 15; break; //@line 492 "_elementtree.c"
      case 15: // $bb15
        var $39=$0; //@line 475 "_elementtree.c"
        $retval=$39; //@line 475 "_elementtree.c"
        var $retval16=$retval; //@line 475 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 475 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _subelement($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $iftmp_31;
        var $0;
        var $elem;
        var $parent=__stackBase__;
        var $tag=__stackBase__+4;
        var $attrib=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$attrib]=0; //@line 502 "_elementtree.c"
        var $1=$args_addr; //@line 503 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str4, allocate([_Element_Type,0,0,0,$parent,0,0,0,$tag,0,0,0,_PyDict_Type,0,0,0,$attrib,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.ElementObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 503 "_elementtree.c"
        var $3=($2)==0; //@line 503 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 503 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 506 "_elementtree.c"
        __label__ = 19; break; //@line 506 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 508 "_elementtree.c"
        var $5=($4)!=0; //@line 508 "_elementtree.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 508 "_elementtree.c"
      case 3: // $bb2
        var $6=$kw_addr; //@line 508 "_elementtree.c"
        var $7=($6)!=0; //@line 508 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 508 "_elementtree.c"
      case 4: // $bb3
        var $_pr=HEAP[$attrib];
        var $8=($_pr)!=0; //@line 509 "_elementtree.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 509 "_elementtree.c"
      case 5: // $bb4
        var $9=HEAP[$attrib]; //@line 509 "_elementtree.c"
        var $10=_PyDict_Copy($9); //@line 509 "_elementtree.c"
        $iftmp_31=$10; //@line 509 "_elementtree.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 509 "_elementtree.c"
      case 6: // $bb5
        var $11=_PyDict_New(); //@line 509 "_elementtree.c"
        $iftmp_31=$11; //@line 509 "_elementtree.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 509 "_elementtree.c"
      case 7: // $bb6
        var $12=__lastLabel__ == 6 ? $11 : ($10);
        HEAP[$attrib]=$12; //@line 509 "_elementtree.c"
        var $13=($12)==0; //@line 510 "_elementtree.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 510 "_elementtree.c"
      case 8: // $bb7
        $0=0; //@line 511 "_elementtree.c"
        __label__ = 19; break; //@line 511 "_elementtree.c"
      case 9: // $bb8
        var $14=$kw_addr; //@line 512 "_elementtree.c"
        var $15=($14)!=0; //@line 512 "_elementtree.c"
        if ($15) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 512 "_elementtree.c"
      case 10: // $bb9
        var $16=HEAP[$attrib]; //@line 513 "_elementtree.c"
        var $17=$kw_addr; //@line 513 "_elementtree.c"
        var $18=_PyDict_Update($16, $17); //@line 513 "_elementtree.c"
        __label__ = 12; break; //@line 513 "_elementtree.c"
      case 11: // $bb11
        var $19=HEAP[__Py_NoneStruct]; //@line 515 "_elementtree.c"
        var $20=($19) + 1; //@line 515 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$20; //@line 515 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 516 "_elementtree.c"
        __label__ = 12; break; //@line 516 "_elementtree.c"
      case 12: // $bb12
        var $21=HEAP[$attrib]; //@line 519 "_elementtree.c"
        var $22=HEAP[$tag]; //@line 519 "_elementtree.c"
        var $23=_element_new($22, $21); //@line 519 "_elementtree.c"
        $elem=$23; //@line 519 "_elementtree.c"
        var $24=HEAP[$attrib]; //@line 521 "_elementtree.c"
        var $25=$24; //@line 521 "_elementtree.c"
        var $26=HEAP[$25]; //@line 521 "_elementtree.c"
        var $27=($26) - 1; //@line 521 "_elementtree.c"
        var $28=$24; //@line 521 "_elementtree.c"
        HEAP[$28]=$27; //@line 521 "_elementtree.c"
        var $29=$24; //@line 521 "_elementtree.c"
        var $30=HEAP[$29]; //@line 521 "_elementtree.c"
        var $31=($30)==0; //@line 521 "_elementtree.c"
        if ($31) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 521 "_elementtree.c"
      case 13: // $bb13
        var $32=HEAP[$attrib]; //@line 521 "_elementtree.c"
        var $33=$32+4; //@line 521 "_elementtree.c"
        var $34=HEAP[$33]; //@line 521 "_elementtree.c"
        var $35=$34+24; //@line 521 "_elementtree.c"
        var $36=HEAP[$35]; //@line 521 "_elementtree.c"
        var $37=HEAP[$attrib]; //@line 521 "_elementtree.c"
        FUNCTION_TABLE[$36]($37); //@line 521 "_elementtree.c"
        __label__ = 14; break; //@line 521 "_elementtree.c"
      case 14: // $bb14
        var $38=HEAP[$parent]; //@line 523 "_elementtree.c"
        var $39=$elem; //@line 523 "_elementtree.c"
        var $40=_element_add_subelement($38, $39); //@line 523 "_elementtree.c"
        var $41=($40) < 0; //@line 523 "_elementtree.c"
        var $42=$elem; //@line 524 "_elementtree.c"
        if ($41) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 523 "_elementtree.c"
      case 15: // $bb15
        var $43=$42; //@line 524 "_elementtree.c"
        var $44=HEAP[$43]; //@line 524 "_elementtree.c"
        var $45=($44) - 1; //@line 524 "_elementtree.c"
        var $46=$elem; //@line 524 "_elementtree.c"
        var $47=$46; //@line 524 "_elementtree.c"
        HEAP[$47]=$45; //@line 524 "_elementtree.c"
        var $48=$elem; //@line 524 "_elementtree.c"
        var $49=$48; //@line 524 "_elementtree.c"
        var $50=HEAP[$49]; //@line 524 "_elementtree.c"
        var $51=($50)==0; //@line 524 "_elementtree.c"
        if ($51) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 524 "_elementtree.c"
      case 16: // $bb16
        var $52=$elem; //@line 524 "_elementtree.c"
        var $53=$52+4; //@line 524 "_elementtree.c"
        var $54=HEAP[$53]; //@line 524 "_elementtree.c"
        var $55=$54+24; //@line 524 "_elementtree.c"
        var $56=HEAP[$55]; //@line 524 "_elementtree.c"
        var $57=$elem; //@line 524 "_elementtree.c"
        FUNCTION_TABLE[$56]($57); //@line 524 "_elementtree.c"
        __label__ = 17; break; //@line 524 "_elementtree.c"
      case 17: // $bb17
        $0=0; //@line 525 "_elementtree.c"
        __label__ = 19; break; //@line 525 "_elementtree.c"
      case 18: // $bb18
        $0=$42; //@line 528 "_elementtree.c"
        __label__ = 19; break; //@line 528 "_elementtree.c"
      case 19: // $bb19
        var $58=$0; //@line 506 "_elementtree.c"
        $retval=$58; //@line 506 "_elementtree.c"
        var $retval20=$retval; //@line 506 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 506 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 534 "_elementtree.c"
        var $1=$0+20; //@line 534 "_elementtree.c"
        var $2=HEAP[$1]; //@line 534 "_elementtree.c"
        var $3=($2)!=0; //@line 534 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 534 "_elementtree.c"
      case 1: // $bb
        var $4=$self_addr; //@line 535 "_elementtree.c"
        _element_dealloc_extra($4); //@line 535 "_elementtree.c"
        __label__ = 2; break; //@line 535 "_elementtree.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 538 "_elementtree.c"
        var $6=$5+8; //@line 538 "_elementtree.c"
        var $7=HEAP[$6]; //@line 538 "_elementtree.c"
        var $8=$7; //@line 538 "_elementtree.c"
        var $9=HEAP[$8]; //@line 538 "_elementtree.c"
        var $10=($9) - 1; //@line 538 "_elementtree.c"
        var $11=$7; //@line 538 "_elementtree.c"
        HEAP[$11]=$10; //@line 538 "_elementtree.c"
        var $12=$7; //@line 538 "_elementtree.c"
        var $13=HEAP[$12]; //@line 538 "_elementtree.c"
        var $14=($13)==0; //@line 538 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 538 "_elementtree.c"
      case 3: // $bb2
        var $15=$self_addr; //@line 538 "_elementtree.c"
        var $16=$15+8; //@line 538 "_elementtree.c"
        var $17=HEAP[$16]; //@line 538 "_elementtree.c"
        var $18=$17+4; //@line 538 "_elementtree.c"
        var $19=HEAP[$18]; //@line 538 "_elementtree.c"
        var $20=$19+24; //@line 538 "_elementtree.c"
        var $21=HEAP[$20]; //@line 538 "_elementtree.c"
        var $22=$self_addr; //@line 538 "_elementtree.c"
        var $23=$22+8; //@line 538 "_elementtree.c"
        var $24=HEAP[$23]; //@line 538 "_elementtree.c"
        FUNCTION_TABLE[$21]($24); //@line 538 "_elementtree.c"
        __label__ = 4; break; //@line 538 "_elementtree.c"
      case 4: // $bb3
        var $25=$self_addr; //@line 539 "_elementtree.c"
        var $26=$25+12; //@line 539 "_elementtree.c"
        var $27=HEAP[$26]; //@line 539 "_elementtree.c"
        var $28=($27); //@line 539 "_elementtree.c"
        var $29=($28) & -2; //@line 539 "_elementtree.c"
        var $30=($29); //@line 539 "_elementtree.c"
        var $31=$30; //@line 539 "_elementtree.c"
        var $32=HEAP[$31]; //@line 539 "_elementtree.c"
        var $33=($32) - 1; //@line 539 "_elementtree.c"
        var $34=$30; //@line 539 "_elementtree.c"
        HEAP[$34]=$33; //@line 539 "_elementtree.c"
        var $35=$30; //@line 539 "_elementtree.c"
        var $36=HEAP[$35]; //@line 539 "_elementtree.c"
        var $37=($36)==0; //@line 539 "_elementtree.c"
        if ($37) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 539 "_elementtree.c"
      case 5: // $bb4
        var $38=$self_addr; //@line 539 "_elementtree.c"
        var $39=$38+12; //@line 539 "_elementtree.c"
        var $40=HEAP[$39]; //@line 539 "_elementtree.c"
        var $41=($40); //@line 539 "_elementtree.c"
        var $42=($41) & -2; //@line 539 "_elementtree.c"
        var $43=($42); //@line 539 "_elementtree.c"
        var $44=$43+4; //@line 539 "_elementtree.c"
        var $45=HEAP[$44]; //@line 539 "_elementtree.c"
        var $46=$45+24; //@line 539 "_elementtree.c"
        var $47=HEAP[$46]; //@line 539 "_elementtree.c"
        var $48=$self_addr; //@line 539 "_elementtree.c"
        var $49=$48+12; //@line 539 "_elementtree.c"
        var $50=HEAP[$49]; //@line 539 "_elementtree.c"
        var $51=($50); //@line 539 "_elementtree.c"
        var $52=($51) & -2; //@line 539 "_elementtree.c"
        var $53=($52); //@line 539 "_elementtree.c"
        FUNCTION_TABLE[$47]($53); //@line 539 "_elementtree.c"
        __label__ = 6; break; //@line 539 "_elementtree.c"
      case 6: // $bb5
        var $54=$self_addr; //@line 540 "_elementtree.c"
        var $55=$54+16; //@line 540 "_elementtree.c"
        var $56=HEAP[$55]; //@line 540 "_elementtree.c"
        var $57=($56); //@line 540 "_elementtree.c"
        var $58=($57) & -2; //@line 540 "_elementtree.c"
        var $59=($58); //@line 540 "_elementtree.c"
        var $60=$59; //@line 540 "_elementtree.c"
        var $61=HEAP[$60]; //@line 540 "_elementtree.c"
        var $62=($61) - 1; //@line 540 "_elementtree.c"
        var $63=$59; //@line 540 "_elementtree.c"
        HEAP[$63]=$62; //@line 540 "_elementtree.c"
        var $64=$59; //@line 540 "_elementtree.c"
        var $65=HEAP[$64]; //@line 540 "_elementtree.c"
        var $66=($65)==0; //@line 540 "_elementtree.c"
        if ($66) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 540 "_elementtree.c"
      case 7: // $bb6
        var $67=$self_addr; //@line 540 "_elementtree.c"
        var $68=$67+16; //@line 540 "_elementtree.c"
        var $69=HEAP[$68]; //@line 540 "_elementtree.c"
        var $70=($69); //@line 540 "_elementtree.c"
        var $71=($70) & -2; //@line 540 "_elementtree.c"
        var $72=($71); //@line 540 "_elementtree.c"
        var $73=$72+4; //@line 540 "_elementtree.c"
        var $74=HEAP[$73]; //@line 540 "_elementtree.c"
        var $75=$74+24; //@line 540 "_elementtree.c"
        var $76=HEAP[$75]; //@line 540 "_elementtree.c"
        var $77=$self_addr; //@line 540 "_elementtree.c"
        var $78=$77+16; //@line 540 "_elementtree.c"
        var $79=HEAP[$78]; //@line 540 "_elementtree.c"
        var $80=($79); //@line 540 "_elementtree.c"
        var $81=($80) & -2; //@line 540 "_elementtree.c"
        var $82=($81); //@line 540 "_elementtree.c"
        FUNCTION_TABLE[$76]($82); //@line 540 "_elementtree.c"
        __label__ = 8; break; //@line 540 "_elementtree.c"
      case 8: // $bb7
        var $83=$self_addr; //@line 544 "_elementtree.c"
        var $84=$83; //@line 544 "_elementtree.c"
        _PyObject_Free($84); //@line 544 "_elementtree.c"
        ;
        return; //@line 545 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_append($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $element=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 554 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str5, allocate([_Element_Type,0,0,0,$element,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 554 "_elementtree.c"
        var $3=($2)==0; //@line 554 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 554 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 555 "_elementtree.c"
        __label__ = 5; break; //@line 555 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$element]; //@line 557 "_elementtree.c"
        var $5=$self_addr; //@line 557 "_elementtree.c"
        var $6=_element_add_subelement($5, $4); //@line 557 "_elementtree.c"
        var $7=($6) < 0; //@line 557 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 557 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 558 "_elementtree.c"
        __label__ = 5; break; //@line 558 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[__Py_NoneStruct]; //@line 560 "_elementtree.c"
        var $9=($8) + 1; //@line 560 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$9; //@line 560 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 560 "_elementtree.c"
        __label__ = 5; break; //@line 560 "_elementtree.c"
      case 5: // $bb4
        var $10=$0; //@line 555 "_elementtree.c"
        $retval=$10; //@line 555 "_elementtree.c"
        var $retval5=$retval; //@line 555 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 555 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_clear($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 566 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str6, allocate(1, "i32", ALLOC_STACK)); //@line 566 "_elementtree.c"
        var $3=($2)==0; //@line 566 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 566 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 567 "_elementtree.c"
        __label__ = 9; break; //@line 567 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 569 "_elementtree.c"
        var $5=$4+20; //@line 569 "_elementtree.c"
        var $6=HEAP[$5]; //@line 569 "_elementtree.c"
        var $7=($6)!=0; //@line 569 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 569 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 570 "_elementtree.c"
        _element_dealloc_extra($8); //@line 570 "_elementtree.c"
        var $9=$self_addr; //@line 571 "_elementtree.c"
        var $10=$9+20; //@line 571 "_elementtree.c"
        HEAP[$10]=0; //@line 571 "_elementtree.c"
        __label__ = 4; break; //@line 571 "_elementtree.c"
      case 4: // $bb3
        var $11=HEAP[__Py_NoneStruct]; //@line 574 "_elementtree.c"
        var $12=($11) + 1; //@line 574 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$12; //@line 574 "_elementtree.c"
        var $13=$self_addr; //@line 575 "_elementtree.c"
        var $14=$13+12; //@line 575 "_elementtree.c"
        var $15=HEAP[$14]; //@line 575 "_elementtree.c"
        var $16=($15); //@line 575 "_elementtree.c"
        var $17=($16) & -2; //@line 575 "_elementtree.c"
        var $18=($17); //@line 575 "_elementtree.c"
        var $19=$18; //@line 575 "_elementtree.c"
        var $20=HEAP[$19]; //@line 575 "_elementtree.c"
        var $21=($20) - 1; //@line 575 "_elementtree.c"
        var $22=$18; //@line 575 "_elementtree.c"
        HEAP[$22]=$21; //@line 575 "_elementtree.c"
        var $23=$18; //@line 575 "_elementtree.c"
        var $24=HEAP[$23]; //@line 575 "_elementtree.c"
        var $25=($24)==0; //@line 575 "_elementtree.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 575 "_elementtree.c"
      case 5: // $bb4
        var $26=$self_addr; //@line 575 "_elementtree.c"
        var $27=$26+12; //@line 575 "_elementtree.c"
        var $28=HEAP[$27]; //@line 575 "_elementtree.c"
        var $29=($28); //@line 575 "_elementtree.c"
        var $30=($29) & -2; //@line 575 "_elementtree.c"
        var $31=($30); //@line 575 "_elementtree.c"
        var $32=$31+4; //@line 575 "_elementtree.c"
        var $33=HEAP[$32]; //@line 575 "_elementtree.c"
        var $34=$33+24; //@line 575 "_elementtree.c"
        var $35=HEAP[$34]; //@line 575 "_elementtree.c"
        var $36=$self_addr; //@line 575 "_elementtree.c"
        var $37=$36+12; //@line 575 "_elementtree.c"
        var $38=HEAP[$37]; //@line 575 "_elementtree.c"
        var $39=($38); //@line 575 "_elementtree.c"
        var $40=($39) & -2; //@line 575 "_elementtree.c"
        var $41=($40); //@line 575 "_elementtree.c"
        FUNCTION_TABLE[$35]($41); //@line 575 "_elementtree.c"
        __label__ = 6; break; //@line 575 "_elementtree.c"
      case 6: // $bb5
        var $42=$self_addr; //@line 576 "_elementtree.c"
        var $43=$42+12; //@line 576 "_elementtree.c"
        HEAP[$43]=__Py_NoneStruct; //@line 576 "_elementtree.c"
        var $44=HEAP[__Py_NoneStruct]; //@line 578 "_elementtree.c"
        var $45=($44) + 1; //@line 578 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$45; //@line 578 "_elementtree.c"
        var $46=$self_addr; //@line 579 "_elementtree.c"
        var $47=$46+16; //@line 579 "_elementtree.c"
        var $48=HEAP[$47]; //@line 579 "_elementtree.c"
        var $49=($48); //@line 579 "_elementtree.c"
        var $50=($49) & -2; //@line 579 "_elementtree.c"
        var $51=($50); //@line 579 "_elementtree.c"
        var $52=$51; //@line 579 "_elementtree.c"
        var $53=HEAP[$52]; //@line 579 "_elementtree.c"
        var $54=($53) - 1; //@line 579 "_elementtree.c"
        var $55=$51; //@line 579 "_elementtree.c"
        HEAP[$55]=$54; //@line 579 "_elementtree.c"
        var $56=$51; //@line 579 "_elementtree.c"
        var $57=HEAP[$56]; //@line 579 "_elementtree.c"
        var $58=($57)==0; //@line 579 "_elementtree.c"
        if ($58) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 579 "_elementtree.c"
      case 7: // $bb6
        var $59=$self_addr; //@line 579 "_elementtree.c"
        var $60=$59+16; //@line 579 "_elementtree.c"
        var $61=HEAP[$60]; //@line 579 "_elementtree.c"
        var $62=($61); //@line 579 "_elementtree.c"
        var $63=($62) & -2; //@line 579 "_elementtree.c"
        var $64=($63); //@line 579 "_elementtree.c"
        var $65=$64+4; //@line 579 "_elementtree.c"
        var $66=HEAP[$65]; //@line 579 "_elementtree.c"
        var $67=$66+24; //@line 579 "_elementtree.c"
        var $68=HEAP[$67]; //@line 579 "_elementtree.c"
        var $69=$self_addr; //@line 579 "_elementtree.c"
        var $70=$69+16; //@line 579 "_elementtree.c"
        var $71=HEAP[$70]; //@line 579 "_elementtree.c"
        var $72=($71); //@line 579 "_elementtree.c"
        var $73=($72) & -2; //@line 579 "_elementtree.c"
        var $74=($73); //@line 579 "_elementtree.c"
        FUNCTION_TABLE[$68]($74); //@line 579 "_elementtree.c"
        __label__ = 8; break; //@line 579 "_elementtree.c"
      case 8: // $bb7
        var $75=$self_addr; //@line 580 "_elementtree.c"
        var $76=$75+16; //@line 580 "_elementtree.c"
        HEAP[$76]=__Py_NoneStruct; //@line 580 "_elementtree.c"
        var $77=HEAP[__Py_NoneStruct]; //@line 582 "_elementtree.c"
        var $78=($77) + 1; //@line 582 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$78; //@line 582 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 582 "_elementtree.c"
        __label__ = 9; break; //@line 582 "_elementtree.c"
      case 9: // $bb8
        var $79=$0; //@line 567 "_elementtree.c"
        $retval=$79; //@line 567 "_elementtree.c"
        var $retval9=$retval; //@line 567 "_elementtree.c"
        ;
        return $retval9; //@line 567 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_copy($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_43;
        var $0;
        var $i;
        var $element;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 591 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str7, allocate(1, "i32", ALLOC_STACK)); //@line 591 "_elementtree.c"
        var $3=($2)==0; //@line 591 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 591 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 592 "_elementtree.c"
        __label__ = 20; break; //@line 592 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 594 "_elementtree.c"
        var $5=$4+20; //@line 594 "_elementtree.c"
        var $6=HEAP[$5]; //@line 594 "_elementtree.c"
        var $7=($6)!=0; //@line 594 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 594 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 594 "_elementtree.c"
        var $9=$8+20; //@line 594 "_elementtree.c"
        var $10=HEAP[$9]; //@line 594 "_elementtree.c"
        var $11=$10; //@line 594 "_elementtree.c"
        var $12=HEAP[$11]; //@line 594 "_elementtree.c"
        $iftmp_43=$12; //@line 594 "_elementtree.c"
        __label__ = 5; break; //@line 594 "_elementtree.c"
      case 4: // $bb3
        $iftmp_43=__Py_NoneStruct; //@line 594 "_elementtree.c"
        __label__ = 5; break; //@line 594 "_elementtree.c"
      case 5: // $bb4
        var $13=$self_addr; //@line 594 "_elementtree.c"
        var $14=$13+8; //@line 594 "_elementtree.c"
        var $15=HEAP[$14]; //@line 594 "_elementtree.c"
        var $16=$iftmp_43; //@line 594 "_elementtree.c"
        var $17=_element_new($15, $16); //@line 594 "_elementtree.c"
        var $18=$17; //@line 594 "_elementtree.c"
        $element=$18; //@line 594 "_elementtree.c"
        var $19=($18)==0; //@line 597 "_elementtree.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 597 "_elementtree.c"
      case 6: // $bb5
        $0=0; //@line 598 "_elementtree.c"
        __label__ = 20; break; //@line 598 "_elementtree.c"
      case 7: // $bb6
        var $20=$element; //@line 600 "_elementtree.c"
        var $21=$20+12; //@line 600 "_elementtree.c"
        var $22=HEAP[$21]; //@line 600 "_elementtree.c"
        var $23=($22); //@line 600 "_elementtree.c"
        var $24=($23) & -2; //@line 600 "_elementtree.c"
        var $25=($24); //@line 600 "_elementtree.c"
        var $26=$25; //@line 600 "_elementtree.c"
        var $27=HEAP[$26]; //@line 600 "_elementtree.c"
        var $28=($27) - 1; //@line 600 "_elementtree.c"
        var $29=$25; //@line 600 "_elementtree.c"
        HEAP[$29]=$28; //@line 600 "_elementtree.c"
        var $30=$25; //@line 600 "_elementtree.c"
        var $31=HEAP[$30]; //@line 600 "_elementtree.c"
        var $32=($31)==0; //@line 600 "_elementtree.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 600 "_elementtree.c"
      case 8: // $bb7
        var $33=$element; //@line 600 "_elementtree.c"
        var $34=$33+12; //@line 600 "_elementtree.c"
        var $35=HEAP[$34]; //@line 600 "_elementtree.c"
        var $36=($35); //@line 600 "_elementtree.c"
        var $37=($36) & -2; //@line 600 "_elementtree.c"
        var $38=($37); //@line 600 "_elementtree.c"
        var $39=$38+4; //@line 600 "_elementtree.c"
        var $40=HEAP[$39]; //@line 600 "_elementtree.c"
        var $41=$40+24; //@line 600 "_elementtree.c"
        var $42=HEAP[$41]; //@line 600 "_elementtree.c"
        var $43=$element; //@line 600 "_elementtree.c"
        var $44=$43+12; //@line 600 "_elementtree.c"
        var $45=HEAP[$44]; //@line 600 "_elementtree.c"
        var $46=($45); //@line 600 "_elementtree.c"
        var $47=($46) & -2; //@line 600 "_elementtree.c"
        var $48=($47); //@line 600 "_elementtree.c"
        FUNCTION_TABLE[$42]($48); //@line 600 "_elementtree.c"
        __label__ = 9; break; //@line 600 "_elementtree.c"
      case 9: // $bb8
        var $49=$self_addr; //@line 601 "_elementtree.c"
        var $50=$49+12; //@line 601 "_elementtree.c"
        var $51=HEAP[$50]; //@line 601 "_elementtree.c"
        var $52=$element; //@line 601 "_elementtree.c"
        var $53=$52+12; //@line 601 "_elementtree.c"
        HEAP[$53]=$51; //@line 601 "_elementtree.c"
        var $54=$element; //@line 602 "_elementtree.c"
        var $55=$54+12; //@line 602 "_elementtree.c"
        var $56=HEAP[$55]; //@line 602 "_elementtree.c"
        var $57=($56); //@line 602 "_elementtree.c"
        var $58=($57) & -2; //@line 602 "_elementtree.c"
        var $59=($58); //@line 602 "_elementtree.c"
        var $60=$59; //@line 602 "_elementtree.c"
        var $61=HEAP[$60]; //@line 602 "_elementtree.c"
        var $62=($61) + 1; //@line 602 "_elementtree.c"
        var $63=$59; //@line 602 "_elementtree.c"
        HEAP[$63]=$62; //@line 602 "_elementtree.c"
        var $64=$element; //@line 604 "_elementtree.c"
        var $65=$64+16; //@line 604 "_elementtree.c"
        var $66=HEAP[$65]; //@line 604 "_elementtree.c"
        var $67=($66); //@line 604 "_elementtree.c"
        var $68=($67) & -2; //@line 604 "_elementtree.c"
        var $69=($68); //@line 604 "_elementtree.c"
        var $70=$69; //@line 604 "_elementtree.c"
        var $71=HEAP[$70]; //@line 604 "_elementtree.c"
        var $72=($71) - 1; //@line 604 "_elementtree.c"
        var $73=$69; //@line 604 "_elementtree.c"
        HEAP[$73]=$72; //@line 604 "_elementtree.c"
        var $74=$69; //@line 604 "_elementtree.c"
        var $75=HEAP[$74]; //@line 604 "_elementtree.c"
        var $76=($75)==0; //@line 604 "_elementtree.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 604 "_elementtree.c"
      case 10: // $bb9
        var $77=$element; //@line 604 "_elementtree.c"
        var $78=$77+16; //@line 604 "_elementtree.c"
        var $79=HEAP[$78]; //@line 604 "_elementtree.c"
        var $80=($79); //@line 604 "_elementtree.c"
        var $81=($80) & -2; //@line 604 "_elementtree.c"
        var $82=($81); //@line 604 "_elementtree.c"
        var $83=$82+4; //@line 604 "_elementtree.c"
        var $84=HEAP[$83]; //@line 604 "_elementtree.c"
        var $85=$84+24; //@line 604 "_elementtree.c"
        var $86=HEAP[$85]; //@line 604 "_elementtree.c"
        var $87=$element; //@line 604 "_elementtree.c"
        var $88=$87+16; //@line 604 "_elementtree.c"
        var $89=HEAP[$88]; //@line 604 "_elementtree.c"
        var $90=($89); //@line 604 "_elementtree.c"
        var $91=($90) & -2; //@line 604 "_elementtree.c"
        var $92=($91); //@line 604 "_elementtree.c"
        FUNCTION_TABLE[$86]($92); //@line 604 "_elementtree.c"
        __label__ = 11; break; //@line 604 "_elementtree.c"
      case 11: // $bb10
        var $93=$self_addr; //@line 605 "_elementtree.c"
        var $94=$93+16; //@line 605 "_elementtree.c"
        var $95=HEAP[$94]; //@line 605 "_elementtree.c"
        var $96=$element; //@line 605 "_elementtree.c"
        var $97=$96+16; //@line 605 "_elementtree.c"
        HEAP[$97]=$95; //@line 605 "_elementtree.c"
        var $98=$element; //@line 606 "_elementtree.c"
        var $99=$98+16; //@line 606 "_elementtree.c"
        var $100=HEAP[$99]; //@line 606 "_elementtree.c"
        var $101=($100); //@line 606 "_elementtree.c"
        var $102=($101) & -2; //@line 606 "_elementtree.c"
        var $103=($102); //@line 606 "_elementtree.c"
        var $104=$103; //@line 606 "_elementtree.c"
        var $105=HEAP[$104]; //@line 606 "_elementtree.c"
        var $106=($105) + 1; //@line 606 "_elementtree.c"
        var $107=$103; //@line 606 "_elementtree.c"
        HEAP[$107]=$106; //@line 606 "_elementtree.c"
        var $108=$self_addr; //@line 608 "_elementtree.c"
        var $109=$108+20; //@line 608 "_elementtree.c"
        var $110=HEAP[$109]; //@line 608 "_elementtree.c"
        var $111=($110)!=0; //@line 608 "_elementtree.c"
        if ($111) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 608 "_elementtree.c"
      case 12: // $bb11
        var $112=$self_addr; //@line 610 "_elementtree.c"
        var $113=$112+20; //@line 610 "_elementtree.c"
        var $114=HEAP[$113]; //@line 610 "_elementtree.c"
        var $115=$114+4; //@line 610 "_elementtree.c"
        var $116=HEAP[$115]; //@line 610 "_elementtree.c"
        var $117=$element; //@line 610 "_elementtree.c"
        var $118=_element_resize($117, $116); //@line 610 "_elementtree.c"
        var $119=($118) < 0; //@line 610 "_elementtree.c"
        if ($119) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 610 "_elementtree.c"
      case 13: // $bb12
        var $120=$element; //@line 611 "_elementtree.c"
        var $121=$120; //@line 611 "_elementtree.c"
        var $122=$121; //@line 611 "_elementtree.c"
        var $123=HEAP[$122]; //@line 611 "_elementtree.c"
        var $124=($123) - 1; //@line 611 "_elementtree.c"
        var $125=$121; //@line 611 "_elementtree.c"
        HEAP[$125]=$124; //@line 611 "_elementtree.c"
        var $126=$121; //@line 611 "_elementtree.c"
        var $127=HEAP[$126]; //@line 611 "_elementtree.c"
        var $128=($127)==0; //@line 611 "_elementtree.c"
        if ($128) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 611 "_elementtree.c"
      case 14: // $bb13
        var $129=$element; //@line 611 "_elementtree.c"
        var $130=$129; //@line 611 "_elementtree.c"
        var $131=$130+4; //@line 611 "_elementtree.c"
        var $132=HEAP[$131]; //@line 611 "_elementtree.c"
        var $133=$132+24; //@line 611 "_elementtree.c"
        var $134=HEAP[$133]; //@line 611 "_elementtree.c"
        var $135=$element; //@line 611 "_elementtree.c"
        var $136=$135; //@line 611 "_elementtree.c"
        FUNCTION_TABLE[$134]($136); //@line 611 "_elementtree.c"
        __label__ = 15; break; //@line 611 "_elementtree.c"
      case 15: // $bb14
        $0=0; //@line 612 "_elementtree.c"
        __label__ = 20; break; //@line 612 "_elementtree.c"
      case 16: // $bb15
        $i=0; //@line 615 "_elementtree.c"
        var $137=$self_addr; //@line 615 "_elementtree.c"
        var $138=$137+20; //@line 615 "_elementtree.c"
        var $139=HEAP[$138]; //@line 615 "_elementtree.c"
        var $140=$139+4; //@line 615 "_elementtree.c"
        var $141=HEAP[$140]; //@line 615 "_elementtree.c"
        var $142=$i; //@line 615 "_elementtree.c"
        var $143=($141) > ($142); //@line 615 "_elementtree.c"
        if ($143) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 615 "_elementtree.c"
      case 17: // $bb16
        var $144=$self_addr; //@line 616 "_elementtree.c"
        var $145=$144+20; //@line 616 "_elementtree.c"
        var $146=HEAP[$145]; //@line 616 "_elementtree.c"
        var $147=$146+12; //@line 616 "_elementtree.c"
        var $148=HEAP[$147]; //@line 616 "_elementtree.c"
        var $149=$i; //@line 616 "_elementtree.c"
        var $150=$148+4*$149; //@line 616 "_elementtree.c"
        var $151=HEAP[$150]; //@line 616 "_elementtree.c"
        var $152=$151; //@line 616 "_elementtree.c"
        var $153=HEAP[$152]; //@line 616 "_elementtree.c"
        var $154=($153) + 1; //@line 616 "_elementtree.c"
        var $155=$151; //@line 616 "_elementtree.c"
        HEAP[$155]=$154; //@line 616 "_elementtree.c"
        var $156=$element; //@line 617 "_elementtree.c"
        var $157=$156+20; //@line 617 "_elementtree.c"
        var $158=HEAP[$157]; //@line 617 "_elementtree.c"
        var $159=$158+12; //@line 617 "_elementtree.c"
        var $160=HEAP[$159]; //@line 617 "_elementtree.c"
        var $161=$self_addr; //@line 617 "_elementtree.c"
        var $162=$161+20; //@line 617 "_elementtree.c"
        var $163=HEAP[$162]; //@line 617 "_elementtree.c"
        var $164=$163+12; //@line 617 "_elementtree.c"
        var $165=HEAP[$164]; //@line 617 "_elementtree.c"
        var $166=$i; //@line 617 "_elementtree.c"
        var $167=$165+4*$166; //@line 617 "_elementtree.c"
        var $168=HEAP[$167]; //@line 617 "_elementtree.c"
        var $169=$i; //@line 617 "_elementtree.c"
        var $170=$160+4*$169; //@line 617 "_elementtree.c"
        HEAP[$170]=$168; //@line 617 "_elementtree.c"
        var $171=$i; //@line 615 "_elementtree.c"
        var $172=($171) + 1; //@line 615 "_elementtree.c"
        $i=$172; //@line 615 "_elementtree.c"
        var $173=$self_addr; //@line 615 "_elementtree.c"
        var $174=$173+20; //@line 615 "_elementtree.c"
        var $175=HEAP[$174]; //@line 615 "_elementtree.c"
        var $176=$175+4; //@line 615 "_elementtree.c"
        var $177=HEAP[$176]; //@line 615 "_elementtree.c"
        var $178=$i; //@line 615 "_elementtree.c"
        var $179=($177) > ($178); //@line 615 "_elementtree.c"
        if ($179) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 615 "_elementtree.c"
      case 18: // $bb18
        var $180=$element; //@line 620 "_elementtree.c"
        var $181=$180+20; //@line 620 "_elementtree.c"
        var $182=HEAP[$181]; //@line 620 "_elementtree.c"
        var $183=$self_addr; //@line 620 "_elementtree.c"
        var $184=$183+20; //@line 620 "_elementtree.c"
        var $185=HEAP[$184]; //@line 620 "_elementtree.c"
        var $186=$185+4; //@line 620 "_elementtree.c"
        var $187=HEAP[$186]; //@line 620 "_elementtree.c"
        var $188=$182+4; //@line 620 "_elementtree.c"
        HEAP[$188]=$187; //@line 620 "_elementtree.c"
        __label__ = 19; break; //@line 620 "_elementtree.c"
      case 19: // $bb19
        var $189=$element; //@line 624 "_elementtree.c"
        var $190=$189; //@line 624 "_elementtree.c"
        $0=$190; //@line 624 "_elementtree.c"
        __label__ = 20; break; //@line 624 "_elementtree.c"
      case 20: // $bb20
        var $191=$0; //@line 592 "_elementtree.c"
        $retval=$191; //@line 592 "_elementtree.c"
        var $retval21=$retval; //@line 592 "_elementtree.c"
        ;
        return $retval21; //@line 592 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_deepcopy($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i;
        var $element;
        var $tag;
        var $attrib;
        var $text;
        var $tail;
        var $id;
        var $memo=__stackBase__;
        var $child;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 639 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str8, allocate([$memo,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 639 "_elementtree.c"
        var $3=($2)==0; //@line 639 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 639 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 640 "_elementtree.c"
        __label__ = 38; break; //@line 640 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$memo]; //@line 642 "_elementtree.c"
        var $5=$self_addr; //@line 642 "_elementtree.c"
        var $6=$5+8; //@line 642 "_elementtree.c"
        var $7=HEAP[$6]; //@line 642 "_elementtree.c"
        var $8=_deepcopy($7, $4); //@line 642 "_elementtree.c"
        $tag=$8; //@line 642 "_elementtree.c"
        var $9=$tag; //@line 643 "_elementtree.c"
        var $10=($9)==0; //@line 643 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 643 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 644 "_elementtree.c"
        __label__ = 38; break; //@line 644 "_elementtree.c"
      case 4: // $bb3
        var $11=$self_addr; //@line 646 "_elementtree.c"
        var $12=$11+20; //@line 646 "_elementtree.c"
        var $13=HEAP[$12]; //@line 646 "_elementtree.c"
        var $14=($13)!=0; //@line 646 "_elementtree.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 646 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$memo]; //@line 647 "_elementtree.c"
        var $16=$self_addr; //@line 647 "_elementtree.c"
        var $17=$16+20; //@line 647 "_elementtree.c"
        var $18=HEAP[$17]; //@line 647 "_elementtree.c"
        var $19=$18; //@line 647 "_elementtree.c"
        var $20=HEAP[$19]; //@line 647 "_elementtree.c"
        var $21=_deepcopy($20, $15); //@line 647 "_elementtree.c"
        $attrib=$21; //@line 647 "_elementtree.c"
        var $22=$attrib; //@line 648 "_elementtree.c"
        var $23=($22)==0; //@line 648 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 648 "_elementtree.c"
      case 6: // $bb5
        var $24=$tag; //@line 649 "_elementtree.c"
        var $25=$24; //@line 649 "_elementtree.c"
        var $26=HEAP[$25]; //@line 649 "_elementtree.c"
        var $27=($26) - 1; //@line 649 "_elementtree.c"
        var $28=$tag; //@line 649 "_elementtree.c"
        var $29=$28; //@line 649 "_elementtree.c"
        HEAP[$29]=$27; //@line 649 "_elementtree.c"
        var $30=$tag; //@line 649 "_elementtree.c"
        var $31=$30; //@line 649 "_elementtree.c"
        var $32=HEAP[$31]; //@line 649 "_elementtree.c"
        var $33=($32)==0; //@line 649 "_elementtree.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 649 "_elementtree.c"
      case 7: // $bb6
        var $34=$tag; //@line 649 "_elementtree.c"
        var $35=$34+4; //@line 649 "_elementtree.c"
        var $36=HEAP[$35]; //@line 649 "_elementtree.c"
        var $37=$36+24; //@line 649 "_elementtree.c"
        var $38=HEAP[$37]; //@line 649 "_elementtree.c"
        var $39=$tag; //@line 649 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 649 "_elementtree.c"
        __label__ = 8; break; //@line 649 "_elementtree.c"
      case 8: // $bb7
        $0=0; //@line 650 "_elementtree.c"
        __label__ = 38; break; //@line 650 "_elementtree.c"
      case 9: // $bb9
        var $40=HEAP[__Py_NoneStruct]; //@line 653 "_elementtree.c"
        var $41=($40) + 1; //@line 653 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$41; //@line 653 "_elementtree.c"
        $attrib=__Py_NoneStruct; //@line 654 "_elementtree.c"
        __label__ = 10; break; //@line 654 "_elementtree.c"
      case 10: // $bb10
        var $42=$tag; //@line 657 "_elementtree.c"
        var $43=$attrib; //@line 657 "_elementtree.c"
        var $44=_element_new($42, $43); //@line 657 "_elementtree.c"
        var $45=$44; //@line 657 "_elementtree.c"
        $element=$45; //@line 657 "_elementtree.c"
        var $46=$tag; //@line 659 "_elementtree.c"
        var $47=$46; //@line 659 "_elementtree.c"
        var $48=HEAP[$47]; //@line 659 "_elementtree.c"
        var $49=($48) - 1; //@line 659 "_elementtree.c"
        var $50=$tag; //@line 659 "_elementtree.c"
        var $51=$50; //@line 659 "_elementtree.c"
        HEAP[$51]=$49; //@line 659 "_elementtree.c"
        var $52=$tag; //@line 659 "_elementtree.c"
        var $53=$52; //@line 659 "_elementtree.c"
        var $54=HEAP[$53]; //@line 659 "_elementtree.c"
        var $55=($54)==0; //@line 659 "_elementtree.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 659 "_elementtree.c"
      case 11: // $bb11
        var $56=$tag; //@line 659 "_elementtree.c"
        var $57=$56+4; //@line 659 "_elementtree.c"
        var $58=HEAP[$57]; //@line 659 "_elementtree.c"
        var $59=$58+24; //@line 659 "_elementtree.c"
        var $60=HEAP[$59]; //@line 659 "_elementtree.c"
        var $61=$tag; //@line 659 "_elementtree.c"
        FUNCTION_TABLE[$60]($61); //@line 659 "_elementtree.c"
        __label__ = 12; break; //@line 659 "_elementtree.c"
      case 12: // $bb12
        var $62=$attrib; //@line 660 "_elementtree.c"
        var $63=$62; //@line 660 "_elementtree.c"
        var $64=HEAP[$63]; //@line 660 "_elementtree.c"
        var $65=($64) - 1; //@line 660 "_elementtree.c"
        var $66=$attrib; //@line 660 "_elementtree.c"
        var $67=$66; //@line 660 "_elementtree.c"
        HEAP[$67]=$65; //@line 660 "_elementtree.c"
        var $68=$attrib; //@line 660 "_elementtree.c"
        var $69=$68; //@line 660 "_elementtree.c"
        var $70=HEAP[$69]; //@line 660 "_elementtree.c"
        var $71=($70)==0; //@line 660 "_elementtree.c"
        if ($71) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 660 "_elementtree.c"
      case 13: // $bb13
        var $72=$attrib; //@line 660 "_elementtree.c"
        var $73=$72+4; //@line 660 "_elementtree.c"
        var $74=HEAP[$73]; //@line 660 "_elementtree.c"
        var $75=$74+24; //@line 660 "_elementtree.c"
        var $76=HEAP[$75]; //@line 660 "_elementtree.c"
        var $77=$attrib; //@line 660 "_elementtree.c"
        FUNCTION_TABLE[$76]($77); //@line 660 "_elementtree.c"
        __label__ = 14; break; //@line 660 "_elementtree.c"
      case 14: // $bb14
        var $78=$element; //@line 662 "_elementtree.c"
        var $79=($78)==0; //@line 662 "_elementtree.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 662 "_elementtree.c"
      case 15: // $bb15
        $0=0; //@line 663 "_elementtree.c"
        __label__ = 38; break; //@line 663 "_elementtree.c"
      case 16: // $bb16
        var $80=HEAP[$memo]; //@line 665 "_elementtree.c"
        var $81=$self_addr; //@line 665 "_elementtree.c"
        var $82=$81+12; //@line 665 "_elementtree.c"
        var $83=HEAP[$82]; //@line 665 "_elementtree.c"
        var $84=($83); //@line 665 "_elementtree.c"
        var $85=($84) & -2; //@line 665 "_elementtree.c"
        var $86=($85); //@line 665 "_elementtree.c"
        var $87=_deepcopy($86, $80); //@line 665 "_elementtree.c"
        $text=$87; //@line 665 "_elementtree.c"
        var $88=$text; //@line 666 "_elementtree.c"
        var $89=($88)==0; //@line 666 "_elementtree.c"
        if ($89) { __label__ = 35; break; } else { __label__ = 17; break; } //@line 666 "_elementtree.c"
      case 17: // $bb17
        var $90=$element; //@line 668 "_elementtree.c"
        var $91=$90+12; //@line 668 "_elementtree.c"
        var $92=HEAP[$91]; //@line 668 "_elementtree.c"
        var $93=$92; //@line 668 "_elementtree.c"
        var $94=HEAP[$93]; //@line 668 "_elementtree.c"
        var $95=($94) - 1; //@line 668 "_elementtree.c"
        var $96=$92; //@line 668 "_elementtree.c"
        HEAP[$96]=$95; //@line 668 "_elementtree.c"
        var $97=$92; //@line 668 "_elementtree.c"
        var $98=HEAP[$97]; //@line 668 "_elementtree.c"
        var $99=($98)==0; //@line 668 "_elementtree.c"
        if ($99) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 668 "_elementtree.c"
      case 18: // $bb18
        var $100=$element; //@line 668 "_elementtree.c"
        var $101=$100+12; //@line 668 "_elementtree.c"
        var $102=HEAP[$101]; //@line 668 "_elementtree.c"
        var $103=$102+4; //@line 668 "_elementtree.c"
        var $104=HEAP[$103]; //@line 668 "_elementtree.c"
        var $105=$104+24; //@line 668 "_elementtree.c"
        var $106=HEAP[$105]; //@line 668 "_elementtree.c"
        var $107=$element; //@line 668 "_elementtree.c"
        var $108=$107+12; //@line 668 "_elementtree.c"
        var $109=HEAP[$108]; //@line 668 "_elementtree.c"
        FUNCTION_TABLE[$106]($109); //@line 668 "_elementtree.c"
        __label__ = 19; break; //@line 668 "_elementtree.c"
      case 19: // $bb19
        var $110=$text; //@line 669 "_elementtree.c"
        var $111=($110); //@line 669 "_elementtree.c"
        var $112=($111) & -2; //@line 669 "_elementtree.c"
        var $113=$self_addr; //@line 669 "_elementtree.c"
        var $114=$113+12; //@line 669 "_elementtree.c"
        var $115=HEAP[$114]; //@line 669 "_elementtree.c"
        var $116=($115); //@line 669 "_elementtree.c"
        var $117=($116) & 1; //@line 669 "_elementtree.c"
        var $118=($117) | ($112); //@line 669 "_elementtree.c"
        var $119=($118); //@line 669 "_elementtree.c"
        var $120=$element; //@line 669 "_elementtree.c"
        var $121=$120+12; //@line 669 "_elementtree.c"
        HEAP[$121]=$119; //@line 669 "_elementtree.c"
        var $122=HEAP[$memo]; //@line 671 "_elementtree.c"
        var $123=$self_addr; //@line 671 "_elementtree.c"
        var $124=$123+16; //@line 671 "_elementtree.c"
        var $125=HEAP[$124]; //@line 671 "_elementtree.c"
        var $126=($125); //@line 671 "_elementtree.c"
        var $127=($126) & -2; //@line 671 "_elementtree.c"
        var $128=($127); //@line 671 "_elementtree.c"
        var $129=_deepcopy($128, $122); //@line 671 "_elementtree.c"
        $tail=$129; //@line 671 "_elementtree.c"
        var $130=($129)==0; //@line 672 "_elementtree.c"
        if ($130) { __label__ = 35; break; } else { __label__ = 20; break; } //@line 672 "_elementtree.c"
      case 20: // $bb20
        var $131=$element; //@line 674 "_elementtree.c"
        var $132=$131+16; //@line 674 "_elementtree.c"
        var $133=HEAP[$132]; //@line 674 "_elementtree.c"
        var $134=$133; //@line 674 "_elementtree.c"
        var $135=HEAP[$134]; //@line 674 "_elementtree.c"
        var $136=($135) - 1; //@line 674 "_elementtree.c"
        var $137=$133; //@line 674 "_elementtree.c"
        HEAP[$137]=$136; //@line 674 "_elementtree.c"
        var $138=$133; //@line 674 "_elementtree.c"
        var $139=HEAP[$138]; //@line 674 "_elementtree.c"
        var $140=($139)==0; //@line 674 "_elementtree.c"
        if ($140) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 674 "_elementtree.c"
      case 21: // $bb21
        var $141=$element; //@line 674 "_elementtree.c"
        var $142=$141+16; //@line 674 "_elementtree.c"
        var $143=HEAP[$142]; //@line 674 "_elementtree.c"
        var $144=$143+4; //@line 674 "_elementtree.c"
        var $145=HEAP[$144]; //@line 674 "_elementtree.c"
        var $146=$145+24; //@line 674 "_elementtree.c"
        var $147=HEAP[$146]; //@line 674 "_elementtree.c"
        var $148=$element; //@line 674 "_elementtree.c"
        var $149=$148+16; //@line 674 "_elementtree.c"
        var $150=HEAP[$149]; //@line 674 "_elementtree.c"
        FUNCTION_TABLE[$147]($150); //@line 674 "_elementtree.c"
        __label__ = 22; break; //@line 674 "_elementtree.c"
      case 22: // $bb22
        var $151=$tail; //@line 675 "_elementtree.c"
        var $152=($151); //@line 675 "_elementtree.c"
        var $153=($152) & -2; //@line 675 "_elementtree.c"
        var $154=$self_addr; //@line 675 "_elementtree.c"
        var $155=$154+16; //@line 675 "_elementtree.c"
        var $156=HEAP[$155]; //@line 675 "_elementtree.c"
        var $157=($156); //@line 675 "_elementtree.c"
        var $158=($157) & 1; //@line 675 "_elementtree.c"
        var $159=($158) | ($153); //@line 675 "_elementtree.c"
        var $160=($159); //@line 675 "_elementtree.c"
        var $161=$element; //@line 675 "_elementtree.c"
        var $162=$161+16; //@line 675 "_elementtree.c"
        HEAP[$162]=$160; //@line 675 "_elementtree.c"
        var $163=$self_addr; //@line 677 "_elementtree.c"
        var $164=$163+20; //@line 677 "_elementtree.c"
        var $165=HEAP[$164]; //@line 677 "_elementtree.c"
        var $166=($165)!=0; //@line 677 "_elementtree.c"
        if ($166) { __label__ = 23; break; } else { __label__ = 30; break; } //@line 677 "_elementtree.c"
      case 23: // $bb23
        var $167=$self_addr; //@line 679 "_elementtree.c"
        var $168=$167+20; //@line 679 "_elementtree.c"
        var $169=HEAP[$168]; //@line 679 "_elementtree.c"
        var $170=$169+4; //@line 679 "_elementtree.c"
        var $171=HEAP[$170]; //@line 679 "_elementtree.c"
        var $172=$element; //@line 679 "_elementtree.c"
        var $173=_element_resize($172, $171); //@line 679 "_elementtree.c"
        var $174=($173) < 0; //@line 679 "_elementtree.c"
        if ($174) { __label__ = 35; break; } else { __label__ = 24; break; } //@line 679 "_elementtree.c"
      case 24: // $bb24
        $i=0; //@line 682 "_elementtree.c"
        __label__ = 28; break; //@line 682 "_elementtree.c"
      case 25: // $bb25
        var $175=HEAP[$memo]; //@line 683 "_elementtree.c"
        var $176=$self_addr; //@line 683 "_elementtree.c"
        var $177=$176+20; //@line 683 "_elementtree.c"
        var $178=HEAP[$177]; //@line 683 "_elementtree.c"
        var $179=$178+12; //@line 683 "_elementtree.c"
        var $180=HEAP[$179]; //@line 683 "_elementtree.c"
        var $181=$i; //@line 683 "_elementtree.c"
        var $182=$180+4*$181; //@line 683 "_elementtree.c"
        var $183=HEAP[$182]; //@line 683 "_elementtree.c"
        var $184=_deepcopy($183, $175); //@line 683 "_elementtree.c"
        $child=$184; //@line 683 "_elementtree.c"
        var $185=$child; //@line 684 "_elementtree.c"
        var $186=($185)==0; //@line 684 "_elementtree.c"
        var $187=$element; //@line 685 "_elementtree.c"
        var $188=$187+20; //@line 685 "_elementtree.c"
        var $189=HEAP[$188]; //@line 685 "_elementtree.c"
        if ($186) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 684 "_elementtree.c"
      case 26: // $bb26
        var $190=$189+4; //@line 685 "_elementtree.c"
        var $191=$i; //@line 685 "_elementtree.c"
        HEAP[$190]=$191; //@line 685 "_elementtree.c"
        __label__ = 35; break; //@line 685 "_elementtree.c"
      case 27: // $bb27
        var $192=$189+12; //@line 688 "_elementtree.c"
        var $193=HEAP[$192]; //@line 688 "_elementtree.c"
        var $194=$i; //@line 688 "_elementtree.c"
        var $195=$193+4*$194; //@line 688 "_elementtree.c"
        var $196=$child; //@line 688 "_elementtree.c"
        HEAP[$195]=$196; //@line 688 "_elementtree.c"
        var $197=$i; //@line 682 "_elementtree.c"
        var $198=($197) + 1; //@line 682 "_elementtree.c"
        $i=$198; //@line 682 "_elementtree.c"
        __label__ = 28; break; //@line 682 "_elementtree.c"
      case 28: // $bb28
        var $199=$self_addr; //@line 682 "_elementtree.c"
        var $200=$199+20; //@line 682 "_elementtree.c"
        var $201=HEAP[$200]; //@line 682 "_elementtree.c"
        var $202=$201+4; //@line 682 "_elementtree.c"
        var $203=HEAP[$202]; //@line 682 "_elementtree.c"
        var $204=$i; //@line 682 "_elementtree.c"
        var $205=($203) > ($204); //@line 682 "_elementtree.c"
        if ($205) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 682 "_elementtree.c"
      case 29: // $bb29
        var $206=$element; //@line 691 "_elementtree.c"
        var $207=$206+20; //@line 691 "_elementtree.c"
        var $208=HEAP[$207]; //@line 691 "_elementtree.c"
        var $209=$self_addr; //@line 691 "_elementtree.c"
        var $210=$209+20; //@line 691 "_elementtree.c"
        var $211=HEAP[$210]; //@line 691 "_elementtree.c"
        var $212=$211+4; //@line 691 "_elementtree.c"
        var $213=HEAP[$212]; //@line 691 "_elementtree.c"
        var $214=$208+4; //@line 691 "_elementtree.c"
        HEAP[$214]=$213; //@line 691 "_elementtree.c"
        __label__ = 30; break; //@line 691 "_elementtree.c"
      case 30: // $bb30
        var $215=$self_addr; //@line 696 "_elementtree.c"
        var $216=($215); //@line 696 "_elementtree.c"
        var $217=_PyInt_FromLong($216); //@line 696 "_elementtree.c"
        $id=$217; //@line 696 "_elementtree.c"
        var $218=($217)==0; //@line 697 "_elementtree.c"
        if ($218) { __label__ = 35; break; } else { __label__ = 31; break; } //@line 697 "_elementtree.c"
      case 31: // $bb31
        var $219=$element; //@line 700 "_elementtree.c"
        var $220=$219; //@line 700 "_elementtree.c"
        var $221=HEAP[$memo]; //@line 700 "_elementtree.c"
        var $222=$id; //@line 700 "_elementtree.c"
        var $223=_PyDict_SetItem($221, $222, $220); //@line 700 "_elementtree.c"
        $i=$223; //@line 700 "_elementtree.c"
        var $224=$id; //@line 702 "_elementtree.c"
        var $225=$224; //@line 702 "_elementtree.c"
        var $226=HEAP[$225]; //@line 702 "_elementtree.c"
        var $227=($226) - 1; //@line 702 "_elementtree.c"
        var $228=$id; //@line 702 "_elementtree.c"
        var $229=$228; //@line 702 "_elementtree.c"
        HEAP[$229]=$227; //@line 702 "_elementtree.c"
        var $230=$id; //@line 702 "_elementtree.c"
        var $231=$230; //@line 702 "_elementtree.c"
        var $232=HEAP[$231]; //@line 702 "_elementtree.c"
        var $233=($232)==0; //@line 702 "_elementtree.c"
        if ($233) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 702 "_elementtree.c"
      case 32: // $bb32
        var $234=$id; //@line 702 "_elementtree.c"
        var $235=$234+4; //@line 702 "_elementtree.c"
        var $236=HEAP[$235]; //@line 702 "_elementtree.c"
        var $237=$236+24; //@line 702 "_elementtree.c"
        var $238=HEAP[$237]; //@line 702 "_elementtree.c"
        var $239=$id; //@line 702 "_elementtree.c"
        FUNCTION_TABLE[$238]($239); //@line 702 "_elementtree.c"
        __label__ = 33; break; //@line 702 "_elementtree.c"
      case 33: // $bb33
        var $240=$i; //@line 704 "_elementtree.c"
        var $241=($240) < 0; //@line 704 "_elementtree.c"
        if ($241) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 704 "_elementtree.c"
      case 34: // $bb34
        var $242=$element; //@line 707 "_elementtree.c"
        var $243=$242; //@line 707 "_elementtree.c"
        $0=$243; //@line 707 "_elementtree.c"
        __label__ = 38; break; //@line 707 "_elementtree.c"
      case 35: // $error
        var $244=$element; //@line 710 "_elementtree.c"
        var $245=$244; //@line 710 "_elementtree.c"
        var $246=$245; //@line 710 "_elementtree.c"
        var $247=HEAP[$246]; //@line 710 "_elementtree.c"
        var $248=($247) - 1; //@line 710 "_elementtree.c"
        var $249=$245; //@line 710 "_elementtree.c"
        HEAP[$249]=$248; //@line 710 "_elementtree.c"
        var $250=$245; //@line 710 "_elementtree.c"
        var $251=HEAP[$250]; //@line 710 "_elementtree.c"
        var $252=($251)==0; //@line 710 "_elementtree.c"
        if ($252) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 710 "_elementtree.c"
      case 36: // $bb35
        var $253=$element; //@line 710 "_elementtree.c"
        var $254=$253; //@line 710 "_elementtree.c"
        var $255=$254+4; //@line 710 "_elementtree.c"
        var $256=HEAP[$255]; //@line 710 "_elementtree.c"
        var $257=$256+24; //@line 710 "_elementtree.c"
        var $258=HEAP[$257]; //@line 710 "_elementtree.c"
        var $259=$element; //@line 710 "_elementtree.c"
        var $260=$259; //@line 710 "_elementtree.c"
        FUNCTION_TABLE[$258]($260); //@line 710 "_elementtree.c"
        __label__ = 37; break; //@line 710 "_elementtree.c"
      case 37: // $bb36
        $0=0; //@line 711 "_elementtree.c"
        __label__ = 38; break; //@line 711 "_elementtree.c"
      case 38: // $bb37
        var $261=$0; //@line 640 "_elementtree.c"
        $retval=$261; //@line 640 "_elementtree.c"
        var $retval38=$retval; //@line 640 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval38; //@line 640 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _checkpath($tag) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tag_addr;
        var $retval;
        var $0;
        var $i;
        var $check;
        var $p;
        var $p17;
        $tag_addr=$tag;
        $check=1; //@line 718 "_elementtree.c"
        var $1=$tag_addr; //@line 726 "_elementtree.c"
        var $2=$1+4; //@line 726 "_elementtree.c"
        var $3=HEAP[$2]; //@line 726 "_elementtree.c"
        var $4=$3+84; //@line 726 "_elementtree.c"
        var $5=HEAP[$4]; //@line 726 "_elementtree.c"
        var $6=($5) & 268435456; //@line 726 "_elementtree.c"
        var $7=($6)!=0; //@line 726 "_elementtree.c"
        var $8=$tag_addr; //@line 727 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 16; break; } //@line 726 "_elementtree.c"
      case 1: // $bb
        var $9=$8; //@line 727 "_elementtree.c"
        var $10=$9+12; //@line 727 "_elementtree.c"
        var $11=HEAP[$10]; //@line 727 "_elementtree.c"
        $p=$11; //@line 727 "_elementtree.c"
        $i=0; //@line 728 "_elementtree.c"
        __label__ = 14; break; //@line 728 "_elementtree.c"
      case 2: // $bb1
        var $12=$p; //@line 729 "_elementtree.c"
        var $13=$i; //@line 729 "_elementtree.c"
        var $14=$12+2*$13; //@line 729 "_elementtree.c"
        var $15=HEAP[$14]; //@line 729 "_elementtree.c"
        var $16=($15)==123; //@line 729 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 729 "_elementtree.c"
      case 3: // $bb2
        $check=0; //@line 730 "_elementtree.c"
        __label__ = 13; break; //@line 730 "_elementtree.c"
      case 4: // $bb3
        var $17=$p; //@line 731 "_elementtree.c"
        var $18=$i; //@line 731 "_elementtree.c"
        var $19=$17+2*$18; //@line 731 "_elementtree.c"
        var $20=HEAP[$19]; //@line 731 "_elementtree.c"
        var $21=($20)==125; //@line 731 "_elementtree.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 731 "_elementtree.c"
      case 5: // $bb4
        $check=1; //@line 732 "_elementtree.c"
        __label__ = 13; break; //@line 732 "_elementtree.c"
      case 6: // $bb5
        var $22=$check; //@line 733 "_elementtree.c"
        var $23=($22)!=0; //@line 733 "_elementtree.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 733 "_elementtree.c"
      case 7: // $bb6
        var $24=$p; //@line 733 "_elementtree.c"
        var $25=$i; //@line 733 "_elementtree.c"
        var $26=$24+2*$25; //@line 733 "_elementtree.c"
        var $27=HEAP[$26]; //@line 733 "_elementtree.c"
        var $28=($27)==47; //@line 733 "_elementtree.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 733 "_elementtree.c"
      case 8: // $bb7
        var $29=$p; //@line 733 "_elementtree.c"
        var $30=$i; //@line 733 "_elementtree.c"
        var $31=$29+2*$30; //@line 733 "_elementtree.c"
        var $32=HEAP[$31]; //@line 733 "_elementtree.c"
        var $33=($32)==42; //@line 733 "_elementtree.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 733 "_elementtree.c"
      case 9: // $bb8
        var $34=$p; //@line 733 "_elementtree.c"
        var $35=$i; //@line 733 "_elementtree.c"
        var $36=$34+2*$35; //@line 733 "_elementtree.c"
        var $37=HEAP[$36]; //@line 733 "_elementtree.c"
        var $38=($37)==91; //@line 733 "_elementtree.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 733 "_elementtree.c"
      case 10: // $bb9
        var $39=$p; //@line 733 "_elementtree.c"
        var $40=$i; //@line 733 "_elementtree.c"
        var $41=$39+2*$40; //@line 733 "_elementtree.c"
        var $42=HEAP[$41]; //@line 733 "_elementtree.c"
        var $43=($42)==64; //@line 733 "_elementtree.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 733 "_elementtree.c"
      case 11: // $bb10
        var $44=$p; //@line 733 "_elementtree.c"
        var $45=$i; //@line 733 "_elementtree.c"
        var $46=$44+2*$45; //@line 733 "_elementtree.c"
        var $47=HEAP[$46]; //@line 733 "_elementtree.c"
        var $48=($47)==46; //@line 733 "_elementtree.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 733 "_elementtree.c"
      case 12: // $bb11
        $0=1; //@line 734 "_elementtree.c"
        __label__ = 33; break; //@line 734 "_elementtree.c"
      case 13: // $bb12
        var $49=$i; //@line 728 "_elementtree.c"
        var $50=($49) + 1; //@line 728 "_elementtree.c"
        $i=$50; //@line 728 "_elementtree.c"
        __label__ = 14; break; //@line 728 "_elementtree.c"
      case 14: // $bb13
        var $51=$tag_addr; //@line 728 "_elementtree.c"
        var $52=$51; //@line 728 "_elementtree.c"
        var $53=$52+8; //@line 728 "_elementtree.c"
        var $54=HEAP[$53]; //@line 728 "_elementtree.c"
        var $55=$i; //@line 728 "_elementtree.c"
        var $56=($54) > ($55); //@line 728 "_elementtree.c"
        if ($56) { __label__ = 2; break; } else { __label__ = 15; break; } //@line 728 "_elementtree.c"
      case 15: // $bb14
        $0=0; //@line 736 "_elementtree.c"
        __label__ = 33; break; //@line 736 "_elementtree.c"
      case 16: // $bb15
        var $57=$8+4; //@line 739 "_elementtree.c"
        var $58=HEAP[$57]; //@line 739 "_elementtree.c"
        var $59=$58+84; //@line 739 "_elementtree.c"
        var $60=HEAP[$59]; //@line 739 "_elementtree.c"
        var $61=($60) & 134217728; //@line 739 "_elementtree.c"
        var $62=($61)!=0; //@line 739 "_elementtree.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 739 "_elementtree.c"
      case 17: // $bb16
        var $63=$tag_addr; //@line 740 "_elementtree.c"
        var $64=$63; //@line 740 "_elementtree.c"
        var $65=$64+20; //@line 740 "_elementtree.c"
        var $66=$65; //@line 740 "_elementtree.c"
        $p17=$66; //@line 740 "_elementtree.c"
        $i=0; //@line 741 "_elementtree.c"
        __label__ = 30; break; //@line 741 "_elementtree.c"
      case 18: // $bb18
        var $67=$p17; //@line 742 "_elementtree.c"
        var $68=$i; //@line 742 "_elementtree.c"
        var $69=$67+$68; //@line 742 "_elementtree.c"
        var $70=HEAP[$69]; //@line 742 "_elementtree.c"
        var $71=($70)==123; //@line 742 "_elementtree.c"
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 742 "_elementtree.c"
      case 19: // $bb19
        $check=0; //@line 743 "_elementtree.c"
        __label__ = 29; break; //@line 743 "_elementtree.c"
      case 20: // $bb20
        var $72=$p17; //@line 744 "_elementtree.c"
        var $73=$i; //@line 744 "_elementtree.c"
        var $74=$72+$73; //@line 744 "_elementtree.c"
        var $75=HEAP[$74]; //@line 744 "_elementtree.c"
        var $76=($75)==125; //@line 744 "_elementtree.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 744 "_elementtree.c"
      case 21: // $bb21
        $check=1; //@line 745 "_elementtree.c"
        __label__ = 29; break; //@line 745 "_elementtree.c"
      case 22: // $bb22
        var $77=$check; //@line 746 "_elementtree.c"
        var $78=($77)!=0; //@line 746 "_elementtree.c"
        if ($78) { __label__ = 23; break; } else { __label__ = 29; break; } //@line 746 "_elementtree.c"
      case 23: // $bb23
        var $79=$p17; //@line 746 "_elementtree.c"
        var $80=$i; //@line 746 "_elementtree.c"
        var $81=$79+$80; //@line 746 "_elementtree.c"
        var $82=HEAP[$81]; //@line 746 "_elementtree.c"
        var $83=($82)==47; //@line 746 "_elementtree.c"
        if ($83) { __label__ = 28; break; } else { __label__ = 24; break; } //@line 746 "_elementtree.c"
      case 24: // $bb24
        var $84=$p17; //@line 746 "_elementtree.c"
        var $85=$i; //@line 746 "_elementtree.c"
        var $86=$84+$85; //@line 746 "_elementtree.c"
        var $87=HEAP[$86]; //@line 746 "_elementtree.c"
        var $88=($87)==42; //@line 746 "_elementtree.c"
        if ($88) { __label__ = 28; break; } else { __label__ = 25; break; } //@line 746 "_elementtree.c"
      case 25: // $bb25
        var $89=$p17; //@line 746 "_elementtree.c"
        var $90=$i; //@line 746 "_elementtree.c"
        var $91=$89+$90; //@line 746 "_elementtree.c"
        var $92=HEAP[$91]; //@line 746 "_elementtree.c"
        var $93=($92)==91; //@line 746 "_elementtree.c"
        if ($93) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 746 "_elementtree.c"
      case 26: // $bb26
        var $94=$p17; //@line 746 "_elementtree.c"
        var $95=$i; //@line 746 "_elementtree.c"
        var $96=$94+$95; //@line 746 "_elementtree.c"
        var $97=HEAP[$96]; //@line 746 "_elementtree.c"
        var $98=($97)==64; //@line 746 "_elementtree.c"
        if ($98) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 746 "_elementtree.c"
      case 27: // $bb27
        var $99=$p17; //@line 746 "_elementtree.c"
        var $100=$i; //@line 746 "_elementtree.c"
        var $101=$99+$100; //@line 746 "_elementtree.c"
        var $102=HEAP[$101]; //@line 746 "_elementtree.c"
        var $103=($102)==46; //@line 746 "_elementtree.c"
        if ($103) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 746 "_elementtree.c"
      case 28: // $bb28
        $0=1; //@line 747 "_elementtree.c"
        __label__ = 33; break; //@line 747 "_elementtree.c"
      case 29: // $bb29
        var $104=$i; //@line 741 "_elementtree.c"
        var $105=($104) + 1; //@line 741 "_elementtree.c"
        $i=$105; //@line 741 "_elementtree.c"
        __label__ = 30; break; //@line 741 "_elementtree.c"
      case 30: // $bb30
        var $106=$tag_addr; //@line 741 "_elementtree.c"
        var $107=$106; //@line 741 "_elementtree.c"
        var $108=$107+8; //@line 741 "_elementtree.c"
        var $109=HEAP[$108]; //@line 741 "_elementtree.c"
        var $110=$i; //@line 741 "_elementtree.c"
        var $111=($109) > ($110); //@line 741 "_elementtree.c"
        if ($111) { __label__ = 18; break; } else { __label__ = 31; break; } //@line 741 "_elementtree.c"
      case 31: // $bb31
        $0=0; //@line 749 "_elementtree.c"
        __label__ = 33; break; //@line 749 "_elementtree.c"
      case 32: // $bb32
        $0=1; //@line 752 "_elementtree.c"
        __label__ = 33; break; //@line 752 "_elementtree.c"
      case 33: // $bb33
        var $112=$0; //@line 734 "_elementtree.c"
        $retval=$112; //@line 734 "_elementtree.c"
        var $retval34=$retval; //@line 734 "_elementtree.c"
        ;
        return $retval34; //@line 734 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_extend($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_69;
        var $0;
        var $seq;
        var $i;
        var $seqlen;
        var $seq_in=__stackBase__;
        var $element;
        $self_addr=$self;
        $args_addr=$args;
        $seqlen=0; //@line 759 "_elementtree.c"
        var $1=$args_addr; //@line 762 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$seq_in,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 762 "_elementtree.c"
        var $3=($2)==0; //@line 762 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 762 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 763 "_elementtree.c"
        __label__ = 17; break; //@line 763 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$seq_in]; //@line 765 "_elementtree.c"
        var $5=_PySequence_Fast($4, __str1); //@line 765 "_elementtree.c"
        $seq=$5; //@line 765 "_elementtree.c"
        var $6=$seq; //@line 766 "_elementtree.c"
        var $7=($6)==0; //@line 766 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 766 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$seq_in]; //@line 767 "_elementtree.c"
        var $9=$8+4; //@line 767 "_elementtree.c"
        var $10=HEAP[$9]; //@line 767 "_elementtree.c"
        var $11=$10+12; //@line 767 "_elementtree.c"
        var $12=HEAP[$11]; //@line 767 "_elementtree.c"
        var $13=HEAP[_PyExc_TypeError]; //@line 767 "_elementtree.c"
        var $14=_PyErr_Format($13, __str10, allocate([$12,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 767 "_elementtree.c"
        $0=0; //@line 771 "_elementtree.c"
        __label__ = 17; break; //@line 771 "_elementtree.c"
      case 4: // $bb3
        var $15=$seq; //@line 774 "_elementtree.c"
        var $16=_PySequence_Size($15); //@line 774 "_elementtree.c"
        $seqlen=$16; //@line 774 "_elementtree.c"
        $i=0; //@line 775 "_elementtree.c"
        __label__ = 13; break; //@line 775 "_elementtree.c"
      case 5: // $bb4
        var $17=$61+4; //@line 776 "_elementtree.c"
        var $18=HEAP[$17]; //@line 776 "_elementtree.c"
        var $19=$18+84; //@line 776 "_elementtree.c"
        var $20=HEAP[$19]; //@line 776 "_elementtree.c"
        var $21=($20) & 33554432; //@line 776 "_elementtree.c"
        var $22=($21)!=0; //@line 776 "_elementtree.c"
        var $23=$seq; //@line 776 "_elementtree.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 776 "_elementtree.c"
      case 6: // $bb5
        var $24=$23; //@line 776 "_elementtree.c"
        var $25=$24+12; //@line 776 "_elementtree.c"
        var $26=HEAP[$25]; //@line 776 "_elementtree.c"
        var $27=$i; //@line 776 "_elementtree.c"
        var $28=$26+4*$27; //@line 776 "_elementtree.c"
        var $29=HEAP[$28]; //@line 776 "_elementtree.c"
        $iftmp_69=$29; //@line 776 "_elementtree.c"
        __label__ = 8; break; //@line 776 "_elementtree.c"
      case 7: // $bb6
        var $30=$23; //@line 776 "_elementtree.c"
        var $31=$i; //@line 776 "_elementtree.c"
        var $32=$30+12; //@line 776 "_elementtree.c"
        var $33=$32+$31*4; //@line 776 "_elementtree.c"
        var $34=HEAP[$33]; //@line 776 "_elementtree.c"
        $iftmp_69=$34; //@line 776 "_elementtree.c"
        __label__ = 8; break; //@line 776 "_elementtree.c"
      case 8: // $bb7
        var $35=$iftmp_69; //@line 776 "_elementtree.c"
        $element=$35; //@line 776 "_elementtree.c"
        var $36=$self_addr; //@line 777 "_elementtree.c"
        var $37=$element; //@line 777 "_elementtree.c"
        var $38=_element_add_subelement($36, $37); //@line 777 "_elementtree.c"
        var $39=($38) < 0; //@line 777 "_elementtree.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 777 "_elementtree.c"
      case 9: // $bb8
        var $40=$seq; //@line 778 "_elementtree.c"
        var $41=$40; //@line 778 "_elementtree.c"
        var $42=HEAP[$41]; //@line 778 "_elementtree.c"
        var $43=($42) - 1; //@line 778 "_elementtree.c"
        var $44=$seq; //@line 778 "_elementtree.c"
        var $45=$44; //@line 778 "_elementtree.c"
        HEAP[$45]=$43; //@line 778 "_elementtree.c"
        var $46=$seq; //@line 778 "_elementtree.c"
        var $47=$46; //@line 778 "_elementtree.c"
        var $48=HEAP[$47]; //@line 778 "_elementtree.c"
        var $49=($48)==0; //@line 778 "_elementtree.c"
        if ($49) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 778 "_elementtree.c"
      case 10: // $bb9
        var $50=$seq; //@line 778 "_elementtree.c"
        var $51=$50+4; //@line 778 "_elementtree.c"
        var $52=HEAP[$51]; //@line 778 "_elementtree.c"
        var $53=$52+24; //@line 778 "_elementtree.c"
        var $54=HEAP[$53]; //@line 778 "_elementtree.c"
        var $55=$seq; //@line 778 "_elementtree.c"
        FUNCTION_TABLE[$54]($55); //@line 778 "_elementtree.c"
        __label__ = 11; break; //@line 778 "_elementtree.c"
      case 11: // $bb10
        $0=0; //@line 779 "_elementtree.c"
        __label__ = 17; break; //@line 779 "_elementtree.c"
      case 12: // $bb11
        var $56=$i; //@line 775 "_elementtree.c"
        var $57=($56) + 1; //@line 775 "_elementtree.c"
        $i=$57; //@line 775 "_elementtree.c"
        __label__ = 13; break; //@line 775 "_elementtree.c"
      case 13: // $bb12
        var $58=$i; //@line 775 "_elementtree.c"
        var $59=$seqlen; //@line 775 "_elementtree.c"
        var $60=($58) < ($59); //@line 775 "_elementtree.c"
        var $61=$seq; //@line 776 "_elementtree.c"
        if ($60) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 775 "_elementtree.c"
      case 14: // $bb13
        var $62=$61; //@line 783 "_elementtree.c"
        var $63=HEAP[$62]; //@line 783 "_elementtree.c"
        var $64=($63) - 1; //@line 783 "_elementtree.c"
        var $65=$seq; //@line 783 "_elementtree.c"
        var $66=$65; //@line 783 "_elementtree.c"
        HEAP[$66]=$64; //@line 783 "_elementtree.c"
        var $67=$seq; //@line 783 "_elementtree.c"
        var $68=$67; //@line 783 "_elementtree.c"
        var $69=HEAP[$68]; //@line 783 "_elementtree.c"
        var $70=($69)==0; //@line 783 "_elementtree.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 783 "_elementtree.c"
      case 15: // $bb14
        var $71=$seq; //@line 783 "_elementtree.c"
        var $72=$71+4; //@line 783 "_elementtree.c"
        var $73=HEAP[$72]; //@line 783 "_elementtree.c"
        var $74=$73+24; //@line 783 "_elementtree.c"
        var $75=HEAP[$74]; //@line 783 "_elementtree.c"
        var $76=$seq; //@line 783 "_elementtree.c"
        FUNCTION_TABLE[$75]($76); //@line 783 "_elementtree.c"
        __label__ = 16; break; //@line 783 "_elementtree.c"
      case 16: // $bb15
        var $77=HEAP[__Py_NoneStruct]; //@line 785 "_elementtree.c"
        var $78=($77) + 1; //@line 785 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$78; //@line 785 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 785 "_elementtree.c"
        __label__ = 17; break; //@line 785 "_elementtree.c"
      case 17: // $bb16
        var $79=$0; //@line 763 "_elementtree.c"
        $retval=$79; //@line 763 "_elementtree.c"
        var $retval17=$retval; //@line 763 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 763 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_find($self, $args) {
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
        var $tag=__stackBase__;
        var $namespaces=__stackBase__+4;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 794 "_elementtree.c"
        var $1=$args_addr; //@line 795 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str11, allocate([$tag,0,0,0,$namespaces,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 795 "_elementtree.c"
        var $3=($2)==0; //@line 795 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 795 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 796 "_elementtree.c"
        __label__ = 14; break; //@line 796 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 798 "_elementtree.c"
        var $5=_checkpath($4); //@line 798 "_elementtree.c"
        var $6=($5)!=0; //@line 798 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 798 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 798 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 798 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 798 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 799 "_elementtree.c"
        var $10=HEAP[$tag]; //@line 799 "_elementtree.c"
        var $11=HEAP[_elementpath_obj]; //@line 799 "_elementtree.c"
        var $12=$self_addr; //@line 799 "_elementtree.c"
        var $13=_PyObject_CallMethod($11, __str12, __str13, allocate([$12,0,0,0,$10,0,0,0,$9,0,0,0], ["%struct.ElementObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 799 "_elementtree.c"
        $0=$13; //@line 799 "_elementtree.c"
        __label__ = 14; break; //@line 799 "_elementtree.c"
      case 5: // $bb4
        var $14=$self_addr; //@line 803 "_elementtree.c"
        var $15=$14+20; //@line 803 "_elementtree.c"
        var $16=HEAP[$15]; //@line 803 "_elementtree.c"
        var $17=($16)==0; //@line 803 "_elementtree.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 803 "_elementtree.c"
      case 6: // $bb5
        var $18=HEAP[__Py_NoneStruct]; //@line 804 "_elementtree.c"
        var $19=($18) + 1; //@line 804 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$19; //@line 804 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 804 "_elementtree.c"
        __label__ = 14; break; //@line 804 "_elementtree.c"
      case 7: // $bb6
        $i=0; //@line 806 "_elementtree.c"
        __label__ = 12; break; //@line 806 "_elementtree.c"
      case 8: // $bb7
        var $20=$self_addr; //@line 807 "_elementtree.c"
        var $21=$20+20; //@line 807 "_elementtree.c"
        var $22=HEAP[$21]; //@line 807 "_elementtree.c"
        var $23=$22+12; //@line 807 "_elementtree.c"
        var $24=HEAP[$23]; //@line 807 "_elementtree.c"
        var $25=$i; //@line 807 "_elementtree.c"
        var $26=$24+4*$25; //@line 807 "_elementtree.c"
        var $27=HEAP[$26]; //@line 807 "_elementtree.c"
        $item=$27; //@line 807 "_elementtree.c"
        var $28=$item; //@line 808 "_elementtree.c"
        var $29=$28+4; //@line 808 "_elementtree.c"
        var $30=HEAP[$29]; //@line 808 "_elementtree.c"
        var $31=($30)==(_Element_Type); //@line 808 "_elementtree.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 808 "_elementtree.c"
      case 9: // $bb8
        var $32=HEAP[$tag]; //@line 808 "_elementtree.c"
        var $33=$item; //@line 808 "_elementtree.c"
        var $34=$33; //@line 808 "_elementtree.c"
        var $35=$34+8; //@line 808 "_elementtree.c"
        var $36=HEAP[$35]; //@line 808 "_elementtree.c"
        var $37=_PyObject_Compare($36, $32); //@line 808 "_elementtree.c"
        var $38=($37)==0; //@line 808 "_elementtree.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 808 "_elementtree.c"
      case 10: // $bb9
        var $39=$item; //@line 810 "_elementtree.c"
        var $40=$39; //@line 810 "_elementtree.c"
        var $41=HEAP[$40]; //@line 810 "_elementtree.c"
        var $42=($41) + 1; //@line 810 "_elementtree.c"
        var $43=$item; //@line 810 "_elementtree.c"
        var $44=$43; //@line 810 "_elementtree.c"
        HEAP[$44]=$42; //@line 810 "_elementtree.c"
        var $45=$item; //@line 811 "_elementtree.c"
        $0=$45; //@line 811 "_elementtree.c"
        __label__ = 14; break; //@line 811 "_elementtree.c"
      case 11: // $bb10
        var $46=$i; //@line 806 "_elementtree.c"
        var $47=($46) + 1; //@line 806 "_elementtree.c"
        $i=$47; //@line 806 "_elementtree.c"
        __label__ = 12; break; //@line 806 "_elementtree.c"
      case 12: // $bb11
        var $48=$self_addr; //@line 806 "_elementtree.c"
        var $49=$48+20; //@line 806 "_elementtree.c"
        var $50=HEAP[$49]; //@line 806 "_elementtree.c"
        var $51=$50+4; //@line 806 "_elementtree.c"
        var $52=HEAP[$51]; //@line 806 "_elementtree.c"
        var $53=$i; //@line 806 "_elementtree.c"
        var $54=($52) > ($53); //@line 806 "_elementtree.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 806 "_elementtree.c"
      case 13: // $bb12
        var $55=HEAP[__Py_NoneStruct]; //@line 815 "_elementtree.c"
        var $56=($55) + 1; //@line 815 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$56; //@line 815 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 815 "_elementtree.c"
        __label__ = 14; break; //@line 815 "_elementtree.c"
      case 14: // $bb13
        var $57=$0; //@line 796 "_elementtree.c"
        $retval=$57; //@line 796 "_elementtree.c"
        var $retval14=$retval; //@line 796 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 796 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_findtext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i;
        var $tag=__stackBase__;
        var $default_value=__stackBase__+4;
        var $namespaces=__stackBase__+8;
        var $item;
        var $text;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$default_value]=__Py_NoneStruct; //@line 824 "_elementtree.c"
        HEAP[$namespaces]=__Py_NoneStruct; //@line 825 "_elementtree.c"
        var $1=$args_addr; //@line 826 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str14, allocate([$tag,0,0,0,$default_value,0,0,0,$namespaces,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 826 "_elementtree.c"
        var $3=($2)==0; //@line 826 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 826 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 827 "_elementtree.c"
        __label__ = 18; break; //@line 827 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 829 "_elementtree.c"
        var $5=_checkpath($4); //@line 829 "_elementtree.c"
        var $6=($5)!=0; //@line 829 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 829 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 829 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 829 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 829 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 830 "_elementtree.c"
        var $10=HEAP[$default_value]; //@line 830 "_elementtree.c"
        var $11=HEAP[$tag]; //@line 830 "_elementtree.c"
        var $12=HEAP[_elementpath_obj]; //@line 830 "_elementtree.c"
        var $13=$self_addr; //@line 830 "_elementtree.c"
        var $14=_PyObject_CallMethod($12, __str15, __str16, allocate([$13,0,0,0,$11,0,0,0,$10,0,0,0,$9,0,0,0], ["%struct.ElementObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 830 "_elementtree.c"
        $0=$14; //@line 830 "_elementtree.c"
        __label__ = 18; break; //@line 830 "_elementtree.c"
      case 5: // $bb4
        var $15=$self_addr; //@line 834 "_elementtree.c"
        var $16=$15+20; //@line 834 "_elementtree.c"
        var $17=HEAP[$16]; //@line 834 "_elementtree.c"
        var $18=($17)==0; //@line 834 "_elementtree.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 834 "_elementtree.c"
      case 6: // $bb5
        var $19=HEAP[$default_value]; //@line 835 "_elementtree.c"
        var $20=$19; //@line 835 "_elementtree.c"
        var $21=HEAP[$20]; //@line 835 "_elementtree.c"
        var $22=($21) + 1; //@line 835 "_elementtree.c"
        var $23=$19; //@line 835 "_elementtree.c"
        HEAP[$23]=$22; //@line 835 "_elementtree.c"
        var $24=HEAP[$default_value]; //@line 836 "_elementtree.c"
        $0=$24; //@line 836 "_elementtree.c"
        __label__ = 18; break; //@line 836 "_elementtree.c"
      case 7: // $bb6
        $i=0; //@line 839 "_elementtree.c"
        __label__ = 16; break; //@line 839 "_elementtree.c"
      case 8: // $bb7
        var $25=$self_addr; //@line 840 "_elementtree.c"
        var $26=$25+20; //@line 840 "_elementtree.c"
        var $27=HEAP[$26]; //@line 840 "_elementtree.c"
        var $28=$27+12; //@line 840 "_elementtree.c"
        var $29=HEAP[$28]; //@line 840 "_elementtree.c"
        var $30=$i; //@line 840 "_elementtree.c"
        var $31=$29+4*$30; //@line 840 "_elementtree.c"
        var $32=HEAP[$31]; //@line 840 "_elementtree.c"
        var $33=$32; //@line 840 "_elementtree.c"
        $item=$33; //@line 840 "_elementtree.c"
        var $34=$item; //@line 841 "_elementtree.c"
        var $35=$34; //@line 841 "_elementtree.c"
        var $36=$35+4; //@line 841 "_elementtree.c"
        var $37=HEAP[$36]; //@line 841 "_elementtree.c"
        var $38=($37)==(_Element_Type); //@line 841 "_elementtree.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 841 "_elementtree.c"
      case 9: // $bb8
        var $39=HEAP[$tag]; //@line 841 "_elementtree.c"
        var $40=$item; //@line 841 "_elementtree.c"
        var $41=$40+8; //@line 841 "_elementtree.c"
        var $42=HEAP[$41]; //@line 841 "_elementtree.c"
        var $43=_PyObject_Compare($42, $39); //@line 841 "_elementtree.c"
        var $44=($43)==0; //@line 841 "_elementtree.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 841 "_elementtree.c"
      case 10: // $bb9
        var $45=$item; //@line 842 "_elementtree.c"
        var $46=_element_get_text($45); //@line 842 "_elementtree.c"
        $text=$46; //@line 842 "_elementtree.c"
        var $47=$text; //@line 843 "_elementtree.c"
        var $48=($47)==(__Py_NoneStruct); //@line 843 "_elementtree.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 843 "_elementtree.c"
      case 11: // $bb10
        var $49=_PyString_FromString(__str1); //@line 844 "_elementtree.c"
        $0=$49; //@line 844 "_elementtree.c"
        __label__ = 18; break; //@line 844 "_elementtree.c"
      case 12: // $bb11
        var $50=$text; //@line 845 "_elementtree.c"
        var $51=($50)!=0; //@line 845 "_elementtree.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 845 "_elementtree.c"
      case 13: // $bb12
        var $52=$text; //@line 845 "_elementtree.c"
        var $53=$52; //@line 845 "_elementtree.c"
        var $54=HEAP[$53]; //@line 845 "_elementtree.c"
        var $55=($54) + 1; //@line 845 "_elementtree.c"
        var $56=$text; //@line 845 "_elementtree.c"
        var $57=$56; //@line 845 "_elementtree.c"
        HEAP[$57]=$55; //@line 845 "_elementtree.c"
        __label__ = 14; break; //@line 845 "_elementtree.c"
      case 14: // $bb13
        var $58=$text; //@line 846 "_elementtree.c"
        $0=$58; //@line 846 "_elementtree.c"
        __label__ = 18; break; //@line 846 "_elementtree.c"
      case 15: // $bb14
        var $59=$i; //@line 839 "_elementtree.c"
        var $60=($59) + 1; //@line 839 "_elementtree.c"
        $i=$60; //@line 839 "_elementtree.c"
        __label__ = 16; break; //@line 839 "_elementtree.c"
      case 16: // $bb15
        var $61=$self_addr; //@line 839 "_elementtree.c"
        var $62=$61+20; //@line 839 "_elementtree.c"
        var $63=HEAP[$62]; //@line 839 "_elementtree.c"
        var $64=$63+4; //@line 839 "_elementtree.c"
        var $65=HEAP[$64]; //@line 839 "_elementtree.c"
        var $66=$i; //@line 839 "_elementtree.c"
        var $67=($65) > ($66); //@line 839 "_elementtree.c"
        if ($67) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 839 "_elementtree.c"
      case 17: // $bb16
        var $68=HEAP[$default_value]; //@line 850 "_elementtree.c"
        var $69=$68; //@line 850 "_elementtree.c"
        var $70=HEAP[$69]; //@line 850 "_elementtree.c"
        var $71=($70) + 1; //@line 850 "_elementtree.c"
        var $72=$68; //@line 850 "_elementtree.c"
        HEAP[$72]=$71; //@line 850 "_elementtree.c"
        var $73=HEAP[$default_value]; //@line 851 "_elementtree.c"
        $0=$73; //@line 851 "_elementtree.c"
        __label__ = 18; break; //@line 851 "_elementtree.c"
      case 18: // $bb17
        var $74=$0; //@line 827 "_elementtree.c"
        $retval=$74; //@line 827 "_elementtree.c"
        var $retval18=$retval; //@line 827 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 827 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_findall($self, $args) {
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
        var $out;
        var $tag=__stackBase__;
        var $namespaces=__stackBase__+4;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 861 "_elementtree.c"
        var $1=$args_addr; //@line 862 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str17, allocate([$tag,0,0,0,$namespaces,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 862 "_elementtree.c"
        var $3=($2)==0; //@line 862 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 862 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 863 "_elementtree.c"
        __label__ = 19; break; //@line 863 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 865 "_elementtree.c"
        var $5=_checkpath($4); //@line 865 "_elementtree.c"
        var $6=($5)!=0; //@line 865 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 865 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 865 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 865 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 865 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 866 "_elementtree.c"
        var $10=HEAP[$tag]; //@line 866 "_elementtree.c"
        var $11=HEAP[_elementpath_obj]; //@line 866 "_elementtree.c"
        var $12=$self_addr; //@line 866 "_elementtree.c"
        var $13=_PyObject_CallMethod($11, __str18, __str13, allocate([$12,0,0,0,$10,0,0,0,$9,0,0,0], ["%struct.ElementObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 866 "_elementtree.c"
        $0=$13; //@line 866 "_elementtree.c"
        __label__ = 19; break; //@line 866 "_elementtree.c"
      case 5: // $bb4
        var $14=_PyList_New(0); //@line 870 "_elementtree.c"
        $out=$14; //@line 870 "_elementtree.c"
        var $15=$out; //@line 871 "_elementtree.c"
        var $16=($15)==0; //@line 871 "_elementtree.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 871 "_elementtree.c"
      case 6: // $bb5
        $0=0; //@line 872 "_elementtree.c"
        __label__ = 19; break; //@line 872 "_elementtree.c"
      case 7: // $bb6
        var $17=$self_addr; //@line 874 "_elementtree.c"
        var $18=$17+20; //@line 874 "_elementtree.c"
        var $19=HEAP[$18]; //@line 874 "_elementtree.c"
        var $20=($19)==0; //@line 874 "_elementtree.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 874 "_elementtree.c"
      case 8: // $bb7
        var $21=$out; //@line 875 "_elementtree.c"
        $0=$21; //@line 875 "_elementtree.c"
        __label__ = 19; break; //@line 875 "_elementtree.c"
      case 9: // $bb8
        $i=0; //@line 877 "_elementtree.c"
        __label__ = 17; break; //@line 877 "_elementtree.c"
      case 10: // $bb9
        var $22=$self_addr; //@line 878 "_elementtree.c"
        var $23=$22+20; //@line 878 "_elementtree.c"
        var $24=HEAP[$23]; //@line 878 "_elementtree.c"
        var $25=$24+12; //@line 878 "_elementtree.c"
        var $26=HEAP[$25]; //@line 878 "_elementtree.c"
        var $27=$i; //@line 878 "_elementtree.c"
        var $28=$26+4*$27; //@line 878 "_elementtree.c"
        var $29=HEAP[$28]; //@line 878 "_elementtree.c"
        $item=$29; //@line 878 "_elementtree.c"
        var $30=$item; //@line 879 "_elementtree.c"
        var $31=$30+4; //@line 879 "_elementtree.c"
        var $32=HEAP[$31]; //@line 879 "_elementtree.c"
        var $33=($32)==(_Element_Type); //@line 879 "_elementtree.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 879 "_elementtree.c"
      case 11: // $bb10
        var $34=HEAP[$tag]; //@line 879 "_elementtree.c"
        var $35=$item; //@line 879 "_elementtree.c"
        var $36=$35; //@line 879 "_elementtree.c"
        var $37=$36+8; //@line 879 "_elementtree.c"
        var $38=HEAP[$37]; //@line 879 "_elementtree.c"
        var $39=_PyObject_Compare($38, $34); //@line 879 "_elementtree.c"
        var $40=($39)==0; //@line 879 "_elementtree.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 879 "_elementtree.c"
      case 12: // $bb11
        var $41=$out; //@line 881 "_elementtree.c"
        var $42=$item; //@line 881 "_elementtree.c"
        var $43=_PyList_Append($41, $42); //@line 881 "_elementtree.c"
        var $44=($43) < 0; //@line 881 "_elementtree.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 881 "_elementtree.c"
      case 13: // $bb12
        var $45=$out; //@line 882 "_elementtree.c"
        var $46=$45; //@line 882 "_elementtree.c"
        var $47=HEAP[$46]; //@line 882 "_elementtree.c"
        var $48=($47) - 1; //@line 882 "_elementtree.c"
        var $49=$out; //@line 882 "_elementtree.c"
        var $50=$49; //@line 882 "_elementtree.c"
        HEAP[$50]=$48; //@line 882 "_elementtree.c"
        var $51=$out; //@line 882 "_elementtree.c"
        var $52=$51; //@line 882 "_elementtree.c"
        var $53=HEAP[$52]; //@line 882 "_elementtree.c"
        var $54=($53)==0; //@line 882 "_elementtree.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 882 "_elementtree.c"
      case 14: // $bb13
        var $55=$out; //@line 882 "_elementtree.c"
        var $56=$55+4; //@line 882 "_elementtree.c"
        var $57=HEAP[$56]; //@line 882 "_elementtree.c"
        var $58=$57+24; //@line 882 "_elementtree.c"
        var $59=HEAP[$58]; //@line 882 "_elementtree.c"
        var $60=$out; //@line 882 "_elementtree.c"
        FUNCTION_TABLE[$59]($60); //@line 882 "_elementtree.c"
        __label__ = 15; break; //@line 882 "_elementtree.c"
      case 15: // $bb14
        $0=0; //@line 883 "_elementtree.c"
        __label__ = 19; break; //@line 883 "_elementtree.c"
      case 16: // $bb15
        var $61=$i; //@line 877 "_elementtree.c"
        var $62=($61) + 1; //@line 877 "_elementtree.c"
        $i=$62; //@line 877 "_elementtree.c"
        __label__ = 17; break; //@line 877 "_elementtree.c"
      case 17: // $bb16
        var $63=$self_addr; //@line 877 "_elementtree.c"
        var $64=$63+20; //@line 877 "_elementtree.c"
        var $65=HEAP[$64]; //@line 877 "_elementtree.c"
        var $66=$65+4; //@line 877 "_elementtree.c"
        var $67=HEAP[$66]; //@line 877 "_elementtree.c"
        var $68=$i; //@line 877 "_elementtree.c"
        var $69=($67) > ($68); //@line 877 "_elementtree.c"
        if ($69) { __label__ = 10; break; } else { __label__ = 18; break; } //@line 877 "_elementtree.c"
      case 18: // $bb17
        var $70=$out; //@line 888 "_elementtree.c"
        $0=$70; //@line 888 "_elementtree.c"
        __label__ = 19; break; //@line 888 "_elementtree.c"
      case 19: // $bb18
        var $71=$0; //@line 863 "_elementtree.c"
        $retval=$71; //@line 863 "_elementtree.c"
        var $retval19=$retval; //@line 863 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 863 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_iterfind($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tag=__stackBase__;
        var $namespaces=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 895 "_elementtree.c"
        var $1=$args_addr; //@line 896 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str19, allocate([$tag,0,0,0,$namespaces,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 896 "_elementtree.c"
        var $3=($2)==0; //@line 896 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 896 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 897 "_elementtree.c"
        __label__ = 3; break; //@line 897 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$namespaces]; //@line 899 "_elementtree.c"
        var $5=HEAP[$tag]; //@line 899 "_elementtree.c"
        var $6=HEAP[_elementpath_obj]; //@line 899 "_elementtree.c"
        var $7=$self_addr; //@line 899 "_elementtree.c"
        var $8=_PyObject_CallMethod($6, __str20, __str13, allocate([$7,0,0,0,$5,0,0,0,$4,0,0,0], ["%struct.ElementObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 899 "_elementtree.c"
        $0=$8; //@line 899 "_elementtree.c"
        __label__ = 3; break; //@line 899 "_elementtree.c"
      case 3: // $bb2
        var $9=$0; //@line 897 "_elementtree.c"
        $retval=$9; //@line 897 "_elementtree.c"
        var $retval3=$retval; //@line 897 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 897 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $value;
        var $key=__stackBase__;
        var $default_value=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$default_value]=__Py_NoneStruct; //@line 910 "_elementtree.c"
        var $1=$args_addr; //@line 911 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str21, allocate([$key,0,0,0,$default_value,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 911 "_elementtree.c"
        var $3=($2)==0; //@line 911 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 912 "_elementtree.c"
        __label__ = 8; break; //@line 912 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 914 "_elementtree.c"
        var $5=$4+20; //@line 914 "_elementtree.c"
        var $6=HEAP[$5]; //@line 914 "_elementtree.c"
        var $7=($6)==0; //@line 914 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 914 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 914 "_elementtree.c"
        var $9=$8+20; //@line 914 "_elementtree.c"
        var $10=HEAP[$9]; //@line 914 "_elementtree.c"
        var $11=$10; //@line 914 "_elementtree.c"
        var $12=HEAP[$11]; //@line 914 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 914 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 914 "_elementtree.c"
      case 4: // $bb3
        var $14=HEAP[$default_value]; //@line 915 "_elementtree.c"
        $value=$14; //@line 915 "_elementtree.c"
        __label__ = 7; break; //@line 915 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$key]; //@line 917 "_elementtree.c"
        var $16=$self_addr; //@line 917 "_elementtree.c"
        var $17=$16+20; //@line 917 "_elementtree.c"
        var $18=HEAP[$17]; //@line 917 "_elementtree.c"
        var $19=$18; //@line 917 "_elementtree.c"
        var $20=HEAP[$19]; //@line 917 "_elementtree.c"
        var $21=_PyDict_GetItem($20, $15); //@line 917 "_elementtree.c"
        $value=$21; //@line 917 "_elementtree.c"
        var $22=$value; //@line 918 "_elementtree.c"
        var $23=($22)==0; //@line 918 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 918 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$default_value]; //@line 919 "_elementtree.c"
        $value=$24; //@line 919 "_elementtree.c"
        __label__ = 7; break; //@line 919 "_elementtree.c"
      case 7: // $bb6
        var $25=$value; //@line 922 "_elementtree.c"
        var $26=$25; //@line 922 "_elementtree.c"
        var $27=HEAP[$26]; //@line 922 "_elementtree.c"
        var $28=($27) + 1; //@line 922 "_elementtree.c"
        var $29=$value; //@line 922 "_elementtree.c"
        var $30=$29; //@line 922 "_elementtree.c"
        HEAP[$30]=$28; //@line 922 "_elementtree.c"
        var $31=$value; //@line 923 "_elementtree.c"
        $0=$31; //@line 923 "_elementtree.c"
        __label__ = 8; break; //@line 923 "_elementtree.c"
      case 8: // $bb7
        var $32=$0; //@line 912 "_elementtree.c"
        $retval=$32; //@line 912 "_elementtree.c"
        var $retval8=$retval; //@line 912 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 912 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getchildren($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i;
        var $list;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 934 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str22, allocate(1, "i32", ALLOC_STACK)); //@line 934 "_elementtree.c"
        var $3=($2)==0; //@line 934 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 934 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 935 "_elementtree.c"
        __label__ = 9; break; //@line 935 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 937 "_elementtree.c"
        var $5=$4+20; //@line 937 "_elementtree.c"
        var $6=HEAP[$5]; //@line 937 "_elementtree.c"
        var $7=($6)==0; //@line 937 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 937 "_elementtree.c"
      case 3: // $bb2
        var $8=_PyList_New(0); //@line 938 "_elementtree.c"
        $0=$8; //@line 938 "_elementtree.c"
        __label__ = 9; break; //@line 938 "_elementtree.c"
      case 4: // $bb3
        var $9=$self_addr; //@line 940 "_elementtree.c"
        var $10=$9+20; //@line 940 "_elementtree.c"
        var $11=HEAP[$10]; //@line 940 "_elementtree.c"
        var $12=$11+4; //@line 940 "_elementtree.c"
        var $13=HEAP[$12]; //@line 940 "_elementtree.c"
        var $14=_PyList_New($13); //@line 940 "_elementtree.c"
        $list=$14; //@line 940 "_elementtree.c"
        var $15=$list; //@line 941 "_elementtree.c"
        var $16=($15)==0; //@line 941 "_elementtree.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 941 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 942 "_elementtree.c"
        __label__ = 9; break; //@line 942 "_elementtree.c"
      case 6: // $bb5
        $i=0; //@line 944 "_elementtree.c"
        var $17=$self_addr; //@line 944 "_elementtree.c"
        var $18=$17+20; //@line 944 "_elementtree.c"
        var $19=HEAP[$18]; //@line 944 "_elementtree.c"
        var $20=$19+4; //@line 944 "_elementtree.c"
        var $21=HEAP[$20]; //@line 944 "_elementtree.c"
        var $22=$i; //@line 944 "_elementtree.c"
        var $23=($21) > ($22); //@line 944 "_elementtree.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 944 "_elementtree.c"
      case 7: // $bb6
        var $24=$self_addr; //@line 945 "_elementtree.c"
        var $25=$24+20; //@line 945 "_elementtree.c"
        var $26=HEAP[$25]; //@line 945 "_elementtree.c"
        var $27=$26+12; //@line 945 "_elementtree.c"
        var $28=HEAP[$27]; //@line 945 "_elementtree.c"
        var $29=$i; //@line 945 "_elementtree.c"
        var $30=$28+4*$29; //@line 945 "_elementtree.c"
        var $31=HEAP[$30]; //@line 945 "_elementtree.c"
        $item=$31; //@line 945 "_elementtree.c"
        var $32=$item; //@line 946 "_elementtree.c"
        var $33=$32; //@line 946 "_elementtree.c"
        var $34=HEAP[$33]; //@line 946 "_elementtree.c"
        var $35=($34) + 1; //@line 946 "_elementtree.c"
        var $36=$item; //@line 946 "_elementtree.c"
        var $37=$36; //@line 946 "_elementtree.c"
        HEAP[$37]=$35; //@line 946 "_elementtree.c"
        var $38=$list; //@line 947 "_elementtree.c"
        var $39=$38; //@line 947 "_elementtree.c"
        var $40=$39+12; //@line 947 "_elementtree.c"
        var $41=HEAP[$40]; //@line 947 "_elementtree.c"
        var $42=$i; //@line 947 "_elementtree.c"
        var $43=$41+4*$42; //@line 947 "_elementtree.c"
        var $44=$item; //@line 947 "_elementtree.c"
        HEAP[$43]=$44; //@line 947 "_elementtree.c"
        var $45=$i; //@line 944 "_elementtree.c"
        var $46=($45) + 1; //@line 944 "_elementtree.c"
        $i=$46; //@line 944 "_elementtree.c"
        var $47=$self_addr; //@line 944 "_elementtree.c"
        var $48=$47+20; //@line 944 "_elementtree.c"
        var $49=HEAP[$48]; //@line 944 "_elementtree.c"
        var $50=$49+4; //@line 944 "_elementtree.c"
        var $51=HEAP[$50]; //@line 944 "_elementtree.c"
        var $52=$i; //@line 944 "_elementtree.c"
        var $53=($51) > ($52); //@line 944 "_elementtree.c"
        if ($53) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 944 "_elementtree.c"
      case 8: // $bb8
        var $54=$list; //@line 950 "_elementtree.c"
        $0=$54; //@line 950 "_elementtree.c"
        __label__ = 9; break; //@line 950 "_elementtree.c"
      case 9: // $bb9
        var $55=$0; //@line 935 "_elementtree.c"
        $retval=$55; //@line 935 "_elementtree.c"
        var $retval10=$retval; //@line 935 "_elementtree.c"
        ;
        return $retval10; //@line 935 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_iter($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $tag=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$tag]=__Py_NoneStruct; //@line 958 "_elementtree.c"
        var $1=$args_addr; //@line 959 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str23, allocate([$tag,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 959 "_elementtree.c"
        var $3=($2)==0; //@line 959 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 959 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 960 "_elementtree.c"
        __label__ = 9; break; //@line 960 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_iter_obj]; //@line 962 "_elementtree.c"
        var $5=($4)==0; //@line 962 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 962 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 963 "_elementtree.c"
        _PyErr_SetString($6, __str24); //@line 963 "_elementtree.c"
        $0=0; //@line 967 "_elementtree.c"
        __label__ = 9; break; //@line 967 "_elementtree.c"
      case 4: // $bb3
        var $7=_PyTuple_New(2); //@line 970 "_elementtree.c"
        $args_addr=$7; //@line 970 "_elementtree.c"
        var $8=$args_addr; //@line 971 "_elementtree.c"
        var $9=($8)==0; //@line 971 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 971 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 972 "_elementtree.c"
        __label__ = 9; break; //@line 972 "_elementtree.c"
      case 6: // $bb5
        var $10=$self_addr; //@line 974 "_elementtree.c"
        var $11=$10; //@line 974 "_elementtree.c"
        var $12=$11; //@line 974 "_elementtree.c"
        var $13=HEAP[$12]; //@line 974 "_elementtree.c"
        var $14=($13) + 1; //@line 974 "_elementtree.c"
        var $15=$11; //@line 974 "_elementtree.c"
        HEAP[$15]=$14; //@line 974 "_elementtree.c"
        var $16=$args_addr; //@line 974 "_elementtree.c"
        var $17=$16; //@line 974 "_elementtree.c"
        var $18=$self_addr; //@line 974 "_elementtree.c"
        var $19=$18; //@line 974 "_elementtree.c"
        var $20=$17+12; //@line 974 "_elementtree.c"
        var $21=$20; //@line 974 "_elementtree.c"
        HEAP[$21]=$19; //@line 974 "_elementtree.c"
        var $22=HEAP[$tag]; //@line 975 "_elementtree.c"
        var $23=$22; //@line 975 "_elementtree.c"
        var $24=HEAP[$23]; //@line 975 "_elementtree.c"
        var $25=($24) + 1; //@line 975 "_elementtree.c"
        var $26=$22; //@line 975 "_elementtree.c"
        HEAP[$26]=$25; //@line 975 "_elementtree.c"
        var $27=$args_addr; //@line 975 "_elementtree.c"
        var $28=$27; //@line 975 "_elementtree.c"
        var $29=HEAP[$tag]; //@line 975 "_elementtree.c"
        var $30=$28+12; //@line 975 "_elementtree.c"
        var $31=$30+4; //@line 975 "_elementtree.c"
        HEAP[$31]=$29; //@line 975 "_elementtree.c"
        var $32=HEAP[_elementtree_iter_obj]; //@line 977 "_elementtree.c"
        var $33=$args_addr; //@line 977 "_elementtree.c"
        var $34=_PyObject_CallObject($32, $33); //@line 977 "_elementtree.c"
        $result=$34; //@line 977 "_elementtree.c"
        var $35=$args_addr; //@line 979 "_elementtree.c"
        var $36=$35; //@line 979 "_elementtree.c"
        var $37=HEAP[$36]; //@line 979 "_elementtree.c"
        var $38=($37) - 1; //@line 979 "_elementtree.c"
        var $39=$args_addr; //@line 979 "_elementtree.c"
        var $40=$39; //@line 979 "_elementtree.c"
        HEAP[$40]=$38; //@line 979 "_elementtree.c"
        var $41=$args_addr; //@line 979 "_elementtree.c"
        var $42=$41; //@line 979 "_elementtree.c"
        var $43=HEAP[$42]; //@line 979 "_elementtree.c"
        var $44=($43)==0; //@line 979 "_elementtree.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 979 "_elementtree.c"
      case 7: // $bb6
        var $45=$args_addr; //@line 979 "_elementtree.c"
        var $46=$45+4; //@line 979 "_elementtree.c"
        var $47=HEAP[$46]; //@line 979 "_elementtree.c"
        var $48=$47+24; //@line 979 "_elementtree.c"
        var $49=HEAP[$48]; //@line 979 "_elementtree.c"
        var $50=$args_addr; //@line 979 "_elementtree.c"
        FUNCTION_TABLE[$49]($50); //@line 979 "_elementtree.c"
        __label__ = 8; break; //@line 979 "_elementtree.c"
      case 8: // $bb7
        var $51=$result; //@line 981 "_elementtree.c"
        $0=$51; //@line 981 "_elementtree.c"
        __label__ = 9; break; //@line 981 "_elementtree.c"
      case 9: // $bb8
        var $52=$0; //@line 960 "_elementtree.c"
        $retval=$52; //@line 960 "_elementtree.c"
        var $retval9=$retval; //@line 960 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 960 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_itertext($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 990 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str25, allocate(1, "i32", ALLOC_STACK)); //@line 990 "_elementtree.c"
        var $3=($2)==0; //@line 990 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 990 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 991 "_elementtree.c"
        __label__ = 9; break; //@line 991 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_itertext_obj]; //@line 993 "_elementtree.c"
        var $5=($4)==0; //@line 993 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 993 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 994 "_elementtree.c"
        _PyErr_SetString($6, __str26); //@line 994 "_elementtree.c"
        $0=0; //@line 998 "_elementtree.c"
        __label__ = 9; break; //@line 998 "_elementtree.c"
      case 4: // $bb3
        var $7=_PyTuple_New(1); //@line 1001 "_elementtree.c"
        $args_addr=$7; //@line 1001 "_elementtree.c"
        var $8=$args_addr; //@line 1002 "_elementtree.c"
        var $9=($8)==0; //@line 1002 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1002 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 1003 "_elementtree.c"
        __label__ = 9; break; //@line 1003 "_elementtree.c"
      case 6: // $bb5
        var $10=$self_addr; //@line 1005 "_elementtree.c"
        var $11=$10; //@line 1005 "_elementtree.c"
        var $12=$11; //@line 1005 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1005 "_elementtree.c"
        var $14=($13) + 1; //@line 1005 "_elementtree.c"
        var $15=$11; //@line 1005 "_elementtree.c"
        HEAP[$15]=$14; //@line 1005 "_elementtree.c"
        var $16=$args_addr; //@line 1005 "_elementtree.c"
        var $17=$16; //@line 1005 "_elementtree.c"
        var $18=$self_addr; //@line 1005 "_elementtree.c"
        var $19=$18; //@line 1005 "_elementtree.c"
        var $20=$17+12; //@line 1005 "_elementtree.c"
        var $21=$20; //@line 1005 "_elementtree.c"
        HEAP[$21]=$19; //@line 1005 "_elementtree.c"
        var $22=HEAP[_elementtree_itertext_obj]; //@line 1007 "_elementtree.c"
        var $23=$args_addr; //@line 1007 "_elementtree.c"
        var $24=_PyObject_CallObject($22, $23); //@line 1007 "_elementtree.c"
        $result=$24; //@line 1007 "_elementtree.c"
        var $25=$args_addr; //@line 1009 "_elementtree.c"
        var $26=$25; //@line 1009 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1009 "_elementtree.c"
        var $28=($27) - 1; //@line 1009 "_elementtree.c"
        var $29=$args_addr; //@line 1009 "_elementtree.c"
        var $30=$29; //@line 1009 "_elementtree.c"
        HEAP[$30]=$28; //@line 1009 "_elementtree.c"
        var $31=$args_addr; //@line 1009 "_elementtree.c"
        var $32=$31; //@line 1009 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1009 "_elementtree.c"
        var $34=($33)==0; //@line 1009 "_elementtree.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1009 "_elementtree.c"
      case 7: // $bb6
        var $35=$args_addr; //@line 1009 "_elementtree.c"
        var $36=$35+4; //@line 1009 "_elementtree.c"
        var $37=HEAP[$36]; //@line 1009 "_elementtree.c"
        var $38=$37+24; //@line 1009 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1009 "_elementtree.c"
        var $40=$args_addr; //@line 1009 "_elementtree.c"
        FUNCTION_TABLE[$39]($40); //@line 1009 "_elementtree.c"
        __label__ = 8; break; //@line 1009 "_elementtree.c"
      case 8: // $bb7
        var $41=$result; //@line 1011 "_elementtree.c"
        $0=$41; //@line 1011 "_elementtree.c"
        __label__ = 9; break; //@line 1011 "_elementtree.c"
      case 9: // $bb8
        var $42=$0; //@line 991 "_elementtree.c"
        $retval=$42; //@line 991 "_elementtree.c"
        var $retval9=$retval; //@line 991 "_elementtree.c"
        ;
        return $retval9; //@line 991 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getitem($self_, $index) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $index_addr;
        var $retval;
        var $0;
        var $self;
        $self__addr=$self_;
        $index_addr=$index;
        var $1=$self__addr; //@line 1017 "_elementtree.c"
        var $2=$1; //@line 1017 "_elementtree.c"
        $self=$2; //@line 1017 "_elementtree.c"
        var $3=$self; //@line 1019 "_elementtree.c"
        var $4=$3+20; //@line 1019 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1019 "_elementtree.c"
        var $6=($5)==0; //@line 1019 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1019 "_elementtree.c"
      case 1: // $bb
        var $7=$index_addr; //@line 1019 "_elementtree.c"
        var $8=($7) < 0; //@line 1019 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1019 "_elementtree.c"
      case 2: // $bb1
        var $9=$self; //@line 1019 "_elementtree.c"
        var $10=$9+20; //@line 1019 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1019 "_elementtree.c"
        var $12=$11+4; //@line 1019 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1019 "_elementtree.c"
        var $14=$index_addr; //@line 1019 "_elementtree.c"
        var $15=($13) <= ($14); //@line 1019 "_elementtree.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1019 "_elementtree.c"
      case 3: // $bb2
        var $16=HEAP[_PyExc_IndexError]; //@line 1020 "_elementtree.c"
        _PyErr_SetString($16, __str27); //@line 1020 "_elementtree.c"
        $0=0; //@line 1024 "_elementtree.c"
        __label__ = 5; break; //@line 1024 "_elementtree.c"
      case 4: // $bb3
        var $17=$self; //@line 1027 "_elementtree.c"
        var $18=$17+20; //@line 1027 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1027 "_elementtree.c"
        var $20=$19+12; //@line 1027 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1027 "_elementtree.c"
        var $22=$index_addr; //@line 1027 "_elementtree.c"
        var $23=$21+4*$22; //@line 1027 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1027 "_elementtree.c"
        var $25=$24; //@line 1027 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1027 "_elementtree.c"
        var $27=($26) + 1; //@line 1027 "_elementtree.c"
        var $28=$24; //@line 1027 "_elementtree.c"
        HEAP[$28]=$27; //@line 1027 "_elementtree.c"
        var $29=$self; //@line 1028 "_elementtree.c"
        var $30=$29+20; //@line 1028 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1028 "_elementtree.c"
        var $32=$31+12; //@line 1028 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1028 "_elementtree.c"
        var $34=$index_addr; //@line 1028 "_elementtree.c"
        var $35=$33+4*$34; //@line 1028 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1028 "_elementtree.c"
        $0=$36; //@line 1028 "_elementtree.c"
        __label__ = 5; break; //@line 1028 "_elementtree.c"
      case 5: // $bb4
        var $37=$0; //@line 1024 "_elementtree.c"
        $retval=$37; //@line 1024 "_elementtree.c"
        var $retval5=$retval; //@line 1024 "_elementtree.c"
        ;
        return $retval5; //@line 1024 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_insert($self, $args) {
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
        var $index=__stackBase__;
        var $element=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1038 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str28, allocate([$index,0,0,0,_Element_Type,0,0,0,$element,0,0,0], ["i32*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1038 "_elementtree.c"
        var $3=($2)==0; //@line 1038 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1038 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1040 "_elementtree.c"
        __label__ = 14; break; //@line 1040 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1042 "_elementtree.c"
        var $5=$4+20; //@line 1042 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1042 "_elementtree.c"
        var $7=($6)==0; //@line 1042 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 1043 "_elementtree.c"
        var $9=_element_new_extra($8, 0); //@line 1043 "_elementtree.c"
        __label__ = 4; break; //@line 1043 "_elementtree.c"
      case 4: // $bb3
        var $10=HEAP[$index]; //@line 1045 "_elementtree.c"
        var $11=($10) < 0; //@line 1045 "_elementtree.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1045 "_elementtree.c"
      case 5: // $bb4
        var $12=$self_addr; //@line 1046 "_elementtree.c"
        var $13=$12+20; //@line 1046 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1046 "_elementtree.c"
        var $15=$14+4; //@line 1046 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1046 "_elementtree.c"
        var $17=HEAP[$index]; //@line 1046 "_elementtree.c"
        var $18=($17) + ($16); //@line 1046 "_elementtree.c"
        HEAP[$index]=$18; //@line 1046 "_elementtree.c"
        var $19=HEAP[$index]; //@line 1047 "_elementtree.c"
        var $20=($19) < 0; //@line 1047 "_elementtree.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1047 "_elementtree.c"
      case 6: // $bb5
        HEAP[$index]=0; //@line 1048 "_elementtree.c"
        __label__ = 7; break; //@line 1048 "_elementtree.c"
      case 7: // $bb6
        var $21=$self_addr; //@line 1050 "_elementtree.c"
        var $22=$21+20; //@line 1050 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1050 "_elementtree.c"
        var $24=$23+4; //@line 1050 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1050 "_elementtree.c"
        var $26=HEAP[$index]; //@line 1050 "_elementtree.c"
        var $27=($25) < ($26); //@line 1050 "_elementtree.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1050 "_elementtree.c"
      case 8: // $bb7
        var $28=$self_addr; //@line 1051 "_elementtree.c"
        var $29=$28+20; //@line 1051 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1051 "_elementtree.c"
        var $31=$30+4; //@line 1051 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1051 "_elementtree.c"
        HEAP[$index]=$32; //@line 1051 "_elementtree.c"
        __label__ = 9; break; //@line 1051 "_elementtree.c"
      case 9: // $bb8
        var $33=$self_addr; //@line 1053 "_elementtree.c"
        var $34=_element_resize($33, 1); //@line 1053 "_elementtree.c"
        var $35=($34) < 0; //@line 1053 "_elementtree.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1053 "_elementtree.c"
      case 10: // $bb9
        $0=0; //@line 1054 "_elementtree.c"
        __label__ = 14; break; //@line 1054 "_elementtree.c"
      case 11: // $bb10
        var $36=$self_addr; //@line 1056 "_elementtree.c"
        var $37=$36+20; //@line 1056 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1056 "_elementtree.c"
        var $39=$38+4; //@line 1056 "_elementtree.c"
        var $40=HEAP[$39]; //@line 1056 "_elementtree.c"
        $i=$40; //@line 1056 "_elementtree.c"
        var $41=HEAP[$index]; //@line 1056 "_elementtree.c"
        var $42=$i; //@line 1056 "_elementtree.c"
        var $43=($42) > ($41); //@line 1056 "_elementtree.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1056 "_elementtree.c"
      case 12: // $bb11
        var $44=$self_addr; //@line 1057 "_elementtree.c"
        var $45=$44+20; //@line 1057 "_elementtree.c"
        var $46=HEAP[$45]; //@line 1057 "_elementtree.c"
        var $47=$46+12; //@line 1057 "_elementtree.c"
        var $48=HEAP[$47]; //@line 1057 "_elementtree.c"
        var $49=$self_addr; //@line 1057 "_elementtree.c"
        var $50=$49+20; //@line 1057 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1057 "_elementtree.c"
        var $52=$51+12; //@line 1057 "_elementtree.c"
        var $53=HEAP[$52]; //@line 1057 "_elementtree.c"
        var $54=$i; //@line 1057 "_elementtree.c"
        var $55=($54) - 1; //@line 1057 "_elementtree.c"
        var $56=$53+4*$55; //@line 1057 "_elementtree.c"
        var $57=HEAP[$56]; //@line 1057 "_elementtree.c"
        var $58=$i; //@line 1057 "_elementtree.c"
        var $59=$48+4*$58; //@line 1057 "_elementtree.c"
        HEAP[$59]=$57; //@line 1057 "_elementtree.c"
        var $60=$i; //@line 1056 "_elementtree.c"
        var $61=($60) - 1; //@line 1056 "_elementtree.c"
        $i=$61; //@line 1056 "_elementtree.c"
        var $62=HEAP[$index]; //@line 1056 "_elementtree.c"
        var $63=$i; //@line 1056 "_elementtree.c"
        var $64=($63) > ($62); //@line 1056 "_elementtree.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1056 "_elementtree.c"
      case 13: // $bb13
        var $65=HEAP[$element]; //@line 1059 "_elementtree.c"
        var $66=$65; //@line 1059 "_elementtree.c"
        var $67=HEAP[$66]; //@line 1059 "_elementtree.c"
        var $68=($67) + 1; //@line 1059 "_elementtree.c"
        var $69=$65; //@line 1059 "_elementtree.c"
        HEAP[$69]=$68; //@line 1059 "_elementtree.c"
        var $70=$self_addr; //@line 1060 "_elementtree.c"
        var $71=$70+20; //@line 1060 "_elementtree.c"
        var $72=HEAP[$71]; //@line 1060 "_elementtree.c"
        var $73=$72+12; //@line 1060 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1060 "_elementtree.c"
        var $75=HEAP[$index]; //@line 1060 "_elementtree.c"
        var $76=HEAP[$element]; //@line 1060 "_elementtree.c"
        var $77=$74+4*$75; //@line 1060 "_elementtree.c"
        HEAP[$77]=$76; //@line 1060 "_elementtree.c"
        var $78=$self_addr; //@line 1062 "_elementtree.c"
        var $79=$78+20; //@line 1062 "_elementtree.c"
        var $80=HEAP[$79]; //@line 1062 "_elementtree.c"
        var $81=$80+4; //@line 1062 "_elementtree.c"
        var $82=HEAP[$81]; //@line 1062 "_elementtree.c"
        var $83=($82) + 1; //@line 1062 "_elementtree.c"
        var $84=$80+4; //@line 1062 "_elementtree.c"
        HEAP[$84]=$83; //@line 1062 "_elementtree.c"
        var $85=HEAP[__Py_NoneStruct]; //@line 1064 "_elementtree.c"
        var $86=($85) + 1; //@line 1064 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$86; //@line 1064 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 1064 "_elementtree.c"
        __label__ = 14; break; //@line 1064 "_elementtree.c"
      case 14: // $bb14
        var $87=$0; //@line 1040 "_elementtree.c"
        $retval=$87; //@line 1040 "_elementtree.c"
        var $retval15=$retval; //@line 1040 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1040 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_items($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1070 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str29, allocate(1, "i32", ALLOC_STACK)); //@line 1070 "_elementtree.c"
        var $3=($2)==0; //@line 1070 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1070 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1071 "_elementtree.c"
        __label__ = 6; break; //@line 1071 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1073 "_elementtree.c"
        var $5=$4+20; //@line 1073 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1073 "_elementtree.c"
        var $7=($6)==0; //@line 1073 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1073 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 1073 "_elementtree.c"
        var $9=$8+20; //@line 1073 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1073 "_elementtree.c"
        var $11=$10; //@line 1073 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1073 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 1073 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1073 "_elementtree.c"
      case 4: // $bb3
        var $14=_PyList_New(0); //@line 1074 "_elementtree.c"
        $0=$14; //@line 1074 "_elementtree.c"
        __label__ = 6; break; //@line 1074 "_elementtree.c"
      case 5: // $bb4
        var $15=$self_addr; //@line 1076 "_elementtree.c"
        var $16=$15+20; //@line 1076 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1076 "_elementtree.c"
        var $18=$17; //@line 1076 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1076 "_elementtree.c"
        var $20=_PyDict_Items($19); //@line 1076 "_elementtree.c"
        $0=$20; //@line 1076 "_elementtree.c"
        __label__ = 6; break; //@line 1076 "_elementtree.c"
      case 6: // $bb5
        var $21=$0; //@line 1071 "_elementtree.c"
        $retval=$21; //@line 1071 "_elementtree.c"
        var $retval6=$retval; //@line 1071 "_elementtree.c"
        ;
        return $retval6; //@line 1071 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_keys($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1082 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str30, allocate(1, "i32", ALLOC_STACK)); //@line 1082 "_elementtree.c"
        var $3=($2)==0; //@line 1082 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1082 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1083 "_elementtree.c"
        __label__ = 6; break; //@line 1083 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1085 "_elementtree.c"
        var $5=$4+20; //@line 1085 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1085 "_elementtree.c"
        var $7=($6)==0; //@line 1085 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1085 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 1085 "_elementtree.c"
        var $9=$8+20; //@line 1085 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1085 "_elementtree.c"
        var $11=$10; //@line 1085 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1085 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 1085 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1085 "_elementtree.c"
      case 4: // $bb3
        var $14=_PyList_New(0); //@line 1086 "_elementtree.c"
        $0=$14; //@line 1086 "_elementtree.c"
        __label__ = 6; break; //@line 1086 "_elementtree.c"
      case 5: // $bb4
        var $15=$self_addr; //@line 1088 "_elementtree.c"
        var $16=$15+20; //@line 1088 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1088 "_elementtree.c"
        var $18=$17; //@line 1088 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1088 "_elementtree.c"
        var $20=_PyDict_Keys($19); //@line 1088 "_elementtree.c"
        $0=$20; //@line 1088 "_elementtree.c"
        __label__ = 6; break; //@line 1088 "_elementtree.c"
      case 6: // $bb5
        var $21=$0; //@line 1083 "_elementtree.c"
        $retval=$21; //@line 1083 "_elementtree.c"
        var $retval6=$retval; //@line 1083 "_elementtree.c"
        ;
        return $retval6; //@line 1083 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_length($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1094 "_elementtree.c"
        var $2=$1+20; //@line 1094 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1094 "_elementtree.c"
        var $4=($3)==0; //@line 1094 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1094 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1095 "_elementtree.c"
        __label__ = 3; break; //@line 1095 "_elementtree.c"
      case 2: // $bb1
        var $5=$self_addr; //@line 1097 "_elementtree.c"
        var $6=$5+20; //@line 1097 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1097 "_elementtree.c"
        var $8=$7+4; //@line 1097 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1097 "_elementtree.c"
        $0=$9; //@line 1097 "_elementtree.c"
        __label__ = 3; break; //@line 1097 "_elementtree.c"
      case 3: // $bb2
        var $10=$0; //@line 1095 "_elementtree.c"
        $retval=$10; //@line 1095 "_elementtree.c"
        var $retval3=$retval; //@line 1095 "_elementtree.c"
        ;
        return $retval3; //@line 1095 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_makeelement($self, $args, $kw) {
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
        var $elem;
        var $tag=__stackBase__;
        var $attrib=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=$args_addr; //@line 1107 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str31, allocate([$tag,0,0,0,$attrib,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1107 "_elementtree.c"
        var $3=($2)==0; //@line 1107 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1107 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1108 "_elementtree.c"
        __label__ = 7; break; //@line 1108 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 1110 "_elementtree.c"
        var $5=_PyDict_Copy($4); //@line 1110 "_elementtree.c"
        HEAP[$attrib]=$5; //@line 1110 "_elementtree.c"
        var $6=HEAP[$attrib]; //@line 1111 "_elementtree.c"
        var $7=($6)==0; //@line 1111 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1111 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 1112 "_elementtree.c"
        __label__ = 7; break; //@line 1112 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$attrib]; //@line 1114 "_elementtree.c"
        var $9=HEAP[$tag]; //@line 1114 "_elementtree.c"
        var $10=_element_new($9, $8); //@line 1114 "_elementtree.c"
        $elem=$10; //@line 1114 "_elementtree.c"
        var $11=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        var $12=$11; //@line 1116 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1116 "_elementtree.c"
        var $14=($13) - 1; //@line 1116 "_elementtree.c"
        var $15=$11; //@line 1116 "_elementtree.c"
        HEAP[$15]=$14; //@line 1116 "_elementtree.c"
        var $16=$11; //@line 1116 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1116 "_elementtree.c"
        var $18=($17)==0; //@line 1116 "_elementtree.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1116 "_elementtree.c"
      case 5: // $bb4
        var $19=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        var $20=$19+4; //@line 1116 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1116 "_elementtree.c"
        var $22=$21+24; //@line 1116 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1116 "_elementtree.c"
        var $24=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        FUNCTION_TABLE[$23]($24); //@line 1116 "_elementtree.c"
        __label__ = 6; break; //@line 1116 "_elementtree.c"
      case 6: // $bb5
        var $25=$elem; //@line 1118 "_elementtree.c"
        $0=$25; //@line 1118 "_elementtree.c"
        __label__ = 7; break; //@line 1118 "_elementtree.c"
      case 7: // $bb6
        var $26=$0; //@line 1108 "_elementtree.c"
        $retval=$26; //@line 1108 "_elementtree.c"
        var $retval7=$retval; //@line 1108 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1108 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_reduce($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1124 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str32, allocate(1, "i32", ALLOC_STACK)); //@line 1124 "_elementtree.c"
        var $3=($2)==0; //@line 1124 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1124 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1125 "_elementtree.c"
        __label__ = 5; break; //@line 1125 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_copyelement_obj]; //@line 1133 "_elementtree.c"
        var $5=($4)==0; //@line 1133 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1133 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 1134 "_elementtree.c"
        _PyErr_SetString($6, __str33); //@line 1134 "_elementtree.c"
        $0=0; //@line 1138 "_elementtree.c"
        __label__ = 5; break; //@line 1138 "_elementtree.c"
      case 4: // $bb3
        var $7=$self_addr; //@line 1141 "_elementtree.c"
        var $8=$args_addr; //@line 1141 "_elementtree.c"
        var $9=_element_copy($7, $8); //@line 1141 "_elementtree.c"
        var $10=HEAP[_elementtree_copyelement_obj]; //@line 1141 "_elementtree.c"
        var $11=_Py_BuildValue(__str34, allocate([$10,0,0,0,$9,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1141 "_elementtree.c"
        $0=$11; //@line 1141 "_elementtree.c"
        __label__ = 5; break; //@line 1141 "_elementtree.c"
      case 5: // $bb4
        var $12=$0; //@line 1125 "_elementtree.c"
        $retval=$12; //@line 1125 "_elementtree.c"
        var $retval5=$retval; //@line 1125 "_elementtree.c"
        ;
        return $retval5; //@line 1125 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_remove($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i;
        var $element=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1152 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str35, allocate([_Element_Type,0,0,0,$element,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1152 "_elementtree.c"
        var $3=($2)==0; //@line 1152 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1152 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1153 "_elementtree.c"
        __label__ = 16; break; //@line 1153 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1155 "_elementtree.c"
        var $5=$4+20; //@line 1155 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1155 "_elementtree.c"
        var $7=($6)==0; //@line 1155 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1155 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_ValueError]; //@line 1157 "_elementtree.c"
        _PyErr_SetString($8, __str36); //@line 1157 "_elementtree.c"
        $0=0; //@line 1161 "_elementtree.c"
        __label__ = 16; break; //@line 1161 "_elementtree.c"
      case 4: // $bb3
        $i=0; //@line 1164 "_elementtree.c"
        __label__ = 8; break; //@line 1164 "_elementtree.c"
      case 5: // $bb4
        var $9=$self_addr; //@line 1165 "_elementtree.c"
        var $10=$9+20; //@line 1165 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1165 "_elementtree.c"
        var $12=$11+12; //@line 1165 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1165 "_elementtree.c"
        var $14=$i; //@line 1165 "_elementtree.c"
        var $15=$13+4*$14; //@line 1165 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1165 "_elementtree.c"
        var $17=HEAP[$element]; //@line 1165 "_elementtree.c"
        var $18=($16)==($17); //@line 1165 "_elementtree.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1165 "_elementtree.c"
      case 6: // $bb5
        var $19=HEAP[$element]; //@line 1167 "_elementtree.c"
        var $20=$self_addr; //@line 1167 "_elementtree.c"
        var $21=$20+20; //@line 1167 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1167 "_elementtree.c"
        var $23=$22+12; //@line 1167 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1167 "_elementtree.c"
        var $25=$i; //@line 1167 "_elementtree.c"
        var $26=$24+4*$25; //@line 1167 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1167 "_elementtree.c"
        var $28=_PyObject_Compare($27, $19); //@line 1167 "_elementtree.c"
        var $29=($28)==0; //@line 1167 "_elementtree.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1167 "_elementtree.c"
      case 7: // $bb6
        var $30=$i; //@line 1164 "_elementtree.c"
        var $31=($30) + 1; //@line 1164 "_elementtree.c"
        $i=$31; //@line 1164 "_elementtree.c"
        __label__ = 8; break; //@line 1164 "_elementtree.c"
      case 8: // $bb7
        var $32=$self_addr; //@line 1164 "_elementtree.c"
        var $33=$32+20; //@line 1164 "_elementtree.c"
        var $34=HEAP[$33]; //@line 1164 "_elementtree.c"
        var $35=$34+4; //@line 1164 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1164 "_elementtree.c"
        var $37=$i; //@line 1164 "_elementtree.c"
        var $38=($36) > ($37); //@line 1164 "_elementtree.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 1164 "_elementtree.c"
      case 9: // $bb8
        var $39=$self_addr; //@line 1171 "_elementtree.c"
        var $40=$39+20; //@line 1171 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1171 "_elementtree.c"
        var $42=$41+4; //@line 1171 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1171 "_elementtree.c"
        var $44=$i; //@line 1171 "_elementtree.c"
        var $45=($43)==($44); //@line 1171 "_elementtree.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1171 "_elementtree.c"
      case 10: // $bb9
        var $46=HEAP[_PyExc_ValueError]; //@line 1173 "_elementtree.c"
        _PyErr_SetString($46, __str36); //@line 1173 "_elementtree.c"
        $0=0; //@line 1177 "_elementtree.c"
        __label__ = 16; break; //@line 1177 "_elementtree.c"
      case 11: // $bb10
        var $47=$self_addr; //@line 1180 "_elementtree.c"
        var $48=$47+20; //@line 1180 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1180 "_elementtree.c"
        var $50=$49+12; //@line 1180 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1180 "_elementtree.c"
        var $52=$i; //@line 1180 "_elementtree.c"
        var $53=$51+4*$52; //@line 1180 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1180 "_elementtree.c"
        var $55=$54; //@line 1180 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1180 "_elementtree.c"
        var $57=($56) - 1; //@line 1180 "_elementtree.c"
        var $58=$54; //@line 1180 "_elementtree.c"
        HEAP[$58]=$57; //@line 1180 "_elementtree.c"
        var $59=$54; //@line 1180 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1180 "_elementtree.c"
        var $61=($60)==0; //@line 1180 "_elementtree.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1180 "_elementtree.c"
      case 12: // $bb11
        var $62=$self_addr; //@line 1180 "_elementtree.c"
        var $63=$62+20; //@line 1180 "_elementtree.c"
        var $64=HEAP[$63]; //@line 1180 "_elementtree.c"
        var $65=$64+12; //@line 1180 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1180 "_elementtree.c"
        var $67=$i; //@line 1180 "_elementtree.c"
        var $68=$66+4*$67; //@line 1180 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1180 "_elementtree.c"
        var $70=$69+4; //@line 1180 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1180 "_elementtree.c"
        var $72=$71+24; //@line 1180 "_elementtree.c"
        var $73=HEAP[$72]; //@line 1180 "_elementtree.c"
        var $74=$self_addr; //@line 1180 "_elementtree.c"
        var $75=$74+20; //@line 1180 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1180 "_elementtree.c"
        var $77=$76+12; //@line 1180 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1180 "_elementtree.c"
        var $79=$i; //@line 1180 "_elementtree.c"
        var $80=$78+4*$79; //@line 1180 "_elementtree.c"
        var $81=HEAP[$80]; //@line 1180 "_elementtree.c"
        FUNCTION_TABLE[$73]($81); //@line 1180 "_elementtree.c"
        __label__ = 13; break; //@line 1180 "_elementtree.c"
      case 13: // $bb12
        var $82=$self_addr; //@line 1182 "_elementtree.c"
        var $83=$82+20; //@line 1182 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1182 "_elementtree.c"
        var $85=$84+4; //@line 1182 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1182 "_elementtree.c"
        var $87=($86) - 1; //@line 1182 "_elementtree.c"
        var $88=$84+4; //@line 1182 "_elementtree.c"
        HEAP[$88]=$87; //@line 1182 "_elementtree.c"
        var $89=$self_addr; //@line 1184 "_elementtree.c"
        var $90=$89+20; //@line 1184 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1184 "_elementtree.c"
        var $92=$91+4; //@line 1184 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1184 "_elementtree.c"
        var $94=$i; //@line 1184 "_elementtree.c"
        var $95=($93) > ($94); //@line 1184 "_elementtree.c"
        if ($95) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1184 "_elementtree.c"
      case 14: // $bb13
        var $96=$self_addr; //@line 1185 "_elementtree.c"
        var $97=$96+20; //@line 1185 "_elementtree.c"
        var $98=HEAP[$97]; //@line 1185 "_elementtree.c"
        var $99=$98+12; //@line 1185 "_elementtree.c"
        var $100=HEAP[$99]; //@line 1185 "_elementtree.c"
        var $101=$self_addr; //@line 1185 "_elementtree.c"
        var $102=$101+20; //@line 1185 "_elementtree.c"
        var $103=HEAP[$102]; //@line 1185 "_elementtree.c"
        var $104=$103+12; //@line 1185 "_elementtree.c"
        var $105=HEAP[$104]; //@line 1185 "_elementtree.c"
        var $106=$i; //@line 1185 "_elementtree.c"
        var $107=($106) + 1; //@line 1185 "_elementtree.c"
        var $108=$105+4*$107; //@line 1185 "_elementtree.c"
        var $109=HEAP[$108]; //@line 1185 "_elementtree.c"
        var $110=$i; //@line 1185 "_elementtree.c"
        var $111=$100+4*$110; //@line 1185 "_elementtree.c"
        HEAP[$111]=$109; //@line 1185 "_elementtree.c"
        var $112=$i; //@line 1184 "_elementtree.c"
        var $113=($112) + 1; //@line 1184 "_elementtree.c"
        $i=$113; //@line 1184 "_elementtree.c"
        var $114=$self_addr; //@line 1184 "_elementtree.c"
        var $115=$114+20; //@line 1184 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1184 "_elementtree.c"
        var $117=$116+4; //@line 1184 "_elementtree.c"
        var $118=HEAP[$117]; //@line 1184 "_elementtree.c"
        var $119=$i; //@line 1184 "_elementtree.c"
        var $120=($118) > ($119); //@line 1184 "_elementtree.c"
        if ($120) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1184 "_elementtree.c"
      case 15: // $bb15
        var $121=HEAP[__Py_NoneStruct]; //@line 1187 "_elementtree.c"
        var $122=($121) + 1; //@line 1187 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$122; //@line 1187 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 1187 "_elementtree.c"
        __label__ = 16; break; //@line 1187 "_elementtree.c"
      case 16: // $bb16
        var $123=$0; //@line 1153 "_elementtree.c"
        $retval=$123; //@line 1153 "_elementtree.c"
        var $retval17=$retval; //@line 1153 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1153 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_repr($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $repr;
        var $tag;
        $self_addr=$self;
        var $1=$self_addr; //@line 1195 "_elementtree.c"
        var $2=$1+8; //@line 1195 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1195 "_elementtree.c"
        var $4=_PyObject_Repr($3); //@line 1195 "_elementtree.c"
        $tag=$4; //@line 1195 "_elementtree.c"
        var $5=$tag; //@line 1196 "_elementtree.c"
        var $6=($5)==0; //@line 1196 "_elementtree.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1196 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1197 "_elementtree.c"
        __label__ = 5; break; //@line 1197 "_elementtree.c"
      case 2: // $bb1
        var $7=$tag; //@line 1199 "_elementtree.c"
        var $8=$7; //@line 1199 "_elementtree.c"
        var $9=$8+20; //@line 1199 "_elementtree.c"
        var $10=$9; //@line 1199 "_elementtree.c"
        var $11=$self_addr; //@line 1199 "_elementtree.c"
        var $12=_PyString_FromFormat(__str37, allocate([$10,0,0,0,$11,0,0,0], ["i8*",0,0,0,"%struct.ElementObject*",0,0,0], ALLOC_STACK)); //@line 1199 "_elementtree.c"
        $repr=$12; //@line 1199 "_elementtree.c"
        var $13=$tag; //@line 1202 "_elementtree.c"
        var $14=$13; //@line 1202 "_elementtree.c"
        var $15=HEAP[$14]; //@line 1202 "_elementtree.c"
        var $16=($15) - 1; //@line 1202 "_elementtree.c"
        var $17=$tag; //@line 1202 "_elementtree.c"
        var $18=$17; //@line 1202 "_elementtree.c"
        HEAP[$18]=$16; //@line 1202 "_elementtree.c"
        var $19=$tag; //@line 1202 "_elementtree.c"
        var $20=$19; //@line 1202 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1202 "_elementtree.c"
        var $22=($21)==0; //@line 1202 "_elementtree.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1202 "_elementtree.c"
      case 3: // $bb2
        var $23=$tag; //@line 1202 "_elementtree.c"
        var $24=$23+4; //@line 1202 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1202 "_elementtree.c"
        var $26=$25+24; //@line 1202 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1202 "_elementtree.c"
        var $28=$tag; //@line 1202 "_elementtree.c"
        FUNCTION_TABLE[$27]($28); //@line 1202 "_elementtree.c"
        __label__ = 4; break; //@line 1202 "_elementtree.c"
      case 4: // $bb3
        var $29=$repr; //@line 1204 "_elementtree.c"
        $0=$29; //@line 1204 "_elementtree.c"
        __label__ = 5; break; //@line 1204 "_elementtree.c"
      case 5: // $bb4
        var $30=$0; //@line 1197 "_elementtree.c"
        $retval=$30; //@line 1197 "_elementtree.c"
        var $retval5=$retval; //@line 1197 "_elementtree.c"
        ;
        return $retval5; //@line 1197 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_set($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $attrib;
        var $key=__stackBase__;
        var $value=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1214 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str38, allocate([$key,0,0,0,$value,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1214 "_elementtree.c"
        var $3=($2)==0; //@line 1214 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1214 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1215 "_elementtree.c"
        __label__ = 9; break; //@line 1215 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1217 "_elementtree.c"
        var $5=$4+20; //@line 1217 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1217 "_elementtree.c"
        var $7=($6)==0; //@line 1217 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1217 "_elementtree.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 1218 "_elementtree.c"
        var $9=_element_new_extra($8, 0); //@line 1218 "_elementtree.c"
        __label__ = 4; break; //@line 1218 "_elementtree.c"
      case 4: // $bb3
        var $10=$self_addr; //@line 1220 "_elementtree.c"
        var $11=_element_get_attrib($10); //@line 1220 "_elementtree.c"
        $attrib=$11; //@line 1220 "_elementtree.c"
        var $12=($11)==0; //@line 1221 "_elementtree.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1221 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 1222 "_elementtree.c"
        __label__ = 9; break; //@line 1222 "_elementtree.c"
      case 6: // $bb5
        var $13=HEAP[$value]; //@line 1224 "_elementtree.c"
        var $14=HEAP[$key]; //@line 1224 "_elementtree.c"
        var $15=$attrib; //@line 1224 "_elementtree.c"
        var $16=_PyDict_SetItem($15, $14, $13); //@line 1224 "_elementtree.c"
        var $17=($16) < 0; //@line 1224 "_elementtree.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1224 "_elementtree.c"
      case 7: // $bb6
        $0=0; //@line 1225 "_elementtree.c"
        __label__ = 9; break; //@line 1225 "_elementtree.c"
      case 8: // $bb7
        var $18=HEAP[__Py_NoneStruct]; //@line 1227 "_elementtree.c"
        var $19=($18) + 1; //@line 1227 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$19; //@line 1227 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 1227 "_elementtree.c"
        __label__ = 9; break; //@line 1227 "_elementtree.c"
      case 9: // $bb8
        var $20=$0; //@line 1215 "_elementtree.c"
        $retval=$20; //@line 1215 "_elementtree.c"
        var $retval9=$retval; //@line 1215 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1215 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_setitem($self_, $index, $item) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $index_addr;
        var $item_addr;
        var $retval;
        var $0;
        var $self;
        var $i;
        var $old;
        $self__addr=$self_;
        $index_addr=$index;
        $item_addr=$item;
        var $1=$self__addr; //@line 1233 "_elementtree.c"
        var $2=$1; //@line 1233 "_elementtree.c"
        $self=$2; //@line 1233 "_elementtree.c"
        var $3=$self; //@line 1237 "_elementtree.c"
        var $4=$3+20; //@line 1237 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1237 "_elementtree.c"
        var $6=($5)==0; //@line 1237 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1237 "_elementtree.c"
      case 1: // $bb
        var $7=$index_addr; //@line 1237 "_elementtree.c"
        var $8=($7) < 0; //@line 1237 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1237 "_elementtree.c"
      case 2: // $bb1
        var $9=$self; //@line 1237 "_elementtree.c"
        var $10=$9+20; //@line 1237 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1237 "_elementtree.c"
        var $12=$11+4; //@line 1237 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1237 "_elementtree.c"
        var $14=$index_addr; //@line 1237 "_elementtree.c"
        var $15=($13) <= ($14); //@line 1237 "_elementtree.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1237 "_elementtree.c"
      case 3: // $bb2
        var $16=HEAP[_PyExc_IndexError]; //@line 1238 "_elementtree.c"
        _PyErr_SetString($16, __str39); //@line 1238 "_elementtree.c"
        $0=-1; //@line 1241 "_elementtree.c"
        __label__ = 11; break; //@line 1241 "_elementtree.c"
      case 4: // $bb3
        var $17=$self; //@line 1244 "_elementtree.c"
        var $18=$17+20; //@line 1244 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1244 "_elementtree.c"
        var $20=$19+12; //@line 1244 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1244 "_elementtree.c"
        var $22=$index_addr; //@line 1244 "_elementtree.c"
        var $23=$21+4*$22; //@line 1244 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1244 "_elementtree.c"
        $old=$24; //@line 1244 "_elementtree.c"
        var $25=$item_addr; //@line 1246 "_elementtree.c"
        var $26=($25)!=0; //@line 1246 "_elementtree.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1246 "_elementtree.c"
      case 5: // $bb4
        var $27=$item_addr; //@line 1247 "_elementtree.c"
        var $28=$27; //@line 1247 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1247 "_elementtree.c"
        var $30=($29) + 1; //@line 1247 "_elementtree.c"
        var $31=$item_addr; //@line 1247 "_elementtree.c"
        var $32=$31; //@line 1247 "_elementtree.c"
        HEAP[$32]=$30; //@line 1247 "_elementtree.c"
        var $33=$self; //@line 1248 "_elementtree.c"
        var $34=$33+20; //@line 1248 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1248 "_elementtree.c"
        var $36=$35+12; //@line 1248 "_elementtree.c"
        var $37=HEAP[$36]; //@line 1248 "_elementtree.c"
        var $38=$index_addr; //@line 1248 "_elementtree.c"
        var $39=$37+4*$38; //@line 1248 "_elementtree.c"
        var $40=$item_addr; //@line 1248 "_elementtree.c"
        HEAP[$39]=$40; //@line 1248 "_elementtree.c"
        __label__ = 8; break; //@line 1248 "_elementtree.c"
      case 6: // $bb5
        var $41=$self; //@line 1250 "_elementtree.c"
        var $42=$41+20; //@line 1250 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1250 "_elementtree.c"
        var $44=$43+4; //@line 1250 "_elementtree.c"
        var $45=HEAP[$44]; //@line 1250 "_elementtree.c"
        var $46=($45) - 1; //@line 1250 "_elementtree.c"
        var $47=$43+4; //@line 1250 "_elementtree.c"
        HEAP[$47]=$46; //@line 1250 "_elementtree.c"
        var $48=$index_addr; //@line 1251 "_elementtree.c"
        $i=$48; //@line 1251 "_elementtree.c"
        var $49=$self; //@line 1251 "_elementtree.c"
        var $50=$49+20; //@line 1251 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1251 "_elementtree.c"
        var $52=$51+4; //@line 1251 "_elementtree.c"
        var $53=HEAP[$52]; //@line 1251 "_elementtree.c"
        var $54=$i; //@line 1251 "_elementtree.c"
        var $55=($53) > ($54); //@line 1251 "_elementtree.c"
        if ($55) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1251 "_elementtree.c"
      case 7: // $bb6
        var $56=$self; //@line 1252 "_elementtree.c"
        var $57=$56+20; //@line 1252 "_elementtree.c"
        var $58=HEAP[$57]; //@line 1252 "_elementtree.c"
        var $59=$58+12; //@line 1252 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1252 "_elementtree.c"
        var $61=$self; //@line 1252 "_elementtree.c"
        var $62=$61+20; //@line 1252 "_elementtree.c"
        var $63=HEAP[$62]; //@line 1252 "_elementtree.c"
        var $64=$63+12; //@line 1252 "_elementtree.c"
        var $65=HEAP[$64]; //@line 1252 "_elementtree.c"
        var $66=$i; //@line 1252 "_elementtree.c"
        var $67=($66) + 1; //@line 1252 "_elementtree.c"
        var $68=$65+4*$67; //@line 1252 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1252 "_elementtree.c"
        var $70=$i; //@line 1252 "_elementtree.c"
        var $71=$60+4*$70; //@line 1252 "_elementtree.c"
        HEAP[$71]=$69; //@line 1252 "_elementtree.c"
        var $72=$i; //@line 1251 "_elementtree.c"
        var $73=($72) + 1; //@line 1251 "_elementtree.c"
        $i=$73; //@line 1251 "_elementtree.c"
        var $74=$self; //@line 1251 "_elementtree.c"
        var $75=$74+20; //@line 1251 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1251 "_elementtree.c"
        var $77=$76+4; //@line 1251 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1251 "_elementtree.c"
        var $79=$i; //@line 1251 "_elementtree.c"
        var $80=($78) > ($79); //@line 1251 "_elementtree.c"
        if ($80) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1251 "_elementtree.c"
      case 8: // $bb8
        var $81=$old; //@line 1255 "_elementtree.c"
        var $82=$81; //@line 1255 "_elementtree.c"
        var $83=HEAP[$82]; //@line 1255 "_elementtree.c"
        var $84=($83) - 1; //@line 1255 "_elementtree.c"
        var $85=$old; //@line 1255 "_elementtree.c"
        var $86=$85; //@line 1255 "_elementtree.c"
        HEAP[$86]=$84; //@line 1255 "_elementtree.c"
        var $87=$old; //@line 1255 "_elementtree.c"
        var $88=$87; //@line 1255 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1255 "_elementtree.c"
        var $90=($89)==0; //@line 1255 "_elementtree.c"
        if ($90) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1255 "_elementtree.c"
      case 9: // $bb9
        var $91=$old; //@line 1255 "_elementtree.c"
        var $92=$91+4; //@line 1255 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1255 "_elementtree.c"
        var $94=$93+24; //@line 1255 "_elementtree.c"
        var $95=HEAP[$94]; //@line 1255 "_elementtree.c"
        var $96=$old; //@line 1255 "_elementtree.c"
        FUNCTION_TABLE[$95]($96); //@line 1255 "_elementtree.c"
        __label__ = 10; break; //@line 1255 "_elementtree.c"
      case 10: // $bb10
        $0=0; //@line 1257 "_elementtree.c"
        __label__ = 11; break; //@line 1257 "_elementtree.c"
      case 11: // $bb11
        var $97=$0; //@line 1241 "_elementtree.c"
        $retval=$97; //@line 1241 "_elementtree.c"
        var $retval12=$retval; //@line 1241 "_elementtree.c"
        ;
        return $retval12; //@line 1241 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_subscr($self_, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $item_addr;
        var $retval;
        var $0;
        var $self;
        var $i;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelen=__stackBase__+12;
        var $cur;
        var $i11;
        var $list;
        var $item21;
        $self__addr=$self_;
        $item_addr=$item;
        var $1=$self__addr; //@line 1263 "_elementtree.c"
        var $2=$1; //@line 1263 "_elementtree.c"
        $self=$2; //@line 1263 "_elementtree.c"
        var $3=$item_addr; //@line 1269 "_elementtree.c"
        var $4=$3+4; //@line 1269 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1269 "_elementtree.c"
        var $6=$5+48; //@line 1269 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1269 "_elementtree.c"
        var $8=($7)==0; //@line 1269 "_elementtree.c"
        if ($8) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 1269 "_elementtree.c"
      case 1: // $bb
        var $9=$item_addr; //@line 1269 "_elementtree.c"
        var $10=$9+4; //@line 1269 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1269 "_elementtree.c"
        var $12=$11+84; //@line 1269 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1269 "_elementtree.c"
        var $14=($13) & 131072; //@line 1269 "_elementtree.c"
        var $15=($14)==0; //@line 1269 "_elementtree.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 2; break; } //@line 1269 "_elementtree.c"
      case 2: // $bb1
        var $16=$item_addr; //@line 1269 "_elementtree.c"
        var $17=$16+4; //@line 1269 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1269 "_elementtree.c"
        var $19=$18+48; //@line 1269 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1269 "_elementtree.c"
        var $21=$20+152; //@line 1269 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1269 "_elementtree.c"
        var $23=($22)==0; //@line 1269 "_elementtree.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 1269 "_elementtree.c"
      case 3: // $bb2
        var $24=HEAP[_PyExc_IndexError]; //@line 1270 "_elementtree.c"
        var $25=$item_addr; //@line 1270 "_elementtree.c"
        var $26=_PyNumber_AsSsize_t($25, $24); //@line 1270 "_elementtree.c"
        $i=$26; //@line 1270 "_elementtree.c"
        var $27=$i; //@line 1273 "_elementtree.c"
        var $28=($27)==-1; //@line 1273 "_elementtree.c"
        if ($28) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 1273 "_elementtree.c"
      case 4: // $bb3
        var $29=_PyErr_Occurred(); //@line 1273 "_elementtree.c"
        var $30=($29)!=0; //@line 1273 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1273 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 1274 "_elementtree.c"
        __label__ = 24; break; //@line 1274 "_elementtree.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $31=__lastLabel__ == 6 ? $_pr : ($27);
        var $32=($31) < 0; //@line 1276 "_elementtree.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1276 "_elementtree.c"
      case 8: // $bb6
        var $33=$self; //@line 1276 "_elementtree.c"
        var $34=$33+20; //@line 1276 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1276 "_elementtree.c"
        var $36=($35)!=0; //@line 1276 "_elementtree.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1276 "_elementtree.c"
      case 9: // $bb7
        var $37=$self; //@line 1277 "_elementtree.c"
        var $38=$37+20; //@line 1277 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1277 "_elementtree.c"
        var $40=$39+4; //@line 1277 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1277 "_elementtree.c"
        var $42=$i; //@line 1277 "_elementtree.c"
        var $43=($42) + ($41); //@line 1277 "_elementtree.c"
        $i=$43; //@line 1277 "_elementtree.c"
        __label__ = 10; break; //@line 1277 "_elementtree.c"
      case 10: // $bb8
        var $44=$self__addr; //@line 1278 "_elementtree.c"
        var $45=$i; //@line 1278 "_elementtree.c"
        var $46=_element_getitem($44, $45); //@line 1278 "_elementtree.c"
        $0=$46; //@line 1278 "_elementtree.c"
        __label__ = 24; break; //@line 1278 "_elementtree.c"
      case 11: // $bb9
        var $47=$item_addr; //@line 1280 "_elementtree.c"
        var $48=$47+4; //@line 1280 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1280 "_elementtree.c"
        var $50=($49)==(_PySlice_Type); //@line 1280 "_elementtree.c"
        if ($50) { __label__ = 12; break; } else { __label__ = 23; break; } //@line 1280 "_elementtree.c"
      case 12: // $bb10
        var $51=$self; //@line 1284 "_elementtree.c"
        var $52=$51+20; //@line 1284 "_elementtree.c"
        var $53=HEAP[$52]; //@line 1284 "_elementtree.c"
        var $54=($53)==0; //@line 1284 "_elementtree.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1284 "_elementtree.c"
      case 13: // $bb12
        var $55=_PyList_New(0); //@line 1285 "_elementtree.c"
        $0=$55; //@line 1285 "_elementtree.c"
        __label__ = 24; break; //@line 1285 "_elementtree.c"
      case 14: // $bb13
        var $56=$self; //@line 1287 "_elementtree.c"
        var $57=$56+20; //@line 1287 "_elementtree.c"
        var $58=HEAP[$57]; //@line 1287 "_elementtree.c"
        var $59=$58+4; //@line 1287 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1287 "_elementtree.c"
        var $61=$item_addr; //@line 1287 "_elementtree.c"
        var $62=$61; //@line 1287 "_elementtree.c"
        var $63=_PySlice_GetIndicesEx($62, $60, $start, $stop, $step, $slicelen); //@line 1287 "_elementtree.c"
        var $64=($63) < 0; //@line 1287 "_elementtree.c"
        if ($64) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1287 "_elementtree.c"
      case 15: // $bb14
        $0=0; //@line 1290 "_elementtree.c"
        __label__ = 24; break; //@line 1290 "_elementtree.c"
      case 16: // $bb15
        var $65=HEAP[$slicelen]; //@line 1293 "_elementtree.c"
        var $66=($65) <= 0; //@line 1293 "_elementtree.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1293 "_elementtree.c"
      case 17: // $bb16
        var $67=_PyList_New(0); //@line 1294 "_elementtree.c"
        $0=$67; //@line 1294 "_elementtree.c"
        __label__ = 24; break; //@line 1294 "_elementtree.c"
      case 18: // $bb17
        var $68=HEAP[$slicelen]; //@line 1296 "_elementtree.c"
        var $69=_PyList_New($68); //@line 1296 "_elementtree.c"
        $list=$69; //@line 1296 "_elementtree.c"
        var $70=$list; //@line 1297 "_elementtree.c"
        var $71=($70)==0; //@line 1297 "_elementtree.c"
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1297 "_elementtree.c"
      case 19: // $bb18
        $0=0; //@line 1298 "_elementtree.c"
        __label__ = 24; break; //@line 1298 "_elementtree.c"
      case 20: // $bb19
        var $72=HEAP[$start]; //@line 1300 "_elementtree.c"
        $cur=$72; //@line 1300 "_elementtree.c"
        $i11=0; //@line 1300 "_elementtree.c"
        var $73=HEAP[$slicelen]; //@line 1300 "_elementtree.c"
        var $74=$i11; //@line 1300 "_elementtree.c"
        var $75=($74) < ($73); //@line 1300 "_elementtree.c"
        if ($75) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1300 "_elementtree.c"
      case 21: // $bb20
        var $76=$self; //@line 1302 "_elementtree.c"
        var $77=$76+20; //@line 1302 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1302 "_elementtree.c"
        var $79=$78+12; //@line 1302 "_elementtree.c"
        var $80=HEAP[$79]; //@line 1302 "_elementtree.c"
        var $81=$cur; //@line 1302 "_elementtree.c"
        var $82=$80+4*$81; //@line 1302 "_elementtree.c"
        var $83=HEAP[$82]; //@line 1302 "_elementtree.c"
        $item21=$83; //@line 1302 "_elementtree.c"
        var $84=$item21; //@line 1303 "_elementtree.c"
        var $85=$84; //@line 1303 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1303 "_elementtree.c"
        var $87=($86) + 1; //@line 1303 "_elementtree.c"
        var $88=$item21; //@line 1303 "_elementtree.c"
        var $89=$88; //@line 1303 "_elementtree.c"
        HEAP[$89]=$87; //@line 1303 "_elementtree.c"
        var $90=$list; //@line 1304 "_elementtree.c"
        var $91=$90; //@line 1304 "_elementtree.c"
        var $92=$91+12; //@line 1304 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1304 "_elementtree.c"
        var $94=$i11; //@line 1304 "_elementtree.c"
        var $95=$93+4*$94; //@line 1304 "_elementtree.c"
        var $96=$item21; //@line 1304 "_elementtree.c"
        HEAP[$95]=$96; //@line 1304 "_elementtree.c"
        var $97=HEAP[$step]; //@line 1301 "_elementtree.c"
        var $98=$cur; //@line 1301 "_elementtree.c"
        var $99=($98) + ($97); //@line 1301 "_elementtree.c"
        $cur=$99; //@line 1301 "_elementtree.c"
        var $100=$i11; //@line 1301 "_elementtree.c"
        var $101=($100) + 1; //@line 1301 "_elementtree.c"
        $i11=$101; //@line 1301 "_elementtree.c"
        var $102=HEAP[$slicelen]; //@line 1300 "_elementtree.c"
        var $103=$i11; //@line 1300 "_elementtree.c"
        var $104=($103) < ($102); //@line 1300 "_elementtree.c"
        if ($104) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1300 "_elementtree.c"
      case 22: // $bb23
        var $105=$list; //@line 1307 "_elementtree.c"
        $0=$105; //@line 1307 "_elementtree.c"
        __label__ = 24; break; //@line 1307 "_elementtree.c"
      case 23: // $bb24
        var $106=HEAP[_PyExc_TypeError]; //@line 1311 "_elementtree.c"
        _PyErr_SetString($106, __str40); //@line 1311 "_elementtree.c"
        $0=0; //@line 1313 "_elementtree.c"
        __label__ = 24; break; //@line 1313 "_elementtree.c"
      case 24: // $bb25
        var $107=$0; //@line 1274 "_elementtree.c"
        $retval=$107; //@line 1274 "_elementtree.c"
        var $retval26=$retval; //@line 1274 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1274 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_ass_subscr($self_, $item, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $item_addr;
        var $value_addr;
        var $retval;
        var $iftmp_171;
        var $0;
        var $self;
        var $i;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelen=__stackBase__+12;
        var $newlen;
        var $cur;
        var $i11;
        var $recycle;
        var $seq;
        var $element;
        $self__addr=$self_;
        $item_addr=$item;
        $value_addr=$value;
        var $1=$self__addr; //@line 1320 "_elementtree.c"
        var $2=$1; //@line 1320 "_elementtree.c"
        $self=$2; //@line 1320 "_elementtree.c"
        var $3=$item_addr; //@line 1326 "_elementtree.c"
        var $4=$3+4; //@line 1326 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1326 "_elementtree.c"
        var $6=$5+48; //@line 1326 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1326 "_elementtree.c"
        var $8=($7)==0; //@line 1326 "_elementtree.c"
        if ($8) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 1326 "_elementtree.c"
      case 1: // $bb
        var $9=$item_addr; //@line 1326 "_elementtree.c"
        var $10=$9+4; //@line 1326 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1326 "_elementtree.c"
        var $12=$11+84; //@line 1326 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1326 "_elementtree.c"
        var $14=($13) & 131072; //@line 1326 "_elementtree.c"
        var $15=($14)==0; //@line 1326 "_elementtree.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 2; break; } //@line 1326 "_elementtree.c"
      case 2: // $bb1
        var $16=$item_addr; //@line 1326 "_elementtree.c"
        var $17=$16+4; //@line 1326 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1326 "_elementtree.c"
        var $19=$18+48; //@line 1326 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1326 "_elementtree.c"
        var $21=$20+152; //@line 1326 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1326 "_elementtree.c"
        var $23=($22)==0; //@line 1326 "_elementtree.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 1326 "_elementtree.c"
      case 3: // $bb2
        var $24=HEAP[_PyExc_IndexError]; //@line 1327 "_elementtree.c"
        var $25=$item_addr; //@line 1327 "_elementtree.c"
        var $26=_PyNumber_AsSsize_t($25, $24); //@line 1327 "_elementtree.c"
        $i=$26; //@line 1327 "_elementtree.c"
        var $27=$i; //@line 1330 "_elementtree.c"
        var $28=($27)==-1; //@line 1330 "_elementtree.c"
        if ($28) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 1330 "_elementtree.c"
      case 4: // $bb3
        var $29=_PyErr_Occurred(); //@line 1330 "_elementtree.c"
        var $30=($29)!=0; //@line 1330 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1330 "_elementtree.c"
      case 5: // $bb4
        $0=-1; //@line 1331 "_elementtree.c"
        __label__ = 58; break; //@line 1331 "_elementtree.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $31=__lastLabel__ == 6 ? $_pr : ($27);
        var $32=($31) < 0; //@line 1333 "_elementtree.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1333 "_elementtree.c"
      case 8: // $bb6
        var $33=$self; //@line 1333 "_elementtree.c"
        var $34=$33+20; //@line 1333 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1333 "_elementtree.c"
        var $36=($35)!=0; //@line 1333 "_elementtree.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1333 "_elementtree.c"
      case 9: // $bb7
        var $37=$self; //@line 1334 "_elementtree.c"
        var $38=$37+20; //@line 1334 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1334 "_elementtree.c"
        var $40=$39+4; //@line 1334 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1334 "_elementtree.c"
        var $42=$i; //@line 1334 "_elementtree.c"
        var $43=($42) + ($41); //@line 1334 "_elementtree.c"
        $i=$43; //@line 1334 "_elementtree.c"
        __label__ = 10; break; //@line 1334 "_elementtree.c"
      case 10: // $bb8
        var $44=$self__addr; //@line 1335 "_elementtree.c"
        var $45=$i; //@line 1335 "_elementtree.c"
        var $46=$value_addr; //@line 1335 "_elementtree.c"
        var $47=_element_setitem($44, $45, $46); //@line 1335 "_elementtree.c"
        $0=$47; //@line 1335 "_elementtree.c"
        __label__ = 58; break; //@line 1335 "_elementtree.c"
      case 11: // $bb9
        var $48=$item_addr; //@line 1337 "_elementtree.c"
        var $49=$48+4; //@line 1337 "_elementtree.c"
        var $50=HEAP[$49]; //@line 1337 "_elementtree.c"
        var $51=($50)==(_PySlice_Type); //@line 1337 "_elementtree.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 57; break; } //@line 1337 "_elementtree.c"
      case 12: // $bb10
        $recycle=0; //@line 1340 "_elementtree.c"
        $seq=0; //@line 1341 "_elementtree.c"
        var $52=$self; //@line 1343 "_elementtree.c"
        var $53=$52+20; //@line 1343 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1343 "_elementtree.c"
        var $55=($54)==0; //@line 1343 "_elementtree.c"
        if ($55) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1343 "_elementtree.c"
      case 13: // $bb12
        var $56=$self; //@line 1344 "_elementtree.c"
        var $57=_element_new_extra($56, 0); //@line 1344 "_elementtree.c"
        __label__ = 14; break; //@line 1344 "_elementtree.c"
      case 14: // $bb13
        var $58=$self; //@line 1346 "_elementtree.c"
        var $59=$58+20; //@line 1346 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1346 "_elementtree.c"
        var $61=$60+4; //@line 1346 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1346 "_elementtree.c"
        var $63=$item_addr; //@line 1346 "_elementtree.c"
        var $64=$63; //@line 1346 "_elementtree.c"
        var $65=_PySlice_GetIndicesEx($64, $62, $start, $stop, $step, $slicelen); //@line 1346 "_elementtree.c"
        var $66=($65) < 0; //@line 1346 "_elementtree.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1346 "_elementtree.c"
      case 15: // $bb14
        $0=-1; //@line 1349 "_elementtree.c"
        __label__ = 58; break; //@line 1349 "_elementtree.c"
      case 16: // $bb15
        var $67=$value_addr; //@line 1352 "_elementtree.c"
        var $68=($67)==0; //@line 1352 "_elementtree.c"
        if ($68) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1352 "_elementtree.c"
      case 17: // $bb16
        $newlen=0; //@line 1353 "_elementtree.c"
        __label__ = 21; break; //@line 1353 "_elementtree.c"
      case 18: // $bb17
        var $69=$value_addr; //@line 1355 "_elementtree.c"
        var $70=_PySequence_Fast($69, __str1); //@line 1355 "_elementtree.c"
        $seq=$70; //@line 1355 "_elementtree.c"
        var $71=$seq; //@line 1356 "_elementtree.c"
        var $72=($71)==0; //@line 1356 "_elementtree.c"
        if ($72) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1356 "_elementtree.c"
      case 19: // $bb18
        var $73=$value_addr; //@line 1357 "_elementtree.c"
        var $74=$73+4; //@line 1357 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1357 "_elementtree.c"
        var $76=$75+12; //@line 1357 "_elementtree.c"
        var $77=HEAP[$76]; //@line 1357 "_elementtree.c"
        var $78=HEAP[_PyExc_TypeError]; //@line 1357 "_elementtree.c"
        var $79=_PyErr_Format($78, __str10, allocate([$77,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1357 "_elementtree.c"
        $0=-1; //@line 1361 "_elementtree.c"
        __label__ = 58; break; //@line 1361 "_elementtree.c"
      case 20: // $bb19
        var $80=$seq; //@line 1363 "_elementtree.c"
        var $81=_PySequence_Size($80); //@line 1363 "_elementtree.c"
        $newlen=$81; //@line 1363 "_elementtree.c"
        __label__ = 21; break; //@line 1363 "_elementtree.c"
      case 21: // $bb20
        var $82=HEAP[$step]; //@line 1366 "_elementtree.c"
        var $83=($82)!=1; //@line 1366 "_elementtree.c"
        if ($83) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 1366 "_elementtree.c"
      case 22: // $bb21
        var $84=HEAP[$slicelen]; //@line 1366 "_elementtree.c"
        var $85=$newlen; //@line 1366 "_elementtree.c"
        var $86=($85)!=($84); //@line 1366 "_elementtree.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1366 "_elementtree.c"
      case 23: // $bb22
        var $87=HEAP[$slicelen]; //@line 1368 "_elementtree.c"
        var $88=HEAP[_PyExc_ValueError]; //@line 1368 "_elementtree.c"
        var $89=$newlen; //@line 1368 "_elementtree.c"
        var $90=_PyErr_Format($88, __str41, allocate([$89,0,0,0,$87,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1368 "_elementtree.c"
        $0=-1; //@line 1378 "_elementtree.c"
        __label__ = 58; break; //@line 1378 "_elementtree.c"
      case 24: // $bb23
        var $91=HEAP[$slicelen]; //@line 1383 "_elementtree.c"
        var $92=$newlen; //@line 1383 "_elementtree.c"
        var $93=($92) > ($91); //@line 1383 "_elementtree.c"
        if ($93) { __lastLabel__ = 24; __label__ = 25; break; } else { __lastLabel__ = 24; __label__ = 31; break; } //@line 1383 "_elementtree.c"
      case 25: // $bb24
        var $94=HEAP[$slicelen]; //@line 1384 "_elementtree.c"
        var $95=$newlen; //@line 1384 "_elementtree.c"
        var $96=($95) - ($94); //@line 1384 "_elementtree.c"
        var $97=$self; //@line 1384 "_elementtree.c"
        var $98=_element_resize($97, $96); //@line 1384 "_elementtree.c"
        var $99=($98) < 0; //@line 1384 "_elementtree.c"
        if ($99) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1384 "_elementtree.c"
      case 26: // $bb25
        var $100=$seq; //@line 1385 "_elementtree.c"
        var $101=($100)!=0; //@line 1385 "_elementtree.c"
        if ($101) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1385 "_elementtree.c"
      case 27: // $bb26
        var $102=$seq; //@line 1386 "_elementtree.c"
        var $103=$102; //@line 1386 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1386 "_elementtree.c"
        var $105=($104) - 1; //@line 1386 "_elementtree.c"
        var $106=$seq; //@line 1386 "_elementtree.c"
        var $107=$106; //@line 1386 "_elementtree.c"
        HEAP[$107]=$105; //@line 1386 "_elementtree.c"
        var $108=$seq; //@line 1386 "_elementtree.c"
        var $109=$108; //@line 1386 "_elementtree.c"
        var $110=HEAP[$109]; //@line 1386 "_elementtree.c"
        var $111=($110)==0; //@line 1386 "_elementtree.c"
        if ($111) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1386 "_elementtree.c"
      case 28: // $bb27
        var $112=$seq; //@line 1386 "_elementtree.c"
        var $113=$112+4; //@line 1386 "_elementtree.c"
        var $114=HEAP[$113]; //@line 1386 "_elementtree.c"
        var $115=$114+24; //@line 1386 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1386 "_elementtree.c"
        var $117=$seq; //@line 1386 "_elementtree.c"
        FUNCTION_TABLE[$116]($117); //@line 1386 "_elementtree.c"
        __label__ = 29; break; //@line 1386 "_elementtree.c"
      case 29: // $bb28
        $0=-1; //@line 1388 "_elementtree.c"
        __label__ = 58; break; //@line 1388 "_elementtree.c"
      case 30: // $bb29thread_pre_split
        var $_pr1=HEAP[$slicelen];
        __lastLabel__ = 30; __label__ = 31; break;
      case 31: // $bb29
        var $118=__lastLabel__ == 30 ? $_pr1 : ($91);
        var $119=($118) > 0; //@line 1392 "_elementtree.c"
        if ($119) { __label__ = 32; break; } else { __label__ = 39; break; } //@line 1392 "_elementtree.c"
      case 32: // $bb30
        var $120=HEAP[$slicelen]; //@line 1396 "_elementtree.c"
        var $121=_PyList_New($120); //@line 1396 "_elementtree.c"
        $recycle=$121; //@line 1396 "_elementtree.c"
        var $122=$recycle; //@line 1397 "_elementtree.c"
        var $123=($122)==0; //@line 1397 "_elementtree.c"
        if ($123) { __label__ = 33; break; } else { __label__ = 37; break; } //@line 1397 "_elementtree.c"
      case 33: // $bb31
        var $124=$seq; //@line 1398 "_elementtree.c"
        var $125=($124)!=0; //@line 1398 "_elementtree.c"
        if ($125) { __label__ = 34; break; } else { __label__ = 36; break; } //@line 1398 "_elementtree.c"
      case 34: // $bb32
        var $126=$seq; //@line 1399 "_elementtree.c"
        var $127=$126; //@line 1399 "_elementtree.c"
        var $128=HEAP[$127]; //@line 1399 "_elementtree.c"
        var $129=($128) - 1; //@line 1399 "_elementtree.c"
        var $130=$seq; //@line 1399 "_elementtree.c"
        var $131=$130; //@line 1399 "_elementtree.c"
        HEAP[$131]=$129; //@line 1399 "_elementtree.c"
        var $132=$seq; //@line 1399 "_elementtree.c"
        var $133=$132; //@line 1399 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1399 "_elementtree.c"
        var $135=($134)==0; //@line 1399 "_elementtree.c"
        if ($135) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1399 "_elementtree.c"
      case 35: // $bb33
        var $136=$seq; //@line 1399 "_elementtree.c"
        var $137=$136+4; //@line 1399 "_elementtree.c"
        var $138=HEAP[$137]; //@line 1399 "_elementtree.c"
        var $139=$138+24; //@line 1399 "_elementtree.c"
        var $140=HEAP[$139]; //@line 1399 "_elementtree.c"
        var $141=$seq; //@line 1399 "_elementtree.c"
        FUNCTION_TABLE[$140]($141); //@line 1399 "_elementtree.c"
        __label__ = 36; break; //@line 1399 "_elementtree.c"
      case 36: // $bb34
        $0=-1; //@line 1401 "_elementtree.c"
        __label__ = 58; break; //@line 1401 "_elementtree.c"
      case 37: // $bb35
        var $142=HEAP[$start]; //@line 1403 "_elementtree.c"
        $cur=$142; //@line 1403 "_elementtree.c"
        $i11=0; //@line 1403 "_elementtree.c"
        var $143=HEAP[$slicelen]; //@line 1403 "_elementtree.c"
        var $144=$i11; //@line 1403 "_elementtree.c"
        var $145=($144) < ($143); //@line 1403 "_elementtree.c"
        if ($145) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1403 "_elementtree.c"
      case 38: // $bb36
        var $146=$recycle; //@line 1405 "_elementtree.c"
        var $147=$146; //@line 1405 "_elementtree.c"
        var $148=$147+12; //@line 1405 "_elementtree.c"
        var $149=HEAP[$148]; //@line 1405 "_elementtree.c"
        var $150=$self; //@line 1405 "_elementtree.c"
        var $151=$150+20; //@line 1405 "_elementtree.c"
        var $152=HEAP[$151]; //@line 1405 "_elementtree.c"
        var $153=$152+12; //@line 1405 "_elementtree.c"
        var $154=HEAP[$153]; //@line 1405 "_elementtree.c"
        var $155=$cur; //@line 1405 "_elementtree.c"
        var $156=$154+4*$155; //@line 1405 "_elementtree.c"
        var $157=HEAP[$156]; //@line 1405 "_elementtree.c"
        var $158=$i11; //@line 1405 "_elementtree.c"
        var $159=$149+4*$158; //@line 1405 "_elementtree.c"
        HEAP[$159]=$157; //@line 1405 "_elementtree.c"
        var $160=HEAP[$step]; //@line 1404 "_elementtree.c"
        var $161=$cur; //@line 1404 "_elementtree.c"
        var $162=($161) + ($160); //@line 1404 "_elementtree.c"
        $cur=$162; //@line 1404 "_elementtree.c"
        var $163=$i11; //@line 1404 "_elementtree.c"
        var $164=($163) + 1; //@line 1404 "_elementtree.c"
        $i11=$164; //@line 1404 "_elementtree.c"
        var $165=HEAP[$slicelen]; //@line 1403 "_elementtree.c"
        var $166=$i11; //@line 1403 "_elementtree.c"
        var $167=($166) < ($165); //@line 1403 "_elementtree.c"
        if ($167) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1403 "_elementtree.c"
      case 39: // $bb38
        var $168=HEAP[$slicelen]; //@line 1408 "_elementtree.c"
        var $169=$newlen; //@line 1408 "_elementtree.c"
        var $170=($169) < ($168); //@line 1408 "_elementtree.c"
        if ($170) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 1408 "_elementtree.c"
      case 40: // $bb39
        var $171=HEAP[$stop]; //@line 1410 "_elementtree.c"
        $i11=$171; //@line 1410 "_elementtree.c"
        var $172=$self; //@line 1410 "_elementtree.c"
        var $173=$172+20; //@line 1410 "_elementtree.c"
        var $174=HEAP[$173]; //@line 1410 "_elementtree.c"
        var $175=$174+4; //@line 1410 "_elementtree.c"
        var $176=HEAP[$175]; //@line 1410 "_elementtree.c"
        var $177=$i11; //@line 1410 "_elementtree.c"
        var $178=($176) > ($177); //@line 1410 "_elementtree.c"
        if ($178) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 1410 "_elementtree.c"
      case 41: // $bb40
        var $179=$self; //@line 1411 "_elementtree.c"
        var $180=$179+20; //@line 1411 "_elementtree.c"
        var $181=HEAP[$180]; //@line 1411 "_elementtree.c"
        var $182=$181+12; //@line 1411 "_elementtree.c"
        var $183=HEAP[$182]; //@line 1411 "_elementtree.c"
        var $184=$i11; //@line 1411 "_elementtree.c"
        var $185=$newlen; //@line 1411 "_elementtree.c"
        var $186=HEAP[$slicelen]; //@line 1411 "_elementtree.c"
        var $_neg=0 - ($186);
        var $187=($185) + ($184); //@line 1411 "_elementtree.c"
        var $188=($187) + ($_neg);
        var $189=$self; //@line 1411 "_elementtree.c"
        var $190=$189+20; //@line 1411 "_elementtree.c"
        var $191=HEAP[$190]; //@line 1411 "_elementtree.c"
        var $192=$191+12; //@line 1411 "_elementtree.c"
        var $193=HEAP[$192]; //@line 1411 "_elementtree.c"
        var $194=$i11; //@line 1411 "_elementtree.c"
        var $195=$193+4*$194; //@line 1411 "_elementtree.c"
        var $196=HEAP[$195]; //@line 1411 "_elementtree.c"
        var $197=$183+4*$188; //@line 1411 "_elementtree.c"
        HEAP[$197]=$196; //@line 1411 "_elementtree.c"
        var $198=$i11; //@line 1410 "_elementtree.c"
        var $199=($198) + 1; //@line 1410 "_elementtree.c"
        $i11=$199; //@line 1410 "_elementtree.c"
        var $200=$self; //@line 1410 "_elementtree.c"
        var $201=$200+20; //@line 1410 "_elementtree.c"
        var $202=HEAP[$201]; //@line 1410 "_elementtree.c"
        var $203=$202+4; //@line 1410 "_elementtree.c"
        var $204=HEAP[$203]; //@line 1410 "_elementtree.c"
        var $205=$i11; //@line 1410 "_elementtree.c"
        var $206=($204) > ($205); //@line 1410 "_elementtree.c"
        if ($206) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 1410 "_elementtree.c"
      case 42: // $bb43
        var $207=HEAP[$slicelen]; //@line 1412 "_elementtree.c"
        var $208=$newlen; //@line 1412 "_elementtree.c"
        var $209=($208) > ($207); //@line 1412 "_elementtree.c"
        if ($209) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1412 "_elementtree.c"
      case 43: // $bb44
        var $210=$self; //@line 1414 "_elementtree.c"
        var $211=$210+20; //@line 1414 "_elementtree.c"
        var $212=HEAP[$211]; //@line 1414 "_elementtree.c"
        var $213=$212+4; //@line 1414 "_elementtree.c"
        var $214=HEAP[$213]; //@line 1414 "_elementtree.c"
        var $215=($214) - 1; //@line 1414 "_elementtree.c"
        $i11=$215; //@line 1414 "_elementtree.c"
        var $216=HEAP[$stop]; //@line 1414 "_elementtree.c"
        var $217=$i11; //@line 1414 "_elementtree.c"
        var $218=($217) >= ($216); //@line 1414 "_elementtree.c"
        if ($218) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1414 "_elementtree.c"
      case 44: // $bb45
        var $219=$self; //@line 1415 "_elementtree.c"
        var $220=$219+20; //@line 1415 "_elementtree.c"
        var $221=HEAP[$220]; //@line 1415 "_elementtree.c"
        var $222=$221+12; //@line 1415 "_elementtree.c"
        var $223=HEAP[$222]; //@line 1415 "_elementtree.c"
        var $224=$i11; //@line 1415 "_elementtree.c"
        var $225=$newlen; //@line 1415 "_elementtree.c"
        var $226=HEAP[$slicelen]; //@line 1415 "_elementtree.c"
        var $_neg2=0 - ($226);
        var $227=($225) + ($224); //@line 1415 "_elementtree.c"
        var $228=($227) + ($_neg2);
        var $229=$self; //@line 1415 "_elementtree.c"
        var $230=$229+20; //@line 1415 "_elementtree.c"
        var $231=HEAP[$230]; //@line 1415 "_elementtree.c"
        var $232=$231+12; //@line 1415 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1415 "_elementtree.c"
        var $234=$i11; //@line 1415 "_elementtree.c"
        var $235=$233+4*$234; //@line 1415 "_elementtree.c"
        var $236=HEAP[$235]; //@line 1415 "_elementtree.c"
        var $237=$223+4*$228; //@line 1415 "_elementtree.c"
        HEAP[$237]=$236; //@line 1415 "_elementtree.c"
        var $238=$i11; //@line 1414 "_elementtree.c"
        var $239=($238) - 1; //@line 1414 "_elementtree.c"
        $i11=$239; //@line 1414 "_elementtree.c"
        var $240=HEAP[$stop]; //@line 1414 "_elementtree.c"
        var $241=$i11; //@line 1414 "_elementtree.c"
        var $242=($241) >= ($240); //@line 1414 "_elementtree.c"
        if ($242) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1414 "_elementtree.c"
      case 45: // $bb47
        var $243=HEAP[$start]; //@line 1419 "_elementtree.c"
        $cur=$243; //@line 1419 "_elementtree.c"
        $i11=0; //@line 1419 "_elementtree.c"
        var $244=$i11; //@line 1419 "_elementtree.c"
        var $245=$newlen; //@line 1419 "_elementtree.c"
        var $246=($244) < ($245); //@line 1419 "_elementtree.c"
        if ($246) { __label__ = 46; break; } else { __label__ = 50; break; } //@line 1419 "_elementtree.c"
      case 46: // $bb48
        var $247=$seq; //@line 1421 "_elementtree.c"
        var $248=$247+4; //@line 1421 "_elementtree.c"
        var $249=HEAP[$248]; //@line 1421 "_elementtree.c"
        var $250=$249+84; //@line 1421 "_elementtree.c"
        var $251=HEAP[$250]; //@line 1421 "_elementtree.c"
        var $252=($251) & 33554432; //@line 1421 "_elementtree.c"
        var $253=($252)!=0; //@line 1421 "_elementtree.c"
        var $254=$seq; //@line 1421 "_elementtree.c"
        if ($253) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1421 "_elementtree.c"
      case 47: // $bb49
        var $255=$254; //@line 1421 "_elementtree.c"
        var $256=$255+12; //@line 1421 "_elementtree.c"
        var $257=HEAP[$256]; //@line 1421 "_elementtree.c"
        var $258=$i11; //@line 1421 "_elementtree.c"
        var $259=$257+4*$258; //@line 1421 "_elementtree.c"
        var $260=HEAP[$259]; //@line 1421 "_elementtree.c"
        $iftmp_171=$260; //@line 1421 "_elementtree.c"
        __label__ = 49; break; //@line 1421 "_elementtree.c"
      case 48: // $bb50
        var $261=$254; //@line 1421 "_elementtree.c"
        var $262=$i11; //@line 1421 "_elementtree.c"
        var $263=$261+12; //@line 1421 "_elementtree.c"
        var $264=$263+$262*4; //@line 1421 "_elementtree.c"
        var $265=HEAP[$264]; //@line 1421 "_elementtree.c"
        $iftmp_171=$265; //@line 1421 "_elementtree.c"
        __label__ = 49; break; //@line 1421 "_elementtree.c"
      case 49: // $bb51
        var $266=$iftmp_171; //@line 1421 "_elementtree.c"
        $element=$266; //@line 1421 "_elementtree.c"
        var $267=$element; //@line 1422 "_elementtree.c"
        var $268=$267; //@line 1422 "_elementtree.c"
        var $269=HEAP[$268]; //@line 1422 "_elementtree.c"
        var $270=($269) + 1; //@line 1422 "_elementtree.c"
        var $271=$element; //@line 1422 "_elementtree.c"
        var $272=$271; //@line 1422 "_elementtree.c"
        HEAP[$272]=$270; //@line 1422 "_elementtree.c"
        var $273=$self; //@line 1423 "_elementtree.c"
        var $274=$273+20; //@line 1423 "_elementtree.c"
        var $275=HEAP[$274]; //@line 1423 "_elementtree.c"
        var $276=$275+12; //@line 1423 "_elementtree.c"
        var $277=HEAP[$276]; //@line 1423 "_elementtree.c"
        var $278=$cur; //@line 1423 "_elementtree.c"
        var $279=$277+4*$278; //@line 1423 "_elementtree.c"
        var $280=$element; //@line 1423 "_elementtree.c"
        HEAP[$279]=$280; //@line 1423 "_elementtree.c"
        var $281=HEAP[$step]; //@line 1420 "_elementtree.c"
        var $282=$cur; //@line 1420 "_elementtree.c"
        var $283=($282) + ($281); //@line 1420 "_elementtree.c"
        $cur=$283; //@line 1420 "_elementtree.c"
        var $284=$i11; //@line 1420 "_elementtree.c"
        var $285=($284) + 1; //@line 1420 "_elementtree.c"
        $i11=$285; //@line 1420 "_elementtree.c"
        var $286=$i11; //@line 1419 "_elementtree.c"
        var $287=$newlen; //@line 1419 "_elementtree.c"
        var $288=($286) < ($287); //@line 1419 "_elementtree.c"
        if ($288) { __label__ = 46; break; } else { __label__ = 50; break; } //@line 1419 "_elementtree.c"
      case 50: // $bb53
        var $289=$self; //@line 1426 "_elementtree.c"
        var $290=$289+20; //@line 1426 "_elementtree.c"
        var $291=HEAP[$290]; //@line 1426 "_elementtree.c"
        var $292=$self; //@line 1426 "_elementtree.c"
        var $293=$292+20; //@line 1426 "_elementtree.c"
        var $294=HEAP[$293]; //@line 1426 "_elementtree.c"
        var $295=$294+4; //@line 1426 "_elementtree.c"
        var $296=HEAP[$295]; //@line 1426 "_elementtree.c"
        var $297=HEAP[$slicelen]; //@line 1426 "_elementtree.c"
        var $298=$newlen; //@line 1426 "_elementtree.c"
        var $_neg3=0 - ($297);
        var $299=($_neg3) + ($296);
        var $300=($299) + ($298); //@line 1426 "_elementtree.c"
        var $301=$291+4; //@line 1426 "_elementtree.c"
        HEAP[$301]=$300; //@line 1426 "_elementtree.c"
        var $302=$seq; //@line 1428 "_elementtree.c"
        var $303=($302)!=0; //@line 1428 "_elementtree.c"
        if ($303) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 1428 "_elementtree.c"
      case 51: // $bb54
        var $304=$seq; //@line 1429 "_elementtree.c"
        var $305=$304; //@line 1429 "_elementtree.c"
        var $306=HEAP[$305]; //@line 1429 "_elementtree.c"
        var $307=($306) - 1; //@line 1429 "_elementtree.c"
        var $308=$seq; //@line 1429 "_elementtree.c"
        var $309=$308; //@line 1429 "_elementtree.c"
        HEAP[$309]=$307; //@line 1429 "_elementtree.c"
        var $310=$seq; //@line 1429 "_elementtree.c"
        var $311=$310; //@line 1429 "_elementtree.c"
        var $312=HEAP[$311]; //@line 1429 "_elementtree.c"
        var $313=($312)==0; //@line 1429 "_elementtree.c"
        if ($313) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1429 "_elementtree.c"
      case 52: // $bb55
        var $314=$seq; //@line 1429 "_elementtree.c"
        var $315=$314+4; //@line 1429 "_elementtree.c"
        var $316=HEAP[$315]; //@line 1429 "_elementtree.c"
        var $317=$316+24; //@line 1429 "_elementtree.c"
        var $318=HEAP[$317]; //@line 1429 "_elementtree.c"
        var $319=$seq; //@line 1429 "_elementtree.c"
        FUNCTION_TABLE[$318]($319); //@line 1429 "_elementtree.c"
        __label__ = 53; break; //@line 1429 "_elementtree.c"
      case 53: // $bb56
        var $320=$recycle; //@line 1433 "_elementtree.c"
        var $321=($320)!=0; //@line 1433 "_elementtree.c"
        if ($321) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1433 "_elementtree.c"
      case 54: // $bb57
        var $322=$recycle; //@line 1433 "_elementtree.c"
        var $323=$322; //@line 1433 "_elementtree.c"
        var $324=HEAP[$323]; //@line 1433 "_elementtree.c"
        var $325=($324) - 1; //@line 1433 "_elementtree.c"
        var $326=$recycle; //@line 1433 "_elementtree.c"
        var $327=$326; //@line 1433 "_elementtree.c"
        HEAP[$327]=$325; //@line 1433 "_elementtree.c"
        var $328=$recycle; //@line 1433 "_elementtree.c"
        var $329=$328; //@line 1433 "_elementtree.c"
        var $330=HEAP[$329]; //@line 1433 "_elementtree.c"
        var $331=($330)==0; //@line 1433 "_elementtree.c"
        if ($331) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1433 "_elementtree.c"
      case 55: // $bb58
        var $332=$recycle; //@line 1433 "_elementtree.c"
        var $333=$332+4; //@line 1433 "_elementtree.c"
        var $334=HEAP[$333]; //@line 1433 "_elementtree.c"
        var $335=$334+24; //@line 1433 "_elementtree.c"
        var $336=HEAP[$335]; //@line 1433 "_elementtree.c"
        var $337=$recycle; //@line 1433 "_elementtree.c"
        FUNCTION_TABLE[$336]($337); //@line 1433 "_elementtree.c"
        __label__ = 56; break; //@line 1433 "_elementtree.c"
      case 56: // $bb59
        $0=0; //@line 1435 "_elementtree.c"
        __label__ = 58; break; //@line 1435 "_elementtree.c"
      case 57: // $bb60
        var $338=HEAP[_PyExc_TypeError]; //@line 1438 "_elementtree.c"
        _PyErr_SetString($338, __str40); //@line 1438 "_elementtree.c"
        $0=-1; //@line 1440 "_elementtree.c"
        __label__ = 58; break; //@line 1440 "_elementtree.c"
      case 58: // $bb61
        var $339=$0; //@line 1331 "_elementtree.c"
        $retval=$339; //@line 1331 "_elementtree.c"
        var $retval62=$retval; //@line 1331 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval62; //@line 1331 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getattr($self, $name) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $name_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        $name_addr=$name;
        var $1=$name_addr; //@line 1496 "_elementtree.c"
        var $2=_strcmp($1, __str59); //@line 1496 "_elementtree.c"
        var $3=($2)==0; //@line 1496 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1496 "_elementtree.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1497 "_elementtree.c"
        var $5=$4+8; //@line 1497 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1497 "_elementtree.c"
        $res=$6; //@line 1497 "_elementtree.c"
        var $7=$res; //@line 1498 "_elementtree.c"
        var $8=$7; //@line 1498 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1498 "_elementtree.c"
        var $10=($9) + 1; //@line 1498 "_elementtree.c"
        var $11=$res; //@line 1498 "_elementtree.c"
        var $12=$11; //@line 1498 "_elementtree.c"
        HEAP[$12]=$10; //@line 1498 "_elementtree.c"
        var $13=$res; //@line 1499 "_elementtree.c"
        $0=$13; //@line 1499 "_elementtree.c"
        __label__ = 16; break; //@line 1499 "_elementtree.c"
      case 2: // $bb1
        var $14=$name_addr; //@line 1500 "_elementtree.c"
        var $15=_strcmp($14, __str60); //@line 1500 "_elementtree.c"
        var $16=($15)==0; //@line 1500 "_elementtree.c"
        var $17=$self_addr; //@line 1501 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1500 "_elementtree.c"
      case 3: // $bb2
        var $18=_element_get_text($17); //@line 1501 "_elementtree.c"
        $res=$18; //@line 1501 "_elementtree.c"
        var $19=$res; //@line 1502 "_elementtree.c"
        var $20=$19; //@line 1502 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1502 "_elementtree.c"
        var $22=($21) + 1; //@line 1502 "_elementtree.c"
        var $23=$res; //@line 1502 "_elementtree.c"
        var $24=$23; //@line 1502 "_elementtree.c"
        HEAP[$24]=$22; //@line 1502 "_elementtree.c"
        var $25=$res; //@line 1503 "_elementtree.c"
        $0=$25; //@line 1503 "_elementtree.c"
        __label__ = 16; break; //@line 1503 "_elementtree.c"
      case 4: // $bb3
        var $26=$17; //@line 1507 "_elementtree.c"
        var $27=$name_addr; //@line 1507 "_elementtree.c"
        var $28=_Py_FindMethod(_element_methods, $26, $27); //@line 1507 "_elementtree.c"
        $res=$28; //@line 1507 "_elementtree.c"
        var $29=$res; //@line 1508 "_elementtree.c"
        var $30=($29)!=0; //@line 1508 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1508 "_elementtree.c"
      case 5: // $bb4
        var $31=$res; //@line 1509 "_elementtree.c"
        $0=$31; //@line 1509 "_elementtree.c"
        __label__ = 16; break; //@line 1509 "_elementtree.c"
      case 6: // $bb5
        _PyErr_Clear(); //@line 1511 "_elementtree.c"
        var $32=$name_addr; //@line 1514 "_elementtree.c"
        var $33=_strcmp($32, __str61); //@line 1514 "_elementtree.c"
        var $34=($33)==0; //@line 1514 "_elementtree.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1514 "_elementtree.c"
      case 7: // $bb6
        var $35=$self_addr; //@line 1515 "_elementtree.c"
        var $36=_element_get_tail($35); //@line 1515 "_elementtree.c"
        $res=$36; //@line 1515 "_elementtree.c"
        __lastLabel__ = 7; __label__ = 13; break; //@line 1515 "_elementtree.c"
      case 8: // $bb7
        var $37=$name_addr; //@line 1516 "_elementtree.c"
        var $38=_strcmp($37, __str62); //@line 1516 "_elementtree.c"
        var $39=($38)==0; //@line 1516 "_elementtree.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1516 "_elementtree.c"
      case 9: // $bb8
        var $40=$self_addr; //@line 1517 "_elementtree.c"
        var $41=$40+20; //@line 1517 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1517 "_elementtree.c"
        var $43=($42)==0; //@line 1517 "_elementtree.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1517 "_elementtree.c"
      case 10: // $bb9
        var $44=$self_addr; //@line 1518 "_elementtree.c"
        var $45=_element_new_extra($44, 0); //@line 1518 "_elementtree.c"
        __label__ = 11; break; //@line 1518 "_elementtree.c"
      case 11: // $bb10
        var $46=$self_addr; //@line 1519 "_elementtree.c"
        var $47=_element_get_attrib($46); //@line 1519 "_elementtree.c"
        $res=$47; //@line 1519 "_elementtree.c"
        __lastLabel__ = 11; __label__ = 13; break; //@line 1519 "_elementtree.c"
      case 12: // $bb11
        var $48=HEAP[_PyExc_AttributeError]; //@line 1521 "_elementtree.c"
        var $49=$name_addr; //@line 1521 "_elementtree.c"
        _PyErr_SetString($48, $49); //@line 1521 "_elementtree.c"
        $0=0; //@line 1522 "_elementtree.c"
        __label__ = 16; break; //@line 1522 "_elementtree.c"
      case 13: // $bb12
        var $50=__lastLabel__ == 11 ? $47 : ($36);
        var $51=($50)==0; //@line 1525 "_elementtree.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1525 "_elementtree.c"
      case 14: // $bb13
        $0=0; //@line 1526 "_elementtree.c"
        __label__ = 16; break; //@line 1526 "_elementtree.c"
      case 15: // $bb14
        var $52=$res; //@line 1528 "_elementtree.c"
        var $53=$52; //@line 1528 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1528 "_elementtree.c"
        var $55=($54) + 1; //@line 1528 "_elementtree.c"
        var $56=$res; //@line 1528 "_elementtree.c"
        var $57=$56; //@line 1528 "_elementtree.c"
        HEAP[$57]=$55; //@line 1528 "_elementtree.c"
        var $58=$res; //@line 1529 "_elementtree.c"
        $0=$58; //@line 1529 "_elementtree.c"
        __label__ = 16; break; //@line 1529 "_elementtree.c"
      case 16: // $bb15
        var $59=$0; //@line 1499 "_elementtree.c"
        $retval=$59; //@line 1499 "_elementtree.c"
        var $retval16=$retval; //@line 1499 "_elementtree.c"
        ;
        return $retval16; //@line 1499 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_setattr($self, $name, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $name_addr;
        var $value_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $name_addr=$name;
        $value_addr=$value;
        var $1=$value_addr; //@line 1535 "_elementtree.c"
        var $2=($1)==0; //@line 1535 "_elementtree.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1535 "_elementtree.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_AttributeError]; //@line 1536 "_elementtree.c"
        _PyErr_SetString($3, __str63); //@line 1536 "_elementtree.c"
        $0=-1; //@line 1540 "_elementtree.c"
        __label__ = 22; break; //@line 1540 "_elementtree.c"
      case 2: // $bb1
        var $4=$name_addr; //@line 1543 "_elementtree.c"
        var $5=_strcmp($4, __str59); //@line 1543 "_elementtree.c"
        var $6=($5)==0; //@line 1543 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1543 "_elementtree.c"
      case 3: // $bb2
        var $7=$self_addr; //@line 1544 "_elementtree.c"
        var $8=$7+8; //@line 1544 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1544 "_elementtree.c"
        var $10=$9; //@line 1544 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1544 "_elementtree.c"
        var $12=($11) - 1; //@line 1544 "_elementtree.c"
        var $13=$9; //@line 1544 "_elementtree.c"
        HEAP[$13]=$12; //@line 1544 "_elementtree.c"
        var $14=$9; //@line 1544 "_elementtree.c"
        var $15=HEAP[$14]; //@line 1544 "_elementtree.c"
        var $16=($15)==0; //@line 1544 "_elementtree.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1544 "_elementtree.c"
      case 4: // $bb3
        var $17=$self_addr; //@line 1544 "_elementtree.c"
        var $18=$17+8; //@line 1544 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1544 "_elementtree.c"
        var $20=$19+4; //@line 1544 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1544 "_elementtree.c"
        var $22=$21+24; //@line 1544 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1544 "_elementtree.c"
        var $24=$self_addr; //@line 1544 "_elementtree.c"
        var $25=$24+8; //@line 1544 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1544 "_elementtree.c"
        FUNCTION_TABLE[$23]($26); //@line 1544 "_elementtree.c"
        __label__ = 5; break; //@line 1544 "_elementtree.c"
      case 5: // $bb4
        var $27=$self_addr; //@line 1545 "_elementtree.c"
        var $28=$27+8; //@line 1545 "_elementtree.c"
        var $29=$value_addr; //@line 1545 "_elementtree.c"
        HEAP[$28]=$29; //@line 1545 "_elementtree.c"
        var $30=$self_addr; //@line 1546 "_elementtree.c"
        var $31=$30+8; //@line 1546 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1546 "_elementtree.c"
        var $33=$32; //@line 1546 "_elementtree.c"
        var $34=HEAP[$33]; //@line 1546 "_elementtree.c"
        var $35=($34) + 1; //@line 1546 "_elementtree.c"
        var $36=$32; //@line 1546 "_elementtree.c"
        HEAP[$36]=$35; //@line 1546 "_elementtree.c"
        __label__ = 21; break; //@line 1546 "_elementtree.c"
      case 6: // $bb5
        var $37=$name_addr; //@line 1547 "_elementtree.c"
        var $38=_strcmp($37, __str60); //@line 1547 "_elementtree.c"
        var $39=($38)==0; //@line 1547 "_elementtree.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1547 "_elementtree.c"
      case 7: // $bb6
        var $40=$self_addr; //@line 1548 "_elementtree.c"
        var $41=$40+12; //@line 1548 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1548 "_elementtree.c"
        var $43=($42); //@line 1548 "_elementtree.c"
        var $44=($43) & -2; //@line 1548 "_elementtree.c"
        var $45=($44); //@line 1548 "_elementtree.c"
        var $46=$45; //@line 1548 "_elementtree.c"
        var $47=HEAP[$46]; //@line 1548 "_elementtree.c"
        var $48=($47) - 1; //@line 1548 "_elementtree.c"
        var $49=$45; //@line 1548 "_elementtree.c"
        HEAP[$49]=$48; //@line 1548 "_elementtree.c"
        var $50=$45; //@line 1548 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1548 "_elementtree.c"
        var $52=($51)==0; //@line 1548 "_elementtree.c"
        if ($52) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1548 "_elementtree.c"
      case 8: // $bb7
        var $53=$self_addr; //@line 1548 "_elementtree.c"
        var $54=$53+12; //@line 1548 "_elementtree.c"
        var $55=HEAP[$54]; //@line 1548 "_elementtree.c"
        var $56=($55); //@line 1548 "_elementtree.c"
        var $57=($56) & -2; //@line 1548 "_elementtree.c"
        var $58=($57); //@line 1548 "_elementtree.c"
        var $59=$58+4; //@line 1548 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1548 "_elementtree.c"
        var $61=$60+24; //@line 1548 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1548 "_elementtree.c"
        var $63=$self_addr; //@line 1548 "_elementtree.c"
        var $64=$63+12; //@line 1548 "_elementtree.c"
        var $65=HEAP[$64]; //@line 1548 "_elementtree.c"
        var $66=($65); //@line 1548 "_elementtree.c"
        var $67=($66) & -2; //@line 1548 "_elementtree.c"
        var $68=($67); //@line 1548 "_elementtree.c"
        FUNCTION_TABLE[$62]($68); //@line 1548 "_elementtree.c"
        __label__ = 9; break; //@line 1548 "_elementtree.c"
      case 9: // $bb8
        var $69=$self_addr; //@line 1549 "_elementtree.c"
        var $70=$69+12; //@line 1549 "_elementtree.c"
        var $71=$value_addr; //@line 1549 "_elementtree.c"
        HEAP[$70]=$71; //@line 1549 "_elementtree.c"
        var $72=$self_addr; //@line 1550 "_elementtree.c"
        var $73=$72+12; //@line 1550 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1550 "_elementtree.c"
        var $75=$74; //@line 1550 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1550 "_elementtree.c"
        var $77=($76) + 1; //@line 1550 "_elementtree.c"
        var $78=$74; //@line 1550 "_elementtree.c"
        HEAP[$78]=$77; //@line 1550 "_elementtree.c"
        __label__ = 21; break; //@line 1550 "_elementtree.c"
      case 10: // $bb9
        var $79=$name_addr; //@line 1551 "_elementtree.c"
        var $80=_strcmp($79, __str61); //@line 1551 "_elementtree.c"
        var $81=($80)==0; //@line 1551 "_elementtree.c"
        if ($81) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1551 "_elementtree.c"
      case 11: // $bb10
        var $82=$self_addr; //@line 1552 "_elementtree.c"
        var $83=$82+16; //@line 1552 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1552 "_elementtree.c"
        var $85=($84); //@line 1552 "_elementtree.c"
        var $86=($85) & -2; //@line 1552 "_elementtree.c"
        var $87=($86); //@line 1552 "_elementtree.c"
        var $88=$87; //@line 1552 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1552 "_elementtree.c"
        var $90=($89) - 1; //@line 1552 "_elementtree.c"
        var $91=$87; //@line 1552 "_elementtree.c"
        HEAP[$91]=$90; //@line 1552 "_elementtree.c"
        var $92=$87; //@line 1552 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1552 "_elementtree.c"
        var $94=($93)==0; //@line 1552 "_elementtree.c"
        if ($94) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1552 "_elementtree.c"
      case 12: // $bb11
        var $95=$self_addr; //@line 1552 "_elementtree.c"
        var $96=$95+16; //@line 1552 "_elementtree.c"
        var $97=HEAP[$96]; //@line 1552 "_elementtree.c"
        var $98=($97); //@line 1552 "_elementtree.c"
        var $99=($98) & -2; //@line 1552 "_elementtree.c"
        var $100=($99); //@line 1552 "_elementtree.c"
        var $101=$100+4; //@line 1552 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1552 "_elementtree.c"
        var $103=$102+24; //@line 1552 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1552 "_elementtree.c"
        var $105=$self_addr; //@line 1552 "_elementtree.c"
        var $106=$105+16; //@line 1552 "_elementtree.c"
        var $107=HEAP[$106]; //@line 1552 "_elementtree.c"
        var $108=($107); //@line 1552 "_elementtree.c"
        var $109=($108) & -2; //@line 1552 "_elementtree.c"
        var $110=($109); //@line 1552 "_elementtree.c"
        FUNCTION_TABLE[$104]($110); //@line 1552 "_elementtree.c"
        __label__ = 13; break; //@line 1552 "_elementtree.c"
      case 13: // $bb12
        var $111=$self_addr; //@line 1553 "_elementtree.c"
        var $112=$111+16; //@line 1553 "_elementtree.c"
        var $113=$value_addr; //@line 1553 "_elementtree.c"
        HEAP[$112]=$113; //@line 1553 "_elementtree.c"
        var $114=$self_addr; //@line 1554 "_elementtree.c"
        var $115=$114+16; //@line 1554 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1554 "_elementtree.c"
        var $117=$116; //@line 1554 "_elementtree.c"
        var $118=HEAP[$117]; //@line 1554 "_elementtree.c"
        var $119=($118) + 1; //@line 1554 "_elementtree.c"
        var $120=$116; //@line 1554 "_elementtree.c"
        HEAP[$120]=$119; //@line 1554 "_elementtree.c"
        __label__ = 21; break; //@line 1554 "_elementtree.c"
      case 14: // $bb13
        var $121=$name_addr; //@line 1555 "_elementtree.c"
        var $122=_strcmp($121, __str62); //@line 1555 "_elementtree.c"
        var $123=($122)==0; //@line 1555 "_elementtree.c"
        if ($123) { __label__ = 15; break; } else { __label__ = 20; break; } //@line 1555 "_elementtree.c"
      case 15: // $bb14
        var $124=$self_addr; //@line 1556 "_elementtree.c"
        var $125=$124+20; //@line 1556 "_elementtree.c"
        var $126=HEAP[$125]; //@line 1556 "_elementtree.c"
        var $127=($126)==0; //@line 1556 "_elementtree.c"
        if ($127) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1556 "_elementtree.c"
      case 16: // $bb15
        var $128=$self_addr; //@line 1557 "_elementtree.c"
        var $129=_element_new_extra($128, 0); //@line 1557 "_elementtree.c"
        __label__ = 17; break; //@line 1557 "_elementtree.c"
      case 17: // $bb16
        var $130=$self_addr; //@line 1558 "_elementtree.c"
        var $131=$130+20; //@line 1558 "_elementtree.c"
        var $132=HEAP[$131]; //@line 1558 "_elementtree.c"
        var $133=$132; //@line 1558 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1558 "_elementtree.c"
        var $135=$134; //@line 1558 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1558 "_elementtree.c"
        var $137=($136) - 1; //@line 1558 "_elementtree.c"
        var $138=$134; //@line 1558 "_elementtree.c"
        HEAP[$138]=$137; //@line 1558 "_elementtree.c"
        var $139=$134; //@line 1558 "_elementtree.c"
        var $140=HEAP[$139]; //@line 1558 "_elementtree.c"
        var $141=($140)==0; //@line 1558 "_elementtree.c"
        if ($141) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1558 "_elementtree.c"
      case 18: // $bb17
        var $142=$self_addr; //@line 1558 "_elementtree.c"
        var $143=$142+20; //@line 1558 "_elementtree.c"
        var $144=HEAP[$143]; //@line 1558 "_elementtree.c"
        var $145=$144; //@line 1558 "_elementtree.c"
        var $146=HEAP[$145]; //@line 1558 "_elementtree.c"
        var $147=$146+4; //@line 1558 "_elementtree.c"
        var $148=HEAP[$147]; //@line 1558 "_elementtree.c"
        var $149=$148+24; //@line 1558 "_elementtree.c"
        var $150=HEAP[$149]; //@line 1558 "_elementtree.c"
        var $151=$self_addr; //@line 1558 "_elementtree.c"
        var $152=$151+20; //@line 1558 "_elementtree.c"
        var $153=HEAP[$152]; //@line 1558 "_elementtree.c"
        var $154=$153; //@line 1558 "_elementtree.c"
        var $155=HEAP[$154]; //@line 1558 "_elementtree.c"
        FUNCTION_TABLE[$150]($155); //@line 1558 "_elementtree.c"
        __label__ = 19; break; //@line 1558 "_elementtree.c"
      case 19: // $bb18
        var $156=$self_addr; //@line 1559 "_elementtree.c"
        var $157=$156+20; //@line 1559 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1559 "_elementtree.c"
        var $159=$158; //@line 1559 "_elementtree.c"
        var $160=$value_addr; //@line 1559 "_elementtree.c"
        HEAP[$159]=$160; //@line 1559 "_elementtree.c"
        var $161=$self_addr; //@line 1560 "_elementtree.c"
        var $162=$161+20; //@line 1560 "_elementtree.c"
        var $163=HEAP[$162]; //@line 1560 "_elementtree.c"
        var $164=$163; //@line 1560 "_elementtree.c"
        var $165=HEAP[$164]; //@line 1560 "_elementtree.c"
        var $166=$165; //@line 1560 "_elementtree.c"
        var $167=HEAP[$166]; //@line 1560 "_elementtree.c"
        var $168=($167) + 1; //@line 1560 "_elementtree.c"
        var $169=$165; //@line 1560 "_elementtree.c"
        HEAP[$169]=$168; //@line 1560 "_elementtree.c"
        __label__ = 21; break; //@line 1560 "_elementtree.c"
      case 20: // $bb19
        var $170=HEAP[_PyExc_AttributeError]; //@line 1562 "_elementtree.c"
        var $171=$name_addr; //@line 1562 "_elementtree.c"
        _PyErr_SetString($170, $171); //@line 1562 "_elementtree.c"
        $0=-1; //@line 1563 "_elementtree.c"
        __label__ = 22; break; //@line 1563 "_elementtree.c"
      case 21: // $bb20
        $0=0; //@line 1566 "_elementtree.c"
        __label__ = 22; break; //@line 1566 "_elementtree.c"
      case 22: // $bb21
        var $172=$0; //@line 1540 "_elementtree.c"
        $retval=$172; //@line 1540 "_elementtree.c"
        var $retval22=$retval; //@line 1540 "_elementtree.c"
        ;
        return $retval22; //@line 1540 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_new() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $self;
        var $1=__PyObject_New(_TreeBuilder_Type); //@line 1637 "_elementtree.c"
        var $2=$1; //@line 1637 "_elementtree.c"
        $self=$2; //@line 1637 "_elementtree.c"
        var $3=$self; //@line 1638 "_elementtree.c"
        var $4=($3)==0; //@line 1638 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1638 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1639 "_elementtree.c"
        __label__ = 3; break; //@line 1639 "_elementtree.c"
      case 2: // $bb1
        var $5=$self; //@line 1641 "_elementtree.c"
        var $6=$5+8; //@line 1641 "_elementtree.c"
        HEAP[$6]=0; //@line 1641 "_elementtree.c"
        var $7=HEAP[__Py_NoneStruct]; //@line 1643 "_elementtree.c"
        var $8=($7) + 1; //@line 1643 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$8; //@line 1643 "_elementtree.c"
        var $9=$self; //@line 1644 "_elementtree.c"
        var $10=$9+12; //@line 1644 "_elementtree.c"
        HEAP[$10]=__Py_NoneStruct; //@line 1644 "_elementtree.c"
        var $11=HEAP[__Py_NoneStruct]; //@line 1646 "_elementtree.c"
        var $12=($11) + 1; //@line 1646 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$12; //@line 1646 "_elementtree.c"
        var $13=$self; //@line 1647 "_elementtree.c"
        var $14=$13+16; //@line 1647 "_elementtree.c"
        HEAP[$14]=__Py_NoneStruct; //@line 1647 "_elementtree.c"
        var $15=$self; //@line 1649 "_elementtree.c"
        var $16=$15+20; //@line 1649 "_elementtree.c"
        HEAP[$16]=0; //@line 1649 "_elementtree.c"
        var $17=_PyList_New(20); //@line 1651 "_elementtree.c"
        var $18=$self; //@line 1651 "_elementtree.c"
        var $19=$18+24; //@line 1651 "_elementtree.c"
        HEAP[$19]=$17; //@line 1651 "_elementtree.c"
        var $20=$self; //@line 1652 "_elementtree.c"
        var $21=$20+28; //@line 1652 "_elementtree.c"
        HEAP[$21]=0; //@line 1652 "_elementtree.c"
        var $22=$self; //@line 1654 "_elementtree.c"
        var $23=$22+32; //@line 1654 "_elementtree.c"
        HEAP[$23]=0; //@line 1654 "_elementtree.c"
        var $24=$self; //@line 1655 "_elementtree.c"
        var $25=$24+40; //@line 1655 "_elementtree.c"
        HEAP[$25]=0; //@line 1655 "_elementtree.c"
        var $26=$self; //@line 1655 "_elementtree.c"
        var $27=$26+40; //@line 1655 "_elementtree.c"
        var $28=HEAP[$27]; //@line 1655 "_elementtree.c"
        var $29=$self; //@line 1655 "_elementtree.c"
        var $30=$29+36; //@line 1655 "_elementtree.c"
        HEAP[$30]=$28; //@line 1655 "_elementtree.c"
        var $31=$self; //@line 1656 "_elementtree.c"
        var $32=$31+48; //@line 1656 "_elementtree.c"
        HEAP[$32]=0; //@line 1656 "_elementtree.c"
        var $33=$self; //@line 1656 "_elementtree.c"
        var $34=$33+48; //@line 1656 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1656 "_elementtree.c"
        var $36=$self; //@line 1656 "_elementtree.c"
        var $37=$36+44; //@line 1656 "_elementtree.c"
        HEAP[$37]=$35; //@line 1656 "_elementtree.c"
        var $38=$self; //@line 1660 "_elementtree.c"
        var $39=$38; //@line 1660 "_elementtree.c"
        $0=$39; //@line 1660 "_elementtree.c"
        __label__ = 3; break; //@line 1660 "_elementtree.c"
      case 3: // $bb2
        var $40=$0; //@line 1639 "_elementtree.c"
        $retval=$40; //@line 1639 "_elementtree.c"
        var $retval3=$retval; //@line 1639 "_elementtree.c"
        ;
        return $retval3; //@line 1639 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder($self_, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $args_addr;
        var $retval;
        var $0;
        $self__addr=$self_;
        $args_addr=$args;
        var $1=$args_addr; //@line 1666 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str65, allocate(1, "i32", ALLOC_STACK)); //@line 1666 "_elementtree.c"
        var $3=($2)==0; //@line 1666 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1666 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1667 "_elementtree.c"
        __label__ = 3; break; //@line 1667 "_elementtree.c"
      case 2: // $bb1
        var $4=_treebuilder_new(); //@line 1669 "_elementtree.c"
        $0=$4; //@line 1669 "_elementtree.c"
        __label__ = 3; break; //@line 1669 "_elementtree.c"
      case 3: // $bb2
        var $5=$0; //@line 1667 "_elementtree.c"
        $retval=$5; //@line 1667 "_elementtree.c"
        var $retval3=$retval; //@line 1667 "_elementtree.c"
        ;
        return $retval3; //@line 1667 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1675 "_elementtree.c"
        var $1=$0+48; //@line 1675 "_elementtree.c"
        var $2=HEAP[$1]; //@line 1675 "_elementtree.c"
        var $3=($2)!=0; //@line 1675 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1675 "_elementtree.c"
      case 1: // $bb
        var $4=$self_addr; //@line 1675 "_elementtree.c"
        var $5=$4+48; //@line 1675 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1675 "_elementtree.c"
        var $7=$6; //@line 1675 "_elementtree.c"
        var $8=HEAP[$7]; //@line 1675 "_elementtree.c"
        var $9=($8) - 1; //@line 1675 "_elementtree.c"
        var $10=$6; //@line 1675 "_elementtree.c"
        HEAP[$10]=$9; //@line 1675 "_elementtree.c"
        var $11=$6; //@line 1675 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1675 "_elementtree.c"
        var $13=($12)==0; //@line 1675 "_elementtree.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1675 "_elementtree.c"
      case 2: // $bb1
        var $14=$self_addr; //@line 1675 "_elementtree.c"
        var $15=$14+48; //@line 1675 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1675 "_elementtree.c"
        var $17=$16+4; //@line 1675 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1675 "_elementtree.c"
        var $19=$18+24; //@line 1675 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1675 "_elementtree.c"
        var $21=$self_addr; //@line 1675 "_elementtree.c"
        var $22=$21+48; //@line 1675 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1675 "_elementtree.c"
        FUNCTION_TABLE[$20]($23); //@line 1675 "_elementtree.c"
        __label__ = 3; break; //@line 1675 "_elementtree.c"
      case 3: // $bb2
        var $24=$self_addr; //@line 1676 "_elementtree.c"
        var $25=$24+44; //@line 1676 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1676 "_elementtree.c"
        var $27=($26)!=0; //@line 1676 "_elementtree.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1676 "_elementtree.c"
      case 4: // $bb3
        var $28=$self_addr; //@line 1676 "_elementtree.c"
        var $29=$28+44; //@line 1676 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1676 "_elementtree.c"
        var $31=$30; //@line 1676 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1676 "_elementtree.c"
        var $33=($32) - 1; //@line 1676 "_elementtree.c"
        var $34=$30; //@line 1676 "_elementtree.c"
        HEAP[$34]=$33; //@line 1676 "_elementtree.c"
        var $35=$30; //@line 1676 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1676 "_elementtree.c"
        var $37=($36)==0; //@line 1676 "_elementtree.c"
        if ($37) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1676 "_elementtree.c"
      case 5: // $bb4
        var $38=$self_addr; //@line 1676 "_elementtree.c"
        var $39=$38+44; //@line 1676 "_elementtree.c"
        var $40=HEAP[$39]; //@line 1676 "_elementtree.c"
        var $41=$40+4; //@line 1676 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1676 "_elementtree.c"
        var $43=$42+24; //@line 1676 "_elementtree.c"
        var $44=HEAP[$43]; //@line 1676 "_elementtree.c"
        var $45=$self_addr; //@line 1676 "_elementtree.c"
        var $46=$45+44; //@line 1676 "_elementtree.c"
        var $47=HEAP[$46]; //@line 1676 "_elementtree.c"
        FUNCTION_TABLE[$44]($47); //@line 1676 "_elementtree.c"
        __label__ = 6; break; //@line 1676 "_elementtree.c"
      case 6: // $bb5
        var $48=$self_addr; //@line 1677 "_elementtree.c"
        var $49=$48+40; //@line 1677 "_elementtree.c"
        var $50=HEAP[$49]; //@line 1677 "_elementtree.c"
        var $51=($50)!=0; //@line 1677 "_elementtree.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1677 "_elementtree.c"
      case 7: // $bb6
        var $52=$self_addr; //@line 1677 "_elementtree.c"
        var $53=$52+40; //@line 1677 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1677 "_elementtree.c"
        var $55=$54; //@line 1677 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1677 "_elementtree.c"
        var $57=($56) - 1; //@line 1677 "_elementtree.c"
        var $58=$54; //@line 1677 "_elementtree.c"
        HEAP[$58]=$57; //@line 1677 "_elementtree.c"
        var $59=$54; //@line 1677 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1677 "_elementtree.c"
        var $61=($60)==0; //@line 1677 "_elementtree.c"
        if ($61) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1677 "_elementtree.c"
      case 8: // $bb7
        var $62=$self_addr; //@line 1677 "_elementtree.c"
        var $63=$62+40; //@line 1677 "_elementtree.c"
        var $64=HEAP[$63]; //@line 1677 "_elementtree.c"
        var $65=$64+4; //@line 1677 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1677 "_elementtree.c"
        var $67=$66+24; //@line 1677 "_elementtree.c"
        var $68=HEAP[$67]; //@line 1677 "_elementtree.c"
        var $69=$self_addr; //@line 1677 "_elementtree.c"
        var $70=$69+40; //@line 1677 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1677 "_elementtree.c"
        FUNCTION_TABLE[$68]($71); //@line 1677 "_elementtree.c"
        __label__ = 9; break; //@line 1677 "_elementtree.c"
      case 9: // $bb8
        var $72=$self_addr; //@line 1678 "_elementtree.c"
        var $73=$72+36; //@line 1678 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1678 "_elementtree.c"
        var $75=($74)!=0; //@line 1678 "_elementtree.c"
        if ($75) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 1678 "_elementtree.c"
      case 10: // $bb9
        var $76=$self_addr; //@line 1678 "_elementtree.c"
        var $77=$76+36; //@line 1678 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1678 "_elementtree.c"
        var $79=$78; //@line 1678 "_elementtree.c"
        var $80=HEAP[$79]; //@line 1678 "_elementtree.c"
        var $81=($80) - 1; //@line 1678 "_elementtree.c"
        var $82=$78; //@line 1678 "_elementtree.c"
        HEAP[$82]=$81; //@line 1678 "_elementtree.c"
        var $83=$78; //@line 1678 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1678 "_elementtree.c"
        var $85=($84)==0; //@line 1678 "_elementtree.c"
        if ($85) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1678 "_elementtree.c"
      case 11: // $bb10
        var $86=$self_addr; //@line 1678 "_elementtree.c"
        var $87=$86+36; //@line 1678 "_elementtree.c"
        var $88=HEAP[$87]; //@line 1678 "_elementtree.c"
        var $89=$88+4; //@line 1678 "_elementtree.c"
        var $90=HEAP[$89]; //@line 1678 "_elementtree.c"
        var $91=$90+24; //@line 1678 "_elementtree.c"
        var $92=HEAP[$91]; //@line 1678 "_elementtree.c"
        var $93=$self_addr; //@line 1678 "_elementtree.c"
        var $94=$93+36; //@line 1678 "_elementtree.c"
        var $95=HEAP[$94]; //@line 1678 "_elementtree.c"
        FUNCTION_TABLE[$92]($95); //@line 1678 "_elementtree.c"
        __label__ = 12; break; //@line 1678 "_elementtree.c"
      case 12: // $bb11
        var $96=$self_addr; //@line 1679 "_elementtree.c"
        var $97=$96+32; //@line 1679 "_elementtree.c"
        var $98=HEAP[$97]; //@line 1679 "_elementtree.c"
        var $99=($98)!=0; //@line 1679 "_elementtree.c"
        if ($99) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1679 "_elementtree.c"
      case 13: // $bb12
        var $100=$self_addr; //@line 1679 "_elementtree.c"
        var $101=$100+32; //@line 1679 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1679 "_elementtree.c"
        var $103=$102; //@line 1679 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1679 "_elementtree.c"
        var $105=($104) - 1; //@line 1679 "_elementtree.c"
        var $106=$102; //@line 1679 "_elementtree.c"
        HEAP[$106]=$105; //@line 1679 "_elementtree.c"
        var $107=$102; //@line 1679 "_elementtree.c"
        var $108=HEAP[$107]; //@line 1679 "_elementtree.c"
        var $109=($108)==0; //@line 1679 "_elementtree.c"
        if ($109) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1679 "_elementtree.c"
      case 14: // $bb13
        var $110=$self_addr; //@line 1679 "_elementtree.c"
        var $111=$110+32; //@line 1679 "_elementtree.c"
        var $112=HEAP[$111]; //@line 1679 "_elementtree.c"
        var $113=$112+4; //@line 1679 "_elementtree.c"
        var $114=HEAP[$113]; //@line 1679 "_elementtree.c"
        var $115=$114+24; //@line 1679 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1679 "_elementtree.c"
        var $117=$self_addr; //@line 1679 "_elementtree.c"
        var $118=$117+32; //@line 1679 "_elementtree.c"
        var $119=HEAP[$118]; //@line 1679 "_elementtree.c"
        FUNCTION_TABLE[$116]($119); //@line 1679 "_elementtree.c"
        __label__ = 15; break; //@line 1679 "_elementtree.c"
      case 15: // $bb14
        var $120=$self_addr; //@line 1680 "_elementtree.c"
        var $121=$120+24; //@line 1680 "_elementtree.c"
        var $122=HEAP[$121]; //@line 1680 "_elementtree.c"
        var $123=$122; //@line 1680 "_elementtree.c"
        var $124=HEAP[$123]; //@line 1680 "_elementtree.c"
        var $125=($124) - 1; //@line 1680 "_elementtree.c"
        var $126=$122; //@line 1680 "_elementtree.c"
        HEAP[$126]=$125; //@line 1680 "_elementtree.c"
        var $127=$122; //@line 1680 "_elementtree.c"
        var $128=HEAP[$127]; //@line 1680 "_elementtree.c"
        var $129=($128)==0; //@line 1680 "_elementtree.c"
        if ($129) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1680 "_elementtree.c"
      case 16: // $bb15
        var $130=$self_addr; //@line 1680 "_elementtree.c"
        var $131=$130+24; //@line 1680 "_elementtree.c"
        var $132=HEAP[$131]; //@line 1680 "_elementtree.c"
        var $133=$132+4; //@line 1680 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1680 "_elementtree.c"
        var $135=$134+24; //@line 1680 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1680 "_elementtree.c"
        var $137=$self_addr; //@line 1680 "_elementtree.c"
        var $138=$137+24; //@line 1680 "_elementtree.c"
        var $139=HEAP[$138]; //@line 1680 "_elementtree.c"
        FUNCTION_TABLE[$136]($139); //@line 1680 "_elementtree.c"
        __label__ = 17; break; //@line 1680 "_elementtree.c"
      case 17: // $bb16
        var $140=$self_addr; //@line 1681 "_elementtree.c"
        var $141=$140+20; //@line 1681 "_elementtree.c"
        var $142=HEAP[$141]; //@line 1681 "_elementtree.c"
        var $143=($142)!=0; //@line 1681 "_elementtree.c"
        if ($143) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1681 "_elementtree.c"
      case 18: // $bb17
        var $144=$self_addr; //@line 1681 "_elementtree.c"
        var $145=$144+20; //@line 1681 "_elementtree.c"
        var $146=HEAP[$145]; //@line 1681 "_elementtree.c"
        var $147=$146; //@line 1681 "_elementtree.c"
        var $148=HEAP[$147]; //@line 1681 "_elementtree.c"
        var $149=($148) - 1; //@line 1681 "_elementtree.c"
        var $150=$146; //@line 1681 "_elementtree.c"
        HEAP[$150]=$149; //@line 1681 "_elementtree.c"
        var $151=$146; //@line 1681 "_elementtree.c"
        var $152=HEAP[$151]; //@line 1681 "_elementtree.c"
        var $153=($152)==0; //@line 1681 "_elementtree.c"
        if ($153) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1681 "_elementtree.c"
      case 19: // $bb18
        var $154=$self_addr; //@line 1681 "_elementtree.c"
        var $155=$154+20; //@line 1681 "_elementtree.c"
        var $156=HEAP[$155]; //@line 1681 "_elementtree.c"
        var $157=$156+4; //@line 1681 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1681 "_elementtree.c"
        var $159=$158+24; //@line 1681 "_elementtree.c"
        var $160=HEAP[$159]; //@line 1681 "_elementtree.c"
        var $161=$self_addr; //@line 1681 "_elementtree.c"
        var $162=$161+20; //@line 1681 "_elementtree.c"
        var $163=HEAP[$162]; //@line 1681 "_elementtree.c"
        FUNCTION_TABLE[$160]($163); //@line 1681 "_elementtree.c"
        __label__ = 20; break; //@line 1681 "_elementtree.c"
      case 20: // $bb19
        var $164=$self_addr; //@line 1682 "_elementtree.c"
        var $165=$164+16; //@line 1682 "_elementtree.c"
        var $166=HEAP[$165]; //@line 1682 "_elementtree.c"
        var $167=$166; //@line 1682 "_elementtree.c"
        var $168=$167; //@line 1682 "_elementtree.c"
        var $169=HEAP[$168]; //@line 1682 "_elementtree.c"
        var $170=($169) - 1; //@line 1682 "_elementtree.c"
        var $171=$167; //@line 1682 "_elementtree.c"
        HEAP[$171]=$170; //@line 1682 "_elementtree.c"
        var $172=$167; //@line 1682 "_elementtree.c"
        var $173=HEAP[$172]; //@line 1682 "_elementtree.c"
        var $174=($173)==0; //@line 1682 "_elementtree.c"
        if ($174) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1682 "_elementtree.c"
      case 21: // $bb20
        var $175=$self_addr; //@line 1682 "_elementtree.c"
        var $176=$175+16; //@line 1682 "_elementtree.c"
        var $177=HEAP[$176]; //@line 1682 "_elementtree.c"
        var $178=$177; //@line 1682 "_elementtree.c"
        var $179=$178+4; //@line 1682 "_elementtree.c"
        var $180=HEAP[$179]; //@line 1682 "_elementtree.c"
        var $181=$180+24; //@line 1682 "_elementtree.c"
        var $182=HEAP[$181]; //@line 1682 "_elementtree.c"
        var $183=$self_addr; //@line 1682 "_elementtree.c"
        var $184=$183+16; //@line 1682 "_elementtree.c"
        var $185=HEAP[$184]; //@line 1682 "_elementtree.c"
        var $186=$185; //@line 1682 "_elementtree.c"
        FUNCTION_TABLE[$182]($186); //@line 1682 "_elementtree.c"
        __label__ = 22; break; //@line 1682 "_elementtree.c"
      case 22: // $bb21
        var $187=$self_addr; //@line 1683 "_elementtree.c"
        var $188=$187+12; //@line 1683 "_elementtree.c"
        var $189=HEAP[$188]; //@line 1683 "_elementtree.c"
        var $190=$189; //@line 1683 "_elementtree.c"
        var $191=$190; //@line 1683 "_elementtree.c"
        var $192=HEAP[$191]; //@line 1683 "_elementtree.c"
        var $193=($192) - 1; //@line 1683 "_elementtree.c"
        var $194=$190; //@line 1683 "_elementtree.c"
        HEAP[$194]=$193; //@line 1683 "_elementtree.c"
        var $195=$190; //@line 1683 "_elementtree.c"
        var $196=HEAP[$195]; //@line 1683 "_elementtree.c"
        var $197=($196)==0; //@line 1683 "_elementtree.c"
        if ($197) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1683 "_elementtree.c"
      case 23: // $bb22
        var $198=$self_addr; //@line 1683 "_elementtree.c"
        var $199=$198+12; //@line 1683 "_elementtree.c"
        var $200=HEAP[$199]; //@line 1683 "_elementtree.c"
        var $201=$200; //@line 1683 "_elementtree.c"
        var $202=$201+4; //@line 1683 "_elementtree.c"
        var $203=HEAP[$202]; //@line 1683 "_elementtree.c"
        var $204=$203+24; //@line 1683 "_elementtree.c"
        var $205=HEAP[$204]; //@line 1683 "_elementtree.c"
        var $206=$self_addr; //@line 1683 "_elementtree.c"
        var $207=$206+12; //@line 1683 "_elementtree.c"
        var $208=HEAP[$207]; //@line 1683 "_elementtree.c"
        var $209=$208; //@line 1683 "_elementtree.c"
        FUNCTION_TABLE[$205]($209); //@line 1683 "_elementtree.c"
        __label__ = 24; break; //@line 1683 "_elementtree.c"
      case 24: // $bb23
        var $210=$self_addr; //@line 1684 "_elementtree.c"
        var $211=$210+8; //@line 1684 "_elementtree.c"
        var $212=HEAP[$211]; //@line 1684 "_elementtree.c"
        var $213=($212)!=0; //@line 1684 "_elementtree.c"
        if ($213) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 1684 "_elementtree.c"
      case 25: // $bb24
        var $214=$self_addr; //@line 1684 "_elementtree.c"
        var $215=$214+8; //@line 1684 "_elementtree.c"
        var $216=HEAP[$215]; //@line 1684 "_elementtree.c"
        var $217=$216; //@line 1684 "_elementtree.c"
        var $218=HEAP[$217]; //@line 1684 "_elementtree.c"
        var $219=($218) - 1; //@line 1684 "_elementtree.c"
        var $220=$216; //@line 1684 "_elementtree.c"
        HEAP[$220]=$219; //@line 1684 "_elementtree.c"
        var $221=$216; //@line 1684 "_elementtree.c"
        var $222=HEAP[$221]; //@line 1684 "_elementtree.c"
        var $223=($222)==0; //@line 1684 "_elementtree.c"
        if ($223) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1684 "_elementtree.c"
      case 26: // $bb25
        var $224=$self_addr; //@line 1684 "_elementtree.c"
        var $225=$224+8; //@line 1684 "_elementtree.c"
        var $226=HEAP[$225]; //@line 1684 "_elementtree.c"
        var $227=$226+4; //@line 1684 "_elementtree.c"
        var $228=HEAP[$227]; //@line 1684 "_elementtree.c"
        var $229=$228+24; //@line 1684 "_elementtree.c"
        var $230=HEAP[$229]; //@line 1684 "_elementtree.c"
        var $231=$self_addr; //@line 1684 "_elementtree.c"
        var $232=$231+8; //@line 1684 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1684 "_elementtree.c"
        FUNCTION_TABLE[$230]($233); //@line 1684 "_elementtree.c"
        __label__ = 27; break; //@line 1684 "_elementtree.c"
      case 27: // $bb26
        var $234=$self_addr; //@line 1688 "_elementtree.c"
        var $235=$234; //@line 1688 "_elementtree.c"
        _PyObject_Free($235); //@line 1688 "_elementtree.c"
        ;
        return; //@line 1689 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_xml($self, $encoding, $standalone) {
    ;
    var __label__;
  
    var $self_addr;
    var $encoding_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $encoding_addr=$encoding;
    var $1=HEAP[__Py_NoneStruct]; //@line 1698 "_elementtree.c"
    var $2=($1) + 1; //@line 1698 "_elementtree.c"
    HEAP[__Py_NoneStruct]=$2; //@line 1698 "_elementtree.c"
    $0=__Py_NoneStruct; //@line 1698 "_elementtree.c"
    var $3=$0; //@line 1698 "_elementtree.c"
    $retval=$3; //@line 1698 "_elementtree.c"
    var $retval1=$retval; //@line 1698 "_elementtree.c"
    ;
    return $retval1; //@line 1698 "_elementtree.c"
  }
  

  function _treebuilder_handle_start($self, $tag, $attrib) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tag_addr;
        var $attrib_addr;
        var $retval;
        var $0;
        var $node;
        var $this;
        var $res;
        var $action;
        $self_addr=$self;
        $tag_addr=$tag;
        $attrib_addr=$attrib;
        var $1=$self_addr; //@line 1708 "_elementtree.c"
        var $2=$1+20; //@line 1708 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1708 "_elementtree.c"
        var $4=($3)!=0; //@line 1708 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1708 "_elementtree.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1709 "_elementtree.c"
        var $6=$5+12; //@line 1709 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1709 "_elementtree.c"
        var $8=$self_addr; //@line 1709 "_elementtree.c"
        var $9=$8+16; //@line 1709 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1709 "_elementtree.c"
        var $11=($7)==($10); //@line 1709 "_elementtree.c"
        var $12=$self_addr; //@line 1710 "_elementtree.c"
        var $13=$12+16; //@line 1710 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1710 "_elementtree.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1709 "_elementtree.c"
      case 2: // $bb1
        var $15=$14+12; //@line 1710 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1710 "_elementtree.c"
        var $17=($16); //@line 1710 "_elementtree.c"
        var $18=($17) & -2; //@line 1710 "_elementtree.c"
        var $19=($18); //@line 1710 "_elementtree.c"
        var $20=$19; //@line 1710 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1710 "_elementtree.c"
        var $22=($21) - 1; //@line 1710 "_elementtree.c"
        var $23=$19; //@line 1710 "_elementtree.c"
        HEAP[$23]=$22; //@line 1710 "_elementtree.c"
        var $24=$19; //@line 1710 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1710 "_elementtree.c"
        var $26=($25)==0; //@line 1710 "_elementtree.c"
        if ($26) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1710 "_elementtree.c"
      case 3: // $bb2
        var $27=$self_addr; //@line 1710 "_elementtree.c"
        var $28=$27+16; //@line 1710 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1710 "_elementtree.c"
        var $30=$29+12; //@line 1710 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1710 "_elementtree.c"
        var $32=($31); //@line 1710 "_elementtree.c"
        var $33=($32) & -2; //@line 1710 "_elementtree.c"
        var $34=($33); //@line 1710 "_elementtree.c"
        var $35=$34+4; //@line 1710 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1710 "_elementtree.c"
        var $37=$36+24; //@line 1710 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1710 "_elementtree.c"
        var $39=$self_addr; //@line 1710 "_elementtree.c"
        var $40=$39+16; //@line 1710 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1710 "_elementtree.c"
        var $42=$41+12; //@line 1710 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1710 "_elementtree.c"
        var $44=($43); //@line 1710 "_elementtree.c"
        var $45=($44) & -2; //@line 1710 "_elementtree.c"
        var $46=($45); //@line 1710 "_elementtree.c"
        FUNCTION_TABLE[$38]($46); //@line 1710 "_elementtree.c"
        __label__ = 4; break; //@line 1710 "_elementtree.c"
      case 4: // $bb3
        var $47=$self_addr; //@line 1711 "_elementtree.c"
        var $48=$47+16; //@line 1711 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1711 "_elementtree.c"
        var $50=$self_addr; //@line 1711 "_elementtree.c"
        var $51=$50+20; //@line 1711 "_elementtree.c"
        var $52=HEAP[$51]; //@line 1711 "_elementtree.c"
        var $53=($52); //@line 1711 "_elementtree.c"
        var $54=($53) & -2; //@line 1711 "_elementtree.c"
        var $55=$self_addr; //@line 1711 "_elementtree.c"
        var $56=$55+20; //@line 1711 "_elementtree.c"
        var $57=HEAP[$56]; //@line 1711 "_elementtree.c"
        var $58=$57+4; //@line 1711 "_elementtree.c"
        var $59=HEAP[$58]; //@line 1711 "_elementtree.c"
        var $60=($59)==(_PyList_Type); //@line 1711 "_elementtree.c"
        var $61=($60); //@line 1711 "_elementtree.c"
        var $62=($61) | ($54); //@line 1711 "_elementtree.c"
        var $63=($62); //@line 1711 "_elementtree.c"
        var $64=$49+12; //@line 1711 "_elementtree.c"
        HEAP[$64]=$63; //@line 1711 "_elementtree.c"
        __label__ = 8; break; //@line 1711 "_elementtree.c"
      case 5: // $bb4
        var $65=$14+16; //@line 1715 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1715 "_elementtree.c"
        var $67=($66); //@line 1715 "_elementtree.c"
        var $68=($67) & -2; //@line 1715 "_elementtree.c"
        var $69=($68); //@line 1715 "_elementtree.c"
        var $70=$69; //@line 1715 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1715 "_elementtree.c"
        var $72=($71) - 1; //@line 1715 "_elementtree.c"
        var $73=$69; //@line 1715 "_elementtree.c"
        HEAP[$73]=$72; //@line 1715 "_elementtree.c"
        var $74=$69; //@line 1715 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1715 "_elementtree.c"
        var $76=($75)==0; //@line 1715 "_elementtree.c"
        if ($76) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1715 "_elementtree.c"
      case 6: // $bb5
        var $77=$self_addr; //@line 1715 "_elementtree.c"
        var $78=$77+16; //@line 1715 "_elementtree.c"
        var $79=HEAP[$78]; //@line 1715 "_elementtree.c"
        var $80=$79+16; //@line 1715 "_elementtree.c"
        var $81=HEAP[$80]; //@line 1715 "_elementtree.c"
        var $82=($81); //@line 1715 "_elementtree.c"
        var $83=($82) & -2; //@line 1715 "_elementtree.c"
        var $84=($83); //@line 1715 "_elementtree.c"
        var $85=$84+4; //@line 1715 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1715 "_elementtree.c"
        var $87=$86+24; //@line 1715 "_elementtree.c"
        var $88=HEAP[$87]; //@line 1715 "_elementtree.c"
        var $89=$self_addr; //@line 1715 "_elementtree.c"
        var $90=$89+16; //@line 1715 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1715 "_elementtree.c"
        var $92=$91+16; //@line 1715 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1715 "_elementtree.c"
        var $94=($93); //@line 1715 "_elementtree.c"
        var $95=($94) & -2; //@line 1715 "_elementtree.c"
        var $96=($95); //@line 1715 "_elementtree.c"
        FUNCTION_TABLE[$88]($96); //@line 1715 "_elementtree.c"
        __label__ = 7; break; //@line 1715 "_elementtree.c"
      case 7: // $bb6
        var $97=$self_addr; //@line 1716 "_elementtree.c"
        var $98=$97+16; //@line 1716 "_elementtree.c"
        var $99=HEAP[$98]; //@line 1716 "_elementtree.c"
        var $100=$self_addr; //@line 1716 "_elementtree.c"
        var $101=$100+20; //@line 1716 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1716 "_elementtree.c"
        var $103=($102); //@line 1716 "_elementtree.c"
        var $104=($103) & -2; //@line 1716 "_elementtree.c"
        var $105=$self_addr; //@line 1716 "_elementtree.c"
        var $106=$105+20; //@line 1716 "_elementtree.c"
        var $107=HEAP[$106]; //@line 1716 "_elementtree.c"
        var $108=$107+4; //@line 1716 "_elementtree.c"
        var $109=HEAP[$108]; //@line 1716 "_elementtree.c"
        var $110=($109)==(_PyList_Type); //@line 1716 "_elementtree.c"
        var $111=($110); //@line 1716 "_elementtree.c"
        var $112=($111) | ($104); //@line 1716 "_elementtree.c"
        var $113=($112); //@line 1716 "_elementtree.c"
        var $114=$99+16; //@line 1716 "_elementtree.c"
        HEAP[$114]=$113; //@line 1716 "_elementtree.c"
        __label__ = 8; break; //@line 1716 "_elementtree.c"
      case 8: // $bb7
        var $115=$self_addr; //@line 1720 "_elementtree.c"
        var $116=$115+20; //@line 1720 "_elementtree.c"
        HEAP[$116]=0; //@line 1720 "_elementtree.c"
        __label__ = 9; break; //@line 1720 "_elementtree.c"
      case 9: // $bb8
        var $117=$tag_addr; //@line 1723 "_elementtree.c"
        var $118=$attrib_addr; //@line 1723 "_elementtree.c"
        var $119=_element_new($117, $118); //@line 1723 "_elementtree.c"
        $node=$119; //@line 1723 "_elementtree.c"
        var $120=($119)==0; //@line 1724 "_elementtree.c"
        if ($120) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1724 "_elementtree.c"
      case 10: // $bb9
        $0=0; //@line 1725 "_elementtree.c"
        __label__ = 33; break; //@line 1725 "_elementtree.c"
      case 11: // $bb10
        var $121=$self_addr; //@line 1727 "_elementtree.c"
        var $122=$121+12; //@line 1727 "_elementtree.c"
        var $123=HEAP[$122]; //@line 1727 "_elementtree.c"
        var $124=$123; //@line 1727 "_elementtree.c"
        $this=$124; //@line 1727 "_elementtree.c"
        var $125=$this; //@line 1729 "_elementtree.c"
        var $126=($125)!=(__Py_NoneStruct); //@line 1729 "_elementtree.c"
        if ($126) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1729 "_elementtree.c"
      case 12: // $bb11
        var $127=$this; //@line 1730 "_elementtree.c"
        var $128=$127; //@line 1730 "_elementtree.c"
        var $129=$node; //@line 1730 "_elementtree.c"
        var $130=_element_add_subelement($128, $129); //@line 1730 "_elementtree.c"
        var $131=($130) < 0; //@line 1730 "_elementtree.c"
        if ($131) { __label__ = 30; break; } else { __label__ = 16; break; } //@line 1730 "_elementtree.c"
      case 13: // $bb13
        var $132=$self_addr; //@line 1733 "_elementtree.c"
        var $133=$132+8; //@line 1733 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1733 "_elementtree.c"
        var $135=($134)!=0; //@line 1733 "_elementtree.c"
        if ($135) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1733 "_elementtree.c"
      case 14: // $bb14
        var $136=HEAP[_elementtree_parseerror_obj]; //@line 1734 "_elementtree.c"
        _PyErr_SetString($136, __str66); //@line 1734 "_elementtree.c"
        __label__ = 30; break; //@line 1734 "_elementtree.c"
      case 15: // $bb15
        var $137=$node; //@line 1740 "_elementtree.c"
        var $138=$137; //@line 1740 "_elementtree.c"
        var $139=HEAP[$138]; //@line 1740 "_elementtree.c"
        var $140=($139) + 1; //@line 1740 "_elementtree.c"
        var $141=$node; //@line 1740 "_elementtree.c"
        var $142=$141; //@line 1740 "_elementtree.c"
        HEAP[$142]=$140; //@line 1740 "_elementtree.c"
        var $143=$self_addr; //@line 1741 "_elementtree.c"
        var $144=$143+8; //@line 1741 "_elementtree.c"
        var $145=$node; //@line 1741 "_elementtree.c"
        HEAP[$144]=$145; //@line 1741 "_elementtree.c"
        __label__ = 16; break; //@line 1741 "_elementtree.c"
      case 16: // $bb16
        var $146=$self_addr; //@line 1744 "_elementtree.c"
        var $147=$146+28; //@line 1744 "_elementtree.c"
        var $148=HEAP[$147]; //@line 1744 "_elementtree.c"
        var $149=$self_addr; //@line 1744 "_elementtree.c"
        var $150=$149+24; //@line 1744 "_elementtree.c"
        var $151=HEAP[$150]; //@line 1744 "_elementtree.c"
        var $152=$151; //@line 1744 "_elementtree.c"
        var $153=$152+8; //@line 1744 "_elementtree.c"
        var $154=HEAP[$153]; //@line 1744 "_elementtree.c"
        var $155=($148) < ($154); //@line 1744 "_elementtree.c"
        var $156=$self_addr; //@line 1745 "_elementtree.c"
        if ($155) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1744 "_elementtree.c"
      case 17: // $bb17
        var $157=$156+28; //@line 1745 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1745 "_elementtree.c"
        var $159=$self_addr; //@line 1745 "_elementtree.c"
        var $160=$159+24; //@line 1745 "_elementtree.c"
        var $161=HEAP[$160]; //@line 1745 "_elementtree.c"
        var $162=$this; //@line 1745 "_elementtree.c"
        var $163=_PyList_SetItem($161, $158, $162); //@line 1745 "_elementtree.c"
        var $164=($163) < 0; //@line 1745 "_elementtree.c"
        if ($164) { __label__ = 30; break; } else { __label__ = 18; break; } //@line 1745 "_elementtree.c"
      case 18: // $bb18
        var $165=$this; //@line 1747 "_elementtree.c"
        var $166=$165; //@line 1747 "_elementtree.c"
        var $167=HEAP[$166]; //@line 1747 "_elementtree.c"
        var $168=($167) + 1; //@line 1747 "_elementtree.c"
        var $169=$this; //@line 1747 "_elementtree.c"
        var $170=$169; //@line 1747 "_elementtree.c"
        HEAP[$170]=$168; //@line 1747 "_elementtree.c"
        __label__ = 20; break; //@line 1747 "_elementtree.c"
      case 19: // $bb19
        var $171=$156+24; //@line 1749 "_elementtree.c"
        var $172=HEAP[$171]; //@line 1749 "_elementtree.c"
        var $173=$this; //@line 1749 "_elementtree.c"
        var $174=_PyList_Append($172, $173); //@line 1749 "_elementtree.c"
        var $175=($174) < 0; //@line 1749 "_elementtree.c"
        if ($175) { __label__ = 30; break; } else { __label__ = 20; break; } //@line 1749 "_elementtree.c"
      case 20: // $bb20
        var $176=$self_addr; //@line 1752 "_elementtree.c"
        var $177=$176+28; //@line 1752 "_elementtree.c"
        var $178=HEAP[$177]; //@line 1752 "_elementtree.c"
        var $179=($178) + 1; //@line 1752 "_elementtree.c"
        var $180=$self_addr; //@line 1752 "_elementtree.c"
        var $181=$180+28; //@line 1752 "_elementtree.c"
        HEAP[$181]=$179; //@line 1752 "_elementtree.c"
        var $182=$this; //@line 1754 "_elementtree.c"
        var $183=$182; //@line 1754 "_elementtree.c"
        var $184=HEAP[$183]; //@line 1754 "_elementtree.c"
        var $185=($184) - 1; //@line 1754 "_elementtree.c"
        var $186=$this; //@line 1754 "_elementtree.c"
        var $187=$186; //@line 1754 "_elementtree.c"
        HEAP[$187]=$185; //@line 1754 "_elementtree.c"
        var $188=$this; //@line 1754 "_elementtree.c"
        var $189=$188; //@line 1754 "_elementtree.c"
        var $190=HEAP[$189]; //@line 1754 "_elementtree.c"
        var $191=($190)==0; //@line 1754 "_elementtree.c"
        if ($191) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1754 "_elementtree.c"
      case 21: // $bb21
        var $192=$this; //@line 1754 "_elementtree.c"
        var $193=$192+4; //@line 1754 "_elementtree.c"
        var $194=HEAP[$193]; //@line 1754 "_elementtree.c"
        var $195=$194+24; //@line 1754 "_elementtree.c"
        var $196=HEAP[$195]; //@line 1754 "_elementtree.c"
        var $197=$this; //@line 1754 "_elementtree.c"
        FUNCTION_TABLE[$196]($197); //@line 1754 "_elementtree.c"
        __label__ = 22; break; //@line 1754 "_elementtree.c"
      case 22: // $bb22
        var $198=$node; //@line 1755 "_elementtree.c"
        var $199=$198; //@line 1755 "_elementtree.c"
        var $200=HEAP[$199]; //@line 1755 "_elementtree.c"
        var $201=($200) + 1; //@line 1755 "_elementtree.c"
        var $202=$node; //@line 1755 "_elementtree.c"
        var $203=$202; //@line 1755 "_elementtree.c"
        HEAP[$203]=$201; //@line 1755 "_elementtree.c"
        var $204=$node; //@line 1756 "_elementtree.c"
        var $205=$204; //@line 1756 "_elementtree.c"
        var $206=$self_addr; //@line 1756 "_elementtree.c"
        var $207=$206+12; //@line 1756 "_elementtree.c"
        HEAP[$207]=$205; //@line 1756 "_elementtree.c"
        var $208=$self_addr; //@line 1758 "_elementtree.c"
        var $209=$208+16; //@line 1758 "_elementtree.c"
        var $210=HEAP[$209]; //@line 1758 "_elementtree.c"
        var $211=$210; //@line 1758 "_elementtree.c"
        var $212=$211; //@line 1758 "_elementtree.c"
        var $213=HEAP[$212]; //@line 1758 "_elementtree.c"
        var $214=($213) - 1; //@line 1758 "_elementtree.c"
        var $215=$211; //@line 1758 "_elementtree.c"
        HEAP[$215]=$214; //@line 1758 "_elementtree.c"
        var $216=$211; //@line 1758 "_elementtree.c"
        var $217=HEAP[$216]; //@line 1758 "_elementtree.c"
        var $218=($217)==0; //@line 1758 "_elementtree.c"
        if ($218) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1758 "_elementtree.c"
      case 23: // $bb23
        var $219=$self_addr; //@line 1758 "_elementtree.c"
        var $220=$219+16; //@line 1758 "_elementtree.c"
        var $221=HEAP[$220]; //@line 1758 "_elementtree.c"
        var $222=$221; //@line 1758 "_elementtree.c"
        var $223=$222+4; //@line 1758 "_elementtree.c"
        var $224=HEAP[$223]; //@line 1758 "_elementtree.c"
        var $225=$224+24; //@line 1758 "_elementtree.c"
        var $226=HEAP[$225]; //@line 1758 "_elementtree.c"
        var $227=$self_addr; //@line 1758 "_elementtree.c"
        var $228=$227+16; //@line 1758 "_elementtree.c"
        var $229=HEAP[$228]; //@line 1758 "_elementtree.c"
        var $230=$229; //@line 1758 "_elementtree.c"
        FUNCTION_TABLE[$226]($230); //@line 1758 "_elementtree.c"
        __label__ = 24; break; //@line 1758 "_elementtree.c"
      case 24: // $bb24
        var $231=$node; //@line 1759 "_elementtree.c"
        var $232=$231; //@line 1759 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1759 "_elementtree.c"
        var $234=($233) + 1; //@line 1759 "_elementtree.c"
        var $235=$node; //@line 1759 "_elementtree.c"
        var $236=$235; //@line 1759 "_elementtree.c"
        HEAP[$236]=$234; //@line 1759 "_elementtree.c"
        var $237=$node; //@line 1760 "_elementtree.c"
        var $238=$237; //@line 1760 "_elementtree.c"
        var $239=$self_addr; //@line 1760 "_elementtree.c"
        var $240=$239+16; //@line 1760 "_elementtree.c"
        HEAP[$240]=$238; //@line 1760 "_elementtree.c"
        var $241=$self_addr; //@line 1762 "_elementtree.c"
        var $242=$241+36; //@line 1762 "_elementtree.c"
        var $243=HEAP[$242]; //@line 1762 "_elementtree.c"
        var $244=($243)!=0; //@line 1762 "_elementtree.c"
        if ($244) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 1762 "_elementtree.c"
      case 25: // $bb25
        var $245=$self_addr; //@line 1764 "_elementtree.c"
        var $246=$245+36; //@line 1764 "_elementtree.c"
        var $247=HEAP[$246]; //@line 1764 "_elementtree.c"
        $action=$247; //@line 1764 "_elementtree.c"
        var $248=_PyTuple_New(2); //@line 1765 "_elementtree.c"
        $res=$248; //@line 1765 "_elementtree.c"
        var $249=$res; //@line 1766 "_elementtree.c"
        var $250=($249)!=0; //@line 1766 "_elementtree.c"
        if ($250) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 1766 "_elementtree.c"
      case 26: // $bb26
        var $251=$action; //@line 1767 "_elementtree.c"
        var $252=$251; //@line 1767 "_elementtree.c"
        var $253=HEAP[$252]; //@line 1767 "_elementtree.c"
        var $254=($253) + 1; //@line 1767 "_elementtree.c"
        var $255=$action; //@line 1767 "_elementtree.c"
        var $256=$255; //@line 1767 "_elementtree.c"
        HEAP[$256]=$254; //@line 1767 "_elementtree.c"
        var $257=$res; //@line 1767 "_elementtree.c"
        var $258=$257; //@line 1767 "_elementtree.c"
        var $259=$258+12; //@line 1767 "_elementtree.c"
        var $260=$259; //@line 1767 "_elementtree.c"
        var $261=$action; //@line 1767 "_elementtree.c"
        HEAP[$260]=$261; //@line 1767 "_elementtree.c"
        var $262=$node; //@line 1768 "_elementtree.c"
        var $263=$262; //@line 1768 "_elementtree.c"
        var $264=HEAP[$263]; //@line 1768 "_elementtree.c"
        var $265=($264) + 1; //@line 1768 "_elementtree.c"
        var $266=$node; //@line 1768 "_elementtree.c"
        var $267=$266; //@line 1768 "_elementtree.c"
        HEAP[$267]=$265; //@line 1768 "_elementtree.c"
        var $268=$res; //@line 1768 "_elementtree.c"
        var $269=$268; //@line 1768 "_elementtree.c"
        var $270=$269+12; //@line 1768 "_elementtree.c"
        var $271=$270+4; //@line 1768 "_elementtree.c"
        var $272=$node; //@line 1768 "_elementtree.c"
        HEAP[$271]=$272; //@line 1768 "_elementtree.c"
        var $273=$self_addr; //@line 1769 "_elementtree.c"
        var $274=$273+32; //@line 1769 "_elementtree.c"
        var $275=HEAP[$274]; //@line 1769 "_elementtree.c"
        var $276=$res; //@line 1769 "_elementtree.c"
        var $277=_PyList_Append($275, $276); //@line 1769 "_elementtree.c"
        var $278=$res; //@line 1770 "_elementtree.c"
        var $279=$278; //@line 1770 "_elementtree.c"
        var $280=HEAP[$279]; //@line 1770 "_elementtree.c"
        var $281=($280) - 1; //@line 1770 "_elementtree.c"
        var $282=$res; //@line 1770 "_elementtree.c"
        var $283=$282; //@line 1770 "_elementtree.c"
        HEAP[$283]=$281; //@line 1770 "_elementtree.c"
        var $284=$res; //@line 1770 "_elementtree.c"
        var $285=$284; //@line 1770 "_elementtree.c"
        var $286=HEAP[$285]; //@line 1770 "_elementtree.c"
        var $287=($286)==0; //@line 1770 "_elementtree.c"
        if ($287) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1770 "_elementtree.c"
      case 27: // $bb27
        var $288=$res; //@line 1770 "_elementtree.c"
        var $289=$288+4; //@line 1770 "_elementtree.c"
        var $290=HEAP[$289]; //@line 1770 "_elementtree.c"
        var $291=$290+24; //@line 1770 "_elementtree.c"
        var $292=HEAP[$291]; //@line 1770 "_elementtree.c"
        var $293=$res; //@line 1770 "_elementtree.c"
        FUNCTION_TABLE[$292]($293); //@line 1770 "_elementtree.c"
        __label__ = 29; break; //@line 1770 "_elementtree.c"
      case 28: // $bb29
        _PyErr_Clear(); //@line 1772 "_elementtree.c"
        __label__ = 29; break; //@line 1772 "_elementtree.c"
      case 29: // $bb30
        var $294=$node; //@line 1775 "_elementtree.c"
        $0=$294; //@line 1775 "_elementtree.c"
        __label__ = 33; break; //@line 1775 "_elementtree.c"
      case 30: // $error
        var $295=$node; //@line 1778 "_elementtree.c"
        var $296=$295; //@line 1778 "_elementtree.c"
        var $297=HEAP[$296]; //@line 1778 "_elementtree.c"
        var $298=($297) - 1; //@line 1778 "_elementtree.c"
        var $299=$node; //@line 1778 "_elementtree.c"
        var $300=$299; //@line 1778 "_elementtree.c"
        HEAP[$300]=$298; //@line 1778 "_elementtree.c"
        var $301=$node; //@line 1778 "_elementtree.c"
        var $302=$301; //@line 1778 "_elementtree.c"
        var $303=HEAP[$302]; //@line 1778 "_elementtree.c"
        var $304=($303)==0; //@line 1778 "_elementtree.c"
        if ($304) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1778 "_elementtree.c"
      case 31: // $bb31
        var $305=$node; //@line 1778 "_elementtree.c"
        var $306=$305+4; //@line 1778 "_elementtree.c"
        var $307=HEAP[$306]; //@line 1778 "_elementtree.c"
        var $308=$307+24; //@line 1778 "_elementtree.c"
        var $309=HEAP[$308]; //@line 1778 "_elementtree.c"
        var $310=$node; //@line 1778 "_elementtree.c"
        FUNCTION_TABLE[$309]($310); //@line 1778 "_elementtree.c"
        __label__ = 32; break; //@line 1778 "_elementtree.c"
      case 32: // $bb32
        $0=0; //@line 1779 "_elementtree.c"
        __label__ = 33; break; //@line 1779 "_elementtree.c"
      case 33: // $bb33
        var $311=$0; //@line 1725 "_elementtree.c"
        $retval=$311; //@line 1725 "_elementtree.c"
        var $retval34=$retval; //@line 1725 "_elementtree.c"
        ;
        return $retval34; //@line 1725 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_data($self, $data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $data_addr;
        var $retval;
        var $0;
        var $size;
        var $list;
        $self_addr=$self;
        $data_addr=$data;
        var $1=$self_addr; //@line 1785 "_elementtree.c"
        var $2=$1+20; //@line 1785 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1785 "_elementtree.c"
        var $4=($3)==0; //@line 1785 "_elementtree.c"
        var $5=$self_addr; //@line 1786 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1785 "_elementtree.c"
      case 1: // $bb
        var $6=$5+16; //@line 1786 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1786 "_elementtree.c"
        var $8=($7)==(__Py_NoneStruct); //@line 1786 "_elementtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1786 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[__Py_NoneStruct]; //@line 1788 "_elementtree.c"
        var $10=($9) + 1; //@line 1788 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$10; //@line 1788 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 1788 "_elementtree.c"
        __label__ = 18; break; //@line 1788 "_elementtree.c"
      case 3: // $bb2
        var $11=$data_addr; //@line 1791 "_elementtree.c"
        var $12=$11; //@line 1791 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1791 "_elementtree.c"
        var $14=($13) + 1; //@line 1791 "_elementtree.c"
        var $15=$data_addr; //@line 1791 "_elementtree.c"
        var $16=$15; //@line 1791 "_elementtree.c"
        HEAP[$16]=$14; //@line 1791 "_elementtree.c"
        var $17=$self_addr; //@line 1791 "_elementtree.c"
        var $18=$17+20; //@line 1791 "_elementtree.c"
        var $19=$data_addr; //@line 1791 "_elementtree.c"
        HEAP[$18]=$19; //@line 1791 "_elementtree.c"
        __label__ = 17; break; //@line 1791 "_elementtree.c"
      case 4: // $bb3
        var $20=$5+20; //@line 1794 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1794 "_elementtree.c"
        var $22=$21+4; //@line 1794 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1794 "_elementtree.c"
        var $24=($23)!=(_PyString_Type); //@line 1794 "_elementtree.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 1794 "_elementtree.c"
      case 5: // $bb4
        var $25=$self_addr; //@line 1794 "_elementtree.c"
        var $26=$25+20; //@line 1794 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1794 "_elementtree.c"
        var $28=$27; //@line 1794 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1794 "_elementtree.c"
        var $30=($29)!=1; //@line 1794 "_elementtree.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 1794 "_elementtree.c"
      case 6: // $bb5
        var $31=$data_addr; //@line 1794 "_elementtree.c"
        var $32=$31+4; //@line 1794 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1794 "_elementtree.c"
        var $34=($33)!=(_PyString_Type); //@line 1794 "_elementtree.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 1794 "_elementtree.c"
      case 7: // $bb6
        var $35=$data_addr; //@line 1794 "_elementtree.c"
        var $36=$35; //@line 1794 "_elementtree.c"
        var $37=$36+8; //@line 1794 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1794 "_elementtree.c"
        var $39=($38)!=1; //@line 1794 "_elementtree.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1794 "_elementtree.c"
      case 8: // $bb7
        var $40=$self_addr; //@line 1798 "_elementtree.c"
        var $41=$40+20; //@line 1798 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1798 "_elementtree.c"
        var $43=$42; //@line 1798 "_elementtree.c"
        var $44=$43+8; //@line 1798 "_elementtree.c"
        var $45=HEAP[$44]; //@line 1798 "_elementtree.c"
        $size=$45; //@line 1798 "_elementtree.c"
        var $46=$size; //@line 1799 "_elementtree.c"
        var $47=($46) + 1; //@line 1799 "_elementtree.c"
        var $48=$self_addr; //@line 1799 "_elementtree.c"
        var $49=$48+20; //@line 1799 "_elementtree.c"
        var $50=__PyString_Resize($49, $47); //@line 1799 "_elementtree.c"
        var $51=($50) < 0; //@line 1799 "_elementtree.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1799 "_elementtree.c"
      case 9: // $bb8
        $0=0; //@line 1800 "_elementtree.c"
        __label__ = 18; break; //@line 1800 "_elementtree.c"
      case 10: // $bb9
        var $52=$self_addr; //@line 1801 "_elementtree.c"
        var $53=$52+20; //@line 1801 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1801 "_elementtree.c"
        var $55=$54; //@line 1801 "_elementtree.c"
        var $56=$size; //@line 1801 "_elementtree.c"
        var $57=$data_addr; //@line 1801 "_elementtree.c"
        var $58=$57; //@line 1801 "_elementtree.c"
        var $59=$58+20; //@line 1801 "_elementtree.c"
        var $60=$59; //@line 1801 "_elementtree.c"
        var $61=HEAP[$60]; //@line 1801 "_elementtree.c"
        var $62=$55+20; //@line 1801 "_elementtree.c"
        var $63=$62+$56; //@line 1801 "_elementtree.c"
        HEAP[$63]=$61; //@line 1801 "_elementtree.c"
        __label__ = 17; break; //@line 1801 "_elementtree.c"
      case 11: // $bb10
        var $64=$self_addr; //@line 1802 "_elementtree.c"
        var $65=$64+20; //@line 1802 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1802 "_elementtree.c"
        var $67=$66+4; //@line 1802 "_elementtree.c"
        var $68=HEAP[$67]; //@line 1802 "_elementtree.c"
        var $69=($68)==(_PyList_Type); //@line 1802 "_elementtree.c"
        if ($69) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1802 "_elementtree.c"
      case 12: // $bb11
        var $70=$self_addr; //@line 1803 "_elementtree.c"
        var $71=$70+20; //@line 1803 "_elementtree.c"
        var $72=HEAP[$71]; //@line 1803 "_elementtree.c"
        var $73=$data_addr; //@line 1803 "_elementtree.c"
        var $74=_PyList_Append($72, $73); //@line 1803 "_elementtree.c"
        var $75=($74) < 0; //@line 1803 "_elementtree.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 1803 "_elementtree.c"
      case 13: // $bb12
        $0=0; //@line 1804 "_elementtree.c"
        __label__ = 18; break; //@line 1804 "_elementtree.c"
      case 14: // $bb14
        var $76=_PyList_New(2); //@line 1806 "_elementtree.c"
        $list=$76; //@line 1806 "_elementtree.c"
        var $77=$list; //@line 1807 "_elementtree.c"
        var $78=($77)==0; //@line 1807 "_elementtree.c"
        if ($78) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1807 "_elementtree.c"
      case 15: // $bb15
        $0=0; //@line 1808 "_elementtree.c"
        __label__ = 18; break; //@line 1808 "_elementtree.c"
      case 16: // $bb16
        var $79=$list; //@line 1809 "_elementtree.c"
        var $80=$79; //@line 1809 "_elementtree.c"
        var $81=$80+12; //@line 1809 "_elementtree.c"
        var $82=HEAP[$81]; //@line 1809 "_elementtree.c"
        var $83=$self_addr; //@line 1809 "_elementtree.c"
        var $84=$83+20; //@line 1809 "_elementtree.c"
        var $85=HEAP[$84]; //@line 1809 "_elementtree.c"
        var $86=$82; //@line 1809 "_elementtree.c"
        HEAP[$86]=$85; //@line 1809 "_elementtree.c"
        var $87=$data_addr; //@line 1810 "_elementtree.c"
        var $88=$87; //@line 1810 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1810 "_elementtree.c"
        var $90=($89) + 1; //@line 1810 "_elementtree.c"
        var $91=$data_addr; //@line 1810 "_elementtree.c"
        var $92=$91; //@line 1810 "_elementtree.c"
        HEAP[$92]=$90; //@line 1810 "_elementtree.c"
        var $93=$list; //@line 1810 "_elementtree.c"
        var $94=$93; //@line 1810 "_elementtree.c"
        var $95=$94+12; //@line 1810 "_elementtree.c"
        var $96=HEAP[$95]; //@line 1810 "_elementtree.c"
        var $97=$96+4; //@line 1810 "_elementtree.c"
        var $98=$data_addr; //@line 1810 "_elementtree.c"
        HEAP[$97]=$98; //@line 1810 "_elementtree.c"
        var $99=$self_addr; //@line 1811 "_elementtree.c"
        var $100=$99+20; //@line 1811 "_elementtree.c"
        var $101=$list; //@line 1811 "_elementtree.c"
        HEAP[$100]=$101; //@line 1811 "_elementtree.c"
        __label__ = 17; break; //@line 1811 "_elementtree.c"
      case 17: // $bb17
        var $102=HEAP[__Py_NoneStruct]; //@line 1815 "_elementtree.c"
        var $103=($102) + 1; //@line 1815 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$103; //@line 1815 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 1815 "_elementtree.c"
        __label__ = 18; break; //@line 1815 "_elementtree.c"
      case 18: // $bb18
        var $104=$0; //@line 1788 "_elementtree.c"
        $retval=$104; //@line 1788 "_elementtree.c"
        var $retval19=$retval; //@line 1788 "_elementtree.c"
        ;
        return $retval19; //@line 1788 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_end($self, $tag) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tag_addr;
        var $retval;
        var $0;
        var $item;
        var $res;
        var $action;
        var $node;
        $self_addr=$self;
        $tag_addr=$tag;
        var $1=$self_addr; //@line 1823 "_elementtree.c"
        var $2=$1+20; //@line 1823 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1823 "_elementtree.c"
        var $4=($3)!=0; //@line 1823 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1823 "_elementtree.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1824 "_elementtree.c"
        var $6=$5+12; //@line 1824 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1824 "_elementtree.c"
        var $8=$self_addr; //@line 1824 "_elementtree.c"
        var $9=$8+16; //@line 1824 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1824 "_elementtree.c"
        var $11=($7)==($10); //@line 1824 "_elementtree.c"
        var $12=$self_addr; //@line 1825 "_elementtree.c"
        var $13=$12+16; //@line 1825 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1825 "_elementtree.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1824 "_elementtree.c"
      case 2: // $bb1
        var $15=$14+12; //@line 1825 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1825 "_elementtree.c"
        var $17=($16); //@line 1825 "_elementtree.c"
        var $18=($17) & -2; //@line 1825 "_elementtree.c"
        var $19=($18); //@line 1825 "_elementtree.c"
        var $20=$19; //@line 1825 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1825 "_elementtree.c"
        var $22=($21) - 1; //@line 1825 "_elementtree.c"
        var $23=$19; //@line 1825 "_elementtree.c"
        HEAP[$23]=$22; //@line 1825 "_elementtree.c"
        var $24=$19; //@line 1825 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1825 "_elementtree.c"
        var $26=($25)==0; //@line 1825 "_elementtree.c"
        if ($26) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1825 "_elementtree.c"
      case 3: // $bb2
        var $27=$self_addr; //@line 1825 "_elementtree.c"
        var $28=$27+16; //@line 1825 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1825 "_elementtree.c"
        var $30=$29+12; //@line 1825 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1825 "_elementtree.c"
        var $32=($31); //@line 1825 "_elementtree.c"
        var $33=($32) & -2; //@line 1825 "_elementtree.c"
        var $34=($33); //@line 1825 "_elementtree.c"
        var $35=$34+4; //@line 1825 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1825 "_elementtree.c"
        var $37=$36+24; //@line 1825 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1825 "_elementtree.c"
        var $39=$self_addr; //@line 1825 "_elementtree.c"
        var $40=$39+16; //@line 1825 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1825 "_elementtree.c"
        var $42=$41+12; //@line 1825 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1825 "_elementtree.c"
        var $44=($43); //@line 1825 "_elementtree.c"
        var $45=($44) & -2; //@line 1825 "_elementtree.c"
        var $46=($45); //@line 1825 "_elementtree.c"
        FUNCTION_TABLE[$38]($46); //@line 1825 "_elementtree.c"
        __label__ = 4; break; //@line 1825 "_elementtree.c"
      case 4: // $bb3
        var $47=$self_addr; //@line 1826 "_elementtree.c"
        var $48=$47+16; //@line 1826 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1826 "_elementtree.c"
        var $50=$self_addr; //@line 1826 "_elementtree.c"
        var $51=$50+20; //@line 1826 "_elementtree.c"
        var $52=HEAP[$51]; //@line 1826 "_elementtree.c"
        var $53=($52); //@line 1826 "_elementtree.c"
        var $54=($53) & -2; //@line 1826 "_elementtree.c"
        var $55=$self_addr; //@line 1826 "_elementtree.c"
        var $56=$55+20; //@line 1826 "_elementtree.c"
        var $57=HEAP[$56]; //@line 1826 "_elementtree.c"
        var $58=$57+4; //@line 1826 "_elementtree.c"
        var $59=HEAP[$58]; //@line 1826 "_elementtree.c"
        var $60=($59)==(_PyList_Type); //@line 1826 "_elementtree.c"
        var $61=($60); //@line 1826 "_elementtree.c"
        var $62=($61) | ($54); //@line 1826 "_elementtree.c"
        var $63=($62); //@line 1826 "_elementtree.c"
        var $64=$49+12; //@line 1826 "_elementtree.c"
        HEAP[$64]=$63; //@line 1826 "_elementtree.c"
        __label__ = 8; break; //@line 1826 "_elementtree.c"
      case 5: // $bb4
        var $65=$14+16; //@line 1830 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1830 "_elementtree.c"
        var $67=($66); //@line 1830 "_elementtree.c"
        var $68=($67) & -2; //@line 1830 "_elementtree.c"
        var $69=($68); //@line 1830 "_elementtree.c"
        var $70=$69; //@line 1830 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1830 "_elementtree.c"
        var $72=($71) - 1; //@line 1830 "_elementtree.c"
        var $73=$69; //@line 1830 "_elementtree.c"
        HEAP[$73]=$72; //@line 1830 "_elementtree.c"
        var $74=$69; //@line 1830 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1830 "_elementtree.c"
        var $76=($75)==0; //@line 1830 "_elementtree.c"
        if ($76) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1830 "_elementtree.c"
      case 6: // $bb5
        var $77=$self_addr; //@line 1830 "_elementtree.c"
        var $78=$77+16; //@line 1830 "_elementtree.c"
        var $79=HEAP[$78]; //@line 1830 "_elementtree.c"
        var $80=$79+16; //@line 1830 "_elementtree.c"
        var $81=HEAP[$80]; //@line 1830 "_elementtree.c"
        var $82=($81); //@line 1830 "_elementtree.c"
        var $83=($82) & -2; //@line 1830 "_elementtree.c"
        var $84=($83); //@line 1830 "_elementtree.c"
        var $85=$84+4; //@line 1830 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1830 "_elementtree.c"
        var $87=$86+24; //@line 1830 "_elementtree.c"
        var $88=HEAP[$87]; //@line 1830 "_elementtree.c"
        var $89=$self_addr; //@line 1830 "_elementtree.c"
        var $90=$89+16; //@line 1830 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1830 "_elementtree.c"
        var $92=$91+16; //@line 1830 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1830 "_elementtree.c"
        var $94=($93); //@line 1830 "_elementtree.c"
        var $95=($94) & -2; //@line 1830 "_elementtree.c"
        var $96=($95); //@line 1830 "_elementtree.c"
        FUNCTION_TABLE[$88]($96); //@line 1830 "_elementtree.c"
        __label__ = 7; break; //@line 1830 "_elementtree.c"
      case 7: // $bb6
        var $97=$self_addr; //@line 1831 "_elementtree.c"
        var $98=$97+16; //@line 1831 "_elementtree.c"
        var $99=HEAP[$98]; //@line 1831 "_elementtree.c"
        var $100=$self_addr; //@line 1831 "_elementtree.c"
        var $101=$100+20; //@line 1831 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1831 "_elementtree.c"
        var $103=($102); //@line 1831 "_elementtree.c"
        var $104=($103) & -2; //@line 1831 "_elementtree.c"
        var $105=$self_addr; //@line 1831 "_elementtree.c"
        var $106=$105+20; //@line 1831 "_elementtree.c"
        var $107=HEAP[$106]; //@line 1831 "_elementtree.c"
        var $108=$107+4; //@line 1831 "_elementtree.c"
        var $109=HEAP[$108]; //@line 1831 "_elementtree.c"
        var $110=($109)==(_PyList_Type); //@line 1831 "_elementtree.c"
        var $111=($110); //@line 1831 "_elementtree.c"
        var $112=($111) | ($104); //@line 1831 "_elementtree.c"
        var $113=($112); //@line 1831 "_elementtree.c"
        var $114=$99+16; //@line 1831 "_elementtree.c"
        HEAP[$114]=$113; //@line 1831 "_elementtree.c"
        __label__ = 8; break; //@line 1831 "_elementtree.c"
      case 8: // $bb7
        var $115=$self_addr; //@line 1835 "_elementtree.c"
        var $116=$115+20; //@line 1835 "_elementtree.c"
        HEAP[$116]=0; //@line 1835 "_elementtree.c"
        __label__ = 9; break; //@line 1835 "_elementtree.c"
      case 9: // $bb8
        var $117=$self_addr; //@line 1838 "_elementtree.c"
        var $118=$117+28; //@line 1838 "_elementtree.c"
        var $119=HEAP[$118]; //@line 1838 "_elementtree.c"
        var $120=($119)==0; //@line 1838 "_elementtree.c"
        if ($120) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1838 "_elementtree.c"
      case 10: // $bb9
        var $121=HEAP[_PyExc_IndexError]; //@line 1839 "_elementtree.c"
        _PyErr_SetString($121, __str67); //@line 1839 "_elementtree.c"
        $0=0; //@line 1843 "_elementtree.c"
        __label__ = 19; break; //@line 1843 "_elementtree.c"
      case 11: // $bb10
        var $122=$self_addr; //@line 1846 "_elementtree.c"
        var $123=$122+28; //@line 1846 "_elementtree.c"
        var $124=HEAP[$123]; //@line 1846 "_elementtree.c"
        var $125=($124) - 1; //@line 1846 "_elementtree.c"
        var $126=$self_addr; //@line 1846 "_elementtree.c"
        var $127=$126+28; //@line 1846 "_elementtree.c"
        HEAP[$127]=$125; //@line 1846 "_elementtree.c"
        var $128=$self_addr; //@line 1848 "_elementtree.c"
        var $129=$128+24; //@line 1848 "_elementtree.c"
        var $130=HEAP[$129]; //@line 1848 "_elementtree.c"
        var $131=$130; //@line 1848 "_elementtree.c"
        var $132=$131+12; //@line 1848 "_elementtree.c"
        var $133=HEAP[$132]; //@line 1848 "_elementtree.c"
        var $134=$self_addr; //@line 1848 "_elementtree.c"
        var $135=$134+28; //@line 1848 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1848 "_elementtree.c"
        var $137=$133+4*$136; //@line 1848 "_elementtree.c"
        var $138=HEAP[$137]; //@line 1848 "_elementtree.c"
        $item=$138; //@line 1848 "_elementtree.c"
        var $139=$item; //@line 1849 "_elementtree.c"
        var $140=$139; //@line 1849 "_elementtree.c"
        var $141=HEAP[$140]; //@line 1849 "_elementtree.c"
        var $142=($141) + 1; //@line 1849 "_elementtree.c"
        var $143=$item; //@line 1849 "_elementtree.c"
        var $144=$143; //@line 1849 "_elementtree.c"
        HEAP[$144]=$142; //@line 1849 "_elementtree.c"
        var $145=$self_addr; //@line 1851 "_elementtree.c"
        var $146=$145+16; //@line 1851 "_elementtree.c"
        var $147=HEAP[$146]; //@line 1851 "_elementtree.c"
        var $148=$147; //@line 1851 "_elementtree.c"
        var $149=$148; //@line 1851 "_elementtree.c"
        var $150=HEAP[$149]; //@line 1851 "_elementtree.c"
        var $151=($150) - 1; //@line 1851 "_elementtree.c"
        var $152=$148; //@line 1851 "_elementtree.c"
        HEAP[$152]=$151; //@line 1851 "_elementtree.c"
        var $153=$148; //@line 1851 "_elementtree.c"
        var $154=HEAP[$153]; //@line 1851 "_elementtree.c"
        var $155=($154)==0; //@line 1851 "_elementtree.c"
        if ($155) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1851 "_elementtree.c"
      case 12: // $bb11
        var $156=$self_addr; //@line 1851 "_elementtree.c"
        var $157=$156+16; //@line 1851 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1851 "_elementtree.c"
        var $159=$158; //@line 1851 "_elementtree.c"
        var $160=$159+4; //@line 1851 "_elementtree.c"
        var $161=HEAP[$160]; //@line 1851 "_elementtree.c"
        var $162=$161+24; //@line 1851 "_elementtree.c"
        var $163=HEAP[$162]; //@line 1851 "_elementtree.c"
        var $164=$self_addr; //@line 1851 "_elementtree.c"
        var $165=$164+16; //@line 1851 "_elementtree.c"
        var $166=HEAP[$165]; //@line 1851 "_elementtree.c"
        var $167=$166; //@line 1851 "_elementtree.c"
        FUNCTION_TABLE[$163]($167); //@line 1851 "_elementtree.c"
        __label__ = 13; break; //@line 1851 "_elementtree.c"
      case 13: // $bb12
        var $168=$self_addr; //@line 1853 "_elementtree.c"
        var $169=$168+12; //@line 1853 "_elementtree.c"
        var $170=HEAP[$169]; //@line 1853 "_elementtree.c"
        var $171=$self_addr; //@line 1853 "_elementtree.c"
        var $172=$171+16; //@line 1853 "_elementtree.c"
        HEAP[$172]=$170; //@line 1853 "_elementtree.c"
        var $173=$item; //@line 1854 "_elementtree.c"
        var $174=$173; //@line 1854 "_elementtree.c"
        var $175=$self_addr; //@line 1854 "_elementtree.c"
        var $176=$175+12; //@line 1854 "_elementtree.c"
        HEAP[$176]=$174; //@line 1854 "_elementtree.c"
        var $177=$self_addr; //@line 1856 "_elementtree.c"
        var $178=$177+40; //@line 1856 "_elementtree.c"
        var $179=HEAP[$178]; //@line 1856 "_elementtree.c"
        var $180=($179)!=0; //@line 1856 "_elementtree.c"
        if ($180) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 1856 "_elementtree.c"
      case 14: // $bb13
        var $181=$self_addr; //@line 1858 "_elementtree.c"
        var $182=$181+40; //@line 1858 "_elementtree.c"
        var $183=HEAP[$182]; //@line 1858 "_elementtree.c"
        $action=$183; //@line 1858 "_elementtree.c"
        var $184=$self_addr; //@line 1859 "_elementtree.c"
        var $185=$184+16; //@line 1859 "_elementtree.c"
        var $186=HEAP[$185]; //@line 1859 "_elementtree.c"
        var $187=$186; //@line 1859 "_elementtree.c"
        $node=$187; //@line 1859 "_elementtree.c"
        var $188=_PyTuple_New(2); //@line 1860 "_elementtree.c"
        $res=$188; //@line 1860 "_elementtree.c"
        var $189=$res; //@line 1861 "_elementtree.c"
        var $190=($189)!=0; //@line 1861 "_elementtree.c"
        if ($190) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1861 "_elementtree.c"
      case 15: // $bb14
        var $191=$action; //@line 1862 "_elementtree.c"
        var $192=$191; //@line 1862 "_elementtree.c"
        var $193=HEAP[$192]; //@line 1862 "_elementtree.c"
        var $194=($193) + 1; //@line 1862 "_elementtree.c"
        var $195=$action; //@line 1862 "_elementtree.c"
        var $196=$195; //@line 1862 "_elementtree.c"
        HEAP[$196]=$194; //@line 1862 "_elementtree.c"
        var $197=$res; //@line 1862 "_elementtree.c"
        var $198=$197; //@line 1862 "_elementtree.c"
        var $199=$198+12; //@line 1862 "_elementtree.c"
        var $200=$199; //@line 1862 "_elementtree.c"
        var $201=$action; //@line 1862 "_elementtree.c"
        HEAP[$200]=$201; //@line 1862 "_elementtree.c"
        var $202=$node; //@line 1863 "_elementtree.c"
        var $203=$202; //@line 1863 "_elementtree.c"
        var $204=HEAP[$203]; //@line 1863 "_elementtree.c"
        var $205=($204) + 1; //@line 1863 "_elementtree.c"
        var $206=$node; //@line 1863 "_elementtree.c"
        var $207=$206; //@line 1863 "_elementtree.c"
        HEAP[$207]=$205; //@line 1863 "_elementtree.c"
        var $208=$res; //@line 1863 "_elementtree.c"
        var $209=$208; //@line 1863 "_elementtree.c"
        var $210=$209+12; //@line 1863 "_elementtree.c"
        var $211=$210+4; //@line 1863 "_elementtree.c"
        var $212=$node; //@line 1863 "_elementtree.c"
        HEAP[$211]=$212; //@line 1863 "_elementtree.c"
        var $213=$self_addr; //@line 1864 "_elementtree.c"
        var $214=$213+32; //@line 1864 "_elementtree.c"
        var $215=HEAP[$214]; //@line 1864 "_elementtree.c"
        var $216=$res; //@line 1864 "_elementtree.c"
        var $217=_PyList_Append($215, $216); //@line 1864 "_elementtree.c"
        var $218=$res; //@line 1865 "_elementtree.c"
        var $219=$218; //@line 1865 "_elementtree.c"
        var $220=HEAP[$219]; //@line 1865 "_elementtree.c"
        var $221=($220) - 1; //@line 1865 "_elementtree.c"
        var $222=$res; //@line 1865 "_elementtree.c"
        var $223=$222; //@line 1865 "_elementtree.c"
        HEAP[$223]=$221; //@line 1865 "_elementtree.c"
        var $224=$res; //@line 1865 "_elementtree.c"
        var $225=$224; //@line 1865 "_elementtree.c"
        var $226=HEAP[$225]; //@line 1865 "_elementtree.c"
        var $227=($226)==0; //@line 1865 "_elementtree.c"
        if ($227) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1865 "_elementtree.c"
      case 16: // $bb15
        var $228=$res; //@line 1865 "_elementtree.c"
        var $229=$228+4; //@line 1865 "_elementtree.c"
        var $230=HEAP[$229]; //@line 1865 "_elementtree.c"
        var $231=$230+24; //@line 1865 "_elementtree.c"
        var $232=HEAP[$231]; //@line 1865 "_elementtree.c"
        var $233=$res; //@line 1865 "_elementtree.c"
        FUNCTION_TABLE[$232]($233); //@line 1865 "_elementtree.c"
        __label__ = 18; break; //@line 1865 "_elementtree.c"
      case 17: // $bb17
        _PyErr_Clear(); //@line 1867 "_elementtree.c"
        __label__ = 18; break; //@line 1867 "_elementtree.c"
      case 18: // $bb18
        var $234=$self_addr; //@line 1870 "_elementtree.c"
        var $235=$234+16; //@line 1870 "_elementtree.c"
        var $236=HEAP[$235]; //@line 1870 "_elementtree.c"
        var $237=$236; //@line 1870 "_elementtree.c"
        var $238=$237; //@line 1870 "_elementtree.c"
        var $239=HEAP[$238]; //@line 1870 "_elementtree.c"
        var $240=($239) + 1; //@line 1870 "_elementtree.c"
        var $241=$237; //@line 1870 "_elementtree.c"
        HEAP[$241]=$240; //@line 1870 "_elementtree.c"
        var $242=$self_addr; //@line 1871 "_elementtree.c"
        var $243=$242+16; //@line 1871 "_elementtree.c"
        var $244=HEAP[$243]; //@line 1871 "_elementtree.c"
        var $245=$244; //@line 1871 "_elementtree.c"
        $0=$245; //@line 1871 "_elementtree.c"
        __label__ = 19; break; //@line 1871 "_elementtree.c"
      case 19: // $bb19
        var $246=$0; //@line 1843 "_elementtree.c"
        $retval=$246; //@line 1843 "_elementtree.c"
        var $retval20=$retval; //@line 1843 "_elementtree.c"
        ;
        return $retval20; //@line 1843 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_namespace($self, $start, $prefix, $uri) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $start_addr;
        var $prefix_addr;
        var $uri_addr;
        var $res;
        var $action;
        var $parcel;
        $self_addr=$self;
        $start_addr=$start;
        $prefix_addr=$prefix;
        $uri_addr=$uri;
        var $0=$self_addr; //@line 1882 "_elementtree.c"
        var $1=$0+32; //@line 1882 "_elementtree.c"
        var $2=HEAP[$1]; //@line 1882 "_elementtree.c"
        var $3=($2)==0; //@line 1882 "_elementtree.c"
        if ($3) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 1882 "_elementtree.c"
      case 1: // $bb
        var $4=$start_addr; //@line 1885 "_elementtree.c"
        var $5=($4)!=0; //@line 1885 "_elementtree.c"
        var $6=$self_addr; //@line 1886 "_elementtree.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1885 "_elementtree.c"
      case 2: // $bb1
        var $7=$6+44; //@line 1886 "_elementtree.c"
        var $8=HEAP[$7]; //@line 1886 "_elementtree.c"
        var $9=($8)==0; //@line 1886 "_elementtree.c"
        if ($9) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 1886 "_elementtree.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1888 "_elementtree.c"
        var $11=$10+44; //@line 1888 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1888 "_elementtree.c"
        $action=$12; //@line 1888 "_elementtree.c"
        var $13=$prefix_addr; //@line 1889 "_elementtree.c"
        var $14=$uri_addr; //@line 1889 "_elementtree.c"
        var $15=_Py_BuildValue(__str68, allocate([$13,0,0,0,$14,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1889 "_elementtree.c"
        $parcel=$15; //@line 1889 "_elementtree.c"
        var $16=$parcel; //@line 1890 "_elementtree.c"
        var $17=($16)==0; //@line 1890 "_elementtree.c"
        if ($17) { __label__ = 11; break; } else { __label__ = 4; break; } //@line 1890 "_elementtree.c"
      case 4: // $bb3
        var $18=$action; //@line 1892 "_elementtree.c"
        var $19=$18; //@line 1892 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1892 "_elementtree.c"
        var $21=($20) + 1; //@line 1892 "_elementtree.c"
        var $22=$action; //@line 1892 "_elementtree.c"
        var $23=$22; //@line 1892 "_elementtree.c"
        HEAP[$23]=$21; //@line 1892 "_elementtree.c"
        __label__ = 7; break; //@line 1892 "_elementtree.c"
      case 5: // $bb4
        var $24=$6+48; //@line 1894 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1894 "_elementtree.c"
        var $26=($25)==0; //@line 1894 "_elementtree.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 1894 "_elementtree.c"
      case 6: // $bb5
        var $27=$self_addr; //@line 1896 "_elementtree.c"
        var $28=$27+48; //@line 1896 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1896 "_elementtree.c"
        $action=$29; //@line 1896 "_elementtree.c"
        var $30=$action; //@line 1897 "_elementtree.c"
        var $31=$30; //@line 1897 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1897 "_elementtree.c"
        var $33=($32) + 1; //@line 1897 "_elementtree.c"
        var $34=$action; //@line 1897 "_elementtree.c"
        var $35=$34; //@line 1897 "_elementtree.c"
        HEAP[$35]=$33; //@line 1897 "_elementtree.c"
        $parcel=__Py_NoneStruct; //@line 1898 "_elementtree.c"
        var $36=$parcel; //@line 1899 "_elementtree.c"
        var $37=$36; //@line 1899 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1899 "_elementtree.c"
        var $39=($38) + 1; //@line 1899 "_elementtree.c"
        var $40=$parcel; //@line 1899 "_elementtree.c"
        var $41=$40; //@line 1899 "_elementtree.c"
        HEAP[$41]=$39; //@line 1899 "_elementtree.c"
        __label__ = 7; break; //@line 1899 "_elementtree.c"
      case 7: // $bb6
        var $42=_PyTuple_New(2); //@line 1902 "_elementtree.c"
        $res=$42; //@line 1902 "_elementtree.c"
        var $43=($42)!=0; //@line 1904 "_elementtree.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1904 "_elementtree.c"
      case 8: // $bb7
        var $44=$res; //@line 1905 "_elementtree.c"
        var $45=$44; //@line 1905 "_elementtree.c"
        var $46=$45+12; //@line 1905 "_elementtree.c"
        var $47=$46; //@line 1905 "_elementtree.c"
        var $48=$action; //@line 1905 "_elementtree.c"
        HEAP[$47]=$48; //@line 1905 "_elementtree.c"
        var $49=$res; //@line 1906 "_elementtree.c"
        var $50=$49; //@line 1906 "_elementtree.c"
        var $51=$50+12; //@line 1906 "_elementtree.c"
        var $52=$51+4; //@line 1906 "_elementtree.c"
        var $53=$parcel; //@line 1906 "_elementtree.c"
        HEAP[$52]=$53; //@line 1906 "_elementtree.c"
        var $54=$self_addr; //@line 1907 "_elementtree.c"
        var $55=$54+32; //@line 1907 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1907 "_elementtree.c"
        var $57=$res; //@line 1907 "_elementtree.c"
        var $58=_PyList_Append($56, $57); //@line 1907 "_elementtree.c"
        var $59=$res; //@line 1908 "_elementtree.c"
        var $60=$59; //@line 1908 "_elementtree.c"
        var $61=HEAP[$60]; //@line 1908 "_elementtree.c"
        var $62=($61) - 1; //@line 1908 "_elementtree.c"
        var $63=$res; //@line 1908 "_elementtree.c"
        var $64=$63; //@line 1908 "_elementtree.c"
        HEAP[$64]=$62; //@line 1908 "_elementtree.c"
        var $65=$res; //@line 1908 "_elementtree.c"
        var $66=$65; //@line 1908 "_elementtree.c"
        var $67=HEAP[$66]; //@line 1908 "_elementtree.c"
        var $68=($67)==0; //@line 1908 "_elementtree.c"
        if ($68) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1908 "_elementtree.c"
      case 9: // $bb8
        var $69=$res; //@line 1908 "_elementtree.c"
        var $70=$69+4; //@line 1908 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1908 "_elementtree.c"
        var $72=$71+24; //@line 1908 "_elementtree.c"
        var $73=HEAP[$72]; //@line 1908 "_elementtree.c"
        var $74=$res; //@line 1908 "_elementtree.c"
        FUNCTION_TABLE[$73]($74); //@line 1908 "_elementtree.c"
        __label__ = 11; break; //@line 1908 "_elementtree.c"
      case 10: // $bb10
        _PyErr_Clear(); //@line 1910 "_elementtree.c"
        __label__ = 11; break; //@line 1910 "_elementtree.c"
      case 11: // $return
        ;
        return; //@line 1883 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_data($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $data=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1920 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str69, allocate([$data,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1920 "_elementtree.c"
        var $3=($2)==0; //@line 1920 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1920 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1921 "_elementtree.c"
        __label__ = 3; break; //@line 1921 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$data]; //@line 1923 "_elementtree.c"
        var $5=$self_addr; //@line 1923 "_elementtree.c"
        var $6=_treebuilder_handle_data($5, $4); //@line 1923 "_elementtree.c"
        $0=$6; //@line 1923 "_elementtree.c"
        __label__ = 3; break; //@line 1923 "_elementtree.c"
      case 3: // $bb2
        var $7=$0; //@line 1921 "_elementtree.c"
        $retval=$7; //@line 1921 "_elementtree.c"
        var $retval3=$retval; //@line 1921 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1921 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_end($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tag=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1930 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str70, allocate([$tag,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1930 "_elementtree.c"
        var $3=($2)==0; //@line 1930 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1930 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1931 "_elementtree.c"
        __label__ = 3; break; //@line 1931 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 1933 "_elementtree.c"
        var $5=$self_addr; //@line 1933 "_elementtree.c"
        var $6=_treebuilder_handle_end($5, $4); //@line 1933 "_elementtree.c"
        $0=$6; //@line 1933 "_elementtree.c"
        __label__ = 3; break; //@line 1933 "_elementtree.c"
      case 3: // $bb2
        var $7=$0; //@line 1931 "_elementtree.c"
        $retval=$7; //@line 1931 "_elementtree.c"
        var $retval3=$retval; //@line 1931 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1931 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_done($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        var $1=$self_addr; //@line 1943 "_elementtree.c"
        var $2=$1+8; //@line 1943 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1943 "_elementtree.c"
        var $4=($3)!=0; //@line 1943 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1943 "_elementtree.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1944 "_elementtree.c"
        var $6=$5+8; //@line 1944 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1944 "_elementtree.c"
        $res=$7; //@line 1944 "_elementtree.c"
        __label__ = 3; break; //@line 1944 "_elementtree.c"
      case 2: // $bb1
        $res=__Py_NoneStruct; //@line 1946 "_elementtree.c"
        __label__ = 3; break; //@line 1946 "_elementtree.c"
      case 3: // $bb2
        var $8=$res; //@line 1948 "_elementtree.c"
        var $9=$8; //@line 1948 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1948 "_elementtree.c"
        var $11=($10) + 1; //@line 1948 "_elementtree.c"
        var $12=$res; //@line 1948 "_elementtree.c"
        var $13=$12; //@line 1948 "_elementtree.c"
        HEAP[$13]=$11; //@line 1948 "_elementtree.c"
        var $14=$res; //@line 1949 "_elementtree.c"
        $0=$14; //@line 1949 "_elementtree.c"
        var $15=$0; //@line 1949 "_elementtree.c"
        $retval=$15; //@line 1949 "_elementtree.c"
        var $retval3=$retval; //@line 1949 "_elementtree.c"
        ;
        return $retval3; //@line 1949 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_close($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1955 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str71, allocate(1, "i32", ALLOC_STACK)); //@line 1955 "_elementtree.c"
        var $3=($2)==0; //@line 1955 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1955 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1956 "_elementtree.c"
        __label__ = 3; break; //@line 1956 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1958 "_elementtree.c"
        var $5=_treebuilder_done($4); //@line 1958 "_elementtree.c"
        $0=$5; //@line 1958 "_elementtree.c"
        __label__ = 3; break; //@line 1958 "_elementtree.c"
      case 3: // $bb2
        var $6=$0; //@line 1956 "_elementtree.c"
        $retval=$6; //@line 1956 "_elementtree.c"
        var $retval3=$retval; //@line 1956 "_elementtree.c"
        ;
        return $retval3; //@line 1956 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_start($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tag=__stackBase__;
        var $attrib=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$attrib]=__Py_NoneStruct; //@line 1965 "_elementtree.c"
        var $1=$args_addr; //@line 1966 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str72, allocate([$tag,0,0,0,$attrib,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1966 "_elementtree.c"
        var $3=($2)==0; //@line 1966 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1966 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1967 "_elementtree.c"
        __label__ = 3; break; //@line 1967 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 1969 "_elementtree.c"
        var $5=HEAP[$tag]; //@line 1969 "_elementtree.c"
        var $6=$self_addr; //@line 1969 "_elementtree.c"
        var $7=_treebuilder_handle_start($6, $5, $4); //@line 1969 "_elementtree.c"
        $0=$7; //@line 1969 "_elementtree.c"
        __label__ = 3; break; //@line 1969 "_elementtree.c"
      case 3: // $bb2
        var $8=$0; //@line 1967 "_elementtree.c"
        $retval=$8; //@line 1967 "_elementtree.c"
        var $retval3=$retval; //@line 1967 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1967 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_xml($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $encoding=__stackBase__;
        var $standalone=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1977 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str73, allocate([$encoding,0,0,0,$standalone,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1977 "_elementtree.c"
        var $3=($2)==0; //@line 1977 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1977 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 1978 "_elementtree.c"
        __label__ = 3; break; //@line 1978 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$standalone]; //@line 1980 "_elementtree.c"
        var $5=HEAP[$encoding]; //@line 1980 "_elementtree.c"
        var $6=$self_addr; //@line 1980 "_elementtree.c"
        var $7=_treebuilder_handle_xml($6, $5, $4); //@line 1980 "_elementtree.c"
        $0=$7; //@line 1980 "_elementtree.c"
        __label__ = 3; break; //@line 1980 "_elementtree.c"
      case 3: // $bb2
        var $8=$0; //@line 1978 "_elementtree.c"
        $retval=$8; //@line 1978 "_elementtree.c"
        var $retval3=$retval; //@line 1978 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1978 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_getattr($self, $name) {
    ;
    var __label__;
  
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $name_addr=$name;
    var $1=$self_addr; //@line 1995 "_elementtree.c"
    var $2=$1; //@line 1995 "_elementtree.c"
    var $3=$name_addr; //@line 1995 "_elementtree.c"
    var $4=_Py_FindMethod(_treebuilder_methods, $2, $3); //@line 1995 "_elementtree.c"
    $0=$4; //@line 1995 "_elementtree.c"
    var $5=$0; //@line 1995 "_elementtree.c"
    $retval=$5; //@line 1995 "_elementtree.c"
    var $retval1=$retval; //@line 1995 "_elementtree.c"
    ;
    return $retval1; //@line 1995 "_elementtree.c"
  }
  

  function _checkstring($string, $size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $string_addr;
        var $size_addr;
        var $retval;
        var $0;
        var $i;
        $string_addr=$string;
        $size_addr=$size;
        $i=0; //@line 2056 "_elementtree.c"
        __label__ = 4; break; //@line 2056 "_elementtree.c"
      case 1: // $bb
        var $1=$string_addr; //@line 2057 "_elementtree.c"
        var $2=$i; //@line 2057 "_elementtree.c"
        var $3=$1+$2; //@line 2057 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2057 "_elementtree.c"
        var $5=($4) < 0; //@line 2057 "_elementtree.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2057 "_elementtree.c"
      case 2: // $bb1
        $0=1; //@line 2058 "_elementtree.c"
        __label__ = 6; break; //@line 2058 "_elementtree.c"
      case 3: // $bb2
        var $6=$i; //@line 2056 "_elementtree.c"
        var $7=($6) + 1; //@line 2056 "_elementtree.c"
        $i=$7; //@line 2056 "_elementtree.c"
        __label__ = 4; break; //@line 2056 "_elementtree.c"
      case 4: // $bb3
        var $8=$i; //@line 2056 "_elementtree.c"
        var $9=$size_addr; //@line 2056 "_elementtree.c"
        var $10=($8) < ($9); //@line 2056 "_elementtree.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 2056 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 2060 "_elementtree.c"
        __label__ = 6; break; //@line 2060 "_elementtree.c"
      case 6: // $bb5
        var $11=$0; //@line 2058 "_elementtree.c"
        $retval=$11; //@line 2058 "_elementtree.c"
        var $retval6=$retval; //@line 2058 "_elementtree.c"
        ;
        return $retval6; //@line 2058 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makestring($string, $size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $string_addr;
        var $size_addr;
        var $retval;
        var $0;
        $string_addr=$string;
        $size_addr=$size;
        var $1=$string_addr; //@line 2071 "_elementtree.c"
        var $2=$size_addr; //@line 2071 "_elementtree.c"
        var $3=_checkstring($1, $2); //@line 2071 "_elementtree.c"
        var $4=($3)!=0; //@line 2071 "_elementtree.c"
        var $5=$string_addr; //@line 2072 "_elementtree.c"
        var $6=$size_addr; //@line 2072 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2071 "_elementtree.c"
      case 1: // $bb
        var $7=_PyUnicodeUCS2_DecodeUTF8($5, $6, __str80); //@line 2072 "_elementtree.c"
        $0=$7; //@line 2072 "_elementtree.c"
        __label__ = 3; break; //@line 2072 "_elementtree.c"
      case 2: // $bb1
        var $8=_PyString_FromStringAndSize($5, $6); //@line 2075 "_elementtree.c"
        $0=$8; //@line 2075 "_elementtree.c"
        __label__ = 3; break; //@line 2075 "_elementtree.c"
      case 3: // $bb2
        var $9=$0; //@line 2072 "_elementtree.c"
        $retval=$9; //@line 2072 "_elementtree.c"
        var $retval3=$retval; //@line 2072 "_elementtree.c"
        ;
        return $retval3; //@line 2072 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makeuniversal($self, $string) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $string_addr;
        var $retval;
        var $0;
        var $size;
        var $key;
        var $value;
        var $tag;
        var $p;
        var $i;
        $self_addr=$self;
        $string_addr=$string;
        var $1=$string_addr; //@line 2084 "_elementtree.c"
        var $2=_strlen($1); //@line 2084 "_elementtree.c"
        $size=$2; //@line 2084 "_elementtree.c"
        var $3=$string_addr; //@line 2089 "_elementtree.c"
        var $4=$size; //@line 2089 "_elementtree.c"
        var $5=_PyString_FromStringAndSize($3, $4); //@line 2089 "_elementtree.c"
        $key=$5; //@line 2089 "_elementtree.c"
        var $6=$key; //@line 2090 "_elementtree.c"
        var $7=($6)==0; //@line 2090 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2090 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2091 "_elementtree.c"
        __label__ = 28; break; //@line 2091 "_elementtree.c"
      case 2: // $bb1
        var $8=$self_addr; //@line 2093 "_elementtree.c"
        var $9=$8+20; //@line 2093 "_elementtree.c"
        var $10=HEAP[$9]; //@line 2093 "_elementtree.c"
        var $11=$key; //@line 2093 "_elementtree.c"
        var $12=_PyDict_GetItem($10, $11); //@line 2093 "_elementtree.c"
        $value=$12; //@line 2093 "_elementtree.c"
        var $13=$value; //@line 2095 "_elementtree.c"
        var $14=($13)!=0; //@line 2095 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2095 "_elementtree.c"
      case 3: // $bb2
        var $15=$value; //@line 2096 "_elementtree.c"
        var $16=$15; //@line 2096 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2096 "_elementtree.c"
        var $18=($17) + 1; //@line 2096 "_elementtree.c"
        var $19=$value; //@line 2096 "_elementtree.c"
        var $20=$19; //@line 2096 "_elementtree.c"
        HEAP[$20]=$18; //@line 2096 "_elementtree.c"
        __label__ = 25; break; //@line 2096 "_elementtree.c"
      case 4: // $bb3
        $i=0; //@line 2106 "_elementtree.c"
        __label__ = 7; break; //@line 2106 "_elementtree.c"
      case 5: // $bb4
        var $21=$string_addr; //@line 2107 "_elementtree.c"
        var $22=$i; //@line 2107 "_elementtree.c"
        var $23=$21+$22; //@line 2107 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2107 "_elementtree.c"
        var $25=($24)==125; //@line 2107 "_elementtree.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2107 "_elementtree.c"
      case 6: // $bb5
        var $26=$i; //@line 2106 "_elementtree.c"
        var $27=($26) + 1; //@line 2106 "_elementtree.c"
        $i=$27; //@line 2106 "_elementtree.c"
        __label__ = 7; break; //@line 2106 "_elementtree.c"
      case 7: // $bb6
        var $28=$i; //@line 2106 "_elementtree.c"
        var $29=$size; //@line 2106 "_elementtree.c"
        var $30=($28) < ($29); //@line 2106 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2106 "_elementtree.c"
      case 8: // $bb7
        var $31=$i; //@line 2109 "_elementtree.c"
        var $32=$size; //@line 2109 "_elementtree.c"
        var $33=($31)!=($32); //@line 2109 "_elementtree.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2109 "_elementtree.c"
      case 9: // $bb8
        var $34=$size; //@line 2111 "_elementtree.c"
        var $35=($34) + 1; //@line 2111 "_elementtree.c"
        var $36=_PyString_FromStringAndSize(0, $35); //@line 2111 "_elementtree.c"
        $tag=$36; //@line 2111 "_elementtree.c"
        var $37=$tag; //@line 2112 "_elementtree.c"
        var $38=$37; //@line 2112 "_elementtree.c"
        var $39=$38+20; //@line 2112 "_elementtree.c"
        var $40=$39; //@line 2112 "_elementtree.c"
        $p=$40; //@line 2112 "_elementtree.c"
        var $41=$p; //@line 2113 "_elementtree.c"
        var $42=$41; //@line 2113 "_elementtree.c"
        HEAP[$42]=123; //@line 2113 "_elementtree.c"
        var $43=$size; //@line 2114 "_elementtree.c"
        var $44=$p; //@line 2114 "_elementtree.c"
        var $45=$44+1; //@line 2114 "_elementtree.c"
        var $46=$string_addr; //@line 2114 "_elementtree.c"
        _llvm_memcpy_p0i8_p0i8_i32($45, $46, $43, 1, 0); //@line 2114 "_elementtree.c"
        var $47=$size; //@line 2115 "_elementtree.c"
        var $48=($47) + 1; //@line 2115 "_elementtree.c"
        $size=$48; //@line 2115 "_elementtree.c"
        __label__ = 11; break; //@line 2115 "_elementtree.c"
      case 10: // $bb9
        var $49=$key; //@line 2118 "_elementtree.c"
        var $50=$49; //@line 2118 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2118 "_elementtree.c"
        var $52=($51) + 1; //@line 2118 "_elementtree.c"
        var $53=$key; //@line 2118 "_elementtree.c"
        var $54=$53; //@line 2118 "_elementtree.c"
        HEAP[$54]=$52; //@line 2118 "_elementtree.c"
        var $55=$key; //@line 2119 "_elementtree.c"
        $tag=$55; //@line 2119 "_elementtree.c"
        __label__ = 11; break; //@line 2119 "_elementtree.c"
      case 11: // $bb10
        var $56=$tag; //@line 2126 "_elementtree.c"
        var $57=$56; //@line 2126 "_elementtree.c"
        var $58=$57+20; //@line 2126 "_elementtree.c"
        var $59=$58; //@line 2126 "_elementtree.c"
        $p=$59; //@line 2126 "_elementtree.c"
        var $60=$p; //@line 2127 "_elementtree.c"
        var $61=$size; //@line 2127 "_elementtree.c"
        var $62=_checkstring($60, $61); //@line 2127 "_elementtree.c"
        var $63=($62)!=0; //@line 2127 "_elementtree.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 2127 "_elementtree.c"
      case 12: // $bb11
        var $64=$p; //@line 2128 "_elementtree.c"
        var $65=$size; //@line 2128 "_elementtree.c"
        var $66=_PyUnicodeUCS2_DecodeUTF8($64, $65, __str80); //@line 2128 "_elementtree.c"
        $value=$66; //@line 2128 "_elementtree.c"
        var $67=$tag; //@line 2129 "_elementtree.c"
        var $68=$67; //@line 2129 "_elementtree.c"
        var $69=HEAP[$68]; //@line 2129 "_elementtree.c"
        var $70=($69) - 1; //@line 2129 "_elementtree.c"
        var $71=$tag; //@line 2129 "_elementtree.c"
        var $72=$71; //@line 2129 "_elementtree.c"
        HEAP[$72]=$70; //@line 2129 "_elementtree.c"
        var $73=$tag; //@line 2129 "_elementtree.c"
        var $74=$73; //@line 2129 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2129 "_elementtree.c"
        var $76=($75)==0; //@line 2129 "_elementtree.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2129 "_elementtree.c"
      case 13: // $bb12
        var $77=$tag; //@line 2129 "_elementtree.c"
        var $78=$77+4; //@line 2129 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2129 "_elementtree.c"
        var $80=$79+24; //@line 2129 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2129 "_elementtree.c"
        var $82=$tag; //@line 2129 "_elementtree.c"
        FUNCTION_TABLE[$81]($82); //@line 2129 "_elementtree.c"
        __label__ = 14; break; //@line 2129 "_elementtree.c"
      case 14: // $bb13
        var $83=$value; //@line 2130 "_elementtree.c"
        var $84=($83)==0; //@line 2130 "_elementtree.c"
        if ($84) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 2130 "_elementtree.c"
      case 15: // $bb14
        var $85=$key; //@line 2131 "_elementtree.c"
        var $86=$85; //@line 2131 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2131 "_elementtree.c"
        var $88=($87) - 1; //@line 2131 "_elementtree.c"
        var $89=$key; //@line 2131 "_elementtree.c"
        var $90=$89; //@line 2131 "_elementtree.c"
        HEAP[$90]=$88; //@line 2131 "_elementtree.c"
        var $91=$key; //@line 2131 "_elementtree.c"
        var $92=$91; //@line 2131 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2131 "_elementtree.c"
        var $94=($93)==0; //@line 2131 "_elementtree.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2131 "_elementtree.c"
      case 16: // $bb15
        var $95=$key; //@line 2131 "_elementtree.c"
        var $96=$95+4; //@line 2131 "_elementtree.c"
        var $97=HEAP[$96]; //@line 2131 "_elementtree.c"
        var $98=$97+24; //@line 2131 "_elementtree.c"
        var $99=HEAP[$98]; //@line 2131 "_elementtree.c"
        var $100=$key; //@line 2131 "_elementtree.c"
        FUNCTION_TABLE[$99]($100); //@line 2131 "_elementtree.c"
        __label__ = 17; break; //@line 2131 "_elementtree.c"
      case 17: // $bb16
        $0=0; //@line 2132 "_elementtree.c"
        __label__ = 28; break; //@line 2132 "_elementtree.c"
      case 18: // $bb18
        var $101=$tag; //@line 2136 "_elementtree.c"
        $value=$101; //@line 2136 "_elementtree.c"
        __label__ = 19; break; //@line 2136 "_elementtree.c"
      case 19: // $bb19
        var $102=$self_addr; //@line 2139 "_elementtree.c"
        var $103=$102+20; //@line 2139 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2139 "_elementtree.c"
        var $105=$key; //@line 2139 "_elementtree.c"
        var $106=$value; //@line 2139 "_elementtree.c"
        var $107=_PyDict_SetItem($104, $105, $106); //@line 2139 "_elementtree.c"
        var $108=($107) < 0; //@line 2139 "_elementtree.c"
        if ($108) { __label__ = 20; break; } else { __label__ = 25; break; } //@line 2139 "_elementtree.c"
      case 20: // $bb20
        var $109=$key; //@line 2140 "_elementtree.c"
        var $110=$109; //@line 2140 "_elementtree.c"
        var $111=HEAP[$110]; //@line 2140 "_elementtree.c"
        var $112=($111) - 1; //@line 2140 "_elementtree.c"
        var $113=$key; //@line 2140 "_elementtree.c"
        var $114=$113; //@line 2140 "_elementtree.c"
        HEAP[$114]=$112; //@line 2140 "_elementtree.c"
        var $115=$key; //@line 2140 "_elementtree.c"
        var $116=$115; //@line 2140 "_elementtree.c"
        var $117=HEAP[$116]; //@line 2140 "_elementtree.c"
        var $118=($117)==0; //@line 2140 "_elementtree.c"
        if ($118) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2140 "_elementtree.c"
      case 21: // $bb21
        var $119=$key; //@line 2140 "_elementtree.c"
        var $120=$119+4; //@line 2140 "_elementtree.c"
        var $121=HEAP[$120]; //@line 2140 "_elementtree.c"
        var $122=$121+24; //@line 2140 "_elementtree.c"
        var $123=HEAP[$122]; //@line 2140 "_elementtree.c"
        var $124=$key; //@line 2140 "_elementtree.c"
        FUNCTION_TABLE[$123]($124); //@line 2140 "_elementtree.c"
        __label__ = 22; break; //@line 2140 "_elementtree.c"
      case 22: // $bb22
        var $125=$value; //@line 2141 "_elementtree.c"
        var $126=$125; //@line 2141 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2141 "_elementtree.c"
        var $128=($127) - 1; //@line 2141 "_elementtree.c"
        var $129=$value; //@line 2141 "_elementtree.c"
        var $130=$129; //@line 2141 "_elementtree.c"
        HEAP[$130]=$128; //@line 2141 "_elementtree.c"
        var $131=$value; //@line 2141 "_elementtree.c"
        var $132=$131; //@line 2141 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2141 "_elementtree.c"
        var $134=($133)==0; //@line 2141 "_elementtree.c"
        if ($134) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2141 "_elementtree.c"
      case 23: // $bb23
        var $135=$value; //@line 2141 "_elementtree.c"
        var $136=$135+4; //@line 2141 "_elementtree.c"
        var $137=HEAP[$136]; //@line 2141 "_elementtree.c"
        var $138=$137+24; //@line 2141 "_elementtree.c"
        var $139=HEAP[$138]; //@line 2141 "_elementtree.c"
        var $140=$value; //@line 2141 "_elementtree.c"
        FUNCTION_TABLE[$139]($140); //@line 2141 "_elementtree.c"
        __label__ = 24; break; //@line 2141 "_elementtree.c"
      case 24: // $bb24
        $0=0; //@line 2142 "_elementtree.c"
        __label__ = 28; break; //@line 2142 "_elementtree.c"
      case 25: // $bb25
        var $141=$key; //@line 2146 "_elementtree.c"
        var $142=$141; //@line 2146 "_elementtree.c"
        var $143=HEAP[$142]; //@line 2146 "_elementtree.c"
        var $144=($143) - 1; //@line 2146 "_elementtree.c"
        var $145=$key; //@line 2146 "_elementtree.c"
        var $146=$145; //@line 2146 "_elementtree.c"
        HEAP[$146]=$144; //@line 2146 "_elementtree.c"
        var $147=$key; //@line 2146 "_elementtree.c"
        var $148=$147; //@line 2146 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2146 "_elementtree.c"
        var $150=($149)==0; //@line 2146 "_elementtree.c"
        if ($150) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2146 "_elementtree.c"
      case 26: // $bb26
        var $151=$key; //@line 2146 "_elementtree.c"
        var $152=$151+4; //@line 2146 "_elementtree.c"
        var $153=HEAP[$152]; //@line 2146 "_elementtree.c"
        var $154=$153+24; //@line 2146 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2146 "_elementtree.c"
        var $156=$key; //@line 2146 "_elementtree.c"
        FUNCTION_TABLE[$155]($156); //@line 2146 "_elementtree.c"
        __label__ = 27; break; //@line 2146 "_elementtree.c"
      case 27: // $bb27
        var $157=$value; //@line 2147 "_elementtree.c"
        $0=$157; //@line 2147 "_elementtree.c"
        __label__ = 28; break; //@line 2147 "_elementtree.c"
      case 28: // $bb28
        var $158=$0; //@line 2091 "_elementtree.c"
        $retval=$158; //@line 2091 "_elementtree.c"
        var $retval29=$retval; //@line 2091 "_elementtree.c"
        ;
        return $retval29; //@line 2091 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_set_error($message, $line, $column) {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr;
        var $line_addr;
        var $column_addr;
        var $error;
        var $position;
        var $buffer=__stackBase__;
        $message_addr=$message;
        $line_addr=$line;
        $column_addr=$column;
        var $buffer1=$buffer; //@line 2157 "_elementtree.c"
        var $0=$message_addr; //@line 2157 "_elementtree.c"
        var $1=$line_addr; //@line 2157 "_elementtree.c"
        var $2=$column_addr; //@line 2157 "_elementtree.c"
        var $3=_sprintf($buffer1, __str81, allocate([$0,0,0,0,$1,0,0,0,$2,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2157 "_elementtree.c"
        var $4=HEAP[_elementtree_parseerror_obj]; //@line 2159 "_elementtree.c"
        var $buffer2=$buffer; //@line 2159 "_elementtree.c"
        var $5=_PyObject_CallFunction($4, __str82, allocate([$buffer2,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2159 "_elementtree.c"
        $error=$5; //@line 2159 "_elementtree.c"
        var $6=$error; //@line 2160 "_elementtree.c"
        var $7=($6)==0; //@line 2160 "_elementtree.c"
        if ($7) { __label__ = 13; break; } else { __label__ = 1; break; } //@line 2160 "_elementtree.c"
      case 1: // $bb
        var $8=$line_addr; //@line 2164 "_elementtree.c"
        var $9=$column_addr; //@line 2164 "_elementtree.c"
        var $10=_Py_BuildValue(__str83, allocate([$8,0,0,0,$9,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2164 "_elementtree.c"
        $position=$10; //@line 2164 "_elementtree.c"
        var $11=$position; //@line 2165 "_elementtree.c"
        var $12=($11)==0; //@line 2165 "_elementtree.c"
        var $13=$error; //@line 2166 "_elementtree.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 2165 "_elementtree.c"
      case 2: // $bb3
        var $14=$13; //@line 2166 "_elementtree.c"
        var $15=HEAP[$14]; //@line 2166 "_elementtree.c"
        var $16=($15) - 1; //@line 2166 "_elementtree.c"
        var $17=$error; //@line 2166 "_elementtree.c"
        var $18=$17; //@line 2166 "_elementtree.c"
        HEAP[$18]=$16; //@line 2166 "_elementtree.c"
        var $19=$error; //@line 2166 "_elementtree.c"
        var $20=$19; //@line 2166 "_elementtree.c"
        var $21=HEAP[$20]; //@line 2166 "_elementtree.c"
        var $22=($21)==0; //@line 2166 "_elementtree.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 2166 "_elementtree.c"
      case 3: // $bb4
        var $23=$error; //@line 2166 "_elementtree.c"
        var $24=$23+4; //@line 2166 "_elementtree.c"
        var $25=HEAP[$24]; //@line 2166 "_elementtree.c"
        var $26=$25+24; //@line 2166 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2166 "_elementtree.c"
        var $28=$error; //@line 2166 "_elementtree.c"
        FUNCTION_TABLE[$27]($28); //@line 2166 "_elementtree.c"
        __label__ = 13; break; //@line 2166 "_elementtree.c"
      case 4: // $bb6
        var $29=$position; //@line 2169 "_elementtree.c"
        var $30=_PyObject_SetAttrString($13, __str84, $29); //@line 2169 "_elementtree.c"
        var $31=($30)==-1; //@line 2169 "_elementtree.c"
        if ($31) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 2169 "_elementtree.c"
      case 5: // $bb7
        var $32=$error; //@line 2170 "_elementtree.c"
        var $33=$32; //@line 2170 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2170 "_elementtree.c"
        var $35=($34) - 1; //@line 2170 "_elementtree.c"
        var $36=$error; //@line 2170 "_elementtree.c"
        var $37=$36; //@line 2170 "_elementtree.c"
        HEAP[$37]=$35; //@line 2170 "_elementtree.c"
        var $38=$error; //@line 2170 "_elementtree.c"
        var $39=$38; //@line 2170 "_elementtree.c"
        var $40=HEAP[$39]; //@line 2170 "_elementtree.c"
        var $41=($40)==0; //@line 2170 "_elementtree.c"
        if ($41) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2170 "_elementtree.c"
      case 6: // $bb8
        var $42=$error; //@line 2170 "_elementtree.c"
        var $43=$42+4; //@line 2170 "_elementtree.c"
        var $44=HEAP[$43]; //@line 2170 "_elementtree.c"
        var $45=$44+24; //@line 2170 "_elementtree.c"
        var $46=HEAP[$45]; //@line 2170 "_elementtree.c"
        var $47=$error; //@line 2170 "_elementtree.c"
        FUNCTION_TABLE[$46]($47); //@line 2170 "_elementtree.c"
        __label__ = 7; break; //@line 2170 "_elementtree.c"
      case 7: // $bb9
        var $48=$position; //@line 2171 "_elementtree.c"
        var $49=$48; //@line 2171 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2171 "_elementtree.c"
        var $51=($50) - 1; //@line 2171 "_elementtree.c"
        var $52=$position; //@line 2171 "_elementtree.c"
        var $53=$52; //@line 2171 "_elementtree.c"
        HEAP[$53]=$51; //@line 2171 "_elementtree.c"
        var $54=$position; //@line 2171 "_elementtree.c"
        var $55=$54; //@line 2171 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2171 "_elementtree.c"
        var $57=($56)==0; //@line 2171 "_elementtree.c"
        if ($57) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2171 "_elementtree.c"
      case 8: // $bb10
        var $58=$position; //@line 2171 "_elementtree.c"
        var $59=$58+4; //@line 2171 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2171 "_elementtree.c"
        var $61=$60+24; //@line 2171 "_elementtree.c"
        var $62=HEAP[$61]; //@line 2171 "_elementtree.c"
        var $63=$position; //@line 2171 "_elementtree.c"
        FUNCTION_TABLE[$62]($63); //@line 2171 "_elementtree.c"
        __label__ = 13; break; //@line 2171 "_elementtree.c"
      case 9: // $bb12
        var $64=$position; //@line 2174 "_elementtree.c"
        var $65=$64; //@line 2174 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2174 "_elementtree.c"
        var $67=($66) - 1; //@line 2174 "_elementtree.c"
        var $68=$position; //@line 2174 "_elementtree.c"
        var $69=$68; //@line 2174 "_elementtree.c"
        HEAP[$69]=$67; //@line 2174 "_elementtree.c"
        var $70=$position; //@line 2174 "_elementtree.c"
        var $71=$70; //@line 2174 "_elementtree.c"
        var $72=HEAP[$71]; //@line 2174 "_elementtree.c"
        var $73=($72)==0; //@line 2174 "_elementtree.c"
        if ($73) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2174 "_elementtree.c"
      case 10: // $bb13
        var $74=$position; //@line 2174 "_elementtree.c"
        var $75=$74+4; //@line 2174 "_elementtree.c"
        var $76=HEAP[$75]; //@line 2174 "_elementtree.c"
        var $77=$76+24; //@line 2174 "_elementtree.c"
        var $78=HEAP[$77]; //@line 2174 "_elementtree.c"
        var $79=$position; //@line 2174 "_elementtree.c"
        FUNCTION_TABLE[$78]($79); //@line 2174 "_elementtree.c"
        __label__ = 11; break; //@line 2174 "_elementtree.c"
      case 11: // $bb14
        var $80=HEAP[_elementtree_parseerror_obj]; //@line 2176 "_elementtree.c"
        var $81=$error; //@line 2176 "_elementtree.c"
        _PyErr_SetObject($80, $81); //@line 2176 "_elementtree.c"
        var $82=$error; //@line 2177 "_elementtree.c"
        var $83=$82; //@line 2177 "_elementtree.c"
        var $84=HEAP[$83]; //@line 2177 "_elementtree.c"
        var $85=($84) - 1; //@line 2177 "_elementtree.c"
        var $86=$error; //@line 2177 "_elementtree.c"
        var $87=$86; //@line 2177 "_elementtree.c"
        HEAP[$87]=$85; //@line 2177 "_elementtree.c"
        var $88=$error; //@line 2177 "_elementtree.c"
        var $89=$88; //@line 2177 "_elementtree.c"
        var $90=HEAP[$89]; //@line 2177 "_elementtree.c"
        var $91=($90)==0; //@line 2177 "_elementtree.c"
        if ($91) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2177 "_elementtree.c"
      case 12: // $bb15
        var $92=$error; //@line 2177 "_elementtree.c"
        var $93=$92+4; //@line 2177 "_elementtree.c"
        var $94=HEAP[$93]; //@line 2177 "_elementtree.c"
        var $95=$94+24; //@line 2177 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2177 "_elementtree.c"
        var $97=$error; //@line 2177 "_elementtree.c"
        FUNCTION_TABLE[$96]($97); //@line 2177 "_elementtree.c"
        __label__ = 13; break; //@line 2177 "_elementtree.c"
      case 13: // $return
        STACKTOP = __stackBase__;
        return; //@line 2161 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_default_handler($self, $data_in, $data_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 128; _memset(__stackBase__, 0, 128);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $data_in_addr;
        var $data_len_addr;
        var $key;
        var $value;
        var $res;
        var $message=__stackBase__;
        $self_addr=$self;
        $data_in_addr=$data_in;
        $data_len_addr=$data_len;
        var $0=$data_len_addr; //@line 2191 "_elementtree.c"
        var $1=($0) <= 1; //@line 2191 "_elementtree.c"
        if ($1) { __label__ = 16; break; } else { __label__ = 1; break; } //@line 2191 "_elementtree.c"
      case 1: // $bb
        var $2=$data_in_addr; //@line 2191 "_elementtree.c"
        var $3=$2; //@line 2191 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2191 "_elementtree.c"
        var $5=($4)!=38; //@line 2191 "_elementtree.c"
        if ($5) { __label__ = 16; break; } else { __label__ = 2; break; } //@line 2191 "_elementtree.c"
      case 2: // $bb2
        var $6=$data_len_addr; //@line 2194 "_elementtree.c"
        var $7=($6) - 2; //@line 2194 "_elementtree.c"
        var $8=$data_in_addr; //@line 2194 "_elementtree.c"
        var $9=$8+1; //@line 2194 "_elementtree.c"
        var $10=_makestring($9, $7); //@line 2194 "_elementtree.c"
        $key=$10; //@line 2194 "_elementtree.c"
        var $11=$key; //@line 2195 "_elementtree.c"
        var $12=($11)==0; //@line 2195 "_elementtree.c"
        if ($12) { __label__ = 16; break; } else { __label__ = 3; break; } //@line 2195 "_elementtree.c"
      case 3: // $bb3
        var $13=$self_addr; //@line 2198 "_elementtree.c"
        var $14=$13+16; //@line 2198 "_elementtree.c"
        var $15=HEAP[$14]; //@line 2198 "_elementtree.c"
        var $16=$key; //@line 2198 "_elementtree.c"
        var $17=_PyDict_GetItem($15, $16); //@line 2198 "_elementtree.c"
        $value=$17; //@line 2198 "_elementtree.c"
        var $18=$value; //@line 2200 "_elementtree.c"
        var $19=($18)!=0; //@line 2200 "_elementtree.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 2200 "_elementtree.c"
      case 4: // $bb4
        var $20=$self_addr; //@line 2201 "_elementtree.c"
        var $21=$20+12; //@line 2201 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2201 "_elementtree.c"
        var $23=$22+4; //@line 2201 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2201 "_elementtree.c"
        var $25=($24)==(_TreeBuilder_Type); //@line 2201 "_elementtree.c"
        var $26=$self_addr; //@line 2202 "_elementtree.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2201 "_elementtree.c"
      case 5: // $bb5
        var $27=$26+12; //@line 2202 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2202 "_elementtree.c"
        var $29=$28; //@line 2202 "_elementtree.c"
        var $30=$value; //@line 2202 "_elementtree.c"
        var $31=_treebuilder_handle_data($29, $30); //@line 2202 "_elementtree.c"
        $res=$31; //@line 2202 "_elementtree.c"
        __lastLabel__ = 5; __label__ = 9; break; //@line 2202 "_elementtree.c"
      case 6: // $bb6
        var $32=$26+32; //@line 2205 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2205 "_elementtree.c"
        var $34=($33)!=0; //@line 2205 "_elementtree.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2205 "_elementtree.c"
      case 7: // $bb7
        var $35=$self_addr; //@line 2206 "_elementtree.c"
        var $36=$35+32; //@line 2206 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2206 "_elementtree.c"
        var $38=$value; //@line 2206 "_elementtree.c"
        var $39=_PyObject_CallFunction($37, __str85, allocate([$38,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2206 "_elementtree.c"
        $res=$39; //@line 2206 "_elementtree.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 2206 "_elementtree.c"
      case 8: // $bb9_thread
        $res=0; //@line 2208 "_elementtree.c"
        __label__ = 14; break;
      case 9: // $bb9
        var $40=__lastLabel__ == 7 ? $39 : ($31);
        var $41=($40)!=0; //@line 2209 "_elementtree.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 2209 "_elementtree.c"
      case 10: // $bb10
        var $42=$res; //@line 2209 "_elementtree.c"
        var $43=$42; //@line 2209 "_elementtree.c"
        var $44=HEAP[$43]; //@line 2209 "_elementtree.c"
        var $45=($44) - 1; //@line 2209 "_elementtree.c"
        var $46=$res; //@line 2209 "_elementtree.c"
        var $47=$46; //@line 2209 "_elementtree.c"
        HEAP[$47]=$45; //@line 2209 "_elementtree.c"
        var $48=$res; //@line 2209 "_elementtree.c"
        var $49=$48; //@line 2209 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2209 "_elementtree.c"
        var $51=($50)==0; //@line 2209 "_elementtree.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 2209 "_elementtree.c"
      case 11: // $bb11
        var $52=$res; //@line 2209 "_elementtree.c"
        var $53=$52+4; //@line 2209 "_elementtree.c"
        var $54=HEAP[$53]; //@line 2209 "_elementtree.c"
        var $55=$54+24; //@line 2209 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2209 "_elementtree.c"
        var $57=$res; //@line 2209 "_elementtree.c"
        FUNCTION_TABLE[$56]($57); //@line 2209 "_elementtree.c"
        __label__ = 14; break; //@line 2209 "_elementtree.c"
      case 12: // $bb13
        var $58=_PyErr_Occurred(); //@line 2210 "_elementtree.c"
        var $59=($58)==0; //@line 2210 "_elementtree.c"
        if ($59) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2210 "_elementtree.c"
      case 13: // $bb14
        var $60=$key; //@line 2213 "_elementtree.c"
        var $61=$60; //@line 2213 "_elementtree.c"
        var $62=$61+20; //@line 2213 "_elementtree.c"
        var $63=$62; //@line 2213 "_elementtree.c"
        var $message15=$message; //@line 2213 "_elementtree.c"
        var $64=_sprintf($message15, __str86, allocate([$63,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2213 "_elementtree.c"
        var $65=HEAP[_expat_capi]; //@line 2214 "_elementtree.c"
        var $66=$65+28; //@line 2214 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2214 "_elementtree.c"
        var $68=$self_addr; //@line 2214 "_elementtree.c"
        var $69=$68+8; //@line 2214 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2214 "_elementtree.c"
        var $71=FUNCTION_TABLE[$67]($70); //@line 2214 "_elementtree.c"
        var $72=HEAP[_expat_capi]; //@line 2214 "_elementtree.c"
        var $73=$72+32; //@line 2214 "_elementtree.c"
        var $74=HEAP[$73]; //@line 2214 "_elementtree.c"
        var $75=$self_addr; //@line 2214 "_elementtree.c"
        var $76=$75+8; //@line 2214 "_elementtree.c"
        var $77=HEAP[$76]; //@line 2214 "_elementtree.c"
        var $78=FUNCTION_TABLE[$74]($77); //@line 2214 "_elementtree.c"
        var $message16=$message; //@line 2214 "_elementtree.c"
        _expat_set_error($message16, $78, $71); //@line 2214 "_elementtree.c"
        __label__ = 14; break; //@line 2214 "_elementtree.c"
      case 14: // $bb17
        var $79=$key; //@line 2221 "_elementtree.c"
        var $80=$79; //@line 2221 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2221 "_elementtree.c"
        var $82=($81) - 1; //@line 2221 "_elementtree.c"
        var $83=$key; //@line 2221 "_elementtree.c"
        var $84=$83; //@line 2221 "_elementtree.c"
        HEAP[$84]=$82; //@line 2221 "_elementtree.c"
        var $85=$key; //@line 2221 "_elementtree.c"
        var $86=$85; //@line 2221 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2221 "_elementtree.c"
        var $88=($87)==0; //@line 2221 "_elementtree.c"
        if ($88) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2221 "_elementtree.c"
      case 15: // $bb18
        var $89=$key; //@line 2221 "_elementtree.c"
        var $90=$89+4; //@line 2221 "_elementtree.c"
        var $91=HEAP[$90]; //@line 2221 "_elementtree.c"
        var $92=$91+24; //@line 2221 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2221 "_elementtree.c"
        var $94=$key; //@line 2221 "_elementtree.c"
        FUNCTION_TABLE[$93]($94); //@line 2221 "_elementtree.c"
        __label__ = 16; break; //@line 2221 "_elementtree.c"
      case 16: // $return
        STACKTOP = __stackBase__;
        return; //@line 2192 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_start_handler($self, $tag_in, $attrib_in) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tag_in_addr;
        var $attrib_in_addr;
        var $res;
        var $tag;
        var $attrib;
        var $ok;
        var $key;
        var $value;
        $self_addr=$self;
        $tag_in_addr=$tag_in;
        $attrib_in_addr=$attrib_in;
        var $0=$self_addr; //@line 2234 "_elementtree.c"
        var $1=$tag_in_addr; //@line 2234 "_elementtree.c"
        var $2=_makeuniversal($0, $1); //@line 2234 "_elementtree.c"
        $tag=$2; //@line 2234 "_elementtree.c"
        var $3=$tag; //@line 2235 "_elementtree.c"
        var $4=($3)==0; //@line 2235 "_elementtree.c"
        if ($4) { __label__ = 40; break; } else { __label__ = 1; break; } //@line 2235 "_elementtree.c"
      case 1: // $bb
        var $5=$attrib_in_addr; //@line 2239 "_elementtree.c"
        var $6=$5; //@line 2239 "_elementtree.c"
        var $7=HEAP[$6]; //@line 2239 "_elementtree.c"
        var $8=($7)!=0; //@line 2239 "_elementtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 23; break; } //@line 2239 "_elementtree.c"
      case 2: // $bb1
        var $9=_PyDict_New(); //@line 2240 "_elementtree.c"
        $attrib=$9; //@line 2240 "_elementtree.c"
        var $10=$attrib; //@line 2241 "_elementtree.c"
        var $11=($10)==0; //@line 2241 "_elementtree.c"
        if ($11) { __label__ = 40; break; } else { __label__ = 21; break; } //@line 2241 "_elementtree.c"
      case 3: // $bb3
        var $12=$attrib_in_addr; //@line 2244 "_elementtree.c"
        var $13=$12; //@line 2244 "_elementtree.c"
        var $14=HEAP[$13]; //@line 2244 "_elementtree.c"
        var $15=$self_addr; //@line 2244 "_elementtree.c"
        var $16=_makeuniversal($15, $14); //@line 2244 "_elementtree.c"
        $key=$16; //@line 2244 "_elementtree.c"
        var $17=$attrib_in_addr; //@line 2245 "_elementtree.c"
        var $18=$17+4; //@line 2245 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2245 "_elementtree.c"
        var $20=_strlen($19); //@line 2245 "_elementtree.c"
        var $21=$attrib_in_addr; //@line 2245 "_elementtree.c"
        var $22=$21+4; //@line 2245 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2245 "_elementtree.c"
        var $24=_makestring($23, $20); //@line 2245 "_elementtree.c"
        $value=$24; //@line 2245 "_elementtree.c"
        var $25=$key; //@line 2246 "_elementtree.c"
        var $26=($25)==0; //@line 2246 "_elementtree.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2246 "_elementtree.c"
      case 4: // $bb4
        var $27=$value; //@line 2246 "_elementtree.c"
        var $28=($27)==0; //@line 2246 "_elementtree.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2246 "_elementtree.c"
      case 5: // $bb5
        var $29=($24)!=0; //@line 2247 "_elementtree.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 2247 "_elementtree.c"
      case 6: // $bb6
        var $30=$value; //@line 2247 "_elementtree.c"
        var $31=$30; //@line 2247 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2247 "_elementtree.c"
        var $33=($32) - 1; //@line 2247 "_elementtree.c"
        var $34=$value; //@line 2247 "_elementtree.c"
        var $35=$34; //@line 2247 "_elementtree.c"
        HEAP[$35]=$33; //@line 2247 "_elementtree.c"
        var $36=$value; //@line 2247 "_elementtree.c"
        var $37=$36; //@line 2247 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2247 "_elementtree.c"
        var $39=($38)==0; //@line 2247 "_elementtree.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2247 "_elementtree.c"
      case 7: // $bb7
        var $40=$value; //@line 2247 "_elementtree.c"
        var $41=$40+4; //@line 2247 "_elementtree.c"
        var $42=HEAP[$41]; //@line 2247 "_elementtree.c"
        var $43=$42+24; //@line 2247 "_elementtree.c"
        var $44=HEAP[$43]; //@line 2247 "_elementtree.c"
        var $45=$value; //@line 2247 "_elementtree.c"
        FUNCTION_TABLE[$44]($45); //@line 2247 "_elementtree.c"
        __label__ = 8; break; //@line 2247 "_elementtree.c"
      case 8: // $bb8
        var $46=$key; //@line 2248 "_elementtree.c"
        var $47=($46)!=0; //@line 2248 "_elementtree.c"
        if ($47) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 2248 "_elementtree.c"
      case 9: // $bb9
        var $48=$key; //@line 2248 "_elementtree.c"
        var $49=$48; //@line 2248 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2248 "_elementtree.c"
        var $51=($50) - 1; //@line 2248 "_elementtree.c"
        var $52=$key; //@line 2248 "_elementtree.c"
        var $53=$52; //@line 2248 "_elementtree.c"
        HEAP[$53]=$51; //@line 2248 "_elementtree.c"
        var $54=$key; //@line 2248 "_elementtree.c"
        var $55=$54; //@line 2248 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2248 "_elementtree.c"
        var $57=($56)==0; //@line 2248 "_elementtree.c"
        if ($57) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2248 "_elementtree.c"
      case 10: // $bb10
        var $58=$key; //@line 2248 "_elementtree.c"
        var $59=$58+4; //@line 2248 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2248 "_elementtree.c"
        var $61=$60+24; //@line 2248 "_elementtree.c"
        var $62=HEAP[$61]; //@line 2248 "_elementtree.c"
        var $63=$key; //@line 2248 "_elementtree.c"
        FUNCTION_TABLE[$62]($63); //@line 2248 "_elementtree.c"
        __label__ = 11; break; //@line 2248 "_elementtree.c"
      case 11: // $bb11
        var $64=$attrib; //@line 2249 "_elementtree.c"
        var $65=$64; //@line 2249 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2249 "_elementtree.c"
        var $67=($66) - 1; //@line 2249 "_elementtree.c"
        var $68=$attrib; //@line 2249 "_elementtree.c"
        var $69=$68; //@line 2249 "_elementtree.c"
        HEAP[$69]=$67; //@line 2249 "_elementtree.c"
        var $70=$attrib; //@line 2249 "_elementtree.c"
        var $71=$70; //@line 2249 "_elementtree.c"
        var $72=HEAP[$71]; //@line 2249 "_elementtree.c"
        var $73=($72)==0; //@line 2249 "_elementtree.c"
        if ($73) { __label__ = 12; break; } else { __label__ = 40; break; } //@line 2249 "_elementtree.c"
      case 12: // $bb12
        var $74=$attrib; //@line 2249 "_elementtree.c"
        var $75=$74+4; //@line 2249 "_elementtree.c"
        var $76=HEAP[$75]; //@line 2249 "_elementtree.c"
        var $77=$76+24; //@line 2249 "_elementtree.c"
        var $78=HEAP[$77]; //@line 2249 "_elementtree.c"
        var $79=$attrib; //@line 2249 "_elementtree.c"
        FUNCTION_TABLE[$78]($79); //@line 2249 "_elementtree.c"
        __label__ = 40; break; //@line 2249 "_elementtree.c"
      case 13: // $bb14
        var $80=$attrib; //@line 2252 "_elementtree.c"
        var $81=$key; //@line 2252 "_elementtree.c"
        var $82=$value; //@line 2252 "_elementtree.c"
        var $83=_PyDict_SetItem($80, $81, $82); //@line 2252 "_elementtree.c"
        $ok=$83; //@line 2252 "_elementtree.c"
        var $84=$value; //@line 2253 "_elementtree.c"
        var $85=$84; //@line 2253 "_elementtree.c"
        var $86=HEAP[$85]; //@line 2253 "_elementtree.c"
        var $87=($86) - 1; //@line 2253 "_elementtree.c"
        var $88=$value; //@line 2253 "_elementtree.c"
        var $89=$88; //@line 2253 "_elementtree.c"
        HEAP[$89]=$87; //@line 2253 "_elementtree.c"
        var $90=$value; //@line 2253 "_elementtree.c"
        var $91=$90; //@line 2253 "_elementtree.c"
        var $92=HEAP[$91]; //@line 2253 "_elementtree.c"
        var $93=($92)==0; //@line 2253 "_elementtree.c"
        if ($93) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2253 "_elementtree.c"
      case 14: // $bb15
        var $94=$value; //@line 2253 "_elementtree.c"
        var $95=$94+4; //@line 2253 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2253 "_elementtree.c"
        var $97=$96+24; //@line 2253 "_elementtree.c"
        var $98=HEAP[$97]; //@line 2253 "_elementtree.c"
        var $99=$value; //@line 2253 "_elementtree.c"
        FUNCTION_TABLE[$98]($99); //@line 2253 "_elementtree.c"
        __label__ = 15; break; //@line 2253 "_elementtree.c"
      case 15: // $bb16
        var $100=$key; //@line 2254 "_elementtree.c"
        var $101=$100; //@line 2254 "_elementtree.c"
        var $102=HEAP[$101]; //@line 2254 "_elementtree.c"
        var $103=($102) - 1; //@line 2254 "_elementtree.c"
        var $104=$key; //@line 2254 "_elementtree.c"
        var $105=$104; //@line 2254 "_elementtree.c"
        HEAP[$105]=$103; //@line 2254 "_elementtree.c"
        var $106=$key; //@line 2254 "_elementtree.c"
        var $107=$106; //@line 2254 "_elementtree.c"
        var $108=HEAP[$107]; //@line 2254 "_elementtree.c"
        var $109=($108)==0; //@line 2254 "_elementtree.c"
        if ($109) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2254 "_elementtree.c"
      case 16: // $bb17
        var $110=$key; //@line 2254 "_elementtree.c"
        var $111=$110+4; //@line 2254 "_elementtree.c"
        var $112=HEAP[$111]; //@line 2254 "_elementtree.c"
        var $113=$112+24; //@line 2254 "_elementtree.c"
        var $114=HEAP[$113]; //@line 2254 "_elementtree.c"
        var $115=$key; //@line 2254 "_elementtree.c"
        FUNCTION_TABLE[$114]($115); //@line 2254 "_elementtree.c"
        __label__ = 17; break; //@line 2254 "_elementtree.c"
      case 17: // $bb18
        var $116=$ok; //@line 2255 "_elementtree.c"
        var $117=($116) < 0; //@line 2255 "_elementtree.c"
        if ($117) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 2255 "_elementtree.c"
      case 18: // $bb19
        var $118=$attrib; //@line 2256 "_elementtree.c"
        var $119=$118; //@line 2256 "_elementtree.c"
        var $120=HEAP[$119]; //@line 2256 "_elementtree.c"
        var $121=($120) - 1; //@line 2256 "_elementtree.c"
        var $122=$attrib; //@line 2256 "_elementtree.c"
        var $123=$122; //@line 2256 "_elementtree.c"
        HEAP[$123]=$121; //@line 2256 "_elementtree.c"
        var $124=$attrib; //@line 2256 "_elementtree.c"
        var $125=$124; //@line 2256 "_elementtree.c"
        var $126=HEAP[$125]; //@line 2256 "_elementtree.c"
        var $127=($126)==0; //@line 2256 "_elementtree.c"
        if ($127) { __label__ = 19; break; } else { __label__ = 40; break; } //@line 2256 "_elementtree.c"
      case 19: // $bb20
        var $128=$attrib; //@line 2256 "_elementtree.c"
        var $129=$128+4; //@line 2256 "_elementtree.c"
        var $130=HEAP[$129]; //@line 2256 "_elementtree.c"
        var $131=$130+24; //@line 2256 "_elementtree.c"
        var $132=HEAP[$131]; //@line 2256 "_elementtree.c"
        var $133=$attrib; //@line 2256 "_elementtree.c"
        FUNCTION_TABLE[$132]($133); //@line 2256 "_elementtree.c"
        __label__ = 40; break; //@line 2256 "_elementtree.c"
      case 20: // $bb22
        var $134=$attrib_in_addr; //@line 2259 "_elementtree.c"
        var $135=$134+8; //@line 2259 "_elementtree.c"
        $attrib_in_addr=$135; //@line 2259 "_elementtree.c"
        __label__ = 21; break; //@line 2259 "_elementtree.c"
      case 21: // $bb23
        var $136=$attrib_in_addr; //@line 2243 "_elementtree.c"
        var $137=$136; //@line 2243 "_elementtree.c"
        var $138=HEAP[$137]; //@line 2243 "_elementtree.c"
        var $139=($138)==0; //@line 2243 "_elementtree.c"
        if ($139) { __label__ = 24; break; } else { __label__ = 22; break; } //@line 2243 "_elementtree.c"
      case 22: // $bb24
        var $140=$attrib_in_addr; //@line 2243 "_elementtree.c"
        var $141=$140+4; //@line 2243 "_elementtree.c"
        var $142=HEAP[$141]; //@line 2243 "_elementtree.c"
        var $143=($142)!=0; //@line 2243 "_elementtree.c"
        if ($143) { __label__ = 3; break; } else { __label__ = 24; break; } //@line 2243 "_elementtree.c"
      case 23: // $bb26
        var $144=HEAP[__Py_NoneStruct]; //@line 2262 "_elementtree.c"
        var $145=($144) + 1; //@line 2262 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$145; //@line 2262 "_elementtree.c"
        $attrib=__Py_NoneStruct; //@line 2263 "_elementtree.c"
        __label__ = 24; break; //@line 2263 "_elementtree.c"
      case 24: // $bb27
        var $146=$self_addr; //@line 2266 "_elementtree.c"
        var $147=$146+12; //@line 2266 "_elementtree.c"
        var $148=HEAP[$147]; //@line 2266 "_elementtree.c"
        var $149=$148+4; //@line 2266 "_elementtree.c"
        var $150=HEAP[$149]; //@line 2266 "_elementtree.c"
        var $151=($150)==(_TreeBuilder_Type); //@line 2266 "_elementtree.c"
        var $152=$self_addr; //@line 2268 "_elementtree.c"
        if ($151) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2266 "_elementtree.c"
      case 25: // $bb28
        var $153=$152+12; //@line 2268 "_elementtree.c"
        var $154=HEAP[$153]; //@line 2268 "_elementtree.c"
        var $155=$154; //@line 2268 "_elementtree.c"
        var $156=$tag; //@line 2268 "_elementtree.c"
        var $157=$attrib; //@line 2268 "_elementtree.c"
        var $158=_treebuilder_handle_start($155, $156, $157); //@line 2268 "_elementtree.c"
        $res=$158; //@line 2268 "_elementtree.c"
        __label__ = 33; break; //@line 2268 "_elementtree.c"
      case 26: // $bb29
        var $159=$152+28; //@line 2270 "_elementtree.c"
        var $160=HEAP[$159]; //@line 2270 "_elementtree.c"
        var $161=($160)!=0; //@line 2270 "_elementtree.c"
        if ($161) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 2270 "_elementtree.c"
      case 27: // $bb30
        var $162=$attrib; //@line 2271 "_elementtree.c"
        var $163=($162)==(__Py_NoneStruct); //@line 2271 "_elementtree.c"
        if ($163) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 2271 "_elementtree.c"
      case 28: // $bb31
        var $164=$attrib; //@line 2272 "_elementtree.c"
        var $165=$164; //@line 2272 "_elementtree.c"
        var $166=HEAP[$165]; //@line 2272 "_elementtree.c"
        var $167=($166) - 1; //@line 2272 "_elementtree.c"
        var $168=$attrib; //@line 2272 "_elementtree.c"
        var $169=$168; //@line 2272 "_elementtree.c"
        HEAP[$169]=$167; //@line 2272 "_elementtree.c"
        var $170=$attrib; //@line 2272 "_elementtree.c"
        var $171=$170; //@line 2272 "_elementtree.c"
        var $172=HEAP[$171]; //@line 2272 "_elementtree.c"
        var $173=($172)==0; //@line 2272 "_elementtree.c"
        if ($173) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2272 "_elementtree.c"
      case 29: // $bb32
        var $174=$attrib; //@line 2272 "_elementtree.c"
        var $175=$174+4; //@line 2272 "_elementtree.c"
        var $176=HEAP[$175]; //@line 2272 "_elementtree.c"
        var $177=$176+24; //@line 2272 "_elementtree.c"
        var $178=HEAP[$177]; //@line 2272 "_elementtree.c"
        var $179=$attrib; //@line 2272 "_elementtree.c"
        FUNCTION_TABLE[$178]($179); //@line 2272 "_elementtree.c"
        __label__ = 30; break; //@line 2272 "_elementtree.c"
      case 30: // $bb33
        var $180=_PyDict_New(); //@line 2273 "_elementtree.c"
        $attrib=$180; //@line 2273 "_elementtree.c"
        var $181=($180)==0; //@line 2274 "_elementtree.c"
        if ($181) { __label__ = 40; break; } else { __label__ = 31; break; } //@line 2274 "_elementtree.c"
      case 31: // $bb34
        var $182=$self_addr; //@line 2277 "_elementtree.c"
        var $183=$182+28; //@line 2277 "_elementtree.c"
        var $184=HEAP[$183]; //@line 2277 "_elementtree.c"
        var $185=$tag; //@line 2277 "_elementtree.c"
        var $186=$attrib; //@line 2277 "_elementtree.c"
        var $187=_PyObject_CallFunction($184, __str68, allocate([$185,0,0,0,$186,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2277 "_elementtree.c"
        $res=$187; //@line 2277 "_elementtree.c"
        __label__ = 33; break; //@line 2277 "_elementtree.c"
      case 32: // $bb35
        $res=0; //@line 2279 "_elementtree.c"
        __label__ = 33; break; //@line 2279 "_elementtree.c"
      case 33: // $bb36
        var $188=$tag; //@line 2281 "_elementtree.c"
        var $189=$188; //@line 2281 "_elementtree.c"
        var $190=HEAP[$189]; //@line 2281 "_elementtree.c"
        var $191=($190) - 1; //@line 2281 "_elementtree.c"
        var $192=$tag; //@line 2281 "_elementtree.c"
        var $193=$192; //@line 2281 "_elementtree.c"
        HEAP[$193]=$191; //@line 2281 "_elementtree.c"
        var $194=$tag; //@line 2281 "_elementtree.c"
        var $195=$194; //@line 2281 "_elementtree.c"
        var $196=HEAP[$195]; //@line 2281 "_elementtree.c"
        var $197=($196)==0; //@line 2281 "_elementtree.c"
        if ($197) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2281 "_elementtree.c"
      case 34: // $bb37
        var $198=$tag; //@line 2281 "_elementtree.c"
        var $199=$198+4; //@line 2281 "_elementtree.c"
        var $200=HEAP[$199]; //@line 2281 "_elementtree.c"
        var $201=$200+24; //@line 2281 "_elementtree.c"
        var $202=HEAP[$201]; //@line 2281 "_elementtree.c"
        var $203=$tag; //@line 2281 "_elementtree.c"
        FUNCTION_TABLE[$202]($203); //@line 2281 "_elementtree.c"
        __label__ = 35; break; //@line 2281 "_elementtree.c"
      case 35: // $bb38
        var $204=$attrib; //@line 2282 "_elementtree.c"
        var $205=$204; //@line 2282 "_elementtree.c"
        var $206=HEAP[$205]; //@line 2282 "_elementtree.c"
        var $207=($206) - 1; //@line 2282 "_elementtree.c"
        var $208=$attrib; //@line 2282 "_elementtree.c"
        var $209=$208; //@line 2282 "_elementtree.c"
        HEAP[$209]=$207; //@line 2282 "_elementtree.c"
        var $210=$attrib; //@line 2282 "_elementtree.c"
        var $211=$210; //@line 2282 "_elementtree.c"
        var $212=HEAP[$211]; //@line 2282 "_elementtree.c"
        var $213=($212)==0; //@line 2282 "_elementtree.c"
        if ($213) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 2282 "_elementtree.c"
      case 36: // $bb39
        var $214=$attrib; //@line 2282 "_elementtree.c"
        var $215=$214+4; //@line 2282 "_elementtree.c"
        var $216=HEAP[$215]; //@line 2282 "_elementtree.c"
        var $217=$216+24; //@line 2282 "_elementtree.c"
        var $218=HEAP[$217]; //@line 2282 "_elementtree.c"
        var $219=$attrib; //@line 2282 "_elementtree.c"
        FUNCTION_TABLE[$218]($219); //@line 2282 "_elementtree.c"
        __label__ = 37; break; //@line 2282 "_elementtree.c"
      case 37: // $bb40
        var $220=$res; //@line 2284 "_elementtree.c"
        var $221=($220)!=0; //@line 2284 "_elementtree.c"
        if ($221) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 2284 "_elementtree.c"
      case 38: // $bb41
        var $222=$res; //@line 2284 "_elementtree.c"
        var $223=$222; //@line 2284 "_elementtree.c"
        var $224=HEAP[$223]; //@line 2284 "_elementtree.c"
        var $225=($224) - 1; //@line 2284 "_elementtree.c"
        var $226=$res; //@line 2284 "_elementtree.c"
        var $227=$226; //@line 2284 "_elementtree.c"
        HEAP[$227]=$225; //@line 2284 "_elementtree.c"
        var $228=$res; //@line 2284 "_elementtree.c"
        var $229=$228; //@line 2284 "_elementtree.c"
        var $230=HEAP[$229]; //@line 2284 "_elementtree.c"
        var $231=($230)==0; //@line 2284 "_elementtree.c"
        if ($231) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2284 "_elementtree.c"
      case 39: // $bb42
        var $232=$res; //@line 2284 "_elementtree.c"
        var $233=$232+4; //@line 2284 "_elementtree.c"
        var $234=HEAP[$233]; //@line 2284 "_elementtree.c"
        var $235=$234+24; //@line 2284 "_elementtree.c"
        var $236=HEAP[$235]; //@line 2284 "_elementtree.c"
        var $237=$res; //@line 2284 "_elementtree.c"
        FUNCTION_TABLE[$236]($237); //@line 2284 "_elementtree.c"
        __label__ = 40; break; //@line 2284 "_elementtree.c"
      case 40: // $return
        ;
        return; //@line 2236 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_data_handler($self, $data_in, $data_len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $data_in_addr;
        var $data_len_addr;
        var $data;
        var $res;
        $self_addr=$self;
        $data_in_addr=$data_in;
        $data_len_addr=$data_len;
        var $0=$data_in_addr; //@line 2294 "_elementtree.c"
        var $1=$data_len_addr; //@line 2294 "_elementtree.c"
        var $2=_makestring($0, $1); //@line 2294 "_elementtree.c"
        $data=$2; //@line 2294 "_elementtree.c"
        var $3=$data; //@line 2295 "_elementtree.c"
        var $4=($3)==0; //@line 2295 "_elementtree.c"
        if ($4) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 2295 "_elementtree.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2298 "_elementtree.c"
        var $6=$5+12; //@line 2298 "_elementtree.c"
        var $7=HEAP[$6]; //@line 2298 "_elementtree.c"
        var $8=$7+4; //@line 2298 "_elementtree.c"
        var $9=HEAP[$8]; //@line 2298 "_elementtree.c"
        var $10=($9)==(_TreeBuilder_Type); //@line 2298 "_elementtree.c"
        var $11=$self_addr; //@line 2300 "_elementtree.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2298 "_elementtree.c"
      case 2: // $bb1
        var $12=$11+12; //@line 2300 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2300 "_elementtree.c"
        var $14=$13; //@line 2300 "_elementtree.c"
        var $15=$data; //@line 2300 "_elementtree.c"
        var $16=_treebuilder_handle_data($14, $15); //@line 2300 "_elementtree.c"
        $res=$16; //@line 2300 "_elementtree.c"
        __label__ = 6; break; //@line 2300 "_elementtree.c"
      case 3: // $bb2
        var $17=$11+32; //@line 2301 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2301 "_elementtree.c"
        var $19=($18)!=0; //@line 2301 "_elementtree.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2301 "_elementtree.c"
      case 4: // $bb3
        var $20=$self_addr; //@line 2302 "_elementtree.c"
        var $21=$20+32; //@line 2302 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2302 "_elementtree.c"
        var $23=$data; //@line 2302 "_elementtree.c"
        var $24=_PyObject_CallFunction($22, __str85, allocate([$23,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2302 "_elementtree.c"
        $res=$24; //@line 2302 "_elementtree.c"
        __label__ = 6; break; //@line 2302 "_elementtree.c"
      case 5: // $bb4
        $res=0; //@line 2304 "_elementtree.c"
        __label__ = 6; break; //@line 2304 "_elementtree.c"
      case 6: // $bb5
        var $25=$data; //@line 2306 "_elementtree.c"
        var $26=$25; //@line 2306 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2306 "_elementtree.c"
        var $28=($27) - 1; //@line 2306 "_elementtree.c"
        var $29=$data; //@line 2306 "_elementtree.c"
        var $30=$29; //@line 2306 "_elementtree.c"
        HEAP[$30]=$28; //@line 2306 "_elementtree.c"
        var $31=$data; //@line 2306 "_elementtree.c"
        var $32=$31; //@line 2306 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2306 "_elementtree.c"
        var $34=($33)==0; //@line 2306 "_elementtree.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2306 "_elementtree.c"
      case 7: // $bb6
        var $35=$data; //@line 2306 "_elementtree.c"
        var $36=$35+4; //@line 2306 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2306 "_elementtree.c"
        var $38=$37+24; //@line 2306 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2306 "_elementtree.c"
        var $40=$data; //@line 2306 "_elementtree.c"
        FUNCTION_TABLE[$39]($40); //@line 2306 "_elementtree.c"
        __label__ = 8; break; //@line 2306 "_elementtree.c"
      case 8: // $bb7
        var $41=$res; //@line 2308 "_elementtree.c"
        var $42=($41)!=0; //@line 2308 "_elementtree.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 2308 "_elementtree.c"
      case 9: // $bb8
        var $43=$res; //@line 2308 "_elementtree.c"
        var $44=$43; //@line 2308 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2308 "_elementtree.c"
        var $46=($45) - 1; //@line 2308 "_elementtree.c"
        var $47=$res; //@line 2308 "_elementtree.c"
        var $48=$47; //@line 2308 "_elementtree.c"
        HEAP[$48]=$46; //@line 2308 "_elementtree.c"
        var $49=$res; //@line 2308 "_elementtree.c"
        var $50=$49; //@line 2308 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2308 "_elementtree.c"
        var $52=($51)==0; //@line 2308 "_elementtree.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2308 "_elementtree.c"
      case 10: // $bb9
        var $53=$res; //@line 2308 "_elementtree.c"
        var $54=$53+4; //@line 2308 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2308 "_elementtree.c"
        var $56=$55+24; //@line 2308 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2308 "_elementtree.c"
        var $58=$res; //@line 2308 "_elementtree.c"
        FUNCTION_TABLE[$57]($58); //@line 2308 "_elementtree.c"
        __label__ = 11; break; //@line 2308 "_elementtree.c"
      case 11: // $return
        ;
        return; //@line 2296 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_end_handler($self, $tag_in) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $tag_in_addr;
        var $tag;
        var $res;
        $self_addr=$self;
        $tag_in_addr=$tag_in;
        $res=0; //@line 2315 "_elementtree.c"
        var $0=$self_addr; //@line 2317 "_elementtree.c"
        var $1=$0+12; //@line 2317 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2317 "_elementtree.c"
        var $3=$2+4; //@line 2317 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2317 "_elementtree.c"
        var $5=($4)==(_TreeBuilder_Type); //@line 2317 "_elementtree.c"
        var $6=$self_addr; //@line 2320 "_elementtree.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2317 "_elementtree.c"
      case 1: // $bb
        var $7=$6+12; //@line 2320 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2320 "_elementtree.c"
        var $9=$8; //@line 2320 "_elementtree.c"
        var $10=_treebuilder_handle_end($9, __Py_NoneStruct); //@line 2320 "_elementtree.c"
        $res=$10; //@line 2320 "_elementtree.c"
        __lastLabel__ = 1; __label__ = 7; break; //@line 2320 "_elementtree.c"
      case 2: // $bb1
        var $11=$6+36; //@line 2323 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2323 "_elementtree.c"
        var $13=($12)!=0; //@line 2323 "_elementtree.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2323 "_elementtree.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 2324 "_elementtree.c"
        var $15=$tag_in_addr; //@line 2324 "_elementtree.c"
        var $16=_makeuniversal($14, $15); //@line 2324 "_elementtree.c"
        $tag=$16; //@line 2324 "_elementtree.c"
        var $17=$tag; //@line 2325 "_elementtree.c"
        var $18=($17)!=0; //@line 2325 "_elementtree.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2325 "_elementtree.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 2326 "_elementtree.c"
        var $20=$19+36; //@line 2326 "_elementtree.c"
        var $21=HEAP[$20]; //@line 2326 "_elementtree.c"
        var $22=$tag; //@line 2326 "_elementtree.c"
        var $23=_PyObject_CallFunction($21, __str85, allocate([$22,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2326 "_elementtree.c"
        $res=$23; //@line 2326 "_elementtree.c"
        var $24=$tag; //@line 2327 "_elementtree.c"
        var $25=$24; //@line 2327 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2327 "_elementtree.c"
        var $27=($26) - 1; //@line 2327 "_elementtree.c"
        var $28=$tag; //@line 2327 "_elementtree.c"
        var $29=$28; //@line 2327 "_elementtree.c"
        HEAP[$29]=$27; //@line 2327 "_elementtree.c"
        var $30=$tag; //@line 2327 "_elementtree.c"
        var $31=$30; //@line 2327 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2327 "_elementtree.c"
        var $33=($32)==0; //@line 2327 "_elementtree.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2327 "_elementtree.c"
      case 5: // $bb4
        var $34=$tag; //@line 2327 "_elementtree.c"
        var $35=$34+4; //@line 2327 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2327 "_elementtree.c"
        var $37=$36+24; //@line 2327 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2327 "_elementtree.c"
        var $39=$tag; //@line 2327 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 2327 "_elementtree.c"
        __label__ = 6; break; //@line 2327 "_elementtree.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $40=__lastLabel__ == 6 ? $_pr : ($10);
        var $41=($40)!=0; //@line 2331 "_elementtree.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2331 "_elementtree.c"
      case 8: // $bb6
        var $42=$res; //@line 2331 "_elementtree.c"
        var $43=$42; //@line 2331 "_elementtree.c"
        var $44=HEAP[$43]; //@line 2331 "_elementtree.c"
        var $45=($44) - 1; //@line 2331 "_elementtree.c"
        var $46=$res; //@line 2331 "_elementtree.c"
        var $47=$46; //@line 2331 "_elementtree.c"
        HEAP[$47]=$45; //@line 2331 "_elementtree.c"
        var $48=$res; //@line 2331 "_elementtree.c"
        var $49=$48; //@line 2331 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2331 "_elementtree.c"
        var $51=($50)==0; //@line 2331 "_elementtree.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2331 "_elementtree.c"
      case 9: // $bb7
        var $52=$res; //@line 2331 "_elementtree.c"
        var $53=$52+4; //@line 2331 "_elementtree.c"
        var $54=HEAP[$53]; //@line 2331 "_elementtree.c"
        var $55=$54+24; //@line 2331 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2331 "_elementtree.c"
        var $57=$res; //@line 2331 "_elementtree.c"
        FUNCTION_TABLE[$56]($57); //@line 2331 "_elementtree.c"
        __label__ = 10; break; //@line 2331 "_elementtree.c"
      case 10: // $return
        ;
        return; //@line 2332 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_start_ns_handler($self, $prefix, $uri) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $prefix_addr;
        var $uri_addr;
        var $sprefix;
        var $suri;
        $self_addr=$self;
        $prefix_addr=$prefix;
        $uri_addr=$uri;
        $sprefix=0; //@line 2338 "_elementtree.c"
        $suri=0; //@line 2339 "_elementtree.c"
        var $0=$uri_addr; //@line 2341 "_elementtree.c"
        var $1=_strlen($0); //@line 2341 "_elementtree.c"
        var $2=$uri_addr; //@line 2341 "_elementtree.c"
        var $3=_makestring($2, $1); //@line 2341 "_elementtree.c"
        $suri=$3; //@line 2341 "_elementtree.c"
        var $4=$suri; //@line 2342 "_elementtree.c"
        var $5=($4)==0; //@line 2342 "_elementtree.c"
        if ($5) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 2342 "_elementtree.c"
      case 1: // $bb
        var $6=$prefix_addr; //@line 2345 "_elementtree.c"
        var $7=($6)!=0; //@line 2345 "_elementtree.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2345 "_elementtree.c"
      case 2: // $bb1
        var $8=$prefix_addr; //@line 2346 "_elementtree.c"
        var $9=_strlen($8); //@line 2346 "_elementtree.c"
        var $10=$prefix_addr; //@line 2346 "_elementtree.c"
        var $11=_makestring($10, $9); //@line 2346 "_elementtree.c"
        $sprefix=$11; //@line 2346 "_elementtree.c"
        __lastLabel__ = 2; __label__ = 4; break; //@line 2346 "_elementtree.c"
      case 3: // $bb2
        var $12=_PyString_FromStringAndSize(__str1, 0); //@line 2348 "_elementtree.c"
        $sprefix=$12; //@line 2348 "_elementtree.c"
        __lastLabel__ = 3; __label__ = 4; break; //@line 2348 "_elementtree.c"
      case 4: // $bb3
        var $13=__lastLabel__ == 3 ? $12 : ($11);
        var $14=($13)==0; //@line 2349 "_elementtree.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 2349 "_elementtree.c"
      case 5: // $bb4
        var $15=$suri; //@line 2350 "_elementtree.c"
        var $16=$15; //@line 2350 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2350 "_elementtree.c"
        var $18=($17) - 1; //@line 2350 "_elementtree.c"
        var $19=$suri; //@line 2350 "_elementtree.c"
        var $20=$19; //@line 2350 "_elementtree.c"
        HEAP[$20]=$18; //@line 2350 "_elementtree.c"
        var $21=$suri; //@line 2350 "_elementtree.c"
        var $22=$21; //@line 2350 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2350 "_elementtree.c"
        var $24=($23)==0; //@line 2350 "_elementtree.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 2350 "_elementtree.c"
      case 6: // $bb5
        var $25=$suri; //@line 2350 "_elementtree.c"
        var $26=$25+4; //@line 2350 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2350 "_elementtree.c"
        var $28=$27+24; //@line 2350 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2350 "_elementtree.c"
        var $30=$suri; //@line 2350 "_elementtree.c"
        FUNCTION_TABLE[$29]($30); //@line 2350 "_elementtree.c"
        __label__ = 11; break; //@line 2350 "_elementtree.c"
      case 7: // $bb7
        var $31=$self_addr; //@line 2354 "_elementtree.c"
        var $32=$31+12; //@line 2354 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2354 "_elementtree.c"
        var $34=$33; //@line 2354 "_elementtree.c"
        var $35=$sprefix; //@line 2354 "_elementtree.c"
        var $36=$suri; //@line 2354 "_elementtree.c"
        _treebuilder_handle_namespace($34, 1, $35, $36); //@line 2354 "_elementtree.c"
        var $37=$sprefix; //@line 2358 "_elementtree.c"
        var $38=$37; //@line 2358 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2358 "_elementtree.c"
        var $40=($39) - 1; //@line 2358 "_elementtree.c"
        var $41=$sprefix; //@line 2358 "_elementtree.c"
        var $42=$41; //@line 2358 "_elementtree.c"
        HEAP[$42]=$40; //@line 2358 "_elementtree.c"
        var $43=$sprefix; //@line 2358 "_elementtree.c"
        var $44=$43; //@line 2358 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2358 "_elementtree.c"
        var $46=($45)==0; //@line 2358 "_elementtree.c"
        if ($46) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2358 "_elementtree.c"
      case 8: // $bb8
        var $47=$sprefix; //@line 2358 "_elementtree.c"
        var $48=$47+4; //@line 2358 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2358 "_elementtree.c"
        var $50=$49+24; //@line 2358 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2358 "_elementtree.c"
        var $52=$sprefix; //@line 2358 "_elementtree.c"
        FUNCTION_TABLE[$51]($52); //@line 2358 "_elementtree.c"
        __label__ = 9; break; //@line 2358 "_elementtree.c"
      case 9: // $bb9
        var $53=$suri; //@line 2359 "_elementtree.c"
        var $54=$53; //@line 2359 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2359 "_elementtree.c"
        var $56=($55) - 1; //@line 2359 "_elementtree.c"
        var $57=$suri; //@line 2359 "_elementtree.c"
        var $58=$57; //@line 2359 "_elementtree.c"
        HEAP[$58]=$56; //@line 2359 "_elementtree.c"
        var $59=$suri; //@line 2359 "_elementtree.c"
        var $60=$59; //@line 2359 "_elementtree.c"
        var $61=HEAP[$60]; //@line 2359 "_elementtree.c"
        var $62=($61)==0; //@line 2359 "_elementtree.c"
        if ($62) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2359 "_elementtree.c"
      case 10: // $bb10
        var $63=$suri; //@line 2359 "_elementtree.c"
        var $64=$63+4; //@line 2359 "_elementtree.c"
        var $65=HEAP[$64]; //@line 2359 "_elementtree.c"
        var $66=$65+24; //@line 2359 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2359 "_elementtree.c"
        var $68=$suri; //@line 2359 "_elementtree.c"
        FUNCTION_TABLE[$67]($68); //@line 2359 "_elementtree.c"
        __label__ = 11; break; //@line 2359 "_elementtree.c"
      case 11: // $return
        ;
        return; //@line 2343 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_end_ns_handler($self, $prefix_in) {
    ;
    var __label__;
  
    var $self_addr;
    var $prefix_in_addr;
    $self_addr=$self;
    $prefix_in_addr=$prefix_in;
    var $0=$self_addr; //@line 2365 "_elementtree.c"
    var $1=$0+12; //@line 2365 "_elementtree.c"
    var $2=HEAP[$1]; //@line 2365 "_elementtree.c"
    var $3=$2; //@line 2365 "_elementtree.c"
    _treebuilder_handle_namespace($3, 0, 0, 0); //@line 2365 "_elementtree.c"
    ;
    return; //@line 2368 "_elementtree.c"
  }
  

  function _expat_comment_handler($self, $comment_in) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $comment_in_addr;
        var $comment;
        var $res;
        $self_addr=$self;
        $comment_in_addr=$comment_in;
        var $0=$self_addr; //@line 2376 "_elementtree.c"
        var $1=$0+40; //@line 2376 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2376 "_elementtree.c"
        var $3=($2)!=0; //@line 2376 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 2376 "_elementtree.c"
      case 1: // $bb
        var $4=$comment_in_addr; //@line 2377 "_elementtree.c"
        var $5=_strlen($4); //@line 2377 "_elementtree.c"
        var $6=$comment_in_addr; //@line 2377 "_elementtree.c"
        var $7=_makestring($6, $5); //@line 2377 "_elementtree.c"
        $comment=$7; //@line 2377 "_elementtree.c"
        var $8=$comment; //@line 2378 "_elementtree.c"
        var $9=($8)!=0; //@line 2378 "_elementtree.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 2378 "_elementtree.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 2379 "_elementtree.c"
        var $11=$10+40; //@line 2379 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2379 "_elementtree.c"
        var $13=$comment; //@line 2379 "_elementtree.c"
        var $14=_PyObject_CallFunction($12, __str85, allocate([$13,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2379 "_elementtree.c"
        $res=$14; //@line 2379 "_elementtree.c"
        var $15=$res; //@line 2380 "_elementtree.c"
        var $16=($15)!=0; //@line 2380 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2380 "_elementtree.c"
      case 3: // $bb2
        var $17=$res; //@line 2380 "_elementtree.c"
        var $18=$17; //@line 2380 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2380 "_elementtree.c"
        var $20=($19) - 1; //@line 2380 "_elementtree.c"
        var $21=$res; //@line 2380 "_elementtree.c"
        var $22=$21; //@line 2380 "_elementtree.c"
        HEAP[$22]=$20; //@line 2380 "_elementtree.c"
        var $23=$res; //@line 2380 "_elementtree.c"
        var $24=$23; //@line 2380 "_elementtree.c"
        var $25=HEAP[$24]; //@line 2380 "_elementtree.c"
        var $26=($25)==0; //@line 2380 "_elementtree.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2380 "_elementtree.c"
      case 4: // $bb3
        var $27=$res; //@line 2380 "_elementtree.c"
        var $28=$27+4; //@line 2380 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2380 "_elementtree.c"
        var $30=$29+24; //@line 2380 "_elementtree.c"
        var $31=HEAP[$30]; //@line 2380 "_elementtree.c"
        var $32=$res; //@line 2380 "_elementtree.c"
        FUNCTION_TABLE[$31]($32); //@line 2380 "_elementtree.c"
        __label__ = 5; break; //@line 2380 "_elementtree.c"
      case 5: // $bb4
        var $33=$comment; //@line 2381 "_elementtree.c"
        var $34=$33; //@line 2381 "_elementtree.c"
        var $35=HEAP[$34]; //@line 2381 "_elementtree.c"
        var $36=($35) - 1; //@line 2381 "_elementtree.c"
        var $37=$comment; //@line 2381 "_elementtree.c"
        var $38=$37; //@line 2381 "_elementtree.c"
        HEAP[$38]=$36; //@line 2381 "_elementtree.c"
        var $39=$comment; //@line 2381 "_elementtree.c"
        var $40=$39; //@line 2381 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2381 "_elementtree.c"
        var $42=($41)==0; //@line 2381 "_elementtree.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2381 "_elementtree.c"
      case 6: // $bb5
        var $43=$comment; //@line 2381 "_elementtree.c"
        var $44=$43+4; //@line 2381 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2381 "_elementtree.c"
        var $46=$45+24; //@line 2381 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2381 "_elementtree.c"
        var $48=$comment; //@line 2381 "_elementtree.c"
        FUNCTION_TABLE[$47]($48); //@line 2381 "_elementtree.c"
        __label__ = 7; break; //@line 2381 "_elementtree.c"
      case 7: // $return
        ;
        return; //@line 2384 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_pi_handler($self, $target_in, $data_in) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $target_in_addr;
        var $data_in_addr;
        var $target;
        var $data;
        var $res;
        $self_addr=$self;
        $target_in_addr=$target_in;
        $data_in_addr=$data_in;
        var $0=$self_addr; //@line 2394 "_elementtree.c"
        var $1=$0+44; //@line 2394 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2394 "_elementtree.c"
        var $3=($2)!=0; //@line 2394 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 16; break; } //@line 2394 "_elementtree.c"
      case 1: // $bb
        var $4=$target_in_addr; //@line 2395 "_elementtree.c"
        var $5=_strlen($4); //@line 2395 "_elementtree.c"
        var $6=$target_in_addr; //@line 2395 "_elementtree.c"
        var $7=_makestring($6, $5); //@line 2395 "_elementtree.c"
        $target=$7; //@line 2395 "_elementtree.c"
        var $8=$data_in_addr; //@line 2396 "_elementtree.c"
        var $9=_strlen($8); //@line 2396 "_elementtree.c"
        var $10=$data_in_addr; //@line 2396 "_elementtree.c"
        var $11=_makestring($10, $9); //@line 2396 "_elementtree.c"
        $data=$11; //@line 2396 "_elementtree.c"
        var $12=$target; //@line 2397 "_elementtree.c"
        var $13=($12)==0; //@line 2397 "_elementtree.c"
        if ($13) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 2397 "_elementtree.c"
      case 2: // $bb1
        var $14=$data; //@line 2397 "_elementtree.c"
        var $15=($14)==0; //@line 2397 "_elementtree.c"
        if ($15) { __label__ = 13; break; } else { __label__ = 3; break; } //@line 2397 "_elementtree.c"
      case 3: // $bb2
        var $16=$self_addr; //@line 2398 "_elementtree.c"
        var $17=$16+44; //@line 2398 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2398 "_elementtree.c"
        var $19=$target; //@line 2398 "_elementtree.c"
        var $20=$data; //@line 2398 "_elementtree.c"
        var $21=_PyObject_CallFunction($18, __str68, allocate([$19,0,0,0,$20,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2398 "_elementtree.c"
        $res=$21; //@line 2398 "_elementtree.c"
        var $22=$res; //@line 2399 "_elementtree.c"
        var $23=($22)!=0; //@line 2399 "_elementtree.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2399 "_elementtree.c"
      case 4: // $bb3
        var $24=$res; //@line 2399 "_elementtree.c"
        var $25=$24; //@line 2399 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2399 "_elementtree.c"
        var $27=($26) - 1; //@line 2399 "_elementtree.c"
        var $28=$res; //@line 2399 "_elementtree.c"
        var $29=$28; //@line 2399 "_elementtree.c"
        HEAP[$29]=$27; //@line 2399 "_elementtree.c"
        var $30=$res; //@line 2399 "_elementtree.c"
        var $31=$30; //@line 2399 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2399 "_elementtree.c"
        var $33=($32)==0; //@line 2399 "_elementtree.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2399 "_elementtree.c"
      case 5: // $bb4
        var $34=$res; //@line 2399 "_elementtree.c"
        var $35=$34+4; //@line 2399 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2399 "_elementtree.c"
        var $37=$36+24; //@line 2399 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2399 "_elementtree.c"
        var $39=$res; //@line 2399 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 2399 "_elementtree.c"
        __label__ = 6; break; //@line 2399 "_elementtree.c"
      case 6: // $bb5
        var $40=$data; //@line 2400 "_elementtree.c"
        var $41=$40; //@line 2400 "_elementtree.c"
        var $42=HEAP[$41]; //@line 2400 "_elementtree.c"
        var $43=($42) - 1; //@line 2400 "_elementtree.c"
        var $44=$data; //@line 2400 "_elementtree.c"
        var $45=$44; //@line 2400 "_elementtree.c"
        HEAP[$45]=$43; //@line 2400 "_elementtree.c"
        var $46=$data; //@line 2400 "_elementtree.c"
        var $47=$46; //@line 2400 "_elementtree.c"
        var $48=HEAP[$47]; //@line 2400 "_elementtree.c"
        var $49=($48)==0; //@line 2400 "_elementtree.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2400 "_elementtree.c"
      case 7: // $bb6
        var $50=$data; //@line 2400 "_elementtree.c"
        var $51=$50+4; //@line 2400 "_elementtree.c"
        var $52=HEAP[$51]; //@line 2400 "_elementtree.c"
        var $53=$52+24; //@line 2400 "_elementtree.c"
        var $54=HEAP[$53]; //@line 2400 "_elementtree.c"
        var $55=$data; //@line 2400 "_elementtree.c"
        FUNCTION_TABLE[$54]($55); //@line 2400 "_elementtree.c"
        __label__ = 8; break; //@line 2400 "_elementtree.c"
      case 8: // $bb7
        var $56=$target; //@line 2401 "_elementtree.c"
        var $57=$56; //@line 2401 "_elementtree.c"
        var $58=HEAP[$57]; //@line 2401 "_elementtree.c"
        var $59=($58) - 1; //@line 2401 "_elementtree.c"
        var $60=$target; //@line 2401 "_elementtree.c"
        var $61=$60; //@line 2401 "_elementtree.c"
        HEAP[$61]=$59; //@line 2401 "_elementtree.c"
        var $62=$target; //@line 2401 "_elementtree.c"
        var $63=$62; //@line 2401 "_elementtree.c"
        var $64=HEAP[$63]; //@line 2401 "_elementtree.c"
        var $65=($64)==0; //@line 2401 "_elementtree.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 2401 "_elementtree.c"
      case 9: // $bb8
        var $66=$target; //@line 2401 "_elementtree.c"
        var $67=$66+4; //@line 2401 "_elementtree.c"
        var $68=HEAP[$67]; //@line 2401 "_elementtree.c"
        var $69=$68+24; //@line 2401 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2401 "_elementtree.c"
        var $71=$target; //@line 2401 "_elementtree.c"
        FUNCTION_TABLE[$70]($71); //@line 2401 "_elementtree.c"
        __label__ = 16; break; //@line 2401 "_elementtree.c"
      case 10: // $bb10
        var $72=($11)!=0; //@line 2403 "_elementtree.c"
        if ($72) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2403 "_elementtree.c"
      case 11: // $bb11
        var $73=$data; //@line 2403 "_elementtree.c"
        var $74=$73; //@line 2403 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2403 "_elementtree.c"
        var $76=($75) - 1; //@line 2403 "_elementtree.c"
        var $77=$data; //@line 2403 "_elementtree.c"
        var $78=$77; //@line 2403 "_elementtree.c"
        HEAP[$78]=$76; //@line 2403 "_elementtree.c"
        var $79=$data; //@line 2403 "_elementtree.c"
        var $80=$79; //@line 2403 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2403 "_elementtree.c"
        var $82=($81)==0; //@line 2403 "_elementtree.c"
        if ($82) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2403 "_elementtree.c"
      case 12: // $bb12
        var $83=$data; //@line 2403 "_elementtree.c"
        var $84=$83+4; //@line 2403 "_elementtree.c"
        var $85=HEAP[$84]; //@line 2403 "_elementtree.c"
        var $86=$85+24; //@line 2403 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2403 "_elementtree.c"
        var $88=$data; //@line 2403 "_elementtree.c"
        FUNCTION_TABLE[$87]($88); //@line 2403 "_elementtree.c"
        __label__ = 13; break; //@line 2403 "_elementtree.c"
      case 13: // $bb13
        var $89=$target; //@line 2404 "_elementtree.c"
        var $90=($89)!=0; //@line 2404 "_elementtree.c"
        if ($90) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2404 "_elementtree.c"
      case 14: // $bb14
        var $91=$target; //@line 2404 "_elementtree.c"
        var $92=$91; //@line 2404 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2404 "_elementtree.c"
        var $94=($93) - 1; //@line 2404 "_elementtree.c"
        var $95=$target; //@line 2404 "_elementtree.c"
        var $96=$95; //@line 2404 "_elementtree.c"
        HEAP[$96]=$94; //@line 2404 "_elementtree.c"
        var $97=$target; //@line 2404 "_elementtree.c"
        var $98=$97; //@line 2404 "_elementtree.c"
        var $99=HEAP[$98]; //@line 2404 "_elementtree.c"
        var $100=($99)==0; //@line 2404 "_elementtree.c"
        if ($100) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2404 "_elementtree.c"
      case 15: // $bb15
        var $101=$target; //@line 2404 "_elementtree.c"
        var $102=$101+4; //@line 2404 "_elementtree.c"
        var $103=HEAP[$102]; //@line 2404 "_elementtree.c"
        var $104=$103+24; //@line 2404 "_elementtree.c"
        var $105=HEAP[$104]; //@line 2404 "_elementtree.c"
        var $106=$target; //@line 2404 "_elementtree.c"
        FUNCTION_TABLE[$105]($106); //@line 2404 "_elementtree.c"
        __label__ = 16; break; //@line 2404 "_elementtree.c"
      case 16: // $return
        ;
        return; //@line 2407 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_unknown_encoding_handler($self, $name, $info) {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $name_addr;
        var $info_addr;
        var $retval;
        var $0;
        var $u;
        var $p;
        var $s=__stackBase__;
        var $i;
        $self_addr=$self;
        $name_addr=$name;
        $info_addr=$info;
        var $1=$info_addr; //@line 2419 "_elementtree.c"
        var $2=$1; //@line 2419 "_elementtree.c"
        _llvm_memset_p0i8_i32($2, 0, 1036, 1, 0); //@line 2419 "_elementtree.c"
        $i=0; //@line 2421 "_elementtree.c"
        __label__ = 1; break;
      case 1: // $bb
        var $3=$i; //@line 2422 "_elementtree.c"
        var $4=$i; //@line 2422 "_elementtree.c"
        var $5=((($4)) & 255); //@line 2422 "_elementtree.c"
        var $6=$s+$3; //@line 2422 "_elementtree.c"
        HEAP[$6]=$5; //@line 2422 "_elementtree.c"
        var $7=$i; //@line 2421 "_elementtree.c"
        var $8=($7) + 1; //@line 2421 "_elementtree.c"
        $i=$8; //@line 2421 "_elementtree.c"
        var $9=($8) <= 255; //@line 2421 "_elementtree.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2421 "_elementtree.c"
      case 2: // $bb2
        var $s3=$s; //@line 2424 "_elementtree.c"
        var $10=$name_addr; //@line 2424 "_elementtree.c"
        var $11=_PyUnicodeUCS2_Decode($s3, 256, $10, __str87); //@line 2424 "_elementtree.c"
        $u=$11; //@line 2424 "_elementtree.c"
        var $12=$u; //@line 2425 "_elementtree.c"
        var $13=($12)==0; //@line 2425 "_elementtree.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2425 "_elementtree.c"
      case 3: // $bb5
        $0=0; //@line 2426 "_elementtree.c"
        __label__ = 16; break; //@line 2426 "_elementtree.c"
      case 4: // $bb6
        var $14=$u; //@line 2428 "_elementtree.c"
        var $15=$14; //@line 2428 "_elementtree.c"
        var $16=$15+8; //@line 2428 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2428 "_elementtree.c"
        var $18=($17)!=256; //@line 2428 "_elementtree.c"
        var $19=$u; //@line 2429 "_elementtree.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2428 "_elementtree.c"
      case 5: // $bb7
        var $20=$19; //@line 2429 "_elementtree.c"
        var $21=HEAP[$20]; //@line 2429 "_elementtree.c"
        var $22=($21) - 1; //@line 2429 "_elementtree.c"
        var $23=$u; //@line 2429 "_elementtree.c"
        var $24=$23; //@line 2429 "_elementtree.c"
        HEAP[$24]=$22; //@line 2429 "_elementtree.c"
        var $25=$u; //@line 2429 "_elementtree.c"
        var $26=$25; //@line 2429 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2429 "_elementtree.c"
        var $28=($27)==0; //@line 2429 "_elementtree.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2429 "_elementtree.c"
      case 6: // $bb8
        var $29=$u; //@line 2429 "_elementtree.c"
        var $30=$29+4; //@line 2429 "_elementtree.c"
        var $31=HEAP[$30]; //@line 2429 "_elementtree.c"
        var $32=$31+24; //@line 2429 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2429 "_elementtree.c"
        var $34=$u; //@line 2429 "_elementtree.c"
        FUNCTION_TABLE[$33]($34); //@line 2429 "_elementtree.c"
        __label__ = 7; break; //@line 2429 "_elementtree.c"
      case 7: // $bb9
        $0=0; //@line 2430 "_elementtree.c"
        __label__ = 16; break; //@line 2430 "_elementtree.c"
      case 8: // $bb10
        var $35=$19; //@line 2433 "_elementtree.c"
        var $36=$35+12; //@line 2433 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2433 "_elementtree.c"
        $p=$37; //@line 2433 "_elementtree.c"
        $i=0; //@line 2435 "_elementtree.c"
        __label__ = 9; break;
      case 9: // $bb11
        var $38=$p; //@line 2436 "_elementtree.c"
        var $39=$i; //@line 2436 "_elementtree.c"
        var $40=$38+2*$39; //@line 2436 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2436 "_elementtree.c"
        var $42=($41)!=-3; //@line 2436 "_elementtree.c"
        var $43=$i; //@line 2437 "_elementtree.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2436 "_elementtree.c"
      case 10: // $bb12
        var $44=$p; //@line 2437 "_elementtree.c"
        var $45=$i; //@line 2437 "_elementtree.c"
        var $46=$44+2*$45; //@line 2437 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2437 "_elementtree.c"
        var $48=($47); //@line 2437 "_elementtree.c"
        var $49=$info_addr; //@line 2437 "_elementtree.c"
        var $50=$49; //@line 2437 "_elementtree.c"
        var $51=$50+$43*4; //@line 2437 "_elementtree.c"
        HEAP[$51]=$48; //@line 2437 "_elementtree.c"
        __label__ = 12; break; //@line 2437 "_elementtree.c"
      case 11: // $bb13
        var $52=$info_addr; //@line 2439 "_elementtree.c"
        var $53=$52; //@line 2439 "_elementtree.c"
        var $54=$53+$43*4; //@line 2439 "_elementtree.c"
        HEAP[$54]=-1; //@line 2439 "_elementtree.c"
        __label__ = 12; break; //@line 2439 "_elementtree.c"
      case 12: // $bb14
        var $55=$i; //@line 2435 "_elementtree.c"
        var $56=($55) + 1; //@line 2435 "_elementtree.c"
        $i=$56; //@line 2435 "_elementtree.c"
        var $57=($56) <= 255; //@line 2435 "_elementtree.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 2435 "_elementtree.c"
      case 13: // $bb16
        var $58=$u; //@line 2442 "_elementtree.c"
        var $59=$58; //@line 2442 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2442 "_elementtree.c"
        var $61=($60) - 1; //@line 2442 "_elementtree.c"
        var $62=$u; //@line 2442 "_elementtree.c"
        var $63=$62; //@line 2442 "_elementtree.c"
        HEAP[$63]=$61; //@line 2442 "_elementtree.c"
        var $64=$u; //@line 2442 "_elementtree.c"
        var $65=$64; //@line 2442 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2442 "_elementtree.c"
        var $67=($66)==0; //@line 2442 "_elementtree.c"
        if ($67) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2442 "_elementtree.c"
      case 14: // $bb17
        var $68=$u; //@line 2442 "_elementtree.c"
        var $69=$68+4; //@line 2442 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2442 "_elementtree.c"
        var $71=$70+24; //@line 2442 "_elementtree.c"
        var $72=HEAP[$71]; //@line 2442 "_elementtree.c"
        var $73=$u; //@line 2442 "_elementtree.c"
        FUNCTION_TABLE[$72]($73); //@line 2442 "_elementtree.c"
        __label__ = 15; break; //@line 2442 "_elementtree.c"
      case 15: // $bb18
        $0=1; //@line 2444 "_elementtree.c"
        __label__ = 16; break; //@line 2444 "_elementtree.c"
      case 16: // $bb19
        var $74=$0; //@line 2426 "_elementtree.c"
        $retval=$74; //@line 2426 "_elementtree.c"
        var $retval20=$retval; //@line 2426 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 2426 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser($self_, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $self;
        var $target=__stackBase__;
        var $encoding=__stackBase__+4;
        $self__addr=$self_;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$target]=0; //@line 2458 "_elementtree.c"
        HEAP[$encoding]=0; //@line 2459 "_elementtree.c"
        var $1=$args_addr; //@line 2461 "_elementtree.c"
        var $2=$kw_addr; //@line 2461 "_elementtree.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str88, _kwlist_12207, allocate([$target,0,0,0,$encoding,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 2461 "_elementtree.c"
        var $4=($3)==0; //@line 2461 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2461 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2463 "_elementtree.c"
        __label__ = 21; break; //@line 2463 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[_expat_capi]; //@line 2466 "_elementtree.c"
        var $6=($5)==0; //@line 2466 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2466 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_RuntimeError]; //@line 2467 "_elementtree.c"
        _PyErr_SetString($7, __str91); //@line 2467 "_elementtree.c"
        $0=0; //@line 2470 "_elementtree.c"
        __label__ = 21; break; //@line 2470 "_elementtree.c"
      case 4: // $bb3
        var $8=__PyObject_New(_XMLParser_Type); //@line 2474 "_elementtree.c"
        var $9=$8; //@line 2474 "_elementtree.c"
        $self=$9; //@line 2474 "_elementtree.c"
        var $10=$self; //@line 2475 "_elementtree.c"
        var $11=($10)==0; //@line 2475 "_elementtree.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2475 "_elementtree.c"
      case 5: // $bb4
        $0=0; //@line 2476 "_elementtree.c"
        __label__ = 21; break; //@line 2476 "_elementtree.c"
      case 6: // $bb5
        var $12=_PyDict_New(); //@line 2478 "_elementtree.c"
        var $13=$self; //@line 2478 "_elementtree.c"
        var $14=$13+16; //@line 2478 "_elementtree.c"
        HEAP[$14]=$12; //@line 2478 "_elementtree.c"
        var $15=$self; //@line 2479 "_elementtree.c"
        var $16=$15+16; //@line 2479 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2479 "_elementtree.c"
        var $18=($17)==0; //@line 2479 "_elementtree.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2479 "_elementtree.c"
      case 7: // $bb6
        var $19=$self; //@line 2480 "_elementtree.c"
        var $20=$19; //@line 2480 "_elementtree.c"
        _PyObject_Free($20); //@line 2480 "_elementtree.c"
        $0=0; //@line 2481 "_elementtree.c"
        __label__ = 21; break; //@line 2481 "_elementtree.c"
      case 8: // $bb7
        var $21=_PyDict_New(); //@line 2484 "_elementtree.c"
        var $22=$self; //@line 2484 "_elementtree.c"
        var $23=$22+20; //@line 2484 "_elementtree.c"
        HEAP[$23]=$21; //@line 2484 "_elementtree.c"
        var $24=$self; //@line 2485 "_elementtree.c"
        var $25=$24+20; //@line 2485 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2485 "_elementtree.c"
        var $27=($26)==0; //@line 2485 "_elementtree.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2485 "_elementtree.c"
      case 9: // $bb8
        var $28=$self; //@line 2486 "_elementtree.c"
        var $29=$28+16; //@line 2486 "_elementtree.c"
        var $30=HEAP[$29]; //@line 2486 "_elementtree.c"
        var $31=$30; //@line 2486 "_elementtree.c"
        _PyObject_Free($31); //@line 2486 "_elementtree.c"
        var $32=$self; //@line 2487 "_elementtree.c"
        var $33=$32; //@line 2487 "_elementtree.c"
        _PyObject_Free($33); //@line 2487 "_elementtree.c"
        $0=0; //@line 2488 "_elementtree.c"
        __label__ = 21; break; //@line 2488 "_elementtree.c"
      case 10: // $bb9
        HEAP[_memory_handler_12204]=(FUNCTION_TABLE_OFFSET + 2); //@line 2491 "_elementtree.c"
        HEAP[_memory_handler_12204+4]=(FUNCTION_TABLE_OFFSET + 4); //@line 2492 "_elementtree.c"
        HEAP[_memory_handler_12204+8]=(FUNCTION_TABLE_OFFSET + 6); //@line 2493 "_elementtree.c"
        var $34=HEAP[_expat_capi]; //@line 2495 "_elementtree.c"
        var $35=$34+40; //@line 2495 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2495 "_elementtree.c"
        var $37=HEAP[$encoding]; //@line 2495 "_elementtree.c"
        var $38=FUNCTION_TABLE[$36]($37, _memory_handler_12204, __str92); //@line 2495 "_elementtree.c"
        var $39=$self; //@line 2495 "_elementtree.c"
        var $40=$39+8; //@line 2495 "_elementtree.c"
        HEAP[$40]=$38; //@line 2495 "_elementtree.c"
        var $41=$self; //@line 2496 "_elementtree.c"
        var $42=$41+8; //@line 2496 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2496 "_elementtree.c"
        var $44=($43)==0; //@line 2496 "_elementtree.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2496 "_elementtree.c"
      case 11: // $bb10
        var $45=$self; //@line 2497 "_elementtree.c"
        var $46=$45+20; //@line 2497 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2497 "_elementtree.c"
        var $48=$47; //@line 2497 "_elementtree.c"
        _PyObject_Free($48); //@line 2497 "_elementtree.c"
        var $49=$self; //@line 2498 "_elementtree.c"
        var $50=$49+16; //@line 2498 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2498 "_elementtree.c"
        var $52=$51; //@line 2498 "_elementtree.c"
        _PyObject_Free($52); //@line 2498 "_elementtree.c"
        var $53=$self; //@line 2499 "_elementtree.c"
        var $54=$53; //@line 2499 "_elementtree.c"
        _PyObject_Free($54); //@line 2499 "_elementtree.c"
        var $55=_PyErr_NoMemory(); //@line 2500 "_elementtree.c"
        $0=0; //@line 2501 "_elementtree.c"
        __label__ = 21; break; //@line 2501 "_elementtree.c"
      case 12: // $bb11
        var $56=HEAP[$target]; //@line 2505 "_elementtree.c"
        var $57=($56)==0; //@line 2505 "_elementtree.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2505 "_elementtree.c"
      case 13: // $bb12
        var $58=_treebuilder_new(); //@line 2506 "_elementtree.c"
        HEAP[$target]=$58; //@line 2506 "_elementtree.c"
        var $59=HEAP[$target]; //@line 2507 "_elementtree.c"
        var $60=($59)==0; //@line 2507 "_elementtree.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2507 "_elementtree.c"
      case 14: // $bb13
        var $61=HEAP[_expat_capi]; //@line 2508 "_elementtree.c"
        var $62=$61+44; //@line 2508 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2508 "_elementtree.c"
        var $64=$self; //@line 2508 "_elementtree.c"
        var $65=$64+8; //@line 2508 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2508 "_elementtree.c"
        FUNCTION_TABLE[$63]($66); //@line 2508 "_elementtree.c"
        var $67=$self; //@line 2509 "_elementtree.c"
        var $68=$67+20; //@line 2509 "_elementtree.c"
        var $69=HEAP[$68]; //@line 2509 "_elementtree.c"
        var $70=$69; //@line 2509 "_elementtree.c"
        _PyObject_Free($70); //@line 2509 "_elementtree.c"
        var $71=$self; //@line 2510 "_elementtree.c"
        var $72=$71+16; //@line 2510 "_elementtree.c"
        var $73=HEAP[$72]; //@line 2510 "_elementtree.c"
        var $74=$73; //@line 2510 "_elementtree.c"
        _PyObject_Free($74); //@line 2510 "_elementtree.c"
        var $75=$self; //@line 2511 "_elementtree.c"
        var $76=$75; //@line 2511 "_elementtree.c"
        _PyObject_Free($76); //@line 2511 "_elementtree.c"
        $0=0; //@line 2512 "_elementtree.c"
        __label__ = 21; break; //@line 2512 "_elementtree.c"
      case 15: // $bb15
        var $77=HEAP[$target]; //@line 2515 "_elementtree.c"
        var $78=$77; //@line 2515 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2515 "_elementtree.c"
        var $80=($79) + 1; //@line 2515 "_elementtree.c"
        var $81=$77; //@line 2515 "_elementtree.c"
        HEAP[$81]=$80; //@line 2515 "_elementtree.c"
        __label__ = 16; break; //@line 2515 "_elementtree.c"
      case 16: // $bb16
        var $82=HEAP[$target]; //@line 2516 "_elementtree.c"
        var $83=$self; //@line 2516 "_elementtree.c"
        var $84=$83+12; //@line 2516 "_elementtree.c"
        HEAP[$84]=$82; //@line 2516 "_elementtree.c"
        var $85=HEAP[$target]; //@line 2518 "_elementtree.c"
        var $86=_PyObject_GetAttrString($85, __str77); //@line 2518 "_elementtree.c"
        var $87=$self; //@line 2518 "_elementtree.c"
        var $88=$87+24; //@line 2518 "_elementtree.c"
        HEAP[$88]=$86; //@line 2518 "_elementtree.c"
        var $89=HEAP[$target]; //@line 2519 "_elementtree.c"
        var $90=_PyObject_GetAttrString($89, __str75); //@line 2519 "_elementtree.c"
        var $91=$self; //@line 2519 "_elementtree.c"
        var $92=$91+28; //@line 2519 "_elementtree.c"
        HEAP[$92]=$90; //@line 2519 "_elementtree.c"
        var $93=HEAP[$target]; //@line 2520 "_elementtree.c"
        var $94=_PyObject_GetAttrString($93, __str74); //@line 2520 "_elementtree.c"
        var $95=$self; //@line 2520 "_elementtree.c"
        var $96=$95+32; //@line 2520 "_elementtree.c"
        HEAP[$96]=$94; //@line 2520 "_elementtree.c"
        var $97=HEAP[$target]; //@line 2521 "_elementtree.c"
        var $98=_PyObject_GetAttrString($97, __str76); //@line 2521 "_elementtree.c"
        var $99=$self; //@line 2521 "_elementtree.c"
        var $100=$99+36; //@line 2521 "_elementtree.c"
        HEAP[$100]=$98; //@line 2521 "_elementtree.c"
        var $101=HEAP[$target]; //@line 2522 "_elementtree.c"
        var $102=_PyObject_GetAttrString($101, __str93); //@line 2522 "_elementtree.c"
        var $103=$self; //@line 2522 "_elementtree.c"
        var $104=$103+40; //@line 2522 "_elementtree.c"
        HEAP[$104]=$102; //@line 2522 "_elementtree.c"
        var $105=HEAP[$target]; //@line 2523 "_elementtree.c"
        var $106=_PyObject_GetAttrString($105, __str94); //@line 2523 "_elementtree.c"
        var $107=$self; //@line 2523 "_elementtree.c"
        var $108=$107+44; //@line 2523 "_elementtree.c"
        HEAP[$108]=$106; //@line 2523 "_elementtree.c"
        var $109=HEAP[$target]; //@line 2524 "_elementtree.c"
        var $110=_PyObject_GetAttrString($109, __str78); //@line 2524 "_elementtree.c"
        var $111=$self; //@line 2524 "_elementtree.c"
        var $112=$111+48; //@line 2524 "_elementtree.c"
        HEAP[$112]=$110; //@line 2524 "_elementtree.c"
        _PyErr_Clear(); //@line 2526 "_elementtree.c"
        var $113=HEAP[_expat_capi]; //@line 2529 "_elementtree.c"
        var $114=$113+76; //@line 2529 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2529 "_elementtree.c"
        var $116=$self; //@line 2529 "_elementtree.c"
        var $117=$116+8; //@line 2529 "_elementtree.c"
        var $118=HEAP[$117]; //@line 2529 "_elementtree.c"
        var $119=$self; //@line 2529 "_elementtree.c"
        var $120=$119; //@line 2529 "_elementtree.c"
        FUNCTION_TABLE[$115]($118, $120); //@line 2529 "_elementtree.c"
        var $121=HEAP[_expat_capi]; //@line 2530 "_elementtree.c"
        var $122=$121+60; //@line 2530 "_elementtree.c"
        var $123=HEAP[$122]; //@line 2530 "_elementtree.c"
        var $124=$self; //@line 2530 "_elementtree.c"
        var $125=$124+8; //@line 2530 "_elementtree.c"
        var $126=HEAP[$125]; //@line 2530 "_elementtree.c"
        FUNCTION_TABLE[$123]($126, (FUNCTION_TABLE_OFFSET + 8), (FUNCTION_TABLE_OFFSET + 10)); //@line 2530 "_elementtree.c"
        var $127=HEAP[_expat_capi]; //@line 2535 "_elementtree.c"
        var $128=$127+56; //@line 2535 "_elementtree.c"
        var $129=HEAP[$128]; //@line 2535 "_elementtree.c"
        var $130=$self; //@line 2535 "_elementtree.c"
        var $131=$130+8; //@line 2535 "_elementtree.c"
        var $132=HEAP[$131]; //@line 2535 "_elementtree.c"
        FUNCTION_TABLE[$129]($132, (FUNCTION_TABLE_OFFSET + 12)); //@line 2535 "_elementtree.c"
        var $133=HEAP[_expat_capi]; //@line 2539 "_elementtree.c"
        var $134=$133+48; //@line 2539 "_elementtree.c"
        var $135=HEAP[$134]; //@line 2539 "_elementtree.c"
        var $136=$self; //@line 2539 "_elementtree.c"
        var $137=$136+8; //@line 2539 "_elementtree.c"
        var $138=HEAP[$137]; //@line 2539 "_elementtree.c"
        FUNCTION_TABLE[$135]($138, (FUNCTION_TABLE_OFFSET + 14)); //@line 2539 "_elementtree.c"
        var $139=$self; //@line 2543 "_elementtree.c"
        var $140=$139+40; //@line 2543 "_elementtree.c"
        var $141=HEAP[$140]; //@line 2543 "_elementtree.c"
        var $142=($141)!=0; //@line 2543 "_elementtree.c"
        if ($142) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2543 "_elementtree.c"
      case 17: // $bb17
        var $143=HEAP[_expat_capi]; //@line 2544 "_elementtree.c"
        var $144=$143+52; //@line 2544 "_elementtree.c"
        var $145=HEAP[$144]; //@line 2544 "_elementtree.c"
        var $146=$self; //@line 2544 "_elementtree.c"
        var $147=$146+8; //@line 2544 "_elementtree.c"
        var $148=HEAP[$147]; //@line 2544 "_elementtree.c"
        FUNCTION_TABLE[$145]($148, (FUNCTION_TABLE_OFFSET + 16)); //@line 2544 "_elementtree.c"
        __label__ = 18; break; //@line 2544 "_elementtree.c"
      case 18: // $bb18
        var $149=$self; //@line 2548 "_elementtree.c"
        var $150=$149+44; //@line 2548 "_elementtree.c"
        var $151=HEAP[$150]; //@line 2548 "_elementtree.c"
        var $152=($151)!=0; //@line 2548 "_elementtree.c"
        if ($152) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2548 "_elementtree.c"
      case 19: // $bb19
        var $153=HEAP[_expat_capi]; //@line 2549 "_elementtree.c"
        var $154=$153+68; //@line 2549 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2549 "_elementtree.c"
        var $156=$self; //@line 2549 "_elementtree.c"
        var $157=$156+8; //@line 2549 "_elementtree.c"
        var $158=HEAP[$157]; //@line 2549 "_elementtree.c"
        FUNCTION_TABLE[$155]($158, (FUNCTION_TABLE_OFFSET + 18)); //@line 2549 "_elementtree.c"
        __label__ = 20; break; //@line 2549 "_elementtree.c"
      case 20: // $bb20
        var $159=HEAP[_expat_capi]; //@line 2554 "_elementtree.c"
        var $160=$159+72; //@line 2554 "_elementtree.c"
        var $161=HEAP[$160]; //@line 2554 "_elementtree.c"
        var $162=$self; //@line 2554 "_elementtree.c"
        var $163=$162+8; //@line 2554 "_elementtree.c"
        var $164=HEAP[$163]; //@line 2554 "_elementtree.c"
        FUNCTION_TABLE[$161]($164, (FUNCTION_TABLE_OFFSET + 20), 0); //@line 2554 "_elementtree.c"
        var $165=$self; //@line 2562 "_elementtree.c"
        var $166=$165; //@line 2562 "_elementtree.c"
        $0=$166; //@line 2562 "_elementtree.c"
        __label__ = 21; break; //@line 2562 "_elementtree.c"
      case 21: // $bb21
        var $167=$0; //@line 2463 "_elementtree.c"
        $retval=$167; //@line 2463 "_elementtree.c"
        var $retval22=$retval; //@line 2463 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 2463 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=HEAP[_expat_capi]; //@line 2568 "_elementtree.c"
        var $1=$0+44; //@line 2568 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2568 "_elementtree.c"
        var $3=$self_addr; //@line 2568 "_elementtree.c"
        var $4=$3+8; //@line 2568 "_elementtree.c"
        var $5=HEAP[$4]; //@line 2568 "_elementtree.c"
        FUNCTION_TABLE[$2]($5); //@line 2568 "_elementtree.c"
        var $6=$self_addr; //@line 2570 "_elementtree.c"
        var $7=$6+48; //@line 2570 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2570 "_elementtree.c"
        var $9=($8)!=0; //@line 2570 "_elementtree.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2570 "_elementtree.c"
      case 1: // $bb
        var $10=$self_addr; //@line 2570 "_elementtree.c"
        var $11=$10+48; //@line 2570 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2570 "_elementtree.c"
        var $13=$12; //@line 2570 "_elementtree.c"
        var $14=HEAP[$13]; //@line 2570 "_elementtree.c"
        var $15=($14) - 1; //@line 2570 "_elementtree.c"
        var $16=$12; //@line 2570 "_elementtree.c"
        HEAP[$16]=$15; //@line 2570 "_elementtree.c"
        var $17=$12; //@line 2570 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2570 "_elementtree.c"
        var $19=($18)==0; //@line 2570 "_elementtree.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2570 "_elementtree.c"
      case 2: // $bb1
        var $20=$self_addr; //@line 2570 "_elementtree.c"
        var $21=$20+48; //@line 2570 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2570 "_elementtree.c"
        var $23=$22+4; //@line 2570 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2570 "_elementtree.c"
        var $25=$24+24; //@line 2570 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2570 "_elementtree.c"
        var $27=$self_addr; //@line 2570 "_elementtree.c"
        var $28=$27+48; //@line 2570 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2570 "_elementtree.c"
        FUNCTION_TABLE[$26]($29); //@line 2570 "_elementtree.c"
        __label__ = 3; break; //@line 2570 "_elementtree.c"
      case 3: // $bb2
        var $30=$self_addr; //@line 2571 "_elementtree.c"
        var $31=$30+44; //@line 2571 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2571 "_elementtree.c"
        var $33=($32)!=0; //@line 2571 "_elementtree.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2571 "_elementtree.c"
      case 4: // $bb3
        var $34=$self_addr; //@line 2571 "_elementtree.c"
        var $35=$34+44; //@line 2571 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2571 "_elementtree.c"
        var $37=$36; //@line 2571 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2571 "_elementtree.c"
        var $39=($38) - 1; //@line 2571 "_elementtree.c"
        var $40=$36; //@line 2571 "_elementtree.c"
        HEAP[$40]=$39; //@line 2571 "_elementtree.c"
        var $41=$36; //@line 2571 "_elementtree.c"
        var $42=HEAP[$41]; //@line 2571 "_elementtree.c"
        var $43=($42)==0; //@line 2571 "_elementtree.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2571 "_elementtree.c"
      case 5: // $bb4
        var $44=$self_addr; //@line 2571 "_elementtree.c"
        var $45=$44+44; //@line 2571 "_elementtree.c"
        var $46=HEAP[$45]; //@line 2571 "_elementtree.c"
        var $47=$46+4; //@line 2571 "_elementtree.c"
        var $48=HEAP[$47]; //@line 2571 "_elementtree.c"
        var $49=$48+24; //@line 2571 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2571 "_elementtree.c"
        var $51=$self_addr; //@line 2571 "_elementtree.c"
        var $52=$51+44; //@line 2571 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2571 "_elementtree.c"
        FUNCTION_TABLE[$50]($53); //@line 2571 "_elementtree.c"
        __label__ = 6; break; //@line 2571 "_elementtree.c"
      case 6: // $bb5
        var $54=$self_addr; //@line 2572 "_elementtree.c"
        var $55=$54+40; //@line 2572 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2572 "_elementtree.c"
        var $57=($56)!=0; //@line 2572 "_elementtree.c"
        if ($57) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2572 "_elementtree.c"
      case 7: // $bb6
        var $58=$self_addr; //@line 2572 "_elementtree.c"
        var $59=$58+40; //@line 2572 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2572 "_elementtree.c"
        var $61=$60; //@line 2572 "_elementtree.c"
        var $62=HEAP[$61]; //@line 2572 "_elementtree.c"
        var $63=($62) - 1; //@line 2572 "_elementtree.c"
        var $64=$60; //@line 2572 "_elementtree.c"
        HEAP[$64]=$63; //@line 2572 "_elementtree.c"
        var $65=$60; //@line 2572 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2572 "_elementtree.c"
        var $67=($66)==0; //@line 2572 "_elementtree.c"
        if ($67) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2572 "_elementtree.c"
      case 8: // $bb7
        var $68=$self_addr; //@line 2572 "_elementtree.c"
        var $69=$68+40; //@line 2572 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2572 "_elementtree.c"
        var $71=$70+4; //@line 2572 "_elementtree.c"
        var $72=HEAP[$71]; //@line 2572 "_elementtree.c"
        var $73=$72+24; //@line 2572 "_elementtree.c"
        var $74=HEAP[$73]; //@line 2572 "_elementtree.c"
        var $75=$self_addr; //@line 2572 "_elementtree.c"
        var $76=$75+40; //@line 2572 "_elementtree.c"
        var $77=HEAP[$76]; //@line 2572 "_elementtree.c"
        FUNCTION_TABLE[$74]($77); //@line 2572 "_elementtree.c"
        __label__ = 9; break; //@line 2572 "_elementtree.c"
      case 9: // $bb8
        var $78=$self_addr; //@line 2573 "_elementtree.c"
        var $79=$78+36; //@line 2573 "_elementtree.c"
        var $80=HEAP[$79]; //@line 2573 "_elementtree.c"
        var $81=($80)!=0; //@line 2573 "_elementtree.c"
        if ($81) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2573 "_elementtree.c"
      case 10: // $bb9
        var $82=$self_addr; //@line 2573 "_elementtree.c"
        var $83=$82+36; //@line 2573 "_elementtree.c"
        var $84=HEAP[$83]; //@line 2573 "_elementtree.c"
        var $85=$84; //@line 2573 "_elementtree.c"
        var $86=HEAP[$85]; //@line 2573 "_elementtree.c"
        var $87=($86) - 1; //@line 2573 "_elementtree.c"
        var $88=$84; //@line 2573 "_elementtree.c"
        HEAP[$88]=$87; //@line 2573 "_elementtree.c"
        var $89=$84; //@line 2573 "_elementtree.c"
        var $90=HEAP[$89]; //@line 2573 "_elementtree.c"
        var $91=($90)==0; //@line 2573 "_elementtree.c"
        if ($91) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2573 "_elementtree.c"
      case 11: // $bb10
        var $92=$self_addr; //@line 2573 "_elementtree.c"
        var $93=$92+36; //@line 2573 "_elementtree.c"
        var $94=HEAP[$93]; //@line 2573 "_elementtree.c"
        var $95=$94+4; //@line 2573 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2573 "_elementtree.c"
        var $97=$96+24; //@line 2573 "_elementtree.c"
        var $98=HEAP[$97]; //@line 2573 "_elementtree.c"
        var $99=$self_addr; //@line 2573 "_elementtree.c"
        var $100=$99+36; //@line 2573 "_elementtree.c"
        var $101=HEAP[$100]; //@line 2573 "_elementtree.c"
        FUNCTION_TABLE[$98]($101); //@line 2573 "_elementtree.c"
        __label__ = 12; break; //@line 2573 "_elementtree.c"
      case 12: // $bb11
        var $102=$self_addr; //@line 2574 "_elementtree.c"
        var $103=$102+32; //@line 2574 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2574 "_elementtree.c"
        var $105=($104)!=0; //@line 2574 "_elementtree.c"
        if ($105) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2574 "_elementtree.c"
      case 13: // $bb12
        var $106=$self_addr; //@line 2574 "_elementtree.c"
        var $107=$106+32; //@line 2574 "_elementtree.c"
        var $108=HEAP[$107]; //@line 2574 "_elementtree.c"
        var $109=$108; //@line 2574 "_elementtree.c"
        var $110=HEAP[$109]; //@line 2574 "_elementtree.c"
        var $111=($110) - 1; //@line 2574 "_elementtree.c"
        var $112=$108; //@line 2574 "_elementtree.c"
        HEAP[$112]=$111; //@line 2574 "_elementtree.c"
        var $113=$108; //@line 2574 "_elementtree.c"
        var $114=HEAP[$113]; //@line 2574 "_elementtree.c"
        var $115=($114)==0; //@line 2574 "_elementtree.c"
        if ($115) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2574 "_elementtree.c"
      case 14: // $bb13
        var $116=$self_addr; //@line 2574 "_elementtree.c"
        var $117=$116+32; //@line 2574 "_elementtree.c"
        var $118=HEAP[$117]; //@line 2574 "_elementtree.c"
        var $119=$118+4; //@line 2574 "_elementtree.c"
        var $120=HEAP[$119]; //@line 2574 "_elementtree.c"
        var $121=$120+24; //@line 2574 "_elementtree.c"
        var $122=HEAP[$121]; //@line 2574 "_elementtree.c"
        var $123=$self_addr; //@line 2574 "_elementtree.c"
        var $124=$123+32; //@line 2574 "_elementtree.c"
        var $125=HEAP[$124]; //@line 2574 "_elementtree.c"
        FUNCTION_TABLE[$122]($125); //@line 2574 "_elementtree.c"
        __label__ = 15; break; //@line 2574 "_elementtree.c"
      case 15: // $bb14
        var $126=$self_addr; //@line 2575 "_elementtree.c"
        var $127=$126+28; //@line 2575 "_elementtree.c"
        var $128=HEAP[$127]; //@line 2575 "_elementtree.c"
        var $129=($128)!=0; //@line 2575 "_elementtree.c"
        if ($129) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2575 "_elementtree.c"
      case 16: // $bb15
        var $130=$self_addr; //@line 2575 "_elementtree.c"
        var $131=$130+28; //@line 2575 "_elementtree.c"
        var $132=HEAP[$131]; //@line 2575 "_elementtree.c"
        var $133=$132; //@line 2575 "_elementtree.c"
        var $134=HEAP[$133]; //@line 2575 "_elementtree.c"
        var $135=($134) - 1; //@line 2575 "_elementtree.c"
        var $136=$132; //@line 2575 "_elementtree.c"
        HEAP[$136]=$135; //@line 2575 "_elementtree.c"
        var $137=$132; //@line 2575 "_elementtree.c"
        var $138=HEAP[$137]; //@line 2575 "_elementtree.c"
        var $139=($138)==0; //@line 2575 "_elementtree.c"
        if ($139) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2575 "_elementtree.c"
      case 17: // $bb16
        var $140=$self_addr; //@line 2575 "_elementtree.c"
        var $141=$140+28; //@line 2575 "_elementtree.c"
        var $142=HEAP[$141]; //@line 2575 "_elementtree.c"
        var $143=$142+4; //@line 2575 "_elementtree.c"
        var $144=HEAP[$143]; //@line 2575 "_elementtree.c"
        var $145=$144+24; //@line 2575 "_elementtree.c"
        var $146=HEAP[$145]; //@line 2575 "_elementtree.c"
        var $147=$self_addr; //@line 2575 "_elementtree.c"
        var $148=$147+28; //@line 2575 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2575 "_elementtree.c"
        FUNCTION_TABLE[$146]($149); //@line 2575 "_elementtree.c"
        __label__ = 18; break; //@line 2575 "_elementtree.c"
      case 18: // $bb17
        var $150=$self_addr; //@line 2576 "_elementtree.c"
        var $151=$150+24; //@line 2576 "_elementtree.c"
        var $152=HEAP[$151]; //@line 2576 "_elementtree.c"
        var $153=($152)!=0; //@line 2576 "_elementtree.c"
        if ($153) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2576 "_elementtree.c"
      case 19: // $bb18
        var $154=$self_addr; //@line 2576 "_elementtree.c"
        var $155=$154+24; //@line 2576 "_elementtree.c"
        var $156=HEAP[$155]; //@line 2576 "_elementtree.c"
        var $157=$156; //@line 2576 "_elementtree.c"
        var $158=HEAP[$157]; //@line 2576 "_elementtree.c"
        var $159=($158) - 1; //@line 2576 "_elementtree.c"
        var $160=$156; //@line 2576 "_elementtree.c"
        HEAP[$160]=$159; //@line 2576 "_elementtree.c"
        var $161=$156; //@line 2576 "_elementtree.c"
        var $162=HEAP[$161]; //@line 2576 "_elementtree.c"
        var $163=($162)==0; //@line 2576 "_elementtree.c"
        if ($163) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2576 "_elementtree.c"
      case 20: // $bb19
        var $164=$self_addr; //@line 2576 "_elementtree.c"
        var $165=$164+24; //@line 2576 "_elementtree.c"
        var $166=HEAP[$165]; //@line 2576 "_elementtree.c"
        var $167=$166+4; //@line 2576 "_elementtree.c"
        var $168=HEAP[$167]; //@line 2576 "_elementtree.c"
        var $169=$168+24; //@line 2576 "_elementtree.c"
        var $170=HEAP[$169]; //@line 2576 "_elementtree.c"
        var $171=$self_addr; //@line 2576 "_elementtree.c"
        var $172=$171+24; //@line 2576 "_elementtree.c"
        var $173=HEAP[$172]; //@line 2576 "_elementtree.c"
        FUNCTION_TABLE[$170]($173); //@line 2576 "_elementtree.c"
        __label__ = 21; break; //@line 2576 "_elementtree.c"
      case 21: // $bb20
        var $174=$self_addr; //@line 2578 "_elementtree.c"
        var $175=$174+12; //@line 2578 "_elementtree.c"
        var $176=HEAP[$175]; //@line 2578 "_elementtree.c"
        var $177=$176; //@line 2578 "_elementtree.c"
        var $178=HEAP[$177]; //@line 2578 "_elementtree.c"
        var $179=($178) - 1; //@line 2578 "_elementtree.c"
        var $180=$176; //@line 2578 "_elementtree.c"
        HEAP[$180]=$179; //@line 2578 "_elementtree.c"
        var $181=$176; //@line 2578 "_elementtree.c"
        var $182=HEAP[$181]; //@line 2578 "_elementtree.c"
        var $183=($182)==0; //@line 2578 "_elementtree.c"
        if ($183) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2578 "_elementtree.c"
      case 22: // $bb21
        var $184=$self_addr; //@line 2578 "_elementtree.c"
        var $185=$184+12; //@line 2578 "_elementtree.c"
        var $186=HEAP[$185]; //@line 2578 "_elementtree.c"
        var $187=$186+4; //@line 2578 "_elementtree.c"
        var $188=HEAP[$187]; //@line 2578 "_elementtree.c"
        var $189=$188+24; //@line 2578 "_elementtree.c"
        var $190=HEAP[$189]; //@line 2578 "_elementtree.c"
        var $191=$self_addr; //@line 2578 "_elementtree.c"
        var $192=$191+12; //@line 2578 "_elementtree.c"
        var $193=HEAP[$192]; //@line 2578 "_elementtree.c"
        FUNCTION_TABLE[$190]($193); //@line 2578 "_elementtree.c"
        __label__ = 23; break; //@line 2578 "_elementtree.c"
      case 23: // $bb22
        var $194=$self_addr; //@line 2579 "_elementtree.c"
        var $195=$194+16; //@line 2579 "_elementtree.c"
        var $196=HEAP[$195]; //@line 2579 "_elementtree.c"
        var $197=$196; //@line 2579 "_elementtree.c"
        var $198=HEAP[$197]; //@line 2579 "_elementtree.c"
        var $199=($198) - 1; //@line 2579 "_elementtree.c"
        var $200=$196; //@line 2579 "_elementtree.c"
        HEAP[$200]=$199; //@line 2579 "_elementtree.c"
        var $201=$196; //@line 2579 "_elementtree.c"
        var $202=HEAP[$201]; //@line 2579 "_elementtree.c"
        var $203=($202)==0; //@line 2579 "_elementtree.c"
        if ($203) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2579 "_elementtree.c"
      case 24: // $bb23
        var $204=$self_addr; //@line 2579 "_elementtree.c"
        var $205=$204+16; //@line 2579 "_elementtree.c"
        var $206=HEAP[$205]; //@line 2579 "_elementtree.c"
        var $207=$206+4; //@line 2579 "_elementtree.c"
        var $208=HEAP[$207]; //@line 2579 "_elementtree.c"
        var $209=$208+24; //@line 2579 "_elementtree.c"
        var $210=HEAP[$209]; //@line 2579 "_elementtree.c"
        var $211=$self_addr; //@line 2579 "_elementtree.c"
        var $212=$211+16; //@line 2579 "_elementtree.c"
        var $213=HEAP[$212]; //@line 2579 "_elementtree.c"
        FUNCTION_TABLE[$210]($213); //@line 2579 "_elementtree.c"
        __label__ = 25; break; //@line 2579 "_elementtree.c"
      case 25: // $bb24
        var $214=$self_addr; //@line 2580 "_elementtree.c"
        var $215=$214+20; //@line 2580 "_elementtree.c"
        var $216=HEAP[$215]; //@line 2580 "_elementtree.c"
        var $217=$216; //@line 2580 "_elementtree.c"
        var $218=HEAP[$217]; //@line 2580 "_elementtree.c"
        var $219=($218) - 1; //@line 2580 "_elementtree.c"
        var $220=$216; //@line 2580 "_elementtree.c"
        HEAP[$220]=$219; //@line 2580 "_elementtree.c"
        var $221=$216; //@line 2580 "_elementtree.c"
        var $222=HEAP[$221]; //@line 2580 "_elementtree.c"
        var $223=($222)==0; //@line 2580 "_elementtree.c"
        if ($223) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2580 "_elementtree.c"
      case 26: // $bb25
        var $224=$self_addr; //@line 2580 "_elementtree.c"
        var $225=$224+20; //@line 2580 "_elementtree.c"
        var $226=HEAP[$225]; //@line 2580 "_elementtree.c"
        var $227=$226+4; //@line 2580 "_elementtree.c"
        var $228=HEAP[$227]; //@line 2580 "_elementtree.c"
        var $229=$228+24; //@line 2580 "_elementtree.c"
        var $230=HEAP[$229]; //@line 2580 "_elementtree.c"
        var $231=$self_addr; //@line 2580 "_elementtree.c"
        var $232=$231+20; //@line 2580 "_elementtree.c"
        var $233=HEAP[$232]; //@line 2580 "_elementtree.c"
        FUNCTION_TABLE[$230]($233); //@line 2580 "_elementtree.c"
        __label__ = 27; break; //@line 2580 "_elementtree.c"
      case 27: // $bb26
        var $234=$self_addr; //@line 2584 "_elementtree.c"
        var $235=$234; //@line 2584 "_elementtree.c"
        _PyObject_Free($235); //@line 2584 "_elementtree.c"
        ;
        return; //@line 2585 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_parse($self, $data, $data_len, $final) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $data_addr;
        var $data_len_addr;
        var $final_addr;
        var $retval;
        var $0;
        var $ok;
        $self_addr=$self;
        $data_addr=$data;
        $data_len_addr=$data_len;
        $final_addr=$final;
        var $1=HEAP[_expat_capi]; //@line 2595 "_elementtree.c"
        var $2=$1+36; //@line 2595 "_elementtree.c"
        var $3=HEAP[$2]; //@line 2595 "_elementtree.c"
        var $4=$self_addr; //@line 2595 "_elementtree.c"
        var $5=$4+8; //@line 2595 "_elementtree.c"
        var $6=HEAP[$5]; //@line 2595 "_elementtree.c"
        var $7=$data_addr; //@line 2595 "_elementtree.c"
        var $8=$data_len_addr; //@line 2595 "_elementtree.c"
        var $9=$final_addr; //@line 2595 "_elementtree.c"
        var $10=FUNCTION_TABLE[$3]($6, $7, $8, $9); //@line 2595 "_elementtree.c"
        $ok=$10; //@line 2595 "_elementtree.c"
        var $11=_PyErr_Occurred(); //@line 2597 "_elementtree.c"
        var $12=($11)!=0; //@line 2597 "_elementtree.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2597 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2598 "_elementtree.c"
        __label__ = 5; break; //@line 2598 "_elementtree.c"
      case 2: // $bb1
        var $13=$ok; //@line 2600 "_elementtree.c"
        var $14=($13)==0; //@line 2600 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2600 "_elementtree.c"
      case 3: // $bb2
        var $15=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $16=$15+28; //@line 2601 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2601 "_elementtree.c"
        var $18=$self_addr; //@line 2601 "_elementtree.c"
        var $19=$18+8; //@line 2601 "_elementtree.c"
        var $20=HEAP[$19]; //@line 2601 "_elementtree.c"
        var $21=FUNCTION_TABLE[$17]($20); //@line 2601 "_elementtree.c"
        var $22=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $23=$22+32; //@line 2601 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2601 "_elementtree.c"
        var $25=$self_addr; //@line 2601 "_elementtree.c"
        var $26=$25+8; //@line 2601 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2601 "_elementtree.c"
        var $28=FUNCTION_TABLE[$24]($27); //@line 2601 "_elementtree.c"
        var $29=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $30=$29+20; //@line 2601 "_elementtree.c"
        var $31=HEAP[$30]; //@line 2601 "_elementtree.c"
        var $32=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $33=$32+24; //@line 2601 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2601 "_elementtree.c"
        var $35=$self_addr; //@line 2601 "_elementtree.c"
        var $36=$35+8; //@line 2601 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2601 "_elementtree.c"
        var $38=FUNCTION_TABLE[$34]($37); //@line 2601 "_elementtree.c"
        var $39=FUNCTION_TABLE[$31]($38); //@line 2601 "_elementtree.c"
        _expat_set_error($39, $28, $21); //@line 2601 "_elementtree.c"
        $0=0; //@line 2606 "_elementtree.c"
        __label__ = 5; break; //@line 2606 "_elementtree.c"
      case 4: // $bb3
        var $40=HEAP[__Py_NoneStruct]; //@line 2609 "_elementtree.c"
        var $41=($40) + 1; //@line 2609 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$41; //@line 2609 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 2609 "_elementtree.c"
        __label__ = 5; break; //@line 2609 "_elementtree.c"
      case 5: // $bb4
        var $42=$0; //@line 2598 "_elementtree.c"
        $retval=$42; //@line 2598 "_elementtree.c"
        var $retval5=$retval; //@line 2598 "_elementtree.c"
        ;
        return $retval5; //@line 2598 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_close($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $res;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 2618 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str71, allocate(1, "i32", ALLOC_STACK)); //@line 2618 "_elementtree.c"
        var $3=($2)==0; //@line 2618 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2618 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2619 "_elementtree.c"
        __label__ = 13; break; //@line 2619 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 2621 "_elementtree.c"
        var $5=_expat_parse($4, __str1, 0, 1); //@line 2621 "_elementtree.c"
        $res=$5; //@line 2621 "_elementtree.c"
        var $6=$res; //@line 2622 "_elementtree.c"
        var $7=($6)==0; //@line 2622 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2622 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 2623 "_elementtree.c"
        __label__ = 13; break; //@line 2623 "_elementtree.c"
      case 4: // $bb3
        var $8=$self_addr; //@line 2625 "_elementtree.c"
        var $9=$8+12; //@line 2625 "_elementtree.c"
        var $10=HEAP[$9]; //@line 2625 "_elementtree.c"
        var $11=$10+4; //@line 2625 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2625 "_elementtree.c"
        var $13=($12)==(_TreeBuilder_Type); //@line 2625 "_elementtree.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2625 "_elementtree.c"
      case 5: // $bb4
        var $14=$res; //@line 2626 "_elementtree.c"
        var $15=$14; //@line 2626 "_elementtree.c"
        var $16=HEAP[$15]; //@line 2626 "_elementtree.c"
        var $17=($16) - 1; //@line 2626 "_elementtree.c"
        var $18=$res; //@line 2626 "_elementtree.c"
        var $19=$18; //@line 2626 "_elementtree.c"
        HEAP[$19]=$17; //@line 2626 "_elementtree.c"
        var $20=$res; //@line 2626 "_elementtree.c"
        var $21=$20; //@line 2626 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2626 "_elementtree.c"
        var $23=($22)==0; //@line 2626 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2626 "_elementtree.c"
      case 6: // $bb5
        var $24=$res; //@line 2626 "_elementtree.c"
        var $25=$24+4; //@line 2626 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2626 "_elementtree.c"
        var $27=$26+24; //@line 2626 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2626 "_elementtree.c"
        var $29=$res; //@line 2626 "_elementtree.c"
        FUNCTION_TABLE[$28]($29); //@line 2626 "_elementtree.c"
        __label__ = 7; break; //@line 2626 "_elementtree.c"
      case 7: // $bb6
        var $30=$self_addr; //@line 2627 "_elementtree.c"
        var $31=$30+12; //@line 2627 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2627 "_elementtree.c"
        var $33=$32; //@line 2627 "_elementtree.c"
        var $34=_treebuilder_done($33); //@line 2627 "_elementtree.c"
        $0=$34; //@line 2627 "_elementtree.c"
        __label__ = 13; break; //@line 2627 "_elementtree.c"
      case 8: // $bb7
        var $35=$self_addr; //@line 2628 "_elementtree.c"
        var $36=$35+48; //@line 2628 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2628 "_elementtree.c"
        var $38=($37)!=0; //@line 2628 "_elementtree.c"
        var $39=$res; //@line 2629 "_elementtree.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 2628 "_elementtree.c"
      case 9: // $bb8
        var $40=$39; //@line 2629 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2629 "_elementtree.c"
        var $42=($41) - 1; //@line 2629 "_elementtree.c"
        var $43=$res; //@line 2629 "_elementtree.c"
        var $44=$43; //@line 2629 "_elementtree.c"
        HEAP[$44]=$42; //@line 2629 "_elementtree.c"
        var $45=$res; //@line 2629 "_elementtree.c"
        var $46=$45; //@line 2629 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2629 "_elementtree.c"
        var $48=($47)==0; //@line 2629 "_elementtree.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2629 "_elementtree.c"
      case 10: // $bb9
        var $49=$res; //@line 2629 "_elementtree.c"
        var $50=$49+4; //@line 2629 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2629 "_elementtree.c"
        var $52=$51+24; //@line 2629 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2629 "_elementtree.c"
        var $54=$res; //@line 2629 "_elementtree.c"
        FUNCTION_TABLE[$53]($54); //@line 2629 "_elementtree.c"
        __label__ = 11; break; //@line 2629 "_elementtree.c"
      case 11: // $bb10
        var $55=$self_addr; //@line 2630 "_elementtree.c"
        var $56=$55+48; //@line 2630 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2630 "_elementtree.c"
        var $58=_PyObject_CallFunction($57, __str1, allocate(1, "i32", ALLOC_STACK)); //@line 2630 "_elementtree.c"
        $0=$58; //@line 2630 "_elementtree.c"
        __label__ = 13; break; //@line 2630 "_elementtree.c"
      case 12: // $bb11
        $0=$39; //@line 2632 "_elementtree.c"
        __label__ = 13; break; //@line 2632 "_elementtree.c"
      case 13: // $bb12
        var $59=$0; //@line 2619 "_elementtree.c"
        $retval=$59; //@line 2619 "_elementtree.c"
        var $retval13=$retval; //@line 2619 "_elementtree.c"
        ;
        return $retval13; //@line 2619 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_feed($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $data=__stackBase__;
        var $data_len=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 2642 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str95, allocate([$data,0,0,0,$data_len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2642 "_elementtree.c"
        var $3=($2)==0; //@line 2642 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2642 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2643 "_elementtree.c"
        __label__ = 3; break; //@line 2643 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$data_len]; //@line 2645 "_elementtree.c"
        var $5=HEAP[$data]; //@line 2645 "_elementtree.c"
        var $6=$self_addr; //@line 2645 "_elementtree.c"
        var $7=_expat_parse($6, $5, $4, 0); //@line 2645 "_elementtree.c"
        $0=$7; //@line 2645 "_elementtree.c"
        __label__ = 3; break; //@line 2645 "_elementtree.c"
      case 3: // $bb2
        var $8=$0; //@line 2643 "_elementtree.c"
        $retval=$8; //@line 2643 "_elementtree.c"
        var $retval3=$retval; //@line 2643 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 2643 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_parse($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $reader;
        var $buffer;
        var $res;
        var $fileobj=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 2658 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str96, allocate([$fileobj,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2658 "_elementtree.c"
        var $3=($2)==0; //@line 2658 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2658 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2659 "_elementtree.c"
        __label__ = 28; break; //@line 2659 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$fileobj]; //@line 2661 "_elementtree.c"
        var $5=_PyObject_GetAttrString($4, __str97); //@line 2661 "_elementtree.c"
        $reader=$5; //@line 2661 "_elementtree.c"
        var $6=$reader; //@line 2662 "_elementtree.c"
        var $7=($6)==0; //@line 2662 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2662 "_elementtree.c"
      case 3: // $bb2
        $0=0; //@line 2663 "_elementtree.c"
        __label__ = 28; break; //@line 2663 "_elementtree.c"
      case 4: // $bb3
        var $8=$reader; //@line 2668 "_elementtree.c"
        var $9=_PyObject_CallFunction($8, __str98, allocate([65536,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 2668 "_elementtree.c"
        $buffer=$9; //@line 2668 "_elementtree.c"
        var $10=($9)==0; //@line 2670 "_elementtree.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2670 "_elementtree.c"
      case 5: // $bb4
        var $11=$reader; //@line 2672 "_elementtree.c"
        var $12=$11; //@line 2672 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2672 "_elementtree.c"
        var $14=($13) - 1; //@line 2672 "_elementtree.c"
        var $15=$reader; //@line 2672 "_elementtree.c"
        var $16=$15; //@line 2672 "_elementtree.c"
        HEAP[$16]=$14; //@line 2672 "_elementtree.c"
        var $17=$reader; //@line 2672 "_elementtree.c"
        var $18=$17; //@line 2672 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2672 "_elementtree.c"
        var $20=($19)==0; //@line 2672 "_elementtree.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2672 "_elementtree.c"
      case 6: // $bb5
        var $21=$reader; //@line 2672 "_elementtree.c"
        var $22=$21+4; //@line 2672 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2672 "_elementtree.c"
        var $24=$23+24; //@line 2672 "_elementtree.c"
        var $25=HEAP[$24]; //@line 2672 "_elementtree.c"
        var $26=$reader; //@line 2672 "_elementtree.c"
        FUNCTION_TABLE[$25]($26); //@line 2672 "_elementtree.c"
        __label__ = 7; break; //@line 2672 "_elementtree.c"
      case 7: // $bb6
        $0=0; //@line 2673 "_elementtree.c"
        __label__ = 28; break; //@line 2673 "_elementtree.c"
      case 8: // $bb7
        var $27=$buffer; //@line 2676 "_elementtree.c"
        var $28=$27+4; //@line 2676 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2676 "_elementtree.c"
        var $30=($29)!=(_PyString_Type); //@line 2676 "_elementtree.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2676 "_elementtree.c"
      case 9: // $bb8
        var $31=$buffer; //@line 2676 "_elementtree.c"
        var $32=$31; //@line 2676 "_elementtree.c"
        var $33=$32+8; //@line 2676 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2676 "_elementtree.c"
        var $35=($34)==0; //@line 2676 "_elementtree.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 2676 "_elementtree.c"
      case 10: // $bb9
        var $36=$buffer; //@line 2677 "_elementtree.c"
        var $37=$36; //@line 2677 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2677 "_elementtree.c"
        var $39=($38) - 1; //@line 2677 "_elementtree.c"
        var $40=$buffer; //@line 2677 "_elementtree.c"
        var $41=$40; //@line 2677 "_elementtree.c"
        HEAP[$41]=$39; //@line 2677 "_elementtree.c"
        var $42=$buffer; //@line 2677 "_elementtree.c"
        var $43=$42; //@line 2677 "_elementtree.c"
        var $44=HEAP[$43]; //@line 2677 "_elementtree.c"
        var $45=($44)==0; //@line 2677 "_elementtree.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2677 "_elementtree.c"
      case 11: // $bb10
        var $46=$buffer; //@line 2677 "_elementtree.c"
        var $47=$46+4; //@line 2677 "_elementtree.c"
        var $48=HEAP[$47]; //@line 2677 "_elementtree.c"
        var $49=$48+24; //@line 2677 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2677 "_elementtree.c"
        var $51=$buffer; //@line 2677 "_elementtree.c"
        FUNCTION_TABLE[$50]($51); //@line 2677 "_elementtree.c"
        __label__ = 12; break; //@line 2677 "_elementtree.c"
      case 12: // $bb11
        var $52=$reader; //@line 2695 "_elementtree.c"
        var $53=$52; //@line 2695 "_elementtree.c"
        var $54=HEAP[$53]; //@line 2695 "_elementtree.c"
        var $55=($54) - 1; //@line 2695 "_elementtree.c"
        var $56=$reader; //@line 2695 "_elementtree.c"
        var $57=$56; //@line 2695 "_elementtree.c"
        HEAP[$57]=$55; //@line 2695 "_elementtree.c"
        var $58=$reader; //@line 2695 "_elementtree.c"
        var $59=$58; //@line 2695 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2695 "_elementtree.c"
        var $61=($60)==0; //@line 2695 "_elementtree.c"
        if ($61) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2695 "_elementtree.c"
      case 13: // $bb12
        var $62=$buffer; //@line 2681 "_elementtree.c"
        var $63=$62; //@line 2681 "_elementtree.c"
        var $64=$63+8; //@line 2681 "_elementtree.c"
        var $65=HEAP[$64]; //@line 2681 "_elementtree.c"
        var $66=$buffer; //@line 2681 "_elementtree.c"
        var $67=$66; //@line 2681 "_elementtree.c"
        var $68=$67+20; //@line 2681 "_elementtree.c"
        var $69=$68; //@line 2681 "_elementtree.c"
        var $70=$self_addr; //@line 2681 "_elementtree.c"
        var $71=_expat_parse($70, $69, $65, 0); //@line 2681 "_elementtree.c"
        $res=$71; //@line 2681 "_elementtree.c"
        var $72=$buffer; //@line 2685 "_elementtree.c"
        var $73=$72; //@line 2685 "_elementtree.c"
        var $74=HEAP[$73]; //@line 2685 "_elementtree.c"
        var $75=($74) - 1; //@line 2685 "_elementtree.c"
        var $76=$buffer; //@line 2685 "_elementtree.c"
        var $77=$76; //@line 2685 "_elementtree.c"
        HEAP[$77]=$75; //@line 2685 "_elementtree.c"
        var $78=$buffer; //@line 2685 "_elementtree.c"
        var $79=$78; //@line 2685 "_elementtree.c"
        var $80=HEAP[$79]; //@line 2685 "_elementtree.c"
        var $81=($80)==0; //@line 2685 "_elementtree.c"
        if ($81) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2685 "_elementtree.c"
      case 14: // $bb13
        var $82=$buffer; //@line 2685 "_elementtree.c"
        var $83=$82+4; //@line 2685 "_elementtree.c"
        var $84=HEAP[$83]; //@line 2685 "_elementtree.c"
        var $85=$84+24; //@line 2685 "_elementtree.c"
        var $86=HEAP[$85]; //@line 2685 "_elementtree.c"
        var $87=$buffer; //@line 2685 "_elementtree.c"
        FUNCTION_TABLE[$86]($87); //@line 2685 "_elementtree.c"
        __label__ = 15; break; //@line 2685 "_elementtree.c"
      case 15: // $bb14
        var $88=$res; //@line 2687 "_elementtree.c"
        var $89=($88)==0; //@line 2687 "_elementtree.c"
        if ($89) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2687 "_elementtree.c"
      case 16: // $bb15
        var $90=$reader; //@line 2688 "_elementtree.c"
        var $91=$90; //@line 2688 "_elementtree.c"
        var $92=HEAP[$91]; //@line 2688 "_elementtree.c"
        var $93=($92) - 1; //@line 2688 "_elementtree.c"
        var $94=$reader; //@line 2688 "_elementtree.c"
        var $95=$94; //@line 2688 "_elementtree.c"
        HEAP[$95]=$93; //@line 2688 "_elementtree.c"
        var $96=$reader; //@line 2688 "_elementtree.c"
        var $97=$96; //@line 2688 "_elementtree.c"
        var $98=HEAP[$97]; //@line 2688 "_elementtree.c"
        var $99=($98)==0; //@line 2688 "_elementtree.c"
        if ($99) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2688 "_elementtree.c"
      case 17: // $bb16
        var $100=$reader; //@line 2688 "_elementtree.c"
        var $101=$100+4; //@line 2688 "_elementtree.c"
        var $102=HEAP[$101]; //@line 2688 "_elementtree.c"
        var $103=$102+24; //@line 2688 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2688 "_elementtree.c"
        var $105=$reader; //@line 2688 "_elementtree.c"
        FUNCTION_TABLE[$104]($105); //@line 2688 "_elementtree.c"
        __label__ = 18; break; //@line 2688 "_elementtree.c"
      case 18: // $bb17
        $0=0; //@line 2689 "_elementtree.c"
        __label__ = 28; break; //@line 2689 "_elementtree.c"
      case 19: // $bb18
        var $106=$res; //@line 2691 "_elementtree.c"
        var $107=$106; //@line 2691 "_elementtree.c"
        var $108=HEAP[$107]; //@line 2691 "_elementtree.c"
        var $109=($108) - 1; //@line 2691 "_elementtree.c"
        var $110=$res; //@line 2691 "_elementtree.c"
        var $111=$110; //@line 2691 "_elementtree.c"
        HEAP[$111]=$109; //@line 2691 "_elementtree.c"
        var $112=$res; //@line 2691 "_elementtree.c"
        var $113=$112; //@line 2691 "_elementtree.c"
        var $114=HEAP[$113]; //@line 2691 "_elementtree.c"
        var $115=($114)==0; //@line 2691 "_elementtree.c"
        if ($115) { __label__ = 20; break; } else { __label__ = 4; break; } //@line 2691 "_elementtree.c"
      case 20: // $bb19
        var $116=$res; //@line 2691 "_elementtree.c"
        var $117=$116+4; //@line 2691 "_elementtree.c"
        var $118=HEAP[$117]; //@line 2691 "_elementtree.c"
        var $119=$118+24; //@line 2691 "_elementtree.c"
        var $120=HEAP[$119]; //@line 2691 "_elementtree.c"
        var $121=$res; //@line 2691 "_elementtree.c"
        FUNCTION_TABLE[$120]($121); //@line 2691 "_elementtree.c"
        __label__ = 4; break; //@line 2691 "_elementtree.c"
      case 21: // $bb21
        var $122=$reader; //@line 2695 "_elementtree.c"
        var $123=$122+4; //@line 2695 "_elementtree.c"
        var $124=HEAP[$123]; //@line 2695 "_elementtree.c"
        var $125=$124+24; //@line 2695 "_elementtree.c"
        var $126=HEAP[$125]; //@line 2695 "_elementtree.c"
        var $127=$reader; //@line 2695 "_elementtree.c"
        FUNCTION_TABLE[$126]($127); //@line 2695 "_elementtree.c"
        __label__ = 22; break; //@line 2695 "_elementtree.c"
      case 22: // $bb22
        var $128=$self_addr; //@line 2697 "_elementtree.c"
        var $129=_expat_parse($128, __str1, 0, 1); //@line 2697 "_elementtree.c"
        $res=$129; //@line 2697 "_elementtree.c"
        var $130=($129)!=0; //@line 2699 "_elementtree.c"
        if ($130) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 2699 "_elementtree.c"
      case 23: // $bb23
        var $131=$self_addr; //@line 2699 "_elementtree.c"
        var $132=$131+12; //@line 2699 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2699 "_elementtree.c"
        var $134=$133+4; //@line 2699 "_elementtree.c"
        var $135=HEAP[$134]; //@line 2699 "_elementtree.c"
        var $136=($135)==(_TreeBuilder_Type); //@line 2699 "_elementtree.c"
        if ($136) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 2699 "_elementtree.c"
      case 24: // $bb24
        var $137=$res; //@line 2700 "_elementtree.c"
        var $138=$137; //@line 2700 "_elementtree.c"
        var $139=HEAP[$138]; //@line 2700 "_elementtree.c"
        var $140=($139) - 1; //@line 2700 "_elementtree.c"
        var $141=$res; //@line 2700 "_elementtree.c"
        var $142=$141; //@line 2700 "_elementtree.c"
        HEAP[$142]=$140; //@line 2700 "_elementtree.c"
        var $143=$res; //@line 2700 "_elementtree.c"
        var $144=$143; //@line 2700 "_elementtree.c"
        var $145=HEAP[$144]; //@line 2700 "_elementtree.c"
        var $146=($145)==0; //@line 2700 "_elementtree.c"
        if ($146) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2700 "_elementtree.c"
      case 25: // $bb25
        var $147=$res; //@line 2700 "_elementtree.c"
        var $148=$147+4; //@line 2700 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2700 "_elementtree.c"
        var $150=$149+24; //@line 2700 "_elementtree.c"
        var $151=HEAP[$150]; //@line 2700 "_elementtree.c"
        var $152=$res; //@line 2700 "_elementtree.c"
        FUNCTION_TABLE[$151]($152); //@line 2700 "_elementtree.c"
        __label__ = 26; break; //@line 2700 "_elementtree.c"
      case 26: // $bb26
        var $153=$self_addr; //@line 2701 "_elementtree.c"
        var $154=$153+12; //@line 2701 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2701 "_elementtree.c"
        var $156=$155; //@line 2701 "_elementtree.c"
        var $157=_treebuilder_done($156); //@line 2701 "_elementtree.c"
        $0=$157; //@line 2701 "_elementtree.c"
        __label__ = 28; break; //@line 2701 "_elementtree.c"
      case 27: // $bb27
        var $158=$res; //@line 2704 "_elementtree.c"
        $0=$158; //@line 2704 "_elementtree.c"
        __label__ = 28; break; //@line 2704 "_elementtree.c"
      case 28: // $bb28
        var $159=$0; //@line 2659 "_elementtree.c"
        $retval=$159; //@line 2659 "_elementtree.c"
        var $retval29=$retval; //@line 2659 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 2659 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_setevents($self, $args) {
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
        var $target;
        var $events=__stackBase__;
        var $event_set=__stackBase__+4;
        var $item;
        var $event;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$event_set]=__Py_NoneStruct; //@line 2716 "_elementtree.c"
        var $1=$args_addr; //@line 2717 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, __str99, allocate([_PyList_Type,0,0,0,$events,0,0,0,$event_set,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2717 "_elementtree.c"
        var $3=($2)==0; //@line 2717 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2717 "_elementtree.c"
      case 1: // $bb
        $0=0; //@line 2719 "_elementtree.c"
        __label__ = 46; break; //@line 2719 "_elementtree.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 2721 "_elementtree.c"
        var $5=$4+12; //@line 2721 "_elementtree.c"
        var $6=HEAP[$5]; //@line 2721 "_elementtree.c"
        var $7=$6+4; //@line 2721 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2721 "_elementtree.c"
        var $9=($8)!=(_TreeBuilder_Type); //@line 2721 "_elementtree.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2721 "_elementtree.c"
      case 3: // $bb2
        var $10=HEAP[_PyExc_TypeError]; //@line 2722 "_elementtree.c"
        _PyErr_SetString($10, __str100); //@line 2722 "_elementtree.c"
        $0=0; //@line 2727 "_elementtree.c"
        __label__ = 46; break; //@line 2727 "_elementtree.c"
      case 4: // $bb3
        var $11=$self_addr; //@line 2730 "_elementtree.c"
        var $12=$11+12; //@line 2730 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2730 "_elementtree.c"
        var $14=$13; //@line 2730 "_elementtree.c"
        $target=$14; //@line 2730 "_elementtree.c"
        var $15=HEAP[$events]; //@line 2732 "_elementtree.c"
        var $16=$15; //@line 2732 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2732 "_elementtree.c"
        var $18=($17) + 1; //@line 2732 "_elementtree.c"
        var $19=$15; //@line 2732 "_elementtree.c"
        HEAP[$19]=$18; //@line 2732 "_elementtree.c"
        var $20=$target; //@line 2733 "_elementtree.c"
        var $21=$20+32; //@line 2733 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2733 "_elementtree.c"
        var $23=($22)!=0; //@line 2733 "_elementtree.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 2733 "_elementtree.c"
      case 5: // $bb4
        var $24=$target; //@line 2733 "_elementtree.c"
        var $25=$24+32; //@line 2733 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2733 "_elementtree.c"
        var $27=$26; //@line 2733 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2733 "_elementtree.c"
        var $29=($28) - 1; //@line 2733 "_elementtree.c"
        var $30=$26; //@line 2733 "_elementtree.c"
        HEAP[$30]=$29; //@line 2733 "_elementtree.c"
        var $31=$26; //@line 2733 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2733 "_elementtree.c"
        var $33=($32)==0; //@line 2733 "_elementtree.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2733 "_elementtree.c"
      case 6: // $bb5
        var $34=$target; //@line 2733 "_elementtree.c"
        var $35=$34+32; //@line 2733 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2733 "_elementtree.c"
        var $37=$36+4; //@line 2733 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2733 "_elementtree.c"
        var $39=$38+24; //@line 2733 "_elementtree.c"
        var $40=HEAP[$39]; //@line 2733 "_elementtree.c"
        var $41=$target; //@line 2733 "_elementtree.c"
        var $42=$41+32; //@line 2733 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2733 "_elementtree.c"
        FUNCTION_TABLE[$40]($43); //@line 2733 "_elementtree.c"
        __label__ = 7; break; //@line 2733 "_elementtree.c"
      case 7: // $bb6
        var $44=HEAP[$events]; //@line 2734 "_elementtree.c"
        var $45=$target; //@line 2734 "_elementtree.c"
        var $46=$45+32; //@line 2734 "_elementtree.c"
        HEAP[$46]=$44; //@line 2734 "_elementtree.c"
        var $47=$target; //@line 2737 "_elementtree.c"
        var $48=$47+36; //@line 2737 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2737 "_elementtree.c"
        var $50=($49)!=0; //@line 2737 "_elementtree.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2737 "_elementtree.c"
      case 8: // $bb7
        var $51=$target; //@line 2737 "_elementtree.c"
        var $52=$51+36; //@line 2737 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2737 "_elementtree.c"
        var $54=$53; //@line 2737 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2737 "_elementtree.c"
        var $56=($55) - 1; //@line 2737 "_elementtree.c"
        var $57=$53; //@line 2737 "_elementtree.c"
        HEAP[$57]=$56; //@line 2737 "_elementtree.c"
        var $58=$53; //@line 2737 "_elementtree.c"
        var $59=HEAP[$58]; //@line 2737 "_elementtree.c"
        var $60=($59)==0; //@line 2737 "_elementtree.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2737 "_elementtree.c"
      case 9: // $bb8
        var $61=$target; //@line 2737 "_elementtree.c"
        var $62=$61+36; //@line 2737 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2737 "_elementtree.c"
        var $64=$63+4; //@line 2737 "_elementtree.c"
        var $65=HEAP[$64]; //@line 2737 "_elementtree.c"
        var $66=$65+24; //@line 2737 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2737 "_elementtree.c"
        var $68=$target; //@line 2737 "_elementtree.c"
        var $69=$68+36; //@line 2737 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2737 "_elementtree.c"
        FUNCTION_TABLE[$67]($70); //@line 2737 "_elementtree.c"
        __label__ = 10; break; //@line 2737 "_elementtree.c"
      case 10: // $bb9
        var $71=$target; //@line 2737 "_elementtree.c"
        var $72=$71+36; //@line 2737 "_elementtree.c"
        HEAP[$72]=0; //@line 2737 "_elementtree.c"
        var $73=$target; //@line 2738 "_elementtree.c"
        var $74=$73+40; //@line 2738 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2738 "_elementtree.c"
        var $76=($75)!=0; //@line 2738 "_elementtree.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2738 "_elementtree.c"
      case 11: // $bb10
        var $77=$target; //@line 2738 "_elementtree.c"
        var $78=$77+40; //@line 2738 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2738 "_elementtree.c"
        var $80=$79; //@line 2738 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2738 "_elementtree.c"
        var $82=($81) - 1; //@line 2738 "_elementtree.c"
        var $83=$79; //@line 2738 "_elementtree.c"
        HEAP[$83]=$82; //@line 2738 "_elementtree.c"
        var $84=$79; //@line 2738 "_elementtree.c"
        var $85=HEAP[$84]; //@line 2738 "_elementtree.c"
        var $86=($85)==0; //@line 2738 "_elementtree.c"
        if ($86) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2738 "_elementtree.c"
      case 12: // $bb11
        var $87=$target; //@line 2738 "_elementtree.c"
        var $88=$87+40; //@line 2738 "_elementtree.c"
        var $89=HEAP[$88]; //@line 2738 "_elementtree.c"
        var $90=$89+4; //@line 2738 "_elementtree.c"
        var $91=HEAP[$90]; //@line 2738 "_elementtree.c"
        var $92=$91+24; //@line 2738 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2738 "_elementtree.c"
        var $94=$target; //@line 2738 "_elementtree.c"
        var $95=$94+40; //@line 2738 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2738 "_elementtree.c"
        FUNCTION_TABLE[$93]($96); //@line 2738 "_elementtree.c"
        __label__ = 13; break; //@line 2738 "_elementtree.c"
      case 13: // $bb12
        var $97=$target; //@line 2738 "_elementtree.c"
        var $98=$97+40; //@line 2738 "_elementtree.c"
        HEAP[$98]=0; //@line 2738 "_elementtree.c"
        var $99=$target; //@line 2739 "_elementtree.c"
        var $100=$99+44; //@line 2739 "_elementtree.c"
        var $101=HEAP[$100]; //@line 2739 "_elementtree.c"
        var $102=($101)!=0; //@line 2739 "_elementtree.c"
        if ($102) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2739 "_elementtree.c"
      case 14: // $bb13
        var $103=$target; //@line 2739 "_elementtree.c"
        var $104=$103+44; //@line 2739 "_elementtree.c"
        var $105=HEAP[$104]; //@line 2739 "_elementtree.c"
        var $106=$105; //@line 2739 "_elementtree.c"
        var $107=HEAP[$106]; //@line 2739 "_elementtree.c"
        var $108=($107) - 1; //@line 2739 "_elementtree.c"
        var $109=$105; //@line 2739 "_elementtree.c"
        HEAP[$109]=$108; //@line 2739 "_elementtree.c"
        var $110=$105; //@line 2739 "_elementtree.c"
        var $111=HEAP[$110]; //@line 2739 "_elementtree.c"
        var $112=($111)==0; //@line 2739 "_elementtree.c"
        if ($112) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2739 "_elementtree.c"
      case 15: // $bb14
        var $113=$target; //@line 2739 "_elementtree.c"
        var $114=$113+44; //@line 2739 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2739 "_elementtree.c"
        var $116=$115+4; //@line 2739 "_elementtree.c"
        var $117=HEAP[$116]; //@line 2739 "_elementtree.c"
        var $118=$117+24; //@line 2739 "_elementtree.c"
        var $119=HEAP[$118]; //@line 2739 "_elementtree.c"
        var $120=$target; //@line 2739 "_elementtree.c"
        var $121=$120+44; //@line 2739 "_elementtree.c"
        var $122=HEAP[$121]; //@line 2739 "_elementtree.c"
        FUNCTION_TABLE[$119]($122); //@line 2739 "_elementtree.c"
        __label__ = 16; break; //@line 2739 "_elementtree.c"
      case 16: // $bb15
        var $123=$target; //@line 2739 "_elementtree.c"
        var $124=$123+44; //@line 2739 "_elementtree.c"
        HEAP[$124]=0; //@line 2739 "_elementtree.c"
        var $125=$target; //@line 2740 "_elementtree.c"
        var $126=$125+48; //@line 2740 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2740 "_elementtree.c"
        var $128=($127)!=0; //@line 2740 "_elementtree.c"
        if ($128) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 2740 "_elementtree.c"
      case 17: // $bb16
        var $129=$target; //@line 2740 "_elementtree.c"
        var $130=$129+48; //@line 2740 "_elementtree.c"
        var $131=HEAP[$130]; //@line 2740 "_elementtree.c"
        var $132=$131; //@line 2740 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2740 "_elementtree.c"
        var $134=($133) - 1; //@line 2740 "_elementtree.c"
        var $135=$131; //@line 2740 "_elementtree.c"
        HEAP[$135]=$134; //@line 2740 "_elementtree.c"
        var $136=$131; //@line 2740 "_elementtree.c"
        var $137=HEAP[$136]; //@line 2740 "_elementtree.c"
        var $138=($137)==0; //@line 2740 "_elementtree.c"
        if ($138) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2740 "_elementtree.c"
      case 18: // $bb17
        var $139=$target; //@line 2740 "_elementtree.c"
        var $140=$139+48; //@line 2740 "_elementtree.c"
        var $141=HEAP[$140]; //@line 2740 "_elementtree.c"
        var $142=$141+4; //@line 2740 "_elementtree.c"
        var $143=HEAP[$142]; //@line 2740 "_elementtree.c"
        var $144=$143+24; //@line 2740 "_elementtree.c"
        var $145=HEAP[$144]; //@line 2740 "_elementtree.c"
        var $146=$target; //@line 2740 "_elementtree.c"
        var $147=$146+48; //@line 2740 "_elementtree.c"
        var $148=HEAP[$147]; //@line 2740 "_elementtree.c"
        FUNCTION_TABLE[$145]($148); //@line 2740 "_elementtree.c"
        __label__ = 19; break; //@line 2740 "_elementtree.c"
      case 19: // $bb18
        var $149=$target; //@line 2740 "_elementtree.c"
        var $150=$149+48; //@line 2740 "_elementtree.c"
        HEAP[$150]=0; //@line 2740 "_elementtree.c"
        var $151=HEAP[$event_set]; //@line 2742 "_elementtree.c"
        var $152=($151)==(__Py_NoneStruct); //@line 2742 "_elementtree.c"
        if ($152) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2742 "_elementtree.c"
      case 20: // $bb19
        var $153=_PyString_FromString(__str76); //@line 2744 "_elementtree.c"
        var $154=$target; //@line 2744 "_elementtree.c"
        var $155=$154+40; //@line 2744 "_elementtree.c"
        HEAP[$155]=$153; //@line 2744 "_elementtree.c"
        var $156=HEAP[__Py_NoneStruct]; //@line 2745 "_elementtree.c"
        var $157=($156) + 1; //@line 2745 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$157; //@line 2745 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 2745 "_elementtree.c"
        __label__ = 46; break; //@line 2745 "_elementtree.c"
      case 21: // $bb20
        var $158=HEAP[$event_set]; //@line 2748 "_elementtree.c"
        var $159=$158+4; //@line 2748 "_elementtree.c"
        var $160=HEAP[$159]; //@line 2748 "_elementtree.c"
        var $161=$160+84; //@line 2748 "_elementtree.c"
        var $162=HEAP[$161]; //@line 2748 "_elementtree.c"
        var $163=($162) & 67108864; //@line 2748 "_elementtree.c"
        var $164=($163)==0; //@line 2748 "_elementtree.c"
        if ($164) { __label__ = 45; break; } else { __label__ = 22; break; } //@line 2748 "_elementtree.c"
      case 22: // $bb21
        $i=0; //@line 2751 "_elementtree.c"
        __label__ = 43; break; //@line 2751 "_elementtree.c"
      case 23: // $bb22
        var $165=HEAP[$event_set]; //@line 2752 "_elementtree.c"
        var $166=$165; //@line 2752 "_elementtree.c"
        var $167=$i; //@line 2752 "_elementtree.c"
        var $168=$166+12; //@line 2752 "_elementtree.c"
        var $169=$168+$167*4; //@line 2752 "_elementtree.c"
        var $170=HEAP[$169]; //@line 2752 "_elementtree.c"
        $item=$170; //@line 2752 "_elementtree.c"
        var $171=$item; //@line 2754 "_elementtree.c"
        var $172=$171+4; //@line 2754 "_elementtree.c"
        var $173=HEAP[$172]; //@line 2754 "_elementtree.c"
        var $174=$173+84; //@line 2754 "_elementtree.c"
        var $175=HEAP[$174]; //@line 2754 "_elementtree.c"
        var $176=($175) & 134217728; //@line 2754 "_elementtree.c"
        var $177=($176)==0; //@line 2754 "_elementtree.c"
        if ($177) { __label__ = 45; break; } else { __label__ = 24; break; } //@line 2754 "_elementtree.c"
      case 24: // $bb23
        var $178=$item; //@line 2756 "_elementtree.c"
        var $179=$178; //@line 2756 "_elementtree.c"
        var $180=$179+20; //@line 2756 "_elementtree.c"
        var $181=$180; //@line 2756 "_elementtree.c"
        $event=$181; //@line 2756 "_elementtree.c"
        var $182=$event; //@line 2757 "_elementtree.c"
        var $183=_strcmp($182, __str75); //@line 2757 "_elementtree.c"
        var $184=($183)==0; //@line 2757 "_elementtree.c"
        if ($184) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2757 "_elementtree.c"
      case 25: // $bb24
        var $185=$item; //@line 2758 "_elementtree.c"
        var $186=$185; //@line 2758 "_elementtree.c"
        var $187=HEAP[$186]; //@line 2758 "_elementtree.c"
        var $188=($187) + 1; //@line 2758 "_elementtree.c"
        var $189=$item; //@line 2758 "_elementtree.c"
        var $190=$189; //@line 2758 "_elementtree.c"
        HEAP[$190]=$188; //@line 2758 "_elementtree.c"
        var $191=$target; //@line 2759 "_elementtree.c"
        var $192=$191+36; //@line 2759 "_elementtree.c"
        var $193=$item; //@line 2759 "_elementtree.c"
        HEAP[$192]=$193; //@line 2759 "_elementtree.c"
        __label__ = 42; break; //@line 2759 "_elementtree.c"
      case 26: // $bb25
        var $194=$event; //@line 2760 "_elementtree.c"
        var $195=_strcmp($194, __str76); //@line 2760 "_elementtree.c"
        var $196=($195)==0; //@line 2760 "_elementtree.c"
        if ($196) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 2760 "_elementtree.c"
      case 27: // $bb26
        var $197=$item; //@line 2761 "_elementtree.c"
        var $198=$197; //@line 2761 "_elementtree.c"
        var $199=HEAP[$198]; //@line 2761 "_elementtree.c"
        var $200=($199) + 1; //@line 2761 "_elementtree.c"
        var $201=$item; //@line 2761 "_elementtree.c"
        var $202=$201; //@line 2761 "_elementtree.c"
        HEAP[$202]=$200; //@line 2761 "_elementtree.c"
        var $203=$target; //@line 2762 "_elementtree.c"
        var $204=$203+40; //@line 2762 "_elementtree.c"
        var $205=HEAP[$204]; //@line 2762 "_elementtree.c"
        var $206=($205)!=0; //@line 2762 "_elementtree.c"
        if ($206) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 2762 "_elementtree.c"
      case 28: // $bb27
        var $207=$target; //@line 2762 "_elementtree.c"
        var $208=$207+40; //@line 2762 "_elementtree.c"
        var $209=HEAP[$208]; //@line 2762 "_elementtree.c"
        var $210=$209; //@line 2762 "_elementtree.c"
        var $211=HEAP[$210]; //@line 2762 "_elementtree.c"
        var $212=($211) - 1; //@line 2762 "_elementtree.c"
        var $213=$209; //@line 2762 "_elementtree.c"
        HEAP[$213]=$212; //@line 2762 "_elementtree.c"
        var $214=$209; //@line 2762 "_elementtree.c"
        var $215=HEAP[$214]; //@line 2762 "_elementtree.c"
        var $216=($215)==0; //@line 2762 "_elementtree.c"
        if ($216) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2762 "_elementtree.c"
      case 29: // $bb28
        var $217=$target; //@line 2762 "_elementtree.c"
        var $218=$217+40; //@line 2762 "_elementtree.c"
        var $219=HEAP[$218]; //@line 2762 "_elementtree.c"
        var $220=$219+4; //@line 2762 "_elementtree.c"
        var $221=HEAP[$220]; //@line 2762 "_elementtree.c"
        var $222=$221+24; //@line 2762 "_elementtree.c"
        var $223=HEAP[$222]; //@line 2762 "_elementtree.c"
        var $224=$target; //@line 2762 "_elementtree.c"
        var $225=$224+40; //@line 2762 "_elementtree.c"
        var $226=HEAP[$225]; //@line 2762 "_elementtree.c"
        FUNCTION_TABLE[$223]($226); //@line 2762 "_elementtree.c"
        __label__ = 30; break; //@line 2762 "_elementtree.c"
      case 30: // $bb29
        var $227=$target; //@line 2763 "_elementtree.c"
        var $228=$227+40; //@line 2763 "_elementtree.c"
        var $229=$item; //@line 2763 "_elementtree.c"
        HEAP[$228]=$229; //@line 2763 "_elementtree.c"
        __label__ = 42; break; //@line 2763 "_elementtree.c"
      case 31: // $bb30
        var $230=$event; //@line 2764 "_elementtree.c"
        var $231=_strcmp($230, __str101); //@line 2764 "_elementtree.c"
        var $232=($231)==0; //@line 2764 "_elementtree.c"
        if ($232) { __label__ = 32; break; } else { __label__ = 36; break; } //@line 2764 "_elementtree.c"
      case 32: // $bb31
        var $233=$item; //@line 2765 "_elementtree.c"
        var $234=$233; //@line 2765 "_elementtree.c"
        var $235=HEAP[$234]; //@line 2765 "_elementtree.c"
        var $236=($235) + 1; //@line 2765 "_elementtree.c"
        var $237=$item; //@line 2765 "_elementtree.c"
        var $238=$237; //@line 2765 "_elementtree.c"
        HEAP[$238]=$236; //@line 2765 "_elementtree.c"
        var $239=$target; //@line 2766 "_elementtree.c"
        var $240=$239+44; //@line 2766 "_elementtree.c"
        var $241=HEAP[$240]; //@line 2766 "_elementtree.c"
        var $242=($241)!=0; //@line 2766 "_elementtree.c"
        if ($242) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 2766 "_elementtree.c"
      case 33: // $bb32
        var $243=$target; //@line 2766 "_elementtree.c"
        var $244=$243+44; //@line 2766 "_elementtree.c"
        var $245=HEAP[$244]; //@line 2766 "_elementtree.c"
        var $246=$245; //@line 2766 "_elementtree.c"
        var $247=HEAP[$246]; //@line 2766 "_elementtree.c"
        var $248=($247) - 1; //@line 2766 "_elementtree.c"
        var $249=$245; //@line 2766 "_elementtree.c"
        HEAP[$249]=$248; //@line 2766 "_elementtree.c"
        var $250=$245; //@line 2766 "_elementtree.c"
        var $251=HEAP[$250]; //@line 2766 "_elementtree.c"
        var $252=($251)==0; //@line 2766 "_elementtree.c"
        if ($252) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2766 "_elementtree.c"
      case 34: // $bb33
        var $253=$target; //@line 2766 "_elementtree.c"
        var $254=$253+44; //@line 2766 "_elementtree.c"
        var $255=HEAP[$254]; //@line 2766 "_elementtree.c"
        var $256=$255+4; //@line 2766 "_elementtree.c"
        var $257=HEAP[$256]; //@line 2766 "_elementtree.c"
        var $258=$257+24; //@line 2766 "_elementtree.c"
        var $259=HEAP[$258]; //@line 2766 "_elementtree.c"
        var $260=$target; //@line 2766 "_elementtree.c"
        var $261=$260+44; //@line 2766 "_elementtree.c"
        var $262=HEAP[$261]; //@line 2766 "_elementtree.c"
        FUNCTION_TABLE[$259]($262); //@line 2766 "_elementtree.c"
        __label__ = 35; break; //@line 2766 "_elementtree.c"
      case 35: // $bb34
        var $263=$target; //@line 2767 "_elementtree.c"
        var $264=$263+44; //@line 2767 "_elementtree.c"
        var $265=$item; //@line 2767 "_elementtree.c"
        HEAP[$264]=$265; //@line 2767 "_elementtree.c"
        var $266=HEAP[_expat_capi]; //@line 2768 "_elementtree.c"
        var $267=$266+64; //@line 2768 "_elementtree.c"
        var $268=HEAP[$267]; //@line 2768 "_elementtree.c"
        var $269=$self_addr; //@line 2768 "_elementtree.c"
        var $270=$269+8; //@line 2768 "_elementtree.c"
        var $271=HEAP[$270]; //@line 2768 "_elementtree.c"
        FUNCTION_TABLE[$268]($271, (FUNCTION_TABLE_OFFSET + 22), (FUNCTION_TABLE_OFFSET + 24)); //@line 2768 "_elementtree.c"
        __label__ = 42; break; //@line 2768 "_elementtree.c"
      case 36: // $bb35
        var $272=$event; //@line 2773 "_elementtree.c"
        var $273=_strcmp($272, __str102); //@line 2773 "_elementtree.c"
        var $274=($273)==0; //@line 2773 "_elementtree.c"
        if ($274) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 2773 "_elementtree.c"
      case 37: // $bb36
        var $275=$item; //@line 2774 "_elementtree.c"
        var $276=$275; //@line 2774 "_elementtree.c"
        var $277=HEAP[$276]; //@line 2774 "_elementtree.c"
        var $278=($277) + 1; //@line 2774 "_elementtree.c"
        var $279=$item; //@line 2774 "_elementtree.c"
        var $280=$279; //@line 2774 "_elementtree.c"
        HEAP[$280]=$278; //@line 2774 "_elementtree.c"
        var $281=$target; //@line 2775 "_elementtree.c"
        var $282=$281+48; //@line 2775 "_elementtree.c"
        var $283=HEAP[$282]; //@line 2775 "_elementtree.c"
        var $284=($283)!=0; //@line 2775 "_elementtree.c"
        if ($284) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 2775 "_elementtree.c"
      case 38: // $bb37
        var $285=$target; //@line 2775 "_elementtree.c"
        var $286=$285+48; //@line 2775 "_elementtree.c"
        var $287=HEAP[$286]; //@line 2775 "_elementtree.c"
        var $288=$287; //@line 2775 "_elementtree.c"
        var $289=HEAP[$288]; //@line 2775 "_elementtree.c"
        var $290=($289) - 1; //@line 2775 "_elementtree.c"
        var $291=$287; //@line 2775 "_elementtree.c"
        HEAP[$291]=$290; //@line 2775 "_elementtree.c"
        var $292=$287; //@line 2775 "_elementtree.c"
        var $293=HEAP[$292]; //@line 2775 "_elementtree.c"
        var $294=($293)==0; //@line 2775 "_elementtree.c"
        if ($294) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2775 "_elementtree.c"
      case 39: // $bb38
        var $295=$target; //@line 2775 "_elementtree.c"
        var $296=$295+48; //@line 2775 "_elementtree.c"
        var $297=HEAP[$296]; //@line 2775 "_elementtree.c"
        var $298=$297+4; //@line 2775 "_elementtree.c"
        var $299=HEAP[$298]; //@line 2775 "_elementtree.c"
        var $300=$299+24; //@line 2775 "_elementtree.c"
        var $301=HEAP[$300]; //@line 2775 "_elementtree.c"
        var $302=$target; //@line 2775 "_elementtree.c"
        var $303=$302+48; //@line 2775 "_elementtree.c"
        var $304=HEAP[$303]; //@line 2775 "_elementtree.c"
        FUNCTION_TABLE[$301]($304); //@line 2775 "_elementtree.c"
        __label__ = 40; break; //@line 2775 "_elementtree.c"
      case 40: // $bb39
        var $305=$target; //@line 2776 "_elementtree.c"
        var $306=$305+48; //@line 2776 "_elementtree.c"
        var $307=$item; //@line 2776 "_elementtree.c"
        HEAP[$306]=$307; //@line 2776 "_elementtree.c"
        var $308=HEAP[_expat_capi]; //@line 2777 "_elementtree.c"
        var $309=$308+64; //@line 2777 "_elementtree.c"
        var $310=HEAP[$309]; //@line 2777 "_elementtree.c"
        var $311=$self_addr; //@line 2777 "_elementtree.c"
        var $312=$311+8; //@line 2777 "_elementtree.c"
        var $313=HEAP[$312]; //@line 2777 "_elementtree.c"
        FUNCTION_TABLE[$310]($313, (FUNCTION_TABLE_OFFSET + 22), (FUNCTION_TABLE_OFFSET + 24)); //@line 2777 "_elementtree.c"
        __label__ = 42; break; //@line 2777 "_elementtree.c"
      case 41: // $bb40
        var $314=HEAP[_PyExc_ValueError]; //@line 2783 "_elementtree.c"
        var $315=$event; //@line 2783 "_elementtree.c"
        var $316=_PyErr_Format($314, __str103, allocate([$315,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 2783 "_elementtree.c"
        $0=0; //@line 2787 "_elementtree.c"
        __label__ = 46; break; //@line 2787 "_elementtree.c"
      case 42: // $bb41
        var $317=$i; //@line 2751 "_elementtree.c"
        var $318=($317) + 1; //@line 2751 "_elementtree.c"
        $i=$318; //@line 2751 "_elementtree.c"
        __label__ = 43; break; //@line 2751 "_elementtree.c"
      case 43: // $bb42
        var $319=HEAP[$event_set]; //@line 2751 "_elementtree.c"
        var $320=$319; //@line 2751 "_elementtree.c"
        var $321=$320+8; //@line 2751 "_elementtree.c"
        var $322=HEAP[$321]; //@line 2751 "_elementtree.c"
        var $323=$i; //@line 2751 "_elementtree.c"
        var $324=($322) > ($323); //@line 2751 "_elementtree.c"
        if ($324) { __label__ = 23; break; } else { __label__ = 44; break; } //@line 2751 "_elementtree.c"
      case 44: // $bb43
        var $325=HEAP[__Py_NoneStruct]; //@line 2791 "_elementtree.c"
        var $326=($325) + 1; //@line 2791 "_elementtree.c"
        HEAP[__Py_NoneStruct]=$326; //@line 2791 "_elementtree.c"
        $0=__Py_NoneStruct; //@line 2791 "_elementtree.c"
        __label__ = 46; break; //@line 2791 "_elementtree.c"
      case 45: // $error
        var $327=HEAP[_PyExc_TypeError]; //@line 2794 "_elementtree.c"
        _PyErr_SetString($327, __str104); //@line 2794 "_elementtree.c"
        $0=0; //@line 2798 "_elementtree.c"
        __label__ = 46; break; //@line 2798 "_elementtree.c"
      case 46: // $bb44
        var $328=$0; //@line 2719 "_elementtree.c"
        $retval=$328; //@line 2719 "_elementtree.c"
        var $retval45=$retval; //@line 2719 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 2719 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $name_addr;
        var $retval;
        var $0;
        var $res;
        var $buffer=__stackBase__;
        $self_addr=$self;
        $name_addr=$name;
        var $1=$self_addr; //@line 2814 "_elementtree.c"
        var $2=$1; //@line 2814 "_elementtree.c"
        var $3=$name_addr; //@line 2814 "_elementtree.c"
        var $4=_Py_FindMethod(_xmlparser_methods, $2, $3); //@line 2814 "_elementtree.c"
        $res=$4; //@line 2814 "_elementtree.c"
        var $5=$res; //@line 2815 "_elementtree.c"
        var $6=($5)!=0; //@line 2815 "_elementtree.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2815 "_elementtree.c"
      case 1: // $bb
        var $7=$res; //@line 2816 "_elementtree.c"
        $0=$7; //@line 2816 "_elementtree.c"
        __label__ = 10; break; //@line 2816 "_elementtree.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 2818 "_elementtree.c"
        var $8=$name_addr; //@line 2820 "_elementtree.c"
        var $9=_strcmp($8, __str108); //@line 2820 "_elementtree.c"
        var $10=($9)==0; //@line 2820 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2820 "_elementtree.c"
      case 3: // $bb2
        var $11=$self_addr; //@line 2821 "_elementtree.c"
        var $12=$11+16; //@line 2821 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2821 "_elementtree.c"
        $res=$13; //@line 2821 "_elementtree.c"
        __label__ = 9; break; //@line 2821 "_elementtree.c"
      case 4: // $bb3
        var $14=$name_addr; //@line 2822 "_elementtree.c"
        var $15=_strcmp($14, __str89); //@line 2822 "_elementtree.c"
        var $16=($15)==0; //@line 2822 "_elementtree.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2822 "_elementtree.c"
      case 5: // $bb4
        var $17=$self_addr; //@line 2823 "_elementtree.c"
        var $18=$17+12; //@line 2823 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2823 "_elementtree.c"
        $res=$19; //@line 2823 "_elementtree.c"
        __label__ = 9; break; //@line 2823 "_elementtree.c"
      case 6: // $bb5
        var $20=$name_addr; //@line 2824 "_elementtree.c"
        var $21=_strcmp($20, __str109); //@line 2824 "_elementtree.c"
        var $22=($21)==0; //@line 2824 "_elementtree.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2824 "_elementtree.c"
      case 7: // $bb6
        var $buffer7=$buffer; //@line 2826 "_elementtree.c"
        var $23=_sprintf($buffer7, __str110, allocate([2,0,0,0,0,0,0,0,0,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 2826 "_elementtree.c"
        var $buffer8=$buffer; //@line 2828 "_elementtree.c"
        var $24=_PyString_FromString($buffer8); //@line 2828 "_elementtree.c"
        $0=$24; //@line 2828 "_elementtree.c"
        __label__ = 10; break; //@line 2828 "_elementtree.c"
      case 8: // $bb9
        var $25=HEAP[_PyExc_AttributeError]; //@line 2830 "_elementtree.c"
        var $26=$name_addr; //@line 2830 "_elementtree.c"
        _PyErr_SetString($25, $26); //@line 2830 "_elementtree.c"
        $0=0; //@line 2831 "_elementtree.c"
        __label__ = 10; break; //@line 2831 "_elementtree.c"
      case 9: // $bb10
        var $27=$res; //@line 2834 "_elementtree.c"
        var $28=$27; //@line 2834 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2834 "_elementtree.c"
        var $30=($29) + 1; //@line 2834 "_elementtree.c"
        var $31=$res; //@line 2834 "_elementtree.c"
        var $32=$31; //@line 2834 "_elementtree.c"
        HEAP[$32]=$30; //@line 2834 "_elementtree.c"
        var $33=$res; //@line 2835 "_elementtree.c"
        $0=$33; //@line 2835 "_elementtree.c"
        __label__ = 10; break; //@line 2835 "_elementtree.c"
      case 10: // $bb11
        var $34=$0; //@line 2816 "_elementtree.c"
        $retval=$34; //@line 2816 "_elementtree.c"
        var $retval12=$retval; //@line 2816 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2816 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_elementtree() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $g;
        var $bootstrap;
        var $mp;
        HEAP[_TreeBuilder_Type+4]=_PyType_Type; //@line 2871 "_elementtree.c"
        var $0=HEAP[_TreeBuilder_Type+4]; //@line 2871 "_elementtree.c"
        HEAP[_Element_Type+4]=$0; //@line 2871 "_elementtree.c"
        HEAP[_XMLParser_Type+4]=_PyType_Type; //@line 2873 "_elementtree.c"
        var $1=_Py_InitModule4(__str114, __functions, 0, 0, 1013); //@line 2876 "_elementtree.c"
        $m=$1; //@line 2876 "_elementtree.c"
        var $2=$m; //@line 2877 "_elementtree.c"
        var $3=($2)==0; //@line 2877 "_elementtree.c"
        if ($3) { __label__ = 18; break; } else { __label__ = 1; break; } //@line 2877 "_elementtree.c"
      case 1: // $bb
        var $4=_PyDict_New(); //@line 2882 "_elementtree.c"
        $g=$4; //@line 2882 "_elementtree.c"
        var $5=$g; //@line 2883 "_elementtree.c"
        var $6=($5)==0; //@line 2883 "_elementtree.c"
        if ($6) { __label__ = 18; break; } else { __label__ = 2; break; } //@line 2883 "_elementtree.c"
      case 2: // $bb1
        var $7=_PyEval_GetBuiltins(); //@line 2886 "_elementtree.c"
        var $8=$g; //@line 2886 "_elementtree.c"
        var $9=_PyDict_SetItemString($8, __str115, $7); //@line 2886 "_elementtree.c"
        $bootstrap=__str116; //@line 2888 "_elementtree.c"
        var $10=$bootstrap; //@line 3039 "_elementtree.c"
        var $11=$g; //@line 3039 "_elementtree.c"
        var $12=_PyRun_StringFlags($10, 257, $11, 0, 0); //@line 3039 "_elementtree.c"
        var $13=($12)==0; //@line 3039 "_elementtree.c"
        if ($13) { __label__ = 18; break; } else { __label__ = 3; break; } //@line 3039 "_elementtree.c"
      case 3: // $bb2
        var $14=$g; //@line 3042 "_elementtree.c"
        var $15=_PyDict_GetItemString($14, __str117); //@line 3042 "_elementtree.c"
        HEAP[_elementpath_obj]=$15; //@line 3042 "_elementtree.c"
        var $16=$g; //@line 3044 "_elementtree.c"
        var $17=_PyDict_GetItemString($16, __str118); //@line 3044 "_elementtree.c"
        HEAP[_elementtree_copyelement_obj]=$17; //@line 3044 "_elementtree.c"
        var $18=HEAP[_elementtree_copyelement_obj]; //@line 3045 "_elementtree.c"
        var $19=($18)!=0; //@line 3045 "_elementtree.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 3045 "_elementtree.c"
      case 4: // $bb3
        $mp=_element_methods; //@line 3048 "_elementtree.c"
        __label__ = 8; break; //@line 3048 "_elementtree.c"
      case 5: // $bb4
        var $20=$mp; //@line 3049 "_elementtree.c"
        var $21=$20+4; //@line 3049 "_elementtree.c"
        var $22=HEAP[$21]; //@line 3049 "_elementtree.c"
        var $23=($22)==((FUNCTION_TABLE_OFFSET + 26)); //@line 3049 "_elementtree.c"
        var $24=$mp; //@line 3050 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3049 "_elementtree.c"
      case 6: // $bb5
        var $25=$24; //@line 3050 "_elementtree.c"
        HEAP[$25]=__str119; //@line 3050 "_elementtree.c"
        __label__ = 10; break; //@line 3050 "_elementtree.c"
      case 7: // $bb6
        var $26=$24+16; //@line 3048 "_elementtree.c"
        $mp=$26; //@line 3048 "_elementtree.c"
        __label__ = 8; break; //@line 3048 "_elementtree.c"
      case 8: // $bb7
        var $27=$mp; //@line 3048 "_elementtree.c"
        var $28=$27; //@line 3048 "_elementtree.c"
        var $29=HEAP[$28]; //@line 3048 "_elementtree.c"
        var $30=($29)!=0; //@line 3048 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 3048 "_elementtree.c"
      case 9: // $bb9
        _PyErr_Clear(); //@line 3054 "_elementtree.c"
        __label__ = 10; break; //@line 3054 "_elementtree.c"
      case 10: // $bb10
        var $31=$g; //@line 3056 "_elementtree.c"
        var $32=_PyDict_GetItemString($31, __str120); //@line 3056 "_elementtree.c"
        HEAP[_elementtree_deepcopy_obj]=$32; //@line 3056 "_elementtree.c"
        var $33=$g; //@line 3057 "_elementtree.c"
        var $34=_PyDict_GetItemString($33, __str49); //@line 3057 "_elementtree.c"
        HEAP[_elementtree_iter_obj]=$34; //@line 3057 "_elementtree.c"
        var $35=$g; //@line 3058 "_elementtree.c"
        var $36=_PyDict_GetItemString($35, __str50); //@line 3058 "_elementtree.c"
        HEAP[_elementtree_itertext_obj]=$36; //@line 3058 "_elementtree.c"
        var $37=_PyCapsule_Import(__str121, 0); //@line 3062 "_elementtree.c"
        var $38=$37; //@line 3062 "_elementtree.c"
        HEAP[_expat_capi]=$38; //@line 3062 "_elementtree.c"
        var $39=($38)!=0; //@line 3063 "_elementtree.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 3063 "_elementtree.c"
      case 11: // $bb11
        var $40=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $41=$40; //@line 3065 "_elementtree.c"
        var $42=HEAP[$41]; //@line 3065 "_elementtree.c"
        var $43=_strcmp($42, __str122); //@line 3065 "_elementtree.c"
        var $44=($43)!=0; //@line 3065 "_elementtree.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 3065 "_elementtree.c"
      case 12: // $bb12
        var $45=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $46=$45+4; //@line 3065 "_elementtree.c"
        var $47=HEAP[$46]; //@line 3065 "_elementtree.c"
        var $48=($47) <= 79; //@line 3065 "_elementtree.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 3065 "_elementtree.c"
      case 13: // $bb13
        var $49=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $50=$49+8; //@line 3065 "_elementtree.c"
        var $51=HEAP[$50]; //@line 3065 "_elementtree.c"
        var $52=($51)!=2; //@line 3065 "_elementtree.c"
        if ($52) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 3065 "_elementtree.c"
      case 14: // $bb14
        var $53=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $54=$53+12; //@line 3065 "_elementtree.c"
        var $55=HEAP[$54]; //@line 3065 "_elementtree.c"
        var $56=($55)!=0; //@line 3065 "_elementtree.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 3065 "_elementtree.c"
      case 15: // $bb15
        var $57=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $58=$57+16; //@line 3065 "_elementtree.c"
        var $59=HEAP[$58]; //@line 3065 "_elementtree.c"
        var $60=($59)!=0; //@line 3065 "_elementtree.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3065 "_elementtree.c"
      case 16: // $bb16
        HEAP[_expat_capi]=0; //@line 3070 "_elementtree.c"
        __label__ = 17; break; //@line 3070 "_elementtree.c"
      case 17: // $bb17
        var $61=HEAP[_PyExc_SyntaxError]; //@line 3074 "_elementtree.c"
        var $62=_PyErr_NewException(__str123, $61, 0); //@line 3074 "_elementtree.c"
        HEAP[_elementtree_parseerror_obj]=$62; //@line 3074 "_elementtree.c"
        var $63=HEAP[_elementtree_parseerror_obj]; //@line 3077 "_elementtree.c"
        var $64=$63; //@line 3077 "_elementtree.c"
        var $65=HEAP[$64]; //@line 3077 "_elementtree.c"
        var $66=($65) + 1; //@line 3077 "_elementtree.c"
        var $67=$63; //@line 3077 "_elementtree.c"
        HEAP[$67]=$66; //@line 3077 "_elementtree.c"
        var $68=HEAP[_elementtree_parseerror_obj]; //@line 3078 "_elementtree.c"
        var $69=$m; //@line 3078 "_elementtree.c"
        var $70=_PyModule_AddObject($69, __str124, $68); //@line 3078 "_elementtree.c"
        __label__ = 18; break; //@line 3078 "_elementtree.c"
      case 18: // $return
        ;
        return; //@line 2878 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_elementtree"] = _init_elementtree;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyObject_Malloc,0,_PyObject_Realloc,0,_PyObject_Free,0,_expat_start_handler,0,_expat_end_handler,0,_expat_default_handler,0,_expat_data_handler,0,_expat_comment_handler,0,_expat_pi_handler,0,_expat_unknown_encoding_handler,0,_expat_start_ns_handler,0,_expat_end_ns_handler,0,_element_reduce,0,_element_clear,0,_element_get,0,_element_set,0,_element_find,0,_element_findtext,0,_element_findall,0,_element_append,0,_element_extend,0,_element_insert,0,_element_remove,0,_element_iter,0,_element_itertext,0,_element_iterfind,0,_element_getchildren,0,_element_items,0,_element_keys,0,_element_makeelement,0,_element_copy,0,_element_deepcopy,0,_element_length,0,_element_getitem,0,_element_setitem,0,_element_subscr,0,_element_ass_subscr,0,_element_dealloc,0,_element_getattr,0,_element_setattr,0,_element_repr,0,_treebuilder_data,0,_treebuilder_start,0,_treebuilder_end,0,_treebuilder_xml,0,_treebuilder_close,0,_treebuilder_dealloc,0,_treebuilder_getattr,0,_xmlparser_feed,0,_xmlparser_close,0,_xmlparser_parse,0,_xmlparser_setevents,0,_xmlparser_dealloc,0,_xmlparser_getattr,0,_element,0,_subelement,0,_treebuilder,0,_xmlparser,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_elementtree_deepcopy_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([100,101,101,112,99,111,112,121,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* deepcopy helper not  */, "i8", ALLOC_NORMAL);
__str1=allocate(1, "i8", ALLOC_NORMAL);
__str2=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([79,124,79,33,58,69,108,101,109,101,110,116,0] /* O|O!:Element\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([79,33,79,124,79,33,58,83,117,98,69,108,101,109,101,110,116,0] /* O!O|O!:SubElement\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([79,33,58,97,112,112,101,110,100,0] /* O!:append\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([58,99,108,101,97,114,0] /* :clear\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([58,95,95,99,111,112,121,95,95,0] /* :__copy__\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([79,58,95,95,100,101,101,112,99,111,112,121,95,95,0] /* O:__deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([79,58,101,120,116,101,110,100,0] /* O:extend\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([101,120,112,101,99,116,101,100,32,115,101,113,117,101,110,99,101,44,32,110,111,116,32,34,37,46,50,48,48,115,34,0] /* expected sequence, n */, "i8", ALLOC_NORMAL);
__str11=allocate([79,124,79,58,102,105,110,100,0] /* O|O:find\00 */, "i8", ALLOC_NORMAL);
_elementpath_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str12=allocate([102,105,110,100,0] /* find\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([79,79,79,0] /* OOO\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([79,124,79,79,58,102,105,110,100,116,101,120,116,0] /* O|OO:findtext\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([102,105,110,100,116,101,120,116,0] /* findtext\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([79,79,79,79,0] /* OOOO\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([79,124,79,58,102,105,110,100,97,108,108,0] /* O|O:findall\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([102,105,110,100,97,108,108,0] /* findall\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([79,124,79,58,105,116,101,114,102,105,110,100,0] /* O|O:iterfind\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([105,116,101,114,102,105,110,100,0] /* iterfind\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([79,124,79,58,103,101,116,0] /* O|O:get\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([58,103,101,116,99,104,105,108,100,114,101,110,0] /* :getchildren\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([124,79,58,105,116,101,114,0] /* |O:iter\00 */, "i8", ALLOC_NORMAL);
_elementtree_iter_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str24=allocate([105,116,101,114,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* iter helper not foun */, "i8", ALLOC_NORMAL);
__str25=allocate([58,105,116,101,114,116,101,120,116,0] /* :itertext\00 */, "i8", ALLOC_NORMAL);
_elementtree_itertext_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str26=allocate([105,116,101,114,116,101,120,116,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* itertext helper not  */, "i8", ALLOC_NORMAL);
__str27=allocate([99,104,105,108,100,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* child index out of r */, "i8", ALLOC_NORMAL);
__str28=allocate([105,79,33,58,105,110,115,101,114,116,0] /* iO!:insert\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([58,105,116,101,109,115,0] /* :items\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([58,107,101,121,115,0] /* :keys\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([79,79,58,109,97,107,101,101,108,101,109,101,110,116,0] /* OO:makeelement\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([58,95,95,114,101,100,117,99,101,95,95,0] /* :__reduce__\00 */, "i8", ALLOC_NORMAL);
_elementtree_copyelement_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str33=allocate([99,111,112,121,101,108,101,109,101,110,116,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* copyelement helper n */, "i8", ALLOC_NORMAL);
__str34=allocate([79,40,78,41,0] /* O(N)\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([79,33,58,114,101,109,111,118,101,0] /* O!:remove\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([108,105,115,116,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* list.remove(x): x no */, "i8", ALLOC_NORMAL);
__str37=allocate([60,69,108,101,109,101,110,116,32,37,115,32,97,116,32,37,112,62,0] /* <Element %s at %p>\0 */, "i8", ALLOC_NORMAL);
__str38=allocate([79,79,58,115,101,116,0] /* OO:set\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([99,104,105,108,100,32,97,115,115,105,103,110,109,101,110,116,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* child assignment ind */, "i8", ALLOC_NORMAL);
__str40=allocate([101,108,101,109,101,110,116,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0] /* element indices must */, "i8", ALLOC_NORMAL);
__str41=allocate([97,116,116,101,109,112,116,32,116,111,32,97,115,115,105,103,110,32,115,101,113,117,101,110,99,101,32,111,102,32,115,105,122,101,32,37,122,100,32,116,111,32,101,120,116,101,110,100,101,100,32,115,108,105,99,101,32,111,102,32,115,105,122,101,32,37,122,100,0] /* attempt to assign se */, "i8", ALLOC_NORMAL);
__str42=allocate([99,108,101,97,114,0] /* clear\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([103,101,116,0] /* get\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([115,101,116,0] /* set\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([97,112,112,101,110,100,0] /* append\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([101,120,116,101,110,100,0] /* extend\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([114,101,109,111,118,101,0] /* remove\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([105,116,101,114,0] /* iter\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([105,116,101,114,116,101,120,116,0] /* itertext\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([103,101,116,105,116,101,114,97,116,111,114,0] /* getiterator\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([103,101,116,99,104,105,108,100,114,101,110,0] /* getchildren\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([105,116,101,109,115,0] /* items\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([107,101,121,115,0] /* keys\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([109,97,107,101,101,108,101,109,101,110,116,0] /* makeelement\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([95,95,100,101,101,112,99,111,112,121,95,95,0] /* __deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([33,95,95,114,101,100,117,99,101,95,95,0] /* !__reduce__\00 */, "i8", ALLOC_NORMAL);
_element_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str59=allocate([116,97,103,0] /* tag\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([116,101,120,116,0] /* text\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([116,97,105,108,0] /* tail\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,116,116,114,105,98,0] /* attrib\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([99,97,110,39,116,32,100,101,108,101,116,101,32,101,108,101,109,101,110,116,32,97,116,116,114,105,98,117,116,101,115,0] /* can't delete element */, "i8", ALLOC_NORMAL);
_element_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_element_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
__str64=allocate([69,108,101,109,101,110,116,0] /* Element\00 */, "i8", ALLOC_NORMAL);
_Element_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str65=allocate([58,84,114,101,101,66,117,105,108,100,101,114,0] /* :TreeBuilder\00 */, "i8", ALLOC_NORMAL);
_elementtree_parseerror_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str66=allocate([109,117,108,116,105,112,108,101,32,101,108,101,109,101,110,116,115,32,111,110,32,116,111,112,32,108,101,118,101,108,0] /* multiple elements on */, "i8", ALLOC_NORMAL);
__str67=allocate([112,111,112,32,102,114,111,109,32,101,109,112,116,121,32,115,116,97,99,107,0] /* pop from empty stack */, "i8", ALLOC_NORMAL);
__str68=allocate([79,79,0] /* OO\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([79,58,100,97,116,97,0] /* O:data\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([79,58,101,110,100,0] /* O:end\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([58,99,108,111,115,101,0] /* :close\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([79,124,79,58,115,116,97,114,116,0] /* O|O:start\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([79,79,58,120,109,108,0] /* OO:xml\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([115,116,97,114,116,0] /* start\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([101,110,100,0] /* end\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([120,109,108,0] /* xml\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
_treebuilder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str79=allocate([84,114,101,101,66,117,105,108,100,101,114,0] /* TreeBuilder\00 */, "i8", ALLOC_NORMAL);
_TreeBuilder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str80=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([37,115,58,32,108,105,110,101,32,37,100,44,32,99,111,108,117,109,110,32,37,100,0] /* %s: line %d, column  */, "i8", ALLOC_NORMAL);
__str82=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([40,105,105,41,0] /* (ii)\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([112,111,115,105,116,105,111,110,0] /* position\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([117,110,100,101,102,105,110,101,100,32,101,110,116,105,116,121,32,38,37,46,49,48,48,115,59,0] /* undefined entity &%. */, "i8", ALLOC_NORMAL);
_expat_capi=allocate(1, "%struct.PyExpat_CAPI*", ALLOC_NORMAL);
__str87=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([124,79,122,58,88,77,76,80,97,114,115,101,114,0] /* |Oz:XMLParser\00 */, "i8", ALLOC_NORMAL);
_kwlist_12207=allocate(12, "i8*", ALLOC_NORMAL);
__str89=allocate([116,97,114,103,101,116,0] /* target\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([101,110,99,111,100,105,110,103,0] /* encoding\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([99,97,110,110,111,116,32,108,111,97,100,32,100,105,115,112,97,116,99,104,32,116,97,98,108,101,32,102,114,111,109,32,112,121,101,120,112,97,116,0] /* cannot load dispatch */, "i8", ALLOC_NORMAL);
_memory_handler_12204=allocate(12, ["i8* (i32)*",0,0,0,"i8* (i8*, i32)*",0,0,0,"void (i8*)*",0,0,0], ALLOC_NORMAL);
__str92=allocate([125,0] /* }\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([99,111,109,109,101,110,116,0] /* comment\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([112,105,0] /* pi\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([115,35,58,102,101,101,100,0] /* s#:feed\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([79,58,95,112,97,114,115,101,0] /* O:_parse\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([79,33,124,79,58,95,115,101,116,101,118,101,110,116,115,0] /* O!|O:_setevents\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([101,118,101,110,116,32,104,97,110,100,108,105,110,103,32,111,110,108,121,32,115,117,112,112,111,114,116,101,100,32,102,111,114,32,99,69,108,101,109,101,110,116,84,114,101,101,46,84,114,101,101,98,117,105,108,100,101,114,32,116,97,114,103,101,116,115,0] /* event handling only  */, "i8", ALLOC_NORMAL);
__str101=allocate([115,116,97,114,116,45,110,115,0] /* start-ns\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([101,110,100,45,110,115,0] /* end-ns\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([117,110,107,110,111,119,110,32,101,118,101,110,116,32,39,37,115,39,0] /* unknown event '%s'\0 */, "i8", ALLOC_NORMAL);
__str104=allocate([105,110,118,97,108,105,100,32,101,118,101,110,116,32,116,117,112,108,101,0] /* invalid event tuple\ */, "i8", ALLOC_NORMAL);
__str105=allocate([102,101,101,100,0] /* feed\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([95,112,97,114,115,101,0] /* _parse\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([95,115,101,116,101,118,101,110,116,115,0] /* _setevents\00 */, "i8", ALLOC_NORMAL);
_xmlparser_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str108=allocate([101,110,116,105,116,121,0] /* entity\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([118,101,114,115,105,111,110,0] /* version\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([69,120,112,97,116,32,37,100,46,37,100,46,37,100,0] /* Expat %d.%d.%d\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([88,77,76,80,97,114,115,101,114,0] /* XMLParser\00 */, "i8", ALLOC_NORMAL);
_XMLParser_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str112=allocate([83,117,98,69,108,101,109,101,110,116,0] /* SubElement\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([88,77,76,84,114,101,101,66,117,105,108,100,101,114,0] /* XMLTreeBuilder\00 */, "i8", ALLOC_NORMAL);
__functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str114=allocate([95,101,108,101,109,101,110,116,116,114,101,101,0] /* _elementtree\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([95,95,98,117,105,108,116,105,110,115,95,95,0] /* __builtins__\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([102,114,111,109,32,99,111,112,121,32,105,109,112,111,114,116,32,99,111,112,121,44,32,100,101,101,112,99,111,112,121,10,116,114,121,58,10,32,32,102,114,111,109,32,120,109,108,46,101,116,114,101,101,32,105,109,112,111,114,116,32,69,108,101,109,101,110,116,84,114,101,101,10,101,120,99,101,112,116,32,73,109,112,111,114,116,69,114,114,111,114,58,10,32,32,105,109,112,111,114,116,32,69,108,101,109,101,110,116,84,114,101,101,10,69,84,32,61,32,69,108,101,109,101,110,116,84,114,101,101,10,100,101,108,32,69,108,101,109,101,110,116,84,114,101,101,10,105,109,112,111,114,116,32,95,101,108,101,109,101,110,116,116,114,101,101,32,97,115,32,99,69,108,101,109,101,110,116,84,114,101,101,10,116,114,121,58,10,32,32,99,111,112,121,40,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,39,120,39,41,41,10,101,120,99,101,112,116,58,10,32,32,100,101,102,32,99,111,112,121,101,108,101,109,101,110,116,40,101,108,101,109,41,58,10,32,32,32,32,114,101,116,117,114,110,32,101,108,101,109,10,99,108,97,115,115,32,67,111,109,109,101,110,116,80,114,111,120,121,58,10,32,100,101,102,32,95,95,99,97,108,108,95,95,40,115,101,108,102,44,32,116,101,120,116,61,78,111,110,101,41,58,10,32,32,101,108,101,109,101,110,116,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,69,84,46,67,111,109,109,101,110,116,41,10,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,116,101,120,116,10,32,32,114,101,116,117,114,110,32,101,108,101,109,101,110,116,10,32,100,101,102,32,95,95,99,109,112,95,95,40,115,101,108,102,44,32,111,116,104,101,114,41,58,10,32,32,114,101,116,117,114,110,32,99,109,112,40,69,84,46,67,111,109,109,101,110,116,44,32,111,116,104,101,114,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,67,111,109,109,101,110,116,32,61,32,67,111,109,109,101,110,116,80,114,111,120,121,40,41,10,99,108,97,115,115,32,69,108,101,109,101,110,116,84,114,101,101,40,69,84,46,69,108,101,109,101,110,116,84,114,101,101,41,58,10,32,32,100,101,102,32,112,97,114,115,101,40,115,101,108,102,44,32,115,111,117,114,99,101,44,32,112,97,114,115,101,114,61,78,111,110,101,41,58,10,32,32,32,32,105,102,32,110,111,116,32,104,97,115,97,116,116,114,40,115,111,117,114,99,101,44,32,39,114,101,97,100,39,41,58,10,32,32,32,32,32,32,115,111,117,114,99,101,32,61,32,111,112,101,110,40,115,111,117,114,99,101,44,32,39,114,98,39,41,10,32,32,32,32,105,102,32,112,97,114,115,101,114,32,105,115,32,110,111,116,32,78,111,110,101,58,10,32,32,32,32,32,32,119,104,105,108,101,32,49,58,10,32,32,32,32,32,32,32,32,100,97,116,97,32,61,32,115,111,117,114,99,101,46,114,101,97,100,40,54,53,53,51,54,41,10,32,32,32,32,32,32,32,32,105,102,32,110,111,116,32,100,97,116,97,58,10,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,10,32,32,32,32,32,32,32,32,112,97,114,115,101,114,46,102,101,101,100,40,100,97,116,97,41,10,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,41,10,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,112,97,114,115,101,114,46,95,112,97,114,115,101,40,115,111,117,114,99,101,41,10,32,32,32,32,114,101,116,117,114,110,32,115,101,108,102,46,95,114,111,111,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,84,114,101,101,32,61,32,69,108,101,109,101,110,116,84,114,101,101,10,100,101,102,32,105,116,101,114,40,110,111,100,101,44,32,116,97,103,61,78,111,110,101,41,58,10,32,32,105,102,32,116,97,103,32,61,61,32,39,42,39,58,10,32,32,32,32,116,97,103,32,61,32,78,111,110,101,10,32,32,105,102,32,116,97,103,32,105,115,32,78,111,110,101,32,111,114,32,110,111,100,101,46,116,97,103,32,61,61,32,116,97,103,58,10,32,32,32,32,121,105,101,108,100,32,110,111,100,101,10,32,32,102,111,114,32,110,111,100,101,32,105,110,32,110,111,100,101,58,10,32,32,32,32,102,111,114,32,110,111,100,101,32,105,110,32,105,116,101,114,40,110,111,100,101,44,32,116,97,103,41,58,10,32,32,32,32,32,32,121,105,101,108,100,32,110,111,100,101,10,100,101,102,32,105,116,101,114,116,101,120,116,40,110,111,100,101,41,58,10,32,32,105,102,32,110,111,100,101,46,116,101,120,116,58,10,32,32,32,32,121,105,101,108,100,32,110,111,100,101,46,116,101,120,116,10,32,32,102,111,114,32,101,32,105,110,32,110,111,100,101,58,10,32,32,32,32,102,111,114,32,115,32,105,110,32,101,46,105,116,101,114,116,101,120,116,40,41,58,10,32,32,32,32,32,32,121,105,101,108,100,32,115,10,32,32,32,32,105,102,32,101,46,116,97,105,108,58,10,32,32,32,32,32,32,121,105,101,108,100,32,101,46,116,97,105,108,10,100,101,102,32,112,97,114,115,101,40,115,111,117,114,99,101,44,32,112,97,114,115,101,114,61,78,111,110,101,41,58,10,32,32,116,114,101,101,32,61,32,69,108,101,109,101,110,116,84,114,101,101,40,41,10,32,32,116,114,101,101,46,112,97,114,115,101,40,115,111,117,114,99,101,44,32,112,97,114,115,101,114,41,10,32,32,114,101,116,117,114,110,32,116,114,101,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,112,97,114,115,101,32,61,32,112,97,114,115,101,10,99,108,97,115,115,32,105,116,101,114,112,97,114,115,101,40,111,98,106,101,99,116,41,58,10,32,114,111,111,116,32,61,32,78,111,110,101,10,32,100,101,102,32,95,95,105,110,105,116,95,95,40,115,101,108,102,44,32,102,105,108,101,44,32,101,118,101,110,116,115,61,78,111,110,101,41,58,10,32,32,105,102,32,110,111,116,32,104,97,115,97,116,116,114,40,102,105,108,101,44,32,39,114,101,97,100,39,41,58,10,32,32,32,32,102,105,108,101,32,61,32,111,112,101,110,40,102,105,108,101,44,32,39,114,98,39,41,10,32,32,115,101,108,102,46,95,102,105,108,101,32,61,32,102,105,108,101,10,32,32,115,101,108,102,46,95,101,118,101,110,116,115,32,61,32,91,93,10,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,48,10,32,32,115,101,108,102,46,114,111,111,116,32,61,32,115,101,108,102,46,95,114,111,111,116,32,61,32,78,111,110,101,10,32,32,98,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,84,114,101,101,66,117,105,108,100,101,114,40,41,10,32,32,115,101,108,102,46,95,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,98,41,10,32,32,115,101,108,102,46,95,112,97,114,115,101,114,46,95,115,101,116,101,118,101,110,116,115,40,115,101,108,102,46,95,101,118,101,110,116,115,44,32,101,118,101,110,116,115,41,10,32,100,101,102,32,110,101,120,116,40,115,101,108,102,41,58,10,32,32,119,104,105,108,101,32,49,58,10,32,32,32,32,116,114,121,58,10,32,32,32,32,32,32,105,116,101,109,32,61,32,115,101,108,102,46,95,101,118,101,110,116,115,91,115,101,108,102,46,95,105,110,100,101,120,93,10,32,32,32,32,101,120,99,101,112,116,32,73,110,100,101,120,69,114,114,111,114,58,10,32,32,32,32,32,32,105,102,32,115,101,108,102,46,95,112,97,114,115,101,114,32,105,115,32,78,111,110,101,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,114,111,111,116,32,61,32,115,101,108,102,46,95,114,111,111,116,10,32,32,32,32,32,32,32,32,114,97,105,115,101,32,83,116,111,112,73,116,101,114,97,116,105,111,110,10,32,32,32,32,32,32,35,32,108,111,97,100,32,101,118,101,110,116,32,98,117,102,102,101,114,10,32,32,32,32,32,32,100,101,108,32,115,101,108,102,46,95,101,118,101,110,116,115,91,58,93,10,32,32,32,32,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,48,10,32,32,32,32,32,32,100,97,116,97,32,61,32,115,101,108,102,46,95,102,105,108,101,46,114,101,97,100,40,49,54,51,56,52,41,10,32,32,32,32,32,32,105,102,32,100,97,116,97,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,112,97,114,115,101,114,46,102,101,101,100,40,100,97,116,97,41,10,32,32,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,115,101,108,102,46,95,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,112,97,114,115,101,114,32,61,32,78,111,110,101,10,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,115,101,108,102,46,95,105,110,100,101,120,32,43,32,49,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,116,101,109,10,32,100,101,102,32,95,95,105,116,101,114,95,95,40,115,101,108,102,41,58,10,32,32,114,101,116,117,114,110,32,115,101,108,102,10,99,69,108,101,109,101,110,116,84,114,101,101,46,105,116,101,114,112,97,114,115,101,32,61,32,105,116,101,114,112,97,114,115,101,10,99,108,97,115,115,32,80,73,80,114,111,120,121,58,10,32,100,101,102,32,95,95,99,97,108,108,95,95,40,115,101,108,102,44,32,116,97,114,103,101,116,44,32,116,101,120,116,61,78,111,110,101,41,58,10,32,32,101,108,101,109,101,110,116,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,69,84,46,80,73,41,10,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,116,97,114,103,101,116,10,32,32,105,102,32,116,101,120,116,58,10,32,32,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,101,108,101,109,101,110,116,46,116,101,120,116,32,43,32,39,32,39,32,43,32,116,101,120,116,10,32,32,114,101,116,117,114,110,32,101,108,101,109,101,110,116,10,32,100,101,102,32,95,95,99,109,112,95,95,40,115,101,108,102,44,32,111,116,104,101,114,41,58,10,32,32,114,101,116,117,114,110,32,99,109,112,40,69,84,46,80,73,44,32,111,116,104,101,114,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,80,73,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,80,114,111,99,101,115,115,105,110,103,73,110,115,116,114,117,99,116,105,111,110,32,61,32,80,73,80,114,111,120,121,40,41,10,100,101,102,32,88,77,76,40,116,101,120,116,41,58,10,32,32,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,41,10,32,32,112,97,114,115,101,114,46,102,101,101,100,40,116,101,120,116,41,10,32,32,114,101,116,117,114,110,32,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,102,114,111,109,115,116,114,105,110,103,32,61,32,88,77,76,10,100,101,102,32,88,77,76,73,68,40,116,101,120,116,41,58,10,32,32,116,114,101,101,32,61,32,88,77,76,40,116,101,120,116,41,10,32,32,105,100,115,32,61,32,123,125,10,32,32,102,111,114,32,101,108,101,109,32,105,110,32,116,114,101,101,46,105,116,101,114,40,41,58,10,32,32,32,32,105,100,32,61,32,101,108,101,109,46,103,101,116,40,39,105,100,39,41,10,32,32,32,32,105,102,32,105,100,58,10,32,32,32,32,32,32,105,100,115,91,105,100,93,32,61,32,101,108,101,109,10,32,32,114,101,116,117,114,110,32,116,114,101,101,44,32,105,100,115,10,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,73,68,32,61,32,88,77,76,73,68,10,116,114,121,58,10,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,32,61,32,69,84,46,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,10,101,120,99,101,112,116,32,65,116,116,114,105,98,117,116,101,69,114,114,111,114,58,10,32,100,101,102,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,40,112,114,101,102,105,120,44,32,117,114,105,41,58,10,32,32,69,84,46,95,110,97,109,101,115,112,97,99,101,95,109,97,112,91,117,114,105,93,32,61,32,112,114,101,102,105,120,10,99,69,108,101,109,101,110,116,84,114,101,101,46,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,32,61,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,100,117,109,112,32,61,32,69,84,46,100,117,109,112,10,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,80,97,116,104,32,61,32,69,108,101,109,101,110,116,80,97,116,104,32,61,32,69,84,46,69,108,101,109,101,110,116,80,97,116,104,10,99,69,108,101,109,101,110,116,84,114,101,101,46,105,115,101,108,101,109,101,110,116,32,61,32,69,84,46,105,115,101,108,101,109,101,110,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,81,78,97,109,101,32,61,32,69,84,46,81,78,97,109,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,116,111,115,116,114,105,110,103,32,61,32,69,84,46,116,111,115,116,114,105,110,103,10,99,69,108,101,109,101,110,116,84,114,101,101,46,102,114,111,109,115,116,114,105,110,103,108,105,115,116,32,61,32,69,84,46,102,114,111,109,115,116,114,105,110,103,108,105,115,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,116,111,115,116,114,105,110,103,108,105,115,116,32,61,32,69,84,46,116,111,115,116,114,105,110,103,108,105,115,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,86,69,82,83,73,79,78,32,61,32,39,49,46,48,46,54,39,10,99,69,108,101,109,101,110,116,84,114,101,101,46,95,95,118,101,114,115,105,111,110,95,95,32,61,32,39,49,46,48,46,54,39,10,0] /* from copy import cop */, "i8", ALLOC_NORMAL);
__str117=allocate([69,108,101,109,101,110,116,80,97,116,104,0] /* ElementPath\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([99,111,112,121,101,108,101,109,101,110,116,0] /* copyelement\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([100,101,101,112,99,111,112,121,0] /* deepcopy\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([112,121,101,120,112,97,116,46,101,120,112,97,116,95,67,65,80,73,0] /* pyexpat.expat_CAPI\0 */, "i8", ALLOC_NORMAL);
__str122=allocate([112,121,101,120,112,97,116,46,101,120,112,97,116,95,67,65,80,73,32,49,46,48,0] /* pyexpat.expat_CAPI 1 */, "i8", ALLOC_NORMAL);
__str123=allocate([99,69,108,101,109,101,110,116,84,114,101,101,46,80,97,114,115,101,69,114,114,111,114,0] /* cElementTree.ParseEr */, "i8", ALLOC_NORMAL);
__str124=allocate([80,97,114,115,101,69,114,114,111,114,0] /* ParseError\00 */, "i8", ALLOC_NORMAL);
HEAP[_element_methods]=__str42;
HEAP[_element_methods+4]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_element_methods+16]=__str43;
HEAP[_element_methods+20]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_element_methods+32]=__str44;
HEAP[_element_methods+36]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_element_methods+48]=__str12;
HEAP[_element_methods+52]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_element_methods+64]=__str15;
HEAP[_element_methods+68]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_element_methods+80]=__str18;
HEAP[_element_methods+84]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_element_methods+96]=__str45;
HEAP[_element_methods+100]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_element_methods+112]=__str46;
HEAP[_element_methods+116]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_element_methods+128]=__str47;
HEAP[_element_methods+132]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_element_methods+144]=__str48;
HEAP[_element_methods+148]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_element_methods+160]=__str49;
HEAP[_element_methods+164]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_element_methods+176]=__str50;
HEAP[_element_methods+180]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_element_methods+192]=__str20;
HEAP[_element_methods+196]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_element_methods+208]=__str51;
HEAP[_element_methods+212]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_element_methods+224]=__str52;
HEAP[_element_methods+228]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_element_methods+240]=__str53;
HEAP[_element_methods+244]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_element_methods+256]=__str54;
HEAP[_element_methods+260]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_element_methods+272]=__str55;
HEAP[_element_methods+276]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_element_methods+288]=__str56;
HEAP[_element_methods+292]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_element_methods+304]=__str57;
HEAP[_element_methods+308]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_element_methods+320]=__str58;
HEAP[_element_methods+324]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_element_as_sequence]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_element_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_element_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_element_as_mapping]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_element_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_element_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_Element_Type+12]=__str64;
HEAP[_Element_Type+24]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_Element_Type+32]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_Element_Type+36]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_Element_Type+44]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_Element_Type+52]=_element_as_sequence;
HEAP[_Element_Type+56]=_element_as_mapping;
HEAP[_treebuilder_methods]=__str74;
HEAP[_treebuilder_methods+4]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_treebuilder_methods+16]=__str75;
HEAP[_treebuilder_methods+20]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_treebuilder_methods+32]=__str76;
HEAP[_treebuilder_methods+36]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_treebuilder_methods+48]=__str77;
HEAP[_treebuilder_methods+52]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_treebuilder_methods+64]=__str78;
HEAP[_treebuilder_methods+68]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_TreeBuilder_Type+12]=__str79;
HEAP[_TreeBuilder_Type+24]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_TreeBuilder_Type+32]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_kwlist_12207]=__str89;
HEAP[_kwlist_12207+4]=__str90;
HEAP[_xmlparser_methods]=__str105;
HEAP[_xmlparser_methods+4]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_xmlparser_methods+16]=__str78;
HEAP[_xmlparser_methods+20]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_xmlparser_methods+32]=__str106;
HEAP[_xmlparser_methods+36]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_xmlparser_methods+48]=__str107;
HEAP[_xmlparser_methods+52]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_XMLParser_Type+12]=__str111;
HEAP[_XMLParser_Type+24]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_XMLParser_Type+32]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[__functions]=__str64;
HEAP[__functions+4]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[__functions+16]=__str112;
HEAP[__functions+20]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[__functions+32]=__str79;
HEAP[__functions+36]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[__functions+48]=__str111;
HEAP[__functions+52]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[__functions+64]=__str113;
HEAP[__functions+68]=(FUNCTION_TABLE_OFFSET + 116);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

