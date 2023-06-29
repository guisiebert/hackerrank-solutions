// Link of Challenge: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

const case1 = {
    n: 6,
    k: 3,
    ar: [1, 3, 2, 6, 1, 2]
} // expects 5

const case2 = {
    n: 100,
    k: 76,
    ar: [78,93,28,4,96,99,85,30,25,30,53,81,90,63,58,99,69,20,53,33,46,31,18,58,38,29,43,30,89,57,98,11,39,38,35,23,88,64,100,44,44,23,95,21,7,96,27,79,41,40,36,49,95,44,8,44,30,34,61,34,20,92,5,24,42,49,54,89,39,64,44,4,45,74,81,20,24,97,100,84,43,88,20,83,65,64,80,16,92,56,75,13,15,68,91,4,89,85,25,97]
} // expects 51




function divisibleSumPairs(n, k, ar) {
    let pairs = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            if ( (ar[i] + ar[j]) % k == 0 ) {
                pairs++
            }
        }
    }
    return pairs

}

console.log(
    divisibleSumPairs(case2.n, case2.k, case2.ar)
)
