# Rock, Paper, Scissors Game

Rock, Paper, Scissors is a classic hand game often used to make decisions or as a simple game of chance. This project features an implementation of Rock, Paper, Scissors where you play against the computer.

![Multiple Devices](/assets/images/image1.jpeg)




## Game Overview

In Rock, Paper, Scissors, each player simultaneously selects one of three shapes:
- **Rock** (a fist) crushes **Scissors**.
- **Scissors** (a fist with the index and middle fingers extended) cuts **Paper**.
- **Paper** (an open hand) covers **Rock**.

In this game, you will compete against the computer, which makes a random choice each round. The outcome of each round is determined by the standard rules of Rock, Paper, Scissors.

## Features

- **Single-player mode**: Play against the computer.
- **Random computer moves**: The computer makes random choices for each round.
- **Score tracking**: Keeps track of the number of rounds won, lost, and tied.
- **User-friendly interface**: Easy-to-use interface for a seamless gaming experience.

## How to Play

1. **Choose your move**: Select Rock, Paper, or Scissors.
2. **Computer makes a move**: The computer will randomly select Rock, Paper, or Scissors.
3. **Determine the winner**: The winner of the round is based on the game rules:
   - Rock crushes Scissors.
   - Scissors cuts Paper.
   - Paper covers Rock.
4. **View results**: The game will display the result of each round and update the score accordingly.
5. **Continue playing**: You can play as many rounds as you like.

Enjoy playing Rock, Paper, Scissors against the computer, and see if you can outsmart it!

# User Experience

- In this application, the user can play the classic Rock, Paper, Scissors game on their screen. I believe it will spark curiosity and the desire to achieve victory.
- This game is open to all types of audiences.

# Design

I used the following colors:

- #009688;
- #f0f0f0;
- rgba(170, 226, 193, 0.815);
- #ffffff;
- #ff2289;
- #4caf50;
- #2196f3;
- #ccc;
- rgba(0, 0, 0, 0.2);

# Home Screen

Here we have our main screen where the user can intuitively make their choice and have fun with the computer.

# Desktop Scream
![Desktop Screem](/assets/images/image2.png)   



# Ipad Scream
![Ipad Scream](/assets/images/ipad.PNG)

# JavaScript Validator

![Java Scipt Validator](/assets/images/javalidator.png)

# HTML Validation
The HTML code has been run through the W3C - HTML validator. Results can be found below.

![W£CHtMl validation](/assets/images/Capturar.PNG)

# CSS Validation

The CSS code has been run through the W3C - CSS validator. Results can be found below.

![JIgashaw validator](/assets/images/imagem22.PNG)

# Techologies

This website is developed using the following technologies:

HTML: For structuring the content and layout of the web pages.

CSS: For styling the website and making it visually appealing.

JavaScript: For adding interactivity and dynamic features to the website.


# Tools Used

This website is developed using the following tools:

GitHub: Used for version control and code storage. GitHub allows for collaborative development, issue tracking, and code review, ensuring a smooth workflow and version management.

VS Code: Integrated Development Environment (IDE) used to write, edit, and debug code. VS Code supports numerous extensions that enhance productivity, such as Git integration, syntax highlighting, and linting tools.

Google DevTools: A set of web developer tools built directly into the Google Chrome browser. Google DevTools provides features for debugging, editing CSS and HTML on the fly, and analyzing website performance.

W3C Markup Validation Service: A tool provided by the World Wide Web Consortium (W3C) to validate HTML and XHTML documents. This service checks for errors in the markup to ensure compliance with web standards.

W3C CSS Validation Service: A tool provided by W3C to validate CSS code. It helps in identifying errors and potential issues in the stylesheet, ensuring it adheres to CSS standards.


## Code Explanation

Here's a breakdown of the JavaScript code used in this project:

## Essential Constants

```
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');


1. These constants store references to the Rock, Paper, Scissors buttons and elements where the computer's choice and the result will be displayed.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
```

2. This function randomly selects one of the choices ('rock', 'paper', or 'scissors') for the computer.

# Function to Determine the Winner
```javasript
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
        return 'You won!';
    }
    return 'You lost!';
}
```
3. This function compares the player's choice with the computer's choice and returns the result of the game. Note: there is a small issue in the original code where 'scissors' vs 'paper' was incorrectly returning 'You lost!'. This has been corrected to 'You won!'.

# Event Handlers for Buttons


```
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    computerChoiceElement.textContent = `The computer chose: ${computerChoice}`;
    resultElement.textContent = result;
});

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    computerChoiceElement.textContent = `The computer chose: ${computerChoice}`;
    resultElement.textContent = result;
});

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    computerChoiceElement.textContent = `The computer chose: ${computerChoice}`;
    resultElement.textContent = result;
});
```


4. These event handlers are attached to each button. When a button is clicked, the computer's choice is generated, the winner is determined, and the results are displayed.





## Thank you for wacth my project!




















