const timeoutPromise = require('./timeout-promise');

// const promise1 =
//     timeoutPromise('Promise #1')
//         .then((message) => {
//             console.log(message, 'Promise #1 promise resolved!');
//         }) 
//         .catch((error) => {
//             console.log(error, 'Promise #1 promise rejected!');
//         });


// console.log(promise1); // What will we see? <pending> (it is not yet complete)

// Promise MS promise 1
// Function ?
// Promise object?
// Wait for a message?

const promiseNum1 = timeoutPromise('Timeout Promise 1');
const promiseNum2 = timeoutPromise('Timeout Promise 2');
const promiseNum3 = timeoutPromise('Timeout Promise 3');

Promise
    .all([promiseNum1, promiseNum2, promiseNum3])
    .then((arrayOfResponses) => {
        console.log('All three promises complete:', arrayOfResponses);
    });
