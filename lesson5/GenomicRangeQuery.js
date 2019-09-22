"use strict";

const S_VAL = {
  A: 1,
  C: 2,
  G: 3,
  T: 4
};

const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];

const solution = (S, P, Q) => {
  const K = P.length;
  let lessImpNucl = [];
  for (let i = 0; i < K; i++) {
    let mySet = new Set( (S.split('').slice(P[i], Q[i]+1)).map( nuclStr=> S_VAL[nuclStr]) );
    lessImpNucl.push(Math.min(...mySet));
  }

  return lessImpNucl;
};

console.log(solution(S, P, Q));

