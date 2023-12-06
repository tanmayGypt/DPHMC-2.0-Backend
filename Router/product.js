const { default: mongoose } = require("mongoose");
const ProductsSchema = require("../Schema/Products");
module.exports = (function () {
  let router = require("express").Router();

  router.get("/", (req, res) => {
    try {
      ProductsSchema.find().then((Products) => {
        res.status(200).json(Products);
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.post("/", (req, res) => {
    try {
      const {
        product_image,
        product_id,
        product_title,
        price,
        discounted_price,
      } = req.body;
      const doc = new ProductsSchema({
        product_image,
        product_id,
        product_title,
        price,
        discounted_price,
        isAvailable,
        isVisible,
      });
      const savedItem = doc.save();
      res.status(200).json(savedItem);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.get("/:productid", (req, res) => {
    try {
      const obj = ProductsSchema.findById(req.params.productid);
      res.status(200).json(obj);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  router.put("/:productid", (req, res) => {
    try {
      const obj = ProductsSchema.findById(req.params.productid);
      const bodyObject = req.body;
      obj.product_image = bodyObject.product_image;
      obj.discounted_price = bodyObject.discounted_price;
      obj.price = bodyObject.price;
      obj.product_title = bodyObject.product_title;
      obj.product_id = bodyObject.product_id;
      obj.isAvailable = bodyObject.isAvailable;
      obj.isVisible = bodyObject.isVisible;

      const savedItem = obj.save();
      res.status(200).json(savedItem);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  return router;
})();
