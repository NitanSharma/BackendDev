const express = require('express');
const app = express();

app.use(express.static('public'))// serving static asset in Express

app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname,'/views'))
app.get('/', (req,res) => {
    res.render('home.ejs')
})
app.get('/rand', (req,res) => {
   const num = Math.floor(Math.random() * 10) + 1;
    res.render('Random', {rand : num})// Prasing data to template
})

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})
app.get('/cats', (req,res) => {
    const cats = ['A','B','C','Blue']
    res.render('cats' , {cats})
})

app.listen(3000, () => {
    console.log('LISTENING TO THE PORT 3000');
})