function query(selector) { //assigned the selector of 'query' to a function.//
    return document.querySelector(selector)
}

function queryAll(selector) { //assigned the selector of 'queryAll' to a function.//
    return document.querySelectorAll(selector)
}

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

//insert Car Input here//

//insert DateParking Input here//

//----------------------------------------------------------------------------//
//BEGIN NUMBER OF DAYS//

query('#parking-form').addEventListener('submit', function(event) {

    let daysField = query('#days')
    let days = daysField.value.trim()

    if (!days) {
        daysField.parentNode.classList.remove('input-valid')
        daysField.parentNode.classList.add('input-invalid')

    } else {
        daysField.parentNode.classList.remove('input-invalid')
        daysField.parentNode.classList.add('input-valid')
    }
})

//END NUMBER OF DAYS INPUT//
//----------------------------------------------------------------------------//