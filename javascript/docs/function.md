### function

function will have _this_ and _arguments_ in execution context

new way for function

```

const four = new Function('return 4');

four() // 4

const four = new Function('num','return num');

four() // 4

```

# properties of function

- call
- apply
- bind
- arguments
- length
- name
