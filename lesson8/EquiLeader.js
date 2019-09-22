"use strict";

const A = [4, 4];

const solution = A => {
  let leader;
  let equiLeaders = 0;
  const N = A.length;
  const mySet = new Set(A);
  const mySetSize = mySet.size;

  if(mySetSize == 1) {
    return N-1;
  }

 
  for (let value of mySet) {
    if (A.filter(x => x === value).length > N / 2) {
      leader = value;
      break;
    }
  }

  for (let i = 0; i < N; i++) {
    let half1 = A.slice(0, i + 1);
    let half2 = A.slice(i + 1, N);

    if (
      half1.filter(x => x === leader).length > half1.length / 2 &&
      half2.filter(x => x === leader).length > half2.length / 2
    ) {
      equiLeaders++;
    }
  }

  return equiLeaders;
};

console.log(solution(A));
