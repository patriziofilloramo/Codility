"use strict";

/*that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.*/

const A = [-1, -3];

// let B = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

// console.log(B);

const solution = A => {
  let smallest = 0;
  const sortedArray = A.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let j = i + 1;
    if (sortedArray[j] - sortedArray[i] > 1) {
        smallest = sortedArray[i] + 1;
    }
  }
  if (smallest === 0) {
    return Math.max(...A, 0) + 1;
  }

  return smallest < 1 ? 1 : smallest;
};

console.log(solution(A));

//   while (newArray.indexOf(min) != -1) {
//     min++;
//   }

// function solution(A) {
//     let min = 1;
//     const newArray = A.sort(function(a, b) {
//       return a - b;
//     });

//     while (newArray.indexOf(min) != -1) {
//       min++;
//     }
//     return min;
//   }
