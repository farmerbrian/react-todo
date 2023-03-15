import React, { Component } from 'react';
import TodoList from './TodoList.js';
import './App.css';
import NewTodoForm from './NewTodoForm.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);
	}
}

export default App;
