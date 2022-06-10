import React, { useState } from 'react';
import EyeIcon from '../../Resources/Icons/EyeIcon.svg';
import './FormInput.css';

function FormInput(props) {
	const {
		label,
		type = 'text',
		className,
		value,
		setValue,
		placeholder,
		name,
	} = props;

	const [inputType, setInputType] = useState(
		type === 'password' ? 'password' : 'text'
	);
	const toggleInput = () =>
		inputType === 'password'
			? setInputType('text')
			: setInputType('password');
	// validate fields when clicking outside the box
	const handleBlur = (event) => {
		event.preventDefault();
		// switch (name) {
		// 	case 'Username':
		// 		value.length === 0
		// 			? setError('Your username is required.')
		// 			: setError('');
		// 		break;
		// 	case 'Password':
		// 		value.length < 3
		// 			? setError('Your password is required.')
		// 			: setError('');
		// 		break;
		// 	case 'Username-required':
		// 	case 'Email-required':
		// 	case 'Temporary-required':
		// 		if (value.length === 0) {
		// 			setGenError(true);
		// 			setInputError('Please fill in all required fields');
		// 			setTimeout(() => {
		// 				setInputError('');
		// 			}, 7000);
		// 		} else {
		// 			setInputError('');
		// 			setGenError(false);
		// 		}
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	// handle change
	function handleChange(e) {
		setValue(e.target.value);
	}

	return (
		<div className='input-with-label'>
			<label htmlFor={`${label}-input`} className='input-label'>
				{label}
			</label>

			<div className={`input-wrapper ${className}`}>
				<input
					className='input-field'
					type={inputType || type}
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={handleChange}
					onBlur={handleBlur}
					id={`${label}-input`}
				/>
				{type === 'password' && (
					<i onClick={() => toggleInput()}>
						{inputType === 'password' ? (
							<img
								className='eye-icon'
								src={EyeIcon}
								alt='View password'
							/>
						) : (
							<img
								className='eye-icon-active'
								src={EyeIcon}
								alt='View password'
							/>
						)}
					</i>
				)}
			</div>
		</div>
	);
}

export default FormInput;
