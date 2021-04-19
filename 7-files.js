const fs = require('fs');

// reading files 
fs.readFile('./docs/read_text.txt', (err, data)=>{
    err && console.log(err);
    console.log(data.toString());
});

// writing files
fs.writeFile('./docs/write_text.txt', 'Hello world from javascript', () => {
    console.log('file was written');
})

// directories
if (!fs.existsSync('./my_directory')){
    fs.mkdir('my_directory', (err)=>{
        err && console.log(err);
        console.log('folder was created');
    })
} else {
    fs.rmdir('./my_directory', (err) => {
        err && console.log(err);
        console.log('folder was deleted');
    })
}

// deleting files 
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        err && console.log(err);
        console.log('file was deleted')
    })
}