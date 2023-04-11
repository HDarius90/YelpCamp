function sum (...numbers) {
    return numbers.reduce((total, sum) => total + sum);
}

function ceremony(gold, silver, ...everyoneElse) {
    console.log(`The gold medal goes to${gold}`);
    console.log(`The silver medal goes to${silver}`);
    console.log(`Thx for everyone else: ${everyoneElse}`);
}

