/* Below function is a call back hell */

const brainstromDinner = () {
	return new Promise((resolve, reject) =>{
		console.log(`I have to decide what's for dinner...`);
		setTimeout(()=> {
			console.log('Should I make salad ...?');
			setTimeout(() => {
				console.log('Should I make eggs ...?');
				setTimeout(() => {
					console.log('Should I make bathua ...?');
					resolve('beans');
				}, 1000);
			},1000);
		},1000);
		
	});
};

module.export = brainstromDinner;
		