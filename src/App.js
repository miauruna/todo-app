import { Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Pages/Login/LoginPage';
import './App.css';
import RegisterPage from './Components/Pages/Register/RegisterPage';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	);
}

export default App;
