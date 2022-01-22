
let playerScore = 0
let compScore = 0
const gameWords = ['rock', 'paper', 'scissors']

const computerPlay = () => (
    gameWords [Math.floor(Math.random()*gameWords.length)]
)

const items = Array.from(document.querySelectorAll('.items'));
items.forEach(item => item.addEventListener('click', playRound))

const result = document.querySelector('#result');
const div = document.createElement('div');
const runningScore = document.createElement('div');
const gameWinner = document.createElement('div');
gameWinner.classList.add('winner');
result.appendChild(div);
result.appendChild(runningScore);
result.appendChild(gameWinner);

// function executed when rock paper scissors are clicked. func is passing e (event listener) declared above as argument.)
// function gets a random selection from computer by executing computerPlay()
// for playerSelection - if statement to compare the target HTML id and then assigning playerSelection to that selection. 
// game logic orginally made to compare playerSelection to ComputerSelection to determine who won round. 
function playRound(e) {
    const computerSelection = computerPlay()
    let playerSelection = 0
    if (e.target.id === 'rock') {
        playerSelection = 'rock';
    } else if (e.target.id === 'paper') {
        playerSelection = 'paper';
    } else {
        playerSelection = 'scissors';
    }
        if (playerSelection === computerSelection)  {
            div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
            runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
        } else if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                playerScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            } else {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                compScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                playerScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            } else {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                compScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                playerScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            } else {
                div.textContent = (`PLAYER: ${playerSelection} COMPUTER: ${computerSelection}`)
                compScore++
                runningScore.textContent = (`Player Score: ${playerScore} Computer Score: ${compScore}`)
            }
        } else {
            return false
        }
    gameOver()
}

function gameOver () {
    if (playerScore === 5) {
        gameWinner.textContent = ('You Win!')
        playerScore = 0
        compScore = 0
    } else if (compScore === 5) {
        gameWinner.textContent = ('Computer Wins... Better Luck Next Time.')
        compScore = 0
        playerScore = 0
    } else gameWinner.textContent = (' ')
} 






