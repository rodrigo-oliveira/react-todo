import React from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 0, isDone: true,  text: 'Item 1' },
				{ id: 1, isDone: false, text: 'Item 2' },
				{ id: 2, isDone: false, text: 'Item 3' }
			]
		};
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	updateItems(items) {
		console.log(items);
		this.setState({
			todos: items
		});
	}

	addItem(item) {
		const todos = this.state.todos;

		todos.push({
			id: todos.length+1,
			isDone: false,
			text: item
		});

		this.updateItems(todos);
	}

	removeItem(item) {
		const todos = this.state.todos;
		const todo = this.state.todos.filter((todo) => todo.id !== item.id);

		this.updateItems(todo);

	}

  render() {
		return (
			<main className='todo'>
				<TodoHeader />
				<TodoForm onFormSubmit={this.addItem} />	 
				<TodoList todos={this.state.todos} onRemove={this.removeItem} />
			</main>
		);
  }
}

export default TodoApp;
