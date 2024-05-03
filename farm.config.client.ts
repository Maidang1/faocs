import { defineConfig } from '@farmfe/core';
import path from 'path';
import { mdxPlugin } from './plugins/mdx';


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
    middlewares: [(server) => {
      server.app().use(async (ctx, next) => {
        await next();
        if (ctx.path === '/' || ctx.status === 404) {
          const render = await import(path.join(process.cwd(), 'dist', 'index.js')).then(
            (m) => m.default
          );
          const renderedHtml = render(ctx.path);
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
    mdxPlugin()
  ],
});
