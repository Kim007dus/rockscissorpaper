let playerScore = 0
let computerScore = 0



const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('playing')
    })
    
})



