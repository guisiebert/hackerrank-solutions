// Link of Challenge: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
// COMMENT: The challenge description demands that "Any grade less than 40 is a failing grade." but in reality the program expects 38 to be rounded to 40. 

const case1 = [73,67,38,33] // expects [75, 67, 40, 33]
const case2 = [44,84,94,21,0,18,100] // expects [45, 85, 95, 21, 0, 18, 100]

// using IF
function gradingStudentsV1(grades) {
    let results = []
    
    for ( let i = 0; i < grades.length ; i++ ) {
        if (grades[i] < 35) {
            results.push(grades[i])
            // results.push("lower than 35")
        } else if (grades[i] % 5 < 3 ) {
            results.push(grades[i]) 
        } else if (grades[i] % 5 >= 3 ) {
            results.push(grades[i] + (5 - grades[i] % 5))
        }
    }
    
    return results

}

// using ternary operator
function gradingStudents(grades) {
    let results = []
    
    for ( let i = 0; i < grades.length ; i++ ) {
        (grades[i] < 35 || grades[i] % 5 < 3 )
        ? results.push(grades[i])
        : results.push(grades[i] + (5 - grades[i] % 5))
    }
    
    return results

}



// Testing
console.log(gradingStudents(case1))

