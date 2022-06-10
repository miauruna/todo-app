import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Pages/Login/LoginPage';
import './App.css';
import RegisterPage from './Components/Pages/Register/RegisterPage';
import UserContextProvider from './Components/Store/Auth/UserContextProvider';
import LandingPage from './Components/Pages/Landing/LandingPage';
import ListPage from './Components/Pages/List/ListPage';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route exact path='/' element={<LandingPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/list' element={<ListPage />} />
			</Routes>
		</UserContextProvider>
	);
}

export default App;
