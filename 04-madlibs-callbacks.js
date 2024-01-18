const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = []; // List of answers to keep track of from user.

// 1. Print question to user.
// 2. Accept user's answer (add to array.)

rl.question('How do you feel about NodeJS?', (answer) => {
    // console.log('Answer received:', answer);
    answers.push(answer);

    rl.question('What\'s your name?', (answer) => {
        answers.push(answer);

        rl.question('What\'s your favourite activity?', (answer) => {
            answers.push(answer);

            rl.question('What\'s your favourite season?', (answer) => {
                answers.push(answer);

                rl.question('What\'s your favourite food?', (answer) => {
                    answers.push(answer);

                    rl.question('What\'s your favourite band?', (answer) => {
                        answers.push(answer);

                        rl.close();

                        // console.log('answers:', answers);

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
                });
            });
        });
    });
});
