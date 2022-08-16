import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
});
