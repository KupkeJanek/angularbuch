import nodeResolve from 'rollup-plugin-node-resolve';
import uglify      from 'rollup-plugin-uglify';

export default {
  input: 'dist/app/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    uglify()
  ]
}