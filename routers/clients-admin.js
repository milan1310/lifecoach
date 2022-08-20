const router = require("express").Router();
const Client = require("../models/client");
const authController = require("../controllers/authController");
const { v4: uuidv4 } = require("uuid");

// admin/clients/

// get all clients
router.get("/", authController.auth, authController.authRole('Main Admin') , async (req, res) => {
  try {
    let allClients = await Client.find({});
    res.render("admin-clients", {
      clients: allClients,
      pageTitle: "All clients data",
    });
  } catch (error) {
    console.log(error);
  }
});

// get single client
router.get("/client/:uuid",authController.auth, authController.authRole('Main Admin'), async (req, res) => {
  const clientUuid = req.params.uuid;
  try {
    const foundClient = await Client.findOne({ uuid: clientUuid });
    res.render("admin-client", {
      pageTitle: "Client-details",
      uuid: clientUuid,
      user: foundClient,
    });
  } catch (error) {
    console.log(error);
  }
});

// send email to the client
router.post("/send-mail",authController.auth, authController.authRole('Main Admin'), (req, res) => {
  const { email, name, message, type,uuid } = req.body;
  
  url = `https://corporatetrainer.herokuapp.com/client/${type}/${uuid}`;
  
  const sendMail = require("../services/wolemail");

  if(type === 'wol'){
    sendMail(name, email, message, url, 'complete your Life Mastery Circle');
  } else if (type === 'baseline') {
    sendMail(name, email, message, url, 'complete your Core Values');
  } else if (type === 'necodes'){
    sendMail(name, email, message, url, 'complete your N Patterns/E Patterns');
  } else if (type === 'decisionmakingwheel') {
    sendMail(name, email, message, url, 'complete your Decision Making Reckoner');
  } else {
    sendMail(name, email, message, url, 'Define your Outcomes');
  }
  res.redirect(`/admin/clients/client/${uuid}`);
});

// add new client to the list
router.post("/new-client",authController.auth, authController.authRole('Main Admin'), async (req, res) => {
  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    //   res.status(422).render('Vlidation',{pageTitle:"Input Valid Information"});
  }
  try {
    const client = new Client({
      name: name,
      email: email,
      mobileNumber: number,
      uuid: uuidv4(),
    });
    const responce = await client.save();

    res.redirect("/admin/clients/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
