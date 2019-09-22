
'use strict'

const A = ['23171', '21011', '21123', '21366', '21013', '21367']
// N CONSECUTIVE DAYS
// PROFIT = A[Q=buyDay] - A[P=soldDay]
// LOSS = A[P=soldDay] - A[Q=buyDay]
const solution = (A) => {

    let maxProfit = 0;
    const N = A.length;
    let minBuy = 20000000;
    if(N == 1) return 0;

    const mySet = new Set(A);
    if(mySet.size == 1) return 0;

    for (let i=0; i<N; i++) {
        let today = A[i];
        minBuy = Math.min (today, minBuy);

        const profitToday = today - minBuy;
        maxProfit = Math.max (maxProfit, profitToday)
    }


    return maxProfit;

}


console.log( solution (A) );




