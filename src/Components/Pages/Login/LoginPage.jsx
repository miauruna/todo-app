import React from 'react';
import LoginForm from '../../Templates/LoginForm/LoginForm';
import LogoFinal from '../../Resources/Logo/LogoFinal.svg';
import './LoginPage.css';

const LoginPage = () => {
	return (
		<div className='login-page-wrapper'>
			<img className='login-page-logo' src={LogoFinal} alt='app logo' />
			<LoginForm />
		</div>
	);
};

export default LoginPage;
