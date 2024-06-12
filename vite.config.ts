import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // root
      '~': path.resolve(__dirname, './'),
    }
  },
  plugins: [UnoCSS(), vue()],
  build: {
    outDir: '50pd',
  },
  base: './',
})
