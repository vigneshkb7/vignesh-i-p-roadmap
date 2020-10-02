# Enzyme

- create virtual DOM for testing
- allows testing without a browser
- has better toolkit
- search through the dom using jquery selectors
- simulate events
  [https://github.com/bonnie/udemy-react-testing-projects]

Types of test

- unit testing ### jest
- integration testing how multipel units works together ###cypress
- e2e tests

1. Shallow rendering
   - render components only one level deep
   - render parent but user placeholders for children
   - access to props and state
2. Jest includes snapshot testing
   - a way to freeze a component
   - test fails if there are any changes

### Tools

Tools to remove data-test attributes in react app.

`babel-plugin-react-remove-properties` used to remove data-test attribute in the prod environment

{
"env": {
"production": {
"plugins": [
["react-remove-properties", {"properties": ["data-test", "data-foo", /my-suffix-expression$/]}]
]
}
}
}
