const { ObjectId } = require("mongodb");

module.exports = {
  User: ObjectId,
  Product: ObjectId,
  Product_Image: {
    type: String,
  },
  Rating: {
    type: Number,
    default: 0,
  },
  ReviewDate: {
    type: Date,
    default: Date.now,
  },
  Title: {
    type: String,
    require: true,
  },
  Review: {
    type: String,
    require: true,
  },
};
