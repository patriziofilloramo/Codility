const A = [3, 4,3,4, 4];

const sol = A => {
  const N = A.length;
  if (N == 0) return -1;

  for (let i = 0; i < N; i++) {
    let item = A[i];
    let currItemOcc = A.filter(x => x == [item]).length;

    if (currItemOcc == N / 2) {
      return -1;
    }

    if (currItemOcc > N / 2) {
      return i;
    }
  }

  return -1;

};

console.log(sol(A));

