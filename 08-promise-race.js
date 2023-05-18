const timeoutPromise = require('./06-timeout-promise');

const promise1 = timeoutPromise('Timeout Promise 1');
const promise2 = timeoutPromise('Timeout Promise 2');
const promise3 = timeoutPromise('Timeout Promise 3');
const promise4 = timeoutPromise('Timeout Promise 4');
const promise5 = timeoutPromise('Timeout Promise 5');

const promisesArray = [promise1, promise2, promise3, promise4, promise5];

Promise.race(promisesArray)
    .then((firstResponse) => {
        console.log(
            'First response:\r\n',
            '\t' + firstResponse
        );
    });
