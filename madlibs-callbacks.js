const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];

rl.question('How do you feel about Node.js? ', (answer) => {
    // console.log('Answer received:', answer);
    answers.push(answer);

    rl.question('What\'s your name? ', (answer) => {
        answers.push(answer);

        rl.question('What\'s your favourite activity? ', (answer) => {
            answers.push(answer);

            rl.question('What do you listen to while doing that? ', (answer) => {
                answers.push(answer);

                rl.question('Which meal is your favourite? ', (answer) => {
                    answers.push(answer);

                    rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
                        answers.push(answer);

                        rl.question('Which sport is your absolute favourite? ', (answer) => {
                            answers.push(answer);

                            // console.log(answers);

                            rl.close(); // Hey, please stop listening for more answers.

                            const likesNodeJs = answers[0];
                            const name = answers[1];
                            const activity = answers[2];
                            const music = answers[3];
                            const meal = answers[4];
                            const food = answers[5];
                            const sport = answers[6];

                            console.log(); // newline
                            console.log('Your madlib is ready!');
                            console.log(`My name is ${name}. I really like ${activity}! When I eat ${meal}, I enjoy ${food}. It really energizes me for ${sport}. NodeJS is pretty ${likesNodeJs}, but I listen to ${music} while writing code! That\'s my story.`);
                        });
                    });
                });
            });
        });
    });
});