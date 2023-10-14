

function getCOmputerChoice(){
    const CHOICES = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*CHOICES.length)
    let computer_choice = CHOICES[random];
    return computer_choice.toUpperCase();
}

function getPlayerChoice(){
    let player_choice_untrimed = prompt("Make a choice! between 'rock', 'scissors' and 'paper' ");
    let player_choice = player_choice_untrimed.trim();
    return player_choice.toUpperCase();
}

function playRound(playerSelection,computerSelection){
    while(playerSelection == computerSelection){
        getPlayerChoice()
        break;
    }
    if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")||(playerSelection == "PAPER" && computerSelection == "ROCK")){
        console.log(`Your move :${playerSelection} ; computer move :${computerSelection} `);
        console.log("You win!");
    }else if (playerSelection == computerSelection){
        console.log(`Your move :${playerSelection} ; computer move :${computerSelection} `);
        console.log("Same move!")
    }else{

        console.log(`You lose! ${computerSelection}, beats ,${playerSelection}`)
    }
    
}

// function runOneRound(playerSelection,computerSelection){
//     if (playerSelection == "ROCK" && computerSelection =="PAPER"){
//         console.log("You lose! PAPER beats ROCK")
//     }else if(playerSelection == "ROCK" && computerSelection =="ROCK"){
//         console.log("Retry");
//     }else{
//         console.log("You win!")
//     }
// }

function game(){
    for(let i = 0; i<5;i++){
    playRound(getPlayerChoice(),getCOmputerChoice());
    
    }
}


game()