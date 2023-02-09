
let RandomNumber = Math.floor (Math.random()*3) 
switch (RandomNumber) { 
        case 0: 
        choice = "Rock"
        break;
        case 1: 
        choice = "Paper"
        break;
        case 2: 
        choice = "Scissor"
        }

  
function getComputerChoice () {
    return RandomNumber;
}
