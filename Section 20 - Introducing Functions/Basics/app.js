function printHeart () {
    console.log("<3");
} 
printHeart();



//The function should print out an uppercased version of message 3 times

function rant (message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

rant("Hey there!")




/* write a function called isSnakeEyes, which accepts two numbers as inputs,
representing two dice.  If the two numbers are both 1's, please 
print "Snake Eyes!" otherwise print "Not Snake Eyes!" */

function isSnakeEyes(num1, num2){
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes(1,1);

// Write a simple function multiply which accepts two numerical arguments
// and returns their product (multiply them together).
function multiply (num1, num2){
return num1*num2;
}

console.log(multiply(5,4));



//It should accept a single number argument, which we will call temperature
//If temperature is greater than or equal to 75, return true. 
//Otherwise, return false.   

function isShortsWeather(temperature){
if (temperature >= 75) {
    return true;
}else {
    return false;
}
}

console.log(isShortsWeather(100));



/* Please write a function called lastElement which accepts a single array 
argument.  The function should return the last element of the 
array (without removing the element).  
If the array is empty, the function should return null. */

function lastElement(array) {
    if (array.length === 0) {
        return null;
    } else {
        return array[array.length-1];
    }
}

//Define a function called capitalize that accepts a string 
//argument and returns a new string with the first letter capitalized 

function capitalize(str) {
    let capitalStr = str[0].toUpperCase() + str.slice(1);
    return capitalStr;
}
console.log(capitalize("lol"));



// Write a function called sumArray which accepts a single argument: an array of numbers. 
//  It should return the sum of all the numbers in the array.
function sumArray(numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

/* Write a function called returnDay. 
this function takes in one parameter (a number from 1-7) 
and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)
  If the number is less than 1 or greater than 7, 
  the function should return null. 
  In some countries Sunday is treated as the first day of the week, 
  but for this exercise we will use Monday as the first day. */

  function returnDay(number) {
    switch (number) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;    
        case 3:
            return 'Wednesday';
            break;    
        case 4:
            return 'Thursday';
            break;    
        case 5:
            return 'Friday';
            break;    
        case 6:
            return 'Saturday';
            break;   
        case 7:
            return 'Sunday';
            break;    
        default:
            return null;
            break;
    }
  }
  console.log(returnDay(8));
