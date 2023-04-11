const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
})

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    const data = redditData[subredit];
    if (data) {
        res.render('subredit', { ...data })
    } else {
        res.render('notfound', { subredit: subredit });
    }
})

app.get('/guitars', (req, res) => {
    const guitars = ['Gibson', 'Fender', 'Heritage', 'Ibanez', 'Eastman', 'ESP', 'Rickenbacker', 'Yamaha'];
    res.render('guitars', { brands: guitars })
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})

