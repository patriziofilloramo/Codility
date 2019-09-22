const A = [2, 3, 1, 4, 5, 6, 8];

const f = A => {
  let missing = A.length + 1

  for(let i=0; i<A.length; i++){
    missing = (missing ^ A[i] ^ (i+1) )
  }

  return missing 
};

console.log(f(A));
