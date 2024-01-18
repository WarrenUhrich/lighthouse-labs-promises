/**
 * Promises are intended to give us a new async tool in our toolbelt.
 * Promises are us setting a contract for something we're doing.
 * 
 * Bob is moving on Saturday. He asks Henry for help on Saturday.
 * Pending  (we're waiting to see what happens)
 * Resolved (he shows up)
 * Rejected (he didn't make it)
 */

const myPromise = new Promise((resolve, reject) => {

    const randNum = Math.random();

    if(randNum > 0.5) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }

});

// console.log('myPromise:', myPromise);

myPromise
    .then((resolveMessage) => {
        console.log('Resolved! Message was:', resolveMessage);
    })
    .catch((rejectMessage) => {
        console.log('Rejected! Message was:', rejectMessage);
    });
