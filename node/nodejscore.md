LTS -> Long term support

# NVM node version manager

which can be used to switch between multiple versions of node

.nvmrc file --> is used to mention the node version of the current project

Type command `nvm use` from the root of the project which will automatically set the node version.

# Node core

javascript / python ---> c/C++ --> Assembly language(assemblers covert to machine code) --> Machine code (Arm ,MIPS,x86)

JS -> JS Engine (v8) -> machine code

ECMAscript is the rule liad out to check the program works across all the JS engine

# libuv

libuv is responsible for handling files and sending network requests

it has thread pool default is 4 which will handle the file system

# process.nextTick()

what were the function defined inside this will be executed after the main execution thread

# don't block main thread or worker pool

# EventEmitter

custome implementation of even emitter

[https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/]

# Buffers

1) Binary data
2) binary numbers
3) hexadeimel base 16
4) character set encodings

Binary data is always possible is 1 or 0

Binary number or base 2

hexadecimal is 6 charcaters base 16 ---> 0xFG2344
  css color code is example
  unicode characters

decimal is 9 characters base 10 -->  23459876
base 2 is 24 characters base 2 -> 10110101001

# character sets

letters and symbols that writes the system uses a different set of characters

characters encoding

** default encoding is utf-8 **
unicode defines 144697 characters
ASCII defines 128 characters

# buffer

Buffers are intented to handle raw binary data

Buffer gets the data and send it

const buffer =  Buffer.alloc(8)

buffer.write("st","utf-8")

