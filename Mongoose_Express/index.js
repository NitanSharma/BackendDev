const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
const Product = require('./models/product')

// Mongo Connection
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmShop');
    console.log("CONNECTING... MONGO")
}

// router
app.get('/products', async (req,res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', {products})
})
// Adding new Product
app.get('/products/new' , (req,res) => {
  res.render('products/new')
})

app.get('/products/:id', async (req ,res) => {
  const {id} = req.params;
  const product = await Product.findById(id)
  res.render('products/show', {product})
})

app.post('/products', async (req,res) => {
  const newProduct = new Product(req.body)
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`)
})

app.put('/products/:id', async (req,res) => {
  const {id} = req.params;
  const product = Product.findByIdAndUpdate(id, req.body, {runValidators : true , new: true})
  res.redirect(`/products/${product._id}`)
})
app.get('/products/:id/edit' , async (req,res) => {
  const {id} = req.params;
  const product = await Product.findById(id);
  res.render('products/edit' , {product});  
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON THE PORT 3000!");
})