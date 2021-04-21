const events = require('events');

let myEmmitter = new events.EventEmitter();
myEmmitter.on('someEvent', (msg) => {
    console.log('I got a message:', msg);
})

myEmmitter.emit('someEvent', 'hello engineers')
