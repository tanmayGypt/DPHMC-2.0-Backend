module.exports = (function () {
  let router = require("express").Router();

  router.get("/cartItems/:Userid", (req, res) => {
    CartItemSchema.findById(req.params.Userid).then((CartItems) => {
      res.json(CartItems);
    });
  });

  return router;
})();
