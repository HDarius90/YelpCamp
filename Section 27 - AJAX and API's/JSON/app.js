/* const req = new XMLHttpRequest();
req.onload = function () {
    console.log("IT LOADED!!!");
    console.log(this.responseText);
    let data = this.responseText;
    displayJoke(data);
}
req.onerror = function () {
    console.log('error');
    console.log(this);
}

req.open("GET", "https://official-joke-api.appspot.com/random_joke");
req.send();
 */



/* fetch('https://official-joke-api.appspot.com/random_joke')
.then((res) => {
    console.log("RESOLVED!", res);
    return res.json();
})
.then((data) => {
    displayJoke(data)
})
.catch((e)=>{
    console.log('error', e);
}) */

 const loadJoke = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    displayJoke(data);
    setInterval(async ()=>{
        const res2 = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data2 = await res2.json();
        displayJoke(data2);
    },5000)
}



function displayJoke(data) {

    const parsedData = data;

    const h6 = document.querySelector('h6');
    const h3 = document.querySelector('h3');
    const paragraph = document.querySelector('p');
    const footer = document.querySelector('footer');

    h6.innerText = parsedData.type;
    h3.innerText = parsedData.punchline;
    paragraph.innerText = parsedData.setup;
    footer.innerText = `id:#${parsedData.id}`;
}


loadJoke();