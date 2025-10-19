import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If your repo name is different, change the next line to match: '/<your-repo>/'
  base: '/author-site/',
})
