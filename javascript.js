
  
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

const computerSelection = getComputerChoice ()
let playerSelection = prompt ("Do you want Rock, Scissor or Paper?")


function playRound (computerSelection, playerSelection) {
}