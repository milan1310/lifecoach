const router = require("express").Router();
const Client = require("../models/client");

// Life Mastery Circle

router.get("/wol/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const foundUser = await Client.findOne({ uuid });
  res.render("wol", { pageTitle: "Life Mastery Circle", uuid: uuid });
});

router.post("/wol", (req, res) => {
  const uuid = req.body.uuid;
  const WOL = [];
  const WOLRates = [];
  const bodyData = Object.entries(req.body);
  for(i=0;i<=bodyData.length;i++){
    if(i%2===0){
      WOLRates.push(bodyData[i]);
    }else{
      WOL.push(bodyData[i]);
    }
  }

  Client.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (foundUser.wheelOfLife.length === 0) {
      try {
        foundUser.wheelOfLife.push(WOL);
        foundUser.wheelOfLifeRates.push(WOLRates);
        await foundUser.save();
        res.render("wol-result", {
          pageTitle: "Result of Life Mastery Circle",
          uuid: uuid,
          msg: "Congratulations you have succefully completed the Life Mastery Circle",
        });
      } catch (error) {
        res.render("Validation", { pageTitle: "input Valid information" });
      }
    } else {
      res.render("wol-result", {
        pageTitle: "you have already done the test",
        uuid: uuid,
        msg: "Your answer is already recordede please see the result here.",
      });
    }
  });
});

// API - endpoint for giving data to js of WOL

router.get("/wol-data", async (req, res) => {
  const uuid = req.query.uuid;
  await Client.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (err) {
      return res.send(err);
    } else {
      res.json({
        status: "success",
        user: foundUser,
      });
    }
  });
});

// baseline

router.get("/baseline/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("baseline", { pageTitle: "Core Values", uuid: uuid });
});

router.post("/baseline/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  Client.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (foundUser.baselines.length === 0) {
      try {
        foundUser.baselines.push(req.body);
        await foundUser.save();
        res.json({
          status: "success",
          user: foundUser,
          message: "You have success fully completed your Core Values.",
        });
      } catch (error) {
        res.json({
          status: "fail",
          err: error,
          message: "Something going wrong! Please re visit after sometime.",
        });
      }
    } else {
      res.json({
        status: "alreadyDone",
        user: foundUser,
        message: "You have already done your Core Values here is your result.",
      });
    }
  });
});

// N codes E codes

router.get("/necodes/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("NEcodes", { pageTitle: "N Patterns/E Patterns", uuid: uuid });
});

router.post("/necodes/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  Client.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (foundUser.necodes.length === 0) {
      try {
        foundUser.necodes.push(req.body);
        await foundUser.save();
        res.json({
          status: "success",
          user: foundUser,
          message: "You have success fully completed your N Patterns/E Patterns.",
        });
      } catch (error) {
        res.json({
          status: "fail",
          err: error,
          message: "Something going wrong! Please re visit after sometime.",
        });
      }
    } else {
      res.json({
        status: "alreadyDone",
        user: foundUser,
        message: "You have already done your N Patterns/E Patterns here is your result.",
      });
    }
  });
});

// decision making wheel
router.get("/decisionmakingwheel/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("decision-making-wheel", {
    pageTitle: "Decision Making Reckoner",
    uuid: uuid,
  });
});

router.post("/decisionmakingwheel/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  Client.findOne({ uuid: uuid }, async (err, foundUser) => {
    if (foundUser.decisionMakingWheel.length === 0) {
      try {
        foundUser.decisionMakingWheel.push(req.body);
        const responce = await foundUser.save();
        const result = responce.decisionMakingWheel[0];
        res.render("decision-wheel-result", {
          pageTitle: "Result of Decision Making Reckoner",
          result
        });
      } catch (error) {
        res.json({
          status: "fail",
          err: error,
          message: "Something going wrong! Please re visit after sometime.",
        });
      }
    } else {
      res.render("decision-wheel-result", {
        pageTitle: "Result of Decision Making Reckoner",
        result: foundUser.decisionMakingWheel[0]
      });
    }
  });
});

// Define My outcome
router.get("/defineoutcome/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.render("define-my-outcome", {
    pageTitle: "Define My Outcome",
    uuid: uuid,
  });
});

router.post('/defineoutcome/:uuid', async(req,res)=> {
   const uuid = req.params.uuid;
    const data = [
      {
        title: req.body.title_1,
        predict: req.body.predict_1,
        Total: req.body.Total_1
      },
      {
        title: req.body.title_2,
        predict: req.body.predict_2,
        Total: req.body.Total_2
      }, 
      {
        title: req.body.title_3,
        predict: req.body.predict_3,
        Total: req.body.Total_3
      }
    ];
    Client.findOne({ uuid: uuid }, async (err, foundUser) => {
      if (foundUser.outcomes.length === 0) {
        try {
          foundUser.outcomes.push(data);
          const responce = await foundUser.save();
          const result = responce.outcomes[0];
          res.render("outcomes-result", {
            pageTitle: "Result of Outcome",
            result
          });
        } catch (error) {
          res.json({
            status: "fail",
            err: error,
            message: "Something going wrong! Please re visit after sometime.",
          });
        }
      } else {
        res.render("outcomes-result", {
          pageTitle: "Result of Your Outcomes",
          result: foundUser.outcomes[0]
        });
      }
    });

});

module.exports = router;
