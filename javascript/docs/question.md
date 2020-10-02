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
