import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Store/Auth/UserContext';
import TodoList from '../../Organisms/TodoList/TodoList';
import './ListPage.css';
import Button from '../../Atoms/Button/Button';

const ListPage = () => {
	const { userData, setUserData } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!userData.user) navigate('/login');
	}, [userData.user, navigate]);
	const logout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
		localStorage.setItem('auth-token', '');
	};
	return (
		<div className='list-page-wrapper'>
			{' '}
			{userData.user ? (
				<>
					Welcome, {userData.user.displayName}! We're glad to have you
					back.
					<Button
						className='sign-out-button'
						type='button'
						onClick={logout}>
						Sign Out
					</Button>
					<TodoList />{' '}
				</>
			) : (
				<>
					<h2>You are not logged in</h2>
				</>
			)}
		</div>
	);
};

export default ListPage;
