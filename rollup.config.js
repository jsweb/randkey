import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

export default {
	format: 'umd',
	dest: 'randkey.js',
	entry: 'randkey.jsx',
	moduleName: 'randkey',
	amd: { id: 'randkey' },
	plugins: [buble(), uglify()]
}