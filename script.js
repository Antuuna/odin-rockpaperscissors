let playerSelection;
let computerSelection;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
        if (random == 0) {
            return 'ROCK';
        } else if (random == 1) {
            return 'PAPER';
        } else if (random == 2) {
            return 'SCISSORS';
        }
}

function singleRound (playerSelection, computerSelection) {
    let result;
    
    playerSelection = prompt("Rock, paper, or scissors");
    computerSelection = getComputerChoice();

    if (playerSelection.toUpperCase() == computerSelection) {
        result = 'TIE';
        return ("You " + result + "! " + playerSelection.toUpperCase() + " ties " + computerSelection);
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'ROCK')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        result = 'WIN';
        return ("You " + result + "! " + playerSelection.toUpperCase() + " beats " + computerSelection);
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'PAPER')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'ROCK'))) {
        result = 'LOSE';
        return ("You " + result + "! " + playerSelection.toUpperCase() + " gets beaten by " + computerSelection);
    }
}

console.log(singleRound(playerSelection, computerSelection));