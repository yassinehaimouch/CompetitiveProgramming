var isValid = function (s) {
  const hashmap = { "(": ")", "[": "]", "{": "}" };
  const stack = [];

  for (let ch of s) {
      if (hashmap[ch]) {
          stack.push(hashmap[ch]);
      }
      else if (stack.length > 0 && stack[stack.length - 1] === ch)    { 
          stack.pop()
      } else return false
  }

  return stack.length === 0
}