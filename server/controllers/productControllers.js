const mongoose = require('mongoose');
const productSchema = require('../models/product');

const controllers = {}

controllers.getProducts = async (req, res) => {
  try {
    const products = await productSchema.find({});

    if (products) {
      return res.status(200).json(products);
    }

    return res.status(400).json({msg: "No data was found"})

  } catch (e) {
    console.error(e);
    res.status(500).json({msg: "Server Error"})
  }
}

controllers.getProductById = async (req, res) => {
  try {
    
    const product = await productSchema.findById(req.params.id);
    if (product) {
      return res.status(200).json(product);
    }

    return res.status(400).json({msg: "No data was found"});

  } catch (e) {
    console.error(e);
    res.status(500).json({msg: "Server Error"});
  }
}

module.exports = controllers
