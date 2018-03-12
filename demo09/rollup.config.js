import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'index.js',
  output: {
    file: './dist/dist.js',
    format: 'cjs',
    name: 'dist',
    sourcemap: true
  },
  plugins: [ resolve() ],
  banner: '/* dist version ' + pkg.version + ' */',
  footer: '/* follow me on Github! @' + pkg.author + ' */'
}