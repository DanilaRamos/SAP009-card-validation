const validator = {
  isValid: function(creditCardNumber) {
    const reversedCard = creditCardNumber.split("").reverse(); //A função reverse irá retornar os números da array ao contrário e o 
    //split separa a string em uma lista ordenada.

    let sum = 0;

    for (let i = 0; i < reversedCard.length; i++) {
      const numCard = parseInt(reversedCard[i]) //Verfificar e somar os números inteiros, depois do loop retornar os números inverso.

      if (i % 2 !== 0 && numCard >= 5) { //Multiplicar por 2 os números da posição par (maior que 5), se a soma for maior que 9, subtrair por 9
        sum = sum + (numCard * 2) - 9;
      }

      else if (i % 2 !== 0 && numCard <= 5) { //Multiplicar por 2 os números da posição par (menor que 5)
        sum = sum + (numCard * 2);
      }
      else {
        sum = sum + numCard; //Somar os dígitos e novos dígitos
      }

    }
    if (sum % 10 === 0) { //Dividir o total por 10 = 0
      return true
    }
    else {
      return false
    }
  },
  
  maskify: function (value) {
    return value.slice(0, -4).replace(/./g, "#") + value.slice(-4); //O 0 corresponde ao primeiro número da array e -4, os 4 último números, 
  //REPLACE - irá substituir os número que estão representados no VALUE por #, ou seja, valor = a "fatia" de - 4.
  }

};
export default validator;
 