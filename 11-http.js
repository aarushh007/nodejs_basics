const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('I got a request on ', req.url)
    if(req.url === '/'){
        res.write('hello engineers')
        res.end();
    }else 
    if(req.url === '/about'){
        res.write('About page')
        res.end();
    } else {
    res.write(`
    <h1>Whoops!</h1>
    <h3>Page not found</h3>
    <a href='/'>Go back to home page</a>
    `)
    res.end()
    }
})

server.listen(5000)