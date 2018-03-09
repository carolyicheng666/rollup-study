import babel from 'rollup-plugin-babel';

export default [{
  input: 'index.js',
  output: {
    format: 'iife',
    file: './dist/dist.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}]