const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", async (req, res) => {
  res.json(await ProductController.getAllProducts());
  res.end();
});

router.post("/new", (req, res) => {
  res.json(ProductController.addNewProduct(req.body));
  res.end();
});

module.exports = router;
