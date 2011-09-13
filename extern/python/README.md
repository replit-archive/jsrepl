Empythoned
==========

Empythoned is a build script that uses [Emscripten](https://github.com/kripken/emscripten)
to compile CPython for use in a browser. It attempts to compile the main
interpreter as a single small executable and the whole standard library as
dynamically loaded libraries.

The project is in its infancy. Right now the core interpreter works very well,
but many of the libraries either don't work at all or contain various bugs.

Empythoned is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
