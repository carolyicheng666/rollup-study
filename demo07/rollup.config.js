import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  external: ['jquery'],
  output: {
    format: 'amd',
    file: './dist/dist.js',
    paths: {
      jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    },
    globals: {
      jquery: 'jQuery'
    }
  },
  plugins: [resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  })]
}