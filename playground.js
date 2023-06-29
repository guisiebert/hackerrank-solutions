const test = "arroz"

console.log(test.length)


function processData(input) {
    
    let stringArray = input.split('\n').slice(1);    
    
    for (let j = 0; j < stringArray.length; j++) {
       
        let word = stringArray[j]
        let output = ""
        
        for (let i = 0; i<word.length; i+2) {
            output = "oi"
        }
        
        // output += " "
        
        // for (let i = 1; i<word.length; i+2) {
        //     output += word[i]
        // }
        
        console.log(output)
        
    }
    
} 