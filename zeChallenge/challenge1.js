"use strict";

const S = "odd"; //N
const T = "odd"; //M

const solution = (S, T) => {
  if (S == T) return "EQUAL";

  let arrayS = S.split("");
  let arrayT = T.split("");

  if (S.length == T.length) {
    let sortedArrayS = arrayS.sort();
    let sortedArrayT = arrayT.sort();
    if (sortedArrayS.join("") == sortedArrayT.join("")) {
      //SWAP
      for (let i = 0; i < T.length; i++) {
        let charS = S[i];
        let charT = T[i];
        if (charS != charT) {
          let tempArray = T.split("");
          let first = T[i];
          let second = T[i + 1];
          tempArray.splice(i, 1, second);
          tempArray.splice(i + 1, 1, first);

          if (tempArray.join("") == S) return "SWAP " + second + " " + first;
        }
      }
    }

    // TRY REPLACE
    for (let i = 0; i < T.length; i++) {
      let char = S.charAt(i);
      let lengthS = arrayS.filter(x => x == char).length;
      let lengthT = arrayT.filter(x => x == char).length;
      let diff = Math.abs(lengthT - lengthS);

      if (diff == 1) {
        let charT = T[i];
        let charS = S[i];

        let newStringT = T.replace(charT, charS);

        if (newStringT == S) return "REPLACE " + charS + " " + charT;
      }
    }
  }

  // TRY INSERT
  if (S.length < T.length) {
    for (let i = 0; i < S.length; i++) {
      let char = S.charAt(i);
      let lengthS = arrayS.filter(x => x == char).length;
      let lengthT = arrayT.filter(x => x == char).length;
      if (lengthS != lengthT) {
        return "INSERT " + char;
      }
    }
  }

  return "IMPOSSIBLE";
};

console.log(solution(S, T));

// METTI JAVASCRIPT!
// RICORDA DI RICONTROLLARE TUTTO IL CODICE
// RICORDA DI OTTIMIZZARE SU LARGE
// RICORDA DI OTTIMIZZARE PER SUPER SMALL
// console.log("S shorter");
// let sortedArray = S.split("").sort();
// console.log('sortedAr: ', sortedArray)
