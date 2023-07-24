import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@amazingywk/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  build: {
    target: 'chrome100',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    cssCodeSplit: false,  
  },
  plugins: [
    vue(),
    federation({
      name: 'app1',
      filename: 'remoteEntry1.js',
      exposes: {
        './App1': './src/App1.vue',
      },
      shared: ['vue']
    }),
    federation({
      name: 'app2',
      filename: 'remoteEntry2.js',
      exposes: {
        './App2': './src/App2.vue',
      },
      shared: ['vue']
    }),
    federation({
      name: 'remote1',
      filename: 'remoteEntry1.js',
      remotes: {
        app1: 'http://localhost:4000/dist/assets/remoteEntry1.js',
        app2: 'http://localhost:4000/dist/assets/remoteEntry2.js',
      },
      shared: ['vue']
    }),
  ],
})
