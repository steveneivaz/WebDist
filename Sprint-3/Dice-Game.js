//Javascript function to roll Dice//

function RollDice() {
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;  //Function that creates teh random number for the html file//
	document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;
}