
  
function getComputerChoice () {
    let RandomNumber = Math.floor (Math.random()*3) 
    switch (RandomNumber) { 
            case 0: 
            return "rock"
            break;
            case 1: 
            return "paper"
            break;
            case 2: 
            return "scissor"
            break;
            };
}

let playerSelection = prompt ("Let's play!! Choose between rock, scissor or paper:").toLowerCase()

console.log ("Your choice is " + playerSelection)

const computerSelection = getComputerChoice ()
console.log ("Computer got " + computerSelection)

function playRound (computerSelection, playerSelection)  {  
    if (computerSelection === "paper" && playerSelection === "rock") {
    return "You lose, paper beats rock"
    }
    
    else if (computerSelection === "paper" && playerSelection === "scissor"){
    return "You win, scissor beats paper"
    }
   
    if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win, paper beats rock"
    }
    
    else if (computerSelection === "rock" && playerSelection === "scissor"){
        return "You lose, rock beats scissor"
    }

    if (computerSelection === "scissor" && playerSelection === "paper") {
        return "You lose, scissor beats paper"
    }

    else if (computerSelection === "scissor" && playerSelection === "rock") {
        return "You win, rock beats scissor"
    }

    else (computerSelection, playerSelection) 
        return "It's a tie"
    
  
 }


console.log (playRound(computerSelection, playerSelection))