const input1 = "2\nHacker\nRank"
const input2 = "2 \nHacker \nRank \nHacker \nRank \nHacker \nRank \nHacker \nRank"
const input3 = "2\nWilson\ntem\ncabelos\ndigitais"


function processData(input) {
    let strings = input.split('\n').slice(1)
    let output = ""

    for (let w = 0; w < strings.length ; w++) {
        
        // Handle even
        for (let i = 0; i < strings[w].length; i = i+2) {
            output += strings[w][i]
        }

        // Space between
        output += ` `


        // Handle odds
        for (let i = 1; i < strings[w].length; i = i+2) {
            output += strings[w][i]
        }
        
        output += `\n`

    }

    console.log(output)
    
} 


processData(input3)