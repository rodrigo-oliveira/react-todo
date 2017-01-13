import React from 'react';

class TodoForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			item: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}	

  onChange(e) {
	  this.setState({
  	  item: e.target.value
  	});	
  }

  handleSubmit(e) {
  	e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({
    	item: ''
    });
  }

  render() {
    return (
    	<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.item} onChange={this.onChange} />
				<button type='submit'>Add</button>
			</form>
    );
  }  
}

export default TodoForm;
