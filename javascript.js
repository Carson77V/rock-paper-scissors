// In this code 0 = rock, 1 = paper and 2 = scissors
// this function returns a random value between 0 and 2
function getComputerChoice(){
    //Math.random returns a decimal number between 0 and 1 (less than 1). 
    //Multiply by 3 to get a number between 0 and 2 when rounding down.
    return Math.floor(Math.random() * 3);
}

getComputerChoice();