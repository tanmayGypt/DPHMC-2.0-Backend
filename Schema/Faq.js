const { ObjectId } = require("mongodb");

module.exports = {
  product: ObjectId,
  Question: {
    type: String,
    require: true,
  },
  Answer: {
    type: String,
    default: "NA",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
};
