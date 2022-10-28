// In this code 0 = rock, 1 = paper and 2 = scissors
// this function returns a random value between 0 and 2
function getComputerChoice(){
    //Math.random returns a decimal number between 0 and 1 (less than 1). 
    //Multiply by 3 to get a number between 0 and 2 when rounding down.
    return Math.floor(Math.random() * 3);
}
// this function returns a string telling who wins
function playRound(playerSelection, computerSelection){
    //if player chooses rock
    if (playerSelection === 0){
        //check what computer picked and return appropriate string
        switch(computerSelection){
            case 0: return "It's a tie!"
            break;
            case 1: return "You Lose! Paper beats Rock"
            break;
            default: return "You Win! Rock beats Scissors"
        }
    }
    //if player chooses paper
    else if (playerSelection === 1){

    }
    //if player chooses scissors
    else {

    }
}

playRound(0, getComputerChoice());