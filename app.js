
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const resultDiv = document.getElementById("result");


const choices = ["sten", "sax", "påse"];


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Oavgjort!";
    } else if (
        (userChoice === "sten" && computerChoice === "sax") ||
        (userChoice === "sax" && computerChoice === "påse") ||
        (userChoice === "påse" && computerChoice === "sten")
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
    handleUserChoice("sten");
});

scissorsBtn.addEventListener("click", function () {
    handleUserChoice("sax");
});

paperBtn.addEventListener("click", function () {
    handleUserChoice("påse");
});
