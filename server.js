require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig.js');
const path = require("path");

const app = express();

// Routers
const productRouter = require('./routes/productRoutes.js');

app.use(express.json());
app.use('/api/products', productRouter);
app.use(express.static(path.join(__dirname, "client", "build")));

connectDB();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
})
