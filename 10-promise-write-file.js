const fs = require('fs');

const fsPromises = fs.promises;

const writeOptions = {
    encoding: 'utf-8',
    flag: 'w'
};

fsPromises.writeFile(
    './notes.txt', // Target file
    'JavaScript was here. :)', // Content to write to file
    writeOptions // Options for write
).then(() => {
    console.log('File is written successfully!');
}).catch((error) => {
    console.log('File not found or insufficient permissions.');
});
