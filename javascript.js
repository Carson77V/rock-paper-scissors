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
    if (playerSelection === "rock"){
        //check what computer picked and compare against rock
        switch(computerSelection){
            case 0: return "It's a tie!"
            break;
            case 1: return "You Lose! Paper beats Rock"
            break;
            default: return "You Win! Rock beats Scissors"
        }
    }
    //if player chooses paper
    else if (playerSelection === "paper"){
        //check what computer picked and compare against paper
        switch(computerSelection){
            case 0: return "You Win! Paper beats Rock"
            break;
            case 1: return "It's a tie!"
            break;
            default: return "You Lose! Scissors beats Paper"
        }
    }
    //if player chooses scissors
    else {
        //check what computer picked and compare against scissors
        switch(computerSelection){
            case 0: return "You Lose! Rock beats Scissors"
            break;
            case 1: return "You Win! Scissors beats Paper"
            break;
            default: return "It's a tie!"
        }
    }
}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
let playerChoice = "";
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    console.log(playRound(button.className, computerSelection));
    displayResult(playRound(button.className, computerSelection));
  });
});

// this function will modify the div to display the results
function displayResult(resultString){
    // selects the node from the DOM
    const result = document.querySelector('.results');
    // changes the textContent of the selected node
    result.textContent = resultString;
}







/* this function plays a game with 5 rounds
function game(){
    // define the players selection
    playerSelection = null;
    playerPoints = 0;
    computerPoints = 0;
    // for loop to play the game 5 times
    for (let i = 0; i < 5; i++){
        // a while loop to make sure the player selects rock paper or scissors
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection 
            != "scissors"){
                // makes the player selection lower case to compare in while loop
                playerSelection = prompt("rock, paper or scissors?").toLowerCase();
            }
        // convert playerSelection to a number to use in playRound function
        if (playerSelection === "rock"){
            playerSelection = 0;
        }
        else if (playerSelection === "paper"){
            playerSelection = 1;
        }
        else {
            playerSelection = 2;
        }
        // the result will be checked for the winner to add points
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        //check results and gives points to computer or player
        //charAt(4) is the character where it begins to say "Win" or "Lose"
        if (result.charAt(4) == "W"){
            playerPoints++;
        }
        else if (result.charAt(4) == "L"){
            computerPoints++;
        }
    }
    // check the points and print the winner to the console
    if (playerPoints > computerPoints){
        console.log("You Win!");
        alert("You Win!");
    }
    else if (playerPoints < computerPoints){
        console.log("The computer Wins");
        alert("The computer Wins");
    }
    else {
        console.log("It's a tie");
        alert("It's a tie");
    }
}*/

//game();