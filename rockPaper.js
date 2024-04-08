function getComputerChoice()
{
    let ChoiceOfComputer = ['rock', 'paper', 'scissor']
    let NumberOfComputer = Math.ceil(Math.random()*3) - 1;
    return ChoiceOfComputer[NumberOfComputer];
    
}

function playRound(playerSelection, computerSelection) {
    // console.log(`you choose ${playerSelection} and the computer choose ${computerSelection}`)
   
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissor')
            return `You loose! ${computerSelection} beats ${playerSelection}`
        else if (computerSelection === 'rock')
            return `You win! ${playerSelection} beats ${computerSelection}`
        else if (playerSelection === computerSelection) {
            return `It 's a tie! you both choose ${computerSelection}`
        }
    }
    
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissor') {
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
        else if (computerSelection === 'paper') {
            return `You loose! ${computerSelection} beats ${playerSelection}`
        }
        else if (playerSelection === computerSelection) {
            return `It 's a tie! you both choose${computerSelection}`
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'paper') {
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
        else if (computerSelection === 'rock') {
            return `You loose! ${computerSelection} beats ${playerSelection}`
        }
        else if (playerSelection === computerSelection) {
            return `It 's a tie! you both choose ${computerSelection}`
        }
    }
}

function playGame()
{
   
    let computerWins = 0;
    let playerWins = 0;
    for (i = 0; i < 5; i++)
    {
        let playerValue = prompt('enter the rock, paper or scissor').toLowerCase();
        let AllowedChoice = ['rock', 'paper', 'scissor']
        if (!AllowedChoice.includes(playerValue))
        {
            for (; ;)
            {
                playerValue = prompt('Please put scissor, paper or scissor').toLowerCase();
                if (AllowedChoice.includes(playerValue))
                    break;
                
            }
          
        }

        let computerValue = getComputerChoice();
        let result = playRound(playerValue, computerValue);
        console.log(result);
        if (result.includes('win')){
            playerWins++;
        }
        else if (result.includes('loose'))
        {
            computerWins++;
        }
    }
    if (computerWins > playerWins)
    {
        console.log(`The computer won with ${computerWins} and you have ${playerWins}` )
    }
    else if (playerWins > computerWins)
    {
         console.log(`You won with ${playerWins} and the computer have ${computerWins}` )
    }
    else 
    {
        console.log(`It's a tie you both have ${playerWins}`)
    }
}

playGame();