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

  return route;
})();
