// The challenge: https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen

let example3 = [
    [],
    [],
    []
]

let arr = []



function a2Dcreator(n) {
    for (let y = 0; y < n; y++) {
        arr.push([])
        for (let x = 0; x < n; x++) {
            arr[y].push([])
        }
    }
}

a2Dcreator(3)

console.log(arr)
