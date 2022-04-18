import React, { useContext, useState } from 'react';
import FormInput from '../../Atoms/FormInput/FormInput';
import Card from '../../Atoms/Card/Card';
import Button from '../../Atoms/Button/Button';
import LinkComponent from '../../Atoms/LinkComponent/LinkComponent';
import UserContext from '../../Store/Auth/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorNotice from '../../Atoms/ErrorNotice/ErrorNotice';
const LoginForm = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();
	const { setUserData } = useContext(UserContext);
	const navigate = useNavigate();
	const submit = async (e) => {
		e.preventDefault();
		try {
			const loginUser = { email, password };
			const loginResponse = await axios.post(
				'http://localhost:8001/users/login',
				loginUser
			);
			setUserData({
				token: loginResponse.data.token,
				user: loginResponse.data.user,
			});
			localStorage.setItem('auth-token', loginResponse.data.token);
			navigate.push('/');
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};
	return (
		<div>
			{error && (
				<ErrorNotice
					message={error}
					clearError={() => setError(undefined)}
				/>
			)}
			<Card className='login-page-card'>
				<p className='login-message'>
					Welcome back! {'\n'} Please log in to access your account
				</p>
				<FormInput
					type='email'
					label='E-mail:'
					name='Email'
					setValue={setEmail}
				/>
				<FormInput
					type='password'
					label='Password:'
					name='Password'
					setValue={setPassword}
				/>
				{/* add error here */}
				<Button type='button' className='login-button' onClick={submit}>
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
