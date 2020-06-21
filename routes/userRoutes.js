const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get(`/api/users`, async (req, res) => {
    let users = await User.find({});
    return res.status(200).send(users);
  });

  app.get(`/api/user/:id`, async (req, res) => {
    let user = await User.findById(req.params.id);
    return res.status(200).send({
      error: false,
      user,
    });
  });

  app.post(`/api/user`, async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(400).send({
        error: true,
        errorMessage: "You must provide details",
      });
    }
    let user = await User.create(body);
    return res.status(200).send({
      error: false,
      user,
    });
  });

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

  app.delete(`/api/user/:id`, async (req, res) => {
    let user = await User.deleteOne({ _id: req.params.id });
    return res.status(200).send({
      error: false,
      user,
    });
  });
};
