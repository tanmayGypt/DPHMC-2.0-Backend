const mongoose = require("mongoose");
module.exports = (function () {
  let router = require("express").Router();
  const UserSchema = require("../Schema/User");
  router.get("/", (req, res) => {
    try {
      UserSchema.find().then((AllUsers) => {
        res.status(200).json(AllUsers);
      });
    } catch (e) {
      res.status(200).json(e);
    }
  });

  router.delete("/:id", (req, res) => {
    try {
      const deleteduser = UserSchema.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteduser);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const {
        FullName,
        Password,
        ProfilePhoto,
        Phone,

        Email,
        DOB,
        Pincode,
        Landmark,
        cart,
        Orders,
        OTP_Verified,
        Total_Appointment_Booked,
        Appointments,
        IsBlocked,
      } = req.body;
      const NewUser = new UserSchema({
        FullName,
        Password,
        ProfilePhoto,
        Phone,
        Account_Created_On,
        Email,
        DOB,
        Pincode,
        Landmark,
        cart,
        Orders,
        OTP_Verified,
        Total_Appointment_Booked,
        Appointments,
      });
      const savedUser = await NewUser.save();
      res.status(200).json(savedUser);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const obj = UserSchema.findById(req.params.id);
      const bodyObject = req.body;
      obj.Password = bodyObject.Password;
      obj.FullName = bodyObject.FullName;
      // obj.ProfilePhoto = bodyObject.ProfilePhoto;
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

      console.log(obj);
      res.status(200).json(obj);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  });

  return router;
})();
