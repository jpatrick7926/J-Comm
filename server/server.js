require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig.js');
const app = express();

// Routers
const productRouter = require('./routes/productRoutes.js');

app.use(express.json());
app.use('/api/products', productRouter)


connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
})
