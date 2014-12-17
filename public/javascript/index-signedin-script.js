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
    });
}

function setupItemsView() {
    $('#user-items').hover(function() {
        if ($('#user-items #delete-item').is(':hidden')) {
            $('#user-items #delete-item').show();
        } else {
            $('#user-items #delete-item').hide();
        }
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

/*
 * Shows items pie chart
 */
function toggleItemPieChart() {
    // Toggle chart and button text
    if ($('#items-pie-chart').children().length) {
        $('#items-pie-chart').children().remove();
        $('#show-items-pie-chart').text("Show Tradizon Statistics");
        return;
    }

    // Shows graph
    $.getJSON('/categories/stats', function(data) {
        $('#items-pie-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 1,
                plotShadow: false
            },
            title: {
                text: 'Item trading on Tradizon'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOption: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Items',
                data: data
            }]
        });
    });

    // Changes text on button
    $('#show-items-pie-chart').text("Hide Tradizon Statistics");
}

$(function() {
    loadCategories();
    loadOwnItem();
    setupItemsView();
});