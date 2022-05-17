var nameError = $('#nameError')
var discountError = $('#discountError')
var priceError = $('#priceError')

$(document).ready(function () {
    nameError.hide()
    discountError.hide()
    priceError.hide()
});

// service name validation
$('#serviceName').on('input', function (e) {
    var name = $(this).val();
    if(name == null || name == ''){
        nameError.text('Name cannot leave empty')
        nameError.show()
        $(this).css('border', '1px solid red');
    } else {
        nameError.text('')
        nameError.hide()
        $(this).css('border', 'none');
    }
});

// service discount validation
$('#discount').on('input', function (e) {
    var discount = $(this).val();
    if(discount == null || discount == ''){
        discountError.text('Discount cannot leave empty')
        discountError.show()
        $(this).css('border', '1px solid red');
    } else if(discount > 50){
        discountError.text('Discount cannot exceed 50%')
        discountError.show()
        $(this).css('border', '1px solid red');
    } else {
        discountError.text('')
        discountError.hide()
        $(this).css('border', 'none');
    }
});

// service name validation
$('#price').on('input', function (e) {
    var price = $(this).val();
    if(price == null || price == ''){
        priceError.text('Price cannot leave empty')
        priceError.show()
        $(this).css('border', '1px solid red');
    } else if(price == 0) {
        priceError.text('Price cannot be 0')
        priceError.show()
        $(this).css('border', '1px solid red');
    } else {
        priceError.text('')
        priceError.hide()
        $(this).css('border', 'none');
    }
});

// reset button
$("#btn_rm").click(function (e) { 
    nameError.hide()
    discountError.hide()
    priceError.hide()
    $('#serviceName').css('border', 'none');
    $('#discount').css('border', 'none');
    $('#price').css('border', 'none');
});

// submit validation
$('#insertForm').submit(function (e) { 
    var name = $('#serviceName').val()
    var discount = $('#discount').val()
    var price = $('#price').val()

    if(name == null || name == '' || discount == null || discount == '' || price == null || price == '') {
        $('#serviceName').css('border', '1px solid red');
        $('#discount').css('border', '1px solid red');
        $('#price').css('border', '1px solid red');
        e.preventDefault();
    } else {
        $('#serviceName').css('border', 'none');
        $('#discount').css('border', 'none');
        $('#price').css('border', 'none');
    }
});