//---------------------------------------------------------------------------------//

function query(selector) { //assigned the selector of 'query' to a function.//
    return document.querySelector(selector)
}

function queryAll(selector) { //assigned the selector of 'queryAll' to a function.//
    return document.querySelectorAll(selector)
}

function markValid(field) {
    // created a function that, when seen as 'valid',
    // removes 'invalid status' and adds 'valid status'.
    field.classList.remove('input-invalid')
    field.classList.add('input-valid')
        // ** Attempted 'field.parentNode.classList...' here and failed
        // due to Name Input having the parentNode of the entire form.
        // So instead of validating Name Input only, it went to everything.**
}



function markInvalid(field, errorMessage) {
    // created a function that, when seen as 'invalid',
    // removes the 'valid' status and adds 'invalid' status.
    field.classList.remove('input-valid')
    field.classList.add('input-invalid')
        // ** no parentNode **

    if (errorMessage) {
        // "if" there are error messages...

        let errorElement = document.createElement('p')
            // ...then declare that 'error' creates a new paragraph element.

        errorElement.classList.add('input-hint', 'text-danger', 'error-message')
        errorElement.innerText = errorMessage
        field.appendChild(errorElement)
            // After element is created on 'errorElement' bind, 
            // 'errorElement' adds messages to list of classes.
            // Finally adding the paragraph containing the error message.
    }
}

function errorClear() {
    // Created a function for clearing error messages.
    let errorWipe = queryAll('.text-danger')
        // 'errors' is now set to the Boot-strap default of 'red' because '.text-danger' is red.
    for (let i = 0; i < errorWipe.length; i++) {
        errorWipe[i].remove()
    } // Created a for-loop in which, starting at 0, runs through the 
    // selection until all of 'errors_value' is removed.
}


//----------------------------------------------------------------------------//NAME_INPUT//


query('#parking-form').addEventListener('submit', function() {
    event.preventDefault()
        // Creating the function that adds and Event Listener of 'submit' to 
        // the form. As well as preventing the default of refreshing the form 
        // after 'submit' is clicked.

    errorClear()
        // Recalling the function to clear all the error messages.

    let nameField = query('#name-field')
    let name = query('#name').value
        // Declaring all of the variables and thier 'pathways' for later use.

    if (!name) {
        markInvalid(nameField, 'Missing Required Information')
    } else {
        markValid(nameField)
    }


    //----------------------------------------------------------------------------//CAR_INPUT//

    let carField = query('#car-field')
    let carYear = query('#car-year').value
    let carMake = query('#car-make').value
    let carModel = query('#car-model').value
        // Declaring all of the variables and thier 'pathways' for later use.

    if (!carYear || !carMake || !carModel) {
        markInvalid(carField)
    } else {
        markValid(carField)
            // Created an if/else statement with '||' equaling 'or', so that 
            // the value of each input is required to continue.
    }

    if (!carYear) {
        markInvalid(carField, 'Invalid Year')
    }

    if (!carMake) {
        markInvalid(carField, 'Invalid Make')
    }

    if (!carModel) {
        markInvalid(carField, 'Invalid Model')
    }
    // 

    //----------------------------------------------------------------------------//DATE_PARKING_INPUT//

    let dateField = query('#start-date-field')
    let dateText = query('#start-date')
    let date = dateText.value.trim()

    if (!date) {
        markInvalid(dateField, 'Invalid Date')
    } else {
        markValid(dateField)
    }

    //----------------------------------------------------------------------------//NUMBER_OF_DAYS_INPUT//


    let daysField = query('#days-field')
    let daysText = query('#days')
    let days = daysText.value.trim()
        // Declaring that 'daysField' binds to the input of '#days' 
        // and days is equal to the value of said input.

    if (!days) {
        markInvalid(daysField, 'Missing Required Information')
    } else {
        markValid(daysField)
    }
    // Created 'if/else' stating that 'if' days input is empty, mark invalid
    // or 'else' mark valid.


    //----------------------------------------------------------------------------//CREDIT_CARD_INPUT//

    let cardField = query('#credit-card-field')
    let cardText = query('#credit-card')
    let card = cardText.value.trim()

    if (!card) {
        markInvalid(cardField, 'Invalid Card Number')
    } else {
        markValid(cardField)
    }

    //----------------------------------------------------------------------------//CVV_INPUT//

    let cvvField = query('#cvv-field')
    let cvvText = query('#cvv')
    let cvv = cvvText.value.trim()

    if (!cvv) {
        markInvalid(cvvField, 'Missing Valid CVV')
    } else {
        markValid(cvvField)
    }

    //----------------------------------------------------------------------------//EXPIRATION_INPUT//

    let expField = query('#expiration-field')
    let expText = query('#expiration')
    let exp = expText.value.trim()

    if (!exp) {
        markInvalid(expField, 'Missing Valid Expiration')
    } else {
        markValid(expField)
    }

})

//----------------------------------------------------------------------------//