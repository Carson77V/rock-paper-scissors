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
    let result = playRound(button.className, computerSelection);
    displayResult(result);
    countScore(result);
    if (winner() === 'P'){
        endGame("You Win!");
    }
    if (winner() === 'C'){
        endGame("Computer Wins!");
    }

    console.log(result);
  });
});

// this function will modify the div to display the results
function displayResult(resultString){
    // selects the node from the DOM
    const result = document.querySelector('.results');
    // changes the textContent of the selected node
    result.textContent = resultString;
}

let playerPoints = 0, computerPoints = 0;

// function modifies score for computer and player
function countScore(result){
    //check results and gives points to computer or player
    //charAt(4) is the character where it begins to say "Win" or "Lose"
    if (result.charAt(4) == "W"){
        playerPoints++;
        // changes the player score in the DOM
        const player = document.querySelector(".playerScore > div");
        player.textContent = playerPoints;
    }
     else if (result.charAt(4) == "L"){
        computerPoints++;
        // changes the computer score in the DOM
        const computer = document.querySelector(".computerScore > div")
        computer.textContent = computerPoints;
        
    }
}

// checks if a player reaches 5 points
function winner(){
    // once a player reaches 5 points disable the button
    if (playerPoints === 5){
        return "P";
    }
    if (computerPoints === 5){
        return "C";
    }
}

// function is called when the game ends 
function disableButtons(){
    // disables every button
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

// will create a header the ends the game
function endGame(text){
    disableButtons();
    const body = document.querySelector('body');

    const gameEnd = document.createElement('h3');

    gameEnd.textContent = text;
    gameEnd.classList.add('gameEnd');
    gameEnd.style.color = 'red';

    body.appendChild(gameEnd);
}