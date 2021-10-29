const data = require('./data/products');
const connectDB = require('./config/dbConfig');
const Product = require('./models/product');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(data);
    console.log("Data import success");
    process.exit();
  } catch (e) {
    console.log(e);
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
