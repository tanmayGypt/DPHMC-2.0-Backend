const { description } = require("../Schema/Blogs");

module.exports = (function () {
  "use strict";
  let route = require("express").Router();

  route.get("/AllBlogs", (req, res) => {
    BlogSchema.find().then((Blogs) => {
      res.json(blogs);
    });
  });

  route.post("/AllBlogs", (req, res) => {
    const doc = new BlogSchema({
      Title,
      date,
      description,
      imageUrl,
      User,
    });
  });

  route.put("/AllBlogs/:id", (req, res) => {
    const doc = BlogSchema.findById(req.params.id);
    const obj = req.body;
    obj.Title = doc.Title;
    obj.date = doc.description;
    obj.imageUrl = doc.imageUrl;
    obj.User = doc.User;
    obj.save();
  });

  return route;
})();
