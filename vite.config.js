import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: 'dist/node_modules' },
    {
      src: 'node_modules/lit/polyfill-support.js',
      dest: 'dist/node_modules/lit',
    },
    { src: 'index.html', dest: 'dist' },
    { src: ['demo/**/*', '!demo/index.html'], dest: 'dist/demo' },
  ],
  hook: 'writeBundle',
};

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [copy(copyConfig)],
  build: {
    lib: {
      entry: resolve(__dirname, 'demo/index.html'),
      formats: ['es'],
    },
  },
});
