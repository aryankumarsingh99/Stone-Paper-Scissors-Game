let userScore = 0;
let compScore = 0;
 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper"," Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundcolor= "red";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = " You Win - User beat the comp";
        msg.style.backgroundColor= "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = " You lost - comp beat the user";
        msg.style.backgroundcolor= "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice;
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw game 
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            // scisoors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});