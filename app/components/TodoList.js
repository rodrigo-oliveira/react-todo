import React from 'react';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props;
	}

  remove(id, e) {
  	const item = this.state.todos.filter((todo) => todo.id === id);

  	e.preventDefault();
  	this.props.onRemove(item[0]);
  }

	render() {	
		const itemsList = this.state.todos.map((todo) => {
			let text = todo.text;

			if(todo.isDone) {
				text = <strike>{todo.text}</strike>;
			} 

		  return (
		  	<li className='todo__item' key={todo.id}>
		  		<span>{text}</span>
					<button className='todo__button' onClick={this.remove.bind(this, todo.id)}>Remove</button>
		  	</li>
		  );
		});

	  return (
      <ul className='todo__list'>
      	{itemsList}
      </ul>
	  );
	}
}

export default TodoList;