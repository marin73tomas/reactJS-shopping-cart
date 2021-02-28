const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  imgLink: {
    type: String,
    default: "public/images/empty.jpg",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
