// Spara referenser till knapparna och resultatet
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const resultDiv = document.getElementById("result");

// Skapa en array av val som datorn kan göra
const choices = ["rock", "scissors", "paper"];

// Skapa en funktion för att slumpa datorns val
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Skapa en funktion för att avgöra vinnaren
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

// Skapa en funktion för att hantera användarens val
function handleUserChoice(userChoice) {
    // Slumpa datorns val
    const computerChoice = getComputerChoice();
    // Avgör vinnaren
    const winner = determineWinner(userChoice, computerChoice);
    // Visa resultatet på skärmen
    resultDiv.innerText = `Du valde ${userChoice}, datorn valde ${computerChoice}. ${winner}`;
}

// Lägg till en eventlyssnare för varje knapp
rockBtn.addEventListener("click", function () {
    handleUserChoice("rock");
});

scissorsBtn.addEventListener("click", function () {
    handleUserChoice("scissors");
});

paperBtn.addEventListener("click", function () {
    handleUserChoice("paper");
});
