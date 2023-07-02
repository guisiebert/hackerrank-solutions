// Link of Challenge: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
// case1 = 0 3 4 2 >> expects YES
// case2 = 0 2 5 3 >> expects NO


function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 >= v2) {return "NO"}
    if (x1 < x2 && v1 <= v2) {return "NO"}
    
    let pos1 = x1 + v1
    let pos2 = x2 + v2
    
    while (true) {
        if (pos1 == pos2) {return "YES"}
        if (pos1 > pos2) {return "NO"} 
        
        pos1 += v1
        pos2 += v2
    }
}


console.log(
    kangaroo(0,3,4,2)
)


console.log(
    kangaroo(0,2,5,3)
)