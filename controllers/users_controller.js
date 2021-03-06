var models = require('../models'),
	crypto = require('crypto');

/*
 * Renders a page that shows all users
 */
exports.index = function(req, res) {
	models.User.findAll()
	.then(function(users) {
		res.render('users', { 
			title: 'All Users',
			users: users
		});
	});
};

/*
 * Renders a Jade template to show a user's info
 */
exports.show = function(req, res) {
	models.User.find(req.params.id)
	.then(function(user) {
		res.render('user', { user: user });
	})
}

/*
 * Creates new user
 */
exports.create = function(req, res) {
	var shasum = crypto.createHash('sha1');
	// Calculates the digest of given password
	var passwordDigest = shasum
						.update(req.param('password'))
						.digest('base64');
	
	// Creates new record for this user in the database
	models.User.create({
		email: 			 req.param('email'),
		phone: 			 req.param('phone'),
		address: 		 req.param('address'),
		password_digest: passwordDigest
	})
	.then(function() {
		// Do something after creating a user
		res.redirect('/');
	})
	.catch(function(err) {
		// Do something after failing to create a user
		res.redirect('/');
	});
};

/*
 * Shows all owned items of a user
 */
exports.showOwnedItems = function(req, res) {
	models.Item.findAll({ 
		where: { OwnerId : req.params.id } 
	})
	.then(function(items) {
		items.removable = true;
		res.render('items', {items: items});
	});
};

/*
 * Shows all trading of a user
 */
exports.showTradingItems = function(req, res) {
	models.Item.findAll({ 
		where: { TradeeId : req.params.id } 
	})
	.then(function(items) {
		res.send(items);
	});
};