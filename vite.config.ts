import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1677FF', // 这里可以定义全局变量
        },
      },
    },
  },
  server: {
    port: 1420,
    cors: true, // 允许跨域
    hmr: true, // 开启热更新
    proxy: {
      "/api": {
        target: "http://baidu.com", // 设置要代理到的主机名
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 /api 前缀
      },
    },
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
