// Link of Challenge: https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    const maxOfA = a[a.length - 1];
    const minOfB = b[0];
    let possibilities = []
    let certains = []
    
    for (let i = maxOfA; i <= minOfB; i++) {
        if (isIntDivisibleByArr(i, a)) {
            possibilities.push(i)
        }
    }
    
    for (let i = 0; i < possibilities.length; i++) {
        if (isArrDivisibleByInt(b, possibilities[i])) {
            certains.push(possibilities[i])
        }
    }
    console.log(certains.length)
    return certains.length
}

function isArrDivisibleByInt(arr, integer) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % integer != 0) {
            return false
        }
    }
    return true    
}

function isIntDivisibleByArr(integer, arr) {
    for (let i = 0; i < arr.length; i++) {
            if (integer % arr[i] != 0) {
                return false 
            } 
    }
    return true
}


// SAMPLE CASES
getTotalX(case1a, case1b) // expects 3
getTotalX(case2a, case2b) // expects 2
getTotalX(case3a, case3b) // expects 1
