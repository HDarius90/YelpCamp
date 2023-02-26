const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

const comments = [
    {
        author: "Sanya",
        comment: "Csá csumi csá csokoládés csőtészta!!!!"
    },
    {
        author: "Dari",
        comment: "Força Barça"
    },
    {
        author: "Sziszi",
        comment: "Nyunyu???!"
    },
    {
        author: "Nyunyu",
        comment: "Pakoljá ki!!!"
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})





app.get('/tachos', (req, res) => {
    res.send('GET /tacho request');
});

app.post('/tachos', (req, res) => {
    const { type, qty } = req.body;
    res.send(`Here is your ${qty} ${type} tacho`);
    console.log(req.body);
});



app.listen(3000, () => {
    console.log('ON PORT 3000!');
})