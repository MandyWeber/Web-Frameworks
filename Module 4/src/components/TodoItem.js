import React from 'react'



const TodoItem = (props) => {
	return (
		<div className="todo-item border-inline shadow" key={props.index}>
			{props.todo.done
				? <del>{props.todo.name}</del>
				: <p>{props.todo.name}</p>
			}
			<input type="checkbox" checked={props.todo.done} onChange={props.mark} />
		</div>
	)
}

export default TodoItem
