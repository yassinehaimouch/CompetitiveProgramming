var evalRPN = function (tokens) {
  const stack = [];
  for (let c of tokens) {
    if (c == "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (c == "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (c == "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (c == "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(parseInt(b / a));
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack[0];
};
