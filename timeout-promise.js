const timeoutPromise = (message, shouldWeReject=false) => {
    return new Promise((resolve, reject) => {
        if (shouldWeReject === true) {
            reject('Promise failed:', message);
        }

        const randomMs = Math.floor(Math.random() * 3000);
        setTimeout(() => {
            resolve('Promise run with message: ' + message);
        }, randomMs);
    })
};

module.exports = timeoutPromise;
