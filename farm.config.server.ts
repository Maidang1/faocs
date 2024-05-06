import { defineConfig } from '@farmfe/core';
import { mdxPlugin } from './plugins/mdx';
import { virtualRoutes } from './plugins/virtual-routes';

export default defineConfig({
  compilation: {
    input: {
      index: './src/index-server.tsx'
    },
    output: {
      path: './dist',
      targetEnv: 'node'
    },
    persistentCache: false
  },
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        refresh: false,
        development: false
      }
    ],
    mdxPlugin(),
    virtualRoutes()
  ],
});