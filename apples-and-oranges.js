// Link of challenge: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesOnHouse = 0
    let orangesOnHouse = 0
    
    for (let i=0; i<apples.length; i++) {
        if (s <= a + apples[i] && a + apples[i] <= t) {
            applesInHouse++
        }
    }
    
    for (let i=0; i<oranges.length; i++) {
       if (s <= b + oranges[i] && b + oranges[i] <= t) {
            orangesInHouse++
        }
    }
    
    console.log(`${applesOnHouse}\n${orangesOnHouse}`);

}

// CASE 01
console.log(
    countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
) // expects 1 and 1