function rolDice(numSide = 6) {
    console.log(Math.floor(Math.random() * numSide) + 1);
}

rolDice();
rolDice(12);