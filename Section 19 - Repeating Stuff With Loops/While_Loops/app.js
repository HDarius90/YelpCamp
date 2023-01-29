/* const magicWord = 'Please';

let guess = prompt("Say the magic word");
while (guess !== magicWord){
    guess = prompt("Say the magic word");
}
console.log("CONGRATS!"); */




let say = prompt("Hey, say something!")
while (true){
    say = prompt(say);
    if (say.toLowerCase() === "stop copying me") {
        break;
        }
}
console.log('OK, YOU WIN!');