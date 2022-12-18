const choiceSet = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

const results = document.querySelector('.containerResults');

const buttons = document.querySelectorAll('.choice');
const result = document.createElement('div');
results.appendChild(result)

const score = document.querySelector('.containerScore')

function playRound (user) {
    let computer = choiceSet[Math.floor(Math.random() * 3)];
    let result;
    if (computer == user) {
        result = "Draw"
    } else if (user == "rock" && computer == "scissors") {
        userScore += 1;
        result = "You win!"
    } else if (user == "rock" && computer == "paper") {
        computerScore += 1;
        result = "You loose! :("
    } else if (user == "paper" && computer == "scissors") {
        computerScore += 1;
        result = "You loose! :("
    } else if (user == "paper" && computer == "rock") {
        userScore += 1;
        result = "You win!"
    } else if (user == "scissors" && computer == "rock") {
        computerScore += 1;
        result = "You loose! :("
    } else if (user == "scissors" && computer == "paper") {
        userScore += 1;
        result = "You win!"
    }
    return result
}



buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent = playRound(e.target.id);
        score.textContent = "player score: " + userScore + ", computer score: " + computerScore;
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