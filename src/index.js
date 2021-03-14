module.exports = function toReadable (number) {

  const ones = [ '', 'one','two','three','four','five','six','seven','eight','nine' ];
  const ten = [ 'ten','eleven' ,'twelve' ,'thirteen' ,'fourteen' ,'fifteen' ,'sixteen' ,'seventeen' ,'eighteen' ,'nineteen' ];
  const tens = [ 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety' ];

  if(number == 0 ){
    return ('zero');
  }else if(number >= 0 && number <=9){
    return ones[number];
  }else if(number >= 10 && number <= 19){
    return ten[number - ten.length];
  }else if(number >= 20 && number <= 99){
    if(number%10 == 0){
      return tens[number / 10 - 2];
    }else{
      return `${tens[ (number - number%10) / 10 - 2]} ${ones[number%10]}`.trim();
    }
  }else if(number >= 100 && number <= 999){
    if(number%100 == 0){
      return `${ones[number/100]} hundred`.trim();
    }else{
      if(number%100 < 20){
        if(number%100 >= 0 && number%100 <=9){
          return `${ones[(number - number%10) / 100]} hundred ${ones[number%100]}`.trim();
        }else if(number%100 >= 10 && number%100 <= 19){
          return `${ones[(number - number%100) / 100]} hundred ${ten[number%100 - ten.length]}`.trim();
        }
      }else{
        return `${ones[(number - number%100) / 100]} hundred ${tens[Math.floor(number%100 / 10) - 2]} ${ones[number%10]}`.trim();
      }
    }
  }
}