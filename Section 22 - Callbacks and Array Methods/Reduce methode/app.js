const numbers = [10, 12, 3, 7, 9];
/* let total = 0;;
for (const number of numbers) {
    total += number;
}
console.log(total); */

const sum = numbers.reduce((total, number) => total + number);
console.log(sum);

const lowest = numbers.reduce((min, number) => {
    if (number < min){
        return number;
    } else {
        return min;
    }
}, 2)

console.log(lowest);