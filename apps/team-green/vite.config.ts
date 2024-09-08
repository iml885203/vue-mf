import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'team-green',
      filename: 'remoteEntry.js',
      exposes: {
          './Recommendations': './src/components/Recommendations.vue',
      },
      shared: ['vue', 'pinia']
    })
  ],
  base: 'http://localhost:5001',
  build: {
    target: "esnext",
  }
})
