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
$ npm i rollup -g
$ npm i
```
My `rollup version` is **0.53.3**, if you higher to me, maybe some differences. 



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



demo04: ES6
---

`.babalrc`:
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



demo05: npm packages
---

need use the `rollup-plugin-node-resolve` plugin

`rollup.config.js`:
``` javascript
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    format: 'cjs',
    file: './dist/dist.js'
  },
  plugins: [ resolve() ]
}
```



demo06: Peer dependencies
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
