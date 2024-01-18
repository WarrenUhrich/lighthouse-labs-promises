const fs = require('fs');

const fsPromises = fs.promises;

const content = `
Promises are a new solution we have to the "async" problem.
Promises can be in one of 3 states:
    1. Pending
    2. Resolved
    3. Rejected
`;

const writeOptions = {encoding: 'utf-8', flag: 'w'};

fsPromises
    .writeFile('./notes.txt', content, writeOptions)
    .then(() => console.log('File was successfully written.'))
    .catch((error) => console.log('Error:', error));
