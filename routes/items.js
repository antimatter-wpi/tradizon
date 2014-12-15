var express = require('express');
var router = express.Router();
var items_controller = require('../controllers/items_controller');

/*
 * All route are prepended with /items/
 */

/*
 * GET a form for adding a new item
 */
router.get('/new', items_controller.new);

/*
 * POST information of an item and add to database
 */
router.post('/new', items_controller.create);

/*
 * GET information of an item
 */
router.get('/:id', items_controller.show);

/*
 * GET information of all items in a category
 */
router.get('/categories/:id', items_controller.showByCategory);

/*
 * DELETE an item in the database
 */
router.delete('/:id', items_controller.destroy);

module.exports = router;
