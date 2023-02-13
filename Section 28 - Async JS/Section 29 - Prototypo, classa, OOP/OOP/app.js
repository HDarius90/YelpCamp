/* 
function MakeMath(a, b) {
    this.a = a;
    this.b = b;
}

MakeMath.prototype.calculate = function () {
    const { a, b } = this;
    return a + b;
}

const firstMath = new MakeMath(5, 6);
firstMath.calculate(); */



class MakeMath {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add(){
        const {a, b} = this;
        return  a + b;
    }
}

const firstMath = new MakeMath(5,6);
console.log(firstMath.add());





class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        return `HELLO FROM ${this.name}`
    }
    rgb(){
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }
}

const c1 = new Color(255, 67, 89, 'tomato');

