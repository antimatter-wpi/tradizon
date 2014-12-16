var models = require('../models');

/*
 * Render a form for adding a new item
 */
exports.new = function(req, res) {
	res.render('new_item');

};

/*
 * Creates new item
 */
exports.create = function(req, res) {
	models.Item.create({
		photo: 		 req.param('photo'),
		title: 		 req.param('title'),
		description: req.param('description')
	})
	.then(function() {
		// TODO do something after creating new item
		res.end();
	});
};

/*
 * Get information of an item
 */
exports.show = function(req, res) {
	models.Item.find(req.params.id)
		.then(function(data) {
			res.render('items', {items: [data]});
		})
};

/*
 * Get all items in a category
 */
exports.showByCategory = function(req, res) {
	models.Item.findAll({ 
		where: { CategoryId: req.param.id } 
	})
	.then(function(data) {
		res.render('items', {items: data});
	});
};

/*
 * Delete an item
 */
exports.destroy = function(req, res) {
	// Finds the item that needs to be deleted
	model.Item.find(req.params.id)
	.then(function(item) {

		// Deletes that item from the database
		item.destroy()
		.then(function() {
			// TODO do something after delete the item here
		})
	});
};


