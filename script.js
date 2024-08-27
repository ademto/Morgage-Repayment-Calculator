$("#clear").click(() => {
    $('input[type="number"]').each(function() {
        $(this).val('');
    });

    $('input[type="radio"]').each(function() {
        $(this).prop('checked', false);
    });

    $('#empty').removeClass('hidden')
    $('#result').addClass('hidden')
})

$('.radio-container').click(function() {
    // Find the radio button within this container and check it
    const radioButton = $(this).find('input[type="radio"]');
    radioButton.prop('checked', true);
});

$('#button').click((e) => {
    e.preventDefault();
    var amount = parseFloat($('#mortgage-amount').val());
    var term = parseFloat($('#mortgage-term').val());
    var rate = parseFloat($('#interest-rate').val());
    var selectedValue = $('input[name="mortgage-type"]:checked').val();
    
    if (amount && term && rate && selectedValue){
        $('#empty').addClass('hidden')
        $('#result').removeClass('hidden');

        if (selectedValue === 'repayment') {
            var repayment = calculateRepayment(amount, term, rate);
            var totalRepayment = calculateTotalRepayment(amount, term, rate);
    
            $("#repayments").text(repayment.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            }));
            $("#total").text(totalRepayment.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            }));
    
            // $('input[name="mortgage-type"]:checked').parent().css('background-color', 'yellow');
        } else {
            var interest = calculateInterest(amount, rate);
            var totalInterest = calculateTotalInterest(amount, term, rate);
    
            $("#repayments").text(interest.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            }));
            $("#total").text(totalInterest.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            }));
        }
    }
    

    validateAndToggle('#amount-error', '#amount-span', amount);
    validateAndToggle('#term-error', '#term-span', term);
    validateAndToggle('#rate-error', '#rate-span', rate);

    if (selectedValue === undefined) {
        $("#radio-error").removeClass('hidden')
    } else {
        $("#radio-error").addClass('hidden')
    }

});

function validateAndToggle(inputId, spanId, value) {
    const isValid = !isNaN(value);
    
    // Toggle error message visibility
    $(inputId).toggleClass('hidden', isValid);
    
    // Toggle span background and text color based on validity
    $(spanId)
        .toggleClass('bg-gray-200 text-gray-500', isValid)
        .toggleClass('bg-red-600 text-white', !isValid);
}

function calculateRepayment(amount, term, rate) {
    const r = (rate * 0.01) / 12;
    const n = term * 12;
    return ((amount * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
}

function calculateTotalRepayment(amount, term, rate) {
    const n = term * 12;
    return calculateRepayment(amount, term, rate) * n;
}

function calculateInterest(amount, rate) {
    const r = (rate * 0.01) / 12;
    return amount * r;
}

function calculateTotalInterest(amount, term, rate) {
    const n = term * 12;
    return calculateInterest(amount, rate) * n;
}
