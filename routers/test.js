const router = require("express").Router();
const User = require("../models/user");

router.get("/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("test", { UUID: uuid, pageTitle: "Personality assessement"});
});

router.post("/userTest", (req, res) => {
  const uuid = req.body.uuid;
  // const
  User.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (foundUser.testdata.length === 0) {
      if (err) {
        res.render('Validation', {pageTitle: "Input valid information", pageInfo: "Oops! Something Went wrong"});
      } else {
        try {
          const testData = Object.entries(req.body);
         
          foundUser.testdata.push(testData);
          await foundUser.save();

          const sendMail = require("../services/email");

          sendMail(foundUser.name, foundUser.email);
        } catch (error) {
          console.log(error);
          res.render('Validation', {pageTitle:"input Valid information", pageInfo: "Something went wrong"});
        }
      }
      res.redirect("/congrats");
    } else if(foundUser.testdata.length === 1) {
      res.redirect("/congrats/alreadyDone");
    }
  });
});

module.exports = router;
