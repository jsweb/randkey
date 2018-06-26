import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import {
  uglify
} from 'rollup-plugin-uglify'

export default {
  input: 'src/randkey.js',
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'dist/randkey.js',
    amd: {
      id: 'randkey'
    }
  },
  plugins: [resolve(), buble(), uglify()]
}
