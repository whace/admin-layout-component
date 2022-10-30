import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import dts from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions(), AutoImport({
    include: [
      /\.[tj]sx?$/,
      /\.vue$/,
    ],
    imports: [
      'vue',
    ],
  }), dts({
    include: ['./src/index.ts', './src/index.vue'],
    beforeWriteFile(filePath, content) {
      return {
        filePath: filePath.replace('/dist/src/', '/dist/'),
        content,
      }
    },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
