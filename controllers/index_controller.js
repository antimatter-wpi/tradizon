var models = require('../models');

/*
 * Render the homepage
 */
exports.index = function(req, res) {
    // Gets user_id from cookies
    var userIdFromCookie = req.cookies.user_id;

    models.User.find(userIdFromCookie)
        .then(function(user) {
            if (user) {
                // Redirects to the index page for signed in user
                res.render('index_signedin', {title: 'Welcome To Tradizon'});
            } else {
                // Renders to the index page for guest
                res.render('index', {title: "Welcome to Tradizon"});
            }
        });
};

/*
 * Renders a form for signing up
 */
exports.signup = function(req, res) {
    // Gets user_id from cookies
    var userIdFromCookie = req.cookies.user_id;

    models.User.find(userIdFromCookie)
        .then(function(user) {
            if (user) {
                // Redirects signed in user back to front page
                res.redirect('/');
            } else {
                // Renders sign in form for new user
                res.render('signup', {title :'Sign Up | Tradizon'});
            }
        });
};


/*
 * Renders a sign in form
 */
exports.signin = function(req, res) {
    // Gets user_id from cookies
    var userIdFromCookie = req.cookies.user_id;

    models.User.find(userIdFromCookie)
        .then(function(user) {
            if (user) {
                // Redirects signed in user back to front page
                res.redirect('/');
            } else {
                // Renders sign in form for new user
                res.render('signin', {title: 'Sign In | Tradizon'});
            }
        });
};
