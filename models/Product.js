const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema({
  name: String,
  description: String,
  price: Number,
});

mongoose.model("products", Product);
