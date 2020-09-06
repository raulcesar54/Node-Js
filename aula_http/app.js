var http = require('http')

http.createServer((request,response) => {
    response.end('<h1>Ola mundo 😎</h1>')
}).listen(8181)
console.log('Server running 👌')