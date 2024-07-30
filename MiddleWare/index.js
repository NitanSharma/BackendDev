const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))


// app.use((req,res,next) => {// defining first middleware
//     console.log('This is my First MiddleWare');
//    return next();
// })
// app.use((req,res,next)=> {
//     console.log('This is my Second MiddleWare');
//    return next();
// })

// app.use((req,res,next) => {// Fake AUTH and this protect all route to access  ?password=nitin
//     let {password} = req.query;
//     if(password === 'nitin'){
//         next();
//     }
//     res.send('Password Required');   
// })

let verifypass = (req,res,next) => {// this is middleware function and we pass this to particular callback in particular route
    let {password} = req.query;
    if(password === 'nitin'){
        next();
    }
    res.send('Password Required');  
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

app.use((req,res) => {
    res.status(404).send('Not Found')// 404 route not found
})

app.listen(3000 , () => {
    console.log('App listening on Port 3000!')
})