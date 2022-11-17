try {
    throw new Error('Custom error.');
    // const abc = '123';
    // abc = 'abc';
} catch (error) {
    console.log('Something went wrong!');
}