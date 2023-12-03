const ProductSchema = {
  product_image: [],
  product_id: {
    type: String,
    require: true,
    unique: true,
  },
  product_title: {
    type: String,
    require: true,
    unique: false,
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
};

module.exports = ProductSchema;
