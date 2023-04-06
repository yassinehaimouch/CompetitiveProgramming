function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    const power = Math.pow(2, i);
    arr.push(power);
  }
  return arr;
}
