/* Write an arrow function expression called greet.  
It should accept a single string argument, representing a person's name.  
It should return a greeting string as shown below:

greet("Hagrid") //"Hey Hagrid!" 
greet("Luna") //"Hey Luna!" */

const greet = person => {
    return `Hey ${person}!`;
}

let add = function (a, b) {             //regular function expression
    return a + b;
}

let add2 = (a, b) => {                  //arrow function with parens around param
    return a + b;
}

let isEcen = num => {                   //no parens around param (only when 1 param)
    return num % 2 === 0;
}

let isEven2 = num => {               //implicit return
    num % 2 === 0
}


let isEven3 = num => num % 2 === 0;           //one-liner implicit return
console.log(add(1, 2));



