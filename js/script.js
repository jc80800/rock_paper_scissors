/*
Let 1 = Rock
Let 2 = Paper
Let 3 = Scissors

*/


//Generates Computer's choice
function generateComputer(){
    let x = ((Math.random() * 2));
    return Math.round(x);
}

//Checks player's choice and compares to computer
function RPS(playerChoice, player){
    let compChoice;
    const compNum = generateComputer();
    if (compNum == 1){
        compChoice = "rock"
        if(player.toLowerCase() == "rock"){
            console.log("tie")
        }
        else if(player.toLowerCase() == "paper"){
            console.log("Player Wins")
        }
        else{
            console.log("Computer Wins")
        }
    }
    else if(compNum == 2){
        compChoice = "paper"
        if(player.toLowerCase() == "rock"){
            console.log("Computer Wins")
        }
        else if(player.toLowerCase() == "paper"){
            console.log("Tie")
        }
        else{
            console.log("Player Wins")
        }
    }
    else{
        compChoice = "scissors"
        if(player.toLowerCase() == "rock"){
            console.log("Player Wins")
        }
        else if(player.toLowerCase() =="paper"){
            console.log("Computer Wins")
        }
        else{
            console.log("Tie")
        }
    }
}

function game(){
    let compScore = 0;
    let playerScore = 0;
    for (let i = 1; i < 6; i++){
        const result = prompt("Choose either rock, paper, or scissors (round of 5)");
        console.log("Round " + i);
        RPS(result, compScore, playerScore);
    }
}