import { createContext, useEffect, useState } from 'react';
import { useTheme } from '../utils';

interface ThemeProps {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({
	theme: 'light',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const isDark = useTheme();
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		if (isDark) {
			setTheme('dark');
		}
	}, [isDark]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
