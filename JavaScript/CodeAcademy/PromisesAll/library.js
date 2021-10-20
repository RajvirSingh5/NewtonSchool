

const checkAvailability = (itemName, distributorName) => {
	console.log(`Checking availability of ${itemName} at ${distributorName}...`);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(restockSuccess()) {
				console.log(`${itemName} are in stock at ${distributorName}`);
				resolve(itemName);
			}
			else {
				reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
			}
		}, 1000);
		
	});
	
};


module.exports = { checkAvailability };

function restockSuccess() {
	return(Math.random() > .2);
}


	
	