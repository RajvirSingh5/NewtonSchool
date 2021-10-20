
const { checkAvailability } = require('./library.js');

const onFulfill = (itemsArray) => {
	console.log(`Items checked: ${itemsArray}`);
	console.log(`Every item was available from the distribution. Placing order now.`);
	};
	
const onReject = (rejectReason) => {
	console.log(rejectReason);
	};
	
let checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

let checkPants = checkAvailability('pants', 'Favorite Supply Co.');

let checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
	.then(onFulfill)
	.catch(onReject);


