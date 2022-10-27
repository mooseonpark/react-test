import { useState } from 'react';

function Todo() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const onChange = (e) => {
		setTodo(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (todo === '') {
			return;
		}
		setTodo('');
		setTodos((currentArray) => [todo, ...currentArray]);
	};
	console.log(todos);
	return (
		<div className="App">
			<h1>todo list {todos.length}</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={todo}
					type="text"
					placeholder="write sth .."
				/>
				<button>add to do</button>
			</form>
			<hr />
			<ul>
				{todos.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</div>
	);
}
export default Todo;
