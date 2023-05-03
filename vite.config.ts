import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteCompress from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ViteCompress({
      ext: '.gz'
    }),
    visualizer({
      emitFile: true,
      filename: "dist/stats.html",
      open:true 
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: "terser",
    terserOptions: { 
      compress: {
        drop_console: true, //剔除console,和debugger
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          axios: ['axios'],
          echarts: ['echarts'],
          'element-plus': ['element-plus', '@element-plus/icons-vue']
        }
      }
    }
  }
})
