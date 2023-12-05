const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
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
  date: { type: Date, default: Date.now },
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
  img: {
    type: String,
    default: "",
  },
};

const AppointmentsSchema = mongoose.model("Appointment", Appointments);
module.exports = AppointmentsSchema;
