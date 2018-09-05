import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default [{
  input: 'src/main.js',
  plugins: [babel()],
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'dist/main.js'
  }
}, {
  input: 'src/test.js',
  plugins: [common(), resolve()],
  external: ['assert', './randkey'],
  output: {
    format: 'cjs',
    name: 'test',
    file: 'dist/test.js'
  }
}]
