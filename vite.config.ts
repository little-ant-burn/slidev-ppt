# https://vitejs.dev/config/
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // 开发服务器配置
  server: {
    port: 3030,
    open: true,
  },
  
  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // GitHub Pages 需要相对路径
    base: process.env.NODE_ENV === 'production' ? '/slidev-ppt/' : '/',
  },
  
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
  
  // 优化依赖
  optimizeDeps: {
    include: [
      '@slidev/cli',
      '@slidev/theme-default',
      '@slidev/theme-seriph',
    ],
  },
})
