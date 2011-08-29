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



var $0___SIZE = 32; // %0
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var __str;
var __str1;
var _crypt_crypt__doc__;
var __str2;
var _crypt_methods;









  function _crypt_crypt($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $word=__stackBase__;
        var $salt=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 22 "cryptmodule.c"
        var $2=_PyArg_ParseTuple($1, __str, allocate([$word,0,0,0,$salt,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 22 "cryptmodule.c"
        var $3=($2)==0; //@line 22 "cryptmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 22 "cryptmodule.c"
      case 1: // $bb
        $0=0; //@line 23 "cryptmodule.c"
        __label__ = 3; break; //@line 23 "cryptmodule.c"
      case 2: // $bb1
        var $4=HEAP[$salt]; //@line 27 "cryptmodule.c"
        var $5=HEAP[$word]; //@line 27 "cryptmodule.c"
        var $6=_crypt($5, $4); //@line 27 "cryptmodule.c"
        var $7=_Py_BuildValue(__str1, allocate([$6,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 27 "cryptmodule.c"
        $0=$7; //@line 27 "cryptmodule.c"
        __label__ = 3; break; //@line 27 "cryptmodule.c"
      case 3: // $bb2
        var $8=$0; //@line 23 "cryptmodule.c"
        $retval=$8; //@line 23 "cryptmodule.c"
        var $retval3=$retval; //@line 23 "cryptmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 23 "cryptmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initcrypt() {
    ;
    var __label__;
  
    var $0=_Py_InitModule4(__str2, _crypt_methods, 0, 0, 1013); //@line 48 "cryptmodule.c"
    ;
    return; //@line 49 "cryptmodule.c"
  }
  Module["_initcrypt"] = _initcrypt;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_crypt_crypt,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([115,115,58,99,114,121,112,116,0] /* ss:crypt\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
_crypt_crypt__doc__=allocate([99,114,121,112,116,40,119,111,114,100,44,32,115,97,108,116,41,32,45,62,32,115,116,114,105,110,103,10,119,111,114,100,32,119,105,108,108,32,117,115,117,97,108,108,121,32,98,101,32,97,32,117,115,101,114,39,115,32,112,97,115,115,119,111,114,100,46,32,115,97,108,116,32,105,115,32,97,32,50,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,10,119,104,105,99,104,32,119,105,108,108,32,98,101,32,117,115,101,100,32,116,111,32,115,101,108,101,99,116,32,111,110,101,32,111,102,32,52,48,57,54,32,118,97,114,105,97,116,105,111,110,115,32,111,102,32,68,69,83,46,32,84,104,101,32,99,104,97,114,97,99,116,101,114,115,10,105,110,32,115,97,108,116,32,109,117,115,116,32,98,101,32,101,105,116,104,101,114,32,34,46,34,44,32,34,47,34,44,32,111,114,32,97,110,32,97,108,112,104,97,110,117,109,101,114,105,99,32,99,104,97,114,97,99,116,101,114,46,32,82,101,116,117,114,110,115,10,116,104,101,32,104,97,115,104,101,100,32,112,97,115,115,119,111,114,100,32,97,115,32,97,32,115,116,114,105,110,103,44,32,119,104,105,99,104,32,119,105,108,108,32,98,101,32,99,111,109,112,111,115,101,100,32,111,102,32,99,104,97,114,97,99,116,101,114,115,32,102,114,111,109,10,116,104,101,32,115,97,109,101,32,97,108,112,104,97,98,101,116,32,97,115,32,116,104,101,32,115,97,108,116,46,0] /* crypt(word, salt) -> */, "i8", ALLOC_NORMAL);
__str2=allocate([99,114,121,112,116,0] /* crypt\00 */, "i8", ALLOC_NORMAL);
_crypt_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
HEAP[_crypt_methods]=__str2;
HEAP[_crypt_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_crypt_methods+12]=_crypt_crypt__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

