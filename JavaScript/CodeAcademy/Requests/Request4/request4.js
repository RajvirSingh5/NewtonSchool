// Information to reach API

const apiKey = '4999c2eac53d4a4cb606ba38238e5c3f';

const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

//AJAX functions

const shortenUrl = () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({destination: urlToShorten});
	const xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			renderResponse(xhr.response);
		}
	}
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apikey);
	xhr.send(data);
}


	
	