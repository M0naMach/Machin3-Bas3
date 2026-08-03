import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'VOL-04-PUBLIC',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@apps': path.resolve(__dirname, 'VOL-06-APPLICATIONS'),
      '@lib': path.resolve(__dirname, 'VOL-11-LIBRARY'),
      '@server': path.resolve(__dirname, 'VOL-14-SERVER'),
    },
  },
})
