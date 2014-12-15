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
	models.User.find({ 
		where: { 
			email: req.param('email')
		} 
	}).then(function(user) {
		console.log(req.param('password'));
		shasum.update(req.param('password'));
		var userTypedInPassword = shasum.digest('base64');
		console.log(user);
		console.log("digest password from user " + userTypedInPassword);
		// console.log("digest password on database " + user.password_digest);
		if (user && userTypedInPassword == user.password_digest) {
			console.log("EMAIL OF LOGGED IN USER" + user.email);
			res.redirect('/');
		} else {
			res.redirect('/signin');
		}
	});
}

/*
 * Destroys a session and logs a user out
 */
exports.destroy = function(req, res) {

}