var express = require('express'),
    router = express.Router(),
    index_controller = require('../controllers/index_controller.js'),
	sessions_controller = require('../controllers/sessions_controller.js');
    users_controller = require('../controllers/users_controller.js');

/*
 * GET home page
 */
router.get('/', index_controller.index);

/*
 * GET sign in page
 */
router.get('/signin', index_controller.signin);

/*
 * POST information and sign the user in
 */
router.post('/signin', sessions_controller.create);

/*
 * GET sign up page
 */
router.get('/signup', index_controller.signup);

/*
 * POST user information to sign up
 */
router.post('/signup', users_controller.create);

/*
 * GET sign a user out
 */
router.get('/signout', sessions_controller.destroy);

module.exports = router;
