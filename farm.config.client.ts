import { defineConfig } from '@farmfe/core';
import path from 'path';
import { mdxPlugin } from './plugins/mdx';
import { virtualRoutes } from './plugins/virtual-routes';
import farmJsPluginPostcss from "@farmfe/js-plugin-postcss"


// const cleanUrl = (url: string): string => url.replace(/#.*$/s, '').replace(/\?.*$/s, '')
export default defineConfig({
  compilation: {
    input: {
      index_client: './index.html'
    },
    output: {
      path: './build'
    },
  },
  server: {
    port: 9000,
    hmr: {
      path: "/__farm_hmr",
    },
    // @ts-ignore
    middlewares: [(server) => {
      server.app().use(async (ctx, next) => {
        await next();

        if (ctx.path === '/' || ctx.status === 404) {
          const render = await import(path.join(process.cwd(), 'dist', 'index.js')).then(
            (m) => m.default
          );
          const renderedHtml = await render(ctx);
          const template = server.getCompiler().resource('index_client.html').toString();
          const html = template.replace(
            '<div>app-html-to-replace</div>',
            renderedHtml
          );
          ctx.status = 200;
          ctx.type = 'text/html'
          ctx.body = html;
        }

      })
    }]
  },
  plugins: [
    ['@farmfe/plugin-react', { runtime: 'automatic' }],
    mdxPlugin({
      providerImportSource: "@mdx-js/react"
    }),
    virtualRoutes(),
    farmJsPluginPostcss(),
    "@farmfe/plugin-sass"
  ],
});
