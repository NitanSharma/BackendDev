const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));

let verifypass = (req,res,next) => {// this is middleware function and we pass this to particular callback in particular route
    let {password} = req.query;
    if(password === 'nitin'){
        next();
    }
    // res.send('Password Required');  
    // throw new Error('Password require')// inbuild error handler
    throw new AppError('password required', 401);
}

app.use('/dogs' , verifypass, (req,res,next)=> {// middleware
    console.log('I love dogs');
    next();
})

app.get('/', (req,res) => {
    res.send('Home Page');
})

app.get('/dogs', (req,res) => {
    res.send('<h1> WOOF WOOF!!! </h1>')
    
})
app.get('/error', (req,res) => {// inbuild error handler
    chiken.fly();
})

app.use((req,res) => {
    res.status(404).send('Not Found')// 404 route not found
})

// app.use((err,req,res,next)=> {//defining error handlers
//     console.log("ERROR");
//     console.log(err);
//     res.status(500).send('SOMETHING WENT WRONG')
//     next(err);
// })

app.listen(3000 , () => {
    console.log('App listening on Port 3000!')
})