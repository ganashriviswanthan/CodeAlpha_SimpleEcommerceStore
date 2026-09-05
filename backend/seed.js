// File: backend/seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(async () => {
    console.log("MongoDB connected");

    await Product.deleteMany(); // clear old data

    await Product.insertMany([
      { name: "Coconut Oil", price: 120, description: "Pure coconut oil", image: "coconut.jpg" },
      { name: "Herbal Soap", price: 50, description: "Natural handmade soap", image: "soap.jpg" },
      { name: "Shampoo", price: 200, description: "Organic hair shampoo", image: "shampoo.jpg" }
    ]);

    console.log("Sample products added");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

  y