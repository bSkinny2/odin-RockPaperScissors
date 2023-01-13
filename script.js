const choiceSet = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const results = document.querySelector('.containerResults');

const buttons = document.querySelectorAll('.choice');
const result = document.createElement('div');
results.appendChild(result)

const score = document.querySelector('.containerScore')

function resolveRound (player, computer) {
    if (computer == player) {
        return "Draw"
    }
    if (player == "rock") {
        if (computer == "paper") {
            computerScore++
            return "You loose!"
            
        } if (computer == "scissors") {
            computerScore++
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



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const computer = choiceSet[Math.floor(Math.random()*3)]
        result.textContent = resolveRound(e.target.id, computer);
        score.textContent = `player score: ${userScore} computer score: ${computerScore}`;
        console.log(userScore, computerScore)
        if (computerScore == 5) {
            console.log ("Computer wins");
            computerScore = 0;
            userScore = 0;
        } else if (userScore == 5) {
            console.log("Human wins");
            computerScore = 0;
            userScore = 0;
        } else console.log ("play again")


    })
});









/*
function game() {
    userScore = 0;
    computerScore = 0;

    for (let i = 0; i< 5; i++) {

    //get user's choice
    let userChoice = prompt("Rock, paper or scissors?").toLowerCase();
    //userChoice = userChoice.toLowerCase();

    //get computer choice
    let computerChoice = choiceSet[Math.floor(Math.random() * 3)];
    let result = playRound(computerChoice, userChoice);

    alert(result)
    }
}

game();

alert("Score:\n you: "+userScore+", computer:"+computerScore)
*/