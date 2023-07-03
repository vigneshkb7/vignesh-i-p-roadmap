# static import

Import code that has been exported by another module

Since the components were statically imported, Webpack bundled the modules into the initial bundle.

A large bundle size can affect the loading time of our application significantly depending on the user's device and network connection

# dynamic import

Import parts of your code on demand

use Suspense and Lazy in client side rendering

```
const Emoji = lazy(() =>
    import(/*webpackChunkName: "emoji-icon" */ "./icons/Emoji")
  );
```

Server-side rendering doesn't support React Suspense (yet). A good alternative to React Suspense is the loadable-components library, which can be used in SSR applications.

# import on Visiblity

Load non-critical components when they are visible in the viewport

we often have components that aren't visible on the initial page. A good example of this is lazy loading images that aren't directly visible in the viewport, but only get loaded once the user scrolls down.

IntersectionObserver API, or use libraries such as react-lazyload or react-loadable-visibility to quickly add import on visibility to our application.

# import on interaction

Load non-critical resources when a user interacts with UI requiring it

# route based loading

Dynamically load components based on the current route

# compressing JS

Reduce the time needed to transfer scripts over the network.

Gzip and Brotli are the most common ways to compress JavaScript and are widely supported by modern browsers.

You can enable static compression as part of the build. If you use Webpack to bundle your code, you can use the CompressionPlugin for Gzip compression or the BrotliWebpackPlugin for Brotli compression. The plugin can be included in the Webpack config file as follows.

```
module.exports = {
  //...
  plugins: [
    //...
    new CompressionPlugin(),
  ],
};
```

```
Accept-Encoding: gzip, br
```

# Virtualized

React and need to display large lists of data efficiently, you may be familiar with react-virtualized.

# PRELOAD

Inform the browser of critical resources before they are discovered

** preload doesn't execute the file it just load's it **

```
<link rel="preload" as="script" href="script.js">
<link rel="preload" as="style" href="style.css">
```

Preload (<link rel="preload">) is a browser optimization that allows critical resources (that may be discovered late) to be requested earlier.

# PREFETCH

Fetch and cache resources that may be requested some time soon

user may use it in future but for sure

example is index.html will have link page2.html but using prefetch we will load the resources ahead

prefetch will loaded in prefetch cache

```
<link rel="prefetch" href="/pages/next-page.html" />
<link rel="prefetch" href="/js/emoji-picker.js" />

```

# PRECONNECT

it is similar to prefecth but it will connect to external domain or CDN

<link rel="preconnect" href="https://api.com">
