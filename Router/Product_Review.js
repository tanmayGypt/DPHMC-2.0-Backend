module.exports = (function () {
  let route = require("express").Router();
  const Product_Review_Schema = require("../Schema/ProductReviews");
  route.get("/:Productid", (req, res) => {
    Product_Review_Schema.findById(req.params.Productid).then((AllReviews) => {
      res.json(AllReviews);
    });
  });
  route.get("/", (req, res) => {
    Product_Review_Schema.find().then((All_Product_Reviews) => {
      res.json(All_Product_Reviews);
    });
  });
  route.post("/", async (req, res) => {
    const { User, Product, Product_Image, Rating, ReviewDate, Title, Review } =
      req;
    let doc = new Product_Review_Schema({
      User,
      Product,
      Product_Image,
      Rating,
      ReviewDate,
      Title,
      Review,
    });

    await doc.save();
  });

  route.delete("/:UserId/:ProductId", async (req, res) => {
    try {
      await Product_Review_Schema.deleteOne({
        User: req.params.UserId,
        Product: req.params.ProductId,
      });
      res.status(200).json({ message: "Item Deleted Succesfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  route.put("/:UserId/:ProductId", async (req, res) => {
    const bodyObject = req.body;
    const obj = Product_Review_Schema.find({
      _id: req.params.UserId,
      Product: req.params.ProductId,
    });
    obj.title = bodyObject.title;
    obj.Review = bodyObject.Review;
    obj.save();
  });

  return route;
})();
