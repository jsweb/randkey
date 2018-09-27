import babel from 'rollup-plugin-babel'
import pack from './package.json'

const dt = new Date
const modify = dt.toJSON().split('.')[0].replace('T', ' ')
const author = `/**
* @name ${pack.name}
* @version ${pack.version}
* @desc ${pack.description}
* @author ${pack.author}
* @create date 2016-06-26 03:21:18
* @modify date ${modify}
*/
`

export default [{
  input: 'src/main.js',
  plugins: [babel()],
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'dist/main.js',
    banner: author
  }
}, {
  input: 'src/module.js',
  output: {
    format: 'esm',
    name: 'randkey',
    file: 'dist/module.js',
    banner: author
  }
}]
