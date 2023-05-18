const readline = require('readline-promise').default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];

rl.questionAsync('How do you feel about NodeJS? ')
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your name? ');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite activity? ');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite season? ');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite food? ');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite band? ');
    })
    .then((answer) => {
        rl.close();

        answers.push(answer);
        
        const likeNodeJS = answers[0];
        const name = answers[1];
        const activity = answers[2];
        const season = answers[3];
        const food = answers[4];
        const band = answers[5];

        console.log(`Hello ${name}! I hear you feel that NodeJS is ${likeNodeJS}. Your favourite activity is ${activity}!? That's pretty cool. ${season} is coming up, better warm up some of your ${food}. Want to listen to ${band} tomorrow? See you then, promise!`);
    })
    .catch((error) => {
        console.log('An error occurred.');
    });
