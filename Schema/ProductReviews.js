const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const product_reviews = {
  User: ObjectId,
  Product: ObjectId,
  Product_Image: {
    type: String,
  },
  Rating: {
    type: Number,
    default: 0,
  },
  ReviewDate: {
    type: Date,
    default: Date.now,
  },
  Title: {
    type: String,
    require: true,
  },
  Review: {
    type: String,
    require: true,
  },
};
const Product_Review_Schema = mongoose.model(
  "Product Reviews",
  product_reviews
);
module.exports = Product_Review_Schema;
