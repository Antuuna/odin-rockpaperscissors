/*
let playerSelection;
let computerSelection;
*/

/* This function returns ROCK, PAPER, or SCISSORS at random */
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

function getPlayerChoice () {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            return (button.id);
        });
    });
}

/* This function returns an annoucement of who wins */
function singleRound (playerSelection, computerSelection) {
    /*
    playerSelection = getPlayerChoice();
    const btns = document.querySelectorAll(".btn");
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = (button.id);
        });
    });

    computerSelection = getComputerChoice();
    */

    if (playerSelection.toUpperCase() == computerSelection) {
        /*
        return ("You tie! " + playerSelection.toUpperCase() + " ties " + computerSelection);
        */
       return 'TIE';
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'ROCK')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'PAPER'))) {
        /*
        return ("You win! " + playerSelection.toUpperCase() + " beats " + computerSelection);
        */
       return 'WIN';
    }

    if (((playerSelection.toUpperCase() == 'ROCK') && (computerSelection == 'PAPER')) ||
        ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection == 'SCISSORS')) ||
        ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection == 'ROCK'))) {
        /*
        return ("You lose! " + playerSelection.toUpperCase() + " gets beaten by " + computerSelection);
        */
       
       return 'LOSE';
    
    }
}

function game() {
    let string;
    let winCount = 0;
    let loseCount = 0;
    let roundCount = 1;
    while (winCount != 5 && loseCount != 5) {
        string = singleRound();
        if (string === 'WIN') {
            console.log('You win round ' + roundCount + '!');
            winCount++;
        } else if (string === 'LOSE') {
            console.log('You lose round ' + roundCount + '!');
            loseCount++;
        } else {
            console.log('You tie round ' + roundCount + '!');
        }
        roundCount++;
    }
    return ('Final score is: ' + winCount + '-' + loseCount);

}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(singleRound((button.id), getComputerChoice()))
    });
});