// Challenge Link: https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

let case1 = 'UDDDUDUU'
let case2 = "DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD"

// My first solution
function countingValleys(steps, path) {
    let arr = [...path]
    let currentHeight = 0
    let valleysCount = 0
    
    for (let i=0; i<arr.length; i++) {
        
        let sealevel = false
        if (currentHeight == 0) {
            sealevel = true
        }
        
        // Handle height change
        arr[i] == "U" ? currentHeight++ : currentHeight--
        
        // Check if 
        if (currentHeight == -1 && sealevel) {
            valleysCount++
        } 
    } 
    
    return valleysCount
}


// Another approach
function countingValleys2(steps, path) {
    let arr = [...path]
    let currentHeight = 0
    let movement = ""
    let log = []
    
    for (let i=0; i<arr.length; i++) {
        arr[i] == "U" ? movement = "down" : movement = "up"
        log.push(`${currentHeight}${movement}`)
        arr[i] == "U" ? currentHeight++ : currentHeight--
    } 
    
    let valleysCount = log.filter(log => log == "0down").length
    return valleysCount
}



// countingValleys(0, case1)

console.log(
    countingValleys(0, case2)
)