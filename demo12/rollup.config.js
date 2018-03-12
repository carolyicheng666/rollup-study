import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';

const base = [resolve(), json()];
const dev = [];
const prod = [uglify()];

let isProd = process.env.NODE_ENV === 'production';
let plugins = [...base].concat(isProd ? prod : dev);

export default {
  input: 'index.js',
  output: {
    file: './dist/dist.js',
    format: 'cjs',
    name: 'dist',
    sourcemap: isProd
  },
  plugins: plugins
}