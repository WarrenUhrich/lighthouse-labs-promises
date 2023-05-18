const fs = require('fs');

const fsPromises = fs.promises;

fsPromises.readFile('./notes.txt')
    .then((result) => {
        // console.log(String(result));
        return String(result);
    })
    .then((fileContent) => {
        const lines = fileContent.split('\n');
        return lines;
    })
    .then((arrOfLines) => {
        console.log(arrOfLines);
    })
    .catch((error) => {
        console.log('File not found or unreadable.')
    });
