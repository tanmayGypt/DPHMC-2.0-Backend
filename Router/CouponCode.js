module.exports = (function () {
  let router = require("express").Router();
  const CouponCodeSchema = require("../Schema/CouponCode");
  router.get("/", (req, res) => {
    try {
      CouponCodeSchema.find().then((AllCoupons) => {
        res.status(200).json(AllCoupons);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const doc = new CouponCodeSchema({
        CouponCode,
        Issued_Date,
        Discount_price,
      });

      const saveddoc = await doc.save();
      res.status(200).json(saveddoc);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const obj = CouponCodeSchema.findById(req.params.id);
      const bodyObject = req.body;
      obj.CouponCode = bodyObject.CouponCode;
      obj.Issued_Date = bodyObject.Issued_Date;
      obj.Discount_price = bodyObject.Discount_price;

      const updatedObject = await obj.save();

      res.status(200).json(updatedObject);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.delete("/:id", async (req, res) => {
    CouponCodeSchema.findByIdAndDelete(req.params.id);
  });
})();
