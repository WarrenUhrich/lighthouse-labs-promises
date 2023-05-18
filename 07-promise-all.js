const timeoutPromise = require('./06-timeout-promise');

// const promise = timeoutPromise('First promise experiment.'/*, true*/)
//     .then((message) => { console.log(message); })
//     .catch((error) => { console.log(error); });

// console.log(promise);

const promise1 = timeoutPromise('Timeout Promise 1');
const promise2 = timeoutPromise('Timeout Promise 2');
const promise3 = timeoutPromise('Timeout Promise 3');
const promise4 = timeoutPromise('Timeout Promise 4');
const promise5 = timeoutPromise('Timeout Promise 5');

const promisesArray = [promise1, promise2, promise3, promise4, promise5];

Promise.all(promisesArray)
    .then((arrayOfPromiseResponses) => {
        const response1 = arrayOfPromiseResponses[0];
        const response2 = arrayOfPromiseResponses[1];
        const response3 = arrayOfPromiseResponses[2];
        const response4 = arrayOfPromiseResponses[3];
        const response5 = arrayOfPromiseResponses[4];

        console.log(
            'All 5 promises are complete:\r\n',
            '\t' + response1 + '\r\n',
            '\t' + response2 + '\r\n',
            '\t' + response3 + '\r\n',
            '\t' + response4 + '\r\n',
            '\t' + response5 + '\r\n'
        );
    });
