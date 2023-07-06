import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Suspense, lazy } from 'react';
import Pages from './components/molecules/Pages';
import ThemeProvider from './context/theme';
import Loader from './components/atoms/shared/Loader';

const Layout = lazy(() => import('./components/molecules/Layout'));

function App() {
	return (
		<ThemeProvider>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Pages.Home />} />
						<Route path='/about' element={<Pages.About />} />
						<Route path='/add-novel' element={<Pages.AddNovel />} />
					</Route>
				</Routes>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
