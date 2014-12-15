var models = require('../models'),
	crypto = require('crypto'),
	shasum = crypto.createHash('sha1');

/*
 * Renders a sign in form
 */
exports.new = function(req, res) {
	res.render("sessions_form");
}

/*
 * Creates a session and logs a user in
 */
exports.create = function(req, res) {
	var userEmail = req.param('email').toLowerCase();
	var userPassword = req.param('password');

	models.User.find({ 
		where: { 
			email: userEmail
		} 
	})
	.then(function(user) {
		// Hash the typed in password from user
		shasum.update(userPassword);
		var hashedUserTypedInPassword = shasum.digest('base64');

		if (user && hashedUserTypedInPassword == user.password_digest) {
			// Store user's id in cookie
			res.cookie('user_id', user.id);
			res.redirect('/');
		} else {
			// Do something after user fails logging in
			res.redirect('/signin');
		}
	});
}

/*
 * Destroys a session and logs a user out
 */
exports.destroy = function(req, res) {

}