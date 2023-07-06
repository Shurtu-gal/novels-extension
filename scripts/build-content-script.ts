import { PluginOption, build } from 'vite';
import { getContentScriptObjects } from '.';

export default function buildContentScript(): PluginOption {
	return {
		name: 'build-content-scripts',
		async buildStart() {
			await build({
				build: {
					outDir: 'dist/static/js/content-scripts',
					emptyOutDir: false,
					copyPublicDir: false,
					rollupOptions: {
						input: getContentScriptObjects(),
						output: {
							entryFileNames: '[name].js',
						},
					},
				},
				configFile: false,
			});

			console.log('Content code build sucessfully');
		},
	};
}
