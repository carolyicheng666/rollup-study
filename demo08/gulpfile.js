const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

gulp.task('build', async function () {
  const bundle = await rollup.rollup({
    input: './index.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  });

  await bundle.write({
    file: './dist/dist.js',
    format: 'umd',
    name: 'dist',
    sourcemap: true
  });
});