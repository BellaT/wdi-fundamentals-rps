////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
        console.log("Player wins!");
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
        console.log("Player wins!");
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
        console.log("Player wins!");
    }
    else if (computerMove === "rock" && playerMove === "scissors") {
        winner = "computer";
        console.log("Computer wins!");
    }
    else if (computerMove === "scissors" && playerMove === "paper") {
        winner = "computer";
        console.log("Computer wins!");
    }
    else if (computerMove === "paper" && playerMove === "rock") {
        winner = "computer";
        console.log("Computer wins!");
    }
    else if (computerMove === playerMove) {
        winner = "tie";
        console.log("It's a tie!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    
    	if (winner === "player") {
    		playerWins += 1;
    		console.log('Good move! You chose ' + playerMove + ' while Computer chose ' + computerMove);
  			console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    	}
    	else if (winner === "computer") {
    		computerWins += 1;
    		console.log("Bad luck! You chose " + playerMove + " while Computer chose " + computerMove);
    		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    	}
    	else if (winner === "tie") {
    		console.log("It's a tie! You both threw " + playerMove + ".");
    	}
    	else if (playerWins === 5) {
    		console.log("Congratulations, YOU WON!!");
    	}
    	else if (computerWins === 5) {
    		console.log("Game Over! Better luck next time!");
    	}
    }
    return [playerWins, computerWins];
}
    playToFive();

