const Http = require('http')
const { url } = require('inspector')

const server = Http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
})

server.listen(3000)