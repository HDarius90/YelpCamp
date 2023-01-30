function isBetween (min, max){
    return function (num){
        return num >= min && num <= max;
    }
}


const isJunior = isBetween(0,18);
const isMedior = isBetween(19,45);
const isSenior = isBetween(46,65);

console.log(isMedior(19));