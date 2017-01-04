import React from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 0, isDone: true,  text: 'make components' },
				{ id: 1, isDone: false, text: 'design actions' },
				{ id: 2, isDone: false, text: 'implement reducer' },
				{ id: 3, isDone: false, text: 'connect components' }
			]
		};
		this.updateItems = this.updateItems.bind(this);
	}

	updateItems(item) {
		const todos = this.state.todos;

		todos.push({id:todos.length+1, isDone: false, text: item});

		this.setState({
			todos: todos
		})
	}

  render() {
		return (
			<main className='todo'>
				<TodoHeader />
				<TodoForm onFormSubmit={this.updateItems} />	 
				<TodoList todos={this.state.todos} />
			</main>
		);
  }
}

export default TodoApp;
