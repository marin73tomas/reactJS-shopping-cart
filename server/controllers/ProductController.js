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
      db.collection("products").find({ id }).pretty() ||
      `no product with ID: ${id} found`
    );
  } catch (error) {
    return error;
  }
}

function getAllProducts() {
  try {
    const data = Product.find().then((err, result) => {
      if (err) {
        return err;
      } else {
        return result;
      }
    });
    return data;
  } catch (error) {
    return error;
  }
}

function getProductsByTitle(name) {
  try {
    const data = Product.find({ title: name }).then((err, result) => {
      if (err) {
        return err;
      } else {
        return result;
      }
    });
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  addNewProduct,
  getProduct,
  getAllProducts,
  getProductsByTitle,
};
