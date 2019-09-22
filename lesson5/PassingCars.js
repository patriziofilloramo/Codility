"use strict";

const A = [0, 1, 0, 1, 1];

const solution = A => {
  let count = 0;
  let mult = 0;
  for (let i = 0; i < A.length; i++) {
    // let j = 0;
    let car = A[i];
    if (car == 0) {
      mult++;
    }
    if (car == 1) {
      count = count + mult;
    }
    if (count > 1000000000) {
      return -1;
    }
  }
  return count;
};

console.log(solution(A));



// var yourself = {
//     fibonacci: function(n) {
//         if (n === 0) {
//             return 0;
//         } else if (n === 1) {
//             return 1;
//         } else {
//             return this.fibonacci(n - 1) +
//                 this.fibonacci(n - 2);
//         }
//     }
// };

// console.log(yourself.fibonacci(8))

