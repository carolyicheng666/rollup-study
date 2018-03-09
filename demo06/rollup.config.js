import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    format: 'cjs',
    file: './dist/dist.js'
  },
  plugins: [resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  })],
  external: ['lodash']
}