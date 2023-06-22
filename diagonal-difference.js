// Link of Challenge: https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/

const case1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
] // expects to return = 15

const case2 = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]
] // expects to return = 1


function diagonalDifference(arr) {
    const size = arr.length
    let lr = 0 
    let rl = 0
    
    for (let i=0; i<size; i++) {
        lr += arr[i][i]
        rl += arr[i][size-1-i]
    }
    
    return(Math.abs(lr-rl))

}


console.log(
    diagonalDifference(case2)
)