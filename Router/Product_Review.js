module.exports = (function () {
  let route = require("express").Router();
  const Product_Review_Schema = require("../Schema/ProductReviews");
  route.get("/:Productid", (req, res) => {
    Product_Review_Schema.findById(req.params.Productid).then((AllReviews) => {
      res.json(AllReviews);
    });
  });
  route.get("/", (req, res) => {
    try {
      Product_Review_Schema.find().then((All_Product_Reviews) => {
        res.status(200).json(All_Product_Reviews);
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });
  route.post("/", async (req, res) => {
    try {
      const {
        User,
        Product,
        Product_Image,
        Rating,
        ReviewDate,
        Title,
        Review,
      } = req.body;
      let doc = new Product_Review_Schema({
        User,
        Product,
        Product_Image,
        Rating,
        ReviewDate,
        Title,
        Review,
      });

      const savedObject = await doc.save();
      res.status(200).json(savedObject);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  route.delete("/:UserId/:ProductId", async (req, res) => {
    try {
      const deletedItem = await Product_Review_Schema.deleteOne({
        User: req.params.UserId,
        Product: req.params.ProductId,
      });
      res.status(200).json(deletedItem);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  route.put("/:UserId/:ProductId", async (req, res) => {
    try {
      const bodyObject = req.body;
      const obj = Product_Review_Schema.find({
        _id: req.params.UserId,
        Product: req.params.ProductId,
      });
      obj.title = bodyObject.title;
      obj.Review = bodyObject.Review;
      const savedObject = obj.save();
      res.status(200).json(savedObject);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  return route;
})();
