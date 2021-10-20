const {checkInventory, processPayments, shipOrder} = require("./library.js");

const order = {
	items: [['sunglasses', 1], ['bags', 2]],
	giftcardBalance: 79.82
};

checkInventory(order)
	.then((resolvedValueArray) => {
		return processPayments(resolvedValueArray);
	})
	
	.then((resolvedValueArray) => {
		return shipOrder(resolvedValueArray);
		
	})
	
	.then((successMessage) => {
		console.log(successMessage);
	}
	
	
	.catch((errorMessage) => {
		console.log(errorMessage);
	});
	
	
	
	/* Response will be
	
	$ node app.js
	All of the items are in stock. The total cost of the order is 35.97.
	Payment processed with giftcard. Generating shipping label.
	The order has been shipped. The tracking number is: 52898.
	*/