let str = "12345,htg";


function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function stingStats(string) {
    let numbers = 0;
    let letters = 0;
    
    let array = [];


    for(let i = 0; i < string.length; i++){
        array[i] = string[i];
    }
    
    array.forEach(element => {
        if(!isNaN(element)){
            numbers++;
        }
    });

    array.forEach(element => {
        if(isLetter(element)){
            letters++;
        }
    });

    return `| ${string} | numbers = ${numbers} letters = ${letters} symbols = ${string.length-(numbers+letters)}`;
    
}

console.log(stingStats(str));