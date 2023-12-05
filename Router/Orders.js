module.exports = (function () {
  let router = require("express").Router();

  router.get("/Orders/:Userid", (req, res) => {
    OrdersSchema.findById(req.params.Userid).then((OrderItems) => {
      res.json(OrderItems);
    });
  });

  router.post("/Orders", (req, res) => {
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
  });

  router.put("/Orders/:OrderId", (req, res) => {
    const obj = OrdersSchema.findById({ _id: req.params.OrderId });
    const BodyObject = req.body;
    obj.Delivered_Date = BodyObject.Delivered_Date;
    obj.Delivery_Status = BodyObject.Delivery_Status;
    obj.save();
  });

  return router;
})();
