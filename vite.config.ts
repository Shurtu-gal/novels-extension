import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import buildContentScript from './scripts/build-content-script';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), buildContentScript()],
	build: {
		outDir: 'dist',
		emptyOutDir: false,
	},
});
