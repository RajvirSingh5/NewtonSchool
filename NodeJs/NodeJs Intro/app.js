const http = require('http');



const server = http.createServer((req, res) =>{
    console.log('HI')

})

server.listen(3000);
