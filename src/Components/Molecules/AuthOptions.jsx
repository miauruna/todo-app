import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../context/userContext';

function AuthOptions() {
	const { userData, setUserData } = useContext(UserContext);
	const navigate = useNavigate();
	const register = () => navigate.push('/register');
	const login = () => navigate.push('/');
	const logout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
		localStorage.setItem('auth-token', '');
	};
	return (
		<div>
			{userData.user ? (
				<button onClick={logout}>Logout</button>
			) : (
				<>
					<button onClick={login}>
						<span>Log In</span>
					</button>
					<button onClick={register}>
						<span>Sign up</span>
					</button>
				</>
			)}
		</div>
	);
}
export default AuthOptions;
