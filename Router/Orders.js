module.exports = function () {
  let router = require("express").Router();

  router.get("/Orders/:Userid", (req, res) => {
    OrdersSchema.findById(req.params.Userid).then((OrderItems) => {
      res.json(OrderItems);
    });
  });

  return router;
};
