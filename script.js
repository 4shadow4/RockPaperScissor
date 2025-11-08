
const buttons = document.querySelectorAll("button");

const output = document.querySelector("#results");

let userScore = 0;
let comScore = 0;
let round = 0;



function getComChoice(){

    let randomNumber = Math.floor(Math.random() * 3);
    let choice = ["rock","scissor","paper"];

    return choice.at(randomNumber);

}



function decideWinner(humanChoice,comChoice){

    const userScoreOutput = document.createElement("span");
    const comScoreOutput = document.createElement("span");


    (humanChoice === "scissor" && comChoice === "paper")? (output.textContent = `You win! ${humanChoice} beats ${comChoice}.`,userScore++,round++):
    (humanChoice === "paper" && comChoice === "rock")? (output.textContent = `You win! ${humanChoice} beats ${comChoice}.`,userScore++,round++):
    (humanChoice === "rock" && comChoice === "scissor")? (output.textContent = `You win! ${humanChoice} beats ${comChoice}.`,userScore++,round++):
    (humanChoice === comChoice)? (output.textContent = `It's a draw! ${humanChoice} is equal to ${comChoice}. You have to play again.`):
    (output.textContent = `You lose! ${comChoice} beats ${humanChoice}.`,comScore++,round++);

    userScoreOutput.textContent = `Your Score: ${userScore}`;
    comScoreOutput.textContent = `Computers Score: ${comScore}`;

    output.appendChild(document.createElement("br"))
    output.appendChild(userScoreOutput);
    output.appendChild(document.createElement("br"))
    output.appendChild(comScoreOutput);

    const span = document.createElement("span");

    if(round > 4){

        output.removeChild(userScoreOutput);
        output.removeChild(comScoreOutput);

        if(userScore > comScore){

            span.textContent = `You won the 5 match game with ${userScore} to ${comScore}.`;

        } else{
            span.textContent = `You lost the 5 match game with ${userScore} to ${comScore}.`;
        }
        output.appendChild(document.createElement("br"))
        output.appendChild(span);

        round = 0;
        userScore = 0;
        comScore = 0;
    }
}

buttons.forEach(button => {
    button.addEventListener('click',() => {


        let userChoice = button.id;
        let comChoice = getComChoice();
        decideWinner(userChoice, comChoice);
        
    });
});

 

    
        





    


