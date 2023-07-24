const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = new Date();
    console.log(req.method, req.path);
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'alahomora') {
        next()
    }
    // res.send("SORRY, YOU NEED A PASSWORD")
    throw new Error("Password require")
}

app.get('error', (req, res) => {
    chicken.fly()
})

app.use('/dogs', (req, res, next) => {
    console.log('DOG');
    next()
})

/* app.use((req, res, next) => {
    console.log("THIS IS MAY FIRST MIDLEWARE!");
    return next();
    console.log("THIS IS MAY FIRST MIDLEWARE - AFTER CALLING NEXT()");
})
app.use((req, res, next) => {
    console.log("THIS IS MAY SECOUND MIDLEWARE!");
    return next();
})
app.use((req, res, next) => {
    console.log("THIS IS MAY THIRD MIDLEWARE!");
    return next();
}) */

app.get('/', (req, res) => {
    console.log(`REQUEST TIME: ${req.requestTime}`);
    res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I war headphones in public so I Dont have to talk to peaople')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})