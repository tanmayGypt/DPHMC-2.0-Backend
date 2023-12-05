module.exports = function () {
  let router = require("express").Router();

  router.get("/Users", (req, res) => {
    UserSchema.find().then((AllUsers) => {
      res.json(AllUsers);
    });
  });

  router.delete("/Users/:id", (req, res) => {
    UserSchema.findByIdAndDelete(req.params.id);
  });

  return router;
};
