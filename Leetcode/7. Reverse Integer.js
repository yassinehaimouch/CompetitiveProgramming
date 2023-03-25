var reverse = function(x) {
  let xnegative = -1*x;
  let xarrp = x.toString().split('')
  let xarrn = xnegative.toString().split('');
  let resp = parseInt(xarrp.reverse().join(''));
  let resn = parseInt(xarrn.reverse().join(''));
  if(x < 0){
      if(2147483647 < resn || resn < -2147483648){
          return 0;
      }
      return -1 * resn;
  }
  else if(2147483647 < resp || resp < -2147483648 ){
      return 0
  }
  else 
      return resp;
  
};