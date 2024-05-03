import { defineConfig } from '@farmfe/core';
import { mdxPlugin } from './plugins/mdx';

export default defineConfig({
  compilation: {
    input: {
      index: './src/index-server.tsx'
    },
    output: {
      path: './dist',
      targetEnv: 'node'
    }
  },
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        refresh: false,
        development: false
      }
    ],
    mdxPlugin()
  ],
});