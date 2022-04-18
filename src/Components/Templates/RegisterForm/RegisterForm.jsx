import React from 'react';
import FormInput from '../../Atoms/FormInput/FormInput';
import Card from '../../Atoms/Card/Card';
import Button from '../../Atoms/Button/Button';
import LinkComponent from '../../Atoms/LinkComponent/LinkComponent';
const RegisterForm = () => {
	return (
		<div>
			<Card className='login-page-card'>
				<FormInput
					type='text'
					label='Your Name:'
					name='Name'
					placeholder='E.g. Sandy Pines'
				/>
				<FormInput
					type='text'
					label='E-mail:'
					name='Email'
					placeholder='E.g. sandy_pines@gmail.com'
				/>
				<FormInput
					type='password'
					label='Password:'
					name='Password'
					placeholder='Min. 7 characters'
				/>
				<FormInput
					type='password'
					label='Confirm Password:'
					name='Password'
					placeholder='Needs to match'
				/>
				{/* add error here */}
				<Button type='button' className='login-button'>
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
