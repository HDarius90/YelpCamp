/* const magicWord = 'Please';

let guess = prompt("Say the magic word");
while (guess !== magicWord){
    guess = prompt("Say the magic word");
}
console.log("CONGRATS!"); */




/* let say = prompt("Hey, say something!")
while (true){
    say = prompt(say);
    if (say.toLowerCase() === "stop copying me") {
        break;
        }
}
console.log('OK, YOU WIN!'); */


let maximum = parseInt(prompt("Please enter a maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter guess"));
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
    if (guess === 'q') break;
    attempts++;
    if (guess < targetNumber) {
        guess = prompt("Too low! Enter guess");
    } else {
        guess = prompt("Too high! Enter guess");
    }
}
if (guess === 'q') {
    console.log('QUIT');
} else {
    console.log('CONGRATS YOU WIN!');
    console.log(`It took you ${attempts} guesses`);

}