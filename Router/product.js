module.exports = function () {
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

  return router;
};
