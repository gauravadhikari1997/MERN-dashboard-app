const mongoose = require("mongoose");
const Product = mongoose.model("products");

module.exports = (app) => {
  app.get(`/api/products`, async (req, res) => {
    let products = await Product.find({});
    return res.status(200).send(products);
  });

  app.get(`/api/product/:id`, async (req, res) => {
    let product = await Product.findById(req.params.id);
    return res.status(200).send({
      error: false,
      product,
    });
  });

  app.post(`/api/product`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).send({
        error: true,
        errorMessage: "You must provide a product",
      });
    }
    let product = await Product.create(body);
    return res.status(200).send({
      error: false,
      product,
    });
  });

  app.put(`/api/product/:id`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        error: true,
        errorMessage: "You must provide a product",
      });
    }
    let product = await Product.updateOne({ _id: req.params.id }, body);
    return res.status(200).send({
      error: false,
      product,
    });
  });

  app.delete(`/api/product/:id`, async (req, res) => {
    let product = await Product.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      error: false,
      product,
    });
  });
};
