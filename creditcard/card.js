const form = document.querySelector('#form');

form.addEventListener('submit', submitHandler);
var errorMsg = ''


function submitHandler(event) {
    event.preventDefault();
    console.log(this.cardNumber.value);

    mdate = parseInt(this.expMonth.value, 10);
    ydate = parseInt(this.expYear.value, 10);
    displayError('');
    var card_date = validateDate(mdate, ydate);

    if (isNaN(this.cardNumber.value)) {
        errorMsg = 'Card number in not valid\n';
    }
    else if (!isCardNumberValid(this.cardNumber.value)) {
        errorMsg = 'Card number is not a valid card number\n';
    }
    else if (!card_date) {
        errorMsg = 'Not a Valid Date';
    }
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false
    }
    return true

}

function isCardNumberValid(number) {
    return number === '4321432143214321';
}

function displayError(msg) {
    document.querySelector('#error-msg').innerHTML = msg;
}

function validateDate(mdate, ydate) {
    // console.log(ydate);
    const full_year = ydate + 2000;
    card_date = new Date(full_year, mdate -1, 1);
    current_date = new Date(Date.now());

    // console.log(card_date);
    // console.log(current_date);


    if (card_date > current_date) {
        return true
    }
    else {
        return false
    }
}

