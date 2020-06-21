const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  reviews: { type: Array },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

mongoose.model("products", productSchema);
