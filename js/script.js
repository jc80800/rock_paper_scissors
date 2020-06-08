/*
Let 1 = Rock
Let 2 = Paper
Let 3 = Scissors

*/
// global variables that keep track of scores
let compScore = 0;
let playerScore = 0;

//Uses querySelector to find a div element
const score = document.querySelector('.score');
const victory = document.querySelector('.victory');

//Creates a new element that will be inserted
const scoreBox = document.createElement('scoreBox');
const victor = document.createElement('victor');

//Set up initial content for the element
scoreBox.textContent = "Computer: " + compScore + "           ||||| Player: " +playerScore ;
victor.textContent = "Who will be the winner?";

//Add the newly created element to the existing div element
score.appendChild(scoreBox);
victory.appendChild(victor);


//Generates Computer's choice
function generateComputer(){
    let x = ((Math.random() * 2));
    return Math.round(x);
}

//Checks player's choice and compares to computer
//Element's content are updated as the game progresses
//Scores are incremented as the game progresses
function RPS(player){
    const compNum = generateComputer();
    if (compNum == 1){
        compChoice = "rock"
        if(player.toLowerCase() == "rock"){
            victor.innerHTML = "Tie";
        }
        else if(player.toLowerCase() == "paper"){
            victor.innerHTML = "Player Wins";
            playerScore++;
        }
        else{
            victor.innerHTML = "Computer Wins";
            compScore++;
        }
    }
    else if(compNum == 2){
        compChoice = "paper"
        if(player.toLowerCase() == "rock"){
            victor.innerHTML = "Computer Wins";
            compScore++;
        }
        else if(player.toLowerCase() == "paper"){
            victor.innerHTML = "Tie";
        }
        else{
            victor.innerHTML = "Player Wins";
            playerScore++;
        }
    }
    else{
        compChoice = "scissors"
        if(player.toLowerCase() == "rock"){
            victor.innerHTML = "Player Wins";
            playerScore++;
        }
        else if(player.toLowerCase() =="paper"){
            victor.innerHTML = "Computer Wins";
            compScore++;
        }
        else{
            victor.innerHTML = "Tie";
        }
    }

    scoreBox.innerHTML = "Computer: " + compScore + "           ||||| Player: " +playerScore ;
}

//Used to play a game of 5 rounds - no longer used
/*
function game(){
    for (let i = 1; i < 6; i++){
        const result = prompt("Choose either rock, paper, or scissors (round of 5)");
        console.log("Round " + i);
        RPS(result);
    }
}
*/