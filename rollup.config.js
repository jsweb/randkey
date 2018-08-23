import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

const author = `/**
 * @author Alex Bruno Cáceres
 * @email git.alexbr@outlook.com
 * @date 2016-06-26 03:21:18
 * @desc Simple JS module to generate random id/key/hash in various formats, including UUID
 */`

export default [{
  input: 'src/randkey.js',
  plugins: [babel()],
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'dist/randkey.js',
    banner: author
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
