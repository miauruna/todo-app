import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Store/Auth/UserContext';
import TodoList from '../../Organisms/TodoList/TodoList';
import './ListPage.css';
const ListPage = () => {
	const { userData } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!userData.user) navigate('/login');
	}, [userData.user, navigate]);
	return (
		<div className='list-page-wrapper'>
			{' '}
			{userData.user ? (
				<>
					Welcome, {userData.user.displayName}! We're glad to have you
					back.
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
