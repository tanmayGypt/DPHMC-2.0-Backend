module.exports = function () {
  let router = require("express").Router();
  router.get("/", (req, res) => {
    res.json({
      Message: "App is Working",
    });
  });

  return router;
};
