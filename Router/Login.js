const verifyToken = require("../auth");
let router = require("express").Router();
const UserModel = require("../Schema/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const IsUserExist = await UserModel.findOne({
      Email: Email,
      Password: Password,
    });

    if (IsUserExist) {
      const JWT = jwt.sign(
        {
          Email,
        },
        process.env.secretKey
      );
      return res.status(200).send({ Body: [IsUserExist, JWT] });
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

module.exports = router;
