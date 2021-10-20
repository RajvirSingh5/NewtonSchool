/*
This is the shopForBeans function. 
It uses a setTimeout() function to simulate a time-consuming asynchronous action. 
The function returns a promise with a resolved value of a string representing a type of bean. 
It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
	return new Promise((resolve, reject) => {
		const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
		setTimeout(() => {
			let randomIndex = Math.floor(Math.random() * 4);
			let beanType = beanTypes[randomIndex];
			console.log(`2. I bought ${beanType} beans because they were on sale.`);
			resolve(beanType);
		},1000);
		
	});
}

let soakTheBeans(beanType) => {
	return new Promise((resolve, reject) => {
		console.log(`Time to soak the beans.`);
		setTimeout(() => {
			console.log(`...The ${beanType} beans are softened.`);
			resolve(true);
		}, 1000);
	});
}

let cookTheBeans = (isSoftened) => {
	return new Promise((resolve, reject) => {
		console.log('Time to cook the beans.');
		setTimeout(() => {
			if(isSoftened) {
				console.log(`.. The beams are soacked`);
				resolve('\n\Dinner is served!');
			}
		},1000);
	});
}

/* This function returns true 50% of the time */
let randomSuccess = () => {
	let num = Math.random();
	if(num < .5) 
		return true;
	else 
		return false;
}


/* This function returns a promise with 50% success rate */

let cookBeanSouffle = () => {
	return new Promise((resolve, reject) =>{
		console.log(`Fingers crossed .... Putting the Bean Souffle in the overn`);
		setTimeout(() => {
			let success = randomSuccess();
			if(success)
				resolve('Bean Souffle');
			else
				reject('Dinner is ruined!');
		}, 1000);
	});
}


let cookBeans = () => {
	return new Promise ((resolve, reject) => {
		setTimeout(()=>{
			resolve('beans');
		},1000);
	});
}

let steamBroccoli = () => {
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			resolve('broccoli');
		},1000);
	})
}


let cookRice = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('rice');
		},1000);
	});
}

let backeChicken = () = {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('chicken');
		}, 1000);
	});
}


module.export = {shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle, steamBroccoli, cookRice, backeChicken };