'use strict';

var React = require('react');
var Header = require('./common/header');

var App = React.createClass({
	render: function () {
		console.log(this.props.children);
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);

	}
});

module.exports = App;