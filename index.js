const express = require("express");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// const dotenv = require("dotenv");
// dotenv.config();

const app = express();

//import models
// require("./models/...");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost:27017/dashboard`, {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//import routes
// require("./routes/...")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is up and running on Port: ${port}`);
});
