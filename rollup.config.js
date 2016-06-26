import buble from 'rollup-plugin-buble'

export default {
  moduleId: 'randkey',
  moduleName: 'randkey',
  entry: 'randkey.js',
  dest: 'randkey.umd.js',
  plugins: [ buble() ],
  format: 'umd'
}
