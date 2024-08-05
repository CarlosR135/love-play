// essential constants for build the script
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
// function find the computer choice

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
// function to determine the winner of the current round
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tied!';
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'You won!';
    }
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'You won!';
    }
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'You lost!';
    }

    return 'You lost!';
}
//click event handler for rock button
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    computerChoiceElement.textContent = `The computer chose: ${computerChoice}`;
    resultElement.textContent = result;
});


