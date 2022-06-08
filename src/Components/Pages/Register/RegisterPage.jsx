import React from 'react';
import LogoFinal from '../../Resources/Logo/LogoFinal.svg';
import RegisterForm from '../../Templates/RegisterForm/RegisterForm';
import './RegisterPage.css';

const RegisterPage = () => {
	return (
		<div className='login-page-wrapper'>
			<img className='login-page-logo' src={LogoFinal} alt='app logo' />
			<RegisterForm />
		</div>
	);
};

export default RegisterPage;
