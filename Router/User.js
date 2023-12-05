const { rewriter } = require("json-server");
const UserSchema = require("../Schema/User");

module.exports = (function () {
  let router = require("express").Router();

  router.get("/Users", (req, res) => {
    UserSchema.find().then((AllUsers) => {
      res.json(AllUsers);
    });
  });

  router.delete("/Users/:id", (req, res) => {
    UserSchema.findByIdAndDelete(req.params.id);
  });

  router.put("/Users/:id", (req, res) => {
    const obj = UserSchema.findById(req.params.id);
    const bodyObject = req.body;
    obj.Password = bodyObject.Password;
    obj.FullName = bodyObject.FullName;
    obj.ProfilePhoto = bodyObject.ProfilePhoto;
    obj.Phone = bodyObject.Phone;
    obj.Email = bodyObject.Email;
    obj.DOB = bodyObject.DOB;
    obj.IsBlocked = bodyObject.IsBlocked;
    obj.Appointments = bodyObject.Appointments;
    obj.OTP_Verified = bodyObject.OTP_Verified;
    obj.Orders = bodyObject.Orders;
    obj.cart = bodyObject.cart;
    obj.Total_Appointment_Booked = bodyObject.Total_Appointment_Booked;
    obj.LandMark = bodyObject.LandMark;
    obj.Pincode = bodyObject.Pincode;
    obj.Address = bodyObject.Address;
    obj.save();
  });

  return router;
})();
