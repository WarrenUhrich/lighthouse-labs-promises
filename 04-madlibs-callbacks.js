const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];

rl.question('How do you feel about NodeJS? ', (answer) => {
    // console.log('Answer received:', answer);
    answers.push(answer);

    rl.question('What\'s your name? ', (answer) => {
        answers.push(answer);

        rl.question('What\'s your favourite activity? ', (answer) => {
            answers.push(answer);
    
            rl.question('What\'s your favourite season? ', (answer) => {
                answers.push(answer);
        
                rl.question('What\'s your favourite food? ', (answer) => {
                    answers.push(answer);
            
                    rl.question('What\'s your favourite band? ', (answer) => {
                        rl.close();

                        answers.push(answer);

                        // console.log(answers);

                        const likeNodeJS = answers[0];
                        const name = answers[1];
                        const activity = answers[2];
                        const season = answers[3];
                        const food = answers[4];
                        const band = answers[5];
                
                        console.log(`Hello ${name}! I hear you feel that NodeJS is ${likeNodeJS}. Your favourite activity is ${activity}!? That's pretty cool. ${season} is coming up, better warm up some of your ${food}. Want to listen to ${band} tomorrow? See you then, promise!`);
                    });
                });
            });
        });
    });
});


