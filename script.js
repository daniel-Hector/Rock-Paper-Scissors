// helper function
const randomNum = () => {
    /* generates random number between 1 and 3 */ 
    let number = Math.floor(Math.random() * 3) + 1;

    return number;
}

function getComputerChoice() {
    let choice;
    switch(randomNum()) {
        case 1: choice = "Rock";
        break;
        case 2: choice = "Paper";
        break;
        case 3: choice = "Scissors";
        break;
        default: choice = "oops, something went wrong";
    }
    return choice;
}

function getUserChoice() {
    let userChoice = prompt("Rock, Paper, Scissors? ")
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
    return userChoice;
}

function playRound(computerSelection, userSelection) {
    if(computerSelection === userSelection) {
        return `Tie! ${computerSelection} vs ${userSelection}`;
    } else if(computerSelection === 'Rock' && userSelection === 'Paper') {
        return 'You win! Paper beats Rock'
    } else if(computerSelection === 'Paper' && userSelection === 'Rock') {
        return 'You loose! Paper beats Rock'
    } else if(computerSelection === 'Scissors' && userSelection === 'Rock') {
        return 'You win! Rock beats Scissors'
    } else if(computerSelection === 'Rock' && userSelection === 'Scissors') {
        return 'You loose! Rock beats Scissors'
    } else if (computerSelection === 'Paper' && userSelection === 'Scissors') {
        return 'You win! Scissors beats Paper'
    } else if(computerSelection === 'Scissors' && userSelection === 'Paper') {
        return 'You loose! Scissors beats Paper'
    }
}

function playGame() {
    let userWins = 0;
    let computerWins = 0;
    for(let x = 5; 1 <= x; x--) {
        let result = playRound(getComputerChoice(), getUserChoice());
        console.log(result);
        check1 = result.slice(0, 7);
        check2 = result.slice(0, 9);
        if(check1 === 'You win') {
            userWins++;
        } else if(check2 === 'You loose') {
            computerWins++;
        }
    }

    if(userWins > computerWins) {
        return `Congratualions, you win! Scoreboard: player ${userWins} computer ${computerWins}`;
    } else if(userWins < computerWins) {
        return `Sorry, you loose. Scoreboard: player ${userWins} computer ${computerWins}`;
    } else {
        `Tie! Scoreboard play ${userWins} computer ${computerWins}`;
    }
}