const fs = require('fs');

const fsPromises = fs.promises;

// fsPromises
//     .readFile('./programming-languages.txt')
//     .then((result) => {
//         // console.log(result);
//         // console.log(String(result));

//     });

fsPromises
    .readFile('./programming-languages.txt')
    .then(result => String(result))
    .then(content => content.split('\n'))
    .then(programmingLanguages => console.log(programmingLanguages));
