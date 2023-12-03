const UserSchema = {
  FullName: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  ProfilePhoto: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
    unique: true,
  },
  Account_Created_On: {
    type: Date,
    default: Date.now,
  },

  Email: { type: String, trim: true, require: true, unique: true },
  Created_Date: { type: Date, default: Date.now },
  Address: {
    type: [],
  },
  DOB: {
    type: String,
  },
  Pincode: {
    type: Number,
  },
  Landmark: {
    type: String,
  },
  cart: [],
  Orders: {
    type: [],
  },
  OTP_Verified: {
    type: Boolean,
    default: false,
  },
  Total_Appointment_Booked: {
    type: Number,
    default: 0,
  },
  Appointments: {
    type: [],
  },
  IsBlocked: {
    type: Boolean,
    require: true,
    default: false,
  },
};

module.exports = UserSchema;
