const A = [9, 3, 9, 7, 3, 9, 9];

const sol = A => {
  return A.reduce((odd, current) => odd ^ current);
};

console.log("solution: ", sol(A));
// sol(A)
