const validator = {
  isValid: function (cardNumber) {

    let sum = 0

    for (let it = cardNumber.length - 1; i >=0; i--) {
      const cardSize = cardNumber.length;
      const cardOffset = cardSize - i;

      const digit = parseInt (cardNumber[i])
      if (cardOffset % 2 == 0) {
        let double = digit * 2;
        let lastDigit = double % 10;
        let firstDigit = 0

        if (double >=10) {
          firstDigit = 1
        }
        sum = sum + firstDigit + lastDigit
      }
      else {
        sum = sum + digit
      }
      return sum % 10 === 0
    },

    maskify: function (value) {
      return value.slice(0, -4).replace(/./g, "#") + value.slice(-4);
    }
  }
};

export default validator;
 