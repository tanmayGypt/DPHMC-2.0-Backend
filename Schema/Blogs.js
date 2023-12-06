const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const blogs = {
  Title: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    default: Date.now,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    default: "",
  },
  User: {
    type: ObjectId,
  },
};

const BlogSchema = mongoose.model("Blogs", blogs);
module.exports = BlogSchema;
