# Enzyme

- create virtual DOM for testing
- allows testing without a browser
- has better toolkit
- search through the dom using jquery selectors
- simulate events
  [https://github.com/bonnie/udemy-react-testing-projects]

Types of test

- unit testing
- integration testing how multipel units works together
- e2e tests

1. Shallow rendering
   - render components only one level deep
   - render parent but user placeholders for children
   - access to props and state
2. Jest includes snapshot testing
   - a way to freeze a component
   - test fails if there are any changes
