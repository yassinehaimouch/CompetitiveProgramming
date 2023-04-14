const LM = parseInt(readLine());
const LK = parseInt(readLine());
const Message = readLine().split(' ');
const keyword = readLine();

// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabet = /^[a-zA-Z]+$/;
let str = [keyword];
let arr = [];
let res = [];

for(let i = 0; i < LM - keyword.length; i++){
  str.push(keyword[i]); 
}

let strstr = str.join('').split('');

for(let i = 0; i < LM; i++){
  arr.push(parseInt(Message[i]) - alphabet.indexOf(strstr[i]));
}

for(let i = 0; i < arr.length; i++){
  res.push(alphabet[arr[i]]);
}

console.log(res.join(''))