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
function RPS(player){
    let compChoice;
    const compNum = generateComputer();
    if (compNum == 1){
        compChoice = "rock"
        if(player.toLowerCase() == "rock"){
            alert("tie")  
        }
        else if(player.toLowerCase() == "paper"){
            alert("Player Wins")
        }
        else{
            alert("Computer Wins")
        }
    }
    else if(compNum == 2){
        compChoice = "paper"
        if(player.toLowerCase() == "rock"){
            alert("Computer Wins")
        }
        else if(player.toLowerCase() == "paper"){
            alert("Tie")
        }
        else{
            alert("Player Wins")
        }
    }
    else{
        compChoice = "scissors"
        if(player.toLowerCase() == "rock"){
            alert("Player Wins")
        }
        else if(player.toLowerCase() =="paper"){
            alert("Computer Wins")
        }
        else{
            alert("Tie")
        }
    }
}

function game(){
    let compScore = 0;
    let playerScore = 0;
    for (let i = 1; i < 6; i++){
        const result = prompt("Choose either rock, paper, or scissors (round of 5)");
        console.log("Round " + i);
        RPS(result);
    }
}