import { defineConfig, isWindows } from '@farmfe/core';
import path from 'path';
import { mdxPlugin } from './plugins/mdx';
import { virtualRoutes } from './plugins/virtual-routes';
import farmJsPluginPostcss from "@farmfe/js-plugin-postcss"
import { readdir, readFile } from 'fs/promises';
import { routesPath } from './global/routes';
import { virtualConfig } from "./plugins/virtual-config"



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
        if (ctx.path === '/' || routesPath.routes.includes(ctx.path)) {
          const distPath = path.join(process.cwd(), 'dist')
          const files = await readdir(distPath)
          const cssFile = files.filter(file => file.endsWith('css'))
          const codes = await Promise.all(cssFile.map(async (file) => {
            const css = await readFile(path.join(distPath, file), "utf-8")
            return css
          }))
          const cssCode = codes.reduce((css, content) => css + content, "")
          const pathResolve = path.join(process.cwd(), 'dist', 'index.js');

          const render = await import(isWindows ? `file://${pathResolve}` : pathResolve).then(
            (m) => m.default
          );

          const renderedHtml = await render(ctx);
          const template = server.getCompiler().resource('index_client.html').toString();
          const html = template.replace(
            '<div>app-html-to-replace</div>',
            renderedHtml
          ).replace("<!-- head -->", `<style>${cssCode}</style>`);
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
    virtualConfig(),
    virtualRoutes(),
    farmJsPluginPostcss(),
    "@farmfe/plugin-sass",
  ],
});
