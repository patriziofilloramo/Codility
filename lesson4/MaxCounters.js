"use strict";

// N counters all set to 0
// I can:
// increase(X)  --> increas counter by 1
// MaxCounter() --> all counters are set to MAX

const A = [1]; // A[M]
const N = 1;

const solution = (N, A) => {
  let counters = new Array(N);
  counters.fill(0);
  for (let i = 0; i < A.length; i++) {
    let position = A[i] - 1;
    if (position < N) {
      counters[position] += 1;
    } else {
      counters.fill(Math.max(...counters));
    }
  }
  return counters;
};

console.log(solution(N, A));
