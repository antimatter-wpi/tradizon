var models = require('../models');

/*
 * Renders a page that shows all users
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

/*
 * Creates new user
 */
exports.create = function(req, res) {
	models.User.create({
		email: req.param('email'),
		phone: req.param('phone'),
		address: req.param('address')
	}).success(function() {
		res.redirect('/users');
	});
}