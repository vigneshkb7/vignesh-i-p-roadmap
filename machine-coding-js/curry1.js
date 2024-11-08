function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // Output: 7

function add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(3)(4)); // Output: 7

function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(multiply(2)(3)(4)); // Output: 24

const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);

console.log(multiplyByThree(4)); // Output: 24
console.log(multiply(2)(3)(4)); // Output: 24

// Advantages

//create specialized functions from a more generic one
//Another advantage of currying is the ability to create higher-order functions that enhance composability

function handleClick(action) {
  return function (event) {
    console.log(`Performing ${action} action on button click.`);
  };
}

const handleSaveClick = handleClick("save");
const handleDeleteClick = handleClick("delete");

// Attach event handlers to buttons
document
  .getElementById("saveButton")
  .addEventListener("click", handleSaveClick);
document
  .getElementById("deleteButton")
  .addEventListener("click", handleDeleteClick);
