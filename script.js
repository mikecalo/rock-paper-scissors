const gameWords = ['rock', 'paper', 'scissors']

// randomly selects rock, paper, scissors for the computerSelection
function computerPlay(){
    let randomItem = gameWords [Math.floor(Math.random()*gameWords.length)];
    return randomItem
}

// function to play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection)  {
        return "Tie!"
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection.toLowerCase() === "paper") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else {
        return false
    }
}
// function to run 5 rounds of rock, paper, scissors and determine winner at the end. 
function game() {
    let playerSum = 0
    let computerSum = 0
    for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Make a selection: rock, paper, or scissors");
    const computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) === "Player Wins!") {
            console.log(`Round ${i + 1} result: Player wins`)  
            playerSum++
        } else if (playRound(playerSelection, computerSelection) === "Computer Wins!") {
            console.log(`Round ${i + 1} result: Computer wins`)  
            computerSum++
        } else {
            console.log(`Round ${i + 1} result: Tie`)
        }
    }
    if (playerSum > computerSum) {
        console.log("Player Wins!")
    } else if (playerSum < computerSum) {
        console.log("Computer Wins!")
    } else {
        console.log("It's a tie!")
    }
}
console.log(game())

// while (playRound(playerSelection, computerSelection) === false) {
//     const playerSelection = prompt("Invalid input. Make a selection: rock, paper, or scissors");
// } code to ensure user enters valid input. revisit. 