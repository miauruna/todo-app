import React, { useRef } from 'react';
import { useState } from 'react';

import AddButton from '../../Resources/Icons/AddButton.svg';

const AddNewItemToList = (props) => {
	const addTodo = props.addNew;
	const titleRef = useRef(null);
	const [notification, setNotification] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		const title = titleRef.current.value;
		if (title) {
			addTodo(title);
			titleRef.current.value = '';
		} else {
			setNotification('Please type something first');
		}
	};
	return (
		<div className='fixed-form'>
			<form onSubmit={handleSubmit}>
				{notification && (
					<p className='add-new-item-notification'>{notification}</p>
				)}
				<input
					className='add-new-item-field'
					type='text'
					placeholder='add a new to do item to this list'
					ref={titleRef}
				/>
				<button className='add-button'>
					<img src={AddButton} alt='Add to list' />
				</button>
			</form>
		</div>
	);
};

export default AddNewItemToList;
