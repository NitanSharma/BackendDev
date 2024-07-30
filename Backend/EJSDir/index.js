const express = require('express');
const app = express();
const path = require('path');

app.set("views", path.join(__dirname, "/views"));
const port = 8080;

app.set("view engine","ejs");

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/rolldice', (req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice' , {diceVal})
})

app.get('/ig/:username', (req,res) => {
    const followers = ['A','B', 'C']
    let { username } = req.params;
    res.render('instagram.ejs', {username})
})

app.listen(port , () => {
    console.log('listening to port 8080');
})