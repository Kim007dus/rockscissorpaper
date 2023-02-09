
  
function getComputerChoice () {
    let RandomNumber = Math.floor (Math.random()*3) 
    switch (RandomNumber) { 
            case 0: 
            return "Rock"
            break;
            case 1: 
            return "Paper"
            break;
            case 2: 
            return "Scissor"
            break;
            };
}

let playerSelection = prompt ("Let's play!! Choose between rock, scissor or paper:")
console.log ("Your choice is " + playerSelection)

const computerSelection = getComputerChoice ()
console.log ("Computer got " + computerSelection)

function playRound (computerSelection, playerSelection)  {  
    if (computerSelection === "Paper" && playerSelection === "Rock") {
    return "You lose, paper beats rock"
    }
    
    else if (computerSelection === "Paper" && playerSelection === "Scissor"){
    return "You win, scissor beats paper"
    }
   
    if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You win, paper beats rock"
    }
    
    else if (computerSelection === "Rock" && playerSelection === "Scissor"){
        return "You lose, rock beats scissor"
    }

    if (computerSelection === "Scissor" && playerSelection === "Paper") {
        return "You lose, scissor beats paper"
    }

    else if (computerSelection === "Scissor" && playerSelection === "Rock") {
        return "You win, rock beats scissor"
    }

    else (computerSelection, playerSelection) 
        return "It's a tie"
    
  
 }


console.log (playRound(computerSelection, playerSelection))