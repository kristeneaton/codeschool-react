'use strict';

var React = require('react');


var TodoList = React.createClass({

	getInitialState: function () {
		return {
			todos: []
		}
	},

componentWillMount: function () {
	this.setState({
		todos: todoApi.getAllTodos()
	});
},

render: function () {
	var createTodoRow = function (todo) {
		return (
			<tr key={todo.id}>
				<td>{todo.id}</td>
				<td>{todo.title}</td>
				<td>{todo.description}</td>
			</tr>
		);
	};
	return (
		<table className="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Description</th>
				</tr>
			</thead>
		</table>

		)
}