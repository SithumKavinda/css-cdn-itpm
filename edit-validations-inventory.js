// Error Providers
const name_error = $('.name_error')
const price_error= $('.price_error')
const qty_error= $('.qty_error')

$(document).ready(function () {
    name_error.hide()
    price_error.hide()
    qty_error.hide()
    name_error.text('');
    price_error.text('');
    qty_error.text('');
});

// Item name validations
$('input[name="item-name-insert"]').on('input', function (e) {
    var name = $(this).val();
    if(name == null || name == ''){
        name_error.text('Item Name cannot leave empty')
        name_error.show()
        $(this).css('border', '1px solid red');
    } else {
        name_error.text('')
        name_error.hide()
        $(this).css('border', 'none');
    }
});

// Purchased price validations
$('input[name="quantity-insert"]').on('input', function (e) {
    var name = $(this).val();
    if(name == null || name == ''){
        qty_error.text('Quantity cannot leave empty')
        qty_error.show()
        $(this).css('border', '1px solid red');
    } else {
        qty_error.text('')
        qty_error.hide()
        $(this).css('border', 'none');
    }
});

// Purchased price validations
$('input[name="purchased-price-insert"]').on('input', function (e) {
    var name = $(this).val();
    if(name == null || name == ''){
        price_error.text('Purchased price cannot leave empty')
        price_error.show()
        $(this).css('border', '1px solid red');
    } else {
        price_error.text('')
        price_error.hide()
        $(this).css('border', 'none');
    }
});

// button reset
$("#btn_rm").click(function (e) { 
    name_error.hide()
    price_error.hide()
    qty_error.hide()
    name_error.text('');
    price_error.text('');
    qty_error.text('');
    $('input[name="item-name-insert"]').css('border', 'none');
    $('input[name="quantity-insert"]').css('border', 'none');
    $('input[name="purchased-price-insert"]').css('border', 'none');
});

// submit validation
$('#edit-form').submit(function (e) { 
    var name = $('input[name="item-name-insert"]').val()
    var price = $('input[name="purchased-price-insert"]').val()
    var qty = $('input[name="quantity-insert"]').val()

    if(name == null || name == '' || price == null || price == '' || qty == null || qty == '') {
        $('input[name="item-name-insert"]').css('border', '1px solid red');
        $('input[name="quantity-insert"]').css('border', '1px solid red');
        $('input[name="purchased-price-insert"]').css('border', '1px solid red');
        e.preventDefault();
    } else {
        $('input[name="item-name-insert"]').css('border', 'none');
        $('input[name="quantity-insert"]').css('border', 'none');
        $('input[name="purchased-price-insert"]').css('border', 'none');
    }
});