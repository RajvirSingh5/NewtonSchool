const brainstromDinner = require("./library");

//Native promise version:

function nativePromiseDinner() {
	brainstromDinner().then((meal) => {
		console.log(`I'm going to make ${meal} for dinner.`);
	});
}

async function announceDinner() {
	let meal = await brainstromDinner();
	console.log(`I'm going to make ${meal} for dinner.`);
	
	
}

announceDinner();