let optionsArray = ["rock", "paper", "scissors"];
let compScore = 0;
let userScore = 0;

let userChooseRock = document.querySelector(".rock-div");
let userChoosePaper = document.querySelector(".paper-div");
let userChooseScissors = document.querySelector(".scissors-div");

let userChoiceArray = [userChooseRock, userChooseScissors, userChoosePaper];

for (let i = 0; i < userChoiceArray.length; i++) {
    userChoiceArray[i].onclick = function () {
        let userChoice;
        if (userChoiceArray[i] === userChooseRock) {
            userChoice = "rock";
        } else if (userChoiceArray[i] === userChoosePaper) {
            userChoice = "paper";
        } else if (userChoiceArray[i] === userChooseScissors) {
            userChoice = "scissors";
        }
        
        console.log(`User choice: ${userChoice}`);
        
        let compChoice = optionsArray[Math.floor(Math.random() * 3)];
        console.log(`Computer choice: ${compChoice}`);
        
        scoreFunc(userChoice, compChoice);
    };
}

function scoreFunc(userChoice, compChoice) {
    if (userChoice === compChoice) {
        console.log("Draw");
        document.querySelector(".userScore-div").innerText = `Your Score: ${userScore}`;
document.querySelector(".compScore-div").innerText = `Computer's Score: ${compScore}`;

document.querySelector("p").innerText=`Computer chose: ${compChoice}`;


    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        console.log("User won");
        userScore++;
        document.querySelector(".userScore-div").innerText = `Your Score: ${userScore}`;
        document.querySelector(".compScore-div").innerText = `Computer's Score: ${compScore}`;
        document.querySelector("p").innerText=`Computer chose: ${compChoice}`;

 
    } else {
        console.log("Computer won");
        compScore++;
        document.querySelector(".userScore-div").innerText = `Your Score: ${userScore}`;
        document.querySelector(".compScore-div").innerText = `Computer's Score: ${compScore}`;
        document.querySelector("p").innerText=`Computer chose: ${compChoice}`;

         }
    
    console.log(`User Score: ${userScore} | Computer Score: ${compScore}`);
}
