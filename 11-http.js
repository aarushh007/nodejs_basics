const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('I got a request on ', req.url, '!')
    switch(req.url){
        case '/':
            res.write('hello engineers');
            res.end();
            break;
        case '/about':
            res.write('About page');
            res.end();
            break;
        default:
            res.write(`
                <h1>Whoops!</h1>
                <h3>Page not found</h3>
                <a href='/'>Go back to home page</a>
            `)
            res.end();
            break;
    }
})

server.listen(5000)