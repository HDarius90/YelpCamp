const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shop')
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("OH NO MONGOOOSE ERROR")
        console.log(err);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/dog', (req, res) => {
    res.send('VOOF!!!')
})

app.listen(3000, () => {
    console.log("LISSENING ON PORT 3000");
})
