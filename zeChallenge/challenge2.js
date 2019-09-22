"use strict";

const S = "cxcxcbananaasafafsafsaaasdafasaadsadsadsadsadf";

const solution = S => {
  let smallest = 100000;
  let current = 0;
  let N = S.length;



  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N-1; j++) {
      for (let k = 2; k < N-2; k++)
        if (i != j && i != k && k != j) {
          let array = S.split("");
          array.splice(i, 1);
          array.splice(j, 1);
          array.splice(k, 1);

          if (array == array.sort()) {
            return current + 3;
          } else {
            return solution(array, 3);
          }
        }
    }
  }

  return smallest;
};

console.log(solution(S));
