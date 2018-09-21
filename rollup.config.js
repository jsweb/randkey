import typescript from 'rollup-plugin-typescript'

export default [{
  input: 'src/main.ts',
  plugins: [typescript()],
  output: {
    format: 'esm',
    name: 'randkey',
    file: 'dist/esnext.js'
  }
}, {
  input: 'src/main.ts',
  plugins: [typescript()],
  output: {
    format: 'umd',
    name: 'randkey',
    file: 'dist/main.js'
  }
}, {
  input: 'src/test.ts',
  plugins: [typescript()],
  external: ['assert', './main'],
  output: {
    format: 'cjs',
    name: 'test',
    file: 'dist/test.js'
  }
}]
