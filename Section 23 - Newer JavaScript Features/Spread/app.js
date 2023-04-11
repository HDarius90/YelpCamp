console.log(..."abc");
console.log(...[1, 2, 3, 4]);
function add (a, b) {
return a + b
}
let nums = [1,3]
console.log(add(...nums));

let me = {age:32,name: 'Darius',family:'husband', eyecolor:'brown'}
let you = {age:32,name: 'Sziszi',family:'wife'}
console.log({...me, ...you});