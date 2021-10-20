const shopForBeans = require("./library.js");
const soakTheBeans = require("./library.js");
const cookTheBeans = require("./library.js");
const cookBeanSouffle = require("./library.js");
const steamBroccoli = require("./library.js");
const cookRice = require("./library.js");
const backeChicken = require("./library.js");

async function getBeans() {
	console.log(`1. Heading to the store to buy beans ...`);
	let value = await shopForBeans();
	console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

async function hostDinnerParty() {
	try {
		let resolveVaue = await cookBeanSouffle();
		console.log(`${dinner} is served!`);
	}
	catch(error) {
		console.log(error);
		console.log('Ordering a pizza!');
		
	}
}


hostDinnerParty();

async function serveDinner() {
	const vegetablePromise = steamBroccoli();
	const starchPromise = cookRice();
	const proteinPromise = backeChicken();
	const sidePromise = cookBeans();
	
	console.log(`Dinner is served. 
	We're having ${await vegetablePromise}, 
	${await starchPromise}, 
	${await proteinPromise}, 
	and ${await sidePromise}.
	`);
}

	


