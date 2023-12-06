const verifyToken = require("../auth");
module.exports = (function () {
  let router = require("express").Router();
  const OrdersSchema = require("../Schema/Orders");

  router.get("/:Userid", verifyToken, (req, res) => {
    OrdersSchema.findById(req.params.Userid).then((OrderItems) => {
      if (!OrderItems) {
        res.send("Not found");
      }
      res.json(OrderItems);
    });
  });

  router.get("/", verifyToken, (req, res) => {
    OrdersSchema.find().then((AllOrders) => {
      res.json(AllOrders);
    });
  });

  router.post("/", verifyToken, async (req, res) => {
    try {
      const {
        User,
        Product,
        Delivered_Date,
        Payment_Mode,
        Payment_Details,
        reference_id,
        Delivery_Status,
        Quantity,
        Discount,
      } = req.body;
      const obj = new OrdersSchema({
        User,
        Product,
        Delivered_Date,
        Payment_Mode,
        Payment_Details,
        reference_id,
        Delivery_Status,
        Quantity,
        Discount,
      });

      const objectsaved = await obj.save();
      res.status(200).json(objectsaved);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.put("/:OrderId", verifyToken, (req, res) => {
    try {
      const obj = OrdersSchema.findById({ _id: req.params.OrderId });
      const BodyObject = req.body;
      obj.Delivered_Date = BodyObject.Delivered_Date;
      obj.Delivery_Status = BodyObject.Delivery_Status;
      const updated = obj.save();
      res.status(200).json(updated);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  return router;
})();
