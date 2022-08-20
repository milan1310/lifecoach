const router = require("express").Router();
// DATA BASE
const User = require("../models/user");
const Subscribe = require("../models/subscribe");
const Admin = require("../models/admin");
// AUTH
const authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");


router.post("/signup", authController.singup);
router.post("/login", authController.login);
router.post('/logout', authController.getadminlogout);

router.get("/admin-login", (req, res) => {
  res.render("admin-login", { pageTitle: "Admin login" });
});

// main admin page
router.get("/", authController.auth, async (req, res) => {
  try {
    let allUsers = await User.find({});
    res.render("manage", { users: allUsers, pageTitle: "Admin" });
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Please enter valid information",
      pageInfo: "Please enter valid information",
    });
  }
});

// view test data
router.get("/viewTest/:id", authController.auth, async (req, res) => {
  try {
    const id = req.params.id;
    let foundUser = await User.findById(id);
    res.render("viewtest", { user: foundUser, pageTitle: "View" });
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something is wrong",
      pageInfo: "Something went Wrong!",
    });
  }
});

// submitted or not type
router.post("/submit", authController.auth, async (req, res) => {
  const submitId = req.body.checkbox;

  try {
    let user = await User.findOneAndUpdate(
      { _id: submitId },
      { submited: true }
    );
    res.redirect("/admin");
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something went wrong",
      pageInfo: "Something went wrong",
    });
  }
});

router.post("/unsubmit", authController.auth, async (req, res) => {
  const submitId = req.body.checkbox;
  try {
    let user = await User.findOneAndUpdate(
      { _id: submitId },
      { submited: false }
    );
    let allUsers = await User.find({});
    res.redirect("/admin");
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something went wrong",
      pageInfo: "Something went wrong",
    });
  }
});

// personality type
router.post("/personalitytype", authController.auth, async (req, res) => {
  try {
    const id = req.body.id;
    const type = req.body.selectpicker;
    let user = await User.findOneAndUpdate(
      { _id: id },
      { personalityType: type }
    );
    res.redirect("/admin");
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something went wrong",
      pageInfo: "Something went wrong",
    });
  }
});

// subscribers data
router.get("/subcribers", authController.auth, async (req, res) => {
  try {
    let foundSubscribers = await Subscribe.find({});
    res.render("subscribers-admin", {
      subscribers: foundSubscribers,
      pageTitle: "Subscribers",
    });
  } catch (error) {
    res.render("Validation", {
      pageTitle: "Something went wrong",
      pageInfo: "Something went wrong",
    });
  }
});

// change password
router.get('/changepassword', authController.auth, async (req, res) => {
  const token = req.cookies.jwt;
  const decoded = jwt.verify(token, process.env.JWT_SECRATE);

  const user = await Admin.findById(decoded.id);

  res.render('change-pwd', {pageTitle: "Change User Password" , user:user});
})

router.post('/changepassword', authController.changePassword);

module.exports = router;
