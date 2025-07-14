## call

```
func.call(thisArg, arg1, arg2, ...)

```

Calls the function immediately

Sets this to thisArg

Passes arguments individually

```
function greet(greeting, punctuation) {
console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Vignesh" };
greet.call(person, "Hello", "!"); // "Hello, Vignesh!"
```

## apply

Also calls the function immediately

Arguments are passed as an array/list

```
func.apply(thisArg, [arg1, arg2, ...])'

```

```
greet.apply(person, ["Hi", "!!"]); // "Hi, Vignesh!!"
```

## bind

const boundFunc = func.bind(thisArg, arg1, arg2, ...)

```
const greetVignesh = greet.bind(person, "Hey");
greetVignesh("?"); // "Hey, Vignesh?"

```
