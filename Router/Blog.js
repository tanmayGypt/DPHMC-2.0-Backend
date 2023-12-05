const { description } = require("../Schema/Blogs");

module.exports = (function () {
  const BlogSchema = require("../Schema/Blogs");
  ("use strict");
  let route = require("express").Router();

  route.get("/", (req, res) => {
    BlogSchema.find().then((Blogs) => {
      res.json(Blogs);
    });
  });

  route.post("/", async (req, res) => {
    try {
      const doc = new BlogSchema({
        Title,
        date,
        description,
        imageUrl,
        User,
      });

      await doc.save();
      res.status(200).json({
        message: "Quary Successfull",
      });
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
      await obj.save();
      res.status(200).json({
        message: "Quary Successfull",
      });
    } catch (error) {
      res.send(500).json(error);
    }
  });

  return route;
})();
