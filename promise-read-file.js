const fs = require('fs');

const fsPromises = fs.promises;

fsPromises.readFile('./notes.txt')
          .then((result) => {
            // console.log(result);
            return String(result);
          })
          .then((fileContent) => {
            console.log(fileContent);
            const lines = fileContent.split('\n');
            return lines;
          })
          .then((lines) => {
            console.log(lines);
          })
          .catch((error) => {
            console.log('File not found or unreadable.')
          });
