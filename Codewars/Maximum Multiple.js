function maxMultiple(divisor, bound){
  let arr = [];
  for(let i = 0; i <= bound; i++){
    if(i % divisor === 0){
      arr.push(i);
    }
  }
  return arr[arr.length - 1]
}