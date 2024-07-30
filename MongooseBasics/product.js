const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log("CONNECTING...")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number
    }
});

const Product = mongoose.model('Product', productSchema)

