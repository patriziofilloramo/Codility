"use strict";

const A = [1, 3, 1, 4, 2, 3, 5, 4, 8, 8, 9, 7, 6]; // A[K]
const X = 8;
// A non-empty
// N integers
// -1 if frog can't jump to the other side
// A[K] is the position where one leaf falls at time K in secs
// position 0 is the start
// position X + 1 is the end
// in order to reach the other side of the river the frog needs an array A that
// contains all numbers from 0 to X
// K are the seconds.
// We must return the highest K that in order to have an array containing all position from 0 to X
const solution = (X, A) => {
  let array = [];
  maxTime(X, A, array);

  if (array.find(z => z == "-1")) {
    return -1;
  }
  return Math.max(...array, 0);
};

const maxTime = (X, A, array) => {
    for (let i = 0; i < A.length; i++) {
      if (A[i] == X) {
        array.push(i);
        return maxTime(X - 1, A, array);
      }
    }
    if (X > 0) {
      array.push(-1);
    }
    return array;
};

console.log(solution(X, A));
