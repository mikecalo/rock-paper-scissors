const gameWords = ['rock', 'paper', 'scissors']


// randomly selects rock, paper, scissors for the computerSelection
function computerPlay(){
    let randomItem = gameWords [Math.floor(Math.random()*gameWords.length)];
    return randomItem
}

// function to play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button))
    let playerSelection = 0
    const computerSelection = computerPlay()
    if (playerSelection === computerSelection)  {
        return "Tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "Player Wins!"
        } else {
            return "Computer Wins!"
        }
    } else {
        return false
    }
}


// function to run 5 rounds of rock, paper, scissors and determine winner at the end. 
// function game() {
//     let playerSum = 0
//     let computerSum = 0
//     for (i = 0; i < 5; i++) {
//     const playerSelection = prompt("Make a selection: rock, paper, or scissors");
//     const computerSelection =Play(); computer
//         if (playRound(playerSelection, computerSelection) === "Player Wins!") {
//             console.log(`Round ${i + 1} result: Player wins`)  
//             playerSum++
//         } else if (playRound(playerSelection, computerSelection) === "Computer Wins!") {
//             console.log(`Round ${i + 1} result: Computer wins`)  
//             computerSum++
//         } else {
//             console.log(`Round ${i + 1} result: Tie`)
//         }
//     }
//     // if (playerSum > computerSum) {
    //     return ("Player Wins!")
    // } else if (playerSum < computerSum) {
    //     return ("Computer Wins!")
    // } else {
    //     return ("It's a tie!")
    // }
// }
// console.log(game())

// create div with results of one game and append it the running score div. 
const result = document.querySelector('#result');
const newDiv = document.createElement('div');
const gameResults = document.createTextNode(playRound);
newDiv.appendChild(gameResults);
result.appendChild(newDiv);



// event listener to buttons that calls playRound function with correct playerSelection every time button is clicked. 


//event listen to get correct playerSelection for function playRound. 
// buttons.forEach((button)=>{button.addEventListener('click',()=>{

//     playerSelection = button.id;

// })
