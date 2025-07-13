## A memory leak happens when memory that is no longer needed is not released, causing usage to grow over time — slowing the app and possibly crashing the browser.

1. proper clean up of sideEffect in useEffect

`useEffect(() => {
const id = setInterval(() => { /_ some work _/ }, 1000);

return () => clearInterval(id); // ✅ cleanup
}, []);`

2. avoid stale closures

```useEffect(() => {
const handler = () => console.log(state); // ❌ may capture stale state
window.addEventListener("scroll", handler);

return () => window.removeEventListener("scroll", handler);
}, [state]); // ✅ depends on current state
```

3. remove dom lisenters

```
componentDidMount() {
  window.addEventListener("resize", this.handleResize);
}
componentWillUnmount() {
  window.removeEventListener("resize", this.handleResize); // ✅
}
```

4. Cancel Pending network request

```
const controller = new AbortController();
fetch(url, { signal: controller.signal });

return () => controller.abort(); // ✅

```

5. Avoid Global variable Build up

```
window.cache = { userData: bigArray };


```

Use scoped state or a data store

Clear unused cached data periodically

6. Websocket clean up

```
useEffect(() => {
  const socket = new WebSocket(url);
  socket.onmessage = handler;

  return () => socket.close(); // ✅
}, []);
```

7. Limit Third-Party Libraries and DOM Leaks

8. Use DevTools to Spot Leaks

```
Chrome: Performance > Record > Snapshots

Chrome: Memory tab > Heap Snapshot

React DevTools: Profiler to find retained components

```

9. what is use weekMap and weekSet

WeakMap and WeakSet are special types of collections in JavaScript that offer unique memory management benefits compared to their "strong" counterparts, Map and Set.

WeakMap is like a Map but only allows objects as keys.

WeakSet is like a Set but only stores object references.

Both hold “weak” references — which means:

If the object key/value is no longer referenced elsewhere, it gets garbage collected automatically.
