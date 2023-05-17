const TodoItem = (props) => {
	const { todoTitle, todoDetails, todoDate, todoId, changeDetail } = props;
	return (
		<div className="card mt-5">
			<div className="card-header">{todoTitle}</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>{todoDetails}</p>
					<footer className="blockquote-footer">{todoDate}</footer>
				</blockquote>
				<button
					className="btn btn-primary mt-3"
					onClick={() => {
						changeDetail(todoId);
					}}
				>
					Change Details
				</button>
			</div>
		</div>
	);
};
export default TodoItem;
