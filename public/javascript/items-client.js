/**
 * Created by cuongnd on 12/16/14.
 */

function openAddNewItem() {
    $.get('/items/new', function (data) {
            $('#new-item-box').html(data).fadeIn('fast');
            $('#overlay').show();
        }
    )
}

function closeAddNewItem() {
    $('#new-item-box').fadeOut('fast');
    $('#overlay').hide();
}

function addNewItem(e) {
    $.ajax(
        {
            type: 'POST',
            url: '/laptops/add',
            cache: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function(id) {
                alert("Product added successfully!");
                getLaptopAjax(false, id);
            },
            error: function (err) {
                console.log(err.status + ': ' + err.statusText);
            }
        });
    e.preventDefault();
}