
  
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
