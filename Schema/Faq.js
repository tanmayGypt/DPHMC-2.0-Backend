const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const faq = {
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
const FaqSchema = mongoose.model("Faq", faq);
module.exports = FaqSchema;
