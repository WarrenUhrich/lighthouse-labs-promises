const setTimeoutPromise = require('./timeout-promise');

const promise1 = setTimeoutPromise(() => console.log(1), 1000);
const promise2 = setTimeoutPromise(() => console.log(2), 500);
const promise3 = setTimeoutPromise(() => console.log(3), 10);
const promise4 = setTimeoutPromise(() => console.log(4), 2000);
const promise5 = setTimeoutPromise(() => console.log(5), 123);
const promise6 = setTimeoutPromise(() => console.log(6), 1500);
const promise7 = setTimeoutPromise(() => console.log(7), 1200);

// We want to wait for ALL 7 to finish before moving on to a next step.

const promisesArray = [promise1, promise2, promise3, promise4, promise5, promise6, promise7];

// Promise.all waits for ALL promises in an array to resolve.
Promise
    .all(promisesArray)
    .then((arrayOfResolveValues) => {
        console.log('All timeouts complete!');
    })
    .catch((error) => console.log(`Error:`, error));
