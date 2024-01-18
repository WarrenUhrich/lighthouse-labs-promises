// Callbacks
// Any function passed in to another as an argument.

// Higher order functions - these are any functions that meet at
// least one of the following criteria:
// 1. Accepts a function as a parameter/argument
// 2. Returns a function as its result

// const higherOrderFunction = (callback) => {
//     console.log('Higher order function started!');

//     callback();

//     console.log('Higher order function ended!');
// };

// higherOrderFunction(() => {
//     console.log('I am an anonymous function!');
// });

// higherOrderFunction(() => {
//     let sum = 0;
//     sum = 5 + 10;
//     console.log(`5 + 10 = ${sum}`);
// });

console.log('1. Before timeout.');
setTimeout(() => {
    console.log('2. 3 seconds have passed.');
}, 3000);
console.log('3. After timeout.');
