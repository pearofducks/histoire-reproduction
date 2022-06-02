import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  histoire: {
    setupFile: '/src/histoire.setup.js'
  }
})
