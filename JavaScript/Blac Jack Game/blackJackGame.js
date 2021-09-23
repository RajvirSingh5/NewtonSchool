let player = {
	name: "Per",
	chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementyById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ': $" + player.chips

function getRandomCard() {
	let randomNumber = Math.floor(Math.random()*13) + 1
	if(randomNumber > 10) {
		return 10
	}
	else if(randomNumber === 1) {
		return 11
	}
	else{
		return randomNumber
	}
}

function startGame() {
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}

