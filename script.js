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
    playerSelection = prompt("Rock, paper, or scissors");
    computerSelection = getComputerChoice();

    if (playerSelection.toUpperCase() == computerSelection) {
        return ("You tie! " + playerSelection.toUpperCase() + " ties " + computerSelection);
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'ROCK')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        return ("You win! " + playerSelection.toUpperCase() + " beats " + computerSelection);
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'PAPER')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'ROCK'))) {
        return ("You lose! " + playerSelection.toUpperCase() + " gets beaten by " + computerSelection);
    }
}

console.log(singleRound(playerSelection, computerSelection));