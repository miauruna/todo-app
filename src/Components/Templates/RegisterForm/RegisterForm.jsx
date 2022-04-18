import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormInput from '../../Atoms/FormInput/FormInput';
import Card from '../../Atoms/Card/Card';
import Button from '../../Atoms/Button/Button';
import LinkComponent from '../../Atoms/LinkComponent/LinkComponent';
import UserContext from '../../Store/Auth/UserContext';

import ErrorNotice from '../../Atoms/ErrorNotice/ErrorNotice';
const RegisterForm = () => {
	const { setUserData } = useContext(UserContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [passwordCheck, setPasswordCheck] = useState();
	const [displayName, setDisplayName] = useState();
	const [error, setError] = useState();
	const submit = async (e) => {
		e.preventDefault();
		try {
			const newUser = { email, password, passwordCheck, displayName };
			await axios.post('http://localhost:8001/users/register', newUser);
			const loginResponse = await axios.post(
				'http://localhost:8001/users/login',
				{
					email,
					password,
				}
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
				<FormInput
					type='text'
					label='Your Name:'
					name='Name'
					placeholder='E.g. Sandy Pines'
					setValue={setDisplayName}
				/>
				<FormInput
					type='text'
					label='E-mail:'
					name='Email'
					placeholder='E.g. sandy_pines@gmail.com'
					setValue={setEmail}
				/>
				<FormInput
					type='password'
					label='Password:'
					name='Password'
					placeholder='Min. 7 characters'
					setValue={setPassword}
				/>
				<FormInput
					type='password'
					label='Confirm Password:'
					name='Password'
					placeholder='Needs to match'
					setValue={setPasswordCheck}
				/>
				{/* add error here */}
				<Button type='button' className='login-button' onClick={submit}>
					Register
				</Button>

				<LinkComponent
					className='login-page-link'
					label='Already have an account? Log in here'
					path='/'
				/>
				<p className='register-disclaimer'>
					By registering, you aggree to share your name and e-mail
					address with us
				</p>
			</Card>
		</div>
	);
};

export default RegisterForm;
