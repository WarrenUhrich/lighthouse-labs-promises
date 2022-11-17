const myPromise = new Promise((resolve, reject) => {
    const randNum = Math.random();

    if (randNum > 0.5) {
        resolve('Success');
    } else {
        reject('Failure');
    }
});

myPromise
    .then((message) => {
        console.log('Promise was successful!', message);
    })
    .catch((error) => {
        console.log(error);
    });
