const readline = require('readline-promise').default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = []; // List of answers to keep track of from user.

rl
    .questionAsync('How do you feel about NodeJS?')
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your name?');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite activity?');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite season?');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite food?');
    })
    .then((answer) => {
        answers.push(answer);
        return rl.questionAsync('What\'s your favourite band?');
    })
    .then((answer) => {
        answers.push(answer);
        
        rl.close();

        const nodejs = answers[0];
        const name = answers[1];
        const activity = answers[2];
        const season = answers[3];
        const food = answers[4];
        const band = answers[5];

        console.log(
            `Hello ${name}! I hear you feel that NodeJS is ${nodejs}.`,
            `Your favourite activity is ${activity}!? Neato!`,
            `${season} is coming up, are you excited?`,
            `Better warm up with some ${food}, right? All while`,
            `listening to ${band}!`
        );
    });
