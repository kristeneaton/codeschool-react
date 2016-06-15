'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render: function() {
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Todo App</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/todos">Todos</Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Header;