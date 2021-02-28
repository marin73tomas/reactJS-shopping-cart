const mongoose = require("mongoose");
const Product = require("../models/Product");
const db = mongoose.connection;

async function addNewProduct(data) {
  try {
    const product = new Product({
      ...data,
    });

    const savedPost = await product.save();

    return JSON.stringify("new product created");
  } catch (error) {
    return error;
  }
}

async function getProduct(id) {
  try {
    return (
      db.products.find({ id }).pretty() || `no product with ID: ${id} found`
    );
  } catch (error) {
    return error;
  }
}

async function getAllProducts() {
  try {
    return db.products.find().pretty();
  } catch (error) {
    return error;
  }
}

module.exports = {
  addNewProduct,
  getProduct,
  getAllProducts,
};
