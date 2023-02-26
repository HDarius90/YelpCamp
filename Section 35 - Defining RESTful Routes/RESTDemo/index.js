const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');



const comments = [
    {
        id: 1,
        username: "Sanya",
        comment: "Csá csumi csá csokoládés csőtészta!!!!"
    },
    {
        id: 2,
        username: "Dari",
        comment: "Força Barça"
    },
    {
        id: 3,
        username: "Sziszi",
        comment: "Nyunyu???!"
    },
    {
        id: 4,
        username: "Nyunyu",
        comment: "Pakoljá ki!!!"
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment });
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