/**
 * Created by cuongnd on 12/16/14.
 */

function addNewItem(formData, callback) {
    $.ajax(
        {
            type: 'POST',
            url: '/items/new',
            cache: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function() {
                alert("Item added successfully!");
                callback();
            }
        });
}

function getAllCategories(callback) {
    $.get('/items/categories', function(data){
        callback(data);
    });
}

function getAllItem() {
    $.get('/items', function(data) {
        callback(data);
    });
}

function getItemsByCategory(categoryId, callback) {
    $.get('/items/categories/' + categoryId, function(data) {
        callback(data);
    });
}

function getAnItem(itemId, callback) {
    $.get('/items/' + itemId, function(data) {
        callback(data);
    });
}

function getOwnedItems(callback) {
    $.get('/users/' + $.cookie('user_id') + '/owned_items', function(data) {
        callback(data);
    });
}

