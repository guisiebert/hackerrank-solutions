// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

arr1 = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]
]

arr2 = [
    [  0, -4, -6,  0, -7, -6],
    [ -1, -2, -6, -8, -3, -1],
    [ -8, -4, -2, -8, -8, -6],
    [ -3, -1, -2, -5, -7, -4],
    [ -3, -5, -3, -6, -6, -6],
    [ -3, -6,  0, -8, -6, -7]
]




function hourglassSum(arr) {

    function sumHourglass(x,y) {
        let sum = arr[y+0][x+0] + arr[y+0][x+1] + arr[y+0][x+2] 
        + arr[y+1][x+1] 
        + arr[y+2][x+0] + arr[y+2][x+1] + arr[y+2][x+2]
    
        return sum
    }

    let highestSum = -100

    for (let y=0 ; y <= 3 ; y++ ) {
        for (let x=0 ; x < arr.length ; x++) {
            let sum = sumHourglass(x,y)
            if (sum > highestSum) {
               highestSum = sum 
               console.log(highestSum)
            }
        }
    }

    return highestSum
}


////////


function hourglassSum2(arr) {

    let sums = []

    function sumHourglass(x,y) {
        let sum = arr[y+0][x+0] + arr[y+0][x+1] + arr[y+0][x+2] 
        + arr[y+1][x+1] 
        + arr[y+2][x+0] + arr[y+2][x+1] + arr[y+2][x+2]
        sums.push(sum)
    }

    for (let y=0 ; y <= 3 ; y++ ) {
        for (let x=0 ; x <= 3 ; x++) {
            sumHourglass(x,y)
        }
    }

    return Math.max(...sums)
}


console.log(

    hourglassSum2(arr1)

)

