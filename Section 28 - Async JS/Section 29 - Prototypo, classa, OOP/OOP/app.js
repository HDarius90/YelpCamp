
function MakeMath(a, b) {
    this.a = a;
    this.b = b;
}

MakeMath.prototype.calculate = function () {
    const { a, b } = this;
    return a + b;
}

const firstMath = new MakeMath(5, 6);
firstMath.calculate();