var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller');

/*
 * GET /users
 */
router.get('/', user_controller.index);

/*
 * POST /users/new
 */
router.post('/new', user_controller.create);

module.exports = router;
