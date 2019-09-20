//----------------------------------------------------------------------------//

function query(selector) { //assigned the selector of 'query' to a function.//
    return document.querySelector(selector)
}

function queryAll(selector) { //assigned the selector of 'queryAll' to a function.//
    return document.querySelectorAll(selector)
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

//BEGIN NAME INPUT//

query('#parking-form').addEventListener('submit', function(event) {
    //calls back the selector as declared above and selects 'id parking-form',
    //then adds an eventListener of 'submit' to it.//
    event.preventDefault()
        //'preventDefault' prevents the 'default' action of the form.//

    let nameField = query('#name') //declaration of the input to a 'keyword'.//
    let nameText = nameField.value.trim() //declaration that labels the outcome of the declared input above.//

    if (!nameText) { //creates the event that is "not" in the input.//
        nameField.parentNode.classList.remove('input-valid')
            //allows for change based on input being NOT valid... which means it is false.//
        nameField.parentNode.classList.add('input-invalid')
            //allows for change based on input being NOT invalid... which means it is true.//
    } else {
        nameField.parentNode.classList.remove('input-invalid')
        nameField.parentNode.classList.add('input-valid')
            //creates the opposite change of previous change above. 'IF' input is flase, change to invalid. 'ELSE' change it to valid.//
    }
})

//END NAME INPUT//

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

//BEGIN CAR INPUT//

query('#parking-form').addEventListener('submit', function() {

            let yearField = query()

        }

        //END CAR INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//


        //BEGIN DATE PARKING INPUT//

        //END DATE PARKING INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//

        //BEGIN NUMBER OF DAYS//

        query('#parking-form').addEventListener('submit', function(event) {

            let daysField = query('#days')
            let daysText = daysField.value.trim()

            if (!daysText) {
                daysField.parentNode.classList.remove('input-valid')
                daysField.parentNode.classList.add('input-invalid')

            } else {
                daysField.parentNode.classList.remove('input-invalid')
                daysField.parentNode.classList.add('input-valid')
            }
        })

        //END NUMBER OF DAYS INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//

        //BEGIN CREDIT CARD INPUT//

        query('#parking-form').addEventListener('submit', function(event) {

            let cardField = query('#credit-card')
            let cardText = cardField.value.trim()

            if (!cardText) {
                cardField.parentNode.classList.remove('input-valid')
                cardField.parentNode.classList.add('input-invalid')
            } else {
                cardField.parentNode.classList.remove('input-invalid')
                cardField.parentNode.classList.add('input-valid')
            }
        })

        //END CREDIT CARD INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//

        //BEGIN CVV INPUT//

        query('#parking-form').addEventListener('submit', function(event) {

            let cvvField = query('#cvv')
            let cvvText = cvvField.value.trim()

            if (!cvvText) {
                cvvField.parentNode.classList.remove('input-valid')
                cvvField.parentNode.classList.add('input-invalid')
            } else {
                cvvField.parentNode.classList.remove('input-invalid')
                cvvField.parentNode.classList.add('input-valid')
            }
        })

        //END CVV INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//

        //BEGIN EXPIRATION INPUT//

        query('#parking-form').addEventListener('submit', function() {

            let expField = query('#expiration')
            let expText = expField.value.trim()

            if (!expText) {
                expField.parentNode.classList.remove('input-valid')
                expField.parentNode.classList.add('input-invalid')
            } else {
                expField.parentNode.classList.remove('input-invalid')
                expField.parentNode.classList.add('input-valid')
            }
        })

        //END EXPIRATION INPUT//

        //----------------------------------------------------------------------------//
        //----------------------------------------------------------------------------//