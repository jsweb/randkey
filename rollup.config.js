import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'randkey.jsx',
  amd: { id: 'randkey' },
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'randkey.js'
  },
	plugins: [buble(), uglify()]
}
