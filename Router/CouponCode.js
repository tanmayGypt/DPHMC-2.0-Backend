const verifyToken = require("../auth");
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

  router.post("/", verifyToken, async (req, res) => {
    try {
      const { CouponCode, Issued_Date, Discount_price } = req.body;
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

  router.put("/:id", verifyToken, async (req, res) => {
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

  router.delete("/:id", verifyToken, async (req, res) => {
    CouponCodeSchema.findByIdAndDelete(req.params.id);
  });
})();
