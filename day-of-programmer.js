// Link of Challenge: https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
    
    if (year < 1918 ) {
        // if Leap year = 12/09
        if (year % 4 == 0) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
    }
    
    if (year == 1918 ) {
        return `26.09.1918`
    }
    
    // IF: year > 1918
    if (year > 1918 ) {
        // if Leap year = 12/09
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
    }

}
