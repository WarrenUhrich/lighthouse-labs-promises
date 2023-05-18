const myPromise = new Promise((resolve, reject) => {
    const randNum = Math.random();

    if(randNum > 0.5) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

// console.log(myPromise);

myPromise
    .then((message) => {
        console.log('.then says:', message);
    })
    .catch((error) => {
        console.log('.catch says:', error);
    });
