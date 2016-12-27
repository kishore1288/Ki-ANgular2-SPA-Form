# webpack-config-json

Use JSON files as if they were modules.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-json/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-json/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-json.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-json.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-json.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-json
```

Add to your `webpack.config.babel.js`:

```javascript
import json from `webpack-config-json`;

json()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
