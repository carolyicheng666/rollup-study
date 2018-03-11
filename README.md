rollup-study
===

This is a collection of simple demos of rollup.js.



How to use
---

First copy the repo into your disk.
``` bash
$ git clone https://github.com/carolyicheng666/rollup-study.git
```
And you should do
``` bash
$ npm i
```
My `rollup version` is **0.56.5**, if you higher to me, maybe some differences. 



demo01: Output options.format
---

if not set this, you will see:
``` bash
[!] Error: You must specify options.format, which can be one of 'amd', 'cjs', 'es', 'iife' or 'umd'
```

`package.json`:
``` json
"scripts": {
  "build:amd": "rollup index.js -f amd -o ./dist/dist.amd.js",
  "build:cjs": "rollup index.js -f cjs -o ./dist/dist.cjs.js",
  "build:es": "rollup index.js -f es -o ./dist/dist.es.js",
  "build:iife": "rollup index.js -f iife -n result -o ./dist/dist.iife.js",
  "build:umd": "rollup index.js -f umd -n result -o ./dist/dist.umd.js",
  "build:all": "npm run build:amd && npm run build:cjs && npm run build:es && npm run build:iife && npm run build:umd"
}
```

``` bash
$ npm run build:all
```



demo02: Use rollup.config.js
---

`rollup.config.js`:
``` javascript
export default [{
  input: 'index.js',
  output: {
    format: 'cjs',
    file: './dist/distA.js'
  }
},{
  input: 'index.js',
  output: [{
    format: 'cjs',
    file: './dist/distB.js'
  },{
    format: 'es',
    file: './dist/distC.js'
  }]
}]
```

`package.json`:
``` json
"scripts": {
  "build": "rollup -c"
}
```

``` bash
$ npm run build
```



demo03: Watch
---

`package.json`:
``` json
"scripts": {
  "dev": "rollup -c -w"
}
```

``` bash
$ npm run dev
```



demo04: npm packages
---

need use the `rollup-plugin-node-resolve` plugin and `rollup-plugin-commonjs` plugin

>The `rollup-plugin-node-resolve` plugin teaches Rollup how to find external modules.  
>Some libraries expose ES6 modules that you can import as-is — **the-answer** is one such module. But at the moment, the majority of packages on npm are exposed as CommonJS modules instead. Until that changes, we need to convert CommonJS to ES2015 before Rollup can process them.  
>The `rollup-plugin-commonjs` plugin does exactly that.

`rollup.config.js`:
``` javascript
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    format: 'cjs',
    file: './dist/dist.js'
  },
  plugins: [ resolve(), commonjs() ]
}
```



demo05: Peer dependencies
---

For example, `the-answer` and `lodash`:
``` javascript
import answer from 'the-answer';
import _ from 'lodash';
```

And we'll treat lodash as external, but not the-answer.  
`rollup.config.js` add:
``` javascript
external: ['lodash']
```



demo06: Babel
---

The easiest way to use both Babel and Rollup is with `rollup-plugin-babel`.  
Before we run rollup, we need to install the `babel-preset-env` and the `babel-plugin-external-helpers` plugin.

`.babelrc`:
``` json
{
  "presets": [
    ["env", {
      "modules": false
    }]
  ],
  "plugins": [
    "external-helpers"
  ]
}
```

`external-helpers` plugin, which allows Rollup to include any 'helpers' just once at the top of the bundle, rather than including them in every module that uses them (which is the default behaviour).



demo07: CDN
---

use `paths`, it will be used in the generated bundle instead of the module ID, allowing you to (for example) load dependencies from a CDN.

For example `jquery`, `rollup.config.js` add:
``` javascript
output: {
  ...
  paths: {
    jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
  },
  globals: {
    jquery: 'jQuery'
  },
  ...
}
```

the `globals` tell Rollup that the jquery module ID equates to the global `jQuery` variable



demo08: Gulp
---

Rollup returns promises which are understood by gulp so integration is easy.

`gulpfile.js`:
``` javascript
const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
    input: './index.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  });

  await bundle.write({
    file: './dist/dist.js',
    format: 'umd',
    name: 'dist',
    sourcemap: true
  });
});
```
