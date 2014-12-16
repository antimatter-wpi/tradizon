/**
 * Created by cuongnd on 12/16/14.
 */

function openAddNewItem() {
    $.get('/items/new', function (data) {
            $('#new-item-box').html(data).fadeIn('fast');
            $('#overlay').show();
            $('#add-form').submit(function(e) {addNewItem(e)});
        }
    )
}

function closeAddNewItem() {
    $('#new-item-box').fadeOut('fast');
    $('#overlay').hide();
}

function loadCategories() {
    getAllCategories(function(html) {
        $('#categories').html(html);
    });
}

function loadItemsByCategory(categoryId) {
    getItemsByCategory(categoryId, function(html) {
        $('#browse-item').html(html);
    });
}

$(function() {
   loadCategories();
   loadItemsByCategory($('li.active').attr('name'));
});