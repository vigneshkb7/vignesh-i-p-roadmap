# Execution context in JS

it has memory and code component

memory has key values and functions

code component has line by line of code

1. javascript is single threaded and synchronous

2. Execution context in Javascript

var n =2; ==> memory allocation
function sqr(num){
return num\*num;

}

var sq1 = sqr(n);
var sq2 = sqr(5);

call stack is also called as machine stack,program stack and memory stack

- whenever the function is executed new execution context is created.

- All execution is moved to call stack for each context

- call stack maintains the order of execution of execution contexts

# scope in javascript

---

scope is the accessibility of variables,function and objects in some part of code of your code during runtime

- global scope
- local scope

let and const are block scoped

// global scope

function someFunction(){
// local scope #1
function someother(){
// local scope #2
}
}

var will behave as global scope inside the _block_ statements

block statements like if and switch for while

if{

}

## Lexical scope

means that in nested group of functions ther inner function will have access to the variables of parent scope

## closure

is closely relate to lexical scoping only difference is that the variables defined in its outer function but also the arguments of the outer function

IIFE created self invoking function

(function(){
//private scope
})()

# context in javascript

context is used to refer to the value of this in some particular part of your code
