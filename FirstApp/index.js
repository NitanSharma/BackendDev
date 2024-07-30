const express = require("express");
const app = express();

// app.use((request,respone) =>{// when we get request this code run not response
//     console.log('We got a new request');
//     // respone.send("We get your request. This is response")
//     // respone.send({color: 'red'})// passing object
//     respone.send('<h1>This is my webPage</h1>')
// })
// in use() request and response are the object made by Express

app.get('/', (req,res) => {
    res.send('This is home page');
})
app.get('/cat', (req,res) => {
    // console.log('This is cat Request')
    res.send('MEOW!!!');
})// This is routing to a particular path
app.get('/dogs',(req,res) => {
    res.send('WooF!!!');
})
app.post('/cat' , (req,res) => {
    res.send('This is the post request for /cat');
})


// Express path Parameter
app.get('/r/:subreddit', (req,res) => {
    res.send('This is subreddit!!!');
    // : indicate a variable that contain any thing after r/something
})
// Express with query String
app.get('/search', (req,res) => {
    const {q} = req.query;
    res.send( `<h1> Search results for ${q}</h1>`);// /search?q=dog
})

app.listen(3000, () =>{
    console.log('Listening to port 3000!');
})
app.get('*' , (req,res) => {
    res.send('I dont know this path');
})