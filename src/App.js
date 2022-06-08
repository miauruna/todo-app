import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Pages/Login/LoginPage';
import './App.css';
import RegisterPage from './Components/Pages/Register/RegisterPage';
import UserContextProvider from './Components/Store/Auth/UserContextProvider';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route exact path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</UserContextProvider>
	);
}

export default App;
