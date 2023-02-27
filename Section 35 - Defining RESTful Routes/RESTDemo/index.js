const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');



const comments = [
    {
        id: uuid(),
        username: "Sanya",
        comment: "Csá csumi csá csokoládés csőtészta!!!!"
    },
    {
        id: uuid(),
        username: "Dari",
        comment: "Força Barça"
    },
    {
        id: uuid(),
        username: "Sziszi",
        comment: "Nyunyu???!"
    },
    {
        id: uuid(),
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
    const id = uuid();
    comments.push({ id, username, comment });
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
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