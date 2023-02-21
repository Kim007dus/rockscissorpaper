let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function getComputerSelection() {
    let RandomNumber = Math.floor(Math.random() * 3)
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

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore += 1
        return "You lose"

    } else if (computerSelection === "paper" && playerSelection === "scissor") {
        playerScore += 1
        return "You win"

    }

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1
        return "You win"

    } else if (computerSelection === "rock" && playerSelection === "scissor") {
        computerScore += 1
        return "You lose"

    }

    if (computerSelection === "scissor" && playerSelection === "paper") {
        computerScore += 1
        return "You lose"

    } else if (computerSelection === "scissor" && playerSelection === "rock") {
        playerScore += 1
        return "You win"

    } else(computerSelection, playerSelection)
    return "Draw"


}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('playing')
        const playerSelection = button.id 
        console.log ("Your choice is " + playerSelection)
        button.classList.add (getComputerSelection ())
        const computerSelection = getComputerSelection()
        console.log("Computer got " + computerSelection)
        
        button.classList.add (playRound())
        const playerRoundResult = playRound (computerSelection, playerSelection)
        console.log (playerRoundResult)
        })

})



