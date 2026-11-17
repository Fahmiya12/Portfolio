import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project repositories, change this to '/YOUR-REPO-NAME/'.
  // If the repository is YOUR-USERNAME.github.io, use '/'.
  base: '/',
});
