Perfect! Let's walk through the **answers** to each of the 10 questions and explain **why** the output happens — this will help you become truly confident with `this` in JavaScript.

---

## ✅ **Question 1**

```js
function test() {
  console.log(this);
}
test();
```

### ✅ **Answer**:

In **non-strict mode**, `this` refers to the **global object**.

🧠 **In browser:** logs `window`
🧠 **In Node.js:** logs `{}` (the global object)

---

## ✅ **Question 2**

```js
"use strict";
function test() {
  console.log(this);
}
test();
```

### ✅ **Answer**:

In **strict mode**, `this` is **`undefined`** when a function is called in the global scope.

---

## ✅ **Question 3**

```js
const obj = {
  name: "Visa",
  greet() {
    console.log(this.name);
  },
};
const greet = obj.greet;
greet();
```

### ✅ **Answer**:

This will log **`undefined`**

📌 Why? The method is **detached** from the object, so `this` is not `obj` anymore — it becomes `window` (or `undefined` in strict mode).

---

## ✅ **Question 4**

```js
const obj = {
  name: "Visa",
  greet: () => {
    console.log(this.name);
  },
};
obj.greet();
```

### ✅ **Answer**:

Logs **`undefined`**

📌 Why? Arrow functions don’t have their own `this`. It inherits from the **outer scope**, which is likely global — so `this.name` is `undefined`.

---

## ✅ **Question 5**

```js
const obj = {
  name: "Visa",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  },
};
obj.greet();
```

### ✅ **Answer**:

Logs **`undefined`**

📌 Why? The `function` inside `setTimeout` creates a new context. So `this` refers to **window/global**, not `obj`.

---

## ✅ **Question 6**

```js
const obj = {
  name: "Visa",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  },
};
obj.greet();
```

### ✅ **Answer**:

Logs **`Visa`**

📌 Why? Arrow functions inherit `this` from the enclosing scope — here it's `obj`.

---

## ✅ **Question 7**

```js
const person = {
  name: "Vignesh",
  getName() {
    return this.name;
  },
};

const getName = person.getName;
console.log(getName());
```

### ✅ **Answer**:

Logs **`undefined`**

📌 Why? `getName` is detached from `person`. So `this` is global (window), which has no `name`.

✅ To fix: use `.bind(person)`, like `const getName = person.getName.bind(person);`

---

## ✅ **Question 8**

```js
function sayHello() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Vignesh" };
sayHello.call(user);
```

### ✅ **Answer**:

Logs: **`Hello, Vignesh`**

📌 Why? `.call(user)` explicitly sets `this` to the `user` object.

---

## ✅ **Question 9**

```js
const user = {
  name: "Vignesh",
  greet() {
    return () => {
      console.log(this.name);
    };
  },
};
const fn = user.greet();
fn();
```

### ✅ **Answer**:

Logs **`Vignesh`**

📌 Why? The arrow function returned by `greet()` inherits `this` from `greet()`'s context, which is `user`.

---

## ✅ **Question 10**

```js
class A {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const a = new A("Vignesh");
setTimeout(a.greet, 100);
```

### ✅ **Answer**:

Logs **`undefined`**

📌 Why? `a.greet` is passed as a callback → context is lost. So `this` is no longer `a`.

✅ **Fix it like this:**

```js
setTimeout(a.greet.bind(a), 100); // Logs 'Vignesh'
```

Or use arrow function:

```js
setTimeout(() => a.greet(), 100);
```

---

## 🧠 Want to Practice More?

I can give you:

- 🔁 Practice problems for binding, arrow functions
- ✍🏽 Exercises to debug `this` bugs
- 📄 PDF cheat sheet to revise

Would you like any of these next?
