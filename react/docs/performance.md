# Improving Performance for React-Redux apps.

- using immutable data structure
- dont' use index as key in react it's very bad practice Instead use any generators packages
- use memo to cache the value and function to do complex calculation _useMemo_ _useCallback_
- use web workers to compute the complex calculation for CPU intensive functions
- Pure components and stateles componenets is prefered to use max possible
- using production flag mode in webpack
- multiple chunk files
- dependency optimization
- use <> </> to enclose the child elements or fragments
- avoid inline function
- Throttling and debouncing in event action
- avoid props as initial state
- spreading all props in the react elemen ts {...props} like this it will add unknown element attributes
- use reselect in redux to avoid frequent rerender it is kind of memorized selectors
- avoid async initializtion
- use css animations instead of js animations
- using CDN for image videos
- consider SSR
