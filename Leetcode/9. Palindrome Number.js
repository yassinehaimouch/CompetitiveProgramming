var isPalindrome = function(x) {
  const num = x.toString().split('').reverse().join('');
    if(x > 0)
    {
      if(x == num)
         return true;
      else
        return false;
    }
    else if(x==0){
      return true;
    }
    else if(x < 0 ){
      return false;
    }
};