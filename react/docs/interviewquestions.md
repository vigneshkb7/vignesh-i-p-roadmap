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

6. Portals in React

portals allow you to render a child component into a different part of the DOM that's outside the main parent hirerachy

7. react fiber introduced in 16

Rendering in React (with Fiber):

Render Phase (Pure/No side effects): React builds a work-in-progress tree by comparing the old and new virtual DOMs.
Commit Phase: Changes are committed to the real DOM — here React updates the browser DOM, runs useEffect, etc.

8. CSR

csr is good for dashboards , internal tools and SPA's

SSR

ssr is good for inital page should as fast as possible, also SEO is needed.

Server-side rendering (SSR) involves generating HTML content on the server and sending it to the browser. When a user visits a page, the server processes the React components, renders them into HTML, and sends that HTML to the client. This allows the browser to display the content immediately, which is great for performance and SEO.

After the HTML is displayed, React still needs to take over the page to make it interactive. This is where hydration comes in. Hydration is the process of attaching event listeners and other dynamic behavior to the static HTML. Until hydration completes, certain features like buttons or form inputs may not work properly.

SSR is especially beneficial for pages that need to be indexed by search engines or show content quickly, such as landing pages, blogs, or e-commerce product pages.

9. useMemo → Caches a value.
   useCallback → Caches a function.

10. LAZY in react

`
// Lazy load the component when it's needed
const LazyComponent = React.lazy(() => import('./MyComponent'));

<Suspense fallback={<div>Loading...</div>}>
{/_ Show fallback UI until LazyComponent loads _/}
<LazyComponent />
</Suspense>

`

11. async: loads in parallel and executes as soon as ready
    defer: loads in parallel but executes after the DOM is parsed

12.

Preload & Prefetch
preload: downloads assets immediately (used for critical assets)
prefetch: downloads assets in idle time (used for future navigation)
`

<!-- Preload critical CSS early for faster rendering -->
<link rel="preload" href="main.css" as="style">

<!-- Prefetch JS for future navigation (low priority) -->
<link rel="prefetch" href="dashboard.js">

`

13. A Higher-Order Component (HOC) is a function that takes a
    component and returns a new component with enhanced behavior.

React questions

https://medium.com/frontend-army/top-25-reactjs-interview-questions-part-1-5b8e4878d09c

https://medium.com/frontend-army/top-25-reactjs-interview-questions-part-2-00529edd657f

https://medium.com/frontend-army/top-25-reactjs-interview-questions-part-3-561fefcc64f9

https://medium.com/frontend-army/top-25-reactjs-interview-questions-part-4-7f3d7c3b4b0b
