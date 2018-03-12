import scss from 'rollup-plugin-scss';

export default {
  input: 'index.js',
  output: {
    file: './dist/dist.js',
    format: 'cjs',
    name: 'dist',
    sourcemap: true
  },
  plugins: [
    scss({
      output: './dist/test.css'
    })
  ]
}