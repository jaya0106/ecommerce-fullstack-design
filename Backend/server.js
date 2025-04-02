// backend/server.js

const productsRouter = require('./routes/products');

app.use('/products', productsRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const paymentRouter = require('./routes/payment');

app.use('/payment', paymentRouter);
const app = express();
app.use(cors());
app.use(express.json());
// MongoDB Connection (Replace with your MongoDB URI)
mongoose.connect('mongodb+srv://ecommerceUser:wIw3mqrJw3Bu4Shc@cluster0.ycmygdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});