/* 
const square = (x) => {
    return x * x;
}
const multiply = (x, y) => {
    return x * y;
}

const PI = 3.1415; */

//One soluction

// module.exports.square = square;
// module.exports.multiply = multiply;
// module.exports.PI = PI;

//Easyer solution

/* const math = {
    square : square,
    multiply : multiply,
    PI : PI
}

module.exports = math; */

// easyest solution

exports.square = (x) => {
    return x * x;
}
exports.multiply = (x, y) => {
    return x * y;
}

exports.PI = 3.1415;