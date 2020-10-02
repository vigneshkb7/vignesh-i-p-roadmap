### webpack concepts

webpack is static module bundlers for modern javascript application

core concepts include

- entry
- output
- loaders
- plugins
- mode
- browser compatability

## Entry points for single page and multi page applications

```
module.exports = {
 entry: {
   main: './path/to/my/entry/file.js'
 }
};
```

```
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

## output

output configuration option tells webpack how to write the compiled files to disk.

```
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};

// writes to disk: ./dist/app.js, ./dist/search.js
```

## Loaders are tranformations that are applied to the source code of a module

loaders tell webpack to load a css file or convert Typescript to JS

npm install --save-dev css-loader ts-loader

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

```

## plugins

plugins are the backbone of webpack. webpack itself built on same plugin system that you use in your webpack configuration

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

```

# configuration

webpacks configuration file is javascript file that exports a webpack config

## Modules

In contrast to Node js modules webpack modules can express their dependencies in a variety of wasy

- ES2015 import statement
- commonJS require
- AMD define and require statement

supported module types are

- coffescript
- typescript
- babel
- sass
- less
- stylus
- elm

## Module Resolution

- Absolute path

```
import '/home/me/file';

import 'C:\\Users\\me\\file';
Since we already have the absolute path to the file, no further resolution is required.


```

- Relative path

```
import '../src/file1';
import './file2';
```

- Module path

```
import 'module';
import 'module/lib/file';
```

## Multiple targets

webpack offers multiple deployment targets that you can set in your webpack configuration.

```
const path = require('path');
const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

const clientConfig = {
  target: 'web', // <=== can be omitted as default is 'web'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
```
