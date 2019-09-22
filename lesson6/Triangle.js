"use strict";

const A = [5,3,3];
const Ab = [10, 50, 5, 1];

const solution = A => {
  const N = A.length;
  if (N < 3) return 0;

  const array = A.sort((a, b) => a - b)
  
  for (let i = 0; i < array.length; i++) {
    const P = array[i], Q = array[i + 1], R = array[i + 2];
    if (P + Q > R) return 1;
  }
  return 0;
};

console.log(solution(A));
