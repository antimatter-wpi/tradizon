var models = require('../models');

/*
 * Returns all categories object
 */
exports.index = function(req, res) {
	models.Category.findAll()
	.then(function(categories) {
		res.send(categories);
	});
};

/*
 * Returns a category corresponding to the given id
 */
exports.show = function(req, res) {
	models.Category.find(req.params.id)
	.then(function(category) {
		res.send(category);
	});
}

/*
 * Creates a new category
 */
exports.new = function(req, res) {
	// Lowercases category name to ensure consistency
	var categoryName = req.param('categoryName').toLowerCase();

	// Creates a category with the given name
	models.Category.create({
		name: categoryName
	});
};

/*
 * Deletes a category
 */
exports.destroy = function(req, res) {
	// Finds the category need to be removed
	models.Category.find(req.params.id)
	.then(function(category) {

		// Removes the category
		category.destroy()
		.then(function() {
			// Do something after delete categories
			res.redirect('/');
		})
	})
};