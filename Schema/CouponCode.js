module.exports = {
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
