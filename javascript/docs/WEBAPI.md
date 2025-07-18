# mutation observer

The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
like any attribute change, value change ,css change

MutationObserver()

Creates and returns a new MutationObserver which will invoke a specified callback function when DOM changes occur.

disconnet()

Stops the MutationObserver instance from receiving further notifications until and unless observe() is called again.

observe()

Configures the MutationObserver to begin receiving notifications through its callback function when DOM changes matching the given options occur.

// Select the node that will be observed for mutations
const targetNode = document.getElementById("some-id");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed

```
const callback = (mutationList, observer) => {
for (const mutation of mutationList) {
if (mutation.type === "childList") {
console.log("A child node has been added or removed.");
} else if (mutation.type === "attributes") {
console.log(`The ${mutation.attributeName} attribute was modified.`);
}
}
};
```

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
