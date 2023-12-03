const { ObjectId } = require("mongodb");

const Appointments = {
  user: ObjectId,
  FullName: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
  },
  Email: { type: String, trim: true, require: true },
  Date: { type: Date, default: Date.now },
  Time: String,
  Message: String,
  Mobile_OTP_Verified: {
    type: Boolean,
    default: false,
  },
  Email_OTP_Verified: {
    type: Boolean,
    default: false,
  },
};

module.exports = Appointments;
