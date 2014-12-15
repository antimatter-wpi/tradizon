var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller');

/*
 * GET /users
 */
router.get('/', user_controller.index);

module.exports = router;
