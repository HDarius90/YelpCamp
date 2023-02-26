const express = require('express');
const app = express();

app.get('/tachos', (req, res)=>{
    res.send('GET /tacho request');
});

app.post('/tachos', (req, res)=>{
    res.send('POST /tacho request');
});

app.listen(3000, () => {
    console.log('ON PORT 3000!');
})