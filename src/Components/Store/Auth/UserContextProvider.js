import React, { useMemo, useEffect, useState } from 'react';
import UserContext from './UserContext';
import axios from 'axios';

function UserContextProvider({ children }) {
	const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
	});
	useEffect(() => {
		const checkLoggedIn = async () => {
			let token = localStorage.getItem('auth-token');

			if (token === null) {
				localStorage.setItem('auth-token', '');
				token = '';
			}
			const tokenResponse = await axios.post(
				'http://localhost:8001/users/tokenIsValid',
				null,
				{ headers: { 'x-auth-token': token } }
			);
			if (tokenResponse.data) {
				const userRes = await axios.get(
					'http://localhost:8001/users/',
					{
						headers: { 'x-auth-token': token },
					}
				);
				setUserData({
					token,
					user: userRes.data,
				});
			}
		};
		checkLoggedIn();
	}, []);

	const userContextValue = useMemo(
		() => ({ userData, setUserData }),
		[userData, setUserData]
	);

	return (
		<UserContext.Provider value={userContextValue}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
