# event loop in browser is quite different from node js

component of web browser

---

1.Call Stack

2.Web APIs (like setTimeout, fetch, DOM Events , locationAPI's)

3.Callback Queue (aka Task Queue)

4.Microtask Queue (Promises, MutationObserver)

5.Event Loop

## Execution order

Execute all synchronous code (Call Stack) and all the async task is pushed to WebAPI's and then to callback queue or micro task queue

Empty the Microtask Queue

Then handle Callback Queue (macrotasks like setTimeout)

Repeat

![alt text](<Screenshot 2025-07-12 at 9.19.23 PM.png>)

[note ] Promise (microtask) comes before setTimeout (macrotask)

# Microtask

Promise.then/catch/finally
queueMicrotask()
process.nextTick()
MututaionObserver --> function to check the changes happened in dom

# Macrotask

setTimeout
setInterval
setImmediate
IO , MessageChannel
DOM manipulation and rendering
Event handlers
N/W request like fetch xmlHttp request

microtask takes priority over macrotask

# event loop in node js

Node.js uses libuv (a C++ library) for its event loop and IO handling. It extends the browser model to support file system, networking, and other OS-level features.

![event loop](<Screenshot 2025-07-12 at 9.28.21 PM.png>)

📦 Node.js Event Loop Phases:

1. Timers → setTimeout, setInterval

2. Pending callbacks -> This phase executes callbacks for certain system operations that were deferred from the previous loop iteration, such as some TCP errors.

3. Idle, prepare -> internal phases used by Node.js for its own operations and are generally not relevant for most application development.

4. Poll → wait for IO, incoming connection most of the operations happenn here.

5. Check → setImmediate() is executed in the check phase of the event loop

6. Close callbacks -> phase executes callbacks for close events, such as when a socket or handle is unexpectedly closed.

in each of the above phases of the event loop has three buckets

1. nextTick Queue()

2. microTask()

3. macroTask()
