const mongoose = require("mongoose");
const Coupon = {
  CouponCode: {
    type: String,
    require: true,
  },
  Issued_Date: {
    type: Date,
    default: Date.now,
  },
  Discount_price: {
    type: Number,
    default: 0,
  },
};
const CouponCodeSchema = mongoose.model("Coupon Code", Coupon);
module.exports = CouponCodeSchema;
