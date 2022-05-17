// Prepare the document
$(document).ready(function () {
    $('#error').hide();
    $('#total-amount').val().toFixed(2)
});

// paid amount validation on input
$('#paidAmount').on('input', function () {
    var paid = $(this).val();
    var total = $('#total-amount').val();
    
    // Calculate balnce
    var balance = paid - total
    
    // empty validation
    if(paid == null || paid == '') {
        $('#error').text('Can\'t leave empty');
        $('#error').show();
        $(this).css('border', '1px solid red');
    // lower than total amount validation
    } else {
        $('#error').text('');
        $('#error').hide();
        $(this).css('border', 'none');
        // Set balance
        $('#balance-amount').val(balance.toFixed(2));
    }
});

$('#cashForm').submit(function (e) { 
    var paid = $('#paidAmount').val();

    if(paid == null || paid == ''){
        e.preventDefault()
        $('#error').text('Can\'t leave empty');
        $('#error').show();
        $('#paidAmount').css('border', '1px solid red');
    } else {
        $('#error').text('');
        $('#error').hide();
        $('#paidAmount').css('border', 'none');
    }
});