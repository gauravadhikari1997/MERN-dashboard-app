const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  //to get a user
  app.get(`/api/user/:id`, async (req, res) => {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(204).send({
        error: true,
      });
    }
    return res.status(200).send({
      error: false,
      user,
    });
  });

  //to register a user
  app.post(`/api/user`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).send({
        error: true,
        errorMessage: "You must provide details",
      });
    }
    let user = await User.create(body);
    user.save(function (err) {
      if (err) {
        return res.status(400).send({
          error: true,
          errorMessage: "Invalid details",
        });
      }
    });
    return res.status(200).send({
      error: false,
      user,
    });
  });

  //to login a user
  app.post(`/api/login`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).send({
        error: true,
        errorMessage: "You must provide details",
      });
    }
    User.findOne({ mobile: body.mobile }, function (err, user) {
      if (err) throw err;

      // test a matching password
      user.comparePassword(body.password, function (err, isMatch) {
        if (err) throw err;
        return res.status(200).send({
          error: false,
          id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
          address: user.address,
        });
        // console.log("Password:", isMatch); // -> Password123: true
      });
    });
  });

  //to modify a user
  app.put(`/api/user/:id`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        error: true,
        errorMessage: "You must provide details",
      });
    }
    let user = await User.updateOne({ _id: req.params.id }, body);
    return res.status(200).send({
      error: false,
      user,
    });
  });

  //to delete a user
  app.delete(`/api/user/:id`, async (req, res) => {
    let user = await User.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      error: false,
      user,
    });
  });

  //to place an order
  app.put(`/api/order/`, async (req, res) => {
    const body = req.body;
    if (!body.id || !body.orders) {
      return res.status(400).send({
        error: true,
        errorMessage: "You must provide details",
      });
    }

    let user = await User.updateOne(
      { _id: body.id },
      { $push: { orders: body.orders } }
    );
    return res.status(200).send({
      error: false,
      user,
    });
  });
};
