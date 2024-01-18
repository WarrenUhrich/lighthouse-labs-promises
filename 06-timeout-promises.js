// setTimeout(() => {
//     console.log('waited 2s via callback');
// }, 2000);

const setTimeoutPromise = (callback, timeInMs, forceReject=false) => {

    return new Promise((resolve, reject) => {
        if(forceReject === true) return reject('Fail!');

        setTimeout(() => {
            callback();
            resolve('Success!');
        }, timeInMs);

    });

};

setTimeoutPromise(() => {
    console.log('waited 2s via promise');
}, 2000, false)
.then(message => console.log(`This is from a .then()! Message: ${message}`))
.catch(message => console.log(`Error: ${message}`));

// const myPromise = setTimeoutPromise(() => {
//     console.log('waited 2s via promise');
// }, 2000);

// console.log('myPromise:', myPromise); // Promise {<pending>}

// myPromise.then(message => console.log(`This is from a .then()! Message: ${message}`))
// myPromise.catch(message => console.log(`Error: ${message}`));

