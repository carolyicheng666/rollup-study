import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: './dist/dist.js',
    format: 'cjs',
    name: 'dist',
    sourcemap: true
  },
  plugins: [ resolve(), json(), uglify() ]
}