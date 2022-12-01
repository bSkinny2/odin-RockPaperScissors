const choiceSet = ["rock", "paper", "scissors"];
let userScore;
let computerScore;

function playRound (computer, user) {
    let result;
    if (computer == user) {
        result = "draw"
    } else if (user == "rock" && computer == "scissors") {
        userScore = userScore + 1;
        result = "You win!"
    } else if (user == "rock" && computer == "paper") {
        computerScore = computerScore + 1;
        result = "You loose! :("
    } else if (user == "paper" && computer == "scissors") {
        computerScore = computerScore + 1;
        result = "You loose! :("
    } else if (user == "paper" && computer == "rock") {
        userScore = userScore + 1;
        result = "You win!"
    } else if (user == "scissors" && computer == "rock") {
        computerScore = computerScore + 1;
        result = "You loose! :("
    } else if (user == "scissors" && computer == "paper") {
        userScore = userScore + 1;
        result = "You win!"
    }
    return result
}

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
console.log("Score:\n you: "+userScore+", computer:"+computerScore)