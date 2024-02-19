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