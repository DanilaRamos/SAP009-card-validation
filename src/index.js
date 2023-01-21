import validator from './validator.js';

function validation () {
    
    let cardNumber = document.getElementById("cardNumber").value;
    console.log(validator.isValid(cardNumber));
    let number = document.querySelector("cardNumber");

    if (cardNumber === "") {
        alert("Preencha todos os campos")
    }

    else if (isNaN(cardNumber)) {
        alert("Digite somente números")
    }

    else if (!validator.isValid(cardNumber)) {
        alert("Cartão inválido!")
    }

    else {
        alert("Cartão " + validator.maskify(cardNumber) + " válido!")
    }
}

console.log(validator);
