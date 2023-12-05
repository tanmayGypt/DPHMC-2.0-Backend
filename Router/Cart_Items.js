module.exports = (function () {
  const CartItemSchema = require("../Schema/CartItems");
  let router = require("express").Router();

  router.get("/:Userid", (req, res) => {
    try {
      CartItemSchema.findById(req.params.Userid).then((CartItems) => {
        res.json(CartItems);
      });
    } catch (error) {
      res.json(error);
    }
  });

  router.get("/", (req, res) => {
    try {
      CartItemSchema.find({}).then((CartItems) => {
        res.json(CartItems);
      });
    } catch (error) {
      res.json(error);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const obj = new CartItemSchema({
        User,
        Product,

        Quantity,
        Shipping_Charges,
      });

      const saved = await obj.save();
      res.status(200).send(saved);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.delete("/:CartItemId", async (req, res) => {
    CartItemSchema.findByIdAndDelete(req.params.CartItemId);
  });
  return router;
})();
