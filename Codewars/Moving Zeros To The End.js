function moveZeros(arr) {
  let arrZeros = [];
  let basicArr = [];
  arr.forEach((item) =>
    item === 0 ? arrZeros.push(item) : basicArr.push(item)
  );
  let res = [...basicArr, ...arrZeros];
  return res;
}
