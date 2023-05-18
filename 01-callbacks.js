// One of two rules must apply to be considered higher-order.
// 1. Take in a function as an argument
// 2. Return a function as its result

// const higherOrderFunction = (callback) => {
//     console.log('1. Beginning of higher order func.');
//     callback();
//     console.log('2. End of higher order func.');
// };

// higherOrderFunction(() => {
//     console.log('3. I\'m a callback!');
// });

// higherOrderFunction(() => {
//     let sum = 3 + 5 + 6;
//     console.log('sum is:', sum);
// });

setTimeout(() => {
    console.log('1. Three seconds have passed.');
}, 3000);
console.log('2. End of file.');
