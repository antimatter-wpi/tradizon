var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller');

/*
 * All route are prepended with /users/
 */

/*
 * GET all users
 */
router.get('/', user_controller.index);

/*
 * POST user information to sign up
 */
router.post('/new', user_controller.create);

/*
 * GET information of an user
 */
router.get('/:id', user_controller.show);

/*
 * GET information of all owned items of an user
 */
router.get('/:id/owned_items', user_controller.showOwnedItems);

/*
 * GET information of all trading items of an user
 */
router.get('/:id/trading_items', user_controller.showTradingItems);

/*
 * router.delete('/:id', user_controller.);
 */

module.exports = router;
