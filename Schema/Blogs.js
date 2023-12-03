const { ObjectId } = require("mongodb");

module.exports = {
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
