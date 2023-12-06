const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Appointments = {
  user: ObjectId,
  FullName: {
    type: String,
    require: true,
  },
  Phone: {
    type: String,
    require: true,
  },
  Email: { type: String, trim: true, require: true },
  date: { type: String, default: Date.now },
  Time: String,
  Message: String,
  Mobile_OTP_Verified: {
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
