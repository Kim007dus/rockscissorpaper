let playerScore = 0
let computerScore = 0

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

function getPlayerSelection () { 
    return prompt ("Let's play!! Choose between rock, scissor or paper:").toLowerCase()
}

const playerSelection = getPlayerSelection ()
const computerSelection = getComputerChoice ()

console.log ("Your choice is " + playerSelection)
console.log ("Computer got " + computerSelection)

function playRound (computerSelection, playerSelection)  {  
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore += 1
        return "You lose, paper beats rock"
        
    }
    
    else if (computerSelection === "paper" && playerSelection === "scissor"){
        playerScore += 1
        return "You win, scissor beats paper"
        
    }
   
    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1
        return "You win, paper beats rock"
        
    }
    
    else if (computerSelection === "rock" && playerSelection === "scissor"){
        computerScore += 1
        return "You lose, rock beats scissor"
        
    }

    if (computerSelection === "scissor" && playerSelection === "paper") {
        computerScore += 1
        return "You lose, scissor beats paper"
        
    }

    else if (computerSelection === "scissor" && playerSelection === "rock") {
        playerScore += 1
        return "You win, rock beats scissor"
        
    }

    else (computerSelection, playerSelection) 
        computerScore += 1
        playerScore += 1    
        return "Oh no, draw! No points"

  
 }



const playRoundResult = playRound(computerSelection, playerSelection)
console.log ("! " + playRoundResult)

function Result (playerScore, computerScore){
    if (playerScore > computerScore) {
        return "You won the game"
    }
    else if (computerScore > playerScore){
        return "You lose the game"
    }
    else (computerScore, playerScore)
    return "The game ends in a draw!"
}
const endResult = Result (playerScore, computerScore)

for (let i=0; i < 4; i++) {
    
    const playerSelection = getPlayerSelection ()
    const computerSelection = getComputerChoice ()
    const playRoundResult = playRound(computerSelection, playerSelection)
    const endResult = Result (playerScore, computerScore)

    console.log ("Your choice is " + playerSelection)
    console.log ("Computer got " + computerSelection)
    console.log ("! " + playRoundResult)
}

console.log ("Computer: " + computerScore)
console.log ("You: " + playerScore)


console.log (endResult)   

