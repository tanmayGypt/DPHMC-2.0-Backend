const { description } = require("../Schema/Blogs");

module.exports = (function () {
  const BlogSchema = require("../Schema/Blogs");
  ("use strict");
  let route = require("express").Router();

  route.get("/", (req, res) => {
    try {
      BlogSchema.find().then((Blogs) => {
        res.status(200).json(Blogs);
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  route.post("/", async (req, res) => {
    try {
      const { Title, date, description, imageUrl, User } = req.body;
      const doc = new BlogSchema({
        Title,
        date,
        description,
        imageUrl,
        User,
      });

      const savedObject = await doc.save();
      res.status(200).json(savedObject);
    } catch (error) {
      res.send(500).json(error);
    }
  });

  route.put("/:id", async (req, res) => {
    try {
      const doc = BlogSchema.findById(req.params.id);
      const obj = req.body;
      obj.Title = doc.Title;
      obj.date = doc.description;
      obj.imageUrl = doc.imageUrl;
      obj.User = doc.User;
      const savedItem = await obj.save();
      res.status(200).json(savedItem);
    } catch (error) {
      res.send(500).json(error);
    }
  });

  return route;
})();
