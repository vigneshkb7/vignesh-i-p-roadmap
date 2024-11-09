// Virtual DOM element constructor
function createElement(tagName, attributes = {}, ...children) {
  return {
    tagName,
    attributes,
    children: children.flat(),
  };
}

//To parse an HTML string, we can use the DOMParser API available in the browser, or create a similar parser in Node.js
//if needed.DOMParser lets us convert an HTML
//string into a document object, which we can then traverse to create our virtual DOM structure.

function deserialize(htmlString) {
  // Parse the HTML string using DOMParser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Recursive function to convert DOM node to virtual DOM node
  function createVirtualNode(node) {
    // If it's a text node, return its content as a string
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent.trim();
    }

    // Extract tag name and attributes
    const tagName = node.tagName.toLowerCase();
    const attributes = Array.from(node.attributes).reduce((attrs, attr) => {
      attrs[attr.name] = attr.value;
      return attrs;
    }, {});

    // Recursively create children
    const children = Array.from(node.childNodes)
      .map(createVirtualNode)
      .filter(Boolean);

    // Return the virtual DOM node
    return createElement(tagName, attributes, ...children);
  }

  // Start from the body and convert it to virtual DOM
  return createVirtualNode(doc.body.firstChild);
}

const htmlString = `
  <div class="container">
    <h1>Hello, World!</h1>
    <p style="color: blue;">
      This is a paragraph with some <strong>bold</strong> text.
    </p>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
`;

const virtualDom = deserialize(htmlString);
console.log(virtualDom);

///   o/p
// {
//     tagName: "div",
//     attributes: { class: "container" },
//     children: [
//       {
//         tagName: "h1",
//         attributes: {},
//         children: ["Hello, World!"]
//       },
//       {
//         tagName: "p",
//         attributes: { style: "color: blue;" },
//         children: [
//           "This is a paragraph with some ",
//           {
//             tagName: "strong",
//             attributes: {},
//             children: ["bold"]
//           },
//           " text."
//         ]
//       },
//       {
//         tagName: "ul",
//         attributes: { id: "list" },
//         children: [
//           { tagName: "li", attributes: {}, children: ["Item 1"] },
//           { tagName: "li", attributes: {}, children: ["Item 2"] },
//           { tagName: "li", attributes: {}, children: ["Item 3"] }
//         ]
//       }
//     ]
//   }
