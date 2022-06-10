import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Store/Auth/UserContext';
import LoginForm from '../../Templates/LoginForm/LoginForm';
import LogoFinal from '../../Resources/Logo/LogoFinal.svg';
import './LoginPage.css';

const LoginPage = () => {
	const { userData } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (userData.user) navigate('/list');
	}, [userData.user, navigate]);
	return (
		<div className='login-page-wrapper'>
			<img className='login-page-logo' src={LogoFinal} alt='app logo' />
			<LoginForm />
		</div>
	);
};

export default LoginPage;
