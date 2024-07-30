const mongoose = require('mongoose');
const Product = require('./models/product');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmShop');
    console.log("CONNECTING... MONGO")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category : 'fruits'
// })

// p.save().then(p => {
//     console.log(p)
// }).catch(e => {
//     console.log(e)
// })

const seedProduct = [
    {
        name : 'Orange',
        price: 2.00,
        category : 'fruits'
    },
    {
        name : 'Milk',
        price: 1.89,
        category : 'dairy'
    },
    {
        name : 'Pea',
        price: 5,
        category : 'vegetables'
    },
    {
        name : 'Mango',
        price: 2.99,
        category : 'fruits'
    },
    {
        name : 'Chilli',
        price: 1,
        category : 'vegetables'
    }
]

Product.insertMany(seedProduct)
.then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})