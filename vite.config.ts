import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'localhost',
    port: 3000
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components')
    }
  }
});
