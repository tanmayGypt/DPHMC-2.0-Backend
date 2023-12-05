const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const orders = {
  User: ObjectId,
  Product: ObjectId,
  Ordered_Date: {
    type: Date,
    default: Date.now,
  },
  Delivered_Date: {
    type: Date,
    default: Date.now,
  },
  Payment_Mode: {
    type: String,
    default: "Online",
  },
  Payment_Details: {
    type: String,
    require: true,
  },
  reference_id: {
    type: String,
    require: true,
  },
  Delivery_Status: {
    type: String,
    default: "Pending",
  },
  Quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  Discount: {
    type: Number,
    default: 0,
  },
};

const OrdersSchema = mongoose.model("Orders", orders);

module.exports = OrdersSchema;
