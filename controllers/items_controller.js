var models = require('../models');
var formidable = require('formidable');
var path = require('path');

/*
 * Sends back all items
 */
exports.index = function(req, res) {
	models.Item.findAll()
	.then(function(items) {
		res.render('items', {items: items});
	});
};

/*
 * Render a form for adding a new item
 */
exports.new = function(req, res) {
	models.Category.findAll()
		.then(function(categories) {
			res.render('new_item', { categories: categories });
		});
};

/*
 * Creates new item
 */
exports.create = function(req, res) {
	var form = new formidable.IncomingForm();

	form.uploadDir = __dirname + '/../public/img/items';
	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {

		fields.photo = '/img/items/' + path.basename(files.photo.path);
		models.Item.create({
			photo: 		 fields.photo,
			title: 		 fields.title,
			description: fields.description,
			OwnerId:	 fields.ownerid,
			CategoryId:  fields.categoryId
		})
		.then(function() {
			// TODO do something after creating new item
			res.end();
		});

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
		where: { CategoryId: req.params.id }
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


