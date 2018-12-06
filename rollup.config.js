import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/unstated.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.devDependencies || {})
  ],
  plugins: [
    noderesolve({ browser: true, extensions: ['.js', '.jsx', '.json'] }),
    commonjs({
      include: ['node_modules/**']
    }),
    babel({
      babelrc: true
    })
  ]
};
