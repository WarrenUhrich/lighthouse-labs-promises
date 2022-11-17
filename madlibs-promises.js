const readline = require('readline-promise').default;

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];

rlp.questionAsync('How do you feel about Node.js? ')
   .then((answer) => {
    // console.log('Answer:', answer);
    answers.push(answer);
    
    // return {favouriteLanguage: 'JavaScript'};
    return rlp.questionAsync('What\'s your name? ');
   })
   .then((answer) => {
    // console.log(answer);
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite activity? ');
   })
   .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What do you listen to while doing that? ');
   })
   .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which meal is your favourite? ');
   })
   .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('What\'s your favourite thing to eat for that meal? ');
   })
   .then((answer) => {
    answers.push(answer);
    return rlp.questionAsync('Which sport is your absolute favourite? ');
   })
   .then((answer) => {
    answers.push(answer);

    rlp.close();

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


// console.log(q);
