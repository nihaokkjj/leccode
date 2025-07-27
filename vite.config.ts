import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // ====== 添加或修改以下行 ======
      '@': resolve(__dirname, 'src'), // 将 '@' 别名指向 'src' 目录
      // ===========================
    },
  },
})
