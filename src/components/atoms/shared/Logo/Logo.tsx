import styles from './Logo.module.css';
import LogoSVG from './LogoSVG';

interface LogoProps {
	className?: string;
	theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className, theme = 'light' }) => {
	const circleFill = theme === 'dark' ? '#222222' : '#D9D9D9';
	const pathFill = theme === 'dark' ? 'white' : 'black';

	return (
		<div className={`${styles.logo_container} ${className}`} data-theme={circleFill}>
			<LogoSVG circleFill={circleFill} pathFill={pathFill} />
		</div>
	);
};

export default Logo;
