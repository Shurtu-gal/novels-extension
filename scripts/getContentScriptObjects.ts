import { glob } from 'glob';
import type { InputOption } from 'rollup';

export const getContentScriptObjects = (): InputOption => {
	const contentScriptObjects: InputOption = {};
	// Get all files in src/content directory with ts or tsx extension
	const contentScriptFiles = glob.sync('src/content/**/*.{ts,tsx,js,jsx}');
	contentScriptFiles.forEach((file) => {
		const fileName = file?.split('/')?.pop()?.split('.')[0];
		if (!fileName) return;
		contentScriptObjects[fileName] = file;
	});
	return contentScriptObjects;
};
