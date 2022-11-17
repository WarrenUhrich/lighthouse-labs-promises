const timeoutPromise = require('./timeout-promise');

const promiseNum1 = timeoutPromise('Timeout Promise 1');
const promiseNum2 = timeoutPromise('Timeout Promise 2');
const promiseNum3 = timeoutPromise('Timeout Promise 3');

Promise
    .race([promiseNum1, promiseNum2, promiseNum3])
    .then((firstResponse) => {
        console.log('This one won the race:', firstResponse);
    });
