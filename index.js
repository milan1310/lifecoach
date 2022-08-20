const express = require("express");
const bodyParser = require("body-parser");
const  cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser())
app.set("view engine", "ejs");

// db
// const connectDB = require("./config/db");
// connectDB();

async function connect(){
  
  await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then((connection) => {
    console.log(`Connected to Mongo database "${connection.connections[0].name}"`)
  })
  .catch((error) => {
    console.error('error connecting to mongo')
    console.error
  })
}
connect()


// Routers
app.use("/register", require("./routers/register"));
app.use("/test", require("./routers/test"));
app.use("/admin", require("./routers/admin"));
app.use('/admin/clients', require('./routers/clients-admin'));
app.use('/client', require('./routers/client'))
app.use('/admin/tools', require('./routers/admin-tools'));
app.use('/tools-url', require('./routers/tools'));

// pages router

// server

app.listen(process.env.PORT || 8080, () => {
  console.log(`App is running on port 3000`);
});
