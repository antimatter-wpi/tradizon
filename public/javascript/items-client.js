/**
 * Created by cuongnd on 12/16/14.
 */

function addNewItem(e) {
    $.ajax(
        {
            type: 'POST',
            url: '/items/new',
            cache: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function(id) {
                alert("Item added successfully!");
            }
        });
    e.preventDefault();
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

function getOwnedItems(userId, callback) {
    $.get('/users/' + userId + '/owned_items', function(data) {
        callback(data);
    });
}

function getTradingItems(userId, callback) {
    $.get('/users/' + userId + '/trading_items', function(data) {
        callback(data);
    });
}