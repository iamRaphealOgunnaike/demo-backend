const  http = require('http');
//const server = http.createServer((req, res) => {
//   resizeBy.end('welcome');
//})

//using Event Emitter API
const server = http.createServer();

// emmits request event 
// subscribe to it / listen for it / rspsond to it

server.on('request', (req, res) => {
    res.end('Weclcome')
})

server.listen(5000)