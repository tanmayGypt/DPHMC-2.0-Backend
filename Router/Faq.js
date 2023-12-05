module.exports = (function () {
  let router = require("express").Router();

  router.get("/Faqs/:Productid", (req, res) => {
    FaqSchema.findById(req.params.Productid).then((AllFAQs) => {
      res.json(AllFAQs);
    });
  });

  router.delete("/Faqs/:Id", async (req, res) => {
    FaqSchema.findOneAndDelete({ _id: req.params.Id });
  });

  router.post("/Faqs/:Productid", (req, res) => {
    const { product, Question, Answer, date } = req;
    const doc = new FaqSchema({
      product,
      Question,
      Answer,
      date,
    });
    doc.save();
  });

  return router;
})();
