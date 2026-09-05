// File: backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Fixed MongoDB connection (no deprecated options)
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
