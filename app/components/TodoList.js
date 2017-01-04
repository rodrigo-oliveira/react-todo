import React from 'react';

class TodoList extends React.Component {
	render() {
		const itemsList = this.props.todos.map(function(todo){
			let text = todo.text;

			if(todo.isDone) {
				text = <strike>{todo.text}</strike>;
			} 

		  return <li className='todo__item' key={todo.id}>{text}</li>
		});

	  return (
      <ul className='todo__list'>
      	{itemsList}
      </ul>
	  );
	}
}

export default TodoList;