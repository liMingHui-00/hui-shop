import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入自动导包的工具
import autoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      // 指定哪些需要自动导入
      imports:['vue','vue-router','pinia'],
      dts:'./src/types/auto-imports.d.ts',
      dirs:['./src/**/*'],
      // 修改eslint的配置
      eslintrc:{
        enabled:true
      },
      vueTemplate:true
    }),
    // 组件自动导入   默认是在component中的组件才会自动导入
    Components({
      // dirs:['./src/components','./src/layout'],  可以通过配置来达到自动导入你想要导入的组件
      dts:'./src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
