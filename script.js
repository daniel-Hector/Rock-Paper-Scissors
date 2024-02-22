function randomNum() {
    /* generates random number between 1 and 3 */ 
    let number = Math.floor(Math.random() * 3) + 1;

    return number;
}

function getComputerChoice() {
    let choice;
    switch(randomNum()) {
        case 1: choice = "rock";
        break;
        case 2: choice = "paper";
        break;
        case 3: choice = "scissors";
        break;
    }
    return choice;
}

function logResult(textToLog) {
    const roundResult = document.querySelector('.roundResult');
    const span = document.createElement('span');
    roundResult.appendChild(span);
    span.innerText = textToLog;
}

function updateScore(playerWins, computerWins) {
    const score = document.querySelector('.score');
    score.innerText = `Player ${playerWins} Computer ${computerWins}`;

    if(playerWins === 5) {
        alert('You Win!');
    } else if(computerWins === 5) {
        alert('You Loose');
    }
}

let playerWins = 0;
let computerWins = 0;
function playRound(userSelection) {
    let computerSelection = getComputerChoice();

    if(computerSelection === userSelection) {
        logResult(`Tie! ${computerSelection} vs ${userSelection}`);
    } else if(computerSelection === 'rock' && userSelection === 'paper') {
        logResult('You win! Paper beats Rock');
        playerWins++;
        updateScore(playerWins, computerWins);
    } else if(computerSelection === 'paper' && userSelection === 'rock') {
        logResult('You loose! Paper beats Rock');
        computerWins++;
        updateScore(playerWins, computerWins);
    } else if(computerSelection === 'scissors' && userSelection === 'rock') {
        logResult('You win! Rock beats Scissors');
        playerWins++;
        updateScore(playerWins, computerWins);
    } else if(computerSelection === 'rock' && userSelection === 'scissors') {
        logResult('You loose! Rock beats Scissors');
        computerWins++;
        updateScore(playerWins, computerWins);
    } else if (computerSelection === 'paper' && userSelection === 'scissors') {
        logResult('You win! Scissors beats Paper');
        playerWins++;
        updateScore(playerWins, computerWins);
    } else if(computerSelection === 'scissors' && userSelection === 'paper') {
        logResult('You loose! Scissors beats Paper');
        computerWins++;
        updateScore(playerWins, computerWins);
    }
}

const buttons = document.querySelector('.gameOptions');
buttons.addEventListener('click', (event) => {
    let userSelection = event.target.getAttribute('class');
    playRound(userSelection)
});