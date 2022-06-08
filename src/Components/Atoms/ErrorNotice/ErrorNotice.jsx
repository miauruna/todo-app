import React from 'react';
function ErrorNotice(props) {
	return (
		<div className={props.className}>
			<span>{props.message}</span>
			<button className='error-notice-button' onClick={props.clearError}>
				x
			</button>
		</div>
	);
}
export default ErrorNotice;
