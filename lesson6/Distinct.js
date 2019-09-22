"use strict";

const A = [1, 2, 3, 4, 4, 4];

const solution = A => {
  const mySet = new Set(A);

  return mySet.size;
};

console.log("RESULT", solution(A));
