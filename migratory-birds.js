// Challenge Link: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

let case1 = [1, 4, 4, 4, 5, 3]
let case2 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1, 3, 4, 4]


// My first solution
function migratoryBirds(arr) {
    let maxSights = 0
    let mostSeenBird = 0
    
    for (let i=0 ; i < arr.length; i++) {
        let thisBirdSights = arr.filter(bird => bird == arr[i]).length
        if (thisBirdSights > maxSights) {
            maxSights = thisBirdSights
            mostSeenBird = arr[i]
        }
    }
    return mostSeenBird
}

// A better solution for longer arrays (and considering there are really only 5 types of bird)
function migratoryBirds2(arr) {
    let maxSights = 0
    let mostSeenBird = 0
    
    for (let bird = 1 ; bird <= 5; bird++) {
        let thisBirdSights = arr.filter(num => num == bird).length
        if (thisBirdSights > maxSights) {
            maxSights = thisBirdSights
            mostSeenBird = bird
        }
    }

    return mostSeenBird
}


console.log(migratoryBirds2(case2))