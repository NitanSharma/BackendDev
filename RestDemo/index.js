const express = require('express');
const app = express();
const path = require('path');

const {v4 : uuid} = require('uuid')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id:uuid(),
        username : 'Nitin',
        comment : 'I like this shit'
    },

    {
        id:uuid(),
        username : 'NitinSharma',
        comment : 'I like this shit'
    },

    {
        id:uuid(),
        username : 'Nitin@123',
        comment : 'I like this shit'
    }
]

app.get('/comments', (req,res) => {
    res.render('index', {comments})
})

app.get('/comments/new' , (req,res) => {
    res.render('new')
})
app.post('/comments', (req,res) => {
    const {username, comment} = req.body;
    comments.push({username,comment, id: uuid()})
    res.redirect('/comments');
})

app.get('/comments/:id', (req,res) => {
    const {id} = req.params;
  const comment =   comments.find( c => c.id === id)
  res.render('show', {comment});

})
// updating comments
app.patch('/comments/:id', (req,res) =>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect('comments')
})

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('edit', {comment})
})

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params;
    comments =  comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.get('/tacos', (req,res) => {
    res.send('GET /tacos responce')
})

app.post('/tacos', (req,res) => {
    console.log(req.body)
    res.send("POST /tacos responce")
})

app.listen(3000, () => {
    console.log('ON PORT 3000!')
})