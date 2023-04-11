const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets);







let boys = ['Adam', 'David'];
let girls = ['Tina', 'Emma'];
let comboParty = boys.concat(girls);
console.log(comboParty);
console.log(comboParty.includes('Tina'));
console.log(comboParty.indexOf('Tina'));
comboParty.reverse();
console.log(comboParty);





let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let coolColors = colors.slice(3);
console.log(coolColors);
let warmColors = colors.slice(0, 3);
console.log(warmColors);
console.log(colors);
console.log(colors.slice(-2));

colors.splice(5, 1);
console.log(colors);

colors.splice(1, 0, 'red-orange');
console.log(colors);





scores = [1, 70, 100, 2500, 9, -12, 0, 34]
scores.sort();
console.log(scores);
