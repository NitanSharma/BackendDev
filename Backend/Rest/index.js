const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id :uuidv4(),
        username : 'Nitin',
        content : 'I love Coding'
    },
    {
        id: uuidv4(),
        username : 'Nitin Sharma',
        content : 'I love Coding'
    },
    {
        id : uuidv4(),
        username : 'Rohit',
        content : 'I love Coding'
    }
]

app.get('/posts' , (req,res) => {
    res.render('index' , {posts});
})

app.get('/posts/new' , (req,res) => {
    res.render('new.ejs')
})
app.post('/posts', (req,res) => {
    let {username , content} = req.body;
    let id = uuidv4();
    posts.push({ id ,username , content});
    res.redirect('/posts')
})

app.get('/posts/:id', (req,res) => {
    let {id} =  req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", {post});
})

app.listen(8080, () =>{
    console.log("Listening on port 8080!!!");
})