// Link of challenge: https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {
    let totalCouples 
    if (n%2 == 0) {
        totalCouples = (n/2)+1
    } else {
        totalCouples = Math.ceil(n/2)
    }
    
    let coupleLocation
    if (p%2 == 0) {
        coupleLocation = (p/2) +1
    } else {
        coupleLocation = Math.ceil(p/2)
    }
    
    const pagesTurnedFromStart = coupleLocation - 1
    const pagesTurnedFromEnd = totalCouples - coupleLocation
    
    if (pagesTurnedFromStart <= pagesTurnedFromEnd) {
        return pagesTurnedFromStart
    } else {
        return pagesTurnedFromEnd
    }

}
