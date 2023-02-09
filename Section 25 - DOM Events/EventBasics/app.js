const btn = document.querySelector('#v2');
btn.onclick = () => (console.log('You clicked me'));

const btnHungry = document.querySelector('h2 + button');
const btnNotHungry = document.querySelector('#no');
btnHungry.onclick = () => (console.log("Lets eat then!"))
btnNotHungry.onmouseover = () => (btnNotHungry.innerText = "Yes!");
btnNotHungry.onmouseout = () => (btnNotHungry.innerText = "No");
btnNotHungry.onclick = () => (console.log("Lets eat then!"));