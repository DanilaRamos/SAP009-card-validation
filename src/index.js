import validator from './validator.js';

const botton = document.getElementById("enviar");
botton.addEventListener("click", validation)

function validation () {
  const creditCardNumber = document.getElementById("creditCardNumber").value; //Perguntar o número do cartão
  (validator.isValid(creditCardNumber));

  if (creditCardNumber === "") { 
    alert("Preencha todos os campos")
  }

  else if (isNaN(creditCardNumber)) {
    alert("Digite somente números")
  }

  else if (!validator.isValid(creditCardNumber)) {
    alert("Cartão inválido!")
  }

  else {
    alert(`Cartão ${validator.maskify(creditCardNumber)} válido!`)
  }
}