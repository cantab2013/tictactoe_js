window.onload = function (event) {

	// DECLARATIONS
	var record = new Array(9), currentPlay, winnerFound;
	var arr = document.querySelectorAll(".button");
	var msg = document.getElementById("msg_display_value");
	
	// FUNCTIONS DEFINITION

	var displayWin = function (nextPlay, i1, i2, i3) {
		arr[i1].style.background = "yellow";
		arr[i2].style.background = "yellow";
		arr[i3].style.background = "yellow";
		msg.innerHTML = "Game Over! " + ((nextPlay === "O") ? "X" : "O") + " wins!";
	}

	var isTied = function () {
		for (var i = 0, product = 1; i < 9; i++) {
			product *= record[i];
		}
		return ((product > 0) && !winnerFound);
	}	

	var updateRecord = function () {
		for (var i = 0; i < 9; i++) {
			switch (arr[i].innerHTML) {
				case "X":
					record[i] = 1;
					break;
				case "O":
					record[i] = 2;
					break;
				default:
					record[i] = 0;
			}
		}
	}

	var checkWinner = function () {
		switch(true) {
			case ((record[0] === record[1]) && (record[1] === record[2]) && (record[0] > 0)):
				displayWin(currentPlay, 0, 1, 2);
				winnerFound = true;
				break;
			case ((record[3] === record[4]) && (record[4] === record[5]) && (record[3] > 0)):
				displayWin(currentPlay, 3, 4, 5);
				winnerFound = true;
				break;
			case ((record[6] === record[7]) && (record[7] === record[8]) && (record[6] > 0)):
				displayWin(currentPlay, 6, 7, 8);
				winnerFound = true;
				break;
			case ((record[0] === record[3]) && (record[3] === record[6]) && (record[0] > 0)):
				displayWin(currentPlay, 0, 3, 6);
				winnerFound = true;
				break;
			case ((record[1] === record[4]) && (record[4] === record[7]) && (record[1] > 0)):
				displayWin(currentPlay, 1, 4, 7);
				winnerFound = true;
				break;
			case ((record[2] === record[5]) && (record[5] === record[8]) && (record[2] > 0)):
				displayWin(currentPlay, 2, 5, 8);
				winnerFound = true;
				break;
			case ((record[0] === record[4]) && (record[4] === record[8]) && (record[0] > 0)):
				displayWin(currentPlay, 0, 4, 8);
				winnerFound = true;
				break;
			case ((record[2] === record[4]) && (record[4] === record[6]) && (record[2] > 0)):
				displayWin(currentPlay, 2, 4, 6);
				winnerFound = true;
				break;
			case (isTied()):
				msg.innerHTML = "Game Over! You Tied!";		
				break;
			default:
				msg.innerHTML = currentPlay + " is next...";
		}	
	}

	var initializeGame = function () {
		currentPlay = "X";
		msg.innerHTML = "X Plays First...";
		record = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		winnerFound = false;
		for (var i = 0; i < 9; i++) {
			arr[i].innerHTML = "";
			arr[i].style.background = "black";
		}
	}

 	var playGame = function () {
		initializeGame();

		for (var i = 0; i < 9; i++) {
			arr[i].onclick = function (event) {
				if ((this.innerHTML === "") && !winnerFound) {
					if (currentPlay === "X") {
						this.innerHTML = currentPlay;
						this.style.color = "red";			
						updateRecord();
						currentPlay = "O";
						checkWinner();
					}
					else {
						this.innerHTML = currentPlay;
						this.style.color = "blue";			
						updateRecord();
						currentPlay = "X";			
						checkWinner();
					}	
				}
			}
		}
	}

	// GAME BODY
	playGame();

	restart.onclick = function (event) {
		playGame();
	}

}