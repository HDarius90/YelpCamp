const testScores = {
    Zenda: 80,
    Gitta: 56,
    Hooshang: 78,
    Leila: 90,
    Mitra: 45,
    Shahnaz: 71,
    Mesood: 43,
    Laleh: 78 
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}

console.log(total / scores.length);