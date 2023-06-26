# Javascript Engine

process of javascript engine

call stack & memory heap
JS file --> parser --> AST -->interpreter --> bytecode --> computer

each developer can create their own engine
but ECMA script comes with a set of standards to govern it

## Interpreter

reads line by line in the file and converts to machine readable format

## Complier

complier converts the complete file to new file

Babel --> is a javascript complier that takes your modern js code and returns browser compatible js

Typescript --> is a superset of javascript that complies down to javascript

# Javascript Runtime

it has three main components

1. call stack
2. web API
3. Call back Queues

setTimeout(), Promise, SetINterval are Web API function which are sent to webAPI stack then send to callback queues once the call stack becomes empty it gets executed.

# Javascript Error

Error has three properties name, message and stacktrace.
