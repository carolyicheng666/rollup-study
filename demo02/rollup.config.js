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
