/**
 * Created by cuongnd on 12/16/14.
 */

function openAddNewItem() {
    $.get('/items/new', function (data) {
            $('#new-item-box').html(data).fadeIn('fast');
            $('#overlay').show();
            $('#ownerid').attr('value', $.cookie('user_id'));
            $('#add-form').submit(function(e) {
                addNewItem(new FormData($(this)[0]), function() {
                    closeAddNewItem();
                    loadItemsByActiveCategory();
                    loadOwnItem();
                });
                e.preventDefault();
            });
        }
    )
}

function closeAddNewItem() {
    $('#new-item-box').fadeOut('fast');
    $('#overlay').hide();
}

function loadOwnItem() {
    getOwnedItems(function(html) {
        $('#user-items').html(html);
    });
}

function loadCategories() {
    getAllCategories(function(html) {
        $('#categories').html(html);
        loadItemsByActiveCategory();
    });
}

function loadItemsByActiveCategory() {
    var categoryId = $('li.active a').attr('name');
    getItemsByCategory(categoryId, function(html) {
        $('#browse-item').html(html);
    });
}

function selectCategory(categoryId) {
    $('#categories ul li').removeClass('active');
    $('li#category-' + categoryId).addClass('active');
    loadItemsByActiveCategory()
}

$(function() {
    loadCategories();
    loadOwnItem();
});