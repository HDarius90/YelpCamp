async function login(username, password) {
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
    })