'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HomePage = require('./components/homePage');
var AboutPage = require('./components/about/about');
var App = require('./components/app');
var TodoPage = require('./components/todos/todoPage');
var ManageTodoPage = require('./components/todos/manageTodos')

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/todos" component={TodoPage} />
		<Route path="/manage-todo" component={ManageTodoPage} />

	</Route>
);

module.exports = routes;
