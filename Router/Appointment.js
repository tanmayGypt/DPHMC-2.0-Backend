module.exports = (function () {
  const AppointmentsSchema = require("../Schema/Appointments");
  ("use strict");
  let route = require("express").Router();

  route.get("/:Userid", (req, res) => {
    AppointmentsSchema.findById(req.params.Userid).then((UserAppointments) => {
      res.json(UserAppointments);
    });
  });

  route.get("/", (req, res) => {
    AppointmentsSchema.find().then((ShowAllAppointments) => {
      res.json(ShowAllAppointments);
    });
  });

  route.post("/", async (req, res) => {
    try {
      const { user, FullName, Phone, Email, date, Time, Message } = req;

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
      await doc.save();
      res.status(200).json({
        message: "Quary Successfull",
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return route;
})();
