import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'yaranai',
        short_name: 'yaranai',
        description: '新感覚タスク管理アプリ',
        icons: [], // あとで追加します
        start_url: 'index.html',
        display: 'standalone', // デフォルトなので不要
        background_color: '#ffffff',
        theme_color: '#ffffff',
        lang: 'ja'
      },
      workbox: { cleanupOutdatedCaches: true, globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      includeAssets: ["favicon.ico, 'logo.svg"],
      devOptions: {
        enabled: false
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
