var express = require('express'),
    router = express.Router(),
    index_controller = require('../controllers/index_controller.js'),
	sessions_controller = require('../controllers/sessions_controller.js');

/*
 * GET home page
 */
router.get('/', index_controller.index);

/*
 * GET sign in page
 */
router.get('/signin', index_controller.signin);

/*
 * POST sign information and sign the user in
 */
router.post('/signin', sessions_controller.create);

/*
 * GET sign up page
 */
router.get('/signup', index_controller.signup);

/*
 * DELETE sign a user out
 */
router.delete('/signout', sessions_controller.destroy);

module.exports = router;
