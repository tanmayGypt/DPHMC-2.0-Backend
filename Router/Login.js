module.exports = (function () {
  let router = require("express").Router();
  const UserModel = require("../Schema/User");
  const jwt = require("jsonwebtoken");

  require("dotenv").config();
  router.post("/", async (req, res) => {
    try {
      let IsUserExist;
      const { Email, Password } = req.body;
      UserModel.find({ Email: Email, Password: Password }).then((User) => {
        IsUserExist = User[0];
      });

      if (IsUserExist) {
        function SetUser(IsUserExist) {
          const JWT = jwt.sign(
            {
              Phone,
              Email,
            },
            process.env.secretKey
          );

          return res.status(200).send({ Body: [IsUserExist, JWT] });
        }
      } else {
        res.status(404).json({
          Message: "User Not Found",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  });
  return router;
})();
