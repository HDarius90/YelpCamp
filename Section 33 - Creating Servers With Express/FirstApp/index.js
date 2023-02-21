const express = require('express');
const app = express();

/* app.use((req, res)=>{
    console.log('NEW REQUEST!!!!');
    res.send("<h1>HELLO, THIS IS THE RESPONS!</h1>")
}) */


app.get('/', (req, res) => {
    res.send('This is my Home page');
})
app.get('/nyunyu', (req, res) => {
    res.send('<img src="https://www.webaruhaz.hu/pic/650x650/s/p/sparkle-tales-jasper-lajhar-305-cm-aurora_0_1572434943.jpg">');
})
app.get('/nyunyus', (req, res) => {
    res.send('<img src="https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/18076454_1466260636772147_4998571247568144256_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=zO-sez60YccAX98MS1h&_nc_ht=scontent-vie1-1.xx&oh=00_AfANL3FdGVSqladG8dsa2GGrPg2KHnQ4XuhtPfrlNA2Oog&oe=641C517A">');
})

app.post('/nyunyu', (req, res) => {
    res.send('This is a respons for a post request!')
})
app.post('/*', (req, res) => {
    res.send('Bad root!')
})




app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})