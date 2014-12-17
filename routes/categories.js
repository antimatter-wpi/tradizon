var express = require('express'),
	router = express.Router(),
	categories_controller = require('../controllers/categories_controller.js');

/*
 * GET all categories as array of category and number of items
 */
router.get('/categories_stats', categories_controller.getItemsStats);
