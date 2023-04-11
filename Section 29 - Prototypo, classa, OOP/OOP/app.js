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
        this.add()
    }
    add(){
        const {a, b} = this;
        return  this.sum = a + b;
    }
}

const firstMath = new MakeMath(5,6);
//console.log(firstMath.add());





class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.rgbToHsl();
    }
    greet(){
        return `HELLO FROM ${this.name}`
    }
    rgb(){
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    hsl(){
        const {h,s,l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    rgbToHsl(){
        let {r,g,b} = this;

        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');














class Pet {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		console.log('IN CAT CONSTRUCTOR!');
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}


