import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/base/index',
    'src/http-infos/index',
    'src/http-successes/index',
    'src/http-redirects/index',
    'src/http-server-errors/index',
    'src/http-client-errors/index'
  ],
  declaration: true,
  outDir: 'dist',
  clean: true,
  rollup: {
    emitCJS: true
  }
});
