import { defineConfig } from 'vite'
import path from 'path'

// When deploying to Netlify or a subdirectory, using a relative base ensures
// assets (CSS/JS) are referenced with a relative path so the site isn't
// unstyled if the root path isn't "/". Adjust VITE_BASE_URL if you host under a
// custom path (e.g. "/myapp/").
const BASE_URL = process.env.VITE_BASE_URL || './';

export default defineConfig({
  base: BASE_URL,
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      // or '@': path.resolve(__dirname, 'src')
    },
  },
});
