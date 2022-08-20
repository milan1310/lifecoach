const router = require("express").Router();
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { exists } = require("../models/user");

router.get("/", (req, res) => {
  res.render("register", {
    pageTitle: "Link to Personality Assessment",
  });
});

router.get("/instructions/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("instruction", {
    UUID: uuid,
    pageTitle: "Instructions to Follow during the Test",
  });
});

router.post("/user", async (req, res) => {
  const { name, email, number, region } = req.body;
  if (!name || !email || !number) {
    res
      .status(422)
      .render("Vlidation", {
        pageTitle: "Input Valid Information",
        pageInfo: "All Fields Are required.",
      });
  }
  try {
    const isEmail = await User.findOne({ email: email });
    if (isEmail) {
      res.render("Validation", {
        pageTitle: "User Already exists",
        pageInfo: "User Already exists Please Try with another Email.",
      });
    } else {
      const user = new User({
        name: name,
        email: email,
        mobileNumber: number,
        region: region,
        uuid: uuidv4(),
      });
      const responce = await user.save();
      res.redirect(`/register/instructions/${responce.uuid}`);
    }
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something went wrong",
      pageInfo: "Something Going worong",
    });
  }
});

module.exports = router;
