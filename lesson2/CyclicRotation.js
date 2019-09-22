// const A = [3, 8, 9, 7, 6];
// const A = [1,2,3,4];
const A = [1, 1, 2, 3, 5]
// const K = 5;
// const A = [1, 1, 2, 3, 5]
const K = 42;


const solution = (A, K) => {
    const N = A.length;
    const shift = (N - K%N)  
    if(N == K ) return A;    
    let arrayA = A.slice(shift, N)
    let arrayB = A.slice(0, shift);
    return [...arrayA, ...arrayB ]
};

console.log('result: ', solution(A, K));

solution(A,K)