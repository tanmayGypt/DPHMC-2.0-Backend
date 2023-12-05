const { default: mongoose } = require("mongoose");

module.exports = (function () {
  let router = require("express").Router();

  router.get("/Products", (req, res) => {
    ProductsSchema.find().then((Products) => {
      res.json(Products);
    });
  });

  router.post("/Products", (req, res) => {
    const {
      product_image,
      product_id,
      product_title,
      price,
      discounted_price,
    } = req;
    const doc = new ProductsSchema({
      product_image,
      product_id,
      product_title,
      price,
      discounted_price,
    });
  });

  // product_image: [],
  // product_id: {
  //   type: String,
  //   require: true,
  //   unique: true,
  // },
  // product_title: {
  //   type: String,
  //   require: true,
  //   unique: false,
  // },
  // Date: { type: Date, default: Date.now },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  // discounted_price: {
  //   type: Number,
  //   required: true,
  // },

  router.get("/Products/:productid", (req, res) => {
    const obj = ProductsSchema.findById(req.params.productid);
    res.json(obj);
  });
  router.put("/Products/:productid", (req, res) => {
    const obj = ProductsSchema.findById(req.params.productid);
    const bodyObject = req.body;
    obj.product_image = bodyObject.product_image;
    obj.discounted_price = bodyObject.discounted_price;
    obj.price = bodyObject.price;
    obj.product_title = bodyObject.product_title;
    obj.product_id = bodyObject.product_id;

    obj.save();
  });
  return router;
})();
