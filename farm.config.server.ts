import { defineConfig } from '@farmfe/core';
import { mdxPlugin } from './plugins/mdx';
import { virtualRoutes } from './plugins/virtual-routes';
import farmJsPluginPostcss from "@farmfe/js-plugin-postcss"


export default defineConfig({
  compilation: {
    input: {
      index: './src/index-server.tsx'
    },
    output: {
      path: './dist',
      targetEnv: 'node'
    },
    persistentCache: false,
    lazyCompilation: false
  },

  plugins: [
    [
      '@farmfe/plugin-react',
      {
        refresh: false,
        development: false
      }
    ],
    mdxPlugin({
      providerImportSource: "@mdx-js/react"
    }),
    virtualRoutes(),
    farmJsPluginPostcss(),
    "@farmfe/plugin-sass"
  ],
});