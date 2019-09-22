"use strict";

const A = [5, 6, 3, 4, 9];

const solution = A => {
  let min_value = 10001;
  let min_idx = 0;

  for (let i = 0; i < A.length + 1; i++) {
    if (i < A.length - 1) {
      let currValue = (A[i] + A[i + 1]) / 2;
      if (currValue < min_value) {
        min_idx = i;
        min_value = currValue;
      }
    }
    if (i < A.length - 2) {
      let currValue = (A[i] + A[i + 1] + A[i+2]) / 3;
      if (currValue < min_value) {
        min_idx = i;
        min_value = currValue;
      }
    }
  }

  return min_idx;
};


const check = (A, i) => {
    if (i < A.length - 1) {
        let currValue = (A[i] + A[i + 1]) / 2;
        if (currValue < min_value) {
          min_idx = i;
          min_value = currValue;
        }
      }
}

console.log("RESULT: ", solution(A));
