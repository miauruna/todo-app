import React, { useState, useEffect } from 'react';
import Circle from '../../Resources/Icons/Circle.svg';
import CheckedCircle from '../../Resources/Icons/CheckedCircle.svg';

const TodoListItem = (props) => {
	const [isDone, setIsDone] = useState(props.done);
	useEffect(() => {
		const updatedTodo = {
			title: props.title,
			completed: isDone,
		};
		const sendUpdate = async (item) => {
			const response = await fetch(
				`http://localhost:8001/todo/${props.id}`,
				{
					method: 'PUT',
					body: JSON.stringify({ ...item }),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			return data;
		};
		sendUpdate(updatedTodo);
	}, [props.title, props.id, isDone]);
	const handleChange = () => {
		if (isDone) {
			setIsDone(false);
		} else {
			setIsDone(true);
		}
	};

	return (
		<div className='list-item'>
			<input
				id='inputItem'
				type='checkbox'
				className='list-item-input'
				checked={isDone}
				onChange={() => {}}
			/>
			<label className='list-item-label' onClick={handleChange}>
				{props.title}
				<span className='item-checkmark'>
					{!isDone ? (
						<img src={Circle} alt='not checked' />
					) : (
						<img src={CheckedCircle} alt='checked' />
					)}
				</span>
			</label>
		</div>
	);
};

export default TodoListItem;
