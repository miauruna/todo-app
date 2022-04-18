import React from 'react';
import FormInput from '../../Atoms/FormInput/FormInput';
import Card from '../../Atoms/Card/Card';
import Button from '../../Atoms/Button/Button';
import LinkComponent from '../../Atoms/LinkComponent/LinkComponent';
const LoginForm = () => {
	return (
		<div>
			<Card className='login-page-card'>
				<p className='login-message'>
					Welcome back! {'\n'} Please log in to access your account
				</p>
				<FormInput type='text' label='E-mail:' name='Email' />
				<FormInput type='password' label='Password:' name='Password' />
				{/* add error here */}
				<Button type='button' className='login-button'>
					Log in
				</Button>
				<LinkComponent
					className='login-page-link'
					label="Don't have an account? Register now"
					path='/register'
				/>
				<LinkComponent
					className='login-page-link'
					label='Click here if you forgot your password'
					path='/password-reset'
				/>
			</Card>
		</div>
	);
};

export default LoginForm;
