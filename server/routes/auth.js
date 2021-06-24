const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");

require("../db/connection");
router.post("/register", (req, res) => {
  console.log(req.body);
  // res.json({user : req.body})
  const { name, email, work, phone, password, confirmpassword } = req.body;

  if (!name || !email || !work || !phone || !password || !confirmpassword) {
    res.status(400).json({ msg: "Please fill all the details" });
  }
  User.findOne({ email: email })
    .then((userExists) => {
      if (userExists) {
        res.status(400).json({ msg: "User already exists" });
      }
      const user = new User({
        name,
        email,
        work,
        phone,
        password,
        confirmpassword,
      });
      user
        .save()
        .then(() =>
          res.status(200).json({ msg: "user successfully registered" })
        )
        .catch((err) => {
          res.status(500).json({ msg: "unsuccessful registration" });
        });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Unable to register" });
    });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "please fill all the details" });
    }
    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);
    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (userLogin) {
      if (!isMatch) {
        res.status(400).json({ msg: "Invalid credentials" });
      } else {
        res.status(200).json({ msg: "user successfully logged in" });
      }
    } else {
      res.status(400).json({ msg: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
