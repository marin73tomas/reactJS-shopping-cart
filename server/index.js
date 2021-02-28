const productsRouter = require("./routes/products");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://marin73tomas:aguacate@cluster0.v0x5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use("/products", productsRouter);
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
