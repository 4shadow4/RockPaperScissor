/*
    #Rock Paper Sisor

    ##Pseudocode:

    INIT getComChoice function

    getComChoice function:
---
    SET randomNumber to a random Number between 0 and 2 with Math.floor and Math.random
    INIT choice arraz wich contains three string elements: Rock, Paper, Scissor
    RETURN the choice[randomNumber] element
---

    INIT getUserChoice function

    getUserChoice function:
---
    SET userChoice to promt("Input your Choice!")

    RETURN userChoice.toLowerCase()
---

    INIT decideWinner function with two Parameters: choice1, choice2

    decideWinner(humanChoice,comChoice) function:
---
    IF humanChoice === "scissor" && comChoice === "paper" THEN
        OUTPUT You win! humanChoice beats comChoice.

    ELSE IF humanChoice === "paper" && comChoice === "rock" THEN
        OUTPUT You win! humanChoice beats comChoice.

    ELSE IF humanChoice ===  comChoice  THEN
        OUTPUT It is a draw! humanChoice is equal to comChoice. Yout have to play again.
        CALL playRound function


    ELSE
        OUTPUT You lose! humanChoice looses against comChoice.  
    ENDIF

---



    INIT playRound function:
---

    DECLAIRE variable userChoice and SET to OUTPUT of the function getUserChoice
    DECLAIRE variable comChoice and SET to OUTPUT of the function getComChoice

    CALL decideWinner function with (userChoice, comChoice)

---


    INIT playGame function:
---
    FOR i equal 0, i has to be smaler than 5, one added to i
        CALL playRound function
    ENDFOR
---


    CALL playGame function


*/

let userScore;
let comScore;



function getComChoice(){

    let randomNumber = Math.floor(Math.random() * 3);
    let choice = ["rock","scissor","paper"];

    return choice.at(randomNumber);

}

function getUserChoice(){

    let userChoice = prompt("Input your Choice!");

    return userChoice.toLowerCase();
}

function decideWinner(humanChoice,comChoice){

    (humanChoice === "scissor" && comChoice === "paper")? (console.log(`You win! ${humanChoice} beats ${comChoice}.`),userScore++):
    (humanChoice === "paper" && comChoice === "rock")? (console.log(`You win! ${humanChoice} beats ${comChoice}.`),userScore++):
    (humanChoice === "rock" && comChoice === "scissor")? (console.log(`You win! ${humanChoice} beats ${comChoice}.`),userScore++):
    (humanChoice === comChoice)? (console.log(`It's a draw! ${humanChoice} is equal to ${comChoice}. You have to play again.`),playRound()):
    (console.log(`You lose! ${comChoice} beats ${humanChoice}.`),comScore++);
    
}

function playRound(){

    let userChoice = getUserChoice();
    let comChoice = getComChoice();

    decideWinner(userChoice, comChoice);
}


function playGame(){

    userScore = 0;
    comScore = 0;


    for(let i = 0; i < 5; i++){
        playRound();
    }

    if(userScore > comScore){

        console.log(`You won the 5 match game with ${userScore} to ${comScore}.`)

    } else{
        console.log(`You lost the 5 match game with ${userScore} to ${comScore}.`)
    }
}

playGame();