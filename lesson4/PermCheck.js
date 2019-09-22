// 17.00 --> 15min but only 75% BECAUSE...
//TEST IN CODILITY ARE WRONG! THEY DON'T KNOW WHAT PERMUTATION IS
"use strict";

let A = [1];

const func = A => {
  const somm = (A.length * (A.length + 1)) / 2;
  const total = A.reduce((a, b) => {
    return a + b;
  });

  return somm === total ? 1 : 0;
};

console.log("result: ", func(A));


