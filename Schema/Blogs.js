const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const blogs = {
  Title: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  User: {
    type: ObjectId,
  },
};

const BlogSchema = mongoose.model("Blogs", blogs);
module.exports = BlogSchema;
