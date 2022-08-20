const router = require("express").Router();
const Tool = require("../models/tools");
const authController = require("../controllers/authController");
const { v4: uuidv4 } = require("uuid");

router.get(
  "/",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    try {
      const allUsers = await Tool.find({});
      res.render("admin-tools", { pageTitle: "All Tools", users: allUsers });
    } catch (error) {
      res.send("<h1>Something Went Wrong</h1>")
    }
  }
);

// wol result admin
router.get(
  "/result/:id",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    const Id = req.params.id;

    try {
      const user = await Tool.findById(Id);
      res.render("tools/admin-results/wol-tool-results", { pageTitle: "Result", user: user });
    } catch (error) {
      console.log(error);
    }
  }
);

// N-codes result admin
router.get(
  "/result/n-codes/:id",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    const Id = req.params.id;

    try {
      const user = await Tool.findById(Id);
      res.render("tools/admin-results/n_codes-tool-results", { pageTitle: "Result || N-codes E-codes", user: user });
    } catch (error) {
      console.log(error);
    }
  }
);

// Decision making wheel admin
router.get(
  "/result/decisionmakingwheel/:id",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    const Id = req.params.id;

    try {
      const user = await Tool.findById(Id);
      res.render("tools/admin-results/decision_making_wheel-tool-results", { pageTitle: "Result || Decision making wheel", user: user });
    } catch (error) {
      console.log(error);
    }
  }
);

// Define Outcomes Admin
router.get(
  "/result/defineoutcomes/:id",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    const Id = req.params.id;

    try {
      const user = await Tool.findById(Id);
      res.render("tools/admin-results/define_outcomes-tool-results", { pageTitle: "Result || Define Outcomes", user: user });
    } catch (error) {
      console.log(error);
    }
  }
);

router.post(
  "/new-client",
  authController.auth,
  authController.authRole("Main Admin"),
  async (req, res) => {
    const { name, email, message, tag } = req.body;

    try {
      const tool = new Tool({
        name: name,
        email: email,
        tag,
        uuid: uuidv4(),
      });
      const responce = await tool.save();
      url = `https://corporatetrainer.herokuapp.com/tools-url/${tag}/${responce.uuid}`;

      const sendMail = require("../services/wolemail");

      if(responce.tag === 'wol'){
        sendMail(responce.name, responce.email, message, url, 'complete your Life Mastery Circle');
      } else if (responce.tag === 'baseline') {
        sendMail(responce.name, responce.email, message, url, 'complete your Core Values');
      } else if (responce.tag === 'necodes'){
        sendMail(responce.name, responce.email, message, url, 'complete your N Patterns/E Patterns');
      } else if (responce.tag === 'decisionmakingwheel') {
        sendMail(responce.name, responce.email, message, url, 'complete your Decision Making Reckoner');
      } else {
        sendMail(responce.name, responce.email, message, url, 'Define your Outcomes');
      }
      res.redirect(`/admin/tools`);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
