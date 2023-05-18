const timeoutPromise = (message, shouldWeReject=false) => {
    return new Promise((resolve, reject) => {
        if(shouldWeReject) {
            reject('Promise failed.');
        }

        const randomMs = Math.floor(Math.random() * 3000);
        setTimeout(() => {
            resolve(message);
        }, randomMs);
    });
};

module.exports = timeoutPromise;
