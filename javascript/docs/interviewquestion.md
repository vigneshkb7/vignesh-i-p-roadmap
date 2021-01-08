1. Method parameter validation for function

```
const isRequired = () => { throw new Error('param is required');};

const print = (num = isRequired()) =>{}
```

2. format JSON `JSON.stringify`

3. getUnique values inarray

```
let unique = [...new Set([1,2,3,4,4,5,"school","ball","ball"])]

```

4. filter falsy values from array

```
[undefined,1,0,false,null,'vignesh'].filter(Boolean)

```

5. Disable right click

```
<body oncontextmenu="return false"><div></div></body>

```

6. getting last items in array

```
array.slice(-1)

```

7. How to check the online status of the browser ?

window.navigator object contains info about the visitors browser

navigator.online ===> gives wether we are online of not
navigator.language ===> returns the language property
navigator.platform ==> returns the operating system

8. where browser cookies are stored.

A cookie information stores on your compouter by a website you visit.

9. how to maintain state in http as http is a stateless protocol ?

10. Default exports ==> default exports are useful to export only a single object, function,variables. we can use any name to import.

11. Named exports ==> named exports are useful to export several values.

12. using named and default exports at same time

export { fun as default,x,y,square}
