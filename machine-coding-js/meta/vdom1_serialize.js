// Virtual DOM element constructor
function createElement(tagName, attributes = {}, ...children) {
  return {
    tagName,
    attributes,
    children: children.flat(),
  };
}

// virtual dom to HTML

function serialize(virtualNode) {
  // If the node is a string, it's a text node, so return it directly
  if (typeof virtualNode === "string") {
    return virtualNode;
  }

  const { tagName, attributes, children } = virtualNode;

  // Convert attributes object to a string
  const attrString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  // Serialize children recursively
  const childrenString = children.map(serialize).join("");

  // Return the full HTML string for the element
  return `<${tagName}${
    attrString ? " " + attrString : ""
  }>${childrenString}</${tagName}>`;
}

// Create a virtual DOM tree
const virtualDom = createElement(
  "div",
  { class: "container" },
  createElement("h1", {}, "Hello, World!"),
  createElement(
    "p",
    { style: "color: blue;" },
    "This is a paragraph with some ",
    createElement("strong", {}, "bold"),
    " text."
  ),
  createElement(
    "ul",
    { id: "list" },
    createElement("li", {}, "Item 1"),
    createElement("li", {}, "Item 2"),
    createElement("li", {}, "Item 3")
  )
);

// Serialize the virtual DOM to an HTML string
const htmlString = serialize(virtualDom);
console.log(htmlString);
