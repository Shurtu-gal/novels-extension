import { lazy } from 'react';

const Pages = {
	Home: lazy(() => import('./Home')),
	About: lazy(() => import('./About')),
	AddNovel: lazy(() => import('./AddNovel')),
};

export default Pages;
