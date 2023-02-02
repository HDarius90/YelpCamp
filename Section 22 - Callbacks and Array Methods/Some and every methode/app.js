/* Define a function called allEvens that accepts a single array of numbers.  
If the array contains all even numbers, return true.  Otherwise, return false. */

function allEvens (numbers){
   return numbers.every(number => number % 2 === 0)
}

const example = [2,5,6,8];
    console.log(allEvens(example));