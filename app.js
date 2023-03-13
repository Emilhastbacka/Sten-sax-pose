
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const resultDiv = document.getElementById("result");


const choices = ["rock", "scissors", "paper"];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Oavgjort!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "Du vinner!";
    } else {
        return "Datorn vinner!";
    }
}


function handleUserChoice(userChoice) {

    const computerChoice = getComputerChoice();

    const winner = determineWinner(userChoice, computerChoice);

    resultDiv.innerText = `Du valde ${userChoice}, datorn valde ${computerChoice}. ${winner}`;
}

rockBtn.addEventListener("click", function () {
    handleUserChoice("rock");
});

scissorsBtn.addEventListener("click", function () {
    handleUserChoice("scissors");
});

paperBtn.addEventListener("click", function () {
    handleUserChoice("paper");
});
