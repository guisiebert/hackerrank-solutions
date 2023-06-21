// Challenge Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

let case1 = [10, 5, 20, 20, 4, 5, 2, 25, 1]
let case2

function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    
    let timesMaxRecordWasBroken = 0
    let timesMinRecordWasBroken = 0
    
    for (let i=1; i < scores.length; i++) {
        
            if (scores[i] > max) {
                max = scores[i]
                timesMaxRecordWasBroken++
            }
            
            if (scores[i] < min) {
                min = scores[i]
                timesMinRecordWasBroken++
            }
            
    }
    
    return [timesMaxRecordWasBroken, timesMinRecordWasBroken]
    
}


console.log(breakingRecords(case1))