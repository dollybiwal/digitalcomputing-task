
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

rock.addEventListener('click', () => {
	playGame('rock');
});

paper.addEventListener('click', () => {
	playGame('paper');
});

scissors.addEventListener('click', () => {
	playGame('scissors');
});

function playGame(userChoice) {
	const computerChoice = getComputerChoice();
	const gameResult = determineWinner(userChoice, computerChoice);
	result.textContent = gameResult;
}

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return 'It\'s a tie!';
	}
	if (userChoice === 'rock') {
		if (computerChoice === 'scissors') {
			return 'Rock smashes scissors! You win!';
		} else {
			return 'Paper covers rock! You lose!';
		}
	}
	if (userChoice === 'paper') {
		if (computerChoice === 'rock') {
			return 'Paper covers rock! You win!';
		} else {
			return 'Scissors cuts paper! You lose!';
		}
	}
	if (userChoice === 'scissors') {
		if (computerChoice === 'paper') {
			return 'Scissors cuts paper! You win!';
		} else {
			return 'Rock smashes scissors! You lose!';
		}
	}
} 
