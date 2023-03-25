var fizzBuzz = function(number) {
  const arr = [];
    for(i = 1; i <= number; i++){
      
      if(i % 3 == 0 && i % 5 == 0){
        arr.push("FizzBuzz");
      }
  
     else if(i % 3 == 0) {
        arr.push("Fizz");
      }
      else if(i % 5 == 0){
        arr.push("Buzz");
      }
      
      else
        arr.push(i.toString());
    }
    return arr;
  }