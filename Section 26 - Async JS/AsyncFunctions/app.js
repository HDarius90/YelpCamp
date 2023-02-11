/* async function login(username, password) {
    if (!username || !password) throw "No credentials"
    if (password === "alohomora") return "Welcome"
    throw "Invalid Password"
}

login('user', 'alohomora')
    .then(msg => {
        console.log('LOGGED IN!');
        console.log(msg);
    })
    .catch(err => {
        console.log('ERROR');
        console.log(err);
    }) */



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

/* delayedColorChange('olive', 1000)
.then(()=> (delayedColorChange('violet', 1000)))
.then(()=> (delayedColorChange('orange', 1000)))
.then(()=> (delayedColorChange('pink', 1000)))
.then(()=> (delayedColorChange('red', 1000))) */


async function rainbow() {
    await delayedColorChange('violet', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('pink', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('red', 1000)
    return "ALL DONE!"
}

// rainbow().then(() => console.log('END OF RAINBOW'))

async function printRainbow() {
    await rainbow();
    console.log('END OF RAINBOW');
} 

printRainbow();