const setTimeoutPromise = (callback, timeInMs, forceReject=false) => {

    return new Promise((resolve, reject) => {
        if(forceReject === true) return reject('Fail!');

        setTimeout(() => {
            callback();
            resolve('Success!');
        }, timeInMs);

    });

};

module.exports = setTimeoutPromise;
