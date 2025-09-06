 
import {fileURLToPath,URL} from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


// ../../
// ../../components .. @component
// no need to use like the long one, helpful to keeping our code clean and organize as the project growth