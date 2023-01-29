// Print out "Da ba dee da ba daa" from "I'm Blue" by Eiffel 65.   6 times, using a for loop
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}


// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}





const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// loop over the people array with a for loop, printing out each name in uppercase letters.

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

//use nested loops ti iterate throw this array:

const seatingChart = [
    ['Harry', 'Ron', 'Hermione'],
    ['Luke', 'Leia', 'Anakin', 'Padme'],
    ['Frodo', 'Sauron', 'Gandalf']
]

for (let i = 0; i < seatingChart.length;i++){
    const row = seatingChart[i];
    console.log(`ROW #${i}`);
    for(let j = 0; j < row.length;j++){
        console.log(row[j]);
    }
}