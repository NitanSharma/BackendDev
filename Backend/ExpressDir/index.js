const express = require('express');
const app = express();// call function and store in app

// console.dir(app);

app.listen(8080, () => {// listen the request
    console.log("app listening on port 8080");
})
// handling requests using use 
// app.use((req,res) => {
//     console.log('Request Recieved');
//     // Sending a Response
//     res.send("<h1>This is basic response<h1>")
// })
app.get('/', (req,res) => {
    res.send('This is Main Page/ root path')
})
app.get('/hello', (req,res) => {
    res.send('This is hello router');
})

app.get('/:username/:id', (req,res) => {
    let {username , id} = req.params;
    res.send(`<h1> This is your page ${username} </h1>`)
})