/**
  @preserve

  JS-Forth
  http://www.forthfreak.net/index.cgi?jsforth
  Licensed under th GNU GPL.

  Disclaimer: JS-Forth is delivered as-is. No warranties,
  implicit or explicit, towards its function, usability, fitness
  for any purpose are given. It is distributed for educative
  purposes, you may study it to your hearts delight. Should
  you plan to execute JS-Forth on any computer, you declare
  to not hold the programmer liable in any way for any damage
  JS-Forth may cause, be it to that computer, peripherals, or any
  other object in the range of several thousand kilometers, or
  more. The person initiating execution of JS-Forth is the one
  carrying sole responsibility for all and any damage resulting
  from this action. Also, you do not hold the programmer liable
  for any damage resulting from the study of JS-Forth.  Please
  do not stick your tongue into the power supply of the computer
  which is running JS-Forth.

  By opening JS-Forth for reading or execution, you make a full
  statement that you have read and understood all of the above
  disclaimer, and proceed willingly, volunteerily, and of your
  own choice on your own risk and responsability.

  Having said that, I can assure you that JS-Forth has not been
  written to perform any malicious action on your computer or
  anyone elses. I run Js-Forth frequently, and no damage has
  occured from doing so, though no extensive testing has been
  done on it as a whole yet. Those parts which work do so in a
  pretty stable manner. A major version jump to v0.01 may be imminent.
*/

var version    = "0" ;
var subversion = "5200804171342" ;
var title      = "## JS-Forth " + version + "." + subversion + " ##" ;

// --------------------------------------------- vars you may wish to customize ---------------------------------------------------

var memend               = 0x100000 ;                         // memory allocated to jsforth (1 megacells is more than plenty)
var maxcookies           = 25                                 // number of disk sectors. >4 may be unsafe.
var cookiebasename       = "jsrepl-jsforth" ;                 // cookie name for saved blocks (blk number gets appended)
var cookieexpirationdate = Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000) ;  // the date your hard disk will get erased.
var infolines            = 1000 ;                             // backscroll buffer size of info screen
var paddistance          = 512  ;                             // space between here and pad.
var padsize              = 512 ;                              // remaining space above pad until dictionary overflow error
var maxbufs              = 2 ;                                // number of buffers. works with any between 1 ... maxmem
                                                              // default=2, more may be useful if working with many remote blocks
var blocktimeout         = 5000 ;                             // file i/o error if request not completed with this time (ms)

// --------------------------------------------------------------------------------------------------------------------------------


// --- character codes
var backspace      =   8 ;
var tab            =   9 ;
var carriagereturn =  13 ;
var esc            =  27 ;
var bl             =  32 ;


var suspended      =  -1 ;              // reason for suspending interpreter (event type)
                                        // -1: never started (helps source locator in see)
var dp             =   0 ;              // dictionary pointer
var catchframe     =   0 ;              // for catch/throw
var wc             =   0 ;              // header count
var inbuf          =  new Array()  ;    // accumulated input characters


var linelen        =  80 ;              // main screen
var lines          =  30 ;

var linelen2       =  55 ;              // info screen
var lines2         =  lines ;


var screensize     = lines * linelen ;
var tibsize        = linelen + 1 ;
var dictionaryfull = memend - (paddistance + padsize) ;

// heap memory tracking
var usedchunk      = new Array() ;
var freechunk      = new Array() ;
var heapend        = memend ;

// word header bit masks
var immediate      =  1 ;
var smudgebit      =  2 ;
var precedencebit  =  immediate ;


var s              = new Array();       // data stack
var r              = new Array();       // return stack
var m              = new Array();       // main memory
var h              = new Array();       // headers
var hf             = new Array();       // header flags (precendence bit, hide/reveal)
var x              = new Array();       // execution tokens
var t              = new Array();       // word type - accelerated execution because no
var sourceid       = new Array();       // nested loads/evaluate stack previous source id here
                                        // conditional branching to the corresponding
                                        // code for next per wordtype. this array contains
                                        // the proper next to use. this should also
                                        // simplify does>
h[0] = "" ;                             // in case header 0 gets accidently requested
var f              = new Array();       // float stack
var ip;                                 // forth vm instruction pointer
var w;                                  // forth vm word register
var sp             = 0;                 // forth vm parameter stack pointer
var rp             = 0;                 // forth vm return stack pointer
var tos;                                // stack cache
var ftos;                               // float stack cache





// constants for standard compliance bit masks
// a combination of those are written to the description of each word
// through variable COMPLIANCE, subsets of provided words are masked
var standard = new Array() ;

// standard selection and vocabularies share the same mechanism. therefore,
// using both concepts is a bit of a mix here now.
// standards and vocabularies use bit masks

var nextvocabulary = 1 ;  var uncertain =  nextvocabulary ;  standard[uncertain] = "   possibly other, need to look that up first" ;
nextvocabulary <<= 1   ;  var fig       =  nextvocabulary ;  standard[fig]       = "fig" ;
nextvocabulary <<= 1   ;  var f79       =  nextvocabulary ;  standard[f79]       = "f79" ;
nextvocabulary <<= 1   ;  var f83       =  nextvocabulary ;  standard[f83]       = "f83" ;
nextvocabulary <<= 1   ;  var ans       =  nextvocabulary ;  standard[ans]       = "dpans94" ;
nextvocabulary <<= 1   ;  var foerthchen=  nextvocabulary ;  standard[foerthchen]= "FOeRTHchen" ;
nextvocabulary <<= 1   ;  var jsf       =  nextvocabulary ;  standard[jsf]       = "JS-Forth" ;
                    var higheststandard =  nextvocabulary ;
                          var any       =  ans | f83 | f79 | fig | jsf ;       // but not foerthchen


// --- no more standards, vocabularies follow ---
nextvocabulary <<= 1   ;  var only      =  nextvocabulary ;
nextvocabulary <<= 1 ;    var forth     =  nextvocabulary  ;
nextvocabulary <<= 1 ;    var hidden    =  nextvocabulary  ;
nextvocabulary <<= 1 ;    var teststuff =  nextvocabulary  ;
                          var lastsystemvocabulary =  nextvocabulary  ;


var vocstack = new Array() ;                        // top element is in m[context]
var vocname = new Array() ;                         // contains xt of all vocs


function printvocname(n)  {
   var temp = 0 ;
   for (var i=only ; i != 0x40000000 ; i <<=1 ) {
      if (i == n)  {
         type(h[vocname[temp]] + " ") ;
         break ;
      }
      temp++ ;
   }
}



function jscomma(n)   { m[dp++] = n ;  return (dp-1) ;}

function jshiallot0(n)  {      // heap (buffers, allocate)
   for (var i=n ; i ; i--)  m[heapend++] = 0 ;
   return (heapend-n) ;
}

// variables, shared between javascript and forth:
// addressed by m[varname] from javascript, define a constant
// with value of address for access from forth.
var casesensitive = jscomma(0) ;      // switch case sensitive/insensitive dictionary search
var debugging     = jscomma(0) ;      // get spilled with output on info display
var warnings      = jscomma(-1) ;     // meant to disable javascript warnings, but hides only error messages
var compliance    = jscomma(jsf) ;    // cause find, words to scope only those words complying with the selected standard
var fittype       = jscomma(0) ;      // ALLOCATE chunk matching:    0: first, other: best fit
var outfile       = jscomma(-1) ;     // switch between output routines:
                                      //  -1 : fast terminal
                                      //  -2 : slow terminal
                                      //  >=0 : output to consecutive blocks  ( not implemented )
var blk           = jscomma(-1) ;     // currently accessed block, as set by load
var scr           = jscomma(0) ;      // last block accessed through list or user tools
var context       = jscomma(forth) ;  // first searched vocabulary on vocabulary stack
var current       = jscomma(forth) ;  // the vocabulary compiled to
var lastxt        = jscomma(0) ;      // contains execution token of most recently compiled word
var base          = jscomma(10) ;     // radix for i/o number conversion
var state         = jscomma(0) ;      // switch interpret/compile
var innerloop     = jscomma(0) ;      // compile time helper variable for loops
var innercase     = jscomma(0) ;      // of counter for inner case
var span          = jscomma(0) ;      // obsolete -- expect stores string len in here
var toin          = jscomma(0) ;      // input buffer handling
var hashtib       = jscomma(0) ;      // obsolescent - contains # chars in tib
var tib           = jshiallot0(tibsize) // input buffer

var parsebuf ;                        // usually address of tib, but can be block address
var parsebuflen ;                     // number of chars in parse buffer




// ----------------------------------------------- mass memory buffers ---------------------------------------------


var nextbuf       = 0 ;               // index of next buffer to use
var buf           = new Array() ;     // buffer addresses
var bufdirty      = new Array() ;     // buffer dirty flag
var bufblk        = new Array() ;     // block in this buf, or -1

var blockstat     = new Array()       // -1: indexed by blk, gives -1 for unbuffered, or, if buffered, buffer id







// ----- data storage for descriptions, stack effects -----
// also trying to use these for vocabularies
// "standard" is printed along with help. As this information is supplied
// anyway, the compiler could use it, by making sure only words which belong
// to a user specified standard are used, or printing warning otherwise.


var ds            = new Array();      // bitmask for compliancy and vocs
var dse           = new Array();      // stack effect, text



var lineofspaces  = "" ;
for ( var i=0 ; i<linelen ; i++ ) lineofspaces += " " ;



function describe(string1,bitmask)  {
   dse[wc] = string1 ;
   ds[wc]  = 0 | m[current] ; if (bitmask) ds[wc] = bitmask | m[current];
}



// =================================================================================================
//                                     dumb terminal emulator
// =================================================================================================





// ---- infos screen ----

function printinfos()  {
   // Nothing.
}
function info(string)   {
  // Nothing.
}
function debug(string)  { if (m[debugging]) info(string) ; }

// ---- interactive terminal screen ----

// THIS SHOULD BE REPLACED BY THE DESIRED PRINTING FUNCTION.
function _print(str) {
   document.terminal.dialog.value += str;
}

function type(string)  {
   _print(string);
}



var write = type;



function cr()  {
   _print("\n");
}



function cls()     {
   // Nothing.
}



function backspaces(n)    {
   // Nothing.
}


function emit(asc)     { type(String.fromCharCode(asc)); }


var querytype = type;





// =================================================================================================
//                                   primitives constructor
// =================================================================================================



var src = new Array() ;
// -2: script file
// -1: interactive console
//  0... blk*1024+charpos


function from()  {
   if (suspended)    return -2 ;
   if (m[blk] >= 0)  return m[blk]*1024+m[toin] ;
   return -1 ;
}



function newheader(name,flags)  {            // wc = word count
   h[++wc]   = name ;                        // header name
   src[wc]   = from() ;
   hf[wc]    = flags ;                       // immediate/reveal
   x[wc]     = dp ;                          // pointer to word body (was: xt)
   m[lastxt] = wc ;                          // last
   ds[wc]    = any | foerthchen | m[current] ;  // new words standard compliance
   dse[wc]   = "" ;                          // new word stack effect
   debug("compiling: " + name);
}


function nextprimitive()  { x[w]() ; }
function nexthilevel()    { w = x[w]    ;  x[m[w]]() ; }
function nextconstant()   { s[++sp]=tos ; tos=m[x[w]+1] ; }
function nextvariable()   { s[++sp]=tos ; tos=x[w]+1 ; }

// function nexthilevel()    { r[++rp] = ip ; ip = x[w]+1 ; }   // slower ...
// there's a dovocabulary further below, and a dodoes











function primitive(name,code,flags)  {
   newheader(name,flags|smudgebit) ;
   x[wc] = code ;
   t[wc] = nextprimitive ;
   return wc ;
}


function headerless()  {  h[wc] = "" ;  }





// =================================================================================================
//                                       misc helper words
// =================================================================================================




definitions(hidden) ;

function pack(a,n)   {
   w = "" ;
   for ( var i=n ; i; i--)  w += String.fromCharCode(m[a++]) ;
   return w;
}

function forthpack()   { tos=pack(s[sp--],tos) ; }
var x_pack=primitive("pack",forthpack) ;
describe("a n -- x",jsf) ;



function unpackstring(string,address)   {  // returns len
   var stringlen = string.length ;
   var destaddr = address + stringlen ;
   for (var i=stringlen; i; m[--destaddr]=string.charCodeAt(--i) )  {} ;
   return stringlen ;
}



// unpack packed string x to address, return number of characters
// can reuse the function above
function unpack()   {                                     // ( x a -- n )
   var string = s[sp--] ;                                 // string
   w = string.length ;                                    // string len
   tos += w ;                                             // last dest address + 1
   for (var i=w; i; m[--tos]=string.charCodeAt(--i) )  {} ;
   tos = w ;
}
var x_unpack = primitive("unpack",unpack) ;
describe("x a -- n",jsf) ;



function definitions(vocabulary) { m[current] = vocabulary ; }
definitions(forth) ;



function forthstackeffect()  {              // ( xt -- a n )
   s[++sp] = dp ;
   if (dse[tos]) {
      tos = unpackstring("( " + dse[tos] + " )",dp) ;
   } else {
      tos = 0 ;
   }
}
primitive("stackeffect",forthstackeffect) ;
describe("xt -- a n",jsf) ;



definitions(hidden)
function forthstorestackeffect()  {          // ( a n -- )
   forthpack() ;
   dse[m[lastxt]] = tos ;
   tos = s[sp--]
}
var x_storestackeffect = primitive("stackeffect!",forthstorestackeffect) ;
describe("a n --",jsf) ;



definitions(forth)
function forthinfo() {   // ( a n -- )                   info
   info(pack(s[sp--],tos)) ;
   tos = m[sp--] ;
}
primitive("info",forthinfo) ;
describe("a n --",jsf) ;



var clock ;

function forthstartclock() {
  clock = new Date().getTime();
}
primitive("startclock",forthstartclock) ;
describe("--",jsf) ;



function forthelapsed()    {
   w = new Date().getTime();
   s[++sp] = tos ;
   tos = w - clock ;
}
primitive("elapsed",forthelapsed) ;
describe("-- u",jsf) ;









// ----- multi standard selection -----

definitions(forth) ;

function forthfig()  { m[compliance] = fig ; }
primitive("fig",forthfig) ;
describe("--",jsf) ;


function forthfoerthchen()  { m[compliance] = foerthchen ; }
primitive("foerthchen",forthfoerthchen) ;
describe("--",jsf) ;


function forthf79()  { m[compliance] = f79 ; }
primitive("f79",forthf79) ;
describe("--",jsf) ;


function forthf83()  { m[compliance] = f83 ; }
primitive("f83",forthf83) ;
describe("--",f83|jsf) ;


function forthans()  { m[compliance] = ans ; }
primitive("ans",forthans) ;
describe("--",jsf) ;

function forthjsforth()  { m[compliance] = jsf ; }
primitive("jsf",forthjsforth) ;
describe("--",any|foerthchen) ;








// =================================================================================================
//                                         virtual machine
// =================================================================================================

definitions(hidden) ;
function forthnest()     {  r[++rp] = ip ; ip = ++w ; }
var x_nest=primitive("(nest)",forthnest) ;
describe("--",jsf) ;



definitions(forth) ;
function forthunnest()   { ip = r[rp--] ; }
var x_unnest=primitive("exit",forthunnest) ;
describe("--",any) ;








// =================================================================================================
//                                           catch, throw
// =================================================================================================
var customerror = new Array() ;
var systemerror = new Array() ;
systemerror[1] = "aborted" ;
systemerror[2] = "aborted" ;
systemerror[3] = "stack overflow" ;
systemerror[4] = "stack underflow" ;
systemerror[5] = "return stack overflow" ;
systemerror[6] = "return stack underflow" ;
systemerror[7] = "do loops nested too deeply" ;
systemerror[8] = "dictionary overflow" ;
systemerror[9] = "invalid memory address" ;
systemerror[10] = "division by zero" ;
systemerror[11] = "result out of range" ;
systemerror[12] = "argument type mismatch" ;
systemerror[13] = "word not found" ;
systemerror[14] = "use only during compilation" ;
systemerror[15] = "invalid forget" ;
systemerror[16] = "attempt to use zero-length string as name" ;
systemerror[17] = "pictured numeric ouput string overflow" ;
systemerror[18] = "pictured numeric ouput string overflow" ;
systemerror[19] = "word name too long" ;
systemerror[20] = "write to a read-only location" ;
systemerror[21] = "unsupported operation" ;
systemerror[22] = "unstructured" ;
systemerror[23] = "address alignment exception" ;
systemerror[24] = "invalid numeric argument" ;
systemerror[25] = "return stack imbalance" ;
systemerror[26] = "loop parameters unavailable" ;
systemerror[27] = "invalid recursion" ;
systemerror[28] = "user interrupt" ;
systemerror[29] = "compiler nesting" ;
systemerror[30] = "obsolescent feature" ;
systemerror[31] = ">BODY used on non-CREATEd definition" ;
systemerror[32] = "invalid name argument" ;
systemerror[33] = "Block read exception" ;
systemerror[34] = "Block write exception" ;
systemerror[35] = "Invalid block number" ;
systemerror[36] = "Invalid file position" ;
systemerror[37] = "File I/O exception" ;
systemerror[38] = "File not found" ;

// additional jsforth error messages:
systemerror[64] = "use only while interpreting" ;
systemerror[65] = "executed BODY> on a non-body address" ;
systemerror[66] = "unstructured" ;                // message gets overwritten for more detail
systemerror[67] = "TO must be used on a VALUE" ;
systemerror[68] = "JavaScript boo, mostly the result of uninitialized memory access" ;
systemerror[69] = "Too many vocabularies" ;
systemerror[70] = "No cookie by that name found" ;
systemerror[71] = "Can't write to read-only block" ;
systemerror[72] = "Invalid memory region specifier, or heap corrupted" ;




function errordialog(x)   {
   if (x < 0)  {
      if (systemerror[-x]) return ("error(" + x + "): " + systemerror[-x]) ;
      return ("error #" + x) ;
   }
   if (customerror[x]) return ("error: " + customerror[x]) ;
   return ("error #" + x) ;
}



// THIS SHOULD BE REPLACED BY THE DESIRED ERROR FUNCTION.
function _error(str) {
   info(str);
}

// throw without catch frame - top level error handler
function exception(x)  {
   var word;
   if (m[blk]>=0)   {
      var temp = m[toin] % 64 ;
      word = pack(parsebuf + m[toin] - temp,temp) ;
   } else {
      word = pack(parsebuf,m[toin]) ;
   }
   _error(word + ': ' + errordialog(x));
// just calling the virtual machine won't do, as that would require more and more javascript return stack.
//  stopping the interpreter, and have it restart with a one-time event at the warm start point solves this.
   debug("issuing timed event 'warmstart vm in 1 ms'") ;
   suspended = warm ;
   setTimeout(function() { virtualmachine(warm) ; }, 1) ;
   tos = s[sp--] ;
}





definitions(hidden) ;
function forththrow0()  {
   catchframe = r[rp] ;
   sp = r[--rp] ;
   ip = r[--rp] ;
   rp-- ;
   tos = 0 ;
}
var brthrow0 = dp
m[dp++] = primitive("throw0",forththrow0) ;


definitions(forth) ;
function forthcatch() {
   r[++rp] = ip ;
   r[++rp] = sp ;
   r[++rp] = catchframe ;
   catchframe = rp ;
   r[++rp] = brthrow0 ;
   forthexecute() ;
}
var x_catch = primitive("catch",forthcatch) ;
describe("xn ... x0 a -- xn ... x0 n",ans|jsf) ;


function throwerror(x)  {
   if (catchframe)  {
      tos = x
      rp = catchframe ;
      catchframe = r[rp--] ;
      sp = r[rp--] ;
      ip = r[rp--] ;
   } else {
      exception(x) ;
   }
}


function forththrow() {
   if (tos != 0)  {
      throwerror(tos) ;
   } else {
      tos = s[sp--] ;
   }
}
var x_throw = primitive("throw",forththrow) ;
describe("n --",ans|jsf|f83) ;


function forthnewerror() {
   if (tos<0)  {
      systemerror[-tos] = pack(s[sp-1],s[sp]) ;
   } else {
      customerror[tos] = pack(s[sp-1],s[sp]) ;
   }
   sp -= 2 ;
   tos = s[sp--] ;
}
primitive("newerror",forthnewerror) ;
describe("a n1 n2 --",jsf) ;







// =================================================================================================
//                                       run time words
// =================================================================================================


definitions(hidden) ;
function forthdolit()      { s[++sp]=tos ; tos=m[ip++] ; }
var x_lit=primitive("(lit)",forthdolit) ;


function forthbrsquote()  { s[++sp]=tos ; tos=m[ip++] ; s[++sp]=ip ; ip+=tos ; }
var x_brsquote=primitive('(s")',forthbrsquote) ;


function forthbrcquote()  { s[++sp]=tos ; tos=ip++ ; ip += m[tos] }
var x_brcquote=primitive('(c")',forthbrcquote) ;



function forthbrdotquote()  {
   forthbrsquote() ;
    forthpack() ;
    type(tos) ;
    tos=s[sp--] ;
 }
var x_brdotquote=primitive('(.")',forthbrdotquote) ;



function forthdovar()      { s[++sp] = tos ; tos = ++w ; }
var x_dovar=primitive("(var)",forthdovar) ;


function forthdoconst()    { s[++sp]=tos ; tos=m[++w] ; }
var x_doconst = primitive("(const)",forthdoconst) ;
var x_dovalue = primitive("(value)",forthdoconst) ;

function forthdofconst()    { f.push(ftos) ; ; ftos = m[++w] ; }
var x_dofconst = primitive("(fconst)",forthdofconst) ;


// function forthdodefer()    { ip=++w ; }


// branch 1  works as nop,  branch -1 is infinite loop
function forthbranch()     { ip+=m[ip] ; }
var x_branch=primitive("(branch)",forthbranch) ;


function forth0branch()   {
   if (tos)  {
      ip++ ;
   } else    {
      ip+=m[ip] ;
   }
   tos=s[sp--] ;
 }
var x_0branch=primitive("(0branch)",forth0branch) ;


function forthwarminit() {      // not for interactive use
    tos     = r[rp] ; rp = 0 ; r[rp+1] = 0 ; r[rp] = tos ;
    tos     = 0     ; sp = 0 ; s[sp+1] = 0 ; s[sp] = tos ;
    ftos    = 0 ;
    for ( ; f.length ; f.pop() ) ;
    catchframe = 0 ;
    m[state] = 0 ;
    m[innerloop] = 0 ;
    m[innercase] = 0 ;
    m[blk] = -1 ;
    m[outfile] = -1 ;
    for ( ; inbuf.length ; inbuf.pop() ) ;
  }
var x_warminit = primitive("warminit",forthwarminit) ;




function forthbrabortquote()   {
   if (tos)   {
      forthbrsquote() ;
      forthpack() ;
      systemerror[2] = tos ;
      throwerror(-2) ;
   } else {
      tos = s[sp--] ;
      ip += m[ip]+1 ;
   }
}
var x_brabortquote = primitive('(abort")',forthbrabortquote) ;


function forthbrto()  {
    m[m[ip++]] = tos ;
    tos = s[sp--] ;
}
var x_brto = primitive("(to)",forthbrto) ;



// --- not portable: output packed string literal ---
function jsdotquote() { type(m[ip++])} ;
var dotquote = primitive("",jsdotquote) ;









// =================================================================================================
//                                        stack operators
// =================================================================================================

definitions(forth) ;

function forthdup()      { s[++sp] = tos ; }                     // dup
var x_dup=primitive("dup",forthdup) ;
describe("x -- x x",any|foerthchen) ;


function forthqdup()     { if (tos) s[++sp]=tos ; }              // ?dup
var x_qdup=primitive("?dup",forthqdup) ;
describe("x -- 0 | x x",any) ;


function forthdrop()     { tos = s[sp--] ; }                     // drop
var x_drop=primitive("drop",forthdrop) ;
describe("x --",any|foerthchen) ;


function forthswap()     { w = s[sp] ; s[sp] = tos ; tos = w ; } // swap
var x_swap=primitive("swap",forthswap) ;
describe("x1 x2 -- x2 x1",any|foerthchen) ;


function forthover()     { s[++sp]= tos ; tos=s[sp-1] ; }        // over
var x_over=primitive("over",forthover) ;
describe("x1 x2 -- x1 x2 x1",any) ;


function forthrot()     {                                        // rot
   w = s[sp] ;
   s[sp] = tos ;
   tos = s[sp-1] ;
   s[sp-1] = w ;
}
var x_rot = primitive("rot",forthrot) ;
describe("x1 x2 x3 -- x2 x3 x1",any) ;


function forthminrot()     {                                     // -rot
   w = s[sp-1] ;
   s[sp-1] = tos ;
   tos = s[sp] ;
   s[sp] = w ;
}
primitive("-rot",forthminrot) ;
describe("x1 x2 x3 -- x3 x1 x2",jsf) ;


function forthtuck()   { w = s[sp] ; s[sp] = tos ; s[++sp] = w ; }
var x_tuck = primitive("tuck",forthtuck) ;                       // tuck
describe("x1 x2 -- x2 x1 x2",ans|jsf) ;


function forthnip()      { sp-- ; }                              // nip
var x_nip=primitive("nip",forthnip) ;
describe("x1 x2 -- x2",ans|jsf) ;


function forth2dup()   { s[++sp]=tos ; s[++sp]=s[sp-2] ; }       // 2dup
var x_2dup=primitive("2dup",forth2dup) ;
describe("x1 x2 -- x1 x2 x1 x2",any) ;


function forth2drop()  { sp-- ; tos=s[sp--] ; }                  // 2drop
var x_2drop=primitive("2drop",forth2drop) ;
describe("x1 x2 --",any) ;


function forth2swap()  {                                         // 2swap
   w       = s[sp-1] ;
   s[sp-1] = tos ;
   tos     = w ;
   w       = s[sp-2] ;
   s[sp-2] = s[sp] ;
   s[sp]   = w ;
}
primitive("2swap",forth2swap) ;
describe("x1 x2 x3 x4 -- x3 x4 x1 x2",any) ;


function forth2over()  {                                         // 2over
   s[++sp] = tos ;
   tos     = s[sp-3] ;
   s[++sp] = tos ;
   tos     = s[sp-3] ;
}
primitive("2over",forth2over) ;
describe("x1 x2 x3 x4 -- x1 x2 x3 x4 x1 x2",any) ;


function forthmin()   { tos = Math.min(s[sp--],tos) }            // min
var x_min = primitive("min",forthmin) ;
describe("n1 n2 -- n3",any)


function forthmax()   { tos = Math.max(s[sp--],tos) }            // max
primitive("max",forthmax) ;
describe("n1 n2 -- n3",any)


function forthtor()      { r[++rp] = tos ; tos = s[sp--] ; }     // >r
var x_tor=primitive(">r",forthtor) ;
describe("x --",any|foerthchen)


function forthrfrom()    { s[++sp] = tos ; tos = r[rp--] ; }     // r>
var x_rfrom=primitive("r>",forthrfrom) ;
describe("-- x",any|foerthchen)


function forthrfetch()   { s[++sp] = tos ; tos = r[rp] ; }       // r@
var x_rfetch=primitive("r@",forthrfetch) ;
describe("-- x",any)


function forthrdrop()    { rp-- ; }                              // rdrop
var x_rdrop=primitive("rdrop",forthrdrop) ;
describe("-- x",jsf)



function forth2tor()     {                                       // 2>r
    r[++rp] = s[sp--] ;
    r[++rp] = tos ;
    tos = s[sp--] ;
}
var x_2tor=primitive("2>r",forth2tor) ;
describe("x1 x2 --",ans|jsf|uncertain)



function forth2rfrom()   {                                       // 2r>
   s[++sp] = tos ;
   tos = r[rp--] ;
   s[++sp] = r[rp--] ;
}
var x_2rfrom=primitive("2r>",forth2rfrom) ;
describe("-- x1 x2",ans|jsf|uncertain)



function forth2rfetch()   {                                      // 2r@
   s[++sp] = tos ;
   tos = r[rp] ;
   s[++sp] = r[rp-1] ;
}
var x_2rfetch=primitive("2r@",forth2rfetch) ;
describe("-- x1 x2",ans|jsf|uncertain)



function forthdepth()    { s[++sp]=tos ; tos=sp-1 ; }            // depth
var x_depth=primitive("depth",forthdepth) ;
describe("-- n",ans|f83|jsf|uncertain) ;



function forthpick()  { tos = s[sp-tos] ; }                      // pick
primitive("pick",forthpick) ;
describe("xu ... x1 x0 u -- xu ... x1 x0 xu",any) ;



function forthroll()  {                                          // roll
   w = s[sp-tos] ;
   for ( ; tos ; --tos )  s[sp-tos] = s[sp-tos+1] ;
   sp-- ;
   tos = w
}
primitive("roll",forthroll) ;
describe("xu xu-1 ... x0 u -- xu-1 ... x0 xu",any) ;









// =================================================================================================
//                                        memory operators
// =================================================================================================


function forthfetch()    { tos = m[tos] ; }                      // @
var x_fetch=primitive("@",forthfetch) ;
describe("a -- x",any|foerthchen) ;


function forthstore()    { m[tos] = s[sp--] ; tos = s[sp--] ; }  // !
var x_store=primitive("!",forthstore) ;
describe("x a --",any|foerthchen) ;


function forth2fetch()    { s[++sp] = m[tos+1] ; tos = m[tos] ; } // 2@
var x_2fetch=primitive("2@",forth2fetch) ;
describe("a -- d",any) ;


function forth2store()    {                                      // 2!
   m[tos++] = s[sp--] ;
   m[tos] = s[sp--] ;
   tos = s[sp--] ;
}
var x_2store=primitive("2!",forth2store) ;
describe("d a --",any) ;


function forthcfetch()   { tos = m[tos]&255 ; }                  // c@
var x_cfetch=primitive("c@",forthcfetch) ;
describe("a -- c",any) ;


function forthcstore()   { m[tos] = s[sp--]&255 ; tos = s[sp--] ; } // c!
var x_cstore=primitive("c!",forthcstore) ;
describe("c a --",any) ;


function forthcount()    { s[++sp]=tos+1 ; tos=m[tos]&255 ; }     // count
var x_count=primitive("count",forthcount) ;
describe("a1 -- a2 c",any) ;


function forthskim()     { s[++sp]=tos+1 ; tos=m[tos] ; }        // skim
var x_skim=primitive("skim",forthskim) ;
describe("a1 -- a2 x",jsf) ;


function forthexchange() { w = m[tos] ; m[tos] = s[sp--] ; tos = w ; }  // exchange
var x_exchange=primitive("exchange",forthexchange) ;
describe("x1 a -- x2",jsf) ;


function forthon()  { m[tos] = -1 ; tos = s[sp--] ; }            // on
primitive("on",forthon) ;
describe("a --",jsf) ;


function forthoff()  { m[tos] = 0 ; tos = s[sp--] ; }            // off
var x_off = primitive("off",forthoff) ;
describe("a --",jsf) ;


function forthfill()     {                                       // fill
   i = s[sp--]   ;
   var dest=s[sp--]
   for ( ; i ; i-- ) m[dest++]=tos ;
   tos = s[sp--] ;
}
var x_fill=primitive("fill",forthfill) ;
describe("a u c --",any) ;


function fortherase()    { s[++sp] = tos ; tos = 0 ; forthfill() ; }
primitive("erase",fortherase) ;
describe("a u --",any) ;


function forthslashstring()  {                                   //  /string
   w = tos ;
   tos = s[sp--] ;
   if ( tos < w ) w = tos ;
   s[sp] += w ;
   tos -= w ;
}
var x_slashstring=primitive("/string",forthslashstring) ;
describe("a1 n1 u -- a2 n2",ans|jsf|uncertain) ;



function noop()  { }

primitive("align",noop|immediate) ;                                 // align
describe("--",ans|jsf) ;


primitive("aligned",noop|immediate) ;                               // aligned
describe("a1 -- a2",ans|jsf)


function forthpad()   { s[++sp] = tos ; tos = dp + paddistance ; }
primitive("pad",forthpad) ;                                         // pad
describe("-- a",any) ;







// =================================================================================================
//                                               i/o
// =================================================================================================







var x_cr=primitive("cr",cr) ;                                    // cr
describe("--",any) ;




definitions(forth) ;

function forthspaces()   {                                       // spaces
   for ( ; tos>linelen ; tos-=linelen )  type(lineofspaces) ;
   type(lineofspaces.substring(0,tos)) ;
   tos = s[sp--] ;
}
var x_spaces=primitive("spaces",forthspaces) ;
describe("n --",any) ;



definitions(hidden) ;



// --- messages written to dialog screen ---

definitions(forth) ;
function forthspace()    { type(" ") ; }                         // space
var x_space=primitive("space",forthspace) ;
describe("--",any) ;





function forthemit()      { emit(tos) ; tos = s[sp--] ; }        // emit
var x_emit=primitive("emit",forthemit) ;
describe("c --",any|foerthchen) ;



function forthtype()     {                                       // type
   forthpack() ;
   type(tos) ;
   tos = s[sp--] ;
}
var x_type=primitive("type",forthtype) ;
describe("--",any) ;



var x_page= primitive("page",cls) ;                              // page
describe("--",ans|f83|jsf) ;



primitive("cls",cls) ;
describe("--",jsf) ;


// THIS SHOULD BE REPLACED BY THE DESIRED PROMPTING FUNCTION.
function _prompt() {
   // Nothing.
}

function forthprompt()   {                                       // prompt
  _prompt();
}
var x_prompt=primitive("prompt",forthprompt) ;
describe("--",any) ;



function forthdots()  {                                          // .s
   s[++sp] = tos;
   for (var i=1 ; i < sp ; type(s[++i].toString(m[base]) + " ")) ;
   sp-- ;
}
var x_dots = primitive(".s",forthdots) ;
describe("--",any) ;







// read string, delimited by c. return address and len
// updates source

function forthparse()  {                                          // parse
   var delimiter = tos ;
   w = m[toin] + parsebuf ;                    //  parse address
   var bufend = parsebuf + parsebuflen ;
   var nxtchar = m[w] ;
   if (delimiter == bl) {
      for ( ; w < bufend ; )  {
         if (nxtchar != delimiter) break ;
         nxtchar = m[++w] ;
      }
   }
   s[++sp] = w ;
   for ( ; w < bufend; ) {
      nxtchar = m[w] ;
      if (nxtchar == delimiter)   break ;
      w++ ;
   }
   tos = w - s[sp] ;
   if (nxtchar == delimiter) w++ ;
   m[toin] = w - parsebuf  ;
}
var x_parse = primitive("parse",forthparse) ;
describe("c -- a n",ans|jsf) ;






definitions(hidden) ;

// key and key?  come in two parts:
//  part 1 signals to virtual machine to stop execution,
//  part 2 will be executed after the input event occured
// the high level key and key? word call both parts, and, at the
// same time, provide the after-event reentry point.

function forthkey1()    {
  if (!inbuf.length) {
    suspended = w ;
    _input(function() { virtualmachine(ip) ; }) ;
  }
}
var x_key1 = primitive("key1",forthkey1) ;
describe("--",jsf)

function forthkey2()    { s[++sp] = tos ;  tos = inbuf.shift() ; }
var x_key2 = primitive("key2",forthkey2) ;
describe("-- c",jsf)




function forthkey1query()    {
   if (!inbuf.length)  {                                    // key buffered - no need for event
      suspended = w ;                                       // stop interpreter shortly to allow possible key event
      setTimeout(function() { virtualmachine(ip) ; }, 0) ;  // restart short time later
   }
}
var x_key1query = primitive("key1?",forthkey1query) ;
describe("--",jsf)


function forthkey2query()    {
   s[++sp] = tos ;
   tos = 0 ;                                                // assume "no key"
   if (inbuf.length) tos-- ;                                // flag "key available"
}
var x_key2query = primitive("key2?",forthkey2query) ;
describe("-- f",jsf)






// ( bufaddr editaddr nkeys ascii -- bufaddr editaddr nkeys )
function forthacceptprintable()  {
   w = tos ;
   tos = s[sp--] ;        // w:asc,  tos:n keys to go, s[sp]:editing address, s[sp-1]: buffer start
   if (tos>1)  {
      m[s[sp]] = w ;
      s[sp]++ ;
      tos-- ;
   }
}




// ( bufaddr editaddr nkeys ascii -- bufaddr editaddr nkeys )
function forthacceptescape()     {
   tos = s[sp--] ;        // tos:n keys to go, s[sp]:editing address, s[sp-1]: buffer start
   tos += (s[sp] - s[sp-1]) ;
   backspaces(s[sp]-s[sp-1]) ;
   s[sp] = s[sp-1] ;
 }




// ( bufaddr editaddr nkeys ascii -- bufaddr editaddr nkeys )
// attempt internet explorer workaround
function forthacceptbackspace()  {
   tos = s[sp--]
   if (s[sp] > s[sp-1]) {
      tos++ ;
      s[sp]-- ;
      backspaces(1);
   }
}




function forthacceptreturn()       { sp-- ; tos = 0 }
function forthaccepttab()          { tos=bl ; forthacceptprintable() ; }



// ( bufaddr editaddr nkeys ascii -- bufaddr editaddr nkeys )
function forthacceptcontrolchar(ctrlchar)  {
   if (ctrlchar == esc)            { forthacceptescape()    ; return ; }
   if (ctrlchar == backspace)      { forthacceptbackspace() ; return ; }
   if (ctrlchar == 17)             { forthacceptbackspace() ; return ; }  // ctrl-q for IE
   if (ctrlchar == carriagereturn) { forthacceptreturn()    ; return ; }
   if (ctrlchar == tab)            { forthaccepttab()       ; return ; }
   tos = s[sp--] ;
}






function forthdecode()  {         // ( bufaddr editaddr nkeys ascii -- bufaddr editaddr nkeys )
   if (tos<bl)  {
       forthacceptcontrolchar(tos) ;
   } else {
   forthacceptprintable(tos) ;
   }
   debug(s[sp-1] + " " + s[sp] + " " + tos) ;
}
var x_decode = primitive("decode",forthdecode) ;
describe("a1 a2 n1 c -- a1 a3 n2 f",jsf)



definitions(forth) ;

function forthfast() {  m[outfile] = -1 ; }  ; primitive("fast",forthfast) ;
describe("--",jsf) ;
function forthslow() {  m[outfile] = -2 ; }  ; primitive("slow",forthslow) ;
describe("--",jsf) ;







function forthsource()  {
   s[++sp] = tos ;
   s[++sp] = parsebuf ;
   tos = parsebuflen ;
}
var x_source = primitive("source",forthsource) ;
describe("-- a n",any) ;



function forthstoresource()  {
   parsebuflen = tos ;
   parsebuf = s[sp--]   ;
   tos = s[sp--] ;
//   m[toin] = 0 ;
}
var x_storesource = primitive("!source",forthstoresource) ;
describe("a n --",jsf) ;



definitions(hidden) ;

function forthpushsource()  { sourceid.push(m[toin],parsebuf,parsebuflen) ; }
var x_pushsource = primitive("pushsource",forthpushsource) ;





function forthpopsource()  {
   parsebuflen = sourceid.pop() ;
   parsebuf    = sourceid.pop() ;
   m[toin]     = sourceid.pop() ;
}
var x_popsource = primitive("popsource",forthpopsource) ;








// ------------- cookies ------------

var translatedchar = new Array() ;       // each ascii requiring translation flags it here

for (i=0 ; i<256 ; i++)  translatedchar[i] = "" ;              // assume no translation required

translatedchar[0]  = "A" ;
translatedchar[9]  = "B" ;
translatedchar[10] = "C" ;
translatedchar[13] = "D" ;
translatedchar[32] = "E" ;
translatedchar[37] = "F" ;
translatedchar[59] = "G" ;

var translatechar = new Array(0,9,10,13,32,37,59) ;



function encoded(text)  {
   var result = "" ;
   var asc;
   for (i=0 ; i<text.length ; i++) {
      asc = text.charCodeAt(i) ;
      if (translatedchar[asc])  {
         result += ("%" + translatedchar[asc]) ;
      } else {
         result += text.charAt(i) ;
      }
   }
   return result ;
}




function decoded(text)  {
   var result = "" ;
   var asc;
   for (i=0; i<text.length ; i++)  {
      asc = text.charAt(i) ;
      if (asc == "%")  asc = String.fromCharCode(translatechar[text.charCodeAt(++i) - 65]) ;
      result += asc ;
   }
   return result ;
}






function setcookie(name, value, domain, expires, path, secure)  {
   var cook = name + "=" + encoded(value.substr(0,2048)) ;
   cook += (domain)  ? "; domain="  + domain  : "" ;
   cook += (expires) ? "; expires=" + expires : "" ;
   cook += (path)    ? "; path="    + domain  : "" ;
   cook += (secure)  ? "; secure="  + domain  : "" ;
   document.cookie = cook ;
}




function readcookie(name)  {
   var cookiebegin = document.cookie.indexOf(name + "=") ;
   if (cookiebegin == -1) return null ;
   var temp = document.cookie.substr(cookiebegin + name.length + 1) ;
   var cookieend = temp.indexOf(";") ;
   if (cookieend != -1)  return decoded(temp.substr(0,cookieend)) ;
   return decoded(temp) ;
}





definitions(forth) ;


function forthsetcookie()  {
   setcookie((pack(s[sp-2],s[sp-1])),(pack(s[sp],tos))) ;
   sp -= 3 ;
   tos = s[sp--]
}
primitive("cookie!",forthsetcookie) ;
describe("a1 n1 a2 n2 --",jsf) ;




function forthreadcookie() {
   w = readcookie(pack(s[sp-1], s[sp])) ;
   if (w)  {
      s[--sp] = w ;
      unpack() ;
   } else {
      throwerror(-70) ;
   }
}
primitive("cookie@",forthreadcookie) ;
describe("a1 n1 a2 -- n2",jsf) ;





// =================================================================================================
//                                          arithmetics
// =================================================================================================

definitions(forth) ;


function forth1plus()     { tos++ ; }                                // 1+
var x_1plus=primitive("1+",forth1plus) ;
describe("x -- x+1",ans|f83|jsf) ;
primitive("cell+",forth1plus) ;                                      // cell+
describe("x -- x+cell",ans|f83|jsf) ;
primitive("char+",forth1plus) ;                                      // char+
describe("x -- x+char",ans|jsf) ;


function forth1minus()     { tos-- ; }                               // 1-
var x_1minus=primitive("1-",forth1minus) ;
describe("x -- x-1",any) ;
primitive("cell-",forth1minus) ;                                     // cell-
describe("x -- x-cell",ans|f83|jsf) ;


function forth2mul()     { tos <<= 1 ; }                             // 2*
var x_2mul=primitive("2*",forth2mul) ;
describe("x1 -- x2",any) ;


function forth2div()     { tos >>= 1 ; }                             // 2/
var x_2div=primitive("2/",forth2div) ;
describe("n1 -- n2",any) ;


function forthplus()     { tos += s[sp--] ; }                        // +


var x_plus=primitive("+",forthplus) ;
describe("x1 x2 -- x1+x2",any|foerthchen) ;


function forthminus()    { tos = s[sp--] - tos ; }                   // -
var x_minus=primitive("-",forthminus) ;
describe("x1 x2 -- x1-x2",any) ;


function forthmul()      { tos = (tos*s[sp--]) & 0xffffffff ; }      // *
var x_mul=primitive("*",forthmul) ;
describe("x1 x2 -- x1*x2",any|foerthchen) ;


var floorfix = 1 - 1e-16 ;
function forthdiv()      {                                           // /
   if (tos)  {
      tos = s[sp--] / tos ;
      if (tos<0)  tos += floorfix ;
      tos = Math.floor(tos) ;
      return ;
   }
   throwerror(-10) ;
}
var x_div=primitive("/",forthdiv)
describe("x1 x2 -- x1/x2",any) ;


function forthstarslash() {                                          // */
   if (tos) {
      tos = (s[sp--] * s[sp--]) / tos;
      if (tos<0)  tos += floorfix ;
      tos = Math.floor(tos) ;
      return ;
   }
   throwerror(-10) ;
}
var x_starslash = primitive("*/",forthstarslash) ;
describe("x1 x2 x3 -- x1*x2/x3",any) ;


function forthmod()      {                                           // mod
   if (tos)  {
      tos= (s[sp--] % tos) ;
      return ;
   }
   throwerror(-10) ;
}
var x_mod=primitive("mod",forthmod) ;
describe("x1 x2 -- x3",any) ;


function forthslashmod()      {                                      // /mod
   if (tos)  {
      w = s[sp] % tos ;
      tos = s[sp] / tos ;
      if (tos<0)  tos += floorfix ;
      tos = Math.floor(tos) ;
      s[sp] = w ;
      return ;
   }
   throwerror(-10) ;
}
var x_slashmod = primitive("/mod",forthslashmod) ;
describe("x1 x2 -- x3 x4",any|foerthchen) ;


function forthstarslashmod()      {                                  // */mod
   if (tos)  {
      w = s[sp--] * s[sp] ;
      s[sp] = w % tos ;
      tos = w / tos ;
      if (tos<0)  tos += floorfix ;
      tos = Math.floor(tos) ;
      return ;
   }
   throwerror(-10) ;
}
var x_starslashmod = primitive("*/mod",forthstarslashmod) ;
describe("x1 x2 x3 -- x4 x5",any) ;


function forthnegate()   { tos= -tos ; }                             // negate
var x_negate=primitive("negate",forthnegate) ;
describe("n -- -n",any) ;


function forthabs()   { tos = Math.abs(tos) ; }                      // abs
var x_abs=primitive("abs",forthabs) ;
describe("n -- u",any) ;


function forthlshift()     {
   if (tos>31) {
      tos=0;
      sp--;
   } else {
      tos = s[sp--] << tos;                 // lshift
   }
}
var x_lshift = primitive("lshift",forthlshift) ;
describe("x1 u --x2",ans|f83|jsf) ;
primitive("<<",forthlshift) ;
describe("x1 u -- x2",jsf) ;


function forthrshift()     {
   if (tos>31) {
      tos=0;
      sp--;
   } else {
      tos = s[sp--] >>> tos ;               // rshift
   }
}
var x_rshift = primitive("rshift",forthrshift) ;
describe("u1 u2 -- x3",ans|f83|jsf) ;
primitive(">>",forthrshift) ;
describe("u1 u2 -- u3",jsf) ;


function forthplusstore()   { m[tos]+=s[sp--] ; tos=s[sp--] ; }      // +!
var x_plusstore=primitive("+!",forthplusstore) ;
describe("x a --",any) ;


primitive("cells",noop,immediate)
describe("x1 -- x2",ans|f83|jsf) ;


primitive("chars",noop,immediate)                                    // chars
describe("x1 -- x2",ans|jsf) ;


function forthrange()  {
   var temp = tos ;
   tos = s[sp] ;
   s[sp] += temp ;
}
var x_range = primitive("range",forthrange) ;
describe("x n -- x+n x",ans|jsf|f83) ;




// ----- double and mixed len math -----


function forthstod()  {                                              // s>d
   s[++sp] = tos ;
   tos &= 0x80000000 ;
   if (tos)   tos = -1 ;
}
var x_stod = primitive("s>d",forthstod) ;
describe("x -- d",any) ;



function forthdnegate()  {                                           // dnegate
   tos = -tos
   s[sp] = -(s[sp]) ;
   if (s[sp])  tos-- ;
}
primitive("dnegate",forthdnegate) ;
describe("d1 -- -d1",any) ;



function forthdabs()  {                                              // dabs
   if (tos<0) {
      tos = -tos
      s[sp] = -(s[sp]) ;
      if (s[sp])  tos--;
   }
}
var x_dabs = primitive("dabs",forthdabs)
describe("d -- ud",any) ;



function forthdplus()  {                                             // d+
   if (tos<0) tos += 0x100000000 ;
   var low2 = s[sp--] ; if (low2<0)  low2 += 0x100000000 ;
   var high1 = s[sp--] ; if (high1<0) high1 += 0x100000000 ;
   var low1 = s[sp]   ; if (low1<0)  low1 += 0x100000000 ;
   tos += high1 ;
   w = low1+low2 ;
   if (w > 0x100000000) {     // detect carry
      w &= 0xffffffff ;
      tos++ ;                 // apply carry
   }
   s[sp] = w ;
   tos &= 0xffffffff ;
}
var x_dplus = primitive("d+",forthdplus)
describe("d1 d2 -- d1+d2",any) ;




function forthummul()  {     // ( u1 u2 -- ud )                       // um*
   var resultlo = 0 ;
   var resulthi = 0 ;
   var temp = s[sp] ;
   for ( var i=32 ; i ; --i )  {
      resulthi <<= 1 ;
      if (resultlo & 0x80000000)  resulthi++ ;
      resultlo <<= 1 ;
      if (tos & 0x80000000)  {
         if ((resultlo + temp) > 0xffffffff)  resulthi++ ;
         resultlo += temp ;
      }
      tos <<= 1 ;
   }
   s[sp] = resultlo ;
   tos = resulthi ;
}
var x_ummul = primitive("um*",forthummul)
describe("n1 n2 -- ud",any) ;




function forthmmul()  {                                              // m*
   var temp = ((tos<0) ^ (s[sp]<0)) ;
   tos = Math.abs(tos) ;
   s[sp] = Math.abs(s[sp]) ;
   forthummul() ;
   if (temp)  forthdnegate() ;
}
var x_mmul = primitive("m*",forthmmul)
describe("n1 n2 -- d",any) ;




function forthdless()  {                                             // d<
   w = tos ;
   tos = 0 ;
   if (s[sp-1] < w)  {
      tos = -1 ;
   } else {
      if (s[sp-1] == w)  {
         if (s[sp-2] < s[sp])  tos = -1 ;
      }
   }
   sp -= 3 ;
}
primitive("d<",forthdless) ;
describe("d1 d2 -- f",any) ;



function forthdequ()  {                                                 // d=
  tos = -((tos == s[sp-1]) & (s[sp] == s[sp-2]))
   sp -= 3 ;
}
primitive("d=",forthdequ) ;
describe("d1 d2 -- f",any) ;







function forthumslashmod()  {    //    ( d u1 -- u2 u3 )
// skip leading zeroes  (not done)
// shift-and-subtract division
// tos = divisor

   var quotient = 0 ;
   var remainder  = 0 ;                                      // portion of divident
   var divbit = 0 ;
   if (tos)  {                                               // hi part not 0 ?
      divbit = 0x80000000 ;
      for ( ; divbit ; divbit>>>=1 )  {                      // skip trailinz zeroes
         if ((tos & divbit) == 0)   break;                   // "late in" in contrast to "early out"
      }
   }
   for (var j=2 ; j ; j--)  {                                // crunch 2x 32 bit
      var divident = s[sp--] ;                               // next divident portion
      for ( ; divbit ; divbit>>>=1)  {
         remainder <<= 1 ;
         if (divident & divbit) remainder++ ;
         quotient<<=1 ;
         if (remainder>=tos)  {
            remainder-=tos ;
            quotient++
         }
      }
   divbit = 0x80000000 ;
   }
   tos = quotient ;
   s[++sp] = remainder ;
}
primitive("um/mod",forthumslashmod) ;
describe("d u1 -- u2 u3",any) ;



function forthudslashmod()  {    //    ( d1 u1 -- u2 d2 )
   w = tos ;
   s[++sp] = 0 ;
   forthumslashmod() ;
   s[++sp] = w ;
   w = tos ;
   tos = s[sp--] ;
   forthumslashmod() ;
   s[++sp] = tos ;
   tos = w ;
}
var x_udslashmod = primitive("ud/mod",forthudslashmod) ;
describe("d1 u1 -- u2 d2",jsf) ;





// =================================================================================================
//                                               bool
// =================================================================================================


definitions(forth) ;

function forthor()       { tos |= s[sp--] ; }                        // or
var x_or = primitive("or",forthor) ;
describe("x1 x2 -- x3",any|foerthchen) ;


function forthand()      { tos &= s[sp--] ; }                        // and
var x_and = primitive("and",forthand) ;
describe("x1 x2 -- x3",any|foerthchen) ;


function forthxor()      { tos ^= s[sp--] ; }                        // xor
primitive("xor",forthxor) ;
describe("x1 x2 -- x3",any|foerthchen) ;


function forthinvert()   { tos ^= -1 ; }                             // invert
primitive("invert",forthinvert) ;
describe("x1 -- x2",ans|jsf) ;


primitive("not",forthinvert) ;                                       // not
describe("x1 -- x2",fig|f79) ;







// =================================================================================================
//                                              logic
// =================================================================================================
function forthequ()        { tos = -(tos == s[sp--]) ; }             // =
var x_equ = primitive("=",forthequ) ;
describe("x1 x2 -- f",any) ;


function forthnequ()       { tos = -(tos != s[sp--]) ; }             // <>
var x_nequ = primitive("<>",forthnequ) ;
describe("x1 x2 -- f",any) ;


function forthmore()        { tos = -(tos < s[sp--]) ; }             // >
var x_more = primitive(">",forthmore) ;
describe("n1 n2 -- f",any) ;


function forthless()        { tos = -(tos > s[sp--]) ; }             // <
var x_less = primitive("<",forthless) ;
describe("n1 n2 -- f",any) ;


function forth0equ()     { tos = -(tos == 0) ;  }                    // 0=
var x_0equ = primitive("0=",forth0equ) ;
describe("x -- f",any) ;


function forth0nequ()     { tos = -(tos != 0) ;  }                   // 0<>
primitive("0<>",forth0nequ) ;
describe("x -- f",any) ;


function forth0less()     { tos = -(tos < 0) ;  }                    // 0<
var x_0less = primitive("0<",forth0less) ;
describe("n -- f",any) ;


function forth0greater()  { tos = -(tos > 0) ;  }                    // 0>
var x_0greater = primitive("0>",forth0greater) ;
describe("n -- f",any) ;



function forthuless()        {                                       // u<
   w = s[sp--] ;
   if (tos<0)    tos += 0x100000000 ;
   if (w<0)      w   += 0x100000000 ;
   tos = -(w<tos) ;
}
primitive("u<",forthuless) ;
describe("u1 u2 -- f",any) ;


function forthumore()        {                                       // u>
   w = s[sp--] ;
   if (tos<0)    tos += 0x100000000 ;
   if (w<0)      w   += 0x100000000 ;
   tos = -(w>tos) ;
}
primitive("u>",forthumore) ;
describe("u1 u2 -- f",any) ;




function forthwithin()  {       // ( x1 x2 x3 -- flag )              // within
   w = s[sp--] ;
   var temp = s[sp--] ;
   var temp2 = tos ;
   tos = -1 ;
   if (w < temp2)  {
      if (w <= temp)  {
         if (temp < temp2)  return ;
      }
   }
   if (w > temp2)  {
      if (w <= temp)     return ;
      if (temp < temp2)  return ;
   }
   tos++ ;
}
primitive("within",forthwithin) ;
describe("x1 x2 x3 -- f",any) ;








// =================================================================================================
//                                    pictured number conversion
// =================================================================================================

// non standard stack: does currently not expect double, but single number
// that's why further implementation has been postponed - need double math first.
// ( d -- d )

var picturedoutpos ;
var picturedoutlen ;

function forthlesshash()  {                                          // <#
   picturedoutpos = dp + paddistance ;
   picturedoutlen = 0 ;                                              // avoiding len calc allow to allot
}                                                                    // during pic num conv
var x_lesshash = primitive("<#",forthlesshash) ;
describe("--",any) ;



function forthhold()  {
   m[--picturedoutpos] = tos ;
   picturedoutlen++ ;
   tos = s[sp--]  ;
}
var x_hold = primitive("hold",forthhold) ;
describe("c --",any) ;



function forthsign()  {
   if (tos<0) {
      m[--picturedoutpos] = 45 ;
      picturedoutlen++ ;
   }
   tos = s[sp--]
}
var x_sign = primitive("sign",forthsign) ;
describe("n --",any) ;




function forthhashmore()  {                                          // #>
   s[sp] = picturedoutpos ;
   tos = picturedoutlen ;
}                                                                    // during pic num conv
var x_hashmore = primitive("#>",forthhashmore) ;
describe("-- a n",any) ;










// =================================================================================================
//                                               does>
// =================================================================================================

definitions(hidden) ;

// linkage code for word, created by defining word.
function dodoes()  {
   s[++sp] = tos  ;  tos = x[w] ;              // push words address of defined word
   r[++rp] = ip   ;                            // nest
   ip = m[tos++]  ;                            // set ip to does> part, and tos to body of defined word
   w = m[ip++]    ;  t[w]() ;                  // next
}



// compiled to end of create part by does>
// executed during execution of defining word
function setdoes()  {                                                 // tos: xt of does> part
  m[x[wc]] = ip+1 ;                                                   // created word points to does>
  t[wc] = dodoes ;                                                    // created word linkage code is dodoes
}
var x_setdoes = primitive("setdoes",setdoes) ;








// =================================================================================================
//                                             flow control
// =================================================================================================

definitions(hidden) ;


function forthbrfor()  {
   r[++rp]=tos ;
   r[++rp]=tos ;
   ip++  ;
   tos=s[sp--] ;
}
var x_brfor=primitive("(for)",forthbrfor) ;


function forthbrnext() {
   r[rp]-- ;
   if (r[rp]) {
      ip+=m[ip] ;
   } else {
      ip++ ;
      rp-=2 ;
   }
}
var x_brnext=primitive("(next)",forthbrnext) ;


function forthbrdo()  {
   r[++rp]=s[sp--] ;
   r[++rp]=tos ;
   ip++  ;
   tos=s[sp--] ;
}
var x_brdo=primitive("(do)",forthbrdo) ;


function forthbrqdo() {
   if ( tos == s[sp] ) {
      sp-- ;
      ip+=m[ip] ;
   } else {
      r[++rp]=s[sp--] ;
      r[++rp]=tos ;
      ip++ ;
   }
   tos=s[sp--] ;
}
var x_brqdo=primitive("(?do)",forthbrqdo) ;



// fig/f79 leave
function forthbrleave79()    {  r[rp] = r[rp-1]-1 ; }
var x_brleave79 = primitive("(leave)",forthbrleave79) ;



// ans/f83 leave
function forthbrleave() {
   rp -= 2 ;
   ip = m[ip] ;
   ip += m[ip] ;
}
var x_brleave=primitive("(leave)",forthbrleave) ;




function forthbrqleave() {
   if (tos)  {
      rp -= 2 ;
      ip = m[ip] ;
      ip += m[ip] ;
   } else {
      ip++ ;
   }
   tos=s[sp--] ;
}
var x_brqleave=primitive("(?leave)",forthbrqleave) ;




function forthbrloop() {
   r[rp]++ ;
   if ( r[rp] != r[rp-1] )  {
      ip+=m[ip] ;
   } else {
      ip++ ;
      rp-=2 ;
   }
}
var x_brloop=primitive("(loop)",forthbrloop) ;
describe("--",jsf) ;



function forthbrplusloop()   {                         // (+loop)
   w = r[rp] - r[rp-1] ;
   r[rp] += tos ;
   tos=s[sp--] ;
   if (  (( r[rp] - r[rp-1]) ^ w ) > 0 )  {
      ip+=m[ip] ;
   }  else  {
      ip++  ;
      rp-=2 ;
   }
}
var x_brplusloop=primitive("(+loop)",forthbrplusloop) ;
describe("n --",jsf) ;




function forthbrunloop()  { rp-=2 ; }
var x_brunloop = primitive("(unloop)",forthbrunloop) ;
describe("--",jsf) ;




function forthbrof()   {                               // (of)
   w = tos ;
   tos = s[sp--] ;
   if (w == tos)  {
      tos = s[sp--]
      ip++
   } else {
      ip+=m[ip] ;
   }
}
var x_brof = primitive("(of)",forthbrof) ;
describe("x1 x2 -- x1 |",jsf) ;






definitions(forth) ;

function forthexecute()  { w=tos ; tos=s[sp--] ; t[w]() ; }
var x_execute = primitive("execute",forthexecute) ;
describe("xt --",any) ;


function forthperform()  { w=m[tos] ; tos=s[sp--] ; t[w]() ; }
var x_perform = primitive("perform",forthperform) ;
describe("a --",jsf) ;




function forthi() {  s[++sp]=tos  ;  tos=r[rp] ; }
var x_i=primitive("i",forthi) ;
describe("-- x",any) ;


function forthj() {  s[++sp]=tos  ;  tos=r[rp-2] ; }
var x_j=primitive("j",forthj) ;
describe("-- x",any) ;



definitions(hidden) ;

var controlflow     = new Array("","if",          "",    "begin",               "while", "do or ?do",     "for",  "case",    "of")
var controlflowwant = new Array("","else or then","then","while,until or again","repeat","loop or +loop", "next", "endcase", "endof")
function forthunstructured()  {
   systemerror[66] = "unstructured, missing " + controlflow[tos] + ", expected " + controlflowwant[s[sp]] ;
   throwerror(-66) ;
}
var x_unstructured = primitive("unstructured",forthunstructured)





// =================================================================================================
//                                             strings
// =================================================================================================


definitions(forth) ;

function forthmove()   {                                  // move
   if ( s[sp] > s[sp+1] )  {
      dest = s[sp--] + tos ;
      src = s[sp--] + tos ;
      for ( ; tos ; tos-- ) m[--dest] = m[--src] ;
   } else {
      var dest = s[sp--] ;
      var src = s[sp--] ;
      for ( ; tos ; tos-- ) m[dest++] = m[src++] ;
   }
   tos = s[sp--] ;
}
var x_move = primitive("move",forthmove) ;
describe("a1 a2 u --",any) ;

primitive("cmove",forthmove) ;
describe("a1 a2 u",any) ;



definitions(hidden) ;

function forthmovestr()   {        // ( a1 n a2 -- )      // move$
   w = s[sp] ;
   m[tos++] = w ;
   s[sp] = tos ;
   tos = w ;
   forthmove() ;
}
var x_movestr = primitive("move$",forthmovestr) ;
describe("a1 n a2 --",jsf) ;



definitions(forth) ;

function forthmintrailing()  {                           // a1 n1 -- a2 n2 )
   var temp = s[sp] + tos ;
   for ( i=tos ; i ; i-- )  {
      if (m[--temp] != 32)  break ;
      tos-- ;
   }
}
var x_mintrailing = primitive("-trailing",forthmintrailing) ;
describe("a1 u1 -- a2 u2",any) ;








// ----- number input conversion -----



function forthdigit()  {    // ( c -- u | -1 )
   tos -= 48 ;
   if ( tos > 9 )  {
      if ( tos < 17)  tos = -1 ;
      tos -= 7 ;
   }
   if ( tos > 41 )     tos -= 32 ;
   if ( tos >= 0)  {
      if  (tos < m[base]) return ;
   }
  tos = -1 ;
}
var x_digit = primitive("digit",forthdigit);
describe("c -- u|-1",jsf) ;



definitions(hidden) ;

function forthqsinglenumber()  {        // a n -- x -1 | 0 )
   var digit ;
   var  sign=0 ;
   var radix=m[base] ;
   i = tos ;                            // number of digits to test/convert
   tos = -1 ;                           // assume valid number
   w = s[sp] ;                          // addr of next digit
   s[sp] = 0 ;                          // accumulator
   if ( m[w] == 45 ) {                  // leading -
      sign = -1 ;
      w++ ;                             // strip
      i-- ;
   }
   for ( var i ; i ; i-- )  {           // for all digits
      digit = m[w++] - 48 ;             // read digit
      if ( digit == -2 )   exception("no input support for floating point numbers yet") ;
      if ( digit > 9 )    {
         if ( digit < 17)  { tos = 0 ; break ; }
         digit -= 7 ;
      }
      if ( digit > 41 )    digit -= 32 ;
      if ( digit < 0 )     { tos = 0 ; break ; }
      if  (digit >= radix) { tos = 0 ; break ; }
      s[sp] *= radix ;
      s[sp] += digit ;
   }
   if (tos)  {
      if (sign)  s[sp] = -s[sp] ;
      s[sp] &= 0xffffffff ;
   }  else  {
      sp--  ;                           // drop string address
   }
}

// parseFloat(string) ;


function forthqnumber()  {        // a n -- x -1 | 0 )
   if (m[s[sp]+tos-1]==46) {
      exception("no input support for double length numbers yet") ;
      sp-- ; tos=0 ;
   } else {
      forthqsinglenumber()
   }
}
var x_qnumber = primitive("?number",forthqnumber) ;




function forthinterpretnumber()  {    // ( a n -- x -1 | d -1 | r -1 | -1 | 0 )
   forthqnumber() ;
   if (tos)  {
      if (m[state])  {
         m[dp++] = x_lit ;
         m[dp++] = s[sp--] ;
         tos = -1 ;
      }
   }
}
var x_interpretnumber = primitive("interpretnumber",forthinterpretnumber) ;




// function forthinterpretnumber()
//    first char = - ?
//    if remember skip then
//    for all chars in string:
//       next char = digit ?
//      if accumulate
//      else
//        char = . ?
//        if
//
//        else
//          otherlegalchars? none if NaN then
//        then
//      then
//    next
//    negate?
//    state @ if
//      compile lit
//    then  ;



// =================================================================================================
//                                      dictionary, compiling
// =================================================================================================



definitions(forth) ;


// this has been speeded up a lot, by using an
// improvement suggested by TheBlueWizard.
function forthwords()  {                                          // words
   for (var i=wc; i; i--)  {
      if (h[i])  {
         if (m[context] & ds[i]) {
            if (m[compliance] & ds[i])  querytype(h[i]+" ") ;
         }
      }
   }
}
var x_words = primitive("words",forthwords) ;
describe("--",f83|ans|jsf|foerthchen|only) ;


function forthvlist()  {  forthwords() ; }
primitive("vlist",forthvlist) ;
describe("--",f79|fig) ;



function forthhere() { s[++sp]=tos ; tos=dp ; }                   // here
var x_here= primitive("here",forthhere) ;
describe("-- a",any) ;




function forthallot() {                                           // allot
   if ((dp+tos)>dictionaryfull)  {
      throwerror(-8) ;
   } else {
      dp+=tos ;
      tos=s[sp--] ;
   }
}
var x_allot= primitive("allot",forthallot) ;
describe("n --",any) ;


function forthhide() { hf[wc] &= (!smudgebit) ; }                 // hide
var x_hide= primitive("hide",forthhide) ;
describe("--",f83) ;


function forthreveal() { hf[wc] |= smudgebit ; }                  // reveal
var x_reveal= primitive("reveal",forthreveal) ;
describe("--",f83) ;



function comma(x)     {
   if ((dp+1) >= dictionaryfull)  {
      throwerror(-8) ;
   } else {
      m[dp++] = x ;
   }
}
function forthcomma() { comma(tos) ; tos = s[sp--] ; }            // ,
var x_comma  = primitive(",",forthcomma) ;
describe("x --",any) ;
var x_ccomma = primitive("c,",forthcomma) ;                       // c,
describe("c --",any) ;




function compile()  { for (var i=0 ; i<arguments.length ; jscomma(arguments[i++])) ; }



definitions(hidden) ;


// non-standard function, internal use.   find (more standard) builds on this one.
// return header number = xt
function forthsearch1()  {                              // ( packedname -- a2 | 0 )
   for (var i=wc; i; i--)  {                            // loop through headers last first
      w = h[i] ;
      if (w)  {                                         // header exists
         if (m[context] & ds[i]) {                      // header in context dir
            if (hf[i] & smudgebit) {                    // smudge bit set too ?
               if (!m[casesensitive])  w = w.toLowerCase() ;
               if (w == tos)  {                         // header match ?
                  if (m[compliance] & ds[i]) {          // complies with standard ?
                     tos = i;                           // yes, return xt
                     return;
                  }
               }
            }
         }
      }
   }
   tos = 0;                                             // all tried, no match
}




// this can be done better, but works for now.
function forthsearch()  {                               // ( a1 n -- a2 | 0 )
   forthpack();
   if (!m[casesensitive]) tos = tos.toLowerCase() ;
   var packedname = tos ;
   var orgcontext = m[context] ;
   forthsearch1() ;                                     // search context voc first
   if (!tos)  {                                         // go on, search voc stack if not found
      for ( var i=vocstack.length ; i ; )  {
         tos = 0 ;                                      // assume "not found"
         i-- ;
         if (m[context] != vocstack[i]) {               // don't search voc, if already searched
            m[context] = vocstack[i] ;                  // make next voc context
            tos = packedname ;
            forthsearch1() ;
         }
         if (tos)  break ;                              // found ? escape
      }
   }
   m[context] = orgcontext ;                            // restore original context
}
var x_search= primitive("search",forthsearch) ;





definitions(forth) ;

function forthfind()  {                                 // ( a -- a 0 | x1 1 | xt -1 )   (1=immediate)
   s[++sp] = tos ;
   s[++sp] = tos+1 ;
   tos = m[tos] & 255 ;
   forthsearch() ;                                      // ( a 0 | a xt )
   if (tos)  {
      s[sp] = tos;
      if (hf[tos] & precedencebit) {
         tos = 1 ;
      } else {
         tos = -1 ;
      }
   }
 }
var x_find= primitive("find",forthfind) ;
describe("a1 -- a2 0 | a2 xt",ans|f83|jsf) ;


function forthtobody()  {                               // ( a1 -- a2 )
   if (tos <= primitives)  throwerror(-31) ;
   tos = x[tos] + 1 ;
}
var x_tobody = primitive(">body",forthtobody) ;
describe("a1 -- a2",any) ;


function forthbodyfrom()  {                             // ( a1 -- a2 )
   tos-- ;
   for (var i=wc; i; i--)  {                            // loop through headers last first
      if (h[i])  {
         if (x[i] == tos)  {                            // word pointer match ?
            tos = i;                                    // yes, return xt
            return;
         }
      }
   }
   throwerror(-65) ;
}
primitive("body>",forthbodyfrom) ;
describe("a1 -- a2",jsf) ;




definitions(hidden) ;


function forthqimm()  { tos = -(hf[tos] & precedencebit) ; }              // ( xt -- f )
var x_qimm = primitive("?immediate",forthqimm) ;                          // ?immediate



function forthcompiling()  { s[++sp] = tos ; tos = m[state] ; }           // compiling
var x_compiling = primitive("compiling",forthcompiling) ;


definitions(forth) ;


function forthimmediate()  { hf[wc] |= precedencebit ; }                  // immediate
primitive("immediate",forthimmediate) ;
describe("--",any) ;






function forthbrclose()  { m[state] = true ; }                            // ]
var x_brclose = primitive("]",forthbrclose) ;
describe("--",any) ;


function forthbropen()  { m[state] = false ; }                            // [
var x_bropen = primitive("[",forthbropen,immediate) ;
describe("--",any) ;


definitions(hidden) ;

function forthnewheader()  {                                              // newheader
   forthpack() ;
   newheader(tos) ;
   tos=s[sp--] ;
}
var x_newheader = primitive("newheader",forthnewheader) ;


definitions(forth) ;


function forthdotname()    {    // ( xt -- )                              // .name
   type(h[tos]) ;
    tos = s[sp--] ;
}
var x_dotname = primitive(".name",forthdotname) ;
describe("xt --",jsf) ;


function forthname()    {       // ( xt -- a n )                          // name
    sp++ ;
    s[++sp] = h[tos] ;
    tos = dp ;
    s[sp-1] = tos ;
    unpack() ;
}
primitive("name",forthname) ;
describe("x1 -- a u",jsf) ;



definitions(hidden) ;

function forthcreateheader()  {
   s[++sp] = tos ;
   tos = bl ;
   forthparse() ;
   forthnewheader() ;
}
var x_createheader = primitive("createheader",forthcreateheader) ;


function forthuse()  {
   forthcreateheader() ;
   forthcomma() ;
   t[wc] = nexthilevel ;
}
var x_use = primitive("use",forthuse) ;



definitions(forth) ;

function forthcolonnoname()  {                                            // :noname
   s[++sp] = tos ;
   newheader("") ;
   tos = wc ;
   comma(x_nest) ;
   m[state] = -1 ;
   t[wc] = nexthilevel ;
}
primitive(":noname",forthcolonnoname)
describe("-- a",ans|jsf) ;




function forthunused()  {
   s[++sp] = tos ;
   tos = dictionaryfull - dp ;
}
primitive("unused",forthunused) ;
describe("-- u",ans|jsf) ;





function forthheap()  {         // ( -- a )
   s[++sp] = tos ;
   tos = heapend ;
}
primitive("heap",forthheap) ;
describe("-- a",jsf) ;


function forthbrmarker()  {     // ( wc dp -- )
   dp        = tos ;
   wc        = s[sp--] ;
   m[lastxt] = wc    ;
   tos       = s[sp--] ;
}
primitive("(marker)",forthbrmarker) ;
describe("wc dp heap --",jsf) ;





// =================================================================================================
//                                          mass storage
// =================================================================================================







// ------------------------------------------- memory drive --------------------------------------------

var ramblock = new Array() ;
var screenline ;

function saveblock()  {
   for (i=screenline.length ; i<16 ; i++)  screenline.push("") ;
   for (i=screenline.length ; i>16 ; i--)  screenline.pop() ;
   ramblock.push(screenline) ;
}



screenline = new Array() ;
screenline.push("( ramdrive block 0 - essential block words      -load- )") ;
screenline.push(": copy (s u1 u2 -- ) swap block swap buffer c/s move update ;") ;
screenline.push(": clear (s u -- ) buffer c/s blank update ;") ;
screenline.push(": index1 (s u -- )  dup scr ! 2 .r space 0 .line ;") ;
screenline.push(": index (s u1 u2 -- ) 1+ swap ?do cr i index1 loop ;") ;
screenline.push(": ls (s -- ) 0 capacity 1- index ;") ;
screenline.push(": w (s -- ) last @ 1+ 1 do i name dup if ") ;
screenline.push("      2dup info s\"   \" ...info  i stackeffect ...info") ;
screenline.push("   then 2drop loop ;") ;
screenline.push(": -->  (s -- ) blk @ 1+ block c/s !source >in off ; immediate") ;
screenline.push(": uppercase dup char a char z 1+ within 32 and - ;") ;
screenline.push(": p  (s -- )  scr @ 1-  0 max  scr ! ;") ;
screenline.push(": n  (s -- )  scr @ 1+ capacity 1- min scr ! ;") ;
screenline.push(": view (s -- ) begin key dup esc <> while uppercase") ;
screenline.push("  dup char N = if n else dup char P = if p then then") ;
screenline.push("  drop cls l repeat drop ;") ;
saveblock() ;



screenline = new Array() ;
screenline.push("( ramdrive block 1 - MARKER + info screen words -load- )") ;
screenline.push(": marker here last @ create , ,") ;
screenline.push("         does> skim swap @ (marker) ;") ;
screenline.push("") ;
screenline.push(": cr2  (s -- ) s\" \" info ;") ;
screenline.push("") ;
screenline.push(": .line2 (s u -- ) c/l * screen + c/l -trailing info ;") ;
screenline.push("") ;
screenline.push("( list screen on info window )") ;
screenline.push(": list2 (s u -- ) scr ! l/s 0 do i .line2 loop ;") ;
screenline.push("") ;
screenline.push("( list all screens on info, enable backscroll )") ;
screenline.push(": sources (s -- )  capacity 0 do i list2 loop all ;") ;
saveblock() ;



screenline = new Array() ;
screenline.push("( ramdrive block 2 - hex dump                   -load- )") ;
screenline.push("hidden definitions  6 constant dumps/line");
screenline.push(": safe-emit (s c -- ) dup bl 128 within 0=") ;
screenline.push("      if drop char . then emit ;") ;
screenline.push(": ######## (s u -- ) 0 <# 8 for # next #> type ;") ;
screenline.push(": .cell (s u -- ) 16 base exchange swap ######## space base ! ;") ;
screenline.push(": .addr (s u -- ) .cell ;") ;
screenline.push(": pad_dump1 (s n -- ) 4 swap - 3 * spaces ;") ;
screenline.push(": dump_cells (s a n -- ) for skim .cell next drop ;") ;
screenline.push(": dump_chars (s a n -- ) for count safe-emit next drop ;") ;
screenline.push(": dump1line (s a n -- ) dumps/line min dup if over .addr") ;
screenline.push("     2 spaces 2dup dump_cells dup pad_dump1 2 spaces") ;
screenline.push("   2dup dump_chars then 2drop ;") ;
screenline.push("forth definitions hidden") ;
screenline.push(": dump (s a n -- ) begin ?dup while 2dup cr dump1line") ;
screenline.push("  dumps/line /string repeat drop ; forth") ;
saveblock() ;



screenline = new Array();
screenline.push("( ramdrive block 3 - modified retro editor )") ;
screenline.push(": line (s u -- a )  c/l * screen + ;") ;
screenline.push(": s    (s u -- )    scr ! ;") ;
screenline.push(": ia (s a u -- )    line + >r 0 parse r> swap cmove ;") ;
screenline.push(": r  (s u -- )      0 swap ia ;") ;
screenline.push(": d  (s u -- )      line c/l blank ;") ;
screenline.push(": x (s -- )         clear ;") ;
screenline.push(": v (s -- )         l ;") ;
screenline.push("( extensions: bubble up and down lines )") ;
screenline.push(": >pad (s a n -- )  pad swap move ;") ;
screenline.push(": pad> (s a n -- )  pad -rot move ;") ;
screenline.push(": lines (s u1 u2 -- a1 a2 ) line swap line swap ;") ;
screenline.push(": xchg lines over >r dup c/l >pad c/l move r> c/l pad> ;") ;
screenline.push(": bu (s u1 -- )    ?dup if dup 1- xchg then ;") ;
screenline.push(": bd (s u1 -- )    dup l/s 1- < if dup 1+ bu then drop ;") ;
saveblock() ;



screenline = new Array("( ramdrive block 4 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 5 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 6 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 7 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 8 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 9 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 10 - empty )") ; saveblock() ;
screenline = new Array("( ramdrive block 11 - empty )") ; saveblock() ;





// ---------------------------- ram drive ----------------------------


function loadblockfromram(n,a)  {                 // unpack block n to address
   debug("ram drive: block " + n + " to addr " + a) ;
   var temp = a ;
   for ( i=0; i<16; i++ )  {
      s[++sp] = lineofspaces.substr(0,64) ;  tos = temp ; unpack() ;
      s[++sp] = ramblock[n][i].substr(0,64) ; tos = temp ; unpack() ;
      temp += 64 ;
   }
   return a ;
}



function savebuftoram(addr,blocknum)  {
   debug("ram drive: from " + addr + " to ramblock " + blocknum)
   for ( i=0; i<16; i++ )  {
      ramblock[blocknum][i] = pack(addr,64) ;
      addr += 64 ;
   }
}







function ramdrivecapacity()     { return ramblock.length } ;



// ------------------------- cookie drive ------------------------------


var cookiesectorsize = 1024                      // decrease size to spread block across multiple cookies

function loadblockfromcookie(blknum,destaddr)  {       // unpack block to address
   debug("cookie drive: block " + blknum + " to addr " + destaddr) ;
   for (var i=0 ; i<1024 ; i+=cookiesectorsize)  {
      var cookiename = (cookiebasename + blknum + "_" + i) ;
      var temp = (readcookie(cookiename, destaddr+i))
      if (temp) {
         unpackstring(temp.substr(0,cookiesectorsize),destaddr+i) ;
      } else {
         temp = destaddr+i ;
         for (var j=0 ; j<cookiesectorsize ; j++) m[temp++] = bl ;
      }
   }
   return destaddr ;
}


function savebuftocookie(addr,blknum)  {
   debug("cookie drive: from " + addr + " to block " + blknum)
   for (var i=0 ; i<1024 ; i+=cookiesectorsize)  setcookie((cookiebasename + blknum + "_" + i), pack(addr+i,cookiesectorsize), null, cookieexpirationdate) ;
}



function cookiedrivecapacity()  { return maxcookies ; }   // for now

function localcapacity()        { return (ramdrivecapacity() + cookiedrivecapacity()) } ;







// ------------------------------ peer drives ------------------------------







// -------------------------------------------------------------------------



function capacity()             { return localcapacity() ; }


function forthcapacity()        {  s[++sp] = tos ;  tos = capacity() ; }
primitive("capacity",forthcapacity) ;
describe("-- u",jsf) ;


function forthlocalcapacity()  { s[++sp] = tos ; tos = localcapacity() } ;
primitive("localcapacity",forthlocalcapacity) ;
describe("-- u",jsf) ;



// ------------------------ buffers ------------------------


// block mapping hardcoded in here
function savebuf(buffer)    {
   var starttime = new Date().getTime();
   var bufaddr = buf[buffer] ;
   var blknum = bufblk[buffer] ;
   if (blknum<maxcookies) {
      savebuftocookie(bufaddr,blknum) ;
   } else {
      var temp = localcapacity() ;
      savebuftoram(bufaddr,blknum-maxcookies) ;
   }
   bufdirty[buffer] = 0 ;                      // set clean
   var stoptime = new Date().getTime();
   debug("block " + blknum + " write took " + (stoptime-starttime) + "ms") ;
}




function loadblock(blknum,buffer)  {
   var starttime = new Date().getTime();
   if (blknum<maxcookies) {
      var blockdata = loadblockfromcookie(blknum,buffer) ;
   } else {
      var temp = localcapacity() ;
       blockdata = loadblockfromram(blknum-maxcookies,buffer) ;
   }
   var stoptime = new Date().getTime();
   debug("block " + blknum + " read took " + (stoptime-starttime) + "ms") ;
   return blockdata ;
}



// --------------------------------------------------------------

var hotbuffer ;                                        // for update

function forthblockorbuffer(flag) {                    // ( u -- a )  /  flag=true:block    false:buffer
   if ((tos>=capacity()) || (tos<0))  throwerror(-35) ;
   if (blockstat[tos] >= 0) {                       // block already mapped:
      hotbuffer = blockstat[tos] ;
      tos = buf[hotbuffer] ;                        // return buffer address
   } else {                                         // block not mapped:
      nextbuf++ ;                                   // next available buffer
      nextbuf %= maxbufs ;
      if (bufblk[nextbuf] >= 0)  {                  // buffer used for another block
         if (bufdirty[nextbuf]) savebuf(nextbuf) ;  // dirty ?
         blockstat[bufblk[nextbuf]] = -1;           // write block info "unbuffered"
      }
      var temp = tos ;
      if (flag) {
         tos = loadblock(tos,buf[nextbuf]) ;        // block: fill block with data from mass memory.
      } else {
         tos = buf[nextbuf] ;                       // buffer: indefinite buffer contents.
      }
      hotbuffer = nextbuf ;
      bufblk[nextbuf] = temp ;                      // associate buf with block#
      blockstat[temp] = nextbuf ;                   // set block info "buffered in ..."
   }
}




function forthbuffer() { forthblockorbuffer(false) ; }   // ( u -- a )
var x_buffer = primitive("buffer",forthbuffer) ;
describe("u -- a",any) ;



function forthblock()  { forthblockorbuffer(true) ; }    // ( u -- a )
var x_block = primitive("block",forthblock) ;
describe("u -- a",any) ;



function forthupdate()   { bufdirty[hotbuffer] = -1 ; }
primitive("update",forthupdate) ;
describe("--",any) ;




function forthsavebuffers()  {
   for (var i=0 ; i<maxbufs ; i++ ) {          // for all buffers
      if (bufdirty[i])  savebuf(i) ;           // save if dirty
      blockstat[bufblk[i]] = -1;               // write block info "unbuffered"
   }
}
primitive("save-buffers",forthsavebuffers) ;
describe("--",any) ;




function forthemptybuffers()  {
   for (var i=0 ; i<maxbufs ; i++ ) {
      if (bufblk[i]>=0)  {                     // buffer has block in ?
         blockstat[bufblk[i]] = -1 ;           // mark block as not buffered anymore
         bufblk[i] = -1 ;                      // mark buffer as not containing a block
         bufdirty[i] = 0 ;                     // set clean
      }
   }
}
primitive("empty-buffers",forthemptybuffers) ;
describe("--",any) ;





function forthblockstats() {
   cr() ; type("checking blocks:") ;
   var temp = capacity()
   for (var i=0 ; i<temp ; i++)  {
      if (blockstat[i] != -1)  {
         cr() ;
         type("   blk #" + i + ": buf " + blockstat[i]);
      }
   }
}


function forthbufstats() {
   cr() ; type("checking buffers:")
   for ( i=0 ; i<maxbufs ; i++ )  {
      cr() ;
      type("   buf #" + i + ":") ;
      if (bufblk[i] < 0)  {
         type(" empty") ;
      } else {
         type( " blk " + bufblk[i]) ;
      }
      if (bufdirty[i])  type(" dirty") ;
   }
  forthblockstats() ;
}
primitive("bufstats",forthbufstats) ;
describe("--",jsf) ;
















// =================================================================================================
//                                          vocabularies
// =================================================================================================

// i'll try to use the standards selector to implement conventional vocabularies


definitions(forth) ;

function dovocabulary()  {
   w = x[w] ;
   m[context] = m[w] ;
   standard = ((standard & (higheststandard<<1)-1)) | m[context] ;
}

function forthvocabulary()  {
   if (nextvocabulary>=0x20000000)  {
      throwerror(-69) ;
   } else {
      forthcreateheader() ;
      vocname.push(wc) ;
      t[wc] = dovocabulary ;
      nextvocabulary <<= 1 ;
      m[dp++] = nextvocabulary ;
      forthreveal() ;
   }
}
primitive("vocabulary",forthvocabulary) ;
describe("<new vocabulary name> --",any) ;









function forthonly()  {
   for ( var i=vocstack.length ; i ; i--)  vocstack.pop() ;
   m[context] = only ;
   vocstack.push(only) ;   }
primitive("only",forthonly) ;
describe("--",any) ;
vocname.push(wc) ;



function forthforth() { m[context] = forth ; }
primitive("forth",forthforth) ;
describe("--",any|only) ;
vocname.push(wc) ;



function forthhidden() { m[context] = hidden ; }
primitive("hidden",forthhidden) ;
describe("--",jsf|f83|ans) ;
vocname.push(wc) ;




function forthteststuff() { m[context] = teststuff ; }
primitive("teststuff",forthteststuff) ;
describe("--",jsf) ;
vocname.push(wc) ;





function forthdefinitions()  { m[current] = m[context] ; }
primitive("definitions",forthdefinitions) ;
describe("--",any) ;




function forthorder()  {
   printvocname(m[context]) ;
   for (var i=vocstack.length ; i ; i--)  printvocname(vocstack[i-1]) ;
   type("      ") ; printvocname(m[current]) ;
}
primitive("order",forthorder) ;
describe("--",ans|jsf|only) ;


function forthalso()  { vocstack.push(m[context]) ; }
primitive("also",forthalso) ;
describe("--",ans|jsf) ;


function forthprevious()  { m[context] = vocstack.pop() ; }
primitive("previous",forthprevious) ;
describe("--",ans|jsf) ;



function forthvocs()  { for (i=vocname.length ; i ; type(h[vocname[--i]] + " ")) ; }
primitive("vocs",forthvocs) ;
describe("--",fig|f79|f83|jsf) ;




// =================================================================================================
//                                        floating point
// =================================================================================================


definitions(teststuff) ;
// fconstants, testing
function forth1point5()     { f.push(ftos) ; ftos=1.5 ;  } ;  primitive("1.5",forth1point5) ;
function forthmin1point5()  { f.push(ftos) ; ftos=-1.5 ; } ;  primitive("-1.5",forthmin1point5) ;
function forth2point8()     { f.push(ftos) ; ftos=2.8 ;  } ;  primitive("2.8",forth2point8) ;
function forthmin2point8()  { f.push(ftos) ; ftos=-2.8 ; } ;  primitive("-2.8",forthmin2point8) ;



definitions(forth) ;
function forthfdots()  {                                              // f.s
   f.push(ftos) ;
   for (var i=1 ; i < f.length ; type(f[i++] + " ")) ;
   ftos = f.pop() ;
}
primitive("f.s",forthfdots) ;
describe("--",any) ;




function forthfdrop()      { ftos = f.pop() ; }                        // fdrop
primitive("fdrop",forthfdrop) ;
describe("r --",any) ;



function forthfdup()      { f.push(ftos) ; }                           // fdup
primitive("fdup",forthfdup) ;
describe("r -- r r",any) ;



function forthfswap()     {                                            // fswap
    w = f.pop() ;
    f.push(ftos) ;
    ftos = w ;
}
primitive("fswap",forthfswap) ;
describe("r1 r2 -- r2 r1",any) ;



function forthfover()      {                                           // fover
   f.push(ftos) ;
   ftos = f[f.length-2] ;
}
primitive("fover",forthfover) ;
describe("r1 r2 -- r1 r2 r1",any) ;



function forthffetch()      {                                          // f@
   f.push(ftos) ;
   ftos = (m[tos]) ;
   tos = s[sp--] ;
}
primitive("f@",forthffetch) ;
describe("a -- r",any) ;



function forthfstore()      {                                          // f!
   m[tos] = ftos ;
   ftos = f.pop() ;
   tos = s[sp--] ;
}
primitive("f!",forthfstore) ;
describe("r a --",any) ;






function forthfequ()      {                                            // f=
   s[++sp] = tos ;
   tos =  -(ftos == f.pop()) ;
}
primitive("f=",forthfequ) ;
describe("r1 r2 -- f",any) ;




function forthfnequ()       {                                          // f<>
   s[++sp] = tos ;
   tos =  -(ftos != f.pop()) ;
}
primitive("f<>",forthfnequ) ;
describe("r1 r2 -- f",any) ;



function forthfmore()       {                                          // f>
   s[++sp] = tos ;
   tos =  -(f.pop() > ftos) ;
}
primitive("f>",forthfmore) ;
describe("r1 r2 -- f",any) ;



function forthfless()       {                                         // f<
   s[++sp] = tos ;
   tos =  -(f.pop() < ftos) ;
}
primitive("f<",forthfless) ;
describe("r1 r2 -- f",any) ;



function forthf0equ()       {                                         // f0=
   s[++sp] = tos ;
   tos = -(ftos == 0) ;
   ftos = f.pop() ;
}
primitive("f0=",forthf0equ) ;
describe("r -- f",any) ;



function forthf0nequ()       {                                        // f0<>
   s[++sp] = tos ;
   tos = -(ftos != 0) ;
   ftos = f.pop() ;
}
primitive("f0<>",forthf0nequ) ;
describe("r -- f",any) ;



function forthf0less()       {                                        // f0<
   s[++sp] = tos ;
   tos = -(ftos < 0) ;
   ftos = f.pop() ;
}
primitive("f0<",forthf0less) ;
describe("r -- f",any) ;



function forthf0greater()     {                                       // f0>
   s[++sp] = tos ;
   tos = -(ftos > 0) ;
   ftos = f.pop() ;
}
primitive("f0>",forthf0greater) ;
describe("r -- f",any) ;



function forthfnegate()       {                                       // fnegate
   ftos = -ftos ;
}
primitive("fnegate",forthfnegate) ;
describe("r1 -- r2",any) ;



function forthfabs()               {                                  // fabs
   ftos = Math.abs(ftos) ;
}
primitive("fabs",forthfabs) ;
describe("r1 -- r2",any)



function forthfround()               {                                 // fround
   ftos = Math.round(ftos) ;
}
primitive("fround",forthfround) ;
describe("r1 -- r2",any)





function forthfdepth()               {                                  // fdepth
   s[sp++] = tos ;
   tos = f.length ;
}
primitive("fdepth",forthfdepth) ;
describe(" -- u",any)



function forthdtof()  {                                                 // d>f
   f.push(ftos) ;
   ftos =  tos * 0x100000000 + s[sp--] ;
   tos = s[sp--] ;
}
primitive("d>f",forthdtof) ;
describe("d --",jsf|ans) ;


function forthftod()  {                                                 // f>d
   s[++sp] = tos ;
   tos = ftos ;
   ftos = f.pop() ;
   s[++sp] = tos & 0xffffffff ;
   tos = tos/0x100000000
   if (tos<0) tos+=floorfix ;
   tos = Math.floor(tos) ;
}
primitive("f>d",forthftod) ;
describe("r -- d",jsf|ans) ;



function forthstof()  {                                                 // s>f
   f.push(ftos) ;
   ftos = tos ;
   tos = s[sp--] ;
}
primitive("s>f",forthstof) ;
describe("x --",jsf) ;



function forthfplus()  {                                                // f+
   ftos += f.pop() ;
}
primitive("f+",forthfplus) ;
describe("r1 r2 -- r3",jsf|ans) ;



function forthfminus()  {                                               // f-
   ftos = f.pop()-ftos ;
}
primitive("f-",forthfminus) ;
describe("r1 r2 -- r3",jsf|ans) ;



function forthfmul()  {                                                 // f*
   ftos *= f.pop() ;
}
primitive("f*",forthfmul) ;
describe("r1 r2 -- r3",jsf|ans) ;


function forthfdiv()  {                                                 // f/
   var temp = f.pop() ;
   ftos = temp/ftos ;
}
primitive("f/",forthfdiv) ;
describe("r1 r2 -- r3",jsf|ans) ;



function forthfsin()  {                                                 // fsin
   ftos = Math.sin(ftos) ;
}
primitive("fsin",forthfsin) ;
describe("r1 -- r2",jsf|ans) ;



function forthfcos()  {                                                 // fcos
   ftos = Math.cos(ftos) ;
}
primitive("fcos",forthfcos) ;
describe("r1 -- r2",jsf|ans) ;



function forthftan()  {                                                 // ftan
   ftos = Math.tan(ftos) ;
}
primitive("ftan",forthftan) ;
describe("r1 -- r2",jsf|ans) ;




function forthfasin()  {                                                // fasin
   ftos = Math.asin(ftos) ;
}
primitive("fasin",forthfasin) ;
describe("r1 -- r2",jsf|ans) ;




function forthfatan()  {                                                // fatan
   ftos = Math.atan(ftos) ;
}
primitive("fatan",forthfatan) ;
describe("r1 -- r2",jsf|ans) ;



function forthfatan2()  {                                               // fatan2
   ftos = Math.atan2(f.pop(),ftos) ;
}
primitive("fatan2",forthfatan2) ;
describe("r1 r2 -- r3",jsf|ans) ;




function forthfacos()  {                                                // facos
   ftos = Math.acos(ftos) ;
}
primitive("facos",forthfacos) ;
describe("r1 -- r2",jsf|ans) ;




function forthfpower()  {                                               // f**
   ftos = Math.pow(f.pop(),ftos) ;
}
primitive("f**",forthfpower) ;
describe("r1 r2 -- r3",jsf|ans) ;



function forthfln()  {                                                // fln
   ftos = Math.log(ftos) ;
}
primitive("fln",forthfln) ;
describe("r1 -- r2",jsf|ans) ;




// function forthflog()  {                                                // flog
//   ftos = Math.log(10,ftos) ;
// }
// primitive("flog",forthflog) ;
// describe("r1 -- r2",jsf|ans) ;



// (Math.log) : e based



function forthfalog()  {                                               // falog
   ftos = Math.pow(10,ftos) ;
}
primitive("falog",forthfalog) ;
describe("r1 -- r2",jsf|ans) ;






function forthfsqrt()  {                                               // fsqrt
   ftos = Math.sqrt(ftos) ;
}
primitive("fsqrt",forthfsqrt) ;
describe("r1 -- r2",jsf|ans) ;




function forthfmin()  {                                                 // fmin
   ftos = Math.min(ftos,f.pop()) ;
}
primitive("fmin",forthfmin) ;
describe("r1 r2 -- r3",jsf|ans) ;



function forthfmax()  {                                                 // fmax
   ftos = Math.max(ftos,f.pop()) ;
}
primitive("fmax",forthfmax) ;
describe("r1 r2 -- r3",jsf|ans) ;




function forthfdot()  {                                                 // f.
   type(ftos + " ") ;
   ftos = f.pop() ;
}
primitive("f.",forthfdot) ;
describe("r --",jsf|ans) ;


function forthpi()  {                                                   // pi
   f.push(ftos) ;
   ftos = Math.PI ;
}
primitive("pi",forthpi) ;
describe("-- r",jsf|ans) ;



function forthreciproc()  {                                              // 1/F
   ftos = 1/ftos ;
}
primitive("1/f",forthreciproc) ;
describe("r1 -- r2",jsf|ans) ;




function forthfcomma() { m[dp++] = ftos ; ftos = f.pop() ; }               // f,
var x_fcomma  = primitive("f,",forthfcomma) ;
describe("r --",any) ;


primitive("falign",noop,immediate)                                         // falign
describe("--",ans) ;

primitive("faligned",noop,immediate)                                       // faligned
describe("--",ans) ;





// =================================================================================================
//                                             heap
// =================================================================================================


var nusedchunks  = 0 ;
var nfreechunks  = 0 ;



// return data address of chunk
function newchunk(size)  {
   m[heapend++] = nusedchunks ;
   m[heapend++] = size ;
   usedchunk[nusedchunks++] = heapend ;
   var temp = heapend ;
   heapend += tos ;
   return temp ;
}



// return data address of chunk
function splitchunk(fit,newsize)  {
   var chunkaddr = freechunk[fit] ;
   var chunksizeleft = m[chunkaddr-1] - (newsize+2) ;
   if ((chunksizeleft) > 0)  {                         // split chunk into two:
      m[chunkaddr-1] = chunksizeleft++ ;               // new size old chunk
      chunkaddr += chunksizeleft ;                     // new addr new chunk
      m[chunkaddr++] = newsize ;                       // new size new chunk
   } else {                                            // use chunk completely:
      freechunk[fit] = freechunk[--nfreechunks] ;      // last chunk takes place of used chunk
      freechunk.pop() ;                                // shorten array of freed chunks
   }
   m[chunkaddr-2] = nusedchunks ;                      // index into usedchunks array to this chunk
   usedchunk[nusedchunks++] = chunkaddr ;              // move new chunk to usedchunks
   return chunkaddr ;
}




function searchfit(size)  {
   var fit = -1 ;
   if (nfreechunks)  {
      var temp = 0xffffffff ;                     // any chunk is better
      for (var i=0 ; i<nfreechunks ; i++)  {
         var slack = m[freechunk[i]-1] - size ;
         if (slack == 0)  return i
         if (slack > 2 )  {
            if (!fittype) return i ;
            if ( slack < temp )  {
               fit = i ;
               temp = slack ;
            }
         }
      }
   }
   return fit ;
}



function forthallocate()  {  // ( u -- a 0 | err )
   var fit = searchfit(tos) ;
   if (fit<0) {
      s[++sp] = newchunk(tos) ;
   } else {
      s[++sp] = splitchunk(fit,tos) ;
   }
   tos = 0 ;
}
primitive("allocate",forthallocate) ;
describe("u -- a 0 | err",ans|jsf) ;




function forthfree()  {    // ( a -- 0 | err )
   var temp = Math.min(m[tos-2],nusedchunks-1) ;
   var chunkaddr = usedchunk[temp] ;
   if (chunkaddr != tos)  {
      throwerror(-72) ;
   } else {
      freechunk[nfreechunks++] = chunkaddr ;
      nusedchunks-- ;
      var lastchunk = usedchunk.pop() ;
      if (temp < nusedchunks) {
         m[lastchunk-2] = temp ;
         usedchunk[temp] = lastchunk ;
      }
   }
   freechunk.sort()
   chunkaddr = freechunk[0] + m[freechunk[0]-1] + 2;

// combining from end of memory towards lower addresses may be quicker .
   for (temp = 1 ; temp < nfreechunks ; temp++)  {
      if (freechunk[temp] == chunkaddr)  {                      // merge chunks
         chunksize = m[freechunk[temp]-1] + 2 ;
         m[freechunk[temp-1]-1] += chunksize ;
         chunkaddr +=  chunksize ;
         nfreechunks-- ;
         for (var i=temp ; i<nfreechunks ; freechunk[i++] = freechunk[i]) ;
         freechunk.pop() ;
         temp--;
      } else {
         chunkaddr = freechunk[temp] + m[freechunk[temp]-1] + 2;
      }
   }
   temp = freechunk[nfreechunks-1] ;
   if (( temp + m[temp-1]) == heapend )  {
      nfreechunks-- ;
      heapend = (freechunk.pop() - 2 ) ;
   }
   tos = 0 ;
}
primitive("free",forthfree) ;
describe("a -- 0 | err",ans|jsf) ;





// RESIZE
//    freed areas appendable ?
//    yes: append
//    no: allocate new, copy




function forthdotallocated()  {
   type("allocated:") ;
   for (var i=0 ; i<nusedchunks ; i++ )  {
      cr() ;
      type(i + "/" + m[usedchunk[i]-2] + ": " + (usedchunk[i]) + " " + m[usedchunk[i]-1]) ;
   }
   cr() ; type("freed:") ;
   for (i=0 ; i<nfreechunks ; i++ )  {
      cr() ;
      type(i + ": " + (freechunk[i]) + " " + m[freechunk[i]-1]) ;
   }
}
primitive(".allocated",forthdotallocated) ;
describe("--",jsf) ;




// =================================================================================================
//                                     peephole optimizer
// =================================================================================================


// function forthpeephole()  {                   \\ ( xt1 -- xt2 )
// }
// var x_peephole = primitive("peephole",forthpeephole) ;
// describe("xt1 -- xt2",jsf) ;





// =================================================================================================
//                                             utility
// =================================================================================================

definitions(forth) ;

function forthbye()  {
   forthsavebuffers();
   window.close() ;
}
primitive("bye",forthbye) ;
describe("--",any|foerthchen) ;


function forthdecimal() { m[base] = 10 ; }
var x_decimal = primitive("decimal",forthdecimal) ;
describe("--",any) ;


function forthhex() { m[base] = 16 ; }
var x_hex = primitive("hex",forthhex) ;
describe("--",any) ;




// ( a n -- )   execute as javascript
function fortheval()     {  forthpack();  eval(tos) ;   tos=s[sp--]; }
var x_eval = primitive("eval",fortheval)
describe("a n --",jsf) ;




// ----------- javascript popup dialogs ------------




// pops up an alert
function forthalert()   {                                 // ( a n -- )
   forthpack() ;
   alert(tos) ;
   tos = s[sp--] ;
}
primitive("alert",forthalert) ;
describe("a n --",jsf) ;




// pops up a confirm window
function forthconfirm()   {                                 // ( a n -- f )
   forthpack() ;
   tos = -confirm(tos) ;
}
primitive("confirm",forthconfirm) ;
describe("a n -- d",jsf) ;




function forthenter()   {                                 // ( a1 n1 a2 -- n2 )
   tos = unpackstring(prompt(pack(s[sp-1],s[sp])),tos) ;
   sp -= 2 ;
}
primitive("enter",forthenter) ;
describe("a1 n1 a2 -- n2",jsf) ;




// --------------- time ----------------




function forthms()  {
   suspended = w ;
   setTimeout(function() { virtualmachine(ip) ; }, tos) ;
   tos = s[sp--] ;
}
var x_ms = primitive("ms",forthms) ;
describe("u --",jsf) ;



function forthepoch()  {                                  // ( -- u )
   s[++sp] = tos ;
   w = new Date().getTime() ;
   tos = Math.floor(w/1000) ;
}
primitive("epoch",forthepoch)
describe("-- u",jsf) ;


// ------------- random ---------------

function forthrandom()  {
   tos = Math.floor(Math.random() * tos) ;
}
primitive("random",forthrandom) ;
describe("u1 -- u2",jsf)


// --------- helpers for see -----------




definitions(hidden) ;

// where is source ?  -1:console   -2: script   0..: blk*1024+charpos
function forthlocate()  { tos = src[tos] ; }      // ( xt -- n )
primitive("locate",forthlocate) ;
describe("xt -- n",jsf) ;

// fails with does> words
function forthwordtype()  {                       // ( xt1 -- xt2 )
   if (tos <= primitives)  {
      tos = 0 ;                       // primitive
   } else {
      tos = m[x[tos]] ;               // other
   }
}
primitive("wordtype",forthwordtype) ;
describe("xt1 -- xt2",jsf) ;


// returns source of a primitive
function forthdisassemble()  {                    // ( xt a -- n )
   var temp = (x[s[sp--]]) + " " ;
   tos = unpackstring(temp,tos) ;
}
primitive("disassemble",forthdisassemble) ;
describe("xt a -- n",jsf) ;

definitions(forth) ;




// ----- info screen tools -----




function infosall()  { /* No-op. */ } ; primitive("all",infosall) ;
describe("--",jsf) ;

function infostail() { /* No-op. */ } ; primitive("tail",infostail) ;
describe("--",jsf) ;



function setinfoslines()  {
   infolines = tos ;
   info("* buffer size set to " + tos + " lines.") ;
   tos = s[sp--] ;
}
primitive("infolines",setinfoslines) ;
describe("u --",jsf) ;




// --------------------------------------




function forthloadhelp()  {    //  ( a n -- )
   var temp = "docs/jsforth.html" + "#" + pack(s[sp],tos);
   window.frames['help'].window.location.replace(temp.toUpperCase()) ;
   sp-- ;
   tos = s[sp--] ;
}
var x_loadhelp = primitive("loadhelp",forthloadhelp) ;








// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
//                               no more primitives below this point
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================


var primitives = wc ;









// =================================================================================================
//                               builders for non-primitive words
// =================================================================================================

// could speed this up with proper linkage code in t[wc]
function constant(name,value)  {
   newheader(name,smudgebit) ;
   comma(x_doconst) ;
   comma(value) ;
   t[wc] = nextconstant ;
   return wc ;
}


function variable(name)  {
   newheader(name,smudgebit);
   comma(x_dovar);
   comma(0);
   t[wc] = nextvariable ;
   return wc;
}




function colon(name,flags)  {
   newheader(name,flags|smudgebit);
   comma(x_nest);
   t[wc] = nexthilevel ;
   return wc;
}


function alias(name,flags)  {
   newheader(name,flags|smudgebit);
   x[wc] = x[wc-1] ;
   t[wc] = t[wc-1] ;
   return wc;
}


function semicolon()  { jscomma(x_unnest)  }



// =================================================================================================
//                               control flow for using in this script
// =================================================================================================



function IF()        { m[dp++] = x_0branch ; s[++sp] = tos ; tos = dp ; dp++ ; }
function ELSE()      { m[dp++] = x_branch ; s[++sp] = dp ; dp++ ; m[tos] = dp-tos ; tos = s[sp--] ; }
function THEN()      { m[tos]  = dp-tos ; tos = s[sp--] ; }
function BEGIN()     { s[++sp] = tos ; tos = dp ; }
function UNTIL()     { m[dp++] = x_0branch ; m[dp] = tos-dp++ ; tos = s[sp--]; }
function WHILE()     { IF() ; }
function REPEAT()    { m[dp++] = x_branch  ; m[dp] = s[sp--]-dp++ ; m[tos] = dp-tos ; tos = s[sp--]; }
function AGAIN()     { m[dp++] = x_branch  ; m[dp] = tos-dp++ ; tos = s[sp--]; }
function makeDO(xt)  { m[dp++] = xt; s[++sp] = m[innerloop]; m[innerloop] = dp; s[++sp] = dp ; dp++ ; }
function DO()        { makeDO(x_brdo)  ; }
function QDO()       { makeDO(x_brqdo) ; }
function LOOP()      { m[dp++] = x_brloop; m[dp++] = s[sp]+2-dp; m[s[sp]] = dp-s[sp--]; m[innerloop] = s[sp--]; }
function LEAVE()     { m[dp++] = x_brleave  ; m[dp++] = m[innerloop] ; }
function QLEAVE()    { m[dp++] = x_brqleave ; m[dp++] = m[innerloop] ; }






// =================================================================================================
//                           forth-visible constants and variables
// =================================================================================================


definitions(hidden) ;
var x_innerloop = constant("innerloop",innerloop) ;
var x_innercase = constant("innercase",innercase) ;


definitions(forth) ;
var x_minus1    = constant("-1",-1) ;                         describe("-- -1",jsf|foerthchen);
var x_0         = constant("0",0) ;                           describe("-- 0",any) ;
var x_1         = constant("1",1) ;                           describe("-- 1",any) ;
                  constant("cell",1) ;                        describe("-- u",ans|jsf) ;
var x_2         = constant("2",2) ;                           describe("-- 2",any) ;
var x_bl        = constant("bl",bl);                          describe("-- c",any) ;
var x_esc       = constant("esc",esc) ;                       describe("-- c",jsf) ;
                  constant("compliance",compliance) ;         describe("-- a",jsf) ;
                  constant("true",-1) ;                       describe("-- -1",any) ;
                  constant("false",0) ;                       describe("-- 0",any) ;
                  constant("casesensitive",casesensitive) ;   describe("-- a",jsf) ;
                  constant("warnings",warnings) ;             describe("-- a",jsf) ;
                  constant("debugger",debugging) ;            describe("-- a",jsf) ;
var x_xontext   = constant("context",context) ;               describe("-- a",jsf) ;
var x_current   = constant("current",current) ;               describe("-- a",jsf) ;
var x_blk       = constant("blk",blk) ;                       describe("-- a",any) ;
var x_scr       = constant("scr",scr) ;                       describe("-- a",any) ;
var x_lastxt    = constant("last",lastxt) ;                   describe("-- a",jsf) ;
var x_base      = constant("base",base) ;                     describe("-- a",any) ;
var x_tib       = constant("tib",tib) ;                       describe("-- a",any) ;
var x_span      = constant("span",span) ;                     describe("-- a",fig|f79|f83|ans) ;
var x_hashtib   = constant("#tib",hashtib) ;                  describe("-- a","obsolete, variable containing #chars in tib",fig|f79|f83|ans) ;
var x_in        = constant(">in",toin) ;                      describe("-- a",any) ;
var x_state     = constant("state",state) ;                   describe("-- a",any) ;
                  constant("outfile",outfile) ;               describe("-- a",jsf) ;
                  constant("fit",fittype) ;                   describe("-- a",jsf) ;
                  constant("c/l",64) ;                        describe("-- u",jsf) ;
                  constant("l/s",16) ;                        describe("-- u",jsf) ;
                  constant("c/s",1024) ;                      describe("-- u",jsf) ;



var x_literal = colon("literal",immediate) ;
   compile(x_lit,x_lit,x_comma,x_comma) ;
semicolon() ;
 describe("x --",any) ;




// =================================================================================================
//                                             errors
// =================================================================================================

definitions(hidden) ;
var x_stackunderflow = colon("underflow")   ;   compile(x_lit,-4,x_throw) ;
var x_notfound       = colon("notfound")    ;   compile(x_lit,-13,x_throw) ;
definitions(hidden) ;

definitions(forth) ;
var x_abort          = colon("abort")       ;   compile(x_lit,-1,x_throw) ;
describe("--",any)   ;







// =================================================================================================
//                                          compilation
// =================================================================================================


var x_qcomp = colon("?comp") ;
   compile(x_compiling,x_0equ) ;
   IF() ;
      compile(x_lit,-14,x_throw) ;
   THEN() ;
semicolon() ;
describe("--",jsf) ;


var x_qexec = colon("?exec") ;
   compile(x_compiling) ;
   IF() ;
      compile(x_lit,-64,x_throw) ;
   THEN() ;
semicolon() ;
describe("--",jsf) ;


var x_compilecomma = colon("compile,",immediate) ;
   compile(x_qcomp,x_comma) ;
semicolon() ;
describe("xt --",any) ;







// =================================================================================================
//                                             strings
// =================================================================================================


definitions(hidden) ;

var x_commastr = colon(",$") ;
     compile(x_here,x_over,x_1plus,x_allot,x_movestr);
semicolon()
describe("a n --",jsf) ;


definitions(forth) ;

// # ( <stream> -- ) compile a string from input stream
var x_commaquote = colon(',"');
   compile(x_lit,34,x_parse,x_commastr);
semicolon();
describe("--",jsf) ;


// # ( <stream> -- ) compile a string from input stream
var x_commatick = colon(",'");
   compile(x_lit,39,x_parse,x_commastr);
semicolon();
describe("--",jsf) ;


function forthscan()  {    // ( a1 n2 c -- a2 n2 )
   var temp = s[sp--] ;
   for ( ; temp ; temp--)  {
      if (m[s[sp]] == tos)  break ;
      s[sp]++ ;
   }
   tos = temp ;
}
primitive("scan",forthscan) ;
describe("a1 n2 c -- a2 n2",any) ;




function forthskip()  {    // ( a1 n2 c -- a2 n2 )
   var temp = s[sp--] ;
   for ( ; temp ; temp--)  {
      if (m[s[sp]] != tos)  break ;
      s[sp]++ ;
   }
   tos = temp ;
}
primitive("skip",forthskip) ;
describe("a1 n2 c -- a2 n2",any) ;




definitions(hidden) ;

var x_compilestringword = colon('string\",') ;
   compile(x_qcomp,x_comma,x_commaquote) ;
semicolon() ;

var x_compiletickstringword = colon("string',") ;
   compile(x_qcomp,x_comma,x_commatick) ;
semicolon() ;


definitions(forth) ;

var x_squote = colon('s"',immediate) ;
   compile(x_lit,x_brsquote,x_compilestringword);
semicolon();
describe("--",any) ;



var x_cquote = colon('c"',immediate);
   compile(x_lit,x_brcquote,x_compilestringword);
semicolon();
describe("--",ans|jsf) ;



var x_dotquote = colon('."',immediate);
   compile(x_lit,x_brdotquote,x_compilestringword);
semicolon();
describe("--",any|foerthchen) ;





colon("s'",immediate) ;
   compile(x_lit,x_brsquote,x_compiletickstringword);
semicolon();
describe("--",any) ;


colon(".'",immediate);
   compile(x_lit,x_brdotquote,x_compiletickstringword);
semicolon();
describe("--",any|foerthchen) ;


var x_dumul = colon("du*")     // ( ud1 u -- ud2 )
   compile(x_tuck,x_2tor,x_ummul,x_0,x_2rfrom,x_mul,x_dplus)
semicolon() ;



colon(">number") ;
   compile(x_2dup,x_plus,x_tor);
   compile(x_0) ;
   QDO() ;
      compile(x_count,x_digit,x_dup,x_0less) ;
      IF() ;
         compile(x_drop,x_1minus) ;
         LEAVE() ;
      THEN() ;
      compile(x_swap,x_tor,x_tor);
      compile(x_base,x_fetch,x_dumul);
      compile(x_rfrom,x_0,x_dplus);
      compile(x_rfrom) ;
   LOOP() ;
   compile(x_rfrom,x_over,x_minus);

semicolon() ;
describe("ud1 a1 u1 -- ud2 a2 u2",ans|jsf)




// function forthtonumber()  {              // ( ud1 a1 u1 -- ud2 a2 u2 )
//   var digit ;
//   var radix = m[base] ;
//   w = s[sp] ;
//   for ( ; tos ; tos-- )   {
//      digit = m[w] - 48 ;
//      if ( digit > 16 )  digit -= 7 ;
//      if ( digit > 36 )  digit -= 32 ;
//      if ( (digit >= 0) && (digit < radix) )  {

//         s[sp-2] *= radix ;
//         s[sp-2] += digit ;

//         w++ ;
//      } else  {
//         s[sp] = w ;
//         break ;
//      }
//   }
// }
// primitive(">number",forthtonumber) ;
// describe("d1 a1 n1 -- d2 a2 n2",ans|jsf) ;







var x_abortquote = colon('abort"',immediate);
   compile(x_lit,x_brabortquote,x_compilestringword);
semicolon();
describe("--",any) ;







// =================================================================================================
//                                         defining words
// =================================================================================================


// ( a <stream> -- )
var x_create = colon("create") ;    compile(x_lit,x_dovar,x_use,x_reveal) ; semicolon() ;
describe("--",any) ;


var x_const  = colon("constant") ;
   compile(x_lit,x_doconst,x_use,x_comma,x_reveal) ;    // which is left in here for the moment. doesn't hurt.
semicolon() ;
describe("x --",any) ;


colon("fconstant")   ;              compile(x_lit,x_dofconst,x_use,x_fcomma,x_reveal) ; semicolon() ;
describe("r -- ) ( -- r )",ans|jsf) ;


colon("value")      ;               compile(x_lit,x_dovalue,x_use,x_comma,x_reveal) ; semicolon() ;
describe("x --",ans|jsf) ;


colon("variable")   ;               compile(x_create,x_0,x_comma) ; semicolon() ;
describe("--",any) ;

alias("fvariable") ;
describe("-- ) ( -- a",any) ;


colon(";",immediate) ;              compile(x_lit,x_unnest,x_comma,x_bropen,x_reveal) ; semicolon() ;
describe("--",any|foerthchen) ;


colon(":") ;                        compile(x_lit,x_nest,x_use,x_brclose) ; semicolon() ;
describe("<wordname> --",any|foerthchen) ;


colon("does>",immediate) ;
   compile(x_lit,x_setdoes,x_compilecomma) ;
   compile(x_lit,x_unnest,x_compilecomma)  ;
semicolon() ;
describe("--",any) ;




// =================================================================================================
//                                                i/o
// =================================================================================================


var x_keyq = colon("key?") ;   compile(x_key1query,x_key2query) ; semicolon() ;
describe("-- f",jsf) ;


colon("?terminal") ; compile(x_keyq) ; semicolon() ;
describe("-- f",fig|f79) ;


var x_key = colon("key") ;   compile(x_key1,x_key2) ; semicolon() ;
describe("-- c",any) ;



var x_word = colon("word") ;
   compile(x_parse,x_here,x_movestr,x_here) ;
semicolon() ;
describe("c -- a",any|foerthchen) ;



var x_accept = colon("accept") ;                                  // ( a n1 -- n2 )
   compile(x_over,x_swap,x_1plus) ;
   BEGIN() ;
      compile(x_qdup) ;
   WHILE() ;
      compile(x_key,x_decode) ;
   REPEAT() ;
   compile(x_swap,x_minus) ;
semicolon() ;
describe("a n1 -- n2",ans|jsf) ;



colon("expect")
   compile(x_accept,x_span,x_store) ;
semicolon() ;
describe("a n --",fig|f79|f83|ans) ;




var x_query = colon("query") ;
   compile(x_tib,x_dup,x_lit,tibsize,x_accept) ;
   compile(x_dup,x_hashtib,x_store,x_storesource) ;
   compile(x_in,x_off) ;
semicolon() ;
describe("--",any) ;



var x_sbr = colon("s(") ;
   compile(x_lit,41,x_parse) ;
semicolon() ;
describe("-- a n",jsf) ;



colon(".(",immediate) ;
   compile(x_sbr,x_type) ;
semicolon() ;
describe("<stream> --",ans|jsf) ;



var x_char = colon("char",immediate) ;                                       // char
   compile(x_bl,x_parse,x_drop,x_cfetch);
   compile(x_compiling) ;
   IF() ;
      compile(x_literal) ;
   THEN() ;
semicolon() ;
describe("<stream> -- c",ans|jsf) ;
alias("[char]",immediate) ;                                                  // [char]
describe("<stream> -- c",ans|jsf) ;



colon("\\",immediate) ;
   compile(x_0,x_parse,x_2drop) ;
semicolon() ;
describe("<stream> --",any) ;



colon("(",immediate) ;
   compile(x_lit,41,x_parse,x_2drop) ;
semicolon() ;
describe("<stream> --",any) ;



colon("(s",immediate) ;
   compile(x_lit,41,x_parse,x_mintrailing,x_storestackeffect) ;
semicolon() ;
describe("<stream> --",any) ;



var x_hash = colon("#")  ;
   compile(x_base,x_fetch,x_udslashmod,x_rot,x_lit,9,x_over,x_less)
   IF() ;
      compile(x_lit,39,x_plus) ;
   THEN() ;
   compile(x_lit,48,x_plus,x_hold) ;
semicolon() ;
describe("d1 -- d2",any) ;



var x_hashs = colon("#s") ;
   BEGIN() ;
      compile(x_hash,x_2dup,x_or,x_0equ)
   UNTIL() ;
semicolon() ;
describe("d1 -- d2",any) ;






var x_parenddot = colon("(d.)") ;
   compile(x_dup,x_tor,x_dabs,x_lesshash,x_hashs,x_rfrom,x_sign,x_hashmore,x_type) ;
semicolon() ;
describe("d --",any) ;



var x_ddot = colon("d.")  ;                                              // d.
   compile(x_parenddot,x_space) ;
semicolon() ;
describe("d --",any) ;



var x_ddotr = colon("d.r")  ;                                            // d.r
   compile(x_tor) ;
   compile(x_dup,x_tor,x_dabs,x_lesshash,x_hashs,x_rfrom,x_sign,x_hashmore) ;
   compile(x_rfrom,x_2dup,x_more) ;
   IF() ;
      BEGIN() ;
         compile(x_qdup) ;
      WHILE() ;
         compile(x_1minus,x_lit,42,x_emit)
      REPEAT() ;
      compile(x_2drop) ;
   ELSE() ;
      compile(x_over,x_minus,x_spaces,x_type) ;
   THEN() ;
semicolon() ;
describe("d --",any) ;



var x_udot = colon("u.")  ;                                              // u.
   compile(x_0,x_ddot) ;
semicolon() ;
describe("u --",any) ;



var x_dot = colon(".")  ;                                                // .
   compile(x_stod,x_ddot) ;
semicolon() ;
describe("n --",any) ;



colon("(.)") ;
   compile(x_stod,x_parenddot) ;
semicolon() ;
describe("n --",foerthchen) ;




colon("u.r")  ;                                                          // u.r  ( u1 u2 -- )
   compile(x_0,x_swap,x_ddotr) ;
semicolon() ;
describe("u1 u2 --",any) ;



var x_dotr = colon(".r")  ;                                              // .r  ( n u -- )
   compile(x_tor,x_stod,x_rfrom,x_ddotr) ;
semicolon() ;
describe("n u --",any) ;






// =================================================================================================
//                                        flow control
// =================================================================================================



definitions(hidden) ;

var x_structured = colon("structured") ;
   compile(x_2dup,x_nequ) ;
   IF() ;
      compile(x_unstructured)
   THEN() ;
   compile(x_2drop) ;
semicolon() ;

var x_resolve = colon("resolve") ;
   compile(x_here,x_minus,x_comma) ;
semicolon() ;

var x_resolveback = colon("<resolve") ;
   compile(x_here,x_over,x_minus,x_swap,x_store) ;
semicolon() ;

var x_qclause = colon("?clause") ;
   compile(x_lit,x_0branch,x_comma) ;
semicolon() ;

var x_clause = colon("clause") ;
   compile(x_lit,x_branch,x_comma) ;
semicolon() ;

var x_mark = colon("mark") ;
   compile(x_here,x_0,x_comma) ;
semicolon() ;


definitions(forth) ;


var x_for = colon("for",immediate) ;
   compile(x_qcomp,x_lit,x_brfor,x_comma) ;
   compile(x_here,x_innerloop,x_exchange) ;
   compile(x_here,x_0,x_comma) ;
   compile(x_lit,6) ;
semicolon() ;
describe("n --",jsf) ;


var x_next = colon("next",immediate) ;
   compile(x_qcomp,x_lit,6,x_structured) ;
   compile(x_lit,x_brnext,x_comma) ;
   compile(x_dup,x_1plus,x_resolve) ;
   compile(x_resolveback,x_innerloop,x_store) ;
semicolon() ;
describe("--",jsf) ;



var x_if = colon("if",immediate) ;
   compile(x_qcomp,x_qclause,x_mark,x_1) ;
semicolon() ;
describe("f --",any) ;



var x_else = colon("else",immediate) ;
   compile(x_qcomp,x_1,x_structured,x_clause,x_mark) ;
   compile(x_swap,x_resolveback,x_2) ;
semicolon() ;
describe("--",any) ;



var x_then = colon("then",immediate) ;
   compile(x_qcomp,x_dup,x_2,x_equ,x_plus) ;
   compile(x_1,x_structured,x_resolveback) ;
semicolon() ;
describe("--",any) ;

alias("endif",immediate) ;
describe("-- ) ( --",jsf) ;



var x_begin = colon("begin",immediate) ;
   compile(x_qcomp,x_here,x_lit,3) ;
semicolon() ;
describe("--",any) ;



var x_while = colon("while",immediate) ;
   compile(x_qcomp,x_lit,3,x_structured) ;
   compile(x_qclause,x_mark,x_lit,4) ;
semicolon() ;
describe("f --",any) ;



var x_repeat = colon("repeat",immediate) ;
   compile(x_qcomp,x_lit,4,x_structured) ;
   compile(x_swap,x_clause,x_resolve) ;
   compile(x_resolveback) ;
semicolon() ;
describe("--",any) ;



var x_again = colon("again",immediate) ;
  compile(x_qcomp,x_lit,3,x_structured,x_clause,x_resolve) ;
semicolon() ;
describe("--",any) ;



var x_until = colon("until",immediate) ;
  compile(x_qcomp,x_lit,3,x_structured,x_qclause,x_resolve) ;
semicolon() ;
describe("f --",any) ;



var x_do = colon("do",immediate)
  compile(x_qcomp,x_lit,x_brdo,x_comma) ;
  compile(x_here,x_innerloop,x_exchange) ;
  compile(x_here,x_0,x_comma) ;
  compile(x_lit,5) ;
semicolon() ;
describe("x1 x2 --",any) ;


var x_qdo = colon("?do",immediate)
  compile(x_qcomp,x_lit,x_brqdo,x_comma) ;
  compile(x_here,x_innerloop,x_exchange) ;
  compile(x_here,x_0,x_comma) ;
  compile(x_lit,5) ;
semicolon() ;
describe("x1 x2 --",any) ;


var x_loop = colon("loop",immediate)
  compile(x_qcomp,x_lit,5,x_structured) ;
  compile(x_lit,x_brloop,x_comma) ;
  compile(x_dup,x_1plus,x_resolve) ;
  compile(x_resolveback);
  compile(x_innerloop,x_store) ;
semicolon() ;
describe("--",any) ;



var x_plusloop = colon("+loop",immediate) ;
  compile(x_qcomp,x_lit,5,x_structured) ;
  compile(x_lit,x_brplusloop,x_comma) ;
  compile(x_dup,x_1plus,x_resolve) ;
  compile(x_resolveback) ;
  compile(x_innerloop,x_store) ;
semicolon() ;
describe("n --",any) ;



definitions(hidden) ;

var x_leavecomma = colon("leave,") ;
  compile(x_qcomp,x_innerloop,x_fetch,x_qdup,x_0equ) ;
  IF() ;
     compile(x_lit,-26,x_throw) ;
  THEN() ;
  compile(x_swap,x_comma,x_comma) ;
semicolon() ;
describe("xt --",any) ;


definitions(forth) ;

// fig/f79 leave is different from later leave:
// leaving loop was only done when loop was reached,
// statements between leave and loop were still executed.
colon("leave",immediate) ;
   compile(x_lit,x_brleave79,x_comma) ;
semicolon() ;
describe("--",f79|fig) ;


var x_leave = colon("leave",immediate) ;
   compile(x_lit,x_brleave,x_leavecomma) ;
semicolon() ;
describe("--",ans|f83|jsf) ;



var x_qleave = colon("?leave",immediate) ;
   compile(x_lit,x_brqleave,x_leavecomma) ;
semicolon() ;
describe("f --",jsf) ;



colon("unloop",immediate) ;
   compile(x_qcomp,x_innerloop,x_fetch,x_0equ) ;
   IF() ;
      compile(x_lit,-26,x_throw) ;
   THEN() ;
   compile(x_lit,x_brunloop,x_comma,x_unnest) ;
semicolon() ;
describe("--",ans|f83|jsf) ;





// structure check is still limited.
// doesn't complain when of .. endof is used outside of case .. endcase
colon("case",immediate) ;
   compile(x_qcomp) ;
   compile(x_0,x_innercase,x_exchange) ;
   compile(x_lit,7) ;
semicolon() ;
describe("--",ans|f83|jsf) ;


colon("of",immediate) ;
   compile(x_qcomp) ;
   compile(x_lit,x_brof,x_comma,x_mark) ;
   compile(x_1,x_innercase,x_plusstore) ;
   compile(x_lit,8) ;
semicolon() ;
describe("--",ans|f83|jsf) ;


colon("endof",immediate) ;
   compile(x_qcomp,x_lit,8,x_structured) ;
   compile(x_clause,x_mark) ;
   compile(x_swap,x_resolveback) ;
semicolon() ;
describe("--",ans|f83|jsf) ;


colon("endcase",immediate) ;
   compile(x_qcomp) ;
   compile(x_lit,x_drop,x_comma) ;
   compile(x_innercase,x_fetch) ;
   BEGIN() ;
      compile(x_qdup)
   WHILE() ;
      compile(x_1minus,x_swap,x_resolveback) ;
   REPEAT() ;
   compile(x_lit,7,x_structured) ;
   compile(x_innercase,x_store) ;
semicolon() ;
describe("--",ans|f83|jsf) ;





// =================================================================================================
//                                   dictionary + compiling
// =================================================================================================

definitions(forth) ;


var x_tick = colon("'") ;
   compile(x_bl,x_parse,x_search,x_qdup,x_0equ) ;
   IF() ;
      compile(x_notfound) ;
   THEN() ;
semicolon() ;
describe("<stream> -- xt",ans|f83|jsf) ;



colon("'") ;
   compile(x_tick,x_tobody) ;
semicolon() ;
describe("<stream> -- a",fig|f79) ;



var x_brtick = colon("[']",immediate) ;
   compile(x_tick,x_literal) ;
semicolon() ;
describe("-- a",any) ;



colon("[compile]",immediate) ;
   compile(x_tick,x_comma) ;
semicolon() ;
describe("--",any) ;



colon("recurse",immediate) ;
   compile(x_lastxt,x_fetch,x_comma) ;
semicolon() ;
describe("--",ans|f83|jsf) ;



colon("to",immediate)
   compile(x_tick,x_tobody,x_dup,x_1minus,x_fetch,x_lit,x_dovalue,x_nequ,x_lit,-67,x_and,x_throw) ;
   compile(x_compiling) ;
   IF() ;
      compile(x_lit,x_brto,x_comma,x_comma) ;
   ELSE() ;
      compile(x_store) ;
   THEN() ;
semicolon() ;
describe("<stream> x --",ans|jsf) ;





// =================================================================================================
//                                          interpreter
// =================================================================================================


definitions(hidden);

var x_interpret = colon("interpret") ;                     // ( -- )
   BEGIN() ;
      compile(x_bl,x_parse,x_dup) ;
   WHILE() ;
      compile(x_2dup,x_search,x_qdup) ;
      IF() ;
         compile(x_nip,x_nip,x_dup,x_qimm) ;
         IF() ;
            compile(x_execute) ;
         ELSE() ;
            compile(x_compiling) ;
            IF() ;
               compile(x_comma) ;
            ELSE() ;
               compile(x_execute) ;
            THEN() ;
         THEN() ;
         compile(x_depth,x_0less) ;
         IF() ;
            compile(x_stackunderflow) ;
         THEN() ;
      ELSE() ;
         compile(x_interpretnumber,x_0equ) ;
         IF() ;
            compile(x_notfound);
         THEN() ;
      THEN() ;
   REPEAT() ;
   compile(x_2drop) ;
semicolon();
describe("--",jsf) ;






definitions(forth) ;

var x_evaluate = colon("evaluate") ;                      // ( a n -- )
   compile(x_pushsource) ;
   compile(x_in,x_off) ;
   compile(x_storesource);
   compile(x_interpret)  ;
   compile(x_popsource)  ;
semicolon() ;
describe("a n --",ans|jsf) ;




var x_load = colon("load") ;
   compile(x_dup,x_blk,x_exchange,x_tor) ;
   compile(x_block,x_lit,1024,x_evaluate) ;
   compile(x_rfrom,x_dup,x_blk,x_store) ;
   compile(x_dup,x_0less,x_0equ)
   IF() ;
      compile(x_dup,x_block,x_lit,1024,x_storesource) ;
   THEN() ;
   compile(x_drop) ;
semicolon() ;
describe("u --",any)




var x_screen = colon("screen") ;
   compile(x_scr,x_fetch,x_block) ;
semicolon() ;
describe("-- a",jsf) ;



var x_dotline = colon(".line") ;
   compile(x_lit,64,x_mul,x_screen,x_plus,x_lit,64,x_mintrailing,x_type) ;
semicolon() ;
describe("u --",jsf) ;



var x_plusload = colon("+load") ;
     compile(x_blk,x_fetch,x_plus,x_load) ;
semicolon() ;
describe("u --",any) ;



colon("thru") ;
   compile(x_1plus,x_swap) ;
   QDO() ;
      compile(x_i,x_load) ;
   LOOP();
semicolon() ;
describe("u1 u2 --",any) ;



colon("+thru") ;
   compile(x_1plus,x_swap) ;
   QDO() ;
      compile(x_i,x_plusload) ;
   LOOP();
semicolon() ;
describe("u1 u2 --",any) ;



var x_l = colon("l") ;
   compile(x_lit,16,x_0) ;
   DO() ;
      compile(x_cr,x_i,x_2,x_dotr,x_lit,124,x_emit,x_i,x_dotline) ;
   LOOP() ;
semicolon() ;
describe("--",jsf) ;



colon("list") ;
   compile(x_scr,x_store,x_l) ;
semicolon() ;
describe("u --",any) ;



colon("blank") ;
   compile(x_bl,x_fill) ;
semicolon() ;
describe("a u --",any) ;



// =================================================================================================
//                                              utility
// =================================================================================================


colon("help") ;
   compile(x_bl,x_parse,x_loadhelp) ;
semicolon() ;


definitions(teststuff) ;
var x_x = colon("x") ;   // execute rest of line as javscript
   compile(x_0,x_parse,x_eval) ;
semicolon() ;
describe("<stream> --",jsf) ;


var x_jsconsole = colon("") ;
   BEGIN() ;
      compile(x_cr,x_lit,62,x_emit,x_query,x_x) ;
   AGAIN() ;
semicolon() ;


colon("js") ;                                 // javascript console
   BEGIN() ;
      compile(x_lit,x_jsconsole,x_catch,x_drop) ;
   AGAIN() ;
semicolon() ;
describe("--",jsf) ;






// =================================================================================================
//                                     interpreter entry points
// =================================================================================================


definitions(forth) ;
var x_quit = colon("quit") ;
   BEGIN() ;
      compile(x_query,x_source,x_qdup)
      IF() ;
         compile(x_evaluate) ;
         compile(x_0) ;
      THEN() ;
      compile(x_drop,x_prompt) ;
   AGAIN() ;
describe("??? --",any) ;
semicolon() ;

var x_warm = colon("warm") ; compile(x_warminit,x_quit) ;
describe("??? --",jsf) ;


definitions(hidden) ;

var x_error = colon("error") ;
   compile(x_throw) ;
describe("??? n --",jsf) ;

definitions(forth) ;


var warm    = dp ; comma(x_warm)  ;   // called with  virtualmachine(warm)
var error   = dp ; comma(x_error) ;   // called from  javascript onError


function virtualmachine(entrypoint)  {
   suspended = 0 ;
   ip=entrypoint ;
   do {
      w=m[ip++] ;                                 // read next xt from address list
      t[w]();                                     // execute
   } while (!suspended) ;
}


// =================================================================================================
//                                        jsrepl helpers
// =================================================================================================

function _init() {
  virtualmachine(warm);
}

function _run(str) {
  for (var i = 0; i < str.length; i++) {
    var chr = str.charCodeAt(i);
    inbuf.push(chr === 10 ? 13 : chr);
  }
  inbuf.push(carriagereturn);
  virtualmachine(ip);
}

function _stacktop(elementCount) {
  // Must be called during execution.
  var buffer = [];
  s[++sp] = tos;
  for (var i = 1; i < sp && i <= elementCount; i++) {
    buffer.push(s[sp - i + 1].toString(m[base]));
  }
  sp-- ;
  return buffer.reverse();
}

function _input(callback) {
  // Nothing.
}

definitions(forth) ;
function _finish() {
  console.log('finished.');
}
primitive("_finish", function() { _finish(); }) ;
describe("--", jsf);
