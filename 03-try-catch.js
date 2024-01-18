try {
    const abc = 'abc';
    abc = 123; // This would crash the program.
} catch(error) {
    // console.log('Error:', error);
    console.log('Please don\'t re-assign const variables...');
}

console.log('My file/code still runs, even after error.');
