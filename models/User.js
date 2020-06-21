const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  mobile: { type: Number, required: true },
  orders: { type: Array },
});

mongoose.model("users", userSchema);
