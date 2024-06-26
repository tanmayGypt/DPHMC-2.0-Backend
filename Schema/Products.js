const mongoose = require("mongoose");
const Product = {
  product_image: {
    type: String,
    require: true,
    unique: true,
  },
  product_title: {
    type: String,
    require: true,
    unique: false,
  },
  Product_descripton: {
    type: String,
    require: true,
  },
  Date: { type: Date, default: Date.now },
  price: {
    type: Number,
    required: true,
  },
  discounted_price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
};

const ProductsSchema = mongoose.model("Products", Product);
module.exports = ProductsSchema;
