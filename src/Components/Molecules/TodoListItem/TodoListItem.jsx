import React, { useState, useEffect } from 'react';

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
		// const result = sendUpdate(updatedTodo);
	}, [props.title, props.id, isDone]);
	const handleChange = () => {
		if (isDone) {
			setIsDone(false);
		} else {
			setIsDone(true);
		}
		console.log(isDone);
	};
	return (
		<div>
			<li>
				<input
					id='inputItem'
					type='checkbox'
					checked={isDone}
					onChange={() => console.log('')}></input>{' '}
				<label htmlFor='inputItem' onClick={handleChange}>
					{' '}
					{props.title}
				</label>
			</li>
		</div>
	);
};

export default TodoListItem;
