// Link of challenge: https://www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true

function getLetter(s) {
    let letter;
    let firstLetter = s[0]

    let vowels = ["a", "e", "i", "o", "u"];
    let consonants1 = ["b", "c", "d", "f", "g"]
    const consonants2 = ["h", "j", "k", "l", "m"]
    const consonants3 = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    
    switch (true) {
        case vowels.includes(firstLetter): 
            letter = "A";
            break;
        case consonants1.includes(firstLetter): 
            letter = "B";
            break;
        case consonants2.includes(firstLetter): 
            letter = "C";
            break;
        case consonants3.includes(firstLetter): 
            letter = "D";
            break;

    }
    return letter;
}

console.log(getLetter("p"))