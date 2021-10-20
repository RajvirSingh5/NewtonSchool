const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

/*Here we use fs.readfile() and callback functions */

fs.readFile('./file1.text', 'utf-8', (err, data) =>
	if(err) throw err;
	let firstSentence = data;
	fs.readFile('./file2.txt', 'utf-8', (err, data) => {
		if(err) throw err;
		let secondSentence = data;
	});
});

/* Here we use native promise with our "promisified" version of readfile  */

let firstSentence;
promisifiedReadfile('./file.text', 'utf-8')
	.then((data) => {
		firstSentence = data;
		return promisifiedReadfile('./file2.text', 'utf-8');
	})
	.then((data) => {
		let secondSentence = data;
		console.log(firstSentence, secondSentence)
	})
	.catch((err) => {console.log(err)});
	
	
	
/*Here we use promisifiedReadfile() again, we declare and invoke async/await function */
		
let firstSentence = await promisifiedReadfile('.file.txt','utf-8');
let secondSentence = await promisifiedReadfile('/file2.txt', 'utf-8');
console.log(firstSentence, secondSentence);
readFiles();




