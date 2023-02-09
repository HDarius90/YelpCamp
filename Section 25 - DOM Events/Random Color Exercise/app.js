const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}

function generateRandomRBG() {
    let firstRBG = generateRandomNumber(0, 255);
    let secondRBG = generateRandomNumber(0, 255);
    let thirdRBG = generateRandomNumber(0, 255);
    return [firstRBG, secondRBG, thirdRBG];
}

btn.addEventListener('click', () => {
    let [colorRed, colorGreen, colorBlue] = generateRandomRBG();
    const newcolor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    document.querySelector('body').style.backgroundColor = newcolor;
    h1.innerText = newcolor;

    
    if ((colorRed + colorBlue + colorGreen) < 200) {
        h1.style.backgroundColor = 'white';
    } else {
        h1.style.backgroundColor = '';
    }
})
