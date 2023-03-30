function countBy(x, n) {
  const cnst = x;
  let z = [];
  let lastOrder = x*n;
  while(x <= lastOrder){
    z.push(x);
    x = x + cnst;
  }
  return z;
}