const solution = S => {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack.length == 0) {
      stack.push(S.charAt(i));
    } else if (stack[0] == "(") {
      if (stack[0] != S.charAt(i)) stack.pop();
      else stack.push(S.charAt(i));
    } else return 0;
  }

  if (stack.length == 0) return 1;
  else return 0;
};

const S = "(()())";
console.log(solution(S));
