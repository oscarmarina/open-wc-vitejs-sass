import { defineConfig } from 'vite';
import html from '@web/rollup-plugin-html';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [html()],

  build: {
    rollupOptions: {
      input: 'demo/*.html',
      output: {
        dir: 'dist/',
        format: 'es',
      },
    },
  },
});
