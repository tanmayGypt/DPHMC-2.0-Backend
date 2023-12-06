const verifyToken = require("../auth");
module.exports = (function () {
  let router = require("express").Router();
  const FaqSchema = require("../Schema/Faq");
  router.get("/:Productid", (req, res) => {
    FaqSchema.findById(req.params.Productid).then((AllFAQs) => {
      res.json(AllFAQs);
    });
  });

  router.delete("/:Id", verifyToken, async (req, res) => {
    try {
      const deletedItem = FaqSchema.findOneAndDelete({ _id: req.params.Id });
      res.status(200).json(deletedItem);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  router.post("/", verifyToken, async (req, res) => {
    try {
      const { product, Question, Answer, date } = req;
      const doc = new FaqSchema({
        product,
        Question,
        Answer,
        date,
      });
      const newObject = doc.save();
      res.status(200).json(newObject);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  return router;
})();
