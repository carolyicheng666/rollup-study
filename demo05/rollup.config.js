import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: './dist/dist.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs()
  ],
  external: ['lodash']
}