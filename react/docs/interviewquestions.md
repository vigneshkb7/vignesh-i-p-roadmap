1. Render props

render prop is the technique of sharing the component between multiple components using prop whose value is function

2. Forward refs

3. JSX using dot notation to return the multiple components

```
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

4. you can also return array of elements in JSX []

5. StrictMode in react helps in the following below
   - detecting the unwanted side effects
   - legacy context api's
   - warning about deprectaed DOM usage
   - unsafe lifecycle
   - legacy string ref API
