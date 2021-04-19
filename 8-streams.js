const fs = require('fs');

const readStream = fs.createReadStream('./docs/lorem.txt');
const writeStream = fs.createWriteStream('./docs/stream.txt')
const pipeStream = fs.createWriteStream('./docs/pipe.txt');


// reading and writing
readStream.on('data', (chunk) => {
    console.log('--------N E W   C H U N K--------')
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})

// piping
readStream.pipe(pipeStream);