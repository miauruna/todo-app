import React, { useState, useEffect } from 'react';
import TodoListItem from '../../Molecules/TodoListItem/TodoListItem';
import AddNewItemToList from '../../Molecules/AddNewItemToList/AddNewItemToList';
const TodoList = () => {
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const getDatabaseItems = await fetch('http://localhost:8001/todos');
			const data = await getDatabaseItems.json();
			setTodoList(data);
		};
		getData();
	}, []);
	const addNewItem = (title, type, color) => {
		const sendToDatabase = async () => {
			const newTodo = {
				title: title,
				type: type,
				color: color,
				completed: false,
			};
			const retrieveTodo = await fetch('http://localhost:8001/add-todo', {
				method: 'POST',
				body: JSON.stringify(newTodo),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await retrieveTodo.json();
			setTodoList([...todoList, data]);
			return data;
		};
		sendToDatabase();
	};
	return (
		<div>
			<div className='list-wrapper'>
				<div className='list-children'>
					<p className='list-item list-title'>List Title</p>
					<ul className='list-item-position'>
						{todoList.map((item) => {
							return (
								<TodoListItem
									key={item._id}
									title={item.title}
									type={item.type}
									color={item.color}
									done={item.completed}
									id={item._id}
								/>
							);
						})}
					</ul>
					<AddNewItemToList addNew={addNewItem} />
				</div>
			</div>
		</div>
	);
};

export default TodoList;
