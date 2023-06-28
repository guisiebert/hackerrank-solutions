// Challenge Link: https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true


const case1 = [1,2,3,4,3,2,1]
const case2 = [0, 0, 1, 2, 1]

// USING FILTER
function lonelyinteger(arr) {
    let unique = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(e => e === arr[i]).length === 1) {
            unique = arr[i];
        }
    }
    return unique;
}

// A BETTER SOLUTION USING REDUCER
function lonelyintegerReduce(a) {
    
    let sortedArray = a.sort((a,b) => a - b);
    let unique = sortedArray.reduce((a,c)=>{
        return a^c
    });
    return unique;
}


console.log(lonelyinteger(case1))
console.log(lonelyintegerReduce(case1))