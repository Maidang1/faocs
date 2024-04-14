import { defineConfig } from '@farmfe/core';

const cleanUrl = (url: string): string => url.replace(/#.*$/s, '').replace(/\?.*$/s, '')
export default defineConfig({
  compilation: {
    sourcemap: false,
    persistentCache: true,
    presetEnv: false,
    progress: false,
    output: {
      publicPath: '/',
    },
  },
  server: {
    port: 9000,
    hmr: {
      path: "/__farm_hmr",
    }
  },
  plugins: [
    ['@farmfe/plugin-react', { runtime: 'automatic' }],
    [
      {
        name: "config-html",
        configureDevServer: (server) => {

          server.app().use(async (ctx, next) => {
            const url = ctx.url && cleanUrl(ctx.url)
            if (url !== '/') {
              next();
              return
            }
            ctx.status = 200;
            ctx.set('Content-Type', 'text/html');
            const compiler = server.getCompiler();
            compiler.compileSync()
            const result = compiler.resourcesMap();
            ctx.body = Buffer.from(result['index.html'].bytes).toString()
            next()
          })
        }
      }
    ]
  ],
});
