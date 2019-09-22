"use strict";

const A = 1;
const B = 10;
const K = 2;

const solution = (A, B, K) => {
  let count = 0;

  if (K > B) {
    if (A == 0 || B == 0) {
      return 1; //K mod 0 == 0 so count a single divisor
    }
    return 0; //no divisors when A, B both != 0
  }

  for (let i = A; i <= B; i++) {
    if (i % K == 0) {
      count = count + 1;
    }
  }

  return count;
};

console.log("RESULT", solution(A, B, K));
