import React, { useRef } from 'react';

const AddNewItemToList = (props) => {
	const addTodo = props.addNew;
	const titleRef = useRef(null);
	const handleSubmit = (event) => {
		event.preventDefault();
		const title = titleRef.current.value;
		if (title) {
			addTodo(title);
			titleRef.current.value = '';
		} else {
			alert('field is empty');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='add a new to do item to this list'
					ref={titleRef}
				/>
				<button>ADD</button>
			</form>
		</div>
	);
};

export default AddNewItemToList;
