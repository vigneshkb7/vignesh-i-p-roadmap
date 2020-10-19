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
