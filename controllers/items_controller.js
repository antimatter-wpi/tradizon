var models = require('../models');

/*
 * Render a form for adding a new item
 */
exports.new = function(req, res) {
};

/*
 * Creates new item
 */
exports.create = function(req, res) {
};

/*
 * Get information of an item
 */
exports.show = function(req, res) {
};

/*
 * Get all items in a category
 */
exports.showByCategory = function(req, res) {
	models.Item.findAll({ 
		where: { CategoryId: req.param.id } 
	})
	.then(function(items) {
		res.send(items);
	});
};

/*
 * Delete an item
 */
exports.destroy = function(req, res) {
};


