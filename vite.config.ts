import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      base: '/',
      strategies: 'injectManifest',
      registerType: 'autoUpdate',
      injectRegister: null,
      manifest: {
        name: 'yaranai',
        short_name: 'yaranai',
        description: '新感覚タスク管理アプリ',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '32x32',
            type: 'image/png'
          }
        ], // あとで追加します
        start_url: 'index.html',
        display: 'standalone', // デフォルトなので不要
        background_color: '#ffffff',
        theme_color: '#ffffff',
        lang: 'ja'
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            handler: 'NetworkOnly',
            urlPattern: /\/api/,
            method: 'POST',
            options: { backgroundSync: { name: 'lll', options: { maxRetentionTime: 24 * 60 } } }
          }
        ]
      },
      includeAssets: ['favicon.ico', 'logo.svg'],
      devOptions: {
        enabled: true,
        suppressWarnings: true
      },
      srcDir: 'src',
      filename: 'sw.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
