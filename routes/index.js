var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index_controller.js');

/*
 * GET home page.
 */
router.get('/', index_controller.index);

/*
 * GET sign in page.
 */
router.get('/signin', index_controller.signin);

/*
 * POST sign information and sign the user in
 *
 * router.post('/signin', items_controller.new())
 */

module.exports = router;
