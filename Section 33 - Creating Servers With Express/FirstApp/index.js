const express = require('express');
const app = express();

app.use((req, res)=>{
    console.log('NEW REQUEST!!!!');
    res.send("<h1>HELLO, THIS IS THE RESPONS!</h1>")
})


app.listen(3000,() => {
    console.log('LISTENING ON PORT 3000')
})