"use strict";

const A = [5, 1, 2, -1, 5, 6, -7, -7];

const solution = A => {
  let maxNegativeNums = [];
  let maxPositiveNums = [];
  for (let i = 0; i < 3; i++) {
    const max = A.indexOf(Math.max(...A));
    maxPositiveNums.push(A[max]);
    A.splice(max, 1);
  }

  for (let i = 0; i < 3; i++) {
    const min = A.indexOf(Math.min(...A));
    maxNegativeNums.push(A[min]);
    A.splice(min, 1);
  }
  let ar = maxPositiveNums.concat(maxNegativeNums);

  let max = -1000000000;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      for (let k = 0; k < ar.length; k++) {
        if (i != j && j != k && k != i) {
          let prod = ar[i] * ar[k] * ar[j];
          if (prod >= max) {
            max = prod;
          }
        }
      }
    }
  }
  return max;
};

console.log("RESULT", solution(A));
