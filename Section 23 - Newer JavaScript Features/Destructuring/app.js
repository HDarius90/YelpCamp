const scores = [87, 65, 43, 21, 12];
const highScore = scores[0];
const secoundhighScore = scores[1];

const [gold, silver, ...everyoneElse] = scores;






//Destructuring objects

const user = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
}

const {born: birthYear, firstName: name, city: from = 'Budapest'} = user;