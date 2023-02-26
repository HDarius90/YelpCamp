const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json


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