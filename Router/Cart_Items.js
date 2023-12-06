const verifyToken = require("../auth");
module.exports = (function () {
  const CartItemSchema = require("../Schema/CartItems");
  let router = require("express").Router();

  router.get("/:Userid", verifyToken, (req, res) => {
    try {
      CartItemSchema.findById(req.params.Userid).then((CartItems) => {
        res.status(200).json(CartItems);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/", verifyToken, (req, res) => {
    try {
      CartItemSchema.find({}).then((CartItems) => {
        res.status(200).json(CartItems);
      });
    } catch (error) {
      res.statu(500).json(error);
    }
  });

  router.post("/", verifyToken, async (req, res) => {
    try {
      const { User, Product, Quantity, Shipping_Charges } = req.body;
      const obj = new CartItemSchema({
        User,
        Product,
        Quantity,
        Shipping_Charges,
      });

      const saved = await obj.save();
      res.status(200).send(saved);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  router.delete("/:CartItemId", verifyToken, async (req, res) => {
    try {
      const deletedItem = CartItemSchema.findByIdAndDelete(
        req.params.CartItemId
      );
      res.status(200).json(deletedItem);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  return router;
})();
