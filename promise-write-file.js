const fs = require('fs');

const fsPromises = fs.promises;

fsPromises.writeFile('notes.txt', 'Hey, we changed it!\r\n', {
    encoding: 'utf-8', flag: 'w'
})
.then(() => {
    console.log('File write complete!');
});
