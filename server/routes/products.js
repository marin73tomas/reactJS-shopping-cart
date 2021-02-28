const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", (req, res) => {
  res.json(ProductController.getAllProducts());
  res.end();
});

router.post("/new", async (req, res) => {
  res.json(ProductController.addNewProduct(req.body));
  res.end();
});

module.exports = router;
