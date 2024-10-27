### Objects

object is a complex data type which is a collection of multiple datatypes

object ===> array and function

# creation object

```
var myobj = {}

myobj.foo = "some value"

myobj.foo   ==> dot notation
myobj[foo]  ==>  bracket notation
```

function constructor for creating objects

```

function create(fname,lname){
    //var this ={}
    this.fname = fnmae;
    this.lname = lname;
    // return this

}

emp = new create('vignesh','kb');

```

# clone object

**_ this is shallow copy example _**

const userDetails = {
name: "John Doe",
age: 14,
verified: false
};

const newUser = userDetails;
console.log(newUser); // {name: 'John Doe', age: 14, verified: false}

const newUser = userDetails;
newUser.name = "Jane Doe";

console.log(newUser); // {name: 'Jane Doe', age: 14, verified: false}
console.log(userDetails); // {name: 'Jane Doe', age: 14, verified: false}

This is the issue. The original object is affected because objects are reference types. This means any value you store either in the clone or original object points to the same object.

### Correct way to clone object without having reference issues is

**_ this is deep copy example _**

// Spread Method
let clone = { ...userDetails }

// Object.assign() Method
let clone = Object.assign({}, userDetails)

// JSON.parse() Method
let clone = JSON.parse(JSON.stringify(userDetails))

### implement a deep clone -> let clone = JSON.parse(JSON.stringify(userDetails)) // best example

function deepClone(obj) {
if (obj === null || typeof obj !== 'object') {
return obj; // Primitive values or null are returned as is
}

if (Array.isArray(obj)) {
const clonedArray = [];
for (const item of obj) {
clonedArray.push(deepClone(item));
}
return clonedArray;
}

const clonedObj = {};
for (const key in obj) {
if (obj.hasOwnProperty(key)) {
clonedObj[key] = deepClone(obj[key]);
}
}
return clonedObj;
}
