
function makeMath (a, b) {
    const table = {};
    table.x = a;
    table.y = b;
    table.calculate = function () {
        const {x, y} = this;
        return x + y;
    };
    return table;
}

const firstMath = makeMath(5,6);
firstMath.calculate();