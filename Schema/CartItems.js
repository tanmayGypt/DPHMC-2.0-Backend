const { ObjectId } = require("mongodb");

module.exports = {
  User: ObjectId,
  Product: ObjectId,
  AddedDate: {
    type: Date,
    default: Date.now,
  },
  Quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  Shipping_Charges: {
    type: Number,
    default: 0,
  },
};
