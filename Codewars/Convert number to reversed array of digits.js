function digitize(n) {
  let number = n.toString();
  let arr = [...number].reverse();
  const arrOfNum = arr.map(str => {
    return Number(str);
  });
  return arrOfNum;
}