import React from 'react';

class TodoForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {item:''};
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

  render() {
    return (
    	<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.item} onChange={this.onChange.bind(this)} />
				<button type='submit'>Add</button>
			</form>
    );
  }

  onChange(e) {
	  this.setState({
  	  item: e.target.value
  	});	
  }

  handleSubmit(e) {
  	e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
        // React.findDOMNode(this.refs.item).focus();
        // return;
  }
}

export default TodoForm;
