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
       
       return 'LOSE';
    
    }
}

function winDecider(roundResult) {
    if (roundResult === 'WIN') {
        return playerScore++;
    } else if (roundResult === 'LOSE') {
        return computerScore++;
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

let playerScore = 0;
let computerScore = 0;
let winResult = '';
let playerChoice = '';
let computerChoice = '';
let roundNarration = "Welcome to Antuuna's Rock Paper Scissors!";

const contentClass = document.querySelector('.content');
const scoreTracker = document.createElement('div');
scoreTracker.classList.add('score');
scoreTracker.textContent = playerScore + ' - ' + computerScore;
contentClass.appendChild(scoreTracker);

const narration = document.createElement('div');
narration.classList.add('narration');
narration.textContent = roundNarration;
contentClass.appendChild(narration);

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerScore < 7 && computerScore < 7) {
            playerChoice = button.id.toUpperCase();
            computerChoice = getComputerChoice();

            winResult = singleRound(playerChoice, computerChoice);
            winDecider(winResult);
            scoreTracker.textContent = playerScore + ' - ' + computerScore;
            contentClass.appendChild(scoreTracker);

            if (winResult === 'WIN') {
                roundNarration = "You " + winResult + "! " + playerChoice +
                             " beats " + computerChoice + "!";
            } else if (winResult === "LOSE") {
                roundNarration = "You " + winResult + "! " + playerChoice +
                             " loses to " + computerChoice + "!";
            } else if (winResult === "TIE") {
            roundNarration = "You " + winResult + "! " + playerChoice +
                                 " ties with " + computerChoice + "!";
            }
            narration.textContent = roundNarration;
            contentClass.appendChild(narration);
        }
            if (playerScore === 7) {
                roundNarration = "You win the game! You beat the computer :p";
            } else if (computerScore === 7) {
                roundNarration = "You lose the game! The computer smacked you :o";
            }
            narration.textContent = roundNarration;
            contentClass.appendChild(narration);
    });
});

