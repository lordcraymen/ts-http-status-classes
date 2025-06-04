// rollup.config.ts
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import type { RollupOptions, ModuleFormat } from 'rollup';

interface EntryConfig {
  input: string;
  output: string;
}

const entries: EntryConfig[] = [
  { input: 'src/base/index.ts', output: 'base' },
  { input: 'src/http-infos/index.ts', output: 'http-infos' },
  { input: 'src/http-successes/index.ts', output: 'http-successes' },
  { input: 'src/http-redirects/index.ts', output: 'http-redirects' },
  { input: 'src/http-server-errors/index.ts', output: 'http-server-errors' },
  { input: 'src/http-client-errors/index.ts', output: 'http-client-errors' }
];

function createConfig(entry: EntryConfig, format: ModuleFormat, extension: string): RollupOptions {
  return {
    input: entry.input,
    output: {
      file: `dist/${entry.output}/index.${extension}`,
      format: format, // Now TypeScript will catch invalid formats!
      exports: 'named'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        target: format === 'esm' ? 'ES2020' : 'ES5',
        module: format === 'esm' ? 'ESNext' : 'CommonJS'
      })
    ],
    external: []
  };
}

function createDtsConfig(entry: EntryConfig): RollupOptions {
  return {
    input: entry.input,
    output: {
      file: `dist/${entry.output}/index.d.ts`,
      format: 'esm'
    },
    plugins: [dts()],
    external: []
  };
}

const configs: RollupOptions[] = [
  ...entries.flatMap(entry => [
    createConfig(entry, 'esm', 'mjs'),  // TypeScript will validate this is correct
    createConfig(entry, 'cjs', 'js'),
    createDtsConfig(entry)
  ])
];

export default configs;