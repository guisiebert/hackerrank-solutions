// Challenge: https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true

function rotateLeft(d, arr) {
    const elementsToMove = arr.slice(0, d)
    const elementsToKeep = arr.slice(d)
    return [...elementsToKeep, ...elementsToMove]
}
