let deadlyAnimal = "Blue-Ringed Octopus";
 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish"; //<---closest scope is used
    console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)