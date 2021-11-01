const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/result'){
		let chunks = [];
		req.on('data', (chunk) => {
			chunks.push(chunk);
		})	
	}
	

	
	if(req.url === '/dummy'){
		res.write(
		
		);
	}
	if(req.url === '/') {
		res.write(<html><body><form action="/result" method="POST"></input type="text" name="dummy"/>);
		res.end();
	}
	
});\

server.listen(3000)