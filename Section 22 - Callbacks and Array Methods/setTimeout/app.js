console.log('Aaaand this weeks winner numbers aaaaare.....');
const id = setInterval(() => {
    console.log(Math.floor(Math.random() * 100) + 1);
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 12000);

setTimeout(()=>{
    console.log('BINGO!');
},13000);