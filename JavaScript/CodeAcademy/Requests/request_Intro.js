
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ['Another', 'More', 'Next', 'Continue', 'Keep going', 'Click me', 'A new one'];

const generateJson = () => {
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			renderRespone(xhr.response);
			changeButton();
		}
	}
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
	xhr.send();
}


const formatJson = (resJson) => {
	resJson = JSON.stringify(resJson);
	let counter = 0;
	return resJson.split('')
	.map(char => {
		switch(char) {
			case ',':
				return `,\n ${''.repeat(counter * 2)}`;
			case '{':
				counter +=1;
				return `\n ${' '.repeat(counter * 2)}`;
			case '}':
				counter -=1;
				return `\n ${' '.repeat(counter * 2) }}`;
			default:
				return char;
		}
	})
	.joint('');
}
		
	
const renderRespone = (jsonResponse) => {
		const jsonSelection = Math.floor(Math.random() * 10);
		display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</prev>`;	
}

const changeButton = () => {
	const newText = Math.floor(Math.random() * 7);
	jsonButton.innerHTML = `${collection[newText]}`;
}

jsonButton.addEventListener('click', generateJson);




