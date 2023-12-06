const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const cartItems = {
  User: ObjectId,
  Product: ObjectId,
  AddedDate: {
    type: Date,
    default: Date.now,
  },
  Quantity: {
    type: Number,
    require: true,
  },
  Shipping_Charges: {
    type: Number,
    default: 0,
  },
};

const CartItemSchema = mongoose.model("CartItems", cartItems);

module.exports = CartItemSchema;
