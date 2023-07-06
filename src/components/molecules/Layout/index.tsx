import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../../context/theme';
import Header from '../shared/marginals/Header';
import Loader from '../../atoms/shared/Loader';

const Layout = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${theme} container`}>
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
};

export default Layout;
