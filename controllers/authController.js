const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

const singToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRATE, {
    expiresIn: process.env.JWT_EXPIREIN,
  });
};

exports.singup = async (req, res) => {
  try {
    const newUser = await Admin.create(req.body);
    const token = singToken(newUser._id);
    res.status(200).json({
      status: "sucess",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.render("Validation", { pageTitle: "Please enter correct info" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // 1)check if id and password exist

  if (!email || !password) {
    res.send(404).json({
      status: "fail",
      message: "username nad password must be requires",
    });
  }

  // 2)chek if user exitst and password is correct
  else {
    const user = await Admin.findOne({ email });

    const correctPassword = await user.password;
    if (correctPassword === password) {
      const token = singToken(user._id);
      // res.status(200).json({
      //     status: "sucess",
      //     message: "Admin login sucessfully",
      //     token
      // })
      res.cookie("jwt", token, { maxAge: 86400 * 15 * 1000 });
      res.redirect("/admin");
    } else {
      res.status(404).json({
        status: "fail",
        message: "userlogin fail bcz id and password not match",
      });
    }
  }
};

exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRATE);
    const freshuser = await Admin.findById(decoded.id);

    if (freshuser) {
      next();
    } else {
      res.redirect("/admin/admin-login");
    }
  } catch (error) {
    res.redirect("/admin/admin-login");
  }
};

exports.authRole = (role) => {
  return async (req, res, next) => {
    try {
      const token = req.cookies.jwt;
      const decoded = jwt.verify(token, process.env.JWT_SECRATE);
      const freshuser = await Admin.findById(decoded.id);
      if (freshuser.role !== role) {
        res.setHeader('Content-Type', 'text/html');
        res.send('<h1>You are not allowed</h1>');
      }else{
          next();
      }
    } catch (error) {
      res.redirect("/admin/admin-login");
    }
  };
};

exports.changePassword = async (req,res) => {
  const password = req.body.password;

  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRATE);

    const user = await Admin.findByIdAndUpdate(decoded.id,{"password":password}, (err, result) => {
      if (err) {
        res.send("<h1>You are not able to update your password right now</h1>")
      } else {
        res.send("<h1>Password Successfully Updated.</h1>")
      }
    });
  } catch (error) {
    res.redirect('/admin');
  }
}

exports.getadminlogout = (req, res) => {
  res.clearCookie("jwt");
  console.log(req.cookies.jwt);
  console.log('logged out');
  res.redirect("/admin");
};
