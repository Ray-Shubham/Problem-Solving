// 7. Write a JavaScript program to change the string to title (first letter of every word should be in upper case)

// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(" ");
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }
// const inputString = "hello world this is a sample string";
// const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
// console.log("Capitalized string:", capitalizedString);


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter Your Name: ', (input) => {
//     // Add input validation
//     if (!input.trim()) {
//         console.log('Name cannot be empty!');
//     } else {
//         console.log(`Your Name is: ${input.trim()}`);
//     }
//     rl.close();
// });

// // Handle the close event
// rl.on('close', () => {
//     console.log('Input process completed');
//     process.exit(0);
// });



// const input = process.argv[2];
// if (input) {
//     console.log(`Your Name is: ${input}`);
// } else {
//     console.log('No input provided.');
// }



process.stdout.write('Enter Your Name: ');
process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your Name is : ${input}`);
    process.exit();
});