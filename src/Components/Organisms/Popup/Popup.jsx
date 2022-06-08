import React from 'react';
import Button from '../../Atoms/Button/Button';
import './Popup.css';

export const INITIAL_POPUP_CONFIG = {
	isOpen: false,
	message: '',
	buttonStyle: '',
	boxStyle: '',
	cancel: {
		action: () => {},
		label: '',
	},
	confirm: {
		action: () => {},
		label: '',
	},
};
function Popup({ content, popupConfig, children }) {
	return (
		<div className='popup-box'>
			<div className={`inside-box ${popupConfig.boxStyle}`}>
				{content}
				{children}
				<div className='button-group'>
					<Button
						type='button'
						className={`${popupConfig.buttonStyle} button-style-default`}
						onClick={popupConfig.cancel.action}>
						{popupConfig.cancel.label}
					</Button>
					<Button
						type='button'
						className={`${popupConfig.buttonStyle} button-style-default`}
						onClick={popupConfig.confirm.action}>
						{popupConfig.confirm.label}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Popup;
