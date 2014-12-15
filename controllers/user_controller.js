var models = require('../models');

/*
 * Render a page that shows all users
 */
exports.index = function(req, res) {
	models
	.User
	.findAll()
	.success(function(users) {
		res.render('users', {
			title: 'All Users',
			users: users
		});
	});
}