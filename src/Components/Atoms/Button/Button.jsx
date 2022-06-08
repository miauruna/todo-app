import React from 'react';

function Button(props) {
	const { className, disabled, onClick, children } = props;
	return (
		<button
			type='button'
			className={`button-default ${className} ${
				disabled ? 'disabled' : ''
			}`}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
