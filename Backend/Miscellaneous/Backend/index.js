const express = require('express');
const app = express();

// Parse POST request data
app.use(express.urlencoded({extended : true}));
app.use(express.json());//for json data parse

app.get('/', (req,res) => {
    res.send('Home');
})
app.get('/register', (req,res)=> {
    const {username} = req.query;
    res.send(`Welcome to ${username}`);
})
app.post('/register', (req,res)=>{
    let {username} = req.body;
    console.log(req.body)
    res.send(`Standard post response , Welcome ${username}`);
})

app.listen(8080, ()=> {
    console.log('Listening on Port 8080');
})