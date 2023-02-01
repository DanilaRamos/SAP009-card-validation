const validator = {
  isValid: function(creditCardNumber) {

    let sum = 0;
    let shoulDouble = false;

    for (let i = creditCardNumber.length - 1; i >= 0; i--) { // percorre os valores começando no lado mais à direita
      let digit = parseInt(creditCardNumber[i]); //Fazer a soma do número inteiros

      if (shoulDouble % 2 === 0) { //Multiplicar os números 
        if ((digit *= 2) > 9) //Após fazer a a multiplicação será necessário verificar se não há número maior que 9, caso haja é necessário 
          digit - 9; //subtrair por 9
      } 

      sum += digit; //Somar os dígitos e novos dígitos
      shoulDouble = !shoulDouble; 
    } 

    return sum % 10 === 0; 
  },
  
  maskify: function (value) {
    return value.slice(0, -4).replace(/./g, "#") + value.slice(-4); //O 0 corresponde ao primeiro número da array e -4, os 4 último números, 
  //REPLACE - irá substituir os número que estão representados no VALUE por #, ou seja, valor = a "fatia" de - 4.
  }

};
export default validator;
 