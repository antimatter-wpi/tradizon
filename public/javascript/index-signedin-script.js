/**
 * Created by cuongnd on 12/16/14.
 */

function openAddNewItem() {
    $.get('/items/new', function (data) {
            $('#new-item-box').html(data).fadeIn('fast');
            $('#overlay').show();
            console.log("User id: " + $.cookies);
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

function setupItemsView() {
    $('#user-items').hover(
        function() {
            $('#delete-item').show();
    }, function() {
        $('#delete-item').hide();
    });
}

function closeAddNewItem() {
    $('#new-item-box').fadeOut('fast');
    $('#overlay').hide();
}

function loadOwnItem() {
    getOwnedItems(function(html) {
        console.log(html);
        $('#user-items').html(html);
    });
}

/*
 * Deletes an item from the database and
 * removes it from the site dynamically
 */
function deleteItem(itemId) {
    $.ajax({
        type: 'DELETE',
        url: '/items/' + itemId,
        success: function() {
            removeItemFromPage(itemId);
        }
    });
}

/*
 * Deletes the all instances of an item from page
 */
function removeItemFromPage(itemId) {
    $('div[data-item-id=' + itemId + ']').remove();
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
    $('li#category-'+categoryId).addClass('active');
    loadItemsByActiveCategory()
}

$(function() {
    loadCategories();
    loadOwnItem();
    setupItemsView();
});