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


/* async function rainbow() {
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

printRainbow(); */


const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
       const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 2000){
                reject('Connection Timeout :(')
            }else {
                resolve(`Here is your fake data from ${url}`)
            }
       }, delay) 
    })
}

async function makeTwoRequests(){
    try {
        let data1 = await fakeRequestPromise("/page1")
        console.log(data1);
        let data2 = await fakeRequestPromise("/page2")
        console.log(data2);
    } catch (error) {
        console.log('CAUGHT AN ERROR');
        console.log(error);
    }
 }