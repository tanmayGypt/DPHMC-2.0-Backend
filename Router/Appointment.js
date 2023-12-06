module.exports = (function () {
  const AppointmentsSchema = require("../Schema/Appointments");
  ("use strict");
  let route = require("express").Router();

  route.get("/:Userid", (req, res) => {
    try {
      AppointmentsSchema.find({ user: req.params.Userid }).then(
        (UserAppointments) => {
          res.status(200).json(UserAppointments);
        }
      );
    } catch (e) {
      res.status(500).json(e);
    }
  });
  route.get("/", (req, res) => {
    try {
      AppointmentsSchema.find().then((ShowAllAppointments) => {
        res.status(200).json(ShowAllAppointments);
      });
    } catch (e) {
      res.status(500).json(e);
    }
  });

  route.post("/", async (req, res) => {
    try {
      const { user, FullName, Phone, Email, date, Time, Message, img } =
        req.body;

      const doc = new AppointmentsSchema({
        user,
        FullName,
        Phone,
        Email,
        date,
        Time,
        Message,
        img,
      });
      const savedObject = await doc.save();
      res.status(200).json(savedObject);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  return route;
})();
