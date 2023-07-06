import { useEffect, useState } from 'react';

export const useTheme = () => {
	const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
	const mqListener = (e: MediaQueryListEvent) => {
		setIsDarkTheme(e.matches);
	};

	useEffect(() => {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
		darkThemeMq.addListener(mqListener);
		return () => darkThemeMq.removeListener(mqListener);
	}, []);
	return isDarkTheme;
};
