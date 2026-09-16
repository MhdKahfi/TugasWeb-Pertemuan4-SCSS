import { defineConfig } from 'vite';

export default defineConfig({
  // Vite otomatis memanggil Dart Sass (paket "sass") untuk
  // meng-compile file .scss yang di-@import lewat src/main.js.
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
