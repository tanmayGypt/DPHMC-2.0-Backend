module.exports = (function () {
  "use strict";
  let route = require("express").Router();

  route.get("/Appointments/:Userid", (req, res) => {
    AppointmentsSchema.findById(req.params.Userid).then((UserAppointments) => {
      res.json(UserAppointments);
    });
  });

  route.get("/Appointments", (req, res) => {
    AppointmentsSchema.find().then((ShowAllAppointments) => {
      res.json(ShowAllAppointments);
    });
  });

  route.post("/Appointments", async (req, res) => {
    const { user, FullName, Phone, Email, date, Time, Message } = req;

    const doc = new AppointmentsSchema({
      user,
      FullName,
      Phone,
      Email,
      date,
      Time,
      Message,
    });
    await doc.save();
  });

  return route;
})();
