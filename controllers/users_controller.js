var models = require('../models'),
	crypto = require('crypto'),
	shasum = crypto.createHash('sha1');

/*
 * Renders a page that shows all users
 */
exports.index = function(req, res) {
	models.User
	.findAll()
	.success(function(users) {
		res.render('users', {
			title: 'All Users',
			users: users
		});
	});
};

/*
 * Creates new user
 */
exports.create = function(req, res) {
	shasum.update(req.param('password'));
	
	models.User.create({
		email: req.param('email'),
		phone: req.param('phone'),
		address: req.param('address'),
		password_digest: shasum.digest('base64')
	})
	.success(function() {
		// Do something after create a user
		res.redirect('/users');
	})
	.error(function() {
		// Do something after failing to create a user
		res.redirect('/');
	});
};
