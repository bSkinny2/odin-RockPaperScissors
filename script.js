const choiceSet = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let maxScore = 5

const results = document.querySelector('.containerResults');

const buttons = document.querySelectorAll('.choice');
const repeatButton = document.querySelector('.repeatButton')
const result = document.createElement('div');
const score = document.querySelector('.containerScore');
const finalResult = document.querySelector ('.finalResult');
const resultText = document.querySelector ('.resultText')
const gameDesk = document.querySelector('.gameDesk');

results.appendChild(result);



function resolveRound (player, computer) {
    if (computer == player) {
        return "Draw"
    }
    if (player == "rock") {
        if (computer == "paper") {
            computerScore++
            return "You loose!"
            
        } if (computer == "scissors") {
            userScore++
            return "You win!"
        }
    }
    if (player == "paper") {
        if (computer == "rock") {
            userScore++
            return "You win!"
        }
        if (computer == "scissors") {
            computerScore++
            return "You loose!"
        }
    }
    if (player == "scissors") {
        if (computer == "rock") {
            computerScore++
            return "You loose!"
        }
        if (computer == "paper") {
            userScore++
            return "You win!"
        }
    }      
}

function newGame () {
    computerScore = 0;
    userScore = 0;
    result.textContent ="";
    score.textContent = "";
    resultText.textContent = "";
    finalResult.setAttribute('style', 'display: none')
    gameDesk.setAttribute('style', 'display: flex')

}

function printWinner () {
    if (computerScore == 5) {
        return "COMPUTER WINS!";
    } if (userScore == 5) {
        return "YOU WIN!";
    }

}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const computer = choiceSet[Math.floor(Math.random()*3)]
        result.textContent = resolveRound(e.target.id, computer);
        score.textContent = `player: ${userScore} computer: ${computerScore}`;
        console.log(userScore, computerScore)
        if (computerScore == maxScore || userScore == maxScore) {
            gameDesk.setAttribute('style', "display: none");
            finalResult.setAttribute('style', 'display: block');
            resultText.textContent = (printWinner());   
        }
    })
});

repeatButton.addEventListener('click',(e) => {
    newGame();
}
)