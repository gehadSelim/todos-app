import React, { useState } from "react";
import TodoItem from "./TodoItem";
const App = () => {
	const [todoArr, setTodoArr] = useState([
		{
			id: 1,
			todoTitle: "First TODO",
			todoDetails: "A well-known quote, contained in a blockquote element.",
			todoDate: "16/5/2023",
		},
		{
			id: 2,
			todoTitle: "Second TODO",
			todoDetails: "A well-known quote, contained in a blockquote element.",
			todoDate: "16/5/2023",
		},
		{
			id: 3,
			todoTitle: "Third TODO",
			todoDetails: "A well-known quote, contained in a blockquote element.",
			todoDate: "16/5/2023",
		},
	]);
	const changeTodoDetail = (id) => {
		let newArr = todoArr.map((todo) => {
			if (todo.id === id) todo.todoDetails = "New Details";
			return todo;
		});
		setTodoArr(newArr);
	};
	return (
		<>
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">Todos App</span>
				</div>
			</nav>
			<div className="container mb-5 ">
				<button
					className="btn btn-primary mt-3"
					onClick={() => {
						let newArr = todoArr.map((todo) => {
							if (todo.id === 1)
								todo.todoDetails = "New Details from the top button";
							return todo;
						});
						setTodoArr(newArr);
					}}
				>
					Change Title For Todo Number One
				</button>
				{todoArr.map((todo, index) => (
					<TodoItem
						key={todo.id}
						todoTitle={todo.todoTitle}
						todoDetails={todo.todoDetails}
						todoDate={todo.todoDate}
						todoId={todo.id}
						changeDetail={changeTodoDetail}
					/>
				))}
			</div>
		</>
	);
};

export default App;
