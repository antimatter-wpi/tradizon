var express = require('express');
var router = express.Router();
var items_controller = require('../controllers/items_controller.js'),
	categories_controller = require('../controllers/categories_controller.js');

/* 
 * =====================================
 * ==== NOTE
 * =====================================
 * All route are prepended with /items/
 * The order of the routes is important
 * =====================================
 */

/*
 * GET all items
 */
router.get('/', items_controller.index);

/*
 * GET a form for adding a new item
 */
router.get('/new', items_controller.new);

/*
 * POST information of an item and add to database
 */
router.post('/new', items_controller.create);

/*
 * GET all categories
 */
router.get('/categories', categories_controller.index);

/*
 * GET a form to create new category
 */
router.get('/categories/new', categories_controller.new);

/*
 * POST information to create new category
 */
router.post('/categories/new', categories_controller.create);

/*
 * GET information of all items in a category
 */
router.get('/categories/:id', items_controller.showByCategory);

/*
 * GET information of an item
 */
router.get('/:id', items_controller.show);

/*
 * DELETE an item in the database
 */
router.delete('/:id', items_controller.destroy);

module.exports = router;
