import { Link } from 'react-router-dom';
import { navList } from '../../../../../data/navigation';
import Logo from '../../../../atoms/shared/Logo/Logo';
import ToggleModeIcon from '../../../../atoms/shared/ToggleModeIcon';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../context/theme';

const Header = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='flex justify-between items-center'>
			<Logo className='w-10 h-10' theme={theme} />
			<div className='flex justify-between items-center'>
				{navList.map((navItem) => (
					<Link key={navItem.path} className='mx-4 text-lg' to={navItem.path}>
						{navItem.name}
					</Link>
				))}
			</div>
			<ToggleModeIcon />
		</div>
	);
};

export default Header;
