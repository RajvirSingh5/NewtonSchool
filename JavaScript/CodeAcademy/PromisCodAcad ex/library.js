const store = {
	sunglasses: {
		inventory: 817,
		cost: 9.99
	},
	
	pants:{
		inventory: 236,
		cost: 7.88
	},
	
	bags:{
		inventory: 18,
		cost:12.99
	},
	
	shirts:{
		inventory: 800,
		cost:15.3
	}
	
}


const checkInventory = (order) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const itemsArr = order.items;
			let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
			
		if(inStock) {
			let total = 0;
			itemsArr.forEach(item => {
				total += item[1] * store[item[0]].cost
			});
			console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
			resolve([order, total]);
		}
		else {
			reject(`The order could not be completed because some items are sold out.`);
		}
		
	}, generateRandomDelay());
	
	});
};

const processPayments = (responseArray) => {
	const order = responseArray[0];
	const total = responseArray[1];
	return new Promise((resolve, reject) => {
		setTimeout(() = {
			if(hasEnoughMoney) {
				console.log('Payment proceeded with giftcard. Generating shipping label.');
				let trackingNum = generateTrackingNumber();
				resolve([order, trackingNum]);
			}
			else {
				reject(`Cannot process order: gifterd balance was low`);
			}
		
		}, generateRandomDelay());

	});
	
};

const shipOrder = (responseArray) => {
	const order = responseArray[0];
	const trackingNum = responseArray[i];
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`The order has been shipped. The tracking Number is : ${trackingNum}`);
		}, generateRandomDelay());
		
	});
};

/* This function generates a random number to serve as a "tracking number" on the shipping lable.

In real life this would n't be a random number */

function generateTrackingNumber() {
	return Math.floor(Math.random() * 100000);
}

function generateRandomDelay() {
	return Math.floor(Math.random() * 2000);
}


module.exports = {checkInventory, processPayments, shipOrder};



	