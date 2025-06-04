// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const entries = [
  { input: 'src/base/index.ts', output: 'base' },
  { input: 'src/http-infos/index.ts', output: 'http-infos' },
  { input: 'src/http-successes/index.ts', output: 'http-successes' },
  { input: 'src/http-redirects/index.ts', output: 'http-redirects' },
  { input: 'src/http-server-errors/index.ts', output: 'http-server-errors' },
  { input: 'src/http-client-errors/index.ts', output: 'http-client-errors' }
];

function createConfig(entry, format, extension) {
  return {
    input: entry.input,
    output: {
      file: `dist/${entry.output}/index.${extension}`,
      format: format,
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        target: format === 'esm' ? 'ES2020' : 'ES5', // Different targets
        module: format === 'esm' ? 'ESNext' : 'CommonJS' // Key difference
      })
    ],
    external: []
  };
}

export default [
  ...entries.flatMap(entry => [
    createConfig(entry, 'esm', 'mjs'),  // Use 'es' instead of 'esm'
    createConfig(entry, 'cjs', 'js'),
  ])
];