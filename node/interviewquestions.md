### Node js

node js is a event driven non blocking I/O operations

event loop is a endless loop that executes the loop
event loop has event queue that takes the oldest queue first for the exceution

Step 1: when node js starts it initializes the even loop. processes the provide input for async api call,timers and then begin processing the event loop

Step2: it uses libuv module for performing the async operations

phases of event loop

Timers: Callbacks scheduled by setTimeout() or setInterval() are executed in this phase.
Pending Callbacks: I/O callbacks deferred to the next loop iteration are executed here.
Idle, Prepare: Used internally only.
Poll: Retrieves new I/O events.
Check: It invokes setIntermediate() callbacks.
Close Callbacks: It handles some close callbacks. Eg: socket.on(‘close’, …)

`timers -> IO -> poll -> check ->close -> timers -> ...`

Timers: callbacks from setInterval or setTimeout
IO callbacks: callbacks from I/O events
Idle: used internally by Node between IO and Poll phases
Poll: retrieve new I/O events
Check: callbacks from setImmediate execute here
Close: handle closed connections like sockets

```

let racer = function() {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
  process.nextTick(() => console.log("nextTick"));
  console.log("current event loop");
}

racer()

[Running] node "/Users/logicmason/timeouts.js"
current event loop
nextTick
timeout
immediate

[Done] exited with code=0 in 0.203 seconds

```

The first one executed was process.nextTick, which puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers.

Next is "timeout". Since we passed setTimeout a timeout of 0, there's no additional enforced delay before its execution, and it is placed on into the timer queue during the next loop.

Finally, we have setImmediate, which is clearly not as immediate as its name suggests! Its callback is placed in the check queue of the next cycle of the event loop. Since the check queue occurs later than the timer queue, setImmediate will be slower than setTimeout 0.
