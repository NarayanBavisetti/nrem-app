const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

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
      user.save().then(() =>
        res.status(200).json({ msg: "user successfully registered" })
      ).catch((err) => {
        res.status(500).json({ msg: "unsuccessful registration" });
      });
    })
    .catch((err) => {
      res.status(500).json({ msg: "Unable to register" });
    });
});

module.exports = router;
