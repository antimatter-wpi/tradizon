var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/users_controller');

/*
 * All route are prepended with /users/
 */

/*
 * GET all users
 */
router.get('/', users_controller.index);

/*
 * GET sign up page
 */
router.get('/new', users_controller.new);

/*
 * POST user information to sign up
 */
router.post('/new', users_controller.create);

/*
 * GET information of an user
 */
// router.get('/:id', users_controller.show);

/*
 * GET information of all owned items of an user
 */
router.get('/:id/owned_items', users_controller.showOwnedItems);

/*
 * GET information of all trading items of an user
 */
router.get('/:id/trading_items', users_controller.showTradingItems);

/*
 * router.delete('/:id', items_controller.);
 */

module.exports = router;
