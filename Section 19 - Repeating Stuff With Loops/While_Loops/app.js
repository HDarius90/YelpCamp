const magicWord = 'Please';

let guess = prompt("Say the magic word");
while (guess !== magicWord){
    guess = prompt("Say the magic word");
}
console.log("CONGRATS!");